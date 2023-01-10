import * as fs from 'fs'
import * as funtypes from 'funtypes'
import path from 'path'
import fetch from 'node-fetch'
import { addressString, downloadFile, EthereumAddress, scaleImage } from './utils'

const NFT_OWNER_ADDRESSES = [
	'0xed2ab4948bA6A909a7751DEc4F34f303eB8c7236',
	'0x994F16B760E5549bDA0e8C9adAB0809552452e76',
	'0x49D20F1b85accA6a58c48cE56F5eED980B047C0a'
]

const MAX_OPENSEA_BATCH_SIZE = 300
const OPENSEA_GLOBAL_LIMIT = 60000 - MAX_OPENSEA_BATCH_SIZE

const MAX_NFT_IMAGE_HEIGHT = 128
const MAX_NFT_IMAGE_WIDTH = 128

const OUTPUT_SRC_DIR = path.join(__dirname, '..', 'src')
const OUTPUT_LIB_BASE_DIR = path.join(__dirname, '..', 'lib')
const NFT_IMAGE_DIR = '/images/nfts/'

interface CleanedNftRecord {
	address: bigint;
	data: {
		name: string;
		symbol: string;
		featured: boolean;
		protocol?: string;
		hidden: boolean;
		logoUri?: string;
	}
}

type OpenseaCollections = funtypes.Static<typeof OpenseaCollections>
const OpenseaCollections = funtypes.Array(
	funtypes.Object({
		image_url: funtypes.String.Or(funtypes.Null),
		name: funtypes.String,
		featured: funtypes.Boolean,
		hidden: funtypes.Boolean,
		stats: funtypes.Object({
			one_day_volume: funtypes.Number,
			seven_day_volume: funtypes.Number,
			thirty_day_volume: funtypes.Number
		}),
		primary_asset_contracts: funtypes.Array(
			funtypes.Object({
					address: EthereumAddress,
					schema_name: funtypes.String.Or(funtypes.Null),
					symbol: funtypes.String,
				}
			)
		)
	})
)

function matchFileInDirectory(imageDirFileList: string[], logoFilename: string) {
	return imageDirFileList.find(imageFilename => imageFilename.startsWith(logoFilename))
}

async function fetchOpenseaFromUsers(nftOwners: string[]) {
	const result: { [address: string]: CleanedNftRecord } = {}
	const imageDirFileList = await fs.promises.readdir(`${OUTPUT_LIB_BASE_DIR}${NFT_IMAGE_DIR}`)
	for (const nftOwner of nftOwners) {
		for (const collection of await queryOpenseaByOwner(nftOwner)) {
			if (collection.primary_asset_contracts.length === 0) continue
			const asset = collection.primary_asset_contracts[0]
			const address = addressString(asset.address)
			if (address in result) continue
			let logoUri: string | undefined = undefined
			if (collection.image_url !== null) {
				const matchedFile = matchFileInDirectory(imageDirFileList, address)
				if (matchedFile) {
					logoUri = `${NFT_IMAGE_DIR}${matchedFile}`
				} else {
					try {
						logoUri = `${NFT_IMAGE_DIR}${address}`
						const targetFile = `${OUTPUT_LIB_BASE_DIR}${logoUri}`
						const addedExtension = await downloadFile(collection.image_url, targetFile, true)
						await scaleImage(`${targetFile}${addedExtension}`, MAX_NFT_IMAGE_WIDTH, MAX_NFT_IMAGE_HEIGHT)
						logoUri = `${logoUri}${addedExtension}`
					} catch (err: unknown) {
						if (err instanceof Error) {
							console.error(`Error downloading ${collection.image_url}`)
							console.error(err.message)
						}
						process.exit(1)
					}
				}
			}
			result[address] = {
				address: asset.address,
				data: {
					name: collection.name,
					hidden: collection.hidden,
					featured: collection.featured,
					protocol: asset.schema_name || undefined,
					symbol: asset.symbol,
					logoUri,
				}
			}
		}
	}
	return Object.values(result)
		.sort((a, b) => a.address < b.address ? -1 : a.address > b.address ? 1 : 0)
}

async function queryOpenseaByOwner(nftOwner: string) {
	let last = 0
	const result: OpenseaCollections = []
	do {
		console.log(`Offset: ${last}`)
		const data = await queryOpenseaPage(nftOwner, last, MAX_OPENSEA_BATCH_SIZE)
		const poolData = OpenseaCollections.parse(data)
		if (poolData.length === 0) {
			break
		}
		result.push(...poolData)
		last += poolData.length
	} while (last < OPENSEA_GLOBAL_LIMIT)
	return result
}

async function queryOpenseaPage(nftOwner: string, offset: number, limit: number) {
	return (await fetch(`https://api.opensea.io/api/v1/collections?asset_owner=${nftOwner}&offset=${offset}&limit=${limit}`, {
		method: 'GET',
		headers: {'Content-Type': 'application/json'},
	})).json()
}

async function processNfts() {
	const openseaData = await fetchOpenseaFromUsers(NFT_OWNER_ADDRESSES)
	console.log(openseaData)

	const jsonData = JSON.stringify(openseaData.map(( x ) => [addressString(x.address), x.data.name + (x.data.hidden ? '[hidden]' : '') + +(x.data.featured ? '[featured]' : ''), x.data.symbol, x.data.protocol, x.data.logoUri]), null, '\t')
	const tsJsonData = `export const nftMetadataData = ${jsonData};`

	fs.writeFileSync(`${OUTPUT_SRC_DIR}/nftMetadataData.ts`, tsJsonData, 'utf-8')
}

async function main(): Promise<void> {
	return await processNfts()
}

main()
