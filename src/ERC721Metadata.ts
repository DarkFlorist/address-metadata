import { erc721MetadataData } from './ERC721MetadataData.js'
export type Erc721Definition = {
	name: string,
	symbol: string,
	protocol: string,
	logoUri?: string | undefined,
	abi?: string,
}
export const erc721Metadata = new Map<string, Erc721Definition>(
	erc721MetadataData.reduce(( acc, [address, name, symbol, protocol, logoUri, abi] ) => {
		if (address === null) return acc
		return acc.concat([
			[address, {
				protocol,
				name,
				symbol,
				...logoUri ? {logoUri} : {},
				...abi ? { abi } : { },
			}]])
	}, [] as [string, Erc721Definition][])
)
