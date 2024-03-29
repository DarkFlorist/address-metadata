import * as funtypes from 'funtypes'
import https from 'https'
import fs from 'fs'
import sharp from 'sharp'
import { keccak256, toUtf8Bytes } from 'ethers/lib/utils'
import { CACHE } from './constants.js'

export const allowedExtensions = new Set(['png', 'jpg', 'jpeg', 'ico', 'gif', 'svg', 'webp', 'svg+xml'])

export function addressString(address: bigint) {
	return `0x${address.toString(16).padStart(40, '0')}`
}

const AddressParser: funtypes.ParsedValue<funtypes.String, bigint>['config'] = {
	parse: value => {
		if (!/^0x([a-fA-F0-9]{40})$/.test(value)) return {
			success: false,
			message: `${value} is not a hex string encoded address.`
		}
		else return {success: true, value: BigInt(value)}
	},
	serialize: value => {
		if (typeof value !== 'bigint') return {success: false, message: `${typeof value} is not a biginfuntypes.`}
		return {success: true, value: `0x${value.toString(16).padStart(40, '0')}`}
	},
}

export const EthereumAddress = funtypes.String.withParser(AddressParser)
export type EthereumAddress = funtypes.Static<typeof EthereumAddress>

function extractExtensionFromContentType(contentType: string | string[] | undefined) {
	if (contentType === undefined || Array.isArray(contentType)) throw new Error('No Content-Type while populating extension')
	if (allowedExtensions.has(contentType)) {
		return contentType
	}
	const extensionIndex = contentType.lastIndexOf('/')
	if (extensionIndex === -1) throw new Error('Content-Type missing extension: ' + contentType)
	const fileExtension = contentType.substring(extensionIndex + 1)
	if (!allowedExtensions.has(fileExtension)) throw new Error('Bad extension: ' + fileExtension)
	return fileExtension
}

export async function downloadFile(url: string, targetFile: string, populateExtension = false) {
	let maxRedirects = 5
	return await new Promise<string>((resolve, reject) => {
		https.get(url, response => {
			const code = response.statusCode ?? 0
			if (code >= 400) {
				return reject(new Error(response.statusMessage))
			}
			// handle redirects
			if (code > 300 && code < 400 && !!response.headers.location) {
				maxRedirects--
				if (maxRedirects <= 0) throw `too many redirects`
				return downloadFile(response.headers.location, targetFile, populateExtension)
			}

			let addedExtension: string
			try {
				addedExtension = populateExtension ? '.' + extractExtensionFromContentType(response.headers['content-type']) : ''
			} catch (e) {
				return reject(e)
			}
			console.log('write', targetFile + addedExtension)
			const fileWriter = fs.createWriteStream(targetFile + addedExtension).on('finish', () => {
				resolve(addedExtension)
			})
			response.pipe(fileWriter)
		}).on('error', error => {
			reject(error)
		})
	})
}

export async function resizeAndConvertToPng(imageFileToResize: string, width: number, height: number, newFileName: string) {
	try {
		await sharp(await fs.promises.readFile(imageFileToResize))
			.resize(width)
			.resize(width, height, { withoutEnlargement: true })
			.toFormat('png')
			.toFile(newFileName)
	} finally {
		if (fs.existsSync(newFileName)) {
			const testImage = await fs.promises.readFile(newFileName)
			if (testImage.byteLength === 0) {
				await fs.promises.rm(newFileName)
				throw new Error('the file length was zero')
			}
		}
	}
}

export async function cachedFetchJson(url: RequestInfo, init: RequestInit): Promise<unknown> {
	const input = url.toString() + '|' + JSON.stringify(init.body)
	const hash = keccak256(toUtf8Bytes(input))
	const file = `${ CACHE }/${ hash }.json`
	if (fs.existsSync(file)) return JSON.parse(fs.readFileSync(file, 'utf8'))
	console.log('cache miss', file, input)
	const data = await (await fetch(url, init)).json()
	fs.writeFileSync(file, JSON.stringify(data), 'utf8')
	return data
}
export const compareBigInt = (a: bigint, b: bigint) => {
  if (a === b) return 0
  return a > b ? 1 : -1
}
