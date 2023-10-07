import { providers } from 'ethers'
import * as fs from 'fs'
import { ALCHEMY_API_KEY, CACHE, ETHEREUM_RPC, MAX_NFT_IMAGE_HEIGHT, MAX_NFT_IMAGE_WIDTH, NFT_IMAGE_DIR, OUTPUT_LIB_BASE_DIR, OUTPUT_SRC_DIR } from './constants.js'
import { AlchemyCollection, AlchemyContractMetadataBatch, AlchemyNftSalesPage } from './types.js'
import { addressString, cachedFetchJson, downloadFile, EthereumAddress, resizeAndConvertToPng } from './utils.js'

interface CleanedNftRecord {
	address: bigint
	data: {
		name: string
		symbol: string
		tokenType: string
		logoUri?: string
	}
}

function matchFileInDirectory(imageDirFileList: string[], logoFilename: string) {
	return imageDirFileList.find(imageFilename => imageFilename.startsWith(logoFilename))
}

const processNft = async (collection: AlchemyCollection, imageDirFileList: string[]) => {
	const address = addressString(collection.address)
	let logoUri: string | undefined = undefined
	if (collection.contractMetadata.openSea === undefined) return undefined
	if (collection.contractMetadata.openSea.imageUrl !== undefined) {
		const matchedFile = matchFileInDirectory(imageDirFileList, address)
		if (matchedFile) {
			logoUri = `${ NFT_IMAGE_DIR }${ matchedFile }`
		} else {
			try {
				const targetFile = `${ CACHE }/${ address }`
				const addedExtension = await downloadFile(collection.contractMetadata.openSea.imageUrl, targetFile, true)
				const downloadedFile = `${ targetFile }${ addedExtension }`
				const newFileName = `${ OUTPUT_LIB_BASE_DIR }${ NFT_IMAGE_DIR }${ address }.png`
				await resizeAndConvertToPng(downloadedFile, MAX_NFT_IMAGE_WIDTH, MAX_NFT_IMAGE_HEIGHT, newFileName)
				logoUri = `${ NFT_IMAGE_DIR }${ address }.png`
			} catch (err: unknown) {
				if (err instanceof Error) {
					console.error(`Error downloading ${ collection.contractMetadata.openSea.imageUrl }`)
					console.error(err.message)
				}
				logoUri = undefined
			}
		}
	}
	if (collection.contractMetadata.openSea.collectionName === undefined) {
		console.log(`skipping ${ address }`)
		console.log(collection)
		return undefined
	}
	return({
		address: collection.address,
		data: {
			name: collection.contractMetadata.openSea.collectionName,
			symbol: collection.contractMetadata.symbol || collection.contractMetadata.openSea.collectionName,
			tokenType: collection.contractMetadata.tokenType,
			...logoUri ? { logoUri } : {},
		}
	})
}

const forceAddAddresses = [
	0xd4416b13d2b3a9abae7acd5d6c2bbdbe25686401n //ens
]
async function querySalesNFTs() {
	const result = new Set<EthereumAddress>()
	const nBlocks = 500
	const startBlock = 15034865
	const endBlock = await new providers.StaticJsonRpcProvider(ETHEREUM_RPC).getBlockNumber()
	let currentBlock = startBlock
	while (currentBlock < endBlock) {
		const marketplace = 'seaport'
		const data = await cachedFetchJson(`https://eth-mainnet.g.alchemy.com/nft/v2/${ ALCHEMY_API_KEY }/getNFTSales?order=asc&fromBlock=${ currentBlock }&toBlock=${ currentBlock + 100 }&marketplace=${ marketplace }`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		})
		currentBlock += nBlocks
		const page = AlchemyNftSalesPage.parse(data)
		if (page.nftSales.length === 0) break
		console.log('sales:', currentBlock, '/', endBlock, '(', 100 - (endBlock - currentBlock)/(endBlock - startBlock) * 100, '%)' )
		page.nftSales.forEach((sale) => result.add(sale.contractAddress))
		console.log(`we have ${ result.size } contracts atm`)
	}
	forceAddAddresses.forEach((addr) => result.add(addr))
	return result
}


async function fetchNFTs() {
	const result: { [address: string]: CleanedNftRecord } = {}
	const imageDirFileList = await fs.promises.readdir(`${ OUTPUT_LIB_BASE_DIR }${ NFT_IMAGE_DIR }`)
	console.log('fetchNFTs')
	const nftAddresses = Array.from((await querySalesNFTs()))
	console.log(`got ${ nftAddresses.length } NFT's`)

	const batchSize = 100
	for (let i = 0; i < nftAddresses.length; i += batchSize) {
		const batch = nftAddresses.slice(i, i + batchSize)
		const batchNftContracts = batch.map((n) => addressString(n))
		const data = await cachedFetchJson(`https://eth-mainnet.g.alchemy.com/nft/v2/${ ALCHEMY_API_KEY }/getContractMetadataBatch`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ contractAddresses: batchNftContracts })
		})
		console.log('fetchNFT:',i, '/', nftAddresses.length, '(', i/nftAddresses.length * 100, '%)' )
		const parsed = AlchemyContractMetadataBatch.parse(data)
		const entries = (await Promise.all(parsed.map(async (collection) => await processNft(collection, imageDirFileList))))
		
		entries.forEach((entry) => {
			if (entry === undefined) return
			result[addressString(entry.address)] = entry
		})
	}
	return Object.values(result).sort((a, b) => a.address - b.address ? -1 : a.address > b.address ? 1 : 0)
}

async function processNfts() {
	if (!fs.existsSync(CACHE)) await fs.promises.mkdir(CACHE)
	console.log('processNfts')
	const nfts = await fetchNFTs()
	const erc721 = nfts.filter((record) => record.data.tokenType === 'ERC721')
	const erc721JsonData = JSON.stringify(erc721.map((x) => [addressString(x.address), x.data.name, x.data.symbol, x.data.tokenType, ...'logoUri' in x.data ? [x.data.logoUri] : []]), null, '\t')
	const erc721TsJsonData = `
export type Address = \`0x$\{ string }\`
export type Name = string
export type Symbol = string
export type NftType = 'ERC721'
export type LogoRelativePath = \`/images/nfts/$\{string}\`
export type Erc721MetadataWithLogo = readonly [Address, Name, Symbol, NftType, LogoRelativePath]
export type Erc721MetadataWithoutLogo = readonly [Address, Name, Symbol, NftType]

export type Erc721MetadataData = readonly (Erc721MetadataWithLogo | Erc721MetadataWithoutLogo)[]

export const erc721MetadataData: Erc721MetadataData = ${ erc721JsonData } as const;`

	fs.writeFileSync(`${ OUTPUT_SRC_DIR }/ERC721MetadataData.ts`, erc721TsJsonData, 'utf-8')

	const erc1155 = nfts.filter((record) => record.data.tokenType === 'ERC1155')
	const erc1155JsonData = JSON.stringify(erc1155.map((x) => [addressString(x.address), x.data.name, x.data.symbol, x.data.tokenType, ...'logoUri' in x.data ? [x.data.logoUri] : []]), null, '\t')
	const erc1155TsJsonData = `
export type Address = \`0x$\{ string }\`
export type Name = string
export type Symbol = string
export type NftType = 'ERC1155'
export type LogoRelativePath = \`/images/nfts/$\{ string }\`
export type Erc1155MetadataWithLogo = readonly [Address, Name, Symbol, NftType, LogoRelativePath]
export type Erc1155MetadataWithoutLogo = readonly [Address, Name, Symbol, NftType]

export type Erc1155MetadataData = readonly (Erc1155MetadataWithLogo | Erc1155MetadataWithoutLogo)[]

export const erc1155MetadataData: Erc1155MetadataData = ${ erc1155JsonData } as const;`

	fs.writeFileSync(`${ OUTPUT_SRC_DIR }/ERC1155MetadataData.ts`, erc1155TsJsonData, 'utf-8')
}
async function main(): Promise<void> {
	return await processNfts()
}

main()
