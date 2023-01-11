
export type Address = `0x${string}`
export type Name = string
export type Protocol = 'Uniswap' | 'Uniswap V2' | 'Uniswap V3' | 'ETH2' | 'Arbitrum' | 'Lido' | 'Matic' | 'OpenSea' | '0x' | 'Zapper' | 'Aave'
export type LogoRelativePath = string
export type ContractMetadataDataWithLogo = readonly [Address, Name, Protocol, LogoRelativePath]
export type ContractMetadataDataWithoutLogo = readonly [Address, Name, Protocol]

export type ContractMetadataData = readonly (ContractMetadataDataWithLogo | ContractMetadataDataWithoutLogo)[]

export const contractMetadataData: ContractMetadataData = [
] as const
