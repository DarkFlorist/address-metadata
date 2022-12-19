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
	const output = `
import * as contractData from './contractMetadata.json';
export type ContractDefinition = {
    name: string,
    logoURI: string | undefined,
    protocol: string | undefined
}
export const contractMetadata = new Map<string, ContractDefinition>(
    contractData.map( ([address, name, protocol, logoURI]) => [address, {
      name: name,
      protocol: protocol,
      logoURI: logoURI === null ? undefined : logoURI
    }])
)
`
	fs.writeFileSync(`${OUTPUT_SRC_DIR}/contractMetadata.json`, JSON.stringify(contractData.map((x) => [addressString(x.address), x.data.name, x.data.protocol, x.data.logoURI]), null, '\t'), 'utf-8')
	fs.writeFileSync(`${OUTPUT_SRC_DIR}/contractMetadata.ts`, output, 'utf-8')
}

async function main(): Promise<void> {
	return await processContracts()
}

main()
