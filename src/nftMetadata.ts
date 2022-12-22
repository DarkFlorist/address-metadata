
import * as nftData from './nftMetadata.json';
export type NftDefinition = {
	name: string,
	symbol: string,
	protocol?: string,
	logoUri?: string | undefined,
}
export const nftMetadata = new Map<string, NftDefinition>(
	nftData.reduce(( acc, [address, name, symbol, protocol, logoUri] ) => {
		if (address === null) return acc
		return acc.concat([
			[address, {
				name: name === null ? 'undefined' : name,
				symbol: symbol === null ? 'undefined' : symbol,
				...protocol ? {protocol} : {},
				...logoUri ? {logoUri} : {},
			}]])
	}, [] as [string, NftDefinition][])
)
