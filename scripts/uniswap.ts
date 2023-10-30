import fetch from 'node-fetch'
import * as funtypes from 'funtypes'
import { addressString, EthereumAddress } from './utils.js'

const uniswapV3Graph = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v3'
const uniswapV2Graph = 'https://api.thegraph.com/subgraphs/name/uniswap/uniswap-v2'

const UNISWAP_LOGO_URI = `images/contracts/uniswap.svg`

const ACTIVE_TX_COUNT_CUTOFF = `10000`

function delay(ms: number) {
	return new Promise(resolve => setTimeout(resolve, ms))
}

async function querySubGraph(subgraph: string, query: string, nRetries: number = 10) {
	for (let retries = 0; retries < nRetries; retries++) {
		try {
			const data = await (await fetch(subgraph, {
				method: 'POST',
				headers: {'Content-Type': 'application/json'},
				body: JSON.stringify({query: query}),
			})).json()
			if ('errors' in data) throw data.errors
			return data
		} catch (error) {
			console.log(error)
			await delay(1000 * retries)
		}
	}
	throw `failed after ${nRetries} retries`
}

type UniswapV3PoolData = funtypes.Static<typeof UniswapV3PoolData>
const UniswapV3PoolData =
	funtypes.Object({
		data: funtypes.Object({
			pools: funtypes.Array(
				funtypes.Object({
					id: EthereumAddress,
					token0: funtypes.Object({
						id: EthereumAddress,
						symbol: funtypes.String
					}),
					token1: funtypes.Object({
						id: EthereumAddress,
						symbol: funtypes.String
					})
				})
			)
		})
	}).asReadonly()

type UniswapV2PoolData = funtypes.Static<typeof UniswapV2PoolData>
const UniswapV2PoolData =
	funtypes.Object({
		data: funtypes.Object({
			pairs: funtypes.Array(
				funtypes.Object({
					id: EthereumAddress,
					token0: funtypes.Object({
						id: EthereumAddress,
						symbol: funtypes.String
					}),
					token1: funtypes.Object({
						id: EthereumAddress,
						symbol: funtypes.String
					})
				})
			)
		})
	}).asReadonly()

export async function fetchV3Pools() {
	console.log('fetchV3Pools')
	let allPools = []
	let last = 0n
	do {
		const query = `{
			pools(orderBy: id, first: 500, where: { txCount_gt: ${ ACTIVE_TX_COUNT_CUTOFF }, id_gt: "${addressString(last)}" }) {
				id,
				token0 {
					id,
					symbol
				},
				token1 {
					id,
					symbol
				}
			}
		}
		`
		const data = await querySubGraph(uniswapV3Graph, query)
		const poolData = UniswapV3PoolData.parse(data)
		if (poolData.data.pools.length === 0) break
		allPools.push(...poolData.data.pools)
		last = poolData.data.pools[poolData.data.pools.length - 1].id
		console.log(addressString(last))
	} while (true)

	return allPools.map((pool) => {
		return {
			address: pool.id,
			data: {
				name: `Uniswap V3 Pool: ${pool.token0.symbol} - ${pool.token1.symbol}`, //todo, would be better to use addresses and fetch the names from our curated list
				logoUri: UNISWAP_LOGO_URI,
				protocol: 'Uniswap V3'
			}
		}
	})
}

export async function fetchV2Pools() {
	console.log('fetchV2Pools')
	let allPairs = []
	let last = 0n
	do {
		const query = `{
			pairs(orderBy: id, first: 500, where: { txCount_gt: ${ ACTIVE_TX_COUNT_CUTOFF }, id_gt: "${addressString(last)}" }) {
				id,
				token0 {
					id,
					symbol
				},
				token1 {
					id,
					symbol
				}
			}
		}
		`
		const data = await querySubGraph(uniswapV2Graph, query)
		const poolData = UniswapV2PoolData.parse(data)
		if (poolData.data.pairs.length === 0) break
		allPairs.push(...poolData.data.pairs)
		last = poolData.data.pairs[poolData.data.pairs.length - 1].id
		// break
		console.log(addressString(last))
	} while (true)
	return allPairs.map((pair) => ({
		address: pair.id,
		data: {
			name: `Uniswap V2 Pair: ${pair.token0.symbol} - ${pair.token1.symbol}`, //todo, would be better to use addresses and fetch the names from our curated list
			logoUri: UNISWAP_LOGO_URI,
			protocol: 'Uniswap V2'
		}
	}))
}

export async function getUniswapMiscAddresses() {
	const addresses = [
		['Uniswap V3 Factory', 0x1F98431c8aD98523631AE4a59f267346ea31F984n],
		['Uniswap Multicall2', 0x5BA1e12693Dc8F9c48aAD8770482f4739bEeD696n],
		['Uniswap ProxyAdmin', 0xB753548F6E010e7e680BA186F9Ca1BdAB2E90cf2n],
		['Uniswap TickLens', 0xbfd8137f7d1516D3ea5cA83523914859ec47F573n],
		['Uniswap Quoter', 0xb27308f9F90D607463bb33eA1BeBb41C27CE5AB6n],
		['Uniswap Swap Router', 0xE592427A0AEce92De3Edee1F18E0157C05861564n],
		['Uniswap Swap Router 02 (1.1.0)', 0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45n],
		['Uniswap NFTDescriptor', 0x42B24A95702b9986e82d421cC3568932790A48Ecn],
		['Uniswap NonfungibleTokenPositionDescriptor', 0x91ae842A5Ffd8d12023116943e72A606179294f3n],
		['Uniswap TransparentUpgradeableProxy', 0xEe6A57eC80ea46401049E92587E52f5Ec1c24785n],
		['Uniswap NonfungiblePositionManager', 0xC36442b4a4522E871399CD717aBDD847Ab11FE88n],
		['Uniswap V3 Migrator', 0xA5644E29708357803b5A882D272c41cC0dF92B34n],
		['Uniswap Uniswap V3 Staker (1.0.2)', 0xe34139463bA50bD61336E0c446Bd8C0867c6fE65n],

		['Uniswap V2 Factory', 0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6fn],
		['Uniswap V2 Router 01', 0xf164fC0Ec4E93095b804a4795bBe1e041497b92an],
		['Uniswap V2 Router 02', 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488Dn],
		['Uniswap V2 Router 02', 0x7a250d5630B4cF539739dF2C5dAcb4c659F2488Dn],
		['Uniswap Permit2', 0x000000000022d473030f116ddee9f6b43ac78ba3n],
		['Uniswap Universal Router', 0x3fC91A3afd70395Cd496C647d5a6CC9D4B2b7FADn],
	] as const
	return addresses.map(([name, address]) => ({
		address: address,
		data: {
			name: name,
			logoUri: UNISWAP_LOGO_URI,
			protocol: 'Uniswap'
		}
	}))
}
