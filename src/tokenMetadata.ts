import { tokenMetadataData } from './tokenMetadataData.js';
export type TokenDefinition = {
	name: string,
	symbol: string,
	decimals: bigint,
	logoUri?: string,
}

export const tokenMetadata = new Map<string, TokenDefinition>(
	tokenMetadataData.reduce(( acc, token ) => {
		if (token.address === null) return acc
		return acc.concat([[token.address, {
			name: token.data.name,
			symbol: token.data.symbol,
			decimals: BigInt(token.data.decimals),
			...'logoUri' in token.data ? {logoUri: token.data.logoUri} : {},
		}]])
	}, [] as [string, TokenDefinition][])
)
