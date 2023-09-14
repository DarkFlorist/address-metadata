import * as fs from 'fs'
import { tokenList } from './tokenList.js'
import { allowedExtensions, downloadFile, resizeAndConvertToPng } from './utils.js'
import { getAaveV1Tokens, getAaveV2Tokens } from './aave.js'
import { getCompoundV2Tokens } from './compound.js'
import { CACHE, MAX_NFT_IMAGE_HEIGHT, MAX_NFT_IMAGE_WIDTH, OUTPUT_LIB_BASE_DIR, OUTPUT_SRC_DIR } from './constants.js'

const blackListedTokens = new Set<bigint>([])

async function processTokens() {
	if (!fs.existsSync(CACHE)) await fs.promises.mkdir(CACHE)
	console.log('processTokens')
	const tokens = []
	for (const token of tokenList.tokens) {
		if (blackListedTokens.has(BigInt(token.address))) continue
		if (token.logoURI !== undefined) {
			console.log(token.name)
			const fileEnding = token.logoURI.indexOf('?') > 0 ? token.logoURI.substring(0, token.logoURI.indexOf('?')).split('.').pop()?.toLowerCase() : token.logoURI.split('.').pop()?.toLowerCase()
			if (fileEnding === undefined) throw `Invalid logoUrl`
			if (!(allowedExtensions.has(fileEnding))) throw `not allowed extension: '${fileEnding}'`

			const fileLocation = `${ CACHE }/${ token.address }.${ fileEnding }`
			const renamed = `${OUTPUT_LIB_BASE_DIR}/images/tokens/${token.address}.png`
			if (!fs.existsSync(renamed)) {
				console.log(`downloading: ${ fileLocation }: ${ token.logoURI }`)
				try {
					await downloadFile(token.logoURI, fileLocation)
				} catch(e) {
					console.log(e)
					continue
				}
				await resizeAndConvertToPng(fileLocation, MAX_NFT_IMAGE_WIDTH, MAX_NFT_IMAGE_HEIGHT, renamed)
			}
			tokens.push({
				address: token.address,
				data: {
					name: token.name,
					symbol: token.symbol,
					decimals: token.decimals,
					logoUri: `/images/tokens/${token.address}.png`,
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
