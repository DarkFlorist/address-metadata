import * as fs from 'fs'
import * as funtypes from 'funtypes'
import fetch from 'node-fetch'
import { MAX_NFT_IMAGE_HEIGHT, MAX_NFT_IMAGE_WIDTH, MAX_OPENSEA_BATCH_SIZE, NFT_IMAGE_DIR, NFT_OWNER_ADDRESSES, OPENSEA_API_KEY, OPENSEA_GLOBAL_LIMIT, OUTPUT_LIB_BASE_DIR, OUTPUT_SRC_DIR } from './constants';
import { addressString, downloadFile, EthereumAddress, scaleImage } from './utils'

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
					schema_name: funtypes.String,
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
					symbol: asset.symbol,
					protocol: asset.schema_name,
					...logoUri ? {logoUri} : {},
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
		headers: { 'Content-Type': 'application/json', 'X-API-KEY': OPENSEA_API_KEY },
	})).json()
}

async function processNfts() {
	console.log('processNfts')
	const openseaData = await fetchOpenseaFromUsers(NFT_OWNER_ADDRESSES)
	console.log(openseaData)
	const erc721 = openseaData.filter((record) => record.data.protocol === 'ERC721')
	const erc721JsonData = JSON.stringify(erc721.map(( x ) => [addressString(x.address), x.data.name + (x.data.hidden ? '[hidden]' : '') + +(x.data.featured ? '[featured]' : ''), x.data.symbol, x.data.protocol, ...'logoUri' in x.data ? [x.data.logoUri] : []]), null, '\t')
	const erc721TsJsonData = `
export type Address = \`0x$\{string}\`
export type Name = string
export type Symbol = string
export type NftType = 'ERC721'
export type LogoRelativePath = \`/images/nfts/$\{string}\`
export type NftMetadataWithLogo = readonly [Address, Name, Symbol, NftType, LogoRelativePath]
export type NftMetadataWithoutLogo = readonly [Address, Name, Symbol, NftType]

export type NftMetadataData = readonly (NftMetadataWithLogo | NftMetadataWithoutLogo)[]

export const nftMetadataData: NftMetadataData = ${erc721JsonData} as const;`

	fs.writeFileSync(`${OUTPUT_SRC_DIR}/ERC721MetaData.ts`, erc721TsJsonData, 'utf-8')

	const erc1155 = openseaData.filter((record) => record.data.protocol === 'ERC1155')
	const erc1155JsonData = JSON.stringify(erc1155.map(( x ) => [addressString(x.address), x.data.name + (x.data.hidden ? '[hidden]' : '') + +(x.data.featured ? '[featured]' : ''), x.data.symbol, x.data.protocol, ...'logoUri' in x.data ? [x.data.logoUri] : []]), null, '\t')
	const erc1155TsJsonData = `
export type Address = \`0x$\{string}\`
export type Name = string
export type Symbol = string
export type NftType = 'ERC1155'
export type LogoRelativePath = \`/images/nfts/$\{string}\`
export type NftMetadataWithLogo = readonly [Address, Name, Symbol, NftType, LogoRelativePath]
export type NftMetadataWithoutLogo = readonly [Address, Name, Symbol, NftType]

export type NftMetadataData = readonly (NftMetadataWithLogo | NftMetadataWithoutLogo)[]

export const nftMetadataData: NftMetadataData = ${erc1155JsonData} as const;`

	fs.writeFileSync(`${OUTPUT_SRC_DIR}/ERC1155MetaData.ts`, erc1155TsJsonData, 'utf-8')
}

async function main(): Promise<void> {
	return await processNfts()
}

main()
