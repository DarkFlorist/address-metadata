import { fetchV2Pools, fetchV3Pools, getUniswapMiscAddresses } from './uniswap'
import { addressString } from './utils'
import * as fs from 'fs'
import * as path from 'path'
import { getAaveV2Misc } from './aave'
import { getMiscAddresses } from './miscContracts'

const OUTPUT_SRC_DIR = path.join(__dirname, '..', 'src')

async function processContracts() {
	const contractData =
		[
			...await fetchV2Pools(),
			...await fetchV3Pools(),
			...await getUniswapMiscAddresses(),
			...await getMiscAddresses(),
			...await getAaveV2Misc()
		]

	const jsonData = JSON.stringify(contractData.map(( x) => [addressString(x.address), x.data.name, x.data.protocol, ...'logoUri' in x.data ? [x.data.logoUri] : []]), null, '\t')
	const tsJsonData = `
export type Address = \`0x$\{string}\`
export type Name = string
export type Protocol = 'Uniswap' | 'Uniswap V2' | 'Uniswap V3' | 'ETH2' | 'Arbitrum' | 'Lido' | 'Matic' | 'OpenSea' | '0x' | 'Zapper' | 'Aave'
export type LogoRelativePath = string
export type ContractMetadataWithLogo = readonly [Address, Name, Protocol, LogoRelativePath]
export type ContractMetadataWithoutLogo = readonly [Address, Name, Protocol]

export type ContractMetadata = readonly (ContractMetadataWithLogo | ContractMetadataWithoutLogo)[]

export const contractMetadataData: ContractMetadata = ${jsonData} as const`
	fs.writeFileSync(`${OUTPUT_SRC_DIR}/contractMetadataData.ts`, tsJsonData, 'utf-8')
}

async function main(): Promise<void> {
	return await processContracts()
}

main()
