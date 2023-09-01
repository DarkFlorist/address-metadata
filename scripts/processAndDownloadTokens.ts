import * as fs from 'fs'
import { tokenList } from './tokenList.js'
import { allowedExtensions, downloadFile } from './utils.js'
import { getAaveV1Tokens, getAaveV2Tokens } from './aave.js'
import { getCompoundV2Tokens } from './compound.js'
import { OUTPUT_LIB_BASE_DIR, OUTPUT_SRC_DIR } from './constants.js'

const blackListedTokens = new Set<bigint>([])

async function processTokens() {
	console.log('processTokens')
	const tokens = []
	for (const token of tokenList.tokens) {
		if (blackListedTokens.has(BigInt(token.address))) continue
		if (token.logoURI !== undefined) {
			console.log(token.name)
			const fileEnding = token.logoURI.indexOf('?') > 0 ? token.logoURI.substring(0, token.logoURI.indexOf('?')).split('.').pop()?.toLowerCase() : token.logoURI.split('.').pop()?.toLowerCase()
			if (fileEnding === undefined) throw `Invalid logoUrl`
			if (!(allowedExtensions.has(fileEnding))) throw `not allowed extension: '${fileEnding}'`

			const fileLocation = `${OUTPUT_LIB_BASE_DIR}/images/tokens/${token.address}.${fileEnding}`
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

	const jsonData = JSON.stringify(tokens, null, '\t')
	const tsJsonDoc = `
export type TokenMetadataData = {
	address: string
	data: {
		name: string
		symbol: string
		decimals: number
		logoUri?: string
	}
}
export const tokenMetadataData: Array<TokenMetadataData> = ${ jsonData }`

	fs.writeFileSync(`${OUTPUT_SRC_DIR}/tokenMetadataData.ts`, tsJsonDoc, 'utf-8')
}

async function main(): Promise<void> {
	return await processTokens()
}

main()
