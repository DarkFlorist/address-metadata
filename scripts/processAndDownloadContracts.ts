import { fetchV2Pools, fetchV3Pools, getUniswapMiscAddresses } from './uniswap.js'
import { addressString, compareBigInt } from './utils.js'
import * as fs from 'fs'
import * as path from 'path'
import { getAaveV2Misc } from './aave.js'
import { getMiscAddresses } from './miscContracts.js'
import { getENSAddresses } from './ens.js'

const OUTPUT_SRC_DIR = path.join(__dirname, '../..', 'src')

type Contract = {
	address: bigint
	data: {
		name: string,
		protocol: string,
		logoUri?: string,
		abi?: string,
	}
}

async function processContracts() {
	console.log('processContracts')
	const contractData: readonly Contract[] =
		[
			...await fetchV2Pools(),
			...await fetchV3Pools(),
			...await getUniswapMiscAddresses(),
			...await getMiscAddresses(),
			...await getAaveV2Misc(),
			...await getENSAddresses()
		].sort((a, b) => compareBigInt(a.address, b.address))

	const jsonData = JSON.stringify(contractData.map((x) => [addressString(x.address), x.data.name, x.data.protocol, ...'logoUri' in x.data ? [x.data.logoUri] : [], ...'abi' in x.data ? [x.data.abi] : []]), null, '\t')
	const tsJsonData = `
export type Address = \`0x$\{string}\`
export type Name = string
export type Protocol = 'Uniswap' | 'Uniswap V2' | 'Uniswap V3' | 'ETH2' | 'Arbitrum' | 'Lido' | 'Matic' | 'OpenSea' | '0x' | 'Zapper' | 'Aave' | 'ENS'
export type LogoRelativePath = string
export type Abi = string
export type ContractMetadataDataWithLogoAndAbi = readonly [Address, Name, Protocol, LogoRelativePath, Abi]
export type ContractMetadataDataWithLogo = readonly [Address, Name, Protocol, LogoRelativePath]
export type ContractMetadataDataWithoutLogo = readonly [Address, Name, Protocol]

export type ContractMetadataData = readonly (ContractMetadataDataWithLogo | ContractMetadataDataWithoutLogo | ContractMetadataDataWithLogoAndAbi)[]

export const contractMetadataData: ContractMetadataData = ${jsonData} as const`
	fs.writeFileSync(`${OUTPUT_SRC_DIR}/contractMetadataData.ts`, tsJsonData, 'utf-8')
}

async function main(): Promise<void> {
	return await processContracts()
}

main()
