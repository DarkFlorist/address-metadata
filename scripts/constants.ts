
import path from 'path'

export const MAX_OPENSEA_BATCH_SIZE = 300
export const OPENSEA_GLOBAL_LIMIT = 60000 - MAX_OPENSEA_BATCH_SIZE

export const MAX_NFT_IMAGE_HEIGHT = 64
export const MAX_NFT_IMAGE_WIDTH = 64

export const OUTPUT_SRC_DIR = path.join(__dirname, '../..', 'src')
export const OUTPUT_LIB_BASE_DIR = path.join(__dirname, '../..', 'lib')
export const NFT_IMAGE_DIR = '/images/nfts/'
export const CACHE = path.join(__dirname, '../..', 'cache')

export const ETHEREUM_RPC = process.env.ETHEREUM_RPC || 'https://rpc.dark.florist/flipcardtrustone'
export const OPENSEA_API_KEY = process.env.OPENSEA_API_KEY || '993906e26575457bb795cfde1b7e2762'
export const ALCHEMY_API_KEY = process.env.ALCHEMY_KEY || 'vy9QK3DT-yvOtnIIEU7K5PL8l23Luc5I'
