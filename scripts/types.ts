
import * as funtypes from 'funtypes'
import { EthereumAddress } from './utils.js'

// not complete description
export type AlchemyNftSalesPage = funtypes.Static<typeof AlchemyNftSalesPage>
export const AlchemyNftSalesPage = funtypes.Object({
	nftSales: funtypes.ReadonlyArray(
		funtypes.Object({
			marketplace: funtypes.String,
			marketplaceAddress: EthereumAddress,
			contractAddress: EthereumAddress,
			tokenId: funtypes.String,
			quantity: funtypes.String,
			buyerAddress: funtypes.String,
			sellerAddress: funtypes.String,
			taker: funtypes.String,
			sellerFee:  funtypes.Object({}),
			protocolFee: funtypes.Object({}),
			royaltyFee: funtypes.Object({}),
			blockNumber: funtypes.Number,
			logIndex: funtypes.Number,
			bundleIndex: funtypes.Number,
			transactionHash: funtypes.String
		}),
	),
	validAt: funtypes.Object({
		blockNumber: funtypes.Number,
		blockHash: funtypes.String,
		blockTimestamp: funtypes.String,
	}),
	pageKey: funtypes.Union(funtypes.String, funtypes.Null, funtypes.Undefined),
})


export type AlchemyCollection = funtypes.Static<typeof AlchemyCollection>
export const AlchemyCollection = funtypes.ReadonlyObject({
	address: EthereumAddress,
	contractMetadata: funtypes.ReadonlyObject({
		name: funtypes.Union(funtypes.String, funtypes.Undefined),
		symbol: funtypes.Union(funtypes.String, funtypes.Undefined),
		totalSupply: funtypes.Union(funtypes.String, funtypes.Undefined),
		tokenType: funtypes.String,
		contractDeployer: funtypes.Union(EthereumAddress, funtypes.Undefined),
		deployedBlockNumber: funtypes.Union(funtypes.Number, funtypes.Undefined),
		openSea: funtypes.Union(funtypes.Undefined, funtypes.ReadonlyObject({
			floorPrice: funtypes.Union(funtypes.Number, funtypes.Undefined),
			collectionName: funtypes.Union(funtypes.String, funtypes.Undefined),
			collectionSlug: funtypes.Union(funtypes.String, funtypes.Undefined),
			safelistRequestStatus: funtypes.Union(funtypes.String, funtypes.Undefined),
			imageUrl: funtypes.Union(funtypes.String, funtypes.Undefined),
			description: funtypes.Union(funtypes.String, funtypes.Undefined),
			externalUrl: funtypes.Union(funtypes.String, funtypes.Undefined),
			twitterUsername: funtypes.Union(funtypes.String, funtypes.Undefined),
			discordUrl: funtypes.Union(funtypes.String, funtypes.Undefined),
			bannerImageUrl: funtypes.Union(funtypes.String, funtypes.Undefined),
			lastIngestedAt: funtypes.Union(funtypes.String, funtypes.Undefined),
		}))
	})
})

export type AlchemyContractMetadataBatch = funtypes.Static<typeof AlchemyContractMetadataBatch>
export const AlchemyContractMetadataBatch = funtypes.ReadonlyArray(AlchemyCollection)
