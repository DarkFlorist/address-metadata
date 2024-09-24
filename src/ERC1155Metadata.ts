import { erc1155MetadataData } from './ERC1155MetadataData.js'
export type Erc1155Definition = {
	name: string,
	symbol: string,
	protocol: string,
	logoUri?: string | undefined,
	abi?: string,
}
export const erc1155Metadata = new Map<string, Erc1155Definition>(
	erc1155MetadataData.reduce(( acc, [address, name, symbol, protocol, logoUri, abi] ) => {
		if (address === null) return acc
		return acc.concat([
			[address, {
				protocol,
				name,
				symbol,
				...logoUri ? {logoUri} : {},
				...abi ? { abi } : { },
			}]])
	}, [] as [string, Erc1155Definition][])
)
