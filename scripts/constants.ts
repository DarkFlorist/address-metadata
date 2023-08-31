
import path from 'path'

export const NFT_OWNER_ADDRESSES = [
	'0xed2ab4948bA6A909a7751DEc4F34f303eB8c7236',
	'0x994F16B760E5549bDA0e8C9adAB0809552452e76',
	'0x49D20F1b85accA6a58c48cE56F5eED980B047C0a'
]

export const MAX_OPENSEA_BATCH_SIZE = 300
export const OPENSEA_GLOBAL_LIMIT = 60000 - MAX_OPENSEA_BATCH_SIZE

export const MAX_NFT_IMAGE_HEIGHT = 128
export const MAX_NFT_IMAGE_WIDTH = 128

export const OUTPUT_SRC_DIR = path.join(__dirname, '../..', 'src')
export const OUTPUT_LIB_BASE_DIR = path.join(__dirname, '../..', 'lib')
export const NFT_IMAGE_DIR = '/images/nfts/'

export const ETHEREUM_RPC = process.env.ETHEREUM_RPC || 'https://rpc.dark.florist/flipcardtrustone'
export const OPENSEA_API_KEY = process.env.OPENSEA_API_KEY || '993906e26575457bb795cfde1b7e2762'
export const ALCHEMY_API_KEY = 'vy9QK3DT-yvOtnIIEU7K5PL8l23Luc5I'
export const ALCHEMY_URL = `https://eth-mainnet.g.alchemy.com/v2/${ ALCHEMY_API_KEY }`
