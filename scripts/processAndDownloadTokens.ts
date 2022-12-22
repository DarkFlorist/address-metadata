import * as fs from 'fs'
import * as path from 'path'
import { tokenList } from './tokenList'
import { allowedExtensions, downloadFile } from './utils'
import { getAaveV1Tokens, getAaveV2Tokens } from './aave'
import { getCompoundV2Tokens } from './compound'

const OUTPUT_LIB_DIR = path.join(__dirname, '..', 'lib')
const OUTPUT_SRC_DIR = path.join(__dirname, '..', 'src')

const blackListedTokens = new Set<bigint>([])

async function processTokens() {
	const tokens = []
	for (const token of tokenList.tokens) {
		if (blackListedTokens.has(BigInt(token.address))) continue
		if (token.logoURI !== undefined) {
			console.log(token.name)
			const fileEnding = token.logoURI.indexOf('?') > 0 ? token.logoURI.substring(0, token.logoURI.indexOf('?')).split('.').pop()?.toLowerCase() : token.logoURI.split('.').pop()?.toLowerCase()
			if (fileEnding === undefined) throw `Invalid logoUrl`
			if (!(allowedExtensions.has(fileEnding))) throw `not allowed extension: '${fileEnding}'`

			const fileLocation = `${OUTPUT_LIB_DIR}/images/tokens/${token.address}.${fileEnding}`
			if (!fs.existsSync(fileLocation)) {
				console.log(`downloading: ${fileLocation}`)
				await downloadFile(token.logoURI, fileLocation)
			}
			tokens.push({
				address: token.address,
				data: {
					name: token.name,
					symbol: token.symbol,
					decimals: token.decimals,
					logoUri: `images/tokens/${token.address}.${fileEnding}`,
				}
			})
		} else {
			tokens.push({
				address: token.address,
				data: {
					name: token.name,
					symbol: token.symbol,
					decimals: token.decimals,
				}
			})
		}
	}
	tokens.push(...await getAaveV2Tokens())
	tokens.push(...await getAaveV1Tokens())
	tokens.push(...await getCompoundV2Tokens())

	const output = `
import * as tokenData from './tokenMetadata.json';
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
`

	const jsonData = JSON.stringify(tokens, null, '\t')
	fs.writeFileSync(`${OUTPUT_SRC_DIR}/tokenMetadata.json`, jsonData, 'utf-8')
	fs.writeFileSync(`${OUTPUT_SRC_DIR}/tokenMetadata.ts`, output, 'utf-8')
}

async function main(): Promise<void> {
	return await processTokens()
}

main()
