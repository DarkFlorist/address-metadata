import { Contract } from 'ethers'
import { providers } from 'ethers/lib'
import { ETHEREUM_RPC } from './constants.js'
import { addressString } from './utils.js'

const provider = new providers.StaticJsonRpcProvider(ETHEREUM_RPC)

const AAVE_V1_LOGO_URI = `/images/contracts/aave.png`
const AAVE_V2_LOGO_URI = `/images/contracts/aave.png`

const AAVE_LENDING_POOL_ADDRESS = '0x7d2768dE32b0b80b7a3454c06BdAc94A69DDc7A9'
const AAVE_LENDING_POOL_ABI = [{
	'anonymous': false,
	'inputs': [{'indexed': true, 'internalType': 'address', 'name': 'reserve', 'type': 'address'}, {
		'indexed': false,
		'internalType': 'address',
		'name': 'user',
		'type': 'address'
	}, {'indexed': true, 'internalType': 'address', 'name': 'onBehalfOf', 'type': 'address'}, {
		'indexed': false,
		'internalType': 'uint256',
		'name': 'amount',
		'type': 'uint256'
	}, {'indexed': false, 'internalType': 'uint256', 'name': 'borrowRateMode', 'type': 'uint256'}, {
		'indexed': false,
		'internalType': 'uint256',
		'name': 'borrowRate',
		'type': 'uint256'
	}, {'indexed': true, 'internalType': 'uint16', 'name': 'referral', 'type': 'uint16'}],
	'name': 'Borrow',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': true, 'internalType': 'address', 'name': 'reserve', 'type': 'address'}, {
		'indexed': false,
		'internalType': 'address',
		'name': 'user',
		'type': 'address'
	}, {'indexed': true, 'internalType': 'address', 'name': 'onBehalfOf', 'type': 'address'}, {
		'indexed': false,
		'internalType': 'uint256',
		'name': 'amount',
		'type': 'uint256'
	}, {'indexed': true, 'internalType': 'uint16', 'name': 'referral', 'type': 'uint16'}],
	'name': 'Deposit',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': true, 'internalType': 'address', 'name': 'target', 'type': 'address'}, {
		'indexed': true,
		'internalType': 'address',
		'name': 'initiator',
		'type': 'address'
	}, {'indexed': true, 'internalType': 'address', 'name': 'asset', 'type': 'address'}, {
		'indexed': false,
		'internalType': 'uint256',
		'name': 'amount',
		'type': 'uint256'
	}, {'indexed': false, 'internalType': 'uint256', 'name': 'premium', 'type': 'uint256'}, {
		'indexed': false,
		'internalType': 'uint16',
		'name': 'referralCode',
		'type': 'uint16'
	}],
	'name': 'FlashLoan',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{
		'indexed': true,
		'internalType': 'address',
		'name': 'collateralAsset',
		'type': 'address'
	}, {'indexed': true, 'internalType': 'address', 'name': 'debtAsset', 'type': 'address'}, {
		'indexed': true,
		'internalType': 'address',
		'name': 'user',
		'type': 'address'
	}, {'indexed': false, 'internalType': 'uint256', 'name': 'debtToCover', 'type': 'uint256'}, {
		'indexed': false,
		'internalType': 'uint256',
		'name': 'liquidatedCollateralAmount',
		'type': 'uint256'
	}, {'indexed': false, 'internalType': 'address', 'name': 'liquidator', 'type': 'address'}, {
		'indexed': false,
		'internalType': 'bool',
		'name': 'receiveAToken',
		'type': 'bool'
	}],
	'name': 'LiquidationCall',
	'type': 'event'
}, {'anonymous': false, 'inputs': [], 'name': 'Paused', 'type': 'event'}, {
	'anonymous': false,
	'inputs': [{'indexed': true, 'internalType': 'address', 'name': 'reserve', 'type': 'address'}, {
		'indexed': true,
		'internalType': 'address',
		'name': 'user',
		'type': 'address'
	}],
	'name': 'RebalanceStableBorrowRate',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': true, 'internalType': 'address', 'name': 'reserve', 'type': 'address'}, {
		'indexed': true,
		'internalType': 'address',
		'name': 'user',
		'type': 'address'
	}, {'indexed': true, 'internalType': 'address', 'name': 'repayer', 'type': 'address'}, {
		'indexed': false,
		'internalType': 'uint256',
		'name': 'amount',
		'type': 'uint256'
	}],
	'name': 'Repay',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': true, 'internalType': 'address', 'name': 'reserve', 'type': 'address'}, {
		'indexed': false,
		'internalType': 'uint256',
		'name': 'liquidityRate',
		'type': 'uint256'
	}, {'indexed': false, 'internalType': 'uint256', 'name': 'stableBorrowRate', 'type': 'uint256'}, {
		'indexed': false,
		'internalType': 'uint256',
		'name': 'variableBorrowRate',
		'type': 'uint256'
	}, {'indexed': false, 'internalType': 'uint256', 'name': 'liquidityIndex', 'type': 'uint256'}, {
		'indexed': false,
		'internalType': 'uint256',
		'name': 'variableBorrowIndex',
		'type': 'uint256'
	}],
	'name': 'ReserveDataUpdated',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': true, 'internalType': 'address', 'name': 'reserve', 'type': 'address'}, {
		'indexed': true,
		'internalType': 'address',
		'name': 'user',
		'type': 'address'
	}],
	'name': 'ReserveUsedAsCollateralDisabled',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': true, 'internalType': 'address', 'name': 'reserve', 'type': 'address'}, {
		'indexed': true,
		'internalType': 'address',
		'name': 'user',
		'type': 'address'
	}],
	'name': 'ReserveUsedAsCollateralEnabled',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': true, 'internalType': 'address', 'name': 'reserve', 'type': 'address'}, {
		'indexed': true,
		'internalType': 'address',
		'name': 'user',
		'type': 'address'
	}, {'indexed': false, 'internalType': 'uint256', 'name': 'rateMode', 'type': 'uint256'}],
	'name': 'Swap',
	'type': 'event'
}, {'anonymous': false, 'inputs': [], 'name': 'Unpaused', 'type': 'event'}, {
	'anonymous': false,
	'inputs': [{'indexed': true, 'internalType': 'address', 'name': 'reserve', 'type': 'address'}, {
		'indexed': true,
		'internalType': 'address',
		'name': 'user',
		'type': 'address'
	}, {'indexed': true, 'internalType': 'address', 'name': 'to', 'type': 'address'}, {
		'indexed': false,
		'internalType': 'uint256',
		'name': 'amount',
		'type': 'uint256'
	}],
	'name': 'Withdraw',
	'type': 'event'
}, {
	'inputs': [],
	'name': 'FLASHLOAN_PREMIUM_TOTAL',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'stateMutability': 'view',
	'type': 'function'
}, {
	'inputs': [],
	'name': 'LENDINGPOOL_REVISION',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'stateMutability': 'view',
	'type': 'function'
}, {
	'inputs': [],
	'name': 'MAX_NUMBER_RESERVES',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'stateMutability': 'view',
	'type': 'function'
}, {
	'inputs': [],
	'name': 'MAX_STABLE_RATE_BORROW_SIZE_PERCENT',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'stateMutability': 'view',
	'type': 'function'
}, {
	'inputs': [{'internalType': 'address', 'name': 'asset', 'type': 'address'}, {
		'internalType': 'uint256',
		'name': 'amount',
		'type': 'uint256'
	}, {'internalType': 'uint256', 'name': 'interestRateMode', 'type': 'uint256'}, {
		'internalType': 'uint16',
		'name': 'referralCode',
		'type': 'uint16'
	}, {'internalType': 'address', 'name': 'onBehalfOf', 'type': 'address'}],
	'name': 'borrow',
	'outputs': [],
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'inputs': [{'internalType': 'address', 'name': 'asset', 'type': 'address'}, {
		'internalType': 'uint256',
		'name': 'amount',
		'type': 'uint256'
	}, {'internalType': 'address', 'name': 'onBehalfOf', 'type': 'address'}, {
		'internalType': 'uint16',
		'name': 'referralCode',
		'type': 'uint16'
	}], 'name': 'deposit', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'
}, {
	'inputs': [{'internalType': 'address', 'name': 'asset', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'from',
		'type': 'address'
	}, {'internalType': 'address', 'name': 'to', 'type': 'address'}, {
		'internalType': 'uint256',
		'name': 'amount',
		'type': 'uint256'
	}, {'internalType': 'uint256', 'name': 'balanceFromBefore', 'type': 'uint256'}, {
		'internalType': 'uint256',
		'name': 'balanceToBefore',
		'type': 'uint256'
	}], 'name': 'finalizeTransfer', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'
}, {
	'inputs': [{'internalType': 'address', 'name': 'receiverAddress', 'type': 'address'}, {
		'internalType': 'address[]',
		'name': 'assets',
		'type': 'address[]'
	}, {'internalType': 'uint256[]', 'name': 'amounts', 'type': 'uint256[]'}, {
		'internalType': 'uint256[]',
		'name': 'modes',
		'type': 'uint256[]'
	}, {'internalType': 'address', 'name': 'onBehalfOf', 'type': 'address'}, {
		'internalType': 'bytes',
		'name': 'params',
		'type': 'bytes'
	}, {'internalType': 'uint16', 'name': 'referralCode', 'type': 'uint16'}],
	'name': 'flashLoan',
	'outputs': [],
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'inputs': [],
	'name': 'getAddressesProvider',
	'outputs': [{'internalType': 'contract ILendingPoolAddressesProvider', 'name': '', 'type': 'address'}],
	'stateMutability': 'view',
	'type': 'function'
}, {
	'inputs': [{'internalType': 'address', 'name': 'asset', 'type': 'address'}],
	'name': 'getConfiguration',
	'outputs': [{
		'components': [{'internalType': 'uint256', 'name': 'data', 'type': 'uint256'}],
		'internalType': 'struct DataTypes.ReserveConfigurationMap',
		'name': '',
		'type': 'tuple'
	}],
	'stateMutability': 'view',
	'type': 'function'
}, {
	'inputs': [{'internalType': 'address', 'name': 'asset', 'type': 'address'}], 'name': 'getReserveData', 'outputs': [{
		'components': [{
			'components': [{'internalType': 'uint256', 'name': 'data', 'type': 'uint256'}],
			'internalType': 'struct DataTypes.ReserveConfigurationMap',
			'name': 'configuration',
			'type': 'tuple'
		}, {'internalType': 'uint128', 'name': 'liquidityIndex', 'type': 'uint128'}, {
			'internalType': 'uint128',
			'name': 'variableBorrowIndex',
			'type': 'uint128'
		}, {'internalType': 'uint128', 'name': 'currentLiquidityRate', 'type': 'uint128'}, {
			'internalType': 'uint128',
			'name': 'currentVariableBorrowRate',
			'type': 'uint128'
		}, {'internalType': 'uint128', 'name': 'currentStableBorrowRate', 'type': 'uint128'}, {
			'internalType': 'uint40',
			'name': 'lastUpdateTimestamp',
			'type': 'uint40'
		}, {'internalType': 'address', 'name': 'aTokenAddress', 'type': 'address'}, {
			'internalType': 'address',
			'name': 'stableDebtTokenAddress',
			'type': 'address'
		}, {
			'internalType': 'address',
			'name': 'variableDebtTokenAddress',
			'type': 'address'
		}, {
			'internalType': 'address',
			'name': 'interestRateStrategyAddress',
			'type': 'address'
		}, {'internalType': 'uint8', 'name': 'id', 'type': 'uint8'}],
		'internalType': 'struct DataTypes.ReserveData',
		'name': '',
		'type': 'tuple'
	}], 'stateMutability': 'view', 'type': 'function'
}, {
	'inputs': [{'internalType': 'address', 'name': 'asset', 'type': 'address'}],
	'name': 'getReserveNormalizedIncome',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'stateMutability': 'view',
	'type': 'function'
}, {
	'inputs': [{'internalType': 'address', 'name': 'asset', 'type': 'address'}],
	'name': 'getReserveNormalizedVariableDebt',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'stateMutability': 'view',
	'type': 'function'
}, {
	'inputs': [],
	'name': 'getReservesList',
	'outputs': [{'internalType': 'address[]', 'name': '', 'type': 'address[]'}],
	'stateMutability': 'view',
	'type': 'function'
}, {
	'inputs': [{'internalType': 'address', 'name': 'user', 'type': 'address'}],
	'name': 'getUserAccountData',
	'outputs': [{
		'internalType': 'uint256',
		'name': 'totalCollateralETH',
		'type': 'uint256'
	}, {'internalType': 'uint256', 'name': 'totalDebtETH', 'type': 'uint256'}, {
		'internalType': 'uint256',
		'name': 'availableBorrowsETH',
		'type': 'uint256'
	}, {
		'internalType': 'uint256',
		'name': 'currentLiquidationThreshold',
		'type': 'uint256'
	}, {'internalType': 'uint256', 'name': 'ltv', 'type': 'uint256'}, {
		'internalType': 'uint256',
		'name': 'healthFactor',
		'type': 'uint256'
	}],
	'stateMutability': 'view',
	'type': 'function'
}, {
	'inputs': [{'internalType': 'address', 'name': 'user', 'type': 'address'}],
	'name': 'getUserConfiguration',
	'outputs': [{
		'components': [{'internalType': 'uint256', 'name': 'data', 'type': 'uint256'}],
		'internalType': 'struct DataTypes.UserConfigurationMap',
		'name': '',
		'type': 'tuple'
	}],
	'stateMutability': 'view',
	'type': 'function'
}, {
	'inputs': [{'internalType': 'address', 'name': 'asset', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'aTokenAddress',
		'type': 'address'
	}, {'internalType': 'address', 'name': 'stableDebtAddress', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'variableDebtAddress',
		'type': 'address'
	}, {'internalType': 'address', 'name': 'interestRateStrategyAddress', 'type': 'address'}],
	'name': 'initReserve',
	'outputs': [],
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'inputs': [{'internalType': 'contract ILendingPoolAddressesProvider', 'name': 'provider', 'type': 'address'}],
	'name': 'initialize',
	'outputs': [],
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'inputs': [{'internalType': 'address', 'name': 'collateralAsset', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'debtAsset',
		'type': 'address'
	}, {'internalType': 'address', 'name': 'user', 'type': 'address'}, {
		'internalType': 'uint256',
		'name': 'debtToCover',
		'type': 'uint256'
	}, {'internalType': 'bool', 'name': 'receiveAToken', 'type': 'bool'}],
	'name': 'liquidationCall',
	'outputs': [],
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'inputs': [],
	'name': 'paused',
	'outputs': [{'internalType': 'bool', 'name': '', 'type': 'bool'}],
	'stateMutability': 'view',
	'type': 'function'
}, {
	'inputs': [{'internalType': 'address', 'name': 'asset', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'user',
		'type': 'address'
	}], 'name': 'rebalanceStableBorrowRate', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'
}, {
	'inputs': [{'internalType': 'address', 'name': 'asset', 'type': 'address'}, {
		'internalType': 'uint256',
		'name': 'amount',
		'type': 'uint256'
	}, {'internalType': 'uint256', 'name': 'rateMode', 'type': 'uint256'}, {
		'internalType': 'address',
		'name': 'onBehalfOf',
		'type': 'address'
	}],
	'name': 'repay',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'inputs': [{'internalType': 'address', 'name': 'asset', 'type': 'address'}, {
		'internalType': 'uint256',
		'name': 'configuration',
		'type': 'uint256'
	}], 'name': 'setConfiguration', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'
}, {
	'inputs': [{'internalType': 'bool', 'name': 'val', 'type': 'bool'}],
	'name': 'setPause',
	'outputs': [],
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'inputs': [{'internalType': 'address', 'name': 'asset', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'rateStrategyAddress',
		'type': 'address'
	}],
	'name': 'setReserveInterestRateStrategyAddress',
	'outputs': [],
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'inputs': [{'internalType': 'address', 'name': 'asset', 'type': 'address'}, {
		'internalType': 'bool',
		'name': 'useAsCollateral',
		'type': 'bool'
	}], 'name': 'setUserUseReserveAsCollateral', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'
}, {
	'inputs': [{'internalType': 'address', 'name': 'asset', 'type': 'address'}, {
		'internalType': 'uint256',
		'name': 'rateMode',
		'type': 'uint256'
	}], 'name': 'swapBorrowRateMode', 'outputs': [], 'stateMutability': 'nonpayable', 'type': 'function'
}, {
	'inputs': [{'internalType': 'address', 'name': 'asset', 'type': 'address'}, {
		'internalType': 'uint256',
		'name': 'amount',
		'type': 'uint256'
	}, {'internalType': 'address', 'name': 'to', 'type': 'address'}],
	'name': 'withdraw',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'stateMutability': 'nonpayable',
	'type': 'function'
}]

const AAVE_ERC20_ABI = [{
	'constant': true,
	'inputs': [],
	'name': 'decimals',
	'outputs': [{'internalType': 'uint8', 'name': '', 'type': 'uint8'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'inputs': [],
	'name': 'name',
	'outputs': [{'internalType': 'string', 'name': '', 'type': 'string'}],
	'stateMutability': 'view',
	'type': 'function'
}, {
	'inputs': [],
	'name': 'symbol',
	'outputs': [{'internalType': 'string', 'name': '', 'type': 'string'}],
	'stateMutability': 'view',
	'type': 'function'
}]

export async function getAaveV1Tokens() {
	const addresses = [
		['Aave: aAAVE Token V1', 'aAAVE', 0xba3d9687cf50fe253cd2e1cfeede1d6787344ed5n, 18],
		['Aave: aBAT Token V1', 'aBAT ', 0xe1ba0fb44ccb0d11b80f92f4f8ed94ca3ff51d00n, 18],
		['Aave: aBUSD Token V1', 'aBUSD', 0x6ee0f7bb50a54ab5253da0667b0dc2ee526c30a8n, 18],
		['Aave: aDAI Token V1', 'aDAI ', 0xfc1e690f61efd961294b3e1ce3313fbd8aa4f85dn, 18],
		['Aave: aKNC Token V1', 'aKNC ', 0x9d91be44c06d373a8a226e1f3b146956083803ebn, 18],
		['Aave: aLINK Token V1', 'aLINK', 0xa64bd6c70cb9051f6a9ba1f163fdc07e0dfb5f84n, 18],
		['Aave: aMANA Token V1', 'aMANA', 0x6fce4a401b6b80ace52baaefe4421bd188e76f6fn, 18],
		['Aave: aMKR Token V1', 'aMKR ', 0x7deb5e830be29f91e298ba5ff1356bb7f8146998n, 18],
		['Aave: aSNX Token V1', 'aSNX ', 0x328c4c80bc7aca0834db37e6600a6c49e12da4den, 18],
		['Aave: aSUSD Token V1', 'aSUSD', 0x625ae63000f46200499120b906716420bd059240n, 18],
		['Aave: aTUSD Token V1', 'aTUSD', 0x4da9b813057d04baef4e5800e36083717b4a0341n, 18],
		['Aave: aUNI Token V1', 'aUNI ', 0xb124541127a0a657f056d9dd06188c4f1b0e5aabn, 18],
		['Aave: aUSDC Token V1', 'aUSDC', 0x9ba00d6856a4edf4665bca2c2309936572473b7en, 6],
		['Aave: aUSDT Token V1', 'aUSDT', 0x71fc860f7d3a592a4a98740e39db31d25db65ae8n, 6],
		['Aave: aWBTC Token V1', 'aWBTC', 0xfc4b8ed459e00e5400be803a9bb3954234fd50e3n, 8],
		['Aave: aYFI Token V1', 'aYFI ', 0x12e51e77daaa58aa0e9247db7510ea4b46f9beadn, 18],
		['Aave: aZRX Token V1', 'aZRX ', 0x6fb0855c404e09c47c3fbca25f08d4e41f9f062fn, 18],
	] as const
	return addresses.map(([name, symbol, address, decimals]) => ({
		address: addressString(address),
		data: {
			name,
			symbol,
			decimals,
			logoUri: AAVE_V1_LOGO_URI,
		}
	}))
}

export async function getAaveV2Tokens() {
	const result = []
	const aaveLendingPool = new Contract(AAVE_LENDING_POOL_ADDRESS, AAVE_LENDING_POOL_ABI, provider)
	const tokensSupportedByAave = (await aaveLendingPool.functions.getReservesList())[0]
	for (const underlyingToken of tokensSupportedByAave) {
		const reserveData = (await aaveLendingPool.functions.getReserveData(underlyingToken))[0]
		const aTokenContract = new Contract(reserveData.aTokenAddress, AAVE_ERC20_ABI, provider)
		const symbol = (await aTokenContract.functions.symbol())[0]
		const name = (await aTokenContract.functions.name())[0]
		const decimals = (await aTokenContract.functions.decimals())[0]
		result.push({
			address: reserveData.aTokenAddress,
			data: {
				name,
				symbol,
				decimals,
				logoUri: AAVE_V2_LOGO_URI,
			}
		})
	}
	return result
}

export async function getAaveV2Misc() {
	const addresses = [
		['Aave: Lending Pool Configurator V2', 0x311bb771e4f8952e6da169b425e7e92d6ac45756n],
		['Aave: Lending Pool Provider V2', 0xb53c1a33016b2dc2ff3653530bff1848a515c8c5n],
		['Aave: Lending Pool Registry V2', 0x52d306e36e3b6b02c153d0266ff0f85d18bcd413n],
		['Aave: Lending Pool V2', 0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9n],
		['Aave: Lending Rate Oracle V2', 0x8a32f49ffba88aba6eff96f45d8bd1d4b3f35c7dn],
		['Aave: Pool Admin V2', 0xb9062896ec3a615a4e4444df183f0531a77218aen],
		['Aave: Price Oracle V2', 0xa50ba011c48153de246e5192c8f9258a2ba79ca9n],
		['Aave: Protocol Data Provider V2', 0x057835ad21a177dbdd3090bb1cae03eacf78fc6dn],
		['Aave: WETHGateway V2', 0xdcd33426ba191383f1c9b431a342498fdac73488n],
		['Aave: Aave Variable Debt V2', 0xf7dba49d571745d9d7fcb56225b05bea803ebf3cn],
		['Aave: Interest Rate Strategy V2', 0xe3a3de71b827cb73663a24cdb6243ba7f986cc3bn],
	] as const
	return addresses.map(([name, address]) => ({
		address: address,
		data: {
			name: name,
			logoUri: AAVE_V2_LOGO_URI,
			protocol: 'Aave'
		}
	}))
}
