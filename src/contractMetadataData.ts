
export type Address = `0x${string}`
export type Name = string
export type Protocol = 'Uniswap' | 'Uniswap V2' | 'Uniswap V3' | 'ETH2' | 'Arbitrum' | 'Lido' | 'Matic' | 'OpenSea' | '0x' | 'Zapper' | 'Aave' | 'ENS'
export type LogoRelativePath = string
export type Abi = string
export type ContractMetadataDataWithLogoAndAbi = readonly [Address, Name, Protocol, LogoRelativePath, Abi]
export type ContractMetadataDataWithLogo = readonly [Address, Name, Protocol, LogoRelativePath]
export type ContractMetadataDataWithoutLogo = readonly [Address, Name, Protocol]

export type ContractMetadataData = readonly (ContractMetadataDataWithLogo | ContractMetadataDataWithoutLogo | ContractMetadataDataWithLogoAndAbi)[]

export const contractMetadataData: ContractMetadataData = [
	[
		"0x00000000000c2e074ec69a0dfb2997ba6c7d2e1e",
		"ENS: Registry with FallBack",
		"ENS",
		"images/contracts/ENS.jpg",
		"[{\"inputs\":[{\"internalType\":\"contract ENS\",\"name\":\"_old\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"label\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"NewOwner\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"resolver\",\"type\":\"address\"}],\"name\":\"NewResolver\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"ttl\",\"type\":\"uint64\"}],\"name\":\"NewTTL\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"old\",\"outputs\":[{\"internalType\":\"contract ENS\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"recordExists\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"resolver\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"setOwner\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"resolver\",\"type\":\"address\"},{\"internalType\":\"uint64\",\"name\":\"ttl\",\"type\":\"uint64\"}],\"name\":\"setRecord\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"resolver\",\"type\":\"address\"}],\"name\":\"setResolver\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"label\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"setSubnodeOwner\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"label\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"resolver\",\"type\":\"address\"},{\"internalType\":\"uint64\",\"name\":\"ttl\",\"type\":\"uint64\"}],\"name\":\"setSubnodeRecord\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"uint64\",\"name\":\"ttl\",\"type\":\"uint64\"}],\"name\":\"setTTL\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"ttl\",\"outputs\":[{\"internalType\":\"uint64\",\"name\":\"\",\"type\":\"uint64\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]"
	],
	[
		"0x000000000022d473030f116ddee9f6b43ac78ba3",
		"Uniswap Permit2",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0x00000000219ab540356cbb839cbe05303d7705fa",
		"Beacon Deposit Contract",
		"ETH2"
	],
	[
		"0x0000a26b00c1f0df003000390027140000faa719",
		"OpenSea: Fees 3",
		"OpenSea"
	],
	[
		"0x000dd0b1528a396c6ea2e09796a7b4a534e9e37b",
		"Uniswap V2 Pair: WETH - ISP",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x004375dff511095cc5a197a54140a24efef3a416",
		"Uniswap V2 Pair: WBTC - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0066c9d4335f0fc5037603e276f918a3795635d8",
		"Uniswap V2 Pair: SHIBARIUM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x006ab11e89e7246cb8c0f7bdaa8c2713374b1676",
		"Uniswap V2 Pair: HACHI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x00aa1c57e894c4010fe44cb840ae56432d7ea1d1",
		"Uniswap V2 Pair: DOP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x00aa5429d1b7c90d156c812653970c6f86d5b062",
		"Uniswap V2 Pair: TAONU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x00b35e625c25495341f32e9238198cd99cde727e",
		"Uniswap V2 Pair: WETH - MARVIN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x00cef0386ed94d738c8f8a74e8bfd0376926d24c",
		"Uniswap V3 Pool: BUSD - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x00ed26e794b949e18b142f9108429b74ce08ac99",
		"Uniswap V3 Pool: WETH - SPX",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x00f44eb2f3500e19f7b4b63c0348f43a3aa37ebc",
		"Uniswap V2 Pair: WETH - DCI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x00f5e5b8cbb3c91a82fe82eb5fbb023543723093",
		"Uniswap V2 Pair: GNBU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0120b5473cc9b28321a8f6e712cb5b4d2df32b31",
		"Uniswap V2 Pair: WETH - ITGR",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x01388f9242964e2aaadef6379eb92276acb5520e",
		"Uniswap V2 Pair: USDT - FRONT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x015769601d8d4879c0e193eeab31f10cf03c9ea9",
		"Uniswap V3 Pool: USDC - MLP",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x01688e1a356c38a8ed7c565bf6c6bfd59543a560",
		"Uniswap V2 Pair: BFC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x017632b92ac2397ab61423044fa137ff8a9c6a16",
		"Uniswap V2 Pair: HACHIKO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x018c55910ae4178517b7eb31da8a4f69de784ee4",
		"Uniswap V2 Pair: Shiba 2.0 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x01949723055a451229c7ba3a817937c966748f76",
		"Uniswap V3 Pool: CTSI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x01962144d41415cca072900fe87bbe2992a99f10",
		"Uniswap V2 Pair: XOR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x01a8227d4e7c3068ad1000c97a059af5c5fa3476",
		"Uniswap V3 Pool: FLC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x01b464bc83f09e13c0ab218692ad09f971d88608",
		"Uniswap V2 Pair: WETH - CLOUD",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x01bd1d1f933692dfc64d1d64cc3ed1c24887edaa",
		"Uniswap V3 Pool: OMNI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x01e6dd22de77b0742f77d428a484d23fd2694536",
		"Uniswap V2 Pair: Fortune - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x01f4916850f37d262108a31aa7e1367441eba344",
		"Uniswap V2 Pair: XAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x01f77541c91a95e3ca6761a41445b4fa3c680a0f",
		"Uniswap V2 Pair: Kaeru - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x01f8989c1e556f5c89c7d46786db98eeaae82c33",
		"Uniswap V2 Pair: WETH - ROOT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x020c349a0541d76c16f501abc6b2e9c98adae892",
		"Uniswap V3 Pool: USDC - SNX",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x020e6d0e80d08567ecb14f942fa326748407a845",
		"Uniswap V2 Pair: UNQT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0216b5f9167355c6397db0e99709b9d289f2d5ac",
		"Uniswap V2 Pair: DEFIT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x02469e30dd450de2e9de00d49d679f1d1d774ada",
		"Uniswap V3 Pool: GET - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0254a309f5140d457c0699e2cd0457a692a69cc4",
		"Uniswap V3 Pool: KOIN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x02b9e949ba711523ee0f10470d09b47c64d7a46d",
		"Uniswap V3 Pool: SSNC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x02cde6be34a59ff01aa532d56956a3c339c26322",
		"Uniswap V2 Pair: LGO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x02f14c27037bd30f18a6578590fd40fafd3376ff",
		"Uniswap V2 Pair: MOONS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x02f95d16ce771145b23ad7b970973e33198a5e6b",
		"Uniswap V2 Pair: CORE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x03058769e699f6fb2bd8df8d49a39447b706a1b0",
		"Uniswap V2 Pair: FGM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x030d4f27df50e354602569dc647cf476e34351f2",
		"Uniswap V2 Pair: WETH - GME",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0311125b58d9602352cba5c925927ecb86a5905a",
		"Uniswap V3 Pool: CNV - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0318170609141bfdb38d20d1f1c5b5197670ecee",
		"Uniswap V3 Pool: SOV - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0323a401f66b054cafc80c6922b210bc1e650bf0",
		"Uniswap V2 Pair: ETHEREUM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x03296fdd8bf8e0f9def07fac3466b256fc8720b0",
		"Uniswap V2 Pair: LMWR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x035a397725d3c9fc5ddd3e56066b7b64c749014e",
		"Uniswap V2 Pair: HEX - HDRN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0379da7a5895d13037b6937b109fa8607a659adf",
		"Uniswap V2 Pair: DAI - BAS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0387e56b85e6dbac5586c74cfd089f03922cf3de",
		"Uniswap V2 Pair: CHOW - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x039b8f8fa004f235540aad903e88c415f2eeaf93",
		"Uniswap V3 Pool: WSH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x03e67a3a7775f80e49cc8fe004592c5bc8e2d273",
		"Uniswap V3 Pool: OTACON - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x03e86d24c462fa6ad88568053361186e4a5af68e",
		"Zapper.Fi: Balancer Zap in ETH or ERC20",
		"Zapper"
	],
	[
		"0x03eb30ca916c80583440274a0d3472e8947de1c1",
		"Uniswap V2 Pair: GENSLR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x03f6bc90a94e9e4ccfee45d682e71f5c9104869e",
		"Uniswap V2 Pair: WETH - YFBT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x040bef6a2984ba28d8af8a24ddb51d61fbf08a81",
		"Uniswap V2 Pair: WETH - COMBO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x04210c46af140780b39dc3380ee31204d7b80ce6",
		"Uniswap V2 Pair: WETH - ETH2.0",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x042dbc15b1859bc0539bc3297a1363770c8e6de0",
		"Uniswap V2 Pair: PAPI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x044f4cb7fc6cb4e4801b9b6927969d2d0258798d",
		"Uniswap V2 Pair: HAVOC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x04708077eca6bb527a5bbbd6358ffb043a9c1c14",
		"Uniswap V3 Pool: WETH - mETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x04840eaa3497e4c3934698ff88050ceb9893f78f",
		"Uniswap V2 Pair: UniFi - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x048d3180ecf61b82f47078f6ebb3298326d70431",
		"Uniswap V2 Pair: ISHI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x04916039b1f59d9745bf6e0a21f191d1e0a84287",
		"Uniswap V3 Pool: YFI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x049963a8c68d225dc03f32c299fcb1939173dfd3",
		"Uniswap V2 Pair: YFP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x04b35ef193e2357328ae79914569721a7ffd6146",
		"Zapper.Fi: ETH Bull",
		"Zapper"
	],
	[
		"0x04b6be23297548d828c3c4e4b7fb3f4a67d2dae3",
		"Uniswap V2 Pair: ETHPAD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x04ca0c71eec16fd4fa9d35ac924cc33eeb4187a2",
		"Uniswap V3 Pool: WETH - WRLD",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x04dd76803f247b611d4f470fc6cd206a9d02f869",
		"Uniswap V3 Pool: EFI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x04eb5b4c9d8becfc1f10a7e7c541b1169dc3adc9",
		"Uniswap V3 Pool: WETH - CDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x04ed15a29addad1e8189026d17879403997050a3",
		"Uniswap V3 Pool: PSWAP - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x04f01db076c85ea9a27c84c83e13b166fe9db95c",
		"Uniswap V2 Pair: Dede - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x050397956e1fc8a0a2e62af035275f8a415b85a7",
		"Uniswap V2 Pair: TKN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0509c9e09d3cf2b5346ebc212231aed09c0fd0b6",
		"Uniswap V2 Pair: PEPEBOMB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0513dcc2eb4700e148e56ca4de023f606b319e16",
		"Uniswap V2 Pair: SNAKE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x051ef36e55875c08e4efaea6072c6d0f66fb0b9f",
		"Uniswap V2 Pair: WETH - PALM",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0529bf56c9448eafe144c151402bc11c0ff47c4c",
		"Uniswap V2 Pair: EPIK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x052cea5c8bc91e204bf1e686bb91f25f66d831b1",
		"Uniswap V3 Pool: SHI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x05391bd57d8c6fb30d9c39f6618f2207893922dc",
		"Uniswap V3 Pool: WETH - GME",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x05544f4a8e5c10feb96fa781d95da65048421dde",
		"Uniswap V2 Pair: WETH - BABY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0555f052da0a50d39369b0f634855edc858baa18",
		"Uniswap V2 Pair: DEXG - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x057835ad21a177dbdd3090bb1cae03eacf78fc6d",
		"Aave: Protocol Data Provider V2",
		"Aave",
		"images/contracts/aave.png"
	],
	[
		"0x05880fec68308e6e8976fa766faefce0e5a86300",
		"Uniswap V3 Pool: FUKU - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x058d79a4c6eb5b11d0248993ffa1faa168ddd3c0",
		"Uniswap V3 Pool: wNXM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x05946af9da74499c8a0a2788402e7eea789bbe9d",
		"Uniswap V2 Pair: JIZZ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x059615ebf32c946aaab3d44491f78e4f8e97e1d3",
		"Uniswap V3 Pool: rsETH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0599282297a15ca86a10dabfc2bd5781f610e246",
		"Uniswap V2 Pair: VDO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x05aaa0053fa5c28e8c558d4c648cc129bea45018",
		"Uniswap V3 Pool: NCT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x05b0c1d8839ef3a989b33b6b63d3aa96cb7ec142",
		"Uniswap V2 Pair: FUN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x05be6820730b30086d6355c44c424230aaff41fb",
		"Uniswap V2 Pair: WETH - VEMP",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x05c024b441d2c288c2729b484bd4bcef3596aa51",
		"Uniswap V2 Pair: OSAK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x05cb3f8d65f91d3d518310abe678009a75d7e0cb",
		"Uniswap V2 Pair: HINA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x05f04f112a286c4c551897fb19ed2300272656c8",
		"Uniswap V2 Pair: WETH - POLK",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x05f21e62952566cefb77f5153ec6b83c14fb6b1d",
		"Uniswap V2 Pair: RFuel - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0612f518ed9f6bf1d8c0fa1f32149bed21557526",
		"Uniswap V2 Pair: RIGEL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0612f7b15779ca6ddbe927f92d6c4144fbae1485",
		"Uniswap V2 Pair: REALM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0616189d9a6c609ccbdc74fec3853146795efed3",
		"Uniswap V3 Pool: FINE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x061883cd8a060ef5b8d83cde362c3fdbd8162eee",
		"Uniswap V2 Pair: WETH - LBR",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x063e913f23d2314d75962871b10eecf48c539046",
		"Uniswap V2 Pair: Dubbz - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x063ffb8a560dcbff91da1d7ad74f253d53838390",
		"Uniswap V2 Pair: WETH - ENGN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x06441d79d21ff7ab135e7a4052025834a43a6fe3",
		"Uniswap V2 Pair: WETH - CRWNY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0650b048781063083723a1ef1871418d7429402e",
		"Uniswap V2 Pair: POPE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x066b2b559ecf68ff65558993a9c9fea12ccb3a0e",
		"Uniswap V2 Pair: BS9000 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x06729eb2424da47898f935267bd4a62940de5105",
		"Uniswap V3 Pool: CEL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x06a894754ef1c87aeb2a9f859503b2dbff4dc106",
		"Uniswap V2 Pair: CTC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x06acf8b25ab8ce249f487d30d78be4fc021cff8a",
		"Uniswap V2 Pair: PEEZY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x06ad23978f67ae8cc76c54b74993b31a816bac2b",
		"Uniswap V2 Pair: WETH - CONV",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x06ada8f74d99c6c200672b02e5c3341866ca3bfb",
		"Uniswap V3 Pool: MVI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x06b1655b9d560de112759b4f0bf57d6f005e72fe",
		"Uniswap V3 Pool: WETH - GTC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x06bf054b9aafc075f9be814e1b7f948c6e845596",
		"Uniswap V2 Pair: WETH - NCR",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x06cbb48b45895520963aca63cbbaf0ad0600fac6",
		"Uniswap V2 Pair: G - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x06cd6245156c3608ae67d690c125e86a8bc6a88c",
		"Uniswap V2 Pair: OMIKAMI - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x06e4c11eaac88ae9253f9e86b60c8b4e7d4b281c",
		"Uniswap V2 Pair: NBT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x06f00544c0bc62e6db10f46d370dfccdc23d8189",
		"Uniswap V3 Pool: WETH - ETHFI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x06fac8c6785976a793339b10433e2fb66e58ff25",
		"Uniswap V2 Pair: FWOG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x074201cb10b1efedbd8dec271c37687e1ab5be4e",
		"Uniswap V2 Pair: STONKS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x075f4849d3c2088e5599cecf6ee0fdf8addfd124",
		"Uniswap V3 Pool: WETH - ✺RUG",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x076a3e1500f3110d8f4445d396a3d7ca6d0ca269",
		"Uniswap V2 Pair: WETH - PEPE2.0",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x07840b4825b74cc6ce264bf2743dee647194f49b",
		"Uniswap V2 Pair: KOMPETE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x07a6e955ba4345bae83ac2a6faa771fddd8a2011",
		"Uniswap V3 Pool: MATIC - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x07a72f8f6a29cf501e7226ca82264f9ee79380e7",
		"Uniswap V3 Pool: USDC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x07b45a314a3119eb287f2ec2c82d8c2077463506",
		"Uniswap V2 Pair: WETH - EMRLD",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x07d4d6845e2c713de83a42bd56b0efcb2302c533",
		"Uniswap V2 Pair: WETH - AstroLion",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x07e3fadb0e1e7f1c1ac4e4b48e9cd57940c837a6",
		"Uniswap V2 Pair: XRP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x07ed78c6c91ce18811ad281d0533819cf848075b",
		"Uniswap V3 Pool: ERN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x07f03a28a7a85d54abcfcbb2173128022eed9ecd",
		"Uniswap V2 Pair: DOGE2.0 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x07f3d316630719f4fc69c152f397c150f0831071",
		"Uniswap V3 Pool: EURT - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x080bf510fcbf18b91105470639e9561022937712",
		"0x: Exchange v2.1",
		"0x"
	],
	[
		"0x084b5191bd08412952337b1108b6e5942418928f",
		"Uniswap V3 Pool: SNT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x08650bb9dc722c9c8c62e79c2bafa2d3fc5b3293",
		"Uniswap V2 Pair: WETH - AMP",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0883012fd201384f03ca6f68d025e934328c3437",
		"Uniswap V2 Pair: ANARCHY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x089dfd0078aaa2c9529bb37f66ccea1dc0ced3be",
		"Uniswap V2 Pair: PUNDIX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x08ad72b16d56a5a9f2189afb972dbdfe72920cac",
		"Uniswap V2 Pair: RNB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x08c181a583dd5e0be2eea021747f3a663eabb976",
		"Uniswap V2 Pair: BARRON - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x08c42506d5ff7a983ae7be2e5a380a42508b698c",
		"Uniswap V2 Pair: USDT - GENE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x08c8fda33443797f339bb7b8b920e9a5fcec47bd",
		"Uniswap V2 Pair: TENG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x08ca99d76a2064fd43ed1c1e97470a35ae276538",
		"Uniswap V2 Pair: WETH - YES",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x08f68110f1e0ca67c80a24b4bd206675610f445d",
		"Uniswap V3 Pool: gOHM - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x09062ce4f20aac71f8074ac6cf8e6968abd4d03e",
		"Uniswap V2 Pair: EQX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x09117bff68b5939319e61b226bf1f3f5f985eba1",
		"Uniswap V3 Pool: QANX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0928592f80d63d474257a7b797120e301ba2d987",
		"Uniswap V2 Pair: TRB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x092e793afe54366601eb7ef7e63b6abb93edb485",
		"Uniswap V2 Pair: MINT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x094a28b22e1b4218d590ea6fa916b3c5e670ba55",
		"Uniswap V3 Pool: USDC - UOS",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x09539705838eea6661633d568f77bc10a02cf375",
		"Uniswap V2 Pair: WAS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x09aa63b7a22eefc372196aacd5b53441ed390bfb",
		"Uniswap V3 Pool: ENS - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x09d1d767edf8fa23a64c51fa559e0688e526812f",
		"Uniswap V2 Pair: OLAS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0a05e2e9d6333387d4f634b08fff5210292f5561",
		"Uniswap V2 Pair: QSP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0a0acc02aec70778b34ea1a92bd9ec5d00f16593",
		"Uniswap V2 Pair: PCNT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0a24e4937e00d94124fde1471ece2d5fb251e1e5",
		"Uniswap V2 Pair: GFY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0a4ccfdc42013bd01420cc8aa1e34e77ce28c580",
		"Uniswap V2 Pair: WETH - $JOY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0a55882f4e1117adc54afbbac4a39079ad52fb89",
		"Uniswap V3 Pool: SSV - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0a61a26c0dc08f4ed68a00966cc5a0ca60918ea3",
		"Uniswap V3 Pool: ALI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0a6fc72967d2b559507d2e03c631ccafb8bcb872",
		"Uniswap V3 Pool: USDC - GMEE",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0a86421ee3a48fa6a2e1b7775860b39d96e1453a",
		"Uniswap V2 Pair: GOLD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0a965a4caf929338044c593d82d385c4c898d8c6",
		"Uniswap V2 Pair: FWB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0ac2d6f5f5afc669d3ca38f830dad2b4f238ad3f",
		"0x: Eth2Dai Bridge",
		"0x"
	],
	[
		"0x0ae4ba350148c5e45a36a1a59c061d7d8964f8b8",
		"Uniswap V2 Pair: JACY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0ae8d75e6168420a7d52a791c2465b43307408b4",
		"Uniswap V2 Pair: 0XL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0afd65ec6b286d353c42268738d66bbf56ba9de5",
		"Uniswap V2 Pair: BCAT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0b07188b12e3bba6a680e553e23c4079e98a034b",
		"Uniswap V2 Pair: USDT - MOCA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0b0d6c11d26b58cb25f59bd9b14190c8941e58fc",
		"Uniswap V2 Pair: OVR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0b1d8faff1fe1ead5ab05729b0739d758ed26024",
		"Uniswap V3 Pool: EEFI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0b20792b44df2077e38a48cf8260122f0251fbaf",
		"Uniswap V2 Pair: STATS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0b298c52c15974046a7b7884637155ebc1f82045",
		"Uniswap V2 Pair: P3PE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0b41854f5d251c12b1de6a88dd4292944f04305c",
		"Uniswap V2 Pair: SNP - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0b85b3000bef3e26e01428d1b525a532ea7513b8",
		"Uniswap V2 Pair: WETH - RIO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0b9f5cef1ee41f8cccaa8c3b4c922ab406c980cc",
		"Uniswap V2 Pair: SHIK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0ba577b7e9096156af0d3a44e5056491566b7289",
		"Uniswap V2 Pair: DAI - $LSVR",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0bb5fd9b4e16607d32c4e5ac625ac5381c605920",
		"Uniswap V3 Pool: sOHM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0bc13935c6960ff823daf255a276acab93aea072",
		"Uniswap V2 Pair: EJS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0bc4428491010dfeaa97e48c70bf4940fa783b40",
		"Uniswap V2 Pair: KANGAL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0bdcde6854f64a1144192b2e2bb4c995b50cd849",
		"Uniswap V3 Pool: WETH - GBTC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0bee64a7c035fa2f69b9a6cad5d761de038ecb02",
		"Uniswap V2 Pair: LILA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0bf46ba06dc1d33c3bd80ff42497ebff13a88900",
		"Uniswap V2 Pair: rDPX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0c0c910c530246b55b517cdf2f2199b8a9193a80",
		"Uniswap V2 Pair: IRO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0c2445bec45c443c58f44f8e0a5796960e052d63",
		"Uniswap V2 Pair: WETH - VISR",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0c30062368eefb96bf3ade1218e685306b8e89fa",
		"Uniswap V3 Pool: BITCOIN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0c3fdf9c70835f9be9db9585ecb6a1ee3f20a6c7",
		"Uniswap V2 Pair: WETH - MAGA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0c4a68cf6857cc76fe946d04fe85fac5fae9625e",
		"Uniswap V2 Pair: QNT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0c722a487876989af8a05fffb6e32e45cc23fb3a",
		"Uniswap V2 Pair: TORN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0c9c5daf1d7cd8b10e9fc5e7a10762f0a8d1c335",
		"Uniswap V2 Pair: VXV - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0ce2f0a319fe761e8ca975414558c12900c717c2",
		"Uniswap V3 Pool: WETH - GETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0cfb06414c6d9790bc661230dba0b24060808bf4",
		"Uniswap V2 Pair: GAME - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0cfbed8f2248d2735203f602be0cae5a3131ec68",
		"Uniswap V3 Pool: WETH - SLP",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0cfd1ab3f175c684f907ed3704007fceb27727e2",
		"Uniswap V2 Pair: GOKU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0d0a1767da735f725f41c4315e072c63dbc6ab3d",
		"Uniswap V2 Pair: BULLET - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0d0bb71a3c473cf754203d7d0e2e67a684bebedc",
		"Uniswap V2 Pair: WETH - BRUH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0d0d65e7a7db277d3e0f5e1676325e75f3340455",
		"Uniswap V2 Pair: MTA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0d0f908ad29bd8a9f8d99533e3ad69e2e40f3094",
		"Uniswap V2 Pair: AXN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0d4a11d5eeaac28ec3f61d100daf4d40471f1852",
		"Uniswap V2 Pair: WETH - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0d5e7b851a6054ea636ce32423231dc3b6ec0204",
		"Uniswap V2 Pair: WETH - WagieBot",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0d9c6511980f80e477a774156492f5c133d2c0f3",
		"Uniswap V2 Pair: SUPERBID - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0da5b1c827c85889deac80e652e17592b865295c",
		"Uniswap V2 Pair: IO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0dacb47e00aed6abade32c7b398e029393e0d848",
		"Uniswap V2 Pair: SOCKS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0db1a0061270418037fd9839dff08b8377b55e1d",
		"Uniswap V2 Pair: SALT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0de0322d3ac0d5002e2bc9c3a188728728d90799",
		"Uniswap V2 Pair: NAP - ZZZ",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0de0fa91b6dbab8c8503aaa2d1dfa91a192cb149",
		"Uniswap V2 Pair: WBTC - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0e236240c4e9a26e4e8d6d516fc2c028f6fdc3bb",
		"Uniswap V2 Pair: DAI - BCC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0e2c4be9f3408e5b1ff631576d946eb8c224b5ed",
		"Uniswap V3 Pool: WETH - GRT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0e4c6715ac7bc80a93f47bbf92281a88ad729c1e",
		"Uniswap V2 Pair: WETH - GGTK",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0e85fb1be698e777f2185350b4a52e5ee8df51a6",
		"Uniswap V2 Pair: BST - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0e8cc25eac180d68ff214bb9d4b2a043af764a28",
		"Uniswap V2 Pair: VEE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0e9971ff778b042d549994415fb2774b5a3fe7b6",
		"Uniswap V2 Pair: CVC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0eb9c75fc0cac4a54d4f6924236075fca39b2ae8",
		"Uniswap V2 Pair: SALLY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0ebc0443b8187066a00f31049fb1c4700389f3db",
		"Uniswap V3 Pool: ALPHABET - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0ed2b16d5ac4a997f896562f7e8a8a357c1f8222",
		"Uniswap V2 Pair: WETH - MFUND",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0eddb3da7e77ab4f5f1f636f711b320e6225c46d",
		"Uniswap V2 Pair: Morty - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0ee0cb563a52ae1170ac34fbb94c50e89adde4bd",
		"Uniswap V2 Pair: WAXE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0efb424c465dbd0a626359d63412838f727f2c25",
		"Uniswap V2 Pair: MUTE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0efea698136d636e2babad10821e9064fe08f418",
		"Uniswap V2 Pair: WETH - ICE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0f027d40c80d8f70f77d3884776531f80b21d20e",
		"Uniswap V2 Pair: RST - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0f2156fbe6142c72c150d30c2522a5988110b013",
		"Uniswap V2 Pair: KEL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0f225fb979029ac264c7cc9493745b1fdb28c82d",
		"Uniswap V2 Pair: HID - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0f23d49bc92ec52ff591d091b3e16c937034496e",
		"Uniswap V2 Pair: WOJAK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0f2e5e488daa815361ada55ef816b47679918897",
		"Uniswap V3 Pool: MOBY - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0f388ecdbc128083bfe317b00de2c25fbe9f24d5",
		"Uniswap V2 Pair: SWAG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0f5a2eb364d8b722cba4e1e30e2cf57b6f515b2a",
		"Uniswap V2 Pair: WETH - TVK",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0f88a9d642fa9283338e1ec4496e7dc72714831a",
		"Uniswap V3 Pool: TBANK - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0f8e31593857e182fab1b7bf38ae269ece69f4e1",
		"Uniswap V2 Pair: GRID - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0f95e6627923848a08232b5fca813c0fb86042b8",
		"Uniswap V2 Pair: RAZOR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0f9768ee0914c48f65234cf10e8aeb6028c8426c",
		"Uniswap V2 Pair: BID - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0fca918168e827ed12dd7ed80992278ddd67f555",
		"Uniswap V2 Pair: HARAMBE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0fd2779cab172bd09d3a68ed78a7ad757699fa1f",
		"Uniswap V2 Pair: TCATI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0fdc86703c938e3e1cbc9e14f21c6bf709c13acc",
		"Uniswap V2 Pair: TXL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0ff6c9cb0755d45d237813dfd76928e54a2c1001",
		"Uniswap V2 Pair: NINU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0ffcd550338e4383aab04a685f204229c84c8db2",
		"Uniswap V2 Pair: SATASHI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x102cbca736270fa849d936b7d5b7ff6afc1324e6",
		"Uniswap V2 Pair: HRZN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x10358db0e8532455d3374fb09cf3fbec631b1914",
		"Uniswap V3 Pool: INSP - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1037fa1f40b69c9266c4aeb2abcedc7553614b4c",
		"Uniswap V2 Pair: GLCH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x105077ef53d3a281f006812af15419d29ed4a735",
		"Uniswap V2 Pair: MEGA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1089ed688e29def6de80b3262ac3374f14cf0857",
		"Uniswap V2 Pair: GDX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x108fd773a6e5ae3cec07aa461986a20006ffd611",
		"Uniswap V2 Pair: APUI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1091b1f0be94745a6f220243d7f451e228da1b52",
		"Uniswap V3 Pool: MOYA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x109830a1aaad605bbf02a9dfa7b0b92ec2fb7daa",
		"Uniswap V3 Pool: wstETH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x10ae2314c1d5b927430bc7fbcc6dada0673cb014",
		"Uniswap V2 Pair: INU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x10b17d9b2aee94a65eeb4c71141add20caa4376f",
		"Uniswap V2 Pair: wMBX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x10bde435d7c87f283079040a9eae7e750b754753",
		"Uniswap V2 Pair: n - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x10bff0723fa78a7c31260a9cbe7aa6ff470905d1",
		"Uniswap V2 Pair: CONAN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x10cfa744c77f1cb9a77fa418ac4a1b6ec62bcce4",
		"Uniswap V2 Pair: MCB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x10d902e82a04f4b1e6f3db259da050e530bc43c6",
		"Uniswap V2 Pair: VB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x10db37f4d9b3bc32ae8303b46e6166f7e9652d28",
		"Uniswap V2 Pair: RBC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x10e4a463f2ace6e3836fe547e885993844299be6",
		"Uniswap V2 Pair: FLOKI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1107b6081231d7f256269ad014bf92e041cb08df",
		"Uniswap V2 Pair: YAX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1112956589a2bea1b038732db4ea6b0c416ef130",
		"Uniswap V2 Pair: NEURAL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x11181bd3baf5ce2a478e98361985d42625de35d1",
		"Uniswap V2 Pair: ASTO - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x11184bf5937beb9085b4f070e7b410be052e37a6",
		"Uniswap V3 Pool: ZENIQ - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1123bb74bbcfcaa5e5e021547e38979a4a580c7d",
		"Uniswap V2 Pair: WETH - HEEL",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x112cdb1e2d38c7d08dc485f2e229905a681d3de4",
		"Uniswap V2 Pair: WETH - TRUMPONOMICS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1140201364600b0016f35c5dd32e2269229ac3d6",
		"Uniswap V2 Pair: CETI - wTAO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1141203c9b8ed73eae3961e1a5cf2fd84deb3992",
		"Uniswap V2 Pair: WETH - SHIB",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1144bb78db2dd3d24ca786ab6aeebd78b4009a63",
		"Uniswap V2 Pair: WETH - SAFEMOON2.0",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x115dd2b4ded5ae4581e3c007917ba3ac5b69f7cb",
		"Uniswap V2 Pair: WETH - vitalik.eth",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x117439f6fdde9a09d28eb78759cd5c852a8653f0",
		"Uniswap V3 Pool: AST - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x11950d141ecb863f01007add7d1a342041227b58",
		"Uniswap V3 Pool: PEPE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x11a708ded0fe503bbbf43d2baf403120dc5e145c",
		"Uniswap V2 Pair: USDC - SPIRAL",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x11b1f53204d03e5529f09eb3091939e4fd8c9cf3",
		"Uniswap V2 Pair: MANA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x11b7a6bc0259ed6cf9db8f499988f9ecc7167bf5",
		"Uniswap V3 Pool: KP3R - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x11b815efb8f581194ae79006d24e0d814b7697f6",
		"Uniswap V3 Pool: WETH - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x11c20a3b83ff206e4ab6b5935d766564925b8b2b",
		"Uniswap V2 Pair: dogwifhat - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x11cb9e028b82eee75443fdc27929b9c49736c552",
		"Uniswap V2 Pair: WETH - DEXE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x11cc619c612e2735c31d1387bbd073da55c39c63",
		"Uniswap V2 Pair: MATT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x11e5cd39f19cdec570001b35b9410b56f67ebca3",
		"Uniswap V2 Pair: WETH - LOONG",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x11f851639dd46a07f178e81ee1b234e91fd89c97",
		"Uniswap V3 Pool: wBAI - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x120ffad35bb97a5baf9ab68f9dd7667864530245",
		"Uniswap V3 Pool: APU - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x121a8d25a13f9c2a50368dc18befdd7d6c1d00c7",
		"Uniswap V2 Pair: SHREK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x121b382b5f003c41fb49e7b88d079c8f513feaac",
		"Uniswap V2 Pair: WETH - ESH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1221f327f02daf75c1d9291dc9026d2f444ee360",
		"Uniswap V2 Pair: DXP - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x122e55503a0b2e5cd528effa44d0b2fea300f24b",
		"Uniswap V3 Pool: WOO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x123fca7e8272a8e9c3bb7113c259abc4901e792b",
		"Uniswap V2 Pair: CVC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x126262c0a43e4130f5619513e7ef6231dca3e5b1",
		"Uniswap V2 Pair: WETH - GMAC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x126b3e5bfe28244626d4b294a84c50d8a2297859",
		"Uniswap V3 Pool: STMX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1273ad5d8f3596a7a39efdb5a4b8f82e8f003fc3",
		"Uniswap V2 Pair: HEGIC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x127452f3f9cdc0389b0bf59ce6131aa3bd763598",
		"Uniswap V3 Pool: WETH - SOL",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x127cadea890813125ca083280ab921d2220558c2",
		"Uniswap V2 Pair: eSOV - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x128ab6c2d883eed81a900510d0f885933a9352df",
		"Uniswap V2 Pair: YFOX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x12cc685eeb95d3fcdfae0a996e214e51fa6f7548",
		"Uniswap V3 Pool: SKL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x12d4444f96c644385d8ab355f6ddf801315b6254",
		"Uniswap V2 Pair: CVP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x12de8a435ff54f3e00951ef04119ff0e6a717bff",
		"Uniswap V2 Pair: DVI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x12f5f5bf90c1260ce0086b690614dfeee2fb36a3",
		"Uniswap V2 Pair: WETH - Mring",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x131caa9c69394acb7c20c1a0af0ca9ebd1cdbb86",
		"Uniswap V2 Pair: DBUY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x13240b97c40d7e306cedf3adc9cb057cec74c361",
		"Zapper.Fi: MKR Unipool",
		"Zapper"
	],
	[
		"0x1385fc1fe0418ea0b4fcf7adc61fc7535ab7f80d",
		"Uniswap V3 Pool: DEAI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1399448affd2721ed537a349d0a09f466ff4764b",
		"Uniswap V2 Pair: ICELAND - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x13bb5add7fd43c52d987e2c320f95d4b5e9cfa5f",
		"Uniswap V2 Pair: MXS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x13dc0a39dc00f394e030b97b0b569dedbe634c0d",
		"Uniswap V3 Pool: ANKR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x13f59e144dc9e09270454eb1e228b0fde44f9002",
		"Uniswap V3 Pool: VOMBATUS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x14036bbda496e39dc3db6025fe858431c1ddadb1",
		"Uniswap V3 Pool: USDC - GF",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x141df9a608856d1651c9a3c27b39960ff0418a12",
		"Uniswap V3 Pool: TAMA - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x14424eeecbff345b38187d0b8b749e56faa68539",
		"Uniswap V3 Pool: WETH - ZRX",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1458770554b8918b970444d8b2c02a47f6df99a7",
		"Uniswap V3 Pool: RETIK - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x145f0c28a85e351b6de89fe06a0c062528da5d13",
		"Uniswap V2 Pair: EGOD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x146407594b8b58051ab8becbca8fd22b77c2edfa",
		"Uniswap V2 Pair: INU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x146d3401b6a41122bd318ba676a01c44cb0795e2",
		"Uniswap V2 Pair: NFY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1474c1fa8078edeeeb9753d76526c142158f3236",
		"Uniswap V3 Pool: Kendu - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1475ec80834c6a78f8afebb6670993dae632f0f7",
		"Uniswap V2 Pair: NEX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x14b1843dd8b9723e24c9cd1c66a0bb678517a335",
		"Uniswap V2 Pair: MBOT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x14b6154bcbf537368af932901456a7feb57cbe5a",
		"Uniswap V2 Pair: OCC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x14bb16256065ff4abf4a35c2a7c2fdf2a621cd61",
		"Uniswap V2 Pair: STABLZ - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x14d725edb1299ff560d96f42462f0234b65b00af",
		"Uniswap V3 Pool: HYPER - TITANX",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x14dd6197c4ed7f5b375d37b7bc4f9ba2417575aa",
		"Uniswap V2 Pair: MECA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1512639d5da6968a041a5ba0e333241e431c3413",
		"Uniswap V3 Pool: MEMAG - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x15153da0e9e13cfc167b3d417d3721bf545479bb",
		"Uniswap V3 Pool: Neiro - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x151ccb92bc1ed5c6d0f9adb5cec4763ceb66ac7f",
		"Uniswap V3 Pool: ETH2x-FLI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1533f61facb7cc3a632b12ea9f55d3fbb57309e0",
		"Uniswap V2 Pair: SUDO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x153f2044feace1eb377c6e1cf644d12677bd86fd",
		"Uniswap V2 Pair: YDF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x15620cf83d427dd6955f31c14f401e7879ad7291",
		"Uniswap V3 Pool: GFY - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x157dfa656fdf0d18e1ba94075a53600d81cb3a97",
		"Uniswap V3 Pool: UMA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x15842c52c5a8730f028708e3492e1ab0be59bd80",
		"Uniswap V2 Pair: SECT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x159bce2f33186e1252bf1ce216b4c8dfb16e14e5",
		"Uniswap V2 Pair: DAI - ADAO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x15a91f83fdb68b224ebdf05d50f4e6a7b72caee9",
		"Uniswap V2 Pair: GUY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x15ab0333985fd1e289adf4fbbe19261454776642",
		"Uniswap V2 Pair: WETH - MLN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x15d12305d0f57c99d947e66d4164094ffccf78fc",
		"Uniswap V3 Pool: SWISE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x15e2cbcc43b07d74eb48e686ec80cc9ece98a0c1",
		"Uniswap V2 Pair: WETH - XEROAI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x162cb3a005c81dbd61f85b6a8c609189c026735c",
		"Uniswap V2 Pair: SRK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x162cec59dfac80086d7370f11dcd8705a45c9333",
		"Uniswap V3 Pool: WETH - GODS",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1635d18f20c9a6e302931faf61643fed57fbcce3",
		"Uniswap V2 Pair: BABYSHIA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1636a5dfcf7a21945c06d1bea40b52ce975ea614",
		"Uniswap V2 Pair: LABRA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1637d0bce998bb73b05837825ac34938714fea2c",
		"Uniswap V2 Pair: SRM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x164ed0df02b3747315b50b806b79962ad9517578",
		"Uniswap V2 Pair: YELD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1657a26534db98c71b55f4e15ae8083671a8059b",
		"Uniswap V2 Pair: NEBO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x16588709ca8f7b84829b43cc1c5cb7e84a321b16",
		"Uniswap V3 Pool: PRIME - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1686f2a47709eb4cd6d0f1bf48468aac7d68da75",
		"Uniswap V2 Pair: WETH - SVPN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x168e23dbdc424bbe269092de5cb7dc1de0fbda90",
		"Uniswap V2 Pair: XBOT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x16980c16811bde2b3358c1ce4341541a4c772ec9",
		"Uniswap V3 Pool: LUSD - DAI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x169bf778a5eadab0209c0524ea5ce8e7a616e33b",
		"Uniswap V2 Pair: INSUR - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x16a0a5f048fb0d56213d89d19e46f0f36fd3ddcc",
		"Uniswap V2 Pair: WETH - SHIBC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x16ac64ddfacca437be7fe0da0c45bcd97227588a",
		"Uniswap V2 Pair: BRETT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x16b072ea65a70ef2abfadc2a7f5d5c4fc7a2146d",
		"Uniswap V2 Pair: WETH - ZAPI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x16b70f44719b227278a2dc1122e8106cc929ecd1",
		"Uniswap V3 Pool: WETH - LUNA",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x16bfd24976ab1b2b8145eb6f5c54fd9ed093ff30",
		"Uniswap V2 Pair: GME - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x16f60256a518e5d1dd9cf2cefc3d4a601c399574",
		"Uniswap V3 Pool: WETH - ZZ",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x171d6a77251f64865aa6250119ec661dabd0c947",
		"Uniswap V2 Pair: UNDEAD - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x176bb366b31a5292e27c6b6fcf7b7e54d137ec3d",
		"Uniswap V2 Pair: TEST - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x177622e79acece98c39f6e12fa78ac7fc8a8bf62",
		"Uniswap V3 Pool: cbETH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x178f1a72172a99f7f44e125de6413ea808713e7c",
		"Uniswap V2 Pair: WETH - XCUR",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x18052adacd380cb006e0344b6c1d3a6107819d93",
		"Uniswap V3 Pool: BEN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x180efc1349a69390ade25667487a826164c9c6e4",
		"Uniswap V2 Pair: BEAM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x18112da8f2d6576926fcfb4d2c511fe9c6f8b2b5",
		"Uniswap V2 Pair: WETH - ZORA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1812ef69e1753f908229df40d304a5fbdcd52dd3",
		"Uniswap V2 Pair: FORTH - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x181655fee818e1e22c8aebb780c716e15b6f29aa",
		"Uniswap V2 Pair: USDC - LUNA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x187094a90a0fc1f0cf51ef408cf88338a456561b",
		"Uniswap V2 Pair: WETH - BLES",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x187b42e05c4d5f4ac90f7ae60839c770c645a0dd",
		"Uniswap V2 Pair: XMAS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x188270f9662b244862fe617990e065050767cd02",
		"Uniswap V2 Pair: BYN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1885de8f5773e09cd01c2246508897a40de06160",
		"Uniswap V2 Pair: OPIUM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x18adbc0144059be823a5d0de1d6445002f858eb5",
		"Uniswap V3 Pool: WETH - BOSON",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x18bbe20f81bdcb340325e28a6ee6bb426b7ccbc1",
		"Uniswap V3 Pool: DEVVE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x18c2e87d183c5338a9142f97db176f3832b1d6de",
		"OpenSea: Payments",
		"OpenSea"
	],
	[
		"0x18d96b617a3e5c42a2ada4bc5d1b48e223f17d0d",
		"Uniswap V3 Pool: USDC - UST",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x18eba63caf7fa6b530aaee4e4fab0eeda666dd25",
		"Uniswap V2 Pair: ETHEREUM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x18f238a96392a8fabb87065b5129dd00192e6cb1",
		"Uniswap V2 Pair: SHARE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x18f7b33172f5150949eef05ebb3b5d4fe245f391",
		"Uniswap V3 Pool: OLAS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x18f9a12e7b58257c749385712ecb4fa03cb7910e",
		"Uniswap V3 Pool: ANON - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x190570d9a38df7988721d0cfc58c248679a6df3e",
		"Uniswap V2 Pair: 喵喵喵喵喵 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x190a6e305990f202ac98dc3a76500f339a35982d",
		"Uniswap V3 Pool: POLY - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1921b852f38bc68430780242b2628d0ca14cef83",
		"Uniswap V2 Pair: WETH - NCDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x19363890e559d365e943604286e448a19ffead9c",
		"Uniswap V3 Pool: MET - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x197d7010147df7b99e9025c724f13723b29313f8",
		"Uniswap V2 Pair: SYNC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x198063c23ac1317ff3cc57d9f54faac6b675d89f",
		"Uniswap V3 Pool: MEME - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x198a62268f29d72634b634f80def70c156215485",
		"Uniswap V2 Pair: WETH - FROGE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x198c132ec5e376db9952c2cce69a1b6ccff8340d",
		"Uniswap V2 Pair: PepeGains - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x19970d8384fa70fbce3ca58cc82ceec7513cfb83",
		"Uniswap V2 Pair: GINNAN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x19a573b228468f3bf917389f4e2d4f2997610f71",
		"Uniswap V3 Pool: WETH - PRE",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x19a59f62150586dd5de380f96f34651f1d2044e9",
		"Uniswap V2 Pair: MTE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x19a7c579e714e43c57997318ff0ba46a6d6891e4",
		"Uniswap V2 Pair: WETH - GLDN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x19c10e1f20df3a8c2ac93a62d7fba719fa777026",
		"Uniswap V3 Pool: DINO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x19c1f6c7468ad4076b05a5f79e3ee80ce0064718",
		"Uniswap V3 Pool: SORA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x19dff439fd91c3946b98eb65e07368c5c8c3414d",
		"Uniswap V2 Pair: LINA - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x19f83460e387f1b01f94b85c2532ebc15b0b712e",
		"Uniswap V3 Pool: USDT - SAITO",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x19f96bdc38c929b53b7ba5331a9399da04a5f32f",
		"Uniswap V2 Pair: MUSK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x19fe9857bb3652e9007f2347a1f877ffa9215f7f",
		"Uniswap V3 Pool: FLC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1a0656953798e43ca72434ca04f83724f11d6fca",
		"Uniswap V2 Pair: SKAI - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1a0d2c9314909837119baeff8f6402d709cfe9ae",
		"Uniswap V2 Pair: CASINU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1a1fe6f955b6567a75dddec526320a4a1a214fa9",
		"Uniswap V2 Pair: ARCONA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1a28bf19538c3797adf8f0e9b8c6a4b0d65a8a83",
		"Uniswap V2 Pair: SKULL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1a349a3397a8431eed8d94a05f88f9001117fcaa",
		"Uniswap V3 Pool: FUN - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1a455b43e185ecc80b4118a47255bf97cde976fe",
		"Uniswap V2 Pair: CLV - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1a57ec5459928389fbb5612ff2a5e0b534fd9e2e",
		"Uniswap V2 Pair: MTLX - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1a58aa618df8f1ec282748fef6185c1a1cc2faa6",
		"Uniswap V2 Pair: TRAC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1a66afa6d546b5806463708446a5acf34bffe221",
		"Uniswap V2 Pair: FOFAR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1a67c5a7eee3cfc4a3cfa2b5f9677d751f39919f",
		"Uniswap V2 Pair: WETH - MONKAS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1a89ae3ba4f9a97b10bac6a77061f00bb956858b",
		"Uniswap V3 Pool: IMPT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1aac7799ccc0844b346d711ce68eb6fde2dd03fa",
		"Uniswap V2 Pair: OHMI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1acba73121d5f63d8ea40bdc64edb594bd88ed09",
		"Uniswap V2 Pair: GRUMPY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1acfe8d0dc988b1aa64d7764582025954158d28a",
		"Uniswap V2 Pair: BYPASS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1add24bef05d5a34c7dac3856b675ce9e97f6d92",
		"Uniswap V2 Pair: SPIKE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1ae2bf1c5e67509ef5b2367751a87e65c47be2c4",
		"Uniswap V2 Pair: MINTYS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1af26ce001ea7806612e9916766fa1f6c4f3fa20",
		"Uniswap V2 Pair: TCP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1b10fa100c9cbbba76853ad2f9a42b9340ce7164",
		"Uniswap V2 Pair: YIELD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1b1c28a89caac877c63d0adac173a0b55921ab65",
		"Uniswap V2 Pair: WETH - CyOp",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1b425529c9d7472603e2dcf125fd195f71dfb412",
		"Uniswap V2 Pair: RINIA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1b4f9f96884eb976d7ffcb461471749a78c2b5db",
		"Uniswap V2 Pair: EBOX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1b67afde9f800c86e0c27bcae4bde1ce5ddf5883",
		"Uniswap V2 Pair: KAT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1b68a290d3d67cd8fb38c1412fbd56b6a33e5fe5",
		"Uniswap V2 Pair: WETH - CX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1b87fde6af5396165fdadf7f532784622a824abf",
		"Uniswap V2 Pair: OCTO - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1b8aa0d4171528da5053477a0fb553287e5a0d28",
		"Uniswap V2 Pair: WSHIB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1b8d13207f4b0a47b5086329dc789d712277c9a1",
		"Uniswap V2 Pair: WETH - AI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1b9d2d38a43e29223e4716f49b48547820760a6a",
		"Uniswap V2 Pair: CENT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1b9fd5d7d1168bb6d21504eff2b0330d5c42ce0b",
		"Uniswap V2 Pair: BILLY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1bc00bea522fe5b6a555e9ee7e5d28f96d48ae62",
		"Uniswap V2 Pair: BUBU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1be574041828303f0bfb5d06a2414f3bd6da1b2a",
		"Uniswap V2 Pair: WETH - HUSKY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1becf1ac50f31c3441181563f9d350ddf72a2bfa",
		"Uniswap V3 Pool: SMT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1bfffb738d69167d5592160a47d5404a3cf5a846",
		"Uniswap V2 Pair: KEX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1c3115b49a7e792c3e20eacca482339cdac12d05",
		"Uniswap V2 Pair: WETH - HARAM",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1c3e5c8d42db6775db34dd833eeae8029948ce9e",
		"Uniswap V3 Pool: ROCK - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1c4d55a2632b4fe47a82cc3053006d6b5629adc8",
		"Uniswap V2 Pair: METADOGE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1c608235e6a946403f2a048a38550befe41e1b85",
		"Uniswap V2 Pair: WETH - PAMP",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1c647cb82c4aceaff363598f45a7ad82bcafe021",
		"Uniswap V3 Pool: LMR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1c6faf9ad252390ee5e6f0b2f8d2fc927a8eb4e6",
		"Uniswap V2 Pair: CoShi - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1c726d5f71ead5acf30a60912f839a752b3c6d6d",
		"Uniswap V2 Pair: SNIBBU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1c87170cdbb3de04dce91bc99c04680d140d1982",
		"Uniswap V2 Pair: WETH - VIBE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1c8a9844091d5136b50f5b04b30de9e564ce397b",
		"Uniswap V2 Pair: BARD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1c9052e823b5f4611ef7d5fb4153995b040ccbf5",
		"Uniswap V2 Pair: DXD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1c98562a2fab5af19d8fb3291a36ac3c618835d9",
		"Uniswap V3 Pool: Metis - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1ca4713fc4a95f76fcb498b2a5fe8759c53df1a1",
		"Uniswap V2 Pair: WETH - GEN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1cac6da8e6928aacb492697fa92b4a04d2162c08",
		"Uniswap V2 Pair: LEV - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1cd926f3e12f7b6c2833fbe7277ac53d529a794e",
		"Uniswap V2 Pair: ALBT - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1ce1f63b584b87d0f3706bfbb2be881270859f0b",
		"Uniswap V2 Pair: NITEFEEDER - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1cf4b25ea65cec291fd17aa3769867c32de0fff3",
		"Uniswap V2 Pair: PEPINU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1cfe0c85f16e03e91a4a27187511104150736d88",
		"Uniswap V2 Pair: $TRUMP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1d42064fc4beb5f8aaf85f4617ae8b3b5b8bd801",
		"Uniswap V3 Pool: UNI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1d4b2b2a2ca8762410801b51f128b73743439e39",
		"Uniswap V2 Pair: DOKI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1d4e66b826c8bf8e3c93574386a8dd723b3a912f",
		"Uniswap V2 Pair: PLOUTΩS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1d6432aefeae2c0ff1393120541863822a4e6fa7",
		"Uniswap V2 Pair: YFL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1d9a941da508d9c603128f7776e19910c4fc8d1b",
		"Uniswap V3 Pool: HILO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1db24c2a6d62612796295bd4f451924953275f47",
		"Uniswap V2 Pair: NORMIE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1ddf85abdf165d2360b31d9603b487e0275e3928",
		"Uniswap V2 Pair: OPEN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1de76481f8881ed323ede2388095a59fda09be9b",
		"Uniswap V2 Pair: LGB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1df4c6e36d61416813b42fe32724ef11e363eddc",
		"Uniswap V3 Pool: PANDORA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1e0693f129d05e5857a642245185ee1fca6a5096",
		"Uniswap V2 Pair: AXIAv3 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1e3b5fbf556ade23d32aec3a0357e57e280eec51",
		"Uniswap V2 Pair: LAND - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1e49768714e438e789047f48fd386686a5707db2",
		"Uniswap V2 Pair: VOW - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1e79d6529f271876d202cbb216b856165d862353",
		"Uniswap V2 Pair: SATO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1e8ea8fc6c173b114a16aab08a02bc6621e21690",
		"Uniswap V2 Pair: DOGGY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1e8ff5341bc63782b0212926d6eaf43cb80a0c75",
		"Uniswap V2 Pair: WETH - XEND",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1e969a1b1983e383aa3a261f7da055e1b403bbcd",
		"Uniswap V2 Pair: DBNB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1e9ed2a6ae58f49b3f847eb9f301849c4a20b7e3",
		"Uniswap V2 Pair: GSWAP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1ec9b867b701c1e5ce9a6567ecc4b71838497c27",
		"Uniswap V2 Pair: BiFi - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1ed39ecb3ae735dd20d90aa7c61a1ee09c1c5e8d",
		"Uniswap V2 Pair: OBX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1ee312a6d5fe7b4b8c25f0a32fca6391209ebebf",
		"Uniswap V2 Pair: WETH - GOVI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1ee8c303f5ab9b36bc30b9345dec7e9a748fa693",
		"Zapper.Fi: Double Bull",
		"Zapper"
	],
	[
		"0x1efd85acdbadbe1800ce08b37541e13fca82f1f7",
		"Uniswap V2 Pair: TRUTH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1f123bd9e55f7ef7d3653688cf2248ef4d7f8394",
		"Uniswap V3 Pool: JCD - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1f1b4836dde1859e2ede1c6155140318ef5931c2",
		"Uniswap V2 Pair: GVR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1f245da1cea6dfdfecf92ca68292a6871c5f89df",
		"Uniswap V2 Pair: WETH - PEDO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1f2ddb972aeb9b3f7689013fe1890fa1a23bf353",
		"Uniswap V2 Pair: WETH - HACHIKO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1f4ea9d7a4d078c81b7e3ca6a61b5e202ef0cf18",
		"Uniswap V2 Pair: AGURI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1f4ef1f8441caac34f58fb0cba813dd2b09fec63",
		"Uniswap V2 Pair: EBULL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1f6a7d520c828b9ff22a267a187dd2f170e44a8f",
		"Uniswap V2 Pair: FONT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1f72f89de9b158466642ca1bda5abf2bd4e0c444",
		"Uniswap V2 Pair: WETH - SENSOR",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1f964ff83c54ce447adae5cb93f9ec17018bf55b",
		"Uniswap V2 Pair: WETH - BEZOGE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1f98431c8ad98523631ae4a59f267346ea31f984",
		"Uniswap V3 Factory",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1fbf001792e8cc747a5cb4aedf8c26b7421147e7",
		"Uniswap V2 Pair: WETH - USF",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1fc037ac35af9b940e28e97c2faf39526fbb4556",
		"Uniswap V3 Pool: WETH - THEO",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1ffc57cada109985ad896a69fbcebd565db4290e",
		"Uniswap V2 Pair: FTM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1ffec7119e315b15852557f654ae0052f76e6ae1",
		"Uniswap V2 Pair: WETH - DSync",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x202a6012894ae5c288ea824cbc8a9bfb26a49b93",
		"Uniswap V3 Pool: WETH - weETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2049df3435bdbb36d22f98fcd2e5027049a1f3ce",
		"Uniswap V2 Pair: M87 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2059024d050cdafe4e4850596ff1490cfc40c7bd",
		"Uniswap V2 Pair: SWAG - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x205eca9671aa698aa7c0d0af1cf6a2633b53b0c7",
		"Uniswap V2 Pair: GAGA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x206376e8940e42538781cd94ef024df3c1e0fd43",
		"0x: Ext Dev Pool",
		"0x"
	],
	[
		"0x2063bc2373f75666cc0f7b9236f4fc73104b54c6",
		"Uniswap V2 Pair: WETH - HHGTTG",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x20790842e3b690bda633c8fa531167dae8547a2e",
		"Uniswap V2 Pair: STONKS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2084c8115d97a12114a70a27198c3591b6df7d3e",
		"Uniswap V2 Pair: WETH - MFT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x20893b642b56fa81131a8fb1d6489e82de5a7449",
		"Uniswap V2 Pair: KTO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x208bd5dc470eba21571ddb439801a614ed346376",
		"Uniswap V2 Pair: GRO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x209f776b0ac77038caa1fbd97723df0e425a58db",
		"Uniswap V2 Pair: WUKONG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x20d2c17d1928ef4290bf17f922a10eaa2770bf43",
		"Uniswap V2 Pair: MUSE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x20e966013fff2a790942575c177ef6f5404b1de9",
		"Uniswap V2 Pair: DUCKER - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x20ef0c900f8e7ec3a1a89a761f0670ae9e3dd709",
		"Zapper.Fi: LINK LLP 100% ETH",
		"Zapper"
	],
	[
		"0x20f8634359d77c2a080004de6407a5a5bf0c70d3",
		"Uniswap V2 Pair: PEPE6900 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x21091c5ea13854ab0965090dc4fc20280f1a5730",
		"Zapper.Fi: wBTC LLP 100% ETH",
		"Zapper"
	],
	[
		"0x21359dfb99489204a3549692dd80f2cff4d4e8f9",
		"Uniswap V2 Pair: STR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x213b02e31fd17d631e1d7207ce5957552990008a",
		"Uniswap V2 Pair: WETH - GS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2143b2f528f6d010c14e4037f9636aad2e32768a",
		"Uniswap V2 Pair: KuKu - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x214913d4aab5bb321498edb7309cf68cd8c5d86b",
		"Uniswap V2 Pair: WETH - TKINU",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2164eae07685994863bc3a9a21ec045fce469faa",
		"Uniswap V2 Pair: WETH - TSUJI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x216fb666dd61600e74f7b2ca25a38aa99db1a4e9",
		"Uniswap V3 Pool: USDC - TSUKA",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2187d81332f433467338b0d6970a97885e79650e",
		"Uniswap V2 Pair: Shibmerican - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x21a7afa9f7e2d48bfa8e8f384d77f3b5c19a5add",
		"Uniswap V2 Pair: DINGER - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x21b8065d10f73ee2e260e5b47d3344d3ced7596e",
		"Uniswap V2 Pair: WISE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x21c5918ccb42d20a2368bdca8feda0399ebfd2f6",
		"Uniswap V2 Pair: GRO - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x21f396dd37a26d7754c513fd916d07f66aa6b81e",
		"Uniswap V3 Pool: MON - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x21ffaa1c83946a89bef4d639f71d070c868b8694",
		"Uniswap V2 Pair: CSWAP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x22052a1a0f5a3d2839d71c458f177e68b0e73963",
		"Uniswap V2 Pair: D/ACC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x223203a27dfc1b6f9687e57b9ec7ed68298bb59c",
		"Uniswap V3 Pool: WETH - LOOMI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x22453fb15757f2a8177880d8b8cf5144f07d1679",
		"Uniswap V2 Pair: WETH - DOGC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x22508de3dc071801fa553579d7110875ac0e3052",
		"Uniswap V2 Pair: WETH - KATANA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x22527f92f43dc8bea6387ce40b87ebaa21f51df3",
		"Uniswap V2 Pair: NUM - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x229c4580cc43d18bae24bd541688983bcefe0377",
		"Uniswap V2 Pair: TSUJI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x22c5fdb171ceb269e970bd165976974accbc605d",
		"Uniswap V2 Pair: WETH - JJ",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x22dd2b8985a9288341af1265b7a95d00e6d2126e",
		"Uniswap V2 Pair: WETH - YFARM",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2308b672ce1ecd4fcc5f5479a5dbe56a54db17dd",
		"Uniswap V2 Pair: WIK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x230d77c4dd61439c246b1a99434242ec42065ca3",
		"Uniswap V2 Pair: M87 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x231b0ee14048e9dccd1d247744d114a4eb5e8e63",
		"ENS: Public Resolver",
		"ENS",
		"images/contracts/ENS.jpg",
		"[{\"inputs\":[{\"internalType\":\"contract ENS\",\"name\":\"_ens\",\"type\":\"address\"},{\"internalType\":\"contract INameWrapper\",\"name\":\"wrapperAddress\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_trustedETHController\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_trustedReverseRegistrar\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"contentType\",\"type\":\"uint256\"}],\"name\":\"ABIChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"a\",\"type\":\"address\"}],\"name\":\"AddrChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"coinType\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"newAddress\",\"type\":\"bytes\"}],\"name\":\"AddressChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"delegate\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"Approved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"hash\",\"type\":\"bytes\"}],\"name\":\"ContenthashChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"name\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"uint16\",\"name\":\"resource\",\"type\":\"uint16\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"record\",\"type\":\"bytes\"}],\"name\":\"DNSRecordChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"name\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"uint16\",\"name\":\"resource\",\"type\":\"uint16\"}],\"name\":\"DNSRecordDeleted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"lastzonehash\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"zonehash\",\"type\":\"bytes\"}],\"name\":\"DNSZonehashChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"interfaceID\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"implementer\",\"type\":\"address\"}],\"name\":\"InterfaceChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"NameChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"x\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"y\",\"type\":\"bytes32\"}],\"name\":\"PubkeyChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"string\",\"name\":\"indexedKey\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"}],\"name\":\"TextChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"newVersion\",\"type\":\"uint64\"}],\"name\":\"VersionChanged\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"contentTypes\",\"type\":\"uint256\"}],\"name\":\"ABI\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"addr\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"coinType\",\"type\":\"uint256\"}],\"name\":\"addr\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"delegate\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"clearRecords\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"contenthash\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"name\",\"type\":\"bytes32\"},{\"internalType\":\"uint16\",\"name\":\"resource\",\"type\":\"uint16\"}],\"name\":\"dnsRecord\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"name\",\"type\":\"bytes32\"}],\"name\":\"hasDNSRecords\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"bytes4\",\"name\":\"interfaceID\",\"type\":\"bytes4\"}],\"name\":\"interfaceImplementer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"delegate\",\"type\":\"address\"}],\"name\":\"isApprovedFor\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes[]\",\"name\":\"data\",\"type\":\"bytes[]\"}],\"name\":\"multicall\",\"outputs\":[{\"internalType\":\"bytes[]\",\"name\":\"results\",\"type\":\"bytes[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"nodehash\",\"type\":\"bytes32\"},{\"internalType\":\"bytes[]\",\"name\":\"data\",\"type\":\"bytes[]\"}],\"name\":\"multicallWithNodeCheck\",\"outputs\":[{\"internalType\":\"bytes[]\",\"name\":\"results\",\"type\":\"bytes[]\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"pubkey\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"x\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"y\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"recordVersions\",\"outputs\":[{\"internalType\":\"uint64\",\"name\":\"\",\"type\":\"uint64\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"contentType\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"setABI\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"coinType\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"a\",\"type\":\"bytes\"}],\"name\":\"setAddr\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"a\",\"type\":\"address\"}],\"name\":\"setAddr\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"bytes\",\"name\":\"hash\",\"type\":\"bytes\"}],\"name\":\"setContenthash\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"setDNSRecords\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"bytes4\",\"name\":\"interfaceID\",\"type\":\"bytes4\"},{\"internalType\":\"address\",\"name\":\"implementer\",\"type\":\"address\"}],\"name\":\"setInterface\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"newName\",\"type\":\"string\"}],\"name\":\"setName\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"x\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"y\",\"type\":\"bytes32\"}],\"name\":\"setPubkey\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"}],\"name\":\"setText\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"bytes\",\"name\":\"hash\",\"type\":\"bytes\"}],\"name\":\"setZonehash\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceID\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"}],\"name\":\"text\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"zonehash\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"}]"
	],
	[
		"0x231b7589426ffe1b75405526fc32ac09d44364c4",
		"Uniswap V2 Pair: WBTC - DAI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2322e5517a3cbc75a3f02d74c96f82dda120d841",
		"Uniswap V3 Pool: RLB - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2325e3f261cadb1c30cebf66c9f95f6fb016c0d4",
		"Uniswap V2 Pair: WETH - puppies",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x232818620877fd9232e9ade0c91ef5518eb11788",
		"Uniswap V2 Pair: DF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2329809548668ddea3552942af1aae622c92f959",
		"Uniswap V2 Pair: WETH - DOG",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x233bbf76a7d8da6275c70ea372f19de84dbcc167",
		"Uniswap V2 Pair: STMX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x23610e42ac8bc888cb1bc9c614a7a79039578a86",
		"Uniswap V2 Pair: MONKE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x237cf2e759a3ede62821e6bfe737e6a00658acb8",
		"Uniswap V2 Pair: AGA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x23aad1c2e97aa0eece07f9d15e45a01fefe125f4",
		"Uniswap V2 Pair: WETH - WAPPLE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x23b7e6932cb873b8696afba077c4a2486b1c862e",
		"Uniswap V2 Pair: SIG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x23bc662119649a78a6aa132e043c01a34c982700",
		"Uniswap V2 Pair: OCAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x23bff8ca20aac06efdf23cee3b8ae296a30dfd27",
		"Uniswap V2 Pair: wNXM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x23d15edceb5b5b3a23347fa425846de80a2e8e5c",
		"Uniswap V2 Pair: WETH - HEZ",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x23f7d99c169dee26b215edf806da8fa0706c4ecc",
		"Uniswap V2 Pair: DEGO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x241119ed19043e432e2480ec93b5209ba178eb2d",
		"Uniswap V2 Pair: WHIRL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x242301fa62f0de9e3842a5fb4c0cdca67e3a2fab",
		"Uniswap V2 Pair: DXO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x242d289b3eeb6842ce0fcc0d87932402299ae5b3",
		"Uniswap V2 Pair: WETH - YLD",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x24602cb90c5262d51d33fe8e3360ff37477d80b6",
		"Uniswap V3 Pool: WETH - SHOG",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x248ec5358bc559ec894c571a65306bba27501289",
		"Uniswap V2 Pair: TOONS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x24a50b469121a13bec42fc9befdc7daad1e67211",
		"Uniswap V2 Pair: Lisa - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x24b24af104c961da1ba5bccce4410d49aa558477",
		"Uniswap V2 Pair: WETH - AXS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x24d9f6a1575a1eb774e6d7f4281a4b7af5111b75",
		"Uniswap V2 Pair: WETH - ITS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x24dbedb4699eb996a8ceb2baef4a4ae057cf0294",
		"Uniswap V3 Pool: MM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x24ee2c6b9597f035088cda8575e9d5e15a84b9df",
		"Uniswap V3 Pool: QNT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2503bb2371207ccdca11965dbcb47fb73670b040",
		"Uniswap V2 Pair: SOWA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2511ca2e53152796d3be8c4b333e72f1d2a0d91b",
		"Uniswap V2 Pair: ZACH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2515c6b737151bbd5c7826c04717b342ac44c1da",
		"Uniswap V2 Pair: X - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2519042aa735edb4688a8376d69d4bb69431206c",
		"Uniswap V3 Pool: LPT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x251ce6231c8f892d41c0472121959c8ba577a415",
		"Uniswap V2 Pair: PEEPO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x25215d9ba4403b3da77ce50606b54577a71b7895",
		"Uniswap V3 Pool: DRAGONX - TITANX",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x253553366da8546fc250f225fe3d25d0c782303b",
		"ENS: ETH Registrar Controller",
		"ENS",
		"images/contracts/ENS.jpg",
		"[{\"inputs\":[{\"internalType\":\"contract BaseRegistrarImplementation\",\"name\":\"_base\",\"type\":\"address\"},{\"internalType\":\"contract IPriceOracle\",\"name\":\"_prices\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_minCommitmentAge\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_maxCommitmentAge\",\"type\":\"uint256\"},{\"internalType\":\"contract ReverseRegistrar\",\"name\":\"_reverseRegistrar\",\"type\":\"address\"},{\"internalType\":\"contract INameWrapper\",\"name\":\"_nameWrapper\",\"type\":\"address\"},{\"internalType\":\"contract ENS\",\"name\":\"_ens\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"commitment\",\"type\":\"bytes32\"}],\"name\":\"CommitmentTooNew\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"commitment\",\"type\":\"bytes32\"}],\"name\":\"CommitmentTooOld\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"}],\"name\":\"DurationTooShort\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"InsufficientValue\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MaxCommitmentAgeTooHigh\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"MaxCommitmentAgeTooLow\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"NameNotAvailable\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"ResolverRequiredWhenDataSupplied\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"commitment\",\"type\":\"bytes32\"}],\"name\":\"UnexpiredCommitmentExists\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"label\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"baseCost\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"premium\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"expires\",\"type\":\"uint256\"}],\"name\":\"NameRegistered\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"label\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"cost\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"expires\",\"type\":\"uint256\"}],\"name\":\"NameRenewed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"MIN_REGISTRATION_DURATION\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"available\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"commitment\",\"type\":\"bytes32\"}],\"name\":\"commit\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"commitments\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"secret\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"resolver\",\"type\":\"address\"},{\"internalType\":\"bytes[]\",\"name\":\"data\",\"type\":\"bytes[]\"},{\"internalType\":\"bool\",\"name\":\"reverseRecord\",\"type\":\"bool\"},{\"internalType\":\"uint16\",\"name\":\"ownerControlledFuses\",\"type\":\"uint16\"}],\"name\":\"makeCommitment\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"maxCommitmentAge\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"minCommitmentAge\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"nameWrapper\",\"outputs\":[{\"internalType\":\"contract INameWrapper\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"prices\",\"outputs\":[{\"internalType\":\"contract IPriceOracle\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_token\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"recoverFunds\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"},{\"internalType\":\"bytes32\",\"name\":\"secret\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"resolver\",\"type\":\"address\"},{\"internalType\":\"bytes[]\",\"name\":\"data\",\"type\":\"bytes[]\"},{\"internalType\":\"bool\",\"name\":\"reverseRecord\",\"type\":\"bool\"},{\"internalType\":\"uint16\",\"name\":\"ownerControlledFuses\",\"type\":\"uint16\"}],\"name\":\"register\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"}],\"name\":\"renew\",\"outputs\":[],\"stateMutability\":\"payable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"}],\"name\":\"rentPrice\",\"outputs\":[{\"components\":[{\"internalType\":\"uint256\",\"name\":\"base\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"premium\",\"type\":\"uint256\"}],\"internalType\":\"struct IPriceOracle.Price\",\"name\":\"price\",\"type\":\"tuple\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"reverseRegistrar\",\"outputs\":[{\"internalType\":\"contract ReverseRegistrar\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceID\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"valid\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"withdraw\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]"
	],
	[
		"0x253c06b22d4b67b675ea7d2fd48422e62c394d7e",
		"Uniswap V3 Pool: ferc - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x25442df227931e94a04ee545e9b039eff37e5303",
		"Uniswap V2 Pair: MOLLY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x25647e01bd0967c1b9599fa3521939871d1d0888",
		"Uniswap V2 Pair: WETH - SUPER",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x256bd88baf707eaad1b73dc8b2b8a5d599b45584",
		"Uniswap V3 Pool: BOBA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x25752db4c322fb373723cb4790b8646c905b2059",
		"Uniswap V2 Pair: Wolf - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x25942771b17f3790bf32cae7af7d539ce42cdc79",
		"Uniswap V2 Pair: HOPPY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x25a17a5a907941aaf6d6d1c7aae9c9cc3a38680c",
		"Uniswap V2 Pair: USDC - LUA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x25c0edc51909fc20429c6ece9b8f4fbb5af13878",
		"Uniswap V3 Pool: ASIC - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x25ea93b7432fed90758828691897901a30b4c7d9",
		"Uniswap V2 Pair: TMTG - LBXC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2606a6d72c1f6b58ce13c599091f0422a9b0f21c",
		"Uniswap V2 Pair: spurdo - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2615b89ad032ccda6d67e1d511f0e4c9e3a5dc13",
		"Uniswap V2 Pair: NEXO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2632ec29eddca8868355bca24f98a8a8123ad471",
		"Uniswap V2 Pair: ROGE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x26577f58af2f7de1a85034bb360fd154cda022f3",
		"Uniswap V2 Pair: TYPE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2680a95fc9de215f1034f073185cc1f2a28b4107",
		"Uniswap V2 Pair: GET - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x26aa7d0ca98b9d5483628808437e6323ff25b606",
		"Uniswap V2 Pair: WETH - DOGEAI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x26aad2da94c59524ac0d93f6d6cbf9071d7086f2",
		"Uniswap V2 Pair: 1INCH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x26b4b107dce673c00d59d71152136327cf6dfebf",
		"Uniswap V2 Pair: DAI - DAIQ",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x26bb44cf51cae9c69bf2d732920fadf6b9e861b2",
		"Uniswap V2 Pair: WETH - DFV",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x26be65d3b79acbcc1bf5a82f8b631ada2dc860c8",
		"Uniswap V2 Pair: JOTCHUA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x26ce49c08ee71aff0c43db8f8b9bea950b6cdc67",
		"Uniswap V2 Pair: HT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2701ea55b8b4f0fe46c15a0f560e9cf0c430f833",
		"Uniswap V2 Pair: CC10 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2702bd7268793b5e1c7ee1ac2d9cae2ae2ecfe55",
		"Uniswap V2 Pair: CRU - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2763a59b0f654cae0e34e883a66d4bf138c4ba0a",
		"Uniswap V2 Pair: TRUMP2024 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x276e62c70e0b540262491199bc1206087f523af6",
		"Uniswap V2 Pair: DRC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2774f215400d0f4f4c7febc074655794efd262db",
		"Uniswap V2 Pair: Froglic - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x27920a817865fe0594a1561f7cc87e269fa2bcfe",
		"Uniswap V2 Pair: WETH - FOTTIE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x27a675e56eaa82d012c453c5f4de2dc10dd4b850",
		"Uniswap V2 Pair: USA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x27a938ceb837f06824cfb6a88e0452bb7fa476ac",
		"Uniswap V2 Pair: MARV - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x27a9ff745cf1dd366d94267cb4ade2350588a187",
		"Uniswap V3 Pool: WETH - AVINOC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x27b82b91c6583fe1a830b4a0620eca4027492a61",
		"Uniswap V2 Pair: PNDC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x27c64bdca05d79f6ee32c3e981dc5153d9d794cd",
		"Uniswap V2 Pair: GST2 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x27dae2e669275982ab0bdf1a45e9747481b46133",
		"Uniswap V2 Pair: PARROT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x27dd7b7d610c9be6620a893b51d0f7856c6f3bfd",
		"Uniswap V3 Pool: TLOS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x27fa67302c513f5512bbfa5065800c2d7b3871f4",
		"Uniswap V2 Pair: FLUX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x27fd0857f0ef224097001e87e61026e39e1b04d1",
		"Uniswap V2 Pair: WETH - RLY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x27fd2f5942049bcd601428c7bcede364180b4b3f",
		"Uniswap V2 Pair: KUMA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x280ab9403372be0371313a9ddd9222b5590dbfef",
		"Uniswap V2 Pair: JSHIBA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x281242be4b971235674823a13fbb34951e412972",
		"Uniswap V2 Pair: WETH - CMINER",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2818ea851dcfaeeb4633fc8aae08b7063d32e4f5",
		"Uniswap V3 Pool: GURU - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x28200dfc4a177b2ef62165edce6c9fb7bc1e997a",
		"Uniswap V2 Pair: KIRBY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2823f9f6ebe1407bef214360f81eaf6f3560fd41",
		"Uniswap V2 Pair: TERRAFORM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x282b0e3e6a0f4da3267d71b7c58703f695cde33f",
		"Uniswap V2 Pair: NINA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2837809fd68e4a4104af76bbec5b622b6146b2cb",
		"Uniswap V3 Pool: WETH - RAIL",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x283e007f0746b04e0c26245296630fabbd7c2e5f",
		"Uniswap V2 Pair: RDDT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x283e2e83b7f3e297c4b7c02114ab0196b001a109",
		"Uniswap V3 Pool: OCEAN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x284865c420105ddcffe9004a8f06acb9ee70936a",
		"Uniswap V2 Pair: WETH - FLOKI2.0",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2854fbda37ac17aa184772bca10d2ca731e06c8c",
		"Uniswap V2 Pair: WETH - BITROCK",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x287856d10418e01ef1e93df9962b04d9a3a521c9",
		"Uniswap V2 Pair: SSL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x288d25592a995ca878b79762cb8ec5a95d2e888a",
		"Uniswap V2 Pair: BPRO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x28b66bad02593c8faafc919a591460ffb5b414e9",
		"Uniswap V2 Pair: WETH - SWIFTIES",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x28bc0c76a5f8f8461be181c0cbddf715bc1d96af",
		"Uniswap V2 Pair: TOB - XAMP",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x28d3b36c0e064b455b8ca28cc0fb57fe20f949f9",
		"Uniswap V2 Pair: SOP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x28f99e581baae7f3bdfe0d280ede74035b2e9a82",
		"Uniswap V2 Pair: SIN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2906bb434b33eb55121803b594bbb39c3376f360",
		"Uniswap V2 Pair: CX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2906bdda4bde0338cf9af4370d5b838da4a0d08f",
		"Uniswap V2 Pair: CSCS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x290a6a7460b308ee3f19023d2d00de604bcf5b42",
		"Uniswap V3 Pool: MATIC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x291c69fdaebd3cbe953843da243f8605a766a268",
		"Uniswap V2 Pair: TEL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2947dc50cc24cc55afbf22807a49cc302d65568c",
		"Uniswap V2 Pair: 0KN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2976dca9be2037c7c50df4c3da1f6f98cd99dac9",
		"Uniswap V3 Pool: HARRIS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x29799805d728ebe424abb605349afd35d4d7c6fb",
		"Uniswap V2 Pair: TOKEN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x297e3087af2fd5a07106898c95d42f12081b2baa",
		"Uniswap V2 Pair: WETH - CEX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2982d3295a0e1a99e6e88ece0e93ffdfc5c761ae",
		"Uniswap V3 Pool: wTAO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x298b7c5e0770d151e4c5cf6cca4dae3a3ffc8e27",
		"Uniswap V3 Pool: MIM - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2999528824a1a839d9af5cfead053236be675984",
		"Uniswap V2 Pair: DOWS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x29a512b5947b5b36bcd3f294822cc3ff4fe2ab73",
		"Uniswap V2 Pair: ORD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x29a9777da2bacd8c4a28b6fd8247c4ca4f098f12",
		"Uniswap V2 Pair: IDLE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x29b0aa11de97f6d5a3293d980990e820bda5fbab",
		"Uniswap V2 Pair: $TRDL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x29ba3d899e8a819cf920adaff53ef1cf31969e66",
		"Uniswap V2 Pair: ALEPH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x29c82c693cd06c1f2778185e16ccd4de64e395cc",
		"Uniswap V2 Pair: SPURDO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x29c830864930c897efa2b9e9851342187b82010e",
		"Uniswap V2 Pair: BAD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x29f0096512b4af1d689c1a11a867a6e707a8dcde",
		"Uniswap V3 Pool: FUN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x29f07e631a2f990e1f6117c6285a44e746b1f090",
		"Uniswap V2 Pair: EVN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2a0330c7e979a4d18e5b0c987b877da24dd37d04",
		"Uniswap V3 Pool: AIOZ - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2a07160ab59a9a868e2957f394bf6bdd28e91192",
		"Uniswap V2 Pair: WETH - Totoro",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2a0d53f423a131cba724ae6a6352b59cc8d5a764",
		"Uniswap V2 Pair: USDC - Mark",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2a17c35ff147b32f13f19f2e311446eeb02503f3",
		"0x: Staking",
		"0x"
	],
	[
		"0x2a182e532a379cb2c7f1b34ce3f76f3f7d3596f7",
		"Uniswap V2 Pair: WETH - BBANK",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2a1a72b2f9df73ae57bbbd8b95669955ea1eb8ef",
		"Uniswap V2 Pair: WETH - ODDZ",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2a4d547ea2c35d03a501a8bb5d12d81d0a222dc5",
		"Uniswap V3 Pool: WETH - GFI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2a66392317698c5818df7a72a58556049f0ae6f2",
		"Uniswap V2 Pair: WETH - SYLO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2a6c340bcbb0a79d3deecd3bc5cbc2605ea9259f",
		"Uniswap V2 Pair: $PAAL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2a706f26e0bd400ac710bec99150ed9d644f29bd",
		"Uniswap V2 Pair: YAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2a785850bf6455e00359fbae0da83e9a3a3ad44a",
		"Uniswap V2 Pair: LIT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2a7ae6e345841e0e58ec80e78ccb6491170f92fa",
		"Uniswap V2 Pair: MICKEY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2a9d2ba41aba912316d16742f259412b681898db",
		"Uniswap V3 Pool: XEN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2ad5bd9c8a4864e0e141e1b1c6095977d2ab4b8a",
		"Uniswap V2 Pair: WETH - WEBAI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2ae4517b2806b84a576c10f698d6567ce80a6490",
		"Uniswap V3 Pool: MAXI - HEX",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2aeee741fa1e21120a21e57db9ee545428e683c9",
		"Uniswap V2 Pair: WETH - GME",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2b38c02efd194ff67bf6b3279f5baa02cb42d1c4",
		"Uniswap V2 Pair: TISM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2b43fe4f41d871fbc75af6e0ce85bce38ff1edc7",
		"Uniswap V3 Pool: Coval - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2b53d2587cc440bea0c69a9488f57d0247e70561",
		"Uniswap V2 Pair: COF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2b65723ebdd38ed1056a332e6b55c6afae018506",
		"Uniswap V2 Pair: FFTP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2b68e9b9984e2f68ffc8fe450b896147dc27206f",
		"Uniswap V2 Pair: OLY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2b68ead18db86cd6130df53c4b6c3c77332a3351",
		"Uniswap V2 Pair: LITH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2b6a25f7c54f43c71c743e627f5663232586c39f",
		"Uniswap V2 Pair: JRT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2b76272f365d4d44b159e06496ebc77e01ed0d7e",
		"Uniswap V2 Pair: BOBO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2b788a7b1a0ee0da8cb1d2769825198d9c95d19d",
		"Uniswap V2 Pair: TERA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2b7d0cb53b9b88281578cf7f8abc0982d7f4c166",
		"Uniswap V2 Pair: MVP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2b8574482d62d8df670dfd3be15f2f092941284e",
		"Uniswap V3 Pool: ANDY - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2b9e92a5b6e69db9fedc47a4c656c9395e8a26d2",
		"Uniswap V2 Pair: XFT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2bbd1e03a023c5620125f249f2f8715acdc483aa",
		"Uniswap V2 Pair: ALICE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2be069675a1c81d909549e4b7bb5e2912a3004e2",
		"Uniswap V2 Pair: NFAi - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2c0be28a222a21b9e3a237f72b20ee58dc1af111",
		"Uniswap V2 Pair: PIG2.0 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2c261530356f52c70aab0b5e61aaa0d64bf35f77",
		"Uniswap V2 Pair: YFIE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2c5ab005a2b8c3ced79a1131a9edf077edb42ac2",
		"Uniswap V3 Pool: DORK - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2c618ff14c3273236ee441cb24aa6998f266a872",
		"Uniswap V2 Pair: BCDT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2c7a51a357d5739c5c74bf3c96816849d2c9f726",
		"Uniswap V2 Pair: YAM - yDAI+yUSDC+yUSDT+yTUSD",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2c814e0346672ce6813f7e1eaf944be8703ec10f",
		"Uniswap V2 Pair: GEEQ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2c866605330c8fb3f5a84c3c429e97568cd6c751",
		"Uniswap V2 Pair: SHIL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2c8eb0861bf6fd761481e8d1ff1c57536c983e98",
		"Uniswap V2 Pair: ROCKS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2c8f9bbae004854b9548f6c84720c70a8fceea23",
		"Uniswap V2 Pair: BABYPEPE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2ca1d6950182d28434f89a719ed9e915b8c417b5",
		"Uniswap V3 Pool: DBI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2caccf71bdf8fff97c06a46eca29b611b1a74b5e",
		"Uniswap V2 Pair: SWFL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2cad29e9640b9bcfb1d8d25cf3e4bd05f55cce70",
		"Uniswap V3 Pool: OX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2cb162433e0cabac4825e6d198a125829156cc92",
		"Uniswap V3 Pool: CHO - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2cbfa9117c543a17efe0bb897f7e32f0d3f04130",
		"Uniswap V2 Pair: BIM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2cc846fff0b08fb3bffad71f53a60b4b6e6d6482",
		"Uniswap V2 Pair: BITCOIN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2ce54a0f63f5be7b62aec66104a1038206a154e3",
		"Uniswap V3 Pool: NOMAD - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2cea677e38f16a3016cab43b533efda0458af0e6",
		"Uniswap V2 Pair: MoFi - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2d0ba902badaa82592f0e1c04c71d66cea21d921",
		"Uniswap V2 Pair: WETH - BTT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2d247f59b10d828b8293380c40b7527fbbe3092f",
		"Uniswap V2 Pair: SARATOSHI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2d27cae0c7e88de9b85b3e44ea37b9cb70ca745f",
		"Uniswap V2 Pair: WETH - SMI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2d36fd38c4ecefabc0282795f5573f929301a41e",
		"Uniswap V2 Pair: WETH - Smidge",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2d54b72d3ae65dc849117172a7a81bdf2a5110ce",
		"Uniswap V2 Pair: BROS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2d6fcfde9709343c4c7a78d91077473d6b604653",
		"Uniswap V3 Pool: STFX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2d97755d2d18a77ef9ead977dd0c3ca7c840d5fc",
		"Uniswap V2 Pair: KTON - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2d9fd51e896ff0352cb6d697d13d04c2cb85ca83",
		"Uniswap V2 Pair: LABS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2db388d12c56fa6bd81b101aa6ec8542e315ec5c",
		"Uniswap V2 Pair: CHAD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2dc9050d9873f50526e467e983d435e6d8d9afb0",
		"Uniswap V2 Pair: WETH - APX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2dce0dda1c2f98e0f171de8333c3c6fe1bbf4877",
		"Uniswap V2 Pair: OHM - FRAX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2dd31cc03ed996a99fbfdffa07f8f4604b1a2ec1",
		"Uniswap V3 Pool: GEL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2dd35b4da6534230ff53048f7477f17f7f4e7a70",
		"Uniswap V3 Pool: SYN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2dd56b633faa1a5b46107d248714c9ccb6e20920",
		"Uniswap V3 Pool: REN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2deeeda49e5436cfe18e0ba10f58e4496b8fc631",
		"Uniswap V2 Pair: URQA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2df7f6afd1e7d6cb0655d9666a880d907eadd794",
		"Uniswap V3 Pool: SWITCH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2dfee82f4250dd3f3c6811c5d2926ede8b37a7d5",
		"Uniswap V2 Pair: JUP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2e03677a64cfd8ef9510e11855581cb22f2acade",
		"Uniswap V2 Pair: ZEE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2e0721e6c951710725997928dcaaa05daafa031b",
		"Uniswap V2 Pair: WETH - ENCORE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2e0adb1526a091e83d030e059455b7c5eb0d5d69",
		"Uniswap V2 Pair: LAIKA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2e44ddd47e451789d383be217dc342da94116db4",
		"Uniswap V2 Pair: WETH - RUZE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2e4784446a0a06df3d1a040b03e1680ee266c35a",
		"Uniswap V3 Pool: CVX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2e73ff42886796a7673f863135e663335c951595",
		"Uniswap V2 Pair: WETH - ORBK",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2e81ec0b8b4022fac83a21b2f2b4b8f5ed744d70",
		"Uniswap V2 Pair: WETH - GRT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2e8b685abe0af1e05949c22227164dc58c133e68",
		"Uniswap V2 Pair: BDT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2ea2eb8f9a1bf17bcbf2555536c9d1e24e45ebc0",
		"Uniswap V2 Pair: WETH - FRONT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2eb4f51956e57a7868c2167d7f627e12abcd2210",
		"Uniswap V2 Pair: USD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2ecd02761b21376b12c65190727a0d50914025f0",
		"Uniswap V3 Pool: Auction - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2ed52c80baa99c76b046ed611f5122ac6a004e0d",
		"Uniswap V2 Pair: BUFFI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2efec2097beede290b2eed63e2faf5ecbbc528fc",
		"Uniswap V3 Pool: WETH - TRU",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2f0b1417aa42ebf0b4ca1154212847f6094d708d",
		"Uniswap V2 Pair: GF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2f5c77eaf6fcc3691a3b12a7c117f95201a66a1d",
		"Uniswap V3 Pool: midwit - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2f62f2b4c5fcd7570a709dec05d68ea19c82a9ec",
		"Uniswap V3 Pool: SHIB - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2f85e11f6f12ead6af643f083a34e001030d2a6f",
		"Uniswap V2 Pair: LPOOL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2fa7361d7e3b812375604681eb155a97b4d65e9e",
		"Uniswap V3 Pool: aKLIMA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2fa947313b2598af518a9a8e43ca8aae4d4427b2",
		"Uniswap V2 Pair: MEMEAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2faac204a9d7922549a061584120b3e0dc99be82",
		"Uniswap V2 Pair: WETH - TRUTH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2fba0b21a553f0f268293be7abb07a54fffd2b02",
		"Zapper.Fi: Zap Out V2",
		"Zapper"
	],
	[
		"0x2fba756c64d4f9dbb17f1b3a1afb5f05af7f18c0",
		"Uniswap V2 Pair: XTK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2fdbadf3c4d5a8666bc06645b8358ab803996e28",
		"Uniswap V2 Pair: YFI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2ff5e42e744cd451362f61342f33957c71216ade",
		"Uniswap V2 Pair: WETH - BTFA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3000f78b80faa31e2887fcc8909ef19301ef4374",
		"Uniswap V2 Pair: OLYMPE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3006c0d2a6e54d3590a44384c6f066c9cf9a4cea",
		"Uniswap V2 Pair: MATH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3016a43b482d0480460f6625115bd372fe90c6bf",
		"Uniswap V2 Pair: ShibDoge - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3019d4e366576a88d28b623afaf3ecb9ec9d9580",
		"Uniswap V3 Pool: AXS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x30266f3af0f4317b23b9d9de28fc440b24ae1db9",
		"Uniswap V2 Pair: CPTINU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x30296ea311779740ec158ff8c9e3a8c0217f8113",
		"Uniswap V2 Pair: WETH - BFLY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x30361f9963adb6c05f15655cb77d2da90f34c2d7",
		"Uniswap V2 Pair: WETH - VetMe",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3041cbd36888becc7bbcbc0045e3b1f144466f5f",
		"Uniswap V2 Pair: USDC - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x305990151e30087f81299d099c2a910edc57d369",
		"Uniswap V2 Pair: EASY - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x306778ba370d803301d32cefe49cdc581c24b824",
		"Uniswap V3 Pool: INSP - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3067c3054b4a605f9e327bad82d9ba6049fe76a0",
		"Uniswap V3 Pool: USDC - ZZ",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x306d9c4c195cb49d48599a773e18ab79469811e3",
		"Uniswap V2 Pair: RARE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x306eeaff376a128514e40b4846e1650d9ba7ae43",
		"Uniswap V2 Pair: ELMO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3071e2aad52f0ce5b1cade7046df356608881268",
		"Uniswap V2 Pair: FOXX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x308c6fbd6a14881af333649f17f2fde9cd75e2a6",
		"Uniswap V2 Pair: DOGE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3098cfaaba3795ab98dc2d5066ec4d2584ae7c68",
		"Zapper.Fi: Sushiswap Zap Out",
		"Zapper"
	],
	[
		"0x30ac70e2dc5092f64031685bb23d50f782c27566",
		"Uniswap V2 Pair: FLOKI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x30bc873193466dc59fc08159460c49f26f609795",
		"Uniswap V2 Pair: ALICE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x30c86753b88d430436b8a6ef23b4c6faa930ad7d",
		"Uniswap V2 Pair: FROGE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x30c8bab0cee4379012ac8ec185c3131b2e9ae18b",
		"Uniswap V2 Pair: WETH - KIRO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x30d4967259333e44409031192a04fc02f6afe06e",
		"Uniswap V2 Pair: ET - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x30d7c134a9e7477dac13ded746c23c6e666f22b4",
		"Uniswap V3 Pool: WETH - RAIN",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x30e3270fd3d1589672e8da2f15c7076323c9aa10",
		"Uniswap V2 Pair: RJV - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x30ea22c879628514f1494d4bbfef79d21a6b49a2",
		"Uniswap V3 Pool: WETH - swETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x30ee4e8e49d81312b93f41778f6446827a080ade",
		"Uniswap V2 Pair: EDC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x30fc63cf0a7be79a5e43e2ca3fbb06f8329f6983",
		"Uniswap V2 Pair: ƎԀƎԀ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x311bb771e4f8952e6da169b425e7e92d6ac45756",
		"Aave: Lending Pool Configurator V2",
		"Aave",
		"images/contracts/aave.png"
	],
	[
		"0x3139bbba7f4b9125595cb4ebeefdac1fce7ab5f1",
		"Uniswap V3 Pool: RUNE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3155acd9f75915fcc21d34035f440da7040bd3ba",
		"Uniswap V2 Pair: PROS - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3157e15e15fd41d6a9c5df255c71506f160db67c",
		"Uniswap V3 Pool: RLB - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x315ed60258702f8d159b98df4c0dbeb1d7d776df",
		"Uniswap V2 Pair: WETH - ZKML",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3185626c14acb9531d19560decb9d3e5e80681b1",
		"Uniswap V2 Pair: XRT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3187065fc51a0ca3c92734d3307eea8790767ad7",
		"Uniswap V2 Pair: BABYNEIRO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x318fbee0a0d60e5de7009864632ceda8d77489b8",
		"Uniswap V3 Pool: BEAM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x319f4366b2ec8b0120d09522c88f919bedbb18ff",
		"Uniswap V3 Pool: YGG - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x31a84b429e475987bc7ea6ac202aaf00d20279a6",
		"Uniswap V2 Pair: RINTARO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x31ac548e59565fdd78604a47e1571ef68c80e9f5",
		"Uniswap V2 Pair: CHZ - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x31ba74d3bcaf1b7a176a6cfd6c19ec101957d1f5",
		"Uniswap V2 Pair: GNUS - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x31c0ba10e4e12be6cdceb612e5e829d977532bfc",
		"Uniswap V3 Pool: PIXL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x31cf0327782a22958e7361f75ed86a7b69eb0aa7",
		"Uniswap V2 Pair: FORM - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3203d789bfdb222bfdd629b8de7c5dc38e8241ec",
		"Uniswap V2 Pair: ISLA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x32121e0d11ecc79035045bc7466ede30816c5674",
		"Uniswap V3 Pool: BIGTIME - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x323e054a6dd8762011d60993f51e23e2096b221f",
		"Uniswap V2 Pair: DAI - ZAI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x325365ed8275f6a74cac98917b7f6face8da533b",
		"Uniswap V3 Pool: CHZ - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3289c15810e20ace49ad16b56a0db8d78bd10117",
		"Uniswap V3 Pool: WETH - CONV",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x32a505bf9db617d23bf3ebaac9aef80cb24a828c",
		"Uniswap V2 Pair: CHEDDA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x32a6047bded36b985534750a4292a35d5dbd4e5f",
		"Uniswap V2 Pair: WETH - DJT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x32ce7e48debdccbfe0cd037cc89526e4382cb81b",
		"Uniswap V2 Pair: CORE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x32d588fd4d0993378995306563a04af5fa162dec",
		"Uniswap V2 Pair: WETH - SURF",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x32d9259e6792b2150fd50395d971864647fa27b2",
		"Uniswap V3 Pool: RSR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x32e12fe6f7f2af064aaed27fd612857944a0861c",
		"Uniswap V3 Pool: WETH - AI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3311bf503b5cd93fdb37776cb22dd47b75bf5a28",
		"Uniswap V3 Pool: HEX - PLSD",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x331399c614ca67dee86733e5a2fba40dbb16827c",
		"Uniswap V3 Pool: PORK - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3322f41dfa379b6d3050c1e271b0b435b3ee3303",
		"Uniswap V2 Pair: WETH - LSD",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3328ca5b535d537f88715b305375c591cf52d541",
		"Uniswap V3 Pool: PLSD - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3340ffb829a93bd324121eb314a032f292525f43",
		"Uniswap V2 Pair: DMIND - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x334fe545143bdb45868f3666ef1c33522c7157cb",
		"Uniswap V2 Pair: MOJO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x33676385160f9d8f03a0db2821029882f7c79e93",
		"Uniswap V3 Pool: RLB - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x336951856427f758cef09e9f9194d1a84d417444",
		"Uniswap V2 Pair: MEMEME - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x336d256cca045ce75e889541fcf6341a037315f3",
		"Uniswap V2 Pair: $SLUTS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x336ef4e633b1117dca08c1a57f4139c62c32c935",
		"Uniswap V2 Pair: BEND - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x337d0e140f0a5ba5392ffeece275c8c58ab3b1b8",
		"Uniswap V2 Pair: PN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x337f39bd6d52812f399a9ca01e046ad837765c6b",
		"Uniswap V2 Pair: HITMAN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x338b7a1409cc285df8b3d3949b2053af38088d2f",
		"Uniswap V2 Pair: BFR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x33906431e44553411b8668543ffc20aaa24f75f9",
		"Uniswap V2 Pair: WETH - CHAIN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x33a93bd484053615933502cb1299f77de48036c8",
		"Uniswap V2 Pair: NATI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x33af110e648c5b8acb21e93ed2fab7d361309014",
		"Uniswap V2 Pair: OMNIA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x33be7ed806479061a7e62a33d3c9b500fc9b47bf",
		"Uniswap V2 Pair: REL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x33d19cf344cde57bbe63136b546a1cac48862e5d",
		"Uniswap V2 Pair: WETH - DAWG",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x33d2aec1ed7fecc7f7ae55930629ae3eabc9d61d",
		"Uniswap V2 Pair: GATSBY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x33d39ea02d1a569ecc77fbfcbbdcd4300fa0b010",
		"Uniswap V2 Pair: WETH - SIS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x33f6e97ea6f5dfa6691176b33ad5677e08fb6b38",
		"Uniswap V3 Pool: LUNA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3405e4be3c14ff9844dfa2d185cdf19ecf5eff38",
		"Uniswap V2 Pair: KEK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3415e25b637686bbece1d0f798934772101486f6",
		"Uniswap V2 Pair: oGPU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3416cf6c708da44db2624d63ea0aaef7113527c6",
		"Uniswap V3 Pool: USDC - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x343e3a490c9251dc0eaa81da146ba6abe6c78b2d",
		"Zapper.Fi: Uniswap Zap Out V2",
		"Zapper"
	],
	[
		"0x343fd171caf4f0287ae6b87d75a8964dc44516ab",
		"Uniswap V2 Pair: PNK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x34439c39258ffe8150232f1565c5e69e6a212124",
		"Uniswap V2 Pair: PICKLE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3452a7f30a712e415a0674c0341d44ee9d9786f9",
		"Uniswap V2 Pair: INDEX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x345a878f1cd0a6d75371adcd280ce72fa1b3a242",
		"Uniswap V2 Pair: DEAL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x345e394f136912d473497ff5dbed120b73a31ab6",
		"Uniswap V2 Pair: NAO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3470447f3cecffac709d3e783a307790b0208d60",
		"Uniswap V3 Pool: UNI - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3473c92d47a2226b1503dfe7c929b2ae454f6b22",
		"Uniswap V2 Pair: N3RDz - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3478b3ecc153ce61ea3c6788611fdbb374d4305d",
		"Uniswap V2 Pair: BREED - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x349ee001d80f896f24571616932f54cbd66b18c9",
		"Uniswap V3 Pool: GEAR - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x34a43471377dcce420ce8e3ffd9360b2e08fa7b4",
		"Uniswap V2 Pair: WETH - KEROSENE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x34b6f33a5d88fca1b8f78a510bc81673611a68f0",
		"Uniswap V2 Pair: PARTY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x34b8487fc2912c486b04d1436b07f19f7730cd43",
		"Uniswap V3 Pool: WETH - POLK",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x34ba0f2379bf9b81d09f7259892e26a8b0885095",
		"OpenSea: Fees 2",
		"OpenSea"
	],
	[
		"0x34de14ff06206f2ec1d61029895ff2977fc7faea",
		"Uniswap V2 Pair: EYEBOT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3517b88c19508c08650616019062b898ab65ed29",
		"0x: Static Call Proxy",
		"0x"
	],
	[
		"0x3536c21b5c7b0ec72a58e7bce46b7fadef10f941",
		"Uniswap V3 Pool: RWASTE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x353a70db3888e957ad2e7444a08a2c9c08a5db47",
		"Uniswap V2 Pair: XP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x353bb62ed786cdf7624bd4049859182f3c1e9e5d",
		"Uniswap V3 Pool: XEN - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3571e7f516edb1d283d74d2bb56525c9ff059d63",
		"Uniswap V2 Pair: IGG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3574948e6ba1d48a57f4ade944bc0e4eb20f7d5e",
		"Uniswap V2 Pair: LEEROY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x35b6f9e6300aa6c722ea189e096b0b073025806f",
		"Uniswap V2 Pair: ARTH - DAI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x35b9729ff21d54f02bda512f7060466494a40ede",
		"Uniswap V2 Pair: MINI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x35ca4d410acc2be7e59613f20dfec7b7dfe2c149",
		"Uniswap V2 Pair: WETH - Kabosu Inu",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x35ca6a41252f7e0bccdc1d7b2d5b6e2e35a7b483",
		"Uniswap V2 Pair: WETH - DETENSOR",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x35e462cd5adde02da41f7f49e156b91b62f9373f",
		"Uniswap V3 Pool: WETH - FUKBEN",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x360acf12e72044ba3eaaa654e51e4725c699dcb1",
		"Uniswap V3 Pool: ZRO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x360bb0c0c8451095f65568e77d04b4ee970c6ec1",
		"Uniswap V2 Pair: BUGG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x363ab2dd5dcb55f8d8c82bd465c7be4271e6ae74",
		"Uniswap V3 Pool: X - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x36609f8fd720672ad4f34e15383ce127e3e0f865",
		"Uniswap V2 Pair: TRUMP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3663f65ae500cec33ae54468741e5c10a30d1d1e",
		"Uniswap V2 Pair: NEURA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x36708b774e902cd86ab0970b0f0cfb6c41dc8fb5",
		"Uniswap V2 Pair: NUT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3671a927539bd1f077336011567e7c57eb523407",
		"Uniswap V2 Pair: WETH - PRQ",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3681a3feed68414617d61aeed92ca5c13eb2ae4a",
		"Uniswap V2 Pair: SAFEREUM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3688ec45e6c03e78954f96a17d3dc4d7c4794ca4",
		"Uniswap V3 Pool: UNIDX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x36938d1419b717c97ebdb273702806ca73f89a4c",
		"Uniswap V2 Pair: CFi - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3696fa5ad6e5c74fdcbced9af74379d94c4b775a",
		"Uniswap V2 Pair: VETH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x36bcf57291a291a6e0e0bff7b12b69b556bcd9ed",
		"Uniswap V3 Pool: WETH - ICE",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x36d19f5f4074b36b4a67124ecf3ad750bab7276c",
		"Uniswap V2 Pair: $WEAPON - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x371a0985d104c706cafa26ffb990f55ba55bf6c5",
		"Uniswap V3 Pool: CAH - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3730ecd0aa7eb9b35a4e89b032bef80a1a41aa7f",
		"Uniswap V3 Pool: WBTC - renBTC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x376079a32d73b3942639486da4841ca31afa9960",
		"Uniswap V2 Pair: EPAY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x377634d9e73a10190a9a3a858bbad3f260101845",
		"Uniswap V2 Pair: FLASH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3782a3425cd093d5cd0c5b684be72641e199029c",
		"Uniswap V3 Pool: BYTES - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3785ca1128d2efddfec1a87ddb5686b59c7138f8",
		"Uniswap V2 Pair: SILKROAD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x379d908bfba62366cef868c96b80568656b2d9aa",
		"Uniswap V2 Pair: KEI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x37a0464f8f4c207b54821f3c799afd3d262aa944",
		"Uniswap V2 Pair: DEXT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x37a981532d7a2754ec53f9fd86fc34ccb15610eb",
		"Uniswap V3 Pool: OMNI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x37ac54dc7dd237eecfd0b61efdd57b15fe158be0",
		"Uniswap V2 Pair: SHOPX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x37b4cae8d2581e81140e2e172d4d7aed3a675bc7",
		"Uniswap V2 Pair: WETH - VRA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x37d6ddb9346ce1732bf5935e9d6c03046ebcaeaa",
		"Uniswap V2 Pair: ECI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x37de1b300b0f3293caee46f19fd167201e33f55f",
		"Uniswap V2 Pair: WETH - VAB",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x37ea8f1188ab0fae47cba3469a295e8da5442189",
		"Uniswap V3 Pool: PEW - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x37fe7ce3e8f6a0abcc632e8d12275c194f11e78c",
		"Uniswap V2 Pair: PEPAY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x381fe4eb128db1621647ca00965da3f9e09f4fac",
		"Uniswap V3 Pool: ELON - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3827f0e43bb7d52a2ddd40eb8812180394a21b0d",
		"Uniswap V2 Pair: WETH - WRLD",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x383d02acbb27b0066234cc1c9c459e0c54a41b24",
		"Uniswap V2 Pair: UMX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3845a342a030ca67bd16ddf739b1a67fe5b3f8f9",
		"Uniswap V2 Pair: IYF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x385034bed561b362e80b490b8f9ab380abfb9304",
		"Uniswap V2 Pair: DUB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3854612b93b140726167cca5418b01e832515d42",
		"Uniswap V2 Pair: HIGH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3859b3d01b4eac043a5070d3911a7ccd873ec6ac",
		"Uniswap V2 Pair: LIEN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x386c98653e536fba33d1263adbcaf8e5d6f635fb",
		"Uniswap V2 Pair: yRise - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x386ebe0fd5573a83fa7b31983bfbf3572be558e6",
		"Uniswap V2 Pair: BRAT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3885fbe4cd8aed7b7e9625923927fa1ce30662a3",
		"Uniswap V2 Pair: WETH - NEIRO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x38a5e1e4c2e5cd4c91279b097e888737488a5ebc",
		"Uniswap V2 Pair: DJT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x38a795580d0f687e399913a00ddef6a17612c722",
		"0x: Coordinator",
		"0x"
	],
	[
		"0x38a94c4f4d9400643f0fb97198f90c93986f018e",
		"Uniswap V2 Pair: WETH - DDIM",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x38b6e47a97f4680a983eadc8e510c37d73967c29",
		"Uniswap V3 Pool: JASMY - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x38c52343da701fe7e5667dadefd43aa2c2d5487d",
		"Uniswap V2 Pair: BUD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x38ce0f33e1bb7f040ff580b907dd92644b253d88",
		"Uniswap V2 Pair: WETH - FAST",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x38fee5f2ce469ebdfaa62863928e333ef4da485f",
		"Uniswap V3 Pool: BLUR - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x390a4d096ba2cc450e73b3113f562be949127ceb",
		"Uniswap V3 Pool: STBU - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3910348d26f584183d2a0968808b59719538a089",
		"Uniswap V2 Pair: SNORKZ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x39192f8270865c1006601618e8dccb22c7794fb9",
		"Uniswap V2 Pair: Seal - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x391e8501b626c623d39474afca6f9e46c2686649",
		"Uniswap V3 Pool: WBTC - DAI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x394cb9e147b8b288e38615ae04f442a037bcb99f",
		"Uniswap V2 Pair: SANI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x39529e96c28807655b5856b3d342c6225111770e",
		"Uniswap V3 Pool: TUSD - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x395a1350db9627360d09c8b3e7c31fb84261b8f2",
		"Uniswap V2 Pair: GHOST - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x397973ba6e752943ea9146f88414d1f379fd427e",
		"Uniswap V2 Pair: CRAMER - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3986289adced5fef2cd10a7c55ba07c3ef87fb94",
		"Uniswap V2 Pair: ٨ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x39892f48a0361437e565aa6bf16a4f4f5f958b13",
		"Uniswap V2 Pair: DIA - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x39a34c542b0204a1b49a4886c312be7cb2e2a008",
		"Uniswap V2 Pair: OGGY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x39a4b77acd26d6fade894749fa34068950c488b1",
		"Uniswap V2 Pair: Voldemort - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x39c9e3128b8736e02a30b2b9b7e50ff522b935c5",
		"Uniswap V3 Pool: FXS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x39d2978b70ed8db55d51834d4ee7ecb90a690620",
		"Uniswap V2 Pair: ETF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x39ddf1f9b5a58913d8bb809c1b82f752594b8da1",
		"Uniswap V2 Pair: BULL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x39de6c18d82ab9dd1ed4b9e0b4d1bc971ddd6c9d",
		"Uniswap V2 Pair: SHIBGF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x39ed7d8472feeec6d7e2e5f32f7987f85a43e1ec",
		"Uniswap V2 Pair: KONG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x39fb7af42ef12d92a0d577ca44cd54a0f24c4915",
		"Uniswap V2 Pair: COC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3a0ef60e803aae8e94f741e7f61c7cbe9501e569",
		"Uniswap V2 Pair: WETH - LBR",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3a3a0669f06ae44f38137dd4a83c1a2899fcf92a",
		"Uniswap V2 Pair: JOY - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3a5baea0c276e1917806521b4db4f23179f512c3",
		"Uniswap V2 Pair: SFI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3a815d399de8def3e0d315f9502f485476117a65",
		"Uniswap V2 Pair: BART - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3a8afc58b70b34a0a5615d3a5ffe623ca1fa92b8",
		"Uniswap V2 Pair: NU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3a925503970d40d36d2329e3846e09fcfc9b6acb",
		"Uniswap V2 Pair: SDAO - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3aaf77ba7da262e34dffb9b10fc6777bfda79ab7",
		"Uniswap V3 Pool: USDC - ICSA",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3abb02fb560b07488e264a8e5934b1258503680d",
		"Uniswap V3 Pool: THE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3aeee5ba053ef8406420dbc5801fc95ec57b0e0a",
		"Uniswap V2 Pair: DEC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3af45bb3a18f673e68885df517e60a17b1dbef56",
		"Uniswap V2 Pair: BABYPEPE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3af73bb96b335fc0fd2c4cf39ce95f3ff8c8de66",
		"Uniswap V2 Pair: TYRANT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3afc65088c39eb3b39b441116640992614f08166",
		"Uniswap V2 Pair: DERP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3afdc5e6dfc0b0a507a8e023c9dce2cafc310316",
		"Uniswap V3 Pool: MKR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3b122c376e472ae6ae7a4739bebf7b68e045b285",
		"Zapper.Fi: Moderate Bull",
		"Zapper"
	],
	[
		"0x3b1fc07e3010d5c45f20a703b355ee46fae2bc3f",
		"Uniswap V2 Pair: WETH - PHIBA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3b3d4eefdc603b232907a7f3d0ed1eea5c62b5f7",
		"Uniswap V2 Pair: STAKE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3b685307c8611afb2a9e83ebc8743dc20480716e",
		"Uniswap V3 Pool: FTM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3b6ea8d9c6dfaba0ffc63086b9eb669ddeb96ee2",
		"Uniswap V2 Pair: FTX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3ba3c8fb0142a6f2bf3e2990a08957866203f961",
		"Uniswap V2 Pair: DAI - ONC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3ba47c54b4e2bc7e95df7c8d2002789e9fd71f09",
		"Uniswap V2 Pair: KONG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3bc810483e4e2344f0e114a57af13cedc44cf717",
		"Uniswap V3 Pool: LEASH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3bd2035d08363a8cfdab70a41b0faad3510492dc",
		"Uniswap V2 Pair: KLEE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3bd4c71155de785328bd7d1118acad7798cbaf6b",
		"Uniswap V3 Pool: WAVAX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3be033b60bc4aa789368954595332fab143987ec",
		"Uniswap V3 Pool: BONE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3be9207f5a70aca8ff1557336d3ac153f797a6ac",
		"Uniswap V2 Pair: SHINJI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3beeab9d5624e487045e01d12332975204a04a8a",
		"Uniswap V2 Pair: BCB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3bf0c6ef79334727a6652e90818649645e4ae5e8",
		"Uniswap V2 Pair: MATT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3bf1b837ccc1f62114a3e74ced4fcfb121d7e52a",
		"Uniswap V2 Pair: Coval - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3bf862093cbb6412b6ee498f4d652bba005aa7f3",
		"Uniswap V2 Pair: K21 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3bfdbf5c023e753c69354375183c4713c807ce68",
		"Uniswap V2 Pair: WETH - ARDVRK",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3c2a37b1131da9941a577e7155ee393a5a6d7667",
		"Uniswap V2 Pair: THREE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3c30d38ec285bbb5d7e805e140b5ca75509ce213",
		"Uniswap V3 Pool: DOP - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3c442bab170f19dd40d0b1a405c9d93b088b9332",
		"Uniswap V2 Pair: POWR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3c571e3d3be1c50e35453bb46c628100822a8195",
		"Uniswap V2 Pair: OHARE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3c5f0c9e503175e3138af564bbabba10217f8cee",
		"Uniswap V2 Pair: PEPE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3c70f4faea49e50adc8305f2e1aa0ea326a54ffc",
		"Uniswap V2 Pair: WETH - INJ",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3c77c3c34a1f41fdc62c7ba30043444c70d325cd",
		"Uniswap V2 Pair: WETH - AZALEA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3cc8e2aebbefe37d4c7e9ed7accef6bcc31eea61",
		"Uniswap V2 Pair: Robotaxi - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3cd1c0b98be4451ca51265bbaeb76cf7b31e1c02",
		"Uniswap V2 Pair: WETH - WBCB",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3cd80800a1403a96c4c8aa28cc291cb8cd6442b3",
		"Uniswap V3 Pool: WETH - SUPER",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3ce42ef6b6617b5950c13d1c258ecfdcd30bb4de",
		"Uniswap V3 Pool: RNG - NU",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3d07f6e1627da96b8836190de64c1aed70e3fc55",
		"Uniswap V2 Pair: SGT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3d1d0553a4587c2e74af73b00a202cea5794547e",
		"Uniswap V2 Pair: NGMI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3d2d3c4446e8a82445418523b9b5b376765e55a8",
		"Uniswap V2 Pair: AGI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3d3ee86a2127f4d20b1c533e2c1abd8040da1dd9",
		"Uniswap V2 Pair: VOX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3d5f3b3bb9b23c5bf1154091009d8465ae4d85ab",
		"Uniswap V2 Pair: WETH - CAI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3da1313ae46132a397d90d95b1424a9a7e3e0fce",
		"Uniswap V2 Pair: WETH - CRV",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3dd49f67e9d5bc4c5e6634b3f70bfd9dc1b6bd74",
		"Uniswap V2 Pair: SAND - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3ddbbfd2cf0120f6e98ea0d44aed3475c385f0e9",
		"Uniswap V2 Pair: WETH - SLP",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3ddf8f1aa0595bd7e78513fd998a8321cee70832",
		"Uniswap V3 Pool: JAM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3df70e5b6edead5277590d3de5731d17f46e043b",
		"Uniswap V2 Pair: DG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3e20d19301fa860734a766c7d942b07cb81d3b0b",
		"Uniswap V2 Pair: Richard - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3e324bf3c5ce407289717cefb2b70af64aed8120",
		"Uniswap V2 Pair: ZEFU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3e406eca97c1252d13455850055e2b008740e30d",
		"Uniswap V2 Pair: CHIHUA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3e6e23198679419cd73bb6376518dcc5168c8260",
		"Uniswap V3 Pool: WETH - BTRFLY",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3e8468f66d30fc99f745481d4b383f89861702c6",
		"Uniswap V2 Pair: GNO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3e87d4c24fb56c52a0dbd089a6219b7086d577d8",
		"Uniswap V3 Pool: TRIAS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3e9b04c0a11fc801335b0c436a3ae3dea0dc2188",
		"Uniswap V2 Pair: KOIN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3eb55a1cbfdefe4e6fbe72c868213456816c2bdc",
		"Uniswap V2 Pair: UMEX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3eb8224923774f668d6e722cdbf8b0f4e46dae38",
		"Uniswap V3 Pool: iZi - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3ee301ed8f42d106def4f9d9730ea3367880b771",
		"Uniswap V3 Pool: ASH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3f2eea452d4717dea05dbe55e1bfaf020294dd97",
		"Uniswap V2 Pair: eXRD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3f3aa0726b240aef0fe4f7df2814df525303dc43",
		"Uniswap V2 Pair: WETH - ECO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3f60879606126afc54555712f63564bccb269ce5",
		"Uniswap V2 Pair: Trinity - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3f61171b1297f6e512c750c172ba86026ab0e820",
		"Uniswap V2 Pair: USDC - FLEX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3f759c3f4cdba32e69ddf607e0cdcc2547061b97",
		"Uniswap V2 Pair: GFARM2 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3f75a5b408feb14cba3d21bd934dc5b88908f105",
		"Uniswap V2 Pair: SPC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3f96fd489468e1527f653676441c8e3968f5b40e",
		"Uniswap V2 Pair: Steve - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3fa5db0910afc2a1e6de45039ea217410fb8641d",
		"Uniswap V2 Pair: XCAD - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3fb4cb7f1e2e5110adf709dd277d77381c886ea9",
		"Uniswap V2 Pair: ALPHA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3fc91a3afd70395cd496c647d5a6cc9d4b2b7fad",
		"Uniswap Universal Router",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3fcc11a3b0afbb0996ee70c6ce713cf70603e056",
		"Uniswap V2 Pair: AOL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3fd349f3d99970dfe553ca04e37e066be955c1a5",
		"Uniswap V2 Pair: BTC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3fd4cf9303c4bc9e13772618828712c8eac7dd2f",
		"Uniswap V2 Pair: BNT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3fdfd866fa9e1ab4b6f6762cbdce0bf787583dc3",
		"Uniswap V2 Pair: AIX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3ffedcddd268511acc44ae67845bdd56c8417fa4",
		"Uniswap V3 Pool: WBTC - FUN",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4006bed7bf103d70a1c6b7f1cef4ad059193dc25",
		"Uniswap V3 Pool: GAMMA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4028daac072e492d34a3afdbef0ba7e35d8b55c4",
		"Uniswap V2 Pair: stETH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x403b1b747b1efb309070436c9ac99bf476f299ea",
		"Uniswap V3 Pool: Bonk - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x403eed5cab77516ff8a2a7ab7f2afdb39293a76f",
		"Uniswap V2 Pair: WETH - TRUST",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4042a04c54ef133ac2a3c93db69d43c6c02a330b",
		"Uniswap V2 Pair: FET - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x40449d1f4c2d4f88dfd5b18868c76738a4e52fd4",
		"Uniswap V2 Pair: CWS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x40643d019bcb381800f0c2d593a4a6472ccd7493",
		"Uniswap V2 Pair: ferc - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x40829a59080a12f16bb8fba22354a6a42c810aab",
		"Uniswap V2 Pair: WETH - VTX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x40849deb556ff2c682088a12b0299ad821ae231a",
		"Uniswap V2 Pair: TAS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4085cafb2c519e6bf69ad410d91dbb6139948366",
		"Uniswap V2 Pair: VR - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x408609f5acab253d41cb5dfce913ff367937313b",
		"Zapper.Fi: LINK LLP 100% LINK",
		"Zapper"
	],
	[
		"0x408a625596f47314e1fd4a6cbce84c4a8695ba3f",
		"Uniswap V3 Pool: ENA - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x40902c98b878471d1e50a846b016525bc8bef836",
		"Uniswap V2 Pair: WETH - EMB",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x409de5926a8a6879a5ee3ff594ad76c11d88e921",
		"Uniswap V2 Pair: BabyTrump - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x40a8003ea28e518c6e63b1b61ce15623557fed25",
		"Uniswap V3 Pool: BOO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x40ba9b6421d584cec10330f882c5a343d8466b71",
		"Uniswap V2 Pair: YFD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x40dd9e384a7d3e95df80c2198da96fac8ccbcc0e",
		"Uniswap V2 Pair: BUG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x40f0e70a7d565985b967bcdb0ba5801994fc2e80",
		"Uniswap V2 Pair: WETH - ZERO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4103e658a8acab924a9a2d3750e6cf3fb932a186",
		"Uniswap V2 Pair: ONI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4109ab7966c5461439bdb0beda92c92fec767966",
		"Uniswap V3 Pool: MMX - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x411a9b902f364817a0f9c4261ce28b5566a42875",
		"Uniswap V2 Pair: ibETH - ALPHA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x412940fdac1214fc3df430769f54e69210a18e49",
		"Uniswap V3 Pool: WETH - ELA",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4131031400789a5cbeec760079fda209e7da8926",
		"Uniswap V2 Pair: VANKEK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x414b0de19d69c18657bcef0f30c72500598b1b88",
		"Uniswap V2 Pair: WETH - L3P",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x414fbf662fc98415dbee27c72013a6f3a937ed66",
		"Uniswap V2 Pair: OWL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4168cef0fca0774176632d86ba26553e3b9cf59d",
		"Uniswap V2 Pair: DEV - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4177d19e4125213bdd8d82dbc1ca775799d18218",
		"Uniswap V2 Pair: SD - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x419991da56d9ad96a1a38513b7ae7e49caa4b82c",
		"Uniswap V2 Pair: WETH - SHIDO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x41a140a26be5e25d6207e565e755fac87d5e7cb9",
		"Uniswap V2 Pair: $yawn - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x41aabdd22171e405a8e7b98adcff36db2ce0f68a",
		"Uniswap V2 Pair: BLOCK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x41f11282fb5330700a6c8a67dd2c7ebb9b8adfa5",
		"Uniswap V2 Pair: BEEF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x41f50f520f5095fc8403df083285232b822611c3",
		"Uniswap V2 Pair: SOLANA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x41fa9d029611884b57fd371fa3685f57355ead0d",
		"Uniswap V2 Pair: WETH - XXX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x41fcf9e248e2be21c5debe8f010080335dcb0d40",
		"Uniswap V2 Pair: WETH - NFT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x42018a2ff89b6d662b5f746277bd02f0d85f485a",
		"Uniswap V2 Pair: RWS - XRT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x420583c08e3c06dbad988d5f00ca48ff86ac98ce",
		"Uniswap V2 Pair: KEK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x420cf323d2c19ed37b3a24093fd29da3733e7e58",
		"Uniswap V2 Pair: SHIBAKEN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4214290310264a27b0ba8cff02b4c592d0234aa1",
		"Uniswap V2 Pair: RFOX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x424485f89ea52839fdb30640eb7dd7e0078e12fb",
		"Uniswap V2 Pair: SDAO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x42619f1eb89b993f7f5193de6ab1423a703fc344",
		"Uniswap V2 Pair: GNCAT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x426ec9b9a11da1c9a082f921cafe86989c3c64ab",
		"Uniswap V2 Pair: MOUSEWORM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x428bc363a7d743425863d6e5699683a69cacedc8",
		"Uniswap V2 Pair: JINU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x42b24a95702b9986e82d421cc3568932790a48ec",
		"Uniswap NFTDescriptor",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0x42bf256e027f9d81f132a87881d2ca8d0615ba01",
		"Uniswap V2 Pair: KOJI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x42c02c24caaf42a27dd95c790073a4ea3118ea48",
		"Uniswap V2 Pair: WETH - HODL 💎",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x42c2b823b358ad7617ac2de094400c26fa437f97",
		"Uniswap V2 Pair: WETH - SHIV",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x42d403ab9b0603442ac991c0cfe124105dde0811",
		"Uniswap V3 Pool: PSYOP - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x42d52847be255eacee8c3f96b3b223c0b3cc0438",
		"Uniswap V2 Pair: WETH - UOS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x42d83187e711a78bb1b55047023280be7a4a0d95",
		"Uniswap V2 Pair: XD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4316e3ad83ca2cf0ea5e3b25e3de2fa7f93cfe9c",
		"Zapper.Fi: Unipool UnZap",
		"Zapper"
	],
	[
		"0x4329412f58161141eb3d86c5c9a406d99020b518",
		"Uniswap V2 Pair: DFNDR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x433a00819c771b33fa7223a5b3499b24fbcd1bbc",
		"Uniswap V3 Pool: wTAO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x434e4633c3e0b454813b2ceabd0c1fc2b32b4152",
		"Uniswap V2 Pair: CAD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x435664008f38b0650fbc1c9fc971d0a3bc2f1e47",
		"Uniswap V3 Pool: USDe - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4357ea68633a079fdfae21b35a68bc0f9d590402",
		"Uniswap V2 Pair: POP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4360658e680026e4c636e8be0f7d0b9f976c46f0",
		"Uniswap V2 Pair: WSB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x43747d31fc178d626047c5b4346a251418167a1a",
		"Uniswap V2 Pair: NBNG - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4374eead5e21540f9ce0695ebb92708313d1f42b",
		"Uniswap V2 Pair: DRIP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x438d3e9cacab4614a8f1613ac7b182378d76e1f8",
		"Uniswap V2 Pair: WSCRT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x43a372e4dad9d28e476c5a591810981895511f8a",
		"Uniswap V2 Pair: WETH - KERMIT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x43a68a9f1f234e639b142f0aba946b7add26418d",
		"Uniswap V2 Pair: PIKA - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x43ae24960e5534731fc831386c07755a2dc33d47",
		"Uniswap V2 Pair: SNX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x43de4318b6eb91a7cf37975dbb574396a7b5b5c6",
		"Uniswap V2 Pair: BANANA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x43e7ade137b86798654d8e78c36d5a556a647224",
		"Uniswap V3 Pool: wQUIL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x43f9a2e53d0db4b451f85e4cadfd291845dbc795",
		"Uniswap V2 Pair: WETH - TETRIS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x43fdbee01a1f6698766a51a69d4a849ec09cbe81",
		"Uniswap V2 Pair: UNCL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x440349579065299f3458e4f101d2fc410517997d",
		"Uniswap V2 Pair: WETH - UFR",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x441f9e2c89a343cefb390a8954b3b562f8f91eca",
		"Uniswap V2 Pair: ALPA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4422610f73f4143a3936f8fa300329bba8833b54",
		"Zapper.Fi Uniswap V2 Zap Out",
		"Zapper"
	],
	[
		"0x44505b844883b24950c36ddf0f40be8297e157fc",
		"Uniswap V2 Pair: YYY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x447cb670d989caba674c8e582c3e29503722b340",
		"Uniswap V2 Pair: WETH - DGS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x447f8d287120b66f39856ae5ceb01512a7a47444",
		"Uniswap V2 Pair: WETH - DAM",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x448b0f9f45526e64ae8516c56479697a91ee255a",
		"Uniswap V2 Pair: CUR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4495fe3e57f5c7b46e5527162efd15a7606f35d8",
		"Uniswap V3 Pool: QORPO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4499f07be99886a2f93a95572bd2141c52f7b6a6",
		"Uniswap V2 Pair: YIELD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x44c21f5dcb285d92320ae345c92e8b6204be8cdf",
		"Uniswap V2 Pair: WETH - $DG",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x44c95bf226a6a1385beaced2bb3328d6afb044a3",
		"Uniswap V3 Pool: PEAS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x44f9469d0d5393d3a01a0d4fa14fe7713c1ad1f7",
		"Uniswap V3 Pool: DRGN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4502988e070f96cf3bea50b4811cd5844e13a81b",
		"Uniswap V2 Pair: RST - RIO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x450e653a0a125a1dc36d3901d3cce2e2287df0c2",
		"Uniswap V2 Pair: MONGOOSE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4527962923e9326a985baa05218dc0a18620ec7a",
		"Uniswap V2 Pair: 0xG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x452c60e1e3ae0965cd27db1c7b3a525d197ca0aa",
		"Uniswap V2 Pair: VADER - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x453a43e2bf3080f7a23c9bb034ccdd869e306102",
		"Uniswap V2 Pair: WETH - STRNGR",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x454d7156b0f62f61e7f2ad6a65d29ce681d6d354",
		"Uniswap V2 Pair: VAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x454f11d58e27858926d7a4ece8bfea2c33e97b13",
		"Uniswap V2 Pair: LDO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x455d4d19aca31c7530d75a32f98cf28d98365587",
		"Uniswap V2 Pair: TURBO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x45687b3aaabb7997d3d06561cb7f8677641fd7bc",
		"Uniswap V2 Pair: TAILS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x456974df1042ba7a46fd49512a8778ac3b840a21",
		"Zapper.Fi: Curve Zap in",
		"Zapper"
	],
	[
		"0x456fb056a8d118300b624d3aee3864e685ae086c",
		"Uniswap V2 Pair: CAPS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x45761300f2c78e4e202ebcf9c304444ef6e16b79",
		"Uniswap V2 Pair: WETH - KABOSU",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x45797531b873fd5e519477a070a955764c1a5b07",
		"0x: Coordinator Registry",
		"0x"
	],
	[
		"0x4585fe77225b41b697c938b018e2ac67ac5a20c0",
		"Uniswap V3 Pool: WBTC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x459e4eeafb9e5d7299bbbcd5b6ab36667ffe3597",
		"Uniswap V2 Pair: F9 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x45a154971ba574587e837585ff6fd2520be73339",
		"Uniswap V3 Pool: STMX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x45c695f4fb8c206b2d114683ebfa97c6bbda2084",
		"Uniswap V2 Pair: BHC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x45d559c7e2c2132e59100008cc2241b68c9689ed",
		"Uniswap V2 Pair: PAPA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x45f4d60405b797a2b0e5ea581fe6ea445cb46b8f",
		"Uniswap V3 Pool: OPSEC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x45feeb2738020eb69974ecb8a9dd6fcfeb478a70",
		"Uniswap V2 Pair: CHAT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x460b1cfb76a34d51f8ca8886371ef78e3f2b6b84",
		"Uniswap V2 Pair: WETH - AVI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x461d46caa0ffa91bf76c11938105744f74f1e016",
		"Uniswap V2 Pair: LOCG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x461dda49d5f7dcf461446fdbbb59384fd523cce2",
		"Uniswap V2 Pair: WETH - FRIN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4620bee6e5bd679b0242bf0bd6291b0ac45b909b",
		"Uniswap V2 Pair: USDC - MYTH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4622df6fb2d9bee0dcdacf545acdb6a2b2f4f863",
		"Uniswap V3 Pool: wstETH - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4628a0a564debfc8798eb55db5c91f2200486c24",
		"Uniswap V3 Pool: RNDR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x46290c5ca856408ddbb733954626ce7970ed8723",
		"Uniswap V2 Pair: STARSHIP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x465e22e30ce69ec81c2defa2c71d510875b31891",
		"Uniswap V2 Pair: COVER - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x465e56cd21ad47d4d4790f17de5e0458f20c3719",
		"Uniswap V3 Pool: WETH - GALA",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x469506e58d4d0d7abb476dd5c0a999d46723351f",
		"Uniswap V2 Pair: CRU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x46af8ac1b82f73db6aacc1645d40c56191ab787b",
		"Uniswap V2 Pair: NDX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x46c752b1da67ce438e2b73e47e3464038b3799f3",
		"Uniswap V2 Pair: oDOGE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x47082a75bc16313ef92cfaca1feb885659c3c9b5",
		"Uniswap V2 Pair: WETH - ARC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x470e8de2ebaef52014a47cb5e6af86884947f08c",
		"Uniswap V2 Pair: WETH - FOX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x47270ca9a3cdf198d26a847b577e9bbdd96a082a",
		"Uniswap V2 Pair: WETH - BIRDDOG",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4735eb2b143a395b97453dbb73b15fa6c46c4d3d",
		"Uniswap V2 Pair: KEK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4742e4924a6511f97c6299d96b283360d0b337ae",
		"Uniswap V2 Pair: FANX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4752b3bf9dabd61fe8150760ec580b183d9fda57",
		"Zapper.Fi: PoolTogether Zap In",
		"Zapper"
	],
	[
		"0x478850873813b5551f41a0514df9cd6d692b638c",
		"Uniswap V2 Pair: POSHI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x478867b6e55ee73968d93e3c6525bfd1543a2aca",
		"Uniswap V2 Pair: WAGMI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x478893fcbfffc3283fece2a216229e1c34093980",
		"Uniswap V2 Pair: PAINT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x479d7a7864e00668da1ee507fa1b925fb1b2ae19",
		"Uniswap V2 Pair: HAMS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x47e466a1640f9c0a36dffc6830954db4c4a414e1",
		"Uniswap V3 Pool: USDC - SWAP",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x481e881b32f0173cd090fb04266073173964ec70",
		"Uniswap V2 Pair: MRS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x481efdd010433ded1a931b557e4fe63b7b897964",
		"Uniswap V2 Pair: WETH - XED",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x48200057593487b93311b03c845afda306a90e2a",
		"Uniswap V2 Pair: KAP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x482ece59976461f5bfbcc2f5546c4878fd44ec71",
		"Uniswap V3 Pool: ELO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4831e261bb90e498f64c99a222dfbfd2c820e8f9",
		"Uniswap V2 Pair: ARNX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x483778fefb36bb9b8669ea8d010058fbee07dde2",
		"Uniswap V2 Pair: WAT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x48598b64d88ab649e49e82f9e328eeee5011a8ff",
		"Uniswap V2 Pair: DAI - zLOT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x48598ff1cee7b4d31f8f9050c2bbae98e17e6b17",
		"Uniswap V3 Pool: JBX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x48616d7ecbf2a439cadd4801fbd643ad2e9d4ee6",
		"Uniswap V2 Pair: ZUZ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x486263aa56d1b49d78dea765754164b880c99954",
		"Uniswap V3 Pool: FUN - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x48631f2eef62f1ace0600e5db38cfbf77f64a3e8",
		"Uniswap V2 Pair: WETH - PUX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x486792bcdb13f8aacf85288d98850fa2804f95c7",
		"Uniswap V2 Pair: FIN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x488e55180c3a6f43a463155b9d054675a6bc0a04",
		"Uniswap V2 Pair: WETH - PRISMA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x489cebe6cd5dc5dcb7047a1f0d4f358a5d2fb295",
		"Uniswap V3 Pool: IOTX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x48a91882552dad988ae758fcb7070b8e9844dec5",
		"Uniswap V2 Pair: ARCH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x48d20b3e529fb3dd7d91293f80638df582ab2daa",
		"Uniswap V2 Pair: WETH - CAW",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x48da0965ab2d2cbf1c17c09cfb5cbe67ad5b1406",
		"Uniswap V3 Pool: DAI - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x48e313460dd00100e22230e56e0a87b394066844",
		"Uniswap V2 Pair: WETH - OMG",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4905ec2fbd99b4ccf025953a0b7b3e4174ae4c3f",
		"Uniswap V2 Pair: RON - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4941aecb840c1b5f99ac001a2b7c288a585dced1",
		"Uniswap V2 Pair: WETH - 𝕏PAY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x495864cad6cf60e97efcd3f14ff8b1f167956ba2",
		"Uniswap V3 Pool: API3 - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x496ab075f43991dd794baf982dc3d9817a49b33a",
		"Uniswap V2 Pair: RARE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x49727bbe3ba46aeb1058749ed2741a42fd1ccda8",
		"Uniswap V3 Pool: OX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4976fb03c32e5b8cfe2b6ccb31c09ba78ebaba41",
		"ENS: Public Resolver 2",
		"ENS",
		"images/contracts/ENS.jpg",
		"[{\"inputs\":[{\"internalType\":\"contract ENS\",\"name\":\"_ens\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"contentType\",\"type\":\"uint256\"}],\"name\":\"ABIChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"a\",\"type\":\"address\"}],\"name\":\"AddrChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"coinType\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"newAddress\",\"type\":\"bytes\"}],\"name\":\"AddressChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"isAuthorised\",\"type\":\"bool\"}],\"name\":\"AuthorisationChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"hash\",\"type\":\"bytes\"}],\"name\":\"ContenthashChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"name\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"uint16\",\"name\":\"resource\",\"type\":\"uint16\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"record\",\"type\":\"bytes\"}],\"name\":\"DNSRecordChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"name\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"uint16\",\"name\":\"resource\",\"type\":\"uint16\"}],\"name\":\"DNSRecordDeleted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"DNSZoneCleared\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes4\",\"name\":\"interfaceID\",\"type\":\"bytes4\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"implementer\",\"type\":\"address\"}],\"name\":\"InterfaceChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"NameChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"x\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"bytes32\",\"name\":\"y\",\"type\":\"bytes32\"}],\"name\":\"PubkeyChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"string\",\"name\":\"indexedKey\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"}],\"name\":\"TextChanged\",\"type\":\"event\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"contentTypes\",\"type\":\"uint256\"}],\"name\":\"ABI\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"addr\",\"outputs\":[{\"internalType\":\"address payable\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"coinType\",\"type\":\"uint256\"}],\"name\":\"addr\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"authorisations\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"clearDNSZone\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"contenthash\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"name\",\"type\":\"bytes32\"},{\"internalType\":\"uint16\",\"name\":\"resource\",\"type\":\"uint16\"}],\"name\":\"dnsRecord\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"name\",\"type\":\"bytes32\"}],\"name\":\"hasDNSRecords\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"bytes4\",\"name\":\"interfaceID\",\"type\":\"bytes4\"}],\"name\":\"interfaceImplementer\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes[]\",\"name\":\"data\",\"type\":\"bytes[]\"}],\"name\":\"multicall\",\"outputs\":[{\"internalType\":\"bytes[]\",\"name\":\"results\",\"type\":\"bytes[]\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"pubkey\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"x\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"y\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"contentType\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"setABI\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"coinType\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"a\",\"type\":\"bytes\"}],\"name\":\"setAddr\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"a\",\"type\":\"address\"}],\"name\":\"setAddr\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"target\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"isAuthorised\",\"type\":\"bool\"}],\"name\":\"setAuthorisation\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"bytes\",\"name\":\"hash\",\"type\":\"bytes\"}],\"name\":\"setContenthash\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"setDNSRecords\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"bytes4\",\"name\":\"interfaceID\",\"type\":\"bytes4\"},{\"internalType\":\"address\",\"name\":\"implementer\",\"type\":\"address\"}],\"name\":\"setInterface\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"setName\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"x\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"y\",\"type\":\"bytes32\"}],\"name\":\"setPubkey\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"}],\"name\":\"setText\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceID\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"pure\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"key\",\"type\":\"string\"}],\"name\":\"text\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"}]"
	],
	[
		"0x498498fa386ef2860e7abf8c60254580c8c41ec5",
		"Uniswap V3 Pool: DC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x498c00e1ccc2afff80f6cc6144eaeb95c46cc3b5",
		"Uniswap V2 Pair: AGI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x49af5fb5de94c93ee83ad488fe8cab30b0ef35f2",
		"Uniswap V3 Pool: WETH - KABOSU",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x49bd1fa4c7286c2754ec7607f6f2e835f3ca6ddd",
		"Uniswap V3 Pool: $PAAL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x49f9316eb22de90d9343c573fbd7cc0b5ec6e19f",
		"Uniswap V2 Pair: WETH - POWER",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4a08cf0a7bca217c24b9ee99c0395052f3707d68",
		"Uniswap V2 Pair: VOLT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4a17b7230c4b9b47e6c7b023103d6a11bd498022",
		"Uniswap V2 Pair: MTHD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4a2987c255ad7f9409c54a4fce7823441e14f08b",
		"Uniswap V3 Pool: WPLS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4a39d635581dd0fb39fe0e211c4b03590e44aa35",
		"Uniswap V2 Pair: YUI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4a488d7a4f2240e4b1798c750e5bf8106e2acf92",
		"Uniswap V2 Pair: TENSHI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4a6670b0afb21b2770541c4c9bd678323f7d84c4",
		"Uniswap V2 Pair: WETH - FINALE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4a73a7e29988f171910119d660c4dd548282bf2a",
		"Uniswap V3 Pool: WETH - PSP",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4a7d4be868e0b811ea804faf0d3a325c3a29a9ad",
		"Uniswap V2 Pair: REQ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4a885a72c45b2dd9fef6d732b3de7baaf9e5436c",
		"Uniswap V2 Pair: $TUCKER - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4a97b4da0d43e1d36952e239cfda8922e8643931",
		"Uniswap V3 Pool: HEX - HDRN",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4b05d62fff53db825b407ba84c40d9d634a28e49",
		"Uniswap V2 Pair: NFAi - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4b1e9a9de809ce968c7dfb0e66f91bb7d794f3ed",
		"Uniswap V2 Pair: WETH - GETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4b1f895066058662b9fa885e87a4e4159be0798a",
		"Uniswap V3 Pool: NMR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4b398fcd7841412610b653b34e89c9b19a42ebfc",
		"Uniswap V2 Pair: BTC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4b3d09151ad295623ac9e50967739fd437b0d892",
		"Uniswap V3 Pool: WETH - NCR",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4b3ec6f5290f729e4b9b0ccfbb1dfaa118c078a2",
		"Uniswap V2 Pair: WETH - GAIN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4b5ab61593a2401b1075b90c04cbcdd3f87ce011",
		"Uniswap V3 Pool: WETH - LOOKS",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4b618087dae7765823bc47ffbf38c8ee8489f5ca",
		"Uniswap V2 Pair: WETH - SASHIMI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4b62fa30fea125e43780dc425c2be5acb4ba743b",
		"Uniswap V3 Pool: TONCOIN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4b743fda1996e21f84a6cc66bbbd3e665fcc2279",
		"Uniswap V2 Pair: WETH - HONK",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4b82bca90fdab48491ac4a9131c8dbf8bdbeda8f",
		"Uniswap V2 Pair: PC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4b82e8a0eccbdb0e8247f121f6b1ddc4f759522d",
		"Uniswap V2 Pair: WETH - ( ͡° ͜ʖ ͡°)",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4b8852e4747b8a7d4caf0440e4e3397032a6723d",
		"Uniswap V2 Pair: USDT - O3",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4b9d0663acb7a774c327b679d423993c2a11a263",
		"Uniswap V3 Pool: SDAO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4bacaaabe3e96959ddf3269d3092d5cea88fefe9",
		"Uniswap V2 Pair: XMON - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4bb0925fa50da9b4c8936869433b48e78ccc5c13",
		"Uniswap V2 Pair: AGIX - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4bd66f75f73c6d8ac14064537eb32cc420c7afbe",
		"Uniswap V2 Pair: OJA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4be346cc45646bafc94b7d1bc9262ee0e9acb932",
		"Uniswap V2 Pair: WETH - 科太币",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4be410e2ff6a5f1718ada572afa9e8d26537242b",
		"Uniswap V3 Pool: WETH - AURA",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4bec87cb126de6c1f8b410e32d1f4ae472fdd83b",
		"Uniswap V3 Pool: WETH - EURT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4c083084c9d50334b343c44ec97d16011303cc73",
		"Uniswap V2 Pair: WETH - GMEE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4c52d01fb85b36cccf1647b99fb7b20f70fe669c",
		"Uniswap V3 Pool: WETH - SHARES",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4c54ff7f1c424ff5487a32aad0b48b19cbaf087f",
		"Uniswap V3 Pool: NEXO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4c704725e29679635d3b8cb2fb20950ad38da86b",
		"Uniswap V2 Pair: EQZ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4c7c61ad6dc3a3687d22f224af2ac1c60dcc103f",
		"Uniswap V2 Pair: BONK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4c7e62fbb86b204f7c6dc1f582ddd889182d5cf5",
		"Uniswap V2 Pair: DOGPAD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4c8341379e95f70c08defb76c4f9c036525edc30",
		"Uniswap V2 Pair: RFI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4c83a7f819a5c37d64b4c5a2f8238ea082fa1f4e",
		"Uniswap V3 Pool: WETH - CRV",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4c9831fddbe7520887ec86611cd21b8101e78b36",
		"Uniswap V2 Pair: Pacha - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4cbcff3e46a106793a972ea7051dfd028f34517a",
		"Uniswap V2 Pair: WETH - DPAY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4cd36d6f32586177e36179a810595a33163a20bf",
		"Uniswap V2 Pair: DAO - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4cd48a9d93538fcb1d0a393c9b6ceb2d05403490",
		"Uniswap V3 Pool: WETH - L",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4ce3687fed17e19324f23e305593ab13bbd55c4d",
		"Uniswap V2 Pair: FUSE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4d184bf6f805ee839517164d301f0c4e5d25c374",
		"Uniswap V2 Pair: GDAO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4d1eff861316396dd1915f69b49f4c2d7b11590d",
		"Uniswap V3 Pool: JASMY - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4d3138931437dcc356ca511ac812e14ba8199fd6",
		"Uniswap V2 Pair: BONDLY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4d340366b456fb2f5a079ac255b6da69e0518b53",
		"Uniswap V2 Pair: eef - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4d3a10d4792dd12ececc5f3034c8e264b28485d1",
		"Uniswap V2 Pair: TITANX - BLAZE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4d3c5db2c68f6859e0cd05d080979f597dd64bff",
		"Uniswap V2 Pair: MVI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4d42fd2fe2eb1e4c7eec64272a1f715dce0ea535",
		"Uniswap V2 Pair: USDC - Daruma",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4d4786384eb4e356ea2df195bbe84c89440accf0",
		"Uniswap V2 Pair: BLANK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4d52f033b7a667c3db46fa358d07f768010dabfd",
		"Uniswap V2 Pair: USDC - PBX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4d5ebb22982ffeccb7b3e42a624555cb313285f0",
		"Uniswap V2 Pair: HGET - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4d5ef58aac27d99935e5b6b4a6778ff292059991",
		"Uniswap V2 Pair: DPI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4d5f135691f13f7f5949ab3343ac7dc6bd7df80b",
		"Uniswap V2 Pair: MASK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4d66182187aac4a4b20e02d9a5e063cf5ca4c3a4",
		"Uniswap V2 Pair: UNICHAD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4d96369002fc5b9687ee924d458a7e5baa5df34e",
		"Uniswap V2 Pair: MPH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4d9824fbc04eff50ab1dac614eae4e20859d5c91",
		"Uniswap V2 Pair: DEUS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4dad2532f1b6a8349ef0b7c08f4f4ac2d2870ef6",
		"Uniswap V2 Pair: WETH - Doge-1",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4daeac8ea49c9770fa496e4de76f6d021557b22d",
		"Uniswap V2 Pair: $VAULT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4dc02e1bb2ec1ce4c50c351e6e06505e7b1dce8d",
		"Uniswap V2 Pair: DIA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4dd26482738be6c06c31467a19dcda9ad781e8c4",
		"Uniswap V2 Pair: API3 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4de01f8b87683d22216f412359c29de634a77367",
		"Uniswap V2 Pair: CYBA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4df1c47ecfbac8482a4811d373128e2acc007d02",
		"Uniswap V2 Pair: ASTRA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4dfcb1482878ededccd6cc19f9d043cdd56ffd06",
		"Uniswap V2 Pair: ECO - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4e0924d3a751be199c426d52fb1f2337fa96f736",
		"Uniswap V3 Pool: LUSD - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4e34da137f0b317c633838458e0c923a5e088752",
		"Uniswap V2 Pair: AIT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4e37dcad9e6e1465f33387587cef22616aac2541",
		"Uniswap V2 Pair: DIS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4e5320503965cbb2f622efdb59385e1bc40ea289",
		"Uniswap V3 Pool: wBAI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4e57f830b0b4a82321071ead6ffd1df1575a16e2",
		"Uniswap V3 Pool: WETH - AMP",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4e68ccd3e89f51c3074ca5072bbac773960dfa36",
		"Uniswap V3 Pool: WETH - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4e84460a8b8bad045ff4eb5be1ecce7a3e3a17c8",
		"Uniswap V2 Pair: WETH - LUFFY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4e9e73c0170f09e709573127c4ab02e57b868178",
		"Uniswap V2 Pair: TOWER - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4ebdf501199410fc6caa1fa8c77da9aad46594ce",
		"Uniswap V2 Pair: QWN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4ebee4cf5ba7de81f222fefa4e5d0c30c4968fff",
		"Zapper.Fi: wBTC Unipool",
		"Zapper"
	],
	[
		"0x4ec7d47cfd3f35e47b86f9eaa31cb9d3ee1e801a",
		"Uniswap V3 Pool: AGB - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4ed8973e1d76c41f6dd82673f43b4ad85ed04123",
		"Uniswap V2 Pair: vMINT - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4ee363e383068961a36547d89eb3df38c87f7a4b",
		"Uniswap V2 Pair: BARS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4ef72ba4660639ab3a27e19182b889c9ff421de2",
		"Uniswap V2 Pair: WETH - Ti",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4efc9e2e3e77732ce2f9612b8f050082c01688bd",
		"Uniswap V3 Pool: GREEN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4f026054b9c934d92cd2db344ea1ae193a22067d",
		"Zapper.Fi: Uniswap ERC20 Zap Ins V2",
		"Zapper"
	],
	[
		"0x4f1a2ea0c27f8fb01ebdeeecb1f09ee9187df191",
		"Uniswap V2 Pair: TON - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4f4d050d5c86dd32d276a8d066fa1932eb241c1b",
		"Uniswap V2 Pair: CUT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4f839e991bb8c66b7066e2d4d753f47613f4d558",
		"Uniswap V2 Pair: TBB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4f845c5ccf059002894d4e05cad5735ceceed68b",
		"Uniswap V3 Pool: ICHI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4f9fc4e0b79c1cbf16e68863ad5e9de6a94a346c",
		"Uniswap V2 Pair: PROPC - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4f9fcdae3950a033074b93e269b6c382109fae71",
		"Uniswap V2 Pair: DRGN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4fac944d2667e0b0b0fcd550da252e7000105264",
		"Uniswap V2 Pair: gp - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4fbf0043758e1e79238da9df6835bb4df8ac5b57",
		"Uniswap V2 Pair: WETH - SquidGrow",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4fc47579ecf6aa76677ee142b6b75faf9eeafba8",
		"Uniswap V2 Pair: RAZE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4fd3f9811224bf5a87bbaf002a345560c2d98d76",
		"Uniswap V2 Pair: XOR - VAL",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4fda00d490c1c05ff15d7313d1cebe9c711e434b",
		"Uniswap V2 Pair: WHALE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4fde70fdadfdb82295efacef32c48328f830ab75",
		"Uniswap V3 Pool: UNQT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4ff28e9a5572e59fb9db5754d0fc94986e982675",
		"Uniswap V2 Pair: DOJO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4ff4c7c8754127cc097910cf9d80400adef5b65d",
		"Uniswap V2 Pair: WETH - 4CHAN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4ff7e1e713e30b0d1fb9cd00477cef399ff9d493",
		"Uniswap V3 Pool: BUSD - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5003fdfc747a0acf06266c54fe7285abbca14f25",
		"Uniswap V2 Pair: RIBBIT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5008d39f997468057947fd370a6a8c1786a27d71",
		"Uniswap V2 Pair: TOTO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5013b8c94ff2e95e8b36e3c064274b20987403f8",
		"Uniswap V2 Pair: Mononoke-Inu - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5016cd7b785a773f7f3a3ff4035a1e7a76543946",
		"Uniswap V2 Pair: CAGA - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x502700f282e6bfc2bb3b805893fadffacf688e7b",
		"Uniswap V2 Pair: HEGIC - DAI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x503c2e33418ec5b7c8c1b2c38c3eac7735c0aad8",
		"Uniswap V2 Pair: WETH - TRI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x504c65569f5ed6a7a8218a526a38c4c9d6a6b138",
		"Uniswap V2 Pair: PLT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5083b16da538c5022744526122243cf3bddb3bf2",
		"Uniswap V2 Pair: ALI - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x508acdc358be2ed126b1441f0cff853dec49d40f",
		"Uniswap V3 Pool: ACX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x50d1e7f2acfb7f3e0aafba2b1e63666b80eb08ea",
		"Uniswap V2 Pair: WETH - RAPTOR",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x50e3d53b4a22e94ee1ce5c3a852d94d145d5852e",
		"Uniswap V2 Pair: WETH - FNT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x510100d5143e011db24e2aa38abe85d73d5b2177",
		"Uniswap V3 Pool: RLB - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5102f3762f1f68d6be9dd5415556466cfb1de6c0",
		"Uniswap V2 Pair: WETH - TRND",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5104846dc1c3c7697b856dc69e350ae4dcc47e24",
		"Uniswap V3 Pool: LORDS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x513c9465f2889fdf7642095e4967e297738a6d98",
		"Uniswap V2 Pair: NEOBOT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x514906fc121c7878424a5c928cad1852cc545892",
		"Uniswap V2 Pair: FARM - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x515d459555f8c1fcf2791ded819b73b60a80b8e3",
		"Uniswap V2 Pair: OPSEC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x517f9dd285e75b599234f7221227339478d0fcc8",
		"Uniswap V2 Pair: DAI - MKR",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x51b3832e54406e6653644a7b8497c9826eca400a",
		"Uniswap V2 Pair: NEURALINK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x51bf9908dac4a283d017edc071d954ec3a4b1376",
		"Uniswap V2 Pair: USDC - NRGY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x51c1d5cdf10dda49219054920c22c8d4a23eed89",
		"Uniswap V2 Pair: WETH - BEPRO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x51c2b78e423ff673e07b1066f6448b5e91a9ee08",
		"Uniswap V2 Pair: WETH - ANTISEAL",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x51d1ac117aadd99e7fc56e802c86a7464cb6ab9d",
		"Uniswap V3 Pool: WETH - WAI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x51fe8e8fa3f9f10288fa8c2aff1400f887d21c42",
		"Uniswap V2 Pair: MITx - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x520024d8096766ff67eff5f2e583a7d476c513f9",
		"Uniswap V2 Pair: DEW - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5201523c0ad5ba792c40ce5aff7df2d1a721bbf8",
		"Uniswap V2 Pair: $LOOT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5201883feeb05822ce25c9af8ab41fc78ca73fa9",
		"Uniswap V2 Pair: ANKR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x52127470de72e5ef77ca962d23125cbe096e2d81",
		"Uniswap V2 Pair: RACA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5221aafc7f7e0ff5a7aeaa8555681c9f7f42a014",
		"Uniswap V3 Pool: WETH - $MUSIC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5229e688ef8e199c74e88e828e1519853d38a192",
		"Uniswap V2 Pair: WETH - 0xDEV",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5233c9541b40e5d2c9ee45fc40e351bf8311435e",
		"Uniswap V3 Pool: WOMBAT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5239873c892376799b6cb49a3cfb1146d4a260b8",
		"Uniswap V2 Pair: NORD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x52414c8b908e9a75c3c8704b2ae5e39ab7156c05",
		"Uniswap V3 Pool: WETH - REEF",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x524847c615639e76fe7d0fe0b16be8c4eac9cf3c",
		"Uniswap V2 Pair: BUSD - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5277c3195801fd4acc92ebfd939024f08cfb697a",
		"Uniswap V2 Pair: WETH - PUSSC 💹",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5281e311734869c64ca60ef047fd87759397efe6",
		"Uniswap V2 Pair: WETH - CULT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x52c77b0cb827afbad022e6d6caf2c44452edbc39",
		"Uniswap V2 Pair: WETH - SPX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x52d306e36e3b6b02c153d0266ff0f85d18bcd413",
		"Aave: Lending Pool Registry V2",
		"Aave",
		"images/contracts/aave.png"
	],
	[
		"0x52db713d60249e52024dfb54a5b4c32fe0893f54",
		"Uniswap V3 Pool: SHIA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x52fc6455f258760705e70f70160b06619bfe0adb",
		"Zapper.Fi: cDAI Unipool",
		"Zapper"
	],
	[
		"0x530433ee503a05c5dfc9ccac7740df230ee3adbd",
		"Uniswap V2 Pair: BOYSCLUB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x53120024e2b6e19a1d58c795547d98156e199ffb",
		"Uniswap V2 Pair: RHC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x531b6a4b3f962208ea8ed5268c642c84bb29be0b",
		"Uniswap V3 Pool: GLM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x53455f3b566d6968e9282d982dd1e038e78033ac",
		"Uniswap V2 Pair: DRC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x537a0a5654045c52ec45c4c86ed0c1ffe893809d",
		"Uniswap V3 Pool:  - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x537b8afa3d302e5c873922de7014d714f050af51",
		"Uniswap V2 Pair: DORK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5397d87eb8ddd36f631b704653a3ab2bf1739467",
		"Uniswap V2 Pair: GAME - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x539b4dfcd1e4dc3153e59204004c2141f796f432",
		"Uniswap V2 Pair: 2DAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x53b93b36e07d77f3d56c1775ed8e984119205e5f",
		"Uniswap V2 Pair: GROK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x53e79ef1cf6ac0cdf6f1743c3be3ad48fa3c5657",
		"Uniswap V2 Pair: WETH - AIUS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x53eef67f96ccb71fb1750df973fb9e8c82096759",
		"Uniswap V2 Pair: WETH - HOPPY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x54056a936ea638579bd6284073c2cff96050451d",
		"Uniswap V2 Pair: UNDG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x540b9658044acb24a7f32341c6564818176b0f1e",
		"Uniswap V2 Pair: HEART - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x541d846ddfa1efc15ca612bd76e2b595056edc8c",
		"Uniswap V3 Pool: MASA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x541e55d40d001ca062ea0366afce05848eb7194c",
		"Uniswap V2 Pair: DOSE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x544cd63c9a3363dab66733bf8073cb981db58cba",
		"Uniswap V2 Pair: WETH - NYAN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x54578b6f942aeb23b67a8cef24220651306b8e26",
		"Uniswap V3 Pool: HUNT - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5458786a39fa6082439b2757568b59ec1e516569",
		"Uniswap V2 Pair: LAN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x546d4695c4fff0e0adf0d904ccde3a13472f9480",
		"Uniswap V3 Pool:  SHOP - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x54965801946d768b395864019903aef8b5b63bb3",
		"Uniswap V2 Pair: EYE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x54bd053c294da6000064d82214f1866e3a10db15",
		"Uniswap V2 Pair: DOBO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x54bebb624ddb561b971bb07b700c9d3afd25fabc",
		"Uniswap V2 Pair: WETH - CBot",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x54d16d35ca16163bc681f39ec170cf2614492517",
		"Uniswap V2 Pair: OIN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x550301e3e18009e67a115f9fa067f9d7a62073df",
		"Uniswap V2 Pair: HNZO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5507aed415ae47bc88fa38fc4a7a8cb2593da323",
		"Uniswap V2 Pair: DAD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x55111bad5bc368a2cb9ecc9fbc923296bedb3b89",
		"Uniswap V2 Pair: $BASED - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x551617c45f817aab6f8ceafc873cd3b137e6a70c",
		"Uniswap V2 Pair: GZLR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x553e9c493678d8606d6a5ba284643db2110df823",
		"Uniswap V3 Pool: rETH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x556eb7379ec8a052d52d9b44a1c2b7bf6117b8a8",
		"Uniswap V2 Pair: POG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x55a06945e79f2d6a14b5c4f18e8e73091e2e57d6",
		"Uniswap V2 Pair: MANY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x55d5c232d921b9eaa6b37b5845e439acd04b4dba",
		"Uniswap V2 Pair: HEX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x55d88da1d9debd29a2def2949c9ac5c9011ea0b1",
		"Uniswap V2 Pair: NEURONI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x55df969467ebdf954fe33470ed9c3c0f8fab0816",
		"Uniswap V2 Pair: WETH - yDAI+yUSDC+yUSDT+yTUSD",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x55ea80ed480b1963834a570c856f765b6f732272",
		"Uniswap V2 Pair: WETH - DPOOL",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x55f12659aa9fd000046467ce21f54a6f7cda8aaa",
		"Uniswap V2 Pair: WETH - RB",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5615af7746f6c6da1c8b9b2f17c27604fb5b5db9",
		"Uniswap V3 Pool: DOGEVERSE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5629ebd91fd91fcfb0ce295add98933582b0b332",
		"Uniswap V2 Pair: Bart - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x56534741cd8b152df6d48adf7ac51f75169a83b2",
		"Uniswap V3 Pool: WBTC - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x56606d52e8f4186c80cf94a6230986bacba8b6b5",
		"Uniswap V2 Pair: APOLLO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5694a92a69775a010e65d610d78b9eaf950c897e",
		"Uniswap V2 Pair: WETH - GOU",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x56cb109d29689b475c2e960954525d25b51a1810",
		"Uniswap V2 Pair: PINU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x56d8bbe2d518205b521aeb86a58e1b53b047a44f",
		"Uniswap V2 Pair: BLENDR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x56feaccb7f750b997b36a68625c7c596f0b41a58",
		"Uniswap V2 Pair: FARM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x570febdf89c07f256c75686caca215289bb11cfc",
		"Uniswap V2 Pair: ERN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5710e809d7003de1253fa7935a41d6291cf071c9",
		"Uniswap V2 Pair: WETH - $BIG",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5741a1ceff6148c8aaca0f0456c03c88817e05f5",
		"Uniswap V2 Pair: XIOT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x576466debc41a5c404e225d321070ddd2288e191",
		"Uniswap V2 Pair: ZETA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5764a6f2212d502bc5970f9f129ffcd61e5d7563",
		"Uniswap V3 Pool: SHIB - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x576cea6d4461fcb3a9d43e922c9b54c0f791599a",
		"Uniswap V2 Pair: CRU - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x577349ecd462a369ab71908a260ae1e2d8982b74",
		"Uniswap V2 Pair: KOMET - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5777d92f208679db4b9778590fa3cab3ac9e2168",
		"Uniswap V3 Pool: DAI - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x57ab5aeb8bac2586a0d437163c3eb844246336ce",
		"Uniswap V2 Pair: MIR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x57af956d3e2cca3b86f3d8c6772c03ddca3eaacb",
		"Uniswap V3 Pool: PENDLE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x57ef5b8f56a71f1aa084ff904666ee9b0cef6fae",
		"Uniswap V2 Pair: WETH - LIGHT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
		"ENS: Base Registrar Implementation",
		"ENS",
		"images/contracts/ENS.jpg",
		"[{\"inputs\":[{\"internalType\":\"contract ENS\",\"name\":\"_ens\",\"type\":\"address\"},{\"internalType\":\"bytes32\",\"name\":\"_baseNode\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"controller\",\"type\":\"address\"}],\"name\":\"ControllerAdded\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"controller\",\"type\":\"address\"}],\"name\":\"ControllerRemoved\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"expires\",\"type\":\"uint256\"}],\"name\":\"NameMigrated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"expires\",\"type\":\"uint256\"}],\"name\":\"NameRegistered\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"expires\",\"type\":\"uint256\"}],\"name\":\"NameRenewed\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"constant\":true,\"inputs\":[],\"name\":\"GRACE_PERIOD\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"controller\",\"type\":\"address\"}],\"name\":\"addController\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"available\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"baseNode\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"controllers\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"ens\",\"outputs\":[{\"internalType\":\"contract ENS\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"isOwner\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"nameExpires\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"reclaim\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"}],\"name\":\"register\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"}],\"name\":\"registerOnly\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"controller\",\"type\":\"address\"}],\"name\":\"removeController\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"}],\"name\":\"renew\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"_data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"resolver\",\"type\":\"address\"}],\"name\":\"setResolver\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":true,\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceID\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"payable\":false,\"stateMutability\":\"view\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"constant\":false,\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"payable\":false,\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]"
	],
	[
		"0x57f1bb029038ac933af0f750e72da09e5b17ea2c",
		"Uniswap V2 Pair: WETH - TIGRA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x58025c79662e81f1ee72bce632511faf4e6aee01",
		"Uniswap V2 Pair: SHEB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x58335ba9c0167704a4a95ffb4872194f5080d64d",
		"Uniswap V2 Pair: CHEESED - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x583cadd830374bb5c1ec8e1b648e0294cc1e01f1",
		"Uniswap V2 Pair: ALEPH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x584ec2562b937c4ac0452184d8d83346382b5d3a",
		"Uniswap V3 Pool: OHM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5859ebe6fd3bbc6bd646b73a5dbb09a5d7b6e7b7",
		"Uniswap V3 Pool: SAND - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5874c7ce2ff1a91b8e89bdc3d1167c5d7de2f2e1",
		"Uniswap V2 Pair: WETH - E/ACC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x587ce73bb6bd41c8ff04d44517f159be79d64392",
		"Uniswap V2 Pair: BULL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5899bef146be8228788c476b6384044d1a51f96e",
		"Uniswap V2 Pair: IBIT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x58c23378f238f3f35e972b50a95fcc5d4b8c94cf",
		"Uniswap V2 Pair: MCDEEZ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x58d7e1d45e9ed962d3279b3834dc8f6bb4aa12b3",
		"Uniswap V3 Pool: WSM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x58eeb5d44dc41965ab0a9e563536175c8dc5c3b3",
		"Uniswap V2 Pair: CTSI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x58fa6f13d6a4445cb813b6bcad80d97497a47826",
		"Uniswap V2 Pair: WETH - GN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x58fcd403610e772d68726b55183eb958a7581731",
		"Uniswap V3 Pool: WETH - ZVT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5916953296edf0996a0e77488b3af450095e2a35",
		"Uniswap V2 Pair: WETH - DMST",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x59354356ec5d56306791873f567d61ebf11dfbd5",
		"Uniswap V3 Pool: ARB - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x593965c0c4433ef4e2852c53169045c384e4a1fe",
		"Uniswap V3 Pool: BIAO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x594b60cfce31dcfabca38b720c4b7fe661c806a1",
		"Uniswap V2 Pair: LILY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x596a92f8d8b8906fae8e3dad346284f354830e1a",
		"Uniswap V2 Pair: AMN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x596f7383223db0d484fd220d0ab036e042bafea4",
		"Uniswap V2 Pair: SBREE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x59a0ab4d4a9a8110ec96cb020d2ab2777b9c4e75",
		"Uniswap V2 Pair: WETH - CAP",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x59af6259f5667d9dd6b3210b3c50ff6bdb153428",
		"Uniswap V2 Pair: ARKY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x59b4bb1f5d943cf71a10df63f6b743ee4a4489ee",
		"Uniswap V3 Pool: XMON - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x59b6bc21c6a53186d0d20b06e19a2d9cfd3faf36",
		"Uniswap V3 Pool: SHEB - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x59b7afe007fded03b6b706804ea680bd722e8e36",
		"Uniswap V2 Pair: GRIFT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x59c1349bc6f28a427e78ddb6130ec669c2f39b48",
		"Uniswap V2 Pair: BANK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x59c2b713c3c3a49f554207946076aa4bea9359ba",
		"Uniswap V2 Pair: WETH - AsunaInu",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x59c38b6775ded821f010dbd30ecabdcf84e04756",
		"Uniswap V3 Pool: UNI - AAVE",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x59c68e0eca9f0844d9d4cee0bedf23c8dee462c5",
		"Uniswap V3 Pool: REZ - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x59e7bee6374a3f6ecb33180ece978fd4f2b7cea2",
		"Uniswap V2 Pair: SNT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x59f96b8571e3b11f859a09eaf5a790a138fc64d0",
		"Uniswap V2 Pair: STA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5a20f9b0d8cffb758e65b8fb8191aa2bc1b26d47",
		"Uniswap V2 Pair: WETH - 1-UP",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5a265315520696299fa1ece0701c3a1ba961b888",
		"Uniswap V2 Pair: WETH - ROT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5a80a3e48f4aa6be3fafcd6d7be603efa875a0a0",
		"Uniswap V2 Pair: ORDIBOT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5aa1356999821b533ec5d9f79c23b8cb7c295c61",
		"Uniswap V3 Pool: GUSD - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5aaa28ca43c6646fd1403e508f0fca1d92357dde",
		"Uniswap V3 Pool: LCX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5aac14ca709846c709f746350ca1f739462027a3",
		"Uniswap V3 Pool: NII - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5ab53ee1d50eef2c1dd3d5402789cd27bb52c1bb",
		"Uniswap V3 Pool: AAVE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5abaf5cdd4711b47ce82b91c98b4ff60e098af32",
		"Uniswap V2 Pair: $GB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5abf62bd2aa360306d0a81a9c8b9878bbdd05d3e",
		"Uniswap V2 Pair: Barron - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5ac13261c181a9c3938bfe1b649e65d10f98566b",
		"Uniswap V2 Pair: UNI - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5ad0b52264961893e5d9397ec1f22d456ce9f92d",
		"Uniswap V2 Pair: WETH - RBASE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5ad6c0d8d57c0050fa954e227c45339ab8cb953b",
		"Uniswap V2 Pair: WETH - BANANA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5ad7452ceafdaeb0936507d5bb5890964ef56bd3",
		"Uniswap V2 Pair: Okinami - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5ae423f14eeb5049be535e8595cc37e66f2bde29",
		"Uniswap V2 Pair: BIDEN2024 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5aea97b6b539f8649edc53497444c07b3a7e365f",
		"Uniswap V2 Pair: PLX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5b1e45ca08fa4d65aa7fdcf9e116990fb7fce73b",
		"Uniswap V2 Pair: pBTC35A - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5b272ce3e225b019a3fbd968206824b24c674344",
		"Uniswap V2 Pair: WETH - MCHC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5b2904022847e8a63847277df635162a0e7fc498",
		"Uniswap V3 Pool: ZYN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
		"OpenSea: Wallet",
		"OpenSea"
	],
	[
		"0x5b343e34340277196bdc45bf61423c63e53e594c",
		"Uniswap V2 Pair: FREETRUMP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5b49001c8b756ab44b6ec3bcd1ea3f3a1c3cd758",
		"Uniswap V2 Pair: WETH - ECT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5b6a17d4e84b8d9b40eaaae821fc141d6158fe44",
		"Uniswap V2 Pair: BABYPEPE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5b6be21c4d1f2c1c5a3d6af3599f3bb0a785ae2f",
		"Uniswap V2 Pair: GERO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5b781915b6b610a1aba8135ad5df084ffe528da4",
		"Uniswap V3 Pool: WETH - SUPER",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5b7daaa7d7a129f2cd9153ad0a3dcfa568e60662",
		"Uniswap V2 Pair: WETH - MARVIN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5b7e3e37a1aa6369386e5939053779abd3597508",
		"Uniswap V3 Pool: WETH - RIO",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5b97b125cf8af96834f2d08c8f1291bd47724939",
		"Uniswap V3 Pool: SAND - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5ba1e12693dc8f9c48aad8770482f4739beed696",
		"Uniswap Multicall2",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5bab10d7b7d43867403ac5f908fe344932fa3496",
		"Uniswap V2 Pair: LOOT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5bacb4114ad2d448e79addef121714b74d67faec",
		"Uniswap V2 Pair: WETH - KEYS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5bb8f1ce603577a4d17cc9d72f6a4c38f3b0b74c",
		"Uniswap V2 Pair: WETH - CHKN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5beae44f1c4dfba15973081bf87cdf9411009a9b",
		"Uniswap V2 Pair: WETH - MILK",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5beda737d27115d914abb5e6bf23871ebe8aa8cb",
		"Uniswap V2 Pair: WETH - BOOB",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5c128d25a21f681e678cb050e551a895c9309945",
		"Uniswap V3 Pool: BIT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5c24b84701916d968dcc7bdd6a4c5236bed460b9",
		"Uniswap V2 Pair: WETH - TWT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5c2891e67cba6b5481f89d3701a78a1cfdac117f",
		"Uniswap V3 Pool: LMWR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5c28b5f471d97f53fcf132f16f9f3c0c888c1a01",
		"Uniswap V3 Pool: HEX - DAI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5c3713086a38c0dd60885dcaf38ce5de83910a63",
		"Uniswap V2 Pair: MAPE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5c460c0054fd472a821a5a601378f0d2bf02a9b4",
		"Uniswap V2 Pair: WETH - R34P",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5c6919b79fac1c3555675ae59a9ac2484f3972f5",
		"Uniswap V2 Pair: HOPPY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f",
		"Uniswap V2 Factory",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5c89674c4ad1ccd10a29bcc9aabc303cd5f2da1d",
		"Uniswap V2 Pair: TOMOE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5c8eb437d93cb32a02749ff7def70582d6f32bdf",
		"Uniswap V2 Pair: FONZY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5ca3cec889ee6e2e0295c79cfbc057cfeba78cc6",
		"Uniswap V2 Pair: PIXIA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5cb622c21ae335e7baaea7638ce097b3d172b827",
		"Uniswap V2 Pair: STONK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5cbefe14c66ba706e79ca4237ff10f218461014a",
		"Uniswap V2 Pair: DARK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5cd0ad98ba6288ed7819246a1ebc0386c32c314b",
		"Uniswap V3 Pool: WETH - FOOM",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5cd136e8197be513b06d39730dc674b1e0f6b7da",
		"Uniswap V2 Pair: KIRO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5ce2c2afae1b27dd2b623f4cbcf84f07f47856ba",
		"Uniswap V2 Pair: WETH - RING",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5ced44f03ff443bbe14d8ea23bc24425fb89e3ed",
		"Uniswap V2 Pair: APU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5cfd4ee2886cf42c716be1e20847bda15547c693",
		"Uniswap V2 Pair: MAGGOT - ROT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5d05d3bd24767b624e723a32b48db1987a01f247",
		"Uniswap V2 Pair: PIPI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5d08a36a46ee2ea2722a3b101a2a576341b8ddb5",
		"Uniswap V2 Pair: DUCK - DDIM",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5d1461990f636d35030cb603559d6a9d4487f9ca",
		"Uniswap V3 Pool: FLUX - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5d149abac8c1b2c6eccda50ec5e74b70fecc24b7",
		"Uniswap V2 Pair: SPDR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5d18b30ac9f5e8d6b21a4b783d95fecc8b3c09c6",
		"Uniswap V2 Pair: EDOGE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5d2c95651e0ee953b9abd8ec47ce2a165c852ae9",
		"Uniswap V2 Pair: WETH - Pikachu",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5d5d0e01f28ddbf173bae8820d71ea7af248ecc7",
		"Uniswap V2 Pair: X  - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5d752f322befb038991579972e912b02f61a3dda",
		"Uniswap V3 Pool: AGLD - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5d7b4563f794f52423181c8320cdd3bf8fdf55d7",
		"Uniswap V3 Pool: PEOPLE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5d81b25054833fdfa023a1c46ad9dc2cdb8eaddf",
		"Uniswap V2 Pair: NPXS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5d8a31269a9f3336e3f23de17b2ec7393bdd6916",
		"Uniswap V2 Pair: WETH - SI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5d95bb70e1d8b7fabc286bbc163642b3c39097a7",
		"Uniswap V2 Pair: SAND - REVV",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5dc7d59deab82a7d201d7c67eaa0cad2d98e6d3f",
		"Uniswap V2 Pair: MRSPEPE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5dfbe95925ffeb68f7d17920be7b313289a1a583",
		"Uniswap V2 Pair: WETH - MEME",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5e35c4eba72470ee1177dcb14dddf4d9e6d915f4",
		"Uniswap V3 Pool: BUSD - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5e4085b816fdc167410650d805f69d7013c896d8",
		"Uniswap V2 Pair: WETH - VNTW",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5e64cd6f84d0ee2ad2a84cadc464184e36274e0c",
		"Uniswap V2 Pair: WETH - UNC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5ead5462e7d98308e64bfe3c1d76845e5d2794a1",
		"Uniswap V2 Pair: INUS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5eafef1f481acd69561ce02c3ef537cba1c5a02d",
		"Uniswap V3 Pool: NXRA - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5ecef3b72cb00dbd8396ebaec66e0f87e9596e97",
		"Uniswap V3 Pool: WETH - FOLD",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5ed7d3b704d692938ee25fa2c7e75a1e10670b33",
		"Uniswap V2 Pair: pSAFEMOON - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5ee26bd02695b087d151870872ebfc9b7080e1c8",
		"Uniswap V2 Pair: WETH - MAGACAT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5f094191ddad05c5b6ddfa992a4f49d8d679290d",
		"Uniswap V2 Pair: USDT - PRE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5f0944e0eb92f7dfff7974f8b848b5312c65ac37",
		"Uniswap V2 Pair: WOZX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5f0a8554a31d43b4db5f0bdb898b5d2319b6ea48",
		"Uniswap V2 Pair: GYSR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5f21be2baeaaa30876b464b7e6d8b9cb68d58c9f",
		"Uniswap V2 Pair: GEMINI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5f3c621d810c7c929fb440e03dadf8621fe61ab5",
		"Uniswap V3 Pool: USDC - RSS3",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5f3fa8d8be06ae83a7c55687400af8445330b076",
		"Uniswap V2 Pair: WETH - 0x1",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5f538e4a8d8c833aa9e7a926a99a3b415bb029ef",
		"Uniswap V2 Pair: WETH - ETHEREUM",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5f57c5f9564d6a4e25d908605341632e33e7874d",
		"Uniswap V2 Pair: ROCKS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5f5d3ad462b7d5e5396787c32a955807d14af576",
		"Uniswap V2 Pair: Furie - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5f6af850b5aec2962397d24e8cd820e511c2f1ee",
		"Uniswap V2 Pair: QANX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5f6fbe81171d0f52cc58d6a2ac6ee1a9e52d18d2",
		"Uniswap V2 Pair: 10SET - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5f91c89ea4d0052dc7fa79ed499215ef767dbfbf",
		"Uniswap V2 Pair: WETH - PLEB",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5f97e72e16d9a6ffec6c70589c61ee224494ccda",
		"Uniswap V2 Pair: xAi - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5fa464cefe8901d66c09b85d5fcdc55b3738c688",
		"Uniswap V2 Pair: TOKE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5fa78fa8f5d6371ced774e0d306a58fd1b8b03e3",
		"Uniswap V2 Pair: XSP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5fa9569b0ed6aa01e234468e6a15b77988b950df",
		"Uniswap V2 Pair: BLZ - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5fb71b76a6725a5021fed3766478199804c21da8",
		"Uniswap V2 Pair: PATTON - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5fc0f870a71a5911fad3bd33a165f87414b743f4",
		"Uniswap V2 Pair: ABYSS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5fc354d3026d12c011d4bde23bd4eae75ac6e2cc",
		"Uniswap V2 Pair: NIQAB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5fe638845642444a9090abfde0dc3c602945a348",
		"Uniswap V2 Pair: TYRION - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x60031819a16266d896268cfea5d5be0b6c2b5d75",
		"Uniswap V2 Pair: WETH - VRA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x600cf1c039e1fd31bc4762a39d322dd8977dd1ab",
		"Uniswap V2 Pair: SMOL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x60148519ad90ca9bb11a126f466fbfb73d895ce6",
		"Uniswap V2 Pair: REFI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x602414a63c90801dc4337ee440b3454a6d2c275b",
		"Uniswap V2 Pair: SHEESHA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6028eb8adda090cdf08fb5dfbe873081fd736867",
		"Uniswap V2 Pair: WAIT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6033368e4a402605294c91cf5c03d72bd96e7d8d",
		"Uniswap V2 Pair: X2Y2 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x605684b039b373568aeb4871356eefe0eb812ead",
		"Uniswap V2 Pair: DINERO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x60594a405d53811d3bc4766596efd80fd545a270",
		"Uniswap V3 Pool: DAI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6060ad7b2abb5716adc82c669353e5c5f3b9fb4d",
		"Uniswap V2 Pair: WETH - DOGEGF",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6061a36ad6b7958f68129bb313e6eff81cd9113c",
		"Uniswap V2 Pair: SMARTCREDIT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x606563f8dc27f316b77f22d14d9cd025b4f70469",
		"Zapper.Fi: UniPool General",
		"Zapper"
	],
	[
		"0x608903534527b0623fe0b0bd81a2f29bc5b50d32",
		"Uniswap V2 Pair: TIME - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x60a39010e4892b862d1bb6bdde908215ac5af6f3",
		"Uniswap V2 Pair: WETH - LUNA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x60a6b23a7a87c5ce9e3f81c869691f784b18a704",
		"Uniswap V3 Pool: WETH - MTO",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x60a8ea6005f7db580bc0c9341e7e6275d114e874",
		"Uniswap V2 Pair: X - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x60b0dad2d7d65b7d6efc0b746687020ccef0a233",
		"Uniswap V3 Pool: DOGE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x60b2cc2c6ecd3dd89b4fd76818ef83186e2f2931",
		"Uniswap V2 Pair: ALPHA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x60e3e9887dc92bd48756cf44f45fbc3b19f76927",
		"Uniswap V2 Pair: KEN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x60e5d1afef2d253366e87d8298090b7d0ea5d827",
		"Uniswap V2 Pair: WETH - Wolf",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x60ef1e0bf9218cdc1769a43c4b0b111ed38bb418",
		"Uniswap V2 Pair: FEG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x60f6e2200bfef8b4d120028faff4d9a4486526f4",
		"Uniswap V2 Pair: IONX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x610382c1968aa065a662e34e5a258cc64048324f",
		"Uniswap V2 Pair: DOV - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x610a94f64d1d149623369e5bac9576065d23893b",
		"Uniswap V3 Pool: ELON - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x61122b41600c59ef4248ff9818fbf0a1b43abe17",
		"Uniswap V2 Pair: WETH - CRBN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x61247d8aca1c485a50728e1336d9b26c8339e701",
		"Uniswap V2 Pair: GUSD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6132d92710da54626839121e30539a1568be867c",
		"Uniswap V2 Pair: WETH - ROBO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6139240a5907e4ce74673257c320ea366c521aea",
		"Uniswap V2 Pair: X7R - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6147805e1011417b93e5d693424a62a70d09d0e5",
		"Uniswap V2 Pair: WETH - ankrETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6155c81db52a4c6628c559be0af10f6d87bb7d2e",
		"Uniswap V2 Pair: WETH - Tuzki",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x615d7eb337e6912acf59331f051525a14fa79a82",
		"Uniswap V2 Pair: MONKE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6178081202165c521c80b95d2c7ef54893c7232c",
		"Uniswap V2 Pair: HOBBES - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x618cd2216955d73ee8c679cd364fb2d5dc613f81",
		"Uniswap V2 Pair: YFO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x61935cbdd02287b511119ddb11aeb42f1593b7ef",
		"0x: Exchange v3",
		"0x"
	],
	[
		"0x619a6b75b0b56e6638a194c84a26ebeaf4a55381",
		"Uniswap V2 Pair: SENDEX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x619aaa52a10f196e521f823aed4cdea30d45d366",
		"Uniswap V2 Pair: XVIX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x61b62c5d56ccd158a38367ef2f539668a06356ab",
		"Uniswap V2 Pair: FNK - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x61bc0e018a1332107f5d7f730fa39f703e246881",
		"Uniswap V2 Pair: PEPE2.0 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x61c7defe61a3ead3c6cb798b10767258107c9974",
		"Uniswap V2 Pair: WETH - GANG",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x61ce73f7915d2a65de70cae38b051727a81306c8",
		"Uniswap V2 Pair: KERMIT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x61d7351ae9f460660ac62c69e3de03d3af0d0d99",
		"Uniswap V2 Pair: WETH - DELON",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x61d8c3d7ad3c3c00c9e4b8da089e19e57da90b91",
		"Uniswap V2 Pair: EMN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x620cd19eae24fb8a02df908bb71b81b6e3aa1ccc",
		"Uniswap V3 Pool: cvxCRV - CRV",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x620d46247290133665063664216ee7e9c53fd13a",
		"Uniswap V2 Pair: EVNY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6225f6d7ad5ea259a2227d3f39cf808f3098af6e",
		"Uniswap V2 Pair: KEN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6231e794773e4dc0b1ad79105d850a05d5fc0fcb",
		"Uniswap V3 Pool: WETH - LOOKS",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6279653c28f138c8b31b8a0f6f8cd2c58e8c1705",
		"Uniswap V3 Pool: XSGD - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x62931a522e998fecc1df96656054bace35e3ec7c",
		"Uniswap V2 Pair: GUISE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x62979dff3b5eb032ecba1a5934d1fd4367bb695c",
		"Uniswap V3 Pool: WETH - TSUKA",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x629d22e6eeac46a11dbc96be93b90aee9309be4c",
		"Uniswap V2 Pair: AURORA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x62cbac19051b130746ec4cf96113af5618f3a212",
		"Uniswap V3 Pool: SGT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x62e3c242b5e903071458ad90a160493d84911c77",
		"Uniswap V2 Pair: LSS - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x62f22a47e5d2f8b71cc44fd85863753618312f67",
		"Uniswap V2 Pair: WETH - ONX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x62f3f294dc1b8848da8ac6aa6e1a83c74e145c51",
		"Uniswap V2 Pair: RI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x62fb0d08335ef29fbdd6289a98dc6f89df973935",
		"Uniswap V2 Pair: 0xEncrypt - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x632e675672f2657f227da8d9bb3fe9177838e726",
		"Uniswap V3 Pool: RPL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x635b58600509acfe70e0bd4c4935c08182774e58",
		"Uniswap V2 Pair: STACK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x63607de7ae773638d012561a01383ab8ac321371",
		"Uniswap V2 Pair: NIF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x63804d757b5b7c43509fded8f7ce10cc0bac2ae0",
		"Uniswap V2 Pair: WETH - ASKO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x63805e5d951398bc1c1bec242d303f59fa7732e3",
		"Uniswap V3 Pool: X2Y2 - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x63a151d042dc870fb1b3f0c72cbbdd53a85898f6",
		"Uniswap V2 Pair: FIGHT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x63b61e73d3fa1fb96d51ce457cabe89fffa7a1f1",
		"Uniswap V2 Pair: SHINJA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x63b83dd11c42df0dd76bd78e066918463b88f7b1",
		"Uniswap V2 Pair: Hold - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x63d50dfb6b64ee7bec77d118131c93784a959a68",
		"Uniswap V2 Pair: WETH - KUNU",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x63e7aa05b78144013cfa4b23c9b61599d0a29023",
		"Uniswap V2 Pair: WETH - 2KEY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x63f2a1b80af5b19da43ccccdf89b286155b92b7c",
		"Uniswap V2 Pair: WSB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x64652315d86f5dfae30885fbd29d1da05b63add7",
		"Uniswap V3 Pool: FTM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x647965b19280988a75c3a1369938c8927e6c8715",
		"Zapper.Fi: Balancer Zap In",
		"Zapper"
	],
	[
		"0x647b364ee561b8a00245d724309b9fa5c72fa65c",
		"Uniswap V2 Pair: PEPE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x648450d9c30b73e2229303026107a1f7eb639f6c",
		"Uniswap V2 Pair: ARMOR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6490828bd87be38279a36f029f3b9af8b4e14b49",
		"Uniswap V2 Pair: RVST - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x64a078926ad9f9e88016c199017aea196e3899e1",
		"Uniswap V3 Pool: WETH - BTT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x64b91b92240bc1901855dd55ae632addb650d089",
		"Uniswap V2 Pair: Mars - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x64c046339682d30b8ceb4e11ae47078b78bac3d7",
		"Uniswap V3 Pool: BIGTIME - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x64c29aac69d3122f6e5531ceca1b753f95350af4",
		"Uniswap V2 Pair: BOND - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x64c9cfa988bbe7b2df671af345bcf8fa904cebb8",
		"Uniswap V2 Pair: WETH - VAL",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x64cac8fa24f437ceca90e20a7a24a609f162b0d1",
		"Uniswap V2 Pair: PRQ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6512d52714dbbb0dea84d447d93db0d1262095f3",
		"Uniswap V2 Pair: WETH - THUG",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x65224ed2dce0cfc960ffa39ae307b9eddeb256cc",
		"Uniswap V2 Pair: IMPACTXP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6546055f46e866a4b9a4a13e81273e3152bae5da",
		"Uniswap V3 Pool: XAUt - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x654def3e97c3f4218c3f49ace81687483c361b2b",
		"Uniswap V2 Pair: AZUKI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x655e25fed94ddb846601705ace4349815e2a95d1",
		"Uniswap V3 Pool: KYL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6577ecf1a0d82659d5d892b76d2a8e902fb1f31b",
		"Uniswap V2 Pair: $Reach - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6591c4bcd6d7a1eb4e537da8b78676c1576ba244",
		"Uniswap V2 Pair: BOND - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x659a9a43b32bea6c113c393930a45c7634a242d5",
		"Uniswap V2 Pair: erowan - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x659e36b0700d9addb259eba18fa88173656ef054",
		"Uniswap V2 Pair: USDC - HILO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x65a3209f9e962858b51edf3a54ad18af67e57962",
		"Uniswap V2 Pair: GAS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x65b9ad105b95290bcde1ed91f2f6688232ad5782",
		"Uniswap V2 Pair: GIGA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x65d0a154d2425ce2fd5fed3bdae94d9a9afe55ce",
		"Uniswap V2 Pair: NDR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x65f53f9edf81b6b4b2a7d40c3ca56054d4c93b9a",
		"Uniswap V3 Pool: SQT - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x661ecc03a464be662133b9a5964a51f1370077f9",
		"Uniswap V2 Pair: VDZ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x663894588c6245fe6fac16713673471b2dad4993",
		"Uniswap V2 Pair: WETH - XRP 2.0",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6660551884b1ccc968662d72c2e6897a1ca4bfac",
		"Uniswap V2 Pair: AC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x666ed8c2151f00e7e58b4d941f65a9df68d2245b",
		"Uniswap V3 Pool: WOOF - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6682ac593513cc0a6c25d0f3588e8fa4ff81104d",
		"Uniswap V2 Pair: Toweli - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x66895417881b1d77ca71bd9e5ba1e729f3aa44d3",
		"Zapper.Fi: Uniswap V1 - Curve Pool Pipe",
		"Zapper"
	],
	[
		"0x669fbbd3612910ff1394f657900fbb8f335d044d",
		"Uniswap V2 Pair: PDOG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x66ad25b5aa3543cb7f4566851fe26da6abab205e",
		"Uniswap V3 Pool: XTP - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x66ba59cbd09e75b209d1d7e8cf97f4ab34da413b",
		"Uniswap V3 Pool: GROK - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x66d5871236685ec4470142b6ed86b61fcad0059a",
		"Uniswap V2 Pair: America - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x66e33d2605c5fb25ebb7cd7528e7997b0afa55e8",
		"Uniswap V2 Pair: USDC - DSD",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6700a111b7513fe99ed6aaad86be0e8557a51c52",
		"Uniswap V2 Pair: PROPS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x670b681d8acca37d7e12c43f9d5114f4543e50ff",
		"Uniswap V2 Pair: OPENAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x670c0f67a4dc05b6d482c3ddaf0bcb8a20cdc304",
		"Uniswap V2 Pair: LKR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x670fe47c8c9891cfe40d9d0a8b2e960549e59346",
		"Uniswap V2 Pair: WETH - SDOPE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x671b8e61c5588f6ec78b9cd75511614945bb2968",
		"Uniswap V3 Pool: TRUF - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x672fefac7f6e3017d9a2f1c14fe048191a24ce14",
		"Uniswap V2 Pair: WETH - HEMULE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x67324985b5014b36b960273353deb3d96f2f18c2",
		"Uniswap V2 Pair: WOLF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x675205fb93c51c0eaeb8a95538b00fcae2fc0f84",
		"Uniswap V2 Pair: WETH - YUAN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x677d05b8bc5c691afd0dcb8ed81404c1ebe114d6",
		"Uniswap V3 Pool: ABT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x678e3d8c5991b6a3d27f68712b3be1d9a180de68",
		"Uniswap V3 Pool: WETH - ZUZALU",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x67b17546c4f3e46565eb125e6a52dddbd3f74986",
		"Uniswap V2 Pair: WETH - $DGTV",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x67b3825348521b94828127f1ee31da80ee67d285",
		"Uniswap V2 Pair: LUNA - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x67cea36eeb36ace126a3ca6e21405258130cf33c",
		"Uniswap V2 Pair: USDC - TSUKA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x683fd5839bf6711be73e6cd5aa4c805d032b96f7",
		"Uniswap V2 Pair: Spirit - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x684b00a5773679f88598a19976fbeb25a68e9a5f",
		"Uniswap V2 Pair: eXRD - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x685c401540c103631a0ba7f14a3d16ae3cb4e50b",
		"Uniswap V3 Pool: wCELL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x688c56c2a19b88e46b008aaaa268a29f1772b79b",
		"Uniswap V2 Pair: (Δ) - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x689d2ee154633ae19d61a8570c09248dcbd0ed04",
		"Uniswap V2 Pair: CWEB - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
		"Uniswap Swap Router 02 (1.1.0)",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0x68b44c26874998adbd41a964e92315809524c7cb",
		"Uniswap V2 Pair: ZYN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x68d01efdfbe5c0eebe3b19b571b18ae6d6ee16fc",
		"Uniswap V3 Pool: SUDO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x68d66f784b49c2f3acf80e549cde65c81a0a1e12",
		"Uniswap V2 Pair: CATE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x68e4af213c49f320175116bff189c9ca452ce29c",
		"Uniswap V2 Pair: ASTX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x68e78497a7b0db7718ccc833c164a18d8e626816",
		"Uniswap V2 Pair: WETH - RYU",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x68f73e2180024db5b54e0e119d4f5128953f9417",
		"Uniswap V3 Pool: MATIC - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x68fa181c720c07b7ff7412220e2431ce90a65a14",
		"Uniswap V2 Pair: DODO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6916f79669f745aebd82433583c85665bfae6fbb",
		"Uniswap V3 Pool: KAS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6958648b60a778e161c85d54d9290501fdfad0d1",
		"Uniswap V3 Pool: STATE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x695b30d636e4f232d443af6a93df95afd2ff485c",
		"Uniswap V3 Pool: WETH - BEPRO",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6981449ddaa030f83bc5ac9fde1c19544521906e",
		"Uniswap V3 Pool: WOLF - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x69884da24f31960f694a8fa1f30aa8e0416fbd04",
		"Uniswap V2 Pair: LTX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x69c66beafb06674db41b22cfc50c34a93b8d82a2",
		"Uniswap V2 Pair: GROK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x69c7bd26512f52bf6f76fab834140d13dda673ca",
		"Uniswap V2 Pair: NPC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x69d91b94f0aaf8e8a2586909fa77a5c2c89818d5",
		"Uniswap V3 Pool: HEX - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x69e89f97a053f4f28aef7807cb02012aac596acf",
		"Uniswap V2 Pair: WETH - FIRE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6a0d8a35cda1f0d3534a346394661ed02e9a4072",
		"Uniswap V2 Pair: BSOCIAL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6a2dbabc161411967cccd6800359ecca53d946d1",
		"Uniswap V2 Pair: WCD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6a3d23fa07c455f88d70c29d230467c407a3964b",
		"Uniswap V2 Pair: WETH - RMPL",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6a516271870a48f4f6c72044ca64ec9c69ac4efc",
		"Uniswap V2 Pair: Neiro - KABOSU",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6a68dc44a6d446734fe0a4e5ec7bb37f1862279f",
		"Uniswap V3 Pool: BOBO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6a888fb73f13104473a4bdfb1beb220ac1eafda3",
		"Uniswap V3 Pool: MAVIA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6a8c06aeef13aab2cdd51d41e41641630c41f5ff",
		"Uniswap V3 Pool: WETH - CFTI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6a9850e46518231b23e50467c975fa94026be5d5",
		"Uniswap V3 Pool: sUSD - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6a9c4fc2b35ee398e7a0e75d982872466ba93cb8",
		"Uniswap V3 Pool: TONCOIN - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6aa02327670d978b277207827dcd0e9906bb5de4",
		"Uniswap V2 Pair: GECKY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6ac536ebbfd9e394d10e3d964ac9a583f4de3c02",
		"Uniswap V2 Pair: RIZZ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6ac6b053a2858bea8ad758db680198c16e523184",
		"Uniswap V3 Pool: ID - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6acb4250ff8c65f0ba95b3001b920370740be940",
		"Uniswap V2 Pair: Niza - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6ad41a736f5c10d9b5b5e60d26008b52ce68e038",
		"Uniswap V2 Pair: AWF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6ada49aeccf6e556bb7a35ef0119cc8ca795294a",
		"Uniswap V2 Pair: WOO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6adb403912608ffffd8fe623a7db35f59e4b4f43",
		"Uniswap V2 Pair: BLAST - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6ae0cdc5d2b89a8dcb99ad6b3435b3e7f7290077",
		"Uniswap V3 Pool: KROM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6aeebc2f5c979fd5c4361c2d288e55ac6b7e39bb",
		"Uniswap V2 Pair: PAR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6afb3d434ac3d0c92e5397895f17f1f9af22a6c2",
		"Uniswap V2 Pair: WORLD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6b0a8517829f63b02a9ae9deeb0fc630b6a506b4",
		"Uniswap V2 Pair: POWER - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6b1c477b4c67958915b194ae8b007bf078dadb81",
		"Uniswap V3 Pool: ⚗️ - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6b268960693359f8c64e043d72ce7580867521b2",
		"Uniswap V2 Pair: WETH - CROC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6b4a0bd2eee3ca06652f758844937daf91ea8422",
		"Uniswap V2 Pair: BOOST - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6b6c7beadce465f8f2ada88903bdbbb170fa1f10",
		"Uniswap V3 Pool: WETH - SCOTTY",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6bc4fbe8b72512d994fba72ade9de502b3d88ac4",
		"Uniswap V2 Pair: EverApe 🍌 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6be419b8126f2c0736444c6800f67a242a377f2c",
		"Uniswap V2 Pair: WETH - DODO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6be8b276d12d5600c2d74dc1993f9a8600c849cd",
		"Uniswap V2 Pair: KAWA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6c063a6e8cd45869b5eb75291e65a3de298f3aa8",
		"Uniswap V3 Pool: WETH - INJ",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6c1bcf1b99d9f0819459dad661795802d232437e",
		"Uniswap V3 Pool: SNSY - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6c25cf2160db4a1be0f1317fc301f5a5cdba9199",
		"Uniswap V2 Pair: BLV - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6c2b607bf0a8ede629d58ba5e05d0448ff7f890a",
		"Uniswap V2 Pair: LMEOW - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6c35c40447e8011a63ab05f088fa7cd914d66904",
		"Uniswap V2 Pair: WETH - XAMP",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6c4ab1907805adcb0b7ae911a5d1b0b99d608b3c",
		"Uniswap V3 Pool: DYDX - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6c4c7f46d9d4ef6bc5c9e155f011ad19fc4ef321",
		"Uniswap V3 Pool: RFD - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6c52b805a27e2bcf4e1ded6023904b5c7c53b8b9",
		"Uniswap V2 Pair: MTLX - FET",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6c6bc977e13df9b0de53b251522280bb72383700",
		"Uniswap V3 Pool: DAI - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6c8a55f67a7a6274d11e20bde30ee45049bdb570",
		"Uniswap V2 Pair: MATTER - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6c8ae94331d7f9bf7a1f3e0b1480ccfd46d1a723",
		"Uniswap V2 Pair: DOGGER - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6c8b0dee9e90ea9f790da5daf6f5b20d23b39689",
		"Uniswap V2 Pair: ORN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6cbcd84abcfbb411426dc21a621fe9a68b985bf4",
		"Uniswap V2 Pair: WETH - PEEPS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6cc5a415327733f493481e40a23de14413739660",
		"Uniswap V2 Pair: WETH - JEFF",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6cd7301d8366382198e2ab7d3cc4c6a74f3b4fc8",
		"Uniswap V2 Pair: CARD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6ce6d6d40a4c4088309293b0582372a2e6bb632e",
		"Uniswap V3 Pool: STG - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6cea05f7cb348d48a0bdf86889040f6a5bae98dd",
		"Uniswap V2 Pair: CRYPTO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6cf061cc7cdfcedc0e365cacc515a8d8995c81f9",
		"Uniswap V2 Pair: DEADMIGOS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6d1bf1bad3ad84fec48d8808d752b683cf30c77c",
		"Uniswap V2 Pair: MAGAA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6d313883c6db5ea58bdd5546f403f1fe27e92690",
		"Zapper.Fi: Uniswap V1 - Uniswap V2 Pipe",
		"Zapper"
	],
	[
		"0x6d50514e4d41c07c4f0dd33f9f9c05e1a4abdf02",
		"Uniswap V2 Pair: DNS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6d57a53a45343187905aad6ad8ed532d105697c1",
		"Uniswap V2 Pair: RLC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6d65fa537de19e3bc4c194567333a45e85bbac55",
		"Uniswap V2 Pair: WISDOM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6d66d518d78e55e5fc0f53b10c066b0d500d93ab",
		"Uniswap V3 Pool: Edog - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6d76f7d16ca40dd13e52df3e1615318f763c0241",
		"Uniswap V2 Pair: BIRD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6d7b6dad6abed1dfa5eba37a6667ba9dcfd49077",
		"Uniswap V2 Pair: VSP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6d9350d1e65631a9894f9a9dafb17a54349a3b90",
		"Uniswap V2 Pair: MSTR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6d9893fa101cd2b1f8d1a12de3189ff7b80fdc10",
		"Zapper.Fi: Uniswap V2 Zap In 2",
		"Zapper"
	],
	[
		"0x6d9d2427cfa49e39b4667c4c3f627e56ae586f37",
		"Uniswap V2 Pair: ROYA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6da6c5c7eb4d840049f51ba1a79ac8caf3009466",
		"Uniswap V2 Pair: WETH - FIS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6dd0c7850704a87f96bc152dbeb41ad35ccdf56b",
		"Uniswap V2 Pair: XDCE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6de126c873f111a83da7513b80ebb6dce297e542",
		"Uniswap V3 Pool: FIGHT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6de28f1176311b7408329a4d21c2bd1441be157f",
		"Uniswap V3 Pool: MOONEY - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6deb633e4441b8879aff48caa6e021e919ddbb0c",
		"Uniswap V2 Pair: RWS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6df064f04ddfb2bb53da21af9d56701726700145",
		"Uniswap V2 Pair: BRETT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6e07a1c50d4db0979a0a65bc8b13744a8a1501de",
		"Uniswap V2 Pair: WETH - YFFI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6e168d4fd7569ea1c56d985256cd2e93ee12490e",
		"Uniswap V2 Pair: COMB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6e48dbea2d3b37e4d605fda71e85c52ebc40aa40",
		"Uniswap V2 Pair: WETH - MSI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6e5c0b204d8c5311687513f0e71c10cb9e114b6b",
		"Uniswap V3 Pool: PEPE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6e68fae720d991c6706cb8b618d0ee8941845896",
		"Uniswap V2 Pair: WETH - DRAGGY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6e6d348260deccaaa03faaa7160f81968e9728c3",
		"Uniswap V2 Pair: WETH - TZKI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6e8abba440a58421f5eec9892b19c1a72c55c992",
		"Uniswap V2 Pair: PPAY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6eb08a8bbe2c7d924acb49e25aade2ed576273c7",
		"Uniswap V2 Pair: BROKIE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6ebb1c40cd3789e6fc02f003b2416383ea5c96f4",
		"Uniswap V2 Pair: LIMIT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6ebf160b4ef7dbadf563f14d484194e919d2a4f6",
		"Uniswap V2 Pair: MSI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6ecbfbee5e615051e865970da9361c18628b1aa9",
		"Uniswap V2 Pair: STRAY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6eddab7a9d289389246205847e2725ab4a5e23e0",
		"Uniswap V2 Pair: D.O.G.E - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6ef2445ce0aef470c5ace507516e50c0a77e3802",
		"Uniswap V2 Pair: MK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6f118ecebc31a5ffe49b87c47ea80f93a2af0a8a",
		"Uniswap V2 Pair: XCAD - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6f1d9f3ac86eef34d1e3586208b1a6e619d915c3",
		"Uniswap V2 Pair: WETH - thing",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6f23d2fedb4ff4f1e9f8c521f66e5f2a1451b6f3",
		"Uniswap V2 Pair: MARK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6f2f26676c743726cf099ef6c9cde87d2d98e13d",
		"Uniswap V2 Pair: Groyper - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6f36111198af4ea37ee02979feca11ee81611e83",
		"Uniswap V2 Pair: DUNG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6f41040b9e098c2ac4b88e27b50d4e9ab486781b",
		"Uniswap V3 Pool: BLUR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6f48eca74b38d2936b02ab603ff4e36a6c0e3a77",
		"Uniswap V3 Pool: DAI - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6f5ceb1f90319f6d325a376fe32aa81f8010d40a",
		"Uniswap V2 Pair: DOGGA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6f6e2080b10acd8e52c914fb5ac190ec00b3d805",
		"Uniswap V2 Pair: BHIBA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6f762176d94b657802ee4aebbdfe719a9067c553",
		"Uniswap V2 Pair: WETH - SERP",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6f9e023c0881ec3d8f56630a6c4fd137c025419e",
		"Uniswap V2 Pair: YLDY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6fbf081e93b775c0270767fe821d9c951e593a9f",
		"Uniswap V2 Pair: WETH - APYS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6fc2fcc5e5065eab7588e3538923c9933d83bc5e",
		"Uniswap V2 Pair: JINDOGE - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6fcc7db7acbc3e9dde3ee7d96cb61fc9c0ca17a7",
		"Uniswap V2 Pair: WETH - SPO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6fdf03d96c40736f787b6354aed7ca3ae8e3d372",
		"Uniswap V2 Pair: NEWS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6fe467be1f4b7d438e9393fd394d9ca3c245c604",
		"Uniswap V2 Pair: ZKHIVE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x700f4dc28170f9903faa6da32d6663ff1ac94f27",
		"Uniswap V3 Pool: BLOOD - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x700fc86c46299cf2a8fd86edadae3f57014351b0",
		"Uniswap V2 Pair: RACA - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x701b319aff36311f720f0a1ebd6636dd84bb3e8b",
		"Uniswap V3 Pool: XFT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x70235a346a1ec1d7a40181ff88a3a2e5260e1d04",
		"Uniswap V2 Pair: ALPHA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x70258aa9830c2c84d855df1d61e12c256f6448b4",
		"Uniswap V2 Pair: TRB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x70287106b99346a9058504cfbbe2f9be4f929636",
		"Uniswap V2 Pair: NAVYSEAL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x704ad8d95c12d7fea531738faa94402725acb035",
		"Uniswap V2 Pair: JOE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7054b0f980a7eb5b3a6b3446f3c947d80162775c",
		"Uniswap V2 Pair: $MONG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x705725c285f4fa23c0ee602319f28735f73c8475",
		"Uniswap V2 Pair: TRUMPAMANIA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x70885952f174fb5396deebb66ce3b4b2adfcef8a",
		"Uniswap V3 Pool: STOS - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x708d25aa102e8096c5cebb9e6abf01a24bb3d6bf",
		"Uniswap V2 Pair: TEAM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x709b80dec74ca88e9394deab45840d861bd5398d",
		"Uniswap V2 Pair: CTO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x70a3944215de6fa1463a098ba182634df90bb9f4",
		"Uniswap V2 Pair: POOLZ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x70bb8e6844dfb681810fd557dd741bcaf027bf94",
		"Uniswap V3 Pool: OGN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x70cf99553471fe6c0d513ebfac8acc55ba02ab7b",
		"Uniswap V3 Pool: MEME - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x70ea56e46266f0137bac6b75710e3546f47c855d",
		"Uniswap V2 Pair: RPL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x70ec2fa6eccf4010eaf572d1c1a7bcbc72dec983",
		"Uniswap V2 Pair: WETH - ROOK",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x71000582ec4914629a61ec95f22f764aa7e3b8a5",
		"Uniswap V2 Pair: WETH - BOTS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x715a3ceac0d039d674f50b07804592e87e8c6d77",
		"Uniswap V3 Pool: GSWIFT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x718dd8b743ea19d71bdb4cb48bb984b73a65ce06",
		"Uniswap V2 Pair: WETH - DONUT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x71c1d309dea75c5a2feea55dbee68aac6768c12e",
		"Uniswap V3 Pool: WETH - OMI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x71cb3c6c5d30af1eca48a8fe0818c987f269b7e1",
		"Uniswap V2 Pair: WETH - ASAP",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x71d091e35abbd51b46db179184684633581d1816",
		"Uniswap V3 Pool: RBX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x71fdecb07f03050322dcaf24c0feb40a4493f7aa",
		"Uniswap V2 Pair: CETI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x722885cab8be10b27f359fcb225808fe2af07b16",
		"Uniswap V2 Pair: WETH - FNX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x723362526d5dc1424b404598e48f4b589b6054d4",
		"Uniswap V2 Pair: NTD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7235c4aa48b753e48c3786ec60d3bddef5f4b27a",
		"Uniswap V2 Pair: ESPR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x724d5c9c618a2152e99a45649a3b8cf198321f46",
		"Uniswap V2 Pair: REVV - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x726259dbeaf18606323b116df193d35f384a30fe",
		"Uniswap V2 Pair: PEPEG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7262a43c94258e6071d3bac00ebec6d7c9b4ef30",
		"Uniswap V2 Pair: CRE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7270233ccae676e776a659affc35219e6fcfbb10",
		"Uniswap V3 Pool: USDC - wCFG",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x72af4d1d175672d1f99506e68e6e7cff484be4de",
		"Uniswap V2 Pair: ASH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x72b1410df9d22d5a3416066663fcc36b460c579a",
		"Uniswap V2 Pair: WETH - GALA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x72d55cc749b91c1645af4810fc082784792857f6",
		"Uniswap V2 Pair: Boost - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7316f8dd242974f0fd7b16dbcc68920b96bc4db1",
		"Uniswap V3 Pool: WOJAK - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x732276168b421d4792e743711e1a48172ea574a2",
		"Uniswap V3 Pool: WETH - MINER",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7322abe9958a291f27f907aac35a17e29bf22bdf",
		"Uniswap V2 Pair: RSR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x734e48a1ffea1cdf4f5172210c322f3990d6d760",
		"Uniswap V2 Pair: WBTC - KLON",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x735a26a57a0a0069dfabd41595a970faf5e1ee8b",
		"Uniswap V3 Pool: agEUR - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7370034134ca83a6bd809848e3be15bace7348f3",
		"Uniswap V2 Pair: BLUE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7379e81228514a1d2a6cf7559203998e20598346",
		"Uniswap V3 Pool: WETH - sETH2",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x738ea57616fa9dab407e9e7920d446eaf4e7eaaa",
		"Uniswap V3 Pool: WETH - ZETA",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x73994f935b23511686ce1dd59c295e5100031f4b",
		"Uniswap V2 Pair: INXT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x73a6a761fe483ba19debb8f56ac5bbf14c0cdad1",
		"Uniswap V3 Pool: SUSHI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x73a86455888902108bc88f5831919e23098b9b04",
		"Uniswap V2 Pair: PAID - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x73b66a14599ec4741a855fc25da0e1664a3bd44a",
		"Uniswap V2 Pair: KENNEL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x73e02eaab68a41ea63bdae9dbd4b7678827b2352",
		"Uniswap V2 Pair: INV - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x73ea3d8ba3d7380201b270ec504b33ed5e478542",
		"Uniswap V3 Pool: USDC - crvUSD",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x73f7435bd2e1d3c3e464ced008181e942e4ee12a",
		"Uniswap V2 Pair: Memes - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x744159757cac173a7a3ecf5e97adb10d1a725377",
		"Uniswap V3 Pool: FET - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7485ee1cb28c8dd8787ca03ee2d4dba6518cda8c",
		"Uniswap V2 Pair: SAITANOBI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x748f40109a11daf14d5f9f6cba33d6fa209900f9",
		"Uniswap V2 Pair: YFIE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x74948a441fa42ae60fc39e993ed0a81041186566",
		"Uniswap V2 Pair: VGX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7498e0c6733fbb5368e8771f9791b9ff60c4490e",
		"Uniswap V3 Pool: DCK - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x74ac706873c399dfc73a4679b1e1fbf474c306e1",
		"Uniswap V2 Pair: WETH - HOICHI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x74c6eb5e3f55b372a0147c2438f4e7c07a965f9f",
		"Uniswap V3 Pool: TOWER - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x74ce3035bbb0eac39917a459d372b95f4bc22ee4",
		"Uniswap V2 Pair: MILEI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x74e6cac32234133fe06bd0f4d8237dee1dede057",
		"Uniswap V2 Pair: SHEZMU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x75001b3ffe0f77864c7dc64c55e1e22b205e4a07",
		"Uniswap V2 Pair: FVT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x750874e6fb8dca30ce41d445e4baf8c76971f912",
		"Uniswap V2 Pair: CATALORIAN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x75201d546585ed4190bb5c7f0ae4f48dfe1b0c62",
		"Uniswap V2 Pair: CELR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7524c27965b26d13152835349bd10cc75f4643f1",
		"Uniswap V2 Pair: SLINK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x75481fdcd458522badb48e8b0d679174321b85e5",
		"Uniswap V2 Pair: SAM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x754af604471d7dc3aac2f81f15097a13f93a8dc7",
		"Uniswap V2 Pair: MIKOTO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x755c1a8f71f4210cd7b60b9439451efcbeba33d1",
		"Uniswap V2 Pair: LPT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x755e5a186f0469583bd2e80d1216e02ab88ec6ca",
		"Uniswap V3 Pool: ARB - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x755f01736f93c91585b840c2179c560b754d69f3",
		"Uniswap V3 Pool: NXRA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x75734418fd346f424a3e1d7cc11e012f322cdd03",
		"Uniswap V2 Pair: DUEL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x757a197b3b17b207d6de3840de09bcf2dfb75b72",
		"Uniswap V3 Pool: PEPE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x757d8d585ee1488097305bcb0fcec1ac4a55e9d6",
		"Uniswap V3 Pool: PEW - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7586e4a1e7d950912544732ed533e4a448317225",
		"Uniswap V2 Pair: CLIQ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x75bff91af9878f5ec3fede9b52d51159afc2430a",
		"Uniswap V3 Pool: FUN - DAI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x75c51e30b684fee4241ce7d8d0784303367d1fe2",
		"Uniswap V2 Pair: FKBLUR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x75d308a90ef8c0de983bd6eddc4aae7d8fe226df",
		"Uniswap V2 Pair: DOMI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x75e5852385fa856791d703e3f04da24f5bc13975",
		"Uniswap V2 Pair: PAID - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x75f89ffbe5c25161cbc7e97c988c9f391eaefaf9",
		"Uniswap V2 Pair: WETH - wPE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7618c038113503d15029a41857e352f43b4dcc6e",
		"Uniswap V3 Pool: WETH - HAY",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7626367d028b969a7930c28ee3ae18b20e83ecda",
		"Uniswap V2 Pair: ETF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x76333b38567f78240d6276e5b3985baa6fa5fda5",
		"Uniswap V2 Pair: BNSD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7633cce6be1afed15ef041f9d579991d61c254e9",
		"Uniswap V2 Pair: PLAYTIME - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x76366d95c2016446247296ea50c8d06d0585ae00",
		"Uniswap V3 Pool: REZ - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7685cd3ddd862b8745b1082a6acb19e14eaa74f3",
		"Uniswap V3 Pool: RARE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x76860df4f522d29d86d1583caaaa596c60061413",
		"Uniswap V2 Pair: WETH - PEPO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x76911e11fddb742d75b83c9e1f611f48f19234e4",
		"Uniswap V2 Pair: DYP - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x76967a96afe8c17f15e6981cf86c773c40e52062",
		"Uniswap V2 Pair: WETH - TrumpX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x769f539486b31ef310125c44d7f405c6d470cd1f",
		"Uniswap V2 Pair: GPU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x76a411f14a704099ba476ce8dffc288a53295218",
		"Uniswap V2 Pair: WETH - ASTEROID",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x76d3142ac9891aa69bdb1a96eabb907561596ad3",
		"Uniswap V2 Pair: DINU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x76dfe78b0ce06e77aa41326208cd03a773cb5bbf",
		"Uniswap V2 Pair: WETH - BABYSAITAMA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x773dd321873fe70553acc295b1b49a104d968cc8",
		"Uniswap V2 Pair: SHIB - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7755692bf6cb4a4e67246fb8e11f9d36d0818234",
		"Uniswap V2 Pair: SHIBDAO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x775e4d9f7b97b0b67cab8c953bef80c5e194ebaf",
		"Uniswap V2 Pair: NOBODY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x77778afcc37256603d54e67143bb234b6f2fc7c0",
		"Uniswap V2 Pair: SONIK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x77924185cf0cbb2ae0b746a0086a065d6875b0a5",
		"Uniswap V3 Pool: XDEFI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x779dac1f4df345acb6ee814afda755f1693770cb",
		"Uniswap V2 Pair: STILTON - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x77ac18058e0f86e7e762202bf9a414e7d77f5bb5",
		"Uniswap V3 Pool: LAI - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x77bbc2b409c2c75e4999e8e3eb8309efff37cf2d",
		"Uniswap V2 Pair: PNT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x77c1d3cd554b500ee9f2fee41509360f7503257f",
		"Uniswap V2 Pair: $BREAST - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x77d97e9622deae2744f1bdbd9aa6fe3c41dfddd5",
		"Uniswap V2 Pair: STOP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x77fca8cb4d4be5d196e44fc5403d33caee13cf29",
		"Uniswap V2 Pair: WETH - RENT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x78194ba1a135a71f7fba71fda7cdd3885872b8ff",
		"Uniswap V3 Pool: WETH - MNW",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x781ce9a6808503261ab27973f3a34dd9f851a6fc",
		"Uniswap V2 Pair: CAT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x782a3e2ac6af3f592b2e8e1e37f54f99bcf202ad",
		"Uniswap V2 Pair: CEEK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7832310cd0de39c4ce0a635f34d9a4b5b47fd434",
		"Uniswap V3 Pool: Mog - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x78359500f08157eac9ef566040242abca8f4d9ab",
		"Uniswap V2 Pair: FakeAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7835a44f91b9d196076cb2b38280bbc4bf237924",
		"Uniswap V2 Pair: DISTX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7844c04b043b51dc45bdf59ee2de53e7686865ff",
		"Uniswap V2 Pair: TOB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x78467084b9edc2672c28c5cd8f076dc6f2ec1a66",
		"Uniswap V2 Pair: WETH - KARMA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7858e59e0c01ea06df3af3d20ac7b0003275d4bf",
		"Uniswap V3 Pool: USDC - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7894dae584dfa3a5d60a13bafc25ee0b43124e7e",
		"Uniswap V2 Pair: PBR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x78ab16803d92f6db77ef6d4e92fe139affab78cf",
		"Uniswap V3 Pool: FREE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x78b9524101fb67286338261ddd85e20665e571c1",
		"Uniswap V2 Pair: UNISTAKE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x78d4704c65dfd869f7f44d78c3fbbbdb5b412c71",
		"Uniswap V3 Pool: HDRN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x78d4e81fc84a1ce367e90936e49a74a9052137e8",
		"Uniswap V3 Pool: FUMO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x78e719632e964cd3caee228a6f4f3519310e0063",
		"Uniswap V2 Pair: WAAC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7924a818013f39cf800f5589ff1f1f0def54f31f",
		"Uniswap V2 Pair: LON - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7937619a9bd1234a303e4fe752b8d4f37d40e20c",
		"Uniswap V2 Pair: WETH - REEF",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7945819d6cab17f94c4089c28767e164ed4acf3e",
		"Uniswap V2 Pair: Simpson - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x797e1dc0738f2f047d7e0dd185e41a35f87c5618",
		"Uniswap V2 Pair: WETH - ZCX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7981877bd447de8ff0507ba2bcf9ae6ae510ade3",
		"Uniswap V3 Pool: Nvir - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x79a6683d82f25535ff3fd2753e03e0961060e882",
		"Uniswap V3 Pool: Neiro - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x79db69ab1ed51261a9fdc3bf0e6db3fa48b8cc52",
		"Uniswap V3 Pool: TURT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x79dd15ad871b0fe18040a52f951d757ef88cfe72",
		"Uniswap V2 Pair: KNDX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x79dddebc620c5dea65e363701d91424bde85cccb",
		"Uniswap V2 Pair: WETH - CHOPPY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x79f46e36c5854b8e3cd25997b703d43ae40e3a52",
		"Uniswap V2 Pair: ATAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x79fdb46df5abc4083abbc44612ec0c499e115ba4",
		"Uniswap V2 Pair: DOLPHY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7a0a6906de7714d27413f5092ed1a0636a3fbc9a",
		"Zapper.Fi: Curve Zap In 2",
		"Zapper"
	],
	[
		"0x7a233f0e957a9ff4726c738e9d790b9956f4c894",
		"Uniswap V3 Pool: KARRAT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
		"Uniswap V2 Router 02",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7a250d5630b4cf539739df2c5dacb4c659f2488d",
		"Uniswap V2 Router 02",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7a2a559dbe9232e743e1e9ee794d20a60e9fbb7a",
		"Uniswap V2 Pair: OPENSEA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7a310bd97b5b6b59470e4041769127735545058a",
		"Uniswap V2 Pair: BIBLE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7a415b19932c0105c82fdb6b720bb01b0cc2cae3",
		"Uniswap V3 Pool: WETH - weETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7a564eb54e8b2244e5bb7c394e75f455e8a1e99d",
		"Uniswap V2 Pair: FARM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7a5ae802895d5f90b6edbafc870fd348fba2a3d2",
		"Uniswap V3 Pool: UST - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7a5bef8c4b1d511bc076a416b097eea798247301",
		"Uniswap V3 Pool: WETH - CZ",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7a646ee13eb104853c651e1d90d143acc9e72cdb",
		"Uniswap V2 Pair: ARES - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7a809081f991ecfe0ab2727c7e90d2ad7c2e411e",
		"Uniswap V2 Pair: USDC - CAW",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7a8846b6e415ec0b26ec4b9f988c3ec74cb65d91",
		"Uniswap V2 Pair: YFT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7a922aea89288d8c91777beecc68df4a17151df1",
		"Uniswap V2 Pair: USDC - SHU",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7a99822968410431edd1ee75dab78866e31caf39",
		"Uniswap V2 Pair: XI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7aadb097c665eb81460d1ee5133841e1a4651072",
		"Uniswap V2 Pair: USA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7ac46647b0b6850f445aaded0b2694c927cb0539",
		"Uniswap V2 Pair: KINGDOM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7afebb30e3a406ef1c9e35b48db13cb999f7e57a",
		"Uniswap V2 Pair: QUID - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7b12d855445073987d45ea97b1af3554f05e4ef4",
		"Uniswap V3 Pool: WOOL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7b1e5d984a43ee732de195628d20d05cfabc3cc7",
		"Uniswap V3 Pool: WETH - ONDO",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7b28470032da06051f2e620531adbaeadb285408",
		"Uniswap V2 Pair: MPL - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7b2f8f7e436617fe5160e8368cf82ac278ea3503",
		"Uniswap V2 Pair: BS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7b3ed3a3444144ff526554d5f4aa463d1759f51a",
		"Uniswap V3 Pool: WETH - AXGT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7b412f141996411401f57e2ba1bc2235af807d4d",
		"Uniswap V2 Pair: WETH - CUMINU",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7b73644935b8e68019ac6356c40661e1bc315860",
		"Uniswap V2 Pair: ELON - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7b890092f81b337ed68fba266afc7b4c3710a55b",
		"Uniswap V2 Pair: NFTX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7b8ac38aacd8ebca19b3d423bcbbd4c5815bab49",
		"Uniswap V2 Pair: PEAR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7ba9b94127d434182287de708643932ec036d365",
		"Uniswap V2 Pair: eRSDL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7baece5d47f1bc5e1953fbe0e9931d54dab6d810",
		"Uniswap V3 Pool: TURBO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7bc703a48c90da793f57b55808ae14cdd75458d6",
		"Uniswap V2 Pair: CLOSEDAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7be8076f4ea4a4ad08075c2508e481d6c946d12b",
		"OpenSea: Wyvern Exchange v1",
		"OpenSea"
	],
	[
		"0x7bea39867e4169dbe237d55c8242a8f2fcdcc387",
		"Uniswap V3 Pool: USDC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7c2543938a27554f82be178a2ac02a72c8ad1925",
		"Uniswap V2 Pair: NYAN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7c30ffc4fea98deb6aad172d6e3d673c962c13f5",
		"Uniswap V2 Pair: $REKT - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7c3b1297ac649b36547b913de50919acb45a250c",
		"Uniswap V3 Pool: DATA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7c46e694d1ee0e577e64933d98dcbff3fdaca2d3",
		"Uniswap V3 Pool: BOOP - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7c5c502bf26ad232eefb06ef1444ce8e45bd448d",
		"Uniswap V2 Pair: ANDEI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7c5f2a5d428d713e545a05ec1b4bf49bf656818f",
		"Uniswap V2 Pair: MOOV - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7c6776bac3ea54878a2ddc3fd1c26ef87c8f255f",
		"Uniswap V3 Pool: MNRCH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7c6c06d21f46664afd7d12197ce105651d29d1b0",
		"Uniswap V2 Pair: WETH - STARS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7c7ca79e0cdc2dbdedd8bd1f527414a0ff1d15c9",
		"Uniswap V2 Pair: WETH - GONDOLA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7c96a25e8c816c9e87e59a21f8a6a882e7d4742a",
		"Uniswap V2 Pair: PLSF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7caa81b917dfdc83943bf99a1f3c947f849658d4",
		"Uniswap V2 Pair: WETH - WLFI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7cd2c6680471029fa51f6c7169daba7dfb70e9cf",
		"Uniswap V2 Pair: WETH - KICK",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7cdc560cc66126a5eb721e444abc30eb85408f7a",
		"Uniswap V2 Pair: DGVC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7ce01885a13c652241ae02ea7369ee8d466802eb",
		"Uniswap V2 Pair: WETH - TRIBE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7ce4c1284208467965d6e95a9fb2ef663ac514ed",
		"Uniswap V2 Pair: HACHI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7ce52dc08b49e0bc11252cd267d2614dfc616d9f",
		"Uniswap V2 Pair: LONG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9",
		"Aave: Lending Pool V2",
		"Aave",
		"images/contracts/aave.png"
	],
	[
		"0x7d2ce66f7e50caad5c85a5ae01bea92f20e76a82",
		"Uniswap V2 Pair: CHECKS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7d3455421bbc5ed534a83c88fd80387dc8271392",
		"0x: Governor",
		"0x"
	],
	[
		"0x7d3e6457ade26434f8046c405410488f1985065a",
		"Uniswap V2 Pair: CHURCH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7d45a2557becd766a285d07a4701f5c64d716e2f",
		"Uniswap V3 Pool: LOCK - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7d4e22a6abbfe86f730b179d2b934c0981712f45",
		"Uniswap V3 Pool: CGPT - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7d611e4cf1c7b94561c4caa5602f329d108336e3",
		"Uniswap V2 Pair: WETH - SHROOM",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7d829fcc84f9dca5a3e6d9fb73545bacf350146a",
		"Uniswap V2 Pair: WETH - ZZZ",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7d88b48f250830fc5a5f336cac03bae03091ebb5",
		"Uniswap V3 Pool: BDID - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7d9c8d888d03df89461c645bd1108ae138b63a2a",
		"Uniswap V2 Pair: GLQ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7dbc4253e35f20be7164f0a3e0959c33136d007d",
		"Uniswap V2 Pair: BOYSCLUB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7dd2ea69960a7451bb178b95368dc7b827e4f7a2",
		"Uniswap V2 Pair: LEGEND SHIT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7dd3f5705504002dc946aeafe6629b9481b72272",
		"Uniswap V2 Pair: DAO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7df301c4529c58546527f5b912c74ecccad0ae2d",
		"Uniswap V3 Pool: SHRAP - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7df4a1d4a8d8390bef36f311252423cce04e5647",
		"Uniswap V2 Pair: WETH - ASTRO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7e2b8aa127f6a50715ed4d300a95e6d1d35fd08a",
		"Uniswap V2 Pair: WBTC - SYLO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7e3651eddcaaa8a50a2d11000c75cad27f3a5910",
		"Uniswap V2 Pair: WETH - HaHa",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7e3a3a525d9d265d11d1d1db3cad678746b47d09",
		"Uniswap V3 Pool: GP - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7e99598519cf8285c9211e73de2fb2efb5112ecf",
		"Uniswap V2 Pair: MOOT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7ec0b75a98997c927ace6d87958147a105147ea0",
		"Uniswap V3 Pool: YGG - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7edc297010f04c4e82b997bd60ef7eeaf9c360d5",
		"Uniswap V2 Pair: WETH - BIDEN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7ee2d59972dd251f4212cfb69e0414cb33962650",
		"Uniswap V2 Pair: GREY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7eec7a4e6ab3cce23ccc41b8601282716b9eadf4",
		"Uniswap V2 Pair: SORA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7eefbd48fd63d441ec7435d024ec7c5131019add",
		"0x: ERC1155 Proxy",
		"0x"
	],
	[
		"0x7ef85de60effb1ae1f2b50c88592804732bd89dc",
		"Uniswap V2 Pair: KP4R - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7f0ad87b99ba16e6e651120c2e230cf6928c3d15",
		"Uniswap V2 Pair: MARK - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7f1cd65679d73eb98fcebe8b61c13d3d68605717",
		"Zapper.Fi: Multi-Pool",
		"Zapper"
	],
	[
		"0x7f1da3697236d4a5e0efd2a99de5d9c076937856",
		"Uniswap V2 Pair: UNN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7f268357a8c2552623316e2562d90e642bb538e5",
		"OpenSea: Wyvern Exchange v2",
		"OpenSea"
	],
	[
		"0x7f377de048f8d817184233a1f7c1ae63e1399cf7",
		"Uniswap V2 Pair: WETH - MEXP",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7f44f5040a913411c47b1ec208d4913a30aeff9d",
		"Uniswap V2 Pair: WETH - FTTC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7f63306a62c345365881e0fff85cb2c8baaa13d5",
		"Uniswap V3 Pool: XOR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7f74c86cd8ba48be647d541b3e7f5a2184a3afa4",
		"Uniswap V3 Pool: PIRATE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7f7b6b6d3c5495cf5664baa7857639e3b964dade",
		"Uniswap V2 Pair: MOONDAY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7f7ff8f22a902bb9b0aef07c6cb41d91a47e18e1",
		"Uniswap V3 Pool: FLIP - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7f808fd904ffa3eb6a6f259e6965fb1466a05372",
		"Uniswap V3 Pool: DXN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7f91a70c3138840464485f52aae77af1260730a1",
		"Uniswap V2 Pair: TRUMP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7f9e4a472d332dd60047489d5e541caa37e22795",
		"Uniswap V2 Pair: Vine  - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7fa282c38ba652de978579344b22c5d51ab45293",
		"Uniswap V2 Pair: WETH - LION",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7fa640483993c968abc3d17b012f822441d1217e",
		"Uniswap V2 Pair: PALAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7fba40ba619f49768eadc7fbcbd749eebb905101",
		"Uniswap V2 Pair: ZDEX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7fd1de95fc975fbbd8be260525758549ec477960",
		"Uniswap V2 Pair: WETH - HOGE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7fdeb46b3a0916630f36e886d675602b1007fcbb",
		"Uniswap V2 Pair: VOW - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8044a80a381465f27f62565d0c274ad20caaa57b",
		"Uniswap V2 Pair: $ANRX - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8044e86ca1963e099a7e70594d72bc96a088fed2",
		"Uniswap V2 Pair: KLEE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x80464c5024253974506e8dd36b8ee49791c1f1ea",
		"Uniswap V3 Pool: BTCINU - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x80562222ec4d0f8a2bddd10ce972cbb2d6167802",
		"Uniswap V2 Pair: CAVA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x805f11a6f11eb70af4f622bb3bb349b670473ba9",
		"Uniswap V2 Pair: Hama - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x80a0102a1e601c55fd3f136128bb2d222a879ff3",
		"Uniswap V2 Pair: WETH - BDP",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x80b4d4e9d88d9f78198c56c5a27f3bacb9a685c5",
		"Uniswap V2 Pair: WETH - TRU",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x80c5e6908368cb9db503ba968d7ec5a565bfb389",
		"Zapper.Fi: Uniswap V2 Zap In",
		"Zapper"
	],
	[
		"0x80c7770b4399ae22149db17e97f9fc8a10ca5100",
		"Uniswap V3 Pool: LYXe - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x80d8cde1cdde2174f8af7ffc70e5752e1fab6cfc",
		"Uniswap V3 Pool: @LFG - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x80d972d2a62ba71814f4e08bd27f95e5d81d02a9",
		"Uniswap V2 Pair: STOS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x80dbf454431ba9b64f0a8753f72a86afea6ee2f3",
		"Uniswap V3 Pool: QSP - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x80ddbeeb05788980caa0b1b433b40d4443f4439e",
		"Uniswap V2 Pair: WETH - LYM",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x80ed1b41476b95fb47830825b65fd3bf59f6a348",
		"Uniswap V3 Pool: BVM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x80fa4c1fd0fbb9a4f071999af69531dee1016644",
		"Uniswap V3 Pool: USDT - ETHFI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8107fca5494375fc743a9fc4d4844353a1af3d94",
		"Uniswap V3 Pool: TURBO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x811559d11dc36d263c34959b980a4e1bea7cbbe7",
		"Uniswap V2 Pair: UNIBOT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8119c00d8a02c61f813675d23d5acb98851cf274",
		"Uniswap V3 Pool: ELAND - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x811a10657440928c9cda3580eb54f271ac4b9a19",
		"Uniswap V2 Pair: LAELAPS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x811beed0119b4afce20d2583eb608c6f7af1954f",
		"Uniswap V2 Pair: SHIB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x811cfb75567a252bea23474e2ccd1286927bfe0a",
		"Uniswap V2 Pair: FJO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x811f8c60ee1805db7ece0fa3c7b064feba887053",
		"Uniswap V2 Pair: PAPER - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x813b22032e94667cc0f854cc7241fc5a309c45bc",
		"Uniswap V3 Pool: USDC - LOOKS",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8142cf76ba9486ba0a73cfcd176329d51bb6a2f9",
		"Uniswap V2 Pair: DYOR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x816579230a4c61670eba15486c8357bf87ec307e",
		"Uniswap V2 Pair: WETH - xBTC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8175362afbeee32afb22d05adc0bbd08de32f5ae",
		"Uniswap V2 Pair: WETH - DMG",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x819de42d3ab832eaf7111a222a8a5a7419f13b48",
		"Uniswap V2 Pair: ROUTE - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x819f3450da6f110ba6ea52195b3beafa246062de",
		"Uniswap V2 Pair: MATIC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x81a460ea6fd96a73d5672f1f4aa684697d4b44cc",
		"Uniswap V2 Pair: SHIA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x81fbbc40cf075fd7de6afce1bc72eda1bb0e13aa",
		"Uniswap V3 Pool: WETH - IMX",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x81fbef4704776cc5bba0a5df3a90056d2c6900b3",
		"Uniswap V2 Pair: WETH - renBTC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x820d30dfb86edef782a0310f0e8f41ce37b82c40",
		"Uniswap V2 Pair: uDOO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8224f6854d925eac313095069c54b31c1a09b336",
		"Uniswap V2 Pair: FABRIC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x82311699a0a424c9a566e111ffcb47e696a23086",
		"Uniswap V2 Pair: PHUB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x824664650c789bf01b5bba80473977ca820fb1eb",
		"Uniswap V3 Pool: EJS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8249ca64baac07f75b042d03d77449534b2321a0",
		"Uniswap V2 Pair: SHIB2.0 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x824a30f2984f9013f2c8d0a29c0a3cc5fd5c0673",
		"Uniswap V3 Pool: BLUR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x826b34e62320108a9fa38a080360d693a8a73111",
		"Uniswap V3 Pool: WETH - MON",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x82701111940bccc99127ecb209a651141822a69b",
		"Uniswap V2 Pair: Xeno - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x82743c07bf3be4d55876f87bca6cce5f84429bd0",
		"Uniswap V3 Pool: HEX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8287c431f547b313d5bfdaf2fc8b738cff65358f",
		"Uniswap V3 Pool: FORK - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8296d84e911e0c1f827e1e7d4b50c2568e807b36",
		"Uniswap V2 Pair: BIAO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x82b8ee01e63af40bec3cb555795d2a12c495ee23",
		"Uniswap V2 Pair: WETH - LNQ",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x82c427adfdf2d245ec51d8046b41c4ee87f0d29c",
		"Uniswap V3 Pool: WETH - oSQTH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x82cd7e4b567ad7d2a00c3cc93ac968ccb61cafca",
		"Uniswap V2 Pair: USDC - DORA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8315177ab297ba92a06054ce80a67ed4dbd7ed3a",
		"Arbitrum: Bridge",
		"Arbitrum"
	],
	[
		"0x8328c886cd4176759bfc4a6a8f9c6973cfee3d65",
		"Uniswap V2 Pair: GAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8340a818fe5b80441c4d96424ddf07867299b135",
		"Uniswap V2 Pair: SUZUME - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8343cbfe85c3cadf76c76d15b87e18e89435fe4e",
		"Uniswap V2 Pair: MZERO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x835b94f20d5858a234f3bd1d36d1597fc09e12a6",
		"Uniswap V2 Pair: ETH2.0 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8364ada2e617314e342485e87fbe36af6d923ae7",
		"Uniswap V2 Pair: WETH - ONG",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x837f68d11cd15e8ab10dd5f3f210516f2cf2bcfb",
		"Uniswap V2 Pair: eMTRG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8382aeab50c5d60e06cf3b68a51cd88c39a061c6",
		"Uniswap V2 Pair: BCUG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x83973dcaa04a6786ecc0628cc494a089c1aee947",
		"Uniswap V2 Pair: DEA - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x839e2d728bfead41fc642a0ec4132b33ebb09d11",
		"Uniswap V2 Pair: WEB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x83a40563a19c6f19dfb93e5c496280129d97e423",
		"Uniswap V2 Pair: RAK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x83abecf7204d5afc1bea5df734f085f2535a9976",
		"Uniswap V3 Pool: PEOPLE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x83b33b4db2776f119b2ddd902419254775c8db15",
		"Uniswap V2 Pair: METAL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x83c32bf929f80e404ff30ede7333271460b13cd9",
		"Zapper.Fi: Curve - Curve Pool Pipe",
		"Zapper"
	],
	[
		"0x84062bbc1d7199fd049c4b011d193d4edd8a2d4b",
		"Uniswap V3 Pool: raz - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8407b9a9e61101e73fb427c3740c89e10da93d12",
		"Uniswap V2 Pair: Kabosu - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x840deeef2f115cf50da625f7368c24af6fe74410",
		"Uniswap V3 Pool: cbETH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x841820459769cd629b10a36fd12e603938cc2679",
		"Uniswap V3 Pool: WLD - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x841bb1966c1d1b80634111691471c667e4c2bfe4",
		"Uniswap V2 Pair: HDRN - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x84383fb05f610222430f69727aa638f8fdbf5cc1",
		"Uniswap V3 Pool: MM - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x844a5ccdc91e604f55085adfc02e4d52c8227099",
		"Uniswap V2 Pair: $VSG  - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x844eb5c280f38c7462316aad3f338ef9bda62668",
		"Uniswap V3 Pool: MUBI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8452d58c1ec45016a668d1c8ab4179551abf7124",
		"Uniswap V3 Pool: GALA - TOWN",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x846e72e2f4bf9978143d933ef2d224284ebc1274",
		"Uniswap V2 Pair: WETH - CODEX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8484ef722627bf18ca5ae6bcf031c23e6e922b30",
		"Polygon/Matic: Ether Bridge",
		"Matic"
	],
	[
		"0x84ae4aa9581e6b7f50f660c5b6970aef1ed82be8",
		"Uniswap V3 Pool: PPAY - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x84c3b884a9ff37655dc918d70d99ea8ee9b3f0d3",
		"Uniswap V2 Pair: DCORE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x84d1f4bbd0fb53b9a09e95e051f2fe1bf3e01e6a",
		"Uniswap V2 Pair: TECH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x84d9b06b335c5270a76ddc4bf4674d238a5b5f8a",
		"Uniswap V3 Pool: MAP - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x84e34df6f8f85f15d24ec8e347d32f1184089a14",
		"Uniswap V2 Pair: WETH - Yf-DAI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x84e99ccc19da8290a754cb015ca188676d695f0a",
		"Uniswap V2 Pair: COVER - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x85324dd97ec1276a28b9d6ca70ad58fa4759724b",
		"Uniswap V2 Pair: YKZ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x854373387e41371ac6e307a1f29603c6fa10d872",
		"Uniswap V2 Pair: FEG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x855fa1b0c27fefc055c1880c5a5969ee731e9690",
		"Uniswap V3 Pool: WETH - MMVG",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x85609c626b532ca8bea6c36be53afdcb15dd4a48",
		"Uniswap V2 Pair: wANATHA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x85673c92f0f27a9c4d8c221f6bfefa33b716338a",
		"Uniswap V2 Pair: USDC - DPR",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x856e90282961c0e7f6693fd2f62b35d5df9783cf",
		"Uniswap V2 Pair: DEOR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x856ff66843e9e7250b5e62ecac9d8d04c9a721c6",
		"Uniswap V2 Pair: Z3 - DAI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8580a7b63d48190775c7ceb13eda5dd4cc01a6e2",
		"Uniswap V2 Pair: WETH - FEFE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x85814af9bfe5f62faad1e2cd8f173107e893f3eb",
		"Uniswap V2 Pair: ae13 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x858605031767aedc40a4b906b17d133b217d02d7",
		"Uniswap V2 Pair: LESLIE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8588f0c49849c011d5b5e3318bb0d1fb8534266b",
		"Uniswap V2 Pair: $Jenner - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x858a2ca525466a5c7ad1bd4f66ecbfdcc938f237",
		"Uniswap V3 Pool: MPL - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x85917d97a4c399816cf6edb2d2e8767002f6a96a",
		"Uniswap V2 Pair: ATD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8592064903ef23d34e4d5aaaed40abf6d96af186",
		"Uniswap V3 Pool: USDC - STG",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x859f7092f56c43bb48bb46de7119d9c799716cdf",
		"Uniswap V2 Pair: XCN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x85aa97537837514a9229fcaeb66eeef7242122bf",
		"Uniswap V2 Pair: TGC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x85b5a7dc1630f9465d8409e2ac53313b70a71b9c",
		"Uniswap V3 Pool: EFI - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x85b864e2371585df5368100a31b7761dc0b5946e",
		"Uniswap V2 Pair: BAKE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x85c920a41dd7de0d5bc0f3d6c03241bac9aef0f1",
		"Uniswap V2 Pair: yama - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x85cb0bab616fe88a89a35080516a8928f38b518b",
		"Uniswap V2 Pair: POOL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x86005b57be708e031ea60acf9d3852377e74a6c9",
		"Uniswap V2 Pair: WETH - TAU",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8616b44b734817a2c954016a57cf2c4d72d6f838",
		"Uniswap V2 Pair: PEPE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8627c8cb59f01435c2ded1e0e941f064ccb0f5b8",
		"Uniswap V2 Pair: SHFT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x86347ace0fbf4e408c0183622e9c063ca5a2258a",
		"Uniswap V3 Pool: WETH - LIT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x864ad3830b8b721c17419b135a4709c3776fb9be",
		"Uniswap V3 Pool: KUMA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8661ae7918c0115af9e3691662f605e9c550ddc9",
		"Uniswap V3 Pool: MANA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8672aa02f8a5b6eb6bb0915ce6c65f771d705127",
		"Uniswap V2 Pair: USDC - OCT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x868b7bbbfe148516e5397f23982923686182c2d2",
		"Uniswap V3 Pool: UST - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x86e69d1ae728c9cd229f07bbf34e01bf27258354",
		"Uniswap V3 Pool: WETH - TRU",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x86f5d59a687170cf431500d7007106005cec2ee9",
		"Uniswap V2 Pair: dog - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x86fef14c27c78deaeb4349fd959caa11fc5b5d75",
		"Uniswap V2 Pair: WETH - RARI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x87023915bbbf1a99d2d63ca49b15743d1665e8fe",
		"Uniswap V2 Pair: BUILD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x87079d8e828782da98878d4bcfabb418424a7511",
		"Uniswap V2 Pair: LOYAL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8718be5da33d2a321649a174d1f27fe6fd0b6186",
		"Uniswap V2 Pair: nd4 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x872212d0f426862b44e1448ddb91ad9e8772f4a8",
		"Uniswap V2 Pair: NEMO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x873823930b78e1c1c3d9674b5cb107dd2d211bf0",
		"Uniswap V2 Pair: SPDR - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x87428a53e14d24ab19c6ca4939b4df93b8996ca9",
		"Uniswap V3 Pool: WBTC - LBTC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x874376be8231dad99aabf9ef0767b3cc054c60ee",
		"Uniswap V2 Pair: LEASH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8745df04862b854d0d7ee8ecf80ac4e9c109d547",
		"Uniswap V2 Pair: MUNCH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x874dcf6a3f2dcf2d07e88718935184999c50709d",
		"Uniswap V2 Pair: KEK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x87529624709101f2a731ea0e3e393552d491375b",
		"Uniswap V3 Pool: BAR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x877193009a881359e80df3ded7c6e055be9cc144",
		"Uniswap V2 Pair: WETH - APED",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x877f9474f02ea0b3d440bf1047971a52e79296e2",
		"Uniswap V3 Pool: RBE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x87898263b6c5babe34b4ec53f22d98430b91e371",
		"Uniswap V2 Pair: WETH - BEAN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x878fc16966cfa667eabb5ec7dbf2b5a87f8aa901",
		"Uniswap V2 Pair: yTSLA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8790891b7e9b2b6d3b2c898dae22f853949bd386",
		"Uniswap V2 Pair: WETH - MEGA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x87986ae1e99f99da1f955d16930dc8914ffbed56",
		"Uniswap V3 Pool: DAI - HOPR",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x87b01a1935cdd35588a2aff22ecba1a9ce7cebd2",
		"Uniswap V2 Pair: POND - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x87b1d1b59725209879cc5c5adeb99d8bc9eccf12",
		"Uniswap V3 Pool: CRO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x87bea39353eab877ba99c9528d2ba9b52fc84bce",
		"Uniswap V2 Pair: NEBULA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x87c9524237a19338be7dbcac01d6d208ff31136f",
		"Uniswap V2 Pair: WETH - PLU",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x87da823b6fc8eb8575a235a824690fda94674c88",
		"Uniswap V2 Pair: MIR - UST",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x87f9eaede70419f704b361cf040693a30d731dcf",
		"Uniswap V3 Pool: pepecoin - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x87febfb3ac5791034fd5ef1a615e9d9627c2665d",
		"Uniswap V2 Pair: KP3R - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x88051b0eea095007d3bef21ab287be961f3d8598",
		"Uniswap V3 Pool: OHM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x88395224c3709be9a700624bd9246459585c56b0",
		"Uniswap V3 Pool: WETH - FUND",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x884accd11c12104dbd273b97159002486489c0ca",
		"Uniswap V3 Pool: WETH - NAVI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8867f20c1c63baccec7617626254a060eeb0e61e",
		"Uniswap V2 Pair: PHA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x886fbb0f9af628b43508fb7d76d034dcfe6a6d6d",
		"Uniswap V2 Pair: WETH - HELIOS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8878df9e1a7c87dcbf6d3999d997f262c05d8c70",
		"Uniswap V2 Pair: LRC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x88977729330e55aa7111fec4967d8a561ac7c741",
		"Uniswap V3 Pool: OCC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x88ae9e1625cfcbd128b89e7f037eaaf6a7cc9666",
		"Uniswap V2 Pair: FST - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x88c095c8ba2c7a1353cf3d21e692c5d4d0f90793",
		"Uniswap V2 Pair: MATIC - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x88cb6a3b7de4d58a8b4f0f9aacbb9d6baaa03bb0",
		"Uniswap V2 Pair: MONA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x88d97d199b9ed37c29d846d00d443de980832a22",
		"Uniswap V2 Pair: UMA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x88db1dfeaedf8d08bbb7edfd92a591984a9fa4b9",
		"Uniswap V2 Pair: WETH - OPCAT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640",
		"Uniswap V3 Pool: USDC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x88ff79eb2bc5850f27315415da8685282c7610f9",
		"Uniswap V2 Pair: ESD - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x89020a8b50228210b91b11b7f8ff976dcad76e81",
		"Uniswap V2 Pair: A Birds Nest - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x891d92646f7f8074195b5a25c8a8eff0fc45c4e4",
		"Uniswap V2 Pair: FLAPPY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8927616110cf23c4e87dc98614eb9fbaae95216c",
		"Uniswap V2 Pair: MOON - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x893b0b4615d4e4325fa53d9cf55aab23d4b1311f",
		"Uniswap V3 Pool: CAH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x893e963fc72609c585f09e8cb791ce52c254d7e8",
		"Uniswap V2 Pair: MEVFree - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x893f503fac2ee1e5b78665db23f9c94017aae97d",
		"Uniswap V3 Pool: OHM - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x895324433d8026fad0531428ccfbac7a6b32fbf8",
		"Uniswap V2 Pair: WETH - RAINI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x89635f792f4cfe2499eb1bbdba99e5d162e427fa",
		"Uniswap V2 Pair: WETH - XPR",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x896dc58182c3b78598c11aa10f940257a1ce32b1",
		"Uniswap V2 Pair: ONS - DAI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8973be4402bf0a39448f419c2d64bd3591dd2299",
		"Uniswap V2 Pair: YFII - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x89751f5258baf36b8a588169c041e0ac06f53175",
		"Uniswap V2 Pair: TONE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8979a3ef9d540480342ac0f56e9d4c88807b1cba",
		"Uniswap V2 Pair: REPv2 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x898fcb7b4e3bee37ebb0ca3a3fbd08cefdc8c995",
		"Uniswap V2 Pair: DOGS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x89a13dbc89d05c4fefdb032e2a34f232ae637cfd",
		"Uniswap V2 Pair: BRIDGE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x89b1251a978e88218affdf0147ffe376291f1447",
		"Uniswap V2 Pair: SPICE - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x89eeba49e12d06a26a25f83719914f173256ce72",
		"Uniswap V3 Pool: CGPT - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8a32f49ffba88aba6eff96f45d8bd1d4b3f35c7d",
		"Aave: Lending Rate Oracle V2",
		"Aave",
		"images/contracts/aave.png"
	],
	[
		"0x8a4008961a27752e1c7178b73b9d5fa1d37fee3c",
		"Uniswap V2 Pair: GROK1.5 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8a633d6744d674c7c4f70020b6dacdd0bae48a32",
		"Uniswap V2 Pair: DC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8a6386ee4c99c7bf7f325fb6b1af9328e30a5204",
		"Uniswap V2 Pair: WETH - BOWIE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8a6d9525a0f07dcdc17fff15644342c314025a80",
		"Uniswap V2 Pair: SPECTRE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8a70b86153d2293400df87ac328aa9b0304d7e90",
		"Uniswap V2 Pair: MBX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8a7f399d59395edbb51de59268ce342a5266ad04",
		"Uniswap V2 Pair: POS32 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8a8c520b206cc3ab6fb77ffdc29b2825a37f674f",
		"Uniswap V3 Pool: WSM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8a9b8e09b24f205344f4e94fb69370e16afc6f7a",
		"Uniswap V2 Pair: WETH - FOFAR",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8aa8c67d14090fe7f6153a80d42d3b36c3a6f320",
		"Uniswap V3 Pool: WETH - wCOMAI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8ab0ff3106bf37b2db685aafd458baee2128d648",
		"Uniswap V2 Pair: RG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8",
		"Uniswap V3 Pool: USDC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8ae720a71622e824f576b4a8c03031066548a3b1",
		"Uniswap V2 Pair: RAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8aeb846614f63342fdf2db8865c930b5257f21f0",
		"Uniswap V2 Pair: :ZKT: - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8b07f791efa8cd73923279dd3b80a60da98460a2",
		"Uniswap V2 Pair: WETH - FXI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8b5778d7bce9cd3b222969ed3ee16445ea4393d6",
		"Uniswap V2 Pair: Q* - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8b6a6f5b828f086a2a9d8a3150b958e79e91a82f",
		"Uniswap V3 Pool: EDOGE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8b6ed5fa776f10787f1171bdeea4f3c40974df6e",
		"Uniswap V3 Pool: DENT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8bb2361bbb59c5956af2e4dee2b58dd202c606c1",
		"Uniswap V2 Pair: X7m105 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8bd1661da98ebdd3bd080f0be4e6d9be8ce9858c",
		"Uniswap V2 Pair: REN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8bf1ace6c89e5f207ae372ba2d2bce7467891cf0",
		"Uniswap V2 Pair: Lola - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8c07e1dfede38b1908698988b4202a87e0d7a0f7",
		"Uniswap V2 Pair: SIDUS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8c13148228765ba9e84eaf940b0416a5e349a5e7",
		"Uniswap V3 Pool: INDEX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8c13d5a6635216513ebfb4483397be14d494ad76",
		"Uniswap V2 Pair: MAGANOMICS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8c1c499b1796d7f3c2521ac37186b52de024e58c",
		"Uniswap V2 Pair: RAD - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8c54aa2a32a779e6f6fbea568ad85a19e0109c26",
		"Uniswap V3 Pool: FEI - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8c56ca4f7eb12a7c217bbe36cc427a9dcb66f590",
		"Uniswap V2 Pair: MAGIC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8c6369252e4b54c212471303c3a6e6017be9ad62",
		"Uniswap V2 Pair: NPI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8c894d91748a42fc68f681090db06720779a7347",
		"Uniswap V2 Pair: RSTK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8c9e7af17af96d00541466e1c5210873dcf38162",
		"Uniswap V2 Pair: BLAST - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8cab3e311702acb64e250926d77134fde604bd4d",
		"Uniswap V2 Pair: USDC - DHT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8cb6fdf3d57a8cc0a251bacf1a941dde75466673",
		"Uniswap V2 Pair: STGZ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8cb77ea869def8f7fdeab9e4da6cf02897bbf076",
		"Uniswap V2 Pair: AKRO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8cedb0bc185c2bc06c7cbb7fae3b6f916c48ed08",
		"Uniswap V2 Pair: SDX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8cf387195ea4fd039f596abfaed6af66e5be895b",
		"Uniswap V2 Pair: MAGAPEPE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8cf818cb22983ef9a7ec7a6ef0bccee05c441e7c",
		"Uniswap V2 Pair: FOX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8cfa4c73a9be811a36b6f1235fe07032ab62eca5",
		"Uniswap V2 Pair: APU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8d01c6e109c3db63f7aa43404157b274cf18ffd8",
		"Uniswap V2 Pair: UTU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8d132e304d697dbec65fc41fdab9cf6404e0dd1c",
		"Uniswap V3 Pool: WETH - HOP",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8d1ca95559abed542ef4402a252974221b5e1036",
		"Uniswap V2 Pair: WETH - wCELO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8d2a4cc2e2ca0f7ab011b686449dc82c3af924c7",
		"Uniswap V2 Pair: RUNE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8d4de8dc1650e73c1c238fa3b4d01ccc4c1aaee8",
		"Uniswap V2 Pair: WETH - CNFI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8d58e202016122aae65be55694dbce1b810b4072",
		"Uniswap V2 Pair: basedAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8d7a93e896784a64c17a11f29067bd5416df7d60",
		"Uniswap V2 Pair: MUSK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8d7c9fa808151d8a0cc6b11e8f15ced337586c54",
		"Uniswap V2 Pair: VSN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8d82b68f2346483d6b210383edbe27e7f5ef2365",
		"Uniswap V2 Pair: CTASK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8d9a7c5170af4249c37c489339da0fed0f7c7f5f",
		"Uniswap V2 Pair: FXF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8d9b9e25b208cac58415d915898c2ffa3a530aa1",
		"Uniswap V2 Pair: CHSB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8da0d80f5007ef1e431dd2127178d224e32c2ef4",
		"0x: Token Transfer Proxy",
		"0x"
	],
	[
		"0x8da66b6e90cac30db0dce239086cfdb2dbf66a30",
		"Uniswap V2 Pair: GNYerc20 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8dacbad3b875f95497a9497dcf177692e87a6f90",
		"Uniswap V2 Pair: NAI - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8db1b906d47dfc1d84a87fc49bd0522e285b98b9",
		"Uniswap V3 Pool: agEUR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8dbee21e8586ee356130074aaa789c33159921ca",
		"Uniswap V2 Pair: WETH - UNIBOT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8dc4b56ef4a2a1272f7e652bbdd3b6c3a84667c4",
		"Uniswap V2 Pair: NeRF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8dcba0b75c1038c4babbdc0ff3bd9a8f6979dd13",
		"Uniswap V2 Pair: WETH - DEFI5",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8de7a9540e0edb617d78ca5a7c6cc18295fd8bb9",
		"Uniswap V2 Pair: OPTIMUS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8de9c5a032463c561423387a9648c5c7bcc5bc90",
		"OpenSea: Fees",
		"OpenSea"
	],
	[
		"0x8debdc55ae250b4334f96dfdfe04e76652658c7a",
		"Uniswap V3 Pool: QRDO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8df016708a66377dae191ca6f9fff4705a3d951f",
		"Uniswap V3 Pool: NMR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8dfcb49766c0296e4373a0300b52c3637614db59",
		"Zapper.Fi: DAI LLP 100% ETH",
		"Zapper"
	],
	[
		"0x8e427a754b13fa1a165db583120daf7c3abe4019",
		"Uniswap V3 Pool: WMINIMA - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8e794abe66a4f65c0b6369ceb91af9d50d78fbfa",
		"Uniswap V3 Pool: UFO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8e83de18b38ddc22166fb5454003a573a53be4ae",
		"Uniswap V2 Pair: X - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8e8b9cf6d411b6c8dacc63c306f2691ed195d91d",
		"Zapper.Fi: LINK Unipool",
		"Zapper"
	],
	[
		"0x8ea48337c6c6677b0973437f2685d17717c0408e",
		"Uniswap V3 Pool: VEE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8ecc2244e67d0bb6a1850b1db825e25354cf881a",
		"Uniswap V3 Pool: AUDIO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8ed95d1746bf1e4dab58d8ed4724f1ef95b20db0",
		"0x: Erc20 Bridge Proxy",
		"0x"
	],
	[
		"0x8ef0d951f730f57791e2236526984f3fd1786098",
		"Uniswap V2 Pair: NIMBUS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8ef598943003e60ae3771cbaf5cc855e983b9f0d",
		"Uniswap V2 Pair: XALPHA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8ef79d6c328c25da633559c20c75f638a4863462",
		"Uniswap V2 Pair: QOM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8f0cb37cdff37e004e0088f563e5fe39e05ccc5b",
		"Uniswap V3 Pool: UNI - WBTC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8f1aa1648725d136b74048557ed54cf7a5940bdb",
		"Uniswap V2 Pair: SG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8f1b19622a888c53c8ee4f7d7b4dc8f574ff9068",
		"Uniswap V2 Pair: JESUS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8f1c582b85259f7bbdb8c093f58268131a4ecd87",
		"Uniswap V2 Pair: DGCL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8f30ba1f75ec27a014591789d117a1bb4703bff8",
		"Uniswap V2 Pair: SHAKE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8f413ad1f9517d82f9eb3a18b2a1f5ee1a68e5a0",
		"Uniswap V3 Pool: ALT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8f4d4dd3c2f957b57101d3fc030f9a39b275326f",
		"Uniswap V2 Pair: BABYDOGE2.0 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8f8120fddb7b372d40d518f93ec371455d375b7b",
		"Uniswap V2 Pair: DMAGA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8f8ef111b67c04eb1641f5ff19ee54cda062f163",
		"Uniswap V3 Pool: WBTC - PAX",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8fb8e9921922d2ffb529a95d28a0d06d275d7a59",
		"Uniswap V2 Pair: SFUND - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8fb8fdab60e86d274fa4a24ac292977d1dd3739e",
		"Uniswap V2 Pair: WETH - SIMBA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8fbd26a7cb1ab65834c5ea245aa1f1e78d03ed30",
		"Uniswap V2 Pair: WETH - BYTE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8fccb8f38295fd65bc8b6c99590ed4f5eaba56b2",
		"Uniswap V2 Pair: WETH - CWAP",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8fd3a04cb30a1fd9ffaf1548972b2e5117d0a52d",
		"Uniswap V2 Pair: OCEAN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8fe15be3aadd30f78752001e6e38b846f2d195c0",
		"Uniswap V2 Pair: NHI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8fe199d58ebbec1c9c8dc45c9961ce3ac33e939c",
		"Uniswap V3 Pool: AZUR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8fe9203c12e797cac7e901d63cacc022b68b50c3",
		"Uniswap V2 Pair: TAOBOT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8ff2fd6f94cdce7c56bb11328eb9928c9483aa66",
		"Uniswap V2 Pair: MINDS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x90695194aa10a7952df8aed6312b313c19866355",
		"Uniswap V2 Pair: WETH - XPB",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x90704ac59e7e54632b0cc9d22573aecd7eb094ad",
		"Uniswap V2 Pair: CRO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9073d1e814483e3c91e9b4d7b2a81c30b93229b1",
		"Uniswap V3 Pool: WETH - NEIRO",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9081b50bad8beefac48cc616694c26b027c559bb",
		"Uniswap V2 Pair: ORAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x908d6032b34576bbb5447c4c3e9042a77aedc17f",
		"Uniswap V2 Pair: EVEAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x90908e414d3525e33733d320798b5681508255ea",
		"Uniswap V2 Pair: Ponzio - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x90f1bdf7f72102b2724b4d2d9c12f00270e4d376",
		"Uniswap V2 Pair: UNO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x910cab35c3883002145a1b15b716bda102e9f3fb",
		"Uniswap V2 Pair: WETH - DAO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x91204649a5c9ab2cadfc2089fd22ed0fbfe170ed",
		"Uniswap V2 Pair: BXX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9123d8b233fa8e10fb51aa81486acd33166544e1",
		"Uniswap V2 Pair: WETH - UFI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x914e578f8bef2607d9c16fd4954c2c10e58dc5ad",
		"Uniswap V2 Pair: SHIB0.5 - SHIB",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x916314ff59d622dcbf1eeab91b323ea721e3696e",
		"Uniswap V2 Pair: TMNT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x919fa96e88d67499339577fa202345436bcdaf79",
		"Uniswap V3 Pool: WETH - CRV",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x91a0bac9575073b35adaa7c9b09921d71304b5c5",
		"Uniswap V2 Pair: SMUDGE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x91a5db96b660811fe38761b4bd7887efd16820cb",
		"Uniswap V2 Pair: WETH - PGT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x91ae842a5ffd8d12023116943e72a606179294f3",
		"Uniswap NonfungibleTokenPositionDescriptor",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0x91b1b853c1426c4aa78cac984c6f6dd1e80b0c4f",
		"Uniswap V2 Pair: DON - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x91c40d69e2f957adc48adeaa541ee4a099832367",
		"Uniswap V2 Pair: BAHAMAS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x920c42016602799e8448cef7369b364742624480",
		"Uniswap V2 Pair: SOTA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x921b9fc57124651642678a1865fad627e3b8eb4d",
		"Uniswap V2 Pair: WWNF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x92330d8818e8a3b50f027c819fa46031ffba2c8c",
		"Uniswap V2 Pair: WETH - FRM",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x92560c178ce069cc014138ed3c2f5221ba71f58a",
		"Uniswap V3 Pool: WETH - ENS",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x926a74c5c36adf004c87399e65f75628b0f98d2c",
		"0x: Token Registry",
		"0x"
	],
	[
		"0x9275e26bfb23b18bebb07bff45e85110f60963e9",
		"Uniswap V3 Pool: USDT - LYNK",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9276896f044cbfd9759bd04f32ad4bb081c1c1ae",
		"Uniswap V2 Pair: WETH - TPU",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x927a4aae0c92cdd84b3bb6a2034a299eccb27f7f",
		"Uniswap V2 Pair: MXX - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x927cdb4137e6fbbb2afa835fab8a405a1eb0949b",
		"Uniswap V2 Pair: YFI3 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x92935f844447abb37b38c4ffcf48d6c4fffd9232",
		"Uniswap V2 Pair: HANU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x92995d179a5528334356cb4dc5c6cbb1c068696c",
		"Uniswap V3 Pool: USDC - UST",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x929a10efda7099865dad8286aee8715078902d51",
		"Zapper.Fi: DAI Unipool",
		"Zapper"
	],
	[
		"0x92ab871abb9d567aa276b2ce58d0203d84e0181e",
		"Uniswap V3 Pool: BLUR - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x92ad5f399a278754637d84e9cba7cf405c901b95",
		"Uniswap V2 Pair: WETH - BOLT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x92adab6d8dc13dbd9052b291cfc1d07888299d65",
		"Uniswap V2 Pair: DEUS - DEA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x92b5123b675033914888d201ad348d1713304957",
		"Uniswap V2 Pair: CMSN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x92be6adb6a12da0ca607f9d87db2f9978cd6ec3e",
		"Zapper.Fi: Yearn yVault Zap In",
		"Zapper"
	],
	[
		"0x92c2fc5f306405eab0ff0958f6d85d7f8892cf4d",
		"Uniswap V2 Pair: DAI - HOPR",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x92c7b5ce4cb0e5483f3365c1449f21578ee9f21a",
		"Uniswap V3 Pool: FRAX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x92cc4300b9fd36242900bca782b2e9e000bd5099",
		"Uniswap V2 Pair: ROUTE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x92dbb765f587f6e16c07c799e0db6a1f3af498b8",
		"Uniswap V2 Pair: KTN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x92f0b57e3814e4bd74ef6a6fd6d825db522ccfe2",
		"Uniswap V3 Pool: SOUL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x92f46887ee6681d1c7bb11cd2b8d464be4cefcd8",
		"Uniswap V2 Pair: WETH - SS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x92ffbf968a1fbd766f94dcb495f2b39cc2bca7e3",
		"Uniswap V3 Pool: WETH - CAW",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x92ffe72ee8a6a3df28d18d6ca01a8e17adf608f0",
		"Uniswap V2 Pair: RYOSHI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9314941c11d6dee1d7bf93113eb74d4718949f3b",
		"Uniswap V2 Pair: WETH - HOKK",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9328e200c18fa77916a373ffd7dcbb0872fa6c60",
		"Uniswap V2 Pair: WETH - DFV",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x93361cc247fd5cb52de3600bfbc268df10da9c93",
		"Uniswap V2 Pair: $AKC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9339227db67f747114c929b26b81fe7974436b94",
		"Uniswap V2 Pair: WETH - YLD",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x933fbbb7dc0f683e523190ea150131a61f62c4da",
		"Uniswap V3 Pool: SAFEREUM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9345c3e50f31f18a68c5bd210cce6f2083ec6943",
		"Uniswap V2 Pair: SMILEY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9346c20186d1794101b8517177a1b15c49c9ff9b",
		"Uniswap V2 Pair: yyDAI+yUSDC+yUSDT+yTUSD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9359c87b38dd25192c5f2b07b351ac91c90e6ca7",
		"Uniswap V3 Pool: DPI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x937e882083a0aaf58d7fcf566de8e5d990e882a9",
		"Uniswap V2 Pair: kitty - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x939b4ac904066af7513cd2002c271aa3f7a71976",
		"Uniswap V2 Pair: MEMES - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x93c212b82c41dc99ba8ff5b21e03946da567ae6f",
		"Uniswap V3 Pool: SHIT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x93c63cab70225568de9f56559c63a0d2de30bc1b",
		"Uniswap V3 Pool: GOO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x93d2707e73b4f096c274929bb2e4f631c7e61502",
		"Uniswap V2 Pair: JUL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x93f768b3daa607370280cb0f69375adca14e5fd5",
		"Uniswap V2 Pair: WETH - MONKE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x94053a31d5db6cada45fb560b77213b0ed237ea2",
		"Uniswap V2 Pair: HUSBY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9410cf01dcdccdb9b56e285b39cea375e5e90883",
		"Uniswap V3 Pool: XI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9426a0e93344c3e787a19022b2dac08e9786b8a6",
		"Uniswap V2 Pair: PC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x94293bf0193f9acf3762b7440126f379eb70cbfd",
		"Uniswap V2 Pair: WETH - DUCKER",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9437ad40056ca3ec2fc1efe41885ad4b6ac46061",
		"Uniswap V3 Pool: RNG - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x94391eecd76d9cb35013d7f263b64921e31842c8",
		"Uniswap V3 Pool: XOR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9445bd19767f73dcae6f2de90e6cd31192f62589",
		"Uniswap V3 Pool: USDC - CRV",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x944b3baca1c4a28425e5c0554ef68d6666b45405",
		"Uniswap V2 Pair: XX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9468e2c401e13522e684e60005e388f7c395de92",
		"Uniswap V2 Pair: WETH - NOVA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x94749e8ae30bc2aa5e127f868409e871f310c10b",
		"Uniswap V2 Pair: TOR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9476f8fccefcee23481f9fa5bb5d8bdf1f145f5c",
		"Uniswap V2 Pair: LP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9479b62fd1cb36f8fed1eebb1bb373d238d08216",
		"Uniswap V2 Pair: PPBLZ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x948b54a93f5ad1df6b8bff6dc249d99ca2eca052",
		"Uniswap V3 Pool: FET - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x94981f69f7483af3ae218cbfe65233cc3c60d93a",
		"Uniswap V3 Pool: RBN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x94ae6d2390680ac6e6ee6069be42067d6ad72e2a",
		"Uniswap V2 Pair: CARDS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x94b0a3d511b6ecdb17ebf877278ab030acb0a878",
		"Uniswap V2 Pair: FEI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x94b4ba66da4faa4fe09e17c0a8810d2afee70163",
		"Uniswap V3 Pool: FNK - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x94ca4065ae4af445b7b12449c16dd93559ea08cd",
		"Uniswap V2 Pair: STRUMP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x94de6945a51bd3a734de3ddb197864adef6e05f4",
		"Uniswap V2 Pair: WETH - PKN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x94e4b2e24523cf9b3e631a6943c346df9687c723",
		"Uniswap V3 Pool: SHIB - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x94e8d722a2302042db7f034cd969cee28504b660",
		"Uniswap V2 Pair: BLOCK - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9507f5c18b0178bea743727ff00f1619f97e2bfb",
		"Uniswap V3 Pool: KATA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x950a24b86aca5c625fc1d88d2c78eadf8ef769dc",
		"Uniswap V2 Pair: NEON - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x950bf51bb0d3753d6858749d9a02ace560446f99",
		"Uniswap V2 Pair: LUNCH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9553c7f43c0ffe1f20bdf5cb3ad23484850983a9",
		"Uniswap V2 Pair: TIDAL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9572e4c0c7834f39b5b8dff95f211d79f92d7f23",
		"Uniswap V2 Pair: SENATE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9583268553de82effe4ef63e01980aabd7cb5e27",
		"Uniswap V2 Pair: LAEEB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x958db6e53d1c2bc18daa0ec86a05eb2244dd4e94",
		"Uniswap V2 Pair: TACO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x959873fb4fc11825fba83c80c4c632db1e936e15",
		"Uniswap V2 Pair: SpacePi - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x959c7d5706ac0b5a29f506a1019ba7f2a1c70c70",
		"Uniswap V3 Pool: SHI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x95a45a87dd4d3a1803039072f37e075f37b23d75",
		"Uniswap V3 Pool: VIRTUAL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x95a5543111343ab2a66a06bc663a1170acf050b9",
		"Uniswap V2 Pair: AUSCM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x95ad5d38ad6bb17500e9a57bfeb6569b36a94ea5",
		"Uniswap V3 Pool: $MONG - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x95d9e85a31ed4cfba8421488d295a25bc76b473f",
		"Uniswap V2 Pair: WETH - SEED",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x95dbb3c7546f22bce375900abfdd64a4e5bd73d6",
		"Uniswap V3 Pool: EUROC - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x95e6f48254609a6ee006f7d493c8e5fb97094cef",
		"0x: ERC20 Proxy",
		"0x"
	],
	[
		"0x95f2610d0475d72e75bfcbd8bb7ecafe1f351b8d",
		"Uniswap V2 Pair: BRETT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x96040f16f98657b07e6e4326bbf5f5160fcab336",
		"Uniswap V2 Pair: WETH - Inari",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x960d228bb345fe116ba4cba4761aab24a5fa7213",
		"Uniswap V2 Pair: CHART - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x961eb1645355297b5ee6e6c60ba9e72505e550f8",
		"Uniswap V2 Pair: BREE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x961ec3bb28c9e98a040c4bded38917aa96b791be",
		"Uniswap V3 Pool: WETH - MAGA",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9628105808292699874f20d77d50a09bc26850c5",
		"Uniswap V3 Pool: ALPH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x966053ca4fca049173eb1f27e4cb168ccb794534",
		"Uniswap V2 Pair: VLT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x966ea83cf3170a309184bb742398c925249e407e",
		"Uniswap V2 Pair: LPL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x96aa22baedc5a605357e0b9ae20ab6b10a472e03",
		"Uniswap V2 Pair: VOLT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x96b0837489d046a4f5aa9ac2fc9e086bd14bac1e",
		"Uniswap V3 Pool: RND - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x96b1071dec3158bd1c0bfc8aecf5ee969f9ca3db",
		"Uniswap V2 Pair: ELX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x96e83035f05618fbdd77281d0389e4d95a0da47f",
		"Uniswap V2 Pair: WETH - Gamer",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x970660683ecf9fdef9537be27f5376aaae0b89eb",
		"Uniswap V2 Pair: WETH - PEEZY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x97402249515994cc0d22092d3375033ad0ea438a",
		"Zapper.Fi: General UniPool",
		"Zapper"
	],
	[
		"0x974bfcc7b25f979950b58ce0cf8d9c621a9c771e",
		"Uniswap V2 Pair: KONO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x97524f602706cdb64f9dfa71909ace06e98200b6",
		"Uniswap V2 Pair: BADGER - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x975c822e26a514e7a1b75be587aefc738a73eee7",
		"Uniswap V3 Pool: AXL - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x976a910cabc55103c9250dab86f6dcacf914b851",
		"Uniswap V2 Pair: PARMA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9776a214272ab452f8c88c7576dcd0c6ffbfee14",
		"Uniswap V2 Pair: GOF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x977c5fcf7a552d38adcde4f41025956855497c6d",
		"Uniswap V2 Pair: WETH - шайлушай",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x979a6e410760b83bdc6dcddd0e904998ea575197",
		"Uniswap V2 Pair: USHIBA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x97a5a0b2d7ed3accb7fd6404a1f5ca29320905af",
		"Uniswap V3 Pool: TORN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x97ad11fef35c266f1f6dd157e7eecfeca7e172c1",
		"Uniswap V2 Pair: WETH - COLON",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x97be09f2523b39b835da9ea3857cfa1d3c660cbb",
		"Uniswap V2 Pair: vUSD - VOW",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x97c4adc5d28a86f9470c70dd91dc6cc2f20d2d4d",
		"Uniswap V2 Pair: FRAX - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x97e1fcb93ae7267dbafad23f7b9afaa08264cfd8",
		"Uniswap V2 Pair: UFO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x97e3feacf3be8398bf3e83f38c0835b9f75839a3",
		"Uniswap V2 Pair: ForeverUp - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x97e58528d0c7bf0d0089f52be1dec3565d84c46a",
		"Uniswap V2 Pair: CIRUS - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x97e7d56a0408570ba1a7852de36350f7713906ec",
		"Uniswap V3 Pool: DAI - FRAX",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x97f5e9c85d888d0cb5c1a90275a5586562bef9fb",
		"Uniswap V2 Pair: YEAH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x97feadcf4dd8d58f35be886e3d62be3bc2b1e7c1",
		"Uniswap V2 Pair: BABYSHIB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9816f26f43c4c02df0daae1a0ba6a4dcd30b8ab7",
		"Uniswap V2 Pair: M2 - wPE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9832263a82b729f947aca4842cb53a3109a46e5b",
		"Uniswap V2 Pair: MND - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x983b92ea1f0a20844466f3e4bb988c1de145293e",
		"Uniswap V3 Pool: FLT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x983dd5dc5a99ec27bb850b865ca99407b38722bf",
		"Zapper.Fi: Curve Zap Out",
		"Zapper"
	],
	[
		"0x98409d8ca9629fbe01ab1b914ebf304175e384c8",
		"Uniswap V3 Pool: WETH - VRA",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x984a3eab3cf2fc2b4ca6e4a3768624a8272fe2a3",
		"Uniswap V2 Pair: WETH - C3",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9886202afd85a4ded704deb370dee516ee558661",
		"Uniswap V2 Pair: BabyDoge - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9887507bea38d49b04ce06052ed32339264fef2c",
		"Uniswap V3 Pool: TRG - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x989dd57d45ce4c3917df50f87b66e7fa8bc4c87e",
		"Uniswap V2 Pair: WETH - PERPS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x989ebc2b7e1e16f1ececd9a4fad931618c12ce36",
		"Uniswap V2 Pair: DOGEFI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x98bb850ff2e55a886a281e37324b72ce4d51e02d",
		"Uniswap V2 Pair: EVILPEPE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x98c9275898621d65b2a84bcda2266098060d1cd4",
		"Uniswap V2 Pair: LIT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x98d266c51fc3c0a0b5a285c481d40b689d18e6f1",
		"Uniswap V2 Pair: HUSL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x98d677887af8a699be38ef6276f4cd84aca29d74",
		"Uniswap V2 Pair: GM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x98e562a87c5243eef333e43cb1834223f526c434",
		"Zapper.Fi: Harvest Zap In",
		"Zapper"
	],
	[
		"0x98f90bfc702ec548d21b5a566a4df6853e2890d4",
		"Uniswap V2 Pair: AKRO - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x991069b2af1b59faf30675ca9bf6d458004f53aa",
		"Uniswap V2 Pair: PEPEDOGE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x99132b53ab44694eeb372e87bced3929e4ab8456",
		"Uniswap V3 Pool: AGIX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9928e4046d7c6513326ccea028cd3e7a91c7590a",
		"Uniswap V2 Pair: FEI - TRIBE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9973bb0fe5f8df5de730776df09e946c74254fb3",
		"Uniswap V2 Pair: BAO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x99920e0ba2b8aead4d10de769b28ecc29693c011",
		"Uniswap V2 Pair: CPOOL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x99986e1b28267338af96b81201f5ed4d84f2d852",
		"Uniswap V2 Pair: YIELD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x99a65698566e757610d5aa2372f6a0c7df92ae9f",
		"Uniswap V2 Pair: SHEPE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x99a6880748ceb61c3d9b6d4cd49edb59f79f405d",
		"Uniswap V3 Pool: AGIX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x99ac8ca7087fa4a2a1fb6357269965a2014abc35",
		"Uniswap V3 Pool: WBTC - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x99b1db3318aa3040f336fb65c55400e164ddcd7f",
		"Uniswap V2 Pair: OM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x99b975590364dfdea0ed8550d0d862c78e07c43d",
		"Uniswap V2 Pair: YUNA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x99c59000f5a76c54c4fd7d82720c045bdcf1450d",
		"Uniswap V2 Pair: OxN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x99c7550be72f05ec31c446cd536f8a29c89fdb77",
		"Uniswap V3 Pool: MATIC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x99d915da0f77c92dba4ef1b9e88dc8f590bb509a",
		"Uniswap V2 Pair: SAFE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x99da141e37fe579a1205b787d52b67c99f49dc9c",
		"Uniswap V2 Pair: PIBA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x99da87405226e924ebda19474c41cf221dbb8a12",
		"Uniswap V2 Pair: BULL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x99dfde431b40321a35deb6aeb55cf338ddd6eccd",
		"Uniswap V2 Pair: UFT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x99f6de6cedb3e430d8d1f1897fb92c68758f896b",
		"Uniswap V3 Pool: REFUND - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9a134d5156b372b865b1f149a99aa2997188e70d",
		"Uniswap V3 Pool: COPIUM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9a4d5580497abde06df106b5cd2d2ecbed7b09c9",
		"Uniswap V2 Pair: TANGO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9a4df45a496c7f03297584ff2d060a0d38b1d838",
		"Uniswap V2 Pair: SEC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9a599caa30032e55f05f38772c6d0ed36afdde07",
		"Uniswap V3 Pool: RST - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9a632cd9cb44f9383bf6f3117056c2455b30a6e0",
		"Uniswap V2 Pair: DENT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9a741cc15028b32b159f173f3ae6f88ac2b6921b",
		"Uniswap V2 Pair: MOJO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9a772018fbd77fcd2d25657e5c547baff3fd7d16",
		"Uniswap V3 Pool: WBTC - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9a834b70c07c81a9fcd6f22e842bf002fbffbe4d",
		"Uniswap V3 Pool: FRAX - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9a84a1852bc7fb608794960960adb04666a12b41",
		"Uniswap V2 Pair: TRX - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9aa30dc05bbb1a632a1ade5a3ef04eb42ed086a0",
		"Uniswap V2 Pair: PISS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9ab0905b39505d8682b58a57a41c4100e9c62ab6",
		"Uniswap V3 Pool: FWB - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9ac681f68a589cc3763bad9ce43be3380696b136",
		"Uniswap V3 Pool: MM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9acc449b3d582daa61df507b7da2ad051a9a8afa",
		"Uniswap V2 Pair: PYR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9ad7a41e1a58dde1eaa3ae64f683bd3d9d6dafb9",
		"Uniswap V2 Pair: MCP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9af0f334f9f451ce9e650278e56fec212f35cec1",
		"Uniswap V2 Pair: KOO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9af2bfb7117d24eb97961ce6f747cd0c80482606",
		"Uniswap V2 Pair: PEAS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9af99712d45a972a23eabee205342f6055ada474",
		"Uniswap V3 Pool: BOB - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9afe7a4e6c6aa2f928b71a512b2e6644d7a7e559",
		"Uniswap V2 Pair: CATALORIAN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9b1956a09c486ed2d8a4c771c221e7a94ffd7755",
		"Uniswap V3 Pool: wBRGE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9b20e07394cd1fd767a302b502bb49d4da76bcab",
		"Uniswap V2 Pair: PLANET - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9b3423373e6e786c9ac367120533abe4ee398373",
		"Uniswap V3 Pool: DOG - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9b36fd01b733be4b362cbac328eb8923d41b5451",
		"Uniswap V2 Pair: Trump - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9b3df8eae6e1ed1b931086852860d3c6375d7ae6",
		"Uniswap V2 Pair: MLT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9b533f1ceaa5ceb7e5b8994ef16499e47a66312d",
		"Uniswap V2 Pair: OXT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9b577e849b128ee1a69144b218e809b8bb98c35d",
		"Uniswap V2 Pair: NAOS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9b7dad79fc16106b47a3dab791f389c167e15eb0",
		"Uniswap V2 Pair: OCEAN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9b814233894cd227f561b78cc65891aa55c62ad2",
		"OpenSea: Royalties Distributor",
		"OpenSea"
	],
	[
		"0x9b8d2834ba1b3c31688e084ce9792baa0ca2e2f7",
		"Uniswap V2 Pair: WETH - PERL",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9b909d64866c677903af0481b0ec9b472078db34",
		"Uniswap V2 Pair: GTA6 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9bd730ddcfe6b5b9ecba1cf66e153adaa807e238",
		"Uniswap V3 Pool: GRPFT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9bd8844a562978567ae10b5b05a9b68fe908de41",
		"Uniswap V2 Pair: YUNO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9bf92f4e176c2aa3c439375ae49522a4367651c4",
		"Uniswap V2 Pair: WETH - BPD",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9c04560df8dff626555317ccc2c336b9c24fda41",
		"Uniswap V2 Pair: BXBT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9c143da2f408042137362c154484fa57dcd24c30",
		"Uniswap V2 Pair: HACHI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9c18a2f9545112ab2fcbdd228536562406a53232",
		"Uniswap V2 Pair: PEAK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9c192844d3ce23dd10ad8dba6acf272f6a1b89f5",
		"Uniswap V2 Pair: ROCK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9c2b19dbdfad3f283c0b96c5546d91a275778d91",
		"Uniswap V2 Pair: WETH - MCC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9c415c5672b2e494cdf5a3b5e6cd48f8a196276e",
		"Uniswap V2 Pair: PINEOWL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9c448695b8ad99ff7a513e6a62b9eaaf534f069f",
		"Uniswap V2 Pair: GROKX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9c4cc862f51b1ba90485de3502aa058ca4331f32",
		"Uniswap V2 Pair: CELL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9c4fe5ffd9a9fc5678cfbd93aa2d4fd684b67c4c",
		"Uniswap V2 Pair: PAXG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9c57618bfcdfae4ce8e49226ca22a7837de64a2d",
		"Zapper.Fi: yVault V1 Zap In/Out",
		"Zapper"
	],
	[
		"0x9c5999653f44672336c2ef0a0008587fa8b9957e",
		"Uniswap V2 Pair: HAKKA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9c5de3ad97b95a0da09fd0de84c347db450cd75c",
		"Uniswap V2 Pair: MARSH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9c62a8fcc76a77938c82b5a76a68aadd6806d107",
		"Uniswap V2 Pair: GDAG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9c6c852a56de59a59f7a4527724a2a0a87f7d223",
		"Uniswap V2 Pair: FERA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9c84f58bb51fabd18698efe95f5bab4f33e96e8f",
		"Uniswap V2 Pair: LFT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9c9c9843c119704aef237ee9939fc2406d708136",
		"Uniswap V2 Pair: LUFFY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9ca8aef2372c705d6848fdda3c1267a7f51267c1",
		"Uniswap V2 Pair: UDT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9cb236c126e5148a2ec4f2651b98445ee51a79d1",
		"Uniswap V2 Pair: FLASH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9cb2a4e500e842514f4f68fe17ab4dfa13487ef1",
		"Uniswap V2 Pair: WETH - PEEZY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9cb91e5451d29c84b51ffd40df0b724b639bf841",
		"Uniswap V3 Pool: ARKM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9cbfb60a09a9a33a10312da0f39977cbdb7fde23",
		"Uniswap V2 Pair: SAITAMA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9cc0cffcd643315ff561fbaed462a611775a10ed",
		"Uniswap V2 Pair: NOODLE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9ccd72368c13a92ea738bd885317c2ba5b667fad",
		"Uniswap V2 Pair: HEAL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9cd1e0793ced49f5e592d77328967fffc6ea7516",
		"Uniswap V3 Pool: LOVE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9cd7403ac4856071581e1f5a298317d9a72a19cf",
		"Uniswap V2 Pair: LTO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9ce721bf2e5ba447fb50ff9dca12490654573d92",
		"Uniswap V2 Pair: X - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9ce78c17ac2da9fc9e28c6f65644199f876dcd41",
		"Uniswap V2 Pair: SHROOMS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9ceb11093a26e4e6fb4ef1e6f50599a37d02f515",
		"Uniswap V2 Pair: TRENDAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9cf1190d71f7c5fcaf2033ffa4b017b1b0591efd",
		"Uniswap V2 Pair: MELLOW - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9d02425b6d9b2513e2a9c68f7598e9783c2c8c89",
		"Uniswap V2 Pair: BEAR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9d07dcc7775f190ba6cb5766c19a65ccc5f2e9c8",
		"Uniswap V2 Pair: WETH - SNS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9d2713fa2f387ed1284a4176e7841253b4da2a71",
		"Uniswap V3 Pool: FTX Token - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9d2dfd7791a81c60e59c8afa143d46c24efa8123",
		"Uniswap V2 Pair: SPRM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9d40dd9bc95d0a8632521589de4c353f709e1ac3",
		"Uniswap V2 Pair: WETH - WLF",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9d4b552c992ee3b863f3b51e95e46ecf38c21429",
		"Uniswap V2 Pair: WETH - UWL",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9d549079669d382e9556ef2f4e8a7e1a616dae49",
		"Uniswap V2 Pair: JEJUDOGE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9d640080af7c81911d87632a7d09cc4ab6b133ac",
		"Uniswap V2 Pair: USDC - MFI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9d77a98501902047612030e114b61b0252b27985",
		"Uniswap V3 Pool: WETH - VOLT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9d9681d71142049594020bd863d34d9f48d9df58",
		"Uniswap V2 Pair: WETH - DOE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9db640e18390d2408c71e9927d8518c79d5569c6",
		"Uniswap V2 Pair: PLOT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9db9e0e53058c89e5b94e29621a205198648425b",
		"Uniswap V3 Pool: WBTC - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9dc696f1067a6b9929986283f6d316be9c9198fd",
		"Uniswap V2 Pair: WETH - BONDLY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9dd361cf608bcacdc21effd2273c60afe2df3637",
		"Uniswap V2 Pair: SOPH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9ddd23c1ec9c69bc833008d4d2f86f6aa491bc91",
		"Uniswap V2 Pair: BUNNY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9dded59ee1ad63a13681011dcf3ef5a785e841b2",
		"Uniswap V2 Pair: KAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9def9511fec79f83afcbffe4776b1d817dc775ae",
		"Uniswap V2 Pair: ANT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9e0905249ceefffb9605e034b534544684a58be6",
		"Uniswap V3 Pool: HEX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9e0fc414e8d5c45b0890c32ab9329ac90b3ab534",
		"Uniswap V3 Pool: PEIPEI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9e30365b9bdd263da0a81e6d3873cd6f18c3653a",
		"Uniswap V2 Pair: MOROS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9e40edeb1981d0e63493ce2323cf382bef8ee8d4",
		"Uniswap V2 Pair: CHOMP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9e53fad7cb9343333809a049c322ebc1f72ef544",
		"Uniswap V2 Pair: WETH - Inu",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9e588733b77abd51879f391fce7beb6a1de7bdbd",
		"Uniswap V3 Pool: WETH - RAINI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9e5f2b740e52c239da457109bcced1f2bb40da5b",
		"Uniswap V2 Pair: Hold - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9e7065ce7e029d6a6d4936091547921a8008c4d3",
		"Uniswap V2 Pair: OCD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9e7809c21ba130c1a51c112928ea6474d9a9ae3c",
		"Uniswap V3 Pool: BNB - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9e98deac1a416c9ce3c892bd8eef586f1291ca35",
		"Uniswap V2 Pair: BEL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9eb51eb22813ee077e7ef4739a68d8e0b8e67cc6",
		"Uniswap V2 Pair: BAZED - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9ec5149472db6acffb9023a47d37b4ecbcf68a4b",
		"Uniswap V2 Pair: ELONONE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9ec9367b8c4dd45ec8e7b800b1f719251053ad60",
		"Uniswap V2 Pair: 0x0 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9ee5f9bf3c2619a443d1cc228aa67b6a9776f961",
		"Uniswap V3 Pool: Nvir - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9eea9a6a05913aab46bd0884a72fb549abe22bb0",
		"Uniswap V2 Pair: OOF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9f0f0fede68bb21c46b629c183b0720039f9841e",
		"Uniswap V2 Pair: HELLSING - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9f11faf42a16d986f7bfd6338f41db880da6df39",
		"Uniswap V2 Pair: KIF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9f178e86e42ddf2379cb3d2acf9ed67a1ed2550a",
		"Uniswap V3 Pool: UNI - LINK",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9f2ebe69a86c079f3d4c3b94a11932b676b72f74",
		"Uniswap V3 Pool: BabyDoge - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9f41a3ac0c16a9feb5400751a34c609211839cfa",
		"Uniswap V3 Pool: MPL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9f4aa9b4661f0c55b61fc12b1944f006a71c773f",
		"Uniswap V2 Pair: NCT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9f624b25991b99d7b14d6740a9d581dd77980808",
		"Uniswap V2 Pair: ARPA - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9f6facb42177f5af680f9f17cdf750bc7cf55973",
		"Uniswap V2 Pair: TOAD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9f703e1819707d55d79a9bbf0bdaaebbec579c13",
		"Uniswap V2 Pair: WETH - UNDB",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9f8512d2657d192e59dbab41f8502864aaaafa4a",
		"Uniswap V2 Pair: DROPS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9f9373b2b5fe5f6b32f171191946b0be30e0bd30",
		"Uniswap V2 Pair: VPAD - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9faf7ad8711f6b87cfcf39c235b0a03ef4bdd7c2",
		"Uniswap V2 Pair: WASSIE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9febc984504356225405e26833608b17719c82ae",
		"Uniswap V3 Pool: 1INCH - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9ff68f61ca5eb0c6606dc517a9d44001e564bb66",
		"Uniswap V2 Pair: BOTTO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa00d47b4b304792eb07b09233467b690db847c91",
		"Uniswap V2 Pair: IMX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa050f7adc241afa59ad5f343eaf4faf5f30a4cdb",
		"Uniswap V3 Pool: WETH - NEXT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa06591252908576a0f64a8560ec0c8051782377c",
		"Uniswap V3 Pool: PNDC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa07674a55c6278244cc2113fbc9d1769b6dfca48",
		"Uniswap V2 Pair: PROPHET - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa0787e87b10c9b1b88d75915ac8ec5608ac6d054",
		"Uniswap V2 Pair: NII - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa08d8ddf045f583e2cb3ef2ea99900ed60897d0b",
		"Uniswap V3 Pool: WETH - SDAX",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa09329c6003c9a5402102e226417738ee22cf1f2",
		"0x: Order Validator",
		"0x"
	],
	[
		"0xa0abda1f980e03d7eadb78aed8fc1f2dd0fe83dd",
		"Uniswap V2 Pair: BUSD - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa0b30e46f6aeb8f5a849241d703254bb4a719d92",
		"Uniswap V3 Pool: OGV - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa0e97bd80bbb011dd244a1017ccae117d412beca",
		"Uniswap V2 Pair: YFDOT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa0f37f8711daec900b4c47d15902c15d6362c6d7",
		"Uniswap V2 Pair: WETH - KPER",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa109209a2380fd4454b0364c4689f6de18ad18cc",
		"Uniswap V3 Pool: USDT - MCADE",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa12b7a78a31854d2e9ee8fbc92e262aaf4fcd4f1",
		"Uniswap V2 Pair: CNTR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa1444ac5b8ac4f20f748558fe4e848087f528e00",
		"Uniswap V2 Pair: DEXTF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa14dfbaa23ee8e8b69878381f8fd1d0bc502c043",
		"Uniswap V2 Pair: MKR - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa14e051af256157ce093aa54cb3b2f775358f559",
		"Uniswap V2 Pair: XCAD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa150643d92e06317fb499eaef4f6d89b7107452d",
		"Uniswap V2 Pair: WETH - MUSH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa1858c7238dc38b3b8e9d84cf44d394b0c7e22f5",
		"Uniswap V2 Pair: MXX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa18d5eceb5fe22ee3cc228fb9c32b65adcedfa13",
		"Uniswap V2 Pair: WETH - CZ",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa19bbaa46d3301e948861fb76483879dc71524dc",
		"Uniswap V2 Pair: WETH - POW",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa19f4ebe4cbb3c9b57c16eb4dfc7a52d46a5e891",
		"Uniswap V3 Pool: D2T - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa1af3bb298673f46cf1299efc7e73e7b2e2d20b8",
		"Uniswap V2 Pair: WETH - TSUKA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa1b4b8ee671123b49cd8a129b3c1c5b7944e5601",
		"Uniswap V3 Pool: BEND - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa1bf0e900fb272089c9fd299ea14bfccb1d1c2c0",
		"Uniswap V2 Pair: ANDY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa1ccd2a8fd5f1ccd5fc5ede255f4d53ec8004489",
		"Uniswap V2 Pair: TRUMP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa1db2fc9b2ceaf3cdf41fd11ffcb38404eae3906",
		"Uniswap V2 Pair: CPOOL - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa2074f8857972ce0049ec8348ac2e75e7a32b821",
		"Uniswap V2 Pair: CMERGE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa20ad630cee74bc834aa9b8fcb432c5c02710479",
		"Uniswap V3 Pool: REVV - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
		"Uniswap V2 Pair: LINK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa21ed0af81d7cdaebd06d1150c166821cfcd64ff",
		"Uniswap V3 Pool: 1INCH - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa22a11d16187c2833b6067c1a666e6fa9317836f",
		"Uniswap V2 Pair: CHONK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa22c67e4bf6fb2b6cb68d58a281a18d5ac59a14e",
		"Uniswap V2 Pair: PEEPA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa2376a5304cfcd238f52db5677cba3e0559f7f09",
		"Uniswap V2 Pair: Wally - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa24501a910e7930148445bcf1fb601a4304e4551",
		"Uniswap V2 Pair: VPP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa26e80e7dea86279c6d778d702cc413e6cffa777",
		"0x: Staking Proxy",
		"0x"
	],
	[
		"0xa28c4c450aa9b4f7f52f4ed8072d72e8d38fcb3c",
		"Uniswap V3 Pool: WETH - GPT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa295c1301e063728d733f9fb2155448fff9c70b7",
		"Uniswap V3 Pool: eXRD - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa29fe6ef9592b5d408cca961d0fb9b1faf497d6d",
		"Uniswap V2 Pair: WETH - DEXT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa2acfaaaa01c4999385104787c1f24a9cf95b725",
		"Zapper.Fi: Balancer Zap in V2.5",
		"Zapper"
	],
	[
		"0xa2b04f8133fc25887a436812eae384e32a8a84f2",
		"Uniswap V2 Pair: WETH - COTI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa2caade2b5d21216836b81dd2d81bd3743ef7988",
		"Uniswap V2 Pair: GEC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa2ff3d4ffaf8c67cfc71a19ea437bcc2a9893d16",
		"Uniswap V3 Pool: TKING - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa305f3aad48e285c002a2dbadbbba58fea10ad45",
		"Uniswap V3 Pool: CHEQ - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa323fc62c71b210e54171887445d7fca569d8430",
		"Uniswap V2 Pair: WETH - VISION",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa324a33a6bc402de1d81b7a501bdf8ac7bf845ab",
		"Uniswap V3 Pool: WETH - BOSON",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa32523371390b0cc4e11f6bb236ecf4c2cdea101",
		"Uniswap V2 Pair: RING - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa344855388c9f2760e998eb2207b58de6e7d0360",
		"Uniswap V3 Pool: ALPH - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa34f0d0314db32f41e1194816d56d55d1f7ca7b5",
		"Uniswap V3 Pool: PRQ - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa3509a16bbfc5992eb01cc861b615ccd8e937da8",
		"Uniswap V2 Pair: WETH - GTC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa38400a9b62e383170500096271ee3f727de2489",
		"Uniswap V2 Pair: WGMI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa392a2746a790217198d5cf0ff64f6f6b205fa63",
		"Uniswap V2 Pair: WETH - echoes",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa3a0f67a1eb55988c3e3f1c36e4133d39a6312b3",
		"Uniswap V2 Pair: MIND - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa3a9a863ed908aa95cb17e1781aa97e6693bf604",
		"Uniswap V3 Pool: RSR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa3ac9844514b96bb502627ca9dceb57c4be289e3",
		"0x: Forwarder 2",
		"0x"
	],
	[
		"0xa3b79b78678c15eec77389b380988b0229da1876",
		"Uniswap V2 Pair: WHITE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa3bc069ce794103e68974b5dc38074fb112eea71",
		"Uniswap V3 Pool: PSYOP - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa3c61c2f81519953112b78a603353f4360a33a72",
		"Uniswap V3 Pool: WETH - ZK",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa3d588a914c7534356a006ae3c1d8ae19c9694e1",
		"Uniswap V2 Pair: WETH - PDEX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa3da4f2968cee5bc0b291233707ea686533cce93",
		"Uniswap V2 Pair: DCARD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa3dec62cba3dbe03ab068b80739edf9cd11c52b4",
		"Uniswap V2 Pair: ZAPEX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa3f558aebaecaf0e11ca4b2199cc5ed341edfd74",
		"Uniswap V3 Pool: LDO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa40bb1c47f6dd27142a2bd7c93bfa98db9d1f5c5",
		"Uniswap V2 Pair: MASK - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa424817985051ccda51eff2dc7998b5d68079215",
		"Uniswap V3 Pool: WETH - POINTS",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa424cea71c4aea3d11877240b2f221c027c0e0be",
		"Uniswap V3 Pool: ALEPH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa43fe16908251ee70ef74718545e4fe6c5ccec9f",
		"Uniswap V2 Pair: PEPE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa440baf25ac41b26a6ea40f864542b54a76ce530",
		"Uniswap V2 Pair: MYOBU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa469d741ffe634154cd2f94dff4b8be907940340",
		"Uniswap V2 Pair: WETH - WARP",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa478c2975ab1ea89e8196811f51a7b7ade33eb11",
		"Uniswap V2 Pair: DAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa479115c7037b763e386cf47dc1113e4ff2c545e",
		"Uniswap V2 Pair: PETRON - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa48454b9e06ccb8f92c4b4ffe358d0c2310bf9b6",
		"Uniswap V2 Pair: NIOCTIB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa499b5e6af1d554316bcd96947940de0c3b5836e",
		"Uniswap V3 Pool: STRDY - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa4e0faa58465a2d369aa21b3e42d43374c6f9613",
		"Uniswap V3 Pool: rETH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa4f35395910d7a4ff110669ced4b70227a166877",
		"Uniswap V2 Pair: MRCH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa50ba011c48153de246e5192c8f9258a2ba79ca9",
		"Aave: Price Oracle V2",
		"Aave",
		"images/contracts/aave.png"
	],
	[
		"0xa51d59352086fd54c099be9fb59618740a59399b",
		"Uniswap V2 Pair: IBIT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa51f018a6c9815cd6756d2b2ddf1bac9d003149d",
		"Uniswap V2 Pair: WETH - WHITE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa53d37f96c8fd23a21d5123e5af247c5e4dd80c0",
		"Uniswap V3 Pool: SCHAP - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa5409ec958c83c3f309868babaca7c86dcb077c1",
		"OpenSea: Registry",
		"OpenSea"
	],
	[
		"0xa5644e29708357803b5a882d272c41cc0df92b34",
		"Uniswap V3 Migrator",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa56b474ca8147bfd243e07801485debf72e98239",
		"Uniswap V2 Pair: X - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa58967aa9d385e2a9004209ddb5d30d65fb2572c",
		"Uniswap V2 Pair: PRIME - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa58e81fe9b61b5c3fe2afd33cf304c454abfc7cb",
		"ENS: Reverse Registrar",
		"ENS",
		"images/contracts/ENS.jpg",
		"[{\"inputs\":[{\"internalType\":\"contract ENS\",\"name\":\"ensAddr\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"controller\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"ControllerChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"contract NameResolver\",\"name\":\"resolver\",\"type\":\"address\"}],\"name\":\"DefaultResolverChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"ReverseClaimed\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"claim\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"resolver\",\"type\":\"address\"}],\"name\":\"claimForAddr\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"resolver\",\"type\":\"address\"}],\"name\":\"claimWithResolver\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"controllers\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"defaultResolver\",\"outputs\":[{\"internalType\":\"contract NameResolver\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"ens\",\"outputs\":[{\"internalType\":\"contract ENS\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"node\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"pure\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"controller\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"enabled\",\"type\":\"bool\"}],\"name\":\"setController\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"resolver\",\"type\":\"address\"}],\"name\":\"setDefaultResolver\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"setName\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"resolver\",\"type\":\"address\"},{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"}],\"name\":\"setNameForAddr\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]"
	],
	[
		"0xa5904961f61bae7c4dd8478077556c91bf291cfd",
		"Uniswap V2 Pair: YAMv2 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa5ae094bc5fe1fe8b74656cd0f6afb3536bb186b",
		"Uniswap V2 Pair: BOLT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa5d739430718451756a7c97254939cbdd25a83ec",
		"Uniswap V2 Pair: GINNAN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa5e79baee540f000ef6f23d067cd3ac22c7d9fe6",
		"Uniswap V2 Pair: CEL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa5e9c917b4b821e4e0a5bbefce078ab6540d6b5e",
		"Uniswap V2 Pair: STARL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa5ef2a6bbe8852bd6fd2ef6ab9bb45081a6f531c",
		"Uniswap V3 Pool: PLSB - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa5f0cf205af1f5b02c00ba7ab834824c01855b54",
		"Uniswap V2 Pair: OPUL - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa626eb9cc7dec00703586414d0811e1ba2021443",
		"Uniswap V2 Pair: USDC - DOE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa62d78770770d7d70196b0ec7b6978d6e24da3a3",
		"Uniswap V2 Pair: WETH - HOUSE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa63d86cf8aa268c72ce0a967842200c494638707",
		"Uniswap V2 Pair: ClosedAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa660973303d2da6107d91af5e91a8fd16bc33c39",
		"Uniswap V2 Pair: PP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa66cdad5facbcbf74d9b60dcc8034c2a485e63ff",
		"Uniswap V2 Pair: WETH - RVF",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa67ceebf094b32ff3313f9a63150c74792a1acdc",
		"Uniswap V2 Pair: MONKEYS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa6890ac41e3a99a427bef68398bf06119fb5e211",
		"Uniswap V2 Pair: ZCN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa6baaed2053058a3c8f11e0c7a9716304454b09e",
		"0x: Uniswap Bridge",
		"0x"
	],
	[
		"0xa6be7f7c6c454b364cda446ea39be9e5e4369de8",
		"Uniswap V2 Pair: ELF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa6c6b56c70abf14ed63edaffb45bb82a64454a77",
		"Uniswap V2 Pair: RBIF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa6cc3c2531fdaa6ae1a3ca84c2855806728693e8",
		"Uniswap V3 Pool: LINK - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa6f3ef841d371a82ca757fad08efc0dee2f1f5e2",
		"Uniswap V2 Pair: CHI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa70d458a4d9bc0e6571565faee18a48da5c0d593",
		"Uniswap V2 Pair: BAL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa71d014ffc0d2aff34d1fe1672dcdef6ec00af66",
		"Uniswap V2 Pair: MTLX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa7480aafa8ad2af3ce24ac6853f960ae6ac7f0c4",
		"Uniswap V2 Pair: ATOR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa75b1f296cdc470a0b8155f3e656e8430dc87510",
		"Uniswap V2 Pair: Babydoge2.0 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa7600c4fbddb57e44018bee74a5f6b636cb68352",
		"Uniswap V3 Pool: CPOOL - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa76a9baa3cc9dacd86852bea6c4ae8c63e70c4a4",
		"Uniswap V2 Pair: WETH - DEFROGS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa77c3e572a8e7f1848686e2a3c37c253bc4081dc",
		"Uniswap V2 Pair: WETH - TOM",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa7ad4ce6c21d9e875f1067cd377256326b483002",
		"Uniswap V2 Pair: WETH - SANSHU",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa7af8228cba573bce6c1214501b3cf8db9f8a8fe",
		"Uniswap V2 Pair: SAITOKI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa7cc68376682ff7e861ac4e616486407f944e672",
		"Uniswap V2 Pair: WETH - AIDI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa7d707118c02dcd2bea94ff05664db51363c47bd",
		"Uniswap V2 Pair: WETH - METRIC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa7f098116e0ec8087022a22608aae0a61dcf62ae",
		"Uniswap V2 Pair: PALM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa7f72a1ec0ab189998a3eec8b886e6360aff39da",
		"Uniswap V3 Pool: sILV - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa7fd8ff8f4cada298286d3006ee8f9c11e2ff84e",
		"Uniswap V2 Pair: wPOKT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa80108e9e31f9ecf044f5f99b5d7879508770fcd",
		"Uniswap V2 Pair: FYZ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa80838d2bb3d6ebaed1978fa23b38f91775d8378",
		"Uniswap V3 Pool: ZERO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa80964c5bbd1a0e95777094420555fead1a26c1e",
		"Uniswap V3 Pool: DAI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa84181f223a042949e9040e42b44c50021802db6",
		"Uniswap V3 Pool: PEPE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa86aca6d7c393c06dcdc30473ea3d1b05c358dff",
		"Uniswap V2 Pair: NMT - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa8854439c8dae6b56e2c72da6b4b1ae098795caa",
		"Uniswap V2 Pair: FERRET - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa886576fed10723401386697aadf777e1d4bca05",
		"Uniswap V2 Pair: WETH - GAINS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa89abe11bd3ef4cf68a5004ba99b9fda52d5e8fc",
		"Uniswap V2 Pair: WETH - ORO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa8a837e2bf0c37fef5c495951a0dfc33aaead57a",
		"Uniswap V2 Pair: LINQ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa8bc3bfb9a7bfd77b19503a9c79fe2421573c760",
		"Uniswap V2 Pair: WETH - CATGPT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa8bef252afac1d6263f22c1e4f33f3777ed30bd6",
		"Uniswap V2 Pair: ENOL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa8dfebeb90f8e148b6a3c611758ea63703ab02c1",
		"Uniswap V2 Pair: POM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa8eeef45b04c58a7bfe1c5819afc21b20c06db9c",
		"Uniswap V2 Pair: ORION - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa8ef4df1577be1a1b4e884eb67aed494f39dc36d",
		"Uniswap V2 Pair: ACR - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa924e5636f89d67e8ba792cfeee15bbf820ff18e",
		"Uniswap V2 Pair: FAC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa92d2e98fcc91585c5ecee548451da261e5314da",
		"Uniswap V2 Pair: BZN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa932dab125bcf1f5e2536e106409ea79847bb72a",
		"Uniswap V2 Pair: POCHI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa961ba3daa48376d3f6d7d6420be34c3a11d232e",
		"Uniswap V3 Pool: BANANA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa96a5275d79e8e6facc2476707ada70f907ea305",
		"Uniswap V2 Pair: Shibtoro - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa986f2a12d85c44429f574ba50c0e21052b18ba1",
		"Uniswap V2 Pair: XYO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa9966025816c490dffe18b5c58818ec14e0ce5da",
		"Uniswap V3 Pool: GENE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa9aee8a4c36bd67badc755e53d7241f8ec2b7795",
		"Uniswap V2 Pair: JASON - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa9bd7eef0c7affbdbdae92105712e9ff8b06ed49",
		"Uniswap V2 Pair: BMI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa9c5b677f0ed59d39d3f441dcb5daf0d6e276b5b",
		"Uniswap V3 Pool: TOWN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaa1656b7d4629476fa4cf76ccfbc01a4653bac71",
		"Uniswap V2 Pair: BEEP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaa298a459ca6dc7c4b11b4ac09d82e6270a3b234",
		"Uniswap V2 Pair: CHIRO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaa665ad2c5f99c9861c1030ef85e48ba07059c2a",
		"Uniswap V2 Pair: EVERMOON - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaa683fd3ae3033e0f3ffba14619e5371057740b7",
		"Uniswap V3 Pool: MAZZE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaa934346e4f74bc23e62153ee964df8b826694ef",
		"Uniswap V2 Pair: MM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaa9b647f42858f2db441f0aa75843a8e7fd5aff2",
		"Uniswap V2 Pair: PEPE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaaa97f71eb0e312760ddab130f842948542eea25",
		"Uniswap V2 Pair: BOM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaaaa50ab9c0eb7ca6e797cfe05d9805d61687e10",
		"Uniswap V3 Pool: AAA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaab4f6e6a526aab060cba36d6b0f748a279d1a66",
		"Uniswap V2 Pair: WETH - DARKMUSK",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaacd36c877408824ee59540b0c093804d7e9a7d9",
		"Uniswap V2 Pair: MRDN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaad22f5543fcdaa694b68f94be177b561836ae57",
		"Uniswap V2 Pair: sUSD - $BASED",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaadb00551312a3c2a8b46597a39ef1105afb2c08",
		"Uniswap V2 Pair: AXN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaae5f80bac0c7fa0cad6c2481771a3b17af21455",
		"Uniswap V2 Pair: WETH - SALE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaae63df9a86f9a682507c922db38fae5e777a606",
		"Uniswap V3 Pool: USDC - SWEAT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaae64809138f576b0b50f1d898dd99055327c2d3",
		"Uniswap V2 Pair: MRI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xab293dce330b92aa52bc2a7cd3816edaa75f890b",
		"Uniswap V2 Pair: WTF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xab2d2f5bc36620a57ec4bb60d6a7df2a847deab5",
		"Uniswap V2 Pair: xFUND - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xab3b031512a08c85d52c6e7c4f50170f01bf19e8",
		"Uniswap V2 Pair: WETH - UDO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xab3f65c91bad49df8ebb4f15fc1f11655c2a78f7",
		"Uniswap V2 Pair: BENANCE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xab3f9bf1d81ddb224a2014e98b238638824bcf20",
		"Uniswap V2 Pair: LEND - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xab659dee3030602c1af8c29d146facd4aed6ec85",
		"Uniswap V2 Pair: GHST - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xab9bef8242c2b97772ae239a5d71c60496a06334",
		"Uniswap V2 Pair: SNTVT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xab9f4f8deef776deceb47b5b97aad55515b64ebc",
		"Uniswap V3 Pool: XYO - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaba0bf2de7842c419da6ca99f1a1e2af9469ae58",
		"Uniswap V2 Pair: HAWKTUAH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaba7af37dbdc67b7463917e483b55340d153928a",
		"Uniswap V2 Pair: BABYDOGE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xabd50310f2a409257576ff4337ec0ab664ae8cdc",
		"Uniswap V2 Pair: MUMU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xac084df0969bd1e9bb8a2079cf317a30476210f6",
		"Uniswap V2 Pair: WETH - TRUMP ",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xac0fe6c0b239eedcc12bc3e997e5492b04cc61c3",
		"Uniswap V2 Pair: xETH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xac11dbed5e2520216f427c39994334b7c4c10b65",
		"Uniswap V2 Pair: CREED - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xac317d14738a454ff20b191ba3504aa97173045b",
		"Uniswap V2 Pair: SXP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xac336936f2f0c2ab0c8dece3a027445323e8a244",
		"Uniswap V2 Pair: PUSSY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xac350eefccdae050614070e5040e17759cebb3e9",
		"Uniswap V2 Pair: PRIA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xac4b3dacb91461209ae9d41ec517c2b9cb1b7daf",
		"Uniswap V3 Pool: APE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xac4fd96fcf729390a3c8044422a529028ec36751",
		"Uniswap V3 Pool: WETH - STRK",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xac5a2c404ebba22a869998089ac7893ff4e1f0a7",
		"Uniswap V3 Pool: LINK - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xac63436b092b944cadea9243f9aff315421d4fee",
		"Uniswap V3 Pool: LOYAL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xac6776d1c8d455ad282c76eb4c2ade2b07170104",
		"Uniswap V2 Pair: KIBA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xac86903cdda380f20a06cc8a2dea7749f1558c68",
		"Uniswap V2 Pair: WETH - RAIL",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xac8833b0da01b8f2ca53f549f13b5790066a842d",
		"Uniswap V2 Pair: DFD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xac9ae0eb05daee73bd964eaa0153b762d6455667",
		"Uniswap V2 Pair: VEIL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xac9fbdbe486f8023606b932a747bc476011b5071",
		"Uniswap V2 Pair: CREDI - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xacbf3c973eeec20c573ec930ce31198afb4ad0d5",
		"Uniswap V2 Pair: REVV - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xacfc50ec5fe0fd039e83380b8ab343b77a49704f",
		"Uniswap V2 Pair: WSM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xad096a3045da9f663a89c172dff16361c43b0dec",
		"Uniswap V2 Pair: DKWON - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xad19b7e2b1dac6cea46b18eec731981c08e6f08e",
		"Uniswap V2 Pair: ADEL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xad1b370187aefff639442d7596fcf9a0c0661b17",
		"Uniswap V2 Pair: WETH - COPE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xad3be64871002d38ef46543a93b4debbee5b435e",
		"Uniswap V2 Pair: DUROV - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xad3e3cc56cffa42235b326090176891292dfca20",
		"Uniswap V2 Pair: WETH - YFMS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xad4010bd5579f62fb40730cef5cde27d620c0383",
		"Uniswap V2 Pair: WETH - YOURAI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xad4e4954b2f22525f5c9d7e7182fff9cf251d0f7",
		"Uniswap V2 Pair: MUSKITO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xad6d2f2cb7bf2c55c7493fd650d3a66a4c72c483",
		"Uniswap V3 Pool: PAPER - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xad7e7d9c3f7f4f42befa6540e84a8d2be659c2a6",
		"Uniswap V2 Pair: BONK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xad98387471583140d30a3cae22438089f79caa7c",
		"Uniswap V2 Pair: ZOMBIE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xad9ef19e289dcbc9ab27b83d2df53cdeff60f02d",
		"Uniswap V3 Pool: SAVM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xadafb7ecc4fa0794c7a895da0a53b153871e59b6",
		"Uniswap V2 Pair: arte - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xadb0c5509a10bdc800dca56bdb037602577be89f",
		"Uniswap V2 Pair: MUSUBI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xadcd4fde447c10df243c01828a6298958e69a3f6",
		"Zapper.Fi: Curve Zap in ETH or ERC20",
		"Zapper"
	],
	[
		"0xadd2959589b8925844a3afac767a5ae6dfcf5ede",
		"Uniswap V2 Pair: MBGA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaddcfb76e511530cc112166d6116d405fb743512",
		"Uniswap V2 Pair: WETH - SDAX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaddd24a001243e6d446ed8d088c82aeff84073a3",
		"Uniswap V3 Pool: AGRS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xadf75a4268073b2464baf31723f9e23228bb6ef1",
		"Uniswap V2 Pair: WETH - 💎🙌",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xae2a25cbdb19d0dc0dddd1d2f6b08a6e48c4a9a9",
		"Uniswap V3 Pool: AXL - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xae2cf46ad3e81605dac3665e2a847ea2799e29e6",
		"Uniswap V2 Pair: TOM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xae30f13675a1b58c313663f066c43e6190457a76",
		"Uniswap V2 Pair: WETH - CAT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xae461ca67b15dc8dc81ce7615e0320da1a9ab8d5",
		"Uniswap V2 Pair: DAI - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xae614a7a56cb79c04df2aeba6f5dab80a39ca78e",
		"Uniswap V3 Pool: BAT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xae70a92c5d1a07c0640ce6f12c77e4a666dcd9fe",
		"Uniswap V2 Pair: 𝕏Ð - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xae750560b09ad1f5246f3b279b3767afd1d79160",
		"Uniswap V3 Pool: PEAS - DAI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xae790e2a4785298cb18150f3dc4a60bd81fcd274",
		"Uniswap V3 Pool: 1CAT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xae7c579ec3cce8ccdf3386cf8130b57e46b6f070",
		"Uniswap V2 Pair: WETH - SHFT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xae851769593ac6048d36bc123700649827659a82",
		"Uniswap V2 Pair: EHIVE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xae8b9d75a75a8b7c5cc5deb51fa916ac49147dad",
		"Uniswap V2 Pair: DEPO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xae91b3bc45379290d9e8ff8a633f34ad3101086b",
		"Uniswap V3 Pool: WETH - NFD",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xae95aebf655e9b40c7e0d262198b970cd25f28af",
		"Uniswap V2 Pair: rHEGIC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaeca06cd3948e8c28a50f0520202c59f639f4e77",
		"Uniswap V2 Pair: WETH - QR",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaeccd58001d52b4b931fd6fd5bf87d4f911100b7",
		"Zapper.Fi: Uniswap V1 - Uniswap V1 Pool Pipe",
		"Zapper"
	],
	[
		"0xaed171a3369e54aff2601dc92a8d15bbc7e9fa32",
		"Uniswap V2 Pair: LIFE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaedb115872b041c1e0feab1fb58d766d356ba986",
		"Uniswap V2 Pair: TOKU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaef16913b6c50ebcf627a394921f306985fc8604",
		"Uniswap V2 Pair: STORJ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaf06e7c7170eb22d52eb09b5ec5d1373c34164e9",
		"Uniswap V2 Pair: POOH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaf0e926ccb8de48731d9b09870a86d74041562c0",
		"Uniswap V2 Pair: SAFE2 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaf31fd9c3b0350424bf96e551d2d1264d8466205",
		"Uniswap V2 Pair: WETH - PUSH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaf3e33c8971be5b753145228d29f1e0197ec7bb6",
		"Uniswap V2 Pair: WOLF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaf4fa67ec6457af4eda887fb70d75fe4c6349376",
		"Uniswap V2 Pair: SCALEY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaf605008f17911e77278f2f6e7db808a18304c8d",
		"Uniswap V2 Pair: WETH - oBTC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaf81e930620eb55a9a6927c4b2afcb4d61040c32",
		"Uniswap V3 Pool: TONCOIN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaf8c5a2cb542d11735f6e7a94d869cc99e4736e9",
		"Uniswap V2 Pair: WETH - BLUI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaf9060d26826964c1b9329582e23b4adbf7679e3",
		"Uniswap V3 Pool: WETH - JPEG",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaf95d3a7a25f831dc2b9a6704554435957b51ec2",
		"Uniswap V2 Pair: WETH - VAI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaf996125e98b5804c00ffdb4f7ff386307c99a00",
		"Uniswap V2 Pair: XFI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xafaaf2d8faa2772924f7c6e671d5e62f2a736bf9",
		"Uniswap V3 Pool: ELON - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xafc2e35116c4b44bd523757d147f34c9ff5031d4",
		"Uniswap V2 Pair: SOAPS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xafefd2124eefb2eb634d3790d7ce0133c9732186",
		"Uniswap V2 Pair: ITO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaff1025438da93bd86427f2f9f7d06088f720a8d",
		"Uniswap V3 Pool: CELR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb003df4b243f938132e8cadbeb237abc5a889fb4",
		"Uniswap V3 Pool: WETH - EUL",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb011e4eb4111ef00b620a5ed195836dcd69db1ff",
		"Uniswap V3 Pool: BONE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb011eeaab8bf0c6de75510128da95498e4b7e67f",
		"Uniswap V2 Pair: APE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb01cc2918234ec8e3fd649df395837ddc9b88353",
		"Uniswap V2 Pair: SPIKE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb02045ad2ca16e8f4675088140e369260bb280c8",
		"Uniswap V3 Pool: KAS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb0288f2b136f741b05ede945cc9c821749f4420b",
		"Uniswap V3 Pool: WEWE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb039f945deca4b4ec44c28083f91f37e6d2a27a6",
		"Uniswap V2 Pair: PBX - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb03f87e577c4fe4685cf2c88a8473414bb1d04f1",
		"Uniswap V3 Pool: FX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb042557907113327c1a1731555a94f3a321716b7",
		"Uniswap V2 Pair: HONK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb062fcbb48154fd385f104b38a2f9f3ffd82ffe0",
		"Uniswap V2 Pair: DNT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb06a5f6615f7ce50478a5c57c651bf5ead0578b0",
		"Uniswap V2 Pair: WETH - eQUAD",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb06e7ed37cfa8f0f2888355dd1913e45412798c5",
		"Uniswap V3 Pool: USDC - GRT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb079d6be3faf5771e354586dbc47d0a3d37c34fb",
		"Uniswap V2 Pair: DFI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb07fe2f407f971125d4eb1977f8acee8846c7324",
		"Uniswap V3 Pool: APE - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb0a85d466b58562456c7bc9cf0f83ccac593461a",
		"Uniswap V2 Pair: WIF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb0cfc8233c3e40a44d1da530b33a387640089f8d",
		"Uniswap V2 Pair: FLAPPY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb0f4a77bde7fee134265307c5cc19abff0ba409b",
		"Uniswap V3 Pool: CHZ - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb0fa501e1f97d32133e742acbc499cf4d8840772",
		"Uniswap V2 Pair: SBTC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb0fb35cc576034b01bed6f4d0333b1bd3859615c",
		"Uniswap V2 Pair: buidl - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb10d5acee2233a30f03adf6f425249113395d7a8",
		"Uniswap V2 Pair: KAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb112f9b950695c71a7e3dedd00472df07f4393bb",
		"Uniswap V2 Pair: WETH - BOPPY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb11d15da84a206670beba4e8172c69e653516e80",
		"Uniswap V3 Pool: FLOKI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb13201b48b1e61593df055576964d0b3aab66ea3",
		"Uniswap V2 Pair: LQTY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb1432d4a6b6089d4cd198cad4cd7d5b44a0b7111",
		"Uniswap V2 Pair: eMax - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb145ba877ee7802a32c0bf2b5a49b4f662005000",
		"Uniswap V2 Pair: BLOX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb154256024041e3011c8024874e698b69a2081b3",
		"Uniswap V2 Pair: NCT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb1562400feaa849c363127bb847693cca05c1080",
		"Uniswap V2 Pair: FOUR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb1608e16609a7ff3ac5b0da49a0539bb0c3c3d9d",
		"Uniswap V3 Pool: EWTB - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb1637be0173330664adecb343faf112ca837da06",
		"Uniswap V2 Pair: 🐟 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb1914469141ebb6e244e75cee3f35d43bf6b85e5",
		"Uniswap V3 Pool: TRAC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb1984fe56028a9dcbc8891d882c5ad247d608a81",
		"Uniswap V2 Pair: VANCE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb19e10d56752c80d6307529a0b6bbe529924dba2",
		"Uniswap V2 Pair: BYTE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb1a824a6caf1f789aa7ca1072e36e83cd62ba3ee",
		"Uniswap V2 Pair: LAYER - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb1b537b7272ba1eda0086e2f480adca72c0b511c",
		"Uniswap V2 Pair: TENS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb1bbeea2da2905e6b0a30203aef55c399c53d042",
		"Uniswap V2 Pair: UMB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb1c33de7a914f4d9ba293a055822cbc6e662a698",
		"Uniswap V2 Pair: FLASH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb20bd5d04be54f870d5c0d3ca85d82b34b836405",
		"Uniswap V2 Pair: DAI - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb20f3f78253da4bd8f4a0fb5f19da23ae9cdbe69",
		"Uniswap V2 Pair: XDB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb21b9e4e4502e3bd3d1625c3a77fd229ae59ad42",
		"Uniswap V2 Pair: SCOOBY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb227eb108f570fc6ec9b82598c469b93e5e0a7c2",
		"Uniswap V2 Pair: RKR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb27308f9f90d607463bb33ea1bebb41c27ce5ab6",
		"Uniswap Quoter",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb27c012b36e79decb305fd1e512ba90eb035a6fa",
		"Uniswap V2 Pair: WAIF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb27de0ba2abfbfdf15667a939f041b52118af5ba",
		"Uniswap V2 Pair: UBT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb2843c7133289541086fa41673850dbf61cac6db",
		"Uniswap V2 Pair: WETH - CAPY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb2db69d6986fbf38de781ba606923f8ae8d7f437",
		"Uniswap V3 Pool: WETH - FPIS",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb2f8b3bad4325c3c62f294da45fc144b1b180cc2",
		"Uniswap V3 Pool: WETH - ATRI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb2fb04a19a4fa77eb946f6a51ae9e2641475ee65",
		"Uniswap V2 Pair: WETH - ROCKI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb3014e8171155e90aa2d9ca995db069a89aabe06",
		"Uniswap V2 Pair: FUKU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb30456a293ad3266aa517867fe776493eb12da2a",
		"Uniswap V2 Pair: SIDC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb328eb3175b5440dff5b158205a9906a97c37c51",
		"Uniswap V2 Pair: PERX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb32fcfff9616deec20dd44d664f490dee7fe2c7a",
		"Uniswap V3 Pool: PANDA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb34daaf8832432e5619efcf8262a4f5ecfd1384a",
		"Uniswap V2 Pair: WETH - KINE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb3623c6cc04ffd4aeb7a19ef8720787e31c982c2",
		"Uniswap V2 Pair: DUA - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb36ec83d844c0579ec2493f10b2087e96bb65460",
		"Uniswap V2 Pair: ZIG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb388f880ed2b4ee377da6d5a6af4f33161787526",
		"Uniswap V3 Pool: PORT3 - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb38be7fd90669abcdfb314dbddf6143aa88d3110",
		"Uniswap V2 Pair: WETH - GTH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb38cb6d6e5b413beef2140f335048e436a0f10fb",
		"Uniswap V2 Pair: PYRO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb38cc8c5f6eebc03a38515e2aad580e0b80d67ea",
		"Uniswap V3 Pool: ALEPH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb3d994978d2bc50d2ce74c45fcd923e7c9c06730",
		"Uniswap V2 Pair: WETH - NTX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb3e325b62c0c3222c1adc16f530d5dba7a01f7ba",
		"Uniswap V2 Pair: BCS - DAI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb3f39c3108cd45e1112d8bc9ae3cd5a110a7cebd",
		"Uniswap V2 Pair: FREE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb3f7ccdb38dc51dca399f4c27a8344276bcd855a",
		"Uniswap V2 Pair: Archa - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb404057ee4b1d7359ca5a57ac1c020b74c23e56b",
		"Uniswap V3 Pool: FTX Token - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb41e4e74c8bef3bae8b30fce3ebb822f824cd0df",
		"Uniswap V2 Pair: DODO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb42cf248b2e1a309183762ad4a050836e6303fac",
		"Uniswap V2 Pair: SENT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb42eede6ad429b38da26817aeb163f216e34b7f8",
		"Uniswap V3 Pool: WETH - VEGA",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb43542e6b7c209f7da4b579792f67a1844546ce8",
		"Uniswap V2 Pair: TIDAL - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb454552a72d1b969ba45b000f558a5302d79543e",
		"Uniswap V2 Pair: WETH - TESINU",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb48e4a607b6eadebbe84c832e19e368d81424270",
		"Uniswap V2 Pair: PEPER - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb49159afeb54f8922b0a82a5d58bd4728b8c20bb",
		"Uniswap V2 Pair: XRP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb4a0a46d3042a739ec76fd67a3f1b99cc12ac1d9",
		"Uniswap V2 Pair: WETH - ERC20",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb4d0d9df2738abe81b87b66c80851292492d1404",
		"Uniswap V2 Pair: TUSD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb4e16d0168e52d35cacd2c6185b44281ec28c9dc",
		"Uniswap V2 Pair: USDC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb4edfec7aa5588786901c63a8338e4b37611b2af",
		"Uniswap V2 Pair: dKUMA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb52c5f5b96a428ff13cc5e60247b73cb4e13b2d9",
		"Uniswap V2 Pair: FNK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb53c1a33016b2dc2ff3653530bff1848a515c8c5",
		"Aave: Lending Pool Provider V2",
		"Aave",
		"images/contracts/aave.png"
	],
	[
		"0xb54ce26f2e30f64c5b684b141311ce138ab5e00e",
		"Uniswap V2 Pair: FINE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb55daf7ba9c69b533e354f1d1f8e0b292a102622",
		"Uniswap V2 Pair: metameme - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb573d1708161b82b5f7a77c1035fa724725b42c7",
		"Uniswap V3 Pool: RIVUS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb57cfe32dbf5227d9c9a03ef3d2e9e53cb4524b0",
		"Uniswap V3 Pool: WETH - OLM",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb58645ac31c5c40f03ea4cc44885ffeff1d74851",
		"Uniswap V2 Pair: CIBS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb5a33a25fad5362bfb0f5f568f56689fcebd5ad9",
		"Uniswap V2 Pair: DUCK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb5bc14180239253628d6700c9f3ec5125aa9cd9d",
		"Uniswap V3 Pool: WAS - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb5bd39fc0c57d902271ba6c5cd89c1510a37c0dd",
		"Uniswap V2 Pair: POLC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb5f790a03b7559312d9e738df5056a4b4c8459f4",
		"Uniswap V2 Pair: GLM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb6045683f1ae149eb3308b32e517b1bacbe93853",
		"Uniswap V2 Pair: YAWN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb62a74f8be38cef3b00455b9989637349d4a1bc3",
		"Uniswap V2 Pair: WETH - UBX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb63c2f390803119a98ac63a371bcc657e366df0f",
		"Uniswap V2 Pair: XPR - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb6909b960dbbe7392d405429eb2b3649752b4838",
		"Uniswap V2 Pair: BAT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb699853be792ce85a4fab963e772648f6dd28315",
		"Uniswap V2 Pair: RBC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb69ea54d402bd4589ab98dec68bfe29d586b6906",
		"Uniswap V2 Pair: WETH - SNOW",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb6b0c651c37ec4ca81c0a128420e02001a57fac2",
		"Uniswap V2 Pair: VEC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb6bffe05bd13d867c8ca8cecb3725c6405f202ba",
		"Uniswap V2 Pair: Gravitas - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb6c8e5f00117136571d260bfb1baff62ddfd9960",
		"Uniswap V2 Pair: HOLY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb6ca52c7916ad7960c12dc489fd93e5af7ca257f",
		"Uniswap V2 Pair: eMax - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb7379da1e9aa5943fbdb7b8163e7f8bf36a3f8bc",
		"Uniswap V2 Pair: Viral - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb7426bfd2abf64428fa82a71b0d44b056ffcc286",
		"Uniswap V2 Pair: WETH - TROLL",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb753548f6e010e7e680ba186f9ca1bdab2e90cf2",
		"Uniswap ProxyAdmin",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb767c20d9773adce84d0f0a5bc64e2f114ad3076",
		"Uniswap V2 Pair: wOMI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb76e7fc28e3c78455c61d6c4d630e0f1e121d254",
		"Uniswap V3 Pool: USDC - wCOMAI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb777d386a9f6bf14ff85d92b27dc70209141e787",
		"Uniswap V2 Pair: AQTIS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb77c2290c5e5acd8ca4778876b3caae593741bab",
		"Uniswap V2 Pair: REDDIT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb780f89d37864492a81c7b0053879486d259f16c",
		"Uniswap V2 Pair: TWEETY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb784ced6994c928170b417bbd052a096c6fb17e2",
		"Uniswap V2 Pair: NMR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb7864c708ad58af75c756c26b1ba155bfa0e2307",
		"Uniswap V2 Pair: WETH - YFIG",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb78985dedea2c4ff759fc53d5ce4d6d868f4d953",
		"Uniswap V2 Pair: FUD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb7a71c2e31920019962cb62aeea1dbf502905b81",
		"Uniswap V3 Pool: DZHV - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb7a86c60d4c295516010a6a868f042ade96bfbf5",
		"Uniswap V2 Pair: SCANS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb7cf00ad11335750d7261f3d095a8d73b1f90dcf",
		"Uniswap V3 Pool: WETH - BLLB",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb7e746ff79cb76e2ec804698061aed9ca6c922ea",
		"Uniswap V3 Pool: ALT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb7ee81a278a7580f74866c99efc92e1ca88082c3",
		"Uniswap V2 Pair: PLA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb7f27e5ebf97d88f37e16eddecc59523361a60e1",
		"Uniswap V3 Pool: KIZUNA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb7fbc32c6df7a26f05bf6985b116f4a96cffcc27",
		"Uniswap V2 Pair: DODECA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb8172076ceb35b6701f96eb9088818efc010bd44",
		"Uniswap V2 Pair: SAKE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb8207f870ce0083334675b2efca8e3ba7cad68de",
		"Uniswap V2 Pair: wSIENNA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb82d251b7e92832dccb7f3c6f03ae20f2d7ee597",
		"Uniswap V3 Pool: SOS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb870e6879c525def56b81846e52aad45739ab394",
		"Uniswap V2 Pair: YFIP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb87b65dacc6171b3ca8c4a934601d0fcb6c61049",
		"Uniswap V2 Pair: WETH - ENS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb88267cf74f0f0d1a1e1522eac26402b06a8981a",
		"Uniswap V2 Pair: WETH - D三G三N",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb89ed43f45d1f870be815c7b53368a1cc5184474",
		"Uniswap V2 Pair: MRPH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb8a1a865e4405281311c5bc0f90c240498472d3e",
		"Uniswap V2 Pair: NOIA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb8b7c440c36e31686bf1e1bdca76a52e730190fc",
		"Uniswap V2 Pair: NGL - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb8b84ce0cade916988bd129eafd7934ade5fa6a9",
		"Uniswap V2 Pair: HAKKA - MKR",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb8c05b7ca698f7cfd9b8a08f177e0ac5f2696bf9",
		"Uniswap V3 Pool: erowan - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb8ec4eb95d104753747bc689e6e997a637245bbd",
		"Uniswap V2 Pair: SHIH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb9062896ec3a615a4e4444df183f0531a77218ae",
		"Aave: Pool Admin V2",
		"Aave",
		"images/contracts/aave.png"
	],
	[
		"0xb92fe026bd8f5539079c06f4e44f88515e7304c9",
		"Uniswap V2 Pair: LSD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb93cc05334093c6b3b8bfd29933bb8d5c031cabc",
		"Uniswap V2 Pair: YAM - yyDAI+yUSDC+yUSDT+yTUSD",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb94f0dfd1b54af0fc8dd0997a8ddde59bad47dfe",
		"Uniswap V2 Pair: PIE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb961e90b10608cff90a76557a2e02e007fe2b062",
		"Uniswap V2 Pair: MIC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb96cb1920f0cca03081c56baabeb9608ea9805fc",
		"Uniswap V2 Pair: YMAX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb9a507f407c4a78026e55ce54de8aedc5d687f0a",
		"Uniswap V2 Pair: WETH - DELTA rLP",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb9acb51416557ec55804d44eb3b11a819f11dd72",
		"Uniswap V2 Pair: LEAD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb9b752f7f4a4680eeb327ffe728f46666763a796",
		"Uniswap V2 Pair: BZRX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb9b824fda6c0c1afe105d892c24ca21264c77f0a",
		"Uniswap V2 Pair: MPEPE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb9c4a5522a2f8ba9e2ff7063df8c02ed443337a3",
		"Uniswap V3 Pool: WETH - ENS",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb9ebf49f3c12a3f9aa18f4ff0383c0ec29750070",
		"Uniswap V3 Pool: WETH - FP",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb9ed555632c308f0f44489500045a9afba73473c",
		"Uniswap V3 Pool: PORK - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xba0c053250785a76cd85e789436b0208c1bf7c86",
		"Uniswap V3 Pool: DEFI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xba22211b73d239308f5af6e4f0dbd7112f652472",
		"Uniswap V2 Pair: WETH - Dejitaru Shirudo",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xba470432de1f7cc406137379debb0192284a3031",
		"Uniswap V2 Pair: WETH - MGCHI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xba65016890709dbc9491ca7bf5de395b8441dc8b",
		"Uniswap V2 Pair: RSR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xba6bd00cf4d8a6b182ebd762660151fd34c675aa",
		"Uniswap V2 Pair: WETH - SAFEEARTH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xba7872534a6c9097d805d8bee97e030f4e372e54",
		"Uniswap V2 Pair: DYP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xba8080b0b09181e09bca0612b22b9475d8171055",
		"Uniswap V3 Pool: WBNB - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xba88774e109185cd09db1518b17fab72e9122103",
		"Uniswap V2 Pair: WETH - FLONA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xba8eb224b656681b2b8cce9c3fc920d98594675b",
		"Uniswap V3 Pool: RSR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xba9d017919b477a5a6fc6385d16d91f434515543",
		"Uniswap V2 Pair: GAMBIT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbaa48ef52fe0cf3a2682c1247b18d4274a988132",
		"Uniswap V2 Pair: HORD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbaafed32ec23b8e206820181318c0750cd194a5c",
		"Uniswap V2 Pair: TATSU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbab761277f52fff80e35a961b4c63e95c733ddbf",
		"Uniswap V2 Pair: FUND - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbabdad2d8e1e6644ccea51d85ae70934d5c271a0",
		"Uniswap V2 Pair: SHIN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbabf27da3e6dc998d2149bb9afa053ffd1ac0f3b",
		"Uniswap V2 Pair: XI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbaec0e18c770993ffb1175fef493b5113cc6e32d",
		"Uniswap V3 Pool: ILV - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbaf584dcdd8f5cd83d861f4f8e008f0446007523",
		"Uniswap V2 Pair: FELIX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbb0eccb680ff8b2cbbb239b200cc6f9927b4aacb",
		"Uniswap V3 Pool: SAFE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbb16e7d9bff2d929f19b2d5466881195f020a093",
		"Uniswap V2 Pair: HATCH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbb2b8038a1640196fbe3e38816f3e67cba72d940",
		"Uniswap V2 Pair: WBTC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbb2e5c2ff298fd96e166f90c8abacaf714df14f8",
		"Uniswap V3 Pool: DAI - FEI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbb59aac3f3aab093db89a0ab8c6e9ad9dc8f9f7c",
		"Uniswap V2 Pair: ORN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbb8a43724de8bc071d7278baccb19363545fe758",
		"Uniswap V2 Pair: STBU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbbb9bf440d0f686487925fef3b0a0f9aa67753f6",
		"Uniswap V2 Pair: HEX - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbbbf1426cbe8509ef58451ab7ad67cb74866e3fa",
		"Uniswap V2 Pair: SHKOOBY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbbc95e1eb6ee476e9cbb8112435e14b372563038",
		"Uniswap V2 Pair: WOO - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbbca2b6b6e8c76ba2d53f8d3cbab00a9e5535fe3",
		"Uniswap V2 Pair: BoomB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbbcc5527d04b70c74bd536328509650bb2b77f7f",
		"Uniswap V2 Pair: MMM - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbbcd9986304fe340870f4816c614ba0c7a53512e",
		"Uniswap V2 Pair: WETH - HYVE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbbef3ac961e3daa56ffaefeacefdcb7142daf911",
		"Uniswap V2 Pair: CLIPPY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbbf933c1af0e9798615099a37a17cafc6da87732",
		"Uniswap V2 Pair: USDC - MM",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbc00e708c407d7633f7504434e74c13e171de7f1",
		"Uniswap V2 Pair: SATA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbc0eb0b7927be77b70c62c8589692f6cb919d8d0",
		"Uniswap V2 Pair: ZEUS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbc159c4ff09a134ee7d47df92c1be4f3ca136f53",
		"Uniswap V2 Pair: VRX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbc2c5392b0b841832bec8b9c30747badda7b70ca",
		"Uniswap V2 Pair: RENA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbc562bf2c1445707e5f8df66dbf8eee60cc49a59",
		"Uniswap V2 Pair: WETH - AIR",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbc63c8b32acfff818425608de7c70d1dc736d9f4",
		"Uniswap V2 Pair: ETHEREUM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbc6b3dc17e86c8cacf0f384f2e19468c36154a22",
		"Uniswap V2 Pair: CP3R - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbc6d37be25b06471d9e094dbb800c1d006e5a9ed",
		"Uniswap V2 Pair: BOOST - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbc8aa6a0972b1f25c507e15dfc85dcbd02bf59db",
		"Uniswap V2 Pair: Lexi - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbc8ed8c2ad89c14e55ee35d933f83e41cbd11121",
		"Uniswap V2 Pair: ARAID - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbc9b75563e8df1dc761589444103342ec582cc29",
		"Uniswap V3 Pool: FORTH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbcaa74f7401ff4a2702e4f0dba83b546815299f3",
		"Uniswap V3 Pool: SMOG - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbcad4e39da72a2dd1f79d2895ff9de851012a233",
		"Uniswap V2 Pair: MELANIA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbcc489a50f0e2f09aec2d6f33ffe950cb6c39295",
		"Uniswap V3 Pool: WETH - PAW",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbcfdee2ee14b9a1b7411454332af7d30048fff7c",
		"Uniswap V2 Pair: WETH - SHAMAN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbcffa1619ab3ce350480ae0507408a3c6c3572bd",
		"Uniswap V2 Pair: WETH - ID",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbd20dff5817339a4324c0256b69eb688ffdc3084",
		"Uniswap V2 Pair: 9GAG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbd35130bd84a3f016d1b6af257e0e0544887a42a",
		"Uniswap V3 Pool: BEARDY - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbd7f4cca1c58eb370203c1cc990d33bec215f7c3",
		"Uniswap V3 Pool: AIT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbdac5b5aa51b99c6c11ce05df4a1c78cecc2375b",
		"Uniswap V2 Pair: INEDIBLE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbdb04e915b94fbfd6e8552ff7860e59db7d4499a",
		"Uniswap V3 Pool: WETH - pufETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbdcdb7fae97ee1c77bfeeb66a1b2b573aba99050",
		"Uniswap V2 Pair: KERMIT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbdd39ec04687600399824c86ba13d4721a8b62d2",
		"Uniswap V2 Pair: WUKONG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbdee9c999b7f1a07bf62c2006a5cfb3dd40b1776",
		"Uniswap V2 Pair: DEFX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbdfe29d9e42ea541c581eef6cf3a2bb27b51e2c4",
		"Uniswap V2 Pair: WETH - COOK",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbe0249ec72d0468be161e068a1552ba739dc074a",
		"Uniswap V2 Pair: MONG2.0 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbe1737dae50f225b9480d68ee8f889e81d364615",
		"Uniswap V2 Pair: wALV - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbe19c32b4cd202407e8eeb73e4e2949438461ae3",
		"Uniswap V2 Pair: GALA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbe206379252ed32b85cf8d1f53195c6daac75801",
		"Uniswap V3 Pool: CATE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbe24f9952bf2a15bc4d2661151049d9588d6c0cb",
		"Uniswap V3 Pool: WETH - DSync",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbe38a889d67467b665e30e20ee5604a6f5696e38",
		"Uniswap V2 Pair: WETH - PTF",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbe3cd9b751360a8030770425acf947c8cb4cab38",
		"Uniswap V3 Pool: USDT - ACH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbe55c87dff2a9f5c95cb5c07572c51fd91fe0732",
		"Uniswap V2 Pair: ROOM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbe69462b5dbf6cbf7b9daea6b340aa51af54a7a1",
		"Uniswap V2 Pair: NEIRO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbe78353416003aa6e2c38e85249fdee3ce8c9b1b",
		"Uniswap V2 Pair: WETH - ETHY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbe7f576c55cb28faafd7471561b95f28c27915f4",
		"Uniswap V3 Pool: WETH - RUNIX",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbe80225f09645f172b079394312220637c440a63",
		"Uniswap V3 Pool: ezETH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbe8bc29765e11894f803906ee1055a344fdf2511",
		"Uniswap V2 Pair: BOB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbe9ba93515e87c7bd3a0cebb9f61aaabe7a77dd3",
		"Uniswap V2 Pair: WETH - PYLON",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbeda23eee41163f686ca875f0974e789362fded5",
		"Uniswap V2 Pair: CNDL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbeea2d0cc63a5b321448a36376f7b578cbcf303a",
		"Uniswap V2 Pair: SDOG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbef860db27fc2f9668d13d624563d859c65a2b25",
		"Uniswap V2 Pair: WETH - SHIBA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbefeaa0335d842b31053b091d5e2ba5d6a696dbe",
		"Uniswap V2 Pair: DFSocial - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbf16540c857b4e32ce6c37d2f7725c8eec869b8b",
		"Uniswap V2 Pair: PEIPEI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbf1b5753a704b49cff8bc6320d7505aa37a35192",
		"Uniswap V2 Pair: OZK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbf452277b8af4084fb8a0472ec808f2ded51f1c1",
		"Uniswap V2 Pair: SLP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbf49c7cf663076afc6e2757b88db01e318217312",
		"Uniswap V2 Pair: PICKLE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbf4ff08b9a3bbb77a362b609119100545c0445fe",
		"Uniswap V2 Pair: PMON - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbf519fb74965680b45d528d29e1d77bd1728c9ce",
		"Uniswap V2 Pair: TKST - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbf6dcdfe6e138428f5abe709e33e8ac1f7780e48",
		"Uniswap V2 Pair: KIBA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbf7045f6ea651abb04e96cba61adabe6d7bf0ee8",
		"Uniswap V2 Pair: CVR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbf85f94d3233ee588f0907a9147fbb59d7246b54",
		"Uniswap V3 Pool: MYRIA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbfa558bb74658486719dd0ee923b66214f2b0f75",
		"Uniswap V3 Pool: MFERS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbfcae9f989e47436fd1678ef5f9182d94b81dbac",
		"Uniswap V3 Pool: FMC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbfd8137f7d1516d3ea5ca83523914859ec47f573",
		"Uniswap TickLens",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc0067d751fb1172dbab1fa003efe214ee8f419b6",
		"Uniswap V2 Pair: DOGE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc00c5977395664267c118d71569dccf4bc37bf5f",
		"Uniswap V3 Pool: BGLD - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc026eb864dc9f9e820e010ddeeeb3c7cbaebf365",
		"Uniswap V3 Pool: PNDC - PORK",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc0369260e3ba31d28dd8a14cbdd86b49858b88ed",
		"Uniswap V2 Pair: WETH - BASE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc03ac1e9c6946fed9e36732cebbcd73b0c7a0637",
		"Uniswap V2 Pair: WETH - TT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc03c6f5d6c5bf2959a4e74e10fd916b5b50bf102",
		"Uniswap V2 Pair: POLY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc04744ab87a4c37afd91680ef280b96ee21a026e",
		"Uniswap V2 Pair: WETH - AUC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc05371628f77cd274d111ec9621b5d85f5945da2",
		"Uniswap V2 Pair: Ly - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc06dadbfde48c0bdeb4608ddc7f232fd07a02da1",
		"Uniswap V2 Pair: SNIPE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc0793782d11dd9bf7b3a7a5a74614f1debe1da2e",
		"Uniswap V3 Pool: POW - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc0897d6ba893e31f42f658eead777aa15b8f824d",
		"Uniswap V2 Pair: MAHA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc0917d9f473618029bea42dd61b05fcf0251be42",
		"Uniswap V2 Pair: YETI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc09bf2b1bc8725903c509e8caeef9190857215a8",
		"Uniswap V2 Pair: IXS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc0a6bb3d31bb63033176edba7c48542d6b4e406d",
		"Uniswap V2 Pair: RNDR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc0bf97bffa94a50502265c579a3b7086d081664b",
		"Uniswap V2 Pair: STRONG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc0d776e2223c9a2ad13433dab7ec08cb9c5e76ae",
		"Uniswap V2 Pair: XEN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc0fbed3cbbf272e0649ddfefdec99f4eba7eca22",
		"Uniswap V3 Pool: WETH - CAW",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc0fc2e4cbaf48b36948971c4afd487a90272ddfe",
		"Uniswap V2 Pair: WETH - UTK",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc12c4c3e0008b838f75189bfb39283467cf6e5b3",
		"Uniswap V2 Pair: 0xBTC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc139d8450177c0b8c3788608518687b585f7ae5a",
		"Uniswap V2 Pair: SWRV - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc1409a2c5673299fb15da5f03c27eb1ac88f7d8c",
		"Uniswap V3 Pool: WETH - CQT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc14ef0f7d91799b2863dc8fd080c35d729e9c0e5",
		"Uniswap V2 Pair: WETH - Spider",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc15e41eb55af2c0f7c34fb150a688f672d4b1be2",
		"Uniswap V2 Pair: BAG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc169f0eb31403c0bcc43dc9feca648a79fafc0f4",
		"Uniswap V2 Pair: CAP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc174f30ce4ebc938d567b5273c4301e7324191bb",
		"Uniswap V2 Pair: WETH - LARRY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc17b5116ab39c8f747f045e107ea47a917532cdc",
		"Uniswap V2 Pair: NIIFI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc19a07ac4ea52420039e2d6762299462d922a65c",
		"Uniswap V2 Pair: BB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc1b24a9ecf68c14ffe65263b1591c29dd341d09d",
		"Uniswap V3 Pool: AMO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc1c73c8796b611b5f660ce253cd1a5ba73441fd2",
		"Uniswap V2 Pair: blobs - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc1cb7f41cc17077eb05e22801ec636709f4fc0ca",
		"Uniswap V2 Pair: IYKYK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc1cd3d0913f4633b43fcddbcd7342bc9b71c676f",
		"Uniswap V3 Pool: INST - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc1cd55a152d025c9ec44b501ee2202fb6330bbcc",
		"Uniswap V2 Pair: GLX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc1d93fd8aaf76b17781bfdd5a1cb09ca5ce72c13",
		"Uniswap V2 Pair: TRUTH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc1df8037881df17dc88998824b9aea81c71bbb1b",
		"Uniswap V3 Pool: FORTH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc1f4ecd6398ffc97d81cb3015aa6ef7b19773a08",
		"Uniswap V2 Pair: WETH - AIPAD",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc20e1f914a7d1626c8b1371c37b2e812c7530dc0",
		"Uniswap V2 Pair: ETE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc21cd79b741a4699d3aac99f6383330610308e35",
		"Uniswap V2 Pair: SOLAR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc246467ab1466f4963ba45c335479b3055e82060",
		"Uniswap V3 Pool: LEASH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc277c03c6e30f00bd18ab6583092c64fc3390847",
		"Uniswap V2 Pair: Gold 1 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc284b5e7222bb225162ded69bad6b1c000de32e8",
		"Uniswap V2 Pair: FOMO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc2923b8a9683556a3640ccc2961b2f52b5c4459a",
		"Uniswap V2 Pair: BUSD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc29271e3a68a7647fd1399298ef18feca3879f59",
		"Uniswap V3 Pool: WETH - WTON",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc2a5604edf9ea7b864ae19acfec3e094c6c9265e",
		"Uniswap V2 Pair: WETH - LESLIE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc2a856c3aff2110c1171b8f942256d40e980c726",
		"Uniswap V3 Pool: FRAX - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc2adda861f89bbb333c90c492cb837741916a225",
		"Uniswap V2 Pair: MKR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc2b7888a8d7b62e2a518bbc79fbbd6b75da524b6",
		"Uniswap V2 Pair: SAV3 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc2c701110de2b9503e98619d9c9e3017877b0f72",
		"Uniswap V2 Pair: ZOOMER - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc2d20328eb8bb0bf0984d9149eab611920be9ba1",
		"Uniswap V2 Pair: VNLA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc2e9f25be6257c210d7adf0d4cd6e3e881ba25f8",
		"Uniswap V3 Pool: DAI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc2eab7d33d3cb97692ecb231a5d0e4a649cb539d",
		"Uniswap V2 Pair: Mog - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc2fa5fd1c1ad37701ef1b26c5f0680ac807e3efd",
		"Uniswap V3 Pool: GMT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc303689e00629b9703744ed8c5438c660f3ecbe0",
		"Uniswap V2 Pair: roar - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc31c590acfad809d3293f58a1873c182a9643b7e",
		"Uniswap V2 Pair: PIKA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc31f5c3f7ba9a2e4c50a89255efc619152a5adaf",
		"Uniswap V3 Pool: RVST - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc320173c351a5a144633fac48917182dcb16b150",
		"Uniswap V2 Pair: FWOG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc32ab5f17c0edaeb4d597bfb9726f28bc37fd6af",
		"Uniswap V2 Pair: ZUT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc32c2d9768919deaee60f7eb163a293c6eb81be8",
		"Uniswap V2 Pair: OCISLY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc34322097f48f2a42b471e0e892e8cf0c7e35ebb",
		"Uniswap V3 Pool: HABIBI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc34da1ab0f93dfed30729951dafcfb9ce3e2a9ae",
		"Uniswap V2 Pair: WETH - XTM",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc3576f38c32e95e36bbd8d91e6cbe646a3723110",
		"Uniswap V2 Pair: WETH - PHIL",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc358001a71b3160b4b243d6e8c6f52579f82215e",
		"Uniswap V2 Pair: YAM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc3601f3e1c26d1a47571c559348e4156786d1fec",
		"Uniswap V2 Pair: DUCK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc36442b4a4522e871399cd717abdd847ab11fe88",
		"Uniswap NonfungiblePositionManager",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc364ecf5a501983fe1deaa490d9d056397a0fbb0",
		"Uniswap V2 Pair: WETH - MONKEYS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc366336dc7cf8131d4e538bc0205e603014743f0",
		"Uniswap V2 Pair: AGFI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc37ecc839ba67a46847dc367252b057f8feae680",
		"Uniswap V2 Pair: WETH - GATSBY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc3881fbb90daf3066da30016d578ed024027317c",
		"Uniswap V3 Pool: GLQ - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc39e83fe4e412a885c0577c08eb53bdb6548004a",
		"Uniswap V3 Pool: RCH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc3a03b77c9fe02b123b749b1e9b62e22c4746a12",
		"Uniswap V2 Pair: PLEB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc3b8d5f4b6ac5177e6058891be50a910ad958716",
		"Uniswap V2 Pair: PIKA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc3d7aa944105d3fafe07fc1822102449c916a8d0",
		"Uniswap V2 Pair: WDOGE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc3db44adc1fcdfd5671f555236eae49f4a8eea18",
		"Uniswap V3 Pool: ENA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc3f6486d0ecae8038b37aaef1c39e2a12dcb4423",
		"Uniswap V2 Pair: WETH - KAI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc3f6b81fb9e6db259272026601689e383f94c0b0",
		"Uniswap V3 Pool: OVR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc3fa0a8d68a43ed336174cb5673903572bbace8e",
		"Uniswap V2 Pair: YFIM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc410573af188f56062ee744cc3d6f2843f5bc13b",
		"Uniswap V3 Pool: WETH - rswETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc433e27c2b7a77e4021524a90354b9922c825335",
		"Uniswap V2 Pair: RDT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc43dca4cc8bc170261897863424cb7a53fd41eeb",
		"Uniswap V2 Pair: CHAMPZ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc4472dcd0e42ffccc1dbb0b9b3855688c22f3a0f",
		"Uniswap V3 Pool: WLD - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc447aaa230af55b2eaa75227521768914ec590aa",
		"Uniswap V2 Pair: UNIQ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc4480526e3d64f7ec7d7a6694c52d23aab658ed5",
		"Uniswap V3 Pool: HIFI - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc449907e7af59cc2420545224f08762e9935b3c4",
		"Uniswap V2 Pair: FREN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc44b090a5ec6dcf7b0a3bfd3d34d3a12732b27df",
		"Uniswap V2 Pair: SHIDO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc45a81bc23a64ea556ab4cdf08a86b61cdceea8b",
		"Uniswap V3 Pool: WETH - TITANX",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc45f24279198b79cf7e9a508429006734b2a4ad0",
		"Uniswap V2 Pair: PAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc465c0a16228ef6fe1bf29c04fdb04bb797fd537",
		"Uniswap V2 Pair: SDT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc47c20f194c4dede0fb63fa4e29bcc04b37c778a",
		"Uniswap V2 Pair: PORK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc4838f7ca023da95116cd559e2b84a2d5408ccdd",
		"Uniswap V2 Pair: PEPEGA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc48396f068c62e0192c9f2c1caa7e07bbd15dbc7",
		"Uniswap V3 Pool: FI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc491405d542a393d8d202a72f0fb076447e61891",
		"Uniswap V2 Pair: WETH - WHACKD",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc4a6a43653c36bd5868eeeac789eefd193dd6060",
		"Uniswap V2 Pair: KAMALA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc4a8c243d8cf7891d6282bb293e7a0aa4ef1ae51",
		"Uniswap V2 Pair: RAIN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc4aae4163afd45ed78fa385ae0b10684b83b5321",
		"Uniswap V2 Pair: PNODE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc4ab0852473875bf7a44527db2d3cf1dc5350811",
		"Uniswap V2 Pair: XSP - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc4b186b57d584262dd73bea4b702805a408c8b20",
		"Uniswap V3 Pool: POOH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc4cd6c463240b051a47ddf43e1a3b94299f55923",
		"Uniswap V2 Pair: DBZ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc4d9102e36c5063b98010a03c1f7c8bd44c32a00",
		"Uniswap V2 Pair: WETH - ATRI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc4d9c69962ddb2388e1532279704fc6eb199c963",
		"Uniswap V3 Pool: CSWAP - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc4da39e646e7f5d233b89ca0f7b75344e7ddb2cc",
		"Uniswap V2 Pair: KIMCHI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc4dbe30fecc148a8755c970f3b8b0c9af0db81f5",
		"Uniswap V3 Pool: G - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc4ec123cd61d8ca3ea1ee413d5cb0a95de6d34cd",
		"Zapper.Fi: sUSD Curve Pool",
		"Zapper"
	],
	[
		"0xc4fc14ab3f9a0aebc5dc78b4fabc2eeb525d6d23",
		"Uniswap V2 Pair: WETH - NEINEI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc50ef7861153c51d383d9a7d48e6c9467fb90c38",
		"Uniswap V2 Pair: UST - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc50f5f0e2421c307b3892a103b45b54f05259668",
		"Uniswap V3 Pool: XRGB - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc5117190248f0405d36d12be11608aa5fda1dde3",
		"Uniswap V2 Pair: INU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc52a18e7358b1c618bd8f0e784b35636775afb4e",
		"Uniswap V3 Pool: MAI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc53781e3df9aa6b76a917f873532c1de5e0c52db",
		"Uniswap V2 Pair: WETH - PAN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc54ba7aabe7164ca2aa092900060fe2ba6eccd8b",
		"Uniswap V2 Pair: EGGS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc555d55279023e732ccd32d812114caf5838fd46",
		"Uniswap V2 Pair: Neiro - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc55902833689433f6abee90cab0b6ea417b3ef30",
		"Uniswap V2 Pair: NIHAO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc56ec315db551315ed9857019fdb4c639ed9fd8c",
		"Uniswap V2 Pair: WETH - MORRA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc593fe9193b745447e86b45ea0bf62565ee030cc",
		"Uniswap V3 Pool: WETH - ANYONE",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc5a788f63e5d9cf2c324621eed51a98f85ae373b",
		"Uniswap V2 Pair: DZAR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc5ac83f187c0da241b50f5a1510f7761ccac9b6a",
		"Uniswap V2 Pair: MAGOA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc5af84701f98fa483ece78af83f11b6c38aca71d",
		"Uniswap V3 Pool: WETH - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc5bbe611a5a0ee224abf7ad959c11aad3b875957",
		"Uniswap V2 Pair: WETH - HAKA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc5be99a02c6857f9eac67bbce58df5572498f40c",
		"Uniswap V2 Pair: WETH - AMPL",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc5d3c66133a6264b0f2e712b8e10ef96efb93eb2",
		"Uniswap V2 Pair: LUA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc5e1fdf955aef0a1c481777eb850cde9b6c7c3e2",
		"Uniswap V2 Pair: BMIA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc5ea9262becc6e626875b6afa40e2815c4d8253c",
		"Uniswap V2 Pair: WETH - NiHao",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc5ed7350e0fb3f780c756ba7d5d8539dc242a414",
		"Uniswap V2 Pair: WETH - DUCK",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc5f05ce6c07f203b82ad9e1ba84010729af351fc",
		"Uniswap V2 Pair: BTC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc5f93997e111fc3dff6cb1f9ef84fd7040996de6",
		"Uniswap V2 Pair: CRAB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc60604a8e104940cf28f4fd9af8abb06dc50b812",
		"Uniswap V3 Pool: WETH - ETHM",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc60c479f3cc66f1654a4113f4949c98ce77a9995",
		"Uniswap V2 Pair: KYL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc62bf2c79f34ff24e2f97982af4f064161ed8949",
		"Uniswap V2 Pair: BCUBE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc63a4dd7c0a3f58cc619cf52163c88789c06f1b2",
		"Uniswap V2 Pair: FANTA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc63b0708e2f7e69cb8a1df0e1389a98c35a76d52",
		"Uniswap V3 Pool: FRAX - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc64350c0eab6faed8f17cc2cdff0761c53fb4152",
		"Uniswap V3 Pool: PNDC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc67580e5ef43e86440dc69f315bf6baf30e2ab2a",
		"Uniswap V2 Pair: BOPE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc6789a3a12d2b3f87a2bc2497565adad1d4d9e8e",
		"Uniswap V2 Pair: BMJ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc6a45ecdc8bcef94c476647be1303fd83d438cd0",
		"Uniswap V2 Pair: SNAIL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc6a9819329d47b56bf720877fd1802f8540e55e6",
		"Uniswap V2 Pair: AMC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc6b9c3fa037303d10d50d71ae3cedb0eea7a1c78",
		"Uniswap V2 Pair: GHX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc6bc9b105a37d11b44654ccc3ba5f76098f2ca38",
		"Uniswap V2 Pair: PSWAP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc6c40c379c8442cdf582bb9ebf1ef6c306c61fa7",
		"Uniswap V2 Pair: NCAT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc6c8f121f6b56896628a7b15c1fcde6d395b908a",
		"Uniswap V2 Pair: LANDWU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc6e40537215c1e041616478d8cfe312b1847b997",
		"Uniswap V2 Pair: Kekec - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc6f348dd3b91a56d117ec0071c1e9b83c0996de4",
		"Uniswap V2 Pair: WETH - ZRX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc70bb2736e218861dca818d1e9f7a1930fe61e5b",
		"Uniswap V2 Pair: UNCX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc715a91f98a3370c8806b54c1a4738d85753848b",
		"Uniswap V2 Pair: LMI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc71d4e4d01b61c52f4141cee0273ff4d00ea02f7",
		"Uniswap V2 Pair: Grōk - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc72abb13b6bdfa64770cb5b1f57bebd36a91a29e",
		"Uniswap V3 Pool: SD - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc730ef0f4973da9cc0ab8ab291890d3e77f58f79",
		"Uniswap V2 Pair: AUDIO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc75253291c312e9edd3bbeb5cc228eb50f2e2950",
		"Uniswap V2 Pair: bALPHA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc76225124f3caab07f609b1d147a31de43926cd6",
		"Uniswap V2 Pair: SFI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc77efc40c20f1578a9bd714f9a871dfc1a81b234",
		"Uniswap V2 Pair: ARCX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc790b0d7291f864244b559b59b30f850a8cfb40d",
		"Uniswap V2 Pair: WETH - WPC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc7a1cb6edc22e94f17c80eb5b959f2ad28511d4e",
		"Uniswap V2 Pair: HBT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc7b7dac697b03e11e4af085d927f0c9b24b3f27d",
		"Uniswap V2 Pair: ACYC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc7bbec68d12a0d1830360f8ec58fa599ba1b0e9b",
		"Uniswap V3 Pool: WETH - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc7cbff2a23d0926604f9352f65596e65729b8a17",
		"Uniswap V3 Pool: SDEX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc7cf089fb4bc91f1981df2285ca019ab09a5dd3b",
		"Uniswap V3 Pool: PRO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc7e6b676bfc73ae40bcc4577f22aab1682c691c6",
		"Uniswap V2 Pair: TOKEN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc7f52f8c4bf77f50665ed413fc2698b7797397bb",
		"Uniswap V2 Pair: TRUMPE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc7fe3e6bb510708462168258dcb2a369ed0759e5",
		"Uniswap V2 Pair: WETH - VIDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc822d85d2dcedfaf2cefcf69dbd5588e7ffc9f10",
		"Uniswap V2 Pair: LID - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc82f817bb2dbbdee88f954e0c42332662b8870fa",
		"Uniswap V2 Pair: TRUMP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc8357c4ef5660ecddb5683d7a38551c21aac9a41",
		"Uniswap V2 Pair: WETH - KNTO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc840464a8c3324e0bdc9429439dde3a12205424a",
		"Uniswap V3 Pool: DAO - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc84778a8737b81a8c48dbf7b9bc84ae97bf33fa4",
		"Uniswap V2 Pair: renDOGE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc88ac988a655b91b70def427c8778b4d43f2048d",
		"Uniswap V2 Pair: DERC - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc88deb1ce0bc4a4306b7f20be2abd28ad3a5c8d1",
		"Uniswap V2 Pair: WETH - SEXY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc8c30029a358f4151d613e40a753b8f18e2c3481",
		"Uniswap V2 Pair: BREPE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc8ca3c0f011fe42c48258ecbbf5d94c51f141c17",
		"Uniswap V2 Pair: CGG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc8e78ad2573f5e16a286443aea2a6f1ba0c06b96",
		"Uniswap V2 Pair: AAPX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc8f03fdc7b685357f78230814da6944c71c874e4",
		"Uniswap V2 Pair: WETH - TRESTLE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc8fa85920a4cb22d8c6d15e0125f5c76f27a3a73",
		"Uniswap V3 Pool: HIPP - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc908b3848960114091a1bcf9d649e27b25385642",
		"Uniswap V2 Pair: FIDO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc91ef786fbf6d62858262c82c63de45085dea659",
		"Uniswap V2 Pair: WETH - TOPIA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc923b3d24d9c831c3064a8aecc03b390db6b5eab",
		"Uniswap V3 Pool: ML - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc92b1c381450c5972ee3f4a801e651257aed449a",
		"Uniswap V2 Pair: DEXM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc97bd89d859b73d02c596fe8249a615ccd18f4e1",
		"Uniswap V2 Pair: OFI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc987d503a9f78f6d1d782c1fff5af4cb34437e3f",
		"Uniswap V3 Pool: gOHM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc98936de9640d6bfc24f82de1cf0f8cd9f5b388d",
		"Uniswap V2 Pair: NOBL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc98b2d550d8d123f8e6950e0758305e88511b037",
		"Uniswap V2 Pair: D.O.G.E - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc98b3b8c7cc0d7d925d1a407347b845d9f001391",
		"Uniswap V2 Pair: WETH - ORBS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc9919a9eb691f571e41db417f911135b4ac46fe7",
		"Uniswap V2 Pair: LSS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc9c9c0c9a70355b0afb47571c37d6f7c5220e36d",
		"Uniswap V2 Pair: WETH - BC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xca4c92f756450060c0f78883434344254140ffb2",
		"Uniswap V2 Pair: SAHU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xca7c2771d248dcbe09eabe0ce57a62e18da178c0",
		"Uniswap V2 Pair: WETH - FLOKI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xca9bee88db1833cd2f3e3912590242fcc8df468e",
		"Uniswap V3 Pool: WETH - WAGMI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xca9c4cc09e901f4d2aa072ed1aa95dcbe3a7a8e5",
		"Uniswap V2 Pair: AST - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xca9d4cbbd22ca8d598f2cd4556e53a4484772daf",
		"Uniswap V2 Pair: LOCK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcaa004418eb42cdf00cb057b7c9e28f0ffd840a5",
		"Uniswap V2 Pair: WILD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcaacac4d4115378f886f8c2b472ff190feb26b48",
		"Uniswap V2 Pair: TOSHI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcab335e1964363e48a790da303b74ec02d3f8fb2",
		"Uniswap V2 Pair: DFYN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcab5913aee2d2e761d865673bb0c2c4b98ceb676",
		"Uniswap V2 Pair: DOKE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcab82c42b5195624671b92b1b0d91adf171f103c",
		"Uniswap V3 Pool: WETH - FACTR",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcabebc0c5a9d6522640d81c22975ca31b8f8ff48",
		"Uniswap V2 Pair: KTLYO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcae4ea1ca5d2c727ea5bc7fcf74642288a580231",
		"Uniswap V2 Pair: FLOVI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcae69e00f4f48359d94cd9cb1ae1b66c09628204",
		"Uniswap V2 Pair: WETH - GrumpyCat",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcae8329c110ba25ec6ccfe9f1c65b83950ae3504",
		"Uniswap V2 Pair: MWAVE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcaf2eb491d3bcd702e7ed33e9be863f7c1e72582",
		"Uniswap V2 Pair: PEPE2 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcb0c5d9d92f4f2f80cce7aa271a1e148c226e19d",
		"Uniswap V3 Pool: RAI - DAI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcb1a16bfb8fc536d7ab9ab9c17e3239cad505928",
		"Uniswap V2 Pair: BANKETH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcb37089fc6a6faff231b96e000300a6994d7a625",
		"Uniswap V2 Pair: AIUS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcb37b0027858796ce60ecce4b54c45afdff02aca",
		"Uniswap V2 Pair: PBR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcb488b8452996454237d824d72f86090470292f4",
		"Uniswap V3 Pool: CPOOL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcb49221ad08e84b1692f80b62cd5f90c1aadbe6e",
		"Uniswap V2 Pair: CUDOS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcb4e7a3db6526f5738b9076098b190b87e81a976",
		"Uniswap V2 Pair: BERC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcb4f983e705caeb7217c5c3785001cb138115f0b",
		"Uniswap V2 Pair: YFV - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcb60e8c48bc3bb956f55c4de7fb8d415ac176e82",
		"Uniswap V2 Pair: WJD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcba131ebe81f5514da77d81e028cadb7211f766a",
		"Uniswap V2 Pair: USDT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcba27c8e7115b4eb50aa14999bc0866674a96ecb",
		"Uniswap V3 Pool: INST - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcbbc981bd5b358d09a9346726115d3ac8822d00b",
		"Uniswap V3 Pool: VXV - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcbbe436425a115dd0d38c576f4cc78bc2a3fb740",
		"Uniswap V3 Pool: WETH - MTRM",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcbc1ce4a9f18c6e8a0a328708ba6ab484f84bb47",
		"Uniswap V2 Pair: POODL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcbcc3cbad991ec59204be2963b4a87951e4d292b",
		"Uniswap V3 Pool: VITA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcbcdf9626bc03e24f779434178a73a0b4bad62ed",
		"Uniswap V3 Pool: WBTC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcbde90a6abfb904d61a3c5f46a35b736c3a3d68f",
		"Uniswap V2 Pair: KWIK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcbe856765eeec3fdc505ddebf9dc612da995e593",
		"Uniswap V2 Pair: LADYS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcbf35a6130ee786bd0fe955f0f36a22f59bfbd4c",
		"Uniswap V2 Pair: REVIVE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcbfa63418755fee3bd08e70a586e6cb4625d05a9",
		"Uniswap V2 Pair: WETH - BCP",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcc0fcd959871e69f84fe9464c629f327941b655b",
		"Uniswap V2 Pair: WETH - HyPC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcc3d1ecef1f9fd25599dbea2755019dc09db3c54",
		"Uniswap V2 Pair: SRM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcc6c24c992059ced4a390b9d2f743645bfe1de49",
		"Uniswap V2 Pair: BOBA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcc82ee8654e3707f74ec74ed0f819a192f856e1e",
		"Uniswap V2 Pair: WETH - ALIEN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xccab68f48531215b0707e8d908c43e7de73dbdbc",
		"Uniswap V2 Pair: USDC - UNIX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xccab9aab49e7ce843fec2be7db343fcb24ca6764",
		"Uniswap V3 Pool: DUST - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xccb63225a7b19dcf66717e4d40c9a72b39331d61",
		"Uniswap V2 Pair: MC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xccc2431a7335f21d9268ba62f0b32b0f2efc463f",
		"0x: Dev Utils",
		"0x"
	],
	[
		"0xccc42cf5d6a2f3ed8f948541455950ed6ce14707",
		"Uniswap V3 Pool: OS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xccdcbdf3ebd11cce6a55b477b1427c0a4e0e2829",
		"Uniswap V2 Pair: DTA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcce561cd3217dc5a6f9b9919fd3928cf3d0e282f",
		"Uniswap V2 Pair: TOK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcce852e473ecfdebfd6d3fd5bae9e964fd2a3fa7",
		"Uniswap V2 Pair: COIN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcceb09c6d9bb5e9eaed77475b610e6019af05cde",
		"Uniswap V2 Pair: KIT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcd02a882804f3eb0f2d80f94a04defcea038359f",
		"Uniswap V2 Pair: JNGL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcd09b73dfeb14233fde9a473878d28cdaf2aa4ed",
		"Uniswap V2 Pair: WETH - XRP20",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcd1a2cee37107767c59ac61102c9dae171ef76b2",
		"Uniswap V3 Pool: RFD - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcd423f3ab39a11ff1d9208b7d37df56e902c932b",
		"Uniswap V3 Pool: PRIME - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcd4a2f72e3d646e8addab74a68c2175d6a36b0e3",
		"Uniswap V2 Pair: WETH - DAFI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcd665315a324b27870f008b7918bff98bd6b2361",
		"Uniswap V2 Pair: PPIZZA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcd6bcca48069f8588780dfa274960f15685aee0e",
		"Uniswap V2 Pair: ⚗️ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcd7989894bc033581532d2cd88da5db0a4b12859",
		"Uniswap V2 Pair: WBTC - BADGER",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcd8286b48936cdac20518247dbd310ab681a9fbf",
		"Uniswap V3 Pool: FXS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcd83055557536eff25fd0eafbc56e74a1b4260b3",
		"Uniswap V3 Pool: PERP - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcd8804fe8a25325f4ec56e1d5fb5e3b93ecb9e6e",
		"Uniswap V2 Pair: TPAD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcd9cbf2e2af29923384a3463cbcbb5e2d7f6a3ef",
		"Uniswap V2 Pair: KEK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcd9dab5e666de980cecdc180cb31f296733e2587",
		"Uniswap V3 Pool: AKITA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcdff6ddfc9e4807c9927fd58708c2ef3484cc305",
		"Uniswap V3 Pool: AVT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xce0719148afe556cf4edc5307254e86f02e4f418",
		"Uniswap V2 Pair: GME - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xce0848e77370687e9cb33b4af15f1861616d46c6",
		"Uniswap V2 Pair: SOGE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xce1f0626083a00eaef1d85dd2979abb5b1c3657c",
		"Uniswap V3 Pool: XLON - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xce2cc0513634cef3a7c9c257e294ef5e3092f185",
		"Uniswap V2 Pair: OGN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xce407cd7b95b39d3b4d53065e711e713dd5c5999",
		"Uniswap V2 Pair: WETH - HAY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xce5debe9dd76f96bb5fa00eb3cc084d43ec0dbf3",
		"Uniswap V2 Pair: BAR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xce84867c3c02b05dc570d0135103d3fb9cc19433",
		"Uniswap V2 Pair: SUSHI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xceb63a909d95c9222cdf5b08044f5dae72cd036e",
		"Uniswap V3 Pool: JOE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcebbf05d63ab0221dba721aa8adcb7812edee0d5",
		"Uniswap V2 Pair: DADA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcede28c51b86988a2e91a4c27e80733e0adbfe7d",
		"Uniswap V2 Pair: AI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcee31c846cbf003f4ceb5bbd234cba03c6e940c7",
		"Uniswap V3 Pool: PEPE - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcefdea62bc57ab666913cb573f87404246262295",
		"Uniswap V2 Pair: NEZUKO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcf099e75c80a2a01cfd6d6448e4cdf59b7f5d7ec",
		"Uniswap V2 Pair: WEN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcf15ad9be9d33384b74b94d63d06b4a9bd82f640",
		"Uniswap V3 Pool: WETH - RPL",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcf3f7d858444f78ed16a339fed8c3fd9819ec235",
		"Uniswap V2 Pair: DMTR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcf4236db746dbc1855a4d095aaf58da9b030491e",
		"Uniswap V2 Pair: BLZ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcf5109bfe92d627e4eb43d6405b2de6793c90f3e",
		"Uniswap V2 Pair: CHAD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcf55bd6bd63ba915a18cdd91b13882f517da207a",
		"Uniswap V2 Pair: NS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcf7a4c424df675a23362965714f338b21dcf8d5d",
		"Uniswap V2 Pair: USDC - LYM",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcf7c6834378ce52f404991380e9012d00067e3e5",
		"Uniswap V2 Pair: WETH - Payments",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcf7e21b96a7dae8e1663b5a266fd812cbe973e70",
		"Uniswap V3 Pool: gOHM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcf96fcf38dfc404e42366f05bffda6336df5174f",
		"Uniswap V3 Pool: FORGE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcfb2e3fd46ba5e52af6bacbd63f0848696d674f3",
		"Uniswap V2 Pair: SCALE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcfb8cf118b4f0abb2e8ce6dbeb90d6bc0a62693d",
		"Uniswap V2 Pair: TEND - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcfdc42c59a42522c019bd6a43d39571ae7415e5f",
		"Uniswap V2 Pair: BEEP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcffdded873554f362ac02f8fb1f02e5ada10516f",
		"Uniswap V2 Pair: COMP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd01436243dcb007fbf59f43acbe792bac311d30d",
		"Uniswap V2 Pair: MAG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd017617f6f0fd22796e137a8240cc38f52a147b2",
		"Uniswap V3 Pool: WETH - GTC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd01cf7492388aebd91831317b7890102e0100452",
		"Uniswap V2 Pair: Minions - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd023d7f38f6ccfa62dde13be3f1b117ca4d29c42",
		"Uniswap V2 Pair: WETH - Unicorn",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd0319dbeec8d0799cc89abc74e37fc6403fbca0e",
		"Uniswap V2 Pair: BLW - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd03dffd02db4b076e3eed9272a6a243a23de16e3",
		"Uniswap V2 Pair: Metis - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd045110c466ccb2e57eb426baae7ce869458f173",
		"Uniswap V2 Pair: WETH - SHR",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd04aa6c33e03160381f306fe5386ffd3291e7ca4",
		"Uniswap V2 Pair: ESCO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd04d14d2f9122372e41d2de9a82f721e9ea2f069",
		"Uniswap V3 Pool: WETH - RSS3",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd050430dd432876cf5622ff60c4dc106b64fa753",
		"Uniswap V3 Pool: PUNDIX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd058416f4c83a4f187631c454f872b076c0a7642",
		"Uniswap V2 Pair: ZOOT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd05d35b500dee15aecbae563a28e790ae1594cb4",
		"Uniswap V3 Pool: WTK - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd07d843cd1d769cdf918be8a3c2c0b708889f7fc",
		"Uniswap V2 Pair: WETH - OPCT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd07ecac58543b2364da75ed8499534bd8971a4d9",
		"Uniswap V2 Pair: WETH - CROC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd081dce9172a8670926e36cc3bde9cee36e4f8bb",
		"Uniswap V2 Pair: SAINT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd0a4c8a1a14530c7c9efdad0ba37e8cf4204d230",
		"Uniswap V3 Pool: SHFL - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd0af1981f52146a6939385451daea0726e13a484",
		"Uniswap V3 Pool: XYO - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd0af55fb4be7f8946f06a826056b8993fdff7654",
		"Uniswap V2 Pair: Mikaboshi - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd0f292fa6fe694892bcf52b55ca0f3e277be17c0",
		"Uniswap V3 Pool: WETH - ONDO",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd0fbb87e47da9987d345dbdf3a34d4266cf5ebe9",
		"Uniswap V2 Pair: DSLA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd0fc8ba7e267f2bc56044a7715a489d851dc6d78",
		"Uniswap V3 Pool: UNI - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd0fecb59019d8d1fdd6a4d7be9e89aa54cfb962a",
		"Uniswap V2 Pair: WETH - FRMX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd101821c56b4405af4a376cbe81fa0dc90207dc2",
		"Uniswap V2 Pair: FOUR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd10b1aa3a49cc06f65c723f14ea0e43edda3102f",
		"Uniswap V3 Pool: WPEPE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd11ad84d720a5e7fa11c8412af6c1caa815a436d",
		"Uniswap V2 Pair: DVG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd124c5808a0d89738e0aef655c0aa19ec6175811",
		"Uniswap V3 Pool: WETH - SLP",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd12b39342d18277623de3b44fc70d17907cdea37",
		"Uniswap V2 Pair: KABOSU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd12c3f807f5b84372b5660eb4eb55702b0ab7097",
		"Uniswap V2 Pair: ERIC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd14782a6f2512495584a252ffca49b17486a08d3",
		"Uniswap V2 Pair: USDC - SYNR",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd17cda470bd0237fae82ef254c84d06d0e4cc02f",
		"Zapper.Fi: CHAI Unipool",
		"Zapper"
	],
	[
		"0xd17e88b13e53029f356d46aba44b5640b35c8e9c",
		"Uniswap V2 Pair: WETH - WCI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd18748b9839b0081a867a1a871d5b562b2ec9884",
		"Uniswap V2 Pair: POND - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd1a47332acad7498af1efdba16158e11317eca4a",
		"Uniswap V3 Pool: AEVO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd1b3ac7929c642d2235799c55764b7bc39cd9809",
		"Uniswap V3 Pool: JJ - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd1bc66660ba7edd64f0cc442ca5f32e5d199dfc6",
		"Uniswap V2 Pair: WETH - NIOX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd1c9cbe7f1975b599b9189ce132a433c4a3c8986",
		"Uniswap V2 Pair: DIE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd1d5a4c0ea98971894772dcd6d2f1dc71083c44e",
		"Uniswap V3 Pool: LQTY - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd1dff3959372c8680a752e8aec7e1bd38d760297",
		"Uniswap V3 Pool: WETH - MATH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd1e3e495a2346943012faba8dd3b47fee76f8ee1",
		"Uniswap V2 Pair: $DONGO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd1e606be11b3bca2a1ec974e6bd3e110f3b131b6",
		"Uniswap V2 Pair: WETH - SOUTH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd24314cccb742cee02c23e815b5fbf930bdd16c5",
		"Uniswap V2 Pair: WETH - yLand",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd2a72bb93a5d474db747cfe66745834631a31153",
		"Uniswap V2 Pair: WETH - VRD",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd2ce84de055ccb4ea93fc7ec7c9c0d0244ec4664",
		"Uniswap V2 Pair: GUM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd2d717cf165dc083530fe23588f74ffed15683d0",
		"Uniswap V2 Pair: DRCT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd2e0c4928789e5db620e53af29f5fc7bca262635",
		"Uniswap V2 Pair: TRADE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd2f1fd188f127cde9d0feef58c3eb457cc0bcb9c",
		"Uniswap V2 Pair: SHIBAL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd31d41dffa3589bb0c0183e46a1eed983a5e5978",
		"Uniswap V3 Pool: ATH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd3248cdafddd8dda92dc53df4ce99a5031b9e897",
		"Uniswap V3 Pool: NGL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd325774441083c87608745ced2cc16b4462b9d79",
		"Uniswap V2 Pair: TUP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd330236c40712d9003768ba70c70af2fc0739451",
		"Uniswap V3 Pool: THOL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd340b57aacdd10f96fc1cf10e15921936f41e29c",
		"Uniswap V3 Pool: wstETH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd34361f7830fdf2ca6d7023a32a776db39762ce9",
		"Uniswap V2 Pair: TACO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd34d09030b9fdec5487b7ee8f7f9abbc59e9c3ea",
		"Uniswap V2 Pair: WETH - GTROK",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd34d4916440dba56a5719af981e646d69c9cec0d",
		"Uniswap V2 Pair: STATE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd34e4855146ac0c6d0e4a652bd5fb54830f91ba8",
		"Uniswap V3 Pool: STRONG - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd3597208283321ea4ca7902cf5b62d28ea9b4d58",
		"Uniswap V2 Pair: PSPS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd35efae4097d005720608eaf37e42a5936c94b44",
		"Uniswap V3 Pool: 1INCH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd366ed22f5b2262a2da4c32d8a4607c93690134a",
		"Uniswap V2 Pair: CHR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd3772a963790fede65646cfdae08734a17cd0f47",
		"Uniswap V2 Pair: ADX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd3a9a2ebd567030bb1f1c3fb21a4a203d51c246b",
		"Uniswap V2 Pair: WETH - DZOO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd3b4f5b4cf06498e4fbdd71c9da4f5befe01a0ed",
		"Uniswap V3 Pool: CAL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd3ca35355106cb8bc5fd7c534275509673319d83",
		"Uniswap V3 Pool: XMON - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd3d2e2692501a5c9ca623199d38826e513033a17",
		"Uniswap V2 Pair: UNI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd3d8c734f06229e36febd07505d8f57b7b78af7c",
		"Uniswap V2 Pair: USDT - ZKS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd3e5ca0afeae61a24ff7a9219067e51f4bfdd8d9",
		"Uniswap V2 Pair: UMAD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd3e9895230e8fb1460852f6cda3c4b926fbc29d8",
		"Uniswap V3 Pool: CHEX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd3eba712988df0f8a7e5073719a40ce4cbf60b33",
		"Zapper.Fi: sETH Unipool",
		"Zapper"
	],
	[
		"0xd3f072a309d4abb2c9e0065b5fa7aac9e6ef5a04",
		"Uniswap V2 Pair: POGEX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd40c3016791bf8ae0a21f56939a85599cf945a26",
		"Uniswap V2 Pair: WETH - ZUZALU",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd417f1fcab7947cb4ee838fb73d35b9541ca8211",
		"Uniswap V2 Pair: SWFTC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd420d5f24225702a68ddf21242d5eef816dc2e6d",
		"Uniswap V2 Pair: SPYRO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd4292615a8e9edc07cba49c1a9cbb93b873a181e",
		"Uniswap V3 Pool: WFLOW - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd4405f0704621dbe9d4dea60e128e0c3b26bddbd",
		"Uniswap V2 Pair: BAC - DAI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd44971b88a50f1bdf1e5e0a778e6c573a729a78a",
		"Uniswap V2 Pair: USDT - RENQ",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd46934919d9138d3005c1f8db794f03e7415babd",
		"Uniswap V2 Pair: OTSea - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd49fb52ec8b891109d2062f9010e0e77bc0974f7",
		"Uniswap V2 Pair: WETH - PEPE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd4a22695ff58a19fd543ae119dca5335417d6389",
		"Uniswap V2 Pair: MASYA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd4abf8239f3429a98b5199e7b982ffb31e9b9969",
		"Uniswap V2 Pair: UNITE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd4b230be312fc94f5ec3dd94652bd0e51fb5f750",
		"Uniswap V2 Pair: WETH - KAKUAN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd4d055fce4948dd9925000967a30933f6bd0fb03",
		"Uniswap V2 Pair: WETH - ETHV",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd4d090ac5b3729159f2f69fa1e8800c243ae5b58",
		"Uniswap V2 Pair: WETH - WHOLE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd4dfff4021942fa85d4da93f204ed9b25bf14dfe",
		"Uniswap V2 Pair: XLM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd50123eb4202317c7357c3665beb73a817de6b01",
		"Uniswap V2 Pair: CHUB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd50c5b8f04587d67298915e099e170af3cd6909a",
		"Uniswap V2 Pair: WETH - BTC20",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd51b4c6bef349571aac48793d830da975d25f920",
		"Uniswap V2 Pair: DIAMND - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd5528764584d0a2afe49cfdaa1ef6252d35d2840",
		"Uniswap V2 Pair: WETH - DOGE1",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd561235046bb35e4ca93995ae39db2045af62b9a",
		"Uniswap V2 Pair: WETH - COGE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd563ace91e2748338fed2e170f588c0aed6d087b",
		"Uniswap V2 Pair: greg - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd572d276b699947a043c85f8d66ce311cc85e357",
		"Uniswap V3 Pool: GPU - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd57717362ea0be73e516e5c1b12849db01b9243f",
		"Uniswap V2 Pair: DIREWOLF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd583d0824ed78767e0e35b9bf7a636c81c665aa8",
		"Uniswap V2 Pair: LYXe - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd58b1b5d2148f744e9eb3a87f20bebf3ca5f8974",
		"Uniswap V2 Pair: YFV - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd5ad5ec825cac700d7deafe3102dc2b6da6d195d",
		"Uniswap V3 Pool: BUSD - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd6054455ca2e1aef02178e0462d9ab953bea4e23",
		"Uniswap V2 Pair: DATA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd63751b0fbef5f0153c69d6429ed1429b6f79247",
		"Uniswap V2 Pair: WETH - PONYO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd64224a4c2bed96c75df9517b2d77aebb13f0e37",
		"Uniswap V2 Pair: HXRO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd65754e039dba5ff19ccb0c11786d495b6246ae8",
		"Uniswap V2 Pair: MXH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd65e975c7d0d5871eff8b079120e43c9f377ada1",
		"Uniswap V2 Pair: YOP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd6a309f49cf79542cea91df7b334eb4bd29aa0d7",
		"Uniswap V3 Pool: USDC - STG",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd6a347c998109ac87ccb323f78960c91bbe911cd",
		"Uniswap V2 Pair: BTC2.0 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd6b117076222d95a05032a99f10738103c60d64d",
		"Uniswap V2 Pair: ELON - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd6b88257e91e4e4d4e990b3a858c849ef2dfde8c",
		"Zapper.Fi: Yearn yVault Zap Out",
		"Zapper"
	],
	[
		"0xd6c2af244dd56db3c9d276808eda8b5fb040007b",
		"Uniswap V2 Pair: WETH - WAGMI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd6eb9af2b8a37f5a7451e2a445cb93661a466a66",
		"Uniswap V3 Pool: VMPX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd6ef070951d008f1e6426ad9ca1c4fcf7220ee4d",
		"Uniswap V2 Pair: FLX - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd6f3768e62ef92a9798e5a8cedd2b78907cecef9",
		"Uniswap V2 Pair: FLX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd726e3b6858d81ab6ad5b7cbb7a62ea00c5c25bd",
		"Uniswap V2 Pair: HARRIS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd733ad471aa83eb53a83aa415b380728edba330b",
		"Uniswap V2 Pair: ONIGI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd738e6a2ef2846a643dc68092ad0fd7f5a8eb6f8",
		"Uniswap V3 Pool: WETH - PEPE2.0",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd73ea444eef6faf5423b49be3448e94ed214f1ec",
		"Uniswap V3 Pool: GALA - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd7452bbc6d5acdbd53d544ab4bf84a8dc5aa1b8e",
		"Uniswap V2 Pair: TATE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd74e2d5b2d731073d95ad25992a93720460a84fc",
		"Uniswap V2 Pair: PTERIA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd75d1b30967d94b105f82f572ae7591cc3c48beb",
		"Uniswap V2 Pair: CLS - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd761c3086323e2e88e73c642abec940c5cd6c5f4",
		"Uniswap V2 Pair: PEPE3.0 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd767dafb10d883a4187574090e77c5ff06fb0603",
		"Uniswap V2 Pair: NEX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd76d3bc1e2d5954de690cd9987cc073458ec0e0d",
		"Uniswap V2 Pair: PENGU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd7cef1e0c02b50e9c5852f47736880b66e50acde",
		"Uniswap V2 Pair: KNINE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd7cfbcadaaf6475321cfcf3884f15a93400be658",
		"Uniswap V2 Pair: OCTO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd7f70a72e1693804a42afd9d73c77b2f1f8f8f6d",
		"Uniswap V3 Pool: DOGE20 - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd805fb416585d1d724e29f0e38529b9c7a5db81d",
		"Uniswap V2 Pair: GINU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd83d78108dd0d1dffff11ea3f99871671a52488b",
		"Uniswap V3 Pool: PAX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd845c0db78c434bb85642a3e24a9706a5ccacd84",
		"Uniswap V2 Pair: TIGRA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd860d2685b875ae34594caa3c44bc92231ee69d0",
		"Uniswap V2 Pair: WETH - WOLVERINU",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd876bea7f5121a8e21459224e58aec6c933a16e9",
		"Uniswap V2 Pair: DIA - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd8857e7da2d6e05667c5b9218f97efaaa671f44a",
		"Uniswap V3 Pool: SYN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd8963d93b96f4af6a300e10afe4b103ec2773063",
		"Uniswap V2 Pair: DOG1 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd8a07e9fe071106bf29536b93e8c9a26527af787",
		"Uniswap V2 Pair: BLANK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd8c1c327a7045b0fa27aa7e40ea38c9ac52c1c13",
		"Uniswap V2 Pair: POOF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd8de6af55f618a7bc69835d55ddc6582220c36c0",
		"Uniswap V3 Pool: DYDX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd8e29dc9385b721ddca4f8611d4a6109575b788a",
		"Uniswap V2 Pair: SER - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd90a1ba0cbaaaabfdc6c814cdf1611306a26e1f8",
		"Uniswap V2 Pair: WETH - SWAP",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd90a25826283b1e80f12cdc3b71c10ac6a9824ce",
		"Uniswap V2 Pair: KOCHI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd9159376499936868a5b061a4633481131e70732",
		"Uniswap V2 Pair: VALUE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd94fdb60194fefa7ef8b416f8ba99278ab3e00dc",
		"Uniswap V3 Pool: DINU - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd960b3f4532612dbbfc6d23a709efb9ce2ee4629",
		"Uniswap V3 Pool: WETH - COLON",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd97a2bd632d32e85ebf88a705bdc47e3a25787ab",
		"Uniswap V3 Pool: PSYOP - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd99034942c4a883ff3ed6cda6c91fe505a58eb2e",
		"Uniswap V2 Pair: WETH - DOGE2.0",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd99801cea00c71765dbdeaf28e6ed73759e00824",
		"Uniswap V2 Pair: 🌻ᔕᒪᑌGᒪOᖇᗪ🌻 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd9999f7f26af362207807be9d78daf2c9caacda2",
		"Uniswap V2 Pair: USDT - SG",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd99ddad712f60c6cc8fda09e0c292aed68047216",
		"Uniswap V2 Pair: YFFS - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd99e9c449f40be2809b2c09d4a04114eb559cfaa",
		"Uniswap V2 Pair: SATS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd9a91bb8c926d47c84a31ac7a4c34a38e038cf2e",
		"Uniswap V2 Pair: FEARNOT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd9d39540d61f8d6eb2ee7eedfae93cc09cc24f0e",
		"Uniswap V2 Pair: FOAM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd9d854a1061b8ce606fe904cb29beb6793c88643",
		"Uniswap V3 Pool: Rait - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd9f2a7471d1998c69de5cae6df5d3f070f01df9f",
		"Uniswap V2 Pair: Kendu - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd9f91070371987eee3e500e90de5333e0c43d031",
		"Uniswap V2 Pair: MXC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xda0983905209244a5a39d2db1f665a0f5dcf32fb",
		"Uniswap V2 Pair: WETH - NUCLEUS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xda2d09fbbf8ee4b5051a0e9b562c5fcb4b393b18",
		"Uniswap V2 Pair: WETH - GEKKO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xda3706c9a099077e6bc389d1baf918565212a54d",
		"Uniswap V2 Pair: VIDYA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xda3a20aad0c34fa742bd9813d45bbf67c787ae0b",
		"Uniswap V2 Pair: AKITA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xda659055d50f3995ade8e1858755cf9856aec223",
		"Uniswap V2 Pair: WIGGER - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xda8f06e5e0fc0900fd09ec98a72630d3623e1158",
		"Uniswap V2 Pair: KAIJU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdab040a387cb425357392a6693730e34a289770c",
		"Uniswap V3 Pool: WSB - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdabb0b29fdf826c9ac06b8fcab14435b791bce16",
		"Uniswap V2 Pair: $HOLA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdac866a3796f85cb84a914d98faec052e3b5596d",
		"Uniswap V2 Pair: wZNN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdacf0df40d3aee33f297505ef7166044ee6fa35a",
		"Uniswap V2 Pair: SOLVE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdad1bfa1a3bb330a2389f12fb094b3824585592f",
		"Uniswap V2 Pair: GEKE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdadf443c086f9d3c556ebc57c398a852f6a02898",
		"Uniswap V2 Pair: DOS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdae6d9662c4904026ac311a5fdc8917fdc51971a",
		"Uniswap V2 Pair: WETH - TOOLS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdb02d6827220475ece91893255fdf57bed51aee3",
		"Uniswap V3 Pool: USDC - GPT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdb161bb5bea8917d41f858c0763dd27c0ebf7c2a",
		"Uniswap V2 Pair: GOD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdb1d1c9a42e3d10717c415bd06853ea7ae818823",
		"Uniswap V3 Pool: MRF - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdb28312a8d26d59978d9b86ca185707b1a26725b",
		"Uniswap V2 Pair: STBZ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdb44a4a457c87225b5ba45f27b7828a4cc03c112",
		"Uniswap V2 Pair: RBN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdb4f0e1f537ed1d4bc4714367dec1e2417f35592",
		"Uniswap V2 Pair: SOS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdb58666bb92f9b621067c638dbfe20ae0d461391",
		"Uniswap V2 Pair: SPCT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdb9580b93e4c6f126f74db3a59166a39dda532cd",
		"Uniswap V3 Pool: IAI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdb9cd2f59b930ce823d8b071ba8f2174b59194b5",
		"Uniswap V2 Pair: PRT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdbb9f25705e66385efdd92e333d3bbb3fce13bc2",
		"Uniswap V2 Pair: WETH - KEKE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdbf4ab15815a2ef4ada8814931f9e1a7e6df1dd7",
		"Uniswap V2 Pair: MASK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdc00ba87cc2d99468f7f34bc04cbf72e111a32f7",
		"Uniswap V2 Pair: WETH - LOOKS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdc1d67bc953bf67f007243c7ded42d67410a6de5",
		"Uniswap V2 Pair: KATA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdc24316b9ae028f1497c275eb9192a3ea0f67022",
		"Lido: Curve Liquidity Farming Pool",
		"Lido"
	],
	[
		"0xdc2b82bc1106c9c5286e59344896fb0ceb932f53",
		"Uniswap V2 Pair: WETH - RGT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdc2c21f1b54ddaf39e944689a8f90cb844135cc9",
		"Uniswap V3 Pool: BAL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdc3e94ddf605864b79fce18c7cf974e579001e7b",
		"Uniswap V2 Pair: QUICK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdc3f6f4c00b55f56d5ef6293b762c6483af24a82",
		"Uniswap V2 Pair: ALN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdc43e671428b4e7b7848ea92cd8691ac1b80903c",
		"Uniswap V2 Pair: BONDLY - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdc51312c1fd1728253be2e0c4c214c3ceb2b54ff",
		"Uniswap V2 Pair: EPRO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdc5798d32d879df46ad430e2b43fd0341d0678ef",
		"Uniswap V2 Pair: PRXY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdc6b2c2dc744fd06c4f074bde90c99332d0fda51",
		"Uniswap V2 Pair: GENAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdc7d8cc3a22fe0ec69770e02931f43451b7b975e",
		"Uniswap V2 Pair: EWTB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdc81015e80cabe34bb97388532ed8de78e4ff95b",
		"Uniswap V2 Pair: BAM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdc900845732a53ee8df737efa282a6bc56976e62",
		"Uniswap V2 Pair: PANDORA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdc96e914a3fc00557d9821d8a728841defa6c177",
		"Uniswap V2 Pair: PING - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdc98556ce24f007a5ef6dc1ce96322d65832a819",
		"Uniswap V2 Pair: PICKLE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdca79f1f78b866988081de8a06f92b5e5d316857",
		"Uniswap V2 Pair: MCC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdcad279e517d7be07934ff85949fd6598758ce0b",
		"Uniswap V3 Pool: LUNA - LUNA",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdcd33426ba191383f1c9b431a342498fdac73488",
		"Aave: WETHGateway V2",
		"Aave",
		"images/contracts/aave.png"
	],
	[
		"0xdcd34cf0bb038821cac55db957c00f9f89f01610",
		"Uniswap V2 Pair: MARBLE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdce93ed9ae7c53143e19cf799d156b72d1cc2777",
		"Uniswap V3 Pool: BEN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdcff4c70131b476595b449c7db17cd92663aa513",
		"Uniswap V2 Pair: kSEED - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdd005650ac6805457f4fa6ee1816813ce815e914",
		"Uniswap V3 Pool: USDC - NCR",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdd2e069f0f5bca048ae596ae3309be6763aef236",
		"Uniswap V2 Pair: GORILLA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdd3905b883ce1d037cbbbb588c0b51d20426db68",
		"Uniswap V3 Pool: WETH - MORSE",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdd39323c337c33d0285c1d4228a1a46a8502c79f",
		"Uniswap V2 Pair: HATI - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdd475ebcd9c560cdfdea0461615240071fb12077",
		"Uniswap V3 Pool: HEX - HDRN",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdd5a65da22031b6ae5205fd89f67b5141e4f0ead",
		"Uniswap V3 Pool: UBT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdd5c8950cba7de3e63b1efbac0f67073a1c8a88e",
		"Uniswap V2 Pair: HOSHI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdd5d1a256b25e1087fc3b098b443e96cfa73237d",
		"Uniswap V2 Pair: GEAR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdd642273ab88e5b4701b0bdf23a47b9adb2274b3",
		"Uniswap V3 Pool: PAID - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdd6614b5171c413dac9ae0985df0deeb6ff9573a",
		"Uniswap V2 Pair: NEKO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdd949d1fe117744a38319c7b7dcc045d630bcc8d",
		"Uniswap V3 Pool: WETH - BERRY",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdd97fce8441dabf221b330269750b18ba82b0cd6",
		"Uniswap V2 Pair: LOVE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xddc17b3c8cca8ac990df77beecca02c7c3f85558",
		"Uniswap V2 Pair: WETH - $SHIBP",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xddd23787a6b80a794d952f5fb036d0b31a8e6aff",
		"Uniswap V2 Pair: pepecoin - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xddf8390ced9fad414b1ca1dd4fe14f881c2cfa70",
		"Uniswap V2 Pair: WETH - NTVRK",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xddf9b7a31b32ebaf5c064c80900046c9e5b7c65f",
		"Uniswap V2 Pair: CREAM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xde26d72fcf376a8a98560c8d57b1465715037851",
		"Uniswap V2 Pair: COR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xde2e46992bd4f86471b52f21dac2d7c9f6deac26",
		"Uniswap V2 Pair: ZAP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xde5b7ff5b10cc5f8c95a2e2b643e3abf5179c987",
		"Uniswap V2 Pair: BASE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xde68ad8502874a7d5dd1758f7b0a7831f142b78a",
		"Uniswap V2 Pair: WETH - DIP",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xde6faedbcae38eec6d33ad61473a04a6dd7f6e28",
		"Uniswap V2 Pair: HORD - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xde7ec7b5ed50bb011ebe4a87a9ec0e1e2be050af",
		"Uniswap V2 Pair: HER - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xde90022e08a142d4a2d35aac8d1f2a0264d34ade",
		"Uniswap V3 Pool: 똥코인 - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xde93684627d4e34d6ef96adf5bcabf10bbd8dd81",
		"Uniswap V2 Pair: ALICE - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xde99ddf192483147056dcc0023daa273b2e44e07",
		"Uniswap V2 Pair: JJ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdeba8fd61c1c87b6321a501ebb19e61e610421bf",
		"Uniswap V2 Pair: BOOE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdec87f2f3e7a936b08ebd7b2371ab12cc8b68340",
		"Uniswap V2 Pair: WETH - FCL",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xded5dd6eae725021f99dd690a9b341b35b702811",
		"Uniswap V2 Pair: PPC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdedf7b429c3a23b1b243a7348934745772b50c84",
		"Uniswap V2 Pair: DBI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdef1c0ded9bec7f1a1670819833240f027b25eff",
		"0x: Exchange Proxy",
		"0x"
	],
	[
		"0xdefdac77a9a767a2c4eed826e1aead2dace53e1c",
		"Uniswap V3 Pool: WETH - ETHFI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdf0cc50b99cf9d8c755a1f8882402ecde9448f77",
		"Uniswap V2 Pair: GROK2 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdf27a38946a1ace50601ef4e10f07a9cc90d7231",
		"Uniswap V2 Pair: SYN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdf42388059692150d0a9de836e4171c7b9c09cbf",
		"Uniswap V2 Pair: WETH - KISHIMOTO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdf44622fc41d706d6d3cfe1d22dcf80b170c2ab2",
		"Uniswap V2 Pair: HONEYCOIN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdf4f3749bb4e96bf91a67c7e873d9c04198d924a",
		"Uniswap V2 Pair: WAGMIGAMES - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdf50fbde8180c8785842c8e316ebe06f542d3443",
		"Uniswap V3 Pool: FEI - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdf527342aaedfc0683f4c75ad791a51e8aafaf4a",
		"Uniswap V2 Pair: USDC - AMPLIFI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdf60e6416fcf8c955fddf01148753a911f7a5905",
		"Uniswap V2 Pair: KUMA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdf6581b1da6a120882f5029939ebdd1ebd94aef5",
		"Uniswap V3 Pool: WETH - RPILL",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdf6b861b4fbcfaffb62dd1906fcd3a863955704b",
		"Uniswap V2 Pair: BUILD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdf71525e5c7435ef860909547d1589e53c004f03",
		"Uniswap V3 Pool: WETH - INS",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdf8ef47910ce4a196f83b86b80809f1c5201650a",
		"Uniswap V2 Pair: SQUID - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdf9ab3c649005ebfdf682d2302ca1f673e0d37a2",
		"Uniswap V3 Pool: WETH - BTRFLY",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdfa42ba0130425b21a1568507b084cc246fb0c8f",
		"Uniswap V2 Pair: USDC - GRT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdfc14d2af169b0d36c4eff567ada9b2e0cae044f",
		"Uniswap V2 Pair: AAVE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdfc620f4243a09a6b618f24d5b7481cdef463536",
		"Uniswap V2 Pair: GROK2.0 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdfcf744c8ae896e8631ba9b9dc717546646f6708",
		"Uniswap V2 Pair: WETH - SAITO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdfdc7baa7e9fa5c491fd2b453c4bc54249323406",
		"Uniswap V2 Pair: WETH - MELLSTROY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdfde79f36d2a76a1e096504d241c7d82c5cd22fe",
		"Uniswap V3 Pool: WETH - FINALE",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdfe317f907ca9bf6202cddec3def756438a3b3f7",
		"Uniswap V2 Pair: PHNX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdfea03ed1ec53116cd6ea45373cbb6e8823ef59d",
		"Uniswap V2 Pair: LGCY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdffe798c7172dd6deb32baee68af322e8f495ce0",
		"0x: Asset Proxy Owner",
		"0x"
	],
	[
		"0xe0076d311a4628516d157ad684dbd2ddada3dafe",
		"Uniswap V2 Pair: ROKO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe03a338d5c305613afc3877389dd3b0617233387",
		"Zapper.Fi: Curve Zap Out 2",
		"Zapper"
	],
	[
		"0xe0554a476a092703abdb3ef35c80e0d76d32939f",
		"Uniswap V3 Pool: USDC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe05d099bfd7f4aa9f2e696f6c3ebe181479961a5",
		"Uniswap V2 Pair: AIMBOT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe05e33249310a13e9bafac1f3886b7a08d351ea7",
		"Uniswap V2 Pair: USPEPE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe05e653453f733786f2dabae0ffa1e96cfcc4b25",
		"Uniswap V3 Pool: HEX - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe061b362aa157a5037b225570cff9ebf1d657929",
		"Uniswap V3 Pool: L3 - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe06e1c61a4c220db5f1ae89f9a5839efbb00be7d",
		"Uniswap V2 Pair: QF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe081eeab0adde30588ba8d5b3f6ae5284790f54a",
		"Uniswap V3 Pool: USDC - FOLD",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe0b1433e0174b47e8879ee387f1069a0dbf94137",
		"Uniswap V2 Pair: SWM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe0cc5afc0ff2c76183416fb8d1a29f6799fb2cdf",
		"Uniswap V2 Pair: XIO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe0cfa17aa9b8f930fd936633c0252d5cb745c2c3",
		"Uniswap V3 Pool: DYDX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe0da4e7b3f34aa8c9fd37880b8c4c36a0109a69b",
		"Uniswap V2 Pair: bXIOT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe0deb97487bddf4c28ab1aa169179db0da625b29",
		"Uniswap V2 Pair: WETH - FWT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe0fe0440a7121a8815a49de4f15508123c4102e7",
		"Uniswap V2 Pair: DEGEN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe11ee9c18d03b43d6a7fc53e51aedda8451e837a",
		"Uniswap V3 Pool: WETH - PLU",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe12644b23aaa654eadc72050641d0ff8d2f32d52",
		"Uniswap V3 Pool: RUG - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe13e2d8ff2863f3900095c12c57870c4529b76a1",
		"Uniswap V2 Pair: Fluffington - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe1525583c72de1a3dada24f761007ba8a560e220",
		"Uniswap V2 Pair: WETH - DGI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe1573b9d29e2183b1af0e743dc2754979a40d237",
		"Uniswap V2 Pair: FXS - FRAX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe15e6583425700993bd08f51bf6e7b73cd5da91b",
		"Uniswap V3 Pool: WBTC - BADGER",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe16be1798f860bc1eb0feb64cd67ca00ae9b6e58",
		"Uniswap V3 Pool: WETH - ENJ",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe194682786b24439fea30aa5b0778b9d25b5a17c",
		"Uniswap V2 Pair: WETH - TKING",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe1ae2769d69e823567157ad40cf89466cd615ed1",
		"Uniswap V2 Pair: PPAY - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe1d92f1de49caec73514f696fea2a7d5441498e5",
		"Uniswap V3 Pool: LRC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe1de07566ceb19d2e45b60b491776ab74c9b8d7a",
		"Uniswap V2 Pair: WETH - Shib2.0",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe1ebbf10ff289a646d55d717b0bb891ba285bd32",
		"Uniswap V2 Pair: C2H6 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe1ebdf64f7f3a31723e767a561345f958233bb7d",
		"Uniswap V2 Pair: BRETT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe1ed26a9e036a6bc63faf5e7979a4f22e80e5a04",
		"Uniswap V2 Pair: WETH - QUBY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe20745b629df6456dc8840ff4bc6e275459b3edf",
		"Uniswap V2 Pair: TAMA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe2104015943a33772f02a2a104ebdd19342c1430",
		"Uniswap V2 Pair: MOPS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe21876afd4c632b22870df250e5df1754c1875e8",
		"Uniswap V3 Pool: WETH - BSSB",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe224cf6068e394ff86db036a7918c95aa67df3f6",
		"Uniswap V2 Pair: BIRDDOG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe227affef9b1d629b6331d5e97e32061a8cb0764",
		"Uniswap V2 Pair: VI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe236416af855196acb1cd16712a2311ccc9c950d",
		"Uniswap V2 Pair: UNIDX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe240496565eb09bf4402732872ea4d76c0c1af05",
		"Uniswap V2 Pair: SENT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe2680fd7cdbb04e9087a647ad4d023ef6c8fb4e2",
		"Uniswap V3 Pool: HUNT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe2710f0f14daa5b8ad2c82919362a10703ad10e6",
		"Uniswap V2 Pair: AXE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe275eb6154cb4a73f0ba573e43b2b06e9e78b7f0",
		"Uniswap V2 Pair: WETH - FSW",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe28ea5c12c2f83390c3448b6e3781d459937b7b1",
		"Uniswap V2 Pair: COSMIC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe297c3f3f0190b8341dd543d2d552248207af23a",
		"Uniswap V3 Pool: GAS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe2a1d215d03d7e9fa0ed66355c86678561e4940a",
		"Uniswap V2 Pair: DFT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe2aab7232a9545f29112f9e6441661fd6eeb0a5d",
		"Uniswap V2 Pair: YAM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe2dbeb472caaf6f94d1eb53c8552ed837ad6bd60",
		"Uniswap V2 Pair: SNM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe2f021411a15f677100a79f1bf6afd89d00c778b",
		"Uniswap V2 Pair: SLINK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe308d7b56319305ffb9b75ab50fee2c91933ce7a",
		"Uniswap V3 Pool: BEFI - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe30dde2db47014525b32f3b8423efb94f9c120a0",
		"Uniswap V2 Pair: MONOPOLY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe3170d65018882a336743a9c396c52ea4b9c5563",
		"Uniswap V3 Pool: DMT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe331de28cd81b768c19a366b0e4e4675c45ec2da",
		"Uniswap V3 Pool: XYO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe3385df5b47687405a02fc24322dedb7df381852",
		"Zapper.Fi: SNX Unipool",
		"Zapper"
	],
	[
		"0xe34139463ba50bd61336e0c446bd8c0867c6fe65",
		"Uniswap Uniswap V3 Staker (1.0.2)",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe342253d5a0c1ac9da0203b0256e33c5cfe084f0",
		"Uniswap V2 Pair: WETH - jim",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe34b087bf3c99e664316a15b01e5295eb3512760",
		"Zapper.Fi: Ethereum to Polygon Bridge",
		"Zapper"
	],
	[
		"0xe3550f8399c8622ab2c0b2e48856598321cb9b56",
		"Uniswap V2 Pair: FLRBRG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe388c2168b8e2f812f370ad958eb7d5cdf129acf",
		"Uniswap V2 Pair: WETH - INUINU",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe38ba8d6c4d78cd9ffb32e81c28f3421fa0bb17d",
		"Uniswap V2 Pair: RAGNAR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe3a3de71b827cb73663a24cdb6243ba7f986cc3b",
		"Aave: Interest Rate Strategy V2",
		"Aave",
		"images/contracts/aave.png"
	],
	[
		"0xe3a4f7959f4e4aac08ae3029d3a707ef4ec6da95",
		"Uniswap V3 Pool: TOWER - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe3a89c96f6f0faf69bf4ca7dbed677ee6da97273",
		"Uniswap V2 Pair: ODA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe3b802b8f23c2dc49be016f4ad96db4f32b7bcce",
		"Uniswap V2 Pair: HOTTIE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe3baa96ad46457d9e6cdd4e32abc11e2c124ec49",
		"Uniswap V3 Pool: MATIC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe3bfeac7573847e92ef2e1444f04a891bc331b37",
		"Uniswap V2 Pair: TAIRYO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe3c162081fe092c4f7aa0d6cb97a4b5c2769fc2e",
		"Uniswap V3 Pool: MAPE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe3cc21af229934034b320502fa55cfa1ab7b1493",
		"Uniswap V2 Pair: TROG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe3d3551bb608e7665472180a20280630d9e938aa",
		"Uniswap V2 Pair: WETH - SAITAMA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe3d5291a2e4c1766ecf060f354d2ce38add96914",
		"Uniswap V2 Pair: HIPPO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe3ee3d5f7e9c750490d99ab166edc1886de0a85e",
		"Uniswap V2 Pair: SPI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe3fe800b0de664bf0bca8ad58ecbc73b259047b0",
		"Uniswap V3 Pool: POWR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe405113bfd5b988bdba4a4ca9419a18f9e2828a6",
		"Uniswap V3 Pool: WETH - ADS",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe42318ea3b998e8355a3da364eb9d48ec725eb45",
		"Uniswap V3 Pool: WETH - RPL",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe4253a969c3977d031eab6906f4e6e7335edcd43",
		"Uniswap V2 Pair: WETH - YETIC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe43459ce58e22ad7d33169cf0279f11f549f1892",
		"Uniswap V2 Pair: TUZKI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe444f079e8f69ee32b2707974b5c994fa7dd944a",
		"Uniswap V2 Pair: BOT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe44975f2e85c63ef1a3721994cbbc2a87beeaab0",
		"Uniswap V2 Pair: WAR3 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe45b4a84e0ad24b8617a489d743c52b84b7acebe",
		"Uniswap V2 Pair: AGIX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe46456153cf0e767528f4a4cd3b613d5c4101e48",
		"Uniswap V2 Pair: GAMMA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe46935ae80e05cdebd4a4008b6ccaa36d2845370",
		"Uniswap V2 Pair: OM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe46e6a3c5d4472a04794af7f7ab3862df35c0229",
		"Uniswap V2 Pair: GYOKUTO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe471f93c2be15b64e9ec63bbf485446cb934e8c4",
		"Uniswap V2 Pair: imgnAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe495bfa137b68a037b1f661ed47a44b4fb2a6563",
		"Uniswap V3 Pool: PYR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe495fdfabc7c51c0851e76543c0f552205414894",
		"Uniswap V2 Pair: MDX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe4b7b00a802834bea733f06a0a24a869f2765df7",
		"Zapper.Fi: wBTC LLP 100% wBTC",
		"Zapper"
	],
	[
		"0xe4b8583ccb95b25737c016ac88e539d0605949e8",
		"Uniswap V2 Pair: TRUMP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe4d227eb772a1bdf2ac2e8bd3302a68770c66962",
		"Uniswap V2 Pair: KABO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe4e86c6805884736c0faea1e559c51f37da15812",
		"Uniswap V3 Pool: ENQAI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe4f8f3cb9b33247789e4984a457bb69a1a621df3",
		"Uniswap V2 Pair: WETH - SNOW",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe53533f78787c63735c77c9e2f9c60081b942cdb",
		"Uniswap V2 Pair: FEAR - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe5437565cba444f33f40215afecc92e38e2d1ba9",
		"Uniswap V2 Pair: MYX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe557da50d8be589414beea0d00653e23f40a76c2",
		"Uniswap V2 Pair: EYE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe56c60b5f9f7b5fc70de0eb79c6ee7d00efa2625",
		"Uniswap V2 Pair: WETH - ENJ",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe571b939062474bfeb593a3f80fee9d2265b3b18",
		"Uniswap V2 Pair: FLOKI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe592427a0aece92de3edee1f18e0157c05861564",
		"Uniswap Swap Router",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe59fd78557093a0beb569369ef8f47bc48a32c75",
		"Uniswap V2 Pair: SpillWays - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe5a7ab09e68b2cd335e2bc39e9591b42d29c3115",
		"Uniswap V2 Pair: WETH - INU",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe5c5227d8105d8d5f26ff3634eb52e2d7cc15b50",
		"Uniswap V2 Pair: ALBT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe5d5f8f61b1555f1a27488a122fb3cde2ee16f2b",
		"Uniswap V2 Pair: TOMI - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe5d6fc7323d74ad440ca53d3e53252427ad632ed",
		"Uniswap V2 Pair: BRAINS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe5d741ca7c7913fad61765ae69a1994ca5d11f9f",
		"Uniswap V2 Pair: BILL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe5e8506a590766d738d80affc6b5e538c4b92f82",
		"Zapper.Fi: Compound Zap",
		"Zapper"
	],
	[
		"0xe5ea0e1114ca43d919630ab2026b392d35a0ac2f",
		"Uniswap V2 Pair: WETH - ZINU",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe632ded5195e945a31f56d674aab0c0c9e7e812c",
		"Uniswap V2 Pair: WETH - UBI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe67b950f4b84c5b06ee36ded6727a17443fe7493",
		"Uniswap V3 Pool: HFT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe6936df3d937cfc2ccf5b84ddbfd5455b468bbb9",
		"Uniswap V2 Pair: MONA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe6d7ebb9f1a9519dc06d557e03c522d53520e76a",
		"Uniswap V3 Pool: USDe - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe6da0cbaedc5e1d0490ec2cda283b8d7f007319e",
		"Uniswap V2 Pair: WETH - BEBE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe6e1f4f9b0303ca3878a110061c0ec9b84fddd03",
		"Uniswap V2 Pair: Shiryo-Inu - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe6f19dab7d43317344282f803f8e8d240708174a",
		"Uniswap V2 Pair: KEEP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe6f51e892046cb5b437e0033d990b527ea4367c8",
		"Uniswap V2 Pair: WETH - B20",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe6f65d5017185715a86a4207be8efd7cdfb3c4ef",
		"Uniswap V2 Pair: CATBOY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe6ff8b9a37b0fab776134636d9981aa778c4e718",
		"Uniswap V3 Pool: WBTC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe7240d0da75b3ad88ff12b38756c50405ff39fe3",
		"Uniswap V2 Pair: WETH - YFIN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe72767b6f08694c7a0484d419eda074de3b81d1c",
		"Uniswap V2 Pair: STARS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe72fa7b3d7c7d988f889a6d5df9f7ff9032d1afb",
		"Uniswap V2 Pair: ASHBIE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe744c74258e567c9814816f30fc2dc06c8a3be47",
		"Uniswap V2 Pair: Aguri - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe744f5e2edfdcb9fdb43b288ecb8b21c8487e888",
		"Uniswap V3 Pool: WETH - DOGEGF",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe74ceca98abb872f32541d0180438aaa9041a2f9",
		"Uniswap V2 Pair: LANDWOLF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe7607a563105f7dba8beb87ad7f5b3a9ec793958",
		"Uniswap V2 Pair: INFI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe76549ec7d8d0aee5717e7c50f8daa7b65d39a80",
		"Uniswap V2 Pair: AMC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe79bac885fc86b861b9ca4866c022c85bb801e35",
		"Uniswap V2 Pair: ASG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe7b0c13adb5ab3323d07734a469709b05d15a762",
		"Uniswap V2 Pair: WETH - OBOT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe7f6720c1f546217081667a5ab7febb688036856",
		"Uniswap V3 Pool: AXL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe80a9a878c4bed81f3803de10beff08ca8cd8c61",
		"Zapper.Fi: Mushrooms Zap In",
		"Zapper"
	],
	[
		"0xe818c14f926a17918b5a32b850af1acc00e25521",
		"Uniswap V2 Pair: KNDM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe82701fd630c91d35cdb923516c6a466ecdd0d05",
		"Uniswap V2 Pair: REPUBLICAN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe838f6d7f4efb8a2dda62f0062a86746bd809ea1",
		"Uniswap V2 Pair: Zeus - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe859041c9c6d70177f83de991b9d757e13cea26e",
		"Uniswap V3 Pool: HDRN - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe86204c4eddd2f70ee00ead6805f917671f56c52",
		"Uniswap V2 Pair: WBTC - DIGG",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe866771b1606356d0fc5c505049f005851771d9b",
		"Uniswap V2 Pair: SAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe87e0be74368c8e153771dd4b2dee3ad3626fc4f",
		"Uniswap V2 Pair: CAT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe8a70a8969bfe897e656ad3ac1fc4950bd751566",
		"Uniswap V2 Pair: NONE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe8b0ce81e206e537fea0c90e085311b72cc7ec04",
		"Uniswap V3 Pool: CNC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe8b85a4a7e5fbd5fc21784dfa05b5aa78ceb5d83",
		"Uniswap V2 Pair: WETH - PC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe8b977aa5a9303fa94818441d78575e0f697ae72",
		"Uniswap V3 Pool: WETH - UOS",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe8c6c9227491c0a8156a0106a0204d881bb7e531",
		"Uniswap V3 Pool: MKR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe8d770d58c7bb05801a8d28d8502eb87efdb1201",
		"Uniswap V2 Pair: PHRYGES - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe8edd9968245873176e30548147efdd13e0b22f4",
		"Uniswap V2 Pair: WETH - BOSON",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe931b03260b2854e77e8da8378a1bc017b13cb97",
		"Uniswap V3 Pool: 1INCH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe935fac6b950539f37450f80c76325a6b2232725",
		"Uniswap V3 Pool: VINU - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe936f0073549ad8b1fa53583600d629ba9375161",
		"Uniswap V3 Pool: RNDR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe93dc496dbc669d7ee4f03b0eb0a10bb13a4b2a4",
		"Uniswap V2 Pair: USDC - DUCK",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe93e052ae72b2b4958c9ca51b41c31e4089bda52",
		"Uniswap V2 Pair: Mary - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe94272661fd46362e5dd247221e0fc018a298d09",
		"Uniswap V2 Pair: STND - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe945683b3462d2603a18bdfbb19261c6a4f03ad1",
		"Uniswap V2 Pair: BOBO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe964d013d193354170ad1d3d8e500f6d26334f45",
		"Uniswap V2 Pair: BART - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe9672a2094544d4d701066d57ff5a64078a4bcd8",
		"Uniswap V2 Pair: MCC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe9766b5f6de2ee9034c277b9c0dd2618e2ce356b",
		"Uniswap V2 Pair: SHINTAMA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe977868ffae44fda3478eef990c89ca353a13264",
		"Uniswap V2 Pair: USHI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe98d3fff3fad49d2eddcd276e8efea03e7475eb3",
		"Uniswap V2 Pair: BEAST - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe98f89a2b3aecdbe2118202826478eb02434459a",
		"Uniswap V2 Pair: DAI - DEBASE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe99191b4a562ccb416ea8e00085e13105cf80639",
		"Uniswap V2 Pair: BIAO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe9bd6ddc2b13f46715382f74534950e004399d10",
		"Uniswap V2 Pair: DOGIRA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe9d6de22ddeefda405fea20026cf2e3f92745b97",
		"Uniswap V2 Pair: WETH - USKITA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe9da0a86a1aae9f68af1c8b4f884a15f97d7064c",
		"Uniswap V2 Pair: WETH - PROMPTIDE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe9e12db15d8a0ec338f148ffd9dc9606312a6b28",
		"Uniswap V3 Pool: MC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe9fb9f0d5b9c2281fae854156317714f9c6ce951",
		"Uniswap V2 Pair: WL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xea02e0f8f470de1107cb336f827c4192117574bb",
		"Uniswap V2 Pair: USDT - REEF",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xea3fa123eb40ceeaeed390d8d6de6af95f044af7",
		"Uniswap V2 Pair: JACY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xea4ba4ce14fdd287f380b55419b1c5b6c3f22ab6",
		"Uniswap V3 Pool: COMP - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xea639dfb59d652ab056a2194ff3d9d7ad9744d07",
		"Uniswap V2 Pair: RICK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xea6a96c50dee02e6f711c7a2bebb015ccbb8673b",
		"Uniswap V2 Pair: SA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xea7952fac7ff6e997d895c1566599b86b91444c0",
		"Uniswap V2 Pair: DAI - UBI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xea7d10e9b963e28a2a59429f44cd7922482000b7",
		"Uniswap V3 Pool: IPOR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xea8091470479b457792f2f56a4e58c7329bc1b1d",
		"Uniswap V2 Pair: WETH - YFFC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xea9db754525ae50ef7bbfa1b41e59fce87142fac",
		"Uniswap V2 Pair: GYOSHI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeaabb2ee89221455302d9ffb5325689ff8f0c37b",
		"Uniswap V2 Pair: IC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeac15fc48152506387bbb3c80724fb51054defba",
		"Uniswap V2 Pair: WETH - POPO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeae4c727ea43990ea92f427da36ddff8e72f6854",
		"Uniswap V2 Pair: WETH - COCO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeaf24c54d3d531c0cc9130a500170e9c77fdc1b3",
		"Uniswap V2 Pair: Partyslut - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeb1b2622e07bcf5362b6f735e182e54e9bc75ba8",
		"Uniswap V2 Pair: TIP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeb2eae8a9912a09cb0f13bfafd5ad56cd263bb3f",
		"Uniswap V2 Pair: DGX-1 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeb30726db589d49ecaf975c6915e9b8ff7551b10",
		"Uniswap V2 Pair: APE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeb4626c5149894022c2066120ea7f20f217995fb",
		"Uniswap V3 Pool: WETH - ACH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeb4664d8229dde455dca168a404ed6c03d4bb701",
		"Uniswap V2 Pair: URUS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeb4770eea58fefab132663b852a8b7a35a843c71",
		"Uniswap V2 Pair: EPAN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeb4b2b5e0eae7a0eadd0673ef8c3c830f8762f28",
		"Uniswap V2 Pair: REQ - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeb56ff323885ad703bb44fd5805dbfeaec7e421b",
		"Uniswap V2 Pair: WFAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeb5c52e8af57334fab0b5f3d888990c108545527",
		"Uniswap V3 Pool: WETH - WRLD",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeb7b5294c79b0369315ed7fe76b52d3108b0a62d",
		"Uniswap V2 Pair: USDC - JAY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeb8195bd9ac4ffd3be2056db1a8e8c66b2708028",
		"Uniswap V2 Pair: BNF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeba5d22bbeb146392d032a2f74a735d66a32aee4",
		"Uniswap V2 Pair: SHRIMP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xebbc72c68557406d6d0c7ff0aa0a86177f8994ab",
		"Uniswap V2 Pair: PMPY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xebcd8cab46e5b6f70ff621e612edd06e7baacd8c",
		"Uniswap V2 Pair: TEQ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xebce363564fa8b55d85aaf681156087116b148db",
		"Uniswap V3 Pool: FLC - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xebd0571f5ac7aa2c93ba5920576cd6e314d16eb3",
		"Uniswap V2 Pair: WETH - MVERSE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xebd5e23927891fbfda10487ccc9a1a1a7b9a4210",
		"Zapper.Fi: Lender",
		"Zapper"
	],
	[
		"0xebd754bbbf9b4b6ea9535bd041044e8e5aacc498",
		"Uniswap V2 Pair: FREE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xebe9cfd978f0db637d920e4ed4ae10282d9aba17",
		"Uniswap V2 Pair: WETH - $ANRX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xebee0cf6ab1bf5b9e9be1a9348632c79089d3b6a",
		"Uniswap V2 Pair: NEWINU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xebeede6eb77339020e78e69249852f938388110c",
		"Uniswap V2 Pair: LINDA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xebfb684dd2b01e698ca6c14f10e4f289934a54d6",
		"Uniswap V2 Pair: UNI - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xebfeb540282bbea9721c4d486f53c609b87f95da",
		"Uniswap V2 Pair: BRETT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xec2061372a02d5e416f5d8905eea64cab2c10970",
		"Uniswap V3 Pool: WETH - RSC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xec2895df12b25970640a179a680dd74094b39aba",
		"Uniswap V2 Pair: Megabot - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xec2d2240d02a8cf63c3fa0b7d2c5a3169a319496",
		"Uniswap V2 Pair: REP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xec5409816efe7151b809c1214b4780131d5f251b",
		"Uniswap V2 Pair: BSL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xec54859519293b8784bc5bf28144166f313618af",
		"Uniswap V2 Pair: DAI - O",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xec6a6b7db761a5c9910ba8fcab98116d384b1b85",
		"Uniswap V2 Pair: TRU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xec745519247642fbf14689ac7254068dffba08e3",
		"Uniswap V2 Pair: ELongD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xec7a1a2896d4b9d7014fa7be2aa936c8a76a8072",
		"Uniswap V2 Pair: MATTER - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xec7a6619c3b5c251ca6ac8ee3d126d66e9541050",
		"Uniswap V2 Pair: WETH - HAPI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xec81c9eb83e464499b09b38510f967d97363745b",
		"Uniswap V2 Pair: CHADS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xecaca2963ebcb5c068cacb86277c4b435a2baf3b",
		"Uniswap V3 Pool: WETH - ICSA",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xecb53d65816444dbbf6a326b8df959caeda3faf9",
		"Zapper.Fi: Super Saver",
		"Zapper"
	],
	[
		"0xecba967d84fcf0405f6b32bc45f4d36bfdbb2e81",
		"Uniswap V2 Pair: FXS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xecbc16e251846d1d37c140d83319690783d0d756",
		"Uniswap V2 Pair: REDPANDA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xecc558b8db3f95d043844442f51187ceb534d17a",
		"Uniswap V2 Pair: VLX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xecea5b1cc2e14bfbc835724b6150160dbc8d0b38",
		"Uniswap V3 Pool: WTK - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xecf678bf1850ac206f42c9e959f72a0ab0e86f77",
		"Uniswap V3 Pool: LADYS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xecfe2c3c1ac0a5a59227a01f3dd7044159b11a57",
		"Uniswap V2 Pair: RAMP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xed06839ed05219b87cbd39dd8f9495e02497bc10",
		"Uniswap V2 Pair: WETH - COCO",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xed196f5f01e8c99ef4c6d77b83ccaf629032a8f2",
		"Uniswap V2 Pair: Nsure - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xed247449a7ca06db5b27b44b2c092f0b48bbdb77",
		"Uniswap V2 Pair: CIV - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xed330afb7a12be60c03b3d5aefa99f6cb5560af0",
		"Uniswap V2 Pair: WETH - GROKAI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xed4a344f5f1c293881fc65ab37d0d07eba130e11",
		"Uniswap V3 Pool: MONAI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xed4cb3766090ce8a6b0894ee82ba11ba5c504209",
		"Uniswap V3 Pool: WAS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xed643618dd5194f243a8f23c7bd786a37a6dcf8b",
		"Uniswap V2 Pair: YFBETA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xed6b5fb20322c2822cd97845261422f9d581b9c4",
		"Uniswap V3 Pool: KARATE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xed6c2f053af48cba6cbc0958124671376f01a903",
		"Uniswap V2 Pair: ALD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xed86244cd91f4072c7c5b7f8ec3a2e97ea31b693",
		"Uniswap V2 Pair: BUND - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xedaedd22e653c504ff6806bf61664292848eb26e",
		"Uniswap V2 Pair: WETH - HEX2T",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xedb536b4f53d1a4ca9a8f5563ed3cdaf7ec69309",
		"Uniswap V2 Pair: Saja - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xedc25e28c40762b64fa8fe139939c9164d5b3805",
		"Uniswap V2 Pair: REVO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xede8dd046586d22625ae7ff2708f879ef7bdb8cf",
		"Uniswap V3 Pool: SNX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xedf1fa564a91a5664f172470c47450af17724757",
		"Uniswap V2 Pair: OCC - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xee0226a033adadc027204e91b92ac4a619d669bd",
		"Uniswap V2 Pair: WETH - MORTY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xee02f9abaa13da2dbad6dd0ae2e23f584f3573b9",
		"Uniswap V2 Pair: AllIn - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xee09d851b4ba4642ab0f8a6ebebb1293fee9c0fb",
		"Uniswap V2 Pair: CLIFF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xee19920b7da72b0520e3c3f367aab7479e89607b",
		"Uniswap V2 Pair: XUSDP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xee6a57ec80ea46401049e92587e52f5ec1c24785",
		"Uniswap TransparentUpgradeableProxy",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0xee802b312a957e00dd7bbc08eec8bb93d40e981d",
		"Uniswap V2 Pair: MILK2 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xee9b50b74a132912cf55e7699ef3aa7ae2b00e0c",
		"Uniswap V2 Pair: RVP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeea71c6641a57c1515f6d0277c0159ba32192267",
		"Uniswap V2 Pair: WETH - XDOGE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeebbce0288149ccaaa839e3e06c5b28ca355c1bf",
		"Uniswap V2 Pair: HRD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeed363729bdb7f9d7b5fce5dbf8bd5cc4fc98f7f",
		"Uniswap V2 Pair: $ELY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeedcd34acd9f87aae1eb47f06e42868e81ad2924",
		"Uniswap V2 Pair: WETH - DDS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeedff72a683058f8ff531e8c98575f920430fdc5",
		"Uniswap V2 Pair: Dione - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeee0ccf611a453662cda435521ff394653b83c3b",
		"Uniswap V2 Pair: SWIFY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeefaa1be6a07aa3dbf2356159d96593edaf9879c",
		"Uniswap V2 Pair: HYPR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeefc2a37f38819d099b9b01aafe782381d15df76",
		"Uniswap V2 Pair: REMIT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xef035f52e5a8974adbf4380e020cd4a0a349c517",
		"Uniswap V2 Pair: KORE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xef41f14369f4abcff4e0b2f6f07ca73a492643a7",
		"Uniswap V3 Pool: WETH - MAGA",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xef5a01f893a81506439572922cc7cb779e7cc91c",
		"Uniswap V2 Pair: MILF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xef5af046047e6553a9c052199f3b44cd4dbff4f0",
		"Uniswap V2 Pair: LAMBO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xef701d5389ae74503d633396c4d654eabedc9d78",
		"0x: Multi Asset Proxy",
		"0x"
	],
	[
		"0xef8cd6cb5c841a4f02986e8a8ab3cc545d1b8b6d",
		"Uniswap V2 Pair: DEPAY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xef94dcd1bf753f43f362a2916a38cc09283a4a14",
		"Uniswap V2 Pair: SU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xef9a9283440b2d7efb9c7dcc17e94e234d5ccccd",
		"Uniswap V3 Pool: sILV2 - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xef9ef6e07602e1e0419a5788f1d85e0698eab077",
		"Uniswap V2 Pair: DORKL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xefa2e1e46b83d572d01521c4c64845b0227b6314",
		"Uniswap V2 Pair: KAPPA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xefbd546647fda46067225bd0221e08ba91071584",
		"Uniswap V3 Pool: RVP - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xefc19ba107bf1ce57a7ab5dea228fffb899abeb0",
		"Uniswap V3 Pool: WETH - DIP",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xefc70a1b18c432bdc64b596838b4d138f6bc6cad",
		"0x: ERC721 Proxy",
		"0x"
	],
	[
		"0xefc73f21bb4645ea4cb1f1b5a674985c590c4070",
		"Uniswap V3 Pool: XFT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xefd69f1ff464ed673dab856c5b9bca4d2847a74f",
		"Uniswap V3 Pool: WETH - LAKE",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xefdf4dfc4e817197851266acf0082a80dab18b24",
		"Uniswap V2 Pair: TET - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xefe908b937ed0caeaeb745ba146a9990ca52e2b6",
		"Uniswap V2 Pair: GONER - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeff2dbe03e67ee5e5a6b645cb61a1c0dcfd890d9",
		"Uniswap V2 Pair: STAK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf00e80f0de9aea0b33aa229a4014572777e422ee",
		"Uniswap V2 Pair: UNI - DAI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf01e605b6335735e31f7f2941e67c9e52afdcaec",
		"Uniswap V2 Pair: WETH - PEIPEI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf043c39a106db6b58c76995f30ba35fd211c3b76",
		"Uniswap V2 Pair: APY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf0451a9db229704189590fdf453ede7293c87a93",
		"Uniswap V2 Pair: oSHIB - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf04543fbf20daee9b0357db966428ef2a4ae0f5a",
		"Uniswap V2 Pair: FTX Token - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf05b4d24ffc067ff75f1b799e09c5badb6693989",
		"Uniswap V2 Pair: hixokdkekjcjdksicndnaiaihsbznnxnxnduje - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf0644757918d29e5a9b9ca62d8a4d599ab9f5109",
		"Uniswap V2 Pair: MAPS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf07a84f0732dfe8eea0d3961bcd8f62c761ff508",
		"Uniswap V2 Pair: HashAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf07c735011c311f55425bf8c534471a0410d85ad",
		"Uniswap V2 Pair: XVG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf0936e53d924d7f442a04c038082a46c77ecc8d8",
		"Uniswap V2 Pair: WETH - RCN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf0a36c6c333200941ea59c390008fc3232eeddbf",
		"Uniswap V2 Pair: RARE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf0cd9981f15695324763a06869d1c1dd90073c2a",
		"Zapper.Fi: ERC20 Inputs",
		"Zapper"
	],
	[
		"0xf0d1109e723cb06e400e2e57d0b6c7c32bedf61a",
		"Uniswap V2 Pair: BEL - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf0d417fc9fb2f1b6efe51b39db7ed60117dcd2e6",
		"Uniswap V2 Pair: WETH - SHANG",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf0d86adea54ee8c498f6d3e803a5d927d68831fa",
		"Uniswap V2 Pair: WETH - SATOSHI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf0dbf3e69b1abd8e16614898c132bb0f11e7e256",
		"Uniswap V2 Pair: YFUEL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf0e3fdf48661cd10d56692f60bd4eccd01e9cf64",
		"Uniswap V2 Pair: YAXIS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf0f93a837cce0054b7c0128fd5ae507f54aca0e7",
		"Uniswap V2 Pair: PRAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf10e8ccdb3f065bf24afa14d08cc6336d4a9a281",
		"Uniswap V3 Pool: GNUS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf12fe47da8b0590da84cbc32ec4084a94a3c4cfd",
		"Uniswap V2 Pair: WETH - RFKJ",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf164fc0ec4e93095b804a4795bbe1e041497b92a",
		"Uniswap V2 Router 01",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf1b5cf831ced19136472b2b385f30384ce14a982",
		"Uniswap V3 Pool: TAMA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf1b63cd9d80f922514c04b0fd0a30373316dd75b",
		"Uniswap V3 Pool: OHM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf1d8258e9ca9437f24b5e46c017a45ed972896ba",
		"Uniswap V2 Pair: WETH - NBU",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf1dc4832d49c9fcfcdb8118cd93f77806f17484c",
		"Uniswap V2 Pair: ALCAZAR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf1ee7348e45ef0e838c705c2eece6d414d4aab3f",
		"Uniswap V2 Pair: DDX - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf1fe852fca1b5a869ef1fe06a2799e1f38b70b84",
		"Uniswap V2 Pair: WQT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf205cae3e3e24024328553c7f1abc13d1cceff42",
		"Uniswap V3 Pool: WBTC - XTP",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf20ef17b889b437c151eb5ba15a47bfc62bff469",
		"Uniswap V2 Pair: LUSD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf20f344c8e21a4d5684c96e4540dd2d7d8f1fb0f",
		"Uniswap V3 Pool: WETH - ZOOA",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf21638ee30e1ee8ccff28c08583f0b5ca208dab1",
		"Uniswap V2 Pair: VERI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf21941b830bd7308234815900bd8456f9e217eb3",
		"Uniswap V2 Pair: TRUCK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf21d9d6ccfb332bee9b92c3a811d809674c5caf7",
		"Uniswap V2 Pair: GENIE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf227e97616063a0ea4143744738f9def2aa06743",
		"Uniswap V2 Pair: QRX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf22fdd2be7c6da9788e4941a6ffc78ca99d7b15c",
		"Uniswap V2 Pair: KIBSHI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf232d640a5700724748464ba8bd8bed21db609a6",
		"Uniswap V2 Pair: SKL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf239009a101b6b930a527deaab6961b6e7dec8a6",
		"Uniswap V3 Pool: PEPE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf248959d7aa50cd47b448f507063eaa6cc5404c4",
		"Uniswap V2 Pair: WETH - PRE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf2498cf36ede4e28c188042a0f2fdf9d89aa4ba8",
		"Uniswap V2 Pair: TOAD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf27ee90c7856f67891c05e33b3a523acf762f47d",
		"Uniswap V2 Pair: WETH - SQUAWK",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf29450019834d7874b4e306275c4334326ac27f1",
		"Uniswap V2 Pair: THE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf294d0b284c628ec25b0619ab67e14e70cb868eb",
		"Uniswap V2 Pair: ERUTA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf2a9e1b9b79d708aa2f333e6abac07a1d87451e1",
		"Uniswap V2 Pair: COLL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf2e157a75afb5f27536ece5cd1734477ec105b4f",
		"Uniswap V2 Pair: WETH - ELONGATE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf2f3e2ab2360ab53e9e3cdef1976a5ba0d3047db",
		"Uniswap V2 Pair: ARTX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf2f84c274f715ba1fe7d1d28a4e377fb59a33386",
		"Uniswap V2 Pair: NAMI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf2f98cbd5d84640a2c5cfda5c996cd830067bc95",
		"Uniswap V2 Pair: RAD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf30d1fc5321998f43aac834037511bbf7fbdc23f",
		"Uniswap V2 Pair: MANDOX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf32bb4cd7a206e3acd9dd1dca730d70499de8f21",
		"Uniswap V2 Pair: CATE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf346d00965776e504930675100c8e2871bd6530d",
		"Uniswap V2 Pair: Skey - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf34c66fbba3daa30429a36b7d606cde45d3d303c",
		"Uniswap V2 Pair: WETH - WSBC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf359492d26764481002ed88bd2acae83ca50b5c9",
		"Uniswap V3 Pool: TEL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf37ed742819ec006b0802df5c2b0e9132f22c625",
		"Uniswap V2 Pair: GEN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf38424fb7da8603e331aca2acb6cef8aed469fe2",
		"Uniswap V2 Pair: eViral 🧬 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf3867885c47f5b4363908e77fa734e39ace87edf",
		"Uniswap V2 Pair: IS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf38a1e9ffb1577e7cd8b5511275c104a62aff724",
		"Uniswap V2 Pair: PVP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf3a150716cb43142d51d1940f336cf8e01ab83a0",
		"Uniswap V3 Pool: FLC - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf3a4b52bf0d1fcb8a81123f44933edbc35af4da0",
		"Uniswap V2 Pair: WETH - ESS",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf3b605ba0beac64160844ca9714c1245cca7cfb1",
		"Uniswap V3 Pool: WETH - FREN",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf3b675df63fb4889180d290a338fc15c0766fd64",
		"Uniswap V2 Pair: SPOOL - DAI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf3da3eed31852a09aa9bc13fee9d716fcaf1af27",
		"Uniswap V2 Pair: BOG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf3dce0483c9362db088f226b6a860e8f0508faf8",
		"Uniswap V2 Pair: HELLO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf3e53d80c29e3cc5fbcdede2a41cc6a19a6d1118",
		"Uniswap V3 Pool: DOVA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf3f09fbdc764e01774f355f763c3acfdfe8a548d",
		"Uniswap V2 Pair: BTC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf3fdcfbfdb96315fc628854627bdd5e363b3ade4",
		"Uniswap V2 Pair: SIPHER - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf421c3f2e695c2d4c0765379ccace8ade4a480d9",
		"Uniswap V2 Pair: BAND - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf43672e89ee98e18b3398942f946c96ef68c1c88",
		"Uniswap V2 Pair: FUFU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf43e889444e95a0429c32b0b601dc16edf90fdbf",
		"Uniswap V2 Pair: AFY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf44876dbfa10609fcdd68cb4122c3a6e1d4acd8f",
		"Uniswap V3 Pool: WMC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf44e8ff3bb644479124e691bf572f7813a1bc499",
		"Uniswap V2 Pair: WETH - EDDA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf464dca6c58bdebe8f01b80de3d50023a862bbc9",
		"Uniswap V2 Pair: BURN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf46dad9ebd66200dcca3b49a4cb0088a2306cf45",
		"Uniswap V3 Pool: WETH - TROLL",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf49144e61c05120f1b167e4b4f59cf0a5d77903f",
		"Uniswap V2 Pair: 1UP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf49c43ae0faf37217bdcb00df478cf793edd6687",
		"Uniswap V2 Pair: WETH - KNC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf4a80c9e5e23d29038bd2023701339dbac649c00",
		"Uniswap V2 Pair: Inuyasha - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf4acdac048c14c5e49bbede0c72444d806a75cde",
		"Uniswap V2 Pair: VANRY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf4ad61db72f114be877e87d62dc5e7bd52df4d9b",
		"Uniswap V3 Pool: LDO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf4c5e0f4590b6679b3030d29a84857f226087fef",
		"Uniswap V3 Pool: MNT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf4d4e16c9a93d88990e0b98820c363369ca91c01",
		"Uniswap V2 Pair: CC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf4e119ab183de666ec99539c2652ce4035ae53d3",
		"Uniswap V2 Pair: JEFFRY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf4eae3218778510cc1d07ed22338d6d8df2adaf1",
		"Uniswap V2 Pair: WETH - DWEB",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf4ef707f3f4166cc79af15959014dbe0ecd7efa3",
		"Uniswap V2 Pair: WETH - DGTX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf52cc785d5f3e7d6ff0ad4e665a929b84f69e7c5",
		"Uniswap V2 Pair: HOE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf5381d47148ee3606448df3764f39da0e7b25985",
		"Uniswap V3 Pool: POLS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf56d08221b5942c428acc5de8f78489a97fc5599",
		"Uniswap V3 Pool: GNO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf5b92789f6cdf1b7c0d7252696433cbe34b61354",
		"Uniswap V2 Pair: ISLE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf5c92780138061a113fd708d4b403e0e830effff",
		"Uniswap V2 Pair: WETH - SHIELD",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf5d896be3349a751b9b383b58cf22f4966dc01ff",
		"Uniswap V2 Pair: BabyTsuka - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf5e875b9f457f2dd8112bd68999eb72befb17b03",
		"Uniswap V2 Pair: $ADS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf5ef67632cd2256d939702a126fe2c047d0a07bf",
		"Uniswap V2 Pair: HOT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf6048f2a7e1c44012265fab271c8eb89bb74bd4e",
		"Uniswap V2 Pair: FORTH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf647830cbd601ea7b6a3c1b38cf037f31ab6ce79",
		"Uniswap V2 Pair: WETH - DAOfi",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf64af01a14c31164ff7381cf966df6f2b4cb349f",
		"Uniswap V2 Pair: WETH - DPX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf64e49c1d1d2b1cfa570b1da6481dc8dc95cd093",
		"Uniswap V2 Pair: UNLEASH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf650233ec6ea1c6717ac4f409f09e6c9ebc8c4d2",
		"Uniswap V2 Pair: wCRES - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf65c9da67e5cfdb097b7e9010e2f509a4b0d4cb2",
		"Uniswap V3 Pool: SATO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf65dfcc3c0f67181a73882fdb3b87b04c46d4633",
		"Uniswap V2 Pair: NARUTO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf66369997ae562bc9eec2ab9541581252f9ca383",
		"Uniswap V2 Pair: PERP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf67041c54a76a071d340dfa7390ae8ef17471f0a",
		"Uniswap V2 Pair: MDAI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf675c0c91ce8be0b604f9bb8e0c596b6fedde3c1",
		"Uniswap V2 Pair: SPL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf6887ad6f3b342840dbea138e8003f2ca14f4500",
		"Uniswap V2 Pair: IOI - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf6a42a1963b34ad95bc82c8afe1cadf27b0abf2d",
		"Uniswap V3 Pool: WETH - ETHM",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf6c3595cbd6858b47e93c83312cef89750cea3a4",
		"Uniswap V2 Pair: WETH - CUBE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf6c4e4f339912541d3f8ed99dba64a1372af5e5b",
		"Uniswap V2 Pair: USDT - HEZ",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf6cf82d8cf698614fc2b3ca8a7efd4b37d62587c",
		"Uniswap V2 Pair: VIRTU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf6d109fab08e84a005f34e1f5f0a8c5a02d0d0e5",
		"Uniswap V2 Pair: SHIDO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf6dcdce0ac3001b2f67f750bc64ea5beb37b5824",
		"Uniswap V2 Pair: HEX - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf6e21e21cb48e1ab575c58d526110f736cd33066",
		"Uniswap V3 Pool: PLSD - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf7031f8b312c541bb57c9a5ac049666c039d013b",
		"Uniswap V2 Pair: DARK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf740b67da229f2f10bcbd38a7979992fcc71b8eb",
		"0x: Exchange Proxy Allowance Target",
		"0x"
	],
	[
		"0xf745b36540a1606f69630da6c6bd9930351b0c68",
		"Uniswap V3 Pool: HDRN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf763bb342eb3d23c02ccb86312422fe0c1c17e94",
		"Uniswap V3 Pool: wTAO - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf766436b551d2acb09b73d126fd49869541dfa26",
		"Uniswap V3 Pool: PKR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf7849d0852fc588210b9c0d8b26f43c0c9bc1470",
		"Uniswap V3 Pool: HOT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf794e9d88a0eca089929ec8a7ce07735a9d8b0eb",
		"Uniswap V2 Pair: SHEI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf79fc43494ce8a4613cb0b2a67a1b1207fd05d27",
		"Uniswap V3 Pool: APE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf7bb3cbe60e63bb3d5dc40fb48f1857b40660b2f",
		"Uniswap V2 Pair: MYTH - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf7d31825946e7fd99ef07212d34b9dad84c396b7",
		"Uniswap V2 Pair: BONE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf7dba49d571745d9d7fcb56225b05bea803ebf3c",
		"Aave: Aave Variable Debt V2",
		"Aave",
		"images/contracts/aave.png"
	],
	[
		"0xf7ef5352de45a20d8c8565cd94a4bd6c8831f749",
		"Uniswap V2 Pair: LINU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf7f381315b218263aa1ef22895a1b20cc70e3651",
		"Uniswap V3 Pool: DORKL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf800e9bf2dcb89ca03917cd549e23c2c436d5649",
		"Uniswap V2 Pair: OFC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf80758ab42c3b07da84053fd88804bcb6baa4b5c",
		"Uniswap V2 Pair: sUSD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf8112c3e34db7e8fd4b21c6d177ba3cd44a2e0f8",
		"Uniswap V2 Pair: GUARDIAN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf827fa9b46745a876637406e2a3bf0a2766b89ba",
		"Uniswap V2 Pair: DUMMY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf82d8ec196fb0d56c6b82a8b1870f09502a49f88",
		"Uniswap V2 Pair: KISHU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf845cba831be88268b1415d976db0afc7b8c6357",
		"Uniswap V3 Pool: DSLA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf848e97469538830b0b147152524184a255b9106",
		"Uniswap V2 Pair: VOW - UNI-V2",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf86d6fe9e28ed805864e2fca51febfe8beca323c",
		"Uniswap V2 Pair: WETH - FLOW",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf879ada5643d19704661020ec4bfe5ff871e62f9",
		"Uniswap V2 Pair: BULEI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf87bb87fd9ea1c260ddf77b9c707ad9437ff8364",
		"Uniswap V3 Pool: WETH - TRIBE",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf88a07aa601662ec10ca84b47c786cee9b506cdf",
		"Uniswap V2 Pair: WETH - DELREY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf8956e715b9aa5897c6e81ce50b4c7256f43df21",
		"Uniswap V2 Pair: FKPEPE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf898301c2807e99abaa39396a696d1202122d23e",
		"Uniswap V2 Pair: UCO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf8a95b2409c27678a6d18d950c5d913d5c38ab03",
		"Uniswap V3 Pool: GALA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf8c904c68dc8484319653c7ec23cb573d5d55de0",
		"Uniswap V2 Pair: BITE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf8f182af67b9fedf229f1ab7ca15fc47160ea607",
		"Uniswap V2 Pair: WYNN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf8fe2525a9e23d0e8892d2a41c087e17eef19971",
		"Uniswap V3 Pool: PSALE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf91c12dae1313d0be5d7a27aa559b1171cc1eac5",
		"Uniswap V2 Pair: ETH2x-FLI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf932ff2b8e73fc5b3543f605b34e9bdf4b12001b",
		"Uniswap V2 Pair: WETH - GMFAM",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf935f557e06a7d040dea4691f90c9a755301818b",
		"Uniswap V3 Pool: SPONGE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf956cdc8f43637f34f4be368fa1cb7da01d622be",
		"Uniswap V2 Pair: AIOZ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf9bc02a0f79ee8b6982a754979c9dbd909ccee10",
		"Uniswap V3 Pool: PORTAL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf9d29c7c0691ca27f076828b4c1de6f6b14c0bda",
		"Uniswap V3 Pool: UBT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf9d66729284db7ec1ecce8b04392fddf54e27bd2",
		"Uniswap V2 Pair: ULTRA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf9de58bfc97b9ebc77d66a130bf66da1ca78f442",
		"Uniswap V2 Pair: TRUMP2024 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf9e18e98a0bb56fe7e663f5ab1170b3105c4c56d",
		"Uniswap V3 Pool: EAI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf9f7f108b3e2323343acf9bd9d34906aa478de6d",
		"Uniswap V3 Pool: MUMU - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf9fdd3a82566cbaf5dd3d3094d8dd9aaa72a1c36",
		"Uniswap V2 Pair: SLM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfa01ce5bd8500d037c13ec7901d1f4b1f2174884",
		"Uniswap V3 Pool: WETH - E",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfa01efd99fa232329ac0a57bce1118379b80925e",
		"Uniswap V2 Pair: KAMALA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfa0ba2d64813016492522ae91bbe1443f7d436c1",
		"Uniswap V2 Pair: CRAZY - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfa19de406e8f5b9100e4dd5cad8a503a6d686efe",
		"Uniswap V2 Pair: ANT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfa45c879fd120d6cc493113ae212a853531f3d91",
		"Uniswap V3 Pool: WETH - NEIRO",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfa4a4c553733f2e0c54f1c4b0ddc1fa2f5f10ce6",
		"Uniswap V3 Pool: basedAI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfa5562729fdc3ed3a52c3aab2e12bd504fd24991",
		"Uniswap V2 Pair: AVG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfa5a486ec5a12307f94fd26125109652ea42b2b7",
		"Uniswap V3 Pool: GOLD - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfa7005f1442b474c9c136cca717d9e41dba02358",
		"Uniswap V2 Pair: WETH - GME",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfa93db946a60c8b81a450719be4a1b287263539e",
		"Uniswap V2 Pair: SHR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfa94ecf472810d0dad9341c9c4b61143b5878c08",
		"Uniswap V2 Pair: BANK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfaa318479b7755b2dbfdd34dc306cb28b420ad12",
		"Uniswap V3 Pool: UNI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfaab5238f5d2163e25518b0c1af205da0f783dd0",
		"Uniswap V2 Pair: $ROPE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfaace66bd25abff62718abd6db97560e414ec074",
		"Uniswap V3 Pool: WETH - RARI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfaad1072e259b5ed342d3f16277477b46d379abc",
		"Uniswap V2 Pair: DEGEN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfaad22e0407c278909590fed9013f37b9e2d1e58",
		"Uniswap V2 Pair: WETH - SMRT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfad44dc24d07ef9be576d562b994f19578d441b8",
		"Uniswap V2 Pair: VPS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfad57d2039c21811c8f2b5d5b65308aa99d31559",
		"Uniswap V3 Pool: LINK - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfadb27d25d5c41cec5d16078a56fa9f5fde46d43",
		"Uniswap V2 Pair: BLOOD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfaff15c6cdaca61a4f87d329689293e07c98f578",
		"Zapper.Fi: Zapper NFT",
		"Zapper"
	],
	[
		"0xfb1c171874d77627ca7c40dc9f8dd69fd2b0b5d0",
		"Uniswap V2 Pair: UST - LUNA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfb2f545a9ad62f38fe600e24f75ecd790d30a7ba",
		"Uniswap V2 Pair: SYNC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfb4492a1cd2a28d08b0b2a3ffa567342ea93776f",
		"Uniswap V2 Pair: ROOT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfb82dd4d657033133eea6e5b7015042984c5825f",
		"Uniswap V3 Pool: WBTC - FBTC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfba31f01058db09573a383f26a088f23774d4e5d",
		"Uniswap V3 Pool: GHST - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfc0dd985f6de9c2322ebd97c3422b0857c4d78c7",
		"Uniswap V2 Pair: ARMOR - DAI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfc354f5cf57125a7d85e1165f4fcdfd3006db61a",
		"Uniswap V3 Pool: wstETH - pzETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfc62bec949e5e18f8050f34ca12ca155b300d960",
		"Uniswap V3 Pool: WUKONG - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfc6f3e19d82868a9386acd23c7118552d04d41e8",
		"Uniswap V2 Pair: BISHU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfc71c763d7c7d2b6b046d0bfe4bd3d927cc5340c",
		"Uniswap V3 Pool: TRADE - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfc747e8eca18489d8c3dbc2dd1b2635d7085bf8a",
		"Uniswap V2 Pair: YUGE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfc74ecdee4e9fff2f2ef4cdf4f1c777b2ef0e905",
		"Uniswap V2 Pair: SUKU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfc835d90ea6557b57b29361d95c4584d389e6ee8",
		"Uniswap V2 Pair: DEGOV - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfc9f572124d8f469960b94537b493f2676776c03",
		"Uniswap V3 Pool: PILOT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfca090c1868004bec9c91f53db013288dc21c55b",
		"Uniswap V2 Pair: WETH - MOD",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfca9090d2c91e11cc546b0d7e4918c79e0088194",
		"Uniswap V3 Pool: XSGD - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfcad5c316f5618a79852f89e1a9b18103e48a456",
		"Uniswap V2 Pair: WETH - ZINU",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfcb910d871d7e94f5a566b7b32fb2b19583c09d7",
		"Uniswap V2 Pair: LCX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfcc3a312a65ffca5d54e61a7d0e6d95e9875f1b1",
		"Uniswap V2 Pair: SOAR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfcc88d59f7b470e84a73ed092fe674eee5d83b19",
		"Uniswap V2 Pair: GenBlok - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfccfea8860dd2fd7d6d89366f7a811dbfdcf7453",
		"Uniswap V2 Pair: WETH - UZUMAKI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfcd13ea0b906f2f87229650b8d93a51b2e839ebd",
		"Uniswap V2 Pair: DOGE - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfcdae85317be9d0239cf11f99f3b7980925ee089",
		"Uniswap V2 Pair: EGT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfcfdfc98062d13a11cec48c44e4613eb26a34293",
		"Uniswap V3 Pool: WETH - COW",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfcfe058efa0be5bccfdd45e2c079997935fe0a64",
		"Uniswap V2 Pair: IDEX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfd0a40bc83c5fae4203dec7e5929b446b07d1c76",
		"Uniswap V2 Pair: FRAX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfd213ee4d00656caaab11c5c507bffac12b1bd4f",
		"Uniswap V3 Pool: NHUB - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfd25539b930279886e7a5bbb0bcf84dc42cac80a",
		"Uniswap V2 Pair: BABYTRUMP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfd29420060464b69f2e1804b685354c31687121e",
		"Uniswap V2 Pair: WETH - COL",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfd76be67fff3bac84e3d5444167bbc018f5968b6",
		"Uniswap V3 Pool: WETH - IMX",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfd79505aa075007ef1f1165c4de3562bb48b9bd2",
		"Uniswap V3 Pool: WETH - шайлушай",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfdc650aac7faa54be1b33cd161a9242aaf62c42d",
		"Uniswap V2 Pair: FEARNOT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfdca97838dfb8264db6eb7cfbea6e33c3e726417",
		"Uniswap V2 Pair: WETH - BEPE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfdcded6927a686b27254620752367bd6fe62fb0e",
		"Uniswap V2 Pair: WETH - INFRA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfdf7abe583d7f0b340b196a64b5bb67937e2e188",
		"Uniswap V2 Pair: HERRIS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfe0c4acfa8fc6dea7887cd633b995fd4503b4eda",
		"Uniswap V2 Pair: IBTC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfe0df74636bc25c7f2400f22fe7dae32d39443d2",
		"Uniswap V3 Pool: RBN - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfe17ab3f63038b3b5bc400d6691b2f4d50a33bf0",
		"Uniswap V2 Pair: PAPI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfe4ec8f377be9e1e95a49d4e0d20f52d07b1ff0d",
		"Uniswap V3 Pool: GLM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfe73c784d047ff1bfc06230d6001ddc9ff1f59bb",
		"Uniswap V2 Pair: AEGIS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfe7956987a2c5ac0650b27d83e1d46ac83d29265",
		"Uniswap V2 Pair: LENDS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfe796ba940256e65048d1e6b52ec8755067c7145",
		"Uniswap V2 Pair: VOLT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfe7aff6f4f1b0d9f65767e96573e6df8b1ff5920",
		"Uniswap V3 Pool: JUSTICE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfe8fd9909e94f1454e6cb47d61643ad634d3d846",
		"Uniswap V2 Pair: FROG - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfe903a12359496b932e24c5e9b78f1b9060a6342",
		"Uniswap V2 Pair: PKF - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfe9e7931e55c514c33d489c88582fa36e84bd8e3",
		"Uniswap V2 Pair: ORDS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfeb09c7e130a4b87b27ebd648ec485657b688b34",
		"Uniswap V3 Pool: BYTES - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfebf38b1d34818d4827034f97b7d6d77c79d4997",
		"Uniswap V3 Pool: SPELL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfee4800067bfc9dff564d116cba4d4b16ca7b7b3",
		"Uniswap V2 Pair: KEANU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfeeed96fdcaa5632c7def0bc18c483f1d9f6079b",
		"Uniswap V2 Pair: WETH - ETHM",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xff00f45a9cd1b4044c449aa09c05613c2ce4f098",
		"Uniswap V2 Pair: ORDER - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xff03d5b2cae32a09ef00b5daec5d3149d2b1842b",
		"Uniswap V2 Pair: WETH - MADA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xff05c58c840a09e58228ea868453b92900b64311",
		"Uniswap V2 Pair: WETH - CHWY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xff29d3e552155180809ea3a877408a4620058086",
		"Uniswap V3 Pool: DUSK - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xff2c97303089b6af24c4b424047b7c192dfd2e85",
		"Uniswap V3 Pool: SOS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xff406e8eab0aa735f489903da0ec24ab258df9a1",
		"Uniswap V2 Pair: WETH - #MAGA",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xff43796acf6fa0b12f4acb743644d3159ca7a1af",
		"Uniswap V2 Pair: GTX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xff58711683be66dad6e0e20e0043af46fc7f5f49",
		"Uniswap V2 Pair: CHZ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xff62e62e8b3cf80050464b86194e52c3ead43bb6",
		"Uniswap V2 Pair: WETH - COIN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xff72e5ca70a1ec9a9a3758a5638b3f299895add0",
		"Uniswap V2 Pair: BDS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xff734dcb7fd6517caed5c6c8720992a0c676c800",
		"Uniswap V2 Pair: STRK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xffa98a091331df4600f87c9164cd27e8a5cd2405",
		"Uniswap V2 Pair: POLS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xffc8305f88ca38901bf1407567a5d0e17a9c680e",
		"Uniswap V2 Pair: WETH - Chainback Web3 Internet Archive",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xffd49f81d1b312f019d33774d1c0805a355d9ad8",
		"Uniswap V2 Pair: WETH - PYUSD",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xffe8df2f623bfd954d785809185beb291330c70d",
		"Uniswap V2 Pair: UPI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfffa78c979c2f787b16eac7c7e9c77b11feb77fb",
		"Uniswap V2 Pair: Emoti - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	]
] as const