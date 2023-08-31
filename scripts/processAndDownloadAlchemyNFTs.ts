import * as fs from 'fs'
import { ALCHEMY_API_KEY, MAX_NFT_IMAGE_HEIGHT, MAX_NFT_IMAGE_WIDTH, NFT_IMAGE_DIR, OUTPUT_LIB_BASE_DIR, OUTPUT_SRC_DIR } from './constants';
import { AlchemyContractMetadataBatch, AlchemyNftSalesPage } from './types';
import { addressString, cachedFetchJson, downloadFile, EthereumAddress, scaleImage } from './utils'

interface CleanedNftRecord {
	address: bigint;
	data: {
		name: string;
		symbol: string;
		tokenType: string;
		logoUri?: string;
	}
}


function matchFileInDirectory(imageDirFileList: string[], logoFilename: string) {
	return imageDirFileList.find(imageFilename => imageFilename.startsWith(logoFilename))
}

async function fetchNFTs() {
	const result: { [address: string]: CleanedNftRecord } = {}
	const imageDirFileList = await fs.promises.readdir(`${OUTPUT_LIB_BASE_DIR}${NFT_IMAGE_DIR}`)
	console.log('fetchNFTs')
	const nftAddresses = Array.from(await querySalesNFTs())
	console.log(`got ${ nftAddresses.length } NFT's`)

	const batchSize = 100
	for (let i = 0; i < nftAddresses.length; i += batchSize) {
		const batch = nftAddresses.slice(i, i + batchSize)
		const batchNftContracts = batch.map((n) => addressString(n))
		console.log(batchNftContracts)
		const data = await cachedFetchJson(`https://eth-mainnet.g.alchemy.com/nft/v2/${ ALCHEMY_API_KEY }/getContractMetadataBatch`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ contractAddresses: batchNftContracts })
		})
		console.log(data)
		const parsed = AlchemyContractMetadataBatch.parse(data)
		for (const collection of parsed) {
			const address = addressString(collection.address)
			if (address in result) continue
			let logoUri: string | undefined = undefined
			if (collection.contractMetadata.openSea.imageUrl !== undefined) {
				const matchedFile = matchFileInDirectory(imageDirFileList, address)
				if (matchedFile) {
					logoUri = `${NFT_IMAGE_DIR}${matchedFile}`
				} else {
					try {
						logoUri = `${NFT_IMAGE_DIR}${address}`
						const targetFile = `${OUTPUT_LIB_BASE_DIR}${logoUri}`
						const addedExtension = await downloadFile(collection.contractMetadata.openSea.imageUrl, targetFile, true)
						await scaleImage(`${targetFile}${addedExtension}`, MAX_NFT_IMAGE_WIDTH, MAX_NFT_IMAGE_HEIGHT)
						logoUri = `${logoUri}${addedExtension}`
					} catch (err: unknown) {
						if (err instanceof Error) {
							console.error(`Error downloading ${collection.contractMetadata.openSea.imageUrl}`)
							console.error(err.message)
						}
						process.exit(1)
					}
				}
			}
			if(collection.contractMetadata.name === undefined || collection.contractMetadata.symbol === undefined) {
				console.log(`skipping ${ address }`)
				console.log(collection)
				continue
			}
			result[address] = {
				address: collection.address,
				data: {
					name: collection.contractMetadata.name,
					symbol: collection.contractMetadata.symbol,
					tokenType: collection.contractMetadata.tokenType,
					...logoUri ? { logoUri } : {},
				}
			}
		}
	}
	console.log(result)
	return Object.values(result).sort((a, b) => a.address < b.address ? -1 : a.address > b.address ? 1 : 0)

}

async function querySalesNFTs() {
	const result = new Set<EthereumAddress>()
	let pageKey = ''
	do {
		const data = await cachedFetchJson(`https://eth-mainnet.g.alchemy.com/nft/v2/${ ALCHEMY_API_KEY }/getNFTSales?fromBlock=0&toBlock=latest&order=asc${ pageKey.length > 0 ? `&pageKey=${ pageKey }` : '' }`, {
			method: 'GET',
			headers: { 'Content-Type': 'application/json' },
		})
		console.log(data)
		const page = AlchemyNftSalesPage.parse(data)
		console.log(`got ${ page.nftSales.length } sales`)
		if (page.nftSales.length === 0) break
		page.nftSales.forEach((sale) => result.add(sale.contractAddress))
		console.log(`we have ${ result.size } contracts atm`)
		if (page.pageKey === null) break
		pageKey = page.pageKey
	} while (true)
	return result
}

async function processNfts() {
	console.log('processNfts')
	const openseaData = await fetchNFTs()
	console.log(openseaData)
	const erc721 = openseaData.filter((record) => record.data.tokenType === 'ERC721')
	const erc721JsonData = JSON.stringify(erc721.map(( x ) => [addressString(x.address), x.data.name, x.data.symbol, x.data.tokenType, ...'logoUri' in x.data ? [x.data.logoUri] : []]), null, '\t')
	const erc721TsJsonData = `
export type Address = \`0x$\{string}\`
export type Name = string
export type Symbol = string
export type NftType = 'ERC721'
export type LogoRelativePath = \`/images/nfts/$\{string}\`
export type Erc721MetadataWithLogo = readonly [Address, Name, Symbol, NftType, LogoRelativePath]
export type Erc721MetadataWithoutLogo = readonly [Address, Name, Symbol, NftType]

export type Erc721MetadataData = readonly (Erc721MetadataWithLogo | Erc721MetadataWithoutLogo)[]

export const Erc721MetadataData: Erc721MetadataData = ${erc721JsonData} as const;`

	fs.writeFileSync(`${OUTPUT_SRC_DIR}/ERC721MetaData.ts`, erc721TsJsonData, 'utf-8')

	const erc1155 = openseaData.filter((record) => record.data.tokenType === 'ERC1155')
	const erc1155JsonData = JSON.stringify(erc1155.map(( x ) => [addressString(x.address), x.data.name, x.data.symbol, x.data.tokenType, ...'logoUri' in x.data ? [x.data.logoUri] : []]), null, '\t')
	const erc1155TsJsonData = `
export type Address = \`0x$\{string}\`
export type Name = string
export type Symbol = string
export type NftType = 'ERC1155'
export type LogoRelativePath = \`/images/nfts/$\{string}\`
export type Erc1155MetadataWithLogo = readonly [Address, Name, Symbol, NftType, LogoRelativePath]
export type Erc1155MetadataWithoutLogo = readonly [Address, Name, Symbol, NftType]

export type Erc1155MetadataData = readonly (Erc1155MetadataWithLogo | Erc1155MetadataWithoutLogo)[]

export const erc1155MetadataData: NftMetadataData = ${erc1155JsonData} as const;`

	fs.writeFileSync(`${OUTPUT_SRC_DIR}/ERC1155MetaData.ts`, erc1155TsJsonData, 'utf-8')

	const unknown = openseaData.filter((record) => record.data.tokenType !== 'ERC1155' && record.data.tokenType !== 'ERC721')
	const unknownJsonData = JSON.stringify(unknown.map(( x ) => [addressString(x.address), x.data.name, x.data.symbol, x.data.tokenType, ...'logoUri' in x.data ? [x.data.logoUri] : []]), null, '\t')
	const unknownTsJsonData = `
export type Address = \`0x$\{string}\`
export type Name = string
export type Symbol = string
export type NftType = string
export type LogoRelativePath = \`/images/nfts/$\{string}\`
export type UnknownNftMetadataWithLogo = readonly [Address, Name, Symbol, NftType, LogoRelativePath]
export type UnknownNftMetadataWithoutLogo = readonly [Address, Name, Symbol, NftType]

export type UnknownNftMetadataData = readonly (UnknownNftMetadataWithLogo | UnknownNftMetadataWithoutLogo)[]

export const unknownNftMetadataData: UnknownNftMetadataData = ${unknownJsonData} as const;`

	fs.writeFileSync(`${OUTPUT_SRC_DIR}/unknownNFTMetaData.ts`, unknownTsJsonData, 'utf-8')
}

async function main(): Promise<void> {
	return await processNfts()
}

main()
