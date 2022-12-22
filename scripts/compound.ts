import { Contract } from 'ethers'
import { providers } from 'ethers/lib'

const provider = new providers.StaticJsonRpcProvider(process.env.ETHEREUM_RPC || 'http://127.0.0.1:8545')

const COMPOUND_LOGO_URI = `images/contracts/compound.png`

const COMPOUND_COMPTROLLER_ADDRESS = '0x3d9819210A31b4961b30EF54bE2aeD79B9c9Cd3B'
const COMPOUND_COMPTROLLER_ABI = [{
	'inputs': [],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'constructor'
}, {
	'anonymous': false,
	'inputs': [{'indexed': false, 'internalType': 'string', 'name': 'action', 'type': 'string'}, {
		'indexed': false,
		'internalType': 'bool',
		'name': 'pauseState',
		'type': 'bool'
	}],
	'name': 'ActionPaused',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{
		'indexed': false,
		'internalType': 'contract CToken',
		'name': 'cToken',
		'type': 'address'
	}, {'indexed': false, 'internalType': 'string', 'name': 'action', 'type': 'string'}, {
		'indexed': false,
		'internalType': 'bool',
		'name': 'pauseState',
		'type': 'bool'
	}],
	'name': 'ActionPaused',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': true, 'internalType': 'address', 'name': 'user', 'type': 'address'}, {
		'indexed': false,
		'internalType': 'uint256',
		'name': 'oldCompAccrued',
		'type': 'uint256'
	}, {'indexed': false, 'internalType': 'uint256', 'name': 'newCompAccrued', 'type': 'uint256'}],
	'name': 'CompAccruedAdjusted',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{
		'indexed': true,
		'internalType': 'contract CToken',
		'name': 'cToken',
		'type': 'address'
	}, {'indexed': false, 'internalType': 'uint256', 'name': 'newSpeed', 'type': 'uint256'}],
	'name': 'CompBorrowSpeedUpdated',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': false, 'internalType': 'address', 'name': 'recipient', 'type': 'address'}, {
		'indexed': false,
		'internalType': 'uint256',
		'name': 'amount',
		'type': 'uint256'
	}],
	'name': 'CompGranted',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': true, 'internalType': 'address', 'name': 'user', 'type': 'address'}, {
		'indexed': false,
		'internalType': 'uint256',
		'name': 'oldCompReceivable',
		'type': 'uint256'
	}, {'indexed': false, 'internalType': 'uint256', 'name': 'newCompReceivable', 'type': 'uint256'}],
	'name': 'CompReceivableUpdated',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{
		'indexed': true,
		'internalType': 'contract CToken',
		'name': 'cToken',
		'type': 'address'
	}, {'indexed': false, 'internalType': 'uint256', 'name': 'newSpeed', 'type': 'uint256'}],
	'name': 'CompSupplySpeedUpdated',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{
		'indexed': true,
		'internalType': 'address',
		'name': 'contributor',
		'type': 'address'
	}, {'indexed': false, 'internalType': 'uint256', 'name': 'newSpeed', 'type': 'uint256'}],
	'name': 'ContributorCompSpeedUpdated',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{
		'indexed': true,
		'internalType': 'contract CToken',
		'name': 'cToken',
		'type': 'address'
	}, {'indexed': true, 'internalType': 'address', 'name': 'borrower', 'type': 'address'}, {
		'indexed': false,
		'internalType': 'uint256',
		'name': 'compDelta',
		'type': 'uint256'
	}, {'indexed': false, 'internalType': 'uint256', 'name': 'compBorrowIndex', 'type': 'uint256'}],
	'name': 'DistributedBorrowerComp',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{
		'indexed': true,
		'internalType': 'contract CToken',
		'name': 'cToken',
		'type': 'address'
	}, {'indexed': true, 'internalType': 'address', 'name': 'supplier', 'type': 'address'}, {
		'indexed': false,
		'internalType': 'uint256',
		'name': 'compDelta',
		'type': 'uint256'
	}, {'indexed': false, 'internalType': 'uint256', 'name': 'compSupplyIndex', 'type': 'uint256'}],
	'name': 'DistributedSupplierComp',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': false, 'internalType': 'uint256', 'name': 'error', 'type': 'uint256'}, {
		'indexed': false,
		'internalType': 'uint256',
		'name': 'info',
		'type': 'uint256'
	}, {'indexed': false, 'internalType': 'uint256', 'name': 'detail', 'type': 'uint256'}],
	'name': 'Failure',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{
		'indexed': false,
		'internalType': 'contract CToken',
		'name': 'cToken',
		'type': 'address'
	}, {'indexed': false, 'internalType': 'address', 'name': 'account', 'type': 'address'}],
	'name': 'MarketEntered',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{
		'indexed': false,
		'internalType': 'contract CToken',
		'name': 'cToken',
		'type': 'address'
	}, {'indexed': false, 'internalType': 'address', 'name': 'account', 'type': 'address'}],
	'name': 'MarketExited',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': false, 'internalType': 'contract CToken', 'name': 'cToken', 'type': 'address'}],
	'name': 'MarketListed',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{
		'indexed': true,
		'internalType': 'contract CToken',
		'name': 'cToken',
		'type': 'address'
	}, {'indexed': false, 'internalType': 'uint256', 'name': 'newBorrowCap', 'type': 'uint256'}],
	'name': 'NewBorrowCap',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{
		'indexed': false,
		'internalType': 'address',
		'name': 'oldBorrowCapGuardian',
		'type': 'address'
	}, {'indexed': false, 'internalType': 'address', 'name': 'newBorrowCapGuardian', 'type': 'address'}],
	'name': 'NewBorrowCapGuardian',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{
		'indexed': false,
		'internalType': 'uint256',
		'name': 'oldCloseFactorMantissa',
		'type': 'uint256'
	}, {'indexed': false, 'internalType': 'uint256', 'name': 'newCloseFactorMantissa', 'type': 'uint256'}],
	'name': 'NewCloseFactor',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{
		'indexed': false,
		'internalType': 'contract CToken',
		'name': 'cToken',
		'type': 'address'
	}, {
		'indexed': false,
		'internalType': 'uint256',
		'name': 'oldCollateralFactorMantissa',
		'type': 'uint256'
	}, {'indexed': false, 'internalType': 'uint256', 'name': 'newCollateralFactorMantissa', 'type': 'uint256'}],
	'name': 'NewCollateralFactor',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{
		'indexed': false,
		'internalType': 'uint256',
		'name': 'oldLiquidationIncentiveMantissa',
		'type': 'uint256'
	}, {'indexed': false, 'internalType': 'uint256', 'name': 'newLiquidationIncentiveMantissa', 'type': 'uint256'}],
	'name': 'NewLiquidationIncentive',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{
		'indexed': false,
		'internalType': 'address',
		'name': 'oldPauseGuardian',
		'type': 'address'
	}, {'indexed': false, 'internalType': 'address', 'name': 'newPauseGuardian', 'type': 'address'}],
	'name': 'NewPauseGuardian',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{
		'indexed': false,
		'internalType': 'contract PriceOracle',
		'name': 'oldPriceOracle',
		'type': 'address'
	}, {'indexed': false, 'internalType': 'contract PriceOracle', 'name': 'newPriceOracle', 'type': 'address'}],
	'name': 'NewPriceOracle',
	'type': 'event'
}, {
	'constant': false,
	'inputs': [{'internalType': 'contract Unitroller', 'name': 'unitroller', 'type': 'address'}],
	'name': '_become',
	'outputs': [],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': '_borrowGuardianPaused',
	'outputs': [{'internalType': 'bool', 'name': '', 'type': 'bool'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'address', 'name': 'recipient', 'type': 'address'}, {
		'internalType': 'uint256',
		'name': 'amount',
		'type': 'uint256'
	}],
	'name': '_grantComp',
	'outputs': [],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': '_mintGuardianPaused',
	'outputs': [{'internalType': 'bool', 'name': '', 'type': 'bool'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'address', 'name': 'newBorrowCapGuardian', 'type': 'address'}],
	'name': '_setBorrowCapGuardian',
	'outputs': [],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'contract CToken', 'name': 'cToken', 'type': 'address'}, {
		'internalType': 'bool',
		'name': 'state',
		'type': 'bool'
	}],
	'name': '_setBorrowPaused',
	'outputs': [{'internalType': 'bool', 'name': '', 'type': 'bool'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'uint256', 'name': 'newCloseFactorMantissa', 'type': 'uint256'}],
	'name': '_setCloseFactor',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'contract CToken', 'name': 'cToken', 'type': 'address'}, {
		'internalType': 'uint256',
		'name': 'newCollateralFactorMantissa',
		'type': 'uint256'
	}],
	'name': '_setCollateralFactor',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{
		'internalType': 'contract CToken[]',
		'name': 'cTokens',
		'type': 'address[]'
	}, {'internalType': 'uint256[]', 'name': 'supplySpeeds', 'type': 'uint256[]'}, {
		'internalType': 'uint256[]',
		'name': 'borrowSpeeds',
		'type': 'uint256[]'
	}],
	'name': '_setCompSpeeds',
	'outputs': [],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'address', 'name': 'contributor', 'type': 'address'}, {
		'internalType': 'uint256',
		'name': 'compSpeed',
		'type': 'uint256'
	}],
	'name': '_setContributorCompSpeed',
	'outputs': [],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'uint256', 'name': 'newLiquidationIncentiveMantissa', 'type': 'uint256'}],
	'name': '_setLiquidationIncentive',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{
		'internalType': 'contract CToken[]',
		'name': 'cTokens',
		'type': 'address[]'
	}, {'internalType': 'uint256[]', 'name': 'newBorrowCaps', 'type': 'uint256[]'}],
	'name': '_setMarketBorrowCaps',
	'outputs': [],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'contract CToken', 'name': 'cToken', 'type': 'address'}, {
		'internalType': 'bool',
		'name': 'state',
		'type': 'bool'
	}],
	'name': '_setMintPaused',
	'outputs': [{'internalType': 'bool', 'name': '', 'type': 'bool'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'address', 'name': 'newPauseGuardian', 'type': 'address'}],
	'name': '_setPauseGuardian',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'contract PriceOracle', 'name': 'newOracle', 'type': 'address'}],
	'name': '_setPriceOracle',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'bool', 'name': 'state', 'type': 'bool'}],
	'name': '_setSeizePaused',
	'outputs': [{'internalType': 'bool', 'name': '', 'type': 'bool'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'bool', 'name': 'state', 'type': 'bool'}],
	'name': '_setTransferPaused',
	'outputs': [{'internalType': 'bool', 'name': '', 'type': 'bool'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'contract CToken', 'name': 'cToken', 'type': 'address'}],
	'name': '_supportMarket',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'internalType': 'address', 'name': '', 'type': 'address'}, {
		'internalType': 'uint256',
		'name': '',
		'type': 'uint256'
	}],
	'name': 'accountAssets',
	'outputs': [{'internalType': 'contract CToken', 'name': '', 'type': 'address'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'admin',
	'outputs': [{'internalType': 'address', 'name': '', 'type': 'address'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'name': 'allMarkets',
	'outputs': [{'internalType': 'contract CToken', 'name': '', 'type': 'address'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'address', 'name': 'cToken', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'borrower',
		'type': 'address'
	}, {'internalType': 'uint256', 'name': 'borrowAmount', 'type': 'uint256'}],
	'name': 'borrowAllowed',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'borrowCapGuardian',
	'outputs': [{'internalType': 'address', 'name': '', 'type': 'address'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'internalType': 'address', 'name': '', 'type': 'address'}],
	'name': 'borrowCaps',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'internalType': 'address', 'name': '', 'type': 'address'}],
	'name': 'borrowGuardianPaused',
	'outputs': [{'internalType': 'bool', 'name': '', 'type': 'bool'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'address', 'name': 'cToken', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'borrower',
		'type': 'address'
	}, {'internalType': 'uint256', 'name': 'borrowAmount', 'type': 'uint256'}],
	'name': 'borrowVerify',
	'outputs': [],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'internalType': 'address', 'name': 'account', 'type': 'address'}, {
		'internalType': 'contract CToken',
		'name': 'cToken',
		'type': 'address'
	}],
	'name': 'checkMembership',
	'outputs': [{'internalType': 'bool', 'name': '', 'type': 'bool'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'address', 'name': 'holder', 'type': 'address'}, {
		'internalType': 'contract CToken[]',
		'name': 'cTokens',
		'type': 'address[]'
	}],
	'name': 'claimComp',
	'outputs': [],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{
		'internalType': 'address[]',
		'name': 'holders',
		'type': 'address[]'
	}, {'internalType': 'contract CToken[]', 'name': 'cTokens', 'type': 'address[]'}, {
		'internalType': 'bool',
		'name': 'borrowers',
		'type': 'bool'
	}, {'internalType': 'bool', 'name': 'suppliers', 'type': 'bool'}],
	'name': 'claimComp',
	'outputs': [],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'address', 'name': 'holder', 'type': 'address'}],
	'name': 'claimComp',
	'outputs': [],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'closeFactorMantissa',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'internalType': 'address', 'name': '', 'type': 'address'}],
	'name': 'compAccrued',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'internalType': 'address', 'name': '', 'type': 'address'}],
	'name': 'compBorrowSpeeds',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'internalType': 'address', 'name': '', 'type': 'address'}],
	'name': 'compBorrowState',
	'outputs': [{'internalType': 'uint224', 'name': 'index', 'type': 'uint224'}, {
		'internalType': 'uint32',
		'name': 'block',
		'type': 'uint32'
	}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'internalType': 'address', 'name': '', 'type': 'address'}, {
		'internalType': 'address',
		'name': '',
		'type': 'address'
	}],
	'name': 'compBorrowerIndex',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'internalType': 'address', 'name': '', 'type': 'address'}],
	'name': 'compContributorSpeeds',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'compInitialIndex',
	'outputs': [{'internalType': 'uint224', 'name': '', 'type': 'uint224'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'compRate',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'internalType': 'address', 'name': '', 'type': 'address'}],
	'name': 'compReceivable',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'internalType': 'address', 'name': '', 'type': 'address'}],
	'name': 'compSpeeds',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'internalType': 'address', 'name': '', 'type': 'address'}, {
		'internalType': 'address',
		'name': '',
		'type': 'address'
	}],
	'name': 'compSupplierIndex',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'internalType': 'address', 'name': '', 'type': 'address'}],
	'name': 'compSupplySpeeds',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'internalType': 'address', 'name': '', 'type': 'address'}],
	'name': 'compSupplyState',
	'outputs': [{'internalType': 'uint224', 'name': 'index', 'type': 'uint224'}, {
		'internalType': 'uint32',
		'name': 'block',
		'type': 'uint32'
	}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'comptrollerImplementation',
	'outputs': [{'internalType': 'address', 'name': '', 'type': 'address'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'address[]', 'name': 'cTokens', 'type': 'address[]'}],
	'name': 'enterMarkets',
	'outputs': [{'internalType': 'uint256[]', 'name': '', 'type': 'uint256[]'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'address', 'name': 'cTokenAddress', 'type': 'address'}],
	'name': 'exitMarket',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{
		'internalType': 'address[]',
		'name': 'affectedUsers',
		'type': 'address[]'
	}, {'internalType': 'uint256[]', 'name': 'amounts', 'type': 'uint256[]'}],
	'name': 'fixBadAccruals',
	'outputs': [],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'internalType': 'address', 'name': 'account', 'type': 'address'}],
	'name': 'getAccountLiquidity',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}, {
		'internalType': 'uint256',
		'name': '',
		'type': 'uint256'
	}, {'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'getAllMarkets',
	'outputs': [{'internalType': 'contract CToken[]', 'name': '', 'type': 'address[]'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'internalType': 'address', 'name': 'account', 'type': 'address'}],
	'name': 'getAssetsIn',
	'outputs': [{'internalType': 'contract CToken[]', 'name': '', 'type': 'address[]'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'getBlockNumber',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'getCompAddress',
	'outputs': [{'internalType': 'address', 'name': '', 'type': 'address'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'internalType': 'address', 'name': 'account', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'cTokenModify',
		'type': 'address'
	}, {'internalType': 'uint256', 'name': 'redeemTokens', 'type': 'uint256'}, {
		'internalType': 'uint256',
		'name': 'borrowAmount',
		'type': 'uint256'
	}],
	'name': 'getHypotheticalAccountLiquidity',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}, {
		'internalType': 'uint256',
		'name': '',
		'type': 'uint256'
	}, {'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'isComptroller',
	'outputs': [{'internalType': 'bool', 'name': '', 'type': 'bool'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'internalType': 'contract CToken', 'name': 'cToken', 'type': 'address'}],
	'name': 'isDeprecated',
	'outputs': [{'internalType': 'bool', 'name': '', 'type': 'bool'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'internalType': 'address', 'name': '', 'type': 'address'}],
	'name': 'lastContributorBlock',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'address', 'name': 'cTokenBorrowed', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'cTokenCollateral',
		'type': 'address'
	}, {'internalType': 'address', 'name': 'liquidator', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'borrower',
		'type': 'address'
	}, {'internalType': 'uint256', 'name': 'repayAmount', 'type': 'uint256'}],
	'name': 'liquidateBorrowAllowed',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'address', 'name': 'cTokenBorrowed', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'cTokenCollateral',
		'type': 'address'
	}, {'internalType': 'address', 'name': 'liquidator', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'borrower',
		'type': 'address'
	}, {'internalType': 'uint256', 'name': 'actualRepayAmount', 'type': 'uint256'}, {
		'internalType': 'uint256',
		'name': 'seizeTokens',
		'type': 'uint256'
	}],
	'name': 'liquidateBorrowVerify',
	'outputs': [],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'internalType': 'address', 'name': 'cTokenBorrowed', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'cTokenCollateral',
		'type': 'address'
	}, {'internalType': 'uint256', 'name': 'actualRepayAmount', 'type': 'uint256'}],
	'name': 'liquidateCalculateSeizeTokens',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}, {
		'internalType': 'uint256',
		'name': '',
		'type': 'uint256'
	}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'liquidationIncentiveMantissa',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'internalType': 'address', 'name': '', 'type': 'address'}],
	'name': 'markets',
	'outputs': [{'internalType': 'bool', 'name': 'isListed', 'type': 'bool'}, {
		'internalType': 'uint256',
		'name': 'collateralFactorMantissa',
		'type': 'uint256'
	}, {'internalType': 'bool', 'name': 'isComped', 'type': 'bool'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'maxAssets',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'address', 'name': 'cToken', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'minter',
		'type': 'address'
	}, {'internalType': 'uint256', 'name': 'mintAmount', 'type': 'uint256'}],
	'name': 'mintAllowed',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'internalType': 'address', 'name': '', 'type': 'address'}],
	'name': 'mintGuardianPaused',
	'outputs': [{'internalType': 'bool', 'name': '', 'type': 'bool'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'address', 'name': 'cToken', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'minter',
		'type': 'address'
	}, {'internalType': 'uint256', 'name': 'actualMintAmount', 'type': 'uint256'}, {
		'internalType': 'uint256',
		'name': 'mintTokens',
		'type': 'uint256'
	}],
	'name': 'mintVerify',
	'outputs': [],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'oracle',
	'outputs': [{'internalType': 'contract PriceOracle', 'name': '', 'type': 'address'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'pauseGuardian',
	'outputs': [{'internalType': 'address', 'name': '', 'type': 'address'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'pendingAdmin',
	'outputs': [{'internalType': 'address', 'name': '', 'type': 'address'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'pendingComptrollerImplementation',
	'outputs': [{'internalType': 'address', 'name': '', 'type': 'address'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'proposal65FixExecuted',
	'outputs': [{'internalType': 'bool', 'name': '', 'type': 'bool'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'address', 'name': 'cToken', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'redeemer',
		'type': 'address'
	}, {'internalType': 'uint256', 'name': 'redeemTokens', 'type': 'uint256'}],
	'name': 'redeemAllowed',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'address', 'name': 'cToken', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'redeemer',
		'type': 'address'
	}, {'internalType': 'uint256', 'name': 'redeemAmount', 'type': 'uint256'}, {
		'internalType': 'uint256',
		'name': 'redeemTokens',
		'type': 'uint256'
	}],
	'name': 'redeemVerify',
	'outputs': [],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'address', 'name': 'cToken', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'payer',
		'type': 'address'
	}, {'internalType': 'address', 'name': 'borrower', 'type': 'address'}, {
		'internalType': 'uint256',
		'name': 'repayAmount',
		'type': 'uint256'
	}],
	'name': 'repayBorrowAllowed',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'address', 'name': 'cToken', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'payer',
		'type': 'address'
	}, {'internalType': 'address', 'name': 'borrower', 'type': 'address'}, {
		'internalType': 'uint256',
		'name': 'actualRepayAmount',
		'type': 'uint256'
	}, {'internalType': 'uint256', 'name': 'borrowerIndex', 'type': 'uint256'}],
	'name': 'repayBorrowVerify',
	'outputs': [],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'address', 'name': 'cTokenCollateral', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'cTokenBorrowed',
		'type': 'address'
	}, {'internalType': 'address', 'name': 'liquidator', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'borrower',
		'type': 'address'
	}, {'internalType': 'uint256', 'name': 'seizeTokens', 'type': 'uint256'}],
	'name': 'seizeAllowed',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'seizeGuardianPaused',
	'outputs': [{'internalType': 'bool', 'name': '', 'type': 'bool'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'address', 'name': 'cTokenCollateral', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'cTokenBorrowed',
		'type': 'address'
	}, {'internalType': 'address', 'name': 'liquidator', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'borrower',
		'type': 'address'
	}, {'internalType': 'uint256', 'name': 'seizeTokens', 'type': 'uint256'}],
	'name': 'seizeVerify',
	'outputs': [],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'address', 'name': 'cToken', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'src',
		'type': 'address'
	}, {'internalType': 'address', 'name': 'dst', 'type': 'address'}, {
		'internalType': 'uint256',
		'name': 'transferTokens',
		'type': 'uint256'
	}],
	'name': 'transferAllowed',
	'outputs': [{'internalType': 'uint256', 'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'transferGuardianPaused',
	'outputs': [{'internalType': 'bool', 'name': '', 'type': 'bool'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'address', 'name': 'cToken', 'type': 'address'}, {
		'internalType': 'address',
		'name': 'src',
		'type': 'address'
	}, {'internalType': 'address', 'name': 'dst', 'type': 'address'}, {
		'internalType': 'uint256',
		'name': 'transferTokens',
		'type': 'uint256'
	}],
	'name': 'transferVerify',
	'outputs': [],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'internalType': 'address', 'name': 'contributor', 'type': 'address'}],
	'name': 'updateContributorRewards',
	'outputs': [],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}]
const COMPOUND_ERC20_ABI = [{
	'constant': true,
	'inputs': [],
	'name': 'name',
	'outputs': [{'name': '', 'type': 'string'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'name': 'spender', 'type': 'address'}, {'name': 'amount', 'type': 'uint256'}],
	'name': 'approve',
	'outputs': [{'name': '', 'type': 'bool'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'name': 'repayAmount', 'type': 'uint256'}],
	'name': 'repayBorrow',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'reserveFactorMantissa',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'name': 'account', 'type': 'address'}],
	'name': 'borrowBalanceCurrent',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'totalSupply',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'exchangeRateStored',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'name': 'src', 'type': 'address'}, {'name': 'dst', 'type': 'address'}, {
		'name': 'amount',
		'type': 'uint256'
	}],
	'name': 'transferFrom',
	'outputs': [{'name': '', 'type': 'bool'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'name': 'borrower', 'type': 'address'}, {'name': 'repayAmount', 'type': 'uint256'}],
	'name': 'repayBorrowBehalf',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'pendingAdmin',
	'outputs': [{'name': '', 'type': 'address'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'decimals',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'name': 'owner', 'type': 'address'}],
	'name': 'balanceOfUnderlying',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'getCash',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'name': 'newComptroller', 'type': 'address'}],
	'name': '_setComptroller',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'totalBorrows',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'comptroller',
	'outputs': [{'name': '', 'type': 'address'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'name': 'reduceAmount', 'type': 'uint256'}],
	'name': '_reduceReserves',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'initialExchangeRateMantissa',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'accrualBlockNumber',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'underlying',
	'outputs': [{'name': '', 'type': 'address'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'name': 'owner', 'type': 'address'}],
	'name': 'balanceOf',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [],
	'name': 'totalBorrowsCurrent',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'name': 'redeemAmount', 'type': 'uint256'}],
	'name': 'redeemUnderlying',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'totalReserves',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'symbol',
	'outputs': [{'name': '', 'type': 'string'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'name': 'account', 'type': 'address'}],
	'name': 'borrowBalanceStored',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'name': 'mintAmount', 'type': 'uint256'}],
	'name': 'mint',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [],
	'name': 'accrueInterest',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'name': 'dst', 'type': 'address'}, {'name': 'amount', 'type': 'uint256'}],
	'name': 'transfer',
	'outputs': [{'name': '', 'type': 'bool'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'borrowIndex',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'supplyRatePerBlock',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'name': 'liquidator', 'type': 'address'}, {
		'name': 'borrower',
		'type': 'address'
	}, {'name': 'seizeTokens', 'type': 'uint256'}],
	'name': 'seize',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'name': 'newPendingAdmin', 'type': 'address'}],
	'name': '_setPendingAdmin',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [],
	'name': 'exchangeRateCurrent',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'name': 'account', 'type': 'address'}],
	'name': 'getAccountSnapshot',
	'outputs': [{'name': '', 'type': 'uint256'}, {'name': '', 'type': 'uint256'}, {
		'name': '',
		'type': 'uint256'
	}, {'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'name': 'borrowAmount', 'type': 'uint256'}],
	'name': 'borrow',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'name': 'redeemTokens', 'type': 'uint256'}],
	'name': 'redeem',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [{'name': 'owner', 'type': 'address'}, {'name': 'spender', 'type': 'address'}],
	'name': 'allowance',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [],
	'name': '_acceptAdmin',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'name': 'newInterestRateModel', 'type': 'address'}],
	'name': '_setInterestRateModel',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'interestRateModel',
	'outputs': [{'name': '', 'type': 'address'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'name': 'borrower', 'type': 'address'}, {
		'name': 'repayAmount',
		'type': 'uint256'
	}, {'name': 'cTokenCollateral', 'type': 'address'}],
	'name': 'liquidateBorrow',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'admin',
	'outputs': [{'name': '', 'type': 'address'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'borrowRatePerBlock',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'constant': false,
	'inputs': [{'name': 'newReserveFactorMantissa', 'type': 'uint256'}],
	'name': '_setReserveFactor',
	'outputs': [{'name': '', 'type': 'uint256'}],
	'payable': false,
	'stateMutability': 'nonpayable',
	'type': 'function'
}, {
	'constant': true,
	'inputs': [],
	'name': 'isCToken',
	'outputs': [{'name': '', 'type': 'bool'}],
	'payable': false,
	'stateMutability': 'view',
	'type': 'function'
}, {
	'inputs': [{'name': 'underlying_', 'type': 'address'}, {
		'name': 'comptroller_',
		'type': 'address'
	}, {'name': 'interestRateModel_', 'type': 'address'}, {
		'name': 'initialExchangeRateMantissa_',
		'type': 'uint256'
	}, {'name': 'name_', 'type': 'string'}, {'name': 'symbol_', 'type': 'string'}, {
		'name': 'decimals_',
		'type': 'uint256'
	}], 'payable': false, 'stateMutability': 'nonpayable', 'type': 'constructor'
}, {
	'anonymous': false,
	'inputs': [{'indexed': false, 'name': 'interestAccumulated', 'type': 'uint256'}, {
		'indexed': false,
		'name': 'borrowIndex',
		'type': 'uint256'
	}, {'indexed': false, 'name': 'totalBorrows', 'type': 'uint256'}],
	'name': 'AccrueInterest',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': false, 'name': 'minter', 'type': 'address'}, {
		'indexed': false,
		'name': 'mintAmount',
		'type': 'uint256'
	}, {'indexed': false, 'name': 'mintTokens', 'type': 'uint256'}],
	'name': 'Mint',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': false, 'name': 'redeemer', 'type': 'address'}, {
		'indexed': false,
		'name': 'redeemAmount',
		'type': 'uint256'
	}, {'indexed': false, 'name': 'redeemTokens', 'type': 'uint256'}],
	'name': 'Redeem',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': false, 'name': 'borrower', 'type': 'address'}, {
		'indexed': false,
		'name': 'borrowAmount',
		'type': 'uint256'
	}, {'indexed': false, 'name': 'accountBorrows', 'type': 'uint256'}, {
		'indexed': false,
		'name': 'totalBorrows',
		'type': 'uint256'
	}],
	'name': 'Borrow',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': false, 'name': 'payer', 'type': 'address'}, {
		'indexed': false,
		'name': 'borrower',
		'type': 'address'
	}, {'indexed': false, 'name': 'repayAmount', 'type': 'uint256'}, {
		'indexed': false,
		'name': 'accountBorrows',
		'type': 'uint256'
	}, {'indexed': false, 'name': 'totalBorrows', 'type': 'uint256'}],
	'name': 'RepayBorrow',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': false, 'name': 'liquidator', 'type': 'address'}, {
		'indexed': false,
		'name': 'borrower',
		'type': 'address'
	}, {'indexed': false, 'name': 'repayAmount', 'type': 'uint256'}, {
		'indexed': false,
		'name': 'cTokenCollateral',
		'type': 'address'
	}, {'indexed': false, 'name': 'seizeTokens', 'type': 'uint256'}],
	'name': 'LiquidateBorrow',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': false, 'name': 'oldPendingAdmin', 'type': 'address'}, {
		'indexed': false,
		'name': 'newPendingAdmin',
		'type': 'address'
	}],
	'name': 'NewPendingAdmin',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': false, 'name': 'oldAdmin', 'type': 'address'}, {
		'indexed': false,
		'name': 'newAdmin',
		'type': 'address'
	}],
	'name': 'NewAdmin',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': false, 'name': 'oldComptroller', 'type': 'address'}, {
		'indexed': false,
		'name': 'newComptroller',
		'type': 'address'
	}],
	'name': 'NewComptroller',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': false, 'name': 'oldInterestRateModel', 'type': 'address'}, {
		'indexed': false,
		'name': 'newInterestRateModel',
		'type': 'address'
	}],
	'name': 'NewMarketInterestRateModel',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': false, 'name': 'oldReserveFactorMantissa', 'type': 'uint256'}, {
		'indexed': false,
		'name': 'newReserveFactorMantissa',
		'type': 'uint256'
	}],
	'name': 'NewReserveFactor',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': false, 'name': 'admin', 'type': 'address'}, {
		'indexed': false,
		'name': 'reduceAmount',
		'type': 'uint256'
	}, {'indexed': false, 'name': 'newTotalReserves', 'type': 'uint256'}],
	'name': 'ReservesReduced',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': false, 'name': 'error', 'type': 'uint256'}, {
		'indexed': false,
		'name': 'info',
		'type': 'uint256'
	}, {'indexed': false, 'name': 'detail', 'type': 'uint256'}],
	'name': 'Failure',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': true, 'name': 'from', 'type': 'address'}, {
		'indexed': true,
		'name': 'to',
		'type': 'address'
	}, {'indexed': false, 'name': 'amount', 'type': 'uint256'}],
	'name': 'Transfer',
	'type': 'event'
}, {
	'anonymous': false,
	'inputs': [{'indexed': true, 'name': 'owner', 'type': 'address'}, {
		'indexed': true,
		'name': 'spender',
		'type': 'address'
	}, {'indexed': false, 'name': 'amount', 'type': 'uint256'}],
	'name': 'Approval',
	'type': 'event'
}]

export async function getCompoundV2Tokens() {
	const result = []
	const compoundComptrollerContract = new Contract(COMPOUND_COMPTROLLER_ADDRESS, COMPOUND_COMPTROLLER_ABI, provider)
	const compoundTokenAddresses = (await compoundComptrollerContract.functions.getAllMarkets())[0]
	for (const compoundTokenAddress of compoundTokenAddresses) {
		const cTokenContract = new Contract(compoundTokenAddress, COMPOUND_ERC20_ABI, provider)
		const symbol = (await cTokenContract.functions.symbol())[0]
		const name = (await cTokenContract.functions.name())[0]
		const decimals = (await cTokenContract.functions.decimals())[0]
		result.push({
			address: compoundTokenAddress,
			data: {
				name,
				symbol,
				decimals: decimals.toNumber(),
				logoUri: COMPOUND_LOGO_URI,
			}
		})
	}
	return result
}
