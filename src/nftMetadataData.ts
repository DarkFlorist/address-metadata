
export type Address = `0x${string}`
export type Name = string
export type Symbol = string
export type NftType = 'ERC721' | 'ERC1155' | 'CRYPTOPUNKS'
export type LogoRelativePath = `/images/nfts/${string}`
export type NftMetadataWithLogo = readonly [Address, Name, Symbol, NftType, LogoRelativePath]
export type NftMetadataWithoutLogo = readonly [Address, Name, Symbol, NftType]

export type NftMetadataData = readonly (NftMetadataWithLogo | NftMetadataWithoutLogo)[]

export const nftMetadataData: NftMetadataData = [
] as const;
