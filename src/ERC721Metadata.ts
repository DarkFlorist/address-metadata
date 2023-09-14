import { erc721MetadataData } from './ERC721MetadataData.js'
export type Erc721Definition = {
	name: string,
	symbol: string,
	protocol: string,
	logoUri?: string | undefined,
}
export const erc721Metadata = new Map<string, Erc721Definition>(
	erc721MetadataData.reduce(( acc, [address, name, symbol, protocol, logoUri] ) => {
		if (address === null) return acc
		return acc.concat([
			[address, {
				protocol,
				name,
				symbol,
				...logoUri ? {logoUri} : {},
			}]])
	}, [] as [string, Erc721Definition][])
)
