import { contractMetadataData } from './contractMetadataData.js';
export type ContractDefinition = {
	name: string,
	logoUri?: string,
	protocol?: string,
}
export const contractMetadata = new Map<string, ContractDefinition>(
	contractMetadataData.reduce(( acc, [address, name, protocol, logoUri] ) => {
		if (!address || !name) return acc
		return acc.concat([
			[address, {
				name: name,
				...protocol ? {protocol} : {},
				...logoUri ? {logoUri} : {},
			}]])
	}, [] as [string, ContractDefinition][])
)
