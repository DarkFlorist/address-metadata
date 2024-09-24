
export type Address = `0x${ string }`
export type Name = string
export type Symbol = string
export type NftType = 'ERC1155'
export type LogoRelativePath = `/images/${ string }`
export type Abi = string
export type Erc1155MetadataWithLogoAndAbi = readonly [Address, Name, Symbol, NftType, LogoRelativePath, Abi]
export type Erc1155MetadataWithLogo = readonly [Address, Name, Symbol, NftType, LogoRelativePath]
export type Erc1155MetadataWithoutLogo = readonly [Address, Name, Symbol, NftType]

export type Erc1155MetadataData = readonly (Erc1155MetadataWithLogo | Erc1155MetadataWithoutLogo | Erc1155MetadataWithLogoAndAbi)[]

export const erc1155MetadataData: Erc1155MetadataData = [
	[
		"0x055f16af0c61aa67176224d8c2407c9a5628bcca",
		"archive edition",
		"AE",
		"ERC1155",
		"/images/nfts/0x055f16af0c61aa67176224d8c2407c9a5628bcca.png"
	],
	[
		"0x0fe66e38e81dde40134454d7af433fe6ddb537d9",
		"Memeditions by Yonvisuals",
		"EBY",
		"ERC1155",
		"/images/nfts/0x0fe66e38e81dde40134454d7af433fe6ddb537d9.png"
	],
	[
		"0x1f8483664620ff1278f4c1b0d11e4d7daa11a035",
		"3LAND INVENTORY",
		"3LAND INVENTORY",
		"ERC1155",
		"/images/nfts/0x1f8483664620ff1278f4c1b0d11e4d7daa11a035.png"
	],
	[
		"0x2079812353e2c9409a788fbf5f383fa62ad85be8",
		"Bobu, the Bean Farmer",
		"Bobu, the Bean Farmer",
		"ERC1155",
		"/images/nfts/0x2079812353e2c9409a788fbf5f383fa62ad85be8.png"
	],
	[
		"0x212590b0dac9502e0591b79db4cedeb6356dcc36",
		"RTFKT x NIKE AR HOODIE PRE FORGED",
		"RTFKT x NIKE AR HOODIE PRE FORGED",
		"ERC1155",
		"/images/nfts/0x212590b0dac9502e0591b79db4cedeb6356dcc36.png"
	],
	[
		"0x226bf5293692610692e2c996c9875c914d2a7f73",
		"oncyber labs",
		"oncyber labs",
		"ERC1155",
		"/images/nfts/0x226bf5293692610692e2c996c9875c914d2a7f73.png"
	],
	[
		"0x26dea1f35a2f240968f42330ad9528f416c80a17",
		"Build an Ape by Reido",
		"BAPES",
		"ERC1155",
		"/images/nfts/0x26dea1f35a2f240968f42330ad9528f416c80a17.png"
	],
	[
		"0x277f448a4d43318ea626fd224b3bf77295387d68",
		"STM!",
		"STM",
		"ERC1155",
		"/images/nfts/0x277f448a4d43318ea626fd224b3bf77295387d68.png"
	],
	[
		"0x28472a58a490c5e09a238847f66a68a47cc76f0f",
		"adidas Originals Into the Metaverse",
		"ADI",
		"ERC1155",
		"/images/nfts/0x28472a58a490c5e09a238847f66a68a47cc76f0f.png"
	],
	[
		"0x286e531f363768fed5e18b468f5b76a9ffc33af5",
		"Nyan Balloon",
		"NyanBall",
		"ERC1155",
		"/images/nfts/0x286e531f363768fed5e18b468f5b76a9ffc33af5.png"
	],
	[
		"0x2b5f2fc733acd1521a9efc6c4f354cdd7eec6c1b",
		"Rifters: Keys",
		"RiftersKeys",
		"ERC1155",
		"/images/nfts/0x2b5f2fc733acd1521a9efc6c4f354cdd7eec6c1b.png"
	],
	[
		"0x33cfae13a9486c29cd3b11391cc7eca53822e8c7",
		"MetaHero: MintPass",
		"PASS2",
		"ERC1155",
		"/images/nfts/0x33cfae13a9486c29cd3b11391cc7eca53822e8c7.png"
	],
	[
		"0x33fd426905f149f8376e227d0c9d3340aad17af1",
		"The Memes by 6529",
		"The Memes by 6529",
		"ERC1155",
		"/images/nfts/0x33fd426905f149f8376e227d0c9d3340aad17af1.png"
	],
	[
		"0x3b1417c1f204607deda4767929497256e4ff540c",
		"WAGMI United",
		"WAGMI",
		"ERC1155",
		"/images/nfts/0x3b1417c1f204607deda4767929497256e4ff540c.png"
	],
	[
		"0x495f947276749ce646f68ac8c248420045cb7b5e",
		"OS Shared Storefront Collection",
		"OPENSTORE",
		"ERC1155",
		"/images/nfts/0x495f947276749ce646f68ac8c248420045cb7b5e.png"
	],
	[
		"0x497a9a79e82e6fc0ff10a16f6f75e6fcd5ae65a8",
		"77-Bit",
		"RONIN",
		"ERC1155",
		"/images/nfts/0x497a9a79e82e6fc0ff10a16f6f75e6fcd5ae65a8.png"
	],
	[
		"0x4fb5fd0dc795104b040edf8a91d4876dffc50460",
		"Audio Galleries",
		"BW",
		"ERC1155",
		"/images/nfts/0x4fb5fd0dc795104b040edf8a91d4876dffc50460.png"
	],
	[
		"0x50beffd8a0808314d3cc81b3cbf7f1afa3a6b56c",
		"Sr Bananos by GodHatesNFTees",
		"BNNO",
		"ERC1155",
		"/images/nfts/0x50beffd8a0808314d3cc81b3cbf7f1afa3a6b56c.png"
	],
	[
		"0x5c891d76584b46bc7f1e700169a76569bb77d2db",
		"OKXFootballCup",
		"OKXFC",
		"ERC1155",
		"/images/nfts/0x5c891d76584b46bc7f1e700169a76569bb77d2db.png"
	],
	[
		"0x66ec993bc3b6f235583a64a67bd4d6d9d5ac84d5",
		"Kiyoshi's Seeds Project",
		"KSP",
		"ERC1155",
		"/images/nfts/0x66ec993bc3b6f235583a64a67bd4d6d9d5ac84d5.png"
	],
	[
		"0x6d4bbc0387dd4759eee30f6a482ac6dc2df3facf",
		"RTFKT X NIKE Trillium Lace Engine",
		"RTFKT X NIKE Trillium Lace Engine",
		"ERC1155",
		"/images/nfts/0x6d4bbc0387dd4759eee30f6a482ac6dc2df3facf.png"
	],
	[
		"0x728863d7e094ae5ffd91dcc365099666020d7a51",
		"The Nakamotos",
		"Naka",
		"ERC1155",
		"/images/nfts/0x728863d7e094ae5ffd91dcc365099666020d7a51.png"
	],
	[
		"0x73da73ef3a6982109c4d5bdb0db9dd3e3783f313",
		"My Curio Cards",
		"My Curio Cards",
		"ERC1155",
		"/images/nfts/0x73da73ef3a6982109c4d5bdb0db9dd3e3783f313.png"
	],
	[
		"0x74ee68a33f6c9f113e22b3b77418b75f85d07d22",
		"Zerion Genesis Collection",
		"ZGC",
		"ERC1155",
		"/images/nfts/0x74ee68a33f6c9f113e22b3b77418b75f85d07d22.png"
	],
	[
		"0x76be3b62873462d2142405439777e971754e8e77",
		"Parallel Alpha",
		"LL",
		"ERC1155",
		"/images/nfts/0x76be3b62873462d2142405439777e971754e8e77.png"
	],
	[
		"0x7daec605e9e2a1717326eedfd660601e2753a057",
		"Stockroom by 10KTF",
		"Stockroom by 10KTF",
		"ERC1155",
		"/images/nfts/0x7daec605e9e2a1717326eedfd660601e2753a057.png"
	],
	[
		"0x7deb7bce4d360ebe68278dee6054b882aa62d19c",
		"MetaHero: United Planets",
		"PLANET",
		"ERC1155",
		"/images/nfts/0x7deb7bce4d360ebe68278dee6054b882aa62d19c.png"
	],
	[
		"0x7e9b9ba1a3b4873279857056279cef6a4fcdf340",
		"Noble Gallery",
		"Noble Gallery",
		"ERC1155",
		"/images/nfts/0x7e9b9ba1a3b4873279857056279cef6a4fcdf340.png"
	],
	[
		"0x842068ce6d5f6a9e79d45dc2b51a14cbbb62a6ea",
		"DRUNK SANTA's PRESENTS  (utility tokens) - cryptopainter",
		"CP25",
		"ERC1155",
		"/images/nfts/0x842068ce6d5f6a9e79d45dc2b51a14cbbb62a6ea.png"
	],
	[
		"0x850d754a640f640b8d9844518f584ee131a57c9d",
		"Landscape with Carbon Capture by zancan",
		"Landscape with Carbon Capture by zancan",
		"ERC1155",
		"/images/nfts/0x850d754a640f640b8d9844518f584ee131a57c9d.png"
	],
	[
		"0x8887ce34f6f1a4de4e8eb2a9195eeb261c413365",
		"Editions x Guido",
		"RAW",
		"ERC1155",
		"/images/nfts/0x8887ce34f6f1a4de4e8eb2a9195eeb261c413365.png"
	],
	[
		"0x89c3df79aa8a3cbc96caf32f83eba8f1bd3787b9",
		"Genesis Oath (Old - DO NOT BUY)",
		"MTNT",
		"ERC1155",
		"/images/nfts/0x89c3df79aa8a3cbc96caf32f83eba8f1bd3787b9.png"
	],
	[
		"0x8b74e234750e7854bc58bdd9e9dcf757bef479d1",
		"LUCIAN Pass",
		"LCAN",
		"ERC1155",
		"/images/nfts/0x8b74e234750e7854bc58bdd9e9dcf757bef479d1.png"
	],
	[
		"0x94d676b6550a1a0cee48754a1ad52ecf9edc7013",
		"NessGraphics Open Editions",
		"OPENN",
		"ERC1155",
		"/images/nfts/0x94d676b6550a1a0cee48754a1ad52ecf9edc7013.png"
	],
	[
		"0x9794a9894e24f37e4072f206cfb6a6700fdefbf2",
		"FVCK_LIMITED//",
		"FVCK_LIMITED//",
		"ERC1155",
		"/images/nfts/0x9794a9894e24f37e4072f206cfb6a6700fdefbf2.png"
	],
	[
		"0x97a20815a061eae224c4fdf3109731f73743db73",
		"LVCIDIA// RESOURCES",
		"RSRC",
		"ERC1155",
		"/images/nfts/0x97a20815a061eae224c4fdf3109731f73743db73.png"
	],
	[
		"0x9ce07b945b4cb912e338d141cf95e9636bf2e836",
		"Lascaux: The Future",
		"Hope",
		"ERC1155",
		"/images/nfts/0x9ce07b945b4cb912e338d141cf95e9636bf2e836.png"
	],
	[
		"0x9d2e2254a2c15108e8f067ac54a0b4d3b75947bc",
		"momo Pass (Out Of Commission)",
		"momo",
		"ERC1155",
		"/images/nfts/0x9d2e2254a2c15108e8f067ac54a0b4d3b75947bc.png"
	],
	[
		"0x9fff0b1a6e9e9554baf3f8a39b6353fda9c30054",
		"Memo Angeles Presents: The Killa Chronicles",
		"Memo Angeles Presents: The Killa Chronicles",
		"ERC1155",
		"/images/nfts/0x9fff0b1a6e9e9554baf3f8a39b6353fda9c30054.png"
	],
	[
		"0xa342f5d851e866e18ff98f351f2c6637f4478db5",
		"The Sandbox ASSETS",
		"ASSET",
		"ERC1155",
		"/images/nfts/0xa342f5d851e866e18ff98f351f2c6637f4478db5.png"
	],
	[
		"0xa49a0e5ef83cf89ac8aae182f22e6464b229efc8",
		"RTFKT Clone X Forging SZN 1 (PRE-FORGE) ⚒️",
		"RTFKT Clone X Forging SZN 1 (PRE-FORGE) ⚒️",
		"ERC1155",
		"/images/nfts/0xa49a0e5ef83cf89ac8aae182f22e6464b229efc8.png"
	],
	[
		"0xa642375cc15249a81da9c435fb4edd8a9343ce7f",
		"oncyber & friends",
		"oncyber & friends",
		"ERC1155",
		"/images/nfts/0xa642375cc15249a81da9c435fb4edd8a9343ce7f.png"
	],
	[
		"0xa72b658430b6d8bf741364ce3f2730cd4e7d9ba6",
		"Dangiuz Editions",
		"DNGZED",
		"ERC1155",
		"/images/nfts/0xa72b658430b6d8bf741364ce3f2730cd4e7d9ba6.png"
	],
	[
		"0xa8d79ac587832c814fbdc45f9a5e1413a0db2936",
		"HBBs by MarkTheHabibi",
		"HBBS",
		"ERC1155",
		"/images/nfts/0xa8d79ac587832c814fbdc45f9a5e1413a0db2936.png"
	],
	[
		"0xac3c15fe919f146d48e2daddfad0a3ec85d87934",
		"Inkugami: Origins",
		"Inkugami: Origins",
		"ERC1155",
		"/images/nfts/0xac3c15fe919f146d48e2daddfad0a3ec85d87934.png"
	],
	[
		"0xb5066903756d5fc9c28b3aa2ad6db8b2316662c2",
		"KEK BALLOON",
		"KEKLOL",
		"ERC1155",
		"/images/nfts/0xb5066903756d5fc9c28b3aa2ad6db8b2316662c2.png"
	],
	[
		"0xb66a603f4cfe17e3d27b87a8bfcad319856518b8",
		"Rarible",
		"RARI",
		"ERC1155",
		"/images/nfts/0xb66a603f4cfe17e3d27b87a8bfcad319856518b8.png"
	],
	[
		"0xb6d460ac51b93bca63b694f099c4a8b3b1cf73b4",
		"Moonrunners: Secrets of Primordia",
		"MOONRL",
		"ERC1155",
		"/images/nfts/0xb6d460ac51b93bca63b694f099c4a8b3b1cf73b4.png"
	],
	[
		"0xb7be4001bff2c5f4a61dd2435e4c9a19d8d12343",
		"RTFKT PodX",
		"RTFKT PodX",
		"ERC1155",
		"/images/nfts/0xb7be4001bff2c5f4a61dd2435e4c9a19d8d12343.png"
	],
	[
		"0xc36cf0cfcb5d905b8b513860db0cfe63f6cf9f5c",
		"Common Ground World",
		"RAW",
		"ERC1155",
		"/images/nfts/0xc36cf0cfcb5d905b8b513860db0cfe63f6cf9f5c.png"
	],
	[
		"0xc6dca8e9c9eb5a7eb68b04a69e63352d5d98695c",
		"Auf Reisen 2023 by Dennis Schmelz",
		"AR23",
		"ERC1155",
		"/images/nfts/0xc6dca8e9c9eb5a7eb68b04a69e63352d5d98695c.png"
	],
	[
		"0xd1b68763c7170b963ac6ca6b1c2ea25796a18a17",
		"Valhalla Reserve",
		"RSRV",
		"ERC1155",
		"/images/nfts/0xd1b68763c7170b963ac6ca6b1c2ea25796a18a17.png"
	],
	[
		"0xd20cd1e5352966161b821da85149160f129611d1",
		"Memes For The People by Ozark",
		"MFTP",
		"ERC1155",
		"/images/nfts/0xd20cd1e5352966161b821da85149160f129611d1.png"
	],
	[
		"0xd374410e9bb22f3771ffbd0b40a07c0cf44a04fc",
		"The Nifty Portal",
		"The Nifty Portal",
		"ERC1155",
		"/images/nfts/0xd374410e9bb22f3771ffbd0b40a07c0cf44a04fc.png"
	],
	[
		"0xd4416b13d2b3a9abae7acd5d6c2bbdbe25686401",
		"ENS: Name Wrapper",
		"ENS: Name Wrapper",
		"ERC1155",
		"/images/contracts/ENS.jpg",
		"[{\"inputs\":[{\"internalType\":\"contract ENS\",\"name\":\"_ens\",\"type\":\"address\"},{\"internalType\":\"contract IBaseRegistrar\",\"name\":\"_registrar\",\"type\":\"address\"},{\"internalType\":\"contract IMetadataService\",\"name\":\"_metadataService\",\"type\":\"address\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"inputs\":[],\"name\":\"CannotUpgrade\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"IncompatibleParent\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"IncorrectTargetOwner\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"IncorrectTokenType\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"labelHash\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"expectedLabelhash\",\"type\":\"bytes32\"}],\"name\":\"LabelMismatch\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"label\",\"type\":\"string\"}],\"name\":\"LabelTooLong\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"LabelTooShort\",\"type\":\"error\"},{\"inputs\":[],\"name\":\"NameIsNotWrapped\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"OperationProhibited\",\"type\":\"error\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"Unauthorised\",\"type\":\"error\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"approved\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"ApprovalForAll\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"controller\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"bool\",\"name\":\"active\",\"type\":\"bool\"}],\"name\":\"ControllerChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"expiry\",\"type\":\"uint64\"}],\"name\":\"ExpiryExtended\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"uint32\",\"name\":\"fuses\",\"type\":\"uint32\"}],\"name\":\"FusesSet\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"name\":\"NameUnwrapped\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"indexed\":false,\"internalType\":\"bytes\",\"name\":\"name\",\"type\":\"bytes\"},{\"indexed\":false,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint32\",\"name\":\"fuses\",\"type\":\"uint32\"},{\"indexed\":false,\"internalType\":\"uint64\",\"name\":\"expiry\",\"type\":\"uint64\"}],\"name\":\"NameWrapped\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"previousOwner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"OwnershipTransferred\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"indexed\":false,\"internalType\":\"uint256[]\",\"name\":\"values\",\"type\":\"uint256[]\"}],\"name\":\"TransferBatch\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"TransferSingle\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"string\",\"name\":\"value\",\"type\":\"string\"},{\"indexed\":true,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"URI\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"name\":\"_tokens\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"uint32\",\"name\":\"fuseMask\",\"type\":\"uint32\"}],\"name\":\"allFusesBurned\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address[]\",\"name\":\"accounts\",\"type\":\"address[]\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"}],\"name\":\"balanceOfBatch\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"canExtendSubnames\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"addr\",\"type\":\"address\"}],\"name\":\"canModifyName\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"name\":\"controllers\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"ens\",\"outputs\":[{\"internalType\":\"contract ENS\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"parentNode\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"labelhash\",\"type\":\"bytes32\"},{\"internalType\":\"uint64\",\"name\":\"expiry\",\"type\":\"uint64\"}],\"name\":\"extendExpiry\",\"outputs\":[{\"internalType\":\"uint64\",\"name\":\"\",\"type\":\"uint64\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"getApproved\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"getData\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint32\",\"name\":\"fuses\",\"type\":\"uint32\"},{\"internalType\":\"uint64\",\"name\":\"expiry\",\"type\":\"uint64\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"}],\"name\":\"isApprovedForAll\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"parentNode\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"labelhash\",\"type\":\"bytes32\"}],\"name\":\"isWrapped\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"}],\"name\":\"isWrapped\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"metadataService\",\"outputs\":[{\"internalType\":\"contract IMetadataService\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"name\":\"names\",\"outputs\":[{\"internalType\":\"bytes\",\"name\":\"\",\"type\":\"bytes\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"onERC721Received\",\"outputs\":[{\"internalType\":\"bytes4\",\"name\":\"\",\"type\":\"bytes4\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"owner\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"ownerOf\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"_token\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"_to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"_amount\",\"type\":\"uint256\"}],\"name\":\"recoverFunds\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"label\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"wrappedOwner\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"},{\"internalType\":\"address\",\"name\":\"resolver\",\"type\":\"address\"},{\"internalType\":\"uint16\",\"name\":\"ownerControlledFuses\",\"type\":\"uint16\"}],\"name\":\"registerAndWrapETH2LD\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"registrarExpiry\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"registrar\",\"outputs\":[{\"internalType\":\"contract IBaseRegistrar\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"duration\",\"type\":\"uint256\"}],\"name\":\"renew\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"expires\",\"type\":\"uint256\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"renounceOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256[]\",\"name\":\"ids\",\"type\":\"uint256[]\"},{\"internalType\":\"uint256[]\",\"name\":\"amounts\",\"type\":\"uint256[]\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeBatchTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"},{\"internalType\":\"bytes\",\"name\":\"data\",\"type\":\"bytes\"}],\"name\":\"safeTransferFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"operator\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"approved\",\"type\":\"bool\"}],\"name\":\"setApprovalForAll\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"parentNode\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"labelhash\",\"type\":\"bytes32\"},{\"internalType\":\"uint32\",\"name\":\"fuses\",\"type\":\"uint32\"},{\"internalType\":\"uint64\",\"name\":\"expiry\",\"type\":\"uint64\"}],\"name\":\"setChildFuses\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"controller\",\"type\":\"address\"},{\"internalType\":\"bool\",\"name\":\"active\",\"type\":\"bool\"}],\"name\":\"setController\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"uint16\",\"name\":\"ownerControlledFuses\",\"type\":\"uint16\"}],\"name\":\"setFuses\",\"outputs\":[{\"internalType\":\"uint32\",\"name\":\"\",\"type\":\"uint32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract IMetadataService\",\"name\":\"_metadataService\",\"type\":\"address\"}],\"name\":\"setMetadataService\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"resolver\",\"type\":\"address\"},{\"internalType\":\"uint64\",\"name\":\"ttl\",\"type\":\"uint64\"}],\"name\":\"setRecord\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"resolver\",\"type\":\"address\"}],\"name\":\"setResolver\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"parentNode\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"label\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"uint32\",\"name\":\"fuses\",\"type\":\"uint32\"},{\"internalType\":\"uint64\",\"name\":\"expiry\",\"type\":\"uint64\"}],\"name\":\"setSubnodeOwner\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"parentNode\",\"type\":\"bytes32\"},{\"internalType\":\"string\",\"name\":\"label\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"resolver\",\"type\":\"address\"},{\"internalType\":\"uint64\",\"name\":\"ttl\",\"type\":\"uint64\"},{\"internalType\":\"uint32\",\"name\":\"fuses\",\"type\":\"uint32\"},{\"internalType\":\"uint64\",\"name\":\"expiry\",\"type\":\"uint64\"}],\"name\":\"setSubnodeRecord\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"node\",\"type\":\"bytes32\"},{\"internalType\":\"uint64\",\"name\":\"ttl\",\"type\":\"uint64\"}],\"name\":\"setTTL\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"contract INameWrapperUpgrade\",\"name\":\"_upgradeAddress\",\"type\":\"address\"}],\"name\":\"setUpgradeContract\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes4\",\"name\":\"interfaceId\",\"type\":\"bytes4\"}],\"name\":\"supportsInterface\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"newOwner\",\"type\":\"address\"}],\"name\":\"transferOwnership\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"parentNode\",\"type\":\"bytes32\"},{\"internalType\":\"bytes32\",\"name\":\"labelhash\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"controller\",\"type\":\"address\"}],\"name\":\"unwrap\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"labelhash\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"registrant\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"controller\",\"type\":\"address\"}],\"name\":\"unwrapETH2LD\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"name\",\"type\":\"bytes\"},{\"internalType\":\"bytes\",\"name\":\"extraData\",\"type\":\"bytes\"}],\"name\":\"upgrade\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"upgradeContract\",\"outputs\":[{\"internalType\":\"contract INameWrapperUpgrade\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"tokenId\",\"type\":\"uint256\"}],\"name\":\"uri\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes\",\"name\":\"name\",\"type\":\"bytes\"},{\"internalType\":\"address\",\"name\":\"wrappedOwner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"resolver\",\"type\":\"address\"}],\"name\":\"wrap\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"label\",\"type\":\"string\"},{\"internalType\":\"address\",\"name\":\"wrappedOwner\",\"type\":\"address\"},{\"internalType\":\"uint16\",\"name\":\"ownerControlledFuses\",\"type\":\"uint16\"},{\"internalType\":\"address\",\"name\":\"resolver\",\"type\":\"address\"}],\"name\":\"wrapETH2LD\",\"outputs\":[{\"internalType\":\"uint64\",\"name\":\"expiry\",\"type\":\"uint64\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}]"
	],
	[
		"0xd9ddf01163a45b69b8cdbffd635a7405fb39a516",
		"ikehaya Pass",
		"IKHY",
		"ERC1155",
		"/images/nfts/0xd9ddf01163a45b69b8cdbffd635a7405fb39a516.png"
	],
	[
		"0xde95471123ce8bd81ad8e7ba553e019da110b654",
		"Wilderness to Blockchain - Editions",
		"WtoB",
		"ERC1155",
		"/images/nfts/0xde95471123ce8bd81ad8e7ba553e019da110b654.png"
	],
	[
		"0xe312cfbd731ba5f393bfbb4743bc002c5f676f79",
		"Fuzzle Space Cases",
		"FSPCA",
		"ERC1155",
		"/images/nfts/0xe312cfbd731ba5f393bfbb4743bc002c5f676f79.png"
	],
	[
		"0xe6d50ae4f47d1bdaf1ed7ec870013082daec5fe3",
		"Beep Boop Box",
		"Beep Boop Box",
		"ERC1155",
		"/images/nfts/0xe6d50ae4f47d1bdaf1ed7ec870013082daec5fe3.png"
	],
	[
		"0xe70659b717112ac4e14284d0db2f5d5703df8e43",
		"Notable Pepes",
		"PROJECTX",
		"ERC1155",
		"/images/nfts/0xe70659b717112ac4e14284d0db2f5d5703df8e43.png"
	],
	[
		"0xe77ad290adab2989a81ae62ab2467c01b45feeff",
		"Proceed w/ Caution",
		"PWC",
		"ERC1155",
		"/images/nfts/0xe77ad290adab2989a81ae62ab2467c01b45feeff.png"
	],
	[
		"0xedfc4f35060de1a30e08b0d8b9986a4adbdf6c59",
		"GxngYxng Editions",
		"GxngYxng Editions",
		"ERC1155",
		"/images/nfts/0xedfc4f35060de1a30e08b0d8b9986a4adbdf6c59.png"
	],
	[
		"0xf03f8ed5d0cc1d933dc3a91cd7f73db4dd2b1366",
		"loose balloons by jeremy fall",
		"lb",
		"ERC1155",
		"/images/nfts/0xf03f8ed5d0cc1d933dc3a91cd7f73db4dd2b1366.png"
	],
	[
		"0xf1f3ca6268f330fda08418db12171c3173ee39c9",
		"Zapper - Season 2 Edition",
		"ZPR NFT",
		"ERC1155",
		"/images/nfts/0xf1f3ca6268f330fda08418db12171c3173ee39c9.png"
	],
	[
		"0xf36c296e87dd2d7adcef251a542561d4bbe07714",
		"Lascaux Editions",
		"MXFK",
		"ERC1155",
		"/images/nfts/0xf36c296e87dd2d7adcef251a542561d4bbe07714.png"
	],
	[
		"0xf4bacb2375654ef2459f427c8c6cf34573f75154",
		"TPL Mecha Part",
		"TPLMECHAPART",
		"ERC1155",
		"/images/nfts/0xf4bacb2375654ef2459f427c8c6cf34573f75154.png"
	],
	[
		"0xfd43d1da000558473822302e1d44d81da2e4cc0d",
		"Love, Death + Robots Official",
		"LDR",
		"ERC1155",
		"/images/nfts/0xfd43d1da000558473822302e1d44d81da2e4cc0d.png"
	]
] as const;