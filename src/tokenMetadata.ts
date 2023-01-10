
import tokenData from './tokenMetadataData';
export type TokenDefinition = {
	name: string,
	symbol: string,
	decimals: bigint,
	logoUri?: string,
}

export const tokenMetadata = new Map<string, TokenDefinition>(
	tokenData.reduce(( acc, token ) => {
		if (token.address === null) return acc
		return [[token.address, {
			name: token.data.name,
			symbol: token.data.symbol,
			decimals: BigInt(token.data.decimals),
			...'logoUri' in token.data ? {logoUri: token.data.logoUri} : {},
		}]];
	}, [] as [string, TokenDefinition][]));
