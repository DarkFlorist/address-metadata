
export type Address = `0x${string}`
export type Name = string
export type Protocol = 'Uniswap' | 'Uniswap V2' | 'Uniswap V3' | 'ETH2' | 'Arbitrum' | 'Lido' | 'Matic' | 'OpenSea' | '0x' | 'Zapper' | 'Aave'
export type LogoRelativePath = string
export type ContractMetadataWithLogo = readonly [Address, Name, Protocol, LogoRelativePath]
export type ContractMetadataWithoutLogo = readonly [Address, Name, Protocol]

export type ContractMetadata = readonly (ContractMetadataWithLogo | ContractMetadataWithoutLogo)[]

export const contractMetadataData: ContractMetadata = [
] as const
