
export type Address = `0x${ string }`
export type Name = string
export type Symbol = string
export type NftType = 'ERC1155'
export type LogoRelativePath = `/images/nfts/${ string }`
export type Erc1155MetadataWithLogo = readonly [Address, Name, Symbol, NftType, LogoRelativePath]
export type Erc1155MetadataWithoutLogo = readonly [Address, Name, Symbol, NftType]

export type Erc1155MetadataData = readonly (Erc1155MetadataWithLogo | Erc1155MetadataWithoutLogo)[]

export const erc1155MetadataData: Erc1155MetadataData = [
	[
		"0xd4416b13d2b3a9abae7acd5d6c2bbdbe25686401",
		"ENS: Ethereum Name Service",
		"ENS: Ethereum Name Service",
		"ERC1155",
		"/images/nfts/0xd4416b13d2b3a9abae7acd5d6c2bbdbe25686401.png"
	],
	[
		"0x94e4809391bc8aa14b610c5c77b9b072af201482",
		"The News",
		"News",
		"ERC1155",
		"/images/nfts/0x94e4809391bc8aa14b610c5c77b9b072af201482.png"
	],
	[
		"0x4f3adef2f4096740774a955e912b5f03f2c7ba2b",
		"PPG OLD DREAMBOX - DO NOT BUY",
		"PPG OLD DREAMBOX - DO NOT BUY",
		"ERC1155",
		"/images/nfts/0x4f3adef2f4096740774a955e912b5f03f2c7ba2b.png"
	],
	[
		"0x17f55bf767904c5fdf9ce727e346abb9e1594bd2",
		"wwwbrain editions",
		"BRAIN",
		"ERC1155",
		"/images/nfts/0x17f55bf767904c5fdf9ce727e346abb9e1594bd2.png"
	],
	[
		"0x4fde78d3c8718f093f6eb3699e3ed8d091498df9",
		"ElementMarket",
		"ELEMENT",
		"ERC1155",
		"/images/nfts/0x4fde78d3c8718f093f6eb3699e3ed8d091498df9.png"
	],
	[
		"0x72f615f4cc03c2d0e1e4fcb2339af6f1491d2e1e",
		"Amazon Green Wall Club",
		"AGWC",
		"ERC1155",
		"/images/nfts/0x72f615f4cc03c2d0e1e4fcb2339af6f1491d2e1e.png"
	],
	[
		"0x9b32add7cf0565d1dbd6f9cbd06f92aa35e765a5",
		"Natived_",
		"NTD",
		"ERC1155",
		"/images/nfts/0x9b32add7cf0565d1dbd6f9cbd06f92aa35e765a5.png"
	],
	[
		"0xd2f62f16424666ac76a682ee910ca041d3bff43d",
		"county fair shiddy prizes",
		"county fair shiddy prizes",
		"ERC1155",
		"/images/nfts/0xd2f62f16424666ac76a682ee910ca041d3bff43d.png"
	],
	[
		"0x778d3c13bef1a02d883af5e151ca03013d53d47f",
		"OrdinalMemes",
		"OMEMES",
		"ERC1155",
		"/images/nfts/0x778d3c13bef1a02d883af5e151ca03013d53d47f.png"
	],
	[
		"0x7b1a1bd0dfaea532b90e3906d0bd930996c8b209",
		"Hoppi's Carrots by 3XP",
		"CARROT",
		"ERC1155",
		"/images/nfts/0x7b1a1bd0dfaea532b90e3906d0bd930996c8b209.png"
	],
	[
		"0x6ff08fdafc834e9802f6f2fd181ab84ea111f576",
		"Rare Pepe Figures",
		"RPF",
		"ERC1155",
		"/images/nfts/0x6ff08fdafc834e9802f6f2fd181ab84ea111f576.png"
	],
	[
		"0x847833af77e88e4b7e357e80d7bce2b1c1b01864",
		"Krisztina: A Tale of Renewal",
		"ARTK",
		"ERC1155",
		"/images/nfts/0x847833af77e88e4b7e357e80d7bce2b1c1b01864.png"
	],
	[
		"0x300e7a5fb0ab08af367d5fb3915930791bb08c2b",
		"ClickCreate",
		"CC",
		"ERC1155",
		"/images/nfts/0x300e7a5fb0ab08af367d5fb3915930791bb08c2b.png"
	],
	[
		"0x21fc8585eee37be572a0e37c34c7ad2a15a36ee3",
		"Mysterious Corpse",
		"SPORE",
		"ERC1155"
	],
	[
		"0xe3e0f44d46733afdb453c6553716c7dea530af4a",
		"MaritimeVintage",
		"MaritimeVintage",
		"ERC1155",
		"/images/nfts/0xe3e0f44d46733afdb453c6553716c7dea530af4a.png"
	],
	[
		"0xd2a2246863437fa57eb6ca94e7411eaafb7721ca",
		"Geroque Workshop",
		"Geroque Workshop",
		"ERC1155",
		"/images/nfts/0xd2a2246863437fa57eb6ca94e7411eaafb7721ca.png"
	],
	[
		"0xa015f7fcb9291bdcce2914b1ce12be1c538dab66",
		"Car Man Gold Protector",
		"CGP",
		"ERC1155",
		"/images/nfts/0xa015f7fcb9291bdcce2914b1ce12be1c538dab66.png"
	],
	[
		"0x127b3fe0ddf9f260452a7d06fec59ea9cb6e8007",
		"MF GACHA (Ethereum)",
		"MFGACHA",
		"ERC1155",
		"/images/nfts/0x127b3fe0ddf9f260452a7d06fec59ea9cb6e8007.png"
	],
	[
		"0xfbb0563fc049bef26291016afa4b6402bfc43e70",
		"InfiniGods: War Chest",
		"WARCHEST",
		"ERC1155",
		"/images/nfts/0xfbb0563fc049bef26291016afa4b6402bfc43e70.png"
	],
	[
		"0xee513794ef924bbf3e0c4fe144a3715f3c925610",
		"Pepe Council",
		"PEPE",
		"ERC1155",
		"/images/nfts/0xee513794ef924bbf3e0c4fe144a3715f3c925610.png"
	],
	[
		"0x9dbc07f98bbe292d50b4c7e94547ffc070b1805d",
		"KlawMachineEditions",
		"KlawMachineEditions",
		"ERC1155",
		"/images/nfts/0x9dbc07f98bbe292d50b4c7e94547ffc070b1805d.png"
	],
	[
		"0x2deea2bb9407cb58f30a62904c07900d27fec394",
		"Loïs Voirol Editions",
		"LOVE",
		"ERC1155",
		"/images/nfts/0x2deea2bb9407cb58f30a62904c07900d27fec394.png"
	],
	[
		"0x2afebe185d50537299cc156b6f3016024cd6cb7b",
		"SILICA by itsgalo",
		"SILICA by itsgalo",
		"ERC1155",
		"/images/nfts/0x2afebe185d50537299cc156b6f3016024cd6cb7b.png"
	],
	[
		"0x48706ee57d206ac42b76a1394d9b50e57f235f85",
		"Limited Editions (Manifold)",
		"Limited Editions (Manifold)",
		"ERC1155",
		"/images/nfts/0x48706ee57d206ac42b76a1394d9b50e57f235f85.png"
	],
	[
		"0x7881c3a8d4a8d8a5d6b648164de823142d8aaf5d",
		"Color  Lines",
		"CL",
		"ERC1155",
		"/images/nfts/0x7881c3a8d4a8d8a5d6b648164de823142d8aaf5d.png"
	],
	[
		"0xb423b014104b7891fbe7a58d9797ac762b4160c8",
		"MaNiC// Editions.",
		"MaNiC",
		"ERC1155",
		"/images/nfts/0xb423b014104b7891fbe7a58d9797ac762b4160c8.png"
	],
	[
		"0x6ca020def9e17a1f6b19eeb8114ec1c5d6fb44ac",
		"CNP Makimono",
		"CNPM",
		"ERC1155",
		"/images/nfts/0x6ca020def9e17a1f6b19eeb8114ec1c5d6fb44ac.png"
	],
	[
		"0x0966a53f2533eaf01d0bb2fa0e2274f3002287f1",
		"Yearn Finance",
		"Yearn Finance",
		"ERC1155",
		"/images/nfts/0x0966a53f2533eaf01d0bb2fa0e2274f3002287f1.png"
	],
	[
		"0xb1e7df46760eede556d60afe203271e2115fe941",
		"StrongWeird",
		"SW",
		"ERC1155",
		"/images/nfts/0xb1e7df46760eede556d60afe203271e2115fe941.png"
	],
	[
		"0xb31d31196d25da7290fbbe986318512fe9121583",
		"Pepe x MS",
		"FUN",
		"ERC1155",
		"/images/nfts/0xb31d31196d25da7290fbbe986318512fe9121583.png"
	],
	[
		"0xd8a8d26637e44a477deac55a210734ee76884d89",
		"KRYPTOZ - DIGI TOYS",
		"KRY",
		"ERC1155",
		"/images/nfts/0xd8a8d26637e44a477deac55a210734ee76884d89.png"
	],
	[
		"0x9d2d194a33a976c654df31c65fc6c870fefb4d8d",
		"Tyranite Drill",
		"DRILL",
		"ERC1155",
		"/images/nfts/0x9d2d194a33a976c654df31c65fc6c870fefb4d8d.png"
	],
	[
		"0x6bec760ec28005752582041dc446f251e87d4f42",
		"Checks - Skulls Edition",
		"skully",
		"ERC1155",
		"/images/nfts/0x6bec760ec28005752582041dc446f251e87d4f42.png"
	],
	[
		"0xe69cf76af21d48574f6231306f908951314ab8db",
		"BODHIZAI.ETH - WWW.BODHIZAI.COM",
		"B0DH1",
		"ERC1155"
	],
	[
		"0x3242e768f145c77a6688f54b1f2e23e581551b54",
		"hamster coin",
		"hCOIN",
		"ERC1155",
		"/images/nfts/0x3242e768f145c77a6688f54b1f2e23e581551b54.png"
	],
	[
		"0x36237a360ad7b51625d966fcf694b6ebac3abcb0",
		"The Doge Couch",
		"COUCH",
		"ERC1155"
	],
	[
		"0x3b236986e5cb4bd96e106d30b0405a4080b2ea2b",
		"FlysAlpha Contract of The Future",
		"Fly",
		"ERC1155",
		"/images/nfts/0x3b236986e5cb4bd96e106d30b0405a4080b2ea2b.png"
	],
	[
		"0x6e62a9d2fc7a732b9309d9b2ffccc3352acf751a",
		"Atrium Objects",
		"ATRIUM",
		"ERC1155",
		"/images/nfts/0x6e62a9d2fc7a732b9309d9b2ffccc3352acf751a.png"
	],
	[
		"0x6aa69a8fe77d7f48f73253bb3ce67e4e0c42fd67",
		"Checks VS",
		"CHKVS",
		"ERC1155",
		"/images/nfts/0x6aa69a8fe77d7f48f73253bb3ce67e4e0c42fd67.png"
	],
	[
		"0x6e9c9049ce4c804423886c96a350e76b8e1af561",
		"Midnight's Passage Memories",
		"LORE2",
		"ERC1155",
		"/images/nfts/0x6e9c9049ce4c804423886c96a350e76b8e1af561.png"
	],
	[
		"0x22d27f2102db742d8bc3ec0a7d9b2de4da5f7cfd",
		"Showaera",
		"SE01",
		"ERC1155"
	],
	[
		"0x4bb994ea18013289d1b79b384b4bbe3b88c6ff69",
		"GoroDokoHirakippers V2",
		"GDH",
		"ERC1155",
		"/images/nfts/0x4bb994ea18013289d1b79b384b4bbe3b88c6ff69.png"
	],
	[
		"0x1058f6b8bb9585c87d055ba11ac9b4a3dbced099",
		"Birddogs A.I. Art Mint Access Pass",
		"BDAIAMAP",
		"ERC1155",
		"/images/nfts/0x1058f6b8bb9585c87d055ba11ac9b4a3dbced099.png"
	],
	[
		"0x99da9c8e7d8aaeba167145cd4c2a67076f1f6ae7",
		"Punkasso Pass Drops",
		"PPDRP",
		"ERC1155",
		"/images/nfts/0x99da9c8e7d8aaeba167145cd4c2a67076f1f6ae7.png"
	],
	[
		"0x1764a0ac69c4807c73bb8c6e11bf3531fbd96960",
		"The David Gersch",
		"DG",
		"ERC1155",
		"/images/nfts/0x1764a0ac69c4807c73bb8c6e11bf3531fbd96960.png"
	],
	[
		"0xdb4415648cc2db9e4b19120e3dc94eb760a5a0f2",
		"The Contact - YOU",
		"TC",
		"ERC1155",
		"/images/nfts/0xdb4415648cc2db9e4b19120e3dc94eb760a5a0f2.png"
	],
	[
		"0x7515dee3ecd5000372f449392c7344131794b79f",
		"GB Editions",
		"GB Editions",
		"ERC1155",
		"/images/nfts/0x7515dee3ecd5000372f449392c7344131794b79f.png"
	],
	[
		"0xafd2239205bf277925556a55d072c18be5c7db00",
		"THX-1 by Thomas Noya",
		"THX-1 by Thomas Noya",
		"ERC1155",
		"/images/nfts/0xafd2239205bf277925556a55d072c18be5c7db00.png"
	],
	[
		"0x57f14fbe42bc7e002c831ecbb007e2d4b8e9febb",
		"Be Ashamed NFT",
		"Be Ashamed NFT",
		"ERC1155",
		"/images/nfts/0x57f14fbe42bc7e002c831ecbb007e2d4b8e9febb.png"
	],
	[
		"0x4817903dab783678c688d2177c359b3a57d4cf38",
		"Fast Food Punks Combo",
		"FFPC",
		"ERC1155",
		"/images/nfts/0x4817903dab783678c688d2177c359b3a57d4cf38.png"
	],
	[
		"0x12fa1d7baf0adb504c19eac0fb5e95f8ff97e8e2",
		"PunksDistorted 2023",
		"PD23",
		"ERC1155",
		"/images/nfts/0x12fa1d7baf0adb504c19eac0fb5e95f8ff97e8e2.png"
	],
	[
		"0xbd110e1a672cac3efb9bd4205ff04f7a5ea62e53",
		"IOTB",
		"IOTB",
		"ERC1155",
		"/images/nfts/0xbd110e1a672cac3efb9bd4205ff04f7a5ea62e53.png"
	],
	[
		"0x1d5294164b8ebbeb6bbdebd35cd78b7e32240b24",
		"cryptoart city",
		"CACDES",
		"ERC1155",
		"/images/nfts/0x1d5294164b8ebbeb6bbdebd35cd78b7e32240b24.png"
	],
	[
		"0x6bc082b245399e420f1673b45d498cb27810591f",
		"FAKE MEMES S1",
		"FAKES",
		"ERC1155",
		"/images/nfts/0x6bc082b245399e420f1673b45d498cb27810591f.png"
	],
	[
		"0xde6b67d4a7fdc6ed6d68f0cb1f0dacf66c3f8241",
		"TasteMakerz",
		"TSTMKRZ",
		"ERC1155",
		"/images/nfts/0xde6b67d4a7fdc6ed6d68f0cb1f0dacf66c3f8241.png"
	],
	[
		"0xcea337fed1d179f524358846436d0a43381963f1",
		"Carlo Vega Editions",
		"CVE",
		"ERC1155",
		"/images/nfts/0xcea337fed1d179f524358846436d0a43381963f1.png"
	],
	[
		"0xe45662f0f2e3763f95d616186808cf5f6ad7702a",
		"ART IN SPACE NFT",
		"ART IN SPACE NFT",
		"ERC1155",
		"/images/nfts/0xe45662f0f2e3763f95d616186808cf5f6ad7702a.png"
	],
	[
		"0x7667154aefd6226353a1d7db152efb088ca2a18f",
		"Global Stability Lands [2023]",
		"GSL",
		"ERC1155",
		"/images/nfts/0x7667154aefd6226353a1d7db152efb088ca2a18f.png"
	],
	[
		"0x782244ce1aeab2faad99983c0896576b1b125ecd",
		"Make Haste",
		"MKHST",
		"ERC1155",
		"/images/nfts/0x782244ce1aeab2faad99983c0896576b1b125ecd.png"
	],
	[
		"0xc22333381b31e54e29fbbbda75d49b4331635995",
		"made_these_for_your_girl.xls",
		"mtfygxls",
		"ERC1155",
		"/images/nfts/0xc22333381b31e54e29fbbbda75d49b4331635995.png"
	],
	[
		"0x4721dfe67fe46381e2e56eb1e0406e0989bd7b8e",
		"Discreet Landscapes - 2023",
		"Discreet Landscapes - 2023",
		"ERC1155",
		"/images/nfts/0x4721dfe67fe46381e2e56eb1e0406e0989bd7b8e.png"
	],
	[
		"0xc5f572b705cae1893cdceb5161ce40e2fc5bb6cd",
		"Stake DAO NFTs",
		"sdNFT",
		"ERC1155",
		"/images/nfts/0xc5f572b705cae1893cdceb5161ce40e2fc5bb6cd.png"
	],
	[
		"0x3a8c2d6cb931e1912a71b7b2f5a1509c72c9cbec",
		"Dragons Den Editions",
		"DT11DD",
		"ERC1155",
		"/images/nfts/0x3a8c2d6cb931e1912a71b7b2f5a1509c72c9cbec.png"
	],
	[
		"0x28030dc455de045275532fa29e48561814faccaf",
		"Shangorillah: Midnight's Passage Items",
		"LORE1",
		"ERC1155",
		"/images/nfts/0x28030dc455de045275532fa29e48561814faccaf.png"
	],
	[
		"0x7a1bc31cf78aca929c5fba51e75b9922bf521bc0",
		"One Blue Land Collection",
		"OBL",
		"ERC1155",
		"/images/nfts/0x7a1bc31cf78aca929c5fba51e75b9922bf521bc0.png"
	],
	[
		"0x1949a3b3d65a732e329efbe50db71e33e9285d1a",
		"LeafswanEditions",
		"LeafswanEditions",
		"ERC1155",
		"/images/nfts/0x1949a3b3d65a732e329efbe50db71e33e9285d1a.png"
	],
	[
		"0xec995de88255979e88ec8d31050f82077c2c93ad",
		"Living in Pepe",
		"GLOE",
		"ERC1155",
		"/images/nfts/0xec995de88255979e88ec8d31050f82077c2c93ad.png"
	],
	[
		"0xdfdab67039dbe6cdeb2398b9df8c0ef5617a7728",
		"Minterest",
		"MNFT",
		"ERC1155",
		"/images/nfts/0xdfdab67039dbe6cdeb2398b9df8c0ef5617a7728.png"
	],
	[
		"0x180e844721246a88b5a446b1a97b44050e65399f",
		"BrickMints",
		"BBSBM",
		"ERC1155",
		"/images/nfts/0x180e844721246a88b5a446b1a97b44050e65399f.png"
	],
	[
		"0xe0b6a2deeea6f560b9dae140ea4a5392de54205a",
		"House of 7 Cards",
		"Ho7C",
		"ERC1155",
		"/images/nfts/0xe0b6a2deeea6f560b9dae140ea4a5392de54205a.png"
	],
	[
		"0x32b039de995349ddd2f95ced08beb6ab3dd376c9",
		"STZ Dilla",
		"STZ Dilla",
		"ERC1155",
		"/images/nfts/0x32b039de995349ddd2f95ced08beb6ab3dd376c9.png"
	],
	[
		"0xaa5e72e5ded8264a5c2697dafa14bd5b711ee5a8",
		"KIZUNA by STARTJPN- No utilities",
		"KIZUNA",
		"ERC1155",
		"/images/nfts/0xaa5e72e5ded8264a5c2697dafa14bd5b711ee5a8.png"
	],
	[
		"0xe687b61d30e5d81126c638db2ee98732b577daeb",
		"Dean Harvey - Pixel Editions",
		"Dean Harvey - Pixel Editions",
		"ERC1155",
		"/images/nfts/0xe687b61d30e5d81126c638db2ee98732b577daeb.png"
	],
	[
		"0xca96dd59cf3d3e970bfe133fe39607769f7151c3",
		"Bittersweet Journals by Lazaro",
		"BTSJ",
		"ERC1155",
		"/images/nfts/0xca96dd59cf3d3e970bfe133fe39607769f7151c3.png"
	],
	[
		"0xb178c79d04d2eb3795470b880af3ac9ecf4b0c84",
		"N O W A R by Cosmo Danchin-Hamard",
		"CDH",
		"ERC1155",
		"/images/nfts/0xb178c79d04d2eb3795470b880af3ac9ecf4b0c84.png"
	],
	[
		"0x35fa62f608fb1d1dc8bbb212bf4f94453875708a",
		"something notable",
		"notables",
		"ERC1155",
		"/images/nfts/0x35fa62f608fb1d1dc8bbb212bf4f94453875708a.png"
	],
	[
		"0x2992362e9672bd3b75fc9cd46b167f3da53eba40",
		"Aku's Art Collection",
		"AKUART",
		"ERC1155",
		"/images/nfts/0x2992362e9672bd3b75fc9cd46b167f3da53eba40.png"
	],
	[
		"0xaf2353a8c3f5aea478e2b3bad53b00749d819103",
		"Malko Diris to South Africa",
		"MDtoSA",
		"ERC1155",
		"/images/nfts/0xaf2353a8c3f5aea478e2b3bad53b00749d819103.png"
	],
	[
		"0xa2433030bd722e7126dcc220ed8f1411c8500e8e",
		"gngmgngm",
		"gn",
		"ERC1155",
		"/images/nfts/0xa2433030bd722e7126dcc220ed8f1411c8500e8e.png"
	],
	[
		"0xb01ce05efec8fdc3c14c572bf56314756f38507e",
		"The Token Beyond The Image",
		"The Token Beyond The Image",
		"ERC1155",
		"/images/nfts/0xb01ce05efec8fdc3c14c572bf56314756f38507e.png"
	],
	[
		"0xd77741cdc3100f88191860afd144b261f0ab9d52",
		"Shilly: The Memes",
		"SHILLYMEMES",
		"ERC1155",
		"/images/nfts/0xd77741cdc3100f88191860afd144b261f0ab9d52.png"
	],
	[
		"0x71bd611e82c0b765b5eef8d185af18a5525b9cf3",
		"THE INFINITY STONES",
		"MARVEL",
		"ERC1155",
		"/images/nfts/0x71bd611e82c0b765b5eef8d185af18a5525b9cf3.png"
	],
	[
		"0x80720d5866237550f43259431fbc6319937ef8f8",
		"Terry Urban's Editions",
		"Terry Urban's Editions",
		"ERC1155",
		"/images/nfts/0x80720d5866237550f43259431fbc6319937ef8f8.png"
	],
	[
		"0xd8f8798b08f4a280cb0c3e070a79f2c5dc8aeb3d",
		"GasWarriors Open Editions",
		"GWO",
		"ERC1155",
		"/images/nfts/0xd8f8798b08f4a280cb0c3e070a79f2c5dc8aeb3d.png"
	],
	[
		"0x1f0717ddc9a530d1a2b0a85a594cbdd7288868da",
		"am outlet store",
		"amgm",
		"ERC1155",
		"/images/nfts/0x1f0717ddc9a530d1a2b0a85a594cbdd7288868da.png"
	],
	[
		"0x1a2ef5e538a6c2ae214a5fe2684af7eca05fa17a",
		"The Realm of MU",
		"MU",
		"ERC1155",
		"/images/nfts/0x1a2ef5e538a6c2ae214a5fe2684af7eca05fa17a.png"
	],
	[
		"0x60c048a2e5b8571972b15c725813bdaf1bba2e5e",
		"Muffin Pepe Editions",
		"MUFFIN",
		"ERC1155",
		"/images/nfts/0x60c048a2e5b8571972b15c725813bdaf1bba2e5e.png"
	],
	[
		"0x7b4b550d6cbf55441f6153c71a5d173d860d83fe",
		"Aura Exchange Membership",
		"AURA",
		"ERC1155",
		"/images/nfts/0x7b4b550d6cbf55441f6153c71a5d173d860d83fe.png"
	],
	[
		"0xd56f1cb3d1eae921b0f331803394d6ed07f43139",
		"Opepen Curated",
		"OpC",
		"ERC1155",
		"/images/nfts/0xd56f1cb3d1eae921b0f331803394d6ed07f43139.png"
	],
	[
		"0x09d357ac9ccbf1865332e2dd71b6b678cf4c479e",
		"violet house winter '23",
		"VHW23",
		"ERC1155",
		"/images/nfts/0x09d357ac9ccbf1865332e2dd71b6b678cf4c479e.png"
	],
	[
		"0x2513142b6410db580b63d295b566c7499e659731",
		"Luminza",
		"Luminza",
		"ERC1155",
		"/images/nfts/0x2513142b6410db580b63d295b566c7499e659731.png"
	],
	[
		"0x76aced3edeb980389515cab89fa43b3ecaca025c",
		"Blocks of Manhattan - The Mint Manhattan Map",
		"Blocks of Manhattan - The Mint Manhattan Map",
		"ERC1155",
		"/images/nfts/0x76aced3edeb980389515cab89fa43b3ecaca025c.png"
	],
	[
		"0xdad490e883d44e49e08d5bb15cdefb7a29168929",
		"CHECK4RS",
		"CHECKERS",
		"ERC1155",
		"/images/nfts/0xdad490e883d44e49e08d5bb15cdefb7a29168929.png"
	],
	[
		"0xbd6e51b6239ff5c0faa7333d59ab1264aa6a6361",
		"FLOWING DESIRES",
		"DESIRE",
		"ERC1155",
		"/images/nfts/0xbd6e51b6239ff5c0faa7333d59ab1264aa6a6361.png"
	],
	[
		"0x05baf9f1961e1ed1dac222a1f97c479441b31b34",
		"SANGA",
		"SANGA",
		"ERC1155",
		"/images/nfts/0x05baf9f1961e1ed1dac222a1f97c479441b31b34.png"
	],
	[
		"0xadb4ecdabeed8ebc69fa02f60cd43e8a2ce511e1",
		"Editions by Rainer Hosch",
		"ERH",
		"ERC1155",
		"/images/nfts/0xadb4ecdabeed8ebc69fa02f60cd43e8a2ce511e1.png"
	],
	[
		"0x46594ceec7effe8fb3fd432093b6e9b4822d9697",
		"LifeofMuga",
		"MUGA",
		"ERC1155",
		"/images/nfts/0x46594ceec7effe8fb3fd432093b6e9b4822d9697.png"
	],
	[
		"0xe9a0060d6dce251ba8dc563700d148fa23c1cad4",
		"Magically Go Poof!",
		"MGP",
		"ERC1155",
		"/images/nfts/0xe9a0060d6dce251ba8dc563700d148fa23c1cad4.png"
	],
	[
		"0x62f17339399ea4cbe06f174bd30d73a53fcb4959",
		"ForsArt",
		"FORS",
		"ERC1155"
	],
	[
		"0xc440efe941883fe47654c9ca9c6d2c9868dab7bf",
		"Generative Garage",
		"GG",
		"ERC1155",
		"/images/nfts/0xc440efe941883fe47654c9ca9c6d2c9868dab7bf.png"
	],
	[
		"0x3f847d801d1eff333937d370c72492707565ba2c",
		"Ordinary Helicopter by Troy Guénard",
		"Heli",
		"ERC1155",
		"/images/nfts/0x3f847d801d1eff333937d370c72492707565ba2c.png"
	],
	[
		"0x0295fc07787e7b734d0209b00fe806839b387298",
		"LEGENDARY PUNK PORTRAITS (Manifold)",
		"LPP",
		"ERC1155",
		"/images/nfts/0x0295fc07787e7b734d0209b00fe806839b387298.png"
	],
	[
		"0x14e6acd9a726db4210d5773d759d7bd9c7ff4b51",
		"Zoku Home By ChainZoku",
		"Zoku Home By ChainZoku",
		"ERC1155",
		"/images/nfts/0x14e6acd9a726db4210d5773d759d7bd9c7ff4b51.png"
	],
	[
		"0xdd041ab624ce14e610218a2475cdadd270bf822a",
		"FAKE CHEQUES",
		"FAKECH",
		"ERC1155",
		"/images/nfts/0xdd041ab624ce14e610218a2475cdadd270bf822a.png"
	],
	[
		"0xe1ef77f138e0b4f918b0bc4ee5f00f677663734e",
		"Zoku Gear By ChainZoku",
		"Zoku Gear By ChainZoku",
		"ERC1155",
		"/images/nfts/0xe1ef77f138e0b4f918b0bc4ee5f00f677663734e.png"
	],
	[
		"0x0360d20d2f170561a0c0c36f55ea4667c7adf8ed",
		"Editions by Dennis Schmelz",
		"EDS",
		"ERC1155",
		"/images/nfts/0x0360d20d2f170561a0c0c36f55ea4667c7adf8ed.png"
	],
	[
		"0x2a68c634661adc571f57b7a90c386501e83ee6e2",
		"Aku's Yellow Backpack",
		"YBP",
		"ERC1155",
		"/images/nfts/0x2a68c634661adc571f57b7a90c386501e83ee6e2.png"
	],
	[
		"0x02565cb75c81f08e150f0116ef787f653f357bb5",
		"trevorjonesart3",
		"trevorjonesart3",
		"ERC1155",
		"/images/nfts/0x02565cb75c81f08e150f0116ef787f653f357bb5.png"
	],
	[
		"0xf7096428caa0d968f9c039233398f1303559c627",
		"Untitled LP",
		"LP5",
		"ERC1155",
		"/images/nfts/0xf7096428caa0d968f9c039233398f1303559c627.png"
	],
	[
		"0xe2a5bfbbd797689819067ed50348a0de8e1db018",
		"MonsieuRabbit Genesis Collection",
		"MRGC",
		"ERC1155",
		"/images/nfts/0xe2a5bfbbd797689819067ed50348a0de8e1db018.png"
	],
	[
		"0x4ef7d6bce75bfa469f7d9a4d2fac59a3e0a1b0c9",
		"Fuga a tientas by Alejandro Campos",
		"Fuga a tientas by Alejandro Campos",
		"ERC1155",
		"/images/nfts/0x4ef7d6bce75bfa469f7d9a4d2fac59a3e0a1b0c9.png"
	],
	[
		"0x63ae67f980670b3bc2d32a80714ca60c6a89bed9",
		"W-MIND BOX",
		"WMB",
		"ERC1155",
		"/images/nfts/0x63ae67f980670b3bc2d32a80714ca60c6a89bed9.png"
	],
	[
		"0x09d78c79a5e20de2a4959b456269a73a64ac2f8a",
		"DOTPIGEON OPEN EDITIONS",
		"DOTPOES",
		"ERC1155",
		"/images/nfts/0x09d78c79a5e20de2a4959b456269a73a64ac2f8a.png"
	],
	[
		"0x09e66d8a4726ce44dceebc73bf48c19fbd335b93",
		"Cydr Editions",
		"CE",
		"ERC1155",
		"/images/nfts/0x09e66d8a4726ce44dceebc73bf48c19fbd335b93.png"
	],
	[
		"0x625f54e432d1c7883f584bacffe06582bc4b097c",
		"JPGfam",
		"JPGfam",
		"ERC1155",
		"/images/nfts/0x625f54e432d1c7883f584bacffe06582bc4b097c.png"
	],
	[
		"0x80a0baa8fc32fe672372869554194bd93b1f7aa6",
		"0x80a0baa8fc32fe672372869554194bd93b1f7aa6",
		"0x80a0baa8fc32fe672372869554194bd93b1f7aa6",
		"ERC1155",
		"/images/nfts/0x80a0baa8fc32fe672372869554194bd93b1f7aa6.png"
	],
	[
		"0xa2d4a263c2f611e8bfe3c754b80388045c095cdc",
		"Dita Crypto",
		"DITAC",
		"ERC1155",
		"/images/nfts/0xa2d4a263c2f611e8bfe3c754b80388045c095cdc.png"
	],
	[
		"0x501fab1de157b33ddfdba5feb353b379571d718e",
		"Bored Supper Club",
		"HNGRY",
		"ERC1155",
		"/images/nfts/0x501fab1de157b33ddfdba5feb353b379571d718e.png"
	],
	[
		"0xf3382273c11847a0a4c46b19a80f49090df17804",
		"Block Party by Andrew McWhae Mint Token",
		"Block Party by Andrew McWhae Mint Token",
		"ERC1155",
		"/images/nfts/0xf3382273c11847a0a4c46b19a80f49090df17804.png"
	],
	[
		"0x1fe796884bb701deeb486c6b90b95f66305d15d5",
		"editions by priyanka",
		"editions by priyanka",
		"ERC1155",
		"/images/nfts/0x1fe796884bb701deeb486c6b90b95f66305d15d5.png"
	],
	[
		"0xb6584723d6a2a2c56095911a03a1bf22c2f62b9a",
		"EYEBOTS EDITIONS",
		"EYEBOTS EDITIONS",
		"ERC1155",
		"/images/nfts/0xb6584723d6a2a2c56095911a03a1bf22c2f62b9a.png"
	],
	[
		"0x853adfe3e8c505b4212b3fc8b9d2a9427ff584cb",
		"Neo Horizon Foundation",
		"NHF",
		"ERC1155",
		"/images/nfts/0x853adfe3e8c505b4212b3fc8b9d2a9427ff584cb.png"
	],
	[
		"0x8a17eeadc29fe97db7844410b4a294446abb292f",
		"The Path to Lambda",
		"SIGMA",
		"ERC1155",
		"/images/nfts/0x8a17eeadc29fe97db7844410b4a294446abb292f.png"
	],
	[
		"0x74bdd201c14f2879867059ebbb972fd22935d504",
		"BORN UNDEAD EDITIONS by GIMIKS BORN",
		"BUEDGB",
		"ERC1155",
		"/images/nfts/0x74bdd201c14f2879867059ebbb972fd22935d504.png"
	],
	[
		"0x25e555f03c7eb188d671c104f6fdea8c52f2e0cc",
		"Skullz Editions",
		"SKED",
		"ERC1155",
		"/images/nfts/0x25e555f03c7eb188d671c104f6fdea8c52f2e0cc.png"
	],
	[
		"0x00bf9fdb90cd726941244d82b90ce7bb237e7799",
		"Broken Balloon Dog (BLUE) by Devotion",
		"BBBD",
		"ERC1155",
		"/images/nfts/0x00bf9fdb90cd726941244d82b90ce7bb237e7799.png"
	],
	[
		"0xc06d5973696e67d044784f9ca5299c42c36b7b14",
		"Eric Pause Editions",
		"PAUSE",
		"ERC1155",
		"/images/nfts/0xc06d5973696e67d044784f9ca5299c42c36b7b14.png"
	],
	[
		"0x9b65bc656f0d2d95b08860494af49c97ad2d6ee3",
		"FightCardNFT",
		"FIGHT",
		"ERC1155",
		"/images/nfts/0x9b65bc656f0d2d95b08860494af49c97ad2d6ee3.png"
	],
	[
		"0xad364bde2420d8d49ecf276b80d2b2f1f5b3a80e",
		"Editions By Tristan Rettich",
		"TR",
		"ERC1155",
		"/images/nfts/0xad364bde2420d8d49ecf276b80d2b2f1f5b3a80e.png"
	],
	[
		"0xd1ae247309a89953b06b18446a3f54db453ba065",
		"Generative Exploration Editions",
		"GENEe",
		"ERC1155",
		"/images/nfts/0xd1ae247309a89953b06b18446a3f54db453ba065.png"
	],
	[
		"0x123958421d9b61815bce5a30a7d84a798336bb7f",
		"9dcc ITERATION-02 Vaulted",
		"IT-02 Vaulted",
		"ERC1155",
		"/images/nfts/0x123958421d9b61815bce5a30a7d84a798336bb7f.png"
	],
	[
		"0x9a499788b05071c0729f0a7c5e3e1fb9aa505766",
		"Perceptions by Dre Dogue",
		"PERC",
		"ERC1155",
		"/images/nfts/0x9a499788b05071c0729f0a7c5e3e1fb9aa505766.png"
	],
	[
		"0x015432b34cfc4318966734e930fe8267ffc1271c",
		"Transcendence by Joelle LB",
		"TRSCD",
		"ERC1155",
		"/images/nfts/0x015432b34cfc4318966734e930fe8267ffc1271c.png"
	],
	[
		"0x908d5cc2e8941b72e86e6147c5e623dae9c27717",
		"Top G Exclusive",
		"TOPG",
		"ERC1155",
		"/images/nfts/0x908d5cc2e8941b72e86e6147c5e623dae9c27717.png"
	],
	[
		"0x1aac22c1f552ae8c35c6b8b2afaeb7812ab5acc7",
		"THESTAR",
		"STAR",
		"ERC1155",
		"/images/nfts/0x1aac22c1f552ae8c35c6b8b2afaeb7812ab5acc7.png"
	],
	[
		"0x9918d7c7adb05684466c9eae2119a7cbc845c8d2",
		"Friends Of Nick Davis",
		"Friends Of Nick Davis",
		"ERC1155",
		"/images/nfts/0x9918d7c7adb05684466c9eae2119a7cbc845c8d2.png"
	],
	[
		"0x6090b82569a9354c734a10da1ca686d0022329cd",
		"Le Hues Rememes Series",
		"TSOM",
		"ERC1155",
		"/images/nfts/0x6090b82569a9354c734a10da1ca686d0022329cd.png"
	],
	[
		"0x1aeda154af68bd55988be3e5e39c6cd58ba9e9a3",
		"Foreverpunks Editions",
		"Foreverpunks Editions",
		"ERC1155",
		"/images/nfts/0x1aeda154af68bd55988be3e5e39c6cd58ba9e9a3.png"
	],
	[
		"0xf9ae3b44a8e138a7e14208fafd4d46ff6d5811cb",
		"PixelCarsOff",
		"PXCAR",
		"ERC1155",
		"/images/nfts/0xf9ae3b44a8e138a7e14208fafd4d46ff6d5811cb.png"
	],
	[
		"0x9d177e3ae11b6139f087e2b86769be740ddc656b",
		"HACC00NS",
		"HCNS",
		"ERC1155",
		"/images/nfts/0x9d177e3ae11b6139f087e2b86769be740ddc656b.png"
	],
	[
		"0xf68513a9cc34a8c78b601e1c9e9812360eca1dce",
		"The Sketches of Life",
		"Menji",
		"ERC1155",
		"/images/nfts/0xf68513a9cc34a8c78b601e1c9e9812360eca1dce.png"
	],
	[
		"0xe297756a9a2e88060c30edc02664e208b6e7cb0c",
		"Laundry Ticket",
		"LT",
		"ERC1155",
		"/images/nfts/0xe297756a9a2e88060c30edc02664e208b6e7cb0c.png"
	],
	[
		"0xf8c94bb74b3696cb85d0827fc35d36b53da0e47e",
		"Paradigm Shift by Alan Bolton",
		"PS1155",
		"ERC1155",
		"/images/nfts/0xf8c94bb74b3696cb85d0827fc35d36b53da0e47e.png"
	],
	[
		"0x333a55ff61e9a90ac6a2e70b04a7c332bc6fb41b",
		"The Sage Formula",
		"SAGE",
		"ERC1155",
		"/images/nfts/0x333a55ff61e9a90ac6a2e70b04a7c332bc6fb41b.png"
	],
	[
		"0x39f1cee7baab36afe95570ac78769b1bc6f9d8d6",
		"Peppe Spray",
		"PSPRAY",
		"ERC1155",
		"/images/nfts/0x39f1cee7baab36afe95570ac78769b1bc6f9d8d6.png"
	],
	[
		"0x32498aab1a6f67b1b2de5f4fb898b82d820a2e74",
		"THE OJUJU SAGA EDITIONS",
		"OJUJU2",
		"ERC1155"
	],
	[
		"0x861d14e015800721226c2dead5230f58df8dc13f",
		"Cos Rom Edition",
		"CRE",
		"ERC1155",
		"/images/nfts/0x861d14e015800721226c2dead5230f58df8dc13f.png"
	],
	[
		"0x2886e915857be822582c9d658114b28ba704d20f",
		"WE MADE IT?",
		"WEMADEIT",
		"ERC1155",
		"/images/nfts/0x2886e915857be822582c9d658114b28ba704d20f.png"
	],
	[
		"0x1939d1b488626c25f66c78e5d14e99f19fd21794",
		"archecks",
		"AC",
		"ERC1155",
		"/images/nfts/0x1939d1b488626c25f66c78e5d14e99f19fd21794.png"
	],
	[
		"0x0d78d3031b4c201c74cf4652d24cecad06dcee5c",
		"ⒺⓊ Scrolls",
		"EU",
		"ERC1155",
		"/images/nfts/0x0d78d3031b4c201c74cf4652d24cecad06dcee5c.png"
	],
	[
		"0xa986559aacf60a82fab3ef59940febea8027be0c",
		"MetaZoo Valentines",
		"MZV",
		"ERC1155"
	],
	[
		"0x461ac346eb6ac5d60a3bc128636312c90d244dcd",
		"Hideaway",
		"Hideaway",
		"ERC1155",
		"/images/nfts/0x461ac346eb6ac5d60a3bc128636312c90d244dcd.png"
	],
	[
		"0xb287fb785531747db308f6cf1fcfa033dcb62e24",
		"LND OG PASS",
		"LNDOP",
		"ERC1155",
		"/images/nfts/0xb287fb785531747db308f6cf1fcfa033dcb62e24.png"
	],
	[
		"0xe935e3d14a1a86b8cab6f2dfd9b27ee585747e61",
		"Original Jelly Token",
		"OJT",
		"ERC1155",
		"/images/nfts/0xe935e3d14a1a86b8cab6f2dfd9b27ee585747e61.png"
	],
	[
		"0xa8b33bd28ef0f19ca8dae5babdf9817a6897f3e5",
		"raCC0on world",
		"RACC0ON",
		"ERC1155",
		"/images/nfts/0xa8b33bd28ef0f19ca8dae5babdf9817a6897f3e5.png"
	],
	[
		"0xe05f834fa05eee45762ee6942f2ad585187d2da5",
		"XCart BTC Sneakers",
		"XCart BTC Sneakers",
		"ERC1155",
		"/images/nfts/0xe05f834fa05eee45762ee6942f2ad585187d2da5.png"
	],
	[
		"0x2c083197d2512de39482eaf5b82aa198520f6747",
		"archive labs",
		"AL",
		"ERC1155",
		"/images/nfts/0x2c083197d2512de39482eaf5b82aa198520f6747.png"
	],
	[
		"0x0e9a9a9fdf3a8f9f51c9a48f46744e52cd2c0fb3",
		"Endless Love Open Edition",
		"ELOE",
		"ERC1155",
		"/images/nfts/0x0e9a9a9fdf3a8f9f51c9a48f46744e52cd2c0fb3.png"
	],
	[
		"0x147e33f3def5abf202a6e70b1863cfde04b9a3a2",
		"*X.",
		"XXX",
		"ERC1155",
		"/images/nfts/0x147e33f3def5abf202a6e70b1863cfde04b9a3a2.png"
	],
	[
		"0x86131cf3cbf6ecd6546a1dff41d243d33ee1bf22",
		"fancynancy",
		"WHH",
		"ERC1155",
		"/images/nfts/0x86131cf3cbf6ecd6546a1dff41d243d33ee1bf22.png"
	],
	[
		"0x1521eb5ee2736e59d4a14985cb118f6cca83744d",
		"ROGUE AND SINCERE",
		"RGSN",
		"ERC1155"
	],
	[
		"0x461194504a03acd74f4a85a666a7aa2fd606696c",
		"MOODY EDITIONS",
		"MOODY",
		"ERC1155",
		"/images/nfts/0x461194504a03acd74f4a85a666a7aa2fd606696c.png"
	],
	[
		"0xcf74fcc273b19221120a8b41eedf92291568fc72",
		"Blazar 0 Club",
		"BzB",
		"ERC1155",
		"/images/nfts/0xcf74fcc273b19221120a8b41eedf92291568fc72.png"
	],
	[
		"0x56a15a9deb9e5c0af04bb698332ca75f2d005dc5",
		"Excellent.xlsx",
		"xlsx",
		"ERC1155",
		"/images/nfts/0x56a15a9deb9e5c0af04bb698332ca75f2d005dc5.png"
	],
	[
		"0x445719ca9bb2c08d2f6adefce50ec0d6cbcb2173",
		"Binary Dimensions",
		"disk",
		"ERC1155",
		"/images/nfts/0x445719ca9bb2c08d2f6adefce50ec0d6cbcb2173.png"
	],
	[
		"0xd94ae8aeb1199b11607ff9ea317d2043123c2b58",
		"The Shape Shift Series",
		"SSS",
		"ERC1155",
		"/images/nfts/0xd94ae8aeb1199b11607ff9ea317d2043123c2b58.png"
	],
	[
		"0xfc33826280fb5c363c6994ed9f5d9c6cdd492144",
		"Aoifisms",
		"Aoif",
		"ERC1155",
		"/images/nfts/0xfc33826280fb5c363c6994ed9f5d9c6cdd492144.png"
	],
	[
		"0xde17ddeeb8bd03624a15908a33959b3d4dc4057f",
		"SUSHI by MosFam",
		"SUSHI",
		"ERC1155",
		"/images/nfts/0xde17ddeeb8bd03624a15908a33959b3d4dc4057f.png"
	],
	[
		"0x79868a87dbc36bb25d75eb2506f60c33fa8938ed",
		"Graildom",
		"Graildom",
		"ERC1155",
		"/images/nfts/0x79868a87dbc36bb25d75eb2506f60c33fa8938ed.png"
	],
	[
		"0xacd1ff45068ccc269e6496fcfb085f63c735a41a",
		"Chiko & Roko Art V2",
		"CHIKOROKO",
		"ERC1155",
		"/images/nfts/0xacd1ff45068ccc269e6496fcfb085f63c735a41a.png"
	],
	[
		"0xfc02cfbd1383ffed3c1040455c683e21a88f43a1",
		"Widgets",
		"WDGTS",
		"ERC1155",
		"/images/nfts/0xfc02cfbd1383ffed3c1040455c683e21a88f43a1.png"
	],
	[
		"0x4b7930b9fcf110fbeda91ff3d5232acca6303a6c",
		"CHECKEK by RGX",
		"CHKEK",
		"ERC1155",
		"/images/nfts/0x4b7930b9fcf110fbeda91ff3d5232acca6303a6c.png"
	],
	[
		"0xdfd540688247366c27269a1a8023be83fb4d36f2",
		"Checks Museum by Memesterpieces",
		"MP",
		"ERC1155",
		"/images/nfts/0xdfd540688247366c27269a1a8023be83fb4d36f2.png"
	],
	[
		"0xc70ebd1b150ed29455511f4b7d99e04f5bbdbcdb",
		"Opepen Doodle Edition",
		"Dood",
		"ERC1155",
		"/images/nfts/0xc70ebd1b150ed29455511f4b7d99e04f5bbdbcdb.png"
	],
	[
		"0x8215d264636588b5472205101003907d432f0772",
		"Ethernity's Master Collection",
		"Ethernity's Master Collection",
		"ERC1155",
		"/images/nfts/0x8215d264636588b5472205101003907d432f0772.png"
	],
	[
		"0x1dc4cb273ba5700b81b519d1945aab1b2817da04",
		"Shapes",
		"SHPS",
		"ERC1155",
		"/images/nfts/0x1dc4cb273ba5700b81b519d1945aab1b2817da04.png"
	],
	[
		"0xa852fd48e562477389599165136870b8f61fba1b",
		"virginNFT",
		"VN77",
		"ERC1155",
		"/images/nfts/0xa852fd48e562477389599165136870b8f61fba1b.png"
	],
	[
		"0x60eac2cc7886942b8da0d577f39232bbd5c117d7",
		"DEEKAY Edition",
		"DK2",
		"ERC1155",
		"/images/nfts/0x60eac2cc7886942b8da0d577f39232bbd5c117d7.png"
	],
	[
		"0xa7eba6964eae1dd03c7f2102fb1a5bfceec14507",
		"I Love You by WhIsBe",
		"ILY",
		"ERC1155",
		"/images/nfts/0xa7eba6964eae1dd03c7f2102fb1a5bfceec14507.png"
	],
	[
		"0xc252c48ef64b455e600ffd4bb15a9b750751133e",
		"John Knopf Editions",
		"KNOPF",
		"ERC1155",
		"/images/nfts/0xc252c48ef64b455e600ffd4bb15a9b750751133e.png"
	],
	[
		"0x0edffa4230fa606a032ee69a349b97b6750b68d1",
		"BlueArk Galaxy",
		"BlueArk Galaxy",
		"ERC1155",
		"/images/nfts/0x0edffa4230fa606a032ee69a349b97b6750b68d1.png"
	],
	[
		"0x810f9bbc1306ba3713b46077a05b8a452f1e29b5",
		"CClay Series",
		"CCSERIES",
		"ERC1155",
		"/images/nfts/0x810f9bbc1306ba3713b46077a05b8a452f1e29b5.png"
	],
	[
		"0x185b6b13be7cefa99262af1f78ae87213e4ddd3d",
		"ShardVault 3: EtherRock #30",
		"ROCKS",
		"ERC1155",
		"/images/nfts/0x185b6b13be7cefa99262af1f78ae87213e4ddd3d.png"
	],
	[
		"0x91f55ef0f40ff08708682ac6db7d7ba95655fc5f",
		"Akuma No Tamago Noctite",
		"AKUN",
		"ERC1155",
		"/images/nfts/0x91f55ef0f40ff08708682ac6db7d7ba95655fc5f.png"
	],
	[
		"0x1e196b7873b8456437309ba3fa748fa6f1602da8",
		"ArtToken- 1155",
		"ArtToken- 1155",
		"ERC1155",
		"/images/nfts/0x1e196b7873b8456437309ba3fa748fa6f1602da8.png"
	],
	[
		"0xceadc5e56241000fc0ca91e035bf0c0f79ffc537",
		"Odyssey (Blank Embrace x BWOW Collab)",
		"ODYSSEYBWOW",
		"ERC1155",
		"/images/nfts/0xceadc5e56241000fc0ca91e035bf0c0f79ffc537.png"
	],
	[
		"0x802713b26750b5b649189345b978bfade755fa89",
		"Exotic Editions",
		"EHERO",
		"ERC1155",
		"/images/nfts/0x802713b26750b5b649189345b978bfade755fa89.png"
	],
	[
		"0x65cf197a0e3d851bc92fd9ea34d7582335cf5be8",
		"ArtToken- 1155",
		"ArtToken- 1155",
		"ERC1155"
	],
	[
		"0xc5d737bca631c2b62288abf164b8e32e23be8398",
		"Ravi Vora Editions",
		"RAVIS",
		"ERC1155",
		"/images/nfts/0xc5d737bca631c2b62288abf164b8e32e23be8398.png"
	],
	[
		"0x0a53f5a4f2477ec2b55991fcb56884e61c2d5380",
		"DK - HQ",
		"DKHQ",
		"ERC1155",
		"/images/nfts/0x0a53f5a4f2477ec2b55991fcb56884e61c2d5380.png"
	],
	[
		"0x9d304bf7be09ab05a15a3e770344faeb5eda9c39",
		"Intertidal Samples by Entangled Others",
		"Intertidal Samples by Entangled Others",
		"ERC1155",
		"/images/nfts/0x9d304bf7be09ab05a15a3e770344faeb5eda9c39.png"
	],
	[
		"0x2f5f88d76101db8f234af3f4c82d1184294d615c",
		"Shilly: The Stringz",
		"ShillyStringz",
		"ERC1155",
		"/images/nfts/0x2f5f88d76101db8f234af3f4c82d1184294d615c.png"
	],
	[
		"0x890dc5dd5fc40c056c8d4152edb146a1c76d1c29",
		"REVIVER - YIN&YANG",
		"REVIVER ART",
		"ERC1155",
		"/images/nfts/0x890dc5dd5fc40c056c8d4152edb146a1c76d1c29.png"
	],
	[
		"0xd19d35601c9f4156cc2cfcca42ae4ae4a44acf9a",
		"Babylon Item",
		"BI",
		"ERC1155",
		"/images/nfts/0xd19d35601c9f4156cc2cfcca42ae4ae4a44acf9a.png"
	],
	[
		"0x1524950b65cfcd634709a68026c188de3147eaca",
		"BAKENEKO OPEN EDITIONS",
		"BKNK",
		"ERC1155",
		"/images/nfts/0x1524950b65cfcd634709a68026c188de3147eaca.png"
	],
	[
		"0x2ad6b7ef78bf8fe09a77db7f19ffe47982b70031",
		"traf editions",
		"UNTITLD",
		"ERC1155",
		"/images/nfts/0x2ad6b7ef78bf8fe09a77db7f19ffe47982b70031.png"
	],
	[
		"0x62906f76a36ac0121440530187fea428a30b220e",
		"Roomz To Show: Collectors Edition",
		"RTSC",
		"ERC1155",
		"/images/nfts/0x62906f76a36ac0121440530187fea428a30b220e.png"
	],
	[
		"0x51dcd065896a553666f69dfe1d39c0cfbdd15e54",
		"Gatherings V2",
		"GATHER",
		"ERC1155"
	],
	[
		"0x944c2d467930a8398f5a5b704b5d359ede4b0ef0",
		"X-RAYTED",
		"X-RAYTED",
		"ERC1155",
		"/images/nfts/0x944c2d467930a8398f5a5b704b5d359ede4b0ef0.png"
	],
	[
		"0xdfc97694a4c55f202f15b533bf44700c23888d13",
		"xo_token",
		"XOTKN",
		"ERC1155",
		"/images/nfts/0xdfc97694a4c55f202f15b533bf44700c23888d13.png"
	],
	[
		"0x3afe3de67894fcd578eb492d1a74d13327b41aae",
		"Lionel Messi: Man from Tomorrow",
		"Lionel Messi: Man from Tomorrow",
		"ERC1155",
		"/images/nfts/0x3afe3de67894fcd578eb492d1a74d13327b41aae.png"
	],
	[
		"0x228b2158a016ad8eea1a513584ee68051edb9721",
		"BlurDoublePunks",
		"BDP",
		"ERC1155",
		"/images/nfts/0x228b2158a016ad8eea1a513584ee68051edb9721.png"
	],
	[
		"0x66eaaa05c6ffc9c41f639a37eea6855ddbb61d05",
		"Project Pre A-Heart",
		"HRT",
		"ERC1155",
		"/images/nfts/0x66eaaa05c6ffc9c41f639a37eea6855ddbb61d05.png"
	],
	[
		"0x401b23f374df842d36c1918e1401b47d1e65317a",
		"rekt3Drops",
		"rekt3Drops",
		"ERC1155",
		"/images/nfts/0x401b23f374df842d36c1918e1401b47d1e65317a.png"
	],
	[
		"0xbab4fff798ef99c2d81d1f81b791995acfe8bba3",
		"PEPEDEMONS",
		"PPDMN",
		"ERC1155",
		"/images/nfts/0xbab4fff798ef99c2d81d1f81b791995acfe8bba3.png"
	],
	[
		"0xf06b509ebb73c691499a80c26b2f9a0eeadedd90",
		"Metaverses powered by Rove Ethereum",
		"RMs",
		"ERC1155",
		"/images/nfts/0xf06b509ebb73c691499a80c26b2f9a0eeadedd90.png"
	],
	[
		"0x03d04d087e9201a56d0639ff48596465880f0cf3",
		"Juiced Drawings",
		"Juiced Drawings",
		"ERC1155",
		"/images/nfts/0x03d04d087e9201a56d0639ff48596465880f0cf3.png"
	],
	[
		"0x2fa531d7f38a30e361eed5c02aca615c07af46ee",
		"Moonshooters Exclusive Club",
		"Moonshooters Exclusive Club",
		"ERC1155",
		"/images/nfts/0x2fa531d7f38a30e361eed5c02aca615c07af46ee.png"
	],
	[
		"0x7e53b06cf0769b770aa702ef1746b5c8c0ce0d47",
		"Oibel Art",
		"Oibel Art",
		"ERC1155",
		"/images/nfts/0x7e53b06cf0769b770aa702ef1746b5c8c0ce0d47.png"
	],
	[
		"0xd4159916070ff7c15bd15eb418f45426922bba15",
		"Zima Blue Art",
		"ZIMA",
		"ERC1155",
		"/images/nfts/0xd4159916070ff7c15bd15eb418f45426922bba15.png"
	],
	[
		"0x76dcd06d8cea2fa8201a219aa3546c06e1e69984",
		"Digivatar - Collabs",
		"TOFF",
		"ERC1155",
		"/images/nfts/0x76dcd06d8cea2fa8201a219aa3546c06e1e69984.png"
	],
	[
		"0x500fe6d1f68b27b3f860bbf425ecb0f6bba2ae39",
		"Infinite Realities by Silvio Vieira",
		"CIR",
		"ERC1155",
		"/images/nfts/0x500fe6d1f68b27b3f860bbf425ecb0f6bba2ae39.png"
	],
	[
		"0x29ca13ded355c6bdf677b6fe3acad0ea2cfafc19",
		"The World Peek Journey",
		"TWPJ",
		"ERC1155",
		"/images/nfts/0x29ca13ded355c6bdf677b6fe3acad0ea2cfafc19.png"
	],
	[
		"0x4db52a61dc491e15a2f78f5ac001c14ffe3568cb",
		"Meme Lab by 6529",
		"MemeLab",
		"ERC1155",
		"/images/nfts/0x4db52a61dc491e15a2f78f5ac001c14ffe3568cb.png"
	],
	[
		"0xa34a270e8e0830c3d2b8b2e7acb375ab6f71692d",
		"Crypto Yum Collection",
		"CYC",
		"ERC1155",
		"/images/nfts/0xa34a270e8e0830c3d2b8b2e7acb375ab6f71692d.png"
	],
	[
		"0x99cb1febf9e608c55616c7cfc1e84b6dd77bffd6",
		"Maid Mafia OVA",
		"MM",
		"ERC1155",
		"/images/nfts/0x99cb1febf9e608c55616c7cfc1e84b6dd77bffd6.png"
	],
	[
		"0x2f7f592e4bbe4007ea3929a5aa36ca524151018a",
		"SPACE GIRL VALENTINE",
		"SPACE GIRL VALENTINE",
		"ERC1155",
		"/images/nfts/0x2f7f592e4bbe4007ea3929a5aa36ca524151018a.png"
	],
	[
		"0xef498e9c6f9a8f35ac28669633f5530d1da7f7b8",
		"Kataverse Kollection",
		"Kataverse Kollection",
		"ERC1155",
		"/images/nfts/0xef498e9c6f9a8f35ac28669633f5530d1da7f7b8.png"
	],
	[
		"0xaa79f5b196320b96b105fbb90e4536887fe008d4",
		"Reece Swanepoel Events",
		"RSE",
		"ERC1155"
	],
	[
		"0x62cdf590945a8e9559e257145df310eb82cd793b",
		"Dreamer by Pablo Stanley",
		"DPS",
		"ERC1155",
		"/images/nfts/0x62cdf590945a8e9559e257145df310eb82cd793b.png"
	],
	[
		"0x9661c591038377e7cb98f6a2dc40c6dfc4cd5823",
		"Pacelist for Pacemaker",
		"Pacelist for Pacemaker",
		"ERC1155",
		"/images/nfts/0x9661c591038377e7cb98f6a2dc40c6dfc4cd5823.png"
	],
	[
		"0xaf46f44bf8009fa76739b6403c83a3781535443f",
		"MYSTERY CUBES by Satoshis Mom",
		"MYSTERYCUBE",
		"ERC1155",
		"/images/nfts/0xaf46f44bf8009fa76739b6403c83a3781535443f.png"
	],
	[
		"0x960f80cdd824a4f4b0c60692a5117cf45804249c",
		"3x3x3",
		"X3",
		"ERC1155",
		"/images/nfts/0x960f80cdd824a4f4b0c60692a5117cf45804249c.png"
	],
	[
		"0xc17bc75281ac4cc9898aa541ec30d96b2cfbf3a3",
		"GAMEBROS Artifact",
		"GAMEBROS Artifact",
		"ERC1155",
		"/images/nfts/0xc17bc75281ac4cc9898aa541ec30d96b2cfbf3a3.png"
	],
	[
		"0x82c416eb6fdf9e1aecab037fa3bbe72bae51e0f4",
		"Maiskaya Editions",
		"MAI",
		"ERC1155"
	],
	[
		"0xbf9f136e65f1746f6784f21f4090cf437c6cb2c0",
		"OPEN EDITION by Audace",
		"OPEN",
		"ERC1155",
		"/images/nfts/0xbf9f136e65f1746f6784f21f4090cf437c6cb2c0.png"
	],
	[
		"0x8ab6182da187abfcfa4d9ece8085fed101658bef",
		"Seven Deadly Sins",
		"7DS",
		"ERC1155"
	],
	[
		"0x8860c15649bbf65e7d912a657ac0c23dfbab0760",
		"Hell's Lab Supplies Drops Editions by Hellhound",
		"Hell's Lab Supplies Drops Editions by Hellhound",
		"ERC1155",
		"/images/nfts/0x8860c15649bbf65e7d912a657ac0c23dfbab0760.png"
	],
	[
		"0xc528834c9f9feaa568415a226b72cbda98112e11",
		"FPX FLY x Cheers UP Emoji",
		"FPXCUPEMOJI",
		"ERC1155",
		"/images/nfts/0xc528834c9f9feaa568415a226b72cbda98112e11.png"
	],
	[
		"0xa5b310c595e9830056a2e911a1096c0f1e262cb2",
		"Potato Harvest",
		"PH",
		"ERC1155",
		"/images/nfts/0xa5b310c595e9830056a2e911a1096c0f1e262cb2.png"
	],
	[
		"0xa12f1f767279af5da785984f1432c46d87e46e8c",
		"The Uncharted: Chapter One, The Southern Ring",
		"Uncharted: Chapter One, The Southern Ring",
		"ERC1155",
		"/images/nfts/0xa12f1f767279af5da785984f1432c46d87e46e8c.png"
	],
	[
		"0xc96e8c91c061af0aea3e47927f7ae142edca6390",
		"MEME IS ART by EpikNFT",
		"AIMIA",
		"ERC1155",
		"/images/nfts/0xc96e8c91c061af0aea3e47927f7ae142edca6390.png"
	],
	[
		"0xe1278a032f7166ac95676f275f2d94e7faf8d3af",
		"Puzzles by Shmoo",
		"P23",
		"ERC1155",
		"/images/nfts/0xe1278a032f7166ac95676f275f2d94e7faf8d3af.png"
	],
	[
		"0xd1e0b4849ee08dacab3608566fecde38ae5f3433",
		"Smufs",
		"SMUF",
		"ERC1155",
		"/images/nfts/0xd1e0b4849ee08dacab3608566fecde38ae5f3433.png"
	],
	[
		"0x1386f70a946cf9f06e32190cfb2f4f4f18365b87",
		"Decisions, Upsets and Unknowns.",
		"GM",
		"ERC1155",
		"/images/nfts/0x1386f70a946cf9f06e32190cfb2f4f4f18365b87.png"
	],
	[
		"0x89d6279d61d8eabb7b605737b812b640b42bcd31",
		"The Glitchin 60s",
		"SIXTY",
		"ERC1155",
		"/images/nfts/0x89d6279d61d8eabb7b605737b812b640b42bcd31.png"
	],
	[
		"0x06a68f82aa380653b8ed6f73b618a206ab090ab1",
		"EDOUARD Editions",
		"EDED",
		"ERC1155",
		"/images/nfts/0x06a68f82aa380653b8ed6f73b618a206ab090ab1.png"
	],
	[
		"0xbe97674a28ee1e3326da75f95debb2080d0afaf1",
		"Promo Editions",
		"PRED",
		"ERC1155",
		"/images/nfts/0xbe97674a28ee1e3326da75f95debb2080d0afaf1.png"
	],
	[
		"0x27a638ee6b2f0b9869e406c9789395aaec71dd18",
		"The MUG",
		"TMUG",
		"ERC1155",
		"/images/nfts/0x27a638ee6b2f0b9869e406c9789395aaec71dd18.png"
	],
	[
		"0x425421b4360ce37bce2ed44db6034b31c72b4d24",
		"La Haye Gallery",
		"LAHAYE",
		"ERC1155",
		"/images/nfts/0x425421b4360ce37bce2ed44db6034b31c72b4d24.png"
	],
	[
		"0xfb4f3ec29edef57ccd08dfb40ae562d146a5b402",
		"Pinoka Pass",
		"konoka",
		"ERC1155"
	],
	[
		"0x05dcf2e0dc88915867a18b23fcfe655421a78bcd",
		"Everything's Fine V2",
		"EF",
		"ERC1155",
		"/images/nfts/0x05dcf2e0dc88915867a18b23fcfe655421a78bcd.png"
	],
	[
		"0xdd9dae51ec0b2514b088bd8b0a53b466d5ae628c",
		"WWE NFT",
		"WWE NFT",
		"ERC1155",
		"/images/nfts/0xdd9dae51ec0b2514b088bd8b0a53b466d5ae628c.png"
	],
	[
		"0x31d566332904a9cc56d9170d96576c0e7b577449",
		"Maheenblues",
		"Maheenblues",
		"ERC1155",
		"/images/nfts/0x31d566332904a9cc56d9170d96576c0e7b577449.png"
	],
	[
		"0xb7ea2d36de05d337fc55f7782863613422e95f0d",
		"LUCIAN SOULS Portal Stone",
		"STONE",
		"ERC1155",
		"/images/nfts/0xb7ea2d36de05d337fc55f7782863613422e95f0d.png"
	],
	[
		"0x6517f49f73a7305e959130f4b996fbaf3a39ac83",
		"Scene Checks",
		"FILM",
		"ERC1155",
		"/images/nfts/0x6517f49f73a7305e959130f4b996fbaf3a39ac83.png"
	],
	[
		"0x937478aa444cef08f454957305dd2b341af1c65c",
		"Marco Grassi Editions",
		"MGE",
		"ERC1155",
		"/images/nfts/0x937478aa444cef08f454957305dd2b341af1c65c.png"
	],
	[
		"0x361e2654cf7f51a58e74f97b2bd663591da42a88",
		"Melissa Wiederrecht - Cosmic Rays (Verse)",
		"Melissa Wiederrecht - Cosmic Rays (Verse)",
		"ERC1155",
		"/images/nfts/0x361e2654cf7f51a58e74f97b2bd663591da42a88.png"
	],
	[
		"0xe3aee020bdcaae550d2312fbf944b289bb45e4a7",
		"Cho-Gen",
		"CG",
		"ERC1155",
		"/images/nfts/0xe3aee020bdcaae550d2312fbf944b289bb45e4a7.png"
	],
	[
		"0x783a6c1644554705761f8f5ef87ba0a696bc091e",
		"fl00rs-x by N1",
		"FL0X",
		"ERC1155",
		"/images/nfts/0x783a6c1644554705761f8f5ef87ba0a696bc091e.png"
	],
	[
		"0x0c2ca73a5839d2d7f9291b44d38e03cf4f9195b3",
		"SPACE GIRL X NFT LIFE",
		"SGF",
		"ERC1155",
		"/images/nfts/0x0c2ca73a5839d2d7f9291b44d38e03cf4f9195b3.png"
	],
	[
		"0x21d08b72e9196d5fe4dc32ba7a9d435951947804",
		"MMIRO Editions",
		"MMIRO",
		"ERC1155",
		"/images/nfts/0x21d08b72e9196d5fe4dc32ba7a9d435951947804.png"
	],
	[
		"0x657ca931e7389bd7b81024751498c9441345e774",
		"PIXELS by CARSONATED",
		"PIXLS",
		"ERC1155",
		"/images/nfts/0x657ca931e7389bd7b81024751498c9441345e774.png"
	],
	[
		"0xcda033aa7309e75c8dd712a72bbed24912015234",
		"Ready to Ride",
		"RTR",
		"ERC1155",
		"/images/nfts/0xcda033aa7309e75c8dd712a72bbed24912015234.png"
	],
	[
		"0x98bcbb35ad6fd162ce4dfc67e410224a6b32d6d1",
		"balloon toadz",
		"blntdz",
		"ERC1155",
		"/images/nfts/0x98bcbb35ad6fd162ce4dfc67e410224a6b32d6d1.png"
	],
	[
		"0x1e26d6824eaa5ff6fb28ca5446c5a23e97a7cca0",
		"CHAOS CREATIONS",
		"CHAOS",
		"ERC1155",
		"/images/nfts/0x1e26d6824eaa5ff6fb28ca5446c5a23e97a7cca0.png"
	],
	[
		"0x0c7841e1234f3b0fadb415c1ff1564404107dfa9",
		"BunnyMunny",
		"BuMu",
		"ERC1155",
		"/images/nfts/0x0c7841e1234f3b0fadb415c1ff1564404107dfa9.png"
	],
	[
		"0x0ee439e51bb5e7dc28eb73c8f2b1905a2bfb28e4",
		"EsoTeros Burn Redeem",
		"EBR",
		"ERC1155"
	],
	[
		"0x7e10adb7c91b0e6ee6f5c9cebdfad9046122015b",
		"Dour Fits Collaborations",
		"DDCollabs",
		"ERC1155",
		"/images/nfts/0x7e10adb7c91b0e6ee6f5c9cebdfad9046122015b.png"
	],
	[
		"0xe0c15c199ba5850103e6daa6b92fbdd06b829ac6",
		"OBYC Lore",
		"OBYCLore",
		"ERC1155",
		"/images/nfts/0xe0c15c199ba5850103e6daa6b92fbdd06b829ac6.png"
	],
	[
		"0xe76ace6c00384015fd30a26edf0e8e161f75b2e7",
		"NounCreepz Eggs by Squarish.xyz",
		"NOUNEGGZ",
		"ERC1155",
		"/images/nfts/0xe76ace6c00384015fd30a26edf0e8e161f75b2e7.png"
	],
	[
		"0x23977d781906c4f6dbdbfc1395c01ed661319cb6",
		"Foils Editions",
		"B17",
		"ERC1155",
		"/images/nfts/0x23977d781906c4f6dbdbfc1395c01ed661319cb6.png"
	],
	[
		"0x8208e22f7af5a7966b9b137ed87dc1b92af3e073",
		"SKETCHY: POSTERS",
		"SKTCHY",
		"ERC1155",
		"/images/nfts/0x8208e22f7af5a7966b9b137ed87dc1b92af3e073.png"
	],
	[
		"0xb2af38cf03fe7bbd9c8d2279604a96d83e08e813",
		"Please Recycle",
		"RCYCL",
		"ERC1155",
		"/images/nfts/0xb2af38cf03fe7bbd9c8d2279604a96d83e08e813.png"
	],
	[
		"0xdd964634f2588795699a218fe6500010c1ec339f",
		"SPAM AND OTHER CRAP THAT WON'T FIT ON ANY PLATFORM",
		"SHIT",
		"ERC1155"
	],
	[
		"0xf6cf3ab751154b8fb39706406c82a7321dbffda5",
		"Isekai Battle Ticket",
		"IBB",
		"ERC1155",
		"/images/nfts/0xf6cf3ab751154b8fb39706406c82a7321dbffda5.png"
	],
	[
		"0x5203a141ff7e71548cee983c0724db55f146c2dc",
		"SHOZO",
		"ShozoGAME",
		"ERC1155"
	],
	[
		"0x43502ba12bb9b025f409a05235fa6f13b48cfc82",
		"Sn1pefx Editions",
		"Sn1pefx Editions",
		"ERC1155",
		"/images/nfts/0x43502ba12bb9b025f409a05235fa6f13b48cfc82.png"
	],
	[
		"0x225577ceadeb1d586076479e55bdbc834fce706a",
		"FLYOSITY - X",
		"FLYX",
		"ERC1155",
		"/images/nfts/0x225577ceadeb1d586076479e55bdbc834fce706a.png"
	],
	[
		"0x2e42c303983293cef7f007b1cb46cebdd0029cb2",
		"The Give Love Experience",
		"LOVE",
		"ERC1155",
		"/images/nfts/0x2e42c303983293cef7f007b1cb46cebdd0029cb2.png"
	],
	[
		"0xe1313ee738a2f66a57b0538ecbf08fd6c1147870",
		"Analog Intelligence",
		"AI",
		"ERC1155",
		"/images/nfts/0xe1313ee738a2f66a57b0538ecbf08fd6c1147870.png"
	],
	[
		"0xc39c061dff68fb5a205ec56644bec7aadc82e4d5",
		"Saturdaze Complete",
		"FOMIE",
		"ERC1155"
	],
	[
		"0x14eb8caa4005ba5067f01201e3a4bdd095cdd263",
		"OPENED EDITION",
		"JNKY",
		"ERC1155"
	],
	[
		"0x51ac707d5ae7e38004e247c42572c64c0264ab49",
		"DANKBOTS GA - EDITIONS",
		"DBGA",
		"ERC1155",
		"/images/nfts/0x51ac707d5ae7e38004e247c42572c64c0264ab49.png"
	],
	[
		"0xb2174890c2c5e54f3212be50f15499df470129c8",
		"MAY CONTAIN ALGORITHM",
		"PRIVAT3",
		"ERC1155"
	],
	[
		"0x42eeea3437388a6a77637ab18b81ca3c0079a4c3",
		"Life Death & Cryptoart No. 1 - Patrick Amadon",
		"LDC1",
		"ERC1155",
		"/images/nfts/0x42eeea3437388a6a77637ab18b81ca3c0079a4c3.png"
	],
	[
		"0x7b7ce775f78181b54715248ad0e40d03c841d19d",
		"Memes By Pepes",
		"PAYC",
		"ERC1155",
		"/images/nfts/0x7b7ce775f78181b54715248ad0e40d03c841d19d.png"
	],
	[
		"0xd955e7bd8ca9f2aad391760f849cfa4ee2d80d57",
		"HELIX - COLLECTABLES",
		"HELIX - COLLECTABLES",
		"ERC1155",
		"/images/nfts/0xd955e7bd8ca9f2aad391760f849cfa4ee2d80d57.png"
	],
	[
		"0x575881b83c2f530047febfd5dbe43bf134dc21d6",
		"fakerekts",
		"fakerekts",
		"ERC1155",
		"/images/nfts/0x575881b83c2f530047febfd5dbe43bf134dc21d6.png"
	],
	[
		"0x0e191cce67049aebb0006e56dba3468aae66f58c",
		"world of nymphs by Marian Kretschmer",
		"WON",
		"ERC1155",
		"/images/nfts/0x0e191cce67049aebb0006e56dba3468aae66f58c.png"
	],
	[
		"0x1bc36bc42a268a82a4dfceca9b6562ec0ecc267f",
		"Postales by Pablo Alpe",
		"Postales by Pablo Alpe",
		"ERC1155",
		"/images/nfts/0x1bc36bc42a268a82a4dfceca9b6562ec0ecc267f.png"
	],
	[
		"0x8e859cd625a8f27c3fb37ffd984a635389f40bd8",
		"The Great Frog Study",
		"TGFS",
		"ERC1155",
		"/images/nfts/0x8e859cd625a8f27c3fb37ffd984a635389f40bd8.png"
	],
	[
		"0x24f2a18143fa7a74200ea31fdf369e58342f1e24",
		"MEIOS_EX",
		"MEIOSX",
		"ERC1155",
		"/images/nfts/0x24f2a18143fa7a74200ea31fdf369e58342f1e24.png"
	],
	[
		"0xe45c214b42265b2cd3a0d75fa1b69fc451ae47d8",
		"Editions by Homer Carbone.",
		"HCED",
		"ERC1155",
		"/images/nfts/0xe45c214b42265b2cd3a0d75fa1b69fc451ae47d8.png"
	],
	[
		"0xa061d8078cc04e9587dba7b339e1df70d9653383",
		"BTC Ordinal Apepunks",
		"OAP",
		"ERC1155",
		"/images/nfts/0xa061d8078cc04e9587dba7b339e1df70d9653383.png"
	],
	[
		"0xaa95b4f330291ab0120c4fcca598c2096b812fc2",
		"Cash is Dead :: Frank Wilder",
		"FRANK",
		"ERC1155",
		"/images/nfts/0xaa95b4f330291ab0120c4fcca598c2096b812fc2.png"
	],
	[
		"0x242abb289566b0e4252f637b6ff0095850ce2624",
		"Morris : Special Editions",
		"Morris : Special Editions",
		"ERC1155",
		"/images/nfts/0x242abb289566b0e4252f637b6ff0095850ce2624.png"
	],
	[
		"0x4e1f216e2b67670d9008164864a6eff1e796253a",
		"Fire Checks",
		"FIRECHECKS",
		"ERC1155",
		"/images/nfts/0x4e1f216e2b67670d9008164864a6eff1e796253a.png"
	],
	[
		"0x121fba2fb921486299cb04a443795e655e428854",
		"White Xmas V2",
		"FAMz",
		"ERC1155"
	],
	[
		"0xeddfcefdf63a50845a05d0765fedbb8726884d2e",
		"Jar of Dust",
		"PD",
		"ERC1155",
		"/images/nfts/0xeddfcefdf63a50845a05d0765fedbb8726884d2e.png"
	],
	[
		"0xf6f0a8b9caa9538473e7502d599fbf623db22e8e",
		"Anomaly Pass",
		"Anomaly Pass",
		"ERC1155",
		"/images/nfts/0xf6f0a8b9caa9538473e7502d599fbf623db22e8e.png"
	],
	[
		"0xadd5f28f98481bed6aeca28020cbea9e7df9105d",
		"Smol Open Edition",
		"SOE",
		"ERC1155",
		"/images/nfts/0xadd5f28f98481bed6aeca28020cbea9e7df9105d.png"
	],
	[
		"0x2f6a6f67813a99c0f454fe57b6cbd868b2612326",
		"Artifacts by Fabrik",
		"Artifacts by Fabrik",
		"ERC1155",
		"/images/nfts/0x2f6a6f67813a99c0f454fe57b6cbd868b2612326.png"
	],
	[
		"0xceafa410bdcf81f3d8821b102dc8ce318eaedeb3",
		"SIGMAX- THE PIANIST - old",
		"SIGMAX- THE PIANIST - old",
		"ERC1155",
		"/images/nfts/0xceafa410bdcf81f3d8821b102dc8ce318eaedeb3.png"
	],
	[
		"0x6f22c6ef53856a158fdef6a39e263a19105d9b41",
		"Ordinal Shadows",
		"ORS",
		"ERC1155",
		"/images/nfts/0x6f22c6ef53856a158fdef6a39e263a19105d9b41.png"
	],
	[
		"0xcb73e3f964bf5e46edeb122eadd43fcd8a103d84",
		"Kolin Din: 1155 editions",
		"Kolin Din: 1155 editions",
		"ERC1155",
		"/images/nfts/0xcb73e3f964bf5e46edeb122eadd43fcd8a103d84.png"
	],
	[
		"0x3820e79deb5e60f6f488fa2a62c8e190cc69bb47",
		"The Mint Memes",
		"TMM",
		"ERC1155",
		"/images/nfts/0x3820e79deb5e60f6f488fa2a62c8e190cc69bb47.png"
	],
	[
		"0xefe6a6032fd27b7b7615fb0d0e08fb3e49db53b8",
		"yungwkndmemes",
		"yungwkndmemes",
		"ERC1155",
		"/images/nfts/0xefe6a6032fd27b7b7615fb0d0e08fb3e49db53b8.png"
	],
	[
		"0xab0d0937f6a73cdc2e73de4ae288af82f7df4351",
		"SNUGISM",
		"SNGM",
		"ERC1155",
		"/images/nfts/0xab0d0937f6a73cdc2e73de4ae288af82f7df4351.png"
	],
	[
		"0x510c223dee3fbd38ac7c8e92d6ee79bc5ad0bad1",
		"Giovanni Motta Editions",
		"GME",
		"ERC1155",
		"/images/nfts/0x510c223dee3fbd38ac7c8e92d6ee79bc5ad0bad1.png"
	],
	[
		"0x799868cd04f1033c177be93a1960437c2e79e3f4",
		"SebOne Selection",
		"SEB",
		"ERC1155",
		"/images/nfts/0x799868cd04f1033c177be93a1960437c2e79e3f4.png"
	],
	[
		"0x4eba9cbca489da0fe9a8e42cfbe0e578f8f5a84c",
		"A Quiet World Editions",
		"QUIET",
		"ERC1155",
		"/images/nfts/0x4eba9cbca489da0fe9a8e42cfbe0e578f8f5a84c.png"
	],
	[
		"0x13c13615b553d6bace60ef474c76951156b8867c",
		"Poorly Drawn Checks",
		"PDCHECK",
		"ERC1155",
		"/images/nfts/0x13c13615b553d6bace60ef474c76951156b8867c.png"
	],
	[
		"0xdf1c5851d036c4e0b00c364a8921acf1a794b5a5",
		"MAGIC BUS EDITIONS",
		"MBEDS",
		"ERC1155",
		"/images/nfts/0xdf1c5851d036c4e0b00c364a8921acf1a794b5a5.png"
	],
	[
		"0x56259ba4a1cf569a3a0ef5ccfd49622b1bf54e85",
		"Your Own Peace",
		"Tranquility",
		"ERC1155",
		"/images/nfts/0x56259ba4a1cf569a3a0ef5ccfd49622b1bf54e85.png"
	],
	[
		"0x40e926fd11e6df64a550aefe0f72e4901d917f7c",
		"editions.xls",
		"editionsxls",
		"ERC1155",
		"/images/nfts/0x40e926fd11e6df64a550aefe0f72e4901d917f7c.png"
	],
	[
		"0x34c3707471e96473133f2d5fef27b0a994cd1b53",
		"Thomas Creative Coding Art",
		"TCCA",
		"ERC1155"
	],
	[
		"0xd5b52e8bd2e586f5704ba5cc98e626bcfb37c02f",
		"WarGames Labs",
		"WARLAB",
		"ERC1155",
		"/images/nfts/0xd5b52e8bd2e586f5704ba5cc98e626bcfb37c02f.png"
	],
	[
		"0xa29798f81ae9c7110091527edd8d869604a2dac8",
		"EMOJIPACK",
		"EMOJIPACK",
		"ERC1155",
		"/images/nfts/0xa29798f81ae9c7110091527edd8d869604a2dac8.png"
	],
	[
		"0x092f338ae0814cb7d72e361c5431dabb95e1533d",
		"Outside the Box by 3PEACE",
		"PE",
		"ERC1155",
		"/images/nfts/0x092f338ae0814cb7d72e361c5431dabb95e1533d.png"
	],
	[
		"0xde8d8700b272c7ea84974a7c7bda66121cb1db5e",
		"Nullish Editions",
		"NULLISH",
		"ERC1155",
		"/images/nfts/0xde8d8700b272c7ea84974a7c7bda66121cb1db5e.png"
	],
	[
		"0x42c058c520d94b962ea7ce0f8f87537a71bab3a6",
		"Brainstorm 1/4",
		"BS1",
		"ERC1155"
	],
	[
		"0x4ca1da63dc5fc827362fec1843dc4c25d0868088",
		"iSea Monsters",
		"ISM",
		"ERC1155",
		"/images/nfts/0x4ca1da63dc5fc827362fec1843dc4c25d0868088.png"
	],
	[
		"0x43bb1529c6fca37a178f7f15e26ec1f15b3445c9",
		"CheckDenza",
		"CDenza",
		"ERC1155",
		"/images/nfts/0x43bb1529c6fca37a178f7f15e26ec1f15b3445c9.png"
	],
	[
		"0xfe9795f48b33f64082bed6c56162caf8ef5e8f2c",
		"Cursed Emojis Open Edition",
		"CURSES",
		"ERC1155",
		"/images/nfts/0xfe9795f48b33f64082bed6c56162caf8ef5e8f2c.png"
	],
	[
		"0xd0da07864218cb86cd0c7079322703f8d3abc35a",
		"Nannda Shield Counter",
		"Nannda Shield Counter",
		"ERC1155",
		"/images/nfts/0xd0da07864218cb86cd0c7079322703f8d3abc35a.png"
	],
	[
		"0x80e379556e54a5609768e9b2064a2c3a4b684344",
		"GM to everyone",
		"GMC",
		"ERC1155",
		"/images/nfts/0x80e379556e54a5609768e9b2064a2c3a4b684344.png"
	],
	[
		"0xc25893c46b68cb761aa483e03c70e4a527a85285",
		"Memeditions",
		"iPad",
		"ERC1155",
		"/images/nfts/0xc25893c46b68cb761aa483e03c70e4a527a85285.png"
	],
	[
		"0x1d9c3897bf6c9f05b0341f462e707b149c33cff2",
		"Memes of Terrell Jones",
		"MoTJ",
		"ERC1155",
		"/images/nfts/0x1d9c3897bf6c9f05b0341f462e707b149c33cff2.png"
	],
	[
		"0x591866d84429b281590776a7ecdd3c15bb540155",
		"Trippy Tarot B-Sides (Open Edition)",
		"BSide",
		"ERC1155",
		"/images/nfts/0x591866d84429b281590776a7ecdd3c15bb540155.png"
	],
	[
		"0x8aead95e5484ba38c7f174f98e750902370ac97d",
		"CYBER CHECKS",
		"CHECKSART",
		"ERC1155",
		"/images/nfts/0x8aead95e5484ba38c7f174f98e750902370ac97d.png"
	],
	[
		"0x057db6143fd04174d97cb6e34ea808ba47c63ead",
		"LoopableBalloon",
		"LOB",
		"ERC1155",
		"/images/nfts/0x057db6143fd04174d97cb6e34ea808ba47c63ead.png"
	],
	[
		"0xe90c8e517254d1d5f0dd62cdda85db10d0cb34c8",
		"Inferno Checks",
		"infernoa",
		"ERC1155",
		"/images/nfts/0xe90c8e517254d1d5f0dd62cdda85db10d0cb34c8.png"
	],
	[
		"0x1a99091ba131360abdcd70141954bbec41a5f27f",
		"Art is a scam",
		"sxm",
		"ERC1155",
		"/images/nfts/0x1a99091ba131360abdcd70141954bbec41a5f27f.png"
	],
	[
		"0x34d3c43ec5db598f67a84cb014ff454869a04050",
		"Apeiro page",
		"Apeiro page",
		"ERC1155",
		"/images/nfts/0x34d3c43ec5db598f67a84cb014ff454869a04050.png"
	],
	[
		"0x64c14c53adca8d3392ef4e6962cab0b39f57dafc",
		"Goober Editions",
		"GBR",
		"ERC1155",
		"/images/nfts/0x64c14c53adca8d3392ef4e6962cab0b39f57dafc.png"
	],
	[
		"0x8c39ec77c81e388f20fc6c2d28966b999026cbc9",
		"okxtestttt",
		"okxtest",
		"ERC1155"
	],
	[
		"0xfbff3a96dc68bd308ac1320cc0fd9b8a22e560fe",
		"Blank Checks by Anon Arts",
		"BC",
		"ERC1155",
		"/images/nfts/0xfbff3a96dc68bd308ac1320cc0fd9b8a22e560fe.png"
	],
	[
		"0x6ef5d48a497278b78780d0039d12d4ca3cd38574",
		"Cube X Gold Status",
		"Cube X Gold Status",
		"ERC1155",
		"/images/nfts/0x6ef5d48a497278b78780d0039d12d4ca3cd38574.png"
	],
	[
		"0x48c1b63cb4d0849ad4f41960e708c5893bc8018b",
		"Dancing Red",
		"DRTJ",
		"ERC1155",
		"/images/nfts/0x48c1b63cb4d0849ad4f41960e708c5893bc8018b.png"
	],
	[
		"0x50908e6d2a78c73ee0430525d58a26043f1aeeb3",
		"SNKEZ",
		"SNKEZ",
		"ERC1155",
		"/images/nfts/0x50908e6d2a78c73ee0430525d58a26043f1aeeb3.png"
	],
	[
		"0x0d2dd98aaf0c262ee05c53586b5d3980f72bedf5",
		"THE LOST CHECKS EDITION",
		"TLCE",
		"ERC1155",
		"/images/nfts/0x0d2dd98aaf0c262ee05c53586b5d3980f72bedf5.png"
	],
	[
		"0x5bfb56dbb99d6ce626abe74a9d08e02ae5170978",
		"h4x0r 3ditions",
		"hx",
		"ERC1155",
		"/images/nfts/0x5bfb56dbb99d6ce626abe74a9d08e02ae5170978.png"
	],
	[
		"0x790710587557135953411b8510dd080f8e590d99",
		"Le Hues OG Rare Pepe Memes Series",
		"PLP",
		"ERC1155",
		"/images/nfts/0x790710587557135953411b8510dd080f8e590d99.png"
	],
	[
		"0x94b5f6e03415a5546712dae6416f8739e51ccbce",
		"shinmomo pass",
		"shinmomopass",
		"ERC1155",
		"/images/nfts/0x94b5f6e03415a5546712dae6416f8739e51ccbce.png"
	],
	[
		"0x4bcb8a15af2c67e9a041eda4dd4a385dceffee39",
		"JAKE FRIED Editions",
		"JAKEFRIED",
		"ERC1155",
		"/images/nfts/0x4bcb8a15af2c67e9a041eda4dd4a385dceffee39.png"
	],
	[
		"0xee1dac3802b7df286f6a560748555e3db91c030d",
		"Humanity Check",
		"HUMANITYCHECK",
		"ERC1155",
		"/images/nfts/0xee1dac3802b7df286f6a560748555e3db91c030d.png"
	],
	[
		"0x6665899328454fd31682c481b5f9452299b07182",
		"WoW Artfest Winter 2023",
		"WoW Artfest Winter 2023",
		"ERC1155",
		"/images/nfts/0x6665899328454fd31682c481b5f9452299b07182.png"
	],
	[
		"0x271453889940426736bb515cb8b2ac5bd4d68210",
		"Rizzle Ai",
		"Rizz",
		"ERC1155",
		"/images/nfts/0x271453889940426736bb515cb8b2ac5bd4d68210.png"
	],
	[
		"0x0cd317bdcb2d75aea33934ca85e952a76efa4276",
		"Che-Yu Wu Interactive Memes",
		"MEMECYW",
		"ERC1155",
		"/images/nfts/0x0cd317bdcb2d75aea33934ca85e952a76efa4276.png"
	],
	[
		"0x32b5a07f55debbe0d42d8499d606fa375ee069bc",
		"GeoMetric Pepe Balloon",
		"PEPEBALL",
		"ERC1155",
		"/images/nfts/0x32b5a07f55debbe0d42d8499d606fa375ee069bc.png"
	],
	[
		"0x23332b94a3ad2e6303d4fad4719526b73d9550d6",
		"ONE LOVE by PSYCHRØMΞ",
		"AGE1",
		"ERC1155",
		"/images/nfts/0x23332b94a3ad2e6303d4fad4719526b73d9550d6.png"
	],
	[
		"0xbf5fdffe1e3cc67965c96b95948b4b7d6b02b5d5",
		"Chimperstic Chimpers",
		"Chimperstic",
		"ERC1155",
		"/images/nfts/0xbf5fdffe1e3cc67965c96b95948b4b7d6b02b5d5.png"
	],
	[
		"0xca645ce8c03637ac15d3d10e4066d39fc8772e31",
		"ApeRock NFT",
		"APERK",
		"ERC1155",
		"/images/nfts/0xca645ce8c03637ac15d3d10e4066d39fc8772e31.png"
	],
	[
		"0xb0c8d3d6569800ed79d6a1d3a1f8275ec49a774b",
		"Hamm Checks",
		"HAMM",
		"ERC1155",
		"/images/nfts/0xb0c8d3d6569800ed79d6a1d3a1f8275ec49a774b.png"
	],
	[
		"0xfc9e10cb276c957ccd06edfcc6e8759b59e70600",
		"Rachel Suzanne Tien Wood Freedom to Be",
		"B00B3S",
		"ERC1155",
		"/images/nfts/0xfc9e10cb276c957ccd06edfcc6e8759b59e70600.png"
	],
	[
		"0xef9ced283114fe8428421eb180852900094fc358",
		"Eric P. Rhodes Editions",
		"EPR",
		"ERC1155",
		"/images/nfts/0xef9ced283114fe8428421eb180852900094fc358.png"
	],
	[
		"0x3bc09e34175de8b98d6fc9637de2b0c33380b9f0",
		"Jack Butcher Interleave Artwork V2",
		"Jack Butcher Interleave Artwork V2",
		"ERC1155",
		"/images/nfts/0x3bc09e34175de8b98d6fc9637de2b0c33380b9f0.png"
	],
	[
		"0x0f473f2cd5bb512d68da9913c9ac4014264f1e75",
		"VIBIN MEMES",
		"VIBIN MEMES",
		"ERC1155",
		"/images/nfts/0x0f473f2cd5bb512d68da9913c9ac4014264f1e75.png"
	],
	[
		"0xc9ae308c2d90a3e4eab044b16827c6416162498a",
		"PROJECT BANA - GEN",
		"BNAG",
		"ERC1155",
		"/images/nfts/0xc9ae308c2d90a3e4eab044b16827c6416162498a.png"
	],
	[
		"0x1c39f5058999eebd4bcc04b6d859cb86d3abae17",
		"REKTChecks",
		"RECKS",
		"ERC1155",
		"/images/nfts/0x1c39f5058999eebd4bcc04b6d859cb86d3abae17.png"
	],
	[
		"0x02c711676573ae484770b43446e8b4a8905baa56",
		"Damane a’Csambre",
		"M0RI",
		"ERC1155",
		"/images/nfts/0x02c711676573ae484770b43446e8b4a8905baa56.png"
	],
	[
		"0x18d0855e95104feb9825e199bc0672cdc2cfadeb",
		"CryptoCheck",
		"CCHECK",
		"ERC1155",
		"/images/nfts/0x18d0855e95104feb9825e199bc0672cdc2cfadeb.png"
	],
	[
		"0x66d77ccc9f6775d5cab2592428315f61b53cd58d",
		"CCR APP",
		"NYCAA",
		"ERC1155",
		"/images/nfts/0x66d77ccc9f6775d5cab2592428315f61b53cd58d.png"
	],
	[
		"0x689618c1544f6062108b41f0c2a2af7a39489b1b",
		"Questionmark - YY Edition",
		"yyedition",
		"ERC1155",
		"/images/nfts/0x689618c1544f6062108b41f0c2a2af7a39489b1b.png"
	],
	[
		"0x3edf71a31b80ff6a45fdb0858ec54de98df047aa",
		"BAE- erc-1155",
		"BAE",
		"ERC1155",
		"/images/nfts/0x3edf71a31b80ff6a45fdb0858ec54de98df047aa.png"
	],
	[
		"0x715681013069d47d04f867813b1c5fafd277fa1e",
		"L Papers",
		"AMLC",
		"ERC1155",
		"/images/nfts/0x715681013069d47d04f867813b1c5fafd277fa1e.png"
	],
	[
		"0x6c8936c33839a4a55e66f36a2e37970139b54034",
		"The ???? Free Mint Pass ????",
		"TFMP",
		"ERC1155",
		"/images/nfts/0x6c8936c33839a4a55e66f36a2e37970139b54034.png"
	],
	[
		"0xd37b6b3ea5854f65c5a4dd0a0fff61efb6999894",
		"Pepeverse by Realdigitalize",
		"KD",
		"ERC1155",
		"/images/nfts/0xd37b6b3ea5854f65c5a4dd0a0fff61efb6999894.png"
	],
	[
		"0x6be5ee16961e388a6e14a7e325680243ad122182",
		"Checks by Capies",
		"CAP",
		"ERC1155",
		"/images/nfts/0x6be5ee16961e388a6e14a7e325680243ad122182.png"
	],
	[
		"0xe25c5a3e65d2bfa1b53d746b959025cde28546b3",
		"Paji's Secret Information:",
		"PSIN",
		"ERC1155",
		"/images/nfts/0xe25c5a3e65d2bfa1b53d746b959025cde28546b3.png"
	],
	[
		"0x4e112a13b1a15b6b077b72309c6ba103e62ac7fa",
		"PROJECT-01-BATTLEX",
		"P1B",
		"ERC1155",
		"/images/nfts/0x4e112a13b1a15b6b077b72309c6ba103e62ac7fa.png"
	],
	[
		"0x9ec6f51f8919089f3f3af771278a3ce2f8950be6",
		"Bonepen - Editions Collection",
		"BRN",
		"ERC1155",
		"/images/nfts/0x9ec6f51f8919089f3f3af771278a3ce2f8950be6.png"
	],
	[
		"0xcfec9bb39d54d1e955b84ef1c41df628cd511f65",
		"Just for Keks",
		"J4KEKS",
		"ERC1155",
		"/images/nfts/0xcfec9bb39d54d1e955b84ef1c41df628cd511f65.png"
	],
	[
		"0x64e962c4836f5f2f935769b67cf674005b4bb8c3",
		"Aestrild x Editions",
		"Aestrild x Editions",
		"ERC1155",
		"/images/nfts/0x64e962c4836f5f2f935769b67cf674005b4bb8c3.png"
	],
	[
		"0x4e0a48b22ba20306670cbf3d3f305c46e682344b",
		"Acid Rain Genesis Pass Drop",
		"ACR",
		"ERC1155",
		"/images/nfts/0x4e0a48b22ba20306670cbf3d3f305c46e682344b.png"
	],
	[
		"0xc2ffa473d5a8f999feb9a1d218dcfe3699230b1d",
		"ALULASIT",
		"ALT",
		"ERC1155"
	],
	[
		"0x6bb204870617784397da68e46aefa49ebfda5a85",
		"Adimverse Subscriber Collection",
		"ADIMVERSE",
		"ERC1155",
		"/images/nfts/0x6bb204870617784397da68e46aefa49ebfda5a85.png"
	],
	[
		"0xb28668e36a7968b91ba012ca4d114b1732483a6f",
		"Genesis Sakura",
		"Sakura",
		"ERC1155",
		"/images/nfts/0xb28668e36a7968b91ba012ca4d114b1732483a6f.png"
	],
	[
		"0x1bf89e551b8f6cd1619dc69d1b182595807f8640",
		"Doc's Editions",
		"STAT",
		"ERC1155",
		"/images/nfts/0x1bf89e551b8f6cd1619dc69d1b182595807f8640.png"
	],
	[
		"0xa601e20bc999c12b19248f955e28a5c05f4a0997",
		"Komesuke event collection",
		"KEC",
		"ERC1155",
		"/images/nfts/0xa601e20bc999c12b19248f955e28a5c05f4a0997.png"
	],
	[
		"0x45d0dcf93a1b78e5ebb47b2c7932879e2123ddf1",
		"ImplantSanta Editions",
		"ISE",
		"ERC1155",
		"/images/nfts/0x45d0dcf93a1b78e5ebb47b2c7932879e2123ddf1.png"
	],
	[
		"0xb729bca2f8f09673072d7613423889e9a8c336b3",
		"Reuben Wu - Open Editions",
		"WOE",
		"ERC1155",
		"/images/nfts/0xb729bca2f8f09673072d7613423889e9a8c336b3.png"
	],
	[
		"0x06c8bb145b5796557b69758f6f7be45d245de9dd",
		"XSULLO 2023 Editions",
		"XS",
		"ERC1155",
		"/images/nfts/0x06c8bb145b5796557b69758f6f7be45d245de9dd.png"
	],
	[
		"0xc7b5a429cb5cd11af3175281963b7a75ddf631b5",
		"Tits by Jack Hoffer",
		"Tits",
		"ERC1155",
		"/images/nfts/0xc7b5a429cb5cd11af3175281963b7a75ddf631b5.png"
	],
	[
		"0x568cdbc10b4780ffb8b75fee8d0fab023b2ed8ee",
		"Peter Tarka Open Editions",
		"PTOE",
		"ERC1155",
		"/images/nfts/0x568cdbc10b4780ffb8b75fee8d0fab023b2ed8ee.png"
	],
	[
		"0xe70659b717112ac4e14284d0db2f5d5703df8e43",
		"Notable Pepes",
		"PROJECTX",
		"ERC1155",
		"/images/nfts/0xe70659b717112ac4e14284d0db2f5d5703df8e43.png"
	],
	[
		"0xffdb792099bbfeafe72ca88b75e7218736293dfc",
		"SN: Legends of the Digital Age",
		"SNLDA",
		"ERC1155",
		"/images/nfts/0xffdb792099bbfeafe72ca88b75e7218736293dfc.png"
	],
	[
		"0xb95c66cc12d7204d55cd38c90221e4f329e35904",
		"Martin by Emily Edelman",
		"Martin by Emily Edelman",
		"ERC1155",
		"/images/nfts/0xb95c66cc12d7204d55cd38c90221e4f329e35904.png"
	],
	[
		"0xbc9c108da33a8e2e8a3020478c1eb567e990eb6a",
		"THE MAZE by TAYLOR",
		"MAZE",
		"ERC1155",
		"/images/nfts/0xbc9c108da33a8e2e8a3020478c1eb567e990eb6a.png"
	],
	[
		"0x77796e97981dbb4bd9382c90882e0aa61c4fafd9",
		"locks free",
		"locks",
		"ERC1155",
		"/images/nfts/0x77796e97981dbb4bd9382c90882e0aa61c4fafd9.png"
	],
	[
		"0x5feac59d5c706d6e6b3a3f17e88dbb79767549b5",
		"ONLY ART CAN SAVE US - SCAVENGER HUNT",
		"OACSU",
		"ERC1155",
		"/images/nfts/0x5feac59d5c706d6e6b3a3f17e88dbb79767549b5.png"
	],
	[
		"0xfbd282cd4b00aeb9a5a23ed6378dbbd6b1dac803",
		"UNIBROS EDITIONS",
		"UNIBROS",
		"ERC1155",
		"/images/nfts/0xfbd282cd4b00aeb9a5a23ed6378dbbd6b1dac803.png"
	],
	[
		"0x371f20101e1d2c36dba220c62dd3488d69b3e860",
		"SolcksNFT",
		"SOK",
		"ERC1155",
		"/images/nfts/0x371f20101e1d2c36dba220c62dd3488d69b3e860.png"
	],
	[
		"0x1ac9c5f549f3732f87ec0f5adacb07a41bb4d532",
		"Paji's Project Ticket",
		"PPT",
		"ERC1155",
		"/images/nfts/0x1ac9c5f549f3732f87ec0f5adacb07a41bb4d532.png"
	],
	[
		"0xa2442496d2f6ac80c1e33f1960efe06d87064cb5",
		"Little Friends by Ilya Kazakov",
		"LFIK",
		"ERC1155",
		"/images/nfts/0xa2442496d2f6ac80c1e33f1960efe06d87064cb5.png"
	],
	[
		"0x4b85118b00d7a6ec2bab9a363677555a4e7c2c77",
		"LVL9",
		"LVL9",
		"ERC1155",
		"/images/nfts/0x4b85118b00d7a6ec2bab9a363677555a4e7c2c77.png"
	],
	[
		"0x80a484d9622a8a0387b26820fc5572ea002bf6f3",
		"Arsonic X TheWorm",
		"ARSxTW",
		"ERC1155",
		"/images/nfts/0x80a484d9622a8a0387b26820fc5572ea002bf6f3.png"
	],
	[
		"0x85e4c20996dc92edd50000296883e787781c011b",
		"ODEN BALLOON",
		"ODEN",
		"ERC1155",
		"/images/nfts/0x85e4c20996dc92edd50000296883e787781c011b.png"
	],
	[
		"0xab761cb8d545d413c748217df27475727a68328e",
		"Noraoji Pass Genesis",
		"NPG",
		"ERC1155",
		"/images/nfts/0xab761cb8d545d413c748217df27475727a68328e.png"
	],
	[
		"0x806e762ff9dfa0d8632727ebf2d1bc082bd5d4b4",
		"SHUBABABA-old",
		"SBB",
		"ERC1155",
		"/images/nfts/0x806e762ff9dfa0d8632727ebf2d1bc082bd5d4b4.png"
	],
	[
		"0x0fbc8305819fe5c5c4bf0aec642ae39d9b62fe85",
		"FAKEDEATH",
		"RIP",
		"ERC1155",
		"/images/nfts/0x0fbc8305819fe5c5c4bf0aec642ae39d9b62fe85.png"
	],
	[
		"0xad6617f2f3172806faebce1f751cf90f3d59abae",
		"DSGNR",
		"DSGNR",
		"ERC1155",
		"/images/nfts/0xad6617f2f3172806faebce1f751cf90f3d59abae.png"
	],
	[
		"0xcbfdbce0a1d1d6b94214742f06062adf857624b6",
		"momo Pass (New & Improved)",
		"momo",
		"ERC1155",
		"/images/nfts/0xcbfdbce0a1d1d6b94214742f06062adf857624b6.png"
	],
	[
		"0x0a4c5be44bbb15be61b02377676211a57fce271c",
		"MAKE-DO AND MEME",
		"MDAM",
		"ERC1155"
	],
	[
		"0x6dc3f6656aeca9b194a29e6656107627fbf61522",
		"OUI CROISSANTS!",
		"OUI",
		"ERC1155",
		"/images/nfts/0x6dc3f6656aeca9b194a29e6656107627fbf61522.png"
	],
	[
		"0xe21ce58246871971b5518ae133e011f80fae45a1",
		"Alchemic Quest",
		"QUEST",
		"ERC1155",
		"/images/nfts/0xe21ce58246871971b5518ae133e011f80fae45a1.png"
	],
	[
		"0xc1e23c9ad6c8bf4aece04b24a1bd96deb26baa2f",
		"CheckPass",
		"CheckPass",
		"ERC1155",
		"/images/nfts/0xc1e23c9ad6c8bf4aece04b24a1bd96deb26baa2f.png"
	],
	[
		"0xefc4e1d26c82c7463da395125874a5f68d548d9f",
		"David Ariew Spiritual Journeys",
		"DAA",
		"ERC1155",
		"/images/nfts/0xefc4e1d26c82c7463da395125874a5f68d548d9f.png"
	],
	[
		"0x27600d752860048e83c0b45594bb5b3f1a3d044a",
		"PabloPunkasso Editions",
		"PUNKE",
		"ERC1155",
		"/images/nfts/0x27600d752860048e83c0b45594bb5b3f1a3d044a.png"
	],
	[
		"0xd95891207ba8863167d296f4d599db81a41bb8be",
		"Vandals Union x Cyber Bandits",
		"VUXCB",
		"ERC1155",
		"/images/nfts/0xd95891207ba8863167d296f4d599db81a41bb8be.png"
	],
	[
		"0x48fbfdf6e6d361339e575e6a4efa2ff8cbbec107",
		"64 BIT SPECTRUM",
		"S64",
		"ERC1155",
		"/images/nfts/0x48fbfdf6e6d361339e575e6a4efa2ff8cbbec107.png"
	],
	[
		"0x66ec993bc3b6f235583a64a67bd4d6d9d5ac84d5",
		"Kiyoshi's Seeds Project",
		"KSP",
		"ERC1155",
		"/images/nfts/0x66ec993bc3b6f235583a64a67bd4d6d9d5ac84d5.png"
	],
	[
		"0x9fc582d220dcc17852b6bf92c230b7dd65a19702",
		"Bubble by LOREM",
		"Bubble by LOREM",
		"ERC1155",
		"/images/nfts/0x9fc582d220dcc17852b6bf92c230b7dd65a19702.png"
	],
	[
		"0x4ef0f0aac43ecb053e91000240670d4d07ffe869",
		"Wes Henry X Editions",
		"WESX",
		"ERC1155",
		"/images/nfts/0x4ef0f0aac43ecb053e91000240670d4d07ffe869.png"
	],
	[
		"0x9fff0b1a6e9e9554baf3f8a39b6353fda9c30054",
		"Memo Angeles Presents: The Killa Chronicles",
		"Memo Angeles Presents: The Killa Chronicles",
		"ERC1155",
		"/images/nfts/0x9fff0b1a6e9e9554baf3f8a39b6353fda9c30054.png"
	],
	[
		"0xd774957680643a00890bb2387e186ccebf52bad0",
		"Everfresh - Open Editions",
		"EFOE",
		"ERC1155",
		"/images/nfts/0xd774957680643a00890bb2387e186ccebf52bad0.png"
	],
	[
		"0xa86c3d54739bd37c2c0a2c589f82428e0a7aafcc",
		"BB's defrag repo",
		"BB's defrag repo",
		"ERC1155",
		"/images/nfts/0xa86c3d54739bd37c2c0a2c589f82428e0a7aafcc.png"
	],
	[
		"0xf279ef4f1be0c7bc6adc9a47f12e0643c38b7f68",
		"Jonathan Nash OE",
		"OOE",
		"ERC1155",
		"/images/nfts/0xf279ef4f1be0c7bc6adc9a47f12e0643c38b7f68.png"
	],
	[
		"0x49de63f85b3a121cb1e82c0a461ac5a8d3c8af97",
		"Iconik by Dotta",
		"ICONIK",
		"ERC1155",
		"/images/nfts/0x49de63f85b3a121cb1e82c0a461ac5a8d3c8af97.png"
	],
	[
		"0x6802df79bcbbf019fe5cb366ff25720d1365cfd3",
		"Botto Access Passes",
		"Botto Access Passes",
		"ERC1155",
		"/images/nfts/0x6802df79bcbbf019fe5cb366ff25720d1365cfd3.png"
	],
	[
		"0x16cd10e4d0dccc01ca5a633d6e8bf656ff42918b",
		"John Knopf Open Editions",
		"JKOPEN",
		"ERC1155",
		"/images/nfts/0x16cd10e4d0dccc01ca5a633d6e8bf656ff42918b.png"
	],
	[
		"0x4012fbb0bad974dc5a5cb18a37fc1b24e0b86d3e",
		"Collectors Token",
		"Collectors Token",
		"ERC1155",
		"/images/nfts/0x4012fbb0bad974dc5a5cb18a37fc1b24e0b86d3e.png"
	],
	[
		"0x1429345a57140b32df1c689bb5ede0012952c1ad",
		"BoredChecks",
		"BC",
		"ERC1155",
		"/images/nfts/0x1429345a57140b32df1c689bb5ede0012952c1ad.png"
	],
	[
		"0x9550d957cf6802cb2c3b570a4442c2c7133bfb30",
		"LeftClickBurn",
		"LCB",
		"ERC1155",
		"/images/nfts/0x9550d957cf6802cb2c3b570a4442c2c7133bfb30.png"
	],
	[
		"0x309d2df0922c2590db869d0901f353d3b98249a7",
		"d56k DISKs",
		"DISK",
		"ERC1155",
		"/images/nfts/0x309d2df0922c2590db869d0901f353d3b98249a7.png"
	],
	[
		"0x613447a5bceccf28d062d4f13491b98bd22b4880",
		"Rupture Editions",
		"RUPTURE",
		"ERC1155",
		"/images/nfts/0x613447a5bceccf28d062d4f13491b98bd22b4880.png"
	],
	[
		"0xab0ab2fc1c498942b24278bbd86bd171a3406a5e",
		"Meme Seizer",
		"MmSzr",
		"ERC1155",
		"/images/nfts/0xab0ab2fc1c498942b24278bbd86bd171a3406a5e.png"
	],
	[
		"0xd32161bf89ca9c28becf5f4b9a74b6fa688eb78b",
		"COCO USAMI MEMBER'S CARD",
		"USA",
		"ERC1155",
		"/images/nfts/0xd32161bf89ca9c28becf5f4b9a74b6fa688eb78b.png"
	],
	[
		"0x8635890a84eecf2df90b3659d5dd646ff638658a",
		"Collectors Club Anonoverse",
		"CCA",
		"ERC1155",
		"/images/nfts/0x8635890a84eecf2df90b3659d5dd646ff638658a.png"
	],
	[
		"0x6d4ecf5c26b2a6537cb9b290fc46a3f6439e4dfc",
		"TUT EDITIONS",
		"TUTEDITIONS",
		"ERC1155",
		"/images/nfts/0x6d4ecf5c26b2a6537cb9b290fc46a3f6439e4dfc.png"
	],
	[
		"0x465856cd4facf283c1b043898719f034ac7115b0",
		"Continue? Carts!",
		"CARTS",
		"ERC1155",
		"/images/nfts/0x465856cd4facf283c1b043898719f034ac7115b0.png"
	],
	[
		"0x6d6bb2b70df798e9b026645d84142160bcffecf1",
		"Freeemes",
		"Free",
		"ERC1155",
		"/images/nfts/0x6d6bb2b70df798e9b026645d84142160bcffecf1.png"
	],
	[
		"0x5d322f7a137b2eb8ce1fe688cd5f15464b8e39aa",
		"AlphaDoggg Limited Collection",
		"AlphaDoggg Limited Collection",
		"ERC1155",
		"/images/nfts/0x5d322f7a137b2eb8ce1fe688cd5f15464b8e39aa.png"
	],
	[
		"0x9821921c1479cf1fb60503d569458566bd9f973f",
		"who*anon*",
		"WHOANON",
		"ERC1155",
		"/images/nfts/0x9821921c1479cf1fb60503d569458566bd9f973f.png"
	],
	[
		"0xcc1c94dc39b1ca5651483d5bd761f1e01e4f5a0f",
		"Opepengs",
		"Opengs",
		"ERC1155",
		"/images/nfts/0xcc1c94dc39b1ca5651483d5bd761f1e01e4f5a0f.png"
	],
	[
		"0x8b7fb2b5aee1f48e354e5e81605864319ec19039",
		"Slimesunday Editions",
		"SLIME",
		"ERC1155"
	],
	[
		"0x222059349fc329522c32a5279612eea95e0611f2",
		"MEMES BY KERO",
		"KERO",
		"ERC1155",
		"/images/nfts/0x222059349fc329522c32a5279612eea95e0611f2.png"
	],
	[
		"0x092d010e450f7632175698d3a8fed7634820c40d",
		"Guandanarian Editions",
		"GNE",
		"ERC1155",
		"/images/nfts/0x092d010e450f7632175698d3a8fed7634820c40d.png"
	],
	[
		"0x139158142aaa42bb09ab073e6e2323244085cee2",
		"CANVAS CAW Editions",
		"CANVAS",
		"ERC1155",
		"/images/nfts/0x139158142aaa42bb09ab073e6e2323244085cee2.png"
	],
	[
		"0x9dcb491e061852586f0d1d2c16b4a9dfbab58b5c",
		"0xRodo - Tickets",
		"RODO",
		"ERC1155",
		"/images/nfts/0x9dcb491e061852586f0d1d2c16b4a9dfbab58b5c.png"
	],
	[
		"0x6c5407d1c272436a66ecbc6a8110f790d5821606",
		"archive bust",
		"AB",
		"ERC1155",
		"/images/nfts/0x6c5407d1c272436a66ecbc6a8110f790d5821606.png"
	],
	[
		"0xef1b47c8f40218a82c2d94296c180b928fd54d13",
		"Melts in the mouth...",
		"MITM",
		"ERC1155"
	],
	[
		"0x1319c849ec21f76cacd8770850158f7c85824739",
		"LUCIAN MANEKI CAT",
		"MANEKI",
		"ERC1155",
		"/images/nfts/0x1319c849ec21f76cacd8770850158f7c85824739.png"
	],
	[
		"0x8265fc3e83b94f8bfe522fe6764cd71af372e712",
		"AI Zodiacs",
		"AI ZODIACS",
		"ERC1155",
		"/images/nfts/0x8265fc3e83b94f8bfe522fe6764cd71af372e712.png"
	],
	[
		"0x79d72d07d8b5bf1300c8d63cb91e838e25062158",
		"Charity by like-mike",
		"Charity by like-mike",
		"ERC1155",
		"/images/nfts/0x79d72d07d8b5bf1300c8d63cb91e838e25062158.png"
	],
	[
		"0xbe072760153ec7432c36713daba89a4c45de63a0",
		"The Infrared Journey Somewhere In Between",
		"TIJSIB",
		"ERC1155",
		"/images/nfts/0xbe072760153ec7432c36713daba89a4c45de63a0.png"
	],
	[
		"0x67845d219b0948e1f0b48e2c6f8db0f7b1f892a5",
		"test2023 V2",
		"ttt",
		"ERC1155",
		"/images/nfts/0x67845d219b0948e1f0b48e2c6f8db0f7b1f892a5.png"
	],
	[
		"0x09b0ebb5d98203adadcad28f20213ca2797ebd63",
		"Ceremony of Existence",
		"CM",
		"ERC1155",
		"/images/nfts/0x09b0ebb5d98203adadcad28f20213ca2797ebd63.png"
	],
	[
		"0x152713ed889b2592305fa29bee72f26c96766b4d",
		"Anthony Sal Editions",
		"Anthony Sal Editions",
		"ERC1155",
		"/images/nfts/0x152713ed889b2592305fa29bee72f26c96766b4d.png"
	],
	[
		"0xaf3a6f425029a2c240eb0f45df421158293c86ed",
		"+ DON GENESIS +",
		"DNG",
		"ERC1155",
		"/images/nfts/0xaf3a6f425029a2c240eb0f45df421158293c86ed.png"
	],
	[
		"0xbc9d3e96ccb7e57243295d84e1778a32f221a609",
		"WxW MEMES",
		"FWXW",
		"ERC1155",
		"/images/nfts/0xbc9d3e96ccb7e57243295d84e1778a32f221a609.png"
	],
	[
		"0x4b855c47e4bc295273a41a7636076b9b23847488",
		"Death Traps",
		"LVL",
		"ERC1155",
		"/images/nfts/0x4b855c47e4bc295273a41a7636076b9b23847488.png"
	],
	[
		"0x305be570210c5b20fd2596eff61c93045458a5f9",
		"Pepe Pasta",
		"CRTL",
		"ERC1155",
		"/images/nfts/0x305be570210c5b20fd2596eff61c93045458a5f9.png"
	],
	[
		"0x77698d3143ab482e752a5e82b2e2492f06f44be8",
		"BURN NOTICE",
		"BRN",
		"ERC1155",
		"/images/nfts/0x77698d3143ab482e752a5e82b2e2492f06f44be8.png"
	],
	[
		"0xeef86d06ceaafd959a39a651936d2560ade93451",
		"Toys and Treasures",
		"TNT",
		"ERC1155",
		"/images/nfts/0xeef86d06ceaafd959a39a651936d2560ade93451.png"
	],
	[
		"0x684f1e8d660f290dad809406e1db89f51e785bc0",
		"i_am_underscore",
		"usxo",
		"ERC1155",
		"/images/nfts/0x684f1e8d660f290dad809406e1db89f51e785bc0.png"
	],
	[
		"0x1431de54655b366095724a3945989a0d51d4329c",
		"SMOL RPG Party",
		"SRP",
		"ERC1155",
		"/images/nfts/0x1431de54655b366095724a3945989a0d51d4329c.png"
	],
	[
		"0x7965183b93b36a779df4a8b0cd82ebe9af707523",
		"AGUGN-OE",
		"AGN",
		"ERC1155",
		"/images/nfts/0x7965183b93b36a779df4a8b0cd82ebe9af707523.png"
	],
	[
		"0x597396addefc4e799524a96c2362da71c9b7d3c2",
		"Alpha City Land Plots",
		"ALPHA",
		"ERC1155",
		"/images/nfts/0x597396addefc4e799524a96c2362da71c9b7d3c2.png"
	],
	[
		"0x673d383ce633699f79087cffecfd38f97fa57638",
		"Zero Point Eleven",
		"Zero Point Eleven",
		"ERC1155",
		"/images/nfts/0x673d383ce633699f79087cffecfd38f97fa57638.png"
	],
	[
		"0xc31f200141015dbc5c092c767ce8d5b6ba1a3b36",
		"artby Anonymous",
		"ABA",
		"ERC1155",
		"/images/nfts/0xc31f200141015dbc5c092c767ce8d5b6ba1a3b36.png"
	],
	[
		"0x996cbac199217a1212fc7b4591a1d8956ca8ab17",
		"Clementmor1 OE",
		"CLMR1OE",
		"ERC1155"
	],
	[
		"0xf3dd7da1d35b3289329bfa45358763f04fbb86cc",
		"CPG: Icons of the Internet",
		"ICONS",
		"ERC1155",
		"/images/nfts/0xf3dd7da1d35b3289329bfa45358763f04fbb86cc.png"
	],
	[
		"0x2257c10ca18efa8ce46145712d5daef4fc38a15a",
		"Black Swan - EVhCZ64IEO",
		"BLACK",
		"ERC1155",
		"/images/nfts/0x2257c10ca18efa8ce46145712d5daef4fc38a15a.png"
	],
	[
		"0x592f5e8f752365cb54425cac09d93b8a9460b657",
		"Pepe's Artistic Adventures",
		"TNFT",
		"ERC1155",
		"/images/nfts/0x592f5e8f752365cb54425cac09d93b8a9460b657.png"
	],
	[
		"0xd20cd1e5352966161b821da85149160f129611d1",
		"Memes For The People by Ozark",
		"MFTP",
		"ERC1155",
		"/images/nfts/0xd20cd1e5352966161b821da85149160f129611d1.png"
	],
	[
		"0x3f12eba37405da7d16b763976caf48b21378c716",
		"yaystries official",
		"yst",
		"ERC1155",
		"/images/nfts/0x3f12eba37405da7d16b763976caf48b21378c716.png"
	],
	[
		"0xeff7939bcb585f0f02973ef1821a681b8b8c0efc",
		"tricil.art editions",
		"TRCLRT",
		"ERC1155",
		"/images/nfts/0xeff7939bcb585f0f02973ef1821a681b8b8c0efc.png"
	],
	[
		"0x2f1ce0243e03ec35c87bba0752bb48571f387385",
		"my eye - nxo",
		"INXO",
		"ERC1155",
		"/images/nfts/0x2f1ce0243e03ec35c87bba0752bb48571f387385.png"
	],
	[
		"0x4d96b647b157d3e0aade47a84d7826b89b1fe77a",
		"MORTAL WORLD- Majesty88",
		"NM8",
		"ERC1155",
		"/images/nfts/0x4d96b647b157d3e0aade47a84d7826b89b1fe77a.png"
	],
	[
		"0xabd39fc1c3fccf22ef64f2d1fa007815f1472ff5",
		"BOUBOY EDITION",
		"BBEA",
		"ERC1155",
		"/images/nfts/0xabd39fc1c3fccf22ef64f2d1fa007815f1472ff5.png"
	],
	[
		"0x090705f0efda46029fe60baa4c2ee3c4889d999c",
		"SPAM Balloon",
		"SPAMBall",
		"ERC1155",
		"/images/nfts/0x090705f0efda46029fe60baa4c2ee3c4889d999c.png"
	],
	[
		"0xdd61ccf31c1485f73e6eab2c2d251c30ccfe503c",
		"Fake Memes of Seizor",
		"SEIZOR",
		"ERC1155",
		"/images/nfts/0xdd61ccf31c1485f73e6eab2c2d251c30ccfe503c.png"
	],
	[
		"0x7cf824b3140c9cb28cd1a4613cc0952dbd4fb3b0",
		"Buzzy's Genuary",
		"BGEN",
		"ERC1155",
		"/images/nfts/0x7cf824b3140c9cb28cd1a4613cc0952dbd4fb3b0.png"
	],
	[
		"0xe189a791b8dfd5b92c7e01fd307eacbf9bd2505b",
		"A Journey Begins - by Yin",
		"JRNY",
		"ERC1155",
		"/images/nfts/0xe189a791b8dfd5b92c7e01fd307eacbf9bd2505b.png"
	],
	[
		"0x3b8b9643d7b0a03210a9032b41d044ec09d5e955",
		"bitkicks.wtf",
		"BTKS",
		"ERC1155",
		"/images/nfts/0x3b8b9643d7b0a03210a9032b41d044ec09d5e955.png"
	],
	[
		"0x9aeaa9ed9ae5a433998e9e674ad836b2790b291b",
		"Deep Sky Network",
		"Deep Sky Network",
		"ERC1155",
		"/images/nfts/0x9aeaa9ed9ae5a433998e9e674ad836b2790b291b.png"
	],
	[
		"0x1926b1af7c909dbea2307adc545ccc75888c2718",
		"Metaverse AI Critters",
		"MAIC",
		"ERC1155",
		"/images/nfts/0x1926b1af7c909dbea2307adc545ccc75888c2718.png"
	],
	[
		"0xb07fba3971a3dc31351104ca779ed25e0a258af4",
		"PATRICKS AIRDROP 01/23",
		"PAIR123",
		"ERC1155"
	],
	[
		"0x2bb4b9e307361a8323710aad2457791e73ba9bf7",
		"Kyokill Editions",
		"Kyokill Editions",
		"ERC1155",
		"/images/nfts/0x2bb4b9e307361a8323710aad2457791e73ba9bf7.png"
	],
	[
		"0x105a3f271ccc05341be49b3283e1b07c13de645a",
		"Zom Pass",
		"ZALPHA",
		"ERC1155",
		"/images/nfts/0x105a3f271ccc05341be49b3283e1b07c13de645a.png"
	],
	[
		"0x0471f5032a0c74f51f0057e9af36dd726aa016b5",
		"Celeros Community Collectibles",
		"CCC",
		"ERC1155",
		"/images/nfts/0x0471f5032a0c74f51f0057e9af36dd726aa016b5.png"
	],
	[
		"0x392fca64c0995fb27bb419b4898ed3004fa6f169",
		"Chronicles Lootbox (Expired)",
		"CLB",
		"ERC1155",
		"/images/nfts/0x392fca64c0995fb27bb419b4898ed3004fa6f169.png"
	],
	[
		"0xa5fd1da088598e88ba731b0e29aecf0bc2a31f82",
		"Pepye - Editions",
		"PEPYE",
		"ERC1155",
		"/images/nfts/0xa5fd1da088598e88ba731b0e29aecf0bc2a31f82.png"
	],
	[
		"0xbdb92c27019c8be85c8e6ae0aafaaac2f58ca98f",
		"YCOPY EDITIONS",
		"YCOPYNOT",
		"ERC1155",
		"/images/nfts/0xbdb92c27019c8be85c8e6ae0aafaaac2f58ca98f.png"
	],
	[
		"0x0aeed4c4fa521ab363884eaad7ebe505f7bee60f",
		"LIMINAL_64",
		"L64",
		"ERC1155",
		"/images/nfts/0x0aeed4c4fa521ab363884eaad7ebe505f7bee60f.png"
	],
	[
		"0x431dcee2e2c267f32dc4349619000b6cef1ba932",
		"The Free Mint",
		"FRMNT",
		"ERC1155",
		"/images/nfts/0x431dcee2e2c267f32dc4349619000b6cef1ba932.png"
	],
	[
		"0x5342ffebc74bccdb48b4c0a8eaac8b0fb4475ea7",
		"SOCIATY66",
		"SOCIATY66",
		"ERC1155",
		"/images/nfts/0x5342ffebc74bccdb48b4c0a8eaac8b0fb4475ea7.png"
	],
	[
		"0x96050b0e7baa88951d07bfd82b31dd182114dc9d",
		"FRENS CO EDITIONS",
		"FRCOE",
		"ERC1155",
		"/images/nfts/0x96050b0e7baa88951d07bfd82b31dd182114dc9d.png"
	],
	[
		"0xe4cda4a0955f427ff7f0a05990ca154984966060",
		"Reflections by Solemn",
		"RFLCTEDS",
		"ERC1155",
		"/images/nfts/0xe4cda4a0955f427ff7f0a05990ca154984966060.png"
	],
	[
		"0x895554bc4f48fe1c2bf5c198bfa3513da538f86b",
		"RTFKT Exodus Pods ????",
		"RTFKT Exodus Pods ????",
		"ERC1155",
		"/images/nfts/0x895554bc4f48fe1c2bf5c198bfa3513da538f86b.png"
	],
	[
		"0x5259a9256f5bd672dad01cfbecd2e28564cf2979",
		"Lily Open Editions",
		"LILY",
		"ERC1155",
		"/images/nfts/0x5259a9256f5bd672dad01cfbecd2e28564cf2979.png"
	],
	[
		"0x71ce294ab5e26b3ae8d46d410e795c5265004130",
		"negotiations with the abyss",
		"negotiations with the abyss",
		"ERC1155",
		"/images/nfts/0x71ce294ab5e26b3ae8d46d410e795c5265004130.png"
	],
	[
		"0xbe272364ce4b344ecc3e9c003902e71a1932bd75",
		"Fake Annie",
		"FA",
		"ERC1155",
		"/images/nfts/0xbe272364ce4b344ecc3e9c003902e71a1932bd75.png"
	],
	[
		"0xd9709ebe10edc30933a9ddbff77b4f9b32ca7a2e",
		"RJKT",
		"RJKT",
		"ERC1155",
		"/images/nfts/0xd9709ebe10edc30933a9ddbff77b4f9b32ca7a2e.png"
	],
	[
		"0x1e4412b82e5e1e0fcb36e96858272781a8482e52",
		"Siapou Editions",
		"Siapou Editions",
		"ERC1155",
		"/images/nfts/0x1e4412b82e5e1e0fcb36e96858272781a8482e52.png"
	],
	[
		"0xe9419299873fdff370b59d9f09bb8517910e36ca",
		"sounds of thefreenfts",
		"sounds of thefreenfts",
		"ERC1155",
		"/images/nfts/0xe9419299873fdff370b59d9f09bb8517910e36ca.png"
	],
	[
		"0xcedc407a6e7b4f8ae8e1218edaea9da3c7e2e684",
		"Bastien Editions",
		"BSTN1155",
		"ERC1155",
		"/images/nfts/0xcedc407a6e7b4f8ae8e1218edaea9da3c7e2e684.png"
	],
	[
		"0x73c44287a945f38d3dc591511b37324e986e9e3a",
		"harapei Pass Genesis",
		"HRP",
		"ERC1155",
		"/images/nfts/0x73c44287a945f38d3dc591511b37324e986e9e3a.png"
	],
	[
		"0x531a877839ac04be14de1e820e4ffca091ae9783",
		"OZTV",
		"OZTV",
		"ERC1155",
		"/images/nfts/0x531a877839ac04be14de1e820e4ffca091ae9783.png"
	],
	[
		"0x47d5ec54823359f2fac99ce9e27f5e6d5a9afdcf",
		"BloodBath NFT",
		"BB",
		"ERC1155",
		"/images/nfts/0x47d5ec54823359f2fac99ce9e27f5e6d5a9afdcf.png"
	],
	[
		"0x942624fccb5635084b27f08f62f7886bc2c35359",
		"BLAZED FAKES",
		"BISON",
		"ERC1155"
	],
	[
		"0xa9d53ac07d2ada81b03c64bb1bcd1cc6ea03a190",
		"Rue's Claw Machine",
		"RCM",
		"ERC1155",
		"/images/nfts/0xa9d53ac07d2ada81b03c64bb1bcd1cc6ea03a190.png"
	],
	[
		"0x9a853a7a2b21b53741f37098cb2b95bcd95a3dec",
		"Yogurt Editions",
		"GAIN",
		"ERC1155",
		"/images/nfts/0x9a853a7a2b21b53741f37098cb2b95bcd95a3dec.png"
	],
	[
		"0x62fe4b92cabe4ebdad89178e11655f077ca46ce0",
		"SMASHDIRT CONTROL SYSTEM Editions",
		"SMASHDIRT CONTROL SYSTEM Editions",
		"ERC1155",
		"/images/nfts/0x62fe4b92cabe4ebdad89178e11655f077ca46ce0.png"
	],
	[
		"0x8cdfa522fc4a3ab896d4c4b82eae279e6557c6e9",
		"The Murky Depths Editions",
		"MurkyDE",
		"ERC1155",
		"/images/nfts/0x8cdfa522fc4a3ab896d4c4b82eae279e6557c6e9.png"
	],
	[
		"0x6a95f7db5be8bd30f8995f58917d0ee642b59290",
		"MDJ - OPEN",
		"MDJO",
		"ERC1155",
		"/images/nfts/0x6a95f7db5be8bd30f8995f58917d0ee642b59290.png"
	],
	[
		"0x68607266e9118b971901239891e6280a8066fceb",
		"Neo Tokyo Punks Collabs",
		"Neo Tokyo Punks Collabs",
		"ERC1155",
		"/images/nfts/0x68607266e9118b971901239891e6280a8066fceb.png"
	],
	[
		"0xa24e9123ef09fa903be8ef2884ea3b29ed21b36e",
		"Pork Chops Fake Fake Meme",
		"PCFFM",
		"ERC1155"
	],
	[
		"0xd7a7537233c1bb7568ddd6a182286023207a6d07",
		"Funeral Editions",
		"Funeral Editions",
		"ERC1155",
		"/images/nfts/0xd7a7537233c1bb7568ddd6a182286023207a6d07.png"
	],
	[
		"0x18fe08078cdf98d65af1827f3c4253d52a86f78d",
		"You're in me",
		"ME",
		"ERC1155",
		"/images/nfts/0x18fe08078cdf98d65af1827f3c4253d52a86f78d.png"
	],
	[
		"0x34b29253499265bbe843fdc4936cce48b1ec5fa5",
		"Dark Side Of The Rainbow by Vexx",
		"RAINBOW",
		"ERC1155",
		"/images/nfts/0x34b29253499265bbe843fdc4936cce48b1ec5fa5.png"
	],
	[
		"0xf9f742f6d03c236f40fa025a24e8138bc1e1fe4b",
		"OBYOR Editions",
		"OBYOR Editions",
		"ERC1155",
		"/images/nfts/0xf9f742f6d03c236f40fa025a24e8138bc1e1fe4b.png"
	],
	[
		"0xed2b4a8af59c4690c2749121aba2b201e4a4ef73",
		"APE4269",
		"APE4269",
		"ERC1155",
		"/images/nfts/0xed2b4a8af59c4690c2749121aba2b201e4a4ef73.png"
	],
	[
		"0x6c886ae3e32d7195a1c95723163209e3e50d8134",
		"diegoprime_sketchbook",
		"DSKB",
		"ERC1155",
		"/images/nfts/0x6c886ae3e32d7195a1c95723163209e3e50d8134.png"
	],
	[
		"0x58bc468d032159d9e020ba3e9af4324016931353",
		"Jake Gallen's Guest List",
		"JAKEG",
		"ERC1155",
		"/images/nfts/0x58bc468d032159d9e020ba3e9af4324016931353.png"
	],
	[
		"0x4fdd6c9d96c2d3cc47e48c4eadb603feda901e43",
		"Geoffroy de Crecy Editions",
		"GdC1",
		"ERC1155",
		"/images/nfts/0x4fdd6c9d96c2d3cc47e48c4eadb603feda901e43.png"
	],
	[
		"0xcd98e88edead4631589eeb7139b9de1df297a5ec",
		"Poet3 by tzSpeare",
		"Poet3",
		"ERC1155",
		"/images/nfts/0xcd98e88edead4631589eeb7139b9de1df297a5ec.png"
	],
	[
		"0xdf73cc532d620202458bfa915fe99fd85946bcc8",
		"FAKEREKT",
		"FRKT",
		"ERC1155"
	],
	[
		"0x2feeecc987633ddf7917e4fc4a8e5c9b7d56a47d",
		"GAMBlT",
		"GMBT",
		"ERC1155",
		"/images/nfts/0x2feeecc987633ddf7917e4fc4a8e5c9b7d56a47d.png"
	],
	[
		"0x7f3e035bca6fd067588f84c8bfcb525aac19da26",
		"MIMI Pass",
		"MIMIP",
		"ERC1155",
		"/images/nfts/0x7f3e035bca6fd067588f84c8bfcb525aac19da26.png"
	],
	[
		"0x3c0cb894454e39e1a198fc2527dd112df607d188",
		"Temporary Happiness",
		"TMPHPPNSS",
		"ERC1155",
		"/images/nfts/0x3c0cb894454e39e1a198fc2527dd112df607d188.png"
	],
	[
		"0x95db22acd5df8e8cd1e90bb35e3404b1a7965723",
		"Monsters Editions",
		"ME",
		"ERC1155",
		"/images/nfts/0x95db22acd5df8e8cd1e90bb35e3404b1a7965723.png"
	],
	[
		"0x6f854b0c8c596128504eaff09eae53ca625bad90",
		"0xdgb Editions (2023)",
		"dgbe",
		"ERC1155",
		"/images/nfts/0x6f854b0c8c596128504eaff09eae53ca625bad90.png"
	],
	[
		"0x72b7da01b3fc00c857b366853cfe5204e7f1af0a",
		"Let Your Mind Be Free",
		"LYMBF",
		"ERC1155",
		"/images/nfts/0x72b7da01b3fc00c857b366853cfe5204e7f1af0a.png"
	],
	[
		"0x8b74e234750e7854bc58bdd9e9dcf757bef479d1",
		"LUCIAN Pass",
		"LCAN",
		"ERC1155",
		"/images/nfts/0x8b74e234750e7854bc58bdd9e9dcf757bef479d1.png"
	],
	[
		"0x21122d901bf562cb455c9e49527b0fc4fa3d68b8",
		"Dreaming of a Golden Naka",
		"Dreaming of a Golden Naka",
		"ERC1155",
		"/images/nfts/0x21122d901bf562cb455c9e49527b0fc4fa3d68b8.png"
	],
	[
		"0xa72a223981cf8d9dd9834331450bc568288ae75d",
		"fake meme war",
		"fmw",
		"ERC1155"
	],
	[
		"0x00db41e6b9d4ebc983f2f8f6dd8fcca5ab2eaa38",
		"Call to Meme",
		"CTM",
		"ERC1155"
	],
	[
		"0x935bb43b2545dd0d57863ded615e305ae0184f20",
		"BlackBox: Specials",
		"BBSP",
		"ERC1155"
	],
	[
		"0xb2aa77d4eeac858e4a68f4b155cfb238689c25ad",
		"CRYPTORASTAS Music Label",
		"CRM",
		"ERC1155",
		"/images/nfts/0xb2aa77d4eeac858e4a68f4b155cfb238689c25ad.png"
	],
	[
		"0x2b4e279e695f9601572c56e8aceb7d4e358f8af5",
		"Ninja Alpha",
		"NA",
		"ERC1155",
		"/images/nfts/0x2b4e279e695f9601572c56e8aceb7d4e358f8af5.png"
	],
	[
		"0x5f15b5661f9b4e8f863dcf8156abab89d7a426d7",
		"FinsXM",
		"FINSXM",
		"ERC1155",
		"/images/nfts/0x5f15b5661f9b4e8f863dcf8156abab89d7a426d7.png"
	],
	[
		"0x5d33b202a0052a2a532290e0ab25407bdf4d48ac",
		"tochi pass",
		"TOCHIPASS",
		"ERC1155"
	],
	[
		"0x40618b46bf7c22b3180cadbe6a81e07d774176a5",
		"KON PASS",
		"KONPASS",
		"ERC1155",
		"/images/nfts/0x40618b46bf7c22b3180cadbe6a81e07d774176a5.png"
	],
	[
		"0x9d55ec4dd724235a8b32972150440046344acb5d",
		"Café JPG Pass",
		"CAFE",
		"ERC1155",
		"/images/nfts/0x9d55ec4dd724235a8b32972150440046344acb5d.png"
	],
	[
		"0x5b1e3a72903f48cd8b4fa6be1ef7154b292c5434",
		"Andromeda Project by SpaceBoys",
		"Andromeda Project by SpaceBoys",
		"ERC1155",
		"/images/nfts/0x5b1e3a72903f48cd8b4fa6be1ef7154b292c5434.png"
	],
	[
		"0x67b0fd6150ef478de9a7a6230cc6dd75ba5b4fbc",
		"poobaloobs",
		"poobaloobs",
		"ERC1155",
		"/images/nfts/0x67b0fd6150ef478de9a7a6230cc6dd75ba5b4fbc.png"
	],
	[
		"0xa714445f8ac9b0dae3dba96026a2661dff98d57b",
		"Err0r Err0r",
		"Err0r",
		"ERC1155",
		"/images/nfts/0xa714445f8ac9b0dae3dba96026a2661dff98d57b.png"
	],
	[
		"0xd5c5adc400b321ff1f166530e7138d0e9c77ef29",
		"CHIBI PASS",
		"CHIBIPASS",
		"ERC1155",
		"/images/nfts/0xd5c5adc400b321ff1f166530e7138d0e9c77ef29.png"
	],
	[
		"0xa1a58607827b8d83757169784b937b35cbedb95c",
		"Faith Loves editions",
		"Faith Loves editions",
		"ERC1155",
		"/images/nfts/0xa1a58607827b8d83757169784b937b35cbedb95c.png"
	],
	[
		"0x35741bdfbb5e78dbb2d1cd5f4cdd851ea57606d3",
		"SHINSEI GALVERSE: ORIGIN STORY EPISODES",
		"ORIGINSTORYEPS",
		"ERC1155"
	],
	[
		"0x48aecc6162131d09450d1a85607d6c2e4510c87e",
		"The Collector by Victor Mosquera",
		"VMCO",
		"ERC1155",
		"/images/nfts/0x48aecc6162131d09450d1a85607d6c2e4510c87e.png"
	],
	[
		"0xd52863bf7d90e74b02343df0e5d2c431ea699fb9",
		"Audio Galleries Community",
		"AGC",
		"ERC1155",
		"/images/nfts/0xd52863bf7d90e74b02343df0e5d2c431ea699fb9.png"
	],
	[
		"0x265443219f6122539b8409ac130a07d91edeb6e6",
		"The Drops - Open Edition",
		"dropsOE",
		"ERC1155",
		"/images/nfts/0x265443219f6122539b8409ac130a07d91edeb6e6.png"
	],
	[
		"0x2afc5f657b6754947b922ce530c3e96bfaa4881f",
		"ISEKAI_AI_NFT",
		"ISEKAI",
		"ERC1155",
		"/images/nfts/0x2afc5f657b6754947b922ce530c3e96bfaa4881f.png"
	],
	[
		"0x258f44d4ebe9f74481eedb6177b1d53f97128e1c",
		"Gruff's Collabs",
		"GRFFCLLBS",
		"ERC1155"
	],
	[
		"0x40f01598d18e682b545cd7730e6be38008601e48",
		"DarkArt Curated",
		"DARKART",
		"ERC1155"
	],
	[
		"0x25d850abb40bcd896b84c2446a5c9c5c0e034e81",
		"PLS&TY Open Editions",
		"PLS",
		"ERC1155",
		"/images/nfts/0x25d850abb40bcd896b84c2446a5c9c5c0e034e81.png"
	],
	[
		"0x666e28b793e8274d2b8f93707083425b615d69e6",
		"Editions by Anthony Azekwoh",
		"EAA",
		"ERC1155",
		"/images/nfts/0x666e28b793e8274d2b8f93707083425b615d69e6.png"
	],
	[
		"0x29db6f3ea5bbe66f444d96828dc2e9fccad043da",
		"Arman Open Edition",
		"AOE",
		"ERC1155",
		"/images/nfts/0x29db6f3ea5bbe66f444d96828dc2e9fccad043da.png"
	],
	[
		"0xfb3306b26f44f43c4275a6496404bf27e2b965e6",
		"Lola Hubner Editions",
		"LHE",
		"ERC1155",
		"/images/nfts/0xfb3306b26f44f43c4275a6496404bf27e2b965e6.png"
	],
	[
		"0x2860f59a7bcc9ce125149e26fdc4b997e784864b",
		"Camibus Editions",
		"Camibus Editions",
		"ERC1155",
		"/images/nfts/0x2860f59a7bcc9ce125149e26fdc4b997e784864b.png"
	],
	[
		"0x40d8a6a05a0a033d948a53dca8df8b54a08a2734",
		"LIDS BY WARHODL",
		"LIDS",
		"ERC1155",
		"/images/nfts/0x40d8a6a05a0a033d948a53dca8df8b54a08a2734.png"
	],
	[
		"0x7b40fa216c7a5cf35febb0e8bc37e40149d98f4a",
		"HATO GENESIS V2",
		"HATOGENESIS",
		"ERC1155",
		"/images/nfts/0x7b40fa216c7a5cf35febb0e8bc37e40149d98f4a.png"
	],
	[
		"0xaadbec29ca9ef0c33a320126c28d5a08dc19b529",
		"SA PASS",
		"SAPASS",
		"ERC1155",
		"/images/nfts/0xaadbec29ca9ef0c33a320126c28d5a08dc19b529.png"
	],
	[
		"0xdccc017e7a7145b5fd8db6dcba43451ca171fe70",
		"pnizo Pass",
		"PNZP",
		"ERC1155",
		"/images/nfts/0xdccc017e7a7145b5fd8db6dcba43451ca171fe70.png"
	],
	[
		"0xffbb226e7138b025b2afa26350a334e72fac700d",
		"NORI-OKURE GENESIS PASS",
		"NOGP",
		"ERC1155",
		"/images/nfts/0xffbb226e7138b025b2afa26350a334e72fac700d.png"
	],
	[
		"0x26648586632c520e11e51a065b64bce00a1e4fcd",
		"PAJIRO PASS GENESIS",
		"PJR",
		"ERC1155",
		"/images/nfts/0x26648586632c520e11e51a065b64bce00a1e4fcd.png"
	],
	[
		"0x9f1f8d8d5a91f19524ea7e4412ddad2419d4bafd",
		"BUSON Pass",
		"BUSON",
		"ERC1155",
		"/images/nfts/0x9f1f8d8d5a91f19524ea7e4412ddad2419d4bafd.png"
	],
	[
		"0xbba66e5f5c480ea3ca5e47dbf93741c6735fe468",
		"Maclunkey Art",
		"mclnk",
		"ERC1155",
		"/images/nfts/0xbba66e5f5c480ea3ca5e47dbf93741c6735fe468.png"
	],
	[
		"0xc59daf9c174067cc1ea5f0418738ff27907e75de",
		"FAKE RE-MEMES.ETH",
		"KEK",
		"ERC1155"
	],
	[
		"0x913467e1c226549b29256e18842ef444760703d4",
		"Noraoji-Pass",
		"NRJ",
		"ERC1155",
		"/images/nfts/0x913467e1c226549b29256e18842ef444760703d4.png"
	],
	[
		"0xc0f3c88531d348379dd42f2a3733f7c2672713c1",
		"CNP prince PASS",
		"CNPprince",
		"ERC1155",
		"/images/nfts/0xc0f3c88531d348379dd42f2a3733f7c2672713c1.png"
	],
	[
		"0x1fadab7daf08952e6552e56f357cbcf84eb3c2b3",
		"lilhuhu Genesis",
		"LILHUHU",
		"ERC1155",
		"/images/nfts/0x1fadab7daf08952e6552e56f357cbcf84eb3c2b3.png"
	],
	[
		"0xe70d788b4db48e6d3dcbea105c8efcd0c77ec34b",
		"CNA PASS",
		"CNAPass",
		"ERC1155",
		"/images/nfts/0xe70d788b4db48e6d3dcbea105c8efcd0c77ec34b.png"
	],
	[
		"0xed9e6fc212771a1cda218b8b164e4b83b836570e",
		"PAJI PASS GENESIS",
		"PPGS",
		"ERC1155",
		"/images/nfts/0xed9e6fc212771a1cda218b8b164e4b83b836570e.png"
	],
	[
		"0x0fa6287e80425843c84f02b6bf7f8b4566f5cc1b",
		"WULFS by Casket",
		"WULFS",
		"ERC1155",
		"/images/nfts/0x0fa6287e80425843c84f02b6bf7f8b4566f5cc1b.png"
	],
	[
		"0xebef3b7f7ff5166b641ce5e73be1c9d9defba81d",
		"E R C 1 1 5 5",
		"E R C 1 1 5 5",
		"ERC1155",
		"/images/nfts/0xebef3b7f7ff5166b641ce5e73be1c9d9defba81d.png"
	],
	[
		"0x5e0d42ff6bef543127e3381a14aa6daba18e0ed0",
		"Seize the Re(kt)Memes!",
		"RKME",
		"ERC1155",
		"/images/nfts/0x5e0d42ff6bef543127e3381a14aa6daba18e0ed0.png"
	],
	[
		"0xfd7cc60544176e97be3c020e63da2e47c5f93044",
		"BFFF00 Projects",
		"BFFF00PJ",
		"ERC1155",
		"/images/nfts/0xfd7cc60544176e97be3c020e63da2e47c5f93044.png"
	],
	[
		"0x9d2e2254a2c15108e8f067ac54a0b4d3b75947bc",
		"momo Pass (Out Of Commission)",
		"momo",
		"ERC1155",
		"/images/nfts/0x9d2e2254a2c15108e8f067ac54a0b4d3b75947bc.png"
	],
	[
		"0x6ac9d7b501fd65d227583fee541ed1fd8e7ceb7f",
		"Keisuke Pass Genesis",
		"KPG",
		"ERC1155",
		"/images/nfts/0x6ac9d7b501fd65d227583fee541ed1fd8e7ceb7f.png"
	],
	[
		"0xd9ddf01163a45b69b8cdbffd635a7405fb39a516",
		"ikehaya Pass",
		"IKHY",
		"ERC1155",
		"/images/nfts/0xd9ddf01163a45b69b8cdbffd635a7405fb39a516.png"
	],
	[
		"0xd833a1990656c5c282b809cb82500455a8e6a205",
		"Wassietopia",
		"WAT",
		"ERC1155",
		"/images/nfts/0xd833a1990656c5c282b809cb82500455a8e6a205.png"
	],
	[
		"0xee4c681bb736ee82a148eb5f2cc9cefc2166f828",
		"Pixel Face Legends",
		"PFL",
		"ERC1155",
		"/images/nfts/0xee4c681bb736ee82a148eb5f2cc9cefc2166f828.png"
	],
	[
		"0x37f3ed694670f1abf78119f0ae70a813cc93bbec",
		"billyrestey - editions",
		"billyrestey - editions",
		"ERC1155",
		"/images/nfts/0x37f3ed694670f1abf78119f0ae70a813cc93bbec.png"
	],
	[
		"0x7acc43f3fdca865e3e771f5e42d2829b850d30e4",
		"Pepe Pictures Studios by Chipi",
		"PPPCTRS",
		"ERC1155",
		"/images/nfts/0x7acc43f3fdca865e3e771f5e42d2829b850d30e4.png"
	],
	[
		"0xd22b2e0ad8e0ef983413420717156ff0fa8b94e2",
		"HARVEST MEMES",
		"HM",
		"ERC1155",
		"/images/nfts/0xd22b2e0ad8e0ef983413420717156ff0fa8b94e2.png"
	],
	[
		"0xa72b658430b6d8bf741364ce3f2730cd4e7d9ba6",
		"Dangiuz Editions",
		"DNGZED",
		"ERC1155",
		"/images/nfts/0xa72b658430b6d8bf741364ce3f2730cd4e7d9ba6.png"
	],
	[
		"0x94d676b6550a1a0cee48754a1ad52ecf9edc7013",
		"NessGraphics Open Editions",
		"OPENN",
		"ERC1155",
		"/images/nfts/0x94d676b6550a1a0cee48754a1ad52ecf9edc7013.png"
	],
	[
		"0x6f348237a913e75557b6c1dd2c024c2580975636",
		"Pepe Club by Gruff",
		"PEPECLUB",
		"ERC1155",
		"/images/nfts/0x6f348237a913e75557b6c1dd2c024c2580975636.png"
	],
	[
		"0xf123f4112e9da22e456dab2c6dd0021890ff6569",
		"The Freedom to Transact",
		"FTT",
		"ERC1155",
		"/images/nfts/0xf123f4112e9da22e456dab2c6dd0021890ff6569.png"
	],
	[
		"0x972283594c82a18c611a99c45eba864bf0816944",
		"FAKEFAKEFAKEMEMES",
		"FAKE3",
		"ERC1155",
		"/images/nfts/0x972283594c82a18c611a99c45eba864bf0816944.png"
	],
	[
		"0x072832441053b682b4bf6a01505d1a780df7a56b",
		"Memory Lane - The Hues",
		"ML",
		"ERC1155",
		"/images/nfts/0x072832441053b682b4bf6a01505d1a780df7a56b.png"
	],
	[
		"0x13c3fe812dfcd65d3cf41cc7be60f94aed3b0be7",
		"4DAKULTUR3",
		"4DAKULTUR3",
		"ERC1155",
		"/images/nfts/0x13c3fe812dfcd65d3cf41cc7be60f94aed3b0be7.png"
	],
	[
		"0x30936d76c82315ebbd1e74433f282b5d6edd287c",
		"Zuphioh Editions",
		"Zuphioh Editions",
		"ERC1155",
		"/images/nfts/0x30936d76c82315ebbd1e74433f282b5d6edd287c.png"
	],
	[
		"0x2de809df5afe759a20012f286198d12346fd2dff",
		"The knockout V2",
		"Gao",
		"ERC1155",
		"/images/nfts/0x2de809df5afe759a20012f286198d12346fd2dff.png"
	],
	[
		"0xfaf779711965b5b6374d110fc0c3b665dd9cd504",
		"Chapitre Trois",
		"VNX",
		"ERC1155",
		"/images/nfts/0xfaf779711965b5b6374d110fc0c3b665dd9cd504.png"
	],
	[
		"0xb4f13118b5354f0c90d9768bec10ab360010f374",
		"Beyond Death's Door",
		"AR",
		"ERC1155",
		"/images/nfts/0xb4f13118b5354f0c90d9768bec10ab360010f374.png"
	],
	[
		"0x8caa2651d99cc016b339e14a644c8ab13f0ab697",
		"Quality Vandals",
		"QV",
		"ERC1155",
		"/images/nfts/0x8caa2651d99cc016b339e14a644c8ab13f0ab697.png"
	],
	[
		"0x27a565a64e39453f79a5abc7b8f76c5584567267",
		"Happiers",
		"Happiers",
		"ERC1155",
		"/images/nfts/0x27a565a64e39453f79a5abc7b8f76c5584567267.png"
	],
	[
		"0x188db65d4d1afd0a417ae4c895285f35f6c62452",
		"Memesterpieces Tickets",
		"MEMESTERPIECES",
		"ERC1155",
		"/images/nfts/0x188db65d4d1afd0a417ae4c895285f35f6c62452.png"
	],
	[
		"0x271f684851f0517b48f23240b60ab9c8b5d2b223",
		"GALS’ ADVENTURE - CHAMAKOU GALVERSE ART MATSURI",
		"CHAMAGAL",
		"ERC1155",
		"/images/nfts/0x271f684851f0517b48f23240b60ab9c8b5d2b223.png"
	],
	[
		"0x02bb15019ca8ceaae603972eb85d50f99e4e2efe",
		"HIGHDEMAND SUPPLY",
		"HIGHDEMAND SUPPLY",
		"ERC1155",
		"/images/nfts/0x02bb15019ca8ceaae603972eb85d50f99e4e2efe.png"
	],
	[
		"0x1be78572b1af2160c54fa9ee2cc69ac9cecc5894",
		"Tacita editions 2023",
		"TTeditions",
		"ERC1155",
		"/images/nfts/0x1be78572b1af2160c54fa9ee2cc69ac9cecc5894.png"
	],
	[
		"0xe11ebbe07e5a2e9d741c564579888c3c05fe1691",
		"Moments From Above | Editions",
		"MFAE",
		"ERC1155",
		"/images/nfts/0xe11ebbe07e5a2e9d741c564579888c3c05fe1691.png"
	],
	[
		"0xb9e15c0ab12081b132838abf58911ee0c5ffd258",
		"FAKELORD",
		"LORD",
		"ERC1155",
		"/images/nfts/0xb9e15c0ab12081b132838abf58911ee0c5ffd258.png"
	],
	[
		"0x24395f911c8271a6751d15381a42bc58707adb7d",
		"Squabble Heads",
		"SQBHDS",
		"ERC1155",
		"/images/nfts/0x24395f911c8271a6751d15381a42bc58707adb7d.png"
	],
	[
		"0x4e633dbaa685a9c0735f592c6553edd30086b1e9",
		"Chrono Frog ⏳ ????",
		"XLIILXIX",
		"ERC1155"
	],
	[
		"0xad06e32fdf47d38ed7129bbe8f0c4fc3849aef9e",
		"mw // editions",
		"mwxo",
		"ERC1155",
		"/images/nfts/0xad06e32fdf47d38ed7129bbe8f0c4fc3849aef9e.png"
	],
	[
		"0x51ed3f1923768dc44b06fcaa51707b1ceb6ff8b0",
		"Re-Meme Editions",
		"RE2023",
		"ERC1155",
		"/images/nfts/0x51ed3f1923768dc44b06fcaa51707b1ceb6ff8b0.png"
	],
	[
		"0x923a55e96aa8043c581e0cc94fc6618af69c42e1",
		"freDom to Fake",
		"FTF",
		"ERC1155",
		"/images/nfts/0x923a55e96aa8043c581e0cc94fc6618af69c42e1.png"
	],
	[
		"0x07af1d4ddd632ff16a480fb90641cc10e180108c",
		"RBKS BY SHAKKA",
		"RBKS",
		"ERC1155",
		"/images/nfts/0x07af1d4ddd632ff16a480fb90641cc10e180108c.png"
	],
	[
		"0xd9431d98b2d73c113f29d976e3f39a45b4d33bbd",
		"Magus Devon is Iconik by dotta",
		"ICONIKS",
		"ERC1155",
		"/images/nfts/0xd9431d98b2d73c113f29d976e3f39a45b4d33bbd.png"
	],
	[
		"0xe1f52209d5a2ef0bfaec4056eb1ae3a932d9d310",
		"The Wise Women by Kristel Bechara",
		"WISE",
		"ERC1155",
		"/images/nfts/0xe1f52209d5a2ef0bfaec4056eb1ae3a932d9d310.png"
	],
	[
		"0xcdc73b3ec2e5ae878121366a0467741e4dace731",
		"Cryptoart & NFTs Class of 2022",
		"Rey1155",
		"ERC1155",
		"/images/nfts/0xcdc73b3ec2e5ae878121366a0467741e4dace731.png"
	],
	[
		"0xee917f5a60d4ff8aaf59439dce7bb7a95f634ec5",
		"FYOP - Five Years of Punks",
		"FYOP",
		"ERC1155",
		"/images/nfts/0xee917f5a60d4ff8aaf59439dce7bb7a95f634ec5.png"
	],
	[
		"0x8fd17bfbf57d0d9e3e329b86aff0d582248d9acd",
		"COMPROM1SED",
		"MORT",
		"ERC1155",
		"/images/nfts/0x8fd17bfbf57d0d9e3e329b86aff0d582248d9acd.png"
	],
	[
		"0xdc9760938126e8d867275025433080971594971c",
		"CRYPTOLEO BALLOON",
		"CLB",
		"ERC1155",
		"/images/nfts/0xdc9760938126e8d867275025433080971594971c.png"
	],
	[
		"0x0500f3c1d1fed1d604643379510280f28d176742",
		"Asa EDs",
		"AED",
		"ERC1155",
		"/images/nfts/0x0500f3c1d1fed1d604643379510280f28d176742.png"
	],
	[
		"0x8a53610f0a99414d30f7ed87286352c55b110ab6",
		"Passing Through New Zealand by Brayden Hall",
		"Passing Through New Zealand by Brayden Hall",
		"ERC1155",
		"/images/nfts/0x8a53610f0a99414d30f7ed87286352c55b110ab6.png"
	],
	[
		"0x974fb0a2f38094e8d0842ab89d538d85a0814820",
		"REDUCTIVES",
		"JRMY",
		"ERC1155",
		"/images/nfts/0x974fb0a2f38094e8d0842ab89d538d85a0814820.png"
	],
	[
		"0x83d9ab54117508dff6c05c2b7534603a5b20acd4",
		"Anya artworld",
		"AF",
		"ERC1155",
		"/images/nfts/0x83d9ab54117508dff6c05c2b7534603a5b20acd4.png"
	],
	[
		"0x2e49d58f602f95284b5b75dd8eae27d1ded14684",
		"Turtle Punch",
		"TP",
		"ERC1155",
		"/images/nfts/0x2e49d58f602f95284b5b75dd8eae27d1ded14684.png"
	],
	[
		"0xa6cef698d35e0ed3b22110e986b6511daf11e922",
		"Nyan Pepe",
		"NYANPEPE",
		"ERC1155",
		"/images/nfts/0xa6cef698d35e0ed3b22110e986b6511daf11e922.png"
	],
	[
		"0x56cd7118975a8cebe201673d4cf4143af555042e",
		"sigmax",
		"SGMX",
		"ERC1155",
		"/images/nfts/0x56cd7118975a8cebe201673d4cf4143af555042e.png"
	],
	[
		"0xc7271482f4bdd68f104ec88bb80ad118a627bc8c",
		"Editions by Izzy",
		"IZZY",
		"ERC1155",
		"/images/nfts/0xc7271482f4bdd68f104ec88bb80ad118a627bc8c.png"
	],
	[
		"0xeb9e4c686712b55dd572d57e052e0c7f81a2c328",
		"XCPPepe",
		"XCPPepe",
		"ERC1155",
		"/images/nfts/0xeb9e4c686712b55dd572d57e052e0c7f81a2c328.png"
	],
	[
		"0x61974ea924ae6899467aa82205f67f45dfc350bb",
		"Checkmates VV",
		"CM",
		"ERC1155",
		"/images/nfts/0x61974ea924ae6899467aa82205f67f45dfc350bb.png"
	],
	[
		"0x11f12d907df7841558119cc28c05d9f402a1e562",
		"Turf Cartridges",
		"TCOE",
		"ERC1155",
		"/images/nfts/0x11f12d907df7841558119cc28c05d9f402a1e562.png"
	],
	[
		"0x763ea16f957a1f18273f8562f2f946bc68bef348",
		"Relic Reserve Token",
		"RESERVE",
		"ERC1155",
		"/images/nfts/0x763ea16f957a1f18273f8562f2f946bc68bef348.png"
	],
	[
		"0xf09510d82d03e9ce541d9a399cbceae461a48172",
		"HYPERCHROMIA",
		"HYPERCHROMIA",
		"ERC1155",
		"/images/nfts/0xf09510d82d03e9ce541d9a399cbceae461a48172.png"
	],
	[
		"0x63bf2e12f53fe62a9339a889e3cd217260a76e90",
		"Rich Art For Famous People",
		"RAFFP",
		"ERC1155",
		"/images/nfts/0x63bf2e12f53fe62a9339a889e3cd217260a76e90.png"
	],
	[
		"0x927899ff8d6740adda5f6d9a66f01553939a4655",
		"Who Killed The King",
		"WKTK",
		"ERC1155"
	],
	[
		"0x728863d7e094ae5ffd91dcc365099666020d7a51",
		"The Nakamotos",
		"Naka",
		"ERC1155",
		"/images/nfts/0x728863d7e094ae5ffd91dcc365099666020d7a51.png"
	],
	[
		"0x411376d5b4e8fcbca0c938436be0c058dc5e84be",
		"PIXELGLITCH by Satoshi's Mom",
		"PIXELGLITCH",
		"ERC1155",
		"/images/nfts/0x411376d5b4e8fcbca0c938436be0c058dc5e84be.png"
	],
	[
		"0x82a477788d64267cb1c745377686c12a65c8b191",
		"Bouncing Heads",
		"OSB95",
		"ERC1155",
		"/images/nfts/0x82a477788d64267cb1c745377686c12a65c8b191.png"
	],
	[
		"0x44224196c7ec2a2cb8427dc4657a140087bfa2ba",
		"coinfield",
		"CNFLD",
		"ERC1155",
		"/images/nfts/0x44224196c7ec2a2cb8427dc4657a140087bfa2ba.png"
	],
	[
		"0x07df7725d465e710b182b1be91a3923cc8c204a1",
		"Memes by ROLU",
		"MROL",
		"ERC1155",
		"/images/nfts/0x07df7725d465e710b182b1be91a3923cc8c204a1.png"
	],
	[
		"0xb8c5f4bfd17d852681ccdf0a7012514b371528d2",
		"ReMemes by Kaerr",
		"Kaerr",
		"ERC1155",
		"/images/nfts/0xb8c5f4bfd17d852681ccdf0a7012514b371528d2.png"
	],
	[
		"0x8c087310212eabc08f3e489d8b586def686cd279",
		"0X830 Fanzine: Season 1",
		"NDMFANZINE",
		"ERC1155",
		"/images/nfts/0x8c087310212eabc08f3e489d8b586def686cd279.png"
	],
	[
		"0x26dea1f35a2f240968f42330ad9528f416c80a17",
		"Build an Ape by Reido",
		"BAPES",
		"ERC1155",
		"/images/nfts/0x26dea1f35a2f240968f42330ad9528f416c80a17.png"
	],
	[
		"0x4993c63eca946ed90102c43e74436ea1e53e14b9",
		"Discs by Anna Carreras",
		"Discs by Anna Carreras",
		"ERC1155",
		"/images/nfts/0x4993c63eca946ed90102c43e74436ea1e53e14b9.png"
	],
	[
		"0xb80134aa401fbeb2247e577edefdaa1947880962",
		"XGlitch",
		"XGlitch",
		"ERC1155",
		"/images/nfts/0xb80134aa401fbeb2247e577edefdaa1947880962.png"
	],
	[
		"0x4c396d03e45e4e0727816cf4c56f718dc40c4754",
		"do not buy this anymore please contract was botted.",
		"BAPE",
		"ERC1155",
		"/images/nfts/0x4c396d03e45e4e0727816cf4c56f718dc40c4754.png"
	],
	[
		"0x15b8c945740afc9228726d72ae147cafa0f476c1",
		"artifacts and apparitions",
		"DSK",
		"ERC1155"
	],
	[
		"0x4e51a59508426b645826a14587c6548648ab2035",
		"jnbmgrtnr Editions",
		"EJNBMGRTNR",
		"ERC1155"
	],
	[
		"0x8bc9d5370ccc399a0b1eebac401d1bbaf465d618",
		"Art by Willaa",
		"WLLAA",
		"ERC1155",
		"/images/nfts/0x8bc9d5370ccc399a0b1eebac401d1bbaf465d618.png"
	],
	[
		"0xa728d7737ff18a1cba46f7d33ad7119a2c94a8eb",
		"Keyboard Cat!",
		"KEYBOARDCAT",
		"ERC1155",
		"/images/nfts/0xa728d7737ff18a1cba46f7d33ad7119a2c94a8eb.png"
	],
	[
		"0x246e33b47a42b7215c411b1c42a0be966e3e3b70",
		"ReMemes by Serc",
		"REMEME",
		"ERC1155",
		"/images/nfts/0x246e33b47a42b7215c411b1c42a0be966e3e3b70.png"
	],
	[
		"0x8dd74a85ec21a254a6077fb9f3564f68493dd043",
		"MoonBeans V2",
		"MNBNS",
		"ERC1155",
		"/images/nfts/0x8dd74a85ec21a254a6077fb9f3564f68493dd043.png"
	],
	[
		"0xf4d048d94c7aad2eddbfb84767b66da3c8a70da4",
		"OELHAN ㋡",
		"OLH",
		"ERC1155",
		"/images/nfts/0xf4d048d94c7aad2eddbfb84767b66da3c8a70da4.png"
	],
	[
		"0xebaddb2bf7df375c6030eb699e5e7253368f4b55",
		"The Memery by dillOnFire",
		"MEME",
		"ERC1155",
		"/images/nfts/0xebaddb2bf7df375c6030eb699e5e7253368f4b55.png"
	],
	[
		"0x4a26dc6676b7a3838f83b0bb247cb708a97003ce",
		"SHADEOFSPECTRUM",
		"SFS",
		"ERC1155"
	],
	[
		"0x199c4e4462c2841c4ca38c45259c8a8c947a789d",
		"Weed Checks is a WL spot... are you paying attention anon?",
		"WEED",
		"ERC1155",
		"/images/nfts/0x199c4e4462c2841c4ca38c45259c8a8c947a789d.png"
	],
	[
		"0x708f94690076b08fa24e60c01a85054350dbcfc2",
		"Patched Paradise",
		"Patched Paradise",
		"ERC1155",
		"/images/nfts/0x708f94690076b08fa24e60c01a85054350dbcfc2.png"
	],
	[
		"0x6c25294ac88fce48e89e01042b37a89e8c7202c1",
		"beat TANGERINE 88",
		"CB8A",
		"ERC1155",
		"/images/nfts/0x6c25294ac88fce48e89e01042b37a89e8c7202c1.png"
	],
	[
		"0x1cbc4c241d52cccfcff0c61617374cff4ee301ac",
		"beat HOME OF THE 88s",
		"CB8B",
		"ERC1155",
		"/images/nfts/0x1cbc4c241d52cccfcff0c61617374cff4ee301ac.png"
	],
	[
		"0x84df3bfae6f0489ad7fec69fd981ce9b16cf89a0",
		"Quiet Place editions",
		"QPLE",
		"ERC1155",
		"/images/nfts/0x84df3bfae6f0489ad7fec69fd981ce9b16cf89a0.png"
	],
	[
		"0x8c5a98720c6f886899756ef8f1a3ed5080801898",
		"Gold Hunt Game  |  Rum",
		"GHGRUM",
		"ERC1155",
		"/images/nfts/0x8c5a98720c6f886899756ef8f1a3ed5080801898.png"
	],
	[
		"0xb2df0b24afc08871af03c6f097a99f567ab75952",
		"52 Weeks by Kushgrandma",
		"WEEKS",
		"ERC1155",
		"/images/nfts/0xb2df0b24afc08871af03c6f097a99f567ab75952.png"
	],
	[
		"0x1b236e9e62d696e9195143ab0a1ea7e130c919e8",
		"LUH - EDITIONS 2022",
		"Luh",
		"ERC1155",
		"/images/nfts/0x1b236e9e62d696e9195143ab0a1ea7e130c919e8.png"
	],
	[
		"0x1feb6a25ddc0900fe89f3c576702d10a216e5fd0",
		"MEMES OF REPRODUCTION",
		"SEIZETHEMEMESOFREPRODUCTION",
		"ERC1155",
		"/images/nfts/0x1feb6a25ddc0900fe89f3c576702d10a216e5fd0.png"
	],
	[
		"0x28084294df3105b3194876e932417dedf508d696",
		"Sinner - Cursed Card",
		"SSS",
		"ERC1155",
		"/images/nfts/0x28084294df3105b3194876e932417dedf508d696.png"
	],
	[
		"0xb705cb87eb90ff43ba6609fdf22dc5b477a27ed7",
		"WILLARD Editions",
		"WLLRD",
		"ERC1155",
		"/images/nfts/0xb705cb87eb90ff43ba6609fdf22dc5b477a27ed7.png"
	],
	[
		"0xfed1f9b1eb47c44a69c55fd7a2e24b5077161130",
		"Vortex Packs",
		"VPX",
		"ERC1155",
		"/images/nfts/0xfed1f9b1eb47c44a69c55fd7a2e24b5077161130.png"
	],
	[
		"0x44a3dd4dded100a61e91f02346314ed40766db11",
		"Unidentified contract - RcvEjDqVCj",
		"Unidentified contract - RcvEjDqVCj",
		"ERC1155"
	],
	[
		"0x6ed8d98428dd35380000ec847a7e51afa4b60159",
		"Visual Swim",
		"VIZ",
		"ERC1155",
		"/images/nfts/0x6ed8d98428dd35380000ec847a7e51afa4b60159.png"
	],
	[
		"0x0566b3d68bd5c76179cbffb62e1ffad6ec2acbe0",
		"Chrome Void | Frog Collection",
		"Chrome Void | Frog Collection",
		"ERC1155",
		"/images/nfts/0x0566b3d68bd5c76179cbffb62e1ffad6ec2acbe0.png"
	],
	[
		"0xa8d79ac587832c814fbdc45f9a5e1413a0db2936",
		"HBBs by MarkTheHabibi",
		"HBBS",
		"ERC1155",
		"/images/nfts/0xa8d79ac587832c814fbdc45f9a5e1413a0db2936.png"
	],
	[
		"0x2a825155a51d8ef9f4b4699a1ae4361d7cf601f7",
		"CHUD0",
		"CHUD0",
		"ERC1155",
		"/images/nfts/0x2a825155a51d8ef9f4b4699a1ae4361d7cf601f7.png"
	],
	[
		"0x1585cff683988a0235090410a3b3f37eb699e612",
		"Good Morning Pepe Editions",
		"GMPE",
		"ERC1155",
		"/images/nfts/0x1585cff683988a0235090410a3b3f37eb699e612.png"
	],
	[
		"0xc952474ed9d3ec7066a8456bc89c2372e3214d41",
		"beat DOMUS 1",
		"CB",
		"ERC1155",
		"/images/nfts/0xc952474ed9d3ec7066a8456bc89c2372e3214d41.png"
	],
	[
		"0xb5066903756d5fc9c28b3aa2ad6db8b2316662c2",
		"KEK BALLOON",
		"KEKLOL",
		"ERC1155",
		"/images/nfts/0xb5066903756d5fc9c28b3aa2ad6db8b2316662c2.png"
	],
	[
		"0x9232aff8e408b34499230cc1be655080e24f13a6",
		"I'm only Human - Mediolanum",
		"MMM",
		"ERC1155",
		"/images/nfts/0x9232aff8e408b34499230cc1be655080e24f13a6.png"
	],
	[
		"0x111909961f31a025efe6df4ebce1f7125dcabc36",
		"MojoHeads Presale Passes",
		"MojoHeads Presale Passes",
		"ERC1155",
		"/images/nfts/0x111909961f31a025efe6df4ebce1f7125dcabc36.png"
	],
	[
		"0x7e59d50b71bc63ab76419a364069a893aae306e2",
		"MEMETIC by FRSGHTD",
		"PEPE",
		"ERC1155",
		"/images/nfts/0x7e59d50b71bc63ab76419a364069a893aae306e2.png"
	],
	[
		"0xb8064b1208d7701839110e1de05ad46079629b38",
		"BL00D PR0PH(F)1T",
		"CPUBP",
		"ERC1155",
		"/images/nfts/0xb8064b1208d7701839110e1de05ad46079629b38.png"
	],
	[
		"0x65d252ec59ccbdae0512a43c9cf3e44b3f4344ca",
		"OBEY Special Editions",
		"OBEYSE",
		"ERC1155",
		"/images/nfts/0x65d252ec59ccbdae0512a43c9cf3e44b3f4344ca.png"
	],
	[
		"0xbe1fa634fb26fbb240655a73dc1a72020fbd40ee",
		"Antpantone Editions",
		"ANT",
		"ERC1155",
		"/images/nfts/0xbe1fa634fb26fbb240655a73dc1a72020fbd40ee.png"
	],
	[
		"0xb707c324a2e60a2a4673d97ccd650166d1c33b49",
		"800 db",
		"db",
		"ERC1155",
		"/images/nfts/0xb707c324a2e60a2a4673d97ccd650166d1c33b49.png"
	],
	[
		"0x661b92926e94d170c8ac593ab09033c47120287d",
		"AnjolaDave Edition Series",
		"AnjolaDave Edition Series",
		"ERC1155",
		"/images/nfts/0x661b92926e94d170c8ac593ab09033c47120287d.png"
	],
	[
		"0xbeca5aa77c0c7671648ec1e1e4a7c9e1e066f754",
		"Faith Love's bidder editions",
		"BE",
		"ERC1155",
		"/images/nfts/0xbeca5aa77c0c7671648ec1e1e4a7c9e1e066f754.png"
	],
	[
		"0x7eac32c3702c093ec0073c77f3f5e1c26f3dd707",
		"MAD CITY",
		"ZTARE",
		"ERC1155",
		"/images/nfts/0x7eac32c3702c093ec0073c77f3f5e1c26f3dd707.png"
	],
	[
		"0x8c94b846bb90f4a1c1c77b6baca2be7be1507dab",
		"Antique by Gruff",
		"ANTQ",
		"ERC1155"
	],
	[
		"0x89abd116d9b5d69bdd9876742f3a1de1dd0a2a83",
		"KillPid Editions",
		"KillPid",
		"ERC1155",
		"/images/nfts/0x89abd116d9b5d69bdd9876742f3a1de1dd0a2a83.png"
	],
	[
		"0x151fb9eba259e7bb627e50d689f46ae92a691b3a",
		"SEIZE THE reMEMES",
		"GAME",
		"ERC1155",
		"/images/nfts/0x151fb9eba259e7bb627e50d689f46ae92a691b3a.png"
	],
	[
		"0x77bf46cdd1a1feecf9da9389f042e8be3bd2f3f1",
		"Web3 Identity Crisis",
		"IDENTITYCRISIS",
		"ERC1155",
		"/images/nfts/0x77bf46cdd1a1feecf9da9389f042e8be3bd2f3f1.png"
	],
	[
		"0x5baf83f67a0fee4748bb97786353072668fe14ba",
		"Marmottoshis",
		"WASAT",
		"ERC1155",
		"/images/nfts/0x5baf83f67a0fee4748bb97786353072668fe14ba.png"
	],
	[
		"0x0fe66e38e81dde40134454d7af433fe6ddb537d9",
		"Memeditions by Yonvisuals",
		"EBY",
		"ERC1155",
		"/images/nfts/0x0fe66e38e81dde40134454d7af433fe6ddb537d9.png"
	],
	[
		"0x66a05ddf3bd7d9ecda6914b124b7718344b2f714",
		"DEGEN SAGA",
		"DS",
		"ERC1155",
		"/images/nfts/0x66a05ddf3bd7d9ecda6914b124b7718344b2f714.png"
	],
	[
		"0x9e44b0b530d23d15194e70637748677216203507",
		"Espresso Editions by FomoKev",
		"Cafe",
		"ERC1155",
		"/images/nfts/0x9e44b0b530d23d15194e70637748677216203507.png"
	],
	[
		"0x5db8cf61292a93b413c0325c36c237c0893e1212",
		"DoggieAnimation",
		"FTDG",
		"ERC1155"
	],
	[
		"0x829db0a039c2a89a9c6d68036181b7fb105e77e0",
		"RainbowGlitch",
		"dlsq",
		"ERC1155",
		"/images/nfts/0x829db0a039c2a89a9c6d68036181b7fb105e77e0.png"
	],
	[
		"0x50297fc5c3866e04181eb166c585ae24e2986957",
		"Freedom to MEME",
		"Fmeme",
		"ERC1155",
		"/images/nfts/0x50297fc5c3866e04181eb166c585ae24e2986957.png"
	],
	[
		"0x39ae4764c2648e00ca8007f0fd3990809738fabc",
		"Before You Exist Everywhere",
		"OE",
		"ERC1155"
	],
	[
		"0x8c8ba64b3a26edc95b67a573c786a425a5f1e56c",
		"The Memes by 6969",
		"MEMES",
		"ERC1155",
		"/images/nfts/0x8c8ba64b3a26edc95b67a573c786a425a5f1e56c.png"
	],
	[
		"0xc2d35270a022829c8eea3b6a33acd096afdf65ac",
		"Nebula Gaming",
		"NEBULA",
		"ERC1155",
		"/images/nfts/0xc2d35270a022829c8eea3b6a33acd096afdf65ac.png"
	],
	[
		"0x85b42f6af6b7bc21a5330c126e978ab4f25e1229",
		"Slava3ngl Open Editions",
		"S3OE",
		"ERC1155",
		"/images/nfts/0x85b42f6af6b7bc21a5330c126e978ab4f25e1229.png"
	],
	[
		"0xb1b1c239192c5a9b823ea8171dbc166e60eeaab3",
		"punk6987 memes",
		"punk6987memes",
		"ERC1155",
		"/images/nfts/0xb1b1c239192c5a9b823ea8171dbc166e60eeaab3.png"
	],
	[
		"0xdb8886b91ba178345211ae8bfee804987e12d4f3",
		"MORTHIR: Editions",
		"MORTHIR: Editions",
		"ERC1155",
		"/images/nfts/0xdb8886b91ba178345211ae8bfee804987e12d4f3.png"
	],
	[
		"0x8864b65661a9b6d22f98aba76e1a3d7a05915931",
		"CXPet diamond hands ticket",
		"CXPet diamond hands ticket",
		"ERC1155",
		"/images/nfts/0x8864b65661a9b6d22f98aba76e1a3d7a05915931.png"
	],
	[
		"0x94119ba3479f1eef072c935e4ab97c9572d0fd5f",
		"Burnimals",
		"BURN",
		"ERC1155",
		"/images/nfts/0x94119ba3479f1eef072c935e4ab97c9572d0fd5f.png"
	],
	[
		"0x34749dc5ffa06c7dcfb80c723e7d8dc65e754933",
		"Meme Times",
		"web50",
		"ERC1155",
		"/images/nfts/0x34749dc5ffa06c7dcfb80c723e7d8dc65e754933.png"
	],
	[
		"0x9c4c633600480ac51433d0632ec62665b5fc6960",
		"Ilya Kazakov Originals",
		"Ilya Kazakov Originals",
		"ERC1155",
		"/images/nfts/0x9c4c633600480ac51433d0632ec62665b5fc6960.png"
	],
	[
		"0xe8d19e00d60ae5494695db6ba300e20011c739aa",
		"Memelette 6529",
		"ML6529",
		"ERC1155",
		"/images/nfts/0xe8d19e00d60ae5494695db6ba300e20011c739aa.png"
	],
	[
		"0x6f52a9501d119e18d577ac32af3ad0485520066f",
		"RARE SCRILLA FAKE EDITIONS",
		"TCPSR",
		"ERC1155",
		"/images/nfts/0x6f52a9501d119e18d577ac32af3ad0485520066f.png"
	],
	[
		"0x5682758f311929498fce3fde0be9311294f31631",
		"A long strange pepe",
		"pepelsd",
		"ERC1155",
		"/images/nfts/0x5682758f311929498fce3fde0be9311294f31631.png"
	],
	[
		"0xbae209bcb00d0ef2d1a6f5d3bbaa15fea5058367",
		"Viva La Vandal",
		"VLV",
		"ERC1155",
		"/images/nfts/0xbae209bcb00d0ef2d1a6f5d3bbaa15fea5058367.png"
	],
	[
		"0xdd0a3bea1fbea39c825ff214a860e42b9da6827e",
		"Jameson Editions",
		"Jameson Editions",
		"ERC1155",
		"/images/nfts/0xdd0a3bea1fbea39c825ff214a860e42b9da6827e.png"
	],
	[
		"0xeafc3b3082664b5b8b5e618ef29400c66eae1d3a",
		"Jasti Editions",
		"JSTI",
		"ERC1155",
		"/images/nfts/0xeafc3b3082664b5b8b5e618ef29400c66eae1d3a.png"
	],
	[
		"0x039bfd0320fd9459b5e1f66c00d5008692a45be3",
		"Lithograph 2023",
		"Lithograph 2023",
		"ERC1155",
		"/images/nfts/0x039bfd0320fd9459b5e1f66c00d5008692a45be3.png"
	],
	[
		"0xa154cc8e91c77429718b770bc0043b7b90c049a8",
		"PontDesArts",
		"PDA",
		"ERC1155",
		"/images/nfts/0xa154cc8e91c77429718b770bc0043b7b90c049a8.png"
	],
	[
		"0x40e245bb76999fd071b42e2ced8a0038a6c09c06",
		"Seize the Miladies!",
		"MEMLD",
		"ERC1155",
		"/images/nfts/0x40e245bb76999fd071b42e2ced8a0038a6c09c06.png"
	],
	[
		"0x01eda8bdb8a5d8758ab440b9aebc91519ac1f856",
		"TRIPTYCH CABAL",
		"TRIPTYCH CABAL",
		"ERC1155",
		"/images/nfts/0x01eda8bdb8a5d8758ab440b9aebc91519ac1f856.png"
	],
	[
		"0x97a29d39af13ce195c3ea938675bd6b6cd2637dc",
		"Stella Nova by Julien Espagnon",
		"Stella Nova by Julien Espagnon",
		"ERC1155",
		"/images/nfts/0x97a29d39af13ce195c3ea938675bd6b6cd2637dc.png"
	],
	[
		"0xd00cfa25efc0965d3743cc8879906538c4a08475",
		"Kyle Gordon  |  Editions",
		"KGED",
		"ERC1155",
		"/images/nfts/0xd00cfa25efc0965d3743cc8879906538c4a08475.png"
	],
	[
		"0xa401976af95e7f415611fb3a9b50d3a583363717",
		"NARDO EDITIONS",
		"XNED",
		"ERC1155",
		"/images/nfts/0xa401976af95e7f415611fb3a9b50d3a583363717.png"
	],
	[
		"0xfb7dc9be63e53e24b217c02c16f3952ac3546e5f",
		"Genart Memes",
		"GAM",
		"ERC1155",
		"/images/nfts/0xfb7dc9be63e53e24b217c02c16f3952ac3546e5f.png"
	],
	[
		"0xffb56dd9047d12a672f8aca1ae894338c1d55d1d",
		"socmplx free drops",
		"FREEEEE",
		"ERC1155",
		"/images/nfts/0xffb56dd9047d12a672f8aca1ae894338c1d55d1d.png"
	],
	[
		"0x11f736ef3441dff8fdef80306997b22e184c4130",
		"kodshack",
		"kodshack",
		"ERC1155",
		"/images/nfts/0x11f736ef3441dff8fdef80306997b22e184c4130.png"
	],
	[
		"0x875427563cc7e083e55f0abee7edc10f649e8e5b",
		"OSYC KEYS",
		"OSYCK",
		"ERC1155",
		"/images/nfts/0x875427563cc7e083e55f0abee7edc10f649e8e5b.png"
	],
	[
		"0xf2e09f135f23402a45196c1c7539143f31757e44",
		"Victor Mosquera Editions",
		"VMED",
		"ERC1155",
		"/images/nfts/0xf2e09f135f23402a45196c1c7539143f31757e44.png"
	],
	[
		"0xd543efa9317ad89b7027c1cd691cf1e9b241765a",
		"Aurora Editions by Godwits",
		"Aurora Editions by Godwits",
		"ERC1155",
		"/images/nfts/0xd543efa9317ad89b7027c1cd691cf1e9b241765a.png"
	],
	[
		"0x530e295f7226ebb8e8021f87ea6dcc0d52c6da29",
		"Hafftka Declaration of Independence",
		"HAFFDOI",
		"ERC1155",
		"/images/nfts/0x530e295f7226ebb8e8021f87ea6dcc0d52c6da29.png"
	],
	[
		"0xd6b1330fa985224a4f83452ff02eecd84bc11c81",
		"meme ^ rzsnn",
		"meme ^ rzsnn",
		"ERC1155",
		"/images/nfts/0xd6b1330fa985224a4f83452ff02eecd84bc11c81.png"
	],
	[
		"0x3fadfa950d7d55c0f3b38775b44179215b1dd292",
		"Lunar Zodiac",
		"LUCK",
		"ERC1155",
		"/images/nfts/0x3fadfa950d7d55c0f3b38775b44179215b1dd292.png"
	],
	[
		"0x5147026ba8059a968e9f48777ac29ab4128d6a52",
		"Crypto Curated Pass",
		"CC",
		"ERC1155",
		"/images/nfts/0x5147026ba8059a968e9f48777ac29ab4128d6a52.png"
	],
	[
		"0x10441b50552a4f2829af9b7d7ff62c907fd6cea1",
		"0xMinimalism Editions",
		"OxMinimalismEDS",
		"ERC1155",
		"/images/nfts/0x10441b50552a4f2829af9b7d7ff62c907fd6cea1.png"
	],
	[
		"0xeac23012445a33832d00360319ddc499c33fb083",
		"Realm of Xen",
		"RoXTC",
		"ERC1155",
		"/images/nfts/0xeac23012445a33832d00360319ddc499c33fb083.png"
	],
	[
		"0xc06f4618af814055bd17446b77cd80a92f75cb0c",
		"Arctoken and Drops",
		"ARCED",
		"ERC1155",
		"/images/nfts/0xc06f4618af814055bd17446b77cd80a92f75cb0c.png"
	],
	[
		"0x232765be70a5f0b49e2d72eee9765813894c1fc4",
		"&Extensions",
		"EXT",
		"ERC1155",
		"/images/nfts/0x232765be70a5f0b49e2d72eee9765813894c1fc4.png"
	],
	[
		"0xb4b86e9b5fee9e0dbfd22f7361424a0429cc00bd",
		"Year Of The Lucky Rabbits",
		"RBBTS",
		"ERC1155",
		"/images/nfts/0xb4b86e9b5fee9e0dbfd22f7361424a0429cc00bd.png"
	],
	[
		"0xcce9a5b4fff39a7b05a1e67b4cccbaa6a5bbfaa2",
		"PAM genesis",
		"PAM",
		"ERC1155",
		"/images/nfts/0xcce9a5b4fff39a7b05a1e67b4cccbaa6a5bbfaa2.png"
	],
	[
		"0xe1ccc7a53eb3d85936074a33266d40cf1addc96b",
		"PSYCHOE2023",
		"PSYCH",
		"ERC1155"
	],
	[
		"0x34ab36a14415a6ac8c7ba281b83a28dd7069997d",
		"Lacquer Shapes (LS 01 - LS 20) // Verse 2023 // - by Anna Beller",
		"Lacquer Shapes (LS 01 - LS 20) // Verse 2023 // - by Anna Beller",
		"ERC1155",
		"/images/nfts/0x34ab36a14415a6ac8c7ba281b83a28dd7069997d.png"
	],
	[
		"0x1173aaa804ae6065c24c2f373eefd3f9ad4eed95",
		"Hiroto Kai - Editions",
		"HKE",
		"ERC1155",
		"/images/nfts/0x1173aaa804ae6065c24c2f373eefd3f9ad4eed95.png"
	],
	[
		"0x60f95e81408a974dd35aad8b504862b290d0ed5f",
		"DZ combustibles",
		"DZCMBST",
		"ERC1155",
		"/images/nfts/0x60f95e81408a974dd35aad8b504862b290d0ed5f.png"
	],
	[
		"0xb1ffc5b1be610c871034999be34b903e73fc7f35",
		"HISTORIC MEMEZ",
		"TROMP",
		"ERC1155",
		"/images/nfts/0xb1ffc5b1be610c871034999be34b903e73fc7f35.png"
	],
	[
		"0x3b0daea2634f111dba1344768d34e15ffea8b81f",
		"de-gents/ editions by 1.618/",
		"degentsE",
		"ERC1155",
		"/images/nfts/0x3b0daea2634f111dba1344768d34e15ffea8b81f.png"
	],
	[
		"0x27d6f7898c0399c19358b55941900a0c87d52f99",
		"Ultra Spawns",
		"Ultra Spawns",
		"ERC1155",
		"/images/nfts/0x27d6f7898c0399c19358b55941900a0c87d52f99.png"
	],
	[
		"0xc6634919514c6326d774d3de1ddcbf3463615765",
		"Capi Editions",
		"RPepesOE",
		"ERC1155",
		"/images/nfts/0xc6634919514c6326d774d3de1ddcbf3463615765.png"
	],
	[
		"0x60909c604b9457209429cbe426a1306a725f600f",
		"SarahScript Editions",
		"SFR",
		"ERC1155",
		"/images/nfts/0x60909c604b9457209429cbe426a1306a725f600f.png"
	],
	[
		"0x02ddfc164f943130888fb736663985749f079128",
		"SireDontPlay - Probably Yuki & Bobu",
		"SIRE",
		"ERC1155",
		"/images/nfts/0x02ddfc164f943130888fb736663985749f079128.png"
	],
	[
		"0xf1c1e550e0753551008481cf59f4b792bbd9ead5",
		"Rug Radio Editions",
		"RRE",
		"ERC1155",
		"/images/nfts/0xf1c1e550e0753551008481cf59f4b792bbd9ead5.png"
	],
	[
		"0x0044788e0f3829a882c77f012a7924651fa64f4a",
		"SDTHKO: Abstract Abscession",
		"SDKAA",
		"ERC1155",
		"/images/nfts/0x0044788e0f3829a882c77f012a7924651fa64f4a.png"
	],
	[
		"0x825c12d0582da7ab9c4fda28b9e896edd76abed0",
		"LibrariumEditions",
		"LBRED",
		"ERC1155",
		"/images/nfts/0x825c12d0582da7ab9c4fda28b9e896edd76abed0.png"
	],
	[
		"0xfe880206214856f984d4f64fc89c26681dca15a2",
		"The Lost Peperium Pepes",
		"The Lost Peperium Pepes",
		"ERC1155",
		"/images/nfts/0xfe880206214856f984d4f64fc89c26681dca15a2.png"
	],
	[
		"0xdd5f8b6f5fe724bb6a571237df525563c77456d2",
		"://MANY-FOLD",
		"MFD",
		"ERC1155",
		"/images/nfts/0xdd5f8b6f5fe724bb6a571237df525563c77456d2.png"
	],
	[
		"0x4813db80aa586b46c76e0e1d3b9615b1dcf4d310",
		"Imaginarium Studios Whitelist Coin - old",
		"Imaginarium Studios Whitelist Coin",
		"ERC1155",
		"/images/nfts/0x4813db80aa586b46c76e0e1d3b9615b1dcf4d310.png"
	],
	[
		"0x0e31fe807eff9b2ef07cdde1bf86ac4a7ca2da89",
		"Seeds - Isekai Battle",
		"SED",
		"ERC1155",
		"/images/nfts/0x0e31fe807eff9b2ef07cdde1bf86ac4a7ca2da89.png"
	],
	[
		"0xaf4dd8dcea920ae611d0bed9481814be8ce68c1e",
		"OSYC KEY",
		"OSYCKEY",
		"ERC1155",
		"/images/nfts/0xaf4dd8dcea920ae611d0bed9481814be8ce68c1e.png"
	],
	[
		"0x34670b9ef5a245f136eacaa19ac7490abbeb86ae",
		"Holy Fuck Tree: Sticks",
		"STICK",
		"ERC1155"
	],
	[
		"0xd186d175de3a17cd0cf581569419247c4197196e",
		"Kung Editions",
		"KKGE",
		"ERC1155",
		"/images/nfts/0xd186d175de3a17cd0cf581569419247c4197196e.png"
	],
	[
		"0x286e531f363768fed5e18b468f5b76a9ffc33af5",
		"Nyan Balloon",
		"NyanBall",
		"ERC1155",
		"/images/nfts/0x286e531f363768fed5e18b468f5b76a9ffc33af5.png"
	],
	[
		"0xfa2ed7ff5f59d4c715d4c5021037d93bc86dcd6c",
		"I brought you this",
		"I brought you this",
		"ERC1155",
		"/images/nfts/0xfa2ed7ff5f59d4c715d4c5021037d93bc86dcd6c.png"
	],
	[
		"0x2bfc5dd63d809e529a0f8809b90ea4004e9a568b",
		"SMOLEDITION",
		"SMLD",
		"ERC1155",
		"/images/nfts/0x2bfc5dd63d809e529a0f8809b90ea4004e9a568b.png"
	],
	[
		"0x396148e24a2ea4d093cfdbae88174e1944cb4c69",
		"Kinx V3",
		"KINX",
		"ERC1155",
		"/images/nfts/0x396148e24a2ea4d093cfdbae88174e1944cb4c69.png"
	],
	[
		"0x7277b0b561329491432c93a227547d5f125184ce",
		"1 Year Anniversary Mint",
		"1 Year Anniversary Mint",
		"ERC1155",
		"/images/nfts/0x7277b0b561329491432c93a227547d5f125184ce.png"
	],
	[
		"0xba7e446d453ed66cf3f1c5c5c437337548e6bd65",
		"Elnaris Phoenix - Adventure",
		"Elnaris Phoenix - Adventure",
		"ERC1155",
		"/images/nfts/0xba7e446d453ed66cf3f1c5c5c437337548e6bd65.png"
	],
	[
		"0x4eb92dcfd130e70989f7277f0a2aa94adaec7d50",
		"DO NOT TRADE - YEYE OLD Collection",
		"DO NOT TRADE - YEYE OLD Collection",
		"ERC1155",
		"/images/nfts/0x4eb92dcfd130e70989f7277f0a2aa94adaec7d50.png"
	],
	[
		"0xc986ae7188f78a756f2ae1d6e84641f90b644b80",
		"PHEMES",
		"PHEMES",
		"ERC1155",
		"/images/nfts/0xc986ae7188f78a756f2ae1d6e84641f90b644b80.png"
	],
	[
		"0x460adcc0c92ebf1f911d85819632d1efe79278da",
		"Obscure Project",
		"Obscure Project",
		"ERC1155",
		"/images/nfts/0x460adcc0c92ebf1f911d85819632d1efe79278da.png"
	],
	[
		"0x3326ac752a38701dbe4dd2ed2215b2f83e9041fd",
		"Ashes of Phoenix",
		"Ashes of Phoenix",
		"ERC1155",
		"/images/nfts/0x3326ac752a38701dbe4dd2ed2215b2f83e9041fd.png"
	],
	[
		"0xfaf8f2c1428adb9f007d652759b2d8da406e54af",
		"0X830 Editions: Season 1",
		"NDMEDITIONS",
		"ERC1155",
		"/images/nfts/0xfaf8f2c1428adb9f007d652759b2d8da406e54af.png"
	],
	[
		"0xb31c765d23d3889709b76b70a372cfe2fb3260cc",
		"ESS33NTIALS 3DITIONS",
		"ES3NTLS",
		"ERC1155",
		"/images/nfts/0xb31c765d23d3889709b76b70a372cfe2fb3260cc.png"
	],
	[
		"0x9a9e3e69275dcdf00018ab2d6a2192ce8fad7b96",
		"Stalmi 500 followers celebration",
		"Stlm1",
		"ERC1155"
	],
	[
		"0xe1fcd7a618ebb87884bf8ca098ed1f19b51b0791",
		"Minting My First NFT",
		"Minting My First NFT",
		"ERC1155",
		"/images/nfts/0xe1fcd7a618ebb87884bf8ca098ed1f19b51b0791.png"
	],
	[
		"0xf360801456e5b9f01392da22be540af70790fb19",
		"T.I.BOINE editions",
		"BOINE",
		"ERC1155",
		"/images/nfts/0xf360801456e5b9f01392da22be540af70790fb19.png"
	],
	[
		"0x277f448a4d43318ea626fd224b3bf77295387d68",
		"STM!",
		"STM",
		"ERC1155",
		"/images/nfts/0x277f448a4d43318ea626fd224b3bf77295387d68.png"
	],
	[
		"0x69c1321dff1480d0b27db8f9f0d9301c60734774",
		"KiraCorp Supply Crate",
		"KiraCorp Supply Crate",
		"ERC1155",
		"/images/nfts/0x69c1321dff1480d0b27db8f9f0d9301c60734774.png"
	],
	[
		"0xb05030685ef28743459f8e7ef413d62ca6e7463a",
		"Counterfeit Pepes",
		"NOTAPEPE",
		"ERC1155",
		"/images/nfts/0xb05030685ef28743459f8e7ef413d62ca6e7463a.png"
	],
	[
		"0x490c2e0d1917daed0c21cf5f80d8e0a125d1e237",
		"DaRivativ3s - Editions",
		"DaRivativ3s - Editions",
		"ERC1155"
	],
	[
		"0xd563272eea17f8ce929171c2ba62b1c7fb4756ae",
		"MikeGrillMadeIt",
		"MikeGrillMadeIt",
		"ERC1155",
		"/images/nfts/0xd563272eea17f8ce929171c2ba62b1c7fb4756ae.png"
	],
	[
		"0x3abea912123b824170bf9edf6f68531958aed2b7",
		"Cryptopainter 2022/23 collection",
		"Cryptopainter 2022/23 collection",
		"ERC1155",
		"/images/nfts/0x3abea912123b824170bf9edf6f68531958aed2b7.png"
	],
	[
		"0x3f03185dba63aceb36edde6c201908a69f1943f5",
		"what is real? Editions",
		"what is real? Editions",
		"ERC1155",
		"/images/nfts/0x3f03185dba63aceb36edde6c201908a69f1943f5.png"
	],
	[
		"0x33da607fe4bb1ce6e6379dba5145c9401cdf3d3e",
		"X51991",
		"X51991",
		"ERC1155",
		"/images/nfts/0x33da607fe4bb1ce6e6379dba5145c9401cdf3d3e.png"
	],
	[
		"0x41c09f15e510e66cffbc9cc439cfe950870f969c",
		"TeamBreakThru x MetaHype - OpenEdition",
		"TBTMHOE",
		"ERC1155",
		"/images/nfts/0x41c09f15e510e66cffbc9cc439cfe950870f969c.png"
	],
	[
		"0xe77ad290adab2989a81ae62ab2467c01b45feeff",
		"Proceed w/ Caution",
		"PWC",
		"ERC1155",
		"/images/nfts/0xe77ad290adab2989a81ae62ab2467c01b45feeff.png"
	],
	[
		"0xe1f26e660fc4794196e2559b1c6a46a3fcbcb335",
		"BYOCASSETTES X LOSTBOY",
		"BYOCASSETTE",
		"ERC1155",
		"/images/nfts/0xe1f26e660fc4794196e2559b1c6a46a3fcbcb335.png"
	],
	[
		"0xf29394c4763c524e751a5bad167e84b3b49058b9",
		"Editions, one of none",
		"MEOW",
		"ERC1155",
		"/images/nfts/0xf29394c4763c524e751a5bad167e84b3b49058b9.png"
	],
	[
		"0x84b453e5db990d681564fb9bdf8e392daf5e74fd",
		"MULTI LOOT",
		"MTLT",
		"ERC1155",
		"/images/nfts/0x84b453e5db990d681564fb9bdf8e392daf5e74fd.png"
	],
	[
		"0x68845789bc7c2e2a4bd6e7b22a529a2110cc99ae",
		"Dollar Meme Shop",
		"USDMeme",
		"ERC1155",
		"/images/nfts/0x68845789bc7c2e2a4bd6e7b22a529a2110cc99ae.png"
	],
	[
		"0x2dbdfc04ac6136c23c5c8a7c000b8dd175d75f71",
		"Dark Factor XYZ",
		"MST",
		"ERC1155",
		"/images/nfts/0x2dbdfc04ac6136c23c5c8a7c000b8dd175d75f71.png"
	],
	[
		"0x4c0466797585e34a31c152ed275d7cb309ba92a4",
		"Jack Maschka Editions",
		"JAME",
		"ERC1155",
		"/images/nfts/0x4c0466797585e34a31c152ed275d7cb309ba92a4.png"
	],
	[
		"0xd64e0cad7c93a17b33269ab297098328d09871e4",
		"Trap's Minimal Abstract",
		"SXD",
		"ERC1155",
		"/images/nfts/0xd64e0cad7c93a17b33269ab297098328d09871e4.png"
	],
	[
		"0x9d6d52e55dc9f52d235ab0bd273087339faafb07",
		"RGB Degenerative",
		"RGB",
		"ERC1155",
		"/images/nfts/0x9d6d52e55dc9f52d235ab0bd273087339faafb07.png"
	],
	[
		"0x073800c94f22c905e16fd8429d2f542630ae0be3",
		"Krahe Trinkets",
		"Krahe",
		"ERC1155",
		"/images/nfts/0x073800c94f22c905e16fd8429d2f542630ae0be3.png"
	],
	[
		"0x26b680955bbfb00dc89ac1bbbbff36b6d0e16198",
		"GLITCH DEALS by rust",
		"GLD",
		"ERC1155",
		"/images/nfts/0x26b680955bbfb00dc89ac1bbbbff36b6d0e16198.png"
	],
	[
		"0xfe28bee1b6e9fb5d8ee01b62a9611579f226575c",
		"carpe diem 00002",
		"CB",
		"ERC1155",
		"/images/nfts/0xfe28bee1b6e9fb5d8ee01b62a9611579f226575c.png"
	],
	[
		"0xdbec3834efb2d7a2abb1ec3858cc05262da2d75a",
		"yogiK Private Access",
		"YKCLCT",
		"ERC1155",
		"/images/nfts/0xdbec3834efb2d7a2abb1ec3858cc05262da2d75a.png"
	],
	[
		"0xa91a8e099e8a9e892c6761e0c56246a89c9a4e50",
		"3DPepes",
		"SBNS",
		"ERC1155",
		"/images/nfts/0xa91a8e099e8a9e892c6761e0c56246a89c9a4e50.png"
	],
	[
		"0xfa681d6ee26fc1974cf1f251b3df538c5acb7b85",
		"Showdeer Editions",
		"SHWII",
		"ERC1155",
		"/images/nfts/0xfa681d6ee26fc1974cf1f251b3df538c5acb7b85.png"
	],
	[
		"0x5788bbdca05ce736ebcf1eafbb2a224eb8f35cef",
		"Guil's Studio",
		"GUIL",
		"ERC1155",
		"/images/nfts/0x5788bbdca05ce736ebcf1eafbb2a224eb8f35cef.png"
	],
	[
		"0xf123bbb9149e298a2ee6211c3bb5fa5ed109120a",
		"Gravity Keeps Me Around",
		"KA01",
		"ERC1155"
	],
	[
		"0x4c0f5fdaa165b2f6a012f8439f42a29c75fb9f0f",
		"Investor0x",
		"INV0x",
		"ERC1155",
		"/images/nfts/0x4c0f5fdaa165b2f6a012f8439f42a29c75fb9f0f.png"
	],
	[
		"0xfae57936702a445a91efb5fa1274e7b5f43ec641",
		"Old Peperium Wrapper",
		"Old Peperium Wrapper",
		"ERC1155",
		"/images/nfts/0xfae57936702a445a91efb5fa1274e7b5f43ec641.png"
	],
	[
		"0xca1cbe8a0499a34c28d0b35bc62dec71a74c98ea",
		"carpe diem 00001",
		"CB",
		"ERC1155",
		"/images/nfts/0xca1cbe8a0499a34c28d0b35bc62dec71a74c98ea.png"
	],
	[
		"0xfff3e6ec3336f4fc44af1717a5e4de3d577a3d57",
		"frz Editions",
		"MakeAChoice",
		"ERC1155",
		"/images/nfts/0xfff3e6ec3336f4fc44af1717a5e4de3d577a3d57.png"
	],
	[
		"0x3318d287bc2085442e791a1658c370092dedb66d",
		"Unidentified contract - gA946kdGva",
		"Unidentified contract - gA946kdGva",
		"ERC1155"
	],
	[
		"0x274a508ea3fc3cf4cd9361495e88667c98548107",
		"Editions by Nafay",
		"Editions by Nafay",
		"ERC1155",
		"/images/nfts/0x274a508ea3fc3cf4cd9361495e88667c98548107.png"
	],
	[
		"0x9ab9996a001b66fa0bda9f2fdeb5c433776d3684",
		"Commuter2.0",
		"CMTR2",
		"ERC1155",
		"/images/nfts/0x9ab9996a001b66fa0bda9f2fdeb5c433776d3684.png"
	],
	[
		"0x8ef0347cdcf7a3c62ea477324dff3ac8181f866d",
		"House of Strauss",
		"House of Strauss",
		"ERC1155",
		"/images/nfts/0x8ef0347cdcf7a3c62ea477324dff3ac8181f866d.png"
	],
	[
		"0xe4d89490b782b67d73253519415cb001ca6a148f",
		"MLK DAY NFTs",
		"MLK",
		"ERC1155",
		"/images/nfts/0xe4d89490b782b67d73253519415cb001ca6a148f.png"
	],
	[
		"0x14ea54e4463251dec9ff0740ec2e70a088b10d60",
		"The Memes by 6529 Rememed by CONLON",
		"rms",
		"ERC1155",
		"/images/nfts/0x14ea54e4463251dec9ff0740ec2e70a088b10d60.png"
	],
	[
		"0x11b1b42bb45718c9c3e7d2be5fea8f2c7e6639b4",
		"Unidentified contract - 1zXXRSLWi4 - old",
		"Unidentified contract - 1zXXRSLWi4 - old",
		"ERC1155"
	],
	[
		"0x95bc9d06425c0cd9f62013102f953eb6e319c4d0",
		"MARTINSLIDE EDITION",
		"MSDE",
		"ERC1155",
		"/images/nfts/0x95bc9d06425c0cd9f62013102f953eb6e319c4d0.png"
	],
	[
		"0x4bf7461b6219d055f517f5c82762436251a7db03",
		"Michael Kutsche Editions",
		"MK",
		"ERC1155",
		"/images/nfts/0x4bf7461b6219d055f517f5c82762436251a7db03.png"
	],
	[
		"0xb9e4f519e5309033e599c20a782503762cbf9cfa",
		"The Art of Kanizay",
		"BKAN",
		"ERC1155",
		"/images/nfts/0xb9e4f519e5309033e599c20a782503762cbf9cfa.png"
	],
	[
		"0xd25557e4a69765ea2c02b69b7976e1b91b8a2822",
		"Memes by PePe SB",
		"MBPP",
		"ERC1155",
		"/images/nfts/0xd25557e4a69765ea2c02b69b7976e1b91b8a2822.png"
	],
	[
		"0xfafd31812b147edb7ca85a501665dee364350155",
		"Color Coated Artifacts",
		"ADAMT",
		"ERC1155",
		"/images/nfts/0xfafd31812b147edb7ca85a501665dee364350155.png"
	],
	[
		"0xfb139f4a23e6894e5ffc55b71f9cbccc3295d25f",
		"Birthday Cake!",
		"TLD",
		"ERC1155",
		"/images/nfts/0xfb139f4a23e6894e5ffc55b71f9cbccc3295d25f.png"
	],
	[
		"0x8b1dccbb289382381c90e1cf856aec3e8a725812",
		"A RED Story",
		"RED",
		"ERC1155",
		"/images/nfts/0x8b1dccbb289382381c90e1cf856aec3e8a725812.png"
	],
	[
		"0x9b9c0d73d4eeb9dbe9b3e7ecebad9066288aa3cf",
		"Groove Rooms by yogiK",
		"GVRM",
		"ERC1155",
		"/images/nfts/0x9b9c0d73d4eeb9dbe9b3e7ecebad9066288aa3cf.png"
	],
	[
		"0x3a78bc59fb72674384443eae0df375874dc8ccaa",
		"DripEditions",
		"DRPX",
		"ERC1155",
		"/images/nfts/0x3a78bc59fb72674384443eae0df375874dc8ccaa.png"
	],
	[
		"0xaa41eb6404da0e1375e5e78e300086b09c175bec",
		"MyCryptoIsland",
		"MYCI",
		"ERC1155",
		"/images/nfts/0xaa41eb6404da0e1375e5e78e300086b09c175bec.png"
	],
	[
		"0x731de337510e90c3d3c87372c504d5998e8cb9fe",
		"Bad Dog Social Club",
		"BDSC",
		"ERC1155",
		"/images/nfts/0x731de337510e90c3d3c87372c504d5998e8cb9fe.png"
	],
	[
		"0xcaf94eb06d4de233c45b353723c387d3e440f3d6",
		"My Keyboard",
		"MKB",
		"ERC1155",
		"/images/nfts/0xcaf94eb06d4de233c45b353723c387d3e440f3d6.png"
	],
	[
		"0x0652f6d4e01873b779a9250378bc5a330049d633",
		"HEAVENS TOOLS 8 BALL",
		"8ball",
		"ERC1155"
	],
	[
		"0x3a19f099fc1db7eefd697e6ec40304729c98a9b8",
		"HOWL.",
		"HOWL.",
		"ERC1155",
		"/images/nfts/0x3a19f099fc1db7eefd697e6ec40304729c98a9b8.png"
	],
	[
		"0x0e64f1665b86bf3579148321d31cd7fde44cbc0d",
		"Vibes & Times",
		"VIBES",
		"ERC1155",
		"/images/nfts/0x0e64f1665b86bf3579148321d31cd7fde44cbc0d.png"
	],
	[
		"0x9ef742b52d8af3056db286bb133925b7565ecc68",
		"Phenomenon Editions",
		"Ph",
		"ERC1155",
		"/images/nfts/0x9ef742b52d8af3056db286bb133925b7565ecc68.png"
	],
	[
		"0xbf2a7a4d3be1415fca9fd0b6d6f2b9df474b9c0f",
		"Found Abe Supporter",
		"Found Abe Supporter",
		"ERC1155",
		"/images/nfts/0xbf2a7a4d3be1415fca9fd0b6d6f2b9df474b9c0f.png"
	],
	[
		"0x29d4c251402ebcd38a91f7e349503a5b33df6438",
		"THE PSYCHO KIDS EDITIONS",
		"PSYKS",
		"ERC1155",
		"/images/nfts/0x29d4c251402ebcd38a91f7e349503a5b33df6438.png"
	],
	[
		"0xacbd6089ac5d2de7f49b53269416dbaea4da9f27",
		"Zoo of Neural Automata",
		"ZoNA",
		"ERC1155",
		"/images/nfts/0xacbd6089ac5d2de7f49b53269416dbaea4da9f27.png"
	],
	[
		"0xa14cf62756fc22816cf0b2fe92df7b0871e03196",
		"[LC PASS]",
		"pass",
		"ERC1155",
		"/images/nfts/0xa14cf62756fc22816cf0b2fe92df7b0871e03196.png"
	],
	[
		"0x2b08eb8440481946298ba9deda1ba836edd19524",
		"Burka Bayram",
		"BURKA",
		"ERC1155",
		"/images/nfts/0x2b08eb8440481946298ba9deda1ba836edd19524.png"
	],
	[
		"0x2e251bff6c091a1752e1f9983882f7ade82535da",
		"Ceci n'est pas un Botto",
		"Ceci n'est pas un Botto",
		"ERC1155",
		"/images/nfts/0x2e251bff6c091a1752e1f9983882f7ade82535da.png"
	],
	[
		"0xc4cd36ac7fd69b58bed0be0a6f439129148beddd",
		"n0cturn editions",
		"n0e",
		"ERC1155",
		"/images/nfts/0xc4cd36ac7fd69b58bed0be0a6f439129148beddd.png"
	],
	[
		"0x56b169c0f63d392dfd743e22bd9da4f6a8098372",
		"W Ticket",
		"W",
		"ERC1155",
		"/images/nfts/0x56b169c0f63d392dfd743e22bd9da4f6a8098372.png"
	],
	[
		"0x571af995700f96ee062d026bee4566c786803192",
		"MrReier",
		"MrReier",
		"ERC1155",
		"/images/nfts/0x571af995700f96ee062d026bee4566c786803192.png"
	],
	[
		"0xa4dfe0723ab2a481048371de82f0d6a792d667d2",
		"OzDAO",
		"OZ",
		"ERC1155",
		"/images/nfts/0xa4dfe0723ab2a481048371de82f0d6a792d667d2.png"
	],
	[
		"0x5c1e0c1c968b25ff0f8ec6fd6d79ba99b6ffc4c6",
		"The Factory (Burn Token)",
		"TFac",
		"ERC1155",
		"/images/nfts/0x5c1e0c1c968b25ff0f8ec6fd6d79ba99b6ffc4c6.png"
	],
	[
		"0x39bce03ac7c928e34d0e5a1a6aea3154e2ff5086",
		"Endless SHZZM",
		"Love",
		"ERC1155",
		"/images/nfts/0x39bce03ac7c928e34d0e5a1a6aea3154e2ff5086.png"
	],
	[
		"0x84b9ba5c534d0946e1c51e167cbed21a2fc85dfe",
		"FLOATING HOUSE by TOMMY",
		"TOMMY",
		"ERC1155",
		"/images/nfts/0x84b9ba5c534d0946e1c51e167cbed21a2fc85dfe.png"
	],
	[
		"0xf1b1c4a697362d898863a2ef80e6ab6ebf93aa2f",
		"Roomscapes Editions by MiraRuido",
		"MIRA",
		"ERC1155",
		"/images/nfts/0xf1b1c4a697362d898863a2ef80e6ab6ebf93aa2f.png"
	],
	[
		"0x6ddc958b852f9fccdb760623001549cfd75d4b42",
		"0x0labs",
		"LABS",
		"ERC1155"
	],
	[
		"0x725d65151f5285b48252a5d00b11a0dbe4f01611",
		"Ivich Edition",
		"IVE",
		"ERC1155"
	],
	[
		"0xc9152cde98420fbe297c3952adc01b90e31ee0aa",
		"Morgan Heritage Digital Collectibles",
		"MHDC",
		"ERC1155",
		"/images/nfts/0xc9152cde98420fbe297c3952adc01b90e31ee0aa.png"
	],
	[
		"0x0313eabc68764a5fd0fc0e3666e8309610d9d400",
		"Samurices Keys of the Apprentice",
		"Samurices Keys of the Apprentice",
		"ERC1155",
		"/images/nfts/0x0313eabc68764a5fd0fc0e3666e8309610d9d400.png"
	],
	[
		"0x0e4022a466b03b06e7acf571e3001fe43c9b51ee",
		"ha$hy editions v2",
		"EditionsV2",
		"ERC1155",
		"/images/nfts/0x0e4022a466b03b06e7acf571e3001fe43c9b51ee.png"
	],
	[
		"0xf87fd39ebd15e011aa3cc58c0871a875696954aa",
		"Mr.Brian Design | Editions",
		"Mr.Brian Design | Editions",
		"ERC1155",
		"/images/nfts/0xf87fd39ebd15e011aa3cc58c0871a875696954aa.png"
	],
	[
		"0xf4c522e1d2eb165838609c1eee606eb0a0578638",
		"VNUTERNING's Editions",
		"VNT",
		"ERC1155",
		"/images/nfts/0xf4c522e1d2eb165838609c1eee606eb0a0578638.png"
	],
	[
		"0xe202440fcfdf4b486d3d73e35dc3f7120ba1a39d",
		"FF Art",
		"FF Art",
		"ERC1155",
		"/images/nfts/0xe202440fcfdf4b486d3d73e35dc3f7120ba1a39d.png"
	],
	[
		"0x427d3e4c506520b382752e20022b0f1ea90463f5",
		"makeitrad || editions",
		"rade",
		"ERC1155",
		"/images/nfts/0x427d3e4c506520b382752e20022b0f1ea90463f5.png"
	],
	[
		"0xc259cf10b6e645a5b8693e9abb2cad4413b76bfd",
		"Bruh Pills Holidays",
		"Bruh_holidays",
		"ERC1155"
	],
	[
		"0x5f0d00ba0a116b192aaf67aae6eff928dcfc942a",
		"MonkiPlay",
		"MONKIP",
		"ERC1155",
		"/images/nfts/0x5f0d00ba0a116b192aaf67aae6eff928dcfc942a.png"
	],
	[
		"0x94c11d3afe1bb4f99c47f9e792968099fbcb992c",
		"cash grab by 0x0",
		"CASH",
		"ERC1155",
		"/images/nfts/0x94c11d3afe1bb4f99c47f9e792968099fbcb992c.png"
	],
	[
		"0x135601e39bac34530bf986d317b98b006346965d",
		"REDACTED",
		"AMB",
		"ERC1155",
		"/images/nfts/0x135601e39bac34530bf986d317b98b006346965d.png"
	],
	[
		"0x63dc098220c912ec4312dcdd61bcf963bd80e0f8",
		"DEDPRZ",
		"DEDPRZ",
		"ERC1155",
		"/images/nfts/0x63dc098220c912ec4312dcdd61bcf963bd80e0f8.png"
	],
	[
		"0x0fbfbdbb71f43731cfd82c290096cde82a85eb65",
		"FUN TICKETS",
		"FUN",
		"ERC1155",
		"/images/nfts/0x0fbfbdbb71f43731cfd82c290096cde82a85eb65.png"
	],
	[
		"0x171dba8a30264796195854e50026a04d351296c0",
		"Cody A Banks Editions",
		"CAB",
		"ERC1155",
		"/images/nfts/0x171dba8a30264796195854e50026a04d351296c0.png"
	],
	[
		"0x20808067df21f89f3ec833a600dfba092da6f9d5",
		"Hot Lips on Fire",
		"HLFR",
		"ERC1155",
		"/images/nfts/0x20808067df21f89f3ec833a600dfba092da6f9d5.png"
	],
	[
		"0x1ee31e7beb3047f7cc2b10178a7b969b0493ef27",
		"Evan Hilton Editions",
		"EHEditions",
		"ERC1155",
		"/images/nfts/0x1ee31e7beb3047f7cc2b10178a7b969b0493ef27.png"
	],
	[
		"0xa23bc9dcd833d90de788c77a828fcf3e1c453757",
		"Patterns of Life (AI Stories)",
		"lifepatterns",
		"ERC1155",
		"/images/nfts/0xa23bc9dcd833d90de788c77a828fcf3e1c453757.png"
	],
	[
		"0xc394fc602861a9764c051420250b89771d2bd0b1",
		"MfersCard OG",
		"MFCD",
		"ERC1155",
		"/images/nfts/0xc394fc602861a9764c051420250b89771d2bd0b1.png"
	],
	[
		"0x16d43aeabb3205e36fbc7d3a2bf148876f9ef350",
		"flashrekt editions",
		"rekt",
		"ERC1155",
		"/images/nfts/0x16d43aeabb3205e36fbc7d3a2bf148876f9ef350.png"
	],
	[
		"0x5ba8f77b3a183cce85740291a0cacdeca4e960d8",
		"Xick Code",
		"XICKCODE",
		"ERC1155",
		"/images/nfts/0x5ba8f77b3a183cce85740291a0cacdeca4e960d8.png"
	],
	[
		"0xbe2212068ad567c4b3482bc127cf8e9279aea82f",
		"We Do A Little Grails",
		"We Do A Little Grails",
		"ERC1155",
		"/images/nfts/0xbe2212068ad567c4b3482bc127cf8e9279aea82f.png"
	],
	[
		"0xb2b75f4ef23781af50f8e7ca26302e9aea7d3a80",
		"Bill Murray 1000: Events",
		"BME",
		"ERC1155",
		"/images/nfts/0xb2b75f4ef23781af50f8e7ca26302e9aea7d3a80.png"
	],
	[
		"0x89141b1efb76b1b1fedcf17bc45f126789c10d54",
		"avril15 discord.1000",
		"d1000",
		"ERC1155",
		"/images/nfts/0x89141b1efb76b1b1fedcf17bc45f126789c10d54.png"
	],
	[
		"0x5a8813142a4623f00a5450a8668c11bd80a208cb",
		"Rifters: Companions",
		"RiftersCompanions",
		"ERC1155",
		"/images/nfts/0x5a8813142a4623f00a5450a8668c11bd80a208cb.png"
	],
	[
		"0x5da6cf89fe2675d77a6fc7ff760896e60a0b00fc",
		"VSP Playoff Football Competition",
		"VSPFB",
		"ERC1155",
		"/images/nfts/0x5da6cf89fe2675d77a6fc7ff760896e60a0b00fc.png"
	],
	[
		"0x12a313991abb4c5c5568282fdfa0bb2f1063297b",
		"Amber Vittoria - Timed Editions",
		"AVTD",
		"ERC1155",
		"/images/nfts/0x12a313991abb4c5c5568282fdfa0bb2f1063297b.png"
	],
	[
		"0x1dee95a460c23c09e55ae456e80a91ee9c0731f4",
		"Fordenad Editions",
		"FRDND",
		"ERC1155",
		"/images/nfts/0x1dee95a460c23c09e55ae456e80a91ee9c0731f4.png"
	],
	[
		"0xd2e0067d17d06afd3b9052b395f6307e47e9ee8a",
		"Brandon James Scott Editions",
		"BRANDONJSED",
		"ERC1155",
		"/images/nfts/0xd2e0067d17d06afd3b9052b395f6307e47e9ee8a.png"
	],
	[
		"0x2e53230ad61c20db03f7232c881d24202ac19978",
		"Mint Marketplace Gallery",
		"Mint Marketplace Gallery",
		"ERC1155",
		"/images/nfts/0x2e53230ad61c20db03f7232c881d24202ac19978.png"
	],
	[
		"0x357b2734cb499e8979402d56ce3984c87fc3a6e7",
		"GMGMGMGM",
		"GM",
		"ERC1155",
		"/images/nfts/0x357b2734cb499e8979402d56ce3984c87fc3a6e7.png"
	],
	[
		"0xf37cb20090057bdc70b928b7f91d081d412cfe5c",
		"Rifters: Outlanders",
		"RiftersOutlanders",
		"ERC1155",
		"/images/nfts/0xf37cb20090057bdc70b928b7f91d081d412cfe5c.png"
	],
	[
		"0x819d965d8e0a1d9852e805dec073084bd3c5637f",
		"CryptoDrinks™",
		"$DRINK",
		"ERC1155",
		"/images/nfts/0x819d965d8e0a1d9852e805dec073084bd3c5637f.png"
	],
	[
		"0x4fb5fd0dc795104b040edf8a91d4876dffc50460",
		"Audio Galleries",
		"BW",
		"ERC1155",
		"/images/nfts/0x4fb5fd0dc795104b040edf8a91d4876dffc50460.png"
	],
	[
		"0xb7532cf6b31e89a21e94a6d0e294d460aea4bc28",
		"ShibaDoge Labs",
		"ShibaDoge Labs",
		"ERC1155",
		"/images/nfts/0xb7532cf6b31e89a21e94a6d0e294d460aea4bc28.png"
	],
	[
		"0xf55a30c9f8a7e8af977b217d65cc780b44df8273",
		"Kibatsu Bots",
		"KBOT",
		"ERC1155",
		"/images/nfts/0xf55a30c9f8a7e8af977b217d65cc780b44df8273.png"
	],
	[
		"0x241829651f05674ccd2f0c9ce24099c54ecf58d5",
		"This is not a work of art.",
		"NART",
		"ERC1155",
		"/images/nfts/0x241829651f05674ccd2f0c9ce24099c54ecf58d5.png"
	],
	[
		"0x24b99f87324cab3a12715b99d2828685d9040add",
		"Artificial Colours Editions",
		"Artificial Colours Editions",
		"ERC1155",
		"/images/nfts/0x24b99f87324cab3a12715b99d2828685d9040add.png"
	],
	[
		"0x434fa625416ef1f93987f8532249d9f61ef49ec9",
		"Karrie Ross Fine Art editions",
		"Karrie Ross Fine Art editions",
		"ERC1155",
		"/images/nfts/0x434fa625416ef1f93987f8532249d9f61ef49ec9.png"
	],
	[
		"0x09bd8c181a7081a15e1a45f300bfd0af63eaf240",
		"JPegKillah",
		"JB",
		"ERC1155",
		"/images/nfts/0x09bd8c181a7081a15e1a45f300bfd0af63eaf240.png"
	],
	[
		"0xbfe1894235ef9c2795c8f21f437a97b221630b26",
		"Enigmatic Editions",
		"EE",
		"ERC1155",
		"/images/nfts/0xbfe1894235ef9c2795c8f21f437a97b221630b26.png"
	],
	[
		"0xb43c28daa4be6c98985e90194243d26531a168b3",
		"Teji Editions",
		"TE",
		"ERC1155",
		"/images/nfts/0xb43c28daa4be6c98985e90194243d26531a168b3.png"
	],
	[
		"0xa9792c48b30b2db622b2df5314147caf9cbb1ad8",
		"Your Touch Gave Life",
		"YTGL",
		"ERC1155"
	],
	[
		"0xb40eac08205b8526472378fe4a596dfabd7c0677",
		"Rojax Memes",
		"RC",
		"ERC1155",
		"/images/nfts/0xb40eac08205b8526472378fe4a596dfabd7c0677.png"
	],
	[
		"0x389aaca4d0abc9381d593777bdf69e86b3dfa538",
		"Beebs",
		"beeb",
		"ERC1155",
		"/images/nfts/0x389aaca4d0abc9381d593777bdf69e86b3dfa538.png"
	],
	[
		"0x2c510b1ee5692f217e5872f6b2f4f2d2a03c2590",
		"Feels GeoMetric Man",
		"FGMAN",
		"ERC1155",
		"/images/nfts/0x2c510b1ee5692f217e5872f6b2f4f2d2a03c2590.png"
	],
	[
		"0xd21cecf46fdf6618c3f4888ecbd3267825bbcd54",
		"Trillionaire x Jumy",
		"Trillionaire x Jumy",
		"ERC1155",
		"/images/nfts/0xd21cecf46fdf6618c3f4888ecbd3267825bbcd54.png"
	],
	[
		"0x9789353350acc2583c2f1786955ee5057dbad01c",
		"DrugReceipts: DRx Greetings Co.",
		"DrugReceipts: DRx Greetings Co.",
		"ERC1155",
		"/images/nfts/0x9789353350acc2583c2f1786955ee5057dbad01c.png"
	],
	[
		"0xa107af1fafcb7f4f5051c4e1d46d868738351441",
		"3drinklunch",
		"threedrink",
		"ERC1155"
	],
	[
		"0x89f6b0a36988efe394f1d32511d3d24b02d72434",
		"Mistri",
		"Mistri",
		"ERC1155",
		"/images/nfts/0x89f6b0a36988efe394f1d32511d3d24b02d72434.png"
	],
	[
		"0x514b58e890bd3d20f82eb9350214faf6a21a58c7",
		"Aleqth Editions",
		"Aleqth Editions",
		"ERC1155",
		"/images/nfts/0x514b58e890bd3d20f82eb9350214faf6a21a58c7.png"
	],
	[
		"0x006af875fa1312fb2f71507bfa3ed95227fc43c4",
		"AKC Bullshit",
		"akcbullshit",
		"ERC1155"
	],
	[
		"0x89781bb6d8a21ab6f6be7860f649be223db1dcaf",
		"ClownVamp Editions",
		"CLOWN",
		"ERC1155",
		"/images/nfts/0x89781bb6d8a21ab6f6be7860f649be223db1dcaf.png"
	],
	[
		"0x2f02a0c479b10275fb474d5885c945e0cc313b22",
		"Editions by k-art",
		"AQUA",
		"ERC1155",
		"/images/nfts/0x2f02a0c479b10275fb474d5885c945e0cc313b22.png"
	],
	[
		"0x1e16566c94ac5d224607c39ec748117f9fb0447a",
		"FakeRareDecal SZN1",
		"FRDSZN1",
		"ERC1155",
		"/images/nfts/0x1e16566c94ac5d224607c39ec748117f9fb0447a.png"
	],
	[
		"0xc34444f78170510b0643c6a09a4855fe87f066da",
		"Yu Cai Editions",
		"YUCAI",
		"ERC1155",
		"/images/nfts/0xc34444f78170510b0643c6a09a4855fe87f066da.png"
	],
	[
		"0x28b8f4f6a146db4e3b09652162b33f96ee56799f",
		"Brendan North Editions",
		"BNE",
		"ERC1155",
		"/images/nfts/0x28b8f4f6a146db4e3b09652162b33f96ee56799f.png"
	],
	[
		"0xa983bc1d1cba1d0992e5982081266843f288eb9c",
		"on sundays i paint",
		"on sundays i paint",
		"ERC1155",
		"/images/nfts/0xa983bc1d1cba1d0992e5982081266843f288eb9c.png"
	],
	[
		"0x91ad60593710df6fd7995565702040808c2e182d",
		"Editions By Beissú",
		"BSS",
		"ERC1155"
	],
	[
		"0xe137f466c979bb42092d61f8cb9e8395688e0ca7",
		"Penguin Cities",
		"CTPEN",
		"ERC1155",
		"/images/nfts/0xe137f466c979bb42092d61f8cb9e8395688e0ca7.png"
	],
	[
		"0xf33552aa9ee4c08129965794ec44dd8041834e5b",
		"Luigi Editions",
		"LGED",
		"ERC1155",
		"/images/nfts/0xf33552aa9ee4c08129965794ec44dd8041834e5b.png"
	],
	[
		"0x7973c174f391fb906559d7519a256b775f504b22",
		"Joanne Hollings",
		"JH",
		"ERC1155",
		"/images/nfts/0x7973c174f391fb906559d7519a256b775f504b22.png"
	],
	[
		"0x230cecbaa311294e8e4faaf55c20b0cab70d62cd",
		"The Faces 2023 by NFT_Timm",
		"FACES",
		"ERC1155",
		"/images/nfts/0x230cecbaa311294e8e4faaf55c20b0cab70d62cd.png"
	],
	[
		"0x34aa4854fcd3d4bcb707eaeed43e5ae312f64a95",
		"SILENCE by Ciniz",
		"SHHH",
		"ERC1155",
		"/images/nfts/0x34aa4854fcd3d4bcb707eaeed43e5ae312f64a95.png"
	],
	[
		"0x2eeeafbab6da153f60f9c234fcafa72585df1136",
		"0xfarah Editions",
		"farOE",
		"ERC1155",
		"/images/nfts/0x2eeeafbab6da153f60f9c234fcafa72585df1136.png"
	],
	[
		"0x7241f6a9af582e108243bb72db39f4820a52d636",
		"A Collection of Fine Ice",
		"ICE",
		"ERC1155",
		"/images/nfts/0x7241f6a9af582e108243bb72db39f4820a52d636.png"
	],
	[
		"0xedd329d43dd0aef5faee7e9945a56603f2af385f",
		"objective theory editions",
		"OBJCTVS",
		"ERC1155",
		"/images/nfts/0xedd329d43dd0aef5faee7e9945a56603f2af385f.png"
	],
	[
		"0xf0fdd1bef2b8d20156a5122d5ef3c77e8e35d8f0",
		"Edge Of Space and Time",
		"EOS",
		"ERC1155",
		"/images/nfts/0xf0fdd1bef2b8d20156a5122d5ef3c77e8e35d8f0.png"
	],
	[
		"0xc4d54229d8ef68df3843e09d42e115f241ef0cd9",
		"Immortals verse",
		"IMMORTALS",
		"ERC1155",
		"/images/nfts/0xc4d54229d8ef68df3843e09d42e115f241ef0cd9.png"
	],
	[
		"0x54ec3e80de1d8b2f6f52922139b40670fbf0dac5",
		"Gratitude V4",
		"YLW",
		"ERC1155"
	],
	[
		"0x10f1d723447df2a3922ed5e006c599cf50c05495",
		"Mutations by untitled, xyz",
		"uxyzed",
		"ERC1155",
		"/images/nfts/0x10f1d723447df2a3922ed5e006c599cf50c05495.png"
	],
	[
		"0x6c76fdf0071ed989b02126e9473050ee875bedce",
		"Blu Family",
		"Blu Family",
		"ERC1155",
		"/images/nfts/0x6c76fdf0071ed989b02126e9473050ee875bedce.png"
	],
	[
		"0xc98a0cad94086e3b1490861a034a0ba696b65be9",
		"HasanGoktepe Editions",
		"HG",
		"ERC1155",
		"/images/nfts/0xc98a0cad94086e3b1490861a034a0ba696b65be9.png"
	],
	[
		"0x06821bfe96b68ecec8f3a9c0e5c4fabffc291539",
		"\"The Gift Shop\"",
		"PINGEDS",
		"ERC1155",
		"/images/nfts/0x06821bfe96b68ecec8f3a9c0e5c4fabffc291539.png"
	],
	[
		"0x6d72e9131ac5832fbfd2b0a0b7762f97f7e62acd",
		"Scobel Editions",
		"Scobel Editions",
		"ERC1155",
		"/images/nfts/0x6d72e9131ac5832fbfd2b0a0b7762f97f7e62acd.png"
	],
	[
		"0x201777202f6da32b871710d274e4d2f295d1b504",
		"STRIPES - manifold",
		"SA",
		"ERC1155",
		"/images/nfts/0x201777202f6da32b871710d274e4d2f295d1b504.png"
	],
	[
		"0xc1446c31948cfca3a23ce16b22aecc6a9860b49d",
		"Gulce Kuter's Burnings",
		"FSB",
		"ERC1155",
		"/images/nfts/0xc1446c31948cfca3a23ce16b22aecc6a9860b49d.png"
	],
	[
		"0x20bd719a97adbb425a5135c7a4c37b8741e3d1a8",
		"Tinita_ttin",
		"MDS",
		"ERC1155"
	],
	[
		"0xfabab4451bd1975c30a63a057bc0c749dee60852",
		"Panorama by Blank Embrace",
		"BLNKMPNRM",
		"ERC1155",
		"/images/nfts/0xfabab4451bd1975c30a63a057bc0c749dee60852.png"
	],
	[
		"0xe88b31a22e436ade29a6c736903c28f5e28919a6",
		"Keeverse X Editions",
		"Keeverse X Editions",
		"ERC1155",
		"/images/nfts/0xe88b31a22e436ade29a6c736903c28f5e28919a6.png"
	],
	[
		"0x740425a0d13304e034f184f5ff95f43335060468",
		"@Work by MarkTheHabibi",
		"AtWork",
		"ERC1155",
		"/images/nfts/0x740425a0d13304e034f184f5ff95f43335060468.png"
	],
	[
		"0xed722ce261864049a8815e1b8db2f0667b77b403",
		"UnknownEditions",
		"UnknownEditions",
		"ERC1155",
		"/images/nfts/0xed722ce261864049a8815e1b8db2f0667b77b403.png"
	],
	[
		"0x23937312b114c66f20b2a65cc70630144e219ef5",
		"Classic Car DAO Dealership",
		"Classic Car DAO Dealership",
		"ERC1155",
		"/images/nfts/0x23937312b114c66f20b2a65cc70630144e219ef5.png"
	],
	[
		"0xc38be10e07d6300ca34300d95d62212e685e13ed",
		"FESQ Editions",
		"FESQ Editions",
		"ERC1155",
		"/images/nfts/0xc38be10e07d6300ca34300d95d62212e685e13ed.png"
	],
	[
		"0x790e9f3241523b833e89e9b566677c7c701dfa8b",
		"The Stages of Life 2 Editions",
		"Sol2Ed",
		"ERC1155",
		"/images/nfts/0x790e9f3241523b833e89e9b566677c7c701dfa8b.png"
	],
	[
		"0xe8521613c21ba03204955ceb5128aebcb9f12a45",
		"Duality By Jmarino_Vfx",
		"JMVFX2",
		"ERC1155",
		"/images/nfts/0xe8521613c21ba03204955ceb5128aebcb9f12a45.png"
	],
	[
		"0x5851d8c6009e9b253c39ac60a775bc4117cff639",
		"NACHO X LEGENDS",
		"NN",
		"ERC1155",
		"/images/nfts/0x5851d8c6009e9b253c39ac60a775bc4117cff639.png"
	],
	[
		"0xd308d38a221f38ff18d18e290c0cdd63b6b809fd",
		"Dxl Editions",
		"Dxl",
		"ERC1155",
		"/images/nfts/0xd308d38a221f38ff18d18e290c0cdd63b6b809fd.png"
	],
	[
		"0xacb999ca4e6bf3d6cb2872e923921498585af1ac",
		"SC05 Demo Day",
		"SC05 Demo Day",
		"ERC1155",
		"/images/nfts/0xacb999ca4e6bf3d6cb2872e923921498585af1ac.png"
	],
	[
		"0x2b5f2fc733acd1521a9efc6c4f354cdd7eec6c1b",
		"Rifters: Keys",
		"RiftersKeys",
		"ERC1155",
		"/images/nfts/0x2b5f2fc733acd1521a9efc6c4f354cdd7eec6c1b.png"
	],
	[
		"0xc0a8b3a6e1b350ac01cd694adf2c416ee6da0339",
		"a True story.",
		"ROBY",
		"ERC1155",
		"/images/nfts/0xc0a8b3a6e1b350ac01cd694adf2c416ee6da0339.png"
	],
	[
		"0x2a4722265362f554e3a9ff0c0aad299e5120d174",
		"Miracle Special Collection",
		"MM",
		"ERC1155",
		"/images/nfts/0x2a4722265362f554e3a9ff0c0aad299e5120d174.png"
	],
	[
		"0x6517f4935368ba85b987e75d5120332db22dcf0a",
		"A-Mashiro Editions",
		"AMSRM",
		"ERC1155",
		"/images/nfts/0x6517f4935368ba85b987e75d5120332db22dcf0a.png"
	],
	[
		"0xae49b1754cd83938c88cee3a77a8568d9901bac4",
		"BS 2023",
		"BS2023",
		"ERC1155",
		"/images/nfts/0xae49b1754cd83938c88cee3a77a8568d9901bac4.png"
	],
	[
		"0xe9cade149d1a99f7678120d316b46fedddf5e837",
		"I've Been Waiting | ArtByGage",
		"WAIT",
		"ERC1155",
		"/images/nfts/0xe9cade149d1a99f7678120d316b46fedddf5e837.png"
	],
	[
		"0xc8d17e04da3b2afad7b3433bc45fef53a8c4aa22",
		"FRSGHTD Collection",
		"FRSGHTD",
		"ERC1155",
		"/images/nfts/0xc8d17e04da3b2afad7b3433bc45fef53a8c4aa22.png"
	],
	[
		"0x1fd6835d6744bb2806a853024869a8a706cb56f0",
		"REPROBATES",
		"REPROBATES",
		"ERC1155",
		"/images/nfts/0x1fd6835d6744bb2806a853024869a8a706cb56f0.png"
	],
	[
		"0xd4a6034f078bfb7874ad57df17a5d0c2f41c1e04",
		"SedArts",
		"SedArts",
		"ERC1155",
		"/images/nfts/0xd4a6034f078bfb7874ad57df17a5d0c2f41c1e04.png"
	],
	[
		"0x875a48b0473cc94a1c786188ad9c4727091dc08f",
		"Panorama Landscapes by Godwits",
		"PL",
		"ERC1155",
		"/images/nfts/0x875a48b0473cc94a1c786188ad9c4727091dc08f.png"
	],
	[
		"0xb5fb0184a22ce644139bf9b888f72a1e1f85c884",
		"Editions by g3rm",
		"Editions by g3rm",
		"ERC1155",
		"/images/nfts/0xb5fb0184a22ce644139bf9b888f72a1e1f85c884.png"
	],
	[
		"0xbff072b7aabe8bedb244a65f5d8da5f06f463005",
		"Emotional Complexity",
		"ECOM",
		"ERC1155",
		"/images/nfts/0xbff072b7aabe8bedb244a65f5d8da5f06f463005.png"
	],
	[
		"0xe5b64f9d02775ad961ec0452a5e55c254668c7e0",
		"The Bangers by Snepsid",
		"The Bangers by Snepsid",
		"ERC1155",
		"/images/nfts/0xe5b64f9d02775ad961ec0452a5e55c254668c7e0.png"
	],
	[
		"0x78a474b574f93a34eb33732c83c075e69d30e0e1",
		"StampNFT_TT",
		"StampNFT_TT",
		"ERC1155",
		"/images/nfts/0x78a474b574f93a34eb33732c83c075e69d30e0e1.png"
	],
	[
		"0x62a68d766d60657caab53762c6871206f6cc3c30",
		"Shared Editions by Mike Three",
		"Shared Editions by Mike Three",
		"ERC1155",
		"/images/nfts/0x62a68d766d60657caab53762c6871206f6cc3c30.png"
	],
	[
		"0x164309a41d7bced3ffcc32354ac0d8982b42f510",
		"{CLOUDROP}",
		"SBFPB",
		"ERC1155",
		"/images/nfts/0x164309a41d7bced3ffcc32354ac0d8982b42f510.png"
	],
	[
		"0x829f1a8a0852da76a9c4e22c11b66a84ad32d268",
		"555 DAYS",
		"MEJ",
		"ERC1155",
		"/images/nfts/0x829f1a8a0852da76a9c4e22c11b66a84ad32d268.png"
	],
	[
		"0x5d20a3411e750eb8b609d9f0587f3a0515cd4572",
		"juppijuppsen",
		"JJ",
		"ERC1155",
		"/images/nfts/0x5d20a3411e750eb8b609d9f0587f3a0515cd4572.png"
	],
	[
		"0x7e1d0d66a3fec2c6fbab8a892c785fe4d83e009a",
		"Ava Ghayoumi Editions",
		"AvaGh",
		"ERC1155",
		"/images/nfts/0x7e1d0d66a3fec2c6fbab8a892c785fe4d83e009a.png"
	],
	[
		"0xbd2d5d9fbb00aabb8a2b7a4951cbdfeb459265b4",
		"STRAY SERIES by Gruff",
		"BLST",
		"ERC1155",
		"/images/nfts/0xbd2d5d9fbb00aabb8a2b7a4951cbdfeb459265b4.png"
	],
	[
		"0xf11dda6fc5bf4e2dff523c7e84edcf6108f7dbb1",
		"MILK MARKET",
		"MMRKT",
		"ERC1155",
		"/images/nfts/0xf11dda6fc5bf4e2dff523c7e84edcf6108f7dbb1.png"
	],
	[
		"0x6a75f484ad1804c5b1534c476070ef21cf5c2bce",
		"????  ＥＤＩＴＩＯＮＳ",
		"HW",
		"ERC1155",
		"/images/nfts/0x6a75f484ad1804c5b1534c476070ef21cf5c2bce.png"
	],
	[
		"0xa5906b53b0be86fc62c4e491ae02105ef3cafdf2",
		"Indiigo Arts Editions",
		"Night",
		"ERC1155"
	],
	[
		"0x389dcc122a2304a95ef929e71b7ef2504c6cc3ac",
		"BAP Portal Passes",
		"BAPPortal",
		"ERC1155",
		"/images/nfts/0x389dcc122a2304a95ef929e71b7ef2504c6cc3ac.png"
	],
	[
		"0x58044fb6eef7742f25a78a17c6afbd582c32b21a",
		"Wyn freeclaim - old",
		"Wyn freeclaim - old",
		"ERC1155",
		"/images/nfts/0x58044fb6eef7742f25a78a17c6afbd582c32b21a.png"
	],
	[
		"0x3c1abe517507d94853886f88fa07f0a2610b4219",
		"Guttestreker: Collectible cards",
		"Guttestreker: Collectible cards",
		"ERC1155",
		"/images/nfts/0x3c1abe517507d94853886f88fa07f0a2610b4219.png"
	],
	[
		"0x67a73648494a620805e176fa8a19dc8e231db2bd",
		"Hues Tapestries",
		"mh2",
		"ERC1155",
		"/images/nfts/0x67a73648494a620805e176fa8a19dc8e231db2bd.png"
	],
	[
		"0x9e55446e9e76e24707c2bb0f7f5e43741a91d6dc",
		"Europa Moon Aliens Editions",
		"EMOONSE",
		"ERC1155",
		"/images/nfts/0x9e55446e9e76e24707c2bb0f7f5e43741a91d6dc.png"
	],
	[
		"0xafce699aea04a33324ad4e8c0597881360bea2df",
		"SepSauce Burnable Tokens",
		"SSB",
		"ERC1155",
		"/images/nfts/0xafce699aea04a33324ad4e8c0597881360bea2df.png"
	],
	[
		"0xfc96e2462dd572f9bb48a9d476b12b830a59a0de",
		"DropsArt Editions",
		"TLRS",
		"ERC1155",
		"/images/nfts/0xfc96e2462dd572f9bb48a9d476b12b830a59a0de.png"
	],
	[
		"0x91e53123f364a4e1dea2dcbd847c0eab292ea189",
		"Rvscvnx Editions",
		"NOT",
		"ERC1155",
		"/images/nfts/0x91e53123f364a4e1dea2dcbd847c0eab292ea189.png"
	],
	[
		"0x4822d507d32b520a217183ae4344e0cece873599",
		"Kosetto Wearables",
		"Kosetto Wearables",
		"ERC1155",
		"/images/nfts/0x4822d507d32b520a217183ae4344e0cece873599.png"
	],
	[
		"0x8a17ae26c4371b9b59afb407ce166db67adcb793",
		"C4RDINAL & FRENS",
		"C4RDINAL & FRENS",
		"ERC1155",
		"/images/nfts/0x8a17ae26c4371b9b59afb407ce166db67adcb793.png"
	],
	[
		"0x6ecf3c08102c9d81afd579635a806b94d454dd63",
		"Ethernity's Master Collection",
		"Ethernity's Master Collection",
		"ERC1155",
		"/images/nfts/0x6ecf3c08102c9d81afd579635a806b94d454dd63.png"
	],
	[
		"0x1037390b774bc41f9bc9257674eb6bc2f6798674",
		"Casting Couch Pepe",
		"SLOOT",
		"ERC1155",
		"/images/nfts/0x1037390b774bc41f9bc9257674eb6bc2f6798674.png"
	],
	[
		"0x7725638c8336692ee71ce0e638e18e10215e3edb",
		"Unstable Faith",
		"SUFI",
		"ERC1155"
	],
	[
		"0x9a3c4b474730023c6a9b28d4dfc097c182e8ccf6",
		"postcards by mae",
		"PSTCRDS",
		"ERC1155",
		"/images/nfts/0x9a3c4b474730023c6a9b28d4dfc097c182e8ccf6.png"
	],
	[
		"0x22dce6c542af0ba61d56138e6ff85378381c2b5c",
		"\"Capturing Life\" by MisterBenjamin",
		"MRBLIFE",
		"ERC1155",
		"/images/nfts/0x22dce6c542af0ba61d56138e6ff85378381c2b5c.png"
	],
	[
		"0xeac91b14b34c78753c6152069c889781cdb05796",
		"The Moving Canvas",
		"REM",
		"ERC1155",
		"/images/nfts/0xeac91b14b34c78753c6152069c889781cdb05796.png"
	],
	[
		"0x9da50730817632fc1d566f46d48f334d8493c7d9",
		"bootleg pepes",
		"BOOTLEGS",
		"ERC1155",
		"/images/nfts/0x9da50730817632fc1d566f46d48f334d8493c7d9.png"
	],
	[
		"0x0b6a11d939fb593436e6762b2fa7f5fcefba526c",
		"KRISTA KIM: AIR",
		"KK1155",
		"ERC1155"
	],
	[
		"0xbb69e1b162a34920de20400f4af5009eeb869789",
		"Tyronejkd universe",
		"Tyronejkd universe",
		"ERC1155",
		"/images/nfts/0xbb69e1b162a34920de20400f4af5009eeb869789.png"
	],
	[
		"0xbc26ceb1e1e559b34489684eb535305d04660467",
		"the memes by mfer6260",
		"M6260",
		"ERC1155",
		"/images/nfts/0xbc26ceb1e1e559b34489684eb535305d04660467.png"
	],
	[
		"0x45550b1c16d55ed4682f291280e5014f39adbc49",
		"Pepedenza Editions by Batz",
		"PDENZA",
		"ERC1155",
		"/images/nfts/0x45550b1c16d55ed4682f291280e5014f39adbc49.png"
	],
	[
		"0xb2adcdfdffa5c905e0db62a2d3d21697791a9321",
		"Efdot Editions",
		"Efdot Editions",
		"ERC1155",
		"/images/nfts/0xb2adcdfdffa5c905e0db62a2d3d21697791a9321.png"
	],
	[
		"0xf6883d75977b8ae36f4566a541f0465a8819c64a",
		"ULTRAdrop",
		"ULTDR",
		"ERC1155",
		"/images/nfts/0xf6883d75977b8ae36f4566a541f0465a8819c64a.png"
	],
	[
		"0xe94f92dda145de99a978e4e20d3a4aaf85ce55c3",
		"ETH Island by gelo",
		"GLOE",
		"ERC1155",
		"/images/nfts/0xe94f92dda145de99a978e4e20d3a4aaf85ce55c3.png"
	],
	[
		"0x3ffb00b41e5f7c7af0b2a59f15538b9480ba8570",
		"YAYZ Brand",
		"YAYZ2",
		"ERC1155",
		"/images/nfts/0x3ffb00b41e5f7c7af0b2a59f15538b9480ba8570.png"
	],
	[
		"0x0fe3fd8659c3718ecfe40e379e80dde3b9e63a4b",
		"Invisible Enemies Mint Pass",
		"IEMP",
		"ERC1155",
		"/images/nfts/0x0fe3fd8659c3718ecfe40e379e80dde3b9e63a4b.png"
	],
	[
		"0xeeb15bb04e65b944819972a143171a282fd55e97",
		"Jesperish Editions",
		"JesperishED",
		"ERC1155",
		"/images/nfts/0xeeb15bb04e65b944819972a143171a282fd55e97.png"
	],
	[
		"0xad7220909fbc54c7b8e8e2b999813ce3894cbd33",
		"Faith. Hope. Love",
		"INV",
		"ERC1155",
		"/images/nfts/0xad7220909fbc54c7b8e8e2b999813ce3894cbd33.png"
	],
	[
		"0xf1743c13c9b2ddf95588eab4ba5f32ab4acd14a1",
		"Editions - jWuv1d2gJU",
		"HFNE",
		"ERC1155"
	],
	[
		"0x85a1a6ea3c6d785cfc013302fa27ded47d611ab6",
		"Phantasm by Natalie Shau",
		"PhntsM",
		"ERC1155",
		"/images/nfts/0x85a1a6ea3c6d785cfc013302fa27ded47d611ab6.png"
	],
	[
		"0xe3d9cd644ba8ff37133475d0da18a67e141c0d0f",
		"Perilous Pix Editions",
		"PPxE",
		"ERC1155",
		"/images/nfts/0xe3d9cd644ba8ff37133475d0da18a67e141c0d0f.png"
	],
	[
		"0x41a37ca13ca87870e7e6c1172d65912939afd1bb",
		"raresmwldeployer",
		"raresmwldeployer",
		"ERC1155",
		"/images/nfts/0x41a37ca13ca87870e7e6c1172d65912939afd1bb.png"
	],
	[
		"0xf7ca9b86cc346f00121d4683192b0a8c35ab2a51",
		"Maxwell Meme Cards",
		"MEMES",
		"ERC1155",
		"/images/nfts/0xf7ca9b86cc346f00121d4683192b0a8c35ab2a51.png"
	],
	[
		"0xe892f26197476693d62aae8afd55e092cb457b62",
		"Wicklow Editions",
		"WICK",
		"ERC1155",
		"/images/nfts/0xe892f26197476693d62aae8afd55e092cb457b62.png"
	],
	[
		"0x720af3838d32f3b9edd72c64dc2b06d0a07d281c",
		"GoFundNovo",
		"GFN",
		"ERC1155",
		"/images/nfts/0x720af3838d32f3b9edd72c64dc2b06d0a07d281c.png"
	],
	[
		"0x7612864c0819228fca01a6bbadf6f9828c989205",
		"ReMemes",
		"RMS",
		"ERC1155",
		"/images/nfts/0x7612864c0819228fca01a6bbadf6f9828c989205.png"
	],
	[
		"0x3c9cc65e51033b5450fa9b75a42533c9197a1a67",
		"FLOATER (Efdot x BWOW Collab)",
		"FLOAT",
		"ERC1155",
		"/images/nfts/0x3c9cc65e51033b5450fa9b75a42533c9197a1a67.png"
	],
	[
		"0x962164f498b369fba03d08de8c14759b80aa8dfe",
		"Citizens 3.0",
		"MLAC3",
		"ERC1155",
		"/images/nfts/0x962164f498b369fba03d08de8c14759b80aa8dfe.png"
	],
	[
		"0xd342c260bb971026fe48afed6341ffc4697ee16f",
		"Timpers Pixelworks",
		"TIMPXLS",
		"ERC1155",
		"/images/nfts/0xd342c260bb971026fe48afed6341ffc4697ee16f.png"
	],
	[
		"0xcb8231daa097d4e8543c11dc857364e44f41e528",
		"Unidentified contract - OnnRA3c40Q",
		"Unidentified contract - OnnRA3c40Q",
		"ERC1155",
		"/images/nfts/0xcb8231daa097d4e8543c11dc857364e44f41e528.png"
	],
	[
		"0xc82ae21402eea321a0ccdbf19796147a9bdc07f9",
		"P1A Editions",
		"P1A Editions",
		"ERC1155",
		"/images/nfts/0xc82ae21402eea321a0ccdbf19796147a9bdc07f9.png"
	],
	[
		"0xa85022aefa394caf268f681fbc891e3b41ceb86c",
		"Onlyones Editions",
		"Onlyones Editions",
		"ERC1155",
		"/images/nfts/0xa85022aefa394caf268f681fbc891e3b41ceb86c.png"
	],
	[
		"0x3bd492dc171412ea05e3b5cb28f7bc8cab945695",
		"RealPepes",
		"pepe",
		"ERC1155",
		"/images/nfts/0x3bd492dc171412ea05e3b5cb28f7bc8cab945695.png"
	],
	[
		"0x5cdc95091f7a292a1e82adc494381500c5b33e92",
		"DEGEN THERAPY by rust",
		"DTR",
		"ERC1155",
		"/images/nfts/0x5cdc95091f7a292a1e82adc494381500c5b33e92.png"
	],
	[
		"0x92aef2b4a47be59ec6a737ec3bb43d1b09eea3bf",
		"Trapt by Zestycheetos",
		"TRPT",
		"ERC1155",
		"/images/nfts/0x92aef2b4a47be59ec6a737ec3bb43d1b09eea3bf.png"
	],
	[
		"0x937123230222ca4c90ee412a8ffdc980eb507f43",
		"tales by m1racl",
		"tm1ra",
		"ERC1155",
		"/images/nfts/0x937123230222ca4c90ee412a8ffdc980eb507f43.png"
	],
	[
		"0xd1a10e8d03ca80c6eeb8b0f5a3072c0c60ad9e05",
		"NFT Lords Alpha",
		"NFT Lords Alpha",
		"ERC1155",
		"/images/nfts/0xd1a10e8d03ca80c6eeb8b0f5a3072c0c60ad9e05.png"
	],
	[
		"0x709d9a64a83ca1c9b905b959bb1ad2c95ec625ac",
		"Century by Alemac",
		"ALEMAC",
		"ERC1155",
		"/images/nfts/0x709d9a64a83ca1c9b905b959bb1ad2c95ec625ac.png"
	],
	[
		"0x6e4420d66422a013cb7a9e71a95fce131605db18",
		"FXCKEDITIONS",
		"Fxcked",
		"ERC1155",
		"/images/nfts/0x6e4420d66422a013cb7a9e71a95fce131605db18.png"
	],
	[
		"0xd650c5aa88bb8ffc9bce38f5554e38e91f33e300",
		"Pastel Alpha",
		"PA",
		"ERC1155",
		"/images/nfts/0xd650c5aa88bb8ffc9bce38f5554e38e91f33e300.png"
	],
	[
		"0x59c766857943e9cff7183673bbd94b070d6facb1",
		"Virgil Abloh Interview",
		"ABLOH",
		"ERC1155",
		"/images/nfts/0x59c766857943e9cff7183673bbd94b070d6facb1.png"
	],
	[
		"0x0b030ab993b382367bf16a70fa2a5cb7968e1fe2",
		"Shibu Manifold",
		"tyxmas",
		"ERC1155",
		"/images/nfts/0x0b030ab993b382367bf16a70fa2a5cb7968e1fe2.png"
	],
	[
		"0x877f72a513079058d05896959c8c802a56a65674",
		"THE RED PHONE - PRINTER editions V2",
		"RPRNT",
		"ERC1155",
		"/images/nfts/0x877f72a513079058d05896959c8c802a56a65674.png"
	],
	[
		"0x1fd370ac0973a7a77c77956cfedb3eef707552aa",
		"207faces of Iggy - Rainer Hosch",
		"207foi",
		"ERC1155",
		"/images/nfts/0x1fd370ac0973a7a77c77956cfedb3eef707552aa.png"
	],
	[
		"0xa349c22bec60efc642f37b8fa4f6510163db970e",
		"basewtf collection",
		"bwtf",
		"ERC1155",
		"/images/nfts/0xa349c22bec60efc642f37b8fa4f6510163db970e.png"
	],
	[
		"0x4acea6b489e84602b44bbe17ab80302c15adcd39",
		"Charlesai Editions",
		"CAI",
		"ERC1155",
		"/images/nfts/0x4acea6b489e84602b44bbe17ab80302c15adcd39.png"
	],
	[
		"0xe6fcd3f12fd9c519a9137bf518fee5f637fd7e9c",
		"Otherwordly (Editions)",
		"GB",
		"ERC1155",
		"/images/nfts/0xe6fcd3f12fd9c519a9137bf518fee5f637fd7e9c.png"
	],
	[
		"0xd68588640f6258dc8374aff26603fcba00e3b18a",
		"NOOK EDITIONS",
		"nooki",
		"ERC1155",
		"/images/nfts/0xd68588640f6258dc8374aff26603fcba00e3b18a.png"
	],
	[
		"0x32d9c2d44b289fafe88b5b10f2baba7ada35b270",
		"The Overthinker by Lois Voirol",
		"The Overthinker by Lois Voirol",
		"ERC1155",
		"/images/nfts/0x32d9c2d44b289fafe88b5b10f2baba7ada35b270.png"
	],
	[
		"0xfc991d222f80172338c892680fc3a9326200f5b9",
		"HAMATO - Editions",
		"HAMATO - Editions",
		"ERC1155",
		"/images/nfts/0xfc991d222f80172338c892680fc3a9326200f5b9.png"
	],
	[
		"0xd404e7efd8ac3d1f0908e547be0b6ba87a547039",
		"Hot Summer CC0",
		"Hot Summer CC0",
		"ERC1155",
		"/images/nfts/0xd404e7efd8ac3d1f0908e547be0b6ba87a547039.png"
	],
	[
		"0x8454d7fc4ade96f58b5444a198cd647e8680a335",
		"Wind River",
		"Wind River",
		"ERC1155",
		"/images/nfts/0x8454d7fc4ade96f58b5444a198cd647e8680a335.png"
	],
	[
		"0x7136a0e58ed30fcb7a3554601bfc3ea7f333865c",
		"Richard Nadler",
		"RN",
		"ERC1155"
	],
	[
		"0x2e2a7b9095891a4325eb8352c7b169334b89c592",
		"ILLAZILLAZ ETERNAL BATTLE",
		"ILLAZILLAZBATTLE",
		"ERC1155",
		"/images/nfts/0x2e2a7b9095891a4325eb8352c7b169334b89c592.png"
	],
	[
		"0x1eee2cc0e0d2a58b8d0c259ba00bf8fe60b70f42",
		"Harvestale Art & Music Collection",
		"Harvestale Art & Music Collection",
		"ERC1155",
		"/images/nfts/0x1eee2cc0e0d2a58b8d0c259ba00bf8fe60b70f42.png"
	],
	[
		"0x80d76e70ae8120d5fcaf0416e8fe33f21ce7bcd5",
		"BULLRUN BOOSTER NFT",
		"BULLRUN BOOSTER NFT",
		"ERC1155",
		"/images/nfts/0x80d76e70ae8120d5fcaf0416e8fe33f21ce7bcd5.png"
	],
	[
		"0x882b202c8c09d559c4dca47e45a617567960d063",
		"The Squab HQ: Chimera Corp",
		"CC",
		"ERC1155",
		"/images/nfts/0x882b202c8c09d559c4dca47e45a617567960d063.png"
	],
	[
		"0x3492e12f9b3cdf8df96b544a6409d4011ea7a56f",
		"TY by 1984",
		"Ty",
		"ERC1155",
		"/images/nfts/0x3492e12f9b3cdf8df96b544a6409d4011ea7a56f.png"
	],
	[
		"0xccb06c42687589e2cc2dcc5d82b010fafb967b07",
		"Flipped Play",
		"FFF",
		"ERC1155",
		"/images/nfts/0xccb06c42687589e2cc2dcc5d82b010fafb967b07.png"
	],
	[
		"0x0795e7ff9ee876ceb801c1fb887aece0d5b02f04",
		"Alhucard Editions",
		"Alhucard Editions",
		"ERC1155",
		"/images/nfts/0x0795e7ff9ee876ceb801c1fb887aece0d5b02f04.png"
	],
	[
		"0x8f6ee5787a60959c8daf3d35fa48fd0c49bcca2a",
		"XLIFE",
		"XLIFE",
		"ERC1155",
		"/images/nfts/0x8f6ee5787a60959c8daf3d35fa48fd0c49bcca2a.png"
	],
	[
		"0xe6560fc5d430f20a0187b12873423210781a43e6",
		"Mad Petz Miki",
		"Mad Petz Miki",
		"ERC1155",
		"/images/nfts/0xe6560fc5d430f20a0187b12873423210781a43e6.png"
	],
	[
		"0xb41e30420d22628537e33fa8e482549671ebcc13",
		"EDITIONS by Manic",
		"EBM",
		"ERC1155",
		"/images/nfts/0xb41e30420d22628537e33fa8e482549671ebcc13.png"
	],
	[
		"0x3dbb10bde369a8272f7106d88c510829af49c813",
		"Rekt Card",
		"Rekt Card",
		"ERC1155",
		"/images/nfts/0x3dbb10bde369a8272f7106d88c510829af49c813.png"
	],
	[
		"0x8754f54074400ce745a7ceddc928fb1b7e985ed6",
		"EulerBeats Genesis",
		"eBEATS",
		"ERC1155",
		"/images/nfts/0x8754f54074400ce745a7ceddc928fb1b7e985ed6.png"
	],
	[
		"0x3cc481343dc667697b36d12b4b0bcaf881c901f9",
		"\"Dex's Tools\"",
		"\"Dex's Tools\"",
		"ERC1155",
		"/images/nfts/0x3cc481343dc667697b36d12b4b0bcaf881c901f9.png"
	],
	[
		"0xf68cb43f028fbe145f4ddcf755242d850da11c86",
		"Legend Of The Shadow",
		"SOUL",
		"ERC1155",
		"/images/nfts/0xf68cb43f028fbe145f4ddcf755242d850da11c86.png"
	],
	[
		"0xbe8eab634e11633180860a3f226eb06f15d330f6",
		"SethART Editions",
		"SethART Editions",
		"ERC1155",
		"/images/nfts/0xbe8eab634e11633180860a3f226eb06f15d330f6.png"
	],
	[
		"0xb026fa1e258fcd1f6990346f093192aaee053e1b",
		"photoyogi",
		"photoyogi",
		"ERC1155",
		"/images/nfts/0xb026fa1e258fcd1f6990346f093192aaee053e1b.png"
	],
	[
		"0x3eedbb158c9b66fe3aed161c8a814a085d0c3af3",
		"99cent NFTs",
		"NINETYNINECENTS",
		"ERC1155",
		"/images/nfts/0x3eedbb158c9b66fe3aed161c8a814a085d0c3af3.png"
	],
	[
		"0x31bb46368336582bf54d1341dc57dcfcee99bfca",
		"Punks AI Open Mints",
		"PAI",
		"ERC1155",
		"/images/nfts/0x31bb46368336582bf54d1341dc57dcfcee99bfca.png"
	],
	[
		"0x013116deb430275eceb99e3cf4a5c5c9d3fcd220",
		"DC101",
		"DC101",
		"ERC1155",
		"/images/nfts/0x013116deb430275eceb99e3cf4a5c5c9d3fcd220.png"
	],
	[
		"0x82de80b9ba714f093cd3196927984c3dd8eb87e2",
		"RARE by Godwits",
		"RARE by Godwits",
		"ERC1155",
		"/images/nfts/0x82de80b9ba714f093cd3196927984c3dd8eb87e2.png"
	],
	[
		"0xdc6a5141b4738921f594b30cefa823ebe64b14d2",
		"The Album by TZ",
		"Editions",
		"ERC1155",
		"/images/nfts/0xdc6a5141b4738921f594b30cefa823ebe64b14d2.png"
	],
	[
		"0x7d459d97bd7340c89459c1babf2a157fe7187836",
		"Matlok Art V2",
		"MATLOK",
		"ERC1155",
		"/images/nfts/0x7d459d97bd7340c89459c1babf2a157fe7187836.png"
	],
	[
		"0xda62767106f1666d1fdc24836ca4655f6b4eee46",
		"Blue by 1984",
		"Blue",
		"ERC1155",
		"/images/nfts/0xda62767106f1666d1fdc24836ca4655f6b4eee46.png"
	],
	[
		"0x794f5a4b7e46df17187a94fd79673af9114ddf16",
		"R.I.P. BOZO",
		"RIP",
		"ERC1155",
		"/images/nfts/0x794f5a4b7e46df17187a94fd79673af9114ddf16.png"
	],
	[
		"0x3ab6009948cbfbe145f5363fd864351cabed50d5",
		"OBEY ARCHIVES",
		"OBEYA",
		"ERC1155",
		"/images/nfts/0x3ab6009948cbfbe145f5363fd864351cabed50d5.png"
	],
	[
		"0x85a45cc45d7e845c3fc862ca5dd897cae8e3bb8c",
		"MRC Arte",
		"MRCArte",
		"ERC1155",
		"/images/nfts/0x85a45cc45d7e845c3fc862ca5dd897cae8e3bb8c.png"
	],
	[
		"0x82c34fd4dc6d726f1341ac8fa6d37c21fa0edca2",
		"LYKE Editions",
		"LYKE",
		"ERC1155",
		"/images/nfts/0x82c34fd4dc6d726f1341ac8fa6d37c21fa0edca2.png"
	],
	[
		"0x57237f064cc17f3ba6f6674d3840c7e7e96ec2cd",
		"Ed_Balloon",
		"EBAL",
		"ERC1155",
		"/images/nfts/0x57237f064cc17f3ba6f6674d3840c7e7e96ec2cd.png"
	],
	[
		"0x2215291c5092cc1ba285bcbf9e95ab430fae839f",
		"ANiMAtttiC EDitttiONS - THE ENDLESS",
		"ANMTCE",
		"ERC1155",
		"/images/nfts/0x2215291c5092cc1ba285bcbf9e95ab430fae839f.png"
	],
	[
		"0x5f2b2ae09d47586b1ffa8d7f09133ca1e19c9507",
		"Berlin Editions by Andre Wagner",
		"Berlin Editions by Andre Wagner",
		"ERC1155",
		"/images/nfts/0x5f2b2ae09d47586b1ffa8d7f09133ca1e19c9507.png"
	],
	[
		"0xdcc9c989f5768c948b65dd1937645f82d39d1b9e",
		"DeeZeDitions",
		"DeeZeD",
		"ERC1155",
		"/images/nfts/0xdcc9c989f5768c948b65dd1937645f82d39d1b9e.png"
	],
	[
		"0xd1b3f8b1510807be9f6808846be992e908a8a415",
		"The Brincnaut 01 (Ethereum)",
		"TB1E",
		"ERC1155",
		"/images/nfts/0xd1b3f8b1510807be9f6808846be992e908a8a415.png"
	],
	[
		"0x0558ef499cc9a20b291e353a3d78bf927edc2e94",
		"Glitch Labs by rust",
		"GLE",
		"ERC1155",
		"/images/nfts/0x0558ef499cc9a20b291e353a3d78bf927edc2e94.png"
	],
	[
		"0xf5bc3fa7c549678849f62d425d0cbc280d0bf86b",
		"Toon Life",
		"Toon Life",
		"ERC1155",
		"/images/nfts/0xf5bc3fa7c549678849f62d425d0cbc280d0bf86b.png"
	],
	[
		"0x01b8843d0a50494d4253e47ecaf245c512edc7b5",
		"Exploration of Glitch Art by Chain Virus",
		"EGA",
		"ERC1155",
		"/images/nfts/0x01b8843d0a50494d4253e47ecaf245c512edc7b5.png"
	],
	[
		"0x68f3780e8209b6178bf170d55064a91463c48a5b",
		"The Magic Pineapple Donut",
		"MPD",
		"ERC1155",
		"/images/nfts/0x68f3780e8209b6178bf170d55064a91463c48a5b.png"
	],
	[
		"0x9cdc17d6cb6641de140e938cd5e7c5c590bbaacc",
		"Secret Windows Editions",
		"Secret Windows Editions",
		"ERC1155",
		"/images/nfts/0x9cdc17d6cb6641de140e938cd5e7c5c590bbaacc.png"
	],
	[
		"0x11c6fe5fecbd7b88f839e7f27930d0adcfd1dafb",
		"flashy xin",
		"FXIN",
		"ERC1155",
		"/images/nfts/0x11c6fe5fecbd7b88f839e7f27930d0adcfd1dafb.png"
	],
	[
		"0x7121b20b1619fcea3e892394e9f0d670bd82f50a",
		"Resaang Editions",
		"RESA",
		"ERC1155",
		"/images/nfts/0x7121b20b1619fcea3e892394e9f0d670bd82f50a.png"
	],
	[
		"0xddfe7d95c00762dbbe1e9c6d0c79c9f559f068fa",
		"onigiriman's edition collection",
		"OPNONI",
		"ERC1155"
	],
	[
		"0x3d47f783cd3e7ee2d767cdeeae94d98dbe81efae",
		"MOTOSIMBA MUSIC & ART EDITIONS",
		"MTSMBE",
		"ERC1155",
		"/images/nfts/0x3d47f783cd3e7ee2d767cdeeae94d98dbe81efae.png"
	],
	[
		"0xdf469fada07ee09f272bf1f768fe7deca5200531",
		"NFTRESOR",
		"NFTRESOR",
		"ERC1155",
		"/images/nfts/0xdf469fada07ee09f272bf1f768fe7deca5200531.png"
	],
	[
		"0x1b5c7d1216045a4024f16d83354ba8b5ff4574e4",
		"Ovie Fanboy",
		"OFB",
		"ERC1155",
		"/images/nfts/0x1b5c7d1216045a4024f16d83354ba8b5ff4574e4.png"
	],
	[
		"0x95c7df9bb4d1cf75b1069570df837917a4b32eb8",
		"Burn Adventures by LOGIK",
		"burna",
		"ERC1155",
		"/images/nfts/0x95c7df9bb4d1cf75b1069570df837917a4b32eb8.png"
	],
	[
		"0x439a60ea7b3a29b9da08f4737750ab4c54cb2fdd",
		"bears (editions)",
		"bears (editions)",
		"ERC1155",
		"/images/nfts/0x439a60ea7b3a29b9da08f4737750ab4c54cb2fdd.png"
	],
	[
		"0xae2e911c41d8c1e9b0a26d5f06bf8dd222df34a8",
		"Shellz Orb: ITEMZ",
		"ITEMZ",
		"ERC1155",
		"/images/nfts/0xae2e911c41d8c1e9b0a26d5f06bf8dd222df34a8.png"
	],
	[
		"0x103d09ba077372df32ea5090daeb6156ada94e2e",
		"Arbitrators",
		"ABTR",
		"ERC1155",
		"/images/nfts/0x103d09ba077372df32ea5090daeb6156ada94e2e.png"
	],
	[
		"0x5d14b27724acd99be7e0025aca7bd7d590eceddf",
		"Editions by Domenico Distilo V2",
		"DodixEd",
		"ERC1155",
		"/images/nfts/0x5d14b27724acd99be7e0025aca7bd7d590eceddf.png"
	],
	[
		"0x8937baa58464adbe752d1c20f0eb4e284597a009",
		"Yugal Editions",
		"YGL",
		"ERC1155",
		"/images/nfts/0x8937baa58464adbe752d1c20f0eb4e284597a009.png"
	],
	[
		"0x42a3fdde7b4ae983d6a99a3a0c2a6234e40e488d",
		"vopa open editions",
		"vopaOE",
		"ERC1155"
	],
	[
		"0x4caf9b75522db28082e789fc6fe4c48c721abc04",
		"Vo // Editions",
		"Vo",
		"ERC1155",
		"/images/nfts/0x4caf9b75522db28082e789fc6fe4c48c721abc04.png"
	],
	[
		"0x2c78b756cdffb35285a9efb6c4718159df9e161b",
		"wwweditions",
		"wwweditions",
		"ERC1155",
		"/images/nfts/0x2c78b756cdffb35285a9efb6c4718159df9e161b.png"
	],
	[
		"0xd8006d147272d8c90f4d660c2dd59f3c72a48556",
		"KAEJUNNI EDITIONS",
		"KAEJUNNI EDITIONS",
		"ERC1155",
		"/images/nfts/0xd8006d147272d8c90f4d660c2dd59f3c72a48556.png"
	],
	[
		"0x3b373b5967d7766343941d1fc8690d2306f6afdd",
		"Riwa NFTs",
		"RNFT",
		"ERC1155",
		"/images/nfts/0x3b373b5967d7766343941d1fc8690d2306f6afdd.png"
	],
	[
		"0xb186fa5ee9eee1cca3a521679b7a4dfe29ca887f",
		"BaseMint Gang Soundtrack",
		"BaseMint Gang Soundtrack",
		"ERC1155",
		"/images/nfts/0xb186fa5ee9eee1cca3a521679b7a4dfe29ca887f.png"
	],
	[
		"0x94a94c44b11fe85ac22f3a0f077e82dae0ef5470",
		"Nebenzu Editions",
		"NebenzuEd",
		"ERC1155",
		"/images/nfts/0x94a94c44b11fe85ac22f3a0f077e82dae0ef5470.png"
	],
	[
		"0x2793534c6be1ead360a32764eb105d749f41ee2c",
		"wakamepiza | editions",
		"wpzEd",
		"ERC1155"
	],
	[
		"0x12dc04d54cdfab782d1433b641f45694dd710bd9",
		"Berisiko's Editions Collection",
		"Berisiko's Editions Collection",
		"ERC1155",
		"/images/nfts/0x12dc04d54cdfab782d1433b641f45694dd710bd9.png"
	],
	[
		"0x78e1fdd193af5a8c091f3248ee4b906dff91fd40",
		"Living on the Internet",
		"Degen",
		"ERC1155",
		"/images/nfts/0x78e1fdd193af5a8c091f3248ee4b906dff91fd40.png"
	],
	[
		"0x837b40be9ce60c79b63d1356a5f9fcad721421ec",
		"CPG Genesis",
		"CPG",
		"ERC1155",
		"/images/nfts/0x837b40be9ce60c79b63d1356a5f9fcad721421ec.png"
	],
	[
		"0x4aacff464bf8c39d9e813c765784a1da1c6cc627",
		"The Tick3t",
		"TICK3TPASS",
		"ERC1155",
		"/images/nfts/0x4aacff464bf8c39d9e813c765784a1da1c6cc627.png"
	],
	[
		"0x2e599e74d3a33476a0b54e7d10b2566e23e789e8",
		"XERIESJAME DROP",
		"XERIESJAME",
		"ERC1155",
		"/images/nfts/0x2e599e74d3a33476a0b54e7d10b2566e23e789e8.png"
	],
	[
		"0xc06eb1bf19905653ccef41506b5cb93951cc58ba",
		"Bored.Ai Disk",
		"Disk",
		"ERC1155",
		"/images/nfts/0xc06eb1bf19905653ccef41506b5cb93951cc58ba.png"
	],
	[
		"0x0e0c04744e6b87cbbfc8bbae7a67c6b867deafe8",
		"DNS_ERR_LTD_",
		"edtdns",
		"ERC1155",
		"/images/nfts/0x0e0c04744e6b87cbbfc8bbae7a67c6b867deafe8.png"
	],
	[
		"0x61bf1e6ea05b4063ce86003c616812f5847c0653",
		"MIC-316VC",
		"MIC-316VC",
		"ERC1155",
		"/images/nfts/0x61bf1e6ea05b4063ce86003c616812f5847c0653.png"
	],
	[
		"0x7daa1335ee8da22fd115834b90670791179ac7b3",
		"Dead Is Dead OE",
		"DIDOE",
		"ERC1155",
		"/images/nfts/0x7daa1335ee8da22fd115834b90670791179ac7b3.png"
	],
	[
		"0x9e2b27f5357100a3be1cb3c8de85e8cb65793913",
		"Lisa Orth Multiple Editions",
		"Lisa Orth Multiple Editions",
		"ERC1155",
		"/images/nfts/0x9e2b27f5357100a3be1cb3c8de85e8cb65793913.png"
	],
	[
		"0x9b8ac9e2e2d8d241c78520fe50d092b87872b5ab",
		"Exotic Raccoon Special Editions",
		"ERAC",
		"ERC1155",
		"/images/nfts/0x9b8ac9e2e2d8d241c78520fe50d092b87872b5ab.png"
	],
	[
		"0xa102bc8bc743cd924a886023bba0c10d2db0b2a6",
		"Meander V2",
		"MUSE",
		"ERC1155",
		"/images/nfts/0xa102bc8bc743cd924a886023bba0c10d2db0b2a6.png"
	],
	[
		"0x45997f9ab6a414a59e00e8ea24ef63f3e87b3b10",
		"Fringe Drifters - Gear",
		"GFD",
		"ERC1155",
		"/images/nfts/0x45997f9ab6a414a59e00e8ea24ef63f3e87b3b10.png"
	],
	[
		"0x17e1bd6009702a4c47309d6dc8af0bc847327c46",
		"Nifty Island: Ultra Blades",
		"Nifty Island: Ultra Blades",
		"ERC1155",
		"/images/nfts/0x17e1bd6009702a4c47309d6dc8af0bc847327c46.png"
	],
	[
		"0x8cff5c361a110d35f4516803d0eafaaab3ce8624",
		"CyberMysticGarden",
		"MYSTK",
		"ERC1155"
	],
	[
		"0x60918f4496df16459a0e7b4ed8dc16fe31d909cf",
		"The Altitude Club (ETH)",
		"ALTITUDE",
		"ERC1155",
		"/images/nfts/0x60918f4496df16459a0e7b4ed8dc16fe31d909cf.png"
	],
	[
		"0x0aa00291f122e7980e1b95b125e7a4907eec5f36",
		"Aventurine Editions",
		"AVENE",
		"ERC1155",
		"/images/nfts/0x0aa00291f122e7980e1b95b125e7a4907eec5f36.png"
	],
	[
		"0xb34451a55a83e77994e946a43be47e689c6742a4",
		"Deth Retina's Hidden Pasture",
		"Deth Retina's Hidden Pasture",
		"ERC1155",
		"/images/nfts/0xb34451a55a83e77994e946a43be47e689c6742a4.png"
	],
	[
		"0x3d7b807b3584d1282c3da5379c412876fd0b4899",
		"The final chapter",
		"TFC",
		"ERC1155",
		"/images/nfts/0x3d7b807b3584d1282c3da5379c412876fd0b4899.png"
	],
	[
		"0xbfd957e4fcd759557d0463e37f8db1264ea60194",
		"Derrick Adams Studio",
		"Derrick Adams Studio",
		"ERC1155",
		"/images/nfts/0xbfd957e4fcd759557d0463e37f8db1264ea60194.png"
	],
	[
		"0xc2a98e505d9ba07a01dd8bcc5720018894bd6184",
		"granneberg editions",
		"granneberg editions",
		"ERC1155",
		"/images/nfts/0xc2a98e505d9ba07a01dd8bcc5720018894bd6184.png"
	],
	[
		"0x300b3c45f90744a219dee4c7441eae15ce42ef84",
		"Look Labs - In-game Items",
		"Look Labs - In-game Items",
		"ERC1155",
		"/images/nfts/0x300b3c45f90744a219dee4c7441eae15ce42ef84.png"
	],
	[
		"0x3364fa210fa91e0d6177ca9e3cb42ba24f9dfe87",
		"YON EDITIONS",
		"YON",
		"ERC1155",
		"/images/nfts/0x3364fa210fa91e0d6177ca9e3cb42ba24f9dfe87.png"
	],
	[
		"0xac04f49c9954051aea6534e5ba38f7880ed66845",
		"CyberDollars",
		"CYD",
		"ERC1155",
		"/images/nfts/0xac04f49c9954051aea6534e5ba38f7880ed66845.png"
	],
	[
		"0xbdf3b1e9495ca9285941b05b4504f612fde1f72d",
		"zebra Lifetime Access Passes",
		"ZLAP",
		"ERC1155",
		"/images/nfts/0xbdf3b1e9495ca9285941b05b4504f612fde1f72d.png"
	],
	[
		"0x9ce07b945b4cb912e338d141cf95e9636bf2e836",
		"Lascaux: The Future",
		"Hope",
		"ERC1155",
		"/images/nfts/0x9ce07b945b4cb912e338d141cf95e9636bf2e836.png"
	],
	[
		"0x3cb83a3d0956f06cc42c8fe197c4911309e1cc63",
		"CFW Editions",
		"CFW",
		"ERC1155",
		"/images/nfts/0x3cb83a3d0956f06cc42c8fe197c4911309e1cc63.png"
	],
	[
		"0x72d70aa10fe0e5878e7caa451ac9a7b65fc05aa9",
		"TVO Special",
		"TVO Special",
		"ERC1155",
		"/images/nfts/0x72d70aa10fe0e5878e7caa451ac9a7b65fc05aa9.png"
	],
	[
		"0x583f84cd9e925373d8fb3f73c23b0cd576471102",
		"\"Figuring It Out\" by DevonFigures",
		"FIO",
		"ERC1155",
		"/images/nfts/0x583f84cd9e925373d8fb3f73c23b0cd576471102.png"
	],
	[
		"0x842068ce6d5f6a9e79d45dc2b51a14cbbb62a6ea",
		"DRUNK SANTA's PRESENTS  (utility tokens) - cryptopainter",
		"CP25",
		"ERC1155",
		"/images/nfts/0x842068ce6d5f6a9e79d45dc2b51a14cbbb62a6ea.png"
	],
	[
		"0x82dba6bfca6e1b0139498881c0f947fc24f9616d",
		"The Emperor Club Collection TECC",
		"TEC",
		"ERC1155",
		"/images/nfts/0x82dba6bfca6e1b0139498881c0f947fc24f9616d.png"
	],
	[
		"0xb0a4143d0759aa00b91a5e809edface193e979df",
		"ARTE DE VIVIR :)",
		"ADV",
		"ERC1155",
		"/images/nfts/0xb0a4143d0759aa00b91a5e809edface193e979df.png"
	],
	[
		"0xb5e20ff0036e820360562597c2eaf9c633f9387d",
		"Spogel Open Editions",
		"OPENSPOGEL",
		"ERC1155",
		"/images/nfts/0xb5e20ff0036e820360562597c2eaf9c633f9387d.png"
	],
	[
		"0xc54f1db9f23d961b1927f58e35c0d44111fd54bb",
		"Panoramic_ART",
		"Panoramic_ART",
		"ERC1155",
		"/images/nfts/0xc54f1db9f23d961b1927f58e35c0d44111fd54bb.png"
	],
	[
		"0x6f556e1031a8263b2c81ffaced3a6c62e6ba823c",
		"Gawang Imahe",
		"SLAP",
		"ERC1155",
		"/images/nfts/0x6f556e1031a8263b2c81ffaced3a6c62e6ba823c.png"
	],
	[
		"0xd70e954c3e574aa1e65fd3f7c34ac9445b83c6b7",
		"Melted Mindz",
		"MELT",
		"ERC1155",
		"/images/nfts/0xd70e954c3e574aa1e65fd3f7c34ac9445b83c6b7.png"
	],
	[
		"0xe25e7e81bf26d6f6ca8d4731b4f982d615a2a83e",
		"Formless by RAREBANDY",
		"FORMLESS",
		"ERC1155",
		"/images/nfts/0xe25e7e81bf26d6f6ca8d4731b4f982d615a2a83e.png"
	],
	[
		"0xaf3b2999f8e5b80ea9b497b48b3423f15b64ba12",
		"Crypto Coffee Cafe",
		"CAFE",
		"ERC1155",
		"/images/nfts/0xaf3b2999f8e5b80ea9b497b48b3423f15b64ba12.png"
	],
	[
		"0xf03f8ed5d0cc1d933dc3a91cd7f73db4dd2b1366",
		"loose balloons by jeremy fall",
		"lb",
		"ERC1155",
		"/images/nfts/0xf03f8ed5d0cc1d933dc3a91cd7f73db4dd2b1366.png"
	],
	[
		"0x6fdec0a887a306dc8bad780bf569d266bf408411",
		"Quirkmasters",
		"QMC",
		"ERC1155",
		"/images/nfts/0x6fdec0a887a306dc8bad780bf569d266bf408411.png"
	],
	[
		"0x729cd6226751279030757f61b2cac4798c949fa1",
		"Lux Cards",
		"Lux Cards",
		"ERC1155",
		"/images/nfts/0x729cd6226751279030757f61b2cac4798c949fa1.png"
	],
	[
		"0x5735040c785437ffdd1814eebb446e5d726597c1",
		"Chamari",
		"CHM",
		"ERC1155",
		"/images/nfts/0x5735040c785437ffdd1814eebb446e5d726597c1.png"
	],
	[
		"0x43670bec6a34ae0d046888cdd68dde108e434813",
		"Glitch Expressionism Editions",
		"Glitch Expressionism Editions",
		"ERC1155",
		"/images/nfts/0x43670bec6a34ae0d046888cdd68dde108e434813.png"
	],
	[
		"0xb102a427738327f624182f2f85a76a1fddadc632",
		"dverso - TICKETs",
		"dverso - TICKETs",
		"ERC1155",
		"/images/nfts/0xb102a427738327f624182f2f85a76a1fddadc632.png"
	],
	[
		"0x04cbe8e9b82f1bc90fb2370c45db162eb03b7bc1",
		"Freaky Pass",
		"Freaky Pass",
		"ERC1155",
		"/images/nfts/0x04cbe8e9b82f1bc90fb2370c45db162eb03b7bc1.png"
	],
	[
		"0x0e3ec4a7fcd9e0b0afe47ae645dc0373aa07b915",
		"Sarahc.eth V2",
		"SEC",
		"ERC1155",
		"/images/nfts/0x0e3ec4a7fcd9e0b0afe47ae645dc0373aa07b915.png"
	],
	[
		"0x66a32479aa572f90c4b6201bfbfb72edf0942253",
		"hookyproject",
		"HOOKYp",
		"ERC1155"
	],
	[
		"0x1c3562ec0a1e83c529363a66314e3339ff1fc095",
		"Imaginary Artifacts",
		"ImaginaryArtifacts",
		"ERC1155",
		"/images/nfts/0x1c3562ec0a1e83c529363a66314e3339ff1fc095.png"
	],
	[
		"0x5baa9279af002f1da349054d16e0f101220c407c",
		"JORDIGANDUL.1155",
		"GNDL",
		"ERC1155"
	],
	[
		"0xbc20b5f2c775fd5a829a451a5c5811a4ca76d5ed",
		"McX's Editions",
		"McX's Editions",
		"ERC1155",
		"/images/nfts/0xbc20b5f2c775fd5a829a451a5c5811a4ca76d5ed.png"
	],
	[
		"0xf60073e7666dcdc01c57a49587264b31b829622d",
		"Moshimoshi",
		"M2",
		"ERC1155",
		"/images/nfts/0xf60073e7666dcdc01c57a49587264b31b829622d.png"
	],
	[
		"0x0f69461699fed9b21380d769ac101f14592326bb",
		"A5ht4r Minimal",
		"A54MIN",
		"ERC1155",
		"/images/nfts/0x0f69461699fed9b21380d769ac101f14592326bb.png"
	],
	[
		"0x055f16af0c61aa67176224d8c2407c9a5628bcca",
		"archive edition",
		"AE",
		"ERC1155",
		"/images/nfts/0x055f16af0c61aa67176224d8c2407c9a5628bcca.png"
	],
	[
		"0x3ad8cc04052a7895b1bb65c1b707a09e6668b4af",
		"Free Money by eerieum_",
		"free",
		"ERC1155"
	],
	[
		"0x8aa86367f579a647f8e3757fe51968e5a5caf840",
		"Ethernity's Master Collection",
		"Ethernity's Master Collection",
		"ERC1155",
		"/images/nfts/0x8aa86367f579a647f8e3757fe51968e5a5caf840.png"
	],
	[
		"0xde4a5de60df5f4f56ecc8e6f1b4a9692fea0e376",
		"Ada Crow Editions",
		"ACE",
		"ERC1155",
		"/images/nfts/0xde4a5de60df5f4f56ecc8e6f1b4a9692fea0e376.png"
	],
	[
		"0x64feedfa14ca8fe8a366ac83e5c5788febd76eb9",
		"Gimme the Loot! by ChainZoku",
		"Gimme the Loot! by ChainZoku",
		"ERC1155",
		"/images/nfts/0x64feedfa14ca8fe8a366ac83e5c5788febd76eb9.png"
	],
	[
		"0xf238eba86b375fbff9a0c7825ef6793cb2892422",
		"Distorted Norms",
		"Distorted Norms",
		"ERC1155",
		"/images/nfts/0xf238eba86b375fbff9a0c7825ef6793cb2892422.png"
	],
	[
		"0x8c51db191caffdcd756fe0eb220ca4abcd892e2b",
		"DISTURBIA SQUARES",
		"DIST1155",
		"ERC1155",
		"/images/nfts/0x8c51db191caffdcd756fe0eb220ca4abcd892e2b.png"
	],
	[
		"0x6096ba5fd18493ec8ac304eb14bfab1d5cb19e14",
		"Abstract Photogaphy by TheRanch",
		"TRC",
		"ERC1155",
		"/images/nfts/0x6096ba5fd18493ec8ac304eb14bfab1d5cb19e14.png"
	],
	[
		"0x40bb86987054b7e07db0f64d2fd4853f1addc56b",
		"Deprecated, Visit New Collectoin",
		"Deprecated, Visit New Collectoin",
		"ERC1155",
		"/images/nfts/0x40bb86987054b7e07db0f64d2fd4853f1addc56b.png"
	],
	[
		"0x7ec39ff26c25a21dab8bb3ab4a75d6797a088f15",
		"MABLAB editions",
		"MABLABed",
		"ERC1155",
		"/images/nfts/0x7ec39ff26c25a21dab8bb3ab4a75d6797a088f15.png"
	],
	[
		"0x2af55f1fa2ac44e2f5a199ff16e5eafae37b7389",
		"Dystolab VX",
		"Dystolab VX",
		"ERC1155",
		"/images/nfts/0x2af55f1fa2ac44e2f5a199ff16e5eafae37b7389.png"
	],
	[
		"0x90b5eb982c4674bf9179b1ecb2058021fbe89950",
		"1B DROP",
		"1B DROP",
		"ERC1155",
		"/images/nfts/0x90b5eb982c4674bf9179b1ecb2058021fbe89950.png"
	],
	[
		"0x0476ba0846a79b97686223ffd22448fc61a5c0d7",
		"CLOWN!",
		"CLWN",
		"ERC1155",
		"/images/nfts/0x0476ba0846a79b97686223ffd22448fc61a5c0d7.png"
	],
	[
		"0x9922638937b99d12dbd1caf84a7eb439bb6222d2",
		"Knights Who Say Nah - Artifacts",
		"KNIGHTS",
		"ERC1155",
		"/images/nfts/0x9922638937b99d12dbd1caf84a7eb439bb6222d2.png"
	],
	[
		"0x095da5155e0147e159ff1cc312dc13b6523afd30",
		"When World's Cvllvde",
		"WWCx",
		"ERC1155",
		"/images/nfts/0x095da5155e0147e159ff1cc312dc13b6523afd30.png"
	],
	[
		"0xc7e5e9434f4a71e6db978bd65b4d61d3593e5f27",
		"Alpaca City",
		"Alpaca City",
		"ERC1155",
		"/images/nfts/0xc7e5e9434f4a71e6db978bd65b4d61d3593e5f27.png"
	],
	[
		"0xe044541000ac91058accda82084f67c4878f384e",
		"Free Corn Editions",
		"CORN",
		"ERC1155",
		"/images/nfts/0xe044541000ac91058accda82084f67c4878f384e.png"
	],
	[
		"0x2ee1275af10df866103a9a38fa19fb8941b139c2",
		"Pastastore",
		"pasta",
		"ERC1155",
		"/images/nfts/0x2ee1275af10df866103a9a38fa19fb8941b139c2.png"
	],
	[
		"0xffd4ca7a657fe63e51f5c941097559f6b43e89bf",
		"My Final Fables - MFF",
		"MFFBL",
		"ERC1155"
	],
	[
		"0xc9a89670a7f9dc65f13f639cf4cafae5924cc667",
		"KEKDROP",
		"KEKDROP",
		"ERC1155",
		"/images/nfts/0xc9a89670a7f9dc65f13f639cf4cafae5924cc667.png"
	],
	[
		"0xeacf3bc37a3bf1c1166a0d9a4df3f1679c26b52e",
		"MUSIC DROPS by WarpSound",
		"WSMUSICDROPS",
		"ERC1155",
		"/images/nfts/0xeacf3bc37a3bf1c1166a0d9a4df3f1679c26b52e.png"
	],
	[
		"0x1c77c5d488a841dd4fdd7013bb673eb8566d208c",
		"Season 0 Driver Components",
		"Season 0 Driver Components",
		"ERC1155",
		"/images/nfts/0x1c77c5d488a841dd4fdd7013bb673eb8566d208c.png"
	],
	[
		"0x20c5867fc1c97a0340896e70a52dd1387c8a0839",
		"Anderson Bluu x STAPLEVERSE — POOP GANG: “What the Pigeon”",
		"Anderson Bluu x STAPLEVERSE — POOP GANG: “What the Pigeon”",
		"ERC1155",
		"/images/nfts/0x20c5867fc1c97a0340896e70a52dd1387c8a0839.png"
	],
	[
		"0xc29f4f518682127ff18ecccfef2a5ce62e9caf31",
		"SERIES FANTASY",
		"SERIES FANTASY",
		"ERC1155",
		"/images/nfts/0xc29f4f518682127ff18ecccfef2a5ce62e9caf31.png"
	],
	[
		"0xd8a88c990b3348502951ad906eda0ae48e9d11c5",
		"JEFFTACULAR",
		"JEFFTACULAR",
		"ERC1155",
		"/images/nfts/0xd8a88c990b3348502951ad906eda0ae48e9d11c5.png"
	],
	[
		"0x4a9a108760d2ef9aac1b333fbcebe3cc4bca6857",
		"MintFace Roads or Rivers",
		"MintFace Roads or Rivers",
		"ERC1155",
		"/images/nfts/0x4a9a108760d2ef9aac1b333fbcebe3cc4bca6857.png"
	],
	[
		"0xdd16b4f8e7ec04269c85b6a80b742abc11e66872",
		"TOGETHER by Hiroji Kotegawa",
		"TOGETHER by Hiroji Kotegawa",
		"ERC1155",
		"/images/nfts/0xdd16b4f8e7ec04269c85b6a80b742abc11e66872.png"
	],
	[
		"0x5da59fb29eba59f37811e79d60c349a677822ba6",
		"Alien Frens Key",
		"Alien Frens Key",
		"ERC1155",
		"/images/nfts/0x5da59fb29eba59f37811e79d60c349a677822ba6.png"
	],
	[
		"0x5bf506b728a5712bfb0e298952bb7dfbf990d4f8",
		"Brownie's World",
		"BROWNIE",
		"ERC1155",
		"/images/nfts/0x5bf506b728a5712bfb0e298952bb7dfbf990d4f8.png"
	],
	[
		"0xd433e7bb2e73ebff8afa2fe85cf0d2c550dd3779",
		"GMAIRDROPS",
		"GMAIR",
		"ERC1155",
		"/images/nfts/0xd433e7bb2e73ebff8afa2fe85cf0d2c550dd3779.png"
	],
	[
		"0x356b5a45438552902be1d7d0c0155dafdce98bd7",
		"Frenzone",
		"FREN",
		"ERC1155",
		"/images/nfts/0x356b5a45438552902be1d7d0c0155dafdce98bd7.png"
	],
	[
		"0x0c4376a43aec09745006d4822f9600a1cf10cfd6",
		"MadYakK Editions",
		"MadYakK Editions",
		"ERC1155",
		"/images/nfts/0x0c4376a43aec09745006d4822f9600a1cf10cfd6.png"
	],
	[
		"0xd0f9bb6aae066f475fe83562aab8be785f035e92",
		"We're New Here Collections",
		"INHMC",
		"ERC1155",
		"/images/nfts/0xd0f9bb6aae066f475fe83562aab8be785f035e92.png"
	],
	[
		"0x6dd177407e663498ecd0e7506b1e29aaf3ed6128",
		"Naughty or NicΞ",
		"XMAS",
		"ERC1155"
	],
	[
		"0xc8c96b3cb086ab0e44e0e6c2d4e5159c441d11d6",
		"David Ariew Interleave Artwork",
		"David Ariew Interleave Artwork",
		"ERC1155",
		"/images/nfts/0xc8c96b3cb086ab0e44e0e6c2d4e5159c441d11d6.png"
	],
	[
		"0x7d4a8879559b49918ae305dff3fb396303f4ced7",
		"ShhhArt",
		"Shhhart",
		"ERC1155",
		"/images/nfts/0x7d4a8879559b49918ae305dff3fb396303f4ced7.png"
	],
	[
		"0x86d946878954f1050a2d2d8d8c7d46c492a6bc6e",
		"No Fare",
		"NOFARE",
		"ERC1155",
		"/images/nfts/0x86d946878954f1050a2d2d8d8c7d46c492a6bc6e.png"
	],
	[
		"0x229b9d484d0be7cc84c815ed024e6e839ee7c067",
		"The ReMemes by Andi P",
		"The ReMemes by Andi P",
		"ERC1155",
		"/images/nfts/0x229b9d484d0be7cc84c815ed024e6e839ee7c067.png"
	],
	[
		"0x568aec042c9086a60558d7ddef80e32098c0516b",
		"Trap 2023 Drops",
		"TGD",
		"ERC1155",
		"/images/nfts/0x568aec042c9086a60558d7ddef80e32098c0516b.png"
	],
	[
		"0x86fe55decc6428bd94d9c51aa55501bec340b601",
		"John Rivas - El Ipad Cipote",
		"JOHNRIVAS",
		"ERC1155",
		"/images/nfts/0x86fe55decc6428bd94d9c51aa55501bec340b601.png"
	],
	[
		"0x0bab4014df978eb90bdc42b004b15b859a917bad",
		"Phanksy",
		"PSKY",
		"ERC1155",
		"/images/nfts/0x0bab4014df978eb90bdc42b004b15b859a917bad.png"
	],
	[
		"0xbb7b31d6cc662259b6b95e798b94b31f4e2814ae",
		"OBYOR OPEN EDITIONS",
		"OBYOR OPEN EDITIONS",
		"ERC1155",
		"/images/nfts/0xbb7b31d6cc662259b6b95e798b94b31f4e2814ae.png"
	],
	[
		"0x1df28748276b6d60c1bb5783cb78e4a014b7c16b",
		"ModelVerse.X",
		"ModelVerse.X",
		"ERC1155",
		"/images/nfts/0x1df28748276b6d60c1bb5783cb78e4a014b7c16b.png"
	],
	[
		"0xa4377f3638a2779a5610e80f8f3aee867fbde0af",
		"DIGITAL:CERAMICS",
		"VMDC",
		"ERC1155",
		"/images/nfts/0xa4377f3638a2779a5610e80f8f3aee867fbde0af.png"
	],
	[
		"0x99698c57b4c026ef108370a06cf90fd7f800ab39",
		"Cereal Club Balloons",
		"CCB",
		"ERC1155",
		"/images/nfts/0x99698c57b4c026ef108370a06cf90fd7f800ab39.png"
	],
	[
		"0x33112b0229464fcc2746a7b29079e7068025c6a3",
		"Open Editions x Nastasyah",
		"Open Editions x Nastasyah",
		"ERC1155",
		"/images/nfts/0x33112b0229464fcc2746a7b29079e7068025c6a3.png"
	],
	[
		"0xbadf7c371442ee101bedb479f9efb318cab9c9ec",
		"Seven Woodland Tales: Edition",
		"SWTE",
		"ERC1155",
		"/images/nfts/0xbadf7c371442ee101bedb479f9efb318cab9c9ec.png"
	],
	[
		"0xe8d278d08c51d9865c5bf9e20bbe3b0dd6fa200f",
		"Aaron NFT Art",
		"Aaron NFT Art",
		"ERC1155",
		"/images/nfts/0xe8d278d08c51d9865c5bf9e20bbe3b0dd6fa200f.png"
	],
	[
		"0xe01033dafe0ecf04a3eb0e2da90bbc6c45d7656a",
		"nikita x editions",
		"nxe",
		"ERC1155",
		"/images/nfts/0xe01033dafe0ecf04a3eb0e2da90bbc6c45d7656a.png"
	],
	[
		"0x3398e8f3b27faf77463ab9479080c49350aba5be",
		"Alpha Tribe",
		"ALPHAPASS",
		"ERC1155",
		"/images/nfts/0x3398e8f3b27faf77463ab9479080c49350aba5be.png"
	],
	[
		"0x2df7bedb3cf02c948e129d68bbd6c12209150604",
		"NrG PIGEONZ x CROCS",
		"NrG PIGEONZ x CROCS",
		"ERC1155",
		"/images/nfts/0x2df7bedb3cf02c948e129d68bbd6c12209150604.png"
	],
	[
		"0xfc7459cf537a380bb0459a49e7144a948c5b72db",
		"Editions x Rui",
		"RuiHuang",
		"ERC1155",
		"/images/nfts/0xfc7459cf537a380bb0459a49e7144a948c5b72db.png"
	],
	[
		"0x4d8ccf1dda3fb2731f1d6efdef9a5ab6042b5bb9",
		"v!be/ by 1.618/",
		"vbe1618",
		"ERC1155",
		"/images/nfts/0x4d8ccf1dda3fb2731f1d6efdef9a5ab6042b5bb9.png"
	],
	[
		"0x412856bd98dc2cb83852d99b6078ea56dad5aed2",
		"Disco Studios Collector Pass",
		"DSCOLL",
		"ERC1155",
		"/images/nfts/0x412856bd98dc2cb83852d99b6078ea56dad5aed2.png"
	],
	[
		"0x273d28863dc87e6fd30a107b8c1871457c0dabfa",
		"ChatGPT x totty.eth",
		"TTYCG",
		"ERC1155",
		"/images/nfts/0x273d28863dc87e6fd30a107b8c1871457c0dabfa.png"
	],
	[
		"0xdbd5d5e001d6713d3b62878dc5dfad4c19d8dd66",
		"Dooplication Origins",
		"WDDOOP",
		"ERC1155",
		"/images/nfts/0xdbd5d5e001d6713d3b62878dc5dfad4c19d8dd66.png"
	],
	[
		"0xd4751cfec20d1faa3f80c3445a0ad79bf0386195",
		"Pondering Edition",
		"POND",
		"ERC1155",
		"/images/nfts/0xd4751cfec20d1faa3f80c3445a0ad79bf0386195.png"
	],
	[
		"0xa09791f80d26e4407473049916ba8cd419031746",
		"Warp X",
		"Warp X",
		"ERC1155",
		"/images/nfts/0xa09791f80d26e4407473049916ba8cd419031746.png"
	],
	[
		"0x2e4b541bfd4ee17d36c1e8538babfa2fa76d3266",
		"Maxwellinked",
		"TM",
		"ERC1155",
		"/images/nfts/0x2e4b541bfd4ee17d36c1e8538babfa2fa76d3266.png"
	],
	[
		"0xf1e15c22d3400b190ed262d1165ad165ad6e2dc6",
		"DECONSTRUCT - BLACK BOX",
		"DECONSTRUCT - BLACK BOX",
		"ERC1155",
		"/images/nfts/0xf1e15c22d3400b190ed262d1165ad165ad6e2dc6.png"
	],
	[
		"0x083030de725ffd487c9b8032b80046052fab4bbb",
		"VIP PASS (PAC)",
		"VIP PASS (PAC)",
		"ERC1155",
		"/images/nfts/0x083030de725ffd487c9b8032b80046052fab4bbb.png"
	],
	[
		"0xd1240d3f8e7ccdfc5592f094beff4a51efaf310b",
		"\"Magical\" Door by qubibi",
		"\"Magical\" Door by qubibi",
		"ERC1155",
		"/images/nfts/0xd1240d3f8e7ccdfc5592f094beff4a51efaf310b.png"
	],
	[
		"0x52cdba4e119e101706ddf774fe5696627df0bc31",
		"The Waq Waq Island Manuscript",
		"The Waq Waq Island Manuscript",
		"ERC1155",
		"/images/nfts/0x52cdba4e119e101706ddf774fe5696627df0bc31.png"
	],
	[
		"0x5ad027c025b65f91ed6a31f0ecdb11c5a77170e0",
		"Early Open Editions by Chain Virus",
		"Early Open Editions by Chain Virus",
		"ERC1155",
		"/images/nfts/0x5ad027c025b65f91ed6a31f0ecdb11c5a77170e0.png"
	],
	[
		"0xe86183d821ec08a51b0cccab916cf3207ef6de15",
		"Alizé Jireh Editions",
		"AJOE",
		"ERC1155",
		"/images/nfts/0xe86183d821ec08a51b0cccab916cf3207ef6de15.png"
	],
	[
		"0xe07d7dc6cc730ebea9edcf78d05d47cabc8d9a48",
		"Beeple XXV: The Millionth Day",
		"BeepleXXV",
		"ERC1155",
		"/images/nfts/0xe07d7dc6cc730ebea9edcf78d05d47cabc8d9a48.png"
	],
	[
		"0xbc43d8528538bfd41a8a736af4bec2d80f50b7f1",
		"Saikyo Ninjart Badge",
		"SNB",
		"ERC1155",
		"/images/nfts/0xbc43d8528538bfd41a8a736af4bec2d80f50b7f1.png"
	],
	[
		"0xcca4690cb57464d8c587195331e333b3f460ad53",
		"TBURD DEPLOYER",
		"TBD",
		"ERC1155",
		"/images/nfts/0xcca4690cb57464d8c587195331e333b3f460ad53.png"
	],
	[
		"0xb11f30feed18b6b31e393f75509fb834c040e7e1",
		"Another beautiFool Day",
		"RIP",
		"ERC1155",
		"/images/nfts/0xb11f30feed18b6b31e393f75509fb834c040e7e1.png"
	],
	[
		"0xf41fbc1ceaf70bf4dde519b7086a2151cfe3cbdf",
		"CYBER EDITIONS",
		"CYBER EDITIONS",
		"ERC1155",
		"/images/nfts/0xf41fbc1ceaf70bf4dde519b7086a2151cfe3cbdf.png"
	],
	[
		"0x8415d610f19641d97c088b532663cdca3dc58826",
		"Apocalypse Art - Editions",
		"Apocalypse Art - Editions",
		"ERC1155",
		"/images/nfts/0x8415d610f19641d97c088b532663cdca3dc58826.png"
	],
	[
		"0xb5ec720f23804df2ef377764c714e4470a7dd539",
		"Ron's Tacklebox V2",
		"Tacklebox",
		"ERC1155",
		"/images/nfts/0xb5ec720f23804df2ef377764c714e4470a7dd539.png"
	],
	[
		"0x922d2ee261e2cd8b0b04ac1d0ff878c9df8989c8",
		"Right Click $usscribe",
		"RAW",
		"ERC1155",
		"/images/nfts/0x922d2ee261e2cd8b0b04ac1d0ff878c9df8989c8.png"
	],
	[
		"0xbab922cd5b774fd36508c81f1cb3049ee2d42441",
		"Monas x HQ Editions  // Typing...",
		"ME1",
		"ERC1155",
		"/images/nfts/0xbab922cd5b774fd36508c81f1cb3049ee2d42441.png"
	],
	[
		"0xd0a7f1a1df470aa92dcbb55b00adb9f4da10f306",
		"Travel Dreams Editions",
		"Travel Dreams Editions",
		"ERC1155",
		"/images/nfts/0xd0a7f1a1df470aa92dcbb55b00adb9f4da10f306.png"
	],
	[
		"0x4b8725fae8a900569a358e3e27d544aa82d784aa",
		"X and X",
		"X20",
		"ERC1155",
		"/images/nfts/0x4b8725fae8a900569a358e3e27d544aa82d784aa.png"
	],
	[
		"0xa819e8e8c14892824fccbcc54e74c2a89edeff65",
		"Formation Of Mysteria",
		"FOM",
		"ERC1155",
		"/images/nfts/0xa819e8e8c14892824fccbcc54e74c2a89edeff65.png"
	],
	[
		"0x37e206b04f2ee5ccf5e459c03290afece31c267f",
		"Lost Dreams Among the Ash",
		"Lost Dreams Among the Ash",
		"ERC1155",
		"/images/nfts/0x37e206b04f2ee5ccf5e459c03290afece31c267f.png"
	],
	[
		"0xe46b9dc2201015dda18c378197d168e7b2b3ea03",
		"Illuminati x Helix",
		"ILHX",
		"ERC1155",
		"/images/nfts/0xe46b9dc2201015dda18c378197d168e7b2b3ea03.png"
	],
	[
		"0x687de90a6eded5cbf7ae20035e00d95afd4592de",
		"goblintown x Helix2",
		"GTHX",
		"ERC1155",
		"/images/nfts/0x687de90a6eded5cbf7ae20035e00d95afd4592de.png"
	],
	[
		"0x268aa82704d6366cbe202e381aeaaf90c800b8f5",
		"TAKE ME TO THE WATER",
		"TMTTW",
		"ERC1155"
	],
	[
		"0x13e9968ed3bef3d86dba94421bad6ba258a98561",
		"Messi Time Machine",
		"Messi Time Machine",
		"ERC1155",
		"/images/nfts/0x13e9968ed3bef3d86dba94421bad6ba258a98561.png"
	],
	[
		"0xa88b7fc8de5cb9938b2588a6fb155f310bf612dd",
		"Derividust",
		"Derividust",
		"ERC1155",
		"/images/nfts/0xa88b7fc8de5cb9938b2588a6fb155f310bf612dd.png"
	],
	[
		"0x48a2c36fc89f5c15766acaf1c42e8e4ea005b3dc",
		"Mike Karolos Editions",
		"MK",
		"ERC1155",
		"/images/nfts/0x48a2c36fc89f5c15766acaf1c42e8e4ea005b3dc.png"
	],
	[
		"0xef7862d6cdf0e2fb28374bcb32fa2e425fc8a8df",
		"MetaScraper",
		"MetaScraper",
		"ERC1155",
		"/images/nfts/0xef7862d6cdf0e2fb28374bcb32fa2e425fc8a8df.png"
	],
	[
		"0xf57748c87bad08229ecc2d1122867a842c25303c",
		"ArtDog.",
		"ArtDog.",
		"ERC1155",
		"/images/nfts/0xf57748c87bad08229ecc2d1122867a842c25303c.png"
	],
	[
		"0x7e9a8a7f16b96572a0f9aa5b103e711153d766bd",
		"Meds OE",
		"Mds",
		"ERC1155",
		"/images/nfts/0x7e9a8a7f16b96572a0f9aa5b103e711153d766bd.png"
	],
	[
		"0xf1d6e2b649fea887e132a8755ec62ae2114aa908",
		"Apes Together Founding Pass Origin",
		"Apes Together Founding Pass Origin",
		"ERC1155",
		"/images/nfts/0xf1d6e2b649fea887e132a8755ec62ae2114aa908.png"
	],
	[
		"0xc332fa232ab53628d0e9acbb806c5ee5a82b3467",
		"Hypnagogic by rudxane",
		"Hypnagogic by rudxane",
		"ERC1155",
		"/images/nfts/0xc332fa232ab53628d0e9acbb806c5ee5a82b3467.png"
	],
	[
		"0xdebc3785c668a0bc72b38c4190601a499127c5da",
		"STATIC - SCRNRZ ART",
		"SSA",
		"ERC1155"
	],
	[
		"0x7405afb7744e11b5772a4c9cccfecab202654b29",
		"Marcel Deneuve",
		"Marcel Deneuve",
		"ERC1155",
		"/images/nfts/0x7405afb7744e11b5772a4c9cccfecab202654b29.png"
	],
	[
		"0x255e91bd1a92dd16212635dc1d6643b0cdffee52",
		"The Hue - Blue",
		"HUE",
		"ERC1155",
		"/images/nfts/0x255e91bd1a92dd16212635dc1d6643b0cdffee52.png"
	],
	[
		"0xebb938b75950f091e0ff92470949d31d617fa7c3",
		"cc0fukt",
		"cc0fukt",
		"ERC1155",
		"/images/nfts/0xebb938b75950f091e0ff92470949d31d617fa7c3.png"
	],
	[
		"0x20e8ad5e101806045c238d1d82ee3eaf479cc237",
		"VOX Holiday Mystery Box",
		"VHMB",
		"ERC1155"
	],
	[
		"0x9bc27f863dcae553485a9d9a3a5787ef84cf11f6",
		"Studio XX",
		"XX",
		"ERC1155",
		"/images/nfts/0x9bc27f863dcae553485a9d9a3a5787ef84cf11f6.png"
	],
	[
		"0xea462af52ceb68de674d5eaf1d681a44af0b00dc",
		"Defimons Characters",
		"MONSKIN",
		"ERC1155",
		"/images/nfts/0xea462af52ceb68de674d5eaf1d681a44af0b00dc.png"
	],
	[
		"0x4668ec63111640be2bcbaa23af1b86192bbea5f9",
		"Altarius",
		"Altarius",
		"ERC1155",
		"/images/nfts/0x4668ec63111640be2bcbaa23af1b86192bbea5f9.png"
	],
	[
		"0xab1303551dce526ab1238ed13ef067b3b19f3c94",
		"Space and Time Community NFT v3-v4",
		"SxTC",
		"ERC1155",
		"/images/nfts/0xab1303551dce526ab1238ed13ef067b3b19f3c94.png"
	],
	[
		"0x699c6acb70bcb96ac306f2ba7e1996baa8a56094",
		"Dad Art Editions",
		"Dad Art Editions",
		"ERC1155",
		"/images/nfts/0x699c6acb70bcb96ac306f2ba7e1996baa8a56094.png"
	],
	[
		"0x4c429935b4b3115130044c98bde905ec11c4e865",
		"Panai Chan Multiple Edition",
		"Panai Chan Multiple Edition",
		"ERC1155",
		"/images/nfts/0x4c429935b4b3115130044c98bde905ec11c4e865.png"
	],
	[
		"0x83bc52e5d69ed52c30dc30327b67a71c0b5275f2",
		"VOX Land (Open Sea Compliant)",
		"VXLND",
		"ERC1155"
	],
	[
		"0xc58363f8ef1dd36a6ed9a549ccfe633e4be59f6b",
		"The Bonfire is Open to All",
		"BONFIRE",
		"ERC1155",
		"/images/nfts/0xc58363f8ef1dd36a6ed9a549ccfe633e4be59f6b.png"
	],
	[
		"0xfc6fd9f08478f268ae37d7db361ed305ea85e8fd",
		"Shæreware",
		"SHRWR",
		"ERC1155",
		"/images/nfts/0xfc6fd9f08478f268ae37d7db361ed305ea85e8fd.png"
	],
	[
		"0xa9b21c984dfe582494865a364e8429138cf3fbd2",
		"MonTeers",
		"st122101",
		"ERC1155",
		"/images/nfts/0xa9b21c984dfe582494865a364e8429138cf3fbd2.png"
	],
	[
		"0x13b45df7bc0d5c39a694cf7b45ef79c8eec59b53",
		"SkullsByGage",
		"SKULL",
		"ERC1155",
		"/images/nfts/0x13b45df7bc0d5c39a694cf7b45ef79c8eec59b53.png"
	],
	[
		"0xbf826778e20274a33cc896275f3f01c97bca7b71",
		"FATES Asteroids",
		"ASTR",
		"ERC1155",
		"/images/nfts/0xbf826778e20274a33cc896275f3f01c97bca7b71.png"
	],
	[
		"0x34f3fc52d923d9340343464138aa394cd4f9e26e",
		"FATES Pilots Genesis",
		"CHAR",
		"ERC1155",
		"/images/nfts/0x34f3fc52d923d9340343464138aa394cd4f9e26e.png"
	],
	[
		"0x57288b3324ddbfbaf5d3ae911428ed6fe1a7d802",
		"Release Your Energy",
		"MMM",
		"ERC1155",
		"/images/nfts/0x57288b3324ddbfbaf5d3ae911428ed6fe1a7d802.png"
	],
	[
		"0xad7c51fa4ea7346257390ddaa07c8844cf8f8ecb",
		"level V2",
		"level V2",
		"ERC1155",
		"/images/nfts/0xad7c51fa4ea7346257390ddaa07c8844cf8f8ecb.png"
	],
	[
		"0x0c6c42ec06267cd3f31a7504d10a070c8f2d9ab2",
		"neature glitch by kryptokyle",
		"krypk",
		"ERC1155",
		"/images/nfts/0x0c6c42ec06267cd3f31a7504d10a070c8f2d9ab2.png"
	],
	[
		"0x4d9946244245c1ae688a38da5c37491e476bf617",
		"yin yang and choatic world",
		"YNYG",
		"ERC1155",
		"/images/nfts/0x4d9946244245c1ae688a38da5c37491e476bf617.png"
	],
	[
		"0x83ecb33c9ac7b9bcebad835a25ba74b2477dd733",
		"Ledger x OSF - Ledger Op3n 2022",
		"LDGROSF",
		"ERC1155",
		"/images/nfts/0x83ecb33c9ac7b9bcebad835a25ba74b2477dd733.png"
	],
	[
		"0x76c4c10445307a46c225fccd2bc9ecfc0c76ec2b",
		"Death-Bringer | Book 1: Shadows of the Gods",
		"DBBD",
		"ERC1155",
		"/images/nfts/0x76c4c10445307a46c225fccd2bc9ecfc0c76ec2b.png"
	],
	[
		"0x12a4f2d9f2d9ad775213466572c287bd48e25c34",
		"Nico23 Limited Editions",
		"LTD23",
		"ERC1155",
		"/images/nfts/0x12a4f2d9f2d9ad775213466572c287bd48e25c34.png"
	],
	[
		"0x9c98e860c6e48a97cb02afc1d29f07cb5c9176db",
		"Platform Holiday Mint",
		"PLTFHM",
		"ERC1155",
		"/images/nfts/0x9c98e860c6e48a97cb02afc1d29f07cb5c9176db.png"
	],
	[
		"0x8bf008ce4aca6d9d1d98a25c76e52800dd2f4213",
		"The Bottom is Near",
		"The Bottom is Near",
		"ERC1155",
		"/images/nfts/0x8bf008ce4aca6d9d1d98a25c76e52800dd2f4213.png"
	],
	[
		"0xff4796dba746b399cecbf28cc785614e4bb44942",
		"CXGNUS REGISTRY",
		"CR",
		"ERC1155",
		"/images/nfts/0xff4796dba746b399cecbf28cc785614e4bb44942.png"
	],
	[
		"0xed9cf19ac80ba7e45de15c04f2c8a08228aabb2e",
		"neurocolor Open Editions",
		"PSYOP",
		"ERC1155",
		"/images/nfts/0xed9cf19ac80ba7e45de15c04f2c8a08228aabb2e.png"
	],
	[
		"0x465447e1542a72a898dcda3b5e8da9c4b3d3882a",
		"RS 2.0 NFT Contract",
		"RS2C",
		"ERC1155",
		"/images/nfts/0x465447e1542a72a898dcda3b5e8da9c4b3d3882a.png"
	],
	[
		"0xd22ee2944a8f178d0ad8173ec18a369569779489",
		"Sapphire Ticket NFT 5th - old",
		"ANTE",
		"ERC1155"
	],
	[
		"0x44593b16c4eeb66a5aa45f8dce3d4bb6f271805f",
		"HIGH ON JPEG'S",
		"HIGH ON JPEG'S",
		"ERC1155",
		"/images/nfts/0x44593b16c4eeb66a5aa45f8dce3d4bb6f271805f.png"
	],
	[
		"0x56e245db19a77175008d780509fa991f785c1366",
		"RektSkulls - Essences",
		"RektSkulls - Essences",
		"ERC1155",
		"/images/nfts/0x56e245db19a77175008d780509fa991f785c1366.png"
	],
	[
		"0x826653486e2c74711a933b7d9331b34c16bc0c4f",
		"Telepass NFTLP",
		"Telepass NFTLP",
		"ERC1155",
		"/images/nfts/0x826653486e2c74711a933b7d9331b34c16bc0c4f.png"
	],
	[
		"0x39ac0f0cf499ffce9bb463c50f9148d2f6fea032",
		"AA Hot Sauce",
		"AAHOT",
		"ERC1155",
		"/images/nfts/0x39ac0f0cf499ffce9bb463c50f9148d2f6fea032.png"
	],
	[
		"0x79306bdf166a7d35bd8cc1db48ef4b83c8b1a4ce",
		"Recherche II",
		"Recherche II",
		"ERC1155",
		"/images/nfts/0x79306bdf166a7d35bd8cc1db48ef4b83c8b1a4ce.png"
	],
	[
		"0xac3c15fe919f146d48e2daddfad0a3ec85d87934",
		"Inkugami: Origins",
		"Inkugami: Origins",
		"ERC1155",
		"/images/nfts/0xac3c15fe919f146d48e2daddfad0a3ec85d87934.png"
	],
	[
		"0x3b6afb8bda297309738167b1711b69484c7c7eca",
		"Messi 2022 AFA Jersey",
		"Messi 2022 AFA Jersey",
		"ERC1155",
		"/images/nfts/0x3b6afb8bda297309738167b1711b69484c7c7eca.png"
	],
	[
		"0x18f2f49355467fb09bf2120a319b8a41c2b79dce",
		"FREEMINT Collection",
		"FREE",
		"ERC1155",
		"/images/nfts/0x18f2f49355467fb09bf2120a319b8a41c2b79dce.png"
	],
	[
		"0x8b79b97bf6b88ec7d145e44d0fc2cdb37e7a5a72",
		"Pickle Editions",
		"PCKLEDNS",
		"ERC1155"
	],
	[
		"0x498b3d6ad30b1f584fa508e5b8c010cc730011a0",
		"Lionel Messi: Man of the Past",
		"Lionel Messi: Man of the Past",
		"ERC1155",
		"/images/nfts/0x498b3d6ad30b1f584fa508e5b8c010cc730011a0.png"
	],
	[
		"0x1d15cb95eb1ed62ace1fd6230ba8d230b6a58be9",
		"Fathomless Realm",
		"Fathomless Realm",
		"ERC1155",
		"/images/nfts/0x1d15cb95eb1ed62ace1fd6230ba8d230b6a58be9.png"
	],
	[
		"0x059c07a7e28f646e45fdedc9ac982f1afecc83e2",
		"Edition's",
		"Edition's",
		"ERC1155",
		"/images/nfts/0x059c07a7e28f646e45fdedc9ac982f1afecc83e2.png"
	],
	[
		"0x86b45874cbb11a089fe847e684d1424e17556f57",
		"Liminal Editions",
		"LMNLED",
		"ERC1155",
		"/images/nfts/0x86b45874cbb11a089fe847e684d1424e17556f57.png"
	],
	[
		"0xf85906f89aeca56aff6d34790677595af6b4fbd7",
		"Mythic Pet Food",
		"Mythic Pet Food",
		"ERC1155",
		"/images/nfts/0xf85906f89aeca56aff6d34790677595af6b4fbd7.png"
	],
	[
		"0xd2ecfd83eda2dc789c23f0d15d26936f8ba1fb66",
		"Hydro Homies Season 1",
		"HHS1",
		"ERC1155",
		"/images/nfts/0xd2ecfd83eda2dc789c23f0d15d26936f8ba1fb66.png"
	],
	[
		"0x71ca8d05178058ef6a6096e94335d8374355dcae",
		"WIFI KIDS",
		"WFS",
		"ERC1155",
		"/images/nfts/0x71ca8d05178058ef6a6096e94335d8374355dcae.png"
	],
	[
		"0x768128b51f3563fba406e2ef0cc81e73a754fe48",
		"\"QUALIA GENERATORS\" by: MAXUTTON",
		"QGEN",
		"ERC1155",
		"/images/nfts/0x768128b51f3563fba406e2ef0cc81e73a754fe48.png"
	],
	[
		"0x2bfa0b0cb6daf453ade1cb9797402185f0587aaa",
		"Editions by Mohit Khetrapal",
		"Editions by Mohit Khetrapal",
		"ERC1155",
		"/images/nfts/0x2bfa0b0cb6daf453ade1cb9797402185f0587aaa.png"
	],
	[
		"0x0e9e33948f3512bbd9cb003f8e2601facc1b2299",
		"Ozy Multiple Editions",
		"OME",
		"ERC1155",
		"/images/nfts/0x0e9e33948f3512bbd9cb003f8e2601facc1b2299.png"
	],
	[
		"0xd5cfc0d7ee0d53ba192e2521e2a2c387bace19bb",
		"G3Vrse Pass",
		"G3",
		"ERC1155",
		"/images/nfts/0xd5cfc0d7ee0d53ba192e2521e2a2c387bace19bb.png"
	],
	[
		"0x69ac08852ee5fc84ffae33fc3fb1f427bde65fd1",
		"Migrated Collection -- See Description Below.",
		"G3",
		"ERC1155",
		"/images/nfts/0x69ac08852ee5fc84ffae33fc3fb1f427bde65fd1.png"
	],
	[
		"0x448d14938d41dd60dbd336d0f72cf0d45b2392ca",
		"THE KEY by RSTLSS",
		"RSTLSS",
		"ERC1155",
		"/images/nfts/0x448d14938d41dd60dbd336d0f72cf0d45b2392ca.png"
	],
	[
		"0x2fd6e1187e8f52051120d1b42dfd380fa56a6726",
		"Wayak's Streams",
		"Wayak's Streams",
		"ERC1155",
		"/images/nfts/0x2fd6e1187e8f52051120d1b42dfd380fa56a6726.png"
	],
	[
		"0x004e346aff27e473d82fba0e19bca229ec645547",
		"Pillars of the Earth: Timeless",
		"Pillars of the Earth: Timeless",
		"ERC1155",
		"/images/nfts/0x004e346aff27e473d82fba0e19bca229ec645547.png"
	],
	[
		"0xdf9297045c36d9a36988859918fea10559c6420d",
		"totty - editions",
		"totty - editions",
		"ERC1155",
		"/images/nfts/0xdf9297045c36d9a36988859918fea10559c6420d.png"
	],
	[
		"0x3f1a96f866d894ea067f109e6ac840829a8d4f63",
		"NeonGlitch86 - Open Editions",
		"NeonGlitch86 - Open Editions",
		"ERC1155",
		"/images/nfts/0x3f1a96f866d894ea067f109e6ac840829a8d4f63.png"
	],
	[
		"0x43ff3214520b9b61cc7b495472d3161ef7861f7a",
		"Taboo - Dadaist Editions",
		"Taboo - Dadaist Editions",
		"ERC1155",
		"/images/nfts/0x43ff3214520b9b61cc7b495472d3161ef7861f7a.png"
	],
	[
		"0xfdb192fb0213d48ecdf580c1821008d8c46bdbd7",
		"RELICS",
		"RELIC",
		"ERC1155",
		"/images/nfts/0xfdb192fb0213d48ecdf580c1821008d8c46bdbd7.png"
	],
	[
		"0x7f035decd40247dcbc12ed69b235fdaae8df63e1",
		"The Complaint Cards (not) by 6529",
		"COMPLAINTCARDS6529",
		"ERC1155",
		"/images/nfts/0x7f035decd40247dcbc12ed69b235fdaae8df63e1.png"
	],
	[
		"0x0164fb48891b891e748244b8ae931f2318b0c25b",
		"Boring Security",
		"BoringSEC",
		"ERC1155",
		"/images/nfts/0x0164fb48891b891e748244b8ae931f2318b0c25b.png"
	],
	[
		"0xf859082db5afd7938a03c417c3827ebfad1c3793",
		"Angelic Official 4th Poster (Validated)",
		"ANGL4v",
		"ERC1155",
		"/images/nfts/0xf859082db5afd7938a03c417c3827ebfad1c3793.png"
	],
	[
		"0xa6240e9bd3c3ce800b4dbda785d8ad0680790898",
		"Ink (editions) by Process Grey",
		"INK",
		"ERC1155",
		"/images/nfts/0xa6240e9bd3c3ce800b4dbda785d8ad0680790898.png"
	],
	[
		"0x476ae7237d50e01c84d8f04e7c8021909600a898",
		"NFT Das Magazine by Mike Hager",
		"NFTDME",
		"ERC1155",
		"/images/nfts/0x476ae7237d50e01c84d8f04e7c8021909600a898.png"
	],
	[
		"0xced40c97320332782005a22d74df6740b0ebddb3",
		"Ghoste Stories Editions",
		"GSE",
		"ERC1155",
		"/images/nfts/0xced40c97320332782005a22d74df6740b0ebddb3.png"
	],
	[
		"0x3dcdeee571265e8229b11db493267c1ed7cbdd90",
		"Phepesi Collection",
		"Phepesi Collection",
		"ERC1155",
		"/images/nfts/0x3dcdeee571265e8229b11db493267c1ed7cbdd90.png"
	],
	[
		"0x9ecd98d3e25c8844604526dfc5c03606230b34f8",
		"interface particles - IN][PA",
		"IN][PA",
		"ERC1155",
		"/images/nfts/0x9ecd98d3e25c8844604526dfc5c03606230b34f8.png"
	],
	[
		"0x510920decc80296ece3cd538ad30551be29c1df5",
		"The Pidgies Plus",
		"PDGS",
		"ERC1155",
		"/images/nfts/0x510920decc80296ece3cd538ad30551be29c1df5.png"
	],
	[
		"0x13901ecbbc74242795af3a3c9880a319d78796eb",
		"Noun 315",
		"RAW",
		"ERC1155",
		"/images/nfts/0x13901ecbbc74242795af3a3c9880a319d78796eb.png"
	],
	[
		"0x47bf253f7c505051f8b7c7d495bd7a9b6bd56754",
		"OGMaxx Editions",
		"OGMaxx Editions",
		"ERC1155",
		"/images/nfts/0x47bf253f7c505051f8b7c7d495bd7a9b6bd56754.png"
	],
	[
		"0x2e012c2954e15209ce42552ec3db91eb14380f1d",
		"FLASH FICTION by MANIC",
		"FLASH FICTION by MANIC",
		"ERC1155",
		"/images/nfts/0x2e012c2954e15209ce42552ec3db91eb14380f1d.png"
	],
	[
		"0xf3b6985f1a44cdc61191ca102eb19bc87f322ea7",
		"Solcks",
		"SOK",
		"ERC1155",
		"/images/nfts/0xf3b6985f1a44cdc61191ca102eb19bc87f322ea7.png"
	],
	[
		"0x8e475beb42310f987995d59fb626ffc7e9c61e26",
		"No Caller ID - editions V1",
		"No Caller ID - editions V1",
		"ERC1155",
		"/images/nfts/0x8e475beb42310f987995d59fb626ffc7e9c61e26.png"
	],
	[
		"0xb88a278c72fc84a3752a2bc3e85d5cbd86640abd",
		"HypeGearBox",
		"HypeGearBox",
		"ERC1155",
		"/images/nfts/0xb88a278c72fc84a3752a2bc3e85d5cbd86640abd.png"
	],
	[
		"0x84ac6a9d253cc374b006a3629785e97a11a26f76",
		"Titan Tiki",
		"Titan Tiki",
		"ERC1155",
		"/images/nfts/0x84ac6a9d253cc374b006a3629785e97a11a26f76.png"
	],
	[
		"0xd60276cbc77994d7b67e29673a8082be44792251",
		"Turning Energy into Inspiration - Editions",
		"Turning Energy into Inspiration - Editions",
		"ERC1155",
		"/images/nfts/0xd60276cbc77994d7b67e29673a8082be44792251.png"
	],
	[
		"0xfd43af6d3fe1b916c026f6ac35b3ede068d1ca01",
		"Parallel Alpha",
		"LLAS",
		"ERC1155",
		"/images/nfts/0xfd43af6d3fe1b916c026f6ac35b3ede068d1ca01.png"
	],
	[
		"0x73837c9a6cd3c7bb8d7cea2ae9c4e1300c3b52a5",
		"Metamorphosis by Monuse",
		"Metamorphosis by Monuse",
		"ERC1155",
		"/images/nfts/0x73837c9a6cd3c7bb8d7cea2ae9c4e1300c3b52a5.png"
	],
	[
		"0x2a6d6a082c410a195157ec4caf67cb9fd718f087",
		"Spider Tanks",
		"Spider Tanks",
		"ERC1155",
		"/images/nfts/0x2a6d6a082c410a195157ec4caf67cb9fd718f087.png"
	],
	[
		"0xf305fe01bf19be2ca1bd4ced8390628d45453e16",
		"OL1Y EDITIONS",
		"OLY",
		"ERC1155",
		"/images/nfts/0xf305fe01bf19be2ca1bd4ced8390628d45453e16.png"
	],
	[
		"0xf3744ec5e6885c71f58db02dfeb4b5b4b09748b6",
		"Rebirth by Maxim Baev",
		"Rebirth by Maxim Baev",
		"ERC1155",
		"/images/nfts/0xf3744ec5e6885c71f58db02dfeb4b5b4b09748b6.png"
	],
	[
		"0x698d05cf2bde2ec749350e76321de85646dc0270",
		"ADHD Editions",
		"ADHD Editions",
		"ERC1155",
		"/images/nfts/0x698d05cf2bde2ec749350e76321de85646dc0270.png"
	],
	[
		"0x21ae0bc1ba69e26ea1be4bc3213a965dc0a6cb05",
		"FATES Evacuation Pods",
		"POD",
		"ERC1155",
		"/images/nfts/0x21ae0bc1ba69e26ea1be4bc3213a965dc0a6cb05.png"
	],
	[
		"0xf3183eaa89f1f70201c969770b4089b9d395f521",
		"scamart editions",
		"scamart editions",
		"ERC1155",
		"/images/nfts/0xf3183eaa89f1f70201c969770b4089b9d395f521.png"
	],
	[
		"0xa51a4ad0e5055e05456f552e2d193781faad5971",
		"B10550M - First Metaversary",
		"B10550M - First Metaversary",
		"ERC1155",
		"/images/nfts/0xa51a4ad0e5055e05456f552e2d193781faad5971.png"
	],
	[
		"0x533382b3116049a6ccbe6283ddf12f44d4779d0f",
		"Histri",
		"HSTRI",
		"ERC1155",
		"/images/nfts/0x533382b3116049a6ccbe6283ddf12f44d4779d0f.png"
	],
	[
		"0xa6330b07a9c5ccccde9470e3b2427b18b7938762",
		"Hint of Mint Airdrops",
		"HoMA",
		"ERC1155"
	],
	[
		"0xbfaacd99f0752921aab5ad90e1ccceb9895e0d85",
		"deathrowrecords",
		"deathrowrecords",
		"ERC1155",
		"/images/nfts/0xbfaacd99f0752921aab5ad90e1ccceb9895e0d85.png"
	],
	[
		"0x5080d614142adf5242090127365e91210c0ff4eb",
		"Summer Wagner Editions",
		"BUGed",
		"ERC1155",
		"/images/nfts/0x5080d614142adf5242090127365e91210c0ff4eb.png"
	],
	[
		"0x4181a10c7ddb9f2e0b9fa5755ffa643644d6543b",
		"Menji's World Editions",
		"Menji's World Editions",
		"ERC1155",
		"/images/nfts/0x4181a10c7ddb9f2e0b9fa5755ffa643644d6543b.png"
	],
	[
		"0x38e41bc1e60546c60aa5064be5bfbb2440da52d6",
		"Ferry Date (Terrell Jones x BWOW Collab)",
		"FERRYDATE",
		"ERC1155",
		"/images/nfts/0x38e41bc1e60546c60aa5064be5bfbb2440da52d6.png"
	],
	[
		"0x50c6343cb01570d549f59e89a01ffe262aa5cb89",
		"Down The Rabbit Hole - Print Pass",
		"PRNT",
		"ERC1155",
		"/images/nfts/0x50c6343cb01570d549f59e89a01ffe262aa5cb89.png"
	],
	[
		"0xf820bf1b9b071723d28956b85c4dc3d9a3f10e94",
		"Our Legacy - Collection",
		"DBQ",
		"ERC1155",
		"/images/nfts/0xf820bf1b9b071723d28956b85c4dc3d9a3f10e94.png"
	],
	[
		"0xb86c8cde51a52d9e7e05aff910ce4f0f0ebc4d35",
		"Maxim Editions",
		"Maxim Editions",
		"ERC1155",
		"/images/nfts/0xb86c8cde51a52d9e7e05aff910ce4f0f0ebc4d35.png"
	],
	[
		"0x06bcab7137b300da5a4d0ce047a71f4e7192c1a3",
		"Curio's Snow Globes",
		"Curio's Snow Globes",
		"ERC1155",
		"/images/nfts/0x06bcab7137b300da5a4d0ce047a71f4e7192c1a3.png"
	],
	[
		"0x58deaf522dd64d7c8d03ef0062f9a78291d2bfea",
		"Slow Guys Editions",
		"SGE",
		"ERC1155",
		"/images/nfts/0x58deaf522dd64d7c8d03ef0062f9a78291d2bfea.png"
	],
	[
		"0x18d0e051317e04ae96314c372bd35220460eec62",
		"Surreal Mint Pass",
		"Surreal Mint Pass",
		"ERC1155",
		"/images/nfts/0x18d0e051317e04ae96314c372bd35220460eec62.png"
	],
	[
		"0x2e43ca3c8f109b2da10f43cb373cc550e36f674c",
		"Ethernity's Master Collection",
		"Ethernity's Master Collection",
		"ERC1155",
		"/images/nfts/0x2e43ca3c8f109b2da10f43cb373cc550e36f674c.png"
	],
	[
		"0xf82d80cbc62679021dbb63a64b662f3247d0060a",
		"DeFine badge ampleforth",
		"DFBA",
		"ERC1155"
	],
	[
		"0x5dd8ac4697c6ddf2c5b3b6d86dfb17bcb5b6af09",
		"Sticky Notes by Mya Parker",
		"SN",
		"ERC1155",
		"/images/nfts/0x5dd8ac4697c6ddf2c5b3b6d86dfb17bcb5b6af09.png"
	],
	[
		"0xf36c296e87dd2d7adcef251a542561d4bbe07714",
		"Lascaux Editions",
		"MXFK",
		"ERC1155",
		"/images/nfts/0xf36c296e87dd2d7adcef251a542561d4bbe07714.png"
	],
	[
		"0x7271e5b3ff85750269123dc1eb1aaa68877fab9a",
		"Meet Nippy - Options",
		"NippyO",
		"ERC1155",
		"/images/nfts/0x7271e5b3ff85750269123dc1eb1aaa68877fab9a.png"
	],
	[
		"0x9f0da414075f7952f1bdcf1b2f9cb0d8daf8b9bd",
		"KittyKart Roll Kall",
		"RollKall",
		"ERC1155",
		"/images/nfts/0x9f0da414075f7952f1bdcf1b2f9cb0d8daf8b9bd.png"
	],
	[
		"0xfa056aa17e639ce4b71b5d73e34a6392029ff456",
		"GDR Editions",
		"GDR Editions",
		"ERC1155",
		"/images/nfts/0xfa056aa17e639ce4b71b5d73e34a6392029ff456.png"
	],
	[
		"0xe649d5f3fbb9563556bd493111a7c4f03d8d0d2a",
		"Alexandru Chitu Illustrations",
		"Alexandru Chitu Illustrations",
		"ERC1155",
		"/images/nfts/0xe649d5f3fbb9563556bd493111a7c4f03d8d0d2a.png"
	],
	[
		"0xd91a3ad7c4e093e1a934481cdc6755221e0c6ac4",
		"WAGMI normal",
		"disc",
		"ERC1155"
	],
	[
		"0xa3f7117716e2b689a310c39ca3d080ad2241d8f1",
		"Editions x RenderJuice",
		"Editions x RenderJuice",
		"ERC1155",
		"/images/nfts/0xa3f7117716e2b689a310c39ca3d080ad2241d8f1.png"
	],
	[
		"0x9b351ac4ab4201eaf5c852a8c400e0ef5ffb83b6",
		"Unidentified contract - I6oFJGc5yF",
		"Unidentified contract - I6oFJGc5yF",
		"ERC1155"
	],
	[
		"0xbc2cf33947b8e694cfc2f60f72ad83057ca15ee5",
		"Figura by ETG",
		"FIG",
		"ERC1155",
		"/images/nfts/0xbc2cf33947b8e694cfc2f60f72ad83057ca15ee5.png"
	],
	[
		"0x769a057b38acc21da6fb5f79b8e235b5d44c54de",
		"JustArtOut PopFusion",
		"JAOPF",
		"ERC1155",
		"/images/nfts/0x769a057b38acc21da6fb5f79b8e235b5d44c54de.png"
	],
	[
		"0x01cb3c2da52801587e6c087729788e40fe83ee1e",
		"Offshoot3D: Between Worlds Collection",
		"OBW",
		"ERC1155",
		"/images/nfts/0x01cb3c2da52801587e6c087729788e40fe83ee1e.png"
	],
	[
		"0x86f6a6c90acce5a96d4cd00889b84e4482fb8727",
		"Tokyo Expo2099 Replica Collection",
		"TERC",
		"ERC1155",
		"/images/nfts/0x86f6a6c90acce5a96d4cd00889b84e4482fb8727.png"
	],
	[
		"0xdcaa2a3a5af3377f44e1f5dc682eb633b462beb2",
		"Useless Parts",
		"Useless Parts",
		"ERC1155",
		"/images/nfts/0xdcaa2a3a5af3377f44e1f5dc682eb633b462beb2.png"
	],
	[
		"0xe61b54581b280dca588a622c4cc4938a9b605ffd",
		"Research Fund NFT memes",
		"Research Fund NFT memes",
		"ERC1155",
		"/images/nfts/0xe61b54581b280dca588a622c4cc4938a9b605ffd.png"
	],
	[
		"0x6b113002bba6df0443bcdbd06e5d1643d9cd61dc",
		"webzero",
		"webzero",
		"ERC1155",
		"/images/nfts/0x6b113002bba6df0443bcdbd06e5d1643d9cd61dc.png"
	],
	[
		"0xaa117bb118b0d003b496df5a31ef8c297f8f2ce0",
		"LautrupAI  Special Editions",
		"TLAI",
		"ERC1155",
		"/images/nfts/0xaa117bb118b0d003b496df5a31ef8c297f8f2ce0.png"
	],
	[
		"0xffdad73618b08c3651d96b0b2bbe66a2bc0274aa",
		"the memes of THE MEMES",
		"MxM",
		"ERC1155",
		"/images/nfts/0xffdad73618b08c3651d96b0b2bbe66a2bc0274aa.png"
	],
	[
		"0xdb7a1d7a22d4caa085ee9111fba639619c3b0616",
		"JasonOPhoto Editions",
		"JasonOPhoto Editions",
		"ERC1155",
		"/images/nfts/0xdb7a1d7a22d4caa085ee9111fba639619c3b0616.png"
	],
	[
		"0xac5dc1676595fc2f4d4a746c7a4857e692480e0c",
		"Dour Fits Market",
		"Dour Fits Market",
		"ERC1155",
		"/images/nfts/0xac5dc1676595fc2f4d4a746c7a4857e692480e0c.png"
	],
	[
		"0xccc048e4b6b39abd02593da3ea62e1231e14f16f",
		"Azuki Proof of Purchase (PoP)",
		"POP",
		"ERC1155",
		"/images/nfts/0xccc048e4b6b39abd02593da3ea62e1231e14f16f.png"
	],
	[
		"0x9385625f808a8749bb00398e04718a76c1de5c40",
		"MaisonFaceless",
		"MaisonFaceless",
		"ERC1155",
		"/images/nfts/0x9385625f808a8749bb00398e04718a76c1de5c40.png"
	],
	[
		"0xd61661b5c1d2d152259ee4d71b4c7568ef63025a",
		"Starsail Editions",
		"Starsail Editions",
		"ERC1155",
		"/images/nfts/0xd61661b5c1d2d152259ee4d71b4c7568ef63025a.png"
	],
	[
		"0x1f6a5cf9366f968c205467bd7a9f382b3454dfb3",
		"Ribbit Items",
		"RIBBIT ITEM",
		"ERC1155",
		"/images/nfts/0x1f6a5cf9366f968c205467bd7a9f382b3454dfb3.png"
	],
	[
		"0xcba546636baf517a75d5722c4f711b8deee2f087",
		"Habibis editions",
		"habed",
		"ERC1155",
		"/images/nfts/0xcba546636baf517a75d5722c4f711b8deee2f087.png"
	],
	[
		"0xdcffa2b5cbf288932b009eba01c8ca772ec6c993",
		"Emblem Vault Test (curated)",
		"Emblem Vault Test (curated)",
		"ERC1155",
		"/images/nfts/0xdcffa2b5cbf288932b009eba01c8ca772ec6c993.png"
	],
	[
		"0xc510e82828cda44309d178e3a6d6986f0d85d0de",
		"Ugly Pictures",
		"Ugly Pictures",
		"ERC1155",
		"/images/nfts/0xc510e82828cda44309d178e3a6d6986f0d85d0de.png"
	],
	[
		"0x201ea40d5b47e94ef51fd968029b01e6951ac0b6",
		"Cool Cats FC Rewards",
		"CCFCR",
		"ERC1155",
		"/images/nfts/0x201ea40d5b47e94ef51fd968029b01e6951ac0b6.png"
	],
	[
		"0x14b10f761d33a7f1086084ca9f23ae1702cda846",
		"rare mfer memes",
		"rmfm",
		"ERC1155",
		"/images/nfts/0x14b10f761d33a7f1086084ca9f23ae1702cda846.png"
	],
	[
		"0x0be251cb94e5ebca3615cef74273bd121d2a8e08",
		"Butaverse Pass",
		"BUTAVERSEPASS",
		"ERC1155",
		"/images/nfts/0x0be251cb94e5ebca3615cef74273bd121d2a8e08.png"
	],
	[
		"0x191441e2861fb073346d77ba9b0f6d04b0e56514",
		"MCity_MGM_Presale",
		"MCity_MGM_Presale",
		"ERC1155",
		"/images/nfts/0x191441e2861fb073346d77ba9b0f6d04b0e56514.png"
	],
	[
		"0x1f00f279b94cb2f6a1277a16910035776ce6b6c1",
		"The Art of Whisky by Whiskybath",
		"The Art of Whisky by Whiskybath",
		"ERC1155",
		"/images/nfts/0x1f00f279b94cb2f6a1277a16910035776ce6b6c1.png"
	],
	[
		"0x56a67d475ded20f1120d6377988ae12992888ac4",
		"RTFKT - MNLTH X",
		"RTFKT - MNLTH X",
		"ERC1155",
		"/images/nfts/0x56a67d475ded20f1120d6377988ae12992888ac4.png"
	],
	[
		"0x4f4db3436bb66a7bc76472bad4cadf80fbb5812d",
		"Hotel Indigo presented by Kristel Bechara",
		"HIxKB",
		"ERC1155",
		"/images/nfts/0x4f4db3436bb66a7bc76472bad4cadf80fbb5812d.png"
	],
	[
		"0x2c532659e0a811ecd779e5a7312d375968355533",
		"EDITIONS BY OKSANA BULGAKOVA",
		"EDITIONS BY OKSANA BULGAKOVA",
		"ERC1155",
		"/images/nfts/0x2c532659e0a811ecd779e5a7312d375968355533.png"
	],
	[
		"0xb9d0f731fa686887365109b25c4c55a54c584132",
		"Ego Dead Editions",
		"Ego Dead Editions",
		"ERC1155",
		"/images/nfts/0xb9d0f731fa686887365109b25c4c55a54c584132.png"
	],
	[
		"0x3925be5810fe7bf68447caadec079811470c73b0",
		"We Do A Little Rewards",
		"We Do A Little Rewards",
		"ERC1155",
		"/images/nfts/0x3925be5810fe7bf68447caadec079811470c73b0.png"
	],
	[
		"0x0d855cda56ecf6f174023854fc53c9491348437c",
		"Symphony Inside",
		"SYIN",
		"ERC1155",
		"/images/nfts/0x0d855cda56ecf6f174023854fc53c9491348437c.png"
	],
	[
		"0xb563824a281f00699c2c0049d0ddc0cbdf691e0d",
		"Things of Beauty - Art Bambina",
		"Things of Beauty - Art Bambina",
		"ERC1155",
		"/images/nfts/0xb563824a281f00699c2c0049d0ddc0cbdf691e0d.png"
	],
	[
		"0xecc8bc30cfab9ad63675164fe31f322f2274e0a6",
		"Forgotten Station",
		"Forgotten Station",
		"ERC1155",
		"/images/nfts/0xecc8bc30cfab9ad63675164fe31f322f2274e0a6.png"
	],
	[
		"0x62c462493a17be219159b5c36094812ea56968c7",
		"FEAR IS OBSOLETE",
		"FIO",
		"ERC1155",
		"/images/nfts/0x62c462493a17be219159b5c36094812ea56968c7.png"
	],
	[
		"0xc0dafa51b382368930294c7d29a5c40193f80680",
		"#1 crush editions",
		"#1 crush editions",
		"ERC1155",
		"/images/nfts/0xc0dafa51b382368930294c7d29a5c40193f80680.png"
	],
	[
		"0x09e8dc2fee2e6be7687ae44b1381dfd2e0c13465",
		"Digital Animals Soul Passes v2",
		"DASP",
		"ERC1155",
		"/images/nfts/0x09e8dc2fee2e6be7687ae44b1381dfd2e0c13465.png"
	],
	[
		"0xd1b68763c7170b963ac6ca6b1c2ea25796a18a17",
		"Valhalla Reserve",
		"RSRV",
		"ERC1155",
		"/images/nfts/0xd1b68763c7170b963ac6ca6b1c2ea25796a18a17.png"
	],
	[
		"0x0f0c64f0e5a1f23c7a5fdc50d25520de6f4555b4",
		"d.mirror.xyz",
		"D",
		"ERC1155",
		"/images/nfts/0x0f0c64f0e5a1f23c7a5fdc50d25520de6f4555b4.png"
	],
	[
		"0x275cf8034bea15fd3699c1f81cd8f6ae6f7920a7",
		"geniuscorp",
		"geniuscorp",
		"ERC1155",
		"/images/nfts/0x275cf8034bea15fd3699c1f81cd8f6ae6f7920a7.png"
	],
	[
		"0x2aa582bae59bd0a657480fc004fdeef7640803d9",
		"ART HEISTS - THREE PANEL CRIMES",
		"ART HEISTS - THREE PANEL CRIMES",
		"ERC1155",
		"/images/nfts/0x2aa582bae59bd0a657480fc004fdeef7640803d9.png"
	],
	[
		"0x708438c73456d28af14e8ecd70266cba57304a0b",
		"3LandTales",
		"3LT",
		"ERC1155",
		"/images/nfts/0x708438c73456d28af14e8ecd70266cba57304a0b.png"
	],
	[
		"0xa48ca8074a323618f6a0654506979d6c153e3612",
		"Music Labyrinth",
		"Music Labyrinth",
		"ERC1155",
		"/images/nfts/0xa48ca8074a323618f6a0654506979d6c153e3612.png"
	],
	[
		"0x7d13779e1cf970d381f265ee3f88915cc1e3ccef",
		"ETH.r Brews Mint Passes",
		"BREWPASS",
		"ERC1155",
		"/images/nfts/0x7d13779e1cf970d381f265ee3f88915cc1e3ccef.png"
	],
	[
		"0x7b32e7444b5ef197627270a48597df3480214f9e",
		"PAATniverse",
		"PAATniverse",
		"ERC1155",
		"/images/nfts/0x7b32e7444b5ef197627270a48597df3480214f9e.png"
	],
	[
		"0xe529178bf1ad4f8e01f09037a3c6e96131cff5f3",
		"ROBNESS PRINTS",
		"RBNS",
		"ERC1155",
		"/images/nfts/0xe529178bf1ad4f8e01f09037a3c6e96131cff5f3.png"
	],
	[
		"0x035dd61c1abceb40a21bbf9bc9db79a1306e2c22",
		"Butterfly Effect by Lorcan",
		"LRCNBF",
		"ERC1155",
		"/images/nfts/0x035dd61c1abceb40a21bbf9bc9db79a1306e2c22.png"
	],
	[
		"0x3491ead95de2f4a945c2ead3c3afe7747f2ae373",
		"Digital Animals Soul Passes",
		"DASP",
		"ERC1155",
		"/images/nfts/0x3491ead95de2f4a945c2ead3c3afe7747f2ae373.png"
	],
	[
		"0x3d34d2a719c2666e603650858ac159d12e623b77",
		"R66 Toys",
		"R66.Toys",
		"ERC1155",
		"/images/nfts/0x3d34d2a719c2666e603650858ac159d12e623b77.png"
	],
	[
		"0x5d8241ed7060e417dee5b78164e336c4c9724ce6",
		"Creepture Eggs",
		"Creepture Eggs",
		"ERC1155",
		"/images/nfts/0x5d8241ed7060e417dee5b78164e336c4c9724ce6.png"
	],
	[
		"0x48531836e57bc28d6fee33840f43826b889aa2fc",
		"PIPPI NFTart.v2",
		"PIPPI",
		"ERC1155",
		"/images/nfts/0x48531836e57bc28d6fee33840f43826b889aa2fc.png"
	],
	[
		"0xb66c0adfd7330a2c800a31338f8a0950cf52b980",
		"The Immortal NFKey",
		"THE-IMMORTAL-NFKEY",
		"ERC1155",
		"/images/nfts/0xb66c0adfd7330a2c800a31338f8a0950cf52b980.png"
	],
	[
		"0x4d95adfedd17c3b604e8658cf26d137409c872f9",
		"4EVERLAND",
		"4EVERLAND",
		"ERC1155"
	],
	[
		"0xebb973624a34f033431ef5cd0a83d999f566b724",
		"Down The Rabbit Hole by Eric P. Rhodes",
		"ALICE",
		"ERC1155",
		"/images/nfts/0xebb973624a34f033431ef5cd0a83d999f566b724.png"
	],
	[
		"0x0311d3e4a472a21d18cf5491224258b61147d34c",
		"CF: Void Rewards",
		"CF: Void Rewards",
		"ERC1155",
		"/images/nfts/0x0311d3e4a472a21d18cf5491224258b61147d34c.png"
	],
	[
		"0x467785481482ee6b08569c52cbd4a6d264add3db",
		"blklavas editions",
		"blklavas editions",
		"ERC1155",
		"/images/nfts/0x467785481482ee6b08569c52cbd4a6d264add3db.png"
	],
	[
		"0x56ca59ab1b3c7086b3c4af417593fdee566a3320",
		"JBAS Flower Shop",
		"JAFS",
		"ERC1155",
		"/images/nfts/0x56ca59ab1b3c7086b3c4af417593fdee566a3320.png"
	],
	[
		"0x16ac942e7c194051651cac878c3ca363ba2ab948",
		"The NFT Guild",
		"NFTG",
		"ERC1155",
		"/images/nfts/0x16ac942e7c194051651cac878c3ca363ba2ab948.png"
	],
	[
		"0x0066504c088c8696f37bd938e1b63ca5f88512e8",
		"GM / Mox",
		"GM",
		"ERC1155",
		"/images/nfts/0x0066504c088c8696f37bd938e1b63ca5f88512e8.png"
	],
	[
		"0x067a1eb5e383ed24b66d72aaf80d8d7db3d299a8",
		"The Sandbox: Assets",
		"ASSET",
		"ERC1155",
		"/images/nfts/0x067a1eb5e383ed24b66d72aaf80d8d7db3d299a8.png"
	],
	[
		"0x9be2860d5045e57182fb9de79a868418caaa5a67",
		"Hafftka Homage",
		"HAFFHMG",
		"ERC1155",
		"/images/nfts/0x9be2860d5045e57182fb9de79a868418caaa5a67.png"
	],
	[
		"0x50406fba07bd4a9504e96fdca47f0366d7f2a5e0",
		"Ladakh Diaries by Agni",
		"Ladakh Diaries by Agni",
		"ERC1155",
		"/images/nfts/0x50406fba07bd4a9504e96fdca47f0366d7f2a5e0.png"
	],
	[
		"0xbc4323e4c4f5f4a6ff10fc531f4a77b8e68d698e",
		"OnChainBook",
		"BOOK",
		"ERC1155",
		"/images/nfts/0xbc4323e4c4f5f4a6ff10fc531f4a77b8e68d698e.png"
	],
	[
		"0xf7fde8933a2ed764c6135a52d4caa47559c0f059",
		"Etched Collections",
		"Etched Collections",
		"ERC1155",
		"/images/nfts/0xf7fde8933a2ed764c6135a52d4caa47559c0f059.png"
	],
	[
		"0xd6a30176bb3bc72385d517ea9d44970a06214fdf",
		"adidas",
		"adidas",
		"ERC1155",
		"/images/nfts/0xd6a30176bb3bc72385d517ea9d44970a06214fdf.png"
	],
	[
		"0x9ec7fcbfe0a28c0f84052453bfa9c9007a5de9eb",
		"Retrospepective",
		"Retrospepective",
		"ERC1155",
		"/images/nfts/0x9ec7fcbfe0a28c0f84052453bfa9c9007a5de9eb.png"
	],
	[
		"0xcf3797c85117f835c05ea169b17212fb12917d9c",
		"Mayowa's Editions",
		"MYWEDT",
		"ERC1155",
		"/images/nfts/0xcf3797c85117f835c05ea169b17212fb12917d9c.png"
	],
	[
		"0x288a974c3aebc3e3f81bee974a4e57d6e1c64a46",
		"HOPE | Art Pass",
		"HOPE",
		"ERC1155",
		"/images/nfts/0x288a974c3aebc3e3f81bee974a4e57d6e1c64a46.png"
	],
	[
		"0xfeb95ba2c13dea67cc89285a4270a12eb1ba4895",
		"Farrah Fisher Editions",
		"Farrah Fisher Editions",
		"ERC1155",
		"/images/nfts/0xfeb95ba2c13dea67cc89285a4270a12eb1ba4895.png"
	],
	[
		"0xd02f211bcb4747379e717def0504e01e067567c8",
		"Homage by Rafaël Rozendaal",
		"Homage by Rafaël Rozendaal",
		"ERC1155",
		"/images/nfts/0xd02f211bcb4747379e717def0504e01e067567c8.png"
	],
	[
		"0xf1852828539dc9e16997191b496590336106c8cd",
		"editions hxfix",
		"editions hxfix",
		"ERC1155",
		"/images/nfts/0xf1852828539dc9e16997191b496590336106c8cd.png"
	],
	[
		"0x201360e23b6468481af7116e4bb0ef95ba67afc2",
		"Christopher James: Editions",
		"Christopher James: Editions",
		"ERC1155",
		"/images/nfts/0x201360e23b6468481af7116e4bb0ef95ba67afc2.png"
	],
	[
		"0xd4ef37ff02506b7b3fb248bc9dd57e1263bf5a3f",
		"We Breathe | Editions",
		"We Breathe | Editions",
		"ERC1155",
		"/images/nfts/0xd4ef37ff02506b7b3fb248bc9dd57e1263bf5a3f.png"
	],
	[
		"0x73dfe679007c9ab0afddeccefe5fcd0ec1914e86",
		"SNS: Social Name Service",
		"SNS: Social Name Service",
		"ERC1155",
		"/images/nfts/0x73dfe679007c9ab0afddeccefe5fcd0ec1914e86.png"
	],
	[
		"0xcc4e3cb1de7af95f3e728211035373bb5d078d25",
		"LAC Presents Beats, Treats, and NFTs",
		"LACBTNFTs",
		"ERC1155",
		"/images/nfts/0xcc4e3cb1de7af95f3e728211035373bb5d078d25.png"
	],
	[
		"0xfa263ddc8a0a3f2f55898289e17b285c412c4f3a",
		"MetaGods Celestial Pass",
		"EMGP",
		"ERC1155",
		"/images/nfts/0xfa263ddc8a0a3f2f55898289e17b285c412c4f3a.png"
	],
	[
		"0x2c8c7b63a35d889110b315e06025cfd07e3dbfb7",
		"Imagination Mayhem Designs",
		"Imagination Mayhem Designs",
		"ERC1155",
		"/images/nfts/0x2c8c7b63a35d889110b315e06025cfd07e3dbfb7.png"
	],
	[
		"0xa698b4de86e27be81f6deb2efaf98b4a010cfd0f",
		"CHCC: Genesis Collection",
		"CHCC: Genesis Collection",
		"ERC1155",
		"/images/nfts/0xa698b4de86e27be81f6deb2efaf98b4a010cfd0f.png"
	],
	[
		"0xee8576ab3703c9110b29baeaecd51c63c85f3336",
		"MAKANI.EDITIONS",
		"MAKANI.EDITIONS",
		"ERC1155",
		"/images/nfts/0xee8576ab3703c9110b29baeaecd51c63c85f3336.png"
	],
	[
		"0x100444622ddadda2e3774d7e95bdc222cd5bb026",
		"light studies by Zach Lieberman",
		"light studies by Zach Lieberman",
		"ERC1155",
		"/images/nfts/0x100444622ddadda2e3774d7e95bdc222cd5bb026.png"
	],
	[
		"0xc068f85ec1aced9743506310f99d515317dc4b06",
		"Bello Dashboard",
		"BELLO",
		"ERC1155",
		"/images/nfts/0xc068f85ec1aced9743506310f99d515317dc4b06.png"
	],
	[
		"0xf65185bf3014c7d32ecba96d72302eca734f16bd",
		"Mikko Lagerstedt - Limited Editions",
		"Mikko Lagerstedt - Limited Editions",
		"ERC1155",
		"/images/nfts/0xf65185bf3014c7d32ecba96d72302eca734f16bd.png"
	],
	[
		"0x113c94b737660227379fd5e153e4a05b8bc6fbe3",
		"LOGBOOK / Editions",
		"lb00x",
		"ERC1155",
		"/images/nfts/0x113c94b737660227379fd5e153e4a05b8bc6fbe3.png"
	],
	[
		"0x2cd2b9732314e36eacc03c1103ebb9666d1cc16f",
		"Suluada (FREE mint)",
		"Suluada (FREE mint)",
		"ERC1155",
		"/images/nfts/0x2cd2b9732314e36eacc03c1103ebb9666d1cc16f.png"
	],
	[
		"0x23285cd0c044d4f3688cd3b5c611539a304e6bda",
		"Ghostie - Pumpkinhead 2022",
		"Ghostie - Pumpkinhead 2022",
		"ERC1155",
		"/images/nfts/0x23285cd0c044d4f3688cd3b5c611539a304e6bda.png"
	],
	[
		"0xc3894ca67aa78ae19985d652e1d58e3ac69f3e9d",
		"West World Editions",
		"West World Editions",
		"ERC1155",
		"/images/nfts/0xc3894ca67aa78ae19985d652e1d58e3ac69f3e9d.png"
	],
	[
		"0x969c2e2021bbc5987f67cfdb34877fe53f932ab8",
		"BRASÃO CONSELHEIRO",
		"BZ-B",
		"ERC1155",
		"/images/nfts/0x969c2e2021bbc5987f67cfdb34877fe53f932ab8.png"
	],
	[
		"0x3aab05966d7cb4247480074bbeb125e0298b8837",
		"Chains Drop Volume 2",
		"Chains Drop Volume 2",
		"ERC1155",
		"/images/nfts/0x3aab05966d7cb4247480074bbeb125e0298b8837.png"
	],
	[
		"0x4f76455e04ab24f0fdd875969d600d11748ef24c",
		"Unidentified contract - Fuik9pOdtK - old",
		"Unidentified contract - Fuik9pOdtK - old",
		"ERC1155"
	],
	[
		"0x8e8825067f69d70a41d33a1f9227518e5fbdbc99",
		"Wayward Weenies Deli",
		"WWD",
		"ERC1155",
		"/images/nfts/0x8e8825067f69d70a41d33a1f9227518e5fbdbc99.png"
	],
	[
		"0x242248dbe4e65d57a68cf9fffb2f6e91b6c226b0",
		"HPPRS BOUNTY",
		"HPPRS BOUNTY",
		"ERC1155",
		"/images/nfts/0x242248dbe4e65d57a68cf9fffb2f6e91b6c226b0.png"
	],
	[
		"0x07f027e77290c2337cf7046b48a1815150a0abc9",
		"NFT Das Magazin by Mike Hager",
		"NFTDM",
		"ERC1155",
		"/images/nfts/0x07f027e77290c2337cf7046b48a1815150a0abc9.png"
	],
	[
		"0xa4057dada9217a8e64ee7d469a5a7e7c40b7380f",
		"Tokyo Mongz Hills Club OFFICIAL",
		"Tokyo Mongz Hills Club OFFICIAL",
		"ERC1155",
		"/images/nfts/0xa4057dada9217a8e64ee7d469a5a7e7c40b7380f.png"
	],
	[
		"0xdee5de6d41a70eea80b5ed684bf5a448a1188bc6",
		"rare mfers",
		"rare mfers",
		"ERC1155",
		"/images/nfts/0xdee5de6d41a70eea80b5ed684bf5a448a1188bc6.png"
	],
	[
		"0x54c45f3e00a1aaa12946fe509923ff33dbba28d6",
		"MEME NINJAS",
		"MEME NINJAS",
		"ERC1155",
		"/images/nfts/0x54c45f3e00a1aaa12946fe509923ff33dbba28d6.png"
	],
	[
		"0xed889918e7cfe857e7b8ddc8e68c1ae820d28f9a",
		"Kamisama Girl Alternative",
		"Kamisama Girl Alternative",
		"ERC1155",
		"/images/nfts/0xed889918e7cfe857e7b8ddc8e68c1ae820d28f9a.png"
	],
	[
		"0x09816ab90f7b51a5f85b3389d5ecf72630ca8219",
		"Lady Julia x NYMPHS",
		"Lady Julia x NYMPHS",
		"ERC1155",
		"/images/nfts/0x09816ab90f7b51a5f85b3389d5ecf72630ca8219.png"
	],
	[
		"0xb06906b89f07f892c93f6e7d6e54ae20952b3954",
		"Diverge x Sinead Gorey Phygital Drop",
		"Diverge x Sinead Gorey Phygital Drop",
		"ERC1155",
		"/images/nfts/0xb06906b89f07f892c93f6e7d6e54ae20952b3954.png"
	],
	[
		"0xdda3f424e66d9c006c0d4120786bb6b4e0bc9e21",
		"The Haunted 5 - An 0N1 Story",
		"The Haunted 5 - An 0N1 Story",
		"ERC1155",
		"/images/nfts/0xdda3f424e66d9c006c0d4120786bb6b4e0bc9e21.png"
	],
	[
		"0x452c2cc1e3932a05fcd80a1603e5444eb0d73e94",
		"Seize The Dojo",
		"Seize The Dojo",
		"ERC1155",
		"/images/nfts/0x452c2cc1e3932a05fcd80a1603e5444eb0d73e94.png"
	],
	[
		"0x665de15f50e027bf98715502b38c0bb9bf43704d",
		"Corny Juice",
		"ANTI",
		"ERC1155",
		"/images/nfts/0x665de15f50e027bf98715502b38c0bb9bf43704d.png"
	],
	[
		"0x533499d46adf9cf0d75dc4a8291f11406bbf44b8",
		"Journeying Spirit (Deer) Open Edition",
		"Journeying Spirit (Deer) Open Edition",
		"ERC1155",
		"/images/nfts/0x533499d46adf9cf0d75dc4a8291f11406bbf44b8.png"
	],
	[
		"0x73930294ca05de95f380aea9de451732bbf7fc3b",
		"Lamar Casey - Winnin",
		"Lamar Casey - Winnin",
		"ERC1155",
		"/images/nfts/0x73930294ca05de95f380aea9de451732bbf7fc3b.png"
	],
	[
		"0x007af8ab4f1933c1e1512f344f132d0502b2ef33",
		"STAPLEVERSE - BIG APPLE GUILD (USE TO MINT A SAPIENZ)",
		"STAPLEVERSE - BIG APPLE GUILD (USE TO MINT A SAPIENZ)",
		"ERC1155",
		"/images/nfts/0x007af8ab4f1933c1e1512f344f132d0502b2ef33.png"
	],
	[
		"0x6b4020ed97c3c7bd69ac7aac49f780574e905508",
		"CSA Gen-1 Membership",
		"CSA-G1-M",
		"ERC1155",
		"/images/nfts/0x6b4020ed97c3c7bd69ac7aac49f780574e905508.png"
	],
	[
		"0x2e0d4945d949aba5a99d24ee95a9d9c60942a926",
		"StayHuman Genesis",
		"StayHuman Genesis",
		"ERC1155",
		"/images/nfts/0x2e0d4945d949aba5a99d24ee95a9d9c60942a926.png"
	],
	[
		"0x7044ad2975b9947d7c611c3eddd3af757cad1c5e",
		"Rare Pepe Punks by Eric P. Rhodes",
		"Rare Pepe Punks by Eric P. Rhodes",
		"ERC1155",
		"/images/nfts/0x7044ad2975b9947d7c611c3eddd3af757cad1c5e.png"
	],
	[
		"0xb4cf05a1abea6c10a3bdd39eca85b6b4a4a2c7da",
		"Soloviev Especial Editions",
		"Soloviev Especial Editions",
		"ERC1155",
		"/images/nfts/0xb4cf05a1abea6c10a3bdd39eca85b6b4a4a2c7da.png"
	],
	[
		"0x86b2e54309b7d96d868b21ef82878c5dcf0b2fcc",
		"ETERNAL  RETURN",
		"ETERNAL  RETURN",
		"ERC1155",
		"/images/nfts/0x86b2e54309b7d96d868b21ef82878c5dcf0b2fcc.png"
	],
	[
		"0xb72d3aeb52b94f9483e23ec7659bb3a26a5f14d2",
		"MAVION Gems - The OG",
		"MAVION Gems - The OG",
		"ERC1155",
		"/images/nfts/0xb72d3aeb52b94f9483e23ec7659bb3a26a5f14d2.png"
	],
	[
		"0x9f9a5c9cdf47c4197ee9a467dd5398c051beb3b1",
		"A Glitch in the GM",
		"A Glitch in the GM",
		"ERC1155",
		"/images/nfts/0x9f9a5c9cdf47c4197ee9a467dd5398c051beb3b1.png"
	],
	[
		"0xafd268ad8f442af1e744521c468c7db89b6df2af",
		"JZAP - Jake Zelinger Access Pass",
		"JZAP - Jake Zelinger Access Pass",
		"ERC1155",
		"/images/nfts/0xafd268ad8f442af1e744521c468c7db89b6df2af.png"
	],
	[
		"0xfc8bb028ddcd01961d24085166378001092fca72",
		"You Got Zanked",
		"You Got Zanked",
		"ERC1155",
		"/images/nfts/0xfc8bb028ddcd01961d24085166378001092fca72.png"
	],
	[
		"0xf302b06280b771bf157df0738fe0f41c1f021eac",
		"Rugged by Ebtesam Ahmed [Editions]",
		"Rugged by Ebtesam Ahmed [Editions]",
		"ERC1155",
		"/images/nfts/0xf302b06280b771bf157df0738fe0f41c1f021eac.png"
	],
	[
		"0xd08f2d720e0d00ff92c7f9ab2073cee4c208cee2",
		"CryptoSnake Coins",
		"CSC",
		"ERC1155",
		"/images/nfts/0xd08f2d720e0d00ff92c7f9ab2073cee4c208cee2.png"
	],
	[
		"0x35eb466177a3be206ea66685de42fb49d1772a38",
		"Socmplxd Editions",
		"Socmplxd Editions",
		"ERC1155",
		"/images/nfts/0x35eb466177a3be206ea66685de42fb49d1772a38.png"
	],
	[
		"0x47aae53e3af66d6ebb1c76591b8cd9f478d990c3",
		"Kulasai 2022 -Manifold",
		"Kulasai 2022 -Manifold",
		"ERC1155",
		"/images/nfts/0x47aae53e3af66d6ebb1c76591b8cd9f478d990c3.png"
	],
	[
		"0x5a28823285f9843c9434f74a31a40f5cf818895a",
		"State Of The Art by Artmoo",
		"State Of The Art by Artmoo",
		"ERC1155",
		"/images/nfts/0x5a28823285f9843c9434f74a31a40f5cf818895a.png"
	],
	[
		"0xc9abbeb01458f20e9260355978709f2625f85877",
		"The Divine Feminine Editions",
		"The Divine Feminine Editions",
		"ERC1155",
		"/images/nfts/0xc9abbeb01458f20e9260355978709f2625f85877.png"
	],
	[
		"0xe28cf3f1281a758ce515d6fa7e9b98d27ee9073e",
		"Elysium CODEC",
		"Elysium CODEC",
		"ERC1155",
		"/images/nfts/0xe28cf3f1281a758ce515d6fa7e9b98d27ee9073e.png"
	],
	[
		"0x16b5847e741502e43783c39e9262817d371a861d",
		"MARFA 2022",
		"MARFA 2022",
		"ERC1155",
		"/images/nfts/0x16b5847e741502e43783c39e9262817d371a861d.png"
	],
	[
		"0xa9bcc11a59b9085a426155418c511d7a8605835b",
		"Gravity Heels Special",
		"HLS",
		"ERC1155",
		"/images/nfts/0xa9bcc11a59b9085a426155418c511d7a8605835b.png"
	],
	[
		"0x8c3ce39cc469e5402cb2e6a594fda3e939fcafdd",
		"Rodro Editions (2022)",
		"Rodro Editions (2022)",
		"ERC1155",
		"/images/nfts/0x8c3ce39cc469e5402cb2e6a594fda3e939fcafdd.png"
	],
	[
		"0xb5f7bfd20f9b069c1bb1bafb26b63f2b45d892e7",
		"SOLITUDE - Edition by Alex Mack",
		"SOLITUDE - Edition by Alex Mack",
		"ERC1155",
		"/images/nfts/0xb5f7bfd20f9b069c1bb1bafb26b63f2b45d892e7.png"
	],
	[
		"0x3899ec4eda97baa524f317d6ecfb84bac632c30a",
		"Exorians: CM21 Mintpass",
		"Exorians: CM21 Mintpass",
		"ERC1155",
		"/images/nfts/0x3899ec4eda97baa524f317d6ecfb84bac632c30a.png"
	],
	[
		"0x15622174f146b55bfb309c744b8dfe575b1e8ea9",
		"Smears",
		"Smears",
		"ERC1155",
		"/images/nfts/0x15622174f146b55bfb309c744b8dfe575b1e8ea9.png"
	],
	[
		"0x030ca311c3a971afed275329945cd88c4f74dfcc",
		"Unidentified contract - 6G3mLNNCXI",
		"Unidentified contract - 6G3mLNNCXI",
		"ERC1155"
	],
	[
		"0x5f74c62aadb40c57402d107c5389561bc80379c4",
		"TEJITOPIA",
		"TEJITOPIA",
		"ERC1155",
		"/images/nfts/0x5f74c62aadb40c57402d107c5389561bc80379c4.png"
	],
	[
		"0x850d754a640f640b8d9844518f584ee131a57c9d",
		"Landscape with Carbon Capture by zancan",
		"Landscape with Carbon Capture by zancan",
		"ERC1155",
		"/images/nfts/0x850d754a640f640b8d9844518f584ee131a57c9d.png"
	],
	[
		"0xec05dabfd7592758978e69ef57244710fda4fd48",
		"Bann3rs by Vinc3nt",
		"Bann3rs by Vinc3nt",
		"ERC1155",
		"/images/nfts/0xec05dabfd7592758978e69ef57244710fda4fd48.png"
	],
	[
		"0xa8e41f2f83d83d83947767cee066119ffc304acf",
		"AlbabyAudace",
		"AlbabyAudace",
		"ERC1155",
		"/images/nfts/0xa8e41f2f83d83d83947767cee066119ffc304acf.png"
	],
	[
		"0xc6dca8e9c9eb5a7eb68b04a69e63352d5d98695c",
		"Auf Reisen 2023 by Dennis Schmelz",
		"AR23",
		"ERC1155",
		"/images/nfts/0xc6dca8e9c9eb5a7eb68b04a69e63352d5d98695c.png"
	],
	[
		"0x03b050f06919641e734421a19ee227566b345928",
		"Frank Moth X Editions",
		"Frank Moth X Editions",
		"ERC1155",
		"/images/nfts/0x03b050f06919641e734421a19ee227566b345928.png"
	],
	[
		"0xbcf295df7aa3962bedfd77ad48ce8f20f2eb2030",
		"AniNouns",
		"AniNouns",
		"ERC1155",
		"/images/nfts/0xbcf295df7aa3962bedfd77ad48ce8f20f2eb2030.png"
	],
	[
		"0xa25c94d428579977282067a209b5e2c598378cba",
		"elysian artifacts",
		"elysian artifacts",
		"ERC1155",
		"/images/nfts/0xa25c94d428579977282067a209b5e2c598378cba.png"
	],
	[
		"0x60b235da895dfb77c41b0de85180da7c46b87dfe",
		"DeluxeGoat Mint Pass",
		"Goat Pass",
		"ERC1155",
		"/images/nfts/0x60b235da895dfb77c41b0de85180da7c46b87dfe.png"
	],
	[
		"0x5d3e4403346518fef8f024c6cb879e128ef759d2",
		"Women Life Freedom - Fundraiser",
		"Women Life Freedom - Fundraiser",
		"ERC1155",
		"/images/nfts/0x5d3e4403346518fef8f024c6cb879e128ef759d2.png"
	],
	[
		"0x2d8c80d4f0e1b2d29397cbe156ad72cb3c36ff34",
		"A Tale of Five Cities by Dre Dogue",
		"A Tale of Five Cities by Dre Dogue",
		"ERC1155",
		"/images/nfts/0x2d8c80d4f0e1b2d29397cbe156ad72cb3c36ff34.png"
	],
	[
		"0x57e4503f63d3ca1cea211936236ba8dd5890a9c0",
		"Neon Goyangi Noir",
		"Neon Goyangi Noir",
		"ERC1155",
		"/images/nfts/0x57e4503f63d3ca1cea211936236ba8dd5890a9c0.png"
	],
	[
		"0xff07ca95d2df99bd03cfb00cb3dfe0e906b1ecf8",
		"TEST - HR06z9Oo51",
		"TEST - HR06z9Oo51",
		"ERC1155",
		"/images/nfts/0xff07ca95d2df99bd03cfb00cb3dfe0e906b1ecf8.png"
	],
	[
		"0x02b67fd1bc80bda265ba804d98ec0786e5ff321b",
		"Kasagi: Gacha Rewards",
		"Kasagi: Gacha Rewards",
		"ERC1155",
		"/images/nfts/0x02b67fd1bc80bda265ba804d98ec0786e5ff321b.png"
	],
	[
		"0x1e473f3eeecb4afbad7c2f4efbaee4b9354fe7fe",
		"Legacy Vault by Jake Zelinger",
		"Legacy Vault by Jake Zelinger",
		"ERC1155",
		"/images/nfts/0x1e473f3eeecb4afbad7c2f4efbaee4b9354fe7fe.png"
	],
	[
		"0x57483572a71f74c7bb79351241f392349210190b",
		"Pit Of Glitch by troutxyz",
		"Pit Of Glitch by troutxyz",
		"ERC1155",
		"/images/nfts/0x57483572a71f74c7bb79351241f392349210190b.png"
	],
	[
		"0xb052d9cc92c8ce58010880b4d9ae6ec19f84d500",
		"Elysium Shell: Next - Components",
		"Elysium Shell: Next - Components",
		"ERC1155",
		"/images/nfts/0xb052d9cc92c8ce58010880b4d9ae6ec19f84d500.png"
	],
	[
		"0x1c69e79edd6b961542aac9fb04b82d83963fcd69",
		"Xickparty",
		"Xickparty",
		"ERC1155",
		"/images/nfts/0x1c69e79edd6b961542aac9fb04b82d83963fcd69.png"
	],
	[
		"0xdc05cdb9381c8e7528c83f221d34c2d5a869501a",
		"JR - Editions",
		"JR - Editions",
		"ERC1155",
		"/images/nfts/0xdc05cdb9381c8e7528c83f221d34c2d5a869501a.png"
	],
	[
		"0xb0d5ff846fc1ab1b86620c8ce5fccf54cdcabc97",
		"Ana Isabel's Editions",
		"Ana Isabel's Editions",
		"ERC1155",
		"/images/nfts/0xb0d5ff846fc1ab1b86620c8ce5fccf54cdcabc97.png"
	],
	[
		"0x902f45fc0e76ede71c09f63221bbf0b0c79fbd5d",
		"Cyber Cologne - Edition by DracheTech11",
		"Cyber Cologne - Edition by DracheTech11",
		"ERC1155",
		"/images/nfts/0x902f45fc0e76ede71c09f63221bbf0b0c79fbd5d.png"
	],
	[
		"0x5b705d7c6362a73fd56d5bcedf09f4e40c2d3670",
		"YOP Lockbox Staked Positions",
		"sYOP",
		"ERC1155",
		"/images/nfts/0x5b705d7c6362a73fd56d5bcedf09f4e40c2d3670.png"
	],
	[
		"0xdc16d38527ebcf1ba034203735c846f3d8f3c535",
		"Tokyo Meta Idol ProducerCard",
		"TMI",
		"ERC1155",
		"/images/nfts/0xdc16d38527ebcf1ba034203735c846f3d8f3c535.png"
	],
	[
		"0xdb8979515b9c34d025b49185ad0fbfaee8e2112e",
		"Mest Seed",
		"Seed",
		"ERC1155",
		"/images/nfts/0xdb8979515b9c34d025b49185ad0fbfaee8e2112e.png"
	],
	[
		"0x5bca3aa593da0948f9c40e28c1f0154ae6935bbe",
		"illusive by diela maharanie",
		"illusive by diela maharanie",
		"ERC1155",
		"/images/nfts/0x5bca3aa593da0948f9c40e28c1f0154ae6935bbe.png"
	],
	[
		"0xe27e33df2e41191082fd464b51e65a9906ea4472",
		"0010 Editions",
		"0010 Editions",
		"ERC1155",
		"/images/nfts/0xe27e33df2e41191082fd464b51e65a9906ea4472.png"
	],
	[
		"0xf7f940d40ddc7c8b98b77347d86128434af926be",
		"Money on the Table by JasonMartin x Diddy",
		"$MOTT",
		"ERC1155",
		"/images/nfts/0xf7f940d40ddc7c8b98b77347d86128434af926be.png"
	],
	[
		"0x2b3555e76fb3a761b441a0beffffc15aec62f92e",
		"Never Alone Genesis Series #2",
		"Never Alone Genesis Series #2",
		"ERC1155",
		"/images/nfts/0x2b3555e76fb3a761b441a0beffffc15aec62f92e.png"
	],
	[
		"0x9a2665ef39b981caa864b7b4bb6f9b8a8b0e423b",
		"Unidentified contract - BDqqoR77AU",
		"Unidentified contract - BDqqoR77AU",
		"ERC1155"
	],
	[
		"0x4cf2f3725f48aa0c0c2ac72378162d2725a52d6f",
		"Clouded Crew",
		"Clouded Crew",
		"ERC1155",
		"/images/nfts/0x4cf2f3725f48aa0c0c2ac72378162d2725a52d6f.png"
	],
	[
		"0x5527cf6b53aab4d51e24b93939f8cc1701c020b2",
		"Starzo World",
		"Starzo World",
		"ERC1155",
		"/images/nfts/0x5527cf6b53aab4d51e24b93939f8cc1701c020b2.png"
	],
	[
		"0xf19bbc0dd171256c0c0eacf27adceab0f86b36d8",
		"Kasagi: Gacha Tickets",
		"Kasagi: Gacha Tickets",
		"ERC1155",
		"/images/nfts/0xf19bbc0dd171256c0c0eacf27adceab0f86b36d8.png"
	],
	[
		"0xbb5d95aafe74d3786536d6177906c35fdf89d9f4",
		"Protect Your Light | Editions",
		"Protect Your Light | Editions",
		"ERC1155",
		"/images/nfts/0xbb5d95aafe74d3786536d6177906c35fdf89d9f4.png"
	],
	[
		"0x9ea5a9e4fc08620b7275ab36385ff0e36f9577b2",
		"how big would you dream ?",
		"how big would you dream ?",
		"ERC1155",
		"/images/nfts/0x9ea5a9e4fc08620b7275ab36385ff0e36f9577b2.png"
	],
	[
		"0xc3c31782cfac9563ba65f332bbe3100020ad81b6",
		"Daz Tokens for NFP Upgrades",
		"Daz Tokens for NFP Upgrades",
		"ERC1155",
		"/images/nfts/0xc3c31782cfac9563ba65f332bbe3100020ad81b6.png"
	],
	[
		"0x640b15ecb071f2b54280dbbe33976caac58a46e7",
		"Punk & Frens",
		"Punk & Frens",
		"ERC1155",
		"/images/nfts/0x640b15ecb071f2b54280dbbe33976caac58a46e7.png"
	],
	[
		"0xb798a123fe75292c3873768d01d7f5fc79e05efc",
		"Roots of Rage by ZENFT",
		"RAGE",
		"ERC1155",
		"/images/nfts/0xb798a123fe75292c3873768d01d7f5fc79e05efc.png"
	],
	[
		"0x0dd0cfeae058610c88a87da2d9fda496cfade108",
		"SoupxMondrian",
		"SoupxMondrian",
		"ERC1155",
		"/images/nfts/0x0dd0cfeae058610c88a87da2d9fda496cfade108.png"
	],
	[
		"0x19acd058aca5ef85d4f66ead68de93a84482eafd",
		"LEARNING HOW TO LEVITATE",
		"LEARNING HOW TO LEVITATE",
		"ERC1155"
	],
	[
		"0x8535b9338477bb23d0a3ec3aef90b8c8b153a1aa",
		"Editions by Nazar Elcansky",
		"Editions by Nazar Elcansky",
		"ERC1155",
		"/images/nfts/0x8535b9338477bb23d0a3ec3aef90b8c8b153a1aa.png"
	],
	[
		"0xdf867faf6487f0cb5e3a5ad91ea46cb2e6c8f186",
		"Ethernity's Master Collection",
		"Ethernity's Master Collection",
		"ERC1155",
		"/images/nfts/0xdf867faf6487f0cb5e3a5ad91ea46cb2e6c8f186.png"
	],
	[
		"0xe3b830d00f60dd3ee867b2fcd2be4561ca1ccdbd",
		"SpaceCatz!",
		"SpaceCatz!",
		"ERC1155",
		"/images/nfts/0xe3b830d00f60dd3ee867b2fcd2be4561ca1ccdbd.png"
	],
	[
		"0xa3a0a86d06c6371b55fa24216ac7ed9e6336f3e0",
		"Reaching For The Stars - Mediolanum",
		"Reaching For The Stars - Mediolanum",
		"ERC1155",
		"/images/nfts/0xa3a0a86d06c6371b55fa24216ac7ed9e6336f3e0.png"
	],
	[
		"0xb6f749ba9542c5394400566423bab255a5500bca",
		"Hayrul Music NFT",
		"Hayrul Music NFT",
		"ERC1155",
		"/images/nfts/0xb6f749ba9542c5394400566423bab255a5500bca.png"
	],
	[
		"0xf441554c208075aca9480b350d0287564c768482",
		"DiDonato Editions",
		"DiDonato Editions",
		"ERC1155",
		"/images/nfts/0xf441554c208075aca9480b350d0287564c768482.png"
	],
	[
		"0x5347422623bf9acdbdf594fe469c906af63e71b5",
		"77Bit Comics",
		"MANGA",
		"ERC1155",
		"/images/nfts/0x5347422623bf9acdbdf594fe469c906af63e71b5.png"
	],
	[
		"0x05ee5009f32b3036d3acd7301d72347a6799562c",
		"Ti Ara Eni(Self)",
		"Ti Ara Eni(Self)",
		"ERC1155",
		"/images/nfts/0x05ee5009f32b3036d3acd7301d72347a6799562c.png"
	],
	[
		"0x5de8a0e46ffdaf44049263f99ea2a16ee93d8105",
		"Burnout Bots Parts V2",
		"Burnout Bots Parts V2",
		"ERC1155",
		"/images/nfts/0x5de8a0e46ffdaf44049263f99ea2a16ee93d8105.png"
	],
	[
		"0x12509cb9123700a4cb51c0bfac07afa4f37b3628",
		"Fight Back Apes Mint Pass",
		"Fight Back Apes Mint Pass",
		"ERC1155",
		"/images/nfts/0x12509cb9123700a4cb51c0bfac07afa4f37b3628.png"
	],
	[
		"0xb1d8a944923d2c4ffe25a975074a30c005a9bf19",
		"Season 0 Car Parts",
		"Season 0 Car Parts",
		"ERC1155",
		"/images/nfts/0xb1d8a944923d2c4ffe25a975074a30c005a9bf19.png"
	],
	[
		"0x5e591c389640d6dcec350646297dec4166fb56f8",
		"SoulZFood",
		"SoulZFood",
		"ERC1155",
		"/images/nfts/0x5e591c389640d6dcec350646297dec4166fb56f8.png"
	],
	[
		"0x72df10e46aebb337e8103c43257d82aa64b05042",
		"VSP Soccer Competition",
		"VSP Soccer Competition",
		"ERC1155",
		"/images/nfts/0x72df10e46aebb337e8103c43257d82aa64b05042.png"
	],
	[
		"0xce3097227ee73e545f8f13b0e38798238fa89bde",
		"Ensan Olive Seed",
		"SEED",
		"ERC1155",
		"/images/nfts/0xce3097227ee73e545f8f13b0e38798238fa89bde.png"
	],
	[
		"0x2c1636779ef85428f6cff6d3262fd5f553b99e83",
		"Medici BLeU by Nick Kuder",
		"Medici BLeU by Nick Kuder",
		"ERC1155",
		"/images/nfts/0x2c1636779ef85428f6cff6d3262fd5f553b99e83.png"
	],
	[
		"0xd929fb5b7357ed59ba770af812efc116f873c795",
		"GRIFF-EDITIONS",
		"GRIFF-EDITIONS",
		"ERC1155",
		"/images/nfts/0xd929fb5b7357ed59ba770af812efc116f873c795.png"
	],
	[
		"0xa5a8c4a909046c72c9569082f55bdc327898a841",
		"Deniz Ekiz Editions",
		"Deniz Ekiz Editions",
		"ERC1155",
		"/images/nfts/0xa5a8c4a909046c72c9569082f55bdc327898a841.png"
	],
	[
		"0x1aa7919e198fcff97bb2c1621432a85adfecacc3",
		"Contemporary Archeology Editions",
		"Contemporary Archeology Editions",
		"ERC1155",
		"/images/nfts/0x1aa7919e198fcff97bb2c1621432a85adfecacc3.png"
	],
	[
		"0xdb761f2f43c7bb022356aa11a46f8493c48f68a7",
		"Collab Land!",
		"Collab Land!",
		"ERC1155",
		"/images/nfts/0xdb761f2f43c7bb022356aa11a46f8493c48f68a7.png"
	],
	[
		"0x25c27c2699d86f21d18851cc6b729bc89e515001",
		"Michelle Thompson Editions",
		"Michelle Thompson Editions",
		"ERC1155",
		"/images/nfts/0x25c27c2699d86f21d18851cc6b729bc89e515001.png"
	],
	[
		"0xa679fcfc9ffae5ac2cc0a8c41e79da042119e93e",
		"Gigamat Editions",
		"Gigamat Editions",
		"ERC1155",
		"/images/nfts/0xa679fcfc9ffae5ac2cc0a8c41e79da042119e93e.png"
	],
	[
		"0xd6d18d58f79079951487a12a74262b91d143fae4",
		"Legends of Wondermist",
		"WOODIESLEGENDS",
		"ERC1155",
		"/images/nfts/0xd6d18d58f79079951487a12a74262b91d143fae4.png"
	],
	[
		"0x79bac54188b5e37c7f2996c5b8f2da05afb183e6",
		"Evil In Colour Editions",
		"Evil In Colour Editions",
		"ERC1155",
		"/images/nfts/0x79bac54188b5e37c7f2996c5b8f2da05afb183e6.png"
	],
	[
		"0x6f52728bd9af22f2e3c51f4594cea81518c9e848",
		"GLitch & Hypnotic Editions",
		"GLitch & Hypnotic Editions",
		"ERC1155",
		"/images/nfts/0x6f52728bd9af22f2e3c51f4594cea81518c9e848.png"
	],
	[
		"0x8cf5c5a5c1de32a29ee42b1ec9ef603f5d2797dc",
		"FWB.art Miami Basel 2021",
		"FWBART",
		"ERC1155",
		"/images/nfts/0x8cf5c5a5c1de32a29ee42b1ec9ef603f5d2797dc.png"
	],
	[
		"0x4bc1c3afb552f26714fcf8aab338cb3d2a400be9",
		"Lunars of Tokyo - mag",
		"Lunars of Tokyo - mag",
		"ERC1155",
		"/images/nfts/0x4bc1c3afb552f26714fcf8aab338cb3d2a400be9.png"
	],
	[
		"0xb13005854856de1a3f2e5fdc70750bc05947a716",
		"Lunars of Tokyo - kyushime",
		"Lunars of Tokyo - kyushime",
		"ERC1155",
		"/images/nfts/0xb13005854856de1a3f2e5fdc70750bc05947a716.png"
	],
	[
		"0xc0d3f8f4b9c41de0c039abb118eff233b76abe98",
		"Thinking About The End",
		"Thinking About The End",
		"ERC1155",
		"/images/nfts/0xc0d3f8f4b9c41de0c039abb118eff233b76abe98.png"
	],
	[
		"0xb2be03fa8524702f95a45a9554572877c2fa4c3a",
		"EBOSHIssance",
		"EBOSHIssance",
		"ERC1155",
		"/images/nfts/0xb2be03fa8524702f95a45a9554572877c2fa4c3a.png"
	],
	[
		"0x2cd83d5456eaabb34b32cddd1b8b254734f9dc28",
		"rilax editions",
		"rilax editions",
		"ERC1155",
		"/images/nfts/0x2cd83d5456eaabb34b32cddd1b8b254734f9dc28.png"
	],
	[
		"0xdde7505f40a61032ed076452f85c0f54dfa208bd",
		"Mythic Artifacts",
		"Mythic Artifacts",
		"ERC1155",
		"/images/nfts/0xdde7505f40a61032ed076452f85c0f54dfa208bd.png"
	],
	[
		"0xa0b3a79cf7d4d1203b9d7b702755c18b4c5524cc",
		"101 Shelter All-Star",
		"101 Shelter All-Star",
		"ERC1155",
		"/images/nfts/0xa0b3a79cf7d4d1203b9d7b702755c18b4c5524cc.png"
	],
	[
		"0x0441a78361da1a225df8b0cdc95ef03b03734f58",
		"ON THE BLOCKCHAIN by Shark Anthony",
		"ON THE BLOCKCHAIN by Shark Anthony",
		"ERC1155",
		"/images/nfts/0x0441a78361da1a225df8b0cdc95ef03b03734f58.png"
	],
	[
		"0xeb6f174970ccdd51ed72c9978a50d83123322ff3",
		"Chads.Limited",
		"CHADSLTD",
		"ERC1155",
		"/images/nfts/0xeb6f174970ccdd51ed72c9978a50d83123322ff3.png"
	],
	[
		"0x648cb0af68032aa14db6b5950f06abbc0e7eed0f",
		"movienftz erc1155 posters",
		"Ξ",
		"ERC1155",
		"/images/nfts/0x648cb0af68032aa14db6b5950f06abbc0e7eed0f.png"
	],
	[
		"0xbbe216296655b628da9305567a09fbedae05ae2a",
		"Early Works - Pat Dimitri",
		"Early Works - Pat Dimitri",
		"ERC1155",
		"/images/nfts/0xbbe216296655b628da9305567a09fbedae05ae2a.png"
	],
	[
		"0x9157fb30c93382630f3bc8046126ca65e4ff42ba",
		"My Mind Mints - Spellamin",
		"My Mind Mints - Spellamin",
		"ERC1155",
		"/images/nfts/0x9157fb30c93382630f3bc8046126ca65e4ff42ba.png"
	],
	[
		"0xc50f3dc76939c3e64f292c9ba474ace29840f8f0",
		"Remikz lab",
		"Remikz lab",
		"ERC1155",
		"/images/nfts/0xc50f3dc76939c3e64f292c9ba474ace29840f8f0.png"
	],
	[
		"0xaf451b460a5e5654a2f1ad4feae943a05c6d1d5c",
		"Delft Blue Editions",
		"Delft Blue Editions",
		"ERC1155",
		"/images/nfts/0xaf451b460a5e5654a2f1ad4feae943a05c6d1d5c.png"
	],
	[
		"0x2f89a4aa5cb9e5ed930dc47915850949ad757ba1",
		"NFT Sport - Box Worldcup",
		"NFT Sport - Box Worldcup",
		"ERC1155",
		"/images/nfts/0x2f89a4aa5cb9e5ed930dc47915850949ad757ba1.png"
	],
	[
		"0xf767ad82edc102dbdae256afb921cec7ba4d8802",
		"Limitless - Collectors' Editions",
		"Limitless - Collectors' Editions",
		"ERC1155",
		"/images/nfts/0xf767ad82edc102dbdae256afb921cec7ba4d8802.png"
	],
	[
		"0x9b3f8ea8ad9e1c1265c01462a08ea6745748ce2e",
		"yokodori",
		"yokodori",
		"ERC1155",
		"/images/nfts/0x9b3f8ea8ad9e1c1265c01462a08ea6745748ce2e.png"
	],
	[
		"0xf2f6168718d310e08e6fa6eed6ddd4081410aa57",
		"Anne McKinnell Special Editions",
		"Anne McKinnell Special Editions",
		"ERC1155",
		"/images/nfts/0xf2f6168718d310e08e6fa6eed6ddd4081410aa57.png"
	],
	[
		"0x2da92fa374b22175a6955ab69e956f0d531662f8",
		"unidentified-contract-r6x2hzuaei-A6fAsqydsD-67sBoJ - old",
		"unidentified-contract-r6x2hzuaei-A6fAsqydsD-67sBoJ - old",
		"ERC1155"
	],
	[
		"0x8c521b1179b681c7ef048ec43073a26523d06d6a",
		"LUV",
		"LUV",
		"ERC1155",
		"/images/nfts/0x8c521b1179b681c7ef048ec43073a26523d06d6a.png"
	],
	[
		"0xe591b98248fa3a4898612302efcd961a25908b01",
		"Boundary | In between the Sky and Sea",
		"Boundary | In between the Sky and Sea",
		"ERC1155",
		"/images/nfts/0xe591b98248fa3a4898612302efcd961a25908b01.png"
	],
	[
		"0xb8b821602bb32709eaef2cc55ab8cc7ba8efc95c",
		"Melody Girls",
		"Melody Girls",
		"ERC1155",
		"/images/nfts/0xb8b821602bb32709eaef2cc55ab8cc7ba8efc95c.png"
	],
	[
		"0x396b38954d2ab367a58a81f3f5fcc32eb96ffef7",
		"WATCH OUT FOR RATS.",
		"WATCH OUT FOR RATS.",
		"ERC1155",
		"/images/nfts/0x396b38954d2ab367a58a81f3f5fcc32eb96ffef7.png"
	],
	[
		"0xb002140ece48311374903b1d78ad2205cfc5e5e9",
		"Unidentified contract - oLKyhzDkny - old",
		"Unidentified contract - oLKyhzDkny - old",
		"ERC1155"
	],
	[
		"0x449f661c53ae0611a24c2883a910a563a7e42489",
		"oncyber community (eth)",
		"oncyber community (eth)",
		"ERC1155",
		"/images/nfts/0x449f661c53ae0611a24c2883a910a563a7e42489.png"
	],
	[
		"0x4b85f0ca2e6892a252fc02dabf36bbe24e9d5567",
		"chickenwithteeth - Editions/Drops",
		"chickenwithteeth - Editions/Drops",
		"ERC1155",
		"/images/nfts/0x4b85f0ca2e6892a252fc02dabf36bbe24e9d5567.png"
	],
	[
		"0xe69e616de27275f4a74491e245de930686dfe6f7",
		"Rally Series One",
		"#PUNK9670",
		"ERC1155",
		"/images/nfts/0xe69e616de27275f4a74491e245de930686dfe6f7.png"
	],
	[
		"0xcfb70f266543cffbceaff821302ceb470896383c",
		"Cryptoon Goonz Live",
		"CGL",
		"ERC1155",
		"/images/nfts/0xcfb70f266543cffbceaff821302ceb470896383c.png"
	],
	[
		"0x8280d56ac92b5bff058d60c99932fdecdcc9441a",
		"BCCG",
		"BCCG",
		"ERC1155",
		"/images/nfts/0x8280d56ac92b5bff058d60c99932fdecdcc9441a.png"
	],
	[
		"0xe3782b8688ad2b0d5ba42842d400f7adf310f88d",
		"BCCG",
		"BCCG",
		"ERC1155",
		"/images/nfts/0xe3782b8688ad2b0d5ba42842d400f7adf310f88d.png"
	],
	[
		"0x34f7aa1a35d399751e05115a60b8d8a15dbb66fa",
		"TheBenMeadows Editions (ERC-1155)",
		"TheBenMeadows Editions (ERC-1155)",
		"ERC1155",
		"/images/nfts/0x34f7aa1a35d399751e05115a60b8d8a15dbb66fa.png"
	],
	[
		"0x8e23082ba7d0242085cb25f03fa976a0447f27e7",
		"8th project Edition Manifold",
		"8th project Edition Manifold",
		"ERC1155",
		"/images/nfts/0x8e23082ba7d0242085cb25f03fa976a0447f27e7.png"
	],
	[
		"0x873d54fddac7a0fa340522988c8f595926987fe2",
		"Glitch Selection",
		"Glitch Selection",
		"ERC1155",
		"/images/nfts/0x873d54fddac7a0fa340522988c8f595926987fe2.png"
	],
	[
		"0x492c0d0a51cbf9dc225a485f9c722413615fc570",
		"The People's Potato by Second Realm",
		"CTZN",
		"ERC1155",
		"/images/nfts/0x492c0d0a51cbf9dc225a485f9c722413615fc570.png"
	],
	[
		"0xe870c7c71acbfffb82a335d9aac6241a5c6ddc7e",
		"Stef's Contract",
		"Stef's Contract",
		"ERC1155",
		"/images/nfts/0xe870c7c71acbfffb82a335d9aac6241a5c6ddc7e.png"
	],
	[
		"0xec1af3ced4eaa0462cf2ede22144487e8388e316",
		"Omega RUNNER - Pinch Rig",
		"RIG",
		"ERC1155",
		"/images/nfts/0xec1af3ced4eaa0462cf2ede22144487e8388e316.png"
	],
	[
		"0x638072ee01bb8de211e70b88f7fac729d4701696",
		"CLAIR OBSCUR by Audace",
		"CLAIR OBSCUR by Audace",
		"ERC1155",
		"/images/nfts/0x638072ee01bb8de211e70b88f7fac729d4701696.png"
	],
	[
		"0x2308e79930059f00ed4e7ef8701b0114084991a3",
		"Lizard Brain Community Project",
		"Lizard Brain Community Project",
		"ERC1155",
		"/images/nfts/0x2308e79930059f00ed4e7ef8701b0114084991a3.png"
	],
	[
		"0x6c0caad6a1c059892944b6afaea67d74ba14b73e",
		"PASTEL by Audace",
		"PASTEL by Audace",
		"ERC1155",
		"/images/nfts/0x6c0caad6a1c059892944b6afaea67d74ba14b73e.png"
	],
	[
		"0xa61eadfaaf0c18ea56867e3edc21702c735a9ed0",
		"The Celestials - Chapter 1",
		"The Celestials - Chapter 1",
		"ERC1155",
		"/images/nfts/0xa61eadfaaf0c18ea56867e3edc21702c735a9ed0.png"
	],
	[
		"0x3a44390ca73bb022f4d2dd3ed47b11accabc7eb3",
		"Into The Sun  - Samarth Saxena",
		"Into The Sun  - Samarth Saxena",
		"ERC1155",
		"/images/nfts/0x3a44390ca73bb022f4d2dd3ed47b11accabc7eb3.png"
	],
	[
		"0x400516ce8259d75a2efc43a409a4453436d94d1f",
		"Desert Treasures ( Editions Contract )",
		"Desert Treasures ( Editions Contract )",
		"ERC1155",
		"/images/nfts/0x400516ce8259d75a2efc43a409a4453436d94d1f.png"
	],
	[
		"0x255d8a48c159d8985928daac3df39ba3950d7bf3",
		"MovieShots - Silhouettes",
		"MSHOT-SILHOUETTE",
		"ERC1155",
		"/images/nfts/0x255d8a48c159d8985928daac3df39ba3950d7bf3.png"
	],
	[
		"0x272fb26606a23a71af61bc79738a2d369f71c663",
		"An Eternal Love Story - by Abhishapes",
		"An Eternal Love Story - by Abhishapes",
		"ERC1155",
		"/images/nfts/0x272fb26606a23a71af61bc79738a2d369f71c663.png"
	],
	[
		"0x3efc6b697720a713fee526abfbcd0bd81c90ecd9",
		"UFO",
		"UFO",
		"ERC1155",
		"/images/nfts/0x3efc6b697720a713fee526abfbcd0bd81c90ecd9.png"
	],
	[
		"0x9ade5b4f0e8370db23e1934eba3c0b93804dc174",
		"JRNY Club Rewards Collection V2",
		"JRNYREWARDS",
		"ERC1155"
	],
	[
		"0x5e86f887ff9676a58f25a6e057b7a6b8d65e1874",
		"Bitchcoin",
		"Bitchcoin",
		"ERC1155",
		"/images/nfts/0x5e86f887ff9676a58f25a6e057b7a6b8d65e1874.png"
	],
	[
		"0xf9fd99a168c27b8d32998a21733cdf1f4dc28c8e",
		"METAKAMI: The Manga",
		"METAKAMI: The Manga",
		"ERC1155",
		"/images/nfts/0xf9fd99a168c27b8d32998a21733cdf1f4dc28c8e.png"
	],
	[
		"0x74eb94b3b84bd3c28e36c6df7743fa7ffe1f84fd",
		"Azuki x AMBUSH IKZ",
		"AAREDEMPTION",
		"ERC1155",
		"/images/nfts/0x74eb94b3b84bd3c28e36c6df7743fa7ffe1f84fd.png"
	],
	[
		"0x65370f215093b4b6303c37b2b88107c656c80e98",
		"Five Factory",
		"Five Factory",
		"ERC1155",
		"/images/nfts/0x65370f215093b4b6303c37b2b88107c656c80e98.png"
	],
	[
		"0xf91a01cc13afc298add0fc8d752287e809ee009d",
		"abdllhart editions",
		"abdllhart editions",
		"ERC1155",
		"/images/nfts/0xf91a01cc13afc298add0fc8d752287e809ee009d.png"
	],
	[
		"0xa93b4f54d78461d8be1ca87daaaa70d961396ff5",
		"Patrick's Subscriber NFT",
		"P-SNFT",
		"ERC1155"
	],
	[
		"0x2613710d789fcc3e73ba83f5ac819aede379aa2d",
		"YAGAMIII EDITIONS",
		"YAGAMIII EDITIONS",
		"ERC1155",
		"/images/nfts/0x2613710d789fcc3e73ba83f5ac819aede379aa2d.png"
	],
	[
		"0xa47fb7c4edd3475ce66f49a66b9bf1edbc61e52d",
		"TPL Mech Afterglow",
		"TPLAFTERGLOW",
		"ERC1155",
		"/images/nfts/0xa47fb7c4edd3475ce66f49a66b9bf1edbc61e52d.png"
	],
	[
		"0x15ab918886b35b896cc2d8d6525b29738f7a345c",
		"Hello From The Past",
		"Hello From The Past",
		"ERC1155",
		"/images/nfts/0x15ab918886b35b896cc2d8d6525b29738f7a345c.png"
	],
	[
		"0xee4c2297e25739352bdbf4dc6c9b32d27363582a",
		"Harley Swann",
		"Harley",
		"ERC1155",
		"/images/nfts/0xee4c2297e25739352bdbf4dc6c9b32d27363582a.png"
	],
	[
		"0x1873323e539d264a1a7712932b7ff8ab2f744d71",
		"Space and Time Community NFT v2",
		"SXTNFT",
		"ERC1155",
		"/images/nfts/0x1873323e539d264a1a7712932b7ff8ab2f744d71.png"
	],
	[
		"0x007e9a6543247e5360b8cb85e9d96228d387fd36",
		"AtelierK.K.Y.G",
		"AtelierK.K.Y.G",
		"ERC1155",
		"/images/nfts/0x007e9a6543247e5360b8cb85e9d96228d387fd36.png"
	],
	[
		"0x2e350d799acd38584338615f758cae15ea739dab",
		"Weed The Wizard & Good News Bas",
		"Weed The Wizard & Good News Bas",
		"ERC1155",
		"/images/nfts/0x2e350d799acd38584338615f758cae15ea739dab.png"
	],
	[
		"0x5133f0ce4a5c9e32a190718cafbedc9992fdf0bc",
		"BAO Omiyage",
		"BAO Omiyage",
		"ERC1155",
		"/images/nfts/0x5133f0ce4a5c9e32a190718cafbedc9992fdf0bc.png"
	],
	[
		"0xa44ec96d623f1b4520a64e217a9a42c88971f393",
		"BlOOd - 5eu4A9bvD4",
		"BlOOd - 5eu4A9bvD4",
		"ERC1155",
		"/images/nfts/0xa44ec96d623f1b4520a64e217a9a42c88971f393.png"
	],
	[
		"0xcf95dd4d51aaf20210b77908ec70f679bc349680",
		"STAPLEGUTTER Series One - Unforged",
		"STAPLEGUTTER Series One - Unforged",
		"ERC1155",
		"/images/nfts/0xcf95dd4d51aaf20210b77908ec70f679bc349680.png"
	],
	[
		"0xa505d540df0591a78a71ecd94e872cafe84025b6",
		"acidframerate",
		"acidframerate",
		"ERC1155",
		"/images/nfts/0xa505d540df0591a78a71ecd94e872cafe84025b6.png"
	],
	[
		"0x6f329619b58c46ea93d506708769fbe3c71c2f83",
		"Charcoal art editions",
		"Charcoal art editions",
		"ERC1155",
		"/images/nfts/0x6f329619b58c46ea93d506708769fbe3c71c2f83.png"
	],
	[
		"0xc62f536b47ce58dbb97d36b1bfdd814093392414",
		"DANKBOTS FOUNDERS PASS // OFFICIAL",
		"DBFP",
		"ERC1155",
		"/images/nfts/0xc62f536b47ce58dbb97d36b1bfdd814093392414.png"
	],
	[
		"0xf4573f3b5c0132b69419219d77925f6f1e3f4f80",
		"NOODIE - Editions",
		"NOODIE - Editions",
		"ERC1155",
		"/images/nfts/0xf4573f3b5c0132b69419219d77925f6f1e3f4f80.png"
	],
	[
		"0x548284ac2623a686c60a46d6a17ad1556a27a3b3",
		"TEF - RAREPUNKCARDS",
		"TEF - RAREPUNKCARDS",
		"ERC1155",
		"/images/nfts/0x548284ac2623a686c60a46d6a17ad1556a27a3b3.png"
	],
	[
		"0xf80cfc4aeabc3306913bc2903dbcc8993ec5377b",
		"ROSLYN PORTRAIT EDITIONS",
		"ROSLYN PORTRAIT EDITIONS",
		"ERC1155",
		"/images/nfts/0xf80cfc4aeabc3306913bc2903dbcc8993ec5377b.png"
	],
	[
		"0x4dc05ba37602996264e64485591f884666172864",
		"Kyle's Editions",
		"Kyle's Editions",
		"ERC1155",
		"/images/nfts/0x4dc05ba37602996264e64485591f884666172864.png"
	],
	[
		"0x42aae8c4ef11e1f9acb0853d57431b8b47b21854",
		"Elephants of ETHland Pre Mint Utility Pass",
		"EoEPM",
		"ERC1155",
		"/images/nfts/0x42aae8c4ef11e1f9acb0853d57431b8b47b21854.png"
	],
	[
		"0xb712f6e0ef3f4e3cadfd14821cbef4455381f84a",
		"Editions by Emanuele Ferrari",
		"Editions by Emanuele Ferrari",
		"ERC1155",
		"/images/nfts/0xb712f6e0ef3f4e3cadfd14821cbef4455381f84a.png"
	],
	[
		"0x72d16b256f82e4016726e00be827743b57b6d9d5",
		"Croak V2",
		"Croak! ",
		"ERC1155",
		"/images/nfts/0x72d16b256f82e4016726e00be827743b57b6d9d5.png"
	],
	[
		"0x9a83fcbb58590e153af8aab405289fa425bb668e",
		"Eloh's Collectors Editions",
		"Eloh's Collectors Editions",
		"ERC1155",
		"/images/nfts/0x9a83fcbb58590e153af8aab405289fa425bb668e.png"
	],
	[
		"0xad87c7ef60519ee9f30f56eb758512321f085bd2",
		"Krause House Tickets",
		"KH",
		"ERC1155",
		"/images/nfts/0xad87c7ef60519ee9f30f56eb758512321f085bd2.png"
	],
	[
		"0xc4e0ef3671115b5e15a2272ea4250e957cabbff3",
		"DREAMS OF GLOW 2",
		"DREAMS OF GLOW 2",
		"ERC1155",
		"/images/nfts/0xc4e0ef3671115b5e15a2272ea4250e957cabbff3.png"
	],
	[
		"0x01aea756df7eb0475749dcf2cbb45a3494dab8ef",
		"3 STAGES OF SCORPIO",
		"3 STAGES OF SCORPIO",
		"ERC1155",
		"/images/nfts/0x01aea756df7eb0475749dcf2cbb45a3494dab8ef.png"
	],
	[
		"0xf0acd3e41ec02de672db09a88a7855ac1a69af5f",
		"WCC Limited Editions",
		"WCCLE",
		"ERC1155",
		"/images/nfts/0xf0acd3e41ec02de672db09a88a7855ac1a69af5f.png"
	],
	[
		"0x8f86c6fa0f2aa138d256ed7ab5c64181e60a6f89",
		"Dancing Seahorse Mint Pass",
		"DSCMP",
		"ERC1155",
		"/images/nfts/0x8f86c6fa0f2aa138d256ed7ab5c64181e60a6f89.png"
	],
	[
		"0x594d8e4951fc5ccef3e5ef3d68d5e63b9ba68eb8",
		"VAIN.",
		"VAIN.",
		"ERC1155",
		"/images/nfts/0x594d8e4951fc5ccef3e5ef3d68d5e63b9ba68eb8.png"
	],
	[
		"0x8377355a44228ec37ea76f203639a463a7f60950",
		"Information Token",
		"IT v3",
		"ERC1155",
		"/images/nfts/0x8377355a44228ec37ea76f203639a463a7f60950.png"
	],
	[
		"0x10f62ca5f836a8ed4d80968500ef430fcd8813b0",
		"The Mystery Box | SN NFT",
		"The Mystery Box | SN NFT",
		"ERC1155",
		"/images/nfts/0x10f62ca5f836a8ed4d80968500ef430fcd8813b0.png"
	],
	[
		"0x9bcdd9d3a71b1303c292f393778f2e30c35b5967",
		"ARTFUL HAND",
		"ARTFUL HAND",
		"ERC1155",
		"/images/nfts/0x9bcdd9d3a71b1303c292f393778f2e30c35b5967.png"
	],
	[
		"0x18cfccf2be7e662314b566ee58e3c2e175b37f13",
		"LandVault: Genesis",
		"LV",
		"ERC1155",
		"/images/nfts/0x18cfccf2be7e662314b566ee58e3c2e175b37f13.png"
	],
	[
		"0x8ed2cd56ce160bb282903b950b17cc7b53990145",
		"PiggyBank Genesis",
		"PBG",
		"ERC1155"
	],
	[
		"0x035aeb21a209da68dc1c7221160e6a67989b9729",
		"Broken Hopes- Free mint",
		"Broken Hopes- Free mint",
		"ERC1155",
		"/images/nfts/0x035aeb21a209da68dc1c7221160e6a67989b9729.png"
	],
	[
		"0x34bc1299fb22219a4537fc41c5dd9a9efd2c976c",
		"data swamp",
		"data swamp",
		"ERC1155",
		"/images/nfts/0x34bc1299fb22219a4537fc41c5dd9a9efd2c976c.png"
	],
	[
		"0xa8969a481d53084c88cd5b8e1056c41dc715922f",
		"SJarman-editions",
		"SJarman-editions",
		"ERC1155",
		"/images/nfts/0xa8969a481d53084c88cd5b8e1056c41dc715922f.png"
	],
	[
		"0x5c891d76584b46bc7f1e700169a76569bb77d2db",
		"OKXFootballCup",
		"OKXFC",
		"ERC1155"
	],
	[
		"0xe2a09007732a8cdeb7879fb4f663599f914e67a6",
		"TierPass",
		"TP",
		"ERC1155",
		"/images/nfts/0xe2a09007732a8cdeb7879fb4f663599f914e67a6.png"
	],
	[
		"0xd5816cd3311ab8b6c68d1ccff4d236f429721caf",
		"ZomBae Juice",
		"BAEJUICE",
		"ERC1155",
		"/images/nfts/0xd5816cd3311ab8b6c68d1ccff4d236f429721caf.png"
	],
	[
		"0xf0cbaf8ddc97cc43f83e9da4a2e6c48311ca9869",
		"Angelic: Angels of Chaos",
		"Angelic: Angels of Chaos",
		"ERC1155",
		"/images/nfts/0xf0cbaf8ddc97cc43f83e9da4a2e6c48311ca9869.png"
	],
	[
		"0xcced1df84f70048eaa13a098acab5d144d70c2a5",
		"desk 0f ambr0sia",
		"desk 0f ambr0sia",
		"ERC1155",
		"/images/nfts/0xcced1df84f70048eaa13a098acab5d144d70c2a5.png"
	],
	[
		"0x501ed8cddc84242139515172d483435a21723c66",
		"Inhabitants: Stories",
		"ISCE",
		"ERC1155",
		"/images/nfts/0x501ed8cddc84242139515172d483435a21723c66.png"
	],
	[
		"0xadadd91b62b6737ca2837eba67896eb408ec4d8e",
		"EDITIONZ by JIMMY",
		"EDITIONZ by JIMMY",
		"ERC1155",
		"/images/nfts/0xadadd91b62b6737ca2837eba67896eb408ec4d8e.png"
	],
	[
		"0xc81c3c7101803943632f6d593f3c728152a83c00",
		"AI Bird Feed",
		"AIFEED",
		"ERC1155",
		"/images/nfts/0xc81c3c7101803943632f6d593f3c728152a83c00.png"
	],
	[
		"0x90f94e450ac1c3e1d2c97a72e778e783c558bf3e",
		"Charadao Collection - ETH",
		"Charadao Collection - ETH",
		"ERC1155",
		"/images/nfts/0x90f94e450ac1c3e1d2c97a72e778e783c558bf3e.png"
	],
	[
		"0xa3de26661e786d7555493eca6d40d07ce14c4762",
		"Doge Club Serum Bone",
		"Doge Club Serum Bone",
		"ERC1155",
		"/images/nfts/0xa3de26661e786d7555493eca6d40d07ce14c4762.png"
	],
	[
		"0xb161da15b132be33305b4808ba5de4d2e2c49d9a",
		"AnimightiesJigScene",
		"AMJS",
		"ERC1155",
		"/images/nfts/0xb161da15b132be33305b4808ba5de4d2e2c49d9a.png"
	],
	[
		"0x7803fc1b7ab032f00ff4b775547468c6d4e1098e",
		"Ratio-active",
		"Ratio-active",
		"ERC1155",
		"/images/nfts/0x7803fc1b7ab032f00ff4b775547468c6d4e1098e.png"
	],
	[
		"0xbd46d5ea27eee3924dbdb8f41e1a3dbf837c2cd3",
		"Power Musix Seeds",
		"Power Musix Seeds",
		"ERC1155",
		"/images/nfts/0xbd46d5ea27eee3924dbdb8f41e1a3dbf837c2cd3.png"
	],
	[
		"0x12fe3857889824a43676678ce09f4d53ce57b379",
		"Below The Equator",
		"Below The Equator",
		"ERC1155",
		"/images/nfts/0x12fe3857889824a43676678ce09f4d53ce57b379.png"
	],
	[
		"0xa61f6138506aff96b969ce7c3f46cc07b4559907",
		"Tajigen Drops",
		"Tajigen Drops",
		"ERC1155",
		"/images/nfts/0xa61f6138506aff96b969ce7c3f46cc07b4559907.png"
	],
	[
		"0x4715be0c5e9bcfe1382da60cff69096af4c4eef4",
		"The Barren Court: Desert Bestiary",
		"The Barren Court: Desert Bestiary",
		"ERC1155",
		"/images/nfts/0x4715be0c5e9bcfe1382da60cff69096af4c4eef4.png"
	],
	[
		"0x5e89cb1ff80961849fa0ac980ad7746772f00f4d",
		"FREE COLLECTION - Royal Bengal Tiger",
		"FREE COLLECTION - Royal Bengal Tiger",
		"ERC1155",
		"/images/nfts/0x5e89cb1ff80961849fa0ac980ad7746772f00f4d.png"
	],
	[
		"0xbdbcd8769861e827daa4ccca2ae66731a357345f",
		"Galerie de Sagrada Familia",
		"Galerie de Sagrada Familia",
		"ERC1155",
		"/images/nfts/0xbdbcd8769861e827daa4ccca2ae66731a357345f.png"
	],
	[
		"0x9ce180c37d2b66a7f2fef124098d51540dd592a4",
		"My Imaginary Items by Kai",
		"IFITEM",
		"ERC1155",
		"/images/nfts/0x9ce180c37d2b66a7f2fef124098d51540dd592a4.png"
	],
	[
		"0xfbe27c27dc2ef6a37256e0d0efaa4ddb67c54db7",
		"BROADSIDE Phase 1: Episodes",
		"BSIDE1-EPS",
		"ERC1155",
		"/images/nfts/0xfbe27c27dc2ef6a37256e0d0efaa4ddb67c54db7.png"
	],
	[
		"0xca85c06e752fdb9d8a427cdff7e5878d8bb61ce5",
		"BASQKEK OPEN EDITION",
		"BASQKEK OPEN EDITION",
		"ERC1155",
		"/images/nfts/0xca85c06e752fdb9d8a427cdff7e5878d8bb61ce5.png"
	],
	[
		"0x97a20815a061eae224c4fdf3109731f73743db73",
		"LVCIDIA// RESOURCES",
		"RSRC",
		"ERC1155",
		"/images/nfts/0x97a20815a061eae224c4fdf3109731f73743db73.png"
	],
	[
		"0x37582c3b14ecbbe085bfdbf83f4bec1d82c1d355",
		"Z1 Serum by Rare Apepes",
		"Z1",
		"ERC1155",
		"/images/nfts/0x37582c3b14ecbbe085bfdbf83f4bec1d82c1d355.png"
	],
	[
		"0x52301a724d7c54077b2396cb1aff7055be62f239",
		"Editions by Aaron Ricketts",
		"Editions by Aaron Ricketts",
		"ERC1155",
		"/images/nfts/0x52301a724d7c54077b2396cb1aff7055be62f239.png"
	],
	[
		"0xb3afa04cf378ee9bcd9214c91592f1402a2974f7",
		"Shootout at Lykenrot",
		"SALFD",
		"ERC1155",
		"/images/nfts/0xb3afa04cf378ee9bcd9214c91592f1402a2974f7.png"
	],
	[
		"0x853df706081fc1ee67617bba1b441aff9c62a0b4",
		"IMMERSE EDITION",
		"IMMERSE EDITION",
		"ERC1155",
		"/images/nfts/0x853df706081fc1ee67617bba1b441aff9c62a0b4.png"
	],
	[
		"0x9f69d8ec167a87658e3a287d22d14e9913c176b9",
		"MAD SIDE",
		"MAD SIDE",
		"ERC1155",
		"/images/nfts/0x9f69d8ec167a87658e3a287d22d14e9913c176b9.png"
	],
	[
		"0x5badda2837ba49330ffe676fc0f1738cb9b181f6",
		"Bearex Boxes - old V3",
		"Bearex Boxes - old V3",
		"ERC1155",
		"/images/nfts/0x5badda2837ba49330ffe676fc0f1738cb9b181f6.png"
	],
	[
		"0x026265dfbe46eaf814a66c0c6466f2f7488283b3",
		"GPWIN",
		"GPWIN",
		"ERC1155",
		"/images/nfts/0x026265dfbe46eaf814a66c0c6466f2f7488283b3.png"
	],
	[
		"0x2218e5c9a822e0252d81822ea650f6600422ed95",
		"editions ^ RZSNN",
		"editions ^ RZSNN",
		"ERC1155",
		"/images/nfts/0x2218e5c9a822e0252d81822ea650f6600422ed95.png"
	],
	[
		"0x8350a9cfa976c968cf6240fd718d0af44bfcaabe",
		"Midnight Labs",
		"ML",
		"ERC1155",
		"/images/nfts/0x8350a9cfa976c968cf6240fd718d0af44bfcaabe.png"
	],
	[
		"0x9b7987984afa181bc57cb82f507c040fc05d4ce0",
		"GMPPFP Editions",
		"GMPPFP Editions",
		"ERC1155",
		"/images/nfts/0x9b7987984afa181bc57cb82f507c040fc05d4ce0.png"
	],
	[
		"0x3a185738b0feacb30843f0808dfc85df802f3b54",
		"Method Man Noir Issue #1",
		"Method Man Noir Issue #1",
		"ERC1155",
		"/images/nfts/0x3a185738b0feacb30843f0808dfc85df802f3b54.png"
	],
	[
		"0x784919334e5c501a3e6036be64407334a73da0ee",
		"The Pranksy Bus Street Art Tour",
		"PRANKSYBUS",
		"ERC1155",
		"/images/nfts/0x784919334e5c501a3e6036be64407334a73da0ee.png"
	],
	[
		"0xcafff218ef90c50e094d7672fc2345d55a3589d1",
		"Juice | Editions",
		"RAW",
		"ERC1155",
		"/images/nfts/0xcafff218ef90c50e094d7672fc2345d55a3589d1.png"
	],
	[
		"0xfc48fc90ecd1210894a10cff417ad673948f0a47",
		"DONT BE KOI | Editions",
		"DONT BE KOI | Editions",
		"ERC1155",
		"/images/nfts/0xfc48fc90ecd1210894a10cff417ad673948f0a47.png"
	],
	[
		"0xbdbc0b7837286b0c08de5ff54a2b52cf90308835",
		"OKX NFT Marketplace Reserve",
		"OKX NFT Marketplace Reserve",
		"ERC1155",
		"/images/nfts/0xbdbc0b7837286b0c08de5ff54a2b52cf90308835.png"
	],
	[
		"0xbc5145b2da18bedfe251194dddb1a8f3adf7e58d",
		"Fog on the Blue Ridge Parkway Edition",
		"Fog on the Blue Ridge Parkway Edition",
		"ERC1155",
		"/images/nfts/0xbc5145b2da18bedfe251194dddb1a8f3adf7e58d.png"
	],
	[
		"0x2b5469931fc530aba7bf30e6f8118a9d6e37143e",
		"Common Wealth Genesis NFT",
		"Common Wealth Genesis NFT",
		"ERC1155",
		"/images/nfts/0x2b5469931fc530aba7bf30e6f8118a9d6e37143e.png"
	],
	[
		"0x28922b8df8915f3339f868e4b4d86abf2b68e9ed",
		"EMOJI POP",
		"EMOJI POP",
		"ERC1155",
		"/images/nfts/0x28922b8df8915f3339f868e4b4d86abf2b68e9ed.png"
	],
	[
		"0x6ae380cab6689d77a96b22e1d87806b535a72cfb",
		"PuzzledPanther Editions",
		"PuzzledPanther Editions",
		"ERC1155",
		"/images/nfts/0x6ae380cab6689d77a96b22e1d87806b535a72cfb.png"
	],
	[
		"0xb95406ff2c245e4da3a75198503f0066e3c64740",
		"STINGY JACK",
		"STINGY JACK",
		"ERC1155",
		"/images/nfts/0xb95406ff2c245e4da3a75198503f0066e3c64740.png"
	],
	[
		"0x22872faf1f71230769489a690f9896ab10ecc625",
		"ELCANSKY",
		"ELCANSKY",
		"ERC1155",
		"/images/nfts/0x22872faf1f71230769489a690f9896ab10ecc625.png"
	],
	[
		"0x5cb5a4bc551c17b378c187385e3b97430e027f3a",
		"Alemac Editions",
		"Alemac Editions",
		"ERC1155",
		"/images/nfts/0x5cb5a4bc551c17b378c187385e3b97430e027f3a.png"
	],
	[
		"0x41efbce86158f2a54368fe5ce80ce1d496acaa5e",
		"ForgottenPunks: Spells",
		"ForgottenPunks: Spells",
		"ERC1155",
		"/images/nfts/0x41efbce86158f2a54368fe5ce80ce1d496acaa5e.png"
	],
	[
		"0x04afa589e2b933f9463c5639f412b183ec062505",
		"My Curio Cards",
		"My Curio Cards",
		"ERC1155",
		"/images/nfts/0x04afa589e2b933f9463c5639f412b183ec062505.png"
	],
	[
		"0xa85f1955e927d27118688c16b65e66fa87fc7f46",
		"Art By vad",
		"Art By vad",
		"ERC1155",
		"/images/nfts/0xa85f1955e927d27118688c16b65e66fa87fc7f46.png"
	],
	[
		"0xa90fe99ce85f77e8d0d4cda04c3a92e5c7b4e1f5",
		"Null-Address Hashes",
		"Null-Address Hashes",
		"ERC1155",
		"/images/nfts/0xa90fe99ce85f77e8d0d4cda04c3a92e5c7b4e1f5.png"
	],
	[
		"0xfa3771fdd9588191f65c342683ba2816a538b81e",
		"//CWS. x Yanis | ethikdesign",
		"//CWS. x Yanis | ethikdesign",
		"ERC1155",
		"/images/nfts/0xfa3771fdd9588191f65c342683ba2816a538b81e.png"
	],
	[
		"0x8836d02743b726eba104224f7682db9dccfa913b",
		"Data Poets Viz",
		"Data Poets Viz",
		"ERC1155",
		"/images/nfts/0x8836d02743b726eba104224f7682db9dccfa913b.png"
	],
	[
		"0x2335f55b5457a9ba22dd85bca109a495edd589d6",
		"Feels Flat",
		"Feels Flat",
		"ERC1155",
		"/images/nfts/0x2335f55b5457a9ba22dd85bca109a495edd589d6.png"
	],
	[
		"0x162b99727e3ded35d7386014e91649b04fefb2d5",
		"FakeRareDecal SZN 0",
		"FakeRareDecal SZN 0",
		"ERC1155",
		"/images/nfts/0x162b99727e3ded35d7386014e91649b04fefb2d5.png"
	],
	[
		"0xa9615bbfb476f508e50c723d384dc47a4bc800db",
		"NONE32X32",
		"NONE32X32",
		"ERC1155",
		"/images/nfts/0xa9615bbfb476f508e50c723d384dc47a4bc800db.png"
	],
	[
		"0x2aa5a85ac3ddda7d32e9f8ba9337dca6b3427cda",
		"JUPITER METAVERSE - Genesis Collection",
		"JUPITER METAVERSE - Genesis Collection",
		"ERC1155",
		"/images/nfts/0x2aa5a85ac3ddda7d32e9f8ba9337dca6b3427cda.png"
	],
	[
		"0x245ddb6cc6fe69a6b8ee74c9ac8570c469583f5a",
		"Avatar Master V2",
		"Avatar Master V2",
		"ERC1155",
		"/images/nfts/0x245ddb6cc6fe69a6b8ee74c9ac8570c469583f5a.png"
	],
	[
		"0x5150b29a431ece5eb0e62085535b8aac8df193be",
		"Delicious chocolate cake",
		"SLICES",
		"ERC1155",
		"/images/nfts/0x5150b29a431ece5eb0e62085535b8aac8df193be.png"
	],
	[
		"0xebc651f4a8c898b5c45fbeeec9cf125bb8b452e1",
		"Pork1984 | Vaccines",
		"Pork1984 | Vaccines",
		"ERC1155",
		"/images/nfts/0xebc651f4a8c898b5c45fbeeec9cf125bb8b452e1.png"
	],
	[
		"0x83c6723aea03193699d43cc77910384ded6bdb7c",
		"CiderPals",
		"CiderPals",
		"ERC1155",
		"/images/nfts/0x83c6723aea03193699d43cc77910384ded6bdb7c.png"
	],
	[
		"0x0e705034d4c25bfbdc0302a84a0eb1e6ebf7fb2f",
		"Maya.S - Mad FOLDies",
		"Maya.S - Mad FOLDies",
		"ERC1155",
		"/images/nfts/0x0e705034d4c25bfbdc0302a84a0eb1e6ebf7fb2f.png"
	],
	[
		"0x472891572599552826d96d5c87be026f02c5f252",
		"DMC - Exoplanets",
		"DMC - Exoplanets",
		"ERC1155",
		"/images/nfts/0x472891572599552826d96d5c87be026f02c5f252.png"
	],
	[
		"0x43a1a3c0d22d3fd55f5c5f277a4b6161cf0fe920",
		"Taste of liife",
		"Taste of liife",
		"ERC1155",
		"/images/nfts/0x43a1a3c0d22d3fd55f5c5f277a4b6161cf0fe920.png"
	],
	[
		"0xd0ac67a1dce2fa09a85f256ab370740cf9b9476b",
		"ARCELLA MEMENTO EDITIONS",
		"ARCELLA MEMENTO EDITIONS",
		"ERC1155",
		"/images/nfts/0xd0ac67a1dce2fa09a85f256ab370740cf9b9476b.png"
	],
	[
		"0x35949e7941f12493076d40fff4cd15562aa32218",
		"Unidentified contract - v9QfZuZ6Pl",
		"Unidentified contract - v9QfZuZ6Pl",
		"ERC1155"
	],
	[
		"0x93298d9c3ec890fbaa5c5bd619413a1f1da5ffb8",
		"Ledger x Killer Acid, Deadfellaz Infected S2",
		"Ledger x Killer Acid, Deadfellaz Infected S2",
		"ERC1155",
		"/images/nfts/0x93298d9c3ec890fbaa5c5bd619413a1f1da5ffb8.png"
	],
	[
		"0xbb8ba51414ca18a154ede98d1727c58dae392aa3",
		"Unidentified contract - YDuHvMHuaD",
		"Unidentified contract - YDuHvMHuaD",
		"ERC1155"
	],
	[
		"0xc14855c4a49b0338476720697b8a219c228ad4e4",
		"The visionnaire horror picture show",
		"The visionnaire horror picture show",
		"ERC1155",
		"/images/nfts/0xc14855c4a49b0338476720697b8a219c228ad4e4.png"
	],
	[
		"0x3120e581d9b1c899e69e1c6a37a62a5af8f3633d",
		"High Lights Exclusives",
		"HighDRP",
		"ERC1155",
		"/images/nfts/0x3120e581d9b1c899e69e1c6a37a62a5af8f3633d.png"
	],
	[
		"0xac9db340485aef69621510f0a3928dfd3b181799",
		"Poseidon DAO Deploy Collection",
		"Poseidon DAO Deploy Collection",
		"ERC1155",
		"/images/nfts/0xac9db340485aef69621510f0a3928dfd3b181799.png"
	],
	[
		"0x22d02dd2d6b679cf7431ce0e1ee05ca7bbba7c2d",
		"LEE HONG GI - I'm missing you",
		"LEE HONG GI - I'm missing you",
		"ERC1155",
		"/images/nfts/0x22d02dd2d6b679cf7431ce0e1ee05ca7bbba7c2d.png"
	],
	[
		"0x7c2abae00c12821ee1427f37a79af1b806eef638",
		"Post by Vinnie Hager",
		"Post by Vinnie Hager",
		"ERC1155",
		"/images/nfts/0x7c2abae00c12821ee1427f37a79af1b806eef638.png"
	],
	[
		"0x5728ff21bdadb0d3505f4e307f79282d53d92fde",
		"Genesis Merchant Collection Puzzle Pieces",
		"GMCPP",
		"ERC1155"
	],
	[
		"0x3fc09fa16986483edcbad8d6cf5c87e84ad5a4ce",
		"Quark Capsules",
		"QCS",
		"ERC1155",
		"/images/nfts/0x3fc09fa16986483edcbad8d6cf5c87e84ad5a4ce.png"
	],
	[
		"0x6524d06299e415df578763a3be108af4904359ef",
		"[not in use]",
		"Z1",
		"ERC1155",
		"/images/nfts/0x6524d06299e415df578763a3be108af4904359ef.png"
	],
	[
		"0xbe745b69a2e5ae876d9c0176a048ec26b72e3e2d",
		"Genesis Merchant Hexes",
		"Genesis Merchant Hexes",
		"ERC1155"
	],
	[
		"0xa866dab55af2bcef47980bb311271f7132965f63",
		"An1 Tokens",
		"An1 Tokens",
		"ERC1155",
		"/images/nfts/0xa866dab55af2bcef47980bb311271f7132965f63.png"
	],
	[
		"0x10b712f8c8419b84394368af356c63eff5661c63",
		"DeltaSauce Art - Editions",
		"DeltaSauce Art - Editions",
		"ERC1155",
		"/images/nfts/0x10b712f8c8419b84394368af356c63eff5661c63.png"
	],
	[
		"0x906bc18f74ad10f58d6e110aa54df4c2fc72ead7",
		"Galaxy Warriors Presale Token",
		"Galaxy Warriors Presale Token",
		"ERC1155",
		"/images/nfts/0x906bc18f74ad10f58d6e110aa54df4c2fc72ead7.png"
	],
	[
		"0x6a82872743217a0988e4d72975d74432cfdef9d7",
		"Parallel Comics",
		"LLCMC",
		"ERC1155",
		"/images/nfts/0x6a82872743217a0988e4d72975d74432cfdef9d7.png"
	],
	[
		"0x5302a847e53c7b2ff4daea7559f82f02446bee61",
		"Parallel Lore",
		"LLLR",
		"ERC1155",
		"/images/nfts/0x5302a847e53c7b2ff4daea7559f82f02446bee61.png"
	],
	[
		"0x92ccddc6168af0b568a0820cf973a4c62ded7d34",
		"Alevi - Space and Time",
		"Alevi - Space and Time",
		"ERC1155",
		"/images/nfts/0x92ccddc6168af0b568a0820cf973a4c62ded7d34.png"
	],
	[
		"0x5ab81e38b14faa61a699af1bccd1fe5ecab20fae",
		"APY VISION NFT 2021",
		"APYNFT2021",
		"ERC1155"
	],
	[
		"0x0bceb4ebce24ea64338a09fafc1cb63bc7d951de",
		"Bastante indefinido",
		"Bastante indefinido",
		"ERC1155",
		"/images/nfts/0x0bceb4ebce24ea64338a09fafc1cb63bc7d951de.png"
	],
	[
		"0x58eb46a7f7f838ef90314a5bde4c00887132b4cf",
		"100 GHOSTS",
		"100G",
		"ERC1155",
		"/images/nfts/0x58eb46a7f7f838ef90314a5bde4c00887132b4cf.png"
	],
	[
		"0x5f48045f3a1a19ab9985418869f77612cfa752d6",
		"Nightmare Imp's Tricks",
		"Nightmare Imp's Tricks",
		"ERC1155",
		"/images/nfts/0x5f48045f3a1a19ab9985418869f77612cfa752d6.png"
	],
	[
		"0x575a2bf8070951a35d61ebe32fe3671d610325d2",
		"Hendro Soetrisno's Editions",
		"Hendro Soetrisno's Editions",
		"ERC1155",
		"/images/nfts/0x575a2bf8070951a35d61ebe32fe3671d610325d2.png"
	],
	[
		"0x7c104b4db94494688027cced1e2ebfb89642c80f",
		"Forgotten Runes Athenaeum",
		"Forgotten Runes Athenaeum",
		"ERC1155",
		"/images/nfts/0x7c104b4db94494688027cced1e2ebfb89642c80f.png"
	],
	[
		"0x8edf0426c0b0d10b50d72eb3f0c40985438cdaab",
		"Alien Samurai Dino Warriors",
		"Alien Samurai Dino Warriors",
		"ERC1155",
		"/images/nfts/0x8edf0426c0b0d10b50d72eb3f0c40985438cdaab.png"
	],
	[
		"0xb644476e44a797db3b8a6a16f2e63e8d5a541b67",
		"isotile furnitures",
		"isotile furnitures",
		"ERC1155",
		"/images/nfts/0xb644476e44a797db3b8a6a16f2e63e8d5a541b67.png"
	],
	[
		"0x3e2f1a21a628e4485ac35672075db9e7125fad27",
		"0xTribe Chest",
		"0xTribe Chest",
		"ERC1155",
		"/images/nfts/0x3e2f1a21a628e4485ac35672075db9e7125fad27.png"
	],
	[
		"0x89b9d60707654449a5ed884c381f06b003ef9bce",
		"Kelly McD x Editions",
		"Kelly McD x Editions",
		"ERC1155",
		"/images/nfts/0x89b9d60707654449a5ed884c381f06b003ef9bce.png"
	],
	[
		"0x95ba2cac26d32c03ca0f65be752008274f6dd66b",
		"Elite Collective",
		"ELCV",
		"ERC1155",
		"/images/nfts/0x95ba2cac26d32c03ca0f65be752008274f6dd66b.png"
	],
	[
		"0x7706bb3445154c32e055ee68f72656be612cb888",
		"Rugged Clowns FREE MINT",
		"RUGGED FREE",
		"ERC1155",
		"/images/nfts/0x7706bb3445154c32e055ee68f72656be612cb888.png"
	],
	[
		"0x1ec09f69384d65ad05daed91837a72e4111524c3",
		"a8e",
		"a8e",
		"ERC1155",
		"/images/nfts/0x1ec09f69384d65ad05daed91837a72e4111524c3.png"
	],
	[
		"0x9794a9894e24f37e4072f206cfb6a6700fdefbf2",
		"FVCK_LIMITED//",
		"FVCK_LIMITED//",
		"ERC1155",
		"/images/nfts/0x9794a9894e24f37e4072f206cfb6a6700fdefbf2.png"
	],
	[
		"0x24c3c2019c83943d55c0b942c6fec92dbc66ff5f",
		"LoveByBC",
		"LoveByBC",
		"ERC1155",
		"/images/nfts/0x24c3c2019c83943d55c0b942c6fec92dbc66ff5f.png"
	],
	[
		"0xb7564c24e3123d87134cdd4e16e8653d363a9255",
		"ZuckCorp Items",
		"ZuckCorp Items",
		"ERC1155",
		"/images/nfts/0xb7564c24e3123d87134cdd4e16e8653d363a9255.png"
	],
	[
		"0xd0fd4e578bb61c9dcbbc567d046dd0aac4867557",
		"Pakistan and Puerto Rico Charity Collective",
		"PKPR",
		"ERC1155",
		"/images/nfts/0xd0fd4e578bb61c9dcbbc567d046dd0aac4867557.png"
	],
	[
		"0x1fd89cd7be59ba7ef342b6b7e3a4dc0aa055f937",
		"Sketched and Dressed",
		"Sketched and Dressed",
		"ERC1155",
		"/images/nfts/0x1fd89cd7be59ba7ef342b6b7e3a4dc0aa055f937.png"
	],
	[
		"0x253ef258563e146f685e60219da56a6b75178e19",
		"RTFKT x RIMOWA Meta-Artisan Collection ????",
		"RTFKT x RIMOWA Meta-Artisan Collection ????",
		"ERC1155",
		"/images/nfts/0x253ef258563e146f685e60219da56a6b75178e19.png"
	],
	[
		"0x32ac2854fb3a42c127fa47b869d0ac27d339b5f5",
		"Tustont Editions",
		"Tustont Editions",
		"ERC1155",
		"/images/nfts/0x32ac2854fb3a42c127fa47b869d0ac27d339b5f5.png"
	],
	[
		"0xb639cc08fbecaf4c11bf0db09faa80b07bde39d2",
		"Stardust Space Cadets",
		"Stardust Space Cadets",
		"ERC1155",
		"/images/nfts/0xb639cc08fbecaf4c11bf0db09faa80b07bde39d2.png"
	],
	[
		"0xaf088af14d0e8f605b89b2fea6c4965605fd3a33",
		"BoxcatPlanetDrop",
		"BCB",
		"ERC1155",
		"/images/nfts/0xaf088af14d0e8f605b89b2fea6c4965605fd3a33.png"
	],
	[
		"0x19cd3a1dad4a68ed813440df8a47c34248da1fef",
		"WizardX Open Editions",
		"WizardX Open Editions",
		"ERC1155",
		"/images/nfts/0x19cd3a1dad4a68ed813440df8a47c34248da1fef.png"
	],
	[
		"0x83f1d1396b19fed8fbb31ed189579d07362d661d",
		"Hymns (For Adventurers)",
		"LootHymns",
		"ERC1155",
		"/images/nfts/0x83f1d1396b19fed8fbb31ed189579d07362d661d.png"
	],
	[
		"0xdd074b9ab4f64d0d31c0b8a7fa73689dc23c46fb",
		"Pete Wands",
		"Pete Wands",
		"ERC1155",
		"/images/nfts/0xdd074b9ab4f64d0d31c0b8a7fa73689dc23c46fb.png"
	],
	[
		"0x7f75329c37a43ac3d58bb627114bb70e6572df0b",
		"Jungle Bay Sandbox Avatars",
		"JBSA",
		"ERC1155",
		"/images/nfts/0x7f75329c37a43ac3d58bb627114bb70e6572df0b.png"
	],
	[
		"0x0bdb820d80849c0d1ef8a131b3800271f6c42445",
		"wonder editions",
		"wonder editions",
		"ERC1155",
		"/images/nfts/0x0bdb820d80849c0d1ef8a131b3800271f6c42445.png"
	],
	[
		"0xc92fec593c7c26effae49245589933e26ca34676",
		"Prometheus Lab CDU",
		"Prometheus Lab CDU",
		"ERC1155",
		"/images/nfts/0xc92fec593c7c26effae49245589933e26ca34676.png"
	],
	[
		"0x025795d95f80324c9c4a97127e9ef772306f399e",
		"Cana Editions",
		"Cana Editions",
		"ERC1155",
		"/images/nfts/0x025795d95f80324c9c4a97127e9ef772306f399e.png"
	],
	[
		"0x9cd441559a2cce5fb42636c1201416f0e378e801",
		"Robotos Originals",
		"Robotos Originals",
		"ERC1155",
		"/images/nfts/0x9cd441559a2cce5fb42636c1201416f0e378e801.png"
	],
	[
		"0xea302f3b00863b460ded43813f036422c81a2867",
		"STARKADE: Crates",
		"STARKADE: Crates",
		"ERC1155",
		"/images/nfts/0xea302f3b00863b460ded43813f036422c81a2867.png"
	],
	[
		"0x07c047e4d73950fc250287a7bb294e97d997b19a",
		"Editions from Nev.in.color",
		"Editions from Nev.in.color",
		"ERC1155",
		"/images/nfts/0x07c047e4d73950fc250287a7bb294e97d997b19a.png"
	],
	[
		"0xb5af60ded3bca4ed50b02dc739148932b4ff7c00",
		"Valorant Mint Pass",
		"VMP",
		"ERC1155",
		"/images/nfts/0xb5af60ded3bca4ed50b02dc739148932b4ff7c00.png"
	],
	[
		"0xd26e02d927653f15763ec7e41847cae0aa0458f8",
		"basic. capsule",
		"basic. capsule",
		"ERC1155",
		"/images/nfts/0xd26e02d927653f15763ec7e41847cae0aa0458f8.png"
	],
	[
		"0x0fd6939e8c739cca8dc6d0e1eddab0c84ced9fd1",
		"MOMENTS IN PAHREAH",
		"MOMENTS IN PAHREAH",
		"ERC1155",
		"/images/nfts/0x0fd6939e8c739cca8dc6d0e1eddab0c84ced9fd1.png"
	],
	[
		"0xcc0ba2809ee42f6c30e8d7d43dab3e486c88e3f2",
		"Inhabitants: Stories",
		"IS",
		"ERC1155",
		"/images/nfts/0xcc0ba2809ee42f6c30e8d7d43dab3e486c88e3f2.png"
	],
	[
		"0x93b9d54e53506f8f888be02625964a18bf5d3f73",
		"DFT x KARASU",
		"DFT x KARASU",
		"ERC1155",
		"/images/nfts/0x93b9d54e53506f8f888be02625964a18bf5d3f73.png"
	],
	[
		"0x899d23f60d0a4cc771be8765f23e6ae0552e4735",
		"Misshattan Editions",
		"Misshattan Editions",
		"ERC1155",
		"/images/nfts/0x899d23f60d0a4cc771be8765f23e6ae0552e4735.png"
	],
	[
		"0xbd785591d714f691e939de7ec6d72550a44c598c",
		"AlphaDoggg Tags",
		"AlphaDoggg Tags",
		"ERC1155",
		"/images/nfts/0xbd785591d714f691e939de7ec6d72550a44c598c.png"
	],
	[
		"0x1ba62439c2b67e5355c84eb03c35dcbfa65d6e77",
		"Unidentified contract - ULVVJcTNzx",
		"Unidentified contract - ULVVJcTNzx",
		"ERC1155"
	],
	[
		"0x95e2b75093649e33236daf48fc6321ef33905ccf",
		"editions of toxicity",
		"editions of toxicity",
		"ERC1155",
		"/images/nfts/0x95e2b75093649e33236daf48fc6321ef33905ccf.png"
	],
	[
		"0x0f850006b61041c0c1ae864331aff11097bd96b6",
		"Etherjump Builder Items",
		"Etherjump Builder Items",
		"ERC1155",
		"/images/nfts/0x0f850006b61041c0c1ae864331aff11097bd96b6.png"
	],
	[
		"0x2e520a3a9a8589b19a702f5ea9b45f2f2d65d520",
		"Pastelverse - Editions",
		"Pastelverse - Editions",
		"ERC1155",
		"/images/nfts/0x2e520a3a9a8589b19a702f5ea9b45f2f2d65d520.png"
	],
	[
		"0xef0006fae19c6f01d1b63e02f5856f08d1e18ff5",
		"TicTacToe by Smartcontrart",
		"TicTacToe by Smartcontrart",
		"ERC1155",
		"/images/nfts/0xef0006fae19c6f01d1b63e02f5856f08d1e18ff5.png"
	],
	[
		"0xf409194f51c2706005bd5f14e9ea9ce412a53e2f",
		"TAMA Common NFTs",
		"TAMA",
		"ERC1155",
		"/images/nfts/0xf409194f51c2706005bd5f14e9ea9ce412a53e2f.png"
	],
	[
		"0x803d6d728ea31798b6327d8bb4ebddb460f7eb53",
		"D Name (Official)",
		"DSYMBL",
		"ERC1155",
		"/images/nfts/0x803d6d728ea31798b6327d8bb4ebddb460f7eb53.png"
	],
	[
		"0xac6c143b456dfb9ef9113c4ccdf435d9ec2c9274",
		"Metaverse Cat - by Kritzelheldin",
		"Metaverse Cat - by Kritzelheldin",
		"ERC1155",
		"/images/nfts/0xac6c143b456dfb9ef9113c4ccdf435d9ec2c9274.png"
	],
	[
		"0x3fc5a5d510e39f46f55a242bc3bad4868a9bb65f",
		"Posters of Avalon",
		"Posters of Avalon",
		"ERC1155",
		"/images/nfts/0x3fc5a5d510e39f46f55a242bc3bad4868a9bb65f.png"
	],
	[
		"0x54a6e5094cdff565bd48a61890483d3aa5b6cfb3",
		"Astroverse Assets",
		"AVA",
		"ERC1155",
		"/images/nfts/0x54a6e5094cdff565bd48a61890483d3aa5b6cfb3.png"
	],
	[
		"0x0c43e8e09a145b2a0d9db9500bfb9d0f40d13680",
		"WAGDIE Artist Guild Collection",
		"WAGDIE Artist Guild Collection",
		"ERC1155",
		"/images/nfts/0x0c43e8e09a145b2a0d9db9500bfb9d0f40d13680.png"
	],
	[
		"0x11893f77bbd860ea46f45141731c00ddcfdc4ed0",
		"EROTIKA Editions * by Reiniscouple",
		"EROTIKA Editions * by Reiniscouple",
		"ERC1155",
		"/images/nfts/0x11893f77bbd860ea46f45141731c00ddcfdc4ed0.png"
	],
	[
		"0x62911fe3175c9916e093c78a567ddec04a277309",
		"GRAYCRAFT Collaborations",
		"GRAYCRAFT Collaborations",
		"ERC1155",
		"/images/nfts/0x62911fe3175c9916e093c78a567ddec04a277309.png"
	],
	[
		"0x49a25424f5b53459a9648effde048cd65098df03",
		"open mints - oliveraukschun.eth",
		"open mints - oliveraukschun.eth",
		"ERC1155",
		"/images/nfts/0x49a25424f5b53459a9648effde048cd65098df03.png"
	],
	[
		"0xd3252b9aaec0041681ce226df5b41b345f385196",
		"Token Drops",
		"Token Drops",
		"ERC1155",
		"/images/nfts/0xd3252b9aaec0041681ce226df5b41b345f385196.png"
	],
	[
		"0xdf0285b8f8617b6ec971c0e1c64b1203f8574e0b",
		"9dcc ITERATION-01 vaulted",
		"IT-01 vaulted",
		"ERC1155",
		"/images/nfts/0xdf0285b8f8617b6ec971c0e1c64b1203f8574e0b.png"
	],
	[
		"0x5d316093b454c94d5f354a9c5586107de376d6e2",
		"Burn the Witch by Mysterium",
		"Burn the Witch by Mysterium",
		"ERC1155",
		"/images/nfts/0x5d316093b454c94d5f354a9c5586107de376d6e2.png"
	],
	[
		"0xac91673b78cbdf1b0ad3bd56dd547b321bec180b",
		"Austin Gray Music",
		"Austin Gray Music",
		"ERC1155",
		"/images/nfts/0xac91673b78cbdf1b0ad3bd56dd547b321bec180b.png"
	],
	[
		"0x651dfd5edfa38ecaf33fb9a369aea636dbd6be00",
		"Sad A Plenty",
		"Sad A Plenty",
		"ERC1155",
		"/images/nfts/0x651dfd5edfa38ecaf33fb9a369aea636dbd6be00.png"
	],
	[
		"0x635ebe00dbf1abe84e82bfec1fe0349f6572db3c",
		"THR33LL",
		"THR33LL",
		"ERC1155",
		"/images/nfts/0x635ebe00dbf1abe84e82bfec1fe0349f6572db3c.png"
	],
	[
		"0x153d59e1857aec9efe029f684d805f701fb078dc",
		"ZanozaRare",
		"ZanozaRare",
		"ERC1155",
		"/images/nfts/0x153d59e1857aec9efe029f684d805f701fb078dc.png"
	],
	[
		"0x6e0531186db081d7500a60537ed021bc30b11723",
		"Micah Johnson, Aku for New York Cares",
		"Micah Johnson, Aku for New York Cares",
		"ERC1155",
		"/images/nfts/0x6e0531186db081d7500a60537ed021bc30b11723.png"
	],
	[
		"0x218d17ff944338275b7c4f08b121ed55cba907c5",
		"Pablo Stanley, Humankind for New York Cares",
		"Pablo Stanley, Humankind for New York Cares",
		"ERC1155",
		"/images/nfts/0x218d17ff944338275b7c4f08b121ed55cba907c5.png"
	],
	[
		"0x31f2bebb280ec5618a8d6a346ade42f7a0e9edef",
		"Airbrush art by Mashine",
		"Airbrush art by Mashine",
		"ERC1155",
		"/images/nfts/0x31f2bebb280ec5618a8d6a346ade42f7a0e9edef.png"
	],
	[
		"0xdd3f1c45f308f66b2539e09a48a4e125356c39db",
		"MakeLove420 onChain PFP",
		"MLPFP",
		"ERC1155",
		"/images/nfts/0xdd3f1c45f308f66b2539e09a48a4e125356c39db.png"
	],
	[
		"0xf2b2ef1ba74bd40fec39b31b9ead23e849ad69da",
		"Spaces JKTLM",
		"Spaces JKTLM",
		"ERC1155",
		"/images/nfts/0xf2b2ef1ba74bd40fec39b31b9ead23e849ad69da.png"
	],
	[
		"0x88adec6d1ada7d2ff4911aa914b4dd8e0c444ef6",
		"FashionAPE V2",
		"FashionAPENFT",
		"ERC1155"
	],
	[
		"0xd51cb6c527565f9012d395812bbd046a5fff3654",
		"MEGAMIX",
		"MEGAMIX",
		"ERC1155",
		"/images/nfts/0xd51cb6c527565f9012d395812bbd046a5fff3654.png"
	],
	[
		"0x4c7a1fe9e31df5c0c6e3952c37aa771a3fcd9ca3",
		"AFTRMRKT",
		"Aftrmrkt",
		"ERC1155",
		"/images/nfts/0x4c7a1fe9e31df5c0c6e3952c37aa771a3fcd9ca3.png"
	],
	[
		"0xb9aee3a30119fec4794e24b937edc9c6b6bfff6a",
		"Daxio World",
		"Daxio World",
		"ERC1155",
		"/images/nfts/0xb9aee3a30119fec4794e24b937edc9c6b6bfff6a.png"
	],
	[
		"0x578280b2db2a9bd30a2481084a891f7ad1b5de3a",
		"10KTF Comfy Token",
		"10KTF Comfy Token",
		"ERC1155",
		"/images/nfts/0x578280b2db2a9bd30a2481084a891f7ad1b5de3a.png"
	],
	[
		"0x4b96674e90e247b9f12dd949ee9374c36dc07bfc",
		"Tollan Comic: Stories from the Enchanted City",
		"Tollan Comic: Stories from the Enchanted City",
		"ERC1155",
		"/images/nfts/0x4b96674e90e247b9f12dd949ee9374c36dc07bfc.png"
	],
	[
		"0x0c709b96d86227ee41f1120841aa9d2a5c12e55f",
		"WXB Academy",
		"WXBA",
		"ERC1155",
		"/images/nfts/0x0c709b96d86227ee41f1120841aa9d2a5c12e55f.png"
	],
	[
		"0x6a5e76837a826abfdb3678ff7e8082533063285d",
		"UMIFILM",
		"UMIFILM",
		"ERC1155",
		"/images/nfts/0x6a5e76837a826abfdb3678ff7e8082533063285d.png"
	],
	[
		"0xface84a186f597c31a6e119b4114c42f28c21c95",
		"aksessorees",
		"AKSZ",
		"ERC1155",
		"/images/nfts/0xface84a186f597c31a6e119b4114c42f28c21c95.png"
	],
	[
		"0x85982797f1694a8117ef77cf90b479517ee7fba1",
		"Key-stone",
		"KSN",
		"ERC1155",
		"/images/nfts/0x85982797f1694a8117ef77cf90b479517ee7fba1.png"
	],
	[
		"0xecb97c63ffc6ea6b56b584ef9d2295dab45fe3b2",
		"Witches. Between good and evil",
		"Witches. Between good and evil",
		"ERC1155",
		"/images/nfts/0xecb97c63ffc6ea6b56b584ef9d2295dab45fe3b2.png"
	],
	[
		"0xa729f4e1969f20defb4760988013e2902ad9b359",
		"(Legacy) Fashion League's First Fall",
		"FLFF",
		"ERC1155",
		"/images/nfts/0xa729f4e1969f20defb4760988013e2902ad9b359.png"
	],
	[
		"0xd3da7776569b24260a073e9dea575bc7208fb50b",
		"Muhju Editions",
		"Muhju Editions",
		"ERC1155",
		"/images/nfts/0xd3da7776569b24260a073e9dea575bc7208fb50b.png"
	],
	[
		"0x7ff14aa8c87bae49859b1ba77af57cdddcc531cc",
		"Unidentified contract - oezWqYqOeB",
		"Unidentified contract - oezWqYqOeB",
		"ERC1155"
	],
	[
		"0xa05b918ad4955a68de03d74ac50c9ecdabd3b07e",
		"Hitchhiker of Star: Space Exploration",
		"Hitchhiker of Star: Space Exploration",
		"ERC1155",
		"/images/nfts/0xa05b918ad4955a68de03d74ac50c9ecdabd3b07e.png"
	],
	[
		"0xd0e9729d86e889bcdcd8c35dde3e2032da884b5a",
		"WHITE IS THE SUM OF ALL COLORS",
		"WHITE IS THE SUM OF ALL COLORS",
		"ERC1155",
		"/images/nfts/0xd0e9729d86e889bcdcd8c35dde3e2032da884b5a.png"
	],
	[
		"0xa2cd18be17bed47b4f5275a4f08f249b7d44edd5",
		"Hafftka Fake Rare",
		"Hafftka Fake Rare",
		"ERC1155",
		"/images/nfts/0xa2cd18be17bed47b4f5275a4f08f249b7d44edd5.png"
	],
	[
		"0x455dca4a91a7f4b3022bb5c5a584e17539b3eb04",
		"Alexandre - Edition",
		"Alexandre - Edition",
		"ERC1155",
		"/images/nfts/0x455dca4a91a7f4b3022bb5c5a584e17539b3eb04.png"
	],
	[
		"0xba6666b118f8303f990f3519df07e160227cce87",
		"Planet IX - Genesis Corporations",
		"PIX-GC",
		"ERC1155",
		"/images/nfts/0xba6666b118f8303f990f3519df07e160227cce87.png"
	],
	[
		"0xc91bcc2889ef0469385cc8b1b547986b7a45c5b3",
		"Metaversity Genesis",
		"Metaversity Genesis",
		"ERC1155",
		"/images/nfts/0xc91bcc2889ef0469385cc8b1b547986b7a45c5b3.png"
	],
	[
		"0xfa5aa65c1ea8ca3158d8c8806d947f1364795f4c",
		"Space Bugs",
		"Space Bugs",
		"ERC1155",
		"/images/nfts/0xfa5aa65c1ea8ca3158d8c8806d947f1364795f4c.png"
	],
	[
		"0x843fef56f4852fbb5ae3e5c9635e14e28aff4a4d",
		"Botanical Dream",
		"Botanical Dream",
		"ERC1155",
		"/images/nfts/0x843fef56f4852fbb5ae3e5c9635e14e28aff4a4d.png"
	],
	[
		"0x07fe2282632039f1012551ff4ff032874956f402",
		"Look Away: The Eyes of the Monarch",
		"Look Away: The Eyes of the Monarch",
		"ERC1155",
		"/images/nfts/0x07fe2282632039f1012551ff4ff032874956f402.png"
	],
	[
		"0xf4d4c212e4d461cf23d5f16782c2fb3e9baa1dc3",
		"//CWS. x Ivona Tau",
		"//CWS. x Ivona Tau",
		"ERC1155",
		"/images/nfts/0xf4d4c212e4d461cf23d5f16782c2fb3e9baa1dc3.png"
	],
	[
		"0x67883dd3f313177c7e44ee1e78a69e5c8cb8da8e",
		"Specks of Dust Club",
		"Specks of Dust Club",
		"ERC1155",
		"/images/nfts/0x67883dd3f313177c7e44ee1e78a69e5c8cb8da8e.png"
	],
	[
		"0xe1a510818634b5cc686cabf4ea32cfd9e1c9095e",
		"Super Scaredrops",
		"Super Scaredrops",
		"ERC1155",
		"/images/nfts/0xe1a510818634b5cc686cabf4ea32cfd9e1c9095e.png"
	],
	[
		"0x3e240c3a05c73b8449cc6eee3ad93129730b1425",
		"Fear City  BDGZ22",
		"BDGZ",
		"ERC1155",
		"/images/nfts/0x3e240c3a05c73b8449cc6eee3ad93129730b1425.png"
	],
	[
		"0x32aa07e6ebf2340eef1f717197ade6982b815536",
		"Hord.app Champions' Pools NFT Tickets",
		"Hord.app Champions' Pools NFT Tickets",
		"ERC1155",
		"/images/nfts/0x32aa07e6ebf2340eef1f717197ade6982b815536.png"
	],
	[
		"0xcb572f4b1a72bb58544e3753e90f15f3e4ad83ac",
		"CondoMini Condos",
		"CondoMini Condos",
		"ERC1155",
		"/images/nfts/0xcb572f4b1a72bb58544e3753e90f15f3e4ad83ac.png"
	],
	[
		"0x0da68d2c426f775b4b5109d0323d316677ce6edf",
		"Unidentified contract - JPscBjsRi3",
		"Unidentified contract - JPscBjsRi3",
		"ERC1155"
	],
	[
		"0xe9d26ddccf4007c322bd05445971c8023d5e6897",
		"J-WAVE MAP vol.2",
		"MAP",
		"ERC1155",
		"/images/nfts/0xe9d26ddccf4007c322bd05445971c8023d5e6897.png"
	],
	[
		"0xfb217253aa7f3753291d3a476928eb627dc39690",
		"Testing Tiger",
		"TT",
		"ERC1155"
	],
	[
		"0xc7cdd1d44b72f3ede82cdf194ae7a6b1ab5a11ab",
		"DIRGE OF WAGDIE",
		"DIRGE OF WAGDIE",
		"ERC1155",
		"/images/nfts/0xc7cdd1d44b72f3ede82cdf194ae7a6b1ab5a11ab.png"
	],
	[
		"0x68f85d2da8ecf612904ed65027de07cc20caed00",
		"Jake Memes Utility & Editions",
		"Jake Memes Utility & Editions",
		"ERC1155",
		"/images/nfts/0x68f85d2da8ecf612904ed65027de07cc20caed00.png"
	],
	[
		"0x9cf0134050ce4b376529e69b32aff4a26463e42a",
		"Artificially Intelligent Artworks",
		"AIWORKS",
		"ERC1155",
		"/images/nfts/0x9cf0134050ce4b376529e69b32aff4a26463e42a.png"
	],
	[
		"0x8bb01a3453f40aea848ec8ccc376d4cc7444530d",
		"static by JakNFT",
		"static by JakNFT",
		"ERC1155",
		"/images/nfts/0x8bb01a3453f40aea848ec8ccc376d4cc7444530d.png"
	],
	[
		"0x87de0c9f1b22b9e1d2c072436e11af882176e23c",
		"Wet Paint by jamesMendenhall",
		"Wet Paint by jamesMendenhall",
		"ERC1155",
		"/images/nfts/0x87de0c9f1b22b9e1d2c072436e11af882176e23c.png"
	],
	[
		"0xef7c89f051ac48885b240eb53934b04fcf3339ab",
		"Latent Works (77x7)",
		"Latent Works (77x7)",
		"ERC1155",
		"/images/nfts/0xef7c89f051ac48885b240eb53934b04fcf3339ab.png"
	],
	[
		"0xb7f1ac306f2dbb26152fe512a74b6872a1be262b",
		"Editions x Lasith Fernando",
		"Editions x Lasith Fernando",
		"ERC1155",
		"/images/nfts/0xb7f1ac306f2dbb26152fe512a74b6872a1be262b.png"
	],
	[
		"0x733fd9c59bf250ae845c9dd5b06a53b0e79d42c6",
		"DRAWN TOGETHER",
		"DRAWN TOGETHER",
		"ERC1155",
		"/images/nfts/0x733fd9c59bf250ae845c9dd5b06a53b0e79d42c6.png"
	],
	[
		"0x995e2ed939f074bc1dd65c53072490cea1b0fc26",
		"N O I S E",
		"N O I S E",
		"ERC1155",
		"/images/nfts/0x995e2ed939f074bc1dd65c53072490cea1b0fc26.png"
	],
	[
		"0xc7c04f066f4eb89a40f9d259d0e1d2cd2536131a",
		"Crea - Airdrop Vault",
		"Crea - Airdrop Vault",
		"ERC1155",
		"/images/nfts/0xc7c04f066f4eb89a40f9d259d0e1d2cd2536131a.png"
	],
	[
		"0x1496640fc4bdfd7ee6361894f5eefe1f5f297c6d",
		"Doodle Cats by Kristy Glas",
		"DCAT",
		"ERC1155",
		"/images/nfts/0x1496640fc4bdfd7ee6361894f5eefe1f5f297c6d.png"
	],
	[
		"0xb27c9aa6d9281a4b71b1a8d0b8de026510dc878c",
		"All that Remains",
		"All that Remains",
		"ERC1155",
		"/images/nfts/0xb27c9aa6d9281a4b71b1a8d0b8de026510dc878c.png"
	],
	[
		"0xd10ea37486f18f5a31353a59ec2acf46ec478787",
		"WAFU - Editions",
		"WAFU - Editions",
		"ERC1155",
		"/images/nfts/0xd10ea37486f18f5a31353a59ec2acf46ec478787.png"
	],
	[
		"0x14729ad351d30dc29505324247942ad10a4edab9",
		"Phto. Curated Collection",
		"PHTO",
		"ERC1155",
		"/images/nfts/0x14729ad351d30dc29505324247942ad10a4edab9.png"
	],
	[
		"0x456e3fc3d323bc45e64001521d12bca6b1acca3a",
		"yosnier editions",
		"yosnier editions",
		"ERC1155",
		"/images/nfts/0x456e3fc3d323bc45e64001521d12bca6b1acca3a.png"
	],
	[
		"0x19a945e8e3a69a7fe508a27aae55bec486e4eead",
		"Meta Fortnite",
		"Meta Fortnite",
		"ERC1155",
		"/images/nfts/0x19a945e8e3a69a7fe508a27aae55bec486e4eead.png"
	],
	[
		"0x0d34fca360e6e1a6b34b8837d6edf35c36bb1472",
		"Brian Morris INSIDERS",
		"Brian Morris INSIDERS",
		"ERC1155",
		"/images/nfts/0x0d34fca360e6e1a6b34b8837d6edf35c36bb1472.png"
	],
	[
		"0xe1a620f0207eab607696b261cea69f2648137d05",
		"em-X-DROPS",
		"em-X-DROPS",
		"ERC1155",
		"/images/nfts/0xe1a620f0207eab607696b261cea69f2648137d05.png"
	],
	[
		"0x56355de69f62d448fa4cc974c2dc56bbee02a4db",
		"MetaBeasts AD Pass",
		"MetaBeasts AD Pass",
		"ERC1155",
		"/images/nfts/0x56355de69f62d448fa4cc974c2dc56bbee02a4db.png"
	],
	[
		"0x03a95880b0b4998f4f49373ccf1224ac19a5464f",
		"Capsule - Zodiac Cards",
		"Capsule - Zodiac Cards",
		"ERC1155",
		"/images/nfts/0x03a95880b0b4998f4f49373ccf1224ac19a5464f.png"
	],
	[
		"0x36d9987dfb6008532bde0f7b297ab201b131dd27",
		"Phto. Innovation of Influence",
		"Phto. Innovation of Influence",
		"ERC1155",
		"/images/nfts/0x36d9987dfb6008532bde0f7b297ab201b131dd27.png"
	],
	[
		"0x5cf58d5d59392d9daf5e5d3821ba71b79a92a2b6",
		"seize the am memes of production",
		"seize the am memes of production",
		"ERC1155",
		"/images/nfts/0x5cf58d5d59392d9daf5e5d3821ba71b79a92a2b6.png"
	],
	[
		"0x244cd893da409ef84addce7cfe49a3b9ddbc70c2",
		"Editions by Anastasia Mihaylova",
		"Editions by Anastasia Mihaylova",
		"ERC1155",
		"/images/nfts/0x244cd893da409ef84addce7cfe49a3b9ddbc70c2.png"
	],
	[
		"0x564b644eafca9ae7df35558546ee2d850df2f334",
		"DECONSTRUCT3D x Bauhaus",
		"RAW",
		"ERC1155",
		"/images/nfts/0x564b644eafca9ae7df35558546ee2d850df2f334.png"
	],
	[
		"0x03a980c83bb58838298ea7689d9d4d22aad51599",
		"Genesis Merchant Company Employee Badge",
		"Genesis Merchant Company Employee Badge",
		"ERC1155"
	],
	[
		"0xb99839ee2a7e06415ca5b21f62b03a7f47cff070",
		"DARK SIDE ROMANCE",
		"DARK SIDE ROMANCE",
		"ERC1155",
		"/images/nfts/0xb99839ee2a7e06415ca5b21f62b03a7f47cff070.png"
	],
	[
		"0xfb08c472a7f6c81d3d63e0c95e054fa10de28737",
		"TIMEPieces: Artist Spotlights",
		"TIMEPieces: Artist Spotlights",
		"ERC1155",
		"/images/nfts/0xfb08c472a7f6c81d3d63e0c95e054fa10de28737.png"
	],
	[
		"0x9214be42831547b1c46a08c5c63c22051aa393d2",
		"DOODLEDITIONS",
		"DOODLEDITIONS",
		"ERC1155",
		"/images/nfts/0x9214be42831547b1c46a08c5c63c22051aa393d2.png"
	],
	[
		"0xc76748bfbe13c6905ebdf789f78d5a013e0c9db5",
		"RGB StendHell Syndrome",
		"RGB StendHell Syndrome",
		"ERC1155",
		"/images/nfts/0xc76748bfbe13c6905ebdf789f78d5a013e0c9db5.png"
	],
	[
		"0xcc09c6377b4c4e84c557e0e22ed5275013f9f76e",
		"Justin Wood Limited Editions",
		"Justin Wood Limited Editions",
		"ERC1155",
		"/images/nfts/0xcc09c6377b4c4e84c557e0e22ed5275013f9f76e.png"
	],
	[
		"0x0e9e3eff16d2d19f5d7a04717d70b81f2c7465a5",
		"KILLATRAITS",
		"KILLATRAITS",
		"ERC1155",
		"/images/nfts/0x0e9e3eff16d2d19f5d7a04717d70b81f2c7465a5.png"
	],
	[
		"0x44167c93201f5994a4d4534b1342e5a2220ad12c",
		"Erin McGean Editions",
		"Erin McGean Editions",
		"ERC1155",
		"/images/nfts/0x44167c93201f5994a4d4534b1342e5a2220ad12c.png"
	],
	[
		"0x1be37692ff22653c213e09ad74987a0ba4c34d8d",
		"STONEY FACTORY MintPass",
		"STONEY FACTORY MintPass",
		"ERC1155",
		"/images/nfts/0x1be37692ff22653c213e09ad74987a0ba4c34d8d.png"
	],
	[
		"0x27ce78533743fc0395dadefe7b268b18331dfd90",
		"Glitch Abysm by troutxyz",
		"Glitch Abysm by troutxyz",
		"ERC1155",
		"/images/nfts/0x27ce78533743fc0395dadefe7b268b18331dfd90.png"
	],
	[
		"0x3abc0cb45e574d9f26dc6cc5ca9f2280b379a03e",
		"LVCIDIA Gifts",
		"LVCIDIA Gifts",
		"ERC1155",
		"/images/nfts/0x3abc0cb45e574d9f26dc6cc5ca9f2280b379a03e.png"
	],
	[
		"0x401bbeb25d0046303151a84ad904e2d396e7bcae",
		"Red-Pink Editions by Kaplinskiy",
		"Red-Pink Editions by Kaplinskiy",
		"ERC1155",
		"/images/nfts/0x401bbeb25d0046303151a84ad904e2d396e7bcae.png"
	],
	[
		"0xccd174525209e0af2ea51bca91070d9f93d1bf4b",
		"Mayweverse By Floyd",
		"MWV",
		"ERC1155",
		"/images/nfts/0xccd174525209e0af2ea51bca91070d9f93d1bf4b.png"
	],
	[
		"0x81b82ad2f4abe3abe761abcd1e5ad3bcdb8c875e",
		"Collab Zine",
		"Collab Zine",
		"ERC1155",
		"/images/nfts/0x81b82ad2f4abe3abe761abcd1e5ad3bcdb8c875e.png"
	],
	[
		"0x47da053384abd2ee2bf4883927e7e1dcc3f5f95b",
		"Genesis Merchant Company Supply Drops",
		"GMCSD",
		"ERC1155",
		"/images/nfts/0x47da053384abd2ee2bf4883927e7e1dcc3f5f95b.png"
	],
	[
		"0x23eebe077b8a951167b15cc89d990ff4910e657d",
		"Neonbrain Genesis Pass - official",
		"Neonbrain Genesis Pass - official",
		"ERC1155",
		"/images/nfts/0x23eebe077b8a951167b15cc89d990ff4910e657d.png"
	],
	[
		"0xa87be4ad36d897a58ed47e5588852abf83ff1b82",
		"Ethernity's Master Collection",
		"Ethernity's Master Collection",
		"ERC1155",
		"/images/nfts/0xa87be4ad36d897a58ed47e5588852abf83ff1b82.png"
	],
	[
		"0x79b8d8bd5dc219887416064b5ad411b71e034e21",
		"ERC1 Ethereum Rookie Cards",
		"ERC1 Ethereum Rookie Cards",
		"ERC1155",
		"/images/nfts/0x79b8d8bd5dc219887416064b5ad411b71e034e21.png"
	],
	[
		"0x142dea335c45e326f0534c674eee905ba012ee31",
		"Bad Habits Membership Club by Computer Cowgirls",
		"Bad Habits Membership Club by Computer Cowgirls",
		"ERC1155",
		"/images/nfts/0x142dea335c45e326f0534c674eee905ba012ee31.png"
	],
	[
		"0xcb1ca07dfec7db05d094ef41da550ec78984010b",
		"Warrior Alliance Supply Boxes",
		"Warrior Alliance Supply Boxes",
		"ERC1155",
		"/images/nfts/0xcb1ca07dfec7db05d094ef41da550ec78984010b.png"
	],
	[
		"0xf78016ba182e0a9b347bacea43fb2efa55079eb5",
		"Swampverse: Items",
		"Swampverse: Items",
		"ERC1155",
		"/images/nfts/0xf78016ba182e0a9b347bacea43fb2efa55079eb5.png"
	],
	[
		"0x5fb784ed9d2e5b2eca16cb8f467e03a8b7ea22cd",
		"Den - Lair Ownership",
		"LOT",
		"ERC1155",
		"/images/nfts/0x5fb784ed9d2e5b2eca16cb8f467e03a8b7ea22cd.png"
	],
	[
		"0x40711e7d328b5b97737c869a23e43b3c147ce638",
		"Worst Case by 3LAU - royal",
		"Worst Case by 3LAU - royal",
		"ERC1155",
		"/images/nfts/0x40711e7d328b5b97737c869a23e43b3c147ce638.png"
	],
	[
		"0x3cd44f2e544a5a57900b59f7beb871adb3956fb3",
		"inter(Editions)",
		"inter(Editions)",
		"ERC1155",
		"/images/nfts/0x3cd44f2e544a5a57900b59f7beb871adb3956fb3.png"
	],
	[
		"0xfc2b4297a8fdd095971ad5595dc93d71f003fb32",
		"JUICE FAM Collab Collection",
		"JUICE FAM Collab Collection",
		"ERC1155",
		"/images/nfts/0xfc2b4297a8fdd095971ad5595dc93d71f003fb32.png"
	],
	[
		"0x9de76a20f8217006529fc7c195c02e4f0fa6b753",
		"Art! by Guv Wednesday Badges",
		"Art! by Guv Wednesday Badges",
		"ERC1155",
		"/images/nfts/0x9de76a20f8217006529fc7c195c02e4f0fa6b753.png"
	],
	[
		"0xa7287fcaf50d259f34fce8700a80dc738c4af992",
		"Unidentified contract - DfdhIdn4Pw",
		"Unidentified contract - DfdhIdn4Pw",
		"ERC1155"
	],
	[
		"0xa74a6005f87b0ec07872d802459330f40ff6ae86",
		"Melvin's Snacks",
		"Melvin's Snacks",
		"ERC1155",
		"/images/nfts/0xa74a6005f87b0ec07872d802459330f40ff6ae86.png"
	],
	[
		"0xd178f925599b36fd989c35579d63a0493862aa09",
		"NFTV Airtime",
		"NFTV",
		"ERC1155",
		"/images/nfts/0xd178f925599b36fd989c35579d63a0493862aa09.png"
	],
	[
		"0x4e2d9546ccfec5b126706e02afd329ef53b3ae01",
		"UNIC META511MC Course Materials - Fall 2022",
		"UNIC META511MC Course Materials - Fall 2022",
		"ERC1155",
		"/images/nfts/0x4e2d9546ccfec5b126706e02afd329ef53b3ae01.png"
	],
	[
		"0x3f0b3ca805f0d2952a7c7022e4f45c6210175585",
		"YCOPY OPEN EDITION",
		"YOE",
		"ERC1155",
		"/images/nfts/0x3f0b3ca805f0d2952a7c7022e4f45c6210175585.png"
	],
	[
		"0xe225b9aeae21ecd998064d1bef29104a702e887b",
		"Ethernity's Master Collection",
		"Ethernity's Master Collection",
		"ERC1155",
		"/images/nfts/0xe225b9aeae21ecd998064d1bef29104a702e887b.png"
	],
	[
		"0x1c4a358bc9d14fe851ffc598a0e9d832ac158ce4",
		"Inside Voices by Lisa Chow",
		"Inside Voices by Lisa Chow",
		"ERC1155",
		"/images/nfts/0x1c4a358bc9d14fe851ffc598a0e9d832ac158ce4.png"
	],
	[
		"0xdd54c870b796712384a5cacd1d1fddca816d998c",
		"Bank of Pepe",
		"Bank of Pepe",
		"ERC1155",
		"/images/nfts/0xdd54c870b796712384a5cacd1d1fddca816d998c.png"
	],
	[
		"0x6f590281f23693620fd23b863793e7751fbfc700",
		"Natalie Shau editions",
		"Natalie Shau editions",
		"ERC1155",
		"/images/nfts/0x6f590281f23693620fd23b863793e7751fbfc700.png"
	],
	[
		"0xd11dd1a772b1a7b36c6b261dee7b9f5f323e6751",
		"REMIX! Rewards",
		"REMIX! Rewards",
		"ERC1155",
		"/images/nfts/0xd11dd1a772b1a7b36c6b261dee7b9f5f323e6751.png"
	],
	[
		"0x58dc29728e89bc09e6bb2a8a5c030bca351c6af7",
		"Helix Art Limited Editions",
		"Helix Art Limited Editions",
		"ERC1155",
		"/images/nfts/0x58dc29728e89bc09e6bb2a8a5c030bca351c6af7.png"
	],
	[
		"0x77f1a671c4d7b321713d2d97ada068d796546340",
		"Unidentified contract - 7PWcV1VYGX",
		"Unidentified contract - 7PWcV1VYGX",
		"ERC1155"
	],
	[
		"0x6772a8b67001c3d0367941b2b4e3bf3a78ae5637",
		"TigerJok",
		"TigerJok",
		"ERC1155"
	],
	[
		"0xe79c44b2dbfedbac1db992aad3827a3621b0813f",
		"Hive Alpha",
		"Hive Alpha",
		"ERC1155",
		"/images/nfts/0xe79c44b2dbfedbac1db992aad3827a3621b0813f.png"
	],
	[
		"0x5a219adc82f51ade9e10b2a335d6794d4a7b82f1",
		"Base Metaships",
		"METASHIP",
		"ERC1155",
		"/images/nfts/0x5a219adc82f51ade9e10b2a335d6794d4a7b82f1.png"
	],
	[
		"0x2988194bbf7e8909b90f1242855989005f8ce748",
		"LAMINAT || BY BAVUGAR",
		"LAMINAT || BY BAVUGAR",
		"ERC1155",
		"/images/nfts/0x2988194bbf7e8909b90f1242855989005f8ce748.png"
	],
	[
		"0x34878e0960f02190f1eea39b1b99530db87b05d9",
		"Reuben Wu - Limited Editions",
		"Reuben Wu - Limited Editions",
		"ERC1155",
		"/images/nfts/0x34878e0960f02190f1eea39b1b99530db87b05d9.png"
	],
	[
		"0x56f13a5385b33f7db926ceb9d17799672355e040",
		"Dreamworks Trolls VOX Box - Series 4",
		"VOX4",
		"ERC1155"
	],
	[
		"0xf75f02ed28767902d77938c9faf564efd78f7c32",
		"BonsaiBoyzToyFactory",
		"BonsaiBoyzToyFactory",
		"ERC1155",
		"/images/nfts/0xf75f02ed28767902d77938c9faf564efd78f7c32.png"
	],
	[
		"0x84d236c81a3cf7da83e94f28435dbb0d12840438",
		"Fluctuation Overload (PVNKS.com)",
		"FLUXCOMIC",
		"ERC1155",
		"/images/nfts/0x84d236c81a3cf7da83e94f28435dbb0d12840438.png"
	],
	[
		"0xd13810cb734988e3887f4951f997c62e13704c6c",
		"ghostly photo editions",
		"ghostly photo editions",
		"ERC1155",
		"/images/nfts/0xd13810cb734988e3887f4951f997c62e13704c6c.png"
	],
	[
		"0xc9f1bcf7e5ec76bdb5f2ba54405e89869d555683",
		"Editions by Jack Simpson",
		"Editions by Jack Simpson",
		"ERC1155",
		"/images/nfts/0xc9f1bcf7e5ec76bdb5f2ba54405e89869d555683.png"
	],
	[
		"0xa1bec93704d5e470f70bb4b805feaf6fcbaf2385",
		"Salvador Editions",
		"Salvador Editions",
		"ERC1155",
		"/images/nfts/0xa1bec93704d5e470f70bb4b805feaf6fcbaf2385.png"
	],
	[
		"0x54593d89cd4e6dccde3281b698790ab2b06715af",
		"Une Robe Bleue, Ses Levres et des Mots d'Amour",
		"Une Robe Bleue, Ses Levres et des Mots d'Amour",
		"ERC1155",
		"/images/nfts/0x54593d89cd4e6dccde3281b698790ab2b06715af.png"
	],
	[
		"0x3dcc9ae8b73b3ff6e3ef6f130ab32d9dba596734",
		"viewsoftmountainlight",
		"viewsoftmountainlight",
		"ERC1155",
		"/images/nfts/0x3dcc9ae8b73b3ff6e3ef6f130ab32d9dba596734.png"
	],
	[
		"0x8bc9d8f39d8e9a8e5ec6002c2010ab4890274d85",
		"Nicolas Sassoon Open Editions",
		"RAW",
		"ERC1155",
		"/images/nfts/0x8bc9d8f39d8e9a8e5ec6002c2010ab4890274d85.png"
	],
	[
		"0x693829fd164cb6ee5115f2863877dee2a024b9fb",
		"Good Deeds With NFT's",
		"Good Deeds With NFT's",
		"ERC1155",
		"/images/nfts/0x693829fd164cb6ee5115f2863877dee2a024b9fb.png"
	],
	[
		"0xbd3feab9a1c85b7024578f03c92b0f1ad05747f7",
		"McCroaks Spicy Collab Club",
		"MSC",
		"ERC1155",
		"/images/nfts/0xbd3feab9a1c85b7024578f03c92b0f1ad05747f7.png"
	],
	[
		"0x9122b9360489c480bdeed794c2822a881d5b9e21",
		"\"Destiny\"",
		"\"Destiny\"",
		"ERC1155",
		"/images/nfts/0x9122b9360489c480bdeed794c2822a881d5b9e21.png"
	],
	[
		"0x9d3031d181ec6a2a784ba152f993332442fe8bfc",
		"Fly Frogs Tadpoles",
		"FLYTADS",
		"ERC1155",
		"/images/nfts/0x9d3031d181ec6a2a784ba152f993332442fe8bfc.png"
	],
	[
		"0x03b44fe743eec9a15715900b809020b1cadc9885",
		"Space and Time Community NFT v1",
		"SxTC",
		"ERC1155",
		"/images/nfts/0x03b44fe743eec9a15715900b809020b1cadc9885.png"
	],
	[
		"0xa57dd75b543d014528fd532b152083f29630c615",
		"rwx quest",
		"RWXq",
		"ERC1155",
		"/images/nfts/0xa57dd75b543d014528fd532b152083f29630c615.png"
	],
	[
		"0x2fb32ffc5aad1684c45a4a8dc52c59a88a779bac",
		"Ash Walkers by Mwan",
		"Ash Walkers by Mwan",
		"ERC1155",
		"/images/nfts/0x2fb32ffc5aad1684c45a4a8dc52c59a88a779bac.png"
	],
	[
		"0xfddf2e8b361ba7efa2e31440f1fc747f32f6bcc8",
		"earthsample editions",
		"earthsample editions",
		"ERC1155",
		"/images/nfts/0xfddf2e8b361ba7efa2e31440f1fc747f32f6bcc8.png"
	],
	[
		"0x661da2efda613195d9803863ff1a4b2425d72c81",
		"SAM PIERSON EDITIONS AND BEYOND",
		"SAM PIERSON EDITIONS AND BEYOND",
		"ERC1155",
		"/images/nfts/0x661da2efda613195d9803863ff1a4b2425d72c81.png"
	],
	[
		"0xef6da0ae231d95cb6097312e13f5fed0ad13bc4c",
		"Okina Labs",
		"OKINA",
		"ERC1155",
		"/images/nfts/0xef6da0ae231d95cb6097312e13f5fed0ad13bc4c.png"
	],
	[
		"0xf70074f1cb0aa67917bbecf5476a6778e2056671",
		"Unidentified contract - t128Qa6QiM",
		"Unidentified contract - t128Qa6QiM",
		"ERC1155"
	],
	[
		"0x3875afdf59ec5463f6a03040685a4c8eb151f4d3",
		"HOUSE OF GREMPLINZ",
		"HOUSE OF GREMPLINZ",
		"ERC1155",
		"/images/nfts/0x3875afdf59ec5463f6a03040685a4c8eb151f4d3.png"
	],
	[
		"0x3e94349acf07c2f49e6024074e36dec25e566afb",
		"Body Snatchers NFT",
		"BSNFT",
		"ERC1155",
		"/images/nfts/0x3e94349acf07c2f49e6024074e36dec25e566afb.png"
	],
	[
		"0x869a96493d64ed5bbbfc24d96c5e84f95e558cf2",
		"SEIZING",
		"SEIZING",
		"ERC1155",
		"/images/nfts/0x869a96493d64ed5bbbfc24d96c5e84f95e558cf2.png"
	],
	[
		"0x0321b45a40c41aeee12e8ae22e98159f056d49de",
		"caTank Limited",
		"CTL",
		"ERC1155",
		"/images/nfts/0x0321b45a40c41aeee12e8ae22e98159f056d49de.png"
	],
	[
		"0xe7efd894cae704d32b395daad4cc075797a02ad5",
		"The Green Glider",
		"The Green Glider",
		"ERC1155",
		"/images/nfts/0xe7efd894cae704d32b395daad4cc075797a02ad5.png"
	],
	[
		"0xfe5844af9cb93572fd8542619708935c0b90cefe",
		"Ethernity's Master Collection",
		"Ethernity's Master Collection",
		"ERC1155",
		"/images/nfts/0xfe5844af9cb93572fd8542619708935c0b90cefe.png"
	],
	[
		"0x236e7af5fcab94770e621c97a1e58b4d0143e95b",
		"Ethernity's Master Collection",
		"Ethernity's Master Collection",
		"ERC1155",
		"/images/nfts/0x236e7af5fcab94770e621c97a1e58b4d0143e95b.png"
	],
	[
		"0x48d399d4e4a0f2b6ddb16e7e9ec7dc4de20b8ef9",
		"tama5 girl collection",
		"tama5 girl collection",
		"ERC1155",
		"/images/nfts/0x48d399d4e4a0f2b6ddb16e7e9ec7dc4de20b8ef9.png"
	],
	[
		"0x0642b6fee09b530a5e29d77495ceeceb039cbf9c",
		"an elizabeth",
		"an elizabeth",
		"ERC1155",
		"/images/nfts/0x0642b6fee09b530a5e29d77495ceeceb039cbf9c.png"
	],
	[
		"0xce3d5e978f4f127387dc347c8956d1fccee2262e",
		"Depixtion Silence",
		"Depixtion Silence",
		"ERC1155",
		"/images/nfts/0xce3d5e978f4f127387dc347c8956d1fccee2262e.png"
	],
	[
		"0xe400c2bb10d6ec7dfbe383a620f150325c631586",
		"Degenino Mint Box",
		"Degenino Mint Box",
		"ERC1155",
		"/images/nfts/0xe400c2bb10d6ec7dfbe383a620f150325c631586.png"
	],
	[
		"0x2fdcfb47a6f2442053c91f31a4df282d908be689",
		"Kongo Golden Ape Society",
		"KGAS",
		"ERC1155",
		"/images/nfts/0x2fdcfb47a6f2442053c91f31a4df282d908be689.png"
	],
	[
		"0x159f854e7e0ce7b7300a6d73cfcc421142cb42ee",
		"TIB's Robots",
		"TIB's Robots",
		"ERC1155",
		"/images/nfts/0x159f854e7e0ce7b7300a6d73cfcc421142cb42ee.png"
	],
	[
		"0x9f803635a5af311d9a3b73132482a95eb540f71a",
		"The Great Color Study",
		"The Great Color Study",
		"ERC1155",
		"/images/nfts/0x9f803635a5af311d9a3b73132482a95eb540f71a.png"
	],
	[
		"0x00d98586f3af8e9652950f27e44694a880c39633",
		"Saltyverse",
		"SV",
		"ERC1155",
		"/images/nfts/0x00d98586f3af8e9652950f27e44694a880c39633.png"
	],
	[
		"0x2da827a0c6417ee74253937f8565fe3dad5fb975",
		"KEK WIN$ EDITIONS",
		"KEK WIN$ EDITIONS",
		"ERC1155",
		"/images/nfts/0x2da827a0c6417ee74253937f8565fe3dad5fb975.png"
	],
	[
		"0x39bf50b778d57e01738a4bd47b42a2a8a7b35988",
		"Onitama Summon",
		"ONIS",
		"ERC1155",
		"/images/nfts/0x39bf50b778d57e01738a4bd47b42a2a8a7b35988.png"
	],
	[
		"0xc6550771ad238241bf19c447482e7833164e9622",
		"VOIDED COLLECTION (IGNORE)",
		"VOIDED COLLECTION (IGNORE)",
		"ERC1155",
		"/images/nfts/0xc6550771ad238241bf19c447482e7833164e9622.png"
	],
	[
		"0x47148f55bed9c6e62f9a847a20b3fc445d990003",
		"Queen of Coins",
		"QC",
		"ERC1155",
		"/images/nfts/0x47148f55bed9c6e62f9a847a20b3fc445d990003.png"
	],
	[
		"0x66124db150d5b6d87ade7e606e94e028a5ec7e6c",
		"Unidentified contract - 9q9ETlSlVr",
		"Unidentified contract - 9q9ETlSlVr",
		"ERC1155"
	],
	[
		"0xafc1ac5f87f2c4f797c4e19468471ca6458fe56d",
		"Art Drops by Onigiri",
		"Art Drops by Onigiri",
		"ERC1155",
		"/images/nfts/0xafc1ac5f87f2c4f797c4e19468471ca6458fe56d.png"
	],
	[
		"0xa8b554dd6bbac81ff88e41c39fe7709dec90c72e",
		"BB Carrot Club",
		"BBM",
		"ERC1155",
		"/images/nfts/0xa8b554dd6bbac81ff88e41c39fe7709dec90c72e.png"
	],
	[
		"0x4df7d379b921b4fca0d77ba4bd12c539df2f6e02",
		"Rove 3D Homes In The Ethereum Metaverse",
		"REs",
		"ERC1155",
		"/images/nfts/0x4df7d379b921b4fca0d77ba4bd12c539df2f6e02.png"
	],
	[
		"0xcd93d8bcb2f7c0d8b49020e652f9e18699faed26",
		"Too Rare Pepes",
		"Too Rare Pepes",
		"ERC1155",
		"/images/nfts/0xcd93d8bcb2f7c0d8b49020e652f9e18699faed26.png"
	],
	[
		"0xe09b1d31b608399d372b90b552d4b7e9e77af7b6",
		"WAYTOOMAD: Companion Editions",
		"WAYTOOMAD: Companion Editions",
		"ERC1155",
		"/images/nfts/0xe09b1d31b608399d372b90b552d4b7e9e77af7b6.png"
	],
	[
		"0x8bfa1e0e1accbaf7cc6e7be9a3d8e9b7ad86b27e",
		"MYST editions",
		"MYST editions",
		"ERC1155",
		"/images/nfts/0x8bfa1e0e1accbaf7cc6e7be9a3d8e9b7ad86b27e.png"
	],
	[
		"0xa851f5b0b5c3f6061a5195eefdbca0da11043b0e",
		"SBS Peel & Mash",
		"SBSCA",
		"ERC1155",
		"/images/nfts/0xa851f5b0b5c3f6061a5195eefdbca0da11043b0e.png"
	],
	[
		"0xd42da14c2c86186a5946d1b18a88c609c99fa63d",
		"bhare editions",
		"bhare editions",
		"ERC1155",
		"/images/nfts/0xd42da14c2c86186a5946d1b18a88c609c99fa63d.png"
	],
	[
		"0xd254c9d8115a68e42577abb5286c737631d0a3be",
		"Editions by Auranism",
		"Editions by Auranism",
		"ERC1155",
		"/images/nfts/0xd254c9d8115a68e42577abb5286c737631d0a3be.png"
	],
	[
		"0x153f8df0ce6a014e21f6fe6825129c53fa6ce0d8",
		"KILLAGEAR",
		"KILLAGEAR",
		"ERC1155",
		"/images/nfts/0x153f8df0ce6a014e21f6fe6825129c53fa6ce0d8.png"
	],
	[
		"0x3735b3550548a77692902a20befd49044475110a",
		"EDITIONZ by Satoshi's Mom",
		"EDITIONZ by Satoshi's Mom",
		"ERC1155",
		"/images/nfts/0x3735b3550548a77692902a20befd49044475110a.png"
	],
	[
		"0x64d19e1ef08d37494e3a32bc1bbe3900bd307a3f",
		"Deeds of the World",
		"Deeds of the World",
		"ERC1155",
		"/images/nfts/0x64d19e1ef08d37494e3a32bc1bbe3900bd307a3f.png"
	],
	[
		"0xc0ffee12324596801a3ddda7cce8d35ff6e3fbcb",
		"Claudiu Guraliuc (GC) - selected works",
		"Claudiu Guraliuc (GC) - selected works",
		"ERC1155",
		"/images/nfts/0xc0ffee12324596801a3ddda7cce8d35ff6e3fbcb.png"
	],
	[
		"0x0188f1f3030147b453ad43aa5ca1661e5347f162",
		"Jajan!!",
		"Jajan!!",
		"ERC1155",
		"/images/nfts/0x0188f1f3030147b453ad43aa5ca1661e5347f162.png"
	],
	[
		"0xbac737496dcd972d72acf3360d15e3b1d954fc70",
		"AstroRoss - Editions",
		"AstroRoss - Editions",
		"ERC1155",
		"/images/nfts/0xbac737496dcd972d72acf3360d15e3b1d954fc70.png"
	],
	[
		"0x4278d787bbfce8eef595168b41db52fe22664334",
		"Random editions",
		"Random editions",
		"ERC1155",
		"/images/nfts/0x4278d787bbfce8eef595168b41db52fe22664334.png"
	],
	[
		"0xe2d4cf2321bd66237db2f93f10465265eda46a04",
		"Zephyro Editions",
		"Zephyro Editions",
		"ERC1155",
		"/images/nfts/0xe2d4cf2321bd66237db2f93f10465265eda46a04.png"
	],
	[
		"0xfece5eb0ace0c97558bf6c49e173792399b6e1e9",
		"Hectoroz Manufactory",
		"Hectoroz Manufactory",
		"ERC1155",
		"/images/nfts/0xfece5eb0ace0c97558bf6c49e173792399b6e1e9.png"
	],
	[
		"0xab71809df32de4d6a5ffcb5ff4995145a7b3128b",
		"RubenBig Q",
		"RubenBig Q",
		"ERC1155",
		"/images/nfts/0xab71809df32de4d6a5ffcb5ff4995145a7b3128b.png"
	],
	[
		"0x026e8f811ecdf3eace13a0d4786d3e4c5fef7b77",
		"Dear Metaverse by METACITZN",
		"DM",
		"ERC1155",
		"/images/nfts/0x026e8f811ecdf3eace13a0d4786d3e4c5fef7b77.png"
	],
	[
		"0xb5d7a53fe7e211780038f8d5f9692ea3db5f2bbd",
		"Editions, by Ovidiu Protopopescu",
		"Editions, by Ovidiu Protopopescu",
		"ERC1155",
		"/images/nfts/0xb5d7a53fe7e211780038f8d5f9692ea3db5f2bbd.png"
	],
	[
		"0x80190f09c78d0c71cc52c2ae9c6fdba18fd2c499",
		"CAB Anime Series NFT",
		"CAB Anime Series NFT",
		"ERC1155",
		"/images/nfts/0x80190f09c78d0c71cc52c2ae9c6fdba18fd2c499.png"
	],
	[
		"0x5c4bdcd881bbaea858a37065689512fec173f70e",
		"Karisma's Studies",
		"Karisma's Studies",
		"ERC1155",
		"/images/nfts/0x5c4bdcd881bbaea858a37065689512fec173f70e.png"
	],
	[
		"0x01c1fff26c18651c0c83b9679453c7448dda9248",
		"TheArtofJuss Open Editions",
		"TheArtofJuss Open Editions",
		"ERC1155",
		"/images/nfts/0x01c1fff26c18651c0c83b9679453c7448dda9248.png"
	],
	[
		"0x950599037fe15c5a6499506c1fad5cf91457ef62",
		"Oty Editons",
		"Oty Editons",
		"ERC1155",
		"/images/nfts/0x950599037fe15c5a6499506c1fad5cf91457ef62.png"
	],
	[
		"0x418e835b87653a5d8ed5ac83301da428de525109",
		"UNCELEBRATED X EDITIONS",
		"UNCELEBRATED X EDITIONS",
		"ERC1155",
		"/images/nfts/0x418e835b87653a5d8ed5ac83301da428de525109.png"
	],
	[
		"0x783b672b2b52881f2b5037d52a59a7fdeecd0578",
		"ArtMis - Inktober 2022",
		"ArtMis - Inktober 2022",
		"ERC1155",
		"/images/nfts/0x783b672b2b52881f2b5037d52a59a7fdeecd0578.png"
	],
	[
		"0xf30a8723373195c4ce403bdc88f138949a8c5f98",
		"Taunt Battleworld: Skull Pass",
		"Taunt Battleworld: Skull Pass",
		"ERC1155",
		"/images/nfts/0xf30a8723373195c4ce403bdc88f138949a8c5f98.png"
	],
	[
		"0x4dde21c23497961f20bee0259a5e6b9ab62352b8",
		"VOID SESSIONS",
		"VOID SESSIONS",
		"ERC1155",
		"/images/nfts/0x4dde21c23497961f20bee0259a5e6b9ab62352b8.png"
	],
	[
		"0xc5f9ab5d6238fb9ca580d902c3122436032f0064",
		"BearX Satchel",
		"BXS",
		"ERC1155",
		"/images/nfts/0xc5f9ab5d6238fb9ca580d902c3122436032f0064.png"
	],
	[
		"0x70f30556b10990cd28ee2a70d8045f7927788807",
		"Pranksy Rock",
		"PRock",
		"ERC1155",
		"/images/nfts/0x70f30556b10990cd28ee2a70d8045f7927788807.png"
	],
	[
		"0xd5445d40a7677d94029296cae27cfb522502d1d7",
		"HEAVY RAIN by Lostcowboy",
		"HEAVY RAIN by Lostcowboy",
		"ERC1155",
		"/images/nfts/0xd5445d40a7677d94029296cae27cfb522502d1d7.png"
	],
	[
		"0x6c6ab773f0c3d682660e6526d517f48f347125ea",
		"The Lunar Module",
		"SHIP",
		"ERC1155",
		"/images/nfts/0x6c6ab773f0c3d682660e6526d517f48f347125ea.png"
	],
	[
		"0x50b3e6744091ec54f049afd39c549a2b7867304a",
		"City as a Stage x Editions",
		"City as a Stage x Editions",
		"ERC1155",
		"/images/nfts/0x50b3e6744091ec54f049afd39c549a2b7867304a.png"
	],
	[
		"0x71e2f72f2879a2f9a701a189e61feadb9a9e732b",
		"Dusty Peasant PFP",
		"Dusty Peasant PFP",
		"ERC1155",
		"/images/nfts/0x71e2f72f2879a2f9a701a189e61feadb9a9e732b.png"
	],
	[
		"0xc4a27a38972a56db6d719a4526d6e16eb13ccc64",
		"Unidentified contract - q3SRF4cN2L",
		"Unidentified contract - q3SRF4cN2L",
		"ERC1155"
	],
	[
		"0x2dae7379943747f676c1106b841d1e812a565419",
		"Sunshower by AndyX",
		"Sunshower by AndyX",
		"ERC1155",
		"/images/nfts/0x2dae7379943747f676c1106b841d1e812a565419.png"
	],
	[
		"0xef32e1a6fb4813e83dc1df842a4f3e9bff75c714",
		"Cyber Pop Art",
		"CYBRPOP",
		"ERC1155",
		"/images/nfts/0xef32e1a6fb4813e83dc1df842a4f3e9bff75c714.png"
	],
	[
		"0x9e28adde8891d58cb9e22ecfdf49fde3350f8447",
		"Good & Evil Editions",
		"Good & Evil Editions",
		"ERC1155",
		"/images/nfts/0x9e28adde8891d58cb9e22ecfdf49fde3350f8447.png"
	],
	[
		"0x16ddfedc1cb70795618ffbf97b9406de8199fd0c",
		"Chains Drop - Volume 2 (Legacy)",
		"Chains Drop - Volume 2 (Legacy)",
		"ERC1155",
		"/images/nfts/0x16ddfedc1cb70795618ffbf97b9406de8199fd0c.png"
	],
	[
		"0xd32ba851bf2ee555dc658add7d6799840b887d14",
		"Eamons Photos Editions",
		"Eamons Photos Editions",
		"ERC1155",
		"/images/nfts/0xd32ba851bf2ee555dc658add7d6799840b887d14.png"
	],
	[
		"0x0838350b108608a877d63eaab23625182fc0b720",
		"Flooding Factory Editions",
		"Flooding Factory Editions",
		"ERC1155",
		"/images/nfts/0x0838350b108608a877d63eaab23625182fc0b720.png"
	],
	[
		"0x3fdc2b3f4a2df4b2447783560abed20ffdf18a2a",
		"To be raw",
		"To be raw",
		"ERC1155",
		"/images/nfts/0x3fdc2b3f4a2df4b2447783560abed20ffdf18a2a.png"
	],
	[
		"0xe671556523408d885726443fbcc1358eb556ff3c",
		"Derp Nation Games",
		"Derp Nation Games",
		"ERC1155",
		"/images/nfts/0xe671556523408d885726443fbcc1358eb556ff3c.png"
	],
	[
		"0xe374b4df4cf95ecc0b7c93b49d465a1549f86cc0",
		"Badges for Bandits",
		"Badges for Bandits",
		"ERC1155",
		"/images/nfts/0xe374b4df4cf95ecc0b7c93b49d465a1549f86cc0.png"
	],
	[
		"0xfb26c3ac142ea208272c582a84d266dd6771f7b7",
		"Alex sketchbook - old",
		"Alex sketchbook - old",
		"ERC1155",
		"/images/nfts/0xfb26c3ac142ea208272c582a84d266dd6771f7b7.png"
	],
	[
		"0x887daa32d1c3fbfbbc54100bd6e18dad2c273b14",
		"Unemployables+",
		"UNE+",
		"ERC1155",
		"/images/nfts/0x887daa32d1c3fbfbbc54100bd6e18dad2c273b14.png"
	],
	[
		"0xed03662dccfced92a4a8d54bdb79d49ad534aede",
		"Cessation by 1984",
		"csa",
		"ERC1155",
		"/images/nfts/0xed03662dccfced92a4a8d54bdb79d49ad534aede.png"
	],
	[
		"0x7b9bdcb6a692058459ef427ef82a7a8de907bbd6",
		"Anigraphs",
		"Anigraphs",
		"ERC1155",
		"/images/nfts/0x7b9bdcb6a692058459ef427ef82a7a8de907bbd6.png"
	],
	[
		"0x15f5ed58276ddb7ddf8fef732eae7c2428d0b2b8",
		"DO NOT BUY-NEW V2 COLLECTION COMING SOON",
		"LTWTF2",
		"ERC1155",
		"/images/nfts/0x15f5ed58276ddb7ddf8fef732eae7c2428d0b2b8.png"
	],
	[
		"0xdc51826be9886f0ff867d4195465c258b075ca00",
		"AOL editions",
		"AOL editions",
		"ERC1155",
		"/images/nfts/0xdc51826be9886f0ff867d4195465c258b075ca00.png"
	],
	[
		"0xfecb354c387e088e616c541c8c64c052be426c18",
		"WildED - Wildalps Editions",
		"WildED - Wildalps Editions",
		"ERC1155",
		"/images/nfts/0xfecb354c387e088e616c541c8c64c052be426c18.png"
	],
	[
		"0x7ddd7dced8c615c818187a4812a751bc6d6d6679",
		"The Sparkler Editions",
		"The Sparkler Editions",
		"ERC1155",
		"/images/nfts/0x7ddd7dced8c615c818187a4812a751bc6d6d6679.png"
	],
	[
		"0x0292c3aae2cf815d87cb568e6275b09ef4aa68b4",
		"FREEBAC EDITIONS",
		"FREEBAC EDITIONS",
		"ERC1155",
		"/images/nfts/0x0292c3aae2cf815d87cb568e6275b09ef4aa68b4.png"
	],
	[
		"0xc41d7a87025e0fb8ec04e596c9ad6ab4a2bdc3dc",
		"pho editions",
		"pho editions",
		"ERC1155",
		"/images/nfts/0xc41d7a87025e0fb8ec04e596c9ad6ab4a2bdc3dc.png"
	],
	[
		"0x460ea8bfb410cec5700bbd6f18abeeb3c4603ea3",
		"Yamada's \"MA\"",
		"Yamada's \"MA\"",
		"ERC1155",
		"/images/nfts/0x460ea8bfb410cec5700bbd6f18abeeb3c4603ea3.png"
	],
	[
		"0xaa39a968b77bdf74a8d402cfdcc07128ce7927b3",
		"Unidentified contract - bRYcbvKL27",
		"Unidentified contract - bRYcbvKL27",
		"ERC1155"
	],
	[
		"0x7edbf09da9d0a8d5e17b296e5d572f3be2dadbfa",
		"Definitive Doom",
		"Definitive Doom",
		"ERC1155",
		"/images/nfts/0x7edbf09da9d0a8d5e17b296e5d572f3be2dadbfa.png"
	],
	[
		"0x71406c7212fa41f172108acf2b7257d554de0245",
		"T R A N S F I G U R E D",
		"T R A N S F I G U R E D",
		"ERC1155",
		"/images/nfts/0x71406c7212fa41f172108acf2b7257d554de0245.png"
	],
	[
		"0x1afca420c07db9de60061b0a93cce5cf5b784de0",
		"Akashi30 x AI",
		"Akashi30 x AI",
		"ERC1155",
		"/images/nfts/0x1afca420c07db9de60061b0a93cce5cf5b784de0.png"
	],
	[
		"0x22d9ec93da43dfe17107a82fd8e809d117215f26",
		"REMIX! DAO",
		"REMIX! DAO",
		"ERC1155",
		"/images/nfts/0x22d9ec93da43dfe17107a82fd8e809d117215f26.png"
	],
	[
		"0xb928d4012b8b33adea906165bbf006fa85a783c4",
		"Lady Julia x SE",
		"Lady Julia x SE",
		"ERC1155",
		"/images/nfts/0xb928d4012b8b33adea906165bbf006fa85a783c4.png"
	],
	[
		"0xd1b2705da036f1fdbcd2784c661e16a2d749da53",
		"Immersive collection 'What If'",
		"Immersive collection 'What If'",
		"ERC1155",
		"/images/nfts/0xd1b2705da036f1fdbcd2784c661e16a2d749da53.png"
	],
	[
		"0x5babc381c7e9edcf02654a9c30d384dfe54dd4a1",
		"Woman, Life, Freedom.",
		"RAW",
		"ERC1155",
		"/images/nfts/0x5babc381c7e9edcf02654a9c30d384dfe54dd4a1.png"
	],
	[
		"0x94dde6bd7f886c9c973acb35d30b085606d2200b",
		"STAPLEVERSE - CR8Z",
		"CR8Z",
		"ERC1155",
		"/images/nfts/0x94dde6bd7f886c9c973acb35d30b085606d2200b.png"
	],
	[
		"0x7ae6a012f55847cf452f2a5fecb1579da11d5503",
		"abc - 6vZZSFYP6w",
		"abc",
		"ERC1155"
	],
	[
		"0xb02fdedde59aba04ff14062519e880b5e6ba316e",
		"Interleave Productions",
		"INTERPROD",
		"ERC1155",
		"/images/nfts/0xb02fdedde59aba04ff14062519e880b5e6ba316e.png"
	],
	[
		"0x8b9870624bbea6c2882d1c6ef0f1544649de9a31",
		"Long Long Animals",
		"Long Long Animals",
		"ERC1155",
		"/images/nfts/0x8b9870624bbea6c2882d1c6ef0f1544649de9a31.png"
	],
	[
		"0xab32711cc05ec0b240a4fda8d2809d2bf6cd24ff",
		"Crypto Cloud Punks CCP",
		"CCPS",
		"ERC1155",
		"/images/nfts/0xab32711cc05ec0b240a4fda8d2809d2bf6cd24ff.png"
	],
	[
		"0xea823a96eae4126353dc78a851a16b90ee793568",
		"(SNAPSHOT IS TAKEN, DON'T BUY IT!) MOLFAR by Ukraines",
		"MOLFAR666",
		"ERC1155",
		"/images/nfts/0xea823a96eae4126353dc78a851a16b90ee793568.png"
	],
	[
		"0x8e19be131d16afd9c00cfff6a8a60b098e6ab24f",
		"Pit Boss",
		"MBPB",
		"ERC1155",
		"/images/nfts/0x8e19be131d16afd9c00cfff6a8a60b098e6ab24f.png"
	],
	[
		"0x2438a0eeffa36cb738727953d35047fb89c81417",
		"Bowie on the Blockchain",
		"Bowie on the Blockchain",
		"ERC1155",
		"/images/nfts/0x2438a0eeffa36cb738727953d35047fb89c81417.png"
	],
	[
		"0x760c862191ebd06fe91ec76f7e8b7356308489e2",
		"Matos Club",
		"Matos Club",
		"ERC1155",
		"/images/nfts/0x760c862191ebd06fe91ec76f7e8b7356308489e2.png"
	],
	[
		"0xdf32609e0fbfc9d3e62123de07e2fc2ca8ab5681",
		"Magical Editions by Pixelord",
		"Magical Editions by Pixelord",
		"ERC1155",
		"/images/nfts/0xdf32609e0fbfc9d3e62123de07e2fc2ca8ab5681.png"
	],
	[
		"0xdf0f2759471f3db3bf745ce1cdc2267a77e70e43",
		"This is not a serum.",
		"⭘",
		"ERC1155",
		"/images/nfts/0xdf0f2759471f3db3bf745ce1cdc2267a77e70e43.png"
	],
	[
		"0xdaae81c0077e8917a2eb63bb66ef701ff4781bb0",
		"PepeDapp Remint",
		"PepeDapp Remint",
		"ERC1155",
		"/images/nfts/0xdaae81c0077e8917a2eb63bb66ef701ff4781bb0.png"
	],
	[
		"0x87904056f5b7b76e5ff8278453c1869e73711311",
		"REKT DEGENS",
		"REKT DEGENS",
		"ERC1155",
		"/images/nfts/0x87904056f5b7b76e5ff8278453c1869e73711311.png"
	],
	[
		"0x340c93c028052f2193b42dbf9013d58016dcf7ba",
		"cryptomementokens",
		"cryptomementokens",
		"ERC1155",
		"/images/nfts/0x340c93c028052f2193b42dbf9013d58016dcf7ba.png"
	],
	[
		"0xe68971a5994acceab564d67419aecc7971058cb3",
		"Chibi Dinos Primal Pendant",
		"Chibi Dinos Primal Pendant",
		"ERC1155",
		"/images/nfts/0xe68971a5994acceab564d67419aecc7971058cb3.png"
	],
	[
		"0x7cd5ba0885d130a320a0373a4d6358d76876c6d9",
		"Ethernity's Master Collection",
		"Ethernity's Master Collection",
		"ERC1155",
		"/images/nfts/0x7cd5ba0885d130a320a0373a4d6358d76876c6d9.png"
	],
	[
		"0xeecfc77e5512063d4d87b67f79748b6da07fbcdd",
		"Chain Runners: Gear",
		"Chain Runners: Gear",
		"ERC1155",
		"/images/nfts/0xeecfc77e5512063d4d87b67f79748b6da07fbcdd.png"
	],
	[
		"0xea50837b942e8c44b62937a2ff5ffb6258373169",
		"PEP8LIENS",
		"PEP8LIENS",
		"ERC1155",
		"/images/nfts/0xea50837b942e8c44b62937a2ff5ffb6258373169.png"
	],
	[
		"0xe98c627b52dfa54a84f1ac35ad88a31a184f274f",
		"Official NFT Marketplace",
		"NFTSUK ",
		"ERC1155",
		"/images/nfts/0xe98c627b52dfa54a84f1ac35ad88a31a184f274f.png"
	],
	[
		"0xb47c396fb840af9e46264a2ba5c76db2dd8ea781",
		"Eden's Sunset Editions",
		"Eden's Sunset Editions",
		"ERC1155",
		"/images/nfts/0xb47c396fb840af9e46264a2ba5c76db2dd8ea781.png"
	],
	[
		"0x3d3f0b6b36b96fd1b38a92e16b1c012943e1f0f8",
		"Art by Stefan Grosse Halbuer",
		"Art by Stefan Grosse Halbuer",
		"ERC1155",
		"/images/nfts/0x3d3f0b6b36b96fd1b38a92e16b1c012943e1f0f8.png"
	],
	[
		"0x14b008ebf228c9846ff2ba8b0629dc9e5ff5a0bf",
		"FRAGMENTS_",
		"FRAGMENTS_",
		"ERC1155",
		"/images/nfts/0x14b008ebf228c9846ff2ba8b0629dc9e5ff5a0bf.png"
	],
	[
		"0x7dd74253c3d3e5e8d4975facd2de250e28201746",
		"The One and Only Pioneer Pass",
		"PNRP",
		"ERC1155",
		"/images/nfts/0x7dd74253c3d3e5e8d4975facd2de250e28201746.png"
	],
	[
		"0xc77bf5f04d88a3840df7b25d55a134cca09fddaa",
		"Nifty Hands",
		"NiftyHands",
		"ERC1155",
		"/images/nfts/0xc77bf5f04d88a3840df7b25d55a134cca09fddaa.png"
	],
	[
		"0xb2a3d80b524816d7d84c0e680cd08628e57a5e15",
		"Strangers Origins by Solemn",
		"Strangers Origins by Solemn",
		"ERC1155",
		"/images/nfts/0xb2a3d80b524816d7d84c0e680cd08628e57a5e15.png"
	],
	[
		"0xe6d50ae4f47d1bdaf1ed7ec870013082daec5fe3",
		"Beep Boop Box",
		"Beep Boop Box",
		"ERC1155",
		"/images/nfts/0xe6d50ae4f47d1bdaf1ed7ec870013082daec5fe3.png"
	],
	[
		"0x920686cc228900939892f6a163bdd951e2448d08",
		"Editions by J. Jason Chambers",
		"Editions by J. Jason Chambers",
		"ERC1155",
		"/images/nfts/0x920686cc228900939892f6a163bdd951e2448d08.png"
	],
	[
		"0x307c875bd387e98830a1272dabc90698d0038c9b",
		"Slow Ride Editions",
		"Slow Ride Editions",
		"ERC1155",
		"/images/nfts/0x307c875bd387e98830a1272dabc90698d0038c9b.png"
	],
	[
		"0x82e6e0160e7ed1d8fdcd876ace6f0dc1984120d6",
		"The ReVerse",
		"TRV",
		"ERC1155",
		"/images/nfts/0x82e6e0160e7ed1d8fdcd876ace6f0dc1984120d6.png"
	],
	[
		"0x5988fc0c92313e1a511e05dc4803709b17c92262",
		"Ethernity's Master Collection",
		"Ethernity's Master Collection",
		"ERC1155",
		"/images/nfts/0x5988fc0c92313e1a511e05dc4803709b17c92262.png"
	],
	[
		"0x2018be130ca917b374be8a428b16c0b6f672d2d2",
		"Feelings - Orabel Editions",
		"Feelings - Orabel Editions",
		"ERC1155",
		"/images/nfts/0x2018be130ca917b374be8a428b16c0b6f672d2d2.png"
	],
	[
		"0x69e96a7fa1935b6fc18097e7b74d4624e93e8130",
		"Paintings by Irem Hakyemez",
		"Paintings by Irem Hakyemez",
		"ERC1155",
		"/images/nfts/0x69e96a7fa1935b6fc18097e7b74d4624e93e8130.png"
	],
	[
		"0x2c48a1ad97a425fffc8238ef654b91f644fa9621",
		"Thicc Labs Generation 1",
		"Thicc Labs Generation 1",
		"ERC1155",
		"/images/nfts/0x2c48a1ad97a425fffc8238ef654b91f644fa9621.png"
	],
	[
		"0x822b99745daf2722bd0622ac234fe24bc07c969c",
		"HyperCosplay - Rewards",
		"HyperCosplay - Rewards",
		"ERC1155",
		"/images/nfts/0x822b99745daf2722bd0622ac234fe24bc07c969c.png"
	],
	[
		"0x7f7b17ec3962b140e3edec6dc105377aac57ff3e",
		"GLITCH GAME by Twick",
		"RAW",
		"ERC1155",
		"/images/nfts/0x7f7b17ec3962b140e3edec6dc105377aac57ff3e.png"
	],
	[
		"0x331d312741ca6a6078715c4b7179b0aae2309e18",
		"THE---PASS",
		"TP",
		"ERC1155",
		"/images/nfts/0x331d312741ca6a6078715c4b7179b0aae2309e18.png"
	],
	[
		"0xe507b141a3418e5bd46c77f31de57283b6aa6a47",
		"ZAFGOD OPEN EDITIONS",
		"ZAFGOD OPEN EDITIONS",
		"ERC1155",
		"/images/nfts/0xe507b141a3418e5bd46c77f31de57283b6aa6a47.png"
	],
	[
		"0x4bc67d8093cd62fd6428ea53cf547621bf28458b",
		"Autumn & pobedeen",
		"Autumn & pobedeen",
		"ERC1155",
		"/images/nfts/0x4bc67d8093cd62fd6428ea53cf547621bf28458b.png"
	],
	[
		"0x3eb31a328fb60dd15ae60445313deb4229bdb4b1",
		"Unidentified contract - g1q7XrFR1t",
		"Unidentified contract - g1q7XrFR1t",
		"ERC1155"
	],
	[
		"0x724739ceb3945b8ca946cc692f6ee58096f1634b",
		"Eclectic Method : Open Editions",
		"Eclectic Method : Open Editions",
		"ERC1155",
		"/images/nfts/0x724739ceb3945b8ca946cc692f6ee58096f1634b.png"
	],
	[
		"0xdcaeb6b8bff1410c1f2143be2694826064262c1b",
		"The Wind blows ( Editions )",
		"The Wind blows ( Editions )",
		"ERC1155",
		"/images/nfts/0xdcaeb6b8bff1410c1f2143be2694826064262c1b.png"
	],
	[
		"0x25ad43defbd8ae997f011556823b415f08936ce5",
		"Myth Division's American Ape: Animated",
		"MDAPE",
		"ERC1155",
		"/images/nfts/0x25ad43defbd8ae997f011556823b415f08936ce5.png"
	],
	[
		"0xcf8aa34e2254261e6e216b010be798434481ac77",
		"HYVE Editions",
		"HYVE Editions",
		"ERC1155",
		"/images/nfts/0xcf8aa34e2254261e6e216b010be798434481ac77.png"
	],
	[
		"0xd26931e7b6be2dea1823324a522950340ca5ec5a",
		"Refinable Multi",
		"REFI1155",
		"ERC1155"
	],
	[
		"0x70011e537648356a99436c94ac34a68f2cb5b915",
		"Unidentified contract - kmQnHRuDFk",
		"Unidentified contract - kmQnHRuDFk",
		"ERC1155"
	],
	[
		"0x032d8f3fc1c3753d835a033173d9be89d4281dbb",
		"Zigmarillion Editions",
		"Zigmarillion Editions",
		"ERC1155",
		"/images/nfts/0x032d8f3fc1c3753d835a033173d9be89d4281dbb.png"
	],
	[
		"0xf2aecee06841f0cc984ab8d7de5b1e9106890fdc",
		"OBYC Hazmat Division",
		"HZMT",
		"ERC1155",
		"/images/nfts/0xf2aecee06841f0cc984ab8d7de5b1e9106890fdc.png"
	],
	[
		"0x2d8815595dc593bd1c8845c72fe79c5b9a183fa3",
		"Pinky-Punkss",
		"Pinky-Punkss",
		"ERC1155",
		"/images/nfts/0x2d8815595dc593bd1c8845c72fe79c5b9a183fa3.png"
	],
	[
		"0x7f191d088ba3e44207ffe33f6aae8282d82a1f80",
		"Anne McKinnell Wildlife Editions",
		"Anne McKinnell Wildlife Editions",
		"ERC1155",
		"/images/nfts/0x7f191d088ba3e44207ffe33f6aae8282d82a1f80.png"
	],
	[
		"0x1dedd3f119378efabf92c8a5cef540f1bf04f496",
		"Love - Editions x Stefano",
		"Love - Editions x Stefano",
		"ERC1155",
		"/images/nfts/0x1dedd3f119378efabf92c8a5cef540f1bf04f496.png"
	],
	[
		"0x0a1022067ce45d93cfb22de82a4996ea4d6926e1",
		"Art by Cam Smith",
		"Art by Cam Smith",
		"ERC1155",
		"/images/nfts/0x0a1022067ce45d93cfb22de82a4996ea4d6926e1.png"
	],
	[
		"0x50203b7ca84df4a4efc75b6a891675c0fe1780e9",
		"Editions x Teexels",
		"Editions x Teexels",
		"ERC1155",
		"/images/nfts/0x50203b7ca84df4a4efc75b6a891675c0fe1780e9.png"
	],
	[
		"0x0c328c066f716e8391f1d49929524b10a397e47f",
		"hazed_editions",
		"hazed_editions",
		"ERC1155",
		"/images/nfts/0x0c328c066f716e8391f1d49929524b10a397e47f.png"
	],
	[
		"0x9d0fc31c2958b76f43e8d21a227b647fa41eaa34",
		"DJENERATES DERIVATIVES",
		"DJD",
		"ERC1155",
		"/images/nfts/0x9d0fc31c2958b76f43e8d21a227b647fa41eaa34.png"
	],
	[
		"0x15de1beb13d7d38cbc493d3ecbc0c7650e715c22",
		"Galxe",
		"Galxe",
		"ERC1155",
		"/images/nfts/0x15de1beb13d7d38cbc493d3ecbc0c7650e715c22.png"
	],
	[
		"0x2debb7f7eabadb79902639e0801cae8ea0b8fc66",
		"SENSEI KAERU",
		"SENSEI KAERU",
		"ERC1155",
		"/images/nfts/0x2debb7f7eabadb79902639e0801cae8ea0b8fc66.png"
	],
	[
		"0xbeede624532781478a6709fe6f7fdb33ff247edc",
		"coupofgrace",
		"coupofgrace",
		"ERC1155",
		"/images/nfts/0xbeede624532781478a6709fe6f7fdb33ff247edc.png"
	],
	[
		"0x71e24f80f2f7cbcd07009ad91ccc469d53bb10e0",
		"GOONY FRENS",
		"GOONY FRENS",
		"ERC1155",
		"/images/nfts/0x71e24f80f2f7cbcd07009ad91ccc469d53bb10e0.png"
	],
	[
		"0x254a6737f5cdf4d61265d156f9d5fb1387907831",
		"The Silence of Mila Pobedina",
		"The Silence of Mila Pobedina",
		"ERC1155",
		"/images/nfts/0x254a6737f5cdf4d61265d156f9d5fb1387907831.png"
	],
	[
		"0x00b469e0703710c65db9af22e7451f4d4d2ffdee",
		"Professor Mint Pass",
		"PROFSPASS",
		"ERC1155",
		"/images/nfts/0x00b469e0703710c65db9af22e7451f4d4d2ffdee.png"
	],
	[
		"0x2ff0a4962647b9ecebd8a985911586522a8701b3",
		"Terrell Jones Editions",
		"Terrell Jones Editions",
		"ERC1155",
		"/images/nfts/0x2ff0a4962647b9ecebd8a985911586522a8701b3.png"
	],
	[
		"0x00536fbd116bdb545b6364d00c84745993fc736f",
		"ED1T1ONS - Editions by Eleven",
		"ED1T1ONS - Editions by Eleven",
		"ERC1155",
		"/images/nfts/0x00536fbd116bdb545b6364d00c84745993fc736f.png"
	],
	[
		"0x2f5a79a9979f37f0c15b521e2527c2a29199e833",
		"Chain Guardians for Digital Art Fair 2021",
		"CHAIN_GUARDIANS_DAFA2021",
		"ERC1155"
	],
	[
		"0x23d34a39fb5ecc64b030e3858dc7fa57f72c4dc4",
		"MAX CAPACITY 1155",
		"MAX CAPACITY 1155",
		"ERC1155",
		"/images/nfts/0x23d34a39fb5ecc64b030e3858dc7fa57f72c4dc4.png"
	],
	[
		"0x852a3c5970c485a57158d54d3958917c45574d1c",
		"Synthesis by ArtMoo",
		"Synthesis by ArtMoo",
		"ERC1155",
		"/images/nfts/0x852a3c5970c485a57158d54d3958917c45574d1c.png"
	],
	[
		"0x1256f6e23e75266507dae2bcba017be6ac81cfd0",
		"TheFuckupsFarmacy",
		"TheFuckupsFarmacy",
		"ERC1155",
		"/images/nfts/0x1256f6e23e75266507dae2bcba017be6ac81cfd0.png"
	],
	[
		"0x4b16a470ecabfbb565f77b0730bee4fb6d02f9f6",
		"DeNations Art Open Edition",
		"DARTO",
		"ERC1155",
		"/images/nfts/0x4b16a470ecabfbb565f77b0730bee4fb6d02f9f6.png"
	],
	[
		"0x3f83636a1d95af384d64d0a9451fe2d7cb607b4b",
		"The Blinkless Museum",
		"BLKM",
		"ERC1155",
		"/images/nfts/0x3f83636a1d95af384d64d0a9451fe2d7cb607b4b.png"
	],
	[
		"0x78a7f7929219c88b8e8265ae606981d8a3056ad6",
		"Perpetual Protocol NFT",
		"Perpetual Protocol NFT",
		"ERC1155",
		"/images/nfts/0x78a7f7929219c88b8e8265ae606981d8a3056ad6.png"
	],
	[
		"0x66e7e1eedf4c67b127e7b9e865ca98aa56739965",
		"Honeycombs Deluxe",
		"HoneyCombsDeluxe",
		"ERC1155",
		"/images/nfts/0x66e7e1eedf4c67b127e7b9e865ca98aa56739965.png"
	],
	[
		"0xb9f0c64665f8ef77b3f407f672065b424430863f",
		"CryptoCelestials V2",
		"CryptoCelestials V2",
		"ERC1155",
		"/images/nfts/0xb9f0c64665f8ef77b3f407f672065b424430863f.png"
	],
	[
		"0xc92c3b7385f048b2ba1f7c9639a2fc48f0dad7c9",
		"$PORK NFT",
		"$PORK",
		"ERC1155",
		"/images/nfts/0xc92c3b7385f048b2ba1f7c9639a2fc48f0dad7c9.png"
	],
	[
		"0x59194e8c3f9907e5d6cff14ca3a0971ff5db979d",
		"CultArtist",
		"CultArtist",
		"ERC1155",
		"/images/nfts/0x59194e8c3f9907e5d6cff14ca3a0971ff5db979d.png"
	],
	[
		"0x2976356aa695e9c6a1d2225e88edd154740027f2",
		"WG/DRP",
		"WG/DRP",
		"ERC1155",
		"/images/nfts/0x2976356aa695e9c6a1d2225e88edd154740027f2.png"
	],
	[
		"0x90176145976a24256717a64a348debeba1a2cd2d",
		"RESISTANCE Club",
		"RESISTANCE",
		"ERC1155",
		"/images/nfts/0x90176145976a24256717a64a348debeba1a2cd2d.png"
	],
	[
		"0x0912dad1db4643368b029166af217b8a9818db15",
		"Rotten Bananos By GodHates",
		"RTBNNO",
		"ERC1155",
		"/images/nfts/0x0912dad1db4643368b029166af217b8a9818db15.png"
	],
	[
		"0x8c4adf3ea6ad460982e8b411c5e73a9dae7afd92",
		"Roots. Coming Home",
		"Roots. Coming Home",
		"ERC1155",
		"/images/nfts/0x8c4adf3ea6ad460982e8b411c5e73a9dae7afd92.png"
	],
	[
		"0x98d6ae2d1dd6b1f4e3a218a0d106b8cd830c4e6a",
		"Cnnnr Editions",
		"Cnnnr Editions",
		"ERC1155",
		"/images/nfts/0x98d6ae2d1dd6b1f4e3a218a0d106b8cd830c4e6a.png"
	],
	[
		"0x2dea2f6f6c5e4210937d7903f0e5f990b2514da7",
		"Song A Day RMXD",
		"RMXD",
		"ERC1155",
		"/images/nfts/0x2dea2f6f6c5e4210937d7903f0e5f990b2514da7.png"
	],
	[
		"0x0e9e7b3a249ea13c4d4540ec703c6c6232988889",
		"Meta Hollywood Access Pass",
		"MHWDPass",
		"ERC1155",
		"/images/nfts/0x0e9e7b3a249ea13c4d4540ec703c6c6232988889.png"
	],
	[
		"0x677b1ab2ad398e2afe93cc9a91b9dcaabf3d702c",
		"ETH-MEN Exclusive",
		"EME",
		"ERC1155"
	],
	[
		"0xe454b857d2eaf8895f8c6c40319637a1581519e9",
		"EVE Mint Pass",
		"EVE",
		"ERC1155",
		"/images/nfts/0xe454b857d2eaf8895f8c6c40319637a1581519e9.png"
	],
	[
		"0x7a02626d65f0ccd3168802120d5e6bc6a3fb8d78",
		"5K Odyssey",
		"5K Odyssey",
		"ERC1155",
		"/images/nfts/0x7a02626d65f0ccd3168802120d5e6bc6a3fb8d78.png"
	],
	[
		"0x5461cbe7b1042c54ed382d1356d7c4e0b43fa281",
		"Fortunata World Pass",
		"RAW",
		"ERC1155",
		"/images/nfts/0x5461cbe7b1042c54ed382d1356d7c4e0b43fa281.png"
	],
	[
		"0x3ef93b290e8636fcf1d3ff869f859308488bc463",
		"The Merge by j4ck",
		"The Merge by j4ck",
		"ERC1155",
		"/images/nfts/0x3ef93b290e8636fcf1d3ff869f859308488bc463.png"
	],
	[
		"0xe3a37aa4b6cc06ae9803c16d8297a99d26d89775",
		"Chiara Moreni Editions",
		"Chiara Moreni Editions",
		"ERC1155",
		"/images/nfts/0xe3a37aa4b6cc06ae9803c16d8297a99d26d89775.png"
	],
	[
		"0xbcd114d4256f8d9ec4fd85181583f183b34e9c89",
		"CF: The Nexus",
		"RAW",
		"ERC1155",
		"/images/nfts/0xbcd114d4256f8d9ec4fd85181583f183b34e9c89.png"
	],
	[
		"0x1fad127b1ac6daf7274fa46edd85716fd3021b5c",
		"Unidentified contract - VAQGDGm6QZ",
		"Unidentified contract - VAQGDGm6QZ",
		"ERC1155"
	],
	[
		"0x99d6e8742ec4eac5b0a77a2b55df0ecd658aefd9",
		"10% PROJECT",
		"10% PROJECT",
		"ERC1155",
		"/images/nfts/0x99d6e8742ec4eac5b0a77a2b55df0ecd658aefd9.png"
	],
	[
		"0x4461aa1fd3c6086c19ab5d1f23c41da69da26698",
		"27 times: the heartcode",
		"27 times: the heartcode",
		"ERC1155",
		"/images/nfts/0x4461aa1fd3c6086c19ab5d1f23c41da69da26698.png"
	],
	[
		"0x32c800500b53cac472dd5b26d11babced8424bbb",
		"3PEACE EDITIONS",
		"3PEACE EDITIONS",
		"ERC1155",
		"/images/nfts/0x32c800500b53cac472dd5b26d11babced8424bbb.png"
	],
	[
		"0x9b0a29e23d4f1c0fa692c5fc73e05debe60579d2",
		"ShinobiClub",
		"SC",
		"ERC1155",
		"/images/nfts/0x9b0a29e23d4f1c0fa692c5fc73e05debe60579d2.png"
	],
	[
		"0xb7d8a9a1355d9af65120aeada247a075b3228edc",
		"ClubMonteCarlo",
		"CMC",
		"ERC1155",
		"/images/nfts/0xb7d8a9a1355d9af65120aeada247a075b3228edc.png"
	],
	[
		"0x7852f8be40b050b7984cf7a8ab7ffdc0c90073c2",
		"HOWNOWBLeUCOW (Proof Of Steak)",
		"RAW",
		"ERC1155",
		"/images/nfts/0x7852f8be40b050b7984cf7a8ab7ffdc0c90073c2.png"
	],
	[
		"0x86bb4912ea47e07953c527d9ccc40f905ead1931",
		"PAUSE | DO NOT TRADE | READ DESCRIPTION",
		"HZMT",
		"ERC1155",
		"/images/nfts/0x86bb4912ea47e07953c527d9ccc40f905ead1931.png"
	],
	[
		"0xbd24a76f4135f930f5c49f6c30e0e30a61b97537",
		"Brawler Bearz: Max's Shop",
		"BBSHOP",
		"ERC1155",
		"/images/nfts/0xbd24a76f4135f930f5c49f6c30e0e30a61b97537.png"
	],
	[
		"0xabed38bfe2161b294bb79449a8cba358afd36740",
		"Tide Estates",
		"TideEstate",
		"ERC1155",
		"/images/nfts/0xabed38bfe2161b294bb79449a8cba358afd36740.png"
	],
	[
		"0xf15ee7469d64ba8fbfb95979abb77de4bbe83a73",
		"The Secret Tsuka Society - Honor Medals",
		"The Secret Tsuka Society - Honor Medals",
		"ERC1155",
		"/images/nfts/0xf15ee7469d64ba8fbfb95979abb77de4bbe83a73.png"
	],
	[
		"0x0dfbad308c0cd2854f59ecaad68055dc23910a4e",
		"Holder of 99",
		"Holder of 99",
		"ERC1155",
		"/images/nfts/0x0dfbad308c0cd2854f59ecaad68055dc23910a4e.png"
	],
	[
		"0xd459e111472f44dde5f20605b1657afefd3d3bbb",
		"With Love, Yinkore",
		"With Love, Yinkore",
		"ERC1155",
		"/images/nfts/0xd459e111472f44dde5f20605b1657afefd3d3bbb.png"
	],
	[
		"0x510e629dca3f4b1ab74ea39cf10bb69e107d6c1f",
		"Ghost Train for Aurallia",
		"Ghost Train for Aurallia",
		"ERC1155",
		"/images/nfts/0x510e629dca3f4b1ab74ea39cf10bb69e107d6c1f.png"
	],
	[
		"0xd1e7e08995e2cc54ac5431703b4ad7028b36b661",
		"Cyberpunk 2049",
		"Cyberpunk 2049",
		"ERC1155",
		"/images/nfts/0xd1e7e08995e2cc54ac5431703b4ad7028b36b661.png"
	],
	[
		"0x43f6426a39b10c2425045be1359539c6e3157343",
		"Artur Cosmic Waves",
		"Artur Cosmic Waves",
		"ERC1155",
		"/images/nfts/0x43f6426a39b10c2425045be1359539c6e3157343.png"
	],
	[
		"0x67bcbc1c0e120d0a700eb38a2d769c20a1dfb8f6",
		"NiftyPins ERC-1155 Collection V2",
		"NIFTYPINS",
		"ERC1155",
		"/images/nfts/0x67bcbc1c0e120d0a700eb38a2d769c20a1dfb8f6.png"
	],
	[
		"0x9e29ed4bd553c24b8d79884866dda9d5f27b0ff7",
		"NOX5EDITIONS",
		"NOX5EDITIONS",
		"ERC1155",
		"/images/nfts/0x9e29ed4bd553c24b8d79884866dda9d5f27b0ff7.png"
	],
	[
		"0x2eb6c1433551dad289dffc7d423a2b732f00432b",
		"Noob 365 GMs",
		"Noob 365 GMs",
		"ERC1155",
		"/images/nfts/0x2eb6c1433551dad289dffc7d423a2b732f00432b.png"
	],
	[
		"0x326374475908fc640c3dde59981c721caff9c828",
		"Wincity Paris Grande Chaumiere",
		"WincityPGC",
		"ERC1155",
		"/images/nfts/0x326374475908fc640c3dde59981c721caff9c828.png"
	],
	[
		"0x497350844414d589c4c8accae130ac5720036eba",
		"UNKNWN FREAKS",
		"UNKNWN FREAKS",
		"ERC1155",
		"/images/nfts/0x497350844414d589c4c8accae130ac5720036eba.png"
	],
	[
		"0x973823405352a004ecd44b849e343b5ccdac8936",
		"Wall St Bulls Options Market",
		"Wall St Bulls Options Market",
		"ERC1155",
		"/images/nfts/0x973823405352a004ecd44b849e343b5ccdac8936.png"
	],
	[
		"0xd6bc4bef7836319909c8844d875449a0f75ef776",
		"everywhere, an empty bliss",
		"everywhere, an empty bliss",
		"ERC1155",
		"/images/nfts/0xd6bc4bef7836319909c8844d875449a0f75ef776.png"
	],
	[
		"0xa998a6f5b32562a84fc4fe14546af05f8f5f084b",
		"Unidentified contract - apuf2Kp7h5",
		"Unidentified contract - apuf2Kp7h5",
		"ERC1155"
	],
	[
		"0x21545e9f21844758f6d4755230d9d7c62e08b449",
		"ANIFTY Collection (Old)",
		"ANIFTY Collection (Old)",
		"ERC1155",
		"/images/nfts/0x21545e9f21844758f6d4755230d9d7c62e08b449.png"
	],
	[
		"0x0972290a80333d19c6703073c3e57134a4ca0127",
		"RTFKT BONUS ITEMS",
		"RTFKT",
		"ERC1155",
		"/images/nfts/0x0972290a80333d19c6703073c3e57134a4ca0127.png"
	],
	[
		"0x7a9c405d8a34d7f5ff1b175bee87aa00e8443111",
		"The Paraverse: Relics",
		"The Paraverse: Relics",
		"ERC1155",
		"/images/nfts/0x7a9c405d8a34d7f5ff1b175bee87aa00e8443111.png"
	],
	[
		"0x3e7ab1ef6bb7f26826139e743b54d23acc0e137c",
		"Cxllabs",
		"Cxllabs",
		"ERC1155",
		"/images/nfts/0x3e7ab1ef6bb7f26826139e743b54d23acc0e137c.png"
	],
	[
		"0x26d2edd9bce916b9fecab9f3196367033dfef036",
		"Nomad Blvd | Mint Pass",
		"Nomad Blvd | Mint Pass",
		"ERC1155",
		"/images/nfts/0x26d2edd9bce916b9fecab9f3196367033dfef036.png"
	],
	[
		"0x56152a6b995745670ee96ebab70628b9ff0cbd07",
		"Teen Rebel Ape Club - Lockers & Backpacks",
		"ASSETS",
		"ERC1155",
		"/images/nfts/0x56152a6b995745670ee96ebab70628b9ff0cbd07.png"
	],
	[
		"0x039f97d976b70a79293c5e0f695e842e782be117",
		"Early MB - Token Pack",
		"Early MB - Token Pack",
		"ERC1155",
		"/images/nfts/0x039f97d976b70a79293c5e0f695e842e782be117.png"
	],
	[
		"0x9d8ed5acb5242b8a577c7d5ab5f943bb139306c8",
		"A Wand3ring Mind",
		"0AWM",
		"ERC1155",
		"/images/nfts/0x9d8ed5acb5242b8a577c7d5ab5f943bb139306c8.png"
	],
	[
		"0x776c6992a69182dd4acabb1a52db7b29c9541188",
		"PEONIES - FLEURVM",
		"PEONIES - FLEURVM",
		"ERC1155",
		"/images/nfts/0x776c6992a69182dd4acabb1a52db7b29c9541188.png"
	],
	[
		"0x99801cc5c35c60fb42b9d42cf5aa12280be2759b",
		"WAGMI Syndicate by Raz13",
		"WAGMI Syndicate by Raz13",
		"ERC1155",
		"/images/nfts/0x99801cc5c35c60fb42b9d42cf5aa12280be2759b.png"
	],
	[
		"0xafc8c8bdd57ecfb745911934c7c493158753a3fd",
		"Vinho bom & Gosto bom",
		"Vinho bom & Gosto bom",
		"ERC1155",
		"/images/nfts/0xafc8c8bdd57ecfb745911934c7c493158753a3fd.png"
	],
	[
		"0x1c7f380a9f77e2f2dc0cfa62b3d26497a89db8f0",
		"narisofka's editions",
		"narisofka's editions",
		"ERC1155",
		"/images/nfts/0x1c7f380a9f77e2f2dc0cfa62b3d26497a89db8f0.png"
	],
	[
		"0xc271a79f8241088a51cc4e9628acc8deacefe624",
		"AYAME COLLABORATION",
		"AYAME COLLABORATION",
		"ERC1155",
		"/images/nfts/0xc271a79f8241088a51cc4e9628acc8deacefe624.png"
	],
	[
		"0x164cc9991bca471fecf9032ac1caf638e98a4884",
		"art as expression (editions)",
		"art as expression (editions)",
		"ERC1155",
		"/images/nfts/0x164cc9991bca471fecf9032ac1caf638e98a4884.png"
	],
	[
		"0x93284e029dd089b24b2801e75bca39931e078573",
		"MINDDS COLLAB LAND",
		"MCL",
		"ERC1155",
		"/images/nfts/0x93284e029dd089b24b2801e75bca39931e078573.png"
	],
	[
		"0x8ffee14da53568dce07bf624ade0df3d4884a7aa",
		"Storm's editions",
		"Storm's editions",
		"ERC1155",
		"/images/nfts/0x8ffee14da53568dce07bf624ade0df3d4884a7aa.png"
	],
	[
		"0x500c5c9fe70e5820ec829354620f1c070224917d",
		"DAO Central",
		"DAO Central",
		"ERC1155",
		"/images/nfts/0x500c5c9fe70e5820ec829354620f1c070224917d.png"
	],
	[
		"0xef379b697e3f18278531f1cabe283dd70b2f4842",
		"Flash Genesis Pass",
		"Flash Genesis Pass",
		"ERC1155",
		"/images/nfts/0xef379b697e3f18278531f1cabe283dd70b2f4842.png"
	],
	[
		"0x97e99c2598883100dcde9108f3a416e02d125a42",
		"MB - Merch Pass",
		"MB - Merch Pass",
		"ERC1155",
		"/images/nfts/0x97e99c2598883100dcde9108f3a416e02d125a42.png"
	],
	[
		"0x8782695452adfc00ecdac202fa53e5a13dba8073",
		"Luis Ponce Open Editions",
		"Luis Ponce Open Editions",
		"ERC1155",
		"/images/nfts/0x8782695452adfc00ecdac202fa53e5a13dba8073.png"
	],
	[
		"0xc1b53b8b5d67b63a5984a763610782e6c271d7cf",
		"Li.Zard_DAO Magic",
		"Li.Zard_DAO Magic",
		"ERC1155",
		"/images/nfts/0xc1b53b8b5d67b63a5984a763610782e6c271d7cf.png"
	],
	[
		"0xae688a4ab0d41c71a7ef7968325ddf0c13161af2",
		"Editions by Daniel Stagner",
		"Editions by Daniel Stagner",
		"ERC1155",
		"/images/nfts/0xae688a4ab0d41c71a7ef7968325ddf0c13161af2.png"
	],
	[
		"0x7555584d075cce3fc77eecbe1011a01666fc9a1a",
		"FLC Ticket",
		"FLC Ticket",
		"ERC1155",
		"/images/nfts/0x7555584d075cce3fc77eecbe1011a01666fc9a1a.png"
	],
	[
		"0x4101e52abf700783ce1c585884edd44a57422d20",
		"Minion Rewards",
		"Minion Rewards",
		"ERC1155",
		"/images/nfts/0x4101e52abf700783ce1c585884edd44a57422d20.png"
	],
	[
		"0x6dd2236b1e089762cc264c85eebcff195ae38ea2",
		"Stake DAO NFTs",
		"sdNFT",
		"ERC1155",
		"/images/nfts/0x6dd2236b1e089762cc264c85eebcff195ae38ea2.png"
	],
	[
		"0x8a2300b05eb2cf9f06bc2582f7e867d33bdf12e0",
		"Randy The Rugger - old",
		"RANDY",
		"ERC1155",
		"/images/nfts/0x8a2300b05eb2cf9f06bc2582f7e867d33bdf12e0.png"
	],
	[
		"0x5c5e40407c357eefdbe0a8bc16aedb08983f9087",
		"Fin's Beach Bar (Season 1)",
		"RAW",
		"ERC1155",
		"/images/nfts/0x5c5e40407c357eefdbe0a8bc16aedb08983f9087.png"
	],
	[
		"0x26003bdcdb587185d42407e12c84d9c2d32cba78",
		"OPEN EDITIONS X YAKOB",
		"OPEN EDITIONS X YAKOB",
		"ERC1155",
		"/images/nfts/0x26003bdcdb587185d42407e12c84d9c2d32cba78.png"
	],
	[
		"0x1086c39d393bb90ae1189d4dc662e9ef712c5504",
		"Clean Shapes",
		"Clean Shapes",
		"ERC1155",
		"/images/nfts/0x1086c39d393bb90ae1189d4dc662e9ef712c5504.png"
	],
	[
		"0xe7477e58680d24fc73e7152ea7427613a21faecb",
		"Curious Cabins - Multi Editions",
		"Curious Cabins - Multi Editions",
		"ERC1155",
		"/images/nfts/0xe7477e58680d24fc73e7152ea7427613a21faecb.png"
	],
	[
		"0x9c2246f047a329a00ddae6ff883391b070f0d6f7",
		"i made this art 4 u",
		"i made this art 4 u",
		"ERC1155",
		"/images/nfts/0x9c2246f047a329a00ddae6ff883391b070f0d6f7.png"
	],
	[
		"0xc8d0cc4de1b4803e2c023b4aba69ae71940b33ec",
		"R I D E OR D I E",
		"R I D E OR D I E",
		"ERC1155",
		"/images/nfts/0xc8d0cc4de1b4803e2c023b4aba69ae71940b33ec.png"
	],
	[
		"0x960987eb8f00b8ea75fdea8ccc3eb2eeaf10f978",
		"SIDUS NFT HEROES - Galaxy Modificators",
		"SIDUS NFT HEROES - Galaxy Modificators",
		"ERC1155",
		"/images/nfts/0x960987eb8f00b8ea75fdea8ccc3eb2eeaf10f978.png"
	],
	[
		"0x649ca67cf8e08c74a277b18bd7c23523c5ad58e9",
		"Vissy",
		"Vissy",
		"ERC1155",
		"/images/nfts/0x649ca67cf8e08c74a277b18bd7c23523c5ad58e9.png"
	],
	[
		"0x1e24b6aaf73ac8fc0ee021820e9286295f3a9d79",
		"1R 7R335 - The Dynamics",
		"1R 7R335 - The Dynamics",
		"ERC1155",
		"/images/nfts/0x1e24b6aaf73ac8fc0ee021820e9286295f3a9d79.png"
	],
	[
		"0x48b3a83a56862bba2caab42b643739f46d2dc04b",
		"blues editions",
		"blues editions",
		"ERC1155",
		"/images/nfts/0x48b3a83a56862bba2caab42b643739f46d2dc04b.png"
	],
	[
		"0xdfdc35e33130928ee0081021a56916b4b3727033",
		"The Merge 8",
		"The Merge 8",
		"ERC1155",
		"/images/nfts/0xdfdc35e33130928ee0081021a56916b4b3727033.png"
	],
	[
		"0x8106e96d057e546831fc371ca9febd2aa15042a8",
		"Olipoe Editions",
		"Olipoe Editions",
		"ERC1155",
		"/images/nfts/0x8106e96d057e546831fc371ca9febd2aa15042a8.png"
	],
	[
		"0x6110dd87b7a6fbbebb0ea0f0dffb59ae59009af2",
		"SuperFarm Revv",
		"SuperFarm Revv",
		"ERC1155",
		"/images/nfts/0x6110dd87b7a6fbbebb0ea0f0dffb59ae59009af2.png"
	],
	[
		"0x242d14b26ffcee466a85a2ffa30d53c308cf0724",
		"Calyptra Editions",
		"Calyptra Editions",
		"ERC1155",
		"/images/nfts/0x242d14b26ffcee466a85a2ffa30d53c308cf0724.png"
	],
	[
		"0x37808643191cb5b9a98b4bdc7fda08662e4b8f24",
		"CT Twenty (fountainhead-Ethereum)",
		"CT Twenty (fountainhead-Ethereum)",
		"ERC1155",
		"/images/nfts/0x37808643191cb5b9a98b4bdc7fda08662e4b8f24.png"
	],
	[
		"0x48f2e2cc2987972b07fa32f75fc8978cbe35ea54",
		"NAYUTA BELIEF CARD",
		"NAYUTA BELIEF CARD",
		"ERC1155",
		"/images/nfts/0x48f2e2cc2987972b07fa32f75fc8978cbe35ea54.png"
	],
	[
		"0x60e5ba29c51a7102e09f691aaad4809bea75dd7b",
		"NoWorkCity",
		"NoWorkCity",
		"ERC1155",
		"/images/nfts/0x60e5ba29c51a7102e09f691aaad4809bea75dd7b.png"
	],
	[
		"0x322f6aa9768c5bc3489e303a008af76c05cb98b2",
		"6Sigma",
		"SSIG",
		"ERC1155",
		"/images/nfts/0x322f6aa9768c5bc3489e303a008af76c05cb98b2.png"
	],
	[
		"0xf2e8d10768e295c324c2faeb1ab15e14c2ae4e76",
		"Frens Originals",
		"Frens Originals",
		"ERC1155",
		"/images/nfts/0xf2e8d10768e295c324c2faeb1ab15e14c2ae4e76.png"
	],
	[
		"0xbe8227e63056aede2050fa319db43ae139d02782",
		"My Everyday Hand-drawns",
		"My Everyday Hand-drawns",
		"ERC1155",
		"/images/nfts/0xbe8227e63056aede2050fa319db43ae139d02782.png"
	],
	[
		"0x06f8eb6fbca13214fbdad353fdc6b3b47a1be8b8",
		"Unidentified contract - Mrswe1",
		"Unidentified contract - Mrswe1",
		"ERC1155"
	],
	[
		"0x5ab8f0838db02da1e17ec8f9b864e4f6f799bb03",
		"#CLAIMS BY HANNES WINDRATH",
		"RAW",
		"ERC1155",
		"/images/nfts/0x5ab8f0838db02da1e17ec8f9b864e4f6f799bb03.png"
	],
	[
		"0x25b834999ea471429ee211e2d465e85adae0ce14",
		"batz editions",
		"batz editions",
		"ERC1155",
		"/images/nfts/0x25b834999ea471429ee211e2d465e85adae0ce14.png"
	],
	[
		"0xc9e5ef2ba2e94adb9ac89de38bd9e37b77e69025",
		"Dream_Savers_Mirror",
		"Dream_Savers_Mirror",
		"ERC1155",
		"/images/nfts/0xc9e5ef2ba2e94adb9ac89de38bd9e37b77e69025.png"
	],
	[
		"0xa07154ac49dbf8e5ff03d33a2c7796a462eb5ac0",
		"Shards of Magnus Editions",
		"Shards of Magnus Editions",
		"ERC1155",
		"/images/nfts/0xa07154ac49dbf8e5ff03d33a2c7796a462eb5ac0.png"
	],
	[
		"0xd144b10e9837b24e0015e816e3cfd63ef5e4e192",
		"Billionairess Ape Club",
		"Robotars",
		"ERC1155",
		"/images/nfts/0xd144b10e9837b24e0015e816e3cfd63ef5e4e192.png"
	],
	[
		"0x125c0bcf88e9e7346ad093ce7befa7f47355dfa9",
		"Arjen Roos Editions",
		"Arjen Roos Editions",
		"ERC1155",
		"/images/nfts/0x125c0bcf88e9e7346ad093ce7befa7f47355dfa9.png"
	],
	[
		"0x43f48b416ee0a6367754c8257f2ff4d91c7a181e",
		"Dirty Robot Interleave Artwork",
		"Dirty Robot Interleave Artwork",
		"ERC1155",
		"/images/nfts/0x43f48b416ee0a6367754c8257f2ff4d91c7a181e.png"
	],
	[
		"0xed0c28f292fd70f44b3f06ed0cfd8fda1fad3419",
		"Paradise Trippies MintPass",
		"TRIPPYPASS",
		"ERC1155",
		"/images/nfts/0xed0c28f292fd70f44b3f06ed0cfd8fda1fad3419.png"
	],
	[
		"0x2707638fc151ef58eb8aa2d725b6b8217054eaf7",
		"WE LOVE DECAY - The Editions",
		"WE LOVE DECAY - The Editions",
		"ERC1155",
		"/images/nfts/0x2707638fc151ef58eb8aa2d725b6b8217054eaf7.png"
	],
	[
		"0x3a29f9f90ea83893b70ed7725afab758d9779acb",
		"MIDI Punkz by Songs Of Eden v2",
		"MIDIPUNKZ",
		"ERC1155",
		"/images/nfts/0x3a29f9f90ea83893b70ed7725afab758d9779acb.png"
	],
	[
		"0x43c0e413d4acc979b275126bcda6badc3a90e220",
		"BRAiN VOMiT Collection",
		"BrainVomit",
		"ERC1155",
		"/images/nfts/0x43c0e413d4acc979b275126bcda6badc3a90e220.png"
	],
	[
		"0x84beb95095033483fa195907497c77b31ba510e2",
		"Kaiju Augmints",
		"AUGMINT",
		"ERC1155",
		"/images/nfts/0x84beb95095033483fa195907497c77b31ba510e2.png"
	],
	[
		"0x1ea549300d7abae0c462432ceae43d2e31f8b563",
		"FlareMC-Origin",
		"FLARE",
		"ERC1155",
		"/images/nfts/0x1ea549300d7abae0c462432ceae43d2e31f8b563.png"
	],
	[
		"0xfce969f7e15d9a0ed4f3d0f6e50653cf5adca627",
		"ASAGI Benefit Collection",
		"ASAGI Benefit Collection",
		"ERC1155",
		"/images/nfts/0xfce969f7e15d9a0ed4f3d0f6e50653cf5adca627.png"
	],
	[
		"0x75fcfddf79eff379b4a5a7159d8f65bcb7874c6b",
		"WeirDAO Collective Art",
		"WeirDAO Collective Art",
		"ERC1155",
		"/images/nfts/0x75fcfddf79eff379b4a5a7159d8f65bcb7874c6b.png"
	],
	[
		"0xded56b58644373020393ad35b9eb5841296b886b",
		"Emergence-Where Dreams Land",
		"Emergence-Where Dreams Land",
		"ERC1155",
		"/images/nfts/0xded56b58644373020393ad35b9eb5841296b886b.png"
	],
	[
		"0x1b780fc912e96e7d9557080530786b927fe8706f",
		"JakNFT OPEN EDITIONS",
		"JakNFT OPEN EDITIONS",
		"ERC1155",
		"/images/nfts/0x1b780fc912e96e7d9557080530786b927fe8706f.png"
	],
	[
		"0x9035ea062b6a4f66c15790d225818e2a5c74c841",
		"Darkness Bytes",
		"Darkness Bytes",
		"ERC1155",
		"/images/nfts/0x9035ea062b6a4f66c15790d225818e2a5c74c841.png"
	],
	[
		"0x7006a61a63cc6351af8da23b0cc2b34972c73ad7",
		"Crazy Carl Collective Genesis NFTs",
		"Crazy Carl Collective Genesis NFTs",
		"ERC1155",
		"/images/nfts/0x7006a61a63cc6351af8da23b0cc2b34972c73ad7.png"
	],
	[
		"0x0b5c2cd622645a28f1713fd59f067e86b195da7d",
		"Harvmcm Editions",
		"Harvmcm Editions",
		"ERC1155",
		"/images/nfts/0x0b5c2cd622645a28f1713fd59f067e86b195da7d.png"
	],
	[
		"0x2b29753b6cbc8d4655fb89b1c17f06e80a5beaa1",
		"WET: Chapter 1 by Lindsey Byrnes",
		"LBWET1",
		"ERC1155",
		"/images/nfts/0x2b29753b6cbc8d4655fb89b1c17f06e80a5beaa1.png"
	],
	[
		"0xb6feb7bc182418928dd1cd2d44ac94d4184f5181",
		"Lord Editions",
		"Lord Editions",
		"ERC1155",
		"/images/nfts/0xb6feb7bc182418928dd1cd2d44ac94d4184f5181.png"
	],
	[
		"0xf918f4b118b29c839ed749869b3af01edabda0a3",
		"VISUAL BUGS",
		"VISUAL BUGS",
		"ERC1155",
		"/images/nfts/0xf918f4b118b29c839ed749869b3af01edabda0a3.png"
	],
	[
		"0x80af80c2fee7f8adb158058c636a06bc3cbb7881",
		"Snkr Bricks by Sneaker News",
		"BRKS",
		"ERC1155",
		"/images/nfts/0x80af80c2fee7f8adb158058c636a06bc3cbb7881.png"
	],
	[
		"0x5634e50cb1f05162cdc4e1857b1fc7e1e2543d24",
		"Harry's Non Functional Tokens",
		"HarryDrop",
		"ERC1155",
		"/images/nfts/0x5634e50cb1f05162cdc4e1857b1fc7e1e2543d24.png"
	],
	[
		"0x6dcc7f531b41ac00825fb99b7635672d3b326fe6",
		"UnknownCo",
		"UnknownCo",
		"ERC1155",
		"/images/nfts/0x6dcc7f531b41ac00825fb99b7635672d3b326fe6.png"
	],
	[
		"0xf536ab4f25f1640b2c840abc9c43859332245d64",
		"Unidentified contract - TQDm0QsiBO",
		"Unidentified contract - TQDm0QsiBO",
		"ERC1155"
	],
	[
		"0xb545a80e8738781200f32d68765abd8f935908aa",
		"ferdebuenArt Editions",
		"ferdebuenArt Editions",
		"ERC1155",
		"/images/nfts/0xb545a80e8738781200f32d68765abd8f935908aa.png"
	],
	[
		"0x17a9e01ac9f321151949da8c4b1836176d9e57ff",
		"WFH DEGEN by dillOnFire",
		"WFH DEGEN by dillOnFire",
		"ERC1155",
		"/images/nfts/0x17a9e01ac9f321151949da8c4b1836176d9e57ff.png"
	],
	[
		"0x2bbbafaa6a39146d796379e371fb3d8e65a45ee6",
		"Hollagas Pleasure",
		"Hollagas Pleasure",
		"ERC1155",
		"/images/nfts/0x2bbbafaa6a39146d796379e371fb3d8e65a45ee6.png"
	],
	[
		"0xbe6543277bd1238203eefe674efb46c2c6ddaf2c",
		"Dustn Editions",
		"Dustn Editions",
		"ERC1155",
		"/images/nfts/0xbe6543277bd1238203eefe674efb46c2c6ddaf2c.png"
	],
	[
		"0xf37795c4fd07796b4371f08c9567cee596df238f",
		"The Uther Trunks",
		"TUT",
		"ERC1155",
		"/images/nfts/0xf37795c4fd07796b4371f08c9567cee596df238f.png"
	],
	[
		"0xc4b310e8e655f83f97c4034bc18f98650a06952d",
		"Anniversary by Metaani",
		"Anniversary by Metaani",
		"ERC1155",
		"/images/nfts/0xc4b310e8e655f83f97c4034bc18f98650a06952d.png"
	],
	[
		"0xc11429f7070ec7c446c9b8d699f21496be0f818c",
		"Unidentified contract - vsSkC8KPWc",
		"Unidentified contract - vsSkC8KPWc",
		"ERC1155"
	],
	[
		"0x5bf8b8b916b73d2738492fec3a1cb1977888eb43",
		"Balance Token",
		"Balance Token",
		"ERC1155",
		"/images/nfts/0x5bf8b8b916b73d2738492fec3a1cb1977888eb43.png"
	],
	[
		"0xf82927abcc8f032822ed4d1b1cc98c47fc016f71",
		"Anokha - Community Collection",
		"Anokha - Community Collection",
		"ERC1155",
		"/images/nfts/0xf82927abcc8f032822ed4d1b1cc98c47fc016f71.png"
	],
	[
		"0x1732299b13aa531ae2b9d1181173542b160a54c2",
		"SKIN * by Reiniscouple - Editions",
		"SKIN",
		"ERC1155",
		"/images/nfts/0x1732299b13aa531ae2b9d1181173542b160a54c2.png"
	],
	[
		"0x35c46a169ae74274d76e33b1e5a671be3c603779",
		"Finding Arcadia by Jeff Charron",
		"Finding Arcadia by Jeff Charron",
		"ERC1155",
		"/images/nfts/0x35c46a169ae74274d76e33b1e5a671be3c603779.png"
	],
	[
		"0xb1ea7ee46dfb5929e703921c2bacee9af116694d",
		"DEATHWISH Extras",
		"DEATHWISH Extras",
		"ERC1155",
		"/images/nfts/0xb1ea7ee46dfb5929e703921c2bacee9af116694d.png"
	],
	[
		"0xc76ba5cafd5b326dde1dedd23d247ae46ad5d1fa",
		"NiftyB - Editions",
		"NiftyB - Editions",
		"ERC1155",
		"/images/nfts/0xc76ba5cafd5b326dde1dedd23d247ae46ad5d1fa.png"
	],
	[
		"0x8deecd76c6facecfdc1f7e85b5f7d436669cb52d",
		"TheArtofJuss MEMES",
		"TheArtofJuss MEMES",
		"ERC1155",
		"/images/nfts/0x8deecd76c6facecfdc1f7e85b5f7d436669cb52d.png"
	],
	[
		"0xeaa94e65988a7e17a7c30b6e1065769dbdf59192",
		"Harshit Dave Drops",
		"Harshit Dave Drops",
		"ERC1155",
		"/images/nfts/0xeaa94e65988a7e17a7c30b6e1065769dbdf59192.png"
	],
	[
		"0xd857d827710e7dfc99310e3c03e89cdebaf94117",
		"durrrivatives editions",
		"durrrivatives editions",
		"ERC1155",
		"/images/nfts/0xd857d827710e7dfc99310e3c03e89cdebaf94117.png"
	],
	[
		"0xe079fa5ce01d1dc55aea39317219825f2d7a3193",
		"Fyat Lux World",
		"Fyat Lux World",
		"ERC1155",
		"/images/nfts/0xe079fa5ce01d1dc55aea39317219825f2d7a3193.png"
	],
	[
		"0x6358ea163b714322acbdc1ec49c7c4b50676426d",
		"Acid Star Editions",
		"Acid Star Editions",
		"ERC1155",
		"/images/nfts/0x6358ea163b714322acbdc1ec49c7c4b50676426d.png"
	],
	[
		"0xc527404af8bcf0907c986274dcaac18afe5c8fc5",
		"Arty Pass",
		"Arty Pass",
		"ERC1155",
		"/images/nfts/0xc527404af8bcf0907c986274dcaac18afe5c8fc5.png"
	],
	[
		"0xa213c344d14e9ae9da2b70a8f9a0122131d59274",
		"Future Quest",
		"Future Quest",
		"ERC1155",
		"/images/nfts/0xa213c344d14e9ae9da2b70a8f9a0122131d59274.png"
	],
	[
		"0x55d1422cd99e98abfa1a4c13983aa2765b6ec539",
		"Pivot 2 MEMES",
		"Pivot 2 MEMES",
		"ERC1155",
		"/images/nfts/0x55d1422cd99e98abfa1a4c13983aa2765b6ec539.png"
	],
	[
		"0xf37e6ebd1cdc07b4d2ed6cb867beee33534e34de",
		"Logan Paul Digital Collectibles Store",
		"MAV",
		"ERC1155",
		"/images/nfts/0xf37e6ebd1cdc07b4d2ed6cb867beee33534e34de.png"
	],
	[
		"0x39f8166484486c3b72c5c58c468a016d036e1a02",
		"Fringe Drifters - Loot Cards",
		"SCFD",
		"ERC1155",
		"/images/nfts/0x39f8166484486c3b72c5c58c468a016d036e1a02.png"
	],
	[
		"0x79336dab932b6d7951006ea5a394cf580246822f",
		"Curio Remix 2",
		"crx2",
		"ERC1155",
		"/images/nfts/0x79336dab932b6d7951006ea5a394cf580246822f.png"
	],
	[
		"0xb6ac630a55924e7f6408b4c30641713b2083e82b",
		"LVLUP Potions",
		"POTIONS",
		"ERC1155",
		"/images/nfts/0xb6ac630a55924e7f6408b4c30641713b2083e82b.png"
	],
	[
		"0xe34203067aa23b5b2a9a6305fa61e570f74d3786",
		"ART PONZI",
		"ART PONZI",
		"ERC1155",
		"/images/nfts/0xe34203067aa23b5b2a9a6305fa61e570f74d3786.png"
	],
	[
		"0x7cd73533f99f034fba9bd66ec7ae9cea30e268d2",
		"Super Gremplin Editions",
		"Super Gremplin Editions",
		"ERC1155",
		"/images/nfts/0x7cd73533f99f034fba9bd66ec7ae9cea30e268d2.png"
	],
	[
		"0x7e7c8ae51546933ddc3afaeba61266309157f786",
		"GoldenDAO Founding Membership",
		"GD",
		"ERC1155",
		"/images/nfts/0x7e7c8ae51546933ddc3afaeba61266309157f786.png"
	],
	[
		"0x24dbfa1a880bebb90e83972cff028ce99a6458dc",
		"SPIRIT RUNES",
		"SPIRIT RUNES",
		"ERC1155",
		"/images/nfts/0x24dbfa1a880bebb90e83972cff028ce99a6458dc.png"
	],
	[
		"0x9d7743b79e2bace101e62b189f51d7e1eb097616",
		"BURN EDITION by dieLehmanns",
		"BURN EDITION by dieLehmanns",
		"ERC1155",
		"/images/nfts/0x9d7743b79e2bace101e62b189f51d7e1eb097616.png"
	],
	[
		"0x979de6a7d4cf92b5d2dee7cff4b87f9e7a15821f",
		"On The Roofs - Editions",
		"On The Roofs - Editions",
		"ERC1155",
		"/images/nfts/0x979de6a7d4cf92b5d2dee7cff4b87f9e7a15821f.png"
	],
	[
		"0xd7eed9a53dea80c0fe9316dede81a3634b9f14ce",
		"WMD Editions",
		"WMD Editions",
		"ERC1155",
		"/images/nfts/0xd7eed9a53dea80c0fe9316dede81a3634b9f14ce.png"
	],
	[
		"0xb9dc6f3eeecebc1e3779043e6ab4534e34ad4877",
		"Godpod - Poddy",
		"Godpod - Poddy",
		"ERC1155",
		"/images/nfts/0xb9dc6f3eeecebc1e3779043e6ab4534e34ad4877.png"
	],
	[
		"0x1a9046b126b235f30a38a58cbb4381838de4a78f",
		"Irf's Editions",
		"Irf's Editions",
		"ERC1155",
		"/images/nfts/0x1a9046b126b235f30a38a58cbb4381838de4a78f.png"
	],
	[
		"0x232a68a51d6e07357ae025d2a459c16077327102",
		"ACK EDITIONS",
		"ACK EDITIONS",
		"ERC1155",
		"/images/nfts/0x232a68a51d6e07357ae025d2a459c16077327102.png"
	],
	[
		"0x687dd2eda0502d34f3549a84b87cf2c5c32a4f40",
		"YOUNG & SICK - SHROOMIE'S ELIXIRS",
		"YOUNG & SICK - SHROOMIE'S ELIXIRS",
		"ERC1155",
		"/images/nfts/0x687dd2eda0502d34f3549a84b87cf2c5c32a4f40.png"
	],
	[
		"0x402c1f5e78284cf9aa65daa7b1c1fe9867210b2c",
		"OMCOMMA EDITIONS",
		"OMCOMMA EDITIONS",
		"ERC1155",
		"/images/nfts/0x402c1f5e78284cf9aa65daa7b1c1fe9867210b2c.png"
	],
	[
		"0x814ec748715f1e5b1b5c0a01fc0860569eb775e1",
		"Tommy Wilson Editions",
		"Tommy Wilson Editions",
		"ERC1155",
		"/images/nfts/0x814ec748715f1e5b1b5c0a01fc0860569eb775e1.png"
	],
	[
		"0x88000cd082328e1627f09db72b7762572565afc7",
		"Erto",
		"ERTO",
		"ERC1155",
		"/images/nfts/0x88000cd082328e1627f09db72b7762572565afc7.png"
	],
	[
		"0xaa8abd4e99635ea5b44986766fd9f31cced31af7",
		"Rarity Green Vault - Seed",
		"Rarity Green Vault - Seed",
		"ERC1155",
		"/images/nfts/0xaa8abd4e99635ea5b44986766fd9f31cced31af7.png"
	],
	[
		"0x595d086bb4feae1a0424416fa1c0627b1e1afc27",
		"IMMEMORIAL | Sci-Fi series",
		"IMMEMORIAL | Sci-Fi series",
		"ERC1155",
		"/images/nfts/0x595d086bb4feae1a0424416fa1c0627b1e1afc27.png"
	],
	[
		"0x3afbf52d43ad284e90e89dc3f85feb526bdb735c",
		"Stoner Bull Club",
		"SBC",
		"ERC1155",
		"/images/nfts/0x3afbf52d43ad284e90e89dc3f85feb526bdb735c.png"
	],
	[
		"0xe67ad3bca423c145f6a8df133a33d7abdddf6581",
		"/Execute",
		"/Execute",
		"ERC1155",
		"/images/nfts/0xe67ad3bca423c145f6a8df133a33d7abdddf6581.png"
	],
	[
		"0x9d861963dcb40f53c12637afd7aa2c303747f202",
		"DRUGZ by Satoshi's Mom",
		"DRUGZ by Satoshi's Mom",
		"ERC1155",
		"/images/nfts/0x9d861963dcb40f53c12637afd7aa2c303747f202.png"
	],
	[
		"0x2897c7fbf55e56d9c27852eab8ff5b3ffe59ccd4",
		"CaliPlug",
		"CALI",
		"ERC1155",
		"/images/nfts/0x2897c7fbf55e56d9c27852eab8ff5b3ffe59ccd4.png"
	],
	[
		"0xb638cfd5bb785e847e68ce970219e39d487fb36f",
		"Unidentified contract - JVGVt34q4m - old - old",
		"Unidentified contract - JVGVt34q4m - old - old",
		"ERC1155"
	],
	[
		"0xb6283b2e41843612cce2a70a87cf6edb9f40aa8a",
		"CyberKeys",
		"CyberKeys",
		"ERC1155",
		"/images/nfts/0xb6283b2e41843612cce2a70a87cf6edb9f40aa8a.png"
	],
	[
		"0xa74bf3a26f8396a0d25a263c09de85bd765f4f68",
		"NAEMO GENESIS",
		"NAEMOGENESIS",
		"ERC1155",
		"/images/nfts/0xa74bf3a26f8396a0d25a263c09de85bd765f4f68.png"
	],
	[
		"0xac3dc4977d299e879de123e1cd997047fa936d73",
		"NABU PASS",
		"NABUPASS",
		"ERC1155",
		"/images/nfts/0xac3dc4977d299e879de123e1cd997047fa936d73.png"
	],
	[
		"0x30bfe98bd92c0d359779102726f00aae5c015584",
		"Digi Dao",
		"Digi Dao",
		"ERC1155",
		"/images/nfts/0x30bfe98bd92c0d359779102726f00aae5c015584.png"
	],
	[
		"0xb44349079cf3ee45a8c9b4986ffbf548ba2c0ecf",
		"Johntool VIP",
		"Johntool VIP",
		"ERC1155",
		"/images/nfts/0xb44349079cf3ee45a8c9b4986ffbf548ba2c0ecf.png"
	],
	[
		"0xc60578afd77dd4e07269c858a07f4806c341a675",
		"Editions by Tiago",
		"Editions by Tiago",
		"ERC1155",
		"/images/nfts/0xc60578afd77dd4e07269c858a07f4806c341a675.png"
	],
	[
		"0x36c1f502e1c438710df22f55cac00b677f09dfb7",
		"NftyDreams DAO Dreamers",
		"NDDD",
		"ERC1155",
		"/images/nfts/0x36c1f502e1c438710df22f55cac00b677f09dfb7.png"
	],
	[
		"0x3fa1bbe23307fa89c6ac71a13fda8cb36fc6b895",
		"HorrorApeClubYach",
		"HorrorApeClubYach",
		"ERC1155",
		"/images/nfts/0x3fa1bbe23307fa89c6ac71a13fda8cb36fc6b895.png"
	],
	[
		"0xa3a5c1fa196053d5de78acfb98238276e546064d",
		"Mondo Megabits",
		"Mondo Megabits",
		"ERC1155",
		"/images/nfts/0xa3a5c1fa196053d5de78acfb98238276e546064d.png"
	],
	[
		"0x630b722bde1cb528a2c953188e30f86464d14dbd",
		"Skilux Editions",
		"Skilux Editions",
		"ERC1155",
		"/images/nfts/0x630b722bde1cb528a2c953188e30f86464d14dbd.png"
	],
	[
		"0x67b630e70e793d48f1329c00cad9d60977605df5",
		"GAIMIN Genesis",
		"GAIMIN Genesis",
		"ERC1155",
		"/images/nfts/0x67b630e70e793d48f1329c00cad9d60977605df5.png"
	],
	[
		"0x6e9de7816ffeff1ba39106a2584944acf3048d73",
		"Sophie- ONE YEAR in NFTs CELEBRATORY EDITIONS X MINEMANAPTUREL",
		"Sophie- ONE YEAR in NFTs CELEBRATORY EDITIONS X MINEMANAPTUREL",
		"ERC1155",
		"/images/nfts/0x6e9de7816ffeff1ba39106a2584944acf3048d73.png"
	],
	[
		"0x6408d6b6a5788aab313e642d371361966e06fde1",
		"Josh Pierce - Editions",
		"Josh Pierce - Editions",
		"ERC1155",
		"/images/nfts/0x6408d6b6a5788aab313e642d371361966e06fde1.png"
	],
	[
		"0xfcae6b3c114dcb6b4793c6375707f850710b10a7",
		"MH Legacy",
		"MH",
		"ERC1155",
		"/images/nfts/0xfcae6b3c114dcb6b4793c6375707f850710b10a7.png"
	],
	[
		"0x0de14772daa2478ec8a63fc07b17314c2b8d613b",
		"Mari Inks Arts Editions",
		"Mari Inks Arts Editions",
		"ERC1155",
		"/images/nfts/0x0de14772daa2478ec8a63fc07b17314c2b8d613b.png"
	],
	[
		"0x9c8766bfa82af7e9a576072657661ad2f7358c3c",
		"Rium Spaces",
		"Rium Spaces",
		"ERC1155",
		"/images/nfts/0x9c8766bfa82af7e9a576072657661ad2f7358c3c.png"
	],
	[
		"0x39d10d6b06312b4f92602f0d3928b64849430356",
		"Cybertino Official",
		"CYBER_NFT",
		"ERC1155",
		"/images/nfts/0x39d10d6b06312b4f92602f0d3928b64849430356.png"
	],
	[
		"0x0d2310f6ca46deafa23b09b831b162a5070be02d",
		"Limbo Mask ERC1155",
		"Limbo Mask ERC1155",
		"ERC1155",
		"/images/nfts/0x0d2310f6ca46deafa23b09b831b162a5070be02d.png"
	],
	[
		"0x6fd7f17aa203cc2803f51cf9cbcfdbc4166c1ece",
		"Digitaldubs Numba 1",
		"Digitaldubs Numba 1",
		"ERC1155",
		"/images/nfts/0x6fd7f17aa203cc2803f51cf9cbcfdbc4166c1ece.png"
	],
	[
		"0x6eab10a35a905f1525e7d116b5e8348bc83a9577",
		"Traditionist - Dancing Up the Mountain",
		"Traditionist - Dancing Up the Mountain",
		"ERC1155",
		"/images/nfts/0x6eab10a35a905f1525e7d116b5e8348bc83a9577.png"
	],
	[
		"0x7777e46d6168ea12a26350e87dc88f53d40c37f7",
		"RedCactusBG Coin",
		"RedCactusBG Coin",
		"ERC1155",
		"/images/nfts/0x7777e46d6168ea12a26350e87dc88f53d40c37f7.png"
	],
	[
		"0xbf0efe5522c2836dd9035dceb37404a56c5d33cb",
		"We Do A Little Business",
		"We Do A Little Business",
		"ERC1155",
		"/images/nfts/0xbf0efe5522c2836dd9035dceb37404a56c5d33cb.png"
	],
	[
		"0x51d84330e9b0be75ed4fef85d61ebc51fc0aa677",
		"many as one",
		"many as one",
		"ERC1155",
		"/images/nfts/0x51d84330e9b0be75ed4fef85d61ebc51fc0aa677.png"
	],
	[
		"0xd495255ca4a7f0f0dcd1d53f662607764558a5c6",
		"Ethernity's Master Collection",
		"Ethernity's Master Collection",
		"ERC1155",
		"/images/nfts/0xd495255ca4a7f0f0dcd1d53f662607764558a5c6.png"
	],
	[
		"0xde680928e1d4104079efcb4c5b0cf0e156294585",
		"TheWhiskyClub",
		"TheWhiskyClub",
		"ERC1155",
		"/images/nfts/0xde680928e1d4104079efcb4c5b0cf0e156294585.png"
	],
	[
		"0x89908c13f686f798c688d6f9074dc41fd0679a7f",
		"Awakened - Gear Tokens",
		"Gears",
		"ERC1155",
		"/images/nfts/0x89908c13f686f798c688d6f9074dc41fd0679a7f.png"
	],
	[
		"0x497457437e0444e1cf459d9025890949215d2383",
		"Holo Things",
		"HOLO",
		"ERC1155",
		"/images/nfts/0x497457437e0444e1cf459d9025890949215d2383.png"
	],
	[
		"0x4a16a5bc4c7af61fa4eab088d2784f361a8c8f1d",
		"EpsonMusic",
		"EPSON",
		"ERC1155",
		"/images/nfts/0x4a16a5bc4c7af61fa4eab088d2784f361a8c8f1d.png"
	],
	[
		"0x920cc6bf85c293b778fb22c79a391c8b014800dd",
		"IlluminatiNFT Passes",
		"CMTY",
		"ERC1155",
		"/images/nfts/0x920cc6bf85c293b778fb22c79a391c8b014800dd.png"
	],
	[
		"0x0c2dda1340d656737249bf5aedd6e730313e5eae",
		"Geregamo Originals",
		"Geregamo Originals",
		"ERC1155",
		"/images/nfts/0x0c2dda1340d656737249bf5aedd6e730313e5eae.png"
	],
	[
		"0x6236d7fc7301dcba6efd6b39620556ec860eda78",
		"The nightmares of Dystopia",
		"The nightmares of Dystopia",
		"ERC1155",
		"/images/nfts/0x6236d7fc7301dcba6efd6b39620556ec860eda78.png"
	],
	[
		"0xb0e0698f196e16cd353d409fb19e3536076b7cae",
		"KAIJU EXTRACTED DNA",
		"KAIJU EXTRACTED DNA",
		"ERC1155",
		"/images/nfts/0xb0e0698f196e16cd353d409fb19e3536076b7cae.png"
	],
	[
		"0xd6da77a36dea7d576995c8cc72f63627f305b491",
		"wkndfest",
		"wkndfest",
		"ERC1155",
		"/images/nfts/0xd6da77a36dea7d576995c8cc72f63627f305b491.png"
	],
	[
		"0xdafac17fc5d41a89870ea79f857d3278db95e9fb",
		"6a8e9",
		"6a8e9",
		"ERC1155",
		"/images/nfts/0xdafac17fc5d41a89870ea79f857d3278db95e9fb.png"
	],
	[
		"0xb48176c8779559f01eff37834fa563be997ae5e6",
		"Shark Feast",
		"NOMNOM",
		"ERC1155",
		"/images/nfts/0xb48176c8779559f01eff37834fa563be997ae5e6.png"
	],
	[
		"0x792a37cb5ee12bee579ab0aa42458015150a55e6",
		"RohanGanapathyApp",
		"RohanGanapathyApp",
		"ERC1155",
		"/images/nfts/0x792a37cb5ee12bee579ab0aa42458015150a55e6.png"
	],
	[
		"0x08514bed5d76941b113ed4a8935339324c884cd1",
		"Bored ApeYacht CIub Legendary",
		"BAYC",
		"ERC1155",
		"/images/nfts/0x08514bed5d76941b113ed4a8935339324c884cd1.png"
	],
	[
		"0x14385476f7885b80c59712538da4acbc9ccf798c",
		"Unidentified contract - bDdy1eETzn",
		"Unidentified contract - bDdy1eETzn",
		"ERC1155"
	],
	[
		"0x878b2bb947c82d2a5d34c22c34d220ffbf8d6712",
		"Everyrealm Arcade: The Atari Cup Championship Rewards & Collectibles",
		"AAR",
		"ERC1155",
		"/images/nfts/0x878b2bb947c82d2a5d34c22c34d220ffbf8d6712.png"
	],
	[
		"0x02725e3a966f91edcfedba2eaf5f534e0b2bbaed",
		"Tales of Alta",
		"Tales of Alta",
		"ERC1155",
		"/images/nfts/0x02725e3a966f91edcfedba2eaf5f534e0b2bbaed.png"
	],
	[
		"0x61db92d6349cd56d8accd059fd1c12a6bd60fcb2",
		"Steve Walasavage Editions",
		"Steve Walasavage Editions",
		"ERC1155",
		"/images/nfts/0x61db92d6349cd56d8accd059fd1c12a6bd60fcb2.png"
	],
	[
		"0x4483fcb6c4ba5614b5a3b9a2ebf2410901ebe507",
		"Make Somethin Production",
		"Make Somethin Production",
		"ERC1155",
		"/images/nfts/0x4483fcb6c4ba5614b5a3b9a2ebf2410901ebe507.png"
	],
	[
		"0x683776e1768fddbf1ce43e505703f2f4df64fd12",
		"Animus Regnum: Artifacts (Old)",
		"AR:A",
		"ERC1155",
		"/images/nfts/0x683776e1768fddbf1ce43e505703f2f4df64fd12.png"
	],
	[
		"0x96268daf15c91e228db73bc24fb300e6faef3d65",
		"underscore_editions",
		"underscore_editions",
		"ERC1155",
		"/images/nfts/0x96268daf15c91e228db73bc24fb300e6faef3d65.png"
	],
	[
		"0x387e2175f1d4a8ced1b4709a1d6be13869e9d304",
		"Unidentified contract - cL8ycwwCS6",
		"Unidentified contract - cL8ycwwCS6",
		"ERC1155"
	],
	[
		"0xc1f1cd3226e31a323d57056b845ffa19590af689",
		"OXO JOURNEY",
		"OXO JOURNEY",
		"ERC1155",
		"/images/nfts/0xc1f1cd3226e31a323d57056b845ffa19590af689.png"
	],
	[
		"0x2d9220cecc4e968dcf423d093979b59aa1ab351e",
		"DePlayground",
		"DPG",
		"ERC1155",
		"/images/nfts/0x2d9220cecc4e968dcf423d093979b59aa1ab351e.png"
	],
	[
		"0x80cc9bd27b949daa510c2392c13c1847cae80bc9",
		"Benedictions of Luigi Tweak",
		"Benedictions of Luigi Tweak",
		"ERC1155",
		"/images/nfts/0x80cc9bd27b949daa510c2392c13c1847cae80bc9.png"
	],
	[
		"0x66b36a08080239448377f3cfd0f268a2c573efcb",
		"Danilo Fala' // Touch",
		"Danilo Fala' // Touch",
		"ERC1155",
		"/images/nfts/0x66b36a08080239448377f3cfd0f268a2c573efcb.png"
	],
	[
		"0x7dd759879befa2fda7a453f96d92d478a381530d",
		"The Art Mafia Family",
		"The Art Mafia Family",
		"ERC1155",
		"/images/nfts/0x7dd759879befa2fda7a453f96d92d478a381530d.png"
	],
	[
		"0x27687bc6899b30f2b3ac3aefeb2356ca1e97c2a0",
		"Gang Pass",
		"GANG",
		"ERC1155",
		"/images/nfts/0x27687bc6899b30f2b3ac3aefeb2356ca1e97c2a0.png"
	],
	[
		"0x8f2224b40fe0c390bdd2c20132488a29b382fca3",
		"Ethernity's Master Collection",
		"Ethernity's Master Collection",
		"ERC1155",
		"/images/nfts/0x8f2224b40fe0c390bdd2c20132488a29b382fca3.png"
	],
	[
		"0x94f6655cd3078157b07df370572f4f6cdae78771",
		"Ethernity's Master Collection",
		"Ethernity's Master Collection",
		"ERC1155",
		"/images/nfts/0x94f6655cd3078157b07df370572f4f6cdae78771.png"
	],
	[
		"0x5602086c851d1fc6f16250fa1b3b495d9f38594e",
		"NFTerrarium Pixie Dust",
		"DUST",
		"ERC1155",
		"/images/nfts/0x5602086c851d1fc6f16250fa1b3b495d9f38594e.png"
	],
	[
		"0x3003faf15c63f10a582e704b62a618a9d96e2396",
		"Jessica Licata",
		"Jessica Licata",
		"ERC1155",
		"/images/nfts/0x3003faf15c63f10a582e704b62a618a9d96e2396.png"
	],
	[
		"0xa1656eb49e965084a8bf1b1e9c1edb843395dd84",
		"ROTA MintPass",
		"ATSPASS",
		"ERC1155",
		"/images/nfts/0xa1656eb49e965084a8bf1b1e9c1edb843395dd84.png"
	],
	[
		"0x25cf1a1918410ed451e35a59aaa83d72fdae361e",
		"The Seizure Factory",
		"The Seizure Factory",
		"ERC1155",
		"/images/nfts/0x25cf1a1918410ed451e35a59aaa83d72fdae361e.png"
	],
	[
		"0x02d66f9d220553d831b239f00b5841280ddcfaf3",
		"KINGDOM by JakNFT",
		"KINGDOM by JakNFT",
		"ERC1155",
		"/images/nfts/0x02d66f9d220553d831b239f00b5841280ddcfaf3.png"
	],
	[
		"0x948be54925271f06011cb7e929df712f3e73d402",
		"Kozmosi",
		"Kozmosi",
		"ERC1155",
		"/images/nfts/0x948be54925271f06011cb7e929df712f3e73d402.png"
	],
	[
		"0xce984a977fb11a51660034662870735d9eed9cf7",
		"B & W Editions",
		"B & W Editions",
		"ERC1155",
		"/images/nfts/0xce984a977fb11a51660034662870735d9eed9cf7.png"
	],
	[
		"0x87eb1826fa0564e2c1a1c5993337292090c69eb5",
		"Digit(AI)L Works #DIGAIW",
		"Digit(AI)L Works #DIGAIW",
		"ERC1155",
		"/images/nfts/0x87eb1826fa0564e2c1a1c5993337292090c69eb5.png"
	],
	[
		"0xe3f40e388ce57737e7074d957189165b225367a0",
		"Vis X Editions by the Artward3n",
		"Vis X Editions by the Artward3n",
		"ERC1155",
		"/images/nfts/0xe3f40e388ce57737e7074d957189165b225367a0.png"
	],
	[
		"0x490571e17d12334eb61eac154251de2ea16f9213",
		"Your Daytime Fireworks - Firework Packets",
		"Your Daytime Fireworks - Firework Packets",
		"ERC1155",
		"/images/nfts/0x490571e17d12334eb61eac154251de2ea16f9213.png"
	],
	[
		"0x4acc0bec584d6604b50014bdcc674cddf3ed5bc9",
		"SANS - Blockchain Security Summit 2022",
		"SEC554SUMMIT",
		"ERC1155",
		"/images/nfts/0x4acc0bec584d6604b50014bdcc674cddf3ed5bc9.png"
	],
	[
		"0xd42df66453989b61ced12dd6c957ee01a74ba78c",
		"Atomverse Catalyst",
		"Atomverse Catalyst",
		"ERC1155",
		"/images/nfts/0xd42df66453989b61ced12dd6c957ee01a74ba78c.png"
	],
	[
		"0x5d941ad72f7f5434b65b4931fefb4b2ff2a5d4e1",
		"MIB19 Queen of Lust - World Edition",
		"MIB19 Queen of Lust - World Edition",
		"ERC1155",
		"/images/nfts/0x5d941ad72f7f5434b65b4931fefb4b2ff2a5d4e1.png"
	],
	[
		"0x76430db8e1effcce64c5ce1f431afcc81c0bfcc6",
		"A5ht4r Special Editions",
		"A5ht4r Special Editions",
		"ERC1155",
		"/images/nfts/0x76430db8e1effcce64c5ce1f431afcc81c0bfcc6.png"
	],
	[
		"0xe033a5e4e371463a439145e83eea1255c9ce4e15",
		"Cronel",
		"Cronel",
		"ERC1155",
		"/images/nfts/0xe033a5e4e371463a439145e83eea1255c9ce4e15.png"
	],
	[
		"0x47e22659d9ae152975e6cbfa2eed5dc8b75ac545",
		"Fortune Media",
		"Fortune Media",
		"ERC1155",
		"/images/nfts/0x47e22659d9ae152975e6cbfa2eed5dc8b75ac545.png"
	],
	[
		"0x93606cfbe4064a20600d46445bb51414dcce1c50",
		"i love imagination",
		"i love imagination",
		"ERC1155",
		"/images/nfts/0x93606cfbe4064a20600d46445bb51414dcce1c50.png"
	],
	[
		"0x07f7c1fb71a4b3d50f6146d13b53f115afb83236",
		"BYOKey",
		"BYK",
		"ERC1155",
		"/images/nfts/0x07f7c1fb71a4b3d50f6146d13b53f115afb83236.png"
	],
	[
		"0xa7b733640aa244f82c4fbbbcd9de2b6f36d1c621",
		"HQ Ring",
		"HQRING",
		"ERC1155",
		"/images/nfts/0xa7b733640aa244f82c4fbbbcd9de2b6f36d1c621.png"
	],
	[
		"0x7606c5efccaf8b96d22aff98c731d07a2a45c2ab",
		"ESION Collectibles",
		"ESION Collectibles",
		"ERC1155",
		"/images/nfts/0x7606c5efccaf8b96d22aff98c731d07a2a45c2ab.png"
	],
	[
		"0xf7c305b6221c2641bd12e9c2107c47af5f17a31e",
		"Afterorder Manga",
		"Afterorder Manga",
		"ERC1155",
		"/images/nfts/0xf7c305b6221c2641bd12e9c2107c47af5f17a31e.png"
	],
	[
		"0x0c24f4224dd1abdaa907bacc26679f7e06a8a442",
		"InvestMan_JustForFun",
		"JFF",
		"ERC1155",
		"/images/nfts/0x0c24f4224dd1abdaa907bacc26679f7e06a8a442.png"
	],
	[
		"0x5a889ee675f41ae3319c19c720598e5b96c5075f",
		"The Art of Jordan Inglee | Editions",
		"The Art of Jordan Inglee | Editions",
		"ERC1155",
		"/images/nfts/0x5a889ee675f41ae3319c19c720598e5b96c5075f.png"
	],
	[
		"0x692605d657a1040ea60700fcfa07725ccd3f4c93",
		"MFA Memberships",
		"MFA Memberships",
		"ERC1155",
		"/images/nfts/0x692605d657a1040ea60700fcfa07725ccd3f4c93.png"
	],
	[
		"0x3b2c6e6ba3355549fb052b617968e58760d6ded8",
		"PukuriiGirlsSociety",
		"PGS",
		"ERC1155",
		"/images/nfts/0x3b2c6e6ba3355549fb052b617968e58760d6ded8.png"
	],
	[
		"0xa49a0e5ef83cf89ac8aae182f22e6464b229efc8",
		"RTFKT Clone X Forging SZN 1 (PRE-FORGE) ⚒️",
		"RTFKT Clone X Forging SZN 1 (PRE-FORGE) ⚒️",
		"ERC1155",
		"/images/nfts/0xa49a0e5ef83cf89ac8aae182f22e6464b229efc8.png"
	],
	[
		"0x5c55656f0ab4050351e692994b49ac9b1649ede5",
		"ABCDJ EDITIONS",
		"ABCDJ EDITIONS",
		"ERC1155",
		"/images/nfts/0x5c55656f0ab4050351e692994b49ac9b1649ede5.png"
	],
	[
		"0x35d9dc99874a16dd577c70603affba55e580b088",
		"Bahamas Masterminds: NFT",
		"Bahamas Masterminds: NFT",
		"ERC1155",
		"/images/nfts/0x35d9dc99874a16dd577c70603affba55e580b088.png"
	],
	[
		"0x99ad76874d21ab6480ef88238f2f9e38206d8f3b",
		"Metamerican Dream by Metarkitex",
		"Metamerican Dream by Metarkitex",
		"ERC1155",
		"/images/nfts/0x99ad76874d21ab6480ef88238f2f9e38206d8f3b.png"
	],
	[
		"0x63e9bed360c5864486a9281c571c97b0b7606d9f",
		"Bezmiar - Spirits",
		"Bezmiar - Spirits",
		"ERC1155",
		"/images/nfts/0x63e9bed360c5864486a9281c571c97b0b7606d9f.png"
	],
	[
		"0x9585d6a3b39def7f7e424af947b899db80325fd7",
		"Pocket Protect",
		"PU",
		"ERC1155",
		"/images/nfts/0x9585d6a3b39def7f7e424af947b899db80325fd7.png"
	],
	[
		"0xb1778d7aa4a384757800d1429dfcae58dcd6db42",
		"Ayla",
		"Ayla",
		"ERC1155",
		"/images/nfts/0xb1778d7aa4a384757800d1429dfcae58dcd6db42.png"
	],
	[
		"0xbe58c32d419b373af7872b3e70b775e71f3ac90f",
		"Nexus Chronicles",
		"CHRONICLES",
		"ERC1155",
		"/images/nfts/0xbe58c32d419b373af7872b3e70b775e71f3ac90f.png"
	],
	[
		"0x8031b17165b1e2f2c7ccfc93e66f75b20aa6c3fa",
		"Soul Cafe Collectibles",
		"Soul Cafe Collectibles",
		"ERC1155",
		"/images/nfts/0x8031b17165b1e2f2c7ccfc93e66f75b20aa6c3fa.png"
	],
	[
		"0x743459891cced06fbcf574a51c1d92016bc9d039",
		"The Young Abstract Collection",
		"Abstract",
		"ERC1155",
		"/images/nfts/0x743459891cced06fbcf574a51c1d92016bc9d039.png"
	],
	[
		"0xf17fbdb3f86ca04d6e6c9d4f92e21ef7ca0b62d4",
		"Reflections of Simplicity",
		"Reflections of Simplicity",
		"ERC1155",
		"/images/nfts/0xf17fbdb3f86ca04d6e6c9d4f92e21ef7ca0b62d4.png"
	],
	[
		"0xa238ec87e60f0786e97a1a59c349725cfdc6ba09",
		"Playboy Hare Drops",
		"Playboy Hare Drops",
		"ERC1155",
		"/images/nfts/0xa238ec87e60f0786e97a1a59c349725cfdc6ba09.png"
	],
	[
		"0xa0183866eb5b5bf5558d23424c128b43098dcace",
		"PROPERTY DEEDS",
		"PROPERTY DEEDS",
		"ERC1155",
		"/images/nfts/0xa0183866eb5b5bf5558d23424c128b43098dcace.png"
	],
	[
		"0x608b462865dd093c2e013cd8892d6d298aa42089",
		"RUN BULLS",
		"BULL",
		"ERC1155",
		"/images/nfts/0x608b462865dd093c2e013cd8892d6d298aa42089.png"
	],
	[
		"0xe105af90c3aa98b4300a210007362a3b288352fc",
		"Gray Art Editions",
		"Gray Art Editions",
		"ERC1155",
		"/images/nfts/0xe105af90c3aa98b4300a210007362a3b288352fc.png"
	],
	[
		"0x193bf6d6405b9473435d0237c8b81b7703d1d96f",
		"Dr. GM's Wall of Honor",
		"GMH",
		"ERC1155",
		"/images/nfts/0x193bf6d6405b9473435d0237c8b81b7703d1d96f.png"
	],
	[
		"0x3226c014f62e8b0965f306aee63da2f3e3405a2b",
		"Widefield Dreams",
		"Widefield Dreams",
		"ERC1155",
		"/images/nfts/0x3226c014f62e8b0965f306aee63da2f3e3405a2b.png"
	],
	[
		"0xc6f4434996bebeb5f3b04ee6ea975d6c51d30862",
		"CliffBallin Editions",
		"CliffBallin Editions",
		"ERC1155",
		"/images/nfts/0xc6f4434996bebeb5f3b04ee6ea975d6c51d30862.png"
	],
	[
		"0xdf4998b27ce9f49f10a2559cb43c6364e70d9ff8",
		"Ticket To The World",
		"Ticket To The World",
		"ERC1155",
		"/images/nfts/0xdf4998b27ce9f49f10a2559cb43c6364e70d9ff8.png"
	],
	[
		"0x4e8a8c712ceea4290d154c6c869bd1d4d2ef68df",
		"Perv Marketplace",
		"Perv Marketplace",
		"ERC1155",
		"/images/nfts/0x4e8a8c712ceea4290d154c6c869bd1d4d2ef68df.png"
	],
	[
		"0x486d4bd34a66f51f69463671d9d9e950513efe9f",
		"Sword of Bravery DoDoFrens",
		"Sword of Bravery DoDoFrens",
		"ERC1155",
		"/images/nfts/0x486d4bd34a66f51f69463671d9d9e950513efe9f.png"
	],
	[
		"0xf5a897ce33fe116eb8c18535c30905cf8cab5c29",
		"The Drug Editions",
		"The Drug Editions",
		"ERC1155",
		"/images/nfts/0xf5a897ce33fe116eb8c18535c30905cf8cab5c29.png"
	],
	[
		"0x223c30f378168e3bc0b0a671855e5a6af918255a",
		"Jukiverse Resources",
		"JRESOURCE",
		"ERC1155",
		"/images/nfts/0x223c30f378168e3bc0b0a671855e5a6af918255a.png"
	],
	[
		"0x5833eabb517c2881b5ffa04973b5f6ccb407c85c",
		"ThePeepsProject",
		"TPP",
		"ERC1155",
		"/images/nfts/0x5833eabb517c2881b5ffa04973b5f6ccb407c85c.png"
	],
	[
		"0xcaea26bdccfa9090d056b6533a608c6157caa948",
		"Sugar (Genesis)",
		"SUGAR",
		"ERC1155",
		"/images/nfts/0xcaea26bdccfa9090d056b6533a608c6157caa948.png"
	],
	[
		"0xe8786e1cc80f08c76124abe86bf90c4ee4544b0d",
		"JPEG.LAND AVATARS",
		"WTFIA",
		"ERC1155",
		"/images/nfts/0xe8786e1cc80f08c76124abe86bf90c4ee4544b0d.png"
	],
	[
		"0x4badbb81c3fa205bafe0a40fb45d949848817eb7",
		"Holon Test Nodes",
		"Holon Test Nodes",
		"ERC1155",
		"/images/nfts/0x4badbb81c3fa205bafe0a40fb45d949848817eb7.png"
	],
	[
		"0x17d0a7b42c582d7750ea8de219df981363f6170c",
		"PM photography",
		"PM photography",
		"ERC1155",
		"/images/nfts/0x17d0a7b42c582d7750ea8de219df981363f6170c.png"
	],
	[
		"0x55e1d9e238baa0c88478d3ffdd32aa802053401e",
		"NFT Photo History",
		"NFT Photo History",
		"ERC1155",
		"/images/nfts/0x55e1d9e238baa0c88478d3ffdd32aa802053401e.png"
	],
	[
		"0x0d9e3f0f76aea454b694007f7ad79a77d89118d7",
		"LeapN Items: Royal VIP Badges",
		"RYLLPNVIP",
		"ERC1155",
		"/images/nfts/0x0d9e3f0f76aea454b694007f7ad79a77d89118d7.png"
	],
	[
		"0xfcffb9771b5872264de59652684f018b754a06e3",
		"LFT by Lupe Fiasco",
		"LFT",
		"ERC1155",
		"/images/nfts/0xfcffb9771b5872264de59652684f018b754a06e3.png"
	],
	[
		"0x5c36f5928ca801de18aaf9c69007dc567a785b42",
		"Keni's Studio",
		"Keni's Studio",
		"ERC1155",
		"/images/nfts/0x5c36f5928ca801de18aaf9c69007dc567a785b42.png"
	],
	[
		"0xc2faa7cf625b8adadbe423738c269558dc909d41",
		"REMIX! Mint Club",
		"REMIX! Mint Club",
		"ERC1155",
		"/images/nfts/0xc2faa7cf625b8adadbe423738c269558dc909d41.png"
	],
	[
		"0x4f0549f11cc5d883cb642f1899cfe984c391ea89",
		"AverageLife",
		"AverageLife",
		"ERC1155",
		"/images/nfts/0x4f0549f11cc5d883cb642f1899cfe984c391ea89.png"
	],
	[
		"0xfb2e0ef40f552d460098d6d8ac70e6e3ee96f496",
		"Rainicorn Evolved",
		"Rainicorn Evolved",
		"ERC1155",
		"/images/nfts/0xfb2e0ef40f552d460098d6d8ac70e6e3ee96f496.png"
	],
	[
		"0xf84cce79688c527c85cf3d14698155edf22c8eea",
		"Colors of our unique life",
		"Colors of our unique life",
		"ERC1155",
		"/images/nfts/0xf84cce79688c527c85cf3d14698155edf22c8eea.png"
	],
	[
		"0xb7a5ba8b2e6b2eed8542cdaa6bf5b47d01b9a93c",
		"SafetyFirst Emerge Token",
		"SafetyFirst Emerge Token",
		"ERC1155",
		"/images/nfts/0xb7a5ba8b2e6b2eed8542cdaa6bf5b47d01b9a93c.png"
	],
	[
		"0x155cd65705f1de0b80e950d21cc12d10bcd933f5",
		"FVCK CENSORSHIP",
		"FVCK CENSORSHIP",
		"ERC1155",
		"/images/nfts/0x155cd65705f1de0b80e950d21cc12d10bcd933f5.png"
	],
	[
		"0x9522f38d9ec8f273ed37a4071f41838385f94f1f",
		"Teen Rebel Ape Club - Milk Serums",
		"SERUM",
		"ERC1155",
		"/images/nfts/0x9522f38d9ec8f273ed37a4071f41838385f94f1f.png"
	],
	[
		"0x1e64f36246d3e57a884a4872a325e2ff1efd2148",
		"Elighs Music Collection",
		"ELIGH",
		"ERC1155",
		"/images/nfts/0x1e64f36246d3e57a884a4872a325e2ff1efd2148.png"
	],
	[
		"0x13eb431566543050af1de57e1263d88ba403de7b",
		"BS Special Editions",
		"BSSE",
		"ERC1155",
		"/images/nfts/0x13eb431566543050af1de57e1263d88ba403de7b.png"
	],
	[
		"0xd8bc4d3a0b6262a831c7c45a2f7ac51085555666",
		"Lady Ape Club - Collection",
		"Lady Ape Club - Collection",
		"ERC1155",
		"/images/nfts/0xd8bc4d3a0b6262a831c7c45a2f7ac51085555666.png"
	],
	[
		"0x49db4318a11fb8175d68c4378dcfef0f86cec19a",
		"Porromonsters",
		"Eth",
		"ERC1155",
		"/images/nfts/0x49db4318a11fb8175d68c4378dcfef0f86cec19a.png"
	],
	[
		"0xa7a0d37b781aebad7df174d0bf7ece6f34e958b0",
		"Suave - PSSSSD",
		"Suave - PSSSSD",
		"ERC1155",
		"/images/nfts/0xa7a0d37b781aebad7df174d0bf7ece6f34e958b0.png"
	],
	[
		"0x1b84f9aec01e0b09e558c24030716fbe543c7fba",
		"Editions by Pornsoup",
		"Editions by Pornsoup",
		"ERC1155",
		"/images/nfts/0x1b84f9aec01e0b09e558c24030716fbe543c7fba.png"
	],
	[
		"0x873ec7207b9f7bf8672d7d3fd3293ec5fac53705",
		"Unidentified contract - Qy4dG51VBn",
		"Unidentified contract - Qy4dG51VBn",
		"ERC1155"
	],
	[
		"0x3e117f11e1fd875a33332f54b67e1aa64dc05d49",
		"End of Days: Ragnarok Collectibles",
		"End of Days: Ragnarok Collectibles",
		"ERC1155",
		"/images/nfts/0x3e117f11e1fd875a33332f54b67e1aa64dc05d49.png"
	],
	[
		"0x84e0afa333e0bb6b15e03e67631f4e69541aab36",
		"Out of My Story (ETH)",
		"Out of My Story (ETH)",
		"ERC1155",
		"/images/nfts/0x84e0afa333e0bb6b15e03e67631f4e69541aab36.png"
	],
	[
		"0x9f75a77966ade660782f73f822c836c32be6784a",
		"NFTLootBox.com",
		"NFTLootBox.com",
		"ERC1155",
		"/images/nfts/0x9f75a77966ade660782f73f822c836c32be6784a.png"
	],
	[
		"0x27cda43f8246ab6f1f87f8a344c6316a435b1e10",
		"PEACEVOID PIECES",
		"PIECES",
		"ERC1155",
		"/images/nfts/0x27cda43f8246ab6f1f87f8a344c6316a435b1e10.png"
	],
	[
		"0xe0633febf2a237e85c991e3112337ef4cd09dfc4",
		"Fesq's Pieces of Me",
		"Fesq's Pieces of Me",
		"ERC1155",
		"/images/nfts/0xe0633febf2a237e85c991e3112337ef4cd09dfc4.png"
	],
	[
		"0x114eb0911f5f585f1eee825bad4afad1774babbd",
		"FOREVERLANDS Founder",
		"FLFOUNDER",
		"ERC1155",
		"/images/nfts/0x114eb0911f5f585f1eee825bad4afad1774babbd.png"
	],
	[
		"0x4dcc4c89e0daf199789cf7f84430848ce4af9132",
		"Save Your JPEGZZ",
		"Save Your JPEGZZ",
		"ERC1155",
		"/images/nfts/0x4dcc4c89e0daf199789cf7f84430848ce4af9132.png"
	],
	[
		"0x00bccea7a6c4c4ec74a8a07c982b95e59c1760aa",
		"Brian Romero Sketches",
		"Brian Romero Sketches",
		"ERC1155",
		"/images/nfts/0x00bccea7a6c4c4ec74a8a07c982b95e59c1760aa.png"
	],
	[
		"0xf2979d58243d5372caac183e6a500338a726e2a5",
		"Proof of Work Farewell Coin",
		"Proof of Work Farewell Coin",
		"ERC1155",
		"/images/nfts/0xf2979d58243d5372caac183e6a500338a726e2a5.png"
	],
	[
		"0xede6a1f33057f086a7594bbb1ce2947199f578d2",
		"Timeless Fog x Cody Mayer edition",
		"Timeless Fog x Cody Mayer edition",
		"ERC1155",
		"/images/nfts/0xede6a1f33057f086a7594bbb1ce2947199f578d2.png"
	],
	[
		"0x9f2413fb0c5401cf750982345546ce280f0187ed",
		"Seasons by Emanuele Ferrari",
		"Seasons by Emanuele Ferrari",
		"ERC1155",
		"/images/nfts/0x9f2413fb0c5401cf750982345546ce280f0187ed.png"
	],
	[
		"0x7651693dd96eb501beeaf0375eb5ddbc1934e9b8",
		"Before They Expire Vol. 1 by Miles Ryan Harris",
		"Before They Expire Vol. 1 by Miles Ryan Harris",
		"ERC1155",
		"/images/nfts/0x7651693dd96eb501beeaf0375eb5ddbc1934e9b8.png"
	],
	[
		"0xf1384da7f387d1b58f5601790ce0c9e67c1ac476",
		"Pod Fragments",
		"Pod Fragments",
		"ERC1155",
		"/images/nfts/0xf1384da7f387d1b58f5601790ce0c9e67c1ac476.png"
	],
	[
		"0xb9f7de883e11db888cbecd9292d5942695d1ae70",
		"OneOnes Curated Artist",
		"OBM",
		"ERC1155",
		"/images/nfts/0xb9f7de883e11db888cbecd9292d5942695d1ae70.png"
	],
	[
		"0x14244ef8e790706d8605df7969a167d707c6ed1a",
		"Born-In-2020",
		"Born-In-2020",
		"ERC1155",
		"/images/nfts/0x14244ef8e790706d8605df7969a167d707c6ed1a.png"
	],
	[
		"0x0599699bbfc3a92589ad249607f7265c08a1fb61",
		"OzDao Pass v1.0",
		"OzDao Pass v1.0",
		"ERC1155",
		"/images/nfts/0x0599699bbfc3a92589ad249607f7265c08a1fb61.png"
	],
	[
		"0x182d1aa4b4e503cffd90da417aa93cc4acf7c4aa",
		"LOVEBEING EDITIONS",
		"LOVEBEING EDITIONS",
		"ERC1155",
		"/images/nfts/0x182d1aa4b4e503cffd90da417aa93cc4acf7c4aa.png"
	],
	[
		"0x967a969f63c730588a7cfe6c4ddf4d7d18148fa6",
		"I AM AI ARTIST",
		"I AM AI ARTIST",
		"ERC1155",
		"/images/nfts/0x967a969f63c730588a7cfe6c4ddf4d7d18148fa6.png"
	],
	[
		"0xe4760d0c640d36d6fb1e3e94a12c8cbd655b5d2d",
		"NYMPHOMANIAC (EDITION)",
		"NYMPHOMANIAC (EDITION)",
		"ERC1155",
		"/images/nfts/0xe4760d0c640d36d6fb1e3e94a12c8cbd655b5d2d.png"
	],
	[
		"0x79cfcc16816669b3ba3f2f9619edea7a4503f5f4",
		"We Do A Little",
		"We Do A Little",
		"ERC1155",
		"/images/nfts/0x79cfcc16816669b3ba3f2f9619edea7a4503f5f4.png"
	],
	[
		"0x32e02db35d838b01e4025a6fbd8a9822ad07a3f6",
		"BitBoard",
		"BitBoards",
		"ERC1155",
		"/images/nfts/0x32e02db35d838b01e4025a6fbd8a9822ad07a3f6.png"
	],
	[
		"0x973971c88772159eb4743969a9917b46c2976466",
		"Skulls with a cigar",
		"Skulls with a cigar",
		"ERC1155",
		"/images/nfts/0x973971c88772159eb4743969a9917b46c2976466.png"
	],
	[
		"0xd0888b57f3b760129ad6b2f750e30f3f7760ade9",
		"Digital Animals Models Airdrop",
		"DAMA",
		"ERC1155"
	],
	[
		"0x2daad59f5fbd5080084958d98620e2b4abb35ac0",
		"Tweak Editions",
		"NFTweak",
		"ERC1155",
		"/images/nfts/0x2daad59f5fbd5080084958d98620e2b4abb35ac0.png"
	],
	[
		"0xe63be3419d1da94d346bb7ed91acec96bac70f04",
		"NadSam Editions",
		"NadSam Editions",
		"ERC1155",
		"/images/nfts/0xe63be3419d1da94d346bb7ed91acec96bac70f04.png"
	],
	[
		"0x163f5496150e9539fb608cbe0130dd1778edec20",
		"FRACTALZ: Waystones",
		"WAYSTONE",
		"ERC1155",
		"/images/nfts/0x163f5496150e9539fb608cbe0130dd1778edec20.png"
	],
	[
		"0x1ca7228c2984750d4fff8e79a1b0771c4ffd501d",
		"Crappy Dogecoin Doodles",
		"DOGEDOODLE",
		"ERC1155",
		"/images/nfts/0x1ca7228c2984750d4fff8e79a1b0771c4ffd501d.png"
	],
	[
		"0x100b8361baa522d69df839f0089fa1728aaa1aa8",
		"Async Music",
		"Async Music",
		"ERC1155",
		"/images/nfts/0x100b8361baa522d69df839f0089fa1728aaa1aa8.png"
	],
	[
		"0x88b332f3a0083a5f9089fe72b3de6db134a45962",
		"Cyber Bandit Print Passes",
		"CBPP",
		"ERC1155",
		"/images/nfts/0x88b332f3a0083a5f9089fe72b3de6db134a45962.png"
	],
	[
		"0xa57c9ec71eab1aee7a37a09011c7d8c93d353ad8",
		"55Unity: Toxic Power",
		"Toxic Power",
		"ERC1155",
		"/images/nfts/0xa57c9ec71eab1aee7a37a09011c7d8c93d353ad8.png"
	],
	[
		"0x7f81dfa7c95d475710f7574bea16dfd2ace7ec29",
		"LATENCY",
		"LATENCY",
		"ERC1155",
		"/images/nfts/0x7f81dfa7c95d475710f7574bea16dfd2ace7ec29.png"
	],
	[
		"0xfac52402274670eb7d1054db94f4d7a62cb65902",
		"EDITIONS X YAKOB",
		"EDITIONS X YAKOB",
		"ERC1155",
		"/images/nfts/0xfac52402274670eb7d1054db94f4d7a62cb65902.png"
	],
	[
		"0xdb2803ca59bee63793f5e8cd9f2e1326b7450350",
		"Unidentified contract - NlfFStARzi",
		"Unidentified contract - NlfFStARzi",
		"ERC1155"
	],
	[
		"0x40eacc95097007fcac23a8ba33323bdfcd2dea7e",
		"EightBit Loot",
		"EBL",
		"ERC1155",
		"/images/nfts/0x40eacc95097007fcac23a8ba33323bdfcd2dea7e.png"
	],
	[
		"0xf04127b3f415734bb3b59f31169b5e5d434e3520",
		"PuzlWorld Land",
		"PUZLWLND",
		"ERC1155",
		"/images/nfts/0xf04127b3f415734bb3b59f31169b5e5d434e3520.png"
	],
	[
		"0x9af8719420d82262caa8f90f7ea15c8870dc65f4",
		"Metaciples Power-Pass",
		"AM: M",
		"ERC1155",
		"/images/nfts/0x9af8719420d82262caa8f90f7ea15c8870dc65f4.png"
	],
	[
		"0x9b45c979d1ffe99aae1aa5a9b27888e6b9c39c30",
		"NFT Concerts Production Team",
		"NFTCPT",
		"ERC1155",
		"/images/nfts/0x9b45c979d1ffe99aae1aa5a9b27888e6b9c39c30.png"
	],
	[
		"0x49c2086b63823c4899d3e28a843413ab26d47a7f",
		"Pixels Exploration",
		"Pixels Exploration",
		"ERC1155",
		"/images/nfts/0x49c2086b63823c4899d3e28a843413ab26d47a7f.png"
	],
	[
		"0xbee340c347d5acd4bc345d0bdfe9ea5cf45db13a",
		"KryptoNauts by Nicebleed",
		"NAUT",
		"ERC1155",
		"/images/nfts/0xbee340c347d5acd4bc345d0bdfe9ea5cf45db13a.png"
	],
	[
		"0xf3258d7efdc60e75c875014b1a9371492e9ace52",
		"Blue Editions",
		"Blue Editions",
		"ERC1155",
		"/images/nfts/0xf3258d7efdc60e75c875014b1a9371492e9ace52.png"
	],
	[
		"0x0f24236b665ffca0bcf5d896db04553d30fcf0d2",
		"A0K1VERSE Furniture",
		"A0K1VERSE Furniture",
		"ERC1155",
		"/images/nfts/0x0f24236b665ffca0bcf5d896db04553d30fcf0d2.png"
	],
	[
		"0x21819da7afa4089217c62f1d971fb1397b1f50e4",
		"Sleepy Serums",
		"SRS",
		"ERC1155",
		"/images/nfts/0x21819da7afa4089217c62f1d971fb1397b1f50e4.png"
	],
	[
		"0x8294ce22ae538344f4546d13c07f40d0bb61cdd8",
		"CryptoBar P2P  Membership Pass V2",
		"BARP2P",
		"ERC1155",
		"/images/nfts/0x8294ce22ae538344f4546d13c07f40d0bb61cdd8.png"
	],
	[
		"0x6c4577c5a013a8d789c2dd003a3afbb1efaa2057",
		"Doctor-G MadLab",
		"Doctor-G MadLab",
		"ERC1155",
		"/images/nfts/0x6c4577c5a013a8d789c2dd003a3afbb1efaa2057.png"
	],
	[
		"0x737deb433be034c37c05fb30dc5a328940fd9871",
		"VICE EDITIONS",
		"VICE EDITIONS",
		"ERC1155",
		"/images/nfts/0x737deb433be034c37c05fb30dc5a328940fd9871.png"
	],
	[
		"0xefcc6cf3c18a62c093c29bcd813abd50dcc6519a",
		"META ELEMENTS FOR SCA",
		"META ELEMENTS FOR SCA",
		"ERC1155",
		"/images/nfts/0xefcc6cf3c18a62c093c29bcd813abd50dcc6519a.png"
	],
	[
		"0xc1c48edb07d4209312430fc2b02d03e7c4be9ef9",
		"Gradiva - FREE MINT",
		"Gradiva - FREE MINT",
		"ERC1155",
		"/images/nfts/0xc1c48edb07d4209312430fc2b02d03e7c4be9ef9.png"
	],
	[
		"0x2fb6e962283c3ffc048183913bcbf4626ac1a352",
		"Angry Ape Army Armory Collection",
		"AAAARM",
		"ERC1155",
		"/images/nfts/0x2fb6e962283c3ffc048183913bcbf4626ac1a352.png"
	],
	[
		"0xd0c1411f038db980f6c268d3cc0ef8d32127ad52",
		"Nomads by .earth",
		"NOMAD",
		"ERC1155",
		"/images/nfts/0xd0c1411f038db980f6c268d3cc0ef8d32127ad52.png"
	],
	[
		"0x941c34f1f4f6fb5cdec522427244061b007b445c",
		"bananakin bunches",
		"bananakin bunches",
		"ERC1155",
		"/images/nfts/0x941c34f1f4f6fb5cdec522427244061b007b445c.png"
	],
	[
		"0x00d63a58558f5e431b89984cea5a3a8ba7847e6a",
		"NFT LAND by Satoshi's Mom",
		"NFTLAND",
		"ERC1155",
		"/images/nfts/0x00d63a58558f5e431b89984cea5a3a8ba7847e6a.png"
	],
	[
		"0x918581bacf81b9fc89eefaa7b2ad35e715d88fe8",
		"#EDITIONSX BY HANNES WINDRATH",
		"#EDITIONSX BY HANNES WINDRATH",
		"ERC1155",
		"/images/nfts/0x918581bacf81b9fc89eefaa7b2ad35e715d88fe8.png"
	],
	[
		"0x2e00f977d778787d65bd303ada2fde472c1d9158",
		"Satoshi Island Land NFT Deeds",
		"SILD",
		"ERC1155",
		"/images/nfts/0x2e00f977d778787d65bd303ada2fde472c1d9158.png"
	],
	[
		"0x6a32e74eb81429dbbe6313fdbbc61b4544b2149f",
		"MUTANT TRA$H NOTHIN CLUB",
		"MUTANT TRA$H NOTHIN CLUB",
		"ERC1155",
		"/images/nfts/0x6a32e74eb81429dbbe6313fdbbc61b4544b2149f.png"
	],
	[
		"0xb815e248745453c81c6aabe3f18a19d59c9f942a",
		"LUPIN THE III RD x 1BLOCK Special card",
		"OBD",
		"ERC1155",
		"/images/nfts/0xb815e248745453c81c6aabe3f18a19d59c9f942a.png"
	],
	[
		"0xed95fb27d335033c982921ccd39bcda3f995974b",
		"Undra.game",
		"Undra.game",
		"ERC1155",
		"/images/nfts/0xed95fb27d335033c982921ccd39bcda3f995974b.png"
	],
	[
		"0x0ca57fc2a123f1367f8bc60206f7b19940590aca",
		"Genesis Greenz Pass",
		"GGP",
		"ERC1155",
		"/images/nfts/0x0ca57fc2a123f1367f8bc60206f7b19940590aca.png"
	],
	[
		"0x4d8679083f77a44449162a0a7ce500f77ca406b8",
		"Pudgy Halloween",
		"Pudgy Halloween",
		"ERC1155",
		"/images/nfts/0x4d8679083f77a44449162a0a7ce500f77ca406b8.png"
	],
	[
		"0xe7afb4189603a901b74f8085f775931a60996166",
		"eBoy Blockbob",
		"BLOB",
		"ERC1155",
		"/images/nfts/0xe7afb4189603a901b74f8085f775931a60996166.png"
	],
	[
		"0x1c2b799e3ed0eec1d2ed874255ddf3f73301ccf1",
		"76 Series",
		"76 Series",
		"ERC1155",
		"/images/nfts/0x1c2b799e3ed0eec1d2ed874255ddf3f73301ccf1.png"
	],
	[
		"0xd72132c4d8c1897c8f53ba2ba90ed50a144688e0",
		"Heavy Metal x PizzaBot",
		"HMxPBOT",
		"ERC1155",
		"/images/nfts/0xd72132c4d8c1897c8f53ba2ba90ed50a144688e0.png"
	],
	[
		"0xd755d554c547a53a4ebe8a1f02778c583a01d08e",
		"ARKE Originals",
		"ARKEORIGIN",
		"ERC1155",
		"/images/nfts/0xd755d554c547a53a4ebe8a1f02778c583a01d08e.png"
	],
	[
		"0xff4a3357520c24d2da6813fe65aca7f6e2078b3a",
		"Human Canvas by Mehdi Candau",
		"Human Canvas by Mehdi Candau",
		"ERC1155",
		"/images/nfts/0xff4a3357520c24d2da6813fe65aca7f6e2078b3a.png"
	],
	[
		"0x41d2d9195489a527fcaa86f1ab32087b51b40b23",
		"Okina Access Pass",
		"OKINA",
		"ERC1155",
		"/images/nfts/0x41d2d9195489a527fcaa86f1ab32087b51b40b23.png"
	],
	[
		"0x966cfb33d7eb4776ace4c7b22ae2d0af8aa913ad",
		"Editions by Dipanjan Pal",
		"Editions by Dipanjan Pal",
		"ERC1155",
		"/images/nfts/0x966cfb33d7eb4776ace4c7b22ae2d0af8aa913ad.png"
	],
	[
		"0xf15176bc2a8d95102e21641fc0c3b1a9990d2d2d",
		"APE DAO Legends",
		"APE DAO Legends",
		"ERC1155",
		"/images/nfts/0xf15176bc2a8d95102e21641fc0c3b1a9990d2d2d.png"
	],
	[
		"0x22ea856cac6ee38173948954d4073bdccccf8cb2",
		"LeapN Plots: GoldN VIP & Plot",
		"LPNVIP",
		"ERC1155",
		"/images/nfts/0x22ea856cac6ee38173948954d4073bdccccf8cb2.png"
	],
	[
		"0xcd62653be0bfc03563b39d683ef2d3f6e0f774d2",
		"Eric Pare Junk",
		"Eric Pare Junk",
		"ERC1155",
		"/images/nfts/0xcd62653be0bfc03563b39d683ef2d3f6e0f774d2.png"
	],
	[
		"0xf2a9904458d938be0a5b9410ce32af1b3ee00cea",
		"Thanks for Simping",
		"Thanks for Simping",
		"ERC1155",
		"/images/nfts/0xf2a9904458d938be0a5b9410ce32af1b3ee00cea.png"
	],
	[
		"0xbecaa934bafb9f9058562666ca4dd5f8b49390a5",
		"TMTZZ Art color GIF's",
		"TMTZZ Art color GIF's",
		"ERC1155",
		"/images/nfts/0xbecaa934bafb9f9058562666ca4dd5f8b49390a5.png"
	],
	[
		"0x255d875a0a51813a39f706321cb5aac8706f4df7",
		"TYPES OF TEMPTATION",
		"TYPES OF TEMPTATION",
		"ERC1155",
		"/images/nfts/0x255d875a0a51813a39f706321cb5aac8706f4df7.png"
	],
	[
		"0xb32578d7a8cf1a213bdab22eaf99bd742ce187c5",
		"ratRace Nibbles",
		"NIBBLE",
		"ERC1155",
		"/images/nfts/0xb32578d7a8cf1a213bdab22eaf99bd742ce187c5.png"
	],
	[
		"0x22c36bfdcef207f9c0cc941936eff94d4246d14a",
		"Bored Ape Chemistry Club",
		"Bored Ape Chemistry Club",
		"ERC1155",
		"/images/nfts/0x22c36bfdcef207f9c0cc941936eff94d4246d14a.png"
	],
	[
		"0x4365b5313efbff83e8e112a8519998e6677ebb70",
		"Hafftka's Bullpen",
		"Hafftka's Bullpen",
		"ERC1155",
		"/images/nfts/0x4365b5313efbff83e8e112a8519998e6677ebb70.png"
	],
	[
		"0x2d3fa6f1bb6c8193b5f70ad18cf16c92f1211cab",
		"KoDAO",
		"KODAO",
		"ERC1155",
		"/images/nfts/0x2d3fa6f1bb6c8193b5f70ad18cf16c92f1211cab.png"
	],
	[
		"0xd954c401c7a4213fb70ad1b8773befe1d5f4214e",
		"Thief Pass",
		"TP",
		"ERC1155",
		"/images/nfts/0xd954c401c7a4213fb70ad1b8773befe1d5f4214e.png"
	],
	[
		"0x2d2353d66a00869235356a1e8c31416a489a6bf6",
		"Crude Editions",
		"Crude Editions",
		"ERC1155",
		"/images/nfts/0x2d2353d66a00869235356a1e8c31416a489a6bf6.png"
	],
	[
		"0x4fb48c4da0a633aa9de199ad43bf70e316310541",
		"RTFKT SKIN VIAL: EVO X",
		"RTFKT SKIN VIAL: EVO X",
		"ERC1155",
		"/images/nfts/0x4fb48c4da0a633aa9de199ad43bf70e316310541.png"
	],
	[
		"0x27c6978cd8f5f7ff0eb635f2c7c8065107c5cf7f",
		"Gift Editions by Fer",
		"Gift Editions by Fer",
		"ERC1155",
		"/images/nfts/0x27c6978cd8f5f7ff0eb635f2c7c8065107c5cf7f.png"
	],
	[
		"0xba353c71360243fae0e06d72e564279ea2a6181c",
		"Lucidia Dreams",
		"SRLD",
		"ERC1155",
		"/images/nfts/0xba353c71360243fae0e06d72e564279ea2a6181c.png"
	],
	[
		"0xbfb67f38120d583de5ac6669321ed32379cbb753",
		"Cant sleep AI will eat me.",
		"OMFGAI",
		"ERC1155",
		"/images/nfts/0xbfb67f38120d583de5ac6669321ed32379cbb753.png"
	],
	[
		"0x16d6272f9181bfa35bf4018f163427a6a74b80f7",
		"RunGoodGang Poker Pass",
		"RunGoodGang Poker Pass",
		"ERC1155",
		"/images/nfts/0x16d6272f9181bfa35bf4018f163427a6a74b80f7.png"
	],
	[
		"0x3770bfdbb27a3d54eead59e6fa82377dc291d399",
		"Mythical Adventures",
		"Mythical Adventures",
		"ERC1155",
		"/images/nfts/0x3770bfdbb27a3d54eead59e6fa82377dc291d399.png"
	],
	[
		"0x67c66a5c36766ad11a16359e262c65a692da4923",
		"oSnipe Genesis Pass (MINT IS LIVE)",
		"SNIPE",
		"ERC1155",
		"/images/nfts/0x67c66a5c36766ad11a16359e262c65a692da4923.png"
	],
	[
		"0x577f994d37f449aa9528152bff87ed34b1c36877",
		"Ai'Lunaverse",
		"Ai'Lunaverse",
		"ERC1155",
		"/images/nfts/0x577f994d37f449aa9528152bff87ed34b1c36877.png"
	],
	[
		"0x9622fa8bb2de6031bd7dfe6dc11f9c78958d97f8",
		"HandOfMind",
		"HandOfMind",
		"ERC1155",
		"/images/nfts/0x9622fa8bb2de6031bd7dfe6dc11f9c78958d97f8.png"
	],
	[
		"0xafae6749214c1468bbb71bcf2cf781440d8dd658",
		"UltraDAO Street Beast",
		"ULTRA",
		"ERC1155",
		"/images/nfts/0xafae6749214c1468bbb71bcf2cf781440d8dd658.png"
	],
	[
		"0x1bb7034331920535552f12c9598471254d4cd01c",
		"Paintings by Corina Daniela Obertas",
		"Paintings by Corina Daniela Obertas",
		"ERC1155",
		"/images/nfts/0x1bb7034331920535552f12c9598471254d4cd01c.png"
	],
	[
		"0xe2bb6deac4777b9fd90921584e0383f8d77cfa60",
		"A Cup of Sea",
		"A Cup of Sea",
		"ERC1155",
		"/images/nfts/0xe2bb6deac4777b9fd90921584e0383f8d77cfa60.png"
	],
	[
		"0xa44d6f0eba63a4a7ae268ed30c3569a7b8cf59bb",
		"Girlies Art Drops",
		"RAW",
		"ERC1155",
		"/images/nfts/0xa44d6f0eba63a4a7ae268ed30c3569a7b8cf59bb.png"
	],
	[
		"0x9b26616ee0cbd466e072e86a99b4bfa4a3489bf4",
		"DIGITAL TRASH V2",
		"TRASH",
		"ERC1155",
		"/images/nfts/0x9b26616ee0cbd466e072e86a99b4bfa4a3489bf4.png"
	],
	[
		"0xa9ac06f246907f356e2906aff31ec501bf39c9a9",
		"Tanuki Multiple Kind",
		"TMK",
		"ERC1155",
		"/images/nfts/0xa9ac06f246907f356e2906aff31ec501bf39c9a9.png"
	],
	[
		"0x519d1346214c8f92a2315d4097d74b140fc46fba",
		"lala_art",
		"lala_art",
		"ERC1155",
		"/images/nfts/0x519d1346214c8f92a2315d4097d74b140fc46fba.png"
	],
	[
		"0x4c92f88ab3a1659fa646810f4bb3a07cb8af4e13",
		"Banana Fund",
		"GAT",
		"ERC1155",
		"/images/nfts/0x4c92f88ab3a1659fa646810f4bb3a07cb8af4e13.png"
	],
	[
		"0xe948d9d3b97606304a8db0538bdd0b6465c9dfcb",
		"the littles prize hut",
		"TLAP",
		"ERC1155",
		"/images/nfts/0xe948d9d3b97606304a8db0538bdd0b6465c9dfcb.png"
	],
	[
		"0xb67786f6191fc044a5b7a902ac26b573ae632a5e",
		"Hoverchair Collection",
		"Hoverchair Collection",
		"ERC1155",
		"/images/nfts/0xb67786f6191fc044a5b7a902ac26b573ae632a5e.png"
	],
	[
		"0xe8b720f8f5f24fef5dbe030a041fa18d37695941",
		"Crypto Collective NFT",
		"CCNFT",
		"ERC1155",
		"/images/nfts/0xe8b720f8f5f24fef5dbe030a041fa18d37695941.png"
	],
	[
		"0x7db6f6cca9d08afbf4e139e37eddcde3c911d47b",
		"Lofi Littles",
		"Lofi Littles",
		"ERC1155",
		"/images/nfts/0x7db6f6cca9d08afbf4e139e37eddcde3c911d47b.png"
	],
	[
		"0x33b83b6d3179dcb4094c685c2418cab06372ed89",
		"ETH-MEN RELOADED",
		"EM2",
		"ERC1155",
		"/images/nfts/0x33b83b6d3179dcb4094c685c2418cab06372ed89.png"
	],
	[
		"0xdfeda9c39b3571fe1d403e381ebc06e9d5d85fb5",
		"Afterparty MintPass",
		"APMP",
		"ERC1155",
		"/images/nfts/0xdfeda9c39b3571fe1d403e381ebc06e9d5d85fb5.png"
	],
	[
		"0x2075a0555ce329ddddeae38077b068dc5595567c",
		"Sakura Sunset by ZENFT",
		"SAKURA",
		"ERC1155",
		"/images/nfts/0x2075a0555ce329ddddeae38077b068dc5595567c.png"
	],
	[
		"0x79dffce3b25ff02208149ecfc72630e5a8eba701",
		"OUTLANDER Editions",
		"OUTLANDER Editions",
		"ERC1155",
		"/images/nfts/0x79dffce3b25ff02208149ecfc72630e5a8eba701.png"
	],
	[
		"0x129eb6fc06a39239f106d3f459d8f8c8bad8c036",
		"DIGESTIVO ESPLOSIVO SPECIAL EDITION 25",
		"DIGESTIVO ESPLOSIVO SPECIAL EDITION 25",
		"ERC1155",
		"/images/nfts/0x129eb6fc06a39239f106d3f459d8f8c8bad8c036.png"
	],
	[
		"0x9531fbe2807f8c06ed1b89f6ce870407ced12904",
		"NUDE EDITIONS BY MIND DISTURBIA",
		"NUDE EDITIONS BY MIND DISTURBIA",
		"ERC1155",
		"/images/nfts/0x9531fbe2807f8c06ed1b89f6ce870407ced12904.png"
	],
	[
		"0xd00783780ffefa4d69839afea19d55143cf267a9",
		"Nostalgic Tokens",
		"Nostalgic Tokens",
		"ERC1155",
		"/images/nfts/0xd00783780ffefa4d69839afea19d55143cf267a9.png"
	],
	[
		"0xc3ce0b793d15a4777f96afb4c03744c9a25583d0",
		"wiwizn by qubibi",
		"wiwizn by qubibi",
		"ERC1155",
		"/images/nfts/0xc3ce0b793d15a4777f96afb4c03744c9a25583d0.png"
	],
	[
		"0xe46373f99a6dad918d85307ad932f7f0de80f669",
		"1000 Hours Editions",
		"1000 Hours Editions",
		"ERC1155",
		"/images/nfts/0xe46373f99a6dad918d85307ad932f7f0de80f669.png"
	],
	[
		"0x44585b6a4194d16926c90d981b8719c32dae0768",
		"Feels Good Editions",
		"Feels Good Editions",
		"ERC1155",
		"/images/nfts/0x44585b6a4194d16926c90d981b8719c32dae0768.png"
	],
	[
		"0xc64c152078ee7d6d0367f038b8429272c815e528",
		"Omniya Mint Pass",
		"OP",
		"ERC1155",
		"/images/nfts/0xc64c152078ee7d6d0367f038b8429272c815e528.png"
	],
	[
		"0xf9f91c0eddd3923f6b091a1636462a532a970566",
		"Hamburg Nights",
		"Hamburg Nights",
		"ERC1155",
		"/images/nfts/0xf9f91c0eddd3923f6b091a1636462a532a970566.png"
	],
	[
		"0x442ee5043b0d8b12c1eb4d222fbb81cb232a2add",
		"Ancestral Seedling by ZENFT",
		"Ancestral Seedling by ZENFT",
		"ERC1155",
		"/images/nfts/0x442ee5043b0d8b12c1eb4d222fbb81cb232a2add.png"
	],
	[
		"0x681ba8afd17f5eb9b623cc787229eb378c4e7233",
		"Paradise Trippies Island Passes",
		"TRIPPYEGG",
		"ERC1155",
		"/images/nfts/0x681ba8afd17f5eb9b623cc787229eb378c4e7233.png"
	],
	[
		"0x58d7ba3a20e5439f05484bc865e1784f8636a7d3",
		"Quark Universe",
		"QUN",
		"ERC1155",
		"/images/nfts/0x58d7ba3a20e5439f05484bc865e1784f8636a7d3.png"
	],
	[
		"0xa8cd3b8e85558602cad3ca9b9a5d11586789913c",
		"The Outsider Collective",
		"TOSC",
		"ERC1155",
		"/images/nfts/0xa8cd3b8e85558602cad3ca9b9a5d11586789913c.png"
	],
	[
		"0xe0733d444d0a6d94b952aef648b341c75426237f",
		"maybe this",
		"maybe this",
		"ERC1155",
		"/images/nfts/0xe0733d444d0a6d94b952aef648b341c75426237f.png"
	],
	[
		"0x044fbd15f29cda0992b85e98ff371a2162ba8e43",
		"Pieces - Karen Navarro",
		"Pieces - Karen Navarro",
		"ERC1155",
		"/images/nfts/0x044fbd15f29cda0992b85e98ff371a2162ba8e43.png"
	],
	[
		"0x4776defcf622c60c6419cccc9ee9e9042fadf3f7",
		"Coinage Media",
		"RAW",
		"ERC1155",
		"/images/nfts/0x4776defcf622c60c6419cccc9ee9e9042fadf3f7.png"
	],
	[
		"0xcd8b11dcdb4c8f28ccadff38eaf314c43e564502",
		"B&W Super Series",
		"B&W Super Series",
		"ERC1155",
		"/images/nfts/0xcd8b11dcdb4c8f28ccadff38eaf314c43e564502.png"
	],
	[
		"0x68bc69b8001e15d350d8300aa2e749724b3d4888",
		"PlayerOne Blueprint",
		"Blueprint",
		"ERC1155",
		"/images/nfts/0x68bc69b8001e15d350d8300aa2e749724b3d4888.png"
	],
	[
		"0xac2ebaf72aa89805f2bc5829003b2c246f3867ce",
		"6 LEVELS OF TEMPTATION",
		"6 LEVELS OF TEMPTATION",
		"ERC1155",
		"/images/nfts/0xac2ebaf72aa89805f2bc5829003b2c246f3867ce.png"
	],
	[
		"0xbd58011d65fc37dc6c6d98d9c47cf94dc71e1084",
		"LICENSE TO SHILL",
		"LICENSE TO SHILL",
		"ERC1155",
		"/images/nfts/0xbd58011d65fc37dc6c6d98d9c47cf94dc71e1084.png"
	],
	[
		"0x944d4e277f7bfe5c6eeb4de96d880460b5955e7c",
		"Dezuki Clubs",
		"Dezuki Clubs",
		"ERC1155"
	],
	[
		"0x6b194640b63bdc348ece750a6c90a7105ca28850",
		"Matej Sefcik editions",
		"Matej Sefcik editions",
		"ERC1155",
		"/images/nfts/0x6b194640b63bdc348ece750a6c90a7105ca28850.png"
	],
	[
		"0xcb418f137d9b511a8c60b3f861a5e1854d4d43fc",
		"Historical Figures Series II",
		"Historical Figures Series II",
		"ERC1155",
		"/images/nfts/0xcb418f137d9b511a8c60b3f861a5e1854d4d43fc.png"
	],
	[
		"0x0e8995c423d0bbca9938d042c8bceddb5784a511",
		"Block of Horror: Prophet's Key",
		"BOHP",
		"ERC1155",
		"/images/nfts/0x0e8995c423d0bbca9938d042c8bceddb5784a511.png"
	],
	[
		"0xb9be9e2ed3ae1c230e3fa9b8644944f8c646ddfc",
		"Rach Stewart Limited Editions",
		"Rach Stewart Limited Editions",
		"ERC1155",
		"/images/nfts/0xb9be9e2ed3ae1c230e3fa9b8644944f8c646ddfc.png"
	],
	[
		"0x9973d8a86bf054227297eadb7e3adaba11b441b0",
		"Knife Token",
		"Knife Token",
		"ERC1155",
		"/images/nfts/0x9973d8a86bf054227297eadb7e3adaba11b441b0.png"
	],
	[
		"0xe53c83041bf3549ef4266365cd54b25fe6fc00f6",
		"Perv Freebies",
		"Perv Freebies",
		"ERC1155",
		"/images/nfts/0xe53c83041bf3549ef4266365cd54b25fe6fc00f6.png"
	],
	[
		"0x8a33436719cab2588be8cb8a1992ba0b1fff14f2",
		"Brad Baldwin Editions",
		"Brad Baldwin Editions",
		"ERC1155",
		"/images/nfts/0x8a33436719cab2588be8cb8a1992ba0b1fff14f2.png"
	],
	[
		"0x6150d61cc5ed17602f5a04784b429ef38356b0c9",
		"finding beauty in decay by chemical messiah",
		"finding beauty in decay by chemical messiah",
		"ERC1155",
		"/images/nfts/0x6150d61cc5ed17602f5a04784b429ef38356b0c9.png"
	],
	[
		"0x5923ef0e180d286c3441cb9879ebab06bb2182c9",
		"OP Sumo Club (Chanko Gone Off)",
		"OP Sumo Club (Chanko Gone Off)",
		"ERC1155",
		"/images/nfts/0x5923ef0e180d286c3441cb9879ebab06bb2182c9.png"
	],
	[
		"0x08a4c390a86d35db1bf16ac7073c93316a296054",
		"SKuzmin Photography",
		"SKuzmin Photography",
		"ERC1155",
		"/images/nfts/0x08a4c390a86d35db1bf16ac7073c93316a296054.png"
	],
	[
		"0x2c50cdea5ac296741bb87358b2005018ee172cfa",
		"Galaktic Gifts",
		"G-Gifts",
		"ERC1155",
		"/images/nfts/0x2c50cdea5ac296741bb87358b2005018ee172cfa.png"
	],
	[
		"0xa32be11039675fc5c9c1f0fea13d92695bf9a62a",
		"Ethaliens Star Shop",
		"ESS",
		"ERC1155",
		"/images/nfts/0xa32be11039675fc5c9c1f0fea13d92695bf9a62a.png"
	],
	[
		"0xa02852f45607f30852b5be33fe37f8ad6424fc73",
		"CR46 - Editions",
		"CR46 - Editions",
		"ERC1155",
		"/images/nfts/0xa02852f45607f30852b5be33fe37f8ad6424fc73.png"
	],
	[
		"0x37d1526348b17a71810fe80edf21c1684261b234",
		"The Wardrobe by MiniMetamon",
		"Minimetamon-WC",
		"ERC1155",
		"/images/nfts/0x37d1526348b17a71810fe80edf21c1684261b234.png"
	],
	[
		"0x97912147af9d9a1848cbc196484e24ed5eb4c2f5",
		"NFT Pirate Radio",
		"NFT Pirate Radio",
		"ERC1155",
		"/images/nfts/0x97912147af9d9a1848cbc196484e24ed5eb4c2f5.png"
	],
	[
		"0x479cecc7a51296ae540f72f7c5abba94dc76307c",
		"DollAir",
		"DollAir",
		"ERC1155",
		"/images/nfts/0x479cecc7a51296ae540f72f7c5abba94dc76307c.png"
	],
	[
		"0x973cda796f8cc05c4bf22964b13035125060f0d4",
		"MonEditions",
		"MonEditions",
		"ERC1155",
		"/images/nfts/0x973cda796f8cc05c4bf22964b13035125060f0d4.png"
	],
	[
		"0x29e9853b325945ca64da906c81b895ebb9b7f427",
		"WPL GOLDEN HAND",
		"GOLDENHAND",
		"ERC1155",
		"/images/nfts/0x29e9853b325945ca64da906c81b895ebb9b7f427.png"
	],
	[
		"0xf0acf6d8c28bcd028dea57f3edbf0ba75b35f163",
		"Roadmap By Dariush",
		"RAW",
		"ERC1155",
		"/images/nfts/0xf0acf6d8c28bcd028dea57f3edbf0ba75b35f163.png"
	],
	[
		"0xcfe4499258541cd5e0a00600dc5db1c3dfe4de23",
		"Exploding Heads",
		"Exploding Heads",
		"ERC1155",
		"/images/nfts/0xcfe4499258541cd5e0a00600dc5db1c3dfe4de23.png"
	],
	[
		"0x734203220eb0ce893003a2b251e0dcaab230c80a",
		"HODL Master - SPELL",
		"HODL Master - SPELL",
		"ERC1155",
		"/images/nfts/0x734203220eb0ce893003a2b251e0dcaab230c80a.png"
	],
	[
		"0x471f366d3a0242e3577e6a2e7f46f3211e05835a",
		"hawkward editions",
		"hawkward editions",
		"ERC1155",
		"/images/nfts/0x471f366d3a0242e3577e6a2e7f46f3211e05835a.png"
	],
	[
		"0x13db389fba60f28379b83aedcd9dae06d17a9ce8",
		"Third Web Test 1",
		"Hii21",
		"ERC1155",
		"/images/nfts/0x13db389fba60f28379b83aedcd9dae06d17a9ce8.png"
	],
	[
		"0x8a341fe4a8eadd7c441aacf0a827266b8ec36fdd",
		"Mega OG Chapters",
		"MGs",
		"ERC1155",
		"/images/nfts/0x8a341fe4a8eadd7c441aacf0a827266b8ec36fdd.png"
	],
	[
		"0xc466e2f98f95cc4cde31b134906f59e8264c1be0",
		"Genie.xyz",
		"Genie.xyz",
		"ERC1155",
		"/images/nfts/0xc466e2f98f95cc4cde31b134906f59e8264c1be0.png"
	],
	[
		"0x5a0495b3ed543f948f807a8e666ee40f194ddd41",
		"Yoshiki Yamazumi -Edition-",
		"YYE",
		"ERC1155",
		"/images/nfts/0x5a0495b3ed543f948f807a8e666ee40f194ddd41.png"
	],
	[
		"0x6aa5111aa1265b6d3cc6a2b0f8e12dea781c878f",
		"// SANCTUARY //",
		"// SANCTUARY //",
		"ERC1155",
		"/images/nfts/0x6aa5111aa1265b6d3cc6a2b0f8e12dea781c878f.png"
	],
	[
		"0x6138285752d0e4973c2fefcbff3f880fed976d16",
		"Probably Nothing by ChinaChic NFT",
		"PN",
		"ERC1155",
		"/images/nfts/0x6138285752d0e4973c2fefcbff3f880fed976d16.png"
	],
	[
		"0xb66c43eb647c31758678dd858bbce82b071c1eb9",
		"1dontknows editions",
		"1dontknows editions",
		"ERC1155",
		"/images/nfts/0xb66c43eb647c31758678dd858bbce82b071c1eb9.png"
	],
	[
		"0x86a80dfaa051de8112978733d6e18e9cfb5bb4a9",
		"CryptoCity - 3aamYRoDeI",
		"CryptoCity",
		"ERC1155"
	],
	[
		"0x232bf8c366670abb8985425efcebd82714071b22",
		"Vieri Bottazzini | The Achromatic Editions",
		"Vieri Bottazzini | The Achromatic Editions",
		"ERC1155",
		"/images/nfts/0x232bf8c366670abb8985425efcebd82714071b22.png"
	],
	[
		"0x465cb0018aa609fc0e333ea8b2308ce716066597",
		"Justvibin Editions",
		"Justvibin Editions",
		"ERC1155",
		"/images/nfts/0x465cb0018aa609fc0e333ea8b2308ce716066597.png"
	],
	[
		"0x9b51a88cffe9b50e043661ddd7f492cc3888fcbf",
		"Lootmart",
		"MART",
		"ERC1155",
		"/images/nfts/0x9b51a88cffe9b50e043661ddd7f492cc3888fcbf.png"
	],
	[
		"0xb9373e7d7f54b6d722194c5609d3de85e971ca4e",
		"Spirits by SuperNfty",
		"Spirits by SuperNfty",
		"ERC1155",
		"/images/nfts/0xb9373e7d7f54b6d722194c5609d3de85e971ca4e.png"
	],
	[
		"0x7db87b180c38c662ed75c4729a3c69d260489a7b",
		"The Rum Club",
		"RAW",
		"ERC1155",
		"/images/nfts/0x7db87b180c38c662ed75c4729a3c69d260489a7b.png"
	],
	[
		"0xe3a56e474892be0778038d53b9945f0f72fec628",
		"Abio Mint Pass",
		"Abio Mint Pass",
		"ERC1155",
		"/images/nfts/0xe3a56e474892be0778038d53b9945f0f72fec628.png"
	],
	[
		"0xfda5ae1ae3499fbb2b7601f1d9cd61cecc6534f3",
		"Ukraine UN Ape",
		"U.U.A.",
		"ERC1155",
		"/images/nfts/0xfda5ae1ae3499fbb2b7601f1d9cd61cecc6534f3.png"
	],
	[
		"0xa6a6a6746df7a563892bbb0ffccaabbf0e507098",
		"Non Fungible Stories By Jidhun MG",
		"Non Fungible Stories By Jidhun MG",
		"ERC1155",
		"/images/nfts/0xa6a6a6746df7a563892bbb0ffccaabbf0e507098.png"
	],
	[
		"0x237a6695a53f0d503cee5f76e9c5d91f0d9a1d8f",
		"UFO sightings reports",
		"UFO sightings reports",
		"ERC1155",
		"/images/nfts/0x237a6695a53f0d503cee5f76e9c5d91f0d9a1d8f.png"
	],
	[
		"0xa4d8f0ac7af275f7e87d071ab1bd87a524b0007f",
		"Nyan Aoki",
		"NyanAoki",
		"ERC1155",
		"/images/nfts/0xa4d8f0ac7af275f7e87d071ab1bd87a524b0007f.png"
	],
	[
		"0xf1fb35ec82073c0eb5d887f51735e734adf96a72",
		"Stages Of Grief & pobedeen",
		"Stages Of Grief & pobedeen",
		"ERC1155",
		"/images/nfts/0xf1fb35ec82073c0eb5d887f51735e734adf96a72.png"
	],
	[
		"0x25fed5131605a6055da4d19c90ebc8bacda35cec",
		"JennVisuals Editions",
		"JennVisuals Editions",
		"ERC1155",
		"/images/nfts/0x25fed5131605a6055da4d19c90ebc8bacda35cec.png"
	],
	[
		"0xe165dbf07e358e47bc64010ec903e76419868c10",
		"BURNING FRAMES Edition X by dieLehmanns",
		"BURNING FRAMES Edition X by dieLehmanns",
		"ERC1155",
		"/images/nfts/0xe165dbf07e358e47bc64010ec903e76419868c10.png"
	],
	[
		"0x302ca82f48c0756523b67cf4aa65601a7e14e451",
		"Annual Editions by Ben Skaar",
		"Annual Editions by Ben Skaar",
		"ERC1155",
		"/images/nfts/0x302ca82f48c0756523b67cf4aa65601a7e14e451.png"
	],
	[
		"0x9c5fb504f12c0ce864a8b0e6b03de5d9204fe2a3",
		"Sneakerheads Mystery Box",
		"RAW",
		"ERC1155",
		"/images/nfts/0x9c5fb504f12c0ce864a8b0e6b03de5d9204fe2a3.png"
	],
	[
		"0xd2ce79c0d454f556729d631a219cc736f341da45",
		"The Beasties Collection",
		"The Beasties Collection",
		"ERC1155"
	],
	[
		"0x1e1dcf251468ff7fbf6d3c76d783ba9f00ca045d",
		"OG Obey",
		"OGOBEY",
		"ERC1155",
		"/images/nfts/0x1e1dcf251468ff7fbf6d3c76d783ba9f00ca045d.png"
	],
	[
		"0xbac489f0ea3d8ec96d52d3663390706587aa9556",
		"The Visionaries by BNV",
		"The Visionaries by BNV",
		"ERC1155",
		"/images/nfts/0xbac489f0ea3d8ec96d52d3663390706587aa9556.png"
	],
	[
		"0xbe47b040cf584b3259d6aaec86fd28718f39c259",
		"The Barbershop - Kelsey Smith",
		"The Barbershop - Kelsey Smith",
		"ERC1155",
		"/images/nfts/0xbe47b040cf584b3259d6aaec86fd28718f39c259.png"
	],
	[
		"0x9d1efc89b7bcccd910690323c1f405087b1cc578",
		"KUNGFU MAIN JOURNEY",
		"KUNGFU MAIN JOURNEY",
		"ERC1155",
		"/images/nfts/0x9d1efc89b7bcccd910690323c1f405087b1cc578.png"
	],
	[
		"0xbd6cc51b6d068aed67383ddcd8d2ffea532269db",
		"0xbd6cc51b6d068aed67383ddcd8d2ffea532269db",
		"951",
		"ERC1155"
	],
	[
		"0x66b037e88d629abdcf121fee6c7c9493aa57743c",
		"Unidentified contract - zPSz5AgsAo",
		"Unidentified contract - zPSz5AgsAo",
		"ERC1155"
	],
	[
		"0xb9534d57ef03f9c5b838e473d22664e32fb43f2c",
		"Unidentified contract - VnoDnwmcea",
		"Unidentified contract - VnoDnwmcea",
		"ERC1155"
	],
	[
		"0x309936afd6540a8794903d09d4aafd52b30f4193",
		"Ethernity's Master Collection",
		"Ethernity's Master Collection",
		"ERC1155",
		"/images/nfts/0x309936afd6540a8794903d09d4aafd52b30f4193.png"
	],
	[
		"0xab5709be88a500de208de5996b081a0a85dd4e97",
		"Manifestation Editions",
		"Manifestation Editions",
		"ERC1155",
		"/images/nfts/0xab5709be88a500de208de5996b081a0a85dd4e97.png"
	],
	[
		"0x0c327355046896b6374bc4c717c99440231a3342",
		"Based Anniversary Series",
		"Based Anniversary Series",
		"ERC1155",
		"/images/nfts/0x0c327355046896b6374bc4c717c99440231a3342.png"
	],
	[
		"0xd0aafdc6ef44eb8a734382bc40f9588446c7300f",
		"Galaktic Gadgets",
		"G-Gadgets",
		"ERC1155",
		"/images/nfts/0xd0aafdc6ef44eb8a734382bc40f9588446c7300f.png"
	],
	[
		"0xa4068e53703bad4ec448a4d6aaa5fd162f9cc065",
		"The Ozpill",
		"OZ",
		"ERC1155",
		"/images/nfts/0xa4068e53703bad4ec448a4d6aaa5fd162f9cc065.png"
	],
	[
		"0x4867658abd376fc7805afdeb46da4ce5f24ac36b",
		"PeterArt18-1155",
		"PeterArt18-1155",
		"ERC1155",
		"/images/nfts/0x4867658abd376fc7805afdeb46da4ce5f24ac36b.png"
	],
	[
		"0xfe50b0c135ae1be5d8fea07dc5633441556bcedd",
		"Elena [2022] [Short Film]",
		"Elena [2022] [Short Film]",
		"ERC1155",
		"/images/nfts/0xfe50b0c135ae1be5d8fea07dc5633441556bcedd.png"
	],
	[
		"0x45461d30ae48b76362d6e77df46a2d5005bca69d",
		"QOM Cards",
		"QOM Cards",
		"ERC1155",
		"/images/nfts/0x45461d30ae48b76362d6e77df46a2d5005bca69d.png"
	],
	[
		"0x043a2b10f0fbbf594e0ffd95133f0b944accf66e",
		"Paradis Bleu - Editions by Louis Dazy",
		"Paradis Bleu - Editions by Louis Dazy",
		"ERC1155",
		"/images/nfts/0x043a2b10f0fbbf594e0ffd95133f0b944accf66e.png"
	],
	[
		"0xd9ad135cd4b5d7fbaae6d582a2b2384913ed3fca",
		"200 bar Edition",
		"200 bar Edition",
		"ERC1155",
		"/images/nfts/0xd9ad135cd4b5d7fbaae6d582a2b2384913ed3fca.png"
	],
	[
		"0xf2b4bb6ca987fbb9b6ecd5a8d94b27dfaae49204",
		"Shattered Eon Imperial Guild",
		"Shattered Eon Imperial Guild",
		"ERC1155",
		"/images/nfts/0xf2b4bb6ca987fbb9b6ecd5a8d94b27dfaae49204.png"
	],
	[
		"0xfc908f79ab7158e03f03ae75b14eb39da3626ddd",
		"Heroes Follow Heroes 2021",
		"HFH",
		"ERC1155",
		"/images/nfts/0xfc908f79ab7158e03f03ae75b14eb39da3626ddd.png"
	],
	[
		"0x6b71e154bc0381225af66d03f9f032be8f71d993",
		"Interleave superNFT",
		"Interleave superNFT",
		"ERC1155",
		"/images/nfts/0x6b71e154bc0381225af66d03f9f032be8f71d993.png"
	],
	[
		"0x460969db559eaa0f730978c8e63bfe927d612e8a",
		"Crypto Krills",
		"krills",
		"ERC1155",
		"/images/nfts/0x460969db559eaa0f730978c8e63bfe927d612e8a.png"
	],
	[
		"0xfd48578237eb61b614321dea65198d4b9fa0925e",
		"STEP BY STEP 8bit",
		"STEP BY STEP 8bit",
		"ERC1155",
		"/images/nfts/0xfd48578237eb61b614321dea65198d4b9fa0925e.png"
	],
	[
		"0xe4019d3107d1d612c17b788f95b1d2416d9403ab",
		"dos cuerpos",
		"dos cuerpos",
		"ERC1155",
		"/images/nfts/0xe4019d3107d1d612c17b788f95b1d2416d9403ab.png"
	],
	[
		"0xf5cb6b8237f07e7b8c874bfdee3d3e20f352a776",
		"ICON 365 // One Year Anniversary \"Toronto Icons\"",
		"ICON 365 // One Year Anniversary \"Toronto Icons\"",
		"ERC1155",
		"/images/nfts/0xf5cb6b8237f07e7b8c874bfdee3d3e20f352a776.png"
	],
	[
		"0xbeb21483eb6c1137ffb5a49b9b93f2dc55edcf3a",
		"iamgilroy \"Editions\"",
		"iamgilroy \"Editions\"",
		"ERC1155",
		"/images/nfts/0xbeb21483eb6c1137ffb5a49b9b93f2dc55edcf3a.png"
	],
	[
		"0x8e90acbe1ea15dff43b44ffb67247211f8c79af2",
		"NFTY DASH Founders Pass",
		"NFTYpremium",
		"ERC1155",
		"/images/nfts/0x8e90acbe1ea15dff43b44ffb67247211f8c79af2.png"
	],
	[
		"0xb6d6a7bab90fc1059d0f737337861a79f3240596",
		"Editions by Korbinian Vogt",
		"Editions by Korbinian Vogt",
		"ERC1155",
		"/images/nfts/0xb6d6a7bab90fc1059d0f737337861a79f3240596.png"
	],
	[
		"0x01d5f0bdd27cb9af016f88bd158175aeba7240a5",
		"Loyd 1155",
		"Loyd 1155",
		"ERC1155",
		"/images/nfts/0x01d5f0bdd27cb9af016f88bd158175aeba7240a5.png"
	],
	[
		"0xa698cf4e59a6e21a97675603e541f1aa5c7d44a3",
		"GAMA Studios",
		"GAMAS",
		"ERC1155",
		"/images/nfts/0xa698cf4e59a6e21a97675603e541f1aa5c7d44a3.png"
	],
	[
		"0x1f93a0f4c9b4cc3f690bc62d46fbb3d68a2fb279",
		"PlayWithMe V2",
		"PEEPS",
		"ERC1155",
		"/images/nfts/0x1f93a0f4c9b4cc3f690bc62d46fbb3d68a2fb279.png"
	],
	[
		"0x92ed38d4b70e167084e820e1beaab92c7cd80316",
		"Covenants Wrapped USD V2",
		"WUSD",
		"ERC1155"
	],
	[
		"0x4fcfbdc52d6da314d52ed3e9358195d7446609c4",
		"KONIEC Editions",
		"KONIEC Editions",
		"ERC1155",
		"/images/nfts/0x4fcfbdc52d6da314d52ed3e9358195d7446609c4.png"
	],
	[
		"0xf5985c3917f857b197168f91324cb7b7d762b219",
		"Valiant Universe Mint Passes",
		"Valiant Universe Mint Passes",
		"ERC1155",
		"/images/nfts/0xf5985c3917f857b197168f91324cb7b7d762b219.png"
	],
	[
		"0x640655d4553cd5545f49af56c2604b95e8505eac",
		"Crypto Club Global - Genesis Collection",
		"Crypto Club Global - Genesis Collection",
		"ERC1155",
		"/images/nfts/0x640655d4553cd5545f49af56c2604b95e8505eac.png"
	],
	[
		"0xa75a3f5b447d3d929e5b2ca157cfe7046bc15b37",
		"The WAIFU Genesis Card Collection",
		"WAIFUG2",
		"ERC1155",
		"/images/nfts/0xa75a3f5b447d3d929e5b2ca157cfe7046bc15b37.png"
	],
	[
		"0x7fc46342b7023b9dace67d3b61c0de79d17af0cb",
		"Joona Salo",
		"Joona Salo",
		"ERC1155",
		"/images/nfts/0x7fc46342b7023b9dace67d3b61c0de79d17af0cb.png"
	],
	[
		"0xb2dba612538ac6da999b218949ea919c8a0d8724",
		"The 8102 Factory",
		"8102FACTORY",
		"ERC1155",
		"/images/nfts/0xb2dba612538ac6da999b218949ea919c8a0d8724.png"
	],
	[
		"0x2323ffb10265de1e655b012fe36aa4e3cf644fad",
		"NFTY DASH LITE",
		"NFTYlite",
		"ERC1155",
		"/images/nfts/0x2323ffb10265de1e655b012fe36aa4e3cf644fad.png"
	],
	[
		"0xd395b596ab837109c5d857f5914057f56f06f7d4",
		"Undead Elixirs",
		"UE",
		"ERC1155",
		"/images/nfts/0xd395b596ab837109c5d857f5914057f56f06f7d4.png"
	],
	[
		"0xe8ae4bfd7521d26283bc14f2395675144aa65e6d",
		"Planet Atmos | MKIV Datacard",
		"Planet Atmos | MKIV Datacard",
		"ERC1155",
		"/images/nfts/0xe8ae4bfd7521d26283bc14f2395675144aa65e6d.png"
	],
	[
		"0xa5efd7a7b3bb0de53bc3f2aa59004722d1431a15",
		"Crypto Geishas",
		"CG",
		"ERC1155",
		"/images/nfts/0xa5efd7a7b3bb0de53bc3f2aa59004722d1431a15.png"
	],
	[
		"0x61fce80d72363b731425c3a2a46a1a5fed9814b2",
		"Undead Warriors",
		"CYBORG",
		"ERC1155",
		"/images/nfts/0x61fce80d72363b731425c3a2a46a1a5fed9814b2.png"
	],
	[
		"0x6a500ecaed06f1cea7a4b42aa92ae8257170ccf9",
		"Unidentified contract - D6SvPoCcnX",
		"Unidentified contract - D6SvPoCcnX",
		"ERC1155",
		"/images/nfts/0x6a500ecaed06f1cea7a4b42aa92ae8257170ccf9.png"
	],
	[
		"0x00d67c871344f9f9a0fe5efaa0a4cdca71f05e6b",
		"Weed Gang Presents",
		"WGP",
		"ERC1155"
	],
	[
		"0xed93ddf7cba73660690aea62f2518b6e98b43d5a",
		"Ape Drops 02 : American Ape Legendary Moments",
		"Ape Drops 02 : American Ape Legendary Moments",
		"ERC1155",
		"/images/nfts/0xed93ddf7cba73660690aea62f2518b6e98b43d5a.png"
	],
	[
		"0x9c2cf3bb9d5c192c1e5e9c324ed65ef8e470f674",
		"ElementaI",
		"ElementaI",
		"ERC1155",
		"/images/nfts/0x9c2cf3bb9d5c192c1e5e9c324ed65ef8e470f674.png"
	],
	[
		"0x677e690391aca9da348ba73ae032ed48c52b0d93",
		"JOURNEY->DESTINATION",
		"JOURNEY->DESTINATION",
		"ERC1155",
		"/images/nfts/0x677e690391aca9da348ba73ae032ed48c52b0d93.png"
	],
	[
		"0xe8cb84e9ab4c8f4715859be4e86a58ee3c9180d6",
		"Apes Stand Together",
		"Apes Stand Together",
		"ERC1155",
		"/images/nfts/0xe8cb84e9ab4c8f4715859be4e86a58ee3c9180d6.png"
	],
	[
		"0x2b97af906d580de5e9a415eec8025e35f4645f44",
		"ALT MINT",
		"ALT MINT",
		"ERC1155",
		"/images/nfts/0x2b97af906d580de5e9a415eec8025e35f4645f44.png"
	],
	[
		"0xc14a73fcc775a861e597f1df2e6b86d1c982e2cf",
		"Cath Simard Editions",
		"Cath Simard Editions",
		"ERC1155",
		"/images/nfts/0xc14a73fcc775a861e597f1df2e6b86d1c982e2cf.png"
	],
	[
		"0x85892dd8186e31f0e43a1f2c547f950c39b46703",
		"JPEG.LAND",
		"JPEG.LAND",
		"ERC1155",
		"/images/nfts/0x85892dd8186e31f0e43a1f2c547f950c39b46703.png"
	],
	[
		"0x97451b61cf05d92ef181858e115fbd4f133991e0",
		"Ethernity's Master Collection",
		"Ethernity's Master Collection",
		"ERC1155",
		"/images/nfts/0x97451b61cf05d92ef181858e115fbd4f133991e0.png"
	],
	[
		"0xc464839b6287e90a514a577f6da17b3f3f202671",
		"Superlative Artifacts",
		"Superlative Artifacts",
		"ERC1155",
		"/images/nfts/0xc464839b6287e90a514a577f6da17b3f3f202671.png"
	],
	[
		"0xfe8fb9a36919d1dc9c911bef2b54ca0391fb08dd",
		"For The Culturez",
		"For The Culturez",
		"ERC1155",
		"/images/nfts/0xfe8fb9a36919d1dc9c911bef2b54ca0391fb08dd.png"
	],
	[
		"0x43702676f0a192b833461ffe0bcc02d8605ab869",
		"Dreamers Editions by [LC]",
		"Dreamers Editions by [LC]",
		"ERC1155",
		"/images/nfts/0x43702676f0a192b833461ffe0bcc02d8605ab869.png"
	],
	[
		"0x9c1cd634f347d13209e43078c69f087fd145b4b6",
		"NanoTech Chips",
		"NanoTech Chips",
		"ERC1155",
		"/images/nfts/0x9c1cd634f347d13209e43078c69f087fd145b4b6.png"
	],
	[
		"0xd8dcf2ce3677ad5361556887a3621ef670f9d16c",
		"12 Apes",
		"12 Apes",
		"ERC1155",
		"/images/nfts/0xd8dcf2ce3677ad5361556887a3621ef670f9d16c.png"
	],
	[
		"0xc567936d70cb71b8f141f491cb9555b15059634f",
		"New York EP",
		"New York EP",
		"ERC1155",
		"/images/nfts/0xc567936d70cb71b8f141f491cb9555b15059634f.png"
	],
	[
		"0x8684415be9ed85b47478b86df2d2890842b9305f",
		"alevis adrops",
		"alevis adrops",
		"ERC1155",
		"/images/nfts/0x8684415be9ed85b47478b86df2d2890842b9305f.png"
	],
	[
		"0xabd1f855a53a07eea9ee63dae19ff9ab435440b5",
		"The Locker Room - All Access Pass",
		"The Locker Room - All Access Pass",
		"ERC1155",
		"/images/nfts/0xabd1f855a53a07eea9ee63dae19ff9ab435440b5.png"
	],
	[
		"0x8c5dede4c8b86b32492a6f5b2e39ee83eb262fa4",
		"SCXMCARD REWARDS",
		"SCXMCARD REWARDS",
		"ERC1155",
		"/images/nfts/0x8c5dede4c8b86b32492a6f5b2e39ee83eb262fa4.png"
	],
	[
		"0xad02a9455f3e52e0938efaaa81591280b71dc4c4",
		"MobEditions",
		"MobEditions",
		"ERC1155",
		"/images/nfts/0xad02a9455f3e52e0938efaaa81591280b71dc4c4.png"
	],
	[
		"0x99a6163b390a2b06b99b93a1829b55c5793d0fdf",
		"Ape Yacht CIub",
		"Ape Yacht CIub",
		"ERC1155",
		"/images/nfts/0x99a6163b390a2b06b99b93a1829b55c5793d0fdf.png"
	],
	[
		"0x2c1fa5d91bce9bf210721a2f267d7838f3bd15e3",
		"Hockey Town",
		"Hockey Town",
		"ERC1155",
		"/images/nfts/0x2c1fa5d91bce9bf210721a2f267d7838f3bd15e3.png"
	],
	[
		"0xcf0633dcb63098b5224ac339ef79dfec0baaa2c2",
		"GuillaumeMK Editions",
		"GuillaumeMK Editions",
		"ERC1155",
		"/images/nfts/0xcf0633dcb63098b5224ac339ef79dfec0baaa2c2.png"
	],
	[
		"0x42c6bcbbd42b0df212564f101d2edac7fb908b9b",
		"STACY",
		"$stacy",
		"ERC1155",
		"/images/nfts/0x42c6bcbbd42b0df212564f101d2edac7fb908b9b.png"
	],
	[
		"0x9c066824f00b9f444f6d56f29c949a07eaab39fc",
		"SlimHoods Specials",
		"SlimHoods Specials",
		"ERC1155",
		"/images/nfts/0x9c066824f00b9f444f6d56f29c949a07eaab39fc.png"
	],
	[
		"0x5d8df315953fbb27a25cb82ac9281051b9410fe1",
		"Rare Paper Works",
		"Rare Paper Works",
		"ERC1155",
		"/images/nfts/0x5d8df315953fbb27a25cb82ac9281051b9410fe1.png"
	],
	[
		"0x625a7a2fdeb4d8f1575f34206ab7e3fcb4cc2f04",
		"editions by dashawatar",
		"editions by dashawatar",
		"ERC1155",
		"/images/nfts/0x625a7a2fdeb4d8f1575f34206ab7e3fcb4cc2f04.png"
	],
	[
		"0x801256df43ffa775f6f1e1544d0c46a131c5ab88",
		"Keith A. Grossman - First Mint!",
		"Keith A. Grossman - First Mint!",
		"ERC1155",
		"/images/nfts/0x801256df43ffa775f6f1e1544d0c46a131c5ab88.png"
	],
	[
		"0xbe3e87e2d380ae813fcc8188de62034252ce8ece",
		"_404/",
		"_404/",
		"ERC1155",
		"/images/nfts/0xbe3e87e2d380ae813fcc8188de62034252ce8ece.png"
	],
	[
		"0xa72d82e3003faadb893086b5e379194191ab472d",
		"Hublot Classic Fusion Murakami NFT",
		"Hublot Classic Fusion Murakami NFT",
		"ERC1155",
		"/images/nfts/0xa72d82e3003faadb893086b5e379194191ab472d.png"
	],
	[
		"0xf2598a2a77d1122f2cf5c3aaebaecf0c4a95a979",
		"Devilsx Editions",
		"Devilsx Editions",
		"ERC1155",
		"/images/nfts/0xf2598a2a77d1122f2cf5c3aaebaecf0c4a95a979.png"
	],
	[
		"0x66571e65d5f86ff268d09fb5beb7fa78f49ed828",
		"RELI3F UKR: Drop 2",
		"RELI3F UKR: Drop 2",
		"ERC1155",
		"/images/nfts/0x66571e65d5f86ff268d09fb5beb7fa78f49ed828.png"
	],
	[
		"0xb019fa7fe71e6f815977a1734bdddb16fce5a38c",
		"Splash of Colour: The editions",
		"Splash of Colour: The editions",
		"ERC1155",
		"/images/nfts/0xb019fa7fe71e6f815977a1734bdddb16fce5a38c.png"
	],
	[
		"0x9311ac6b45e22e48c6f7acc9beefdde3fe994ec0",
		"KILLAPASSES",
		"KILLAPASSES",
		"ERC1155",
		"/images/nfts/0x9311ac6b45e22e48c6f7acc9beefdde3fe994ec0.png"
	],
	[
		"0x3c6075bb736b6e36f8381c7bdbeb3a4512d4280c",
		"DrainedEye",
		"DrainedEye",
		"ERC1155",
		"/images/nfts/0x3c6075bb736b6e36f8381c7bdbeb3a4512d4280c.png"
	],
	[
		"0x1db04e0de39f14b78189df862910dd521567b9c0",
		"SEASON 0: GENESIS",
		"MNFST0",
		"ERC1155",
		"/images/nfts/0x1db04e0de39f14b78189df862910dd521567b9c0.png"
	],
	[
		"0x716a01cc1019ea296a06eba468f37f1937d3e636",
		"ArtiVerse V2",
		"ArtiVerse V2",
		"ERC1155",
		"/images/nfts/0x716a01cc1019ea296a06eba468f37f1937d3e636.png"
	],
	[
		"0x9aac0a07aad7ed91b45a4459f4f9834dc5a31a37",
		"Secret Society - Stoner Pass",
		"SP",
		"ERC1155",
		"/images/nfts/0x9aac0a07aad7ed91b45a4459f4f9834dc5a31a37.png"
	],
	[
		"0x2a739ad9f983c2a3e6e34614530e56932e32c1ce",
		"Pirates of the Metaverse Figurines",
		"Pirates of the Metaverse Figurines",
		"ERC1155",
		"/images/nfts/0x2a739ad9f983c2a3e6e34614530e56932e32c1ce.png"
	],
	[
		"0x050f823fa6b6ab633796a9f2d4dad549a18c9a43",
		"AI Art Prototypes - MetaHub",
		"AIART",
		"ERC1155",
		"/images/nfts/0x050f823fa6b6ab633796a9f2d4dad549a18c9a43.png"
	],
	[
		"0x7bb4bf25b563038a3be53e34ae6c88a8519cb0b0",
		"MIH History Museum Meta Pass",
		"MIH History Museum Meta Pass",
		"ERC1155",
		"/images/nfts/0x7bb4bf25b563038a3be53e34ae6c88a8519cb0b0.png"
	],
	[
		"0x959062c48afab6a530d93bb61fc240df737ab958",
		"Cosmic Safari Editions",
		"Cosmic Safari Editions",
		"ERC1155",
		"/images/nfts/0x959062c48afab6a530d93bb61fc240df737ab958.png"
	],
	[
		"0x5cbfbadc8e4fbcc9d9f9d82c1d1022e999cba36c",
		"KingRabbit",
		"kr",
		"ERC1155",
		"/images/nfts/0x5cbfbadc8e4fbcc9d9f9d82c1d1022e999cba36c.png"
	],
	[
		"0x543b157848fd17fec086ee52eff1020338c434bf",
		"City  of  Shadows",
		"City  of  Shadows",
		"ERC1155",
		"/images/nfts/0x543b157848fd17fec086ee52eff1020338c434bf.png"
	],
	[
		"0x009c5b7ff119972e3437b51c4f94addb8dbb2bcd",
		"Signature Series by mendezmendez",
		"Signature Series by mendezmendez",
		"ERC1155",
		"/images/nfts/0x009c5b7ff119972e3437b51c4f94addb8dbb2bcd.png"
	],
	[
		"0x0369edc7646948e2f36f9f85baf297bb99843054",
		"The Pinco Village",
		"The Pinco Village",
		"ERC1155",
		"/images/nfts/0x0369edc7646948e2f36f9f85baf297bb99843054.png"
	],
	[
		"0x46864b5b96f0963748a9aed161d1525562a9ec53",
		"The Art Memes",
		"The Art Memes",
		"ERC1155",
		"/images/nfts/0x46864b5b96f0963748a9aed161d1525562a9ec53.png"
	],
	[
		"0x5fd5fad132bd3c22391e51ab86c6c17932c302eb",
		"4nNoy PASS",
		"4nNoy PASS",
		"ERC1155",
		"/images/nfts/0x5fd5fad132bd3c22391e51ab86c6c17932c302eb.png"
	],
	[
		"0x8c1dd2e97941a09e6ff22aef7e6177cd40f429bd",
		"MAX DROPS by WORLD OF NOUN",
		"MAX DROPS by WORLD OF NOUN",
		"ERC1155",
		"/images/nfts/0x8c1dd2e97941a09e6ff22aef7e6177cd40f429bd.png"
	],
	[
		"0xe39a238d74bdd95a895026fc25ec97fb8a4b1959",
		"Spike",
		"spke",
		"ERC1155",
		"/images/nfts/0xe39a238d74bdd95a895026fc25ec97fb8a4b1959.png"
	],
	[
		"0xad87d689688998f7987d78b51241ebcec9127478",
		"#SUNDAYMOOD BY HANNES WINDRATH",
		"#SUNDAYMOOD BY HANNES WINDRATH",
		"ERC1155",
		"/images/nfts/0xad87d689688998f7987d78b51241ebcec9127478.png"
	],
	[
		"0xd8db8dae202e18ab068193517077c66ce893c79e",
		"Chain Virus Editions 2022",
		"Chain Virus Editions 2022",
		"ERC1155",
		"/images/nfts/0xd8db8dae202e18ab068193517077c66ce893c79e.png"
	],
	[
		"0x1c6b549594da651de717e1d327fae11fef1503a1",
		"moonholders",
		"MOON",
		"ERC1155",
		"/images/nfts/0x1c6b549594da651de717e1d327fae11fef1503a1.png"
	],
	[
		"0x5840e4cab1480a75c31d9688ef03682d756a67d1",
		"money_clicc",
		"money_clicc",
		"ERC1155",
		"/images/nfts/0x5840e4cab1480a75c31d9688ef03682d756a67d1.png"
	],
	[
		"0xa222768e78e83dc085531aef204d6e7a7033bc0e",
		"Coffee Junkie Club",
		"CJC",
		"ERC1155",
		"/images/nfts/0xa222768e78e83dc085531aef204d6e7a7033bc0e.png"
	],
	[
		"0x65dc2398260eb6209912c44c6a9323f3ae710640",
		"Quarter Machine - CAPSULE COLLECTiON",
		"Quarter Machine - CAPSULE COLLECTiON",
		"ERC1155",
		"/images/nfts/0x65dc2398260eb6209912c44c6a9323f3ae710640.png"
	],
	[
		"0x6fdead7adee56d358f949a4492b6d0b9fd5f6705",
		"Anti Collective",
		"Anti Collective",
		"ERC1155",
		"/images/nfts/0x6fdead7adee56d358f949a4492b6d0b9fd5f6705.png"
	],
	[
		"0xed9e2b88feb7a94a682e7e3a59631e15e8442711",
		"Mogul Productions",
		"Mogul Productions",
		"ERC1155",
		"/images/nfts/0xed9e2b88feb7a94a682e7e3a59631e15e8442711.png"
	],
	[
		"0xa642375cc15249a81da9c435fb4edd8a9343ce7f",
		"oncyber & friends",
		"oncyber & friends",
		"ERC1155",
		"/images/nfts/0xa642375cc15249a81da9c435fb4edd8a9343ce7f.png"
	],
	[
		"0xa8ed51d0da6db6dfe541039a2182292c86e45a7e",
		"Jamesephoto Editions",
		"Jamesephoto Editions",
		"ERC1155",
		"/images/nfts/0xa8ed51d0da6db6dfe541039a2182292c86e45a7e.png"
	],
	[
		"0x20386f1fa10360bca5b5fc703af0930f96e56918",
		"ebsshot - Editions",
		"ebsshot - Editions",
		"ERC1155",
		"/images/nfts/0x20386f1fa10360bca5b5fc703af0930f96e56918.png"
	],
	[
		"0x8c751c60ed0257b5a04ff5b0d0b6a33d788a5906",
		"EVOL Airdrops",
		"EVOL Airdrops",
		"ERC1155",
		"/images/nfts/0x8c751c60ed0257b5a04ff5b0d0b6a33d788a5906.png"
	],
	[
		"0x76452f4e679ce96e7dbdaa8191bf887d43445584",
		"Toshimeta Pass",
		"Toshimeta Pass",
		"ERC1155",
		"/images/nfts/0x76452f4e679ce96e7dbdaa8191bf887d43445584.png"
	],
	[
		"0xa7b19de04839bc77a7578d0dfe1dbf88c4ced111",
		"A Sun-Kissed Edition",
		"A Sun-Kissed Edition",
		"ERC1155",
		"/images/nfts/0xa7b19de04839bc77a7578d0dfe1dbf88c4ced111.png"
	],
	[
		"0xb04004aa955849739fde52da15249e65950238d3",
		"FREE MINT Editions X Tylersjourney",
		"FREE MINT Editions X Tylersjourney",
		"ERC1155",
		"/images/nfts/0xb04004aa955849739fde52da15249e65950238d3.png"
	],
	[
		"0x08705aeddb89fdd03c1427bd6af16fe90d23a08d",
		"Solomons Key - Wives of Solomon",
		"Solomons Key - Wives of Solomon",
		"ERC1155",
		"/images/nfts/0x08705aeddb89fdd03c1427bd6af16fe90d23a08d.png"
	],
	[
		"0xaea2f9bdaf176125fd4fb5db92b12527dba4bb2e",
		"Bodega Collection",
		"Bodega Collection",
		"ERC1155",
		"/images/nfts/0xaea2f9bdaf176125fd4fb5db92b12527dba4bb2e.png"
	],
	[
		"0x18f1d72d6c2eeabcc505653b4bf14fb78748bd76",
		"SHIBABETS COLLECTORS CLUB V1",
		"SHIBABETS COLLECTORS CLUB V1",
		"ERC1155",
		"/images/nfts/0x18f1d72d6c2eeabcc505653b4bf14fb78748bd76.png"
	],
	[
		"0xbe55d9675584711206f879187f2ccb482fb35588",
		"Crypto Drugs by saru-03",
		"sarulabs",
		"ERC1155",
		"/images/nfts/0xbe55d9675584711206f879187f2ccb482fb35588.png"
	],
	[
		"0xfb859f4c70ade2117d2511d6aaf26c26dbfc4190",
		"Noodie Gang Labs",
		"Noodie Gang Labs",
		"ERC1155",
		"/images/nfts/0xfb859f4c70ade2117d2511d6aaf26c26dbfc4190.png"
	],
	[
		"0xdacf55bd1a01d6ac83df3103927d44d7f71328b4",
		"National Beer Day 2022 - Journey",
		"NBD",
		"ERC1155",
		"/images/nfts/0xdacf55bd1a01d6ac83df3103927d44d7f71328b4.png"
	],
	[
		"0x527b252ed6345faa73d9bdc65a9bc409c7e3e6b7",
		"Odyssey Genesis Collection",
		"ODC",
		"ERC1155",
		"/images/nfts/0x527b252ed6345faa73d9bdc65a9bc409c7e3e6b7.png"
	],
	[
		"0xb5b3f50168abe322f7c11f9e79f0a814923ebe55",
		"Editions by Sanqueira",
		"EDSanq",
		"ERC1155",
		"/images/nfts/0xb5b3f50168abe322f7c11f9e79f0a814923ebe55.png"
	],
	[
		"0x5c11c6d20e263eb9d4818fe4fa1475698eca3db8",
		"Must be KOOL to Collect",
		"Must be KOOL to Collect",
		"ERC1155",
		"/images/nfts/0x5c11c6d20e263eb9d4818fe4fa1475698eca3db8.png"
	],
	[
		"0xd5fecdba3b36444ee25c10c0bb78e090818e9f50",
		"Fortune! Season 1 Access Passes",
		"01fap",
		"ERC1155",
		"/images/nfts/0xd5fecdba3b36444ee25c10c0bb78e090818e9f50.png"
	],
	[
		"0xc47f6d3d596f82c6172cbca6135063c3ad81a5fc",
		"365 // One year of \"By Way of Water\"",
		"365 // One year of \"By Way of Water\"",
		"ERC1155",
		"/images/nfts/0xc47f6d3d596f82c6172cbca6135063c3ad81a5fc.png"
	],
	[
		"0x98cb0f4bb566a9db325ef0720ec41786068248bf",
		"JK DAO",
		"JK DAO",
		"ERC1155",
		"/images/nfts/0x98cb0f4bb566a9db325ef0720ec41786068248bf.png"
	],
	[
		"0x7e65a2bc65d5bd26281d5dcbae4c40efe9cce199",
		"Season's of Life",
		"Season's of Life",
		"ERC1155",
		"/images/nfts/0x7e65a2bc65d5bd26281d5dcbae4c40efe9cce199.png"
	],
	[
		"0xfe190723a465c99293c4f035045c0a6880d25dbe",
		"Look Labs - Passes",
		"420GP",
		"ERC1155",
		"/images/nfts/0xfe190723a465c99293c4f035045c0a6880d25dbe.png"
	],
	[
		"0x630ee73155209d742f7e1e467b0471924bcf8ce1",
		"JakNFT ARTBOT Drops",
		"JakNFT ARTBOT Drops",
		"ERC1155",
		"/images/nfts/0x630ee73155209d742f7e1e467b0471924bcf8ce1.png"
	],
	[
		"0xa063aac853a73df78012505190819f0fb1ec2161",
		"round shades editions",
		"round shades editions",
		"ERC1155",
		"/images/nfts/0xa063aac853a73df78012505190819f0fb1ec2161.png"
	],
	[
		"0x51aa0c60a9707ac693f60f191799f51171c32444",
		"Unique Animated Apes",
		"ETH",
		"ERC1155",
		"/images/nfts/0x51aa0c60a9707ac693f60f191799f51171c32444.png"
	],
	[
		"0xce426cb814115c0833792e58f5362608b75cf6d4",
		"Utopian Renaissance Collection",
		"URC",
		"ERC1155",
		"/images/nfts/0xce426cb814115c0833792e58f5362608b75cf6d4.png"
	],
	[
		"0x0d184ae40e313449db8cbb70a9edad5c3f09f53b",
		"Celebrating CC0",
		"Celebrating CC0",
		"ERC1155",
		"/images/nfts/0x0d184ae40e313449db8cbb70a9edad5c3f09f53b.png"
	],
	[
		"0x47286a80cc821ae38cf179865d1b9c2188c79c64",
		"Any Colour You Like when there's none - Editions",
		"Any Colour You Like when there's none - Editions",
		"ERC1155",
		"/images/nfts/0x47286a80cc821ae38cf179865d1b9c2188c79c64.png"
	],
	[
		"0xa7c1076e671e14c7b5ed5eac139e855cfa6b9663",
		"UAE NFT - From Desert To Mars | Arefeh Norouzi",
		"UAENFT",
		"ERC1155",
		"/images/nfts/0xa7c1076e671e14c7b5ed5eac139e855cfa6b9663.png"
	],
	[
		"0xa0aa795ee229f519da7013e179ec86b551c84749",
		"Utopia Club",
		"UTOPIA",
		"ERC1155",
		"/images/nfts/0xa0aa795ee229f519da7013e179ec86b551c84749.png"
	],
	[
		"0x9c9a7bda362b4b0a3829a01cfa77d8d0b30d8444",
		"Crypto Punk Bros",
		"WeWorld",
		"ERC1155",
		"/images/nfts/0x9c9a7bda362b4b0a3829a01cfa77d8d0b30d8444.png"
	],
	[
		"0x7119d1e08f5abeaceb3c5bd6f5053470a8890d1f",
		"Achoo NFT - Viral Mint",
		"Achoo NFT - Viral Mint",
		"ERC1155",
		"/images/nfts/0x7119d1e08f5abeaceb3c5bd6f5053470a8890d1f.png"
	],
	[
		"0x7e4897a5c6f37c9ba2ac39f6936e80318d43cc68",
		"Vast Depth Editions",
		"Vast Depth Editions",
		"ERC1155",
		"/images/nfts/0x7e4897a5c6f37c9ba2ac39f6936e80318d43cc68.png"
	],
	[
		"0x0b3e901b50c6db0a4587d17f6b62dd692b5a13ad",
		"Aly Ash NFT Zines",
		"Aly Ash NFT Zines",
		"ERC1155",
		"/images/nfts/0x0b3e901b50c6db0a4587d17f6b62dd692b5a13ad.png"
	],
	[
		"0x825b8d4e1432ccbc5ab2bc24c9e65f0434dcaf37",
		"Zen Blocks - Data Blocks",
		"Zen Blocks - Data Blocks",
		"ERC1155",
		"/images/nfts/0x825b8d4e1432ccbc5ab2bc24c9e65f0434dcaf37.png"
	],
	[
		"0x7b0500fdc298e7f3a26d4cfab87606779680b7db",
		"Jake Inez - Limited Editions",
		"Jake Inez - Limited Editions",
		"ERC1155",
		"/images/nfts/0x7b0500fdc298e7f3a26d4cfab87606779680b7db.png"
	],
	[
		"0xe937c6b16e072f3e2fb076db8e63ec743ed8a510",
		"Fortune! Special Editions",
		"FSE",
		"ERC1155",
		"/images/nfts/0xe937c6b16e072f3e2fb076db8e63ec743ed8a510.png"
	],
	[
		"0x862c43f70b74cd5f3b0c431435dbbf5e0608332f",
		"odious",
		"odious",
		"ERC1155",
		"/images/nfts/0x862c43f70b74cd5f3b0c431435dbbf5e0608332f.png"
	],
	[
		"0x47d4ebffcf1d46537a686d5585c2ab70f8996286",
		"It All Started Somewhere",
		"It All Started Somewhere",
		"ERC1155",
		"/images/nfts/0x47d4ebffcf1d46537a686d5585c2ab70f8996286.png"
	],
	[
		"0x9bd1cef6d0c5cc7d95cc7d409abdaf1fcf7e0066",
		"DEVTH",
		"DEVTH",
		"ERC1155",
		"/images/nfts/0x9bd1cef6d0c5cc7d95cc7d409abdaf1fcf7e0066.png"
	],
	[
		"0x7831729a089df41d7c5bcbd5cebb9d7d131addd3",
		"tiffatronn editions",
		"tiffatronn editions",
		"ERC1155",
		"/images/nfts/0x7831729a089df41d7c5bcbd5cebb9d7d131addd3.png"
	],
	[
		"0x12441fefc2bb190f7d4c61d943586e224e858974",
		"Signature Sneaker Community Design",
		"Signature Sneaker Community Design",
		"ERC1155",
		"/images/nfts/0x12441fefc2bb190f7d4c61d943586e224e858974.png"
	],
	[
		"0x00f4be5d58aaa93118cff472130a696927f2eadf",
		"Trust by DK",
		"Trust by DK",
		"ERC1155",
		"/images/nfts/0x00f4be5d58aaa93118cff472130a696927f2eadf.png"
	],
	[
		"0x45e3e237e6924f1d7353e494876989a76959eb28",
		"RIOTOUS SEASON 1",
		"RIOTOUS SEASON 1",
		"ERC1155",
		"/images/nfts/0x45e3e237e6924f1d7353e494876989a76959eb28.png"
	],
	[
		"0xde6a841cf346f83df824fce932ab09f8af3443d6",
		"Happy Little Horizons by William Takeover",
		"Happy Little Horizons by William Takeover",
		"ERC1155",
		"/images/nfts/0xde6a841cf346f83df824fce932ab09f8af3443d6.png"
	],
	[
		"0x4d7a763e9bc0f538248b261b2eee0e332cb8b715",
		"We Stand Against Evil",
		"We Stand Against Evil",
		"ERC1155",
		"/images/nfts/0x4d7a763e9bc0f538248b261b2eee0e332cb8b715.png"
	],
	[
		"0xd0485f01e5cf7bab21b3ec9698db6ac331776fee",
		"ANIMAL EDITIONS",
		"ANIMAL EDITIONS",
		"ERC1155",
		"/images/nfts/0xd0485f01e5cf7bab21b3ec9698db6ac331776fee.png"
	],
	[
		"0x7c260717f5336f4b46a2d5c5b8af2163efb7960e",
		"Mindful Metaverse Portal",
		"MNDFL",
		"ERC1155",
		"/images/nfts/0x7c260717f5336f4b46a2d5c5b8af2163efb7960e.png"
	],
	[
		"0x47b648edd37aeae4f16d153451fd1784c1dd19a5",
		"Mchooty's",
		"Mchooty's",
		"ERC1155",
		"/images/nfts/0x47b648edd37aeae4f16d153451fd1784c1dd19a5.png"
	],
	[
		"0xd398f2ab02a3b0363ab88833daff31570383792b",
		"Lights x Magic 53",
		"Lights x Magic 53",
		"ERC1155",
		"/images/nfts/0xd398f2ab02a3b0363ab88833daff31570383792b.png"
	],
	[
		"0x14ceab5d5025d0e48cec55c5827441a2c1854aa0",
		"Accelerator Crystal",
		"ACC",
		"ERC1155"
	],
	[
		"0x49d02b5f8be84df003203303a396ba597b0d6961",
		"RickhouseDAO",
		"RickhouseDAO",
		"ERC1155",
		"/images/nfts/0x49d02b5f8be84df003203303a396ba597b0d6961.png"
	],
	[
		"0x3ab9b8bcc97db111bf14b04ebd4c08dce94cfd5b",
		"Unidentified contract - BVN0T6zusT",
		"Unidentified contract - BVN0T6zusT",
		"ERC1155"
	],
	[
		"0x7ef68ed82edd0b5fefc8ac82f822c5396bd35bb1",
		"derschutze NFTees",
		"DEO",
		"ERC1155",
		"/images/nfts/0x7ef68ed82edd0b5fefc8ac82f822c5396bd35bb1.png"
	],
	[
		"0x399bd363426dfdd7f84fe8b917e1a3525b039309",
		"LIT Collaboration One: Never Fear Truth",
		"LIT Collaboration One: Never Fear Truth",
		"ERC1155",
		"/images/nfts/0x399bd363426dfdd7f84fe8b917e1a3525b039309.png"
	],
	[
		"0x9bae8b79f3c949b0821aeb550c52bb55f9c89486",
		"luka - jiA13irIuZ",
		"123",
		"ERC1155",
		"/images/nfts/0x9bae8b79f3c949b0821aeb550c52bb55f9c89486.png"
	],
	[
		"0x2b0d865fe528708974281bb8f638c8fb7d97afbc",
		"Flepergebet's Universe",
		"Flepergebet's Universe",
		"ERC1155",
		"/images/nfts/0x2b0d865fe528708974281bb8f638c8fb7d97afbc.png"
	],
	[
		"0xdbd28abef56e52fc39f6a74a03f209ad3a4de51e",
		"Flepergebet Editions",
		"Flepergebet Editions",
		"ERC1155",
		"/images/nfts/0xdbd28abef56e52fc39f6a74a03f209ad3a4de51e.png"
	],
	[
		"0xa2918cac214f633eb2b79f02591ad3d2f5735903",
		"danknugz",
		"danknugz",
		"ERC1155",
		"/images/nfts/0xa2918cac214f633eb2b79f02591ad3d2f5735903.png"
	],
	[
		"0x9eb1560da95235ba61d96855923884b9af60bf15",
		"PHOTOGRAPHY DAYS IN EDITIONS",
		"PHOTOGRAPHY DAYS IN EDITIONS",
		"ERC1155",
		"/images/nfts/0x9eb1560da95235ba61d96855923884b9af60bf15.png"
	],
	[
		"0xe125091e7c669d47e374d7f23bc857789f701780",
		"10K Project",
		"10K Project",
		"ERC1155",
		"/images/nfts/0xe125091e7c669d47e374d7f23bc857789f701780.png"
	],
	[
		"0xc10dadd54d945c5cd537882bbe826807928d0bc6",
		"House Of Bandits",
		"HOB",
		"ERC1155",
		"/images/nfts/0xc10dadd54d945c5cd537882bbe826807928d0bc6.png"
	],
	[
		"0x204be4754bb5065a30a4ab2c0c0224b66d61fb51",
		"LePro Photo Editions",
		"LePro Photo Editions",
		"ERC1155",
		"/images/nfts/0x204be4754bb5065a30a4ab2c0c0224b66d61fb51.png"
	],
	[
		"0x0855b6dcdf2e1d27ba371f3b6e865cf86f8b5778",
		"remik AI art",
		"remik AI art",
		"ERC1155",
		"/images/nfts/0x0855b6dcdf2e1d27ba371f3b6e865cf86f8b5778.png"
	],
	[
		"0xf699b8f6244b81195756f20dbbdcbed1f66078bc",
		"Editions-II by TunART",
		"Editions-II by TunART",
		"ERC1155",
		"/images/nfts/0xf699b8f6244b81195756f20dbbdcbed1f66078bc.png"
	],
	[
		"0x347114ba00e33b5641c4f3bb0223e89852fbc833",
		"BYOX",
		"BYOX",
		"ERC1155",
		"/images/nfts/0x347114ba00e33b5641c4f3bb0223e89852fbc833.png"
	],
	[
		"0x29c35e6b16d117cc35d4d34e0ed2b5259d5df2c5",
		"ejthek raribles 2",
		"EJKR2",
		"ERC1155",
		"/images/nfts/0x29c35e6b16d117cc35d4d34e0ed2b5259d5df2c5.png"
	],
	[
		"0xcb4a486c23e2f7253ee654ea8c3294314b501d48",
		"Jon Sanchez Editions",
		"Jon Sanchez Editions",
		"ERC1155",
		"/images/nfts/0xcb4a486c23e2f7253ee654ea8c3294314b501d48.png"
	],
	[
		"0xaf35cb3c2c27c4b6895273e8faa20345e6f02c53",
		"Urban Transportation Plants",
		"Urban Transportation Plants",
		"ERC1155",
		"/images/nfts/0xaf35cb3c2c27c4b6895273e8faa20345e6f02c53.png"
	],
	[
		"0xadc5f935d9afb186d4ef210b0f537ddb0d6c524c",
		"Packwoods",
		"BLNT",
		"ERC1155",
		"/images/nfts/0xadc5f935d9afb186d4ef210b0f537ddb0d6c524c.png"
	],
	[
		"0xf6873503f7c7d1dea9cc0710ae5cc33f557475c3",
		"Timpers HD Interleave Artwork",
		"Timpers HD Interleave Artwork",
		"ERC1155",
		"/images/nfts/0xf6873503f7c7d1dea9cc0710ae5cc33f557475c3.png"
	],
	[
		"0x3c44f2309990bd07a831c4f417b1aa724d2a1b4a",
		"Reza Nia - Limited Editions",
		"Reza Nia - Limited Editions",
		"ERC1155",
		"/images/nfts/0x3c44f2309990bd07a831c4f417b1aa724d2a1b4a.png"
	],
	[
		"0xf5e92d46e5931e459732d331883dc14eb66ab01d",
		"NFTfolio",
		"FOLIO",
		"ERC1155",
		"/images/nfts/0xf5e92d46e5931e459732d331883dc14eb66ab01d.png"
	],
	[
		"0xb63d6c5116a156b2e230e1f8e9e07467582fa00b",
		"Jamison Dove Editions",
		"Jamison Dove Editions",
		"ERC1155",
		"/images/nfts/0xb63d6c5116a156b2e230e1f8e9e07467582fa00b.png"
	],
	[
		"0x31b6d1289f96818e79dbb271bf77e8132b86e814",
		"Degen Pass Genesis",
		"DEP",
		"ERC1155",
		"/images/nfts/0x31b6d1289f96818e79dbb271bf77e8132b86e814.png"
	],
	[
		"0x6c27ea8f74cff8e1621d39005a814b6f9559862e",
		"VM Tokens by P4SD",
		"VM Tokens by P4SD",
		"ERC1155",
		"/images/nfts/0x6c27ea8f74cff8e1621d39005a814b6f9559862e.png"
	],
	[
		"0x0e93ead3492aa40f4065e285c51331b4b1257fef",
		"Weirdo Water",
		"Weirdo Water",
		"ERC1155",
		"/images/nfts/0x0e93ead3492aa40f4065e285c51331b4b1257fef.png"
	],
	[
		"0xff3559412c4618af7c6e6f166c74252ff6364456",
		"EtherCats",
		"EtherCats",
		"ERC1155",
		"/images/nfts/0xff3559412c4618af7c6e6f166c74252ff6364456.png"
	],
	[
		"0xf7f18a919bb12246aa32b2a62bb0230a6a27f562",
		"EightBit Loot Case",
		"EBLB",
		"ERC1155",
		"/images/nfts/0xf7f18a919bb12246aa32b2a62bb0230a6a27f562.png"
	],
	[
		"0x03d244b69a18a4d6477a9505bdf2a22819cd4ec7",
		"JAPAN NFT CLUB",
		"JDN",
		"ERC1155",
		"/images/nfts/0x03d244b69a18a4d6477a9505bdf2a22819cd4ec7.png"
	],
	[
		"0x3e5f8f7d0f780bb47d61047b092d1be41662e04c",
		"EKO-KEY (PREMIUM ACCESS)",
		"EKOKEY",
		"ERC1155",
		"/images/nfts/0x3e5f8f7d0f780bb47d61047b092d1be41662e04c.png"
	],
	[
		"0xed2cd5225d9da21bc6dcbdb0ed025b89ea7239d4",
		"Sports Metaverse Fan Cave",
		"SPORTSLAND",
		"ERC1155",
		"/images/nfts/0xed2cd5225d9da21bc6dcbdb0ed025b89ea7239d4.png"
	],
	[
		"0xb9c5266133cc5b20d3b2f0f0c621698ab7d987a7",
		"FAHQ Metaverse Drip Boxes",
		"FAHQ Metaverse Drip Boxes",
		"ERC1155",
		"/images/nfts/0xb9c5266133cc5b20d3b2f0f0c621698ab7d987a7.png"
	],
	[
		"0xefbe1c8168f6d8d0e48e3455dcff032a1200635a",
		"Pinalyca",
		"PNLYC",
		"ERC1155",
		"/images/nfts/0xefbe1c8168f6d8d0e48e3455dcff032a1200635a.png"
	],
	[
		"0xae619f94d35328b4c15d235d45ac72ebdeca93f9",
		"Metasphere (Official)",
		"MS",
		"ERC1155",
		"/images/nfts/0xae619f94d35328b4c15d235d45ac72ebdeca93f9.png"
	],
	[
		"0x8cb813bf27dc744fc5fb6ba7515504de45d39e08",
		"PolkaPets TCG",
		"PPBS",
		"ERC1155",
		"/images/nfts/0x8cb813bf27dc744fc5fb6ba7515504de45d39e08.png"
	],
	[
		"0xf7e47f61ba16b139f1ef7437651f675fd65e40ce",
		"Gridcraft Network Golden Tickets",
		"GTICKETS",
		"ERC1155",
		"/images/nfts/0xf7e47f61ba16b139f1ef7437651f675fd65e40ce.png"
	],
	[
		"0x7624cdc0b43e5cef3ca7cc2a0b90b75fe935bcd0",
		"Eskiverse",
		"Eskiverse",
		"ERC1155",
		"/images/nfts/0x7624cdc0b43e5cef3ca7cc2a0b90b75fe935bcd0.png"
	],
	[
		"0xce0d5d50adb8586895187107c7c28eb4681bc5d0",
		"Epic Token Editions Collection!",
		"Epic Token Editions Collection!",
		"ERC1155",
		"/images/nfts/0xce0d5d50adb8586895187107c7c28eb4681bc5d0.png"
	],
	[
		"0x5b8b281296e2b51512b7325c5cb13c6f9cb93a6c",
		"MAKE ME A HERO, BABY.",
		"MAKE ME A HERO, BABY.",
		"ERC1155",
		"/images/nfts/0x5b8b281296e2b51512b7325c5cb13c6f9cb93a6c.png"
	],
	[
		"0xc826ec6b6aec86e3e1498eab9cb9876f40ad0745",
		"SBU Honeypot",
		"SBU Honeypot",
		"ERC1155",
		"/images/nfts/0xc826ec6b6aec86e3e1498eab9cb9876f40ad0745.png"
	],
	[
		"0x15526af86721e8265139e4f3d759c343ac1d53ce",
		"Reserva X Pistol Birds",
		"RSV",
		"ERC1155",
		"/images/nfts/0x15526af86721e8265139e4f3d759c343ac1d53ce.png"
	],
	[
		"0x695fae4a583a4d55c9665cf2194b37c5d214fda0",
		"D`Apes",
		"DAPES",
		"ERC1155",
		"/images/nfts/0x695fae4a583a4d55c9665cf2194b37c5d214fda0.png"
	],
	[
		"0x6fe5e7acfdfbdfc15d1f451308b889011a534570",
		"BALEX OG COLLECTION",
		"BLX",
		"ERC1155",
		"/images/nfts/0x6fe5e7acfdfbdfc15d1f451308b889011a534570.png"
	],
	[
		"0xa4030f02598a14418e8432df7e27625452dd925c",
		"iwwon Airlines",
		"iwwon Airlines",
		"ERC1155",
		"/images/nfts/0xa4030f02598a14418e8432df7e27625452dd925c.png"
	],
	[
		"0x059cb989e91140161da469a33c72b103624557c7",
		"VoiceOfTheSyndicate",
		"VoiceOfTheSyndicate",
		"ERC1155",
		"/images/nfts/0x059cb989e91140161da469a33c72b103624557c7.png"
	],
	[
		"0x029941a1a917ed9d69077d800d9c66933b23dc6d",
		"Cake Nygard Editions",
		"Cake Nygard Editions",
		"ERC1155",
		"/images/nfts/0x029941a1a917ed9d69077d800d9c66933b23dc6d.png"
	],
	[
		"0xc52e56f5a53ccc02db5503d915497e568c762ebb",
		"Like Nastya",
		"Like Nastya",
		"ERC1155",
		"/images/nfts/0xc52e56f5a53ccc02db5503d915497e568c762ebb.png"
	],
	[
		"0x35485d89150457ce01098bca4bd47d5daad43f59",
		"Club721 DAO",
		"721DAO",
		"ERC1155",
		"/images/nfts/0x35485d89150457ce01098bca4bd47d5daad43f59.png"
	],
	[
		"0x2f71f82d082cf7ece361f5992679fadd52b645a9",
		"Ultiverse - ES:0rigin",
		"ES0",
		"ERC1155",
		"/images/nfts/0x2f71f82d082cf7ece361f5992679fadd52b645a9.png"
	],
	[
		"0xbcfb3fe26c0edab8faf695690b146f2887a559e1",
		"MoonPepes & Frens",
		"MoonPepes & Frens",
		"ERC1155",
		"/images/nfts/0xbcfb3fe26c0edab8faf695690b146f2887a559e1.png"
	],
	[
		"0xfd95333967120f5c5bacd70ef9bb3e05032e284b",
		"Repeat Offenders - Originals",
		"Repeat Offenders - Originals",
		"ERC1155",
		"/images/nfts/0xfd95333967120f5c5bacd70ef9bb3e05032e284b.png"
	],
	[
		"0xcdd5a1cacd12ad5f44e3a673b7900498237eb37c",
		"MPL Kitbag",
		"MPL Kitbag",
		"ERC1155",
		"/images/nfts/0xcdd5a1cacd12ad5f44e3a673b7900498237eb37c.png"
	],
	[
		"0x364f4ef26f167713329f7deffa7aff2bc95024ec",
		"Monster Bricks",
		"Monster Bricks",
		"ERC1155",
		"/images/nfts/0x364f4ef26f167713329f7deffa7aff2bc95024ec.png"
	],
	[
		"0x33a4cfc925ad40e5bb2b9b2462d7a1a5a5da4476",
		"PILLS",
		"PILLS",
		"ERC1155",
		"/images/nfts/0x33a4cfc925ad40e5bb2b9b2462d7a1a5a5da4476.png"
	],
	[
		"0x7973bf63218d305f908307fcd5a89b093b88c594",
		"Kiki Exchange Center",
		"KEC",
		"ERC1155",
		"/images/nfts/0x7973bf63218d305f908307fcd5a89b093b88c594.png"
	],
	[
		"0x707c45204afa2abed0c322e1458540ddb0320851",
		"MXJXN Editions",
		"MXJXN Editions",
		"ERC1155",
		"/images/nfts/0x707c45204afa2abed0c322e1458540ddb0320851.png"
	],
	[
		"0x02c9df6bea4342a8c79dc2350c671269f426a0a0",
		"Marina Gayrati photography",
		"Marina Gayrati photography",
		"ERC1155",
		"/images/nfts/0x02c9df6bea4342a8c79dc2350c671269f426a0a0.png"
	],
	[
		"0xa413f007bb3f20595b7f304ffd2e580481433a16",
		"MetaTravelers: Genesis Stone",
		"MTGS",
		"ERC1155",
		"/images/nfts/0xa413f007bb3f20595b7f304ffd2e580481433a16.png"
	],
	[
		"0xe67f3935211942d5a049ddf43222321088c5308f",
		"WS Editions by Francesco",
		"WS Editions by Francesco",
		"ERC1155",
		"/images/nfts/0xe67f3935211942d5a049ddf43222321088c5308f.png"
	],
	[
		"0x62f61d85f785a6cf933172285b33d70295051e2b",
		"The Subtle Art of Not Giving a Fuck x Mark Manson",
		"The Subtle Art of Not Giving a Fuck x Mark Manson",
		"ERC1155",
		"/images/nfts/0x62f61d85f785a6cf933172285b33d70295051e2b.png"
	],
	[
		"0x741f319d2d0ee184c609b7a8d1d245acf7810f7f",
		"Ape Madness",
		"APEM",
		"ERC1155",
		"/images/nfts/0x741f319d2d0ee184c609b7a8d1d245acf7810f7f.png"
	],
	[
		"0xdebdb584d8d2ca6b5d82cb5ce2f6df41912e843d",
		"WG Tools Premium Membership",
		"WG Tools Premium Membership",
		"ERC1155",
		"/images/nfts/0xdebdb584d8d2ca6b5d82cb5ce2f6df41912e843d.png"
	],
	[
		"0xfd8f77b8f8d5ee123bf0c4c7f7fd2b8992baf66e",
		"GENESIS Zodiacs Collection by Raquel Casilda",
		"GENESIS Zodiacs Collection by Raquel Casilda",
		"ERC1155",
		"/images/nfts/0xfd8f77b8f8d5ee123bf0c4c7f7fd2b8992baf66e.png"
	],
	[
		"0x433595e5b0f99f20deff2286190a174b8b8d010d",
		"Card of Dreams",
		"CoD",
		"ERC1155",
		"/images/nfts/0x433595e5b0f99f20deff2286190a174b8b8d010d.png"
	],
	[
		"0x1590be4a1f8b1c35052eb49ca7cadecd5d824a87",
		"ArtFromAbove VS Rob Dawkins",
		"ArtFromAbove VS Rob Dawkins",
		"ERC1155",
		"/images/nfts/0x1590be4a1f8b1c35052eb49ca7cadecd5d824a87.png"
	],
	[
		"0x9c3dc67faea065777a4bb301eefecb80e54cfaab",
		"Spacegate Pass",
		"SGP",
		"ERC1155",
		"/images/nfts/0x9c3dc67faea065777a4bb301eefecb80e54cfaab.png"
	],
	[
		"0x799c89f79fe794a58b426aef6b6d7d9f26d6c809",
		"OmniFusion Soul Shards",
		"OmniFusion Soul Shards",
		"ERC1155",
		"/images/nfts/0x799c89f79fe794a58b426aef6b6d7d9f26d6c809.png"
	],
	[
		"0xd14f86e007078fce3d353ac47f0374540e99c1d1",
		"Nightkids Fearless Token",
		"Nightkids Fearless Token",
		"ERC1155",
		"/images/nfts/0xd14f86e007078fce3d353ac47f0374540e99c1d1.png"
	],
	[
		"0x82ce91c3e59f360c475deae9d99c11aae02b7e00",
		"vita - token",
		"vita",
		"ERC1155",
		"/images/nfts/0x82ce91c3e59f360c475deae9d99c11aae02b7e00.png"
	],
	[
		"0xd36b44784486832c05626be3691d458df362a2a3",
		"Junior Mints by Jason Norton",
		"Junior Mints by Jason Norton",
		"ERC1155",
		"/images/nfts/0xd36b44784486832c05626be3691d458df362a2a3.png"
	],
	[
		"0x045ec645abb6b768206b079cddb59677cdb071a5",
		"Mehdi Candau Editions",
		"Mehdi Candau Editions",
		"ERC1155",
		"/images/nfts/0x045ec645abb6b768206b079cddb59677cdb071a5.png"
	],
	[
		"0x99ff13e70ad1de4335a636f029ef510749d67b39",
		"VSP x EightBit.me",
		"VSP x EightBit.me",
		"ERC1155",
		"/images/nfts/0x99ff13e70ad1de4335a636f029ef510749d67b39.png"
	],
	[
		"0xb74c9f1eccddefbef7c017b97bd3a2f24a0081f8",
		"Rehash: A Web3 Podcast",
		"Rehash: A Web3 Podcast",
		"ERC1155",
		"/images/nfts/0xb74c9f1eccddefbef7c017b97bd3a2f24a0081f8.png"
	],
	[
		"0xa25bf81aacdb5e610eaf91a889975bba43398cf1",
		"A-LPHA NET",
		"A-LPHA NET",
		"ERC1155",
		"/images/nfts/0xa25bf81aacdb5e610eaf91a889975bba43398cf1.png"
	],
	[
		"0xb17f49c7a2aa4a7218ab09dea8bc716d672e0ba4",
		"Magic53 Collaborations",
		"Magic53 Collaborations",
		"ERC1155",
		"/images/nfts/0xb17f49c7a2aa4a7218ab09dea8bc716d672e0ba4.png"
	],
	[
		"0xc552292732f7a9a4a494da557b47bc01e01722df",
		"Superlative Magic Laboratory",
		"Superlative Magic Laboratory",
		"ERC1155",
		"/images/nfts/0xc552292732f7a9a4a494da557b47bc01e01722df.png"
	],
	[
		"0x5235f0805c95b8ff308517d60cca210aabd83d45",
		"ladida V2",
		"ladida",
		"ERC1155",
		"/images/nfts/0x5235f0805c95b8ff308517d60cca210aabd83d45.png"
	],
	[
		"0xefa035308b9954a783345c3f8a70020350d10c51",
		"Ukiyo Founders Pendant",
		"UKIYOFP",
		"ERC1155",
		"/images/nfts/0xefa035308b9954a783345c3f8a70020350d10c51.png"
	],
	[
		"0xe4198ea3db52d3c9c8b9ec27c221c2de123e3ce1",
		"Insomnia Jitters",
		"Insomnia Jitters",
		"ERC1155",
		"/images/nfts/0xe4198ea3db52d3c9c8b9ec27c221c2de123e3ce1.png"
	],
	[
		"0x44cd64d6325911cbefdda23c7ec80608ef9893f7",
		"BearBox_Official",
		"❣",
		"ERC1155",
		"/images/nfts/0x44cd64d6325911cbefdda23c7ec80608ef9893f7.png"
	],
	[
		"0x4ee96ded71daaac2f36f2929fd599486d6e9e355",
		"Blood, Sweat & Tears - Editions",
		"Blood, Sweat & Tears - Editions",
		"ERC1155",
		"/images/nfts/0x4ee96ded71daaac2f36f2929fd599486d6e9e355.png"
	],
	[
		"0xde95471123ce8bd81ad8e7ba553e019da110b654",
		"Wilderness to Blockchain - Editions",
		"WtoB",
		"ERC1155",
		"/images/nfts/0xde95471123ce8bd81ad8e7ba553e019da110b654.png"
	],
	[
		"0xd21215c22872715e8af9b6d391927a8b05f650cc",
		"ELYSIUM // EDITIONS BY COLOURWRKS",
		"ELYSIUM // EDITIONS BY COLOURWRKS",
		"ERC1155",
		"/images/nfts/0xd21215c22872715e8af9b6d391927a8b05f650cc.png"
	],
	[
		"0xab089ddf4ceb6a27a5348dcc432933228b725ac0",
		"CryptoCrawlerz",
		"CRAWLZ",
		"ERC1155",
		"/images/nfts/0xab089ddf4ceb6a27a5348dcc432933228b725ac0.png"
	],
	[
		"0x65b7990ab726ef573c176bb8b9b5464de6ea6c89",
		"Two Bit Bears + Honey",
		"Two Bit Bears + Honey",
		"ERC1155",
		"/images/nfts/0x65b7990ab726ef573c176bb8b9b5464de6ea6c89.png"
	],
	[
		"0xcb6768a968440187157cfe13b67cac82ef6cc5a4",
		"PepemonWorld",
		"PEPEMON",
		"ERC1155",
		"/images/nfts/0xcb6768a968440187157cfe13b67cac82ef6cc5a4.png"
	],
	[
		"0xb18a905f3ddab68fab1561cec15e3d14d25d8a39",
		"Gareth Emery & LSR/CITY Black Card",
		"Gareth Emery & LSR/CITY Black Card",
		"ERC1155",
		"/images/nfts/0xb18a905f3ddab68fab1561cec15e3d14d25d8a39.png"
	],
	[
		"0x2e16303e294a88ff01d905d1481eadca22294f03",
		"Myth Division Alpha Access Coin",
		"Myth Division Alpha Access Coin",
		"ERC1155",
		"/images/nfts/0x2e16303e294a88ff01d905d1481eadca22294f03.png"
	],
	[
		"0x7b9be0b44ca4504b3a19956082b0619b3cee194b",
		"heathjack trippy",
		"heathjack trippy",
		"ERC1155",
		"/images/nfts/0x7b9be0b44ca4504b3a19956082b0619b3cee194b.png"
	],
	[
		"0x5e4ae17ab58d4dba6742fcbf740c1c73686a0b75",
		"Ghost Club Comic",
		"MUMUJU",
		"ERC1155",
		"/images/nfts/0x5e4ae17ab58d4dba6742fcbf740c1c73686a0b75.png"
	],
	[
		"0xb1adb5e009ed49fb161623aca59bb3eaada3dad3",
		"So Sue Me!",
		"So Sue Me!",
		"ERC1155",
		"/images/nfts/0xb1adb5e009ed49fb161623aca59bb3eaada3dad3.png"
	],
	[
		"0xf27df94d4359f25744f136fa84118ca6c4db8850",
		"Hydroglyphics",
		"Hydroglyphics",
		"ERC1155",
		"/images/nfts/0xf27df94d4359f25744f136fa84118ca6c4db8850.png"
	],
	[
		"0x679004a7bb659faaa816bd433fad43953413e156",
		"DeadHeads Green Room",
		"DeadHeads Green Room",
		"ERC1155",
		"/images/nfts/0x679004a7bb659faaa816bd433fad43953413e156.png"
	],
	[
		"0x5c14ec36f8316f7078de695b846f096dc5769aa4",
		"Cyberpunk New York City",
		"Cyberpunk New York City",
		"ERC1155",
		"/images/nfts/0x5c14ec36f8316f7078de695b846f096dc5769aa4.png"
	],
	[
		"0x630f9ff82f82a68671df290ffaec2d767df77a07",
		"Heartbreak Bear Genesis Collection",
		"HBB",
		"ERC1155",
		"/images/nfts/0x630f9ff82f82a68671df290ffaec2d767df77a07.png"
	],
	[
		"0x5748417cd78db6fe9dbb43de26e0ade5a9fe799f",
		"OUTDATED ONH",
		"NK",
		"ERC1155",
		"/images/nfts/0x5748417cd78db6fe9dbb43de26e0ade5a9fe799f.png"
	],
	[
		"0x46ee7947cd4fc601b4ab39d14bad260806d33a87",
		"Ethernity's Master Collection",
		"Ethernity's Master Collection",
		"ERC1155",
		"/images/nfts/0x46ee7947cd4fc601b4ab39d14bad260806d33a87.png"
	],
	[
		"0x452270bc08d924e0f0deb455bdbdb27ff0c642b8",
		"Praise Golden Membership Card",
		"PraiseGold",
		"ERC1155",
		"/images/nfts/0x452270bc08d924e0f0deb455bdbdb27ff0c642b8.png"
	],
	[
		"0x59a79e83a2bc84abe2839f8cd779181b551e6b89",
		"WeArePiplWorld Land",
		"WeAreLand",
		"ERC1155",
		"/images/nfts/0x59a79e83a2bc84abe2839f8cd779181b551e6b89.png"
	],
	[
		"0xe84b6f0f95605744de5ca3ce028d939f65b6294b",
		"Hiroshi Noma",
		"NOMA",
		"ERC1155",
		"/images/nfts/0xe84b6f0f95605744de5ca3ce028d939f65b6294b.png"
	],
	[
		"0x8dc16d4da7b06b1c506c90e91c9562ac4469b492",
		"Mithraeum Lore",
		"Mithraeum Lore",
		"ERC1155",
		"/images/nfts/0x8dc16d4da7b06b1c506c90e91c9562ac4469b492.png"
	],
	[
		"0xbabdb0273d074bf4bd62d0fc9b70d81fbc889837",
		"Bad Luck Club Editions",
		"Bad Luck Club Editions",
		"ERC1155",
		"/images/nfts/0xbabdb0273d074bf4bd62d0fc9b70d81fbc889837.png"
	],
	[
		"0x2c58f1b63106ae2419060960d8395f420a561f32",
		"Editions By Ujval Pasupuleti",
		"Editions By Ujval Pasupuleti",
		"ERC1155",
		"/images/nfts/0x2c58f1b63106ae2419060960d8395f420a561f32.png"
	],
	[
		"0xc6faaaddaee6953be305512fe59b3be43f2a61f1",
		"Danny's Drawings",
		"Danny's Drawings",
		"ERC1155",
		"/images/nfts/0xc6faaaddaee6953be305512fe59b3be43f2a61f1.png"
	],
	[
		"0xa6df7b5714d56296aa107de3a84d8f3006451709",
		"The Quadratic Necromancer",
		"TQN",
		"ERC1155",
		"/images/nfts/0xa6df7b5714d56296aa107de3a84d8f3006451709.png"
	],
	[
		"0xdd7cf92726dab1be0c6843eb4b99b988c2480f8b",
		"polka-1155 V4",
		"polka-1155",
		"ERC1155"
	],
	[
		"0xfd8a79321b2472e86231f6e1ddd3c04f3ece3178",
		"Editions x TRSL",
		"Editions x TRSL",
		"ERC1155",
		"/images/nfts/0xfd8a79321b2472e86231f6e1ddd3c04f3ece3178.png"
	],
	[
		"0xecc901341ab97ec165e1dc089bcd9723344dd1fe",
		"MetaVolution: Obelisks",
		"OBELISK",
		"ERC1155",
		"/images/nfts/0xecc901341ab97ec165e1dc089bcd9723344dd1fe.png"
	],
	[
		"0x74ccdc1fff66e715138eab2ce308fffe530c4cef",
		"Creative Photographers Club Official",
		"CPC",
		"ERC1155",
		"/images/nfts/0x74ccdc1fff66e715138eab2ce308fffe530c4cef.png"
	],
	[
		"0xb772d2095211938e75c80974fd20fc5a35cf32ca",
		"Crown Drops",
		"Crown Drops",
		"ERC1155",
		"/images/nfts/0xb772d2095211938e75c80974fd20fc5a35cf32ca.png"
	],
	[
		"0x99e8c3edc84fe2ed8373f5ce3e3c26a475d93be8",
		"Tankies Otheside Skateboard",
		"Tankies Otheside Skateboard",
		"ERC1155",
		"/images/nfts/0x99e8c3edc84fe2ed8373f5ce3e3c26a475d93be8.png"
	],
	[
		"0xf12fd10f278c1fb29a62d6338d050cf2832f8080",
		"Space Fight",
		"SFR",
		"ERC1155",
		"/images/nfts/0xf12fd10f278c1fb29a62d6338d050cf2832f8080.png"
	],
	[
		"0xc3a09be9466a7ef1e40617927723062f36c0cb3d",
		"devilvalley keys",
		"DVK",
		"ERC1155",
		"/images/nfts/0xc3a09be9466a7ef1e40617927723062f36c0cb3d.png"
	],
	[
		"0xe689768260d53c1dd8a4a7719199869c02deea46",
		"Fount Gallery",
		"Fount Gallery",
		"ERC1155",
		"/images/nfts/0xe689768260d53c1dd8a4a7719199869c02deea46.png"
	],
	[
		"0x521945fdcea1626e056e89a3abbdee709cf3a837",
		"DEATHWISH CANDLES",
		"DEATHWISH CANDLES",
		"ERC1155",
		"/images/nfts/0x521945fdcea1626e056e89a3abbdee709cf3a837.png"
	],
	[
		"0x668544689304390c71036353a9d112e2b8a5cab9",
		"m0niqueXOXO 1155 Collection",
		"m0niqueXOXO 1155 Collection",
		"ERC1155",
		"/images/nfts/0x668544689304390c71036353a9d112e2b8a5cab9.png"
	],
	[
		"0x730151b8286ca0508a19a9d5c47fe91fdd9a6737",
		"Nifty Island: Legendary Palms",
		"Nifty Island: Legendary Palms",
		"ERC1155",
		"/images/nfts/0x730151b8286ca0508a19a9d5c47fe91fdd9a6737.png"
	],
	[
		"0x5aa8060533965f9eb67c2141fb18fef2dfac0d5e",
		"KERO 3D EDITIONS",
		"KERO 3D EDITIONS",
		"ERC1155",
		"/images/nfts/0x5aa8060533965f9eb67c2141fb18fef2dfac0d5e.png"
	],
	[
		"0xdabbd72ff6cd41b783edc6efc5ddf18818e80e8c",
		"BRAQFA",
		"BFA",
		"ERC1155",
		"/images/nfts/0xdabbd72ff6cd41b783edc6efc5ddf18818e80e8c.png"
	],
	[
		"0x6488392611297d71cda666e45229beb554660d69",
		"Fin's Random Creations",
		"CRE",
		"ERC1155",
		"/images/nfts/0x6488392611297d71cda666e45229beb554660d69.png"
	],
	[
		"0x6a10411a541da899c8e21f9a74b86555fa7fbf42",
		"#SODACONNECTION BY HANNES WINDRATH",
		"#SODACONNECTION BY HANNES WINDRATH",
		"ERC1155",
		"/images/nfts/0x6a10411a541da899c8e21f9a74b86555fa7fbf42.png"
	],
	[
		"0x44e6e5faa5bf7b401fb3e98c9599ae1b2c3dc7cc",
		"PuzlPunk Parts",
		"PUZLPARTS",
		"ERC1155",
		"/images/nfts/0x44e6e5faa5bf7b401fb3e98c9599ae1b2c3dc7cc.png"
	],
	[
		"0x71eb5c179ceb640160853144cbb8df5bd24ab5cc",
		"ExpansionPhunks",
		"PHUNX",
		"ERC1155",
		"/images/nfts/0x71eb5c179ceb640160853144cbb8df5bd24ab5cc.png"
	],
	[
		"0x41c21befc85a4a7a5fb6a3432258f3ed6c694e1d",
		"Ice Armor",
		"Ice Armor",
		"ERC1155",
		"/images/nfts/0x41c21befc85a4a7a5fb6a3432258f3ed6c694e1d.png"
	],
	[
		"0x1f9ba39e57d641ba303af8c2ac3d8b9dc4cfa27e",
		"Ozbren Editions",
		"Ozbren Editions",
		"ERC1155",
		"/images/nfts/0x1f9ba39e57d641ba303af8c2ac3d8b9dc4cfa27e.png"
	],
	[
		"0x4985863310a6309a89c18b8c0df7c323d0187c1f",
		"pplpleasr",
		"pplpleasr",
		"ERC1155",
		"/images/nfts/0x4985863310a6309a89c18b8c0df7c323d0187c1f.png"
	],
	[
		"0x39c95b533b29d99d2aa697adb68954232d4c56ca",
		"Sean Keeton",
		"Sean Keeton",
		"ERC1155",
		"/images/nfts/0x39c95b533b29d99d2aa697adb68954232d4c56ca.png"
	],
	[
		"0x991eacae34bd9cde0775bfae950e29d3808c17f7",
		"P.S. i love you",
		"P.S. i love you",
		"ERC1155",
		"/images/nfts/0x991eacae34bd9cde0775bfae950e29d3808c17f7.png"
	],
	[
		"0x62cf887b0084ea2adbce95f15dd6e8547ab53f50",
		"MetaBeasts Season 1",
		"RAW",
		"ERC1155",
		"/images/nfts/0x62cf887b0084ea2adbce95f15dd6e8547ab53f50.png"
	],
	[
		"0x494be6c5c191c34d6810b98fde2f61832a46d47d",
		"SOKOVA editions",
		"SOKOVA editions",
		"ERC1155",
		"/images/nfts/0x494be6c5c191c34d6810b98fde2f61832a46d47d.png"
	],
	[
		"0x02f61675f08234dfca2866d42cec3c7ad7e5d389",
		"One Piece hhh",
		"cool",
		"ERC1155",
		"/images/nfts/0x02f61675f08234dfca2866d42cec3c7ad7e5d389.png"
	],
	[
		"0xd1606499804ff42b04ce7d9143adbe568bf50f1c",
		"Humanoids Trait Factory",
		"TRAIT",
		"ERC1155",
		"/images/nfts/0xd1606499804ff42b04ce7d9143adbe568bf50f1c.png"
	],
	[
		"0x4abc2be290f8bb4326ec71fed3ed322b79d9f88a",
		"Shintaro Kago - Eve of Revolution",
		"Shintaro Kago - Eve of Revolution",
		"ERC1155",
		"/images/nfts/0x4abc2be290f8bb4326ec71fed3ed322b79d9f88a.png"
	],
	[
		"0x8a7cad54c01a4afbe8f17732330db1943f62b9ec",
		"Falconaut MetaCubes",
		"Falconaut MetaCubes",
		"ERC1155",
		"/images/nfts/0x8a7cad54c01a4afbe8f17732330db1943f62b9ec.png"
	],
	[
		"0x6ff0db1bde0763db159619c55bff809f21bdb667",
		"Ely: Genesis",
		"ELYGENESIS",
		"ERC1155",
		"/images/nfts/0x6ff0db1bde0763db159619c55bff809f21bdb667.png"
	],
	[
		"0xc2d5bc0fd802bf72f2722617d27558f39fe5804b",
		"FMM X2",
		"???? ",
		"ERC1155",
		"/images/nfts/0xc2d5bc0fd802bf72f2722617d27558f39fe5804b.png"
	],
	[
		"0x4ffbeb558f90a972bff5c241eb7f3757f4f35537",
		"Editions by Tim Slane",
		"Editions by Tim Slane",
		"ERC1155",
		"/images/nfts/0x4ffbeb558f90a972bff5c241eb7f3757f4f35537.png"
	],
	[
		"0x4c8fffbb3ab30fbc20d02c72329f4c85b8c08e96",
		"Metaborg Manga by Giovanni Motta",
		"Metaborg Manga by Giovanni Motta",
		"ERC1155",
		"/images/nfts/0x4c8fffbb3ab30fbc20d02c72329f4c85b8c08e96.png"
	],
	[
		"0xe534bd009274f9b891f80e3e42475f92e439f20c",
		"Moody Ape Club (Official)",
		"MAC",
		"ERC1155",
		"/images/nfts/0xe534bd009274f9b891f80e3e42475f92e439f20c.png"
	],
	[
		"0x212590b0dac9502e0591b79db4cedeb6356dcc36",
		"RTFKT x NIKE AR HOODIE PRE FORGED",
		"RTFKT x NIKE AR HOODIE PRE FORGED",
		"ERC1155",
		"/images/nfts/0x212590b0dac9502e0591b79db4cedeb6356dcc36.png"
	],
	[
		"0xab1eee4c8fb7bd7917aa6240770a3570d84cd92d",
		"MetaMiner NFT",
		"MetaMiner NFT",
		"ERC1155",
		"/images/nfts/0xab1eee4c8fb7bd7917aa6240770a3570d84cd92d.png"
	],
	[
		"0xbc1c216bc13f30cdaacf5f449da8d3b9a6cd6244",
		"LOST CATS UNIVERSE",
		"LOSTCATS",
		"ERC1155",
		"/images/nfts/0xbc1c216bc13f30cdaacf5f449da8d3b9a6cd6244.png"
	],
	[
		"0x07e3e16759e8fc160ff4ab7ab28276b9cbdab21e",
		"Duck Survival Pass",
		"BDP",
		"ERC1155",
		"/images/nfts/0x07e3e16759e8fc160ff4ab7ab28276b9cbdab21e.png"
	],
	[
		"0x32b249ba9fb9d79f536402dfd71190866433a777",
		"The Mystery Map",
		"SRMB",
		"ERC1155",
		"/images/nfts/0x32b249ba9fb9d79f536402dfd71190866433a777.png"
	],
	[
		"0xde34a8c62a94c133af06d7010ed2703df83637ee",
		"Pillheads: Dispensary",
		"Pillheads: Dispensary",
		"ERC1155",
		"/images/nfts/0xde34a8c62a94c133af06d7010ed2703df83637ee.png"
	],
	[
		"0x879cd97000c0567b370b9a97540a1fd56b8d1b2b",
		"The Drops - Multiple Editions",
		"drops",
		"ERC1155",
		"/images/nfts/0x879cd97000c0567b370b9a97540a1fd56b8d1b2b.png"
	],
	[
		"0x9654473254c8150b3d5c1984dd1eb4978fc3c2a5",
		"WenWL Ruby Pass",
		"WenWL Ruby Pass",
		"ERC1155",
		"/images/nfts/0x9654473254c8150b3d5c1984dd1eb4978fc3c2a5.png"
	],
	[
		"0x92ec3bc583145bdf299db38eefcc08f9432d8064",
		"Xynergy Collection",
		"Xynergy Collection",
		"ERC1155",
		"/images/nfts/0x92ec3bc583145bdf299db38eefcc08f9432d8064.png"
	],
	[
		"0xe18a32192ed95b0fe9d70d19e5025f103475d7ba",
		"HASH by Pob Studio",
		"HASH by Pob Studio",
		"ERC1155",
		"/images/nfts/0xe18a32192ed95b0fe9d70d19e5025f103475d7ba.png"
	],
	[
		"0x034b0c39c576de448960ff978f741fbb8a32bd50",
		"EDITIONS BY BORT.TV",
		"EDITIONS BY BORT.TV",
		"ERC1155",
		"/images/nfts/0x034b0c39c576de448960ff978f741fbb8a32bd50.png"
	],
	[
		"0x7caa317676cc1f6d304241de6549e6986ac37605",
		"Noah Addis Editions",
		"Noah Addis Editions",
		"ERC1155",
		"/images/nfts/0x7caa317676cc1f6d304241de6549e6986ac37605.png"
	],
	[
		"0x0a8d803e3e29f07bd58e3061d9aee7b57813df2c",
		"Syndicate 893",
		"Syndicate 893",
		"ERC1155",
		"/images/nfts/0x0a8d803e3e29f07bd58e3061d9aee7b57813df2c.png"
	],
	[
		"0x074c532b1659bc47065a6c4e784f8965971c3e7c",
		"The Rebelz",
		"REBEL",
		"ERC1155",
		"/images/nfts/0x074c532b1659bc47065a6c4e784f8965971c3e7c.png"
	],
	[
		"0x75cc2b29bbea090a65456927c56d3a098fc44194",
		"Age of Robots",
		"Age of Robots",
		"ERC1155",
		"/images/nfts/0x75cc2b29bbea090a65456927c56d3a098fc44194.png"
	],
	[
		"0xb0dd8ce6448ee318f66ad3a7ae3dc77e434fc244",
		"Balloon Town MintPass",
		"BTP",
		"ERC1155",
		"/images/nfts/0xb0dd8ce6448ee318f66ad3a7ae3dc77e434fc244.png"
	],
	[
		"0xf6fede92794291fca094b55ce95fb3f2f3122569",
		"UAE NFT - From Desert To Mars | Kaiwan Shaban",
		"UAENFT",
		"ERC1155",
		"/images/nfts/0xf6fede92794291fca094b55ce95fb3f2f3122569.png"
	],
	[
		"0x8efda17955f641feb2f2a2315701505ea8a498a6",
		"Gimo '19",
		"Gimo '19",
		"ERC1155",
		"/images/nfts/0x8efda17955f641feb2f2a2315701505ea8a498a6.png"
	],
	[
		"0x712fa06099c73aec44ff402e5d6d51db75be46bb",
		"Augmented Apes",
		"AUGS",
		"ERC1155",
		"/images/nfts/0x712fa06099c73aec44ff402e5d6d51db75be46bb.png"
	],
	[
		"0xfa1a07056c48dcba4b5e9e71aacc6aa791a93929",
		"Wizards & Dragons Game - Sacrificial Altar",
		"Wizards & Dragons Game - Sacrificial Altar",
		"ERC1155",
		"/images/nfts/0xfa1a07056c48dcba4b5e9e71aacc6aa791a93929.png"
	],
	[
		"0x3ac4333f4d6603f9fad904f0c19ea6d7dec4fa8b",
		"Editions by Manfred Teh",
		"Editions by Manfred Teh",
		"ERC1155",
		"/images/nfts/0x3ac4333f4d6603f9fad904f0c19ea6d7dec4fa8b.png"
	],
	[
		"0x8dd480b11df28ce56c44c98ca3ae9eea372d7d2b",
		"Phat Pandaz Gas Pass",
		"Phat Pandaz Gas Pass",
		"ERC1155",
		"/images/nfts/0x8dd480b11df28ce56c44c98ca3ae9eea372d7d2b.png"
	],
	[
		"0x4532ffdc5e02861a25cfc537e5bc692960009fd9",
		"Butters x Editions",
		"Butters x Editions",
		"ERC1155",
		"/images/nfts/0x4532ffdc5e02861a25cfc537e5bc692960009fd9.png"
	],
	[
		"0x9652e8acd023a7c8e76bc40a51020ab5264b0a26",
		"SOLORAISE  La semilla de la Rosa",
		"SOLO",
		"ERC1155",
		"/images/nfts/0x9652e8acd023a7c8e76bc40a51020ab5264b0a26.png"
	],
	[
		"0xe312cfbd731ba5f393bfbb4743bc002c5f676f79",
		"Fuzzle Space Cases",
		"FSPCA",
		"ERC1155",
		"/images/nfts/0xe312cfbd731ba5f393bfbb4743bc002c5f676f79.png"
	],
	[
		"0xfb8c978208b42b6fe851416c585c057283a5dbcb",
		"Open edition LURK",
		"Open edition LURK",
		"ERC1155",
		"/images/nfts/0xfb8c978208b42b6fe851416c585c057283a5dbcb.png"
	],
	[
		"0x0546f6d538a2abf964ae4d537a131b226eba9285",
		"findbalance",
		"findbalance",
		"ERC1155",
		"/images/nfts/0x0546f6d538a2abf964ae4d537a131b226eba9285.png"
	],
	[
		"0x087ae4a8810715dd4be0905dbfb504e4c431f5e1",
		"Nipple's Tale - My Editions",
		"Nipple's Tale - My Editions",
		"ERC1155",
		"/images/nfts/0x087ae4a8810715dd4be0905dbfb504e4c431f5e1.png"
	],
	[
		"0xf81ead7c021ef1aef78ec1ffe1e4abd0ecdb216d",
		"Zxdiacs - A Ghxsts Collection",
		"Zxdiacs - A Ghxsts Collection",
		"ERC1155",
		"/images/nfts/0xf81ead7c021ef1aef78ec1ffe1e4abd0ecdb216d.png"
	],
	[
		"0x30d93d1377246e18d929332bd59582f1c316dffe",
		"gotoplanb's SINKHOLES",
		"gotoplanb's SINKHOLES",
		"ERC1155",
		"/images/nfts/0x30d93d1377246e18d929332bd59582f1c316dffe.png"
	],
	[
		"0xfedf89efc966506910f3e7e398852f0abac8bf75",
		"The MinimaI Collection",
		"The MinimaI Collection",
		"ERC1155",
		"/images/nfts/0xfedf89efc966506910f3e7e398852f0abac8bf75.png"
	],
	[
		"0xe18506abd3ad1eb743862c2e8eaf6aeaa406c621",
		"JNC",
		"JNC",
		"ERC1155",
		"/images/nfts/0xe18506abd3ad1eb743862c2e8eaf6aeaa406c621.png"
	],
	[
		"0xff4b0f47a253c5e87747bd50ff53cae4ccdd64af",
		"SUDOBURGER: INGREDIENTS",
		"ING",
		"ERC1155",
		"/images/nfts/0xff4b0f47a253c5e87747bd50ff53cae4ccdd64af.png"
	],
	[
		"0xc95b71f651ac9d58499e908beb4a2be8b8879e24",
		"Hot Garbage",
		"HOTGRAB",
		"ERC1155"
	],
	[
		"0xb8fcab85c037d85cb67ecd5c66bb649d14f03168",
		"Dawn Key",
		"DK",
		"ERC1155",
		"/images/nfts/0xb8fcab85c037d85cb67ecd5c66bb649d14f03168.png"
	],
	[
		"0xa7eb348c63460a9d34d57cd88ea3533867fe609d",
		"antistress V2",
		"antistress",
		"ERC1155",
		"/images/nfts/0xa7eb348c63460a9d34d57cd88ea3533867fe609d.png"
	],
	[
		"0x31158181b4b91a423bfdc758fc3bf8735711f9c5",
		"The Forgotten Runes Infinity Veil",
		"The Forgotten Runes Infinity Veil",
		"ERC1155",
		"/images/nfts/0x31158181b4b91a423bfdc758fc3bf8735711f9c5.png"
	],
	[
		"0x0ed518b5d9872129c4fb23cee7bae27ef3701f87",
		"Vinnie Hager x Hearts: Love Letters",
		"Vinnie Hager x Hearts: Love Letters",
		"ERC1155",
		"/images/nfts/0x0ed518b5d9872129c4fb23cee7bae27ef3701f87.png"
	],
	[
		"0x13997d98c3dc1e8023348973513bac90c870f11f",
		"Average TV",
		"Average TV",
		"ERC1155",
		"/images/nfts/0x13997d98c3dc1e8023348973513bac90c870f11f.png"
	],
	[
		"0xac5f90beeb72572a38b6ca64ba00a429478502c7",
		"Vanity by Philippe Pasqua",
		"Vanity by Philippe Pasqua",
		"ERC1155",
		"/images/nfts/0xac5f90beeb72572a38b6ca64ba00a429478502c7.png"
	],
	[
		"0x870449c93ea2fee41ba172f3de48d17178da9df4",
		"Editions x OMD",
		"Editions x OMD",
		"ERC1155",
		"/images/nfts/0x870449c93ea2fee41ba172f3de48d17178da9df4.png"
	],
	[
		"0x79b03f6c53e1e6a8d35d2e72451c14bf6adee513",
		"The Puny Factory",
		"The Puny Factory",
		"ERC1155",
		"/images/nfts/0x79b03f6c53e1e6a8d35d2e72451c14bf6adee513.png"
	],
	[
		"0x495f947276749ce646f68ac8c248420045cb7b5e",
		"OS Shared Storefront Collection",
		"OPENSTORE",
		"ERC1155"
	],
	[
		"0xda7d42b6167f1497346d7b2336a6d7a603026db1",
		"Purrnelopes KittyVault Purrks",
		"Purrnelopes KittyVault Purrks",
		"ERC1155",
		"/images/nfts/0xda7d42b6167f1497346d7b2336a6d7a603026db1.png"
	],
	[
		"0x1cefdd54caf164489de90911aa8a4671e37a6a14",
		"The Memes Mash-Up",
		"The Memes Mash-Up",
		"ERC1155",
		"/images/nfts/0x1cefdd54caf164489de90911aa8a4671e37a6a14.png"
	],
	[
		"0xefa7827f0f5a59a0e88da2d20d335d95a9dd6b7f",
		"Meta Pass Collection",
		"Meta Pass Collection",
		"ERC1155",
		"/images/nfts/0xefa7827f0f5a59a0e88da2d20d335d95a9dd6b7f.png"
	],
	[
		"0x49e63c5822a87cd56684ecd796f008c0c77cc4e3",
		"A-List NFT",
		"A-List",
		"ERC1155",
		"/images/nfts/0x49e63c5822a87cd56684ecd796f008c0c77cc4e3.png"
	],
	[
		"0x96f3f85095f6cf377041a78638b26cd743ec13a1",
		"Invocation - Telefon Tel Aviv x EFFIXX",
		"Invocation - Telefon Tel Aviv x EFFIXX",
		"ERC1155",
		"/images/nfts/0x96f3f85095f6cf377041a78638b26cd743ec13a1.png"
	],
	[
		"0x65419ca220451b704bc02f1b2a0740a66f99cbc3",
		"HashBastards: Special Editions",
		"HashBastards: Special Editions",
		"ERC1155",
		"/images/nfts/0x65419ca220451b704bc02f1b2a0740a66f99cbc3.png"
	],
	[
		"0x4898fe8a04b2b48f0617fcee551dfb95b0c00f11",
		"Sup Records",
		"SUP?",
		"ERC1155",
		"/images/nfts/0x4898fe8a04b2b48f0617fcee551dfb95b0c00f11.png"
	],
	[
		"0xe23be8fde000ddd8fd2726f396d2444246169fe5",
		"Kenneth Cole X Mental Health Coalition",
		"Kenneth Cole X Mental Health Coalition",
		"ERC1155",
		"/images/nfts/0xe23be8fde000ddd8fd2726f396d2444246169fe5.png"
	],
	[
		"0xddcc98e76712863274a99d206a7419aa7ff30932",
		"Vignette City",
		"Vignette City",
		"ERC1155",
		"/images/nfts/0xddcc98e76712863274a99d206a7419aa7ff30932.png"
	],
	[
		"0x3530d178aa7ad7c88a98eb66a0f1949910477ee0",
		"Transmitters by Surreal",
		"SURRT",
		"ERC1155",
		"/images/nfts/0x3530d178aa7ad7c88a98eb66a0f1949910477ee0.png"
	],
	[
		"0xd9eaf4d690ab1b535a49c8d5b74578befba57999",
		"Born to Travel x Editions",
		"Born to Travel x Editions",
		"ERC1155",
		"/images/nfts/0xd9eaf4d690ab1b535a49c8d5b74578befba57999.png"
	],
	[
		"0x792e792c61d8f2787a5c848e5465b76bbe282e49",
		"NFT2040 Wearables",
		"NFT2040 Wearables",
		"ERC1155",
		"/images/nfts/0x792e792c61d8f2787a5c848e5465b76bbe282e49.png"
	],
	[
		"0x18e04e6e3f741eb678afcbaf37a4c95f7e574e98",
		"Nefturians Artifacts",
		"Nefturians Artifacts",
		"ERC1155",
		"/images/nfts/0x18e04e6e3f741eb678afcbaf37a4c95f7e574e98.png"
	],
	[
		"0x980fc459e2c459066f5073ee5b0414632a0f9586",
		"MAX NOUN AND FRENS by WORLD OF NOUN",
		"MAX NOUN AND FRENS by WORLD OF NOUN",
		"ERC1155",
		"/images/nfts/0x980fc459e2c459066f5073ee5b0414632a0f9586.png"
	],
	[
		"0x6b0c2f42ae50f51ccab7bd20ee8274b69ed7030c",
		"WEBTREE PASS",
		"WEBTREE PASS",
		"ERC1155",
		"/images/nfts/0x6b0c2f42ae50f51ccab7bd20ee8274b69ed7030c.png"
	],
	[
		"0x311b6bb865f3350df3fec0c5a63ba2451f06587d",
		"OctoronRift - Genesis Collection",
		"ORG",
		"ERC1155",
		"/images/nfts/0x311b6bb865f3350df3fec0c5a63ba2451f06587d.png"
	],
	[
		"0x3eae46c145f6c9f355ae3e28f0a30a48c40111d1",
		"ANZOMEZ GLITCH EDITIONS",
		"ANZOMEZ GLITCH EDITIONS",
		"ERC1155",
		"/images/nfts/0x3eae46c145f6c9f355ae3e28f0a30a48c40111d1.png"
	],
	[
		"0x384aa03d8b7cc6a818e7cb7a037ba0cd81af9fdf",
		"Illuvium Promo Collection",
		"ILV-NFT",
		"ERC1155",
		"/images/nfts/0x384aa03d8b7cc6a818e7cb7a037ba0cd81af9fdf.png"
	],
	[
		"0xda19881d412d0613bcec199ec3aa603233ba4cd0",
		"HypeX Origin",
		"HypeX Origin",
		"ERC1155",
		"/images/nfts/0xda19881d412d0613bcec199ec3aa603233ba4cd0.png"
	],
	[
		"0x6682819a3b5ddc616e7efd6c16e5a84ffaf18a2f",
		"ThankYouX Editions",
		"ThankYouX Editions",
		"ERC1155",
		"/images/nfts/0x6682819a3b5ddc616e7efd6c16e5a84ffaf18a2f.png"
	],
	[
		"0xe882630c4be2b9e14c97b03cc6c54edb2f8b3e90",
		"Dissrup",
		"DSRP",
		"ERC1155",
		"/images/nfts/0xe882630c4be2b9e14c97b03cc6c54edb2f8b3e90.png"
	],
	[
		"0xc1e4b493029906025addb2a3083794d9a0307b0c",
		"yeetulity DROPS",
		"yeetulity DROPS",
		"ERC1155",
		"/images/nfts/0xc1e4b493029906025addb2a3083794d9a0307b0c.png"
	],
	[
		"0x3e30d7e2c9ddb9d9600e939946d859901952139d",
		"Edition Bastards",
		"Edition Bastards",
		"ERC1155",
		"/images/nfts/0x3e30d7e2c9ddb9d9600e939946d859901952139d.png"
	],
	[
		"0x5ef428e773497cc129c380e6cbb0715e4c5169ed",
		"RAGS Bytes",
		"RAGS Bytes",
		"ERC1155",
		"/images/nfts/0x5ef428e773497cc129c380e6cbb0715e4c5169ed.png"
	],
	[
		"0x5f9a457fda1f23ed6768b03dac8083f2693da331",
		"VSP IRL Experiences",
		"VSPIRL",
		"ERC1155",
		"/images/nfts/0x5f9a457fda1f23ed6768b03dac8083f2693da331.png"
	],
	[
		"0x23562a5cb6eddc1572efbe1b40d91ca25952019e",
		"BASQKEK EDITION 1155",
		"BASQKEK EDITION 1155",
		"ERC1155",
		"/images/nfts/0x23562a5cb6eddc1572efbe1b40d91ca25952019e.png"
	],
	[
		"0x64387c570ecb2d47f152ed50d41942a3ee76d251",
		"Flamingos_",
		"FMG",
		"ERC1155",
		"/images/nfts/0x64387c570ecb2d47f152ed50d41942a3ee76d251.png"
	],
	[
		"0x9672807270284d28a8d7f7e282b47d4c7db2ab12",
		"PURPLE VERSE UTILITY",
		"PURPLE VERSE UTILITY",
		"ERC1155",
		"/images/nfts/0x9672807270284d28a8d7f7e282b47d4c7db2ab12.png"
	],
	[
		"0x8297d8e55c27aa6ce2d8a65b1fa3debb02410efc",
		"OSF's 7 Deadly Sins",
		"OSF's 7 Deadly Sins",
		"ERC1155",
		"/images/nfts/0x8297d8e55c27aa6ce2d8a65b1fa3debb02410efc.png"
	],
	[
		"0x575ab132cb7fb581c911c53848405ee19f9dec75",
		"Secret Venues",
		"Secret Venues",
		"ERC1155",
		"/images/nfts/0x575ab132cb7fb581c911c53848405ee19f9dec75.png"
	],
	[
		"0x3a1c88addec56e725ba2a432bc89eeaa5d068753",
		"Enso Trophies",
		"Enso Trophies",
		"ERC1155",
		"/images/nfts/0x3a1c88addec56e725ba2a432bc89eeaa5d068753.png"
	],
	[
		"0xcb255da7e89072156299ba3b6a937c0b1a5b2d86",
		"0xCrystals",
		"0XCRYSTALS",
		"ERC1155",
		"/images/nfts/0xcb255da7e89072156299ba3b6a937c0b1a5b2d86.png"
	],
	[
		"0xa980cfeb656454daa5cfe6cdc00efaad72c7069a",
		"K9 NFT Club Membership",
		"K9NFT",
		"ERC1155",
		"/images/nfts/0xa980cfeb656454daa5cfe6cdc00efaad72c7069a.png"
	],
	[
		"0xe1c851705f7178903d16ff0fcb8dd9ad5e71d2ac",
		"NFT Factory Community Nodes",
		"NFTCN",
		"ERC1155",
		"/images/nfts/0xe1c851705f7178903d16ff0fcb8dd9ad5e71d2ac.png"
	],
	[
		"0xa58b5224e2fd94020cb2837231b2b0e4247301a6",
		"Voxels Wearables",
		"WEAR",
		"ERC1155",
		"/images/nfts/0xa58b5224e2fd94020cb2837231b2b0e4247301a6.png"
	],
	[
		"0x36b10d3fdfaeb0dd38fc459ccb7152416e39e2a2",
		"WTF.INDUSTRIES GEAR",
		"WTF.INDUSTRIES GEAR",
		"ERC1155",
		"/images/nfts/0x36b10d3fdfaeb0dd38fc459ccb7152416e39e2a2.png"
	],
	[
		"0x15926f83433afecbefe78bb1513109430c404d5a",
		"Shintaro Kago - Dessication",
		"DRP",
		"ERC1155",
		"/images/nfts/0x15926f83433afecbefe78bb1513109430c404d5a.png"
	],
	[
		"0xa6310c39faa5e21cc29c4b283c6cd4ef51c00d21",
		"Etholvants Booster Syringe",
		"Etholvants Booster Syringe",
		"ERC1155",
		"/images/nfts/0xa6310c39faa5e21cc29c4b283c6cd4ef51c00d21.png"
	],
	[
		"0x1f31636be569701a1b7c43d35035eb4946e4ea21",
		"ENTER THE RUNIVERSE",
		"ENTER THE RUNIVERSE",
		"ERC1155",
		"/images/nfts/0x1f31636be569701a1b7c43d35035eb4946e4ea21.png"
	],
	[
		"0xf4680c917a873e2dd6ead72f9f433e74eb9c623c",
		"Twerky Club",
		"TWYBGS",
		"ERC1155",
		"/images/nfts/0xf4680c917a873e2dd6ead72f9f433e74eb9c623c.png"
	],
	[
		"0xd386ff8b13e20a943ee0929da4228a32ce4f5261",
		"SODA Cans - Society of Degenerate Apes",
		"SODA Cans - Society of Degenerate Apes",
		"ERC1155",
		"/images/nfts/0xd386ff8b13e20a943ee0929da4228a32ce4f5261.png"
	],
	[
		"0xb5f13237da8fd839181e6b532c468a909bc7f579",
		"88MPH In SoHo Editions",
		"88MPH In SoHo Editions",
		"ERC1155",
		"/images/nfts/0xb5f13237da8fd839181e6b532c468a909bc7f579.png"
	],
	[
		"0x24b56813472f519646382d71ff165a6afc1e2149",
		"SMILESSS X SHIESTY-SEASON",
		"SMILESSS X SHIESTY-SEASON",
		"ERC1155",
		"/images/nfts/0x24b56813472f519646382d71ff165a6afc1e2149.png"
	],
	[
		"0x8e0e35eaf7ef42bd297e7e9c19aaf7849051beec",
		"Rekt Anniversary Tickets",
		"RAT01",
		"ERC1155"
	],
	[
		"0x212e9ee334c1a391f597165a380b4d88f1523306",
		"E.X.A GLITCH",
		"E.X.A GLITCH",
		"ERC1155",
		"/images/nfts/0x212e9ee334c1a391f597165a380b4d88f1523306.png"
	],
	[
		"0xd7edd06f6300c04ac453e33dd726096be2d49efa",
		"Mech Identity Protocol Tickets",
		"MIPT",
		"ERC1155",
		"/images/nfts/0xd7edd06f6300c04ac453e33dd726096be2d49efa.png"
	],
	[
		"0x6a7ab7711adcfe67141df82ae853787ca93a7797",
		"Ape Drops 03 : An 8th",
		"Ape Drops 03 : An 8th",
		"ERC1155",
		"/images/nfts/0x6a7ab7711adcfe67141df82ae853787ca93a7797.png"
	],
	[
		"0x39aefb036dabf9d29d33f357dcc3dce06dc2b899",
		"SpooKeys",
		"SpooKeys",
		"ERC1155",
		"/images/nfts/0x39aefb036dabf9d29d33f357dcc3dce06dc2b899.png"
	],
	[
		"0x9fe6f41ca212049a3a887288db069cd9c22258a6",
		"Critter Passes",
		"Critter Passes",
		"ERC1155",
		"/images/nfts/0x9fe6f41ca212049a3a887288db069cd9c22258a6.png"
	],
	[
		"0x0db15d5918e575cdc2fa6e9c46ae4a2edfc44c7d",
		"UNICORNDAO",
		"UDAO",
		"ERC1155",
		"/images/nfts/0x0db15d5918e575cdc2fa6e9c46ae4a2edfc44c7d.png"
	],
	[
		"0x46e6d63a164ef9d6b73cf43ee6248184ce78a3eb",
		"ZANOZ(AI) art collection",
		"ZANOZ(AI) art collection",
		"ERC1155",
		"/images/nfts/0x46e6d63a164ef9d6b73cf43ee6248184ce78a3eb.png"
	],
	[
		"0xa909871f46d2cd8fb015d176483ffc3c330dcda4",
		"Animated Bored Ape V2",
		"ABA",
		"ERC1155",
		"/images/nfts/0xa909871f46d2cd8fb015d176483ffc3c330dcda4.png"
	],
	[
		"0xbb7a981f5f14b82ac3d3866304c8996d1d82be46",
		"888 Inner Circle The Drops",
		"888 Inner Circle The Drops",
		"ERC1155",
		"/images/nfts/0xbb7a981f5f14b82ac3d3866304c8996d1d82be46.png"
	],
	[
		"0x26e23bc2ad0a72e5cbc57a309261750a2e63d61f",
		"Hugo Korhonen Editions",
		"Hugo Korhonen Editions",
		"ERC1155",
		"/images/nfts/0x26e23bc2ad0a72e5cbc57a309261750a2e63d61f.png"
	],
	[
		"0x7f03765fd4736ea2153a7860a8d94833be8d1348",
		"donkey-brained dumpster fire",
		"donkey-brained dumpster fire",
		"ERC1155",
		"/images/nfts/0x7f03765fd4736ea2153a7860a8d94833be8d1348.png"
	],
	[
		"0xb85070695a7599e3f6a8d46e8bd716d1923769b8",
		"Thorchain Collectibles",
		"THOR",
		"ERC1155",
		"/images/nfts/0xb85070695a7599e3f6a8d46e8bd716d1923769b8.png"
	],
	[
		"0xb3d5d5279cd7aee7151e7c7d2e8d21068da3ac5f",
		"Kaleidoscope of the soul",
		"Kaleidoscope of the soul",
		"ERC1155",
		"/images/nfts/0xb3d5d5279cd7aee7151e7c7d2e8d21068da3ac5f.png"
	],
	[
		"0x67f075fe70f697cda2d3f88811a80e95c452dc5e",
		"Club 7",
		"Club 7",
		"ERC1155",
		"/images/nfts/0x67f075fe70f697cda2d3f88811a80e95c452dc5e.png"
	],
	[
		"0x61bd6b10c7bf3e548f8659d016079e099510a4dc",
		"Rarebit Bunnies",
		"RAREBIT",
		"ERC1155",
		"/images/nfts/0x61bd6b10c7bf3e548f8659d016079e099510a4dc.png"
	],
	[
		"0xec61d433072b7e6fd6c8a75de716040c0c6139d5",
		"SAYC Labs (MPs)",
		"SAYC",
		"ERC1155",
		"/images/nfts/0xec61d433072b7e6fd6c8a75de716040c0c6139d5.png"
	],
	[
		"0x145b250cce77604209e52f9cabbb408721f01f9c",
		"Shattered Eon Raw Resources",
		"RAW",
		"ERC1155",
		"/images/nfts/0x145b250cce77604209e52f9cabbb408721f01f9c.png"
	],
	[
		"0x04e9206d6718f3f9f1b2d806e5207dda1d17e057",
		"Grassetti's Meme Kingdom",
		"Grassetti's Meme Kingdom",
		"ERC1155",
		"/images/nfts/0x04e9206d6718f3f9f1b2d806e5207dda1d17e057.png"
	],
	[
		"0xa2d458b436830b8eacfeb290f32c37fdeaefb3a5",
		"Dan Hawk Photo Editions",
		"Dan Hawk Photo Editions",
		"ERC1155",
		"/images/nfts/0xa2d458b436830b8eacfeb290f32c37fdeaefb3a5.png"
	],
	[
		"0x83d061ea0b237c01bd251695d79d2b1d5f34f789",
		"Genetic Chain Member Lounge",
		"GCML",
		"ERC1155",
		"/images/nfts/0x83d061ea0b237c01bd251695d79d2b1d5f34f789.png"
	],
	[
		"0xe5e09510e359fd0f50e3a7b7e9c8c0daba9c8f01",
		"The Image is The Utility",
		"The Image is The Utility",
		"ERC1155",
		"/images/nfts/0xe5e09510e359fd0f50e3a7b7e9c8c0daba9c8f01.png"
	],
	[
		"0xc4ff327949466909d6c5b32640f44a21e9e1afff",
		"MojoPals by MojoHeads",
		"MojoPals by MojoHeads",
		"ERC1155",
		"/images/nfts/0xc4ff327949466909d6c5b32640f44a21e9e1afff.png"
	],
	[
		"0x00808c4201db673c00950b291ecd23bb9c1c6b0f",
		"Turf Shop",
		"TURF_OBJ",
		"ERC1155",
		"/images/nfts/0x00808c4201db673c00950b291ecd23bb9c1c6b0f.png"
	],
	[
		"0x4570340e5c091f020ff31bc6012ba3b2eb83ad82",
		"FEWOCiOUS x ComplexCon",
		"FEWOCiOUS x ComplexCon",
		"ERC1155",
		"/images/nfts/0x4570340e5c091f020ff31bc6012ba3b2eb83ad82.png"
	],
	[
		"0x93b60ac4ab09cb9f652279476fa13640d025f540",
		"SPACE+ - Launch Pass",
		"SPACE+ - Launch Pass",
		"ERC1155",
		"/images/nfts/0x93b60ac4ab09cb9f652279476fa13640d025f540.png"
	],
	[
		"0x93b41ce1ebf1808ba4a4a934acb0d061c22d71b0",
		"Kyle Reader Editions",
		"Kyle Reader Editions",
		"ERC1155",
		"/images/nfts/0x93b41ce1ebf1808ba4a4a934acb0d061c22d71b0.png"
	],
	[
		"0x7b6c53c08667d606734d9d3b61973caf1ffb5339",
		"Gutter Art Editions",
		"Gutter Art Editions",
		"ERC1155",
		"/images/nfts/0x7b6c53c08667d606734d9d3b61973caf1ffb5339.png"
	],
	[
		"0xb461fbaa2c73efb2ca219901da10f792bfeac5de",
		"Only at Silence",
		"Only at Silence",
		"ERC1155",
		"/images/nfts/0xb461fbaa2c73efb2ca219901da10f792bfeac5de.png"
	],
	[
		"0x73161a3ff526eee0d24c37ca69678aaa8e14f344",
		"Skull Of The Unwilling WZRD",
		"Skull Of The Unwilling WZRD",
		"ERC1155",
		"/images/nfts/0x73161a3ff526eee0d24c37ca69678aaa8e14f344.png"
	],
	[
		"0xe31a31450bce6603f53f1d8577a20682c0f89590",
		"D3AD DOODL3S by Twickert",
		"RAW",
		"ERC1155",
		"/images/nfts/0xe31a31450bce6603f53f1d8577a20682c0f89590.png"
	],
	[
		"0x0db8c099b426677f575d512874d45a767e9acc3c",
		"reNFT - Genesis Cards",
		"reNFT - Genesis Cards",
		"ERC1155",
		"/images/nfts/0x0db8c099b426677f575d512874d45a767e9acc3c.png"
	],
	[
		"0x12f01af7fbeafb088e1d3384bff67390f41e8404",
		"FVCK_BAEIGE//",
		"FVCK_BAEIGE//",
		"ERC1155",
		"/images/nfts/0x12f01af7fbeafb088e1d3384bff67390f41e8404.png"
	],
	[
		"0x0a6d448547c6da0ed11e10a2358ee0b4f20a8a28",
		"Order of the Glass Apes by Brian Morris",
		"Order of the Glass Apes by Brian Morris",
		"ERC1155",
		"/images/nfts/0x0a6d448547c6da0ed11e10a2358ee0b4f20a8a28.png"
	],
	[
		"0xa755c08a422434c480076c80692d9aee67bcea2b",
		"Monster Cave - Mystery Storage",
		"Monster Cave - Mystery Storage",
		"ERC1155",
		"/images/nfts/0xa755c08a422434c480076c80692d9aee67bcea2b.png"
	],
	[
		"0x76c795f55ffa4a0675f35f7a68e6189586b45e29",
		"SPOONER NFT",
		"SPOONER NFT",
		"ERC1155",
		"/images/nfts/0x76c795f55ffa4a0675f35f7a68e6189586b45e29.png"
	],
	[
		"0xc0322a9f9a8d18601983a775d2724291b1750486",
		"Unidentified contract - zcvyHzBBwN - old",
		"Unidentified contract - zcvyHzBBwN - old",
		"ERC1155"
	],
	[
		"0x5cc36d97f315cf2b5941b37d8fbe9d70dea08214",
		"WEEDGANG.GAME - PLOT",
		"WEEDGANG.GAME - PLOT",
		"ERC1155",
		"/images/nfts/0x5cc36d97f315cf2b5941b37d8fbe9d70dea08214.png"
	],
	[
		"0x9499240977b4ef5be690e26ca76723cf4224afb2",
		"14 Karat by Hafftka",
		"14 Karat by Hafftka",
		"ERC1155",
		"/images/nfts/0x9499240977b4ef5be690e26ca76723cf4224afb2.png"
	],
	[
		"0x83e148c5070265545c38fa79a7b7e6518b5a2ab5",
		"Peekcells Editions",
		"PEEKED",
		"ERC1155",
		"/images/nfts/0x83e148c5070265545c38fa79a7b7e6518b5a2ab5.png"
	],
	[
		"0x98991c7d743b6b429386f99a4d3e61b61ecd3e56",
		"MFERS UP TOO LATE",
		"MFERS UP TOO LATE",
		"ERC1155",
		"/images/nfts/0x98991c7d743b6b429386f99a4d3e61b61ecd3e56.png"
	],
	[
		"0xa9586e4861df33d0740203744fd25a8c95df32d9",
		"TinySeed",
		"TINYSEED",
		"ERC1155",
		"/images/nfts/0xa9586e4861df33d0740203744fd25a8c95df32d9.png"
	],
	[
		"0x87a3747c9942d8351cc85aac2f94807b27a37c0d",
		"Animoca Brands Launchpad",
		"Animoca Brands Launchpad",
		"ERC1155",
		"/images/nfts/0x87a3747c9942d8351cc85aac2f94807b27a37c0d.png"
	],
	[
		"0x6d6776b068a01257e5a54a2fa1b2e393760415cb",
		"yeethz editionz",
		"yeethz editionz",
		"ERC1155",
		"/images/nfts/0x6d6776b068a01257e5a54a2fa1b2e393760415cb.png"
	],
	[
		"0x653f0bd2ff97fc3abe60cdda097cbe83f65ef670",
		"Unidentified contract - 97KgckaAsp",
		"Unidentified contract - 97KgckaAsp",
		"ERC1155"
	],
	[
		"0x3f5692ba570f6902b8b1a4505ce67226261e7947",
		"Year of the Woman Beholders Pass",
		"YOTWBP",
		"ERC1155",
		"/images/nfts/0x3f5692ba570f6902b8b1a4505ce67226261e7947.png"
	],
	[
		"0x2462a72de9256d8a64bab6267b9001ec02098231",
		"HOB - The Void",
		"HOB",
		"ERC1155",
		"/images/nfts/0x2462a72de9256d8a64bab6267b9001ec02098231.png"
	],
	[
		"0xc50f11281b0821e5a9ad3dd77c33eaf82d3094f4",
		"Dystolab Crates",
		"Dystolab Crates",
		"ERC1155",
		"/images/nfts/0xc50f11281b0821e5a9ad3dd77c33eaf82d3094f4.png"
	],
	[
		"0x745ceb516031fa7cb7fdddeb5022976f4214429c",
		"Editions by illkoncept",
		"Editions by illkoncept",
		"ERC1155",
		"/images/nfts/0x745ceb516031fa7cb7fdddeb5022976f4214429c.png"
	],
	[
		"0x868e599deb9fe07a808638bc7d4f2dac16eed218",
		"Beat Foundry Season Pass",
		"BFSP",
		"ERC1155",
		"/images/nfts/0x868e599deb9fe07a808638bc7d4f2dac16eed218.png"
	],
	[
		"0x402c84de2ce49af88f5e2ef3710ff89bfed36cb6",
		"Bean Fertilizer",
		"FERT",
		"ERC1155",
		"/images/nfts/0x402c84de2ce49af88f5e2ef3710ff89bfed36cb6.png"
	],
	[
		"0x28435e3a6165a04fae73ca647a28ec62fc7ab9e2",
		"Rekt Juice",
		"Rekt Juice",
		"ERC1155",
		"/images/nfts/0x28435e3a6165a04fae73ca647a28ec62fc7ab9e2.png"
	],
	[
		"0xe85d7a471d1dbcd0403cd305c88b3a89aa9654a8",
		"Phto. Exhibit",
		"PHTO",
		"ERC1155",
		"/images/nfts/0xe85d7a471d1dbcd0403cd305c88b3a89aa9654a8.png"
	],
	[
		"0x446ec504d8d57291158bd454343d56b07e2d8aeb",
		"Skully Boy Editions",
		"RAW",
		"ERC1155",
		"/images/nfts/0x446ec504d8d57291158bd454343d56b07e2d8aeb.png"
	],
	[
		"0x61097cc82c503ff2d95ce11edd93e0f0cab30c59",
		"The Duck Song Meme",
		"DUCKSONG",
		"ERC1155",
		"/images/nfts/0x61097cc82c503ff2d95ce11edd93e0f0cab30c59.png"
	],
	[
		"0x1b2ee073c415e57a7e2e03c8f3db36a32689d402",
		"Editions by Pauline Faieff",
		"Editions by Pauline Faieff",
		"ERC1155",
		"/images/nfts/0x1b2ee073c415e57a7e2e03c8f3db36a32689d402.png"
	],
	[
		"0x59b03c31cca3331a0a593a5c0179f39f8d9b0df9",
		"(IGNORE)",
		"SILK",
		"ERC1155",
		"/images/nfts/0x59b03c31cca3331a0a593a5c0179f39f8d9b0df9.png"
	],
	[
		"0x70ec58ec3a2ad80300a81968753aee56ebda89a1",
		"Refraction Season 0 Founding Artists Collection",
		"RS0C",
		"ERC1155",
		"/images/nfts/0x70ec58ec3a2ad80300a81968753aee56ebda89a1.png"
	],
	[
		"0x0f3587f78307a7605dccdb54cad883138888c6db",
		"Gutter Aztecs",
		"Gutter Aztecs",
		"ERC1155",
		"/images/nfts/0x0f3587f78307a7605dccdb54cad883138888c6db.png"
	],
	[
		"0x5864a2eef51cee5fdbee8bc4649e6d38a2ff5a97",
		"Bankless Locations",
		"BLOC",
		"ERC1155",
		"/images/nfts/0x5864a2eef51cee5fdbee8bc4649e6d38a2ff5a97.png"
	],
	[
		"0x87084477f7172dfc303a31efd33e9ca6ea8cabce",
		"Mint Media Pass",
		"MCPass",
		"ERC1155",
		"/images/nfts/0x87084477f7172dfc303a31efd33e9ca6ea8cabce.png"
	],
	[
		"0x0eede4764cfdfcd5dac0e00b3b7f4778c0cc994e",
		"Kristoph Galland",
		"GLND",
		"ERC1155",
		"/images/nfts/0x0eede4764cfdfcd5dac0e00b3b7f4778c0cc994e.png"
	],
	[
		"0xe24e2dd0ee5b3cac25f078ae04fbe4f0594b77ed",
		"Proofer DAO",
		"PRFRD",
		"ERC1155"
	],
	[
		"0xb3c326722107155ce1c6ed508ee256d357e19b1f",
		"Anocam x Editions",
		"Anocam x Editions",
		"ERC1155",
		"/images/nfts/0xb3c326722107155ce1c6ed508ee256d357e19b1f.png"
	],
	[
		"0xbda7ab5ea94aa0cb2709029a7033cb1e0f081f34",
		"KPK Relics",
		"KPK Relics",
		"ERC1155",
		"/images/nfts/0xbda7ab5ea94aa0cb2709029a7033cb1e0f081f34.png"
	],
	[
		"0xc80b37583a368bc594a290fccda1effc1cd91b8e",
		"Omega Alpha",
		"Omega Alpha",
		"ERC1155",
		"/images/nfts/0xc80b37583a368bc594a290fccda1effc1cd91b8e.png"
	],
	[
		"0x2e734269c869bda3ea6550f510d2514f2d66de71",
		"StrongBlock NFTs",
		"StrongBlock NFTs",
		"ERC1155",
		"/images/nfts/0x2e734269c869bda3ea6550f510d2514f2d66de71.png"
	],
	[
		"0xaec4ea20cff1897cdf8b7be329b0e2d1d49b9817",
		"mfer x wavelength",
		"WLXMF",
		"ERC1155",
		"/images/nfts/0xaec4ea20cff1897cdf8b7be329b0e2d1d49b9817.png"
	],
	[
		"0xee0d3feb1c2c9d17f92980200e396eacfc17ab75",
		"The Loyalists Collection",
		"FFLC",
		"ERC1155"
	],
	[
		"0x69156568f9a49dd3ba584e493184ef2ecd6816f0",
		"Scout Pass",
		"SCOUTPASS",
		"ERC1155",
		"/images/nfts/0x69156568f9a49dd3ba584e493184ef2ecd6816f0.png"
	],
	[
		"0xc7b9d8483fd01c379a4141b2ee7c39442172b259",
		"Rickstro Frens",
		"Rickstro Frens",
		"ERC1155",
		"/images/nfts/0xc7b9d8483fd01c379a4141b2ee7c39442172b259.png"
	],
	[
		"0x8d4fd4856724950bd82321bdd42082f665fe38f1",
		"Oklahoma Beast",
		"Oklahoma Beast",
		"ERC1155",
		"/images/nfts/0x8d4fd4856724950bd82321bdd42082f665fe38f1.png"
	],
	[
		"0xb07202dc1f0d6543676887a876e16e5f0f75a28b",
		"Open Head NFT Shop",
		"OHSHOP",
		"ERC1155",
		"/images/nfts/0xb07202dc1f0d6543676887a876e16e5f0f75a28b.png"
	],
	[
		"0x46d13ae3061cec9f703f2b1dfd6b1c1ddf711361",
		"AlphaMint",
		"AlphaMint",
		"ERC1155",
		"/images/nfts/0x46d13ae3061cec9f703f2b1dfd6b1c1ddf711361.png"
	],
	[
		"0xdeef8aee409f397da205b3be5e6a93a9e12739cf",
		"Loveless City Limiteds",
		"Loveless City Limiteds",
		"ERC1155",
		"/images/nfts/0xdeef8aee409f397da205b3be5e6a93a9e12739cf.png"
	],
	[
		"0x7042b77b7f9b791a03ef5002388cc4b09cc2b676",
		"JLC - Welcome to the Jungleverse",
		"JLC - Welcome to the Jungleverse",
		"ERC1155",
		"/images/nfts/0x7042b77b7f9b791a03ef5002388cc4b09cc2b676.png"
	],
	[
		"0x3d9e59cd5572598fb2d2d33d19845a12ef14a036",
		"Seize The GM",
		"Seize The GM",
		"ERC1155",
		"/images/nfts/0x3d9e59cd5572598fb2d2d33d19845a12ef14a036.png"
	],
	[
		"0xa7002cff99c73fbeba18647bb1c936775795860f",
		"OCM Earth",
		"OCM Earth",
		"ERC1155",
		"/images/nfts/0xa7002cff99c73fbeba18647bb1c936775795860f.png"
	],
	[
		"0x923f33fd70f718a77ad7dd876cefdd464b950d45",
		"FREEDOM EDITIONS",
		"FREEDOM EDITIONS",
		"ERC1155",
		"/images/nfts/0x923f33fd70f718a77ad7dd876cefdd464b950d45.png"
	],
	[
		"0x53831fe77d50fe71258b27cf617b01128869b522",
		"AMOEA Universe Passport",
		"AMOEA Universe Passport",
		"ERC1155",
		"/images/nfts/0x53831fe77d50fe71258b27cf617b01128869b522.png"
	],
	[
		"0x71b11ac923c967cd5998f23f6dae0d779a6ac8af",
		"Astro Frens",
		"Astro Frens",
		"ERC1155",
		"/images/nfts/0x71b11ac923c967cd5998f23f6dae0d779a6ac8af.png"
	],
	[
		"0x15c04503b096a14fd17e750e0b1128f89126f6cb",
		"Tigerbob Concepts & Myths",
		"Tigerbob Concepts & Myths",
		"ERC1155",
		"/images/nfts/0x15c04503b096a14fd17e750e0b1128f89126f6cb.png"
	],
	[
		"0x6db7ed2282d98aabfa1b6f3d0a94e0dcdcdbb9a2",
		"PETPAWS",
		"PAWS",
		"ERC1155",
		"/images/nfts/0x6db7ed2282d98aabfa1b6f3d0a94e0dcdcdbb9a2.png"
	],
	[
		"0xa03b5a5bbc8f248254021763af5dde6e4498a029",
		"Eric Rubens Editions",
		"Eric Rubens Editions",
		"ERC1155",
		"/images/nfts/0xa03b5a5bbc8f248254021763af5dde6e4498a029.png"
	],
	[
		"0x74586890a9ad48b5a75b3bf7d9f19e716fa28bbb",
		"Flight Editions by Hendro Soetrisno curated by NiftyMetaGirl",
		"Flight Editions by Hendro Soetrisno curated by NiftyMetaGirl",
		"ERC1155",
		"/images/nfts/0x74586890a9ad48b5a75b3bf7d9f19e716fa28bbb.png"
	],
	[
		"0x56214525566c9f8dcbbd17a108690162476426fa",
		"Mintopoly Moved to Polygon!!",
		"Mintopoly Moved to Polygon!!",
		"ERC1155",
		"/images/nfts/0x56214525566c9f8dcbbd17a108690162476426fa.png"
	],
	[
		"0x827b2e2ef493a521042a39ac5f564ebed04fd863",
		"Blended Color",
		"Blended Color",
		"ERC1155",
		"/images/nfts/0x827b2e2ef493a521042a39ac5f564ebed04fd863.png"
	],
	[
		"0x8692a7264ac1315e884190c82e1ee6542a040d0f",
		"| PATHS |",
		"| PATHS |",
		"ERC1155",
		"/images/nfts/0x8692a7264ac1315e884190c82e1ee6542a040d0f.png"
	],
	[
		"0x5351105753bdbc3baa908a0c04f1468535749c3d",
		"RUDE BOYS",
		"RUDE",
		"ERC1155",
		"/images/nfts/0x5351105753bdbc3baa908a0c04f1468535749c3d.png"
	],
	[
		"0x7229600b699dd90b8e7be0575d02db58f409d2cb",
		"ETHJETS",
		"EJ",
		"ERC1155",
		"/images/nfts/0x7229600b699dd90b8e7be0575d02db58f409d2cb.png"
	],
	[
		"0xd6dcbb506869304fc1bd1b39780bd6c1f93e83ee",
		"NIGHT ANTHEM editions",
		"NIGHT ANTHEM editions",
		"ERC1155",
		"/images/nfts/0xd6dcbb506869304fc1bd1b39780bd6c1f93e83ee.png"
	],
	[
		"0x4d57b36c1555b48a63feab9f90d38a9b7ebc4419",
		"Moonray Presale Pass",
		"Moonray Presale Pass",
		"ERC1155",
		"/images/nfts/0x4d57b36c1555b48a63feab9f90d38a9b7ebc4419.png"
	],
	[
		"0x9202c99b02284b99d7a6bc67180abaf37163f1e6",
		"Ape-In Productions: Take Off",
		"Ape-In Productions: Take Off",
		"ERC1155",
		"/images/nfts/0x9202c99b02284b99d7a6bc67180abaf37163f1e6.png"
	],
	[
		"0xaa9ae09510462cebcfdce50cb900fa83f38a23c0",
		"Stampu",
		"STAMPU",
		"ERC1155",
		"/images/nfts/0xaa9ae09510462cebcfdce50cb900fa83f38a23c0.png"
	],
	[
		"0xd00c546442096a6fffdaae36e08358e4df1e85ab",
		"WildAD - Wildalps Airdrops",
		"WildAD - Wildalps Airdrops",
		"ERC1155",
		"/images/nfts/0xd00c546442096a6fffdaae36e08358e4df1e85ab.png"
	],
	[
		"0x9b6db880376d0dbbcadea88f7c9bac253b2308c5",
		"Meta Angels x Adobe Artist-in-Residence Collection",
		"Meta Angels x Adobe Artist-in-Residence Collection",
		"ERC1155",
		"/images/nfts/0x9b6db880376d0dbbcadea88f7c9bac253b2308c5.png"
	],
	[
		"0xa3f226d6633ca531c1f8e26cfbf724b1eee9202e",
		"Jake's World Editions",
		"Jake's World Editions",
		"ERC1155",
		"/images/nfts/0xa3f226d6633ca531c1f8e26cfbf724b1eee9202e.png"
	],
	[
		"0x0db8d95c9d3624623af962c6a3a1e21d35d6e44d",
		"CyberBox Tools",
		"CBXP",
		"ERC1155",
		"/images/nfts/0x0db8d95c9d3624623af962c6a3a1e21d35d6e44d.png"
	],
	[
		"0x6bb76529fed05ab2b8255a645cf28e71211bce7c",
		"Metaprints Social Hub Pass",
		"MPSHP",
		"ERC1155",
		"/images/nfts/0x6bb76529fed05ab2b8255a645cf28e71211bce7c.png"
	],
	[
		"0xb32979486938aa9694bfc898f35dbed459f44424",
		"Nyan Cat (Official)",
		"NYAN",
		"ERC1155",
		"/images/nfts/0xb32979486938aa9694bfc898f35dbed459f44424.png"
	],
	[
		"0x6df054c15a2233587df1974814db197402cf3bab",
		"Danny's Drawings",
		"Danny's Drawings",
		"ERC1155",
		"/images/nfts/0x6df054c15a2233587df1974814db197402cf3bab.png"
	],
	[
		"0xf6b553b879f1beb3c46cf1635bc66039b59fc42d",
		"Walker World: Bored Box Jetpacks",
		"CWBBJ",
		"ERC1155",
		"/images/nfts/0xf6b553b879f1beb3c46cf1635bc66039b59fc42d.png"
	],
	[
		"0x0161b706371e0725e96c67cf55b2384540374cf1",
		"Tom Sachs: Rocket Factory - Mothership Tickets",
		"Tom Sachs: Rocket Factory - Mothership Tickets",
		"ERC1155",
		"/images/nfts/0x0161b706371e0725e96c67cf55b2384540374cf1.png"
	],
	[
		"0x79f1d765540256aa93a96602c87a2948b4d06c11",
		"TL Bear",
		"TLB",
		"ERC1155",
		"/images/nfts/0x79f1d765540256aa93a96602c87a2948b4d06c11.png"
	],
	[
		"0x1a7598c6cb6f63fda0ddf4f7129fca3c9a779c84",
		"Half-Skull of WZRD",
		"Half-Skull of WZRD",
		"ERC1155",
		"/images/nfts/0x1a7598c6cb6f63fda0ddf4f7129fca3c9a779c84.png"
	],
	[
		"0x9480d9c0377a283f8024d09982e843718262e694",
		"POKEBH",
		"PKBH",
		"ERC1155",
		"/images/nfts/0x9480d9c0377a283f8024d09982e843718262e694.png"
	],
	[
		"0x75eeab04cbeefc40ade03d154a48aa80c7c1c57b",
		"Kane Mayfield - A Year & A Day",
		"Kane Mayfield - A Year & A Day",
		"ERC1155",
		"/images/nfts/0x75eeab04cbeefc40ade03d154a48aa80c7c1c57b.png"
	],
	[
		"0x409b0be85982fa7f218319d1f32791acd19ba6d7",
		"Meta Fluencer",
		"Meta Fluencer",
		"ERC1155",
		"/images/nfts/0x409b0be85982fa7f218319d1f32791acd19ba6d7.png"
	],
	[
		"0xedfc4f35060de1a30e08b0d8b9986a4adbdf6c59",
		"GxngYxng Editions",
		"GxngYxng Editions",
		"ERC1155",
		"/images/nfts/0xedfc4f35060de1a30e08b0d8b9986a4adbdf6c59.png"
	],
	[
		"0x37d882fb4c0111b6c6c8f83e8dea32e3bb3da6c5",
		"Slothology's Sanctuary Editions",
		"Slothology's Sanctuary Editions",
		"ERC1155",
		"/images/nfts/0x37d882fb4c0111b6c6c8f83e8dea32e3bb3da6c5.png"
	],
	[
		"0x52de2cbad65d709631e5245dbc92a04c0c0de49f",
		"Streets by esraeslen",
		"Streets by esraeslen",
		"ERC1155",
		"/images/nfts/0x52de2cbad65d709631e5245dbc92a04c0c0de49f.png"
	],
	[
		"0x459124c1320bb66a2d2e58e04e7d28c344631ded",
		"THE CYBERDOGZ",
		"CDOGZ",
		"ERC1155",
		"/images/nfts/0x459124c1320bb66a2d2e58e04e7d28c344631ded.png"
	],
	[
		"0xdffc286a5310d829783211035e47cdec12ddacca",
		"VOX Souls",
		"VXSL",
		"ERC1155",
		"/images/nfts/0xdffc286a5310d829783211035e47cdec12ddacca.png"
	],
	[
		"0x54756b4533085cf959a3c6ef0747188a245f0a41",
		"Kuma Tracker",
		"Kuma Tracker",
		"ERC1155",
		"/images/nfts/0x54756b4533085cf959a3c6ef0747188a245f0a41.png"
	],
	[
		"0x6348bd548c87fe4abe86eb2001c67ece2a3cc1b2",
		"Nine Lives Editions",
		"Nine Lives Editions",
		"ERC1155",
		"/images/nfts/0x6348bd548c87fe4abe86eb2001c67ece2a3cc1b2.png"
	],
	[
		"0xefdbe9a86a0ccdf905e566a6ca809b85a3214ffc",
		"TOKYOLUV // EDITIONS",
		"RAW",
		"ERC1155",
		"/images/nfts/0xefdbe9a86a0ccdf905e566a6ca809b85a3214ffc.png"
	],
	[
		"0x8c335a5e0cf05eca62ca1e49afa48531b694824e",
		"HOT MESS",
		"HOT MESS",
		"ERC1155",
		"/images/nfts/0x8c335a5e0cf05eca62ca1e49afa48531b694824e.png"
	],
	[
		"0xfe071d43daff6fa164a1f73d668d9012c1e45314",
		"CryptoMemes by ZAM",
		"CryptoMemes by ZAM",
		"ERC1155",
		"/images/nfts/0xfe071d43daff6fa164a1f73d668d9012c1e45314.png"
	],
	[
		"0x30a0cfca26e331798aaf9f2559a955e7c8fa8632",
		"ANTI-POP Editions by Jake Zelinger",
		"ANTI-POP Editions by Jake Zelinger",
		"ERC1155",
		"/images/nfts/0x30a0cfca26e331798aaf9f2559a955e7c8fa8632.png"
	],
	[
		"0xd4a71f77ddd12d69e5af51595a75f6709e360811",
		"UASIS CORP / OSIRIS ONE",
		"UASIS",
		"ERC1155",
		"/images/nfts/0xd4a71f77ddd12d69e5af51595a75f6709e360811.png"
	],
	[
		"0xd2d2a84f0eb587f70e181a0c4b252c2c053f80cb",
		"Toshimon",
		"ToshimonMinter",
		"ERC1155",
		"/images/nfts/0xd2d2a84f0eb587f70e181a0c4b252c2c053f80cb.png"
	],
	[
		"0x1cda6ba9bbaeade9078a1cf60afccce0343261a2",
		"MINDDS",
		"MINDDS",
		"ERC1155",
		"/images/nfts/0x1cda6ba9bbaeade9078a1cf60afccce0343261a2.png"
	],
	[
		"0xb6d460ac51b93bca63b694f099c4a8b3b1cf73b4",
		"Moonrunners: Secrets of Primordia",
		"MOONRL",
		"ERC1155",
		"/images/nfts/0xb6d460ac51b93bca63b694f099c4a8b3b1cf73b4.png"
	],
	[
		"0x4fdf87d4edae3fe323b8f6df502ccac6c8b4ba28",
		"Moonrunners: History of Primordia",
		"MOONRT",
		"ERC1155",
		"/images/nfts/0x4fdf87d4edae3fe323b8f6df502ccac6c8b4ba28.png"
	],
	[
		"0x27f06e76d24d08fb50114ea18955a0146e7e3a7d",
		"Gen - dagen",
		"Gen - dagen",
		"ERC1155",
		"/images/nfts/0x27f06e76d24d08fb50114ea18955a0146e7e3a7d.png"
	],
	[
		"0xef8590a7b4412b385e61ea75b58c17f2d5ee438d",
		"Wolf Mercury Photography Editions",
		"Wolf Mercury Photography Editions",
		"ERC1155",
		"/images/nfts/0xef8590a7b4412b385e61ea75b58c17f2d5ee438d.png"
	],
	[
		"0xe4605d46fd0b3f8329d936a8b258d69276cba264",
		"Meme Ltd.",
		"MEMES",
		"ERC1155",
		"/images/nfts/0xe4605d46fd0b3f8329d936a8b258d69276cba264.png"
	],
	[
		"0x34b3006315bcfd18aa310d62a55eb0ca22c14563",
		"Tangible Grids",
		"Tangible Grids",
		"ERC1155",
		"/images/nfts/0x34b3006315bcfd18aa310d62a55eb0ca22c14563.png"
	],
	[
		"0xa38b4687566fdbf014cad8be1a5522b11fa0009e",
		"nftown places",
		"nftown places",
		"ERC1155",
		"/images/nfts/0xa38b4687566fdbf014cad8be1a5522b11fa0009e.png"
	],
	[
		"0xc99718df2d6286b7dc87c0cc71d46a20b0086f4c",
		"Rave Pigs",
		"Rave Pigs",
		"ERC1155",
		"/images/nfts/0xc99718df2d6286b7dc87c0cc71d46a20b0086f4c.png"
	],
	[
		"0xdd7295b024b2aee41da4a75121844d406b92169b",
		"Yokai Kingdom Collection",
		"Yokai Kingdom Collection",
		"ERC1155",
		"/images/nfts/0xdd7295b024b2aee41da4a75121844d406b92169b.png"
	],
	[
		"0x9480edde0753c11302dab9bb9eaae30551675a55",
		"Unidentified contract - DBjH8PLq2S",
		"Unidentified contract - DBjH8PLq2S",
		"ERC1155"
	],
	[
		"0x17eb72390dcc2755692056363b0f61ea2cd1873d",
		"Cheers UP Emoji",
		"CUPEMOJI",
		"ERC1155",
		"/images/nfts/0x17eb72390dcc2755692056363b0f61ea2cd1873d.png"
	],
	[
		"0x4eecc080ba193b85ce938991d0676d66781fb937",
		"HaoGoodMan's Jolly Experience",
		"HaoGoodMan's Jolly Experience",
		"ERC1155",
		"/images/nfts/0x4eecc080ba193b85ce938991d0676d66781fb937.png"
	],
	[
		"0xd2d45eee9893b9bf2692491da6e7f3ab48d947fa",
		"All The Smoke - Smokestacks Editions",
		"All The Smoke - Smokestacks Editions",
		"ERC1155",
		"/images/nfts/0xd2d45eee9893b9bf2692491da6e7f3ab48d947fa.png"
	],
	[
		"0x9b01ef9b869ebeb8627ac198ed50b15c1b13458d",
		"Video Editions by Korbinian Vogt",
		"Video Editions by Korbinian Vogt",
		"ERC1155",
		"/images/nfts/0x9b01ef9b869ebeb8627ac198ed50b15c1b13458d.png"
	],
	[
		"0x95b1e3afb3ad2c51834f14948e05aad7acff9559",
		"Editions X Soulthesea",
		"Editions X Soulthesea",
		"ERC1155",
		"/images/nfts/0x95b1e3afb3ad2c51834f14948e05aad7acff9559.png"
	],
	[
		"0xe76512732b1e49eb259dfc6d9d49e4c5dac6a75c",
		"Quasars Reborn",
		"QSR",
		"ERC1155",
		"/images/nfts/0xe76512732b1e49eb259dfc6d9d49e4c5dac6a75c.png"
	],
	[
		"0x2ff5556f0084bd6e7a267db17d788d3c00670c74",
		"TJO's Editions",
		"TJO's Editions",
		"ERC1155",
		"/images/nfts/0x2ff5556f0084bd6e7a267db17d788d3c00670c74.png"
	],
	[
		"0x5c1469ab0e3b4f96d7f25e23d80c540259f2ad5b",
		"Toy Boogers Special Editions",
		"Toy Boogers Special Editions",
		"ERC1155",
		"/images/nfts/0x5c1469ab0e3b4f96d7f25e23d80c540259f2ad5b.png"
	],
	[
		"0x775d576f54901b4bf23cb66b21dd14343c8af888",
		"Looking Glass by ATSNFT",
		"BANANA",
		"ERC1155",
		"/images/nfts/0x775d576f54901b4bf23cb66b21dd14343c8af888.png"
	],
	[
		"0xb3faf6e8af293bd2f87662e785b06ccd35af03bc",
		"WEIRD",
		"WEIRD",
		"ERC1155"
	],
	[
		"0x7af0ba18ecc79d241be4f429f26eec8b2bd9b403",
		"Gutter Merch Vault",
		"RAW",
		"ERC1155",
		"/images/nfts/0x7af0ba18ecc79d241be4f429f26eec8b2bd9b403.png"
	],
	[
		"0xa349360fc0d0238589a6bb42814d01505b621b04",
		"D3AD 3ND ED1TI0NS",
		"D3AD 3ND ED1TI0NS",
		"ERC1155",
		"/images/nfts/0xa349360fc0d0238589a6bb42814d01505b621b04.png"
	],
	[
		"0xe627938356cb7383b8819f2dd20114333e3842d2",
		"KING XEROX DROPS",
		"KING XEROX DROPS",
		"ERC1155",
		"/images/nfts/0xe627938356cb7383b8819f2dd20114333e3842d2.png"
	],
	[
		"0xc0121bd3d686ac5b51f925e3b28ec14315fbceb6",
		"B3L Pass",
		"B3L Pass",
		"ERC1155",
		"/images/nfts/0xc0121bd3d686ac5b51f925e3b28ec14315fbceb6.png"
	],
	[
		"0xb987bcecf6784672c6015be6e7d45854a3ba6278",
		"The S.E.X Club",
		"The S.E.X Club",
		"ERC1155",
		"/images/nfts/0xb987bcecf6784672c6015be6e7d45854a3ba6278.png"
	],
	[
		"0x81ee588e1dfced32b0030b5d0eca0de86a1d9138",
		"SVINT Artcade",
		"SVINT Artcade",
		"ERC1155",
		"/images/nfts/0x81ee588e1dfced32b0030b5d0eca0de86a1d9138.png"
	],
	[
		"0x9b0a422f25a5f26a16b2b3a3eb37a72ae31d3ec3",
		"Edenhorde Collectibles",
		"EHC",
		"ERC1155",
		"/images/nfts/0x9b0a422f25a5f26a16b2b3a3eb37a72ae31d3ec3.png"
	],
	[
		"0xcf07ca3fecfa79e441250c814e246d49c414c9c5",
		"Editions by Ksenia Roz",
		"Editions by Ksenia Roz",
		"ERC1155",
		"/images/nfts/0xcf07ca3fecfa79e441250c814e246d49c414c9c5.png"
	],
	[
		"0x28a6f816eae721fea4ad34c000077b5fe525fc3c",
		"OMENTEJOVEM's Editions",
		"OMENTEJOVEM's Editions",
		"ERC1155",
		"/images/nfts/0x28a6f816eae721fea4ad34c000077b5fe525fc3c.png"
	],
	[
		"0xf68fee42652dcd454ce4b3f21d38555cb8035c84",
		"steveroe_ Collabs",
		"steveroe_ Collabs",
		"ERC1155",
		"/images/nfts/0xf68fee42652dcd454ce4b3f21d38555cb8035c84.png"
	],
	[
		"0x6de0034927b65d18694aa56813469e65ab3e5b80",
		"Good Godz MintPass",
		"GODZPASS",
		"ERC1155",
		"/images/nfts/0x6de0034927b65d18694aa56813469e65ab3e5b80.png"
	],
	[
		"0x125afee79b96da4c3f58b119788085fdadd279e6",
		"Kaiju Mysterious Object",
		"Kaiju Mysterious Object",
		"ERC1155",
		"/images/nfts/0x125afee79b96da4c3f58b119788085fdadd279e6.png"
	],
	[
		"0x1d9545f79e40dc463da094d1ee138668670eeb19",
		"Satoshis Legions Presale Tokens",
		"PRELEGIONS",
		"ERC1155",
		"/images/nfts/0x1d9545f79e40dc463da094d1ee138668670eeb19.png"
	],
	[
		"0xa4c92e381a1a57f3de945523f91ab89ebb2dc063",
		"Degenerate Granny Official",
		"Degenerate Granny Official",
		"ERC1155",
		"/images/nfts/0xa4c92e381a1a57f3de945523f91ab89ebb2dc063.png"
	],
	[
		"0x70ce2d9605642cfbc441e3c4041d3bc34e66433e",
		"Shu Kinouchi - Limited Editions",
		"Shu Kinouchi - Limited Editions",
		"ERC1155",
		"/images/nfts/0x70ce2d9605642cfbc441e3c4041d3bc34e66433e.png"
	],
	[
		"0x5b9236707ab7f5d43b889b5affc0a780d2c734ad",
		"Wronguns by Solemn",
		"Wronguns by Solemn",
		"ERC1155",
		"/images/nfts/0x5b9236707ab7f5d43b889b5affc0a780d2c734ad.png"
	],
	[
		"0xc46077aae8f87b10be3a1fe8e4e69ee135ec6759",
		"DRP Member",
		"DRPM",
		"ERC1155",
		"/images/nfts/0xc46077aae8f87b10be3a1fe8e4e69ee135ec6759.png"
	],
	[
		"0x2ab99216416018c2af55eb9376e9fb188c4f5c9c",
		"Elysium merge",
		"Elysium merge",
		"ERC1155",
		"/images/nfts/0x2ab99216416018c2af55eb9376e9fb188c4f5c9c.png"
	],
	[
		"0x3df25f701c97f8f95590c8dd7b0ce34d61e3b590",
		"Ethernity's Master Collection",
		"Ethernity's Master Collection",
		"ERC1155",
		"/images/nfts/0x3df25f701c97f8f95590c8dd7b0ce34d61e3b590.png"
	],
	[
		"0x6ec7dc8914053db052c9481497b39527ac181aa9",
		"WoW - Drips",
		"WoW - Drips",
		"ERC1155",
		"/images/nfts/0x6ec7dc8914053db052c9481497b39527ac181aa9.png"
	],
	[
		"0x4978699b2e2b23aeda5461201af716db820d00f8",
		"The Zion 5",
		"The Zion 5",
		"ERC1155",
		"/images/nfts/0x4978699b2e2b23aeda5461201af716db820d00f8.png"
	],
	[
		"0x5f0e4269e4057bc0f0f665d68f3106e2386d8bf4",
		"FLEX NFT COLLABS",
		"FLEX NFT COLLABS",
		"ERC1155",
		"/images/nfts/0x5f0e4269e4057bc0f0f665d68f3106e2386d8bf4.png"
	],
	[
		"0x503ac85cfab61a1e33df33c8b26ae81e3c6e3ef2",
		"YOUNG & SICK 1155s",
		"YOUNG & SICK 1155s",
		"ERC1155",
		"/images/nfts/0x503ac85cfab61a1e33df33c8b26ae81e3c6e3ef2.png"
	],
	[
		"0x48542625835a919059741b4441d737e0f9ae78a5",
		"State of Unconsciousness",
		"State of Unconsciousness",
		"ERC1155",
		"/images/nfts/0x48542625835a919059741b4441d737e0f9ae78a5.png"
	],
	[
		"0x3b1417c1f204607deda4767929497256e4ff540c",
		"WAGMI United",
		"WAGMI",
		"ERC1155",
		"/images/nfts/0x3b1417c1f204607deda4767929497256e4ff540c.png"
	],
	[
		"0x8752ec7703079b90184c03bbbc075d2e4787bd05",
		"The Queen - Swarm",
		"QUEEN",
		"ERC1155",
		"/images/nfts/0x8752ec7703079b90184c03bbbc075d2e4787bd05.png"
	],
	[
		"0x995f6858365115a722f4b0428573d943ddd84f4c",
		"CyberBananas",
		"CBNS",
		"ERC1155",
		"/images/nfts/0x995f6858365115a722f4b0428573d943ddd84f4c.png"
	],
	[
		"0x1acbd5ce03bdd2a898f4acf91a39cc9c0807c39c",
		"RELI3F UKR",
		"RELI3F UKR",
		"ERC1155",
		"/images/nfts/0x1acbd5ce03bdd2a898f4acf91a39cc9c0807c39c.png"
	],
	[
		"0x5750acadd9ca04ad07181891a62a5f6bf5052c52",
		"Spread The Memes",
		"Spread The Memes",
		"ERC1155",
		"/images/nfts/0x5750acadd9ca04ad07181891a62a5f6bf5052c52.png"
	],
	[
		"0x63f8f1a396a7acaeb673f7b7b27fe012b357ce6e",
		"Mafriends",
		"Mafriends",
		"ERC1155",
		"/images/nfts/0x63f8f1a396a7acaeb673f7b7b27fe012b357ce6e.png"
	],
	[
		"0xb2c939ba03c8c533727f955df53a2409bc3268b4",
		"Mad Apes Armory",
		"Mad Apes Armory",
		"ERC1155",
		"/images/nfts/0xb2c939ba03c8c533727f955df53a2409bc3268b4.png"
	],
	[
		"0xa6a5ec7b1b8a34ff2dcb2926b7c78f52a5ce3b90",
		"GNSS by MGXS",
		"GNSS by MGXS",
		"ERC1155",
		"/images/nfts/0xa6a5ec7b1b8a34ff2dcb2926b7c78f52a5ce3b90.png"
	],
	[
		"0x43764f5b8973f62a6f10914516131c1489e3190d",
		"RTFKT X TAKASHI MURAKAMI X GAGOSIAN CLONE X NYC",
		"RTFKT X TAKASHI MURAKAMI X GAGOSIAN CLONE X NYC",
		"ERC1155",
		"/images/nfts/0x43764f5b8973f62a6f10914516131c1489e3190d.png"
	],
	[
		"0x54f456b544abfb785694400bcb1d85629b2d437f",
		"Raini: The Lords of Light",
		"Raini: The Lords of Light",
		"ERC1155",
		"/images/nfts/0x54f456b544abfb785694400bcb1d85629b2d437f.png"
	],
	[
		"0x50beffd8a0808314d3cc81b3cbf7f1afa3a6b56c",
		"Sr Bananos by GodHatesNFTees",
		"BNNO",
		"ERC1155",
		"/images/nfts/0x50beffd8a0808314d3cc81b3cbf7f1afa3a6b56c.png"
	],
	[
		"0xd667de84c637996dc80614455ef5a8ae825cea4f",
		"Revolutionary Alpha",
		"RAAP",
		"ERC1155",
		"/images/nfts/0xd667de84c637996dc80614455ef5a8ae825cea4f.png"
	],
	[
		"0x3397e734f0a8f209a87f6ed929d5cb8519748e5e",
		"Faucet1155",
		"Faucet1155",
		"ERC1155",
		"/images/nfts/0x3397e734f0a8f209a87f6ed929d5cb8519748e5e.png"
	],
	[
		"0xcb389a8641d1bec073f5c7cb98b9e9c6750cc126",
		"LAQUEUM",
		"LAQUEUM",
		"ERC1155",
		"/images/nfts/0xcb389a8641d1bec073f5c7cb98b9e9c6750cc126.png"
	],
	[
		"0xcfbf7fc93a519b55418974c7e0eb4e2447df505b",
		"Monks of Crypto (migrated)",
		"CRYPTOMONKS",
		"ERC1155",
		"/images/nfts/0xcfbf7fc93a519b55418974c7e0eb4e2447df505b.png"
	],
	[
		"0x358481dbf99d51f42c1b69bd5c8e377e942e2c41",
		"The NFT Collective Club Tickets",
		"The NFT Collective Club Tickets",
		"ERC1155",
		"/images/nfts/0x358481dbf99d51f42c1b69bd5c8e377e942e2c41.png"
	],
	[
		"0x025caa92129334f8cb72d02eb2f478df51267b52",
		"'' Nudity is for Art'' by Ugur Kayan",
		"'' Nudity is for Art'' by Ugur Kayan",
		"ERC1155",
		"/images/nfts/0x025caa92129334f8cb72d02eb2f478df51267b52.png"
	],
	[
		"0x034755f257c20c6bc6f4bd3914c019382a9f9d30",
		"Momoblack Collective",
		"Momoblack Collective",
		"ERC1155",
		"/images/nfts/0x034755f257c20c6bc6f4bd3914c019382a9f9d30.png"
	],
	[
		"0x69a110f39be5d6b182ca3f0021929b5420457343",
		"Venus Diamond Edition",
		"Venus Diamond Edition",
		"ERC1155",
		"/images/nfts/0x69a110f39be5d6b182ca3f0021929b5420457343.png"
	],
	[
		"0xde371dad8d8fe3799b8dc60560341614228c5aaf",
		"Capsule Community Curated Collection",
		"RAW",
		"ERC1155",
		"/images/nfts/0xde371dad8d8fe3799b8dc60560341614228c5aaf.png"
	],
	[
		"0xa8c52e58784c23d204cdf905382a3cada81e5622",
		"Virtuoso World",
		"Virtuoso World",
		"ERC1155",
		"/images/nfts/0xa8c52e58784c23d204cdf905382a3cada81e5622.png"
	],
	[
		"0xfc516ccac54e294e4f08343934022ad5e701dfce",
		"Newnotes editions",
		"Newnotes editions",
		"ERC1155",
		"/images/nfts/0xfc516ccac54e294e4f08343934022ad5e701dfce.png"
	],
	[
		"0x7197abcc3c06ac045fe53eaf0325baee95d102bc",
		"EDITIONS BY PHLOWGUS",
		"EDITIONS BY PHLOWGUS",
		"ERC1155",
		"/images/nfts/0x7197abcc3c06ac045fe53eaf0325baee95d102bc.png"
	],
	[
		"0x9fae8f72d3efcf9b70baec76f3206d5acf9cdc2c",
		"Metaverse Land Club",
		"MLC",
		"ERC1155",
		"/images/nfts/0x9fae8f72d3efcf9b70baec76f3206d5acf9cdc2c.png"
	],
	[
		"0xd7bc41f205679c3f056a1bd2857409e74baa03c6",
		"At the Epicenter of COVID-19",
		"At the Epicenter of COVID-19",
		"ERC1155",
		"/images/nfts/0xd7bc41f205679c3f056a1bd2857409e74baa03c6.png"
	],
	[
		"0xdddc0ae3a8b3700101d1d78b3b0275c72afa072b",
		"Eyemap",
		"eyemap",
		"ERC1155",
		"/images/nfts/0xdddc0ae3a8b3700101d1d78b3b0275c72afa072b.png"
	],
	[
		"0x22ab02c637381d3a8d0df04d5a08fe9b4e3ca69e",
		"WAGMI*",
		"WAGMI*",
		"ERC1155",
		"/images/nfts/0x22ab02c637381d3a8d0df04d5a08fe9b4e3ca69e.png"
	],
	[
		"0xe73029772bb72a3153f9e6e29ec4f18e71422a3c",
		"Scripted Quotes",
		"Scripted Quotes",
		"ERC1155",
		"/images/nfts/0xe73029772bb72a3153f9e6e29ec4f18e71422a3c.png"
	],
	[
		"0xaf35edeb3222366185a6ce89f4704205210df0ed",
		"UAE NFT - From Desert To Mars | Thomas Dubois",
		"UAENFT",
		"ERC1155",
		"/images/nfts/0xaf35edeb3222366185a6ce89f4704205210df0ed.png"
	],
	[
		"0xa5da7edbbc88d9da25c51041fc5cc35b58548078",
		"Amongst Giants Edition",
		"Amongst Giants Edition",
		"ERC1155",
		"/images/nfts/0xa5da7edbbc88d9da25c51041fc5cc35b58548078.png"
	],
	[
		"0x492d7c407d78d170af70ce53578a4ec839da0ebd",
		"SUN SIGNALS",
		"SUNSIGNALS",
		"ERC1155",
		"/images/nfts/0x492d7c407d78d170af70ce53578a4ec839da0ebd.png"
	],
	[
		"0xa134c292c73dd99d0d2a545e80b986a695775623",
		"Air Mail by Vinnie Hager",
		"Air Mail by Vinnie Hager",
		"ERC1155",
		"/images/nfts/0xa134c292c73dd99d0d2a545e80b986a695775623.png"
	],
	[
		"0x01f74df24e81c8ae5eb1ff6642283c10e022fb56",
		"FriendsWithYou",
		"FriendsWithYou",
		"ERC1155",
		"/images/nfts/0x01f74df24e81c8ae5eb1ff6642283c10e022fb56.png"
	],
	[
		"0x3d70f643e6eed7af3bd1fd501dacd5ae677818b5",
		"SUPERPLASTIC:  Headtripz Pillz",
		"PLLZ",
		"ERC1155",
		"/images/nfts/0x3d70f643e6eed7af3bd1fd501dacd5ae677818b5.png"
	],
	[
		"0xb14fc776287992c103d2b63fa1a28909c5c5f31a",
		"POST WOOK EDITIONS",
		"POST WOOK EDITIONS",
		"ERC1155",
		"/images/nfts/0xb14fc776287992c103d2b63fa1a28909c5c5f31a.png"
	],
	[
		"0x359fb071477a9ad82835768f5ce9a29a0e5c1575",
		"Mutant Bored Ape Frens",
		"MaskMan",
		"ERC1155",
		"/images/nfts/0x359fb071477a9ad82835768f5ce9a29a0e5c1575.png"
	],
	[
		"0x48dacfb883a452af47404650f7538e6e0893cc56",
		"AlphaDoggg Signature Collection",
		"AlphaDoggg Signature Collection",
		"ERC1155",
		"/images/nfts/0x48dacfb883a452af47404650f7538e6e0893cc56.png"
	],
	[
		"0x0170227514a274826685bf81aed06e4218175572",
		"Memberships - Mirage Gallery",
		"Memberships - Mirage Gallery",
		"ERC1155",
		"/images/nfts/0x0170227514a274826685bf81aed06e4218175572.png"
	],
	[
		"0xcf95bff95029fb07bb865ff715a9a199e61612f7",
		"UAE NFT - Mars Colonization | Thomas Dubois",
		"UAENFT",
		"ERC1155",
		"/images/nfts/0xcf95bff95029fb07bb865ff715a9a199e61612f7.png"
	],
	[
		"0x3b8ea419c233bd947416fb69cc39d2fbf9b9b6ab",
		"CriminalMembership",
		"CRIMINAL",
		"ERC1155",
		"/images/nfts/0x3b8ea419c233bd947416fb69cc39d2fbf9b9b6ab.png"
	],
	[
		"0x09f717f77b5e7f2d2f37604fec3d0e3d53eb9808",
		"WoW - Capacitors",
		"WoW - Capacitors",
		"ERC1155",
		"/images/nfts/0x09f717f77b5e7f2d2f37604fec3d0e3d53eb9808.png"
	],
	[
		"0xfca73092cd82aef4885f92cba42af79a5b296995",
		"BLACKSKY EDITIONS",
		"BLACKSKY EDITIONS",
		"ERC1155",
		"/images/nfts/0xfca73092cd82aef4885f92cba42af79a5b296995.png"
	],
	[
		"0xa6507c64d1c11e860b246ff990fcbfdd79008ac2",
		"The Subversibles",
		"The Subversibles",
		"ERC1155",
		"/images/nfts/0xa6507c64d1c11e860b246ff990fcbfdd79008ac2.png"
	],
	[
		"0x8eaaabe11896bd09fb852d3a5248004ec44bc793",
		"Refractions",
		"Refractions",
		"ERC1155",
		"/images/nfts/0x8eaaabe11896bd09fb852d3a5248004ec44bc793.png"
	],
	[
		"0x780a5033555c222796d285e8a4d882797a09a8b7",
		"Game Photos MD",
		"Game Photos MD",
		"ERC1155",
		"/images/nfts/0x780a5033555c222796d285e8a4d882797a09a8b7.png"
	],
	[
		"0xedb61f74b0d09b2558f1eeb79b247c1f363ae452",
		"Gutter Cat Gang",
		"Gutter Cat Gang",
		"ERC1155",
		"/images/nfts/0xedb61f74b0d09b2558f1eeb79b247c1f363ae452.png"
	],
	[
		"0xbd50a31ae99e4f5a289fb3c629a895dce433c2bf",
		"ROMbrandt Editions Vol. 2",
		"ROMbrandt Editions Vol. 2",
		"ERC1155",
		"/images/nfts/0xbd50a31ae99e4f5a289fb3c629a895dce433c2bf.png"
	],
	[
		"0x085c091b71b9d77b8f52f073d738ce805dec369b",
		"ARBO Artifacts",
		"ARBO-A",
		"ERC1155",
		"/images/nfts/0x085c091b71b9d77b8f52f073d738ce805dec369b.png"
	],
	[
		"0x63f8a98b9592855d151cfe8b0e940b1d307defe3",
		"YCN II",
		"YCN II",
		"ERC1155",
		"/images/nfts/0x63f8a98b9592855d151cfe8b0e940b1d307defe3.png"
	],
	[
		"0x296c04ac9b8c69232f005255720bfb6ab8f60e5d",
		"DAW Art Collabs",
		"DAW Art Collabs",
		"ERC1155",
		"/images/nfts/0x296c04ac9b8c69232f005255720bfb6ab8f60e5d.png"
	],
	[
		"0xefd1de2be72a64af3d2440564269df78d526e3f5",
		"STFUDAS!",
		"STFUDAS!",
		"ERC1155",
		"/images/nfts/0xefd1de2be72a64af3d2440564269df78d526e3f5.png"
	],
	[
		"0xd7e603ac5a64a7327db5a40cc45e88ae272ecd1c",
		"Oceidon Blox NFTs",
		"OceidonNFT",
		"ERC1155",
		"/images/nfts/0xd7e603ac5a64a7327db5a40cc45e88ae272ecd1c.png"
	],
	[
		"0x7cfdc57b8ee622fa88af6e81e62fcb1fceb54b64",
		"Believe in Steve EDITIONS",
		"Believe in Steve EDITIONS",
		"ERC1155",
		"/images/nfts/0x7cfdc57b8ee622fa88af6e81e62fcb1fceb54b64.png"
	],
	[
		"0xc23a563a26afff06e945ace77173e1568f288ce5",
		"OSF Editions Season 1",
		"OSF Editions Season 1",
		"ERC1155",
		"/images/nfts/0xc23a563a26afff06e945ace77173e1568f288ce5.png"
	],
	[
		"0x41eb9dd376c9a3f1c02e5f3f89f22ad6ae970d51",
		"Phettaverse Editions",
		"Phettaverse Editions",
		"ERC1155",
		"/images/nfts/0x41eb9dd376c9a3f1c02e5f3f89f22ad6ae970d51.png"
	],
	[
		"0x0dee938b646267843229e86714ee6d3475a9509a",
		"Virtuoso Creation",
		"Virtuoso Creation",
		"ERC1155",
		"/images/nfts/0x0dee938b646267843229e86714ee6d3475a9509a.png"
	],
	[
		"0x7a7fc0157f070da05db78101b95f42c5ad337037",
		"Pods - The Awakening",
		"Pods - The Awakening",
		"ERC1155",
		"/images/nfts/0x7a7fc0157f070da05db78101b95f42c5ad337037.png"
	],
	[
		"0x58fe808ac1c90e0eec5dd907b75c7589bb75acf5",
		"Editions X Nastasyah",
		"Editions X Nastasyah",
		"ERC1155",
		"/images/nfts/0x58fe808ac1c90e0eec5dd907b75c7589bb75acf5.png"
	],
	[
		"0xa9cfc59a96eaf67f8e1b8bc494d3863863c1f8ed",
		"DeNations",
		"NATION",
		"ERC1155",
		"/images/nfts/0xa9cfc59a96eaf67f8e1b8bc494d3863863c1f8ed.png"
	],
	[
		"0xad804109f0c2ba2ff81343a4d39581a00be0a8d2",
		"Mystery Bulldog Hair",
		"Mystery Bulldog Hair",
		"ERC1155",
		"/images/nfts/0xad804109f0c2ba2ff81343a4d39581a00be0a8d2.png"
	],
	[
		"0xe01569ca9b39e55bc7c0dfa09f05fa15cb4c7698",
		"Gallery Premium Membership Cards",
		"GMC",
		"ERC1155",
		"/images/nfts/0xe01569ca9b39e55bc7c0dfa09f05fa15cb4c7698.png"
	],
	[
		"0xfaafdc07907ff5120a76b34b731b278c38d6043c",
		"Enjin",
		"Enjin",
		"ERC1155",
		"/images/nfts/0xfaafdc07907ff5120a76b34b731b278c38d6043c.png"
	],
	[
		"0x4da4c01b3db8f298a2f49ca07842f00b460cf237",
		"Blue Banana Serum",
		"BBS",
		"ERC1155",
		"/images/nfts/0x4da4c01b3db8f298a2f49ca07842f00b460cf237.png"
	],
	[
		"0x0f667b08e583631f50df85537dc567ab90433b08",
		"Rebels In Disguise : Generative Collection",
		"RBLSCOIN",
		"ERC1155",
		"/images/nfts/0x0f667b08e583631f50df85537dc567ab90433b08.png"
	],
	[
		"0x12bce9e315ad201e457b69b56d4ef25c190f9a9d",
		"EyeOfTheSyndicate",
		"EyeOfTheSyndicate",
		"ERC1155",
		"/images/nfts/0x12bce9e315ad201e457b69b56d4ef25c190f9a9d.png"
	],
	[
		"0xcf571b149736f4476a4a47813951fd074846db1c",
		"Phto. All Access Pass",
		"PHTOVIP",
		"ERC1155",
		"/images/nfts/0xcf571b149736f4476a4a47813951fd074846db1c.png"
	],
	[
		"0x8ca7b419904dc188cfb0cea23ef15a75fd8c4188",
		"Beam Me Up x Abducting Mfers",
		"MFR",
		"ERC1155",
		"/images/nfts/0x8ca7b419904dc188cfb0cea23ef15a75fd8c4188.png"
	],
	[
		"0x025f45bb7e08abea27a3c6a9cfb8d2acc2f6a134",
		"Buckets Club",
		"BUCKETS",
		"ERC1155",
		"/images/nfts/0x025f45bb7e08abea27a3c6a9cfb8d2acc2f6a134.png"
	],
	[
		"0xcfb1c95fd4360790429aceeac655d00a65ecb04c",
		"Never Fear Truth: Track 1",
		"Never Fear Truth: Track 1",
		"ERC1155",
		"/images/nfts/0xcfb1c95fd4360790429aceeac655d00a65ecb04c.png"
	],
	[
		"0xe532faa6188c4b15dc12244d9ffe118a97f0c3b6",
		"CryptoIdiotsMedicine",
		"CryptoIdiotsMedicine",
		"ERC1155",
		"/images/nfts/0xe532faa6188c4b15dc12244d9ffe118a97f0c3b6.png"
	],
	[
		"0xcd1dbc840e1222a445be7c1d8ecb900f9d930695",
		"RTFKT x JeffStaple",
		"RTFKT x JeffStaple",
		"ERC1155",
		"/images/nfts/0xcd1dbc840e1222a445be7c1d8ecb900f9d930695.png"
	],
	[
		"0x18a0da358a0c792fd47dd4a620b7069801cda24f",
		"Reef Game Sea Otters",
		"Reef Game Sea Otters",
		"ERC1155",
		"/images/nfts/0x18a0da358a0c792fd47dd4a620b7069801cda24f.png"
	],
	[
		"0xbe806a7de1f88dbc87590a4364e02c281f042e25",
		"Rubbish Trash",
		"Rubbish Trash",
		"ERC1155",
		"/images/nfts/0xbe806a7de1f88dbc87590a4364e02c281f042e25.png"
	],
	[
		"0x109440e0a0b37c0e2a17f91bdea42a8fb17663fb",
		"CryptoEmpire Cards",
		"CryptoEmpire Cards",
		"ERC1155",
		"/images/nfts/0x109440e0a0b37c0e2a17f91bdea42a8fb17663fb.png"
	],
	[
		"0xd2a97b7c23bbfa726cb95204ddddafe231a09b59",
		"BBCC Bored Bits Chemistry Club",
		"BBCC",
		"ERC1155",
		"/images/nfts/0xd2a97b7c23bbfa726cb95204ddddafe231a09b59.png"
	],
	[
		"0x0e0fc97e5337478830f30dda023339607ad1ba4c",
		"DickleButts",
		"DickleButts",
		"ERC1155",
		"/images/nfts/0x0e0fc97e5337478830f30dda023339607ad1ba4c.png"
	],
	[
		"0x30a6f0d6f137f762c9f4e310b8962a56b7bfaf08",
		"Summer & pobedeen",
		"Summer & pobedeen",
		"ERC1155",
		"/images/nfts/0x30a6f0d6f137f762c9f4e310b8962a56b7bfaf08.png"
	],
	[
		"0xbd1152a5a003aa833d7d399adc8949bdfe887230",
		"Dollars Assange by Pascal Boyart",
		"USDAssange",
		"ERC1155",
		"/images/nfts/0xbd1152a5a003aa833d7d399adc8949bdfe887230.png"
	],
	[
		"0xc69e758da9f787642f72b945f628391833c7743a",
		"Daydreams Genesis by Taisei",
		"Daydreams Genesis by Taisei",
		"ERC1155",
		"/images/nfts/0xc69e758da9f787642f72b945f628391833c7743a.png"
	],
	[
		"0x7920f98733b912772f89dbdd95e221bb7e6d058f",
		"REDLIONEYE GAZETTE",
		"RLE",
		"ERC1155",
		"/images/nfts/0x7920f98733b912772f89dbdd95e221bb7e6d058f.png"
	],
	[
		"0xd49190dadc5076ff0d54ad5e3b62cad3b11a9564",
		"0xmoments by 0xmusic",
		"0xmoments by 0xmusic",
		"ERC1155",
		"/images/nfts/0xd49190dadc5076ff0d54ad5e3b62cad3b11a9564.png"
	],
	[
		"0xf1ab05dc0829903c65690dc8e936b02888e7e52e",
		"A LIT Invitation to Kindness",
		"A LIT Invitation to Kindness",
		"ERC1155",
		"/images/nfts/0xf1ab05dc0829903c65690dc8e936b02888e7e52e.png"
	],
	[
		"0x4284af9a3378c5a2424580b7f593cef428851081",
		"Pennies From Heaven",
		"Pennies From Heaven",
		"ERC1155",
		"/images/nfts/0x4284af9a3378c5a2424580b7f593cef428851081.png"
	],
	[
		"0x598eb86ccbb15b7ccbe847b4a44c80fbe55413fa",
		"JPEGs Dealer",
		"JPEGs Dealer",
		"ERC1155",
		"/images/nfts/0x598eb86ccbb15b7ccbe847b4a44c80fbe55413fa.png"
	],
	[
		"0x9714a3804f46b0b0efb165a2e47b3f1a7024aac5",
		"Phat Pandaz Farms",
		"Phat Pandaz Farms",
		"ERC1155",
		"/images/nfts/0x9714a3804f46b0b0efb165a2e47b3f1a7024aac5.png"
	],
	[
		"0x2a08a786d6415855c1f91c38de428bb7022ae0d9",
		"dame.art (editions)",
		"dame.art (editions)",
		"ERC1155",
		"/images/nfts/0x2a08a786d6415855c1f91c38de428bb7022ae0d9.png"
	],
	[
		"0x0f78275527d55b86cc0d0f558f127592eb1f081c",
		"McXGlitch",
		"McXGlitch",
		"ERC1155",
		"/images/nfts/0x0f78275527d55b86cc0d0f558f127592eb1f081c.png"
	],
	[
		"0x9d8fa3806d92d3d299010114c53cb3dd2c627279",
		"Lofi Guy",
		"Lofi Guy",
		"ERC1155",
		"/images/nfts/0x9d8fa3806d92d3d299010114c53cb3dd2c627279.png"
	],
	[
		"0x319935e91705d1bc8e870317ed766d277fe48298",
		"WEN LAMBO by BRAiN VOMiT",
		"BVLAMBO",
		"ERC1155",
		"/images/nfts/0x319935e91705d1bc8e870317ed766d277fe48298.png"
	],
	[
		"0x59ab11d28299d8924506e020ec35beda22a3c3cb",
		"JakNFT Mints",
		"JakNFT Mints",
		"ERC1155",
		"/images/nfts/0x59ab11d28299d8924506e020ec35beda22a3c3cb.png"
	],
	[
		"0x9142b1eebd10690b400487300599eebf746236d3",
		"The Ascendants - Gifts of The Gods",
		"GOTG",
		"ERC1155",
		"/images/nfts/0x9142b1eebd10690b400487300599eebf746236d3.png"
	],
	[
		"0x3b7335f3f1771122cd0107416b1da1b2fb7e94dd",
		"BOOBA - TN",
		"B2O_TN",
		"ERC1155",
		"/images/nfts/0x3b7335f3f1771122cd0107416b1da1b2fb7e94dd.png"
	],
	[
		"0x936fd37ad139d11bc411d134b542ca3e07c2634c",
		"SUPRA MULTIVERSE STAGE I",
		"SUPRA",
		"ERC1155",
		"/images/nfts/0x936fd37ad139d11bc411d134b542ca3e07c2634c.png"
	],
	[
		"0x8240534f3fbf684c0e29635ab5c8f8efb6f66d42",
		"MekaVerse Factory",
		"MekaVerse Factory",
		"ERC1155",
		"/images/nfts/0x8240534f3fbf684c0e29635ab5c8f8efb6f66d42.png"
	],
	[
		"0xee7d1de653886d284aef0f03da5b82d0ace4bf5f",
		"Metavolution: Land",
		"LAND",
		"ERC1155",
		"/images/nfts/0xee7d1de653886d284aef0f03da5b82d0ace4bf5f.png"
	],
	[
		"0x9ccde78e65bf897b0a00ec918c052e9f6765ab10",
		"Hapoochi Related Arts !",
		"Hapoochi Related Arts !",
		"ERC1155",
		"/images/nfts/0x9ccde78e65bf897b0a00ec918c052e9f6765ab10.png"
	],
	[
		"0x383e4c0483b5a82d95ecf31070ed83b3a89038c4",
		"Wizard Gold Pass",
		"Wizard Gold Pass",
		"ERC1155",
		"/images/nfts/0x383e4c0483b5a82d95ecf31070ed83b3a89038c4.png"
	],
	[
		"0x93c711fec5d1341d432f1e32adbecbd8b2c8eaf4",
		"Moon Ape Cola",
		"MAL_CRYPTO_COLA",
		"ERC1155",
		"/images/nfts/0x93c711fec5d1341d432f1e32adbecbd8b2c8eaf4.png"
	],
	[
		"0x4222b2a98daa443c6a0a761300d7d6bfd9161e52",
		"Illuvium",
		"ILV-NFT",
		"ERC1155",
		"/images/nfts/0x4222b2a98daa443c6a0a761300d7d6bfd9161e52.png"
	],
	[
		"0x86ba9ec85eebe10a9b01af64e89f9d76d25cea18",
		"The Ape List",
		"The Ape List",
		"ERC1155",
		"/images/nfts/0x86ba9ec85eebe10a9b01af64e89f9d76d25cea18.png"
	],
	[
		"0x1cacc96e5f01e2849e6036f25531a9a064d2fb5f",
		"Moody Brain by Loopring",
		"Moody Brain by Loopring",
		"ERC1155",
		"/images/nfts/0x1cacc96e5f01e2849e6036f25531a9a064d2fb5f.png"
	],
	[
		"0x0cd925f268678d03057d184ded76d98552d7d837",
		"BEANS HOLDERS LOOT - Dumb Ways to Die",
		"DWTD_HOLDERS_LOOT",
		"ERC1155",
		"/images/nfts/0x0cd925f268678d03057d184ded76d98552d7d837.png"
	],
	[
		"0xa186415c5fe3ee3c22b73f7d2246d50622a251bc",
		"Mike Dausend Editions",
		"Mike Dausend Editions",
		"ERC1155",
		"/images/nfts/0xa186415c5fe3ee3c22b73f7d2246d50622a251bc.png"
	],
	[
		"0x5113a3dd866a3ee8e973fc764cc380e6f07416ef",
		"ENS Tools",
		"ENS Tools",
		"ERC1155",
		"/images/nfts/0x5113a3dd866a3ee8e973fc764cc380e6f07416ef.png"
	],
	[
		"0xab0a991b05eb720586eeaa4ca607648b8a13ff7d",
		"Thing Lab",
		"SAMPLE",
		"ERC1155",
		"/images/nfts/0xab0a991b05eb720586eeaa4ca607648b8a13ff7d.png"
	],
	[
		"0xedd13f87d7feec51162c5cbe2532793f7d23e731",
		"Expo2020 Dubai NFT Edition",
		"Ex2020dxbEDA",
		"ERC1155",
		"/images/nfts/0xedd13f87d7feec51162c5cbe2532793f7d23e731.png"
	],
	[
		"0x5a8e39e1b1af534f148c90f6540707fd249cacae",
		"UAE NFT - From Desert To Mars | Mattar Bin Lahej",
		"UAENFT",
		"ERC1155",
		"/images/nfts/0x5a8e39e1b1af534f148c90f6540707fd249cacae.png"
	],
	[
		"0xe0ef2610bf1c932ccc363beb5c4b65f0f4c1ddfc",
		"Squishiverse Items",
		"SVITEM",
		"ERC1155",
		"/images/nfts/0xe0ef2610bf1c932ccc363beb5c4b65f0f4c1ddfc.png"
	],
	[
		"0xf6e12a3b482c8d51a0f66e6d80c496c310833389",
		"CryptoSkulls Alchemy Lab",
		"CryptoSkulls Alchemy Lab",
		"ERC1155",
		"/images/nfts/0xf6e12a3b482c8d51a0f66e6d80c496c310833389.png"
	],
	[
		"0xabb30827d0728447f8a6cc593672922a61b7fde6",
		"PV IRL",
		"PVIRL",
		"ERC1155",
		"/images/nfts/0xabb30827d0728447f8a6cc593672922a61b7fde6.png"
	],
	[
		"0x635b7df389d040155b395eeb877b8d1e8a0afc38",
		"Boss Beauties Collabs",
		"BOSSBEAUTIESSCOLLABS",
		"ERC1155",
		"/images/nfts/0x635b7df389d040155b395eeb877b8d1e8a0afc38.png"
	],
	[
		"0xa3106416fde395bf6a62b8e932df01f5f660a5f2",
		"NFT Academy",
		"NFT Academy",
		"ERC1155",
		"/images/nfts/0xa3106416fde395bf6a62b8e932df01f5f660a5f2.png"
	],
	[
		"0x9a4acf4e5932c78e0039c37478f2df40b4f667df",
		"Maiden's Tower - Editions",
		"Maiden's Tower - Editions",
		"ERC1155",
		"/images/nfts/0x9a4acf4e5932c78e0039c37478f2df40b4f667df.png"
	],
	[
		"0x2950639f48edbfc4625e0244d35987aeb4e6cb63",
		"SoundMint Vinyl",
		"SoundMint Vinyl",
		"ERC1155",
		"/images/nfts/0x2950639f48edbfc4625e0244d35987aeb4e6cb63.png"
	],
	[
		"0xea3803497d5ba508245731d0761c203ce2047f17",
		"remikz secret lab",
		"remikz secret lab",
		"ERC1155",
		"/images/nfts/0xea3803497d5ba508245731d0761c203ce2047f17.png"
	],
	[
		"0x0e201a7cc8b9487e43ba78770c247bb42a989805",
		"POCKETBLOCKS",
		"PB",
		"ERC1155",
		"/images/nfts/0x0e201a7cc8b9487e43ba78770c247bb42a989805.png"
	],
	[
		"0x111174b2414e14b4b5441646ec221ef1726a87b1",
		"collision.art",
		"CA",
		"ERC1155",
		"/images/nfts/0x111174b2414e14b4b5441646ec221ef1726a87b1.png"
	],
	[
		"0x5f402c6037aab928adaea77e05dcdeb40d57d8c7",
		"Benizm's Editions",
		"Benizm's Editions",
		"ERC1155",
		"/images/nfts/0x5f402c6037aab928adaea77e05dcdeb40d57d8c7.png"
	],
	[
		"0x68df6bc1df2bdfa09bb49528718106e547efe39a",
		"Fallout Crystals",
		"FCR",
		"ERC1155",
		"/images/nfts/0x68df6bc1df2bdfa09bb49528718106e547efe39a.png"
	],
	[
		"0xcc41116ceb4926ec36aa7669f8461f2b39d69b3b",
		"Touching Sensations",
		"Touching Sensations",
		"ERC1155",
		"/images/nfts/0xcc41116ceb4926ec36aa7669f8461f2b39d69b3b.png"
	],
	[
		"0x05b77ef77b12f8f84893841efe15e887ebc3ae95",
		"Mint Pass by NFTMagazine.com",
		"RAW",
		"ERC1155",
		"/images/nfts/0x05b77ef77b12f8f84893841efe15e887ebc3ae95.png"
	],
	[
		"0x782e052bdacb47d67d8e03fba9d340a8b543fae1",
		"OBEY GEMMA",
		"OBEY GEMMA",
		"ERC1155",
		"/images/nfts/0x782e052bdacb47d67d8e03fba9d340a8b543fae1.png"
	],
	[
		"0xc19d1464da613f79a8442733230a1e7a9a3fc84f",
		"Kibatsu Mecha Specials",
		"KIBATSUSPECIALS",
		"ERC1155",
		"/images/nfts/0xc19d1464da613f79a8442733230a1e7a9a3fc84f.png"
	],
	[
		"0xa9a108d816773bf5802b10f9d6d27defa442ff43",
		"PMC x mahh_art Collab",
		"PMC x mahh_art Collab",
		"ERC1155",
		"/images/nfts/0xa9a108d816773bf5802b10f9d6d27defa442ff43.png"
	],
	[
		"0xd77970fe104eef79fdb3543dcebd84dd845b6761",
		"Lauren McDonagh-Pereira Photography Editions",
		"HiddenOwl",
		"ERC1155",
		"/images/nfts/0xd77970fe104eef79fdb3543dcebd84dd845b6761.png"
	],
	[
		"0x981fbc8f55ced5c3c8616dcf47d917af0319f8e3",
		"FOREVERLANDS Explorer",
		"FLEXPLORER",
		"ERC1155",
		"/images/nfts/0x981fbc8f55ced5c3c8616dcf47d917af0319f8e3.png"
	],
	[
		"0xa9ee1f4fb2261a8957a19991f6e31f0ac409bb0e",
		"4Ma's Editions",
		"4Ma's Editions",
		"ERC1155",
		"/images/nfts/0xa9ee1f4fb2261a8957a19991f6e31f0ac409bb0e.png"
	],
	[
		"0x0e892bff0658b93b326e14d4558ce25a642676da",
		"The First Mint DAY ONE",
		"The First Mint DAY ONE",
		"ERC1155",
		"/images/nfts/0x0e892bff0658b93b326e14d4558ce25a642676da.png"
	],
	[
		"0xf850aa77f3eb0c0fffa1ffd7548829967fa1897a",
		"Rebud Collection",
		"BUDS",
		"ERC1155",
		"/images/nfts/0xf850aa77f3eb0c0fffa1ffd7548829967fa1897a.png"
	],
	[
		"0x792e256416680e2dd774a165cbb23462f3ff0d12",
		"Withhearts Editions",
		"Withhearts Editions",
		"ERC1155",
		"/images/nfts/0x792e256416680e2dd774a165cbb23462f3ff0d12.png"
	],
	[
		"0x715565baf69afcbbe88f56d46f1c9fe2df828705",
		"888 Inner Circle The Drops",
		"888 Inner Circle The Drops",
		"ERC1155",
		"/images/nfts/0x715565baf69afcbbe88f56d46f1c9fe2df828705.png"
	],
	[
		"0xd44078705456c4f4517a659953f5296e5328f8b8",
		"Apes-R-Us",
		"Apes-R-Us",
		"ERC1155",
		"/images/nfts/0xd44078705456c4f4517a659953f5296e5328f8b8.png"
	],
	[
		"0x499a834992074b2ed9e9215c16e81640c1ed0d52",
		"Tom Sachs: Rocket Factory - Patches",
		"Tom Sachs: Rocket Factory - Patches",
		"ERC1155",
		"/images/nfts/0x499a834992074b2ed9e9215c16e81640c1ed0d52.png"
	],
	[
		"0xf1739d53e816212a788511e3b42f8604a9417a2a",
		"Lazy Comics",
		"Lazy Comics",
		"ERC1155",
		"/images/nfts/0xf1739d53e816212a788511e3b42f8604a9417a2a.png"
	],
	[
		"0xb50b3d5b519e5df96275a09deccc6080dc0800d9",
		"BMC Rocket Pass",
		"RKTPASS",
		"ERC1155",
		"/images/nfts/0xb50b3d5b519e5df96275a09deccc6080dc0800d9.png"
	],
	[
		"0x72dd8df9a3005ad2bb3080abd1cc2cf23155bc2a",
		"VOLTZ Avatar Mint Vial",
		"VIALZ",
		"ERC1155",
		"/images/nfts/0x72dd8df9a3005ad2bb3080abd1cc2cf23155bc2a.png"
	],
	[
		"0xd22f83e8a1502b1d41c0b40cf64b291a6eabc44d",
		"OpenDAO Genesis Membership",
		"OpenDAO Genesis Membership",
		"ERC1155",
		"/images/nfts/0xd22f83e8a1502b1d41c0b40cf64b291a6eabc44d.png"
	],
	[
		"0xd1c33f20243792c0d971451772ab83364dc9b8c0",
		"S I N G U L A R I T Y",
		"⭘",
		"ERC1155",
		"/images/nfts/0xd1c33f20243792c0d971451772ab83364dc9b8c0.png"
	],
	[
		"0xc3ae6e60a37a5f7d6d68e60c45b1ae50da233bd4",
		"10KTF: GUCCI GRAIL MINT PASS",
		"10KTF: GUCCI GRAIL MINT PASS",
		"ERC1155",
		"/images/nfts/0xc3ae6e60a37a5f7d6d68e60c45b1ae50da233bd4.png"
	],
	[
		"0xe3d0fe9b7e0b951663267a3ed1e6577f6f79757e",
		"Gallery General Membership Cards",
		"GMC",
		"ERC1155",
		"/images/nfts/0xe3d0fe9b7e0b951663267a3ed1e6577f6f79757e.png"
	],
	[
		"0xe4462eb568e2dfbb5b0ca2d3dbb1a35c9aa98aad",
		"A0K1VERSE Credits",
		"A0K1VERSE Credits",
		"ERC1155",
		"/images/nfts/0xe4462eb568e2dfbb5b0ca2d3dbb1a35c9aa98aad.png"
	],
	[
		"0x16f444f2d9e696834c1c9b536dc3896e1b545213",
		"Fount Gallery Card",
		"FOUNT",
		"ERC1155",
		"/images/nfts/0x16f444f2d9e696834c1c9b536dc3896e1b545213.png"
	],
	[
		"0x168ecee26470f9491c0859ffa3ea0397d1047011",
		"The Red Village Bones",
		"The Red Village Bones",
		"ERC1155",
		"/images/nfts/0x168ecee26470f9491c0859ffa3ea0397d1047011.png"
	],
	[
		"0xac43f1c3dec807ceab45e9ab3327126aa69b7a26",
		"Team Starboys",
		"VSPXAKU",
		"ERC1155",
		"/images/nfts/0xac43f1c3dec807ceab45e9ab3327126aa69b7a26.png"
	],
	[
		"0x0825f050e9b021a0e9de8cb1fb10b6c9f41e834c",
		"LetsWalk",
		"#LetsWalk",
		"ERC1155",
		"/images/nfts/0x0825f050e9b021a0e9de8cb1fb10b6c9f41e834c.png"
	],
	[
		"0x54ed266d42dc8e1ee543768ff1ded7b896a03e7b",
		"Code Green - Heal Pass",
		"CGHP",
		"ERC1155",
		"/images/nfts/0x54ed266d42dc8e1ee543768ff1ded7b896a03e7b.png"
	],
	[
		"0x89c277891ad100c21da648efac448bfc83b2d7bf",
		"BITMEN - EVOWARE",
		"BITMEN - EVOWARE",
		"ERC1155",
		"/images/nfts/0x89c277891ad100c21da648efac448bfc83b2d7bf.png"
	],
	[
		"0x118ab18f9fb8e830c5cd88ec60276ce2bf4dace2",
		"UAE NFT - From Desert To Mars | Kristel Bechara",
		"UAENFT",
		"ERC1155",
		"/images/nfts/0x118ab18f9fb8e830c5cd88ec60276ce2bf4dace2.png"
	],
	[
		"0x99502f432d62db398f127639d2dc94e8ed523a4a",
		"UAE NFT - From Desert To Mars | Jasim Al Bulushi",
		"UAENFT",
		"ERC1155",
		"/images/nfts/0x99502f432d62db398f127639d2dc94e8ed523a4a.png"
	],
	[
		"0xe6fa856dfa891aa7b60458dd21ee203251aafb8a",
		"HPPR Hall Passes",
		"HPPRPASS",
		"ERC1155",
		"/images/nfts/0xe6fa856dfa891aa7b60458dd21ee203251aafb8a.png"
	],
	[
		"0x6a47f2e78e6a594e594fd3e318f301e987b60d55",
		"Kuroro Beasts - Ferry Tickets",
		"Kuroro Beasts - Ferry Tickets",
		"ERC1155",
		"/images/nfts/0x6a47f2e78e6a594e594fd3e318f301e987b60d55.png"
	],
	[
		"0x37af74ef531fbf8c39dcbd01e55a525447c685f2",
		"diamondheartAPE",
		"diamondheartAPE",
		"ERC1155",
		"/images/nfts/0x37af74ef531fbf8c39dcbd01e55a525447c685f2.png"
	],
	[
		"0xfa7d39546eca23dd051a22b70a6e35ece6beb7d1",
		"Aimos Editions - Hometeam",
		"Aimos Editions - Hometeam",
		"ERC1155",
		"/images/nfts/0xfa7d39546eca23dd051a22b70a6e35ece6beb7d1.png"
	],
	[
		"0x5ea64e0723eb5f44aeb1995d2029702b8855463e",
		"MSC Antidote",
		"MSCA",
		"ERC1155",
		"/images/nfts/0x5ea64e0723eb5f44aeb1995d2029702b8855463e.png"
	],
	[
		"0xfdf2a969a15906cb727cfcec39a7f980454ea395",
		"B-Sides by SAU",
		"B-Sides by SAU",
		"ERC1155",
		"/images/nfts/0xfdf2a969a15906cb727cfcec39a7f980454ea395.png"
	],
	[
		"0x08cb1d7755fdf5f39a2d8425662e5090eebf6753",
		"Special Fragment",
		"Special Fragment",
		"ERC1155",
		"/images/nfts/0x08cb1d7755fdf5f39a2d8425662e5090eebf6753.png"
	],
	[
		"0xabebc02177422f4a31cf37986748dfa0852c2a6b",
		"Sining Gang",
		"SGG",
		"ERC1155"
	],
	[
		"0xc01c7145a3c5949b38e4c6cb94c2e8eaac9e327a",
		"CC0 Party by Solemn",
		"CC0 Party by Solemn",
		"ERC1155",
		"/images/nfts/0xc01c7145a3c5949b38e4c6cb94c2e8eaac9e327a.png"
	],
	[
		"0x491597e29a11f99dcd79a33d1e1960c9cbeb08c4",
		"The Caribbean Pass",
		"CABP",
		"ERC1155",
		"/images/nfts/0x491597e29a11f99dcd79a33d1e1960c9cbeb08c4.png"
	],
	[
		"0x2923c3e5a0f10bc02d8c90287b2af45cd579dec4",
		"Bulls and Apes Project - Utilities",
		"BAPUTIL",
		"ERC1155",
		"/images/nfts/0x2923c3e5a0f10bc02d8c90287b2af45cd579dec4.png"
	],
	[
		"0x9594addccb032366835df689ddd83a98a12e7a1c",
		"Illustration by MeldaVNH",
		"Illustration by MeldaVNH",
		"ERC1155",
		"/images/nfts/0x9594addccb032366835df689ddd83a98a12e7a1c.png"
	],
	[
		"0x959b7ad598ef6d37c06498cb6849466ab86c9e9b",
		"DREAM.WORLD - by FIVE NINETY",
		"DREAM.WORLD - by FIVE NINETY",
		"ERC1155",
		"/images/nfts/0x959b7ad598ef6d37c06498cb6849466ab86c9e9b.png"
	],
	[
		"0x5c3daa7a35d7def65bfd9e99120d5fa07f63f555",
		"HEX TOYS",
		"TOYS",
		"ERC1155",
		"/images/nfts/0x5c3daa7a35d7def65bfd9e99120d5fa07f63f555.png"
	],
	[
		"0x9c8882c6b3e40530cdbce404eef003443b1e455a",
		"Alien Frens Incubator",
		"Alien Frens Incubator",
		"ERC1155",
		"/images/nfts/0x9c8882c6b3e40530cdbce404eef003443b1e455a.png"
	],
	[
		"0x797a48c46be32aafcedcfd3d8992493d8a1f256b",
		"Inhabitants: MintPass",
		"PASS",
		"ERC1155",
		"/images/nfts/0x797a48c46be32aafcedcfd3d8992493d8a1f256b.png"
	],
	[
		"0x80d2f4321d5fcbae61d06b8a716b1b1ef49471df",
		"MetaClient MetaPass",
		"METAPASS",
		"ERC1155",
		"/images/nfts/0x80d2f4321d5fcbae61d06b8a716b1b1ef49471df.png"
	],
	[
		"0x249a3c53a1fec15ad60c939a0eac473cad1ae981",
		"From the Mountains of My Mind - Editions // By KRCaptures",
		"From the Mountains of My Mind - Editions // By KRCaptures",
		"ERC1155",
		"/images/nfts/0x249a3c53a1fec15ad60c939a0eac473cad1ae981.png"
	],
	[
		"0x8442864d6ab62a9193be2f16580c08e0d7bcda2f",
		"TIME: Issue 01 - Vitalik Buterin",
		"TIME: Issue 01 - Vitalik Buterin",
		"ERC1155",
		"/images/nfts/0x8442864d6ab62a9193be2f16580c08e0d7bcda2f.png"
	],
	[
		"0xc8cefbade9eecfe198f90fce8db2eac9e8f58a14",
		"Editions X Richardzphotoz",
		"Editions X Richardzphotoz",
		"ERC1155",
		"/images/nfts/0xc8cefbade9eecfe198f90fce8db2eac9e8f58a14.png"
	],
	[
		"0xae7d9f6c206c095530654fa4881661ba62284076",
		"Editions by Solemn",
		"Editions by Solemn",
		"ERC1155",
		"/images/nfts/0xae7d9f6c206c095530654fa4881661ba62284076.png"
	],
	[
		"0x7f44572988f9368c3ce3c32697961b1896f941a3",
		"Zoofrenz Apefrenz Utility",
		"ZAPEUTL",
		"ERC1155",
		"/images/nfts/0x7f44572988f9368c3ce3c32697961b1896f941a3.png"
	],
	[
		"0xb4b55cb5c7d3c59c69dcaac83ed067bb3abfa2d3",
		"MoonBird Bro",
		"OnChainMask",
		"ERC1155",
		"/images/nfts/0xb4b55cb5c7d3c59c69dcaac83ed067bb3abfa2d3.png"
	],
	[
		"0x0a9f82853da45422e03fc8f00b265d583922f98e",
		"G-Star RAW 3301 Community Token",
		"G-Star RAW 3301 Community Token",
		"ERC1155",
		"/images/nfts/0x0a9f82853da45422e03fc8f00b265d583922f98e.png"
	],
	[
		"0x0411f0ff4105fdc075e5e1bfdab47183c1b9df78",
		"shiryo-cards",
		"shiryo-cards",
		"ERC1155",
		"/images/nfts/0x0411f0ff4105fdc075e5e1bfdab47183c1b9df78.png"
	],
	[
		"0x231fef9943e942df34d7cf623a7a0314eff959ec",
		"Bad Luck Club Memberships",
		"Bad Luck Club Memberships",
		"ERC1155",
		"/images/nfts/0x231fef9943e942df34d7cf623a7a0314eff959ec.png"
	],
	[
		"0x0000000010c38b3d8b4d642d9d065fb69bc77bc7",
		"Underground Pass",
		"ug",
		"ERC1155",
		"/images/nfts/0x0000000010c38b3d8b4d642d9d065fb69bc77bc7.png"
	],
	[
		"0x94ccaefa46bad54cf1a5c594a84e17d440b305b3",
		"Fastlove Studios",
		"Fastlove Studios",
		"ERC1155",
		"/images/nfts/0x94ccaefa46bad54cf1a5c594a84e17d440b305b3.png"
	],
	[
		"0x4b873a580db356ace9f6c0a4ad7754b84cd20cd3",
		"Multifaceted Tokyo (Editions)",
		"Multifaceted Tokyo (Editions)",
		"ERC1155",
		"/images/nfts/0x4b873a580db356ace9f6c0a4ad7754b84cd20cd3.png"
	],
	[
		"0x9940bf08f6457b6e484249e2a9d965e81ff10434",
		"Floor X Creepz",
		"FXC",
		"ERC1155",
		"/images/nfts/0x9940bf08f6457b6e484249e2a9d965e81ff10434.png"
	],
	[
		"0x2519d87843160a7cebde80a14d21ad1b545a6a2b",
		"GQ OG",
		"GQOG",
		"ERC1155",
		"/images/nfts/0x2519d87843160a7cebde80a14d21ad1b545a6a2b.png"
	],
	[
		"0x2832c839b63dd5a645b1c817d4a385b564bec62a",
		"Roman Gutikov x Editions",
		"Roman Gutikov x Editions",
		"ERC1155",
		"/images/nfts/0x2832c839b63dd5a645b1c817d4a385b564bec62a.png"
	],
	[
		"0xc868b3f657a308363ebd8acfd2f369784f9d2117",
		"Jimena Editions",
		"Jimena Editions",
		"ERC1155",
		"/images/nfts/0xc868b3f657a308363ebd8acfd2f369784f9d2117.png"
	],
	[
		"0x7cdc0421469398e0f3aa8890693d86c840ac8931",
		"Doki Doki",
		"MOMIJI",
		"ERC1155",
		"/images/nfts/0x7cdc0421469398e0f3aa8890693d86c840ac8931.png"
	],
	[
		"0x1e52f7a450b08b1b249a4f4f54518fc5278c2285",
		"Twin Tigers Jacket",
		"TIGER",
		"ERC1155",
		"/images/nfts/0x1e52f7a450b08b1b249a4f4f54518fc5278c2285.png"
	],
	[
		"0x8bde0185c7585805f79b2980aec375686a1d0b09",
		"Meeler's Editions",
		"Meeler's Editions",
		"ERC1155",
		"/images/nfts/0x8bde0185c7585805f79b2980aec375686a1d0b09.png"
	],
	[
		"0x090f688f0c11a8671c47d833af3cf965c30d3c35",
		"Deadfrenz Lab Access Pass",
		"DEADFRENZPASS",
		"ERC1155",
		"/images/nfts/0x090f688f0c11a8671c47d833af3cf965c30d3c35.png"
	],
	[
		"0x7912a656ece2bc669d4116ad8e9495f722d92d76",
		"UNDAO",
		"UNDAO",
		"ERC1155",
		"/images/nfts/0x7912a656ece2bc669d4116ad8e9495f722d92d76.png"
	],
	[
		"0x14484c6a58a387728a14189a5a7b0655f38d0759",
		"Curators Society (Passes)",
		"Curators Society (Passes)",
		"ERC1155",
		"/images/nfts/0x14484c6a58a387728a14189a5a7b0655f38d0759.png"
	],
	[
		"0x203f41489033f85f646da53765e9920205915389",
		"Cheers Up Badge",
		"CUPB",
		"ERC1155",
		"/images/nfts/0x203f41489033f85f646da53765e9920205915389.png"
	],
	[
		"0xe574ddd69079a87222f282aa40f2d3b05303e93b",
		"Frogland Computational Toadex",
		"LSD-420",
		"ERC1155",
		"/images/nfts/0xe574ddd69079a87222f282aa40f2d3b05303e93b.png"
	],
	[
		"0xcc39986019b25e26900619b5c5876139cbf3879c",
		"Gutter Merch 2.0",
		"Gutter Merch 2.0",
		"ERC1155",
		"/images/nfts/0xcc39986019b25e26900619b5c5876139cbf3879c.png"
	],
	[
		"0x2013ff029f9d3d31169f4fdc673c8b9fa0ce1fbd",
		"TinyPaws",
		"TinyPaws",
		"ERC1155",
		"/images/nfts/0x2013ff029f9d3d31169f4fdc673c8b9fa0ce1fbd.png"
	],
	[
		"0x3ec0f025c96292522f10217b2bde667d181b4ed8",
		"Sneaker News Membership Card",
		"SNMC",
		"ERC1155",
		"/images/nfts/0x3ec0f025c96292522f10217b2bde667d181b4ed8.png"
	],
	[
		"0xef9f751cc4ed66c1492f417148c4af5cd9fb2ee3",
		"Dads Specials",
		"DADSSPECIALS",
		"ERC1155",
		"/images/nfts/0xef9f751cc4ed66c1492f417148c4af5cd9fb2ee3.png"
	],
	[
		"0x3b90aaaa8f3850edbad137b52e2754d25982e173",
		"City Street Strategies",
		"City Street Strategies",
		"ERC1155",
		"/images/nfts/0x3b90aaaa8f3850edbad137b52e2754d25982e173.png"
	],
	[
		"0xee37e56f3a47d7c752c92407064f96077338fd5d",
		"Happy Astronauts",
		"HATS",
		"ERC1155",
		"/images/nfts/0xee37e56f3a47d7c752c92407064f96077338fd5d.png"
	],
	[
		"0x9aa62baa781021b32f011733fccae843a5dc0fff",
		"Eureka Rabbit - Mystery Box",
		"Eureka Rabbit - Mystery Box",
		"ERC1155",
		"/images/nfts/0x9aa62baa781021b32f011733fccae843a5dc0fff.png"
	],
	[
		"0xdf5cce8d3d00a31324006ec0879904617c587a46",
		"The Lobstars Special Editions",
		"The Lobstars Special Editions",
		"ERC1155",
		"/images/nfts/0xdf5cce8d3d00a31324006ec0879904617c587a46.png"
	],
	[
		"0x4483af27e73fcd79b6264b7960ff3209d1357b70",
		"Pixie Jars Rewards",
		"PJR",
		"ERC1155",
		"/images/nfts/0x4483af27e73fcd79b6264b7960ff3209d1357b70.png"
	],
	[
		"0xfaff15c6cdaca61a4f87d329689293e07c98f578",
		"Zapper - Season 1 Edition",
		"ZPR_NFT",
		"ERC1155",
		"/images/nfts/0xfaff15c6cdaca61a4f87d329689293e07c98f578.png"
	],
	[
		"0x0adf0bc748296bcba9f394d783a5f5e9406d6874",
		"Portion Art Token",
		"PAT",
		"ERC1155",
		"/images/nfts/0x0adf0bc748296bcba9f394d783a5f5e9406d6874.png"
	],
	[
		"0x9d714d192bf2aa77b4acbb9500039d3d18298080",
		"Art by Gabe Weis",
		"Art by Gabe Weis",
		"ERC1155",
		"/images/nfts/0x9d714d192bf2aa77b4acbb9500039d3d18298080.png"
	],
	[
		"0x51a3db97d612e7ac3d8e69ed6dfea08d5ef20d3a",
		"TIMEPieces: Moments in TIME",
		"TIMEPieces: Moments in TIME",
		"ERC1155",
		"/images/nfts/0x51a3db97d612e7ac3d8e69ed6dfea08d5ef20d3a.png"
	],
	[
		"0x348fc118bcc65a92dc033a951af153d14d945312",
		"RTFKT - CloneX Mintvial",
		"RTFKT - CloneX Mintvial",
		"ERC1155",
		"/images/nfts/0x348fc118bcc65a92dc033a951af153d14d945312.png"
	],
	[
		"0x1c2bb177c328eb56bebf077ad3c773f95e8a0f79",
		"Unidentified contract - DIdn2HRWfD",
		"Unidentified contract - DIdn2HRWfD",
		"ERC1155"
	],
	[
		"0x7e619a01e1a3b3a6526d0e01fbac4822d48f439b",
		"Gallery Mementos",
		"GM",
		"ERC1155",
		"/images/nfts/0x7e619a01e1a3b3a6526d0e01fbac4822d48f439b.png"
	],
	[
		"0xc4c377565a4b9eb6e657c2422bd33b6e4859b041",
		"Dead Ringers: Edition by Dmitri Cherniak",
		"Dead Ringers: Edition by Dmitri Cherniak",
		"ERC1155",
		"/images/nfts/0xc4c377565a4b9eb6e657c2422bd33b6e4859b041.png"
	],
	[
		"0x1525037d1ba92458861dcd4590e9d154507adb24",
		"Granny's Dispensary",
		"RAW",
		"ERC1155",
		"/images/nfts/0x1525037d1ba92458861dcd4590e9d154507adb24.png"
	],
	[
		"0xd9faed5e4850c2fc83133d93e1bd5eae018153e2",
		"Midnight Destiny Edition",
		"Midnight Destiny Edition",
		"ERC1155",
		"/images/nfts/0xd9faed5e4850c2fc83133d93e1bd5eae018153e2.png"
	],
	[
		"0x2e8dcd63201cb5592a90b288ecd197eace434857",
		"AV Editions",
		"AV Editions",
		"ERC1155",
		"/images/nfts/0x2e8dcd63201cb5592a90b288ecd197eace434857.png"
	],
	[
		"0x21ae791a447c7eec28c40bba0b297b00d7d0e8f4",
		"DIESEL NFTs",
		"DSL",
		"ERC1155",
		"/images/nfts/0x21ae791a447c7eec28c40bba0b297b00d7d0e8f4.png"
	],
	[
		"0x296f8012f6790207a071a49a87bfe514fe466dda",
		"Lofi Guy Specials",
		"Lofi Guy Specials",
		"ERC1155",
		"/images/nfts/0x296f8012f6790207a071a49a87bfe514fe466dda.png"
	],
	[
		"0xfb18459f4c31496d09e4de0c8fcf241271dfe5bc",
		"Kahiru: Citizens Merit",
		"MANUSCRIPT",
		"ERC1155",
		"/images/nfts/0xfb18459f4c31496d09e4de0c8fcf241271dfe5bc.png"
	],
	[
		"0xef07c3ff74bc915a3f3a91e691622f03f604c4e0",
		"AlphaDoggg Extras",
		"AlphaDoggg Extras",
		"ERC1155",
		"/images/nfts/0xef07c3ff74bc915a3f3a91e691622f03f604c4e0.png"
	],
	[
		"0x29e99baefeac4fe2b3dddbbfc18a517fb7d6ddf8",
		"GATE Artifacts",
		"GATE Artifacts",
		"ERC1155",
		"/images/nfts/0x29e99baefeac4fe2b3dddbbfc18a517fb7d6ddf8.png"
	],
	[
		"0x0004477d30634b6c7343701fcf5a9c6867625e1b",
		"Emotons",
		"Emotons",
		"ERC1155",
		"/images/nfts/0x0004477d30634b6c7343701fcf5a9c6867625e1b.png"
	],
	[
		"0x9c0940f28e169f04ae93907e5b04c763e89d2c59",
		"MOAR Serum",
		"MOARSerum",
		"ERC1155",
		"/images/nfts/0x9c0940f28e169f04ae93907e5b04c763e89d2c59.png"
	],
	[
		"0x97ed92e744c10fdd5d403a756239c4069e415e79",
		"White Rabbit Producer Pass",
		"WRPP",
		"ERC1155",
		"/images/nfts/0x97ed92e744c10fdd5d403a756239c4069e415e79.png"
	],
	[
		"0x37d5f0e378e27ac7a7fda2f11635b0d7ee8efd6c",
		"MATTE Black Card",
		"BLACKCARD",
		"ERC1155",
		"/images/nfts/0x37d5f0e378e27ac7a7fda2f11635b0d7ee8efd6c.png"
	],
	[
		"0x469228900d03669e6b98c43886c17b50b4ccfd49",
		"Brittany Pierre Editions",
		"Brittany Pierre Editions",
		"ERC1155",
		"/images/nfts/0x469228900d03669e6b98c43886c17b50b4ccfd49.png"
	],
	[
		"0x7daec605e9e2a1717326eedfd660601e2753a057",
		"10KTF Stockroom",
		"10KTF Stockroom",
		"ERC1155",
		"/images/nfts/0x7daec605e9e2a1717326eedfd660601e2753a057.png"
	],
	[
		"0xdc8acba8d2bff4f20192a0630ffe540ba73d1d58",
		"Deez Shop",
		"DNS",
		"ERC1155",
		"/images/nfts/0xdc8acba8d2bff4f20192a0630ffe540ba73d1d58.png"
	],
	[
		"0x581416181453cdb892451db4acd476d95fc9fe66",
		"Holy Villains",
		"VILLAINS",
		"ERC1155",
		"/images/nfts/0x581416181453cdb892451db4acd476d95fc9fe66.png"
	],
	[
		"0x11b197e078e41af41bc1d9e03407090e61e40baa",
		"WAGMAM Collection",
		"WAGMAM Collection",
		"ERC1155",
		"/images/nfts/0x11b197e078e41af41bc1d9e03407090e61e40baa.png"
	],
	[
		"0xa533d6c7597ff17ab1a4f228425363b937f9763d",
		"Yuck Pass",
		"YUCK",
		"ERC1155",
		"/images/nfts/0xa533d6c7597ff17ab1a4f228425363b937f9763d.png"
	],
	[
		"0xbac1dc8a3f8567dfe81dd21c11ae533637ae8b24",
		"Paradise Trippies Loot",
		"TRIPPYLOOT",
		"ERC1155",
		"/images/nfts/0xbac1dc8a3f8567dfe81dd21c11ae533637ae8b24.png"
	],
	[
		"0x29ea55ef77fa45c066a41b7c52f85331b3ae57fe",
		"Editions by Dolly Kabaria",
		"Editions by Dolly Kabaria",
		"ERC1155",
		"/images/nfts/0x29ea55ef77fa45c066a41b7c52f85331b3ae57fe.png"
	],
	[
		"0x1d38150f1fd989fb89ab19518a9c4e93c5554634",
		"WAGDIE: Tokens Of Concord",
		"CONCORD",
		"ERC1155",
		"/images/nfts/0x1d38150f1fd989fb89ab19518a9c4e93c5554634.png"
	],
	[
		"0xd95be0e49472927adad417e5e62e2f087b8e210c",
		"Card Geek Hall of Fame",
		"GEEK",
		"ERC1155",
		"/images/nfts/0xd95be0e49472927adad417e5e62e2f087b8e210c.png"
	],
	[
		"0xb2469a7dd9e154c97b99b33e88196f7024f2979e",
		"Fractional NFTs",
		"Fractional NFTs",
		"ERC1155",
		"/images/nfts/0xb2469a7dd9e154c97b99b33e88196f7024f2979e.png"
	],
	[
		"0xd0ed73b33789111807bd64ae2a6e1e6f92f986f5",
		"Unidentified contract - OJq12Eho56",
		"Unidentified contract - OJq12Eho56",
		"ERC1155"
	],
	[
		"0x2163f70d3b4de18a44e570309798e1fbbc916291",
		"Gutter Merch",
		"Gutter Merch",
		"ERC1155",
		"/images/nfts/0x2163f70d3b4de18a44e570309798e1fbbc916291.png"
	],
	[
		"0x6c3ff8fdfb3eda7ffafca883f754a761b375c7ad",
		"Dobies Tickets",
		"TICKET",
		"ERC1155",
		"/images/nfts/0x6c3ff8fdfb3eda7ffafca883f754a761b375c7ad.png"
	],
	[
		"0xbc8542e65ab801f7c9e3edd23238d37a2e3972d6",
		"Nifty League Comics",
		"NLC",
		"ERC1155",
		"/images/nfts/0xbc8542e65ab801f7c9e3edd23238d37a2e3972d6.png"
	],
	[
		"0x002ea266c98230c67d0029d14706e509f9150075",
		"Sappyi",
		"waitarachip",
		"ERC1155",
		"/images/nfts/0x002ea266c98230c67d0029d14706e509f9150075.png"
	],
	[
		"0x3fa937a1d091282e6cfc139c4c6190330f295fa7",
		"Lips Editions",
		"Lips Editions",
		"ERC1155",
		"/images/nfts/0x3fa937a1d091282e6cfc139c4c6190330f295fa7.png"
	],
	[
		"0xf6ac9fe297730f77b758febae400d895b9eb3448",
		"tena koutou - Thank you!",
		"tena koutou - Thank you!",
		"ERC1155",
		"/images/nfts/0xf6ac9fe297730f77b758febae400d895b9eb3448.png"
	],
	[
		"0x4b4fa26161f7d9f387b01ad6bf0169ba5b0f3a85",
		"Thursday Special Edition",
		"RAW",
		"ERC1155",
		"/images/nfts/0x4b4fa26161f7d9f387b01ad6bf0169ba5b0f3a85.png"
	],
	[
		"0x38b7e06eb1a6b8af8b3a06ecc0f673d9f8421ebb",
		"8SIAN VIP GOLD PASS",
		"8SIAN VIP GOLD PASS",
		"ERC1155",
		"/images/nfts/0x38b7e06eb1a6b8af8b3a06ecc0f673d9f8421ebb.png"
	],
	[
		"0xdc6e9a003a66f972290acfd270f0bc3ff91e154a",
		"Nexus Keys",
		"NEXUSKEYS",
		"ERC1155",
		"/images/nfts/0xdc6e9a003a66f972290acfd270f0bc3ff91e154a.png"
	],
	[
		"0xb8a6ca2373a440beffce4d027d0a26ad4b6da3f8",
		"Kieran Bredeson Editions",
		"Kieran Bredeson Editions",
		"ERC1155",
		"/images/nfts/0xb8a6ca2373a440beffce4d027d0a26ad4b6da3f8.png"
	],
	[
		"0xf01a875013d790c8f263a02b13222645fa560e68",
		"Yun's Edition Works",
		"Yun's Edition Works",
		"ERC1155",
		"/images/nfts/0xf01a875013d790c8f263a02b13222645fa560e68.png"
	],
	[
		"0xec02f7ee3aa13ef01ebadc1367e6a80c51d00e49",
		"Whiskers: Inventory Items",
		"Whiskers: Inventory Items",
		"ERC1155",
		"/images/nfts/0xec02f7ee3aa13ef01ebadc1367e6a80c51d00e49.png"
	],
	[
		"0xf37c1de9201f19830e1d6d0f2cefbbe402c4b23c",
		"TheArmors Genesis",
		"TheArmors Genesis",
		"ERC1155",
		"/images/nfts/0xf37c1de9201f19830e1d6d0f2cefbbe402c4b23c.png"
	],
	[
		"0x04d56f68c5995e49a540849ed086af5301b712e7",
		"Unidentified contract - zkxOB90R1j",
		"Unidentified contract - zkxOB90R1j",
		"ERC1155"
	],
	[
		"0xf43aaa80a8f9de69bc71aea989afceb8db7b690f",
		"Soccer Doge Club",
		"SDC",
		"ERC1155",
		"/images/nfts/0xf43aaa80a8f9de69bc71aea989afceb8db7b690f.png"
	],
	[
		"0xf3ec2d6394fc899a5dc1823a205670ebb30939cc",
		"Invasion Pass",
		"IP",
		"ERC1155",
		"/images/nfts/0xf3ec2d6394fc899a5dc1823a205670ebb30939cc.png"
	],
	[
		"0x5df8462548a3ea3bbb91767a6e47a770e5252359",
		"Spatial X",
		"Spatial X",
		"ERC1155",
		"/images/nfts/0x5df8462548a3ea3bbb91767a6e47a770e5252359.png"
	],
	[
		"0xedbc1103c8133e34ff1ed6d8b81fbece81e50458",
		"Waifu Potions",
		"WP",
		"ERC1155",
		"/images/nfts/0xedbc1103c8133e34ff1ed6d8b81fbece81e50458.png"
	],
	[
		"0x2b19466ee159de81c0393b933472bba4ebd8e0be",
		"Awakened Avatars",
		"Avatar",
		"ERC1155",
		"/images/nfts/0x2b19466ee159de81c0393b933472bba4ebd8e0be.png"
	],
	[
		"0x417f847edb1c1cc25ca257d3f3c016b87ce21231",
		"Troverse Passes",
		"PASS",
		"ERC1155",
		"/images/nfts/0x417f847edb1c1cc25ca257d3f3c016b87ce21231.png"
	],
	[
		"0x3266b70962a61f1917f79c387749e3bd95a9ff52",
		"IlluminatiNFT Passes",
		"IlluminatiNFT Passes",
		"ERC1155",
		"/images/nfts/0x3266b70962a61f1917f79c387749e3bd95a9ff52.png"
	],
	[
		"0x5ba27d17821f9ac041b648fe9f90ec40abb8c3c2",
		"SABET OPEN EDITIONS",
		"SABET OPEN EDITIONS",
		"ERC1155",
		"/images/nfts/0x5ba27d17821f9ac041b648fe9f90ec40abb8c3c2.png"
	],
	[
		"0x9ca3a9a3aa59c7ddd61c29f6b0540ad9988aede6",
		"GCF X GALA GAMES",
		"NEWKINO1155GALA",
		"ERC1155",
		"/images/nfts/0x9ca3a9a3aa59c7ddd61c29f6b0540ad9988aede6.png"
	],
	[
		"0xb0e6e954db94484da340f4cdf29df1d58cd8c6f3",
		"Austine Editions",
		"Austine Editions",
		"ERC1155",
		"/images/nfts/0xb0e6e954db94484da340f4cdf29df1d58cd8c6f3.png"
	],
	[
		"0x48e854addccee85ccd4f7a5e660564eae4b577d0",
		"Genetic Engineering Laboratory",
		"SLD",
		"ERC1155",
		"/images/nfts/0x48e854addccee85ccd4f7a5e660564eae4b577d0.png"
	],
	[
		"0xe0cb15f90a9fa1e7d7f69a6d054b934989ed013c",
		"Starcatchers: Space Junk",
		"SC:SJ",
		"ERC1155",
		"/images/nfts/0xe0cb15f90a9fa1e7d7f69a6d054b934989ed013c.png"
	],
	[
		"0x36e39b8685995ba803f822d9bc48a8b6445528b1",
		"Bxnes Collection",
		"Bxnes Collection",
		"ERC1155",
		"/images/nfts/0x36e39b8685995ba803f822d9bc48a8b6445528b1.png"
	],
	[
		"0xdfbe0317ce520b4958a2f13dbaa9da8cecb72fb5",
		"Special Edition Fuckles",
		"Special Edition Fuckles",
		"ERC1155",
		"/images/nfts/0xdfbe0317ce520b4958a2f13dbaa9da8cecb72fb5.png"
	],
	[
		"0xed493f841b0527ff4ad0c08ac9cf84fe26ebb5e1",
		"Ape-In Productions",
		"Ape-In Productions",
		"ERC1155",
		"/images/nfts/0xed493f841b0527ff4ad0c08ac9cf84fe26ebb5e1.png"
	],
	[
		"0xea89b8b10b689f3445cf663d3f6b313a8edd726a",
		"Life of Mon",
		"Life of Mon",
		"ERC1155",
		"/images/nfts/0xea89b8b10b689f3445cf663d3f6b313a8edd726a.png"
	],
	[
		"0xbcbd3525e2f5f08dd31ebd526d2cb58d21c5fc92",
		"Felix - Editions",
		"Felix - Editions",
		"ERC1155",
		"/images/nfts/0xbcbd3525e2f5f08dd31ebd526d2cb58d21c5fc92.png"
	],
	[
		"0x15d64a67b6836fc99f6934655338e98d454e7403",
		"Floppy Poster Webseries Collection",
		"Floppy Poster Webseries Collection",
		"ERC1155",
		"/images/nfts/0x15d64a67b6836fc99f6934655338e98d454e7403.png"
	],
	[
		"0x31ae5109e5adb582f4f42ca9aaa9a723a325f214",
		"Awakened - MultiPass",
		"Multipass",
		"ERC1155",
		"/images/nfts/0x31ae5109e5adb582f4f42ca9aaa9a723a325f214.png"
	],
	[
		"0x658da3d3690f991088b7224e98bee7d85b73c639",
		"sonyart-smartcontract",
		"sonyart-smartcontract",
		"ERC1155",
		"/images/nfts/0x658da3d3690f991088b7224e98bee7d85b73c639.png"
	],
	[
		"0x8c11c7b0256a6014be1ed51a66ecefa35c4924e6",
		"Moon Ape Pets",
		"MAL_PETS",
		"ERC1155",
		"/images/nfts/0x8c11c7b0256a6014be1ed51a66ecefa35c4924e6.png"
	],
	[
		"0x860677ac0aacecc952ac7230d90d2a0c936588ef",
		"multi edition by Nastasya Parshina",
		"multi edition by Nastasya Parshina",
		"ERC1155",
		"/images/nfts/0x860677ac0aacecc952ac7230d90d2a0c936588ef.png"
	],
	[
		"0x1bf47e4f2e9078c30914e33134b21c952b55c64b",
		"Plug Pass",
		"Plug Pass",
		"ERC1155",
		"/images/nfts/0x1bf47e4f2e9078c30914e33134b21c952b55c64b.png"
	],
	[
		"0x7eef591a6cc0403b9652e98e88476fe1bf31ddeb",
		"CityDAO Citizenship",
		"RAW",
		"ERC1155",
		"/images/nfts/0x7eef591a6cc0403b9652e98e88476fe1bf31ddeb.png"
	],
	[
		"0xfb07a23ec5b003dc36c10b21e3c8bb75c3a1913d",
		"Yokais by Easy Demons Club",
		"YOKAI",
		"ERC1155",
		"/images/nfts/0xfb07a23ec5b003dc36c10b21e3c8bb75c3a1913d.png"
	],
	[
		"0x6344ea0be6b1d36fe8a20de46de751aca22acd45",
		"Lost In Transit",
		"Lost In Transit",
		"ERC1155",
		"/images/nfts/0x6344ea0be6b1d36fe8a20de46de751aca22acd45.png"
	],
	[
		"0x51e613727fdd2e0b91b51c3e5427e9440a7957e4",
		"Crypto Corgis",
		"CORGI",
		"ERC1155",
		"/images/nfts/0x51e613727fdd2e0b91b51c3e5427e9440a7957e4.png"
	],
	[
		"0xb7f9ef1e09829d3937bfc6b5e46f3cc46a23d13d",
		"Non Fungible Tools Lifetime Membership",
		"Non Fungible Tools Lifetime Membership",
		"ERC1155",
		"/images/nfts/0xb7f9ef1e09829d3937bfc6b5e46f3cc46a23d13d.png"
	],
	[
		"0x515b93cf53673e2269a5e3c8aee989a6593ddc3e",
		"DumpsterDorks Slimeballs",
		"DumpsterDorks Slimeballs",
		"ERC1155",
		"/images/nfts/0x515b93cf53673e2269a5e3c8aee989a6593ddc3e.png"
	],
	[
		"0x89c3df79aa8a3cbc96caf32f83eba8f1bd3787b9",
		"Genesis Oath (Old - DO NOT BUY)",
		"MTNT",
		"ERC1155",
		"/images/nfts/0x89c3df79aa8a3cbc96caf32f83eba8f1bd3787b9.png"
	],
	[
		"0x54f3d69a19a8db554a85688704c7f19f4be111d3",
		"Exodia Elite",
		"Exodia Elite",
		"ERC1155",
		"/images/nfts/0x54f3d69a19a8db554a85688704c7f19f4be111d3.png"
	],
	[
		"0xdfa5aea0d5d591f418dfb4116fc9c04643825bba",
		"The Somethings - A Deed To The Realm",
		"TSADTTR",
		"ERC1155",
		"/images/nfts/0xdfa5aea0d5d591f418dfb4116fc9c04643825bba.png"
	],
	[
		"0xb0c81c53b267a4cd6cbaf48d746d00e369d060a5",
		"Poisoned Bananas",
		"PSB",
		"ERC1155",
		"/images/nfts/0xb0c81c53b267a4cd6cbaf48d746d00e369d060a5.png"
	],
	[
		"0x08483153802fa9877029690312846afb2e9baa63",
		"Wolf Guild - Mint Pass",
		"Wolf Guild - Mint Pass",
		"ERC1155",
		"/images/nfts/0x08483153802fa9877029690312846afb2e9baa63.png"
	],
	[
		"0x207ce3186b13a2855d9ce8fdb56eacc53e84fb4b",
		"The Golden Orchard of Eris",
		"The Golden Orchard of Eris",
		"ERC1155",
		"/images/nfts/0x207ce3186b13a2855d9ce8fdb56eacc53e84fb4b.png"
	],
	[
		"0x44c0e50da7eca1b5a5b360519d39556acdf4063f",
		"Saint Archives",
		"Saint Archives",
		"ERC1155",
		"/images/nfts/0x44c0e50da7eca1b5a5b360519d39556acdf4063f.png"
	],
	[
		"0xf2183d1eb3161a0f80fc742941e335351ee1154b",
		"Unidentified contract - yf91IRGdmK - old",
		"Unidentified contract - yf91IRGdmK - old",
		"ERC1155"
	],
	[
		"0x2ed5ca750db14526edb1c949c2137a52b5911f9c",
		"AlphaLabs // Genesis",
		"AlphaLabs // Genesis",
		"ERC1155",
		"/images/nfts/0x2ed5ca750db14526edb1c949c2137a52b5911f9c.png"
	],
	[
		"0x341a1c534248966c4b6afad165b98daed4b964ef",
		"Murakami.Flowers Seed",
		"SEED",
		"ERC1155",
		"/images/nfts/0x341a1c534248966c4b6afad165b98daed4b964ef.png"
	],
	[
		"0xa16891897378a82e9f0ad44a705b292c9753538c",
		"PILLS",
		"PILLS",
		"ERC1155",
		"/images/nfts/0xa16891897378a82e9f0ad44a705b292c9753538c.png"
	],
	[
		"0x36d30b3b85255473d27dd0f7fd8f35e36a9d6f06",
		"888 inner circle",
		"888 inner circle",
		"ERC1155",
		"/images/nfts/0x36d30b3b85255473d27dd0f7fd8f35e36a9d6f06.png"
	],
	[
		"0x9940bb667f64fca06fc4127861855696def7c69d",
		"Elysium Code",
		"Elysium Code",
		"ERC1155",
		"/images/nfts/0x9940bb667f64fca06fc4127861855696def7c69d.png"
	],
	[
		"0xf56184584de2c484885c16c0a34b8da23de94f07",
		"Zanoza Art Bank",
		"Zanoza Art Bank",
		"ERC1155",
		"/images/nfts/0xf56184584de2c484885c16c0a34b8da23de94f07.png"
	],
	[
		"0x40875223d61a688954263892d0f76c94fd6b3d4a",
		"XOLO Keys",
		"XKEY",
		"ERC1155",
		"/images/nfts/0x40875223d61a688954263892d0f76c94fd6b3d4a.png"
	],
	[
		"0xafb44cef938b1be600a4331bf9904f6cec2fcac3",
		"EllioTrades NFT Collection",
		"EllioTrades NFT Collection",
		"ERC1155",
		"/images/nfts/0xafb44cef938b1be600a4331bf9904f6cec2fcac3.png"
	],
	[
		"0x7e9b9ba1a3b4873279857056279cef6a4fcdf340",
		"Noble Gallery",
		"Noble Gallery",
		"ERC1155",
		"/images/nfts/0x7e9b9ba1a3b4873279857056279cef6a4fcdf340.png"
	],
	[
		"0x7916901381f42a2f8eee98cd4970b22032fb8fe5",
		"G-NO Digital Art Collectibles",
		"G-NO",
		"ERC1155",
		"/images/nfts/0x7916901381f42a2f8eee98cd4970b22032fb8fe5.png"
	],
	[
		"0xd374410e9bb22f3771ffbd0b40a07c0cf44a04fc",
		"The Nifty Portal",
		"The Nifty Portal",
		"ERC1155",
		"/images/nfts/0xd374410e9bb22f3771ffbd0b40a07c0cf44a04fc.png"
	],
	[
		"0x17f5655c7d834e4772171f30e7315bbc3221f1ee",
		"Supremacy Achievements",
		"Supremacy Achievements",
		"ERC1155",
		"/images/nfts/0x17f5655c7d834e4772171f30e7315bbc3221f1ee.png"
	],
	[
		"0xad6dc35442d766f87f9296f17ba45e23518bc5f3",
		"Paladin Pandas",
		"Paladin Pandas",
		"ERC1155",
		"/images/nfts/0xad6dc35442d766f87f9296f17ba45e23518bc5f3.png"
	],
	[
		"0x9f608060c234f70d83ba16ad9277cd42f7dcff49",
		"Ninjalerts Lifetime License",
		"Ninjalerts Lifetime License",
		"ERC1155",
		"/images/nfts/0x9f608060c234f70d83ba16ad9277cd42f7dcff49.png"
	],
	[
		"0xcccac232b742b07635afc41eee1e33aa5d175780",
		"Goobers NFT Rewards",
		"GOOBREWARDS",
		"ERC1155"
	],
	[
		"0x130cfab3817467f532c179d4e6502f5a7e7d44c7",
		"Kith Friends",
		"KITHFRIENDS",
		"ERC1155",
		"/images/nfts/0x130cfab3817467f532c179d4e6502f5a7e7d44c7.png"
	],
	[
		"0x52e4c6f472f9b701ee5080e9f7f227f63dd6064c",
		"Atari x Everyrealm Collective",
		"AAP",
		"ERC1155",
		"/images/nfts/0x52e4c6f472f9b701ee5080e9f7f227f63dd6064c.png"
	],
	[
		"0xfa7622f718e1c78db3fb83630e4e68304c03ef15",
		"We Are All Going To",
		"We Are All Going To",
		"ERC1155",
		"/images/nfts/0xfa7622f718e1c78db3fb83630e4e68304c03ef15.png"
	],
	[
		"0x2ad72ecc13738f50662ea0af44210c6f7d42ddef",
		"Project MIP Network",
		"MIP",
		"ERC1155",
		"/images/nfts/0x2ad72ecc13738f50662ea0af44210c6f7d42ddef.png"
	],
	[
		"0x8ae0d617f1a6f6d3fdb2b398f4814bebd3939ddf",
		"Furu's Mint Club | Genesis Pass",
		"Furu's Mint Club | Genesis Pass",
		"ERC1155",
		"/images/nfts/0x8ae0d617f1a6f6d3fdb2b398f4814bebd3939ddf.png"
	],
	[
		"0x38221a026370360d8c0767c232f39f72f8f3ffde",
		"HUXLEY Genesis",
		"GENESIS",
		"ERC1155",
		"/images/nfts/0x38221a026370360d8c0767c232f39f72f8f3ffde.png"
	],
	[
		"0x38276f2ba820a939b191a0dd9b4c032da52a2c44",
		"Kickz Pass Genesis",
		"KPG",
		"ERC1155",
		"/images/nfts/0x38276f2ba820a939b191a0dd9b4c032da52a2c44.png"
	],
	[
		"0x46a0a4840b496c8e8fd034c99840f578fd842341",
		"The Red Village Blood Portal",
		"TRVBP",
		"ERC1155",
		"/images/nfts/0x46a0a4840b496c8e8fd034c99840f578fd842341.png"
	],
	[
		"0xceacb860862d8f7b7d3df9d9babdd43a5aaacd7b",
		"Sculpted Bored Ape",
		"SPA",
		"ERC1155",
		"/images/nfts/0xceacb860862d8f7b7d3df9d9babdd43a5aaacd7b.png"
	],
	[
		"0xf014c8d2cd5c3bb1c99cb177c52462660569c7fd",
		"1SHOS BlindBox(Deprecated)",
		"1SHOS BlindBox(Deprecated)",
		"ERC1155",
		"/images/nfts/0xf014c8d2cd5c3bb1c99cb177c52462660569c7fd.png"
	],
	[
		"0x7a44228e46cdd37a85c0b07c4043b86c11e8c315",
		"Candy Digital",
		"Candy Digital",
		"ERC1155",
		"/images/nfts/0x7a44228e46cdd37a85c0b07c4043b86c11e8c315.png"
	],
	[
		"0xf0873dea4a3d2d08586f0dd94fa5cd2d1a28ec01",
		"DaoDon Access Card",
		"DD",
		"ERC1155",
		"/images/nfts/0xf0873dea4a3d2d08586f0dd94fa5cd2d1a28ec01.png"
	],
	[
		"0xcd52bbd66d25cd64e41e7342f4f5a596b73a242b",
		"Chains Drop - Volume 1",
		"Chains Drop - Volume 1",
		"ERC1155",
		"/images/nfts/0xcd52bbd66d25cd64e41e7342f4f5a596b73a242b.png"
	],
	[
		"0xbfc5f30e9da14d9506a0ea1eea71e2bf6bb0c3f9",
		"IlluminatiNFT Passes",
		"IlluminatiNFT Passes",
		"ERC1155",
		"/images/nfts/0xbfc5f30e9da14d9506a0ea1eea71e2bf6bb0c3f9.png"
	],
	[
		"0xc6c12eefc72fa2a9016173537606e1c4554def45",
		"STUFF FOR MY PEOPLE",
		"STUFF FOR MY PEOPLE",
		"ERC1155",
		"/images/nfts/0xc6c12eefc72fa2a9016173537606e1c4554def45.png"
	],
	[
		"0x3a6f22b9d33d68fab863bb5c17e9d31476df9fea",
		"Shroom Scouts",
		"Shroom Scouts",
		"ERC1155",
		"/images/nfts/0x3a6f22b9d33d68fab863bb5c17e9d31476df9fea.png"
	],
	[
		"0x628e1ae54610f6c553ec227019526776351cb6d4",
		"Bloodshed Bears Genesis MetaPass",
		"Bloodshed Bears Genesis MetaPass",
		"ERC1155",
		"/images/nfts/0x628e1ae54610f6c553ec227019526776351cb6d4.png"
	],
	[
		"0xfe5aef9e91c86ee01b1542d942a1635bc5ed96e0",
		"BBRC - CONTINENTAL COIN",
		"BBRC - CONTINENTAL COIN",
		"ERC1155",
		"/images/nfts/0xfe5aef9e91c86ee01b1542d942a1635bc5ed96e0.png"
	],
	[
		"0xee8ebeb41b28afad38f64c8dab5039ff31158eeb",
		"CC Time Travel",
		"CC Time Travel",
		"ERC1155",
		"/images/nfts/0xee8ebeb41b28afad38f64c8dab5039ff31158eeb.png"
	],
	[
		"0x3a7dc718eaf31f0a55988161f3d75d7ca785b034",
		"The CryptoCards Collection (2018)",
		"CC",
		"ERC1155",
		"/images/nfts/0x3a7dc718eaf31f0a55988161f3d75d7ca785b034.png"
	],
	[
		"0x11bc4c6a82b0b356c4f15c77a328ed2815924c62",
		"COLLEXX SEED",
		"COLLEXX SEED",
		"ERC1155",
		"/images/nfts/0x11bc4c6a82b0b356c4f15c77a328ed2815924c62.png"
	],
	[
		"0xfbfea4a683d37bf68301f6a9acf7e647bfa8e1a7",
		"SUPERPLASTIC:  Headtripz",
		"SPTPZ",
		"ERC1155",
		"/images/nfts/0xfbfea4a683d37bf68301f6a9acf7e647bfa8e1a7.png"
	],
	[
		"0x517e84661b86134072919f5e6be686e6caaa6bcf",
		"Meta Organization",
		"Meta Organization",
		"ERC1155",
		"/images/nfts/0x517e84661b86134072919f5e6be686e6caaa6bcf.png"
	],
	[
		"0xeb7b1865277f204f9df3eb4010d12570a89d6d8e",
		"DEATHWISH COLLABS",
		"DEATHWISH COLLABS",
		"ERC1155",
		"/images/nfts/0xeb7b1865277f204f9df3eb4010d12570a89d6d8e.png"
	],
	[
		"0x3077674dd77c532b2e2d9945808c900940de50ae",
		"Tears - Layers by Vhils",
		"TEAR",
		"ERC1155",
		"/images/nfts/0x3077674dd77c532b2e2d9945808c900940de50ae.png"
	],
	[
		"0x167f4c0561eea486ac7cf11f7fa1b88beaa47c28",
		"JRNY Club Rewards Collection",
		"JRNYREWARDS",
		"ERC1155",
		"/images/nfts/0x167f4c0561eea486ac7cf11f7fa1b88beaa47c28.png"
	],
	[
		"0x8d78ebf503ec71874427ba7f52ea75159e528585",
		"Gym A Club Pass",
		"GACP",
		"ERC1155",
		"/images/nfts/0x8d78ebf503ec71874427ba7f52ea75159e528585.png"
	],
	[
		"0x3be0f00a6af964daa2a3a51a4dd5f4c87c3b806c",
		"NFTmetaCommunity",
		"NFTmetaCommunity",
		"ERC1155",
		"/images/nfts/0x3be0f00a6af964daa2a3a51a4dd5f4c87c3b806c.png"
	],
	[
		"0xb7be4001bff2c5f4a61dd2435e4c9a19d8d12343",
		"RTFKT PodX",
		"RTFKT PodX",
		"ERC1155",
		"/images/nfts/0xb7be4001bff2c5f4a61dd2435e4c9a19d8d12343.png"
	],
	[
		"0xec2ec2e013a6637567d4a2c07b47bc30c22f1ca1",
		"Editions by Nathan A. Bauman",
		"Editions by Nathan A. Bauman",
		"ERC1155",
		"/images/nfts/0xec2ec2e013a6637567d4a2c07b47bc30c22f1ca1.png"
	],
	[
		"0x75615677d9cd50cb5d9660ffb84ecd4d333e0b76",
		"NF3 Basketball",
		"NF3",
		"ERC1155",
		"/images/nfts/0x75615677d9cd50cb5d9660ffb84ecd4d333e0b76.png"
	],
	[
		"0x5f6809f90b6ca15663b1fd791d548631df3664a8",
		"Humans Factory Pass",
		"HF",
		"ERC1155",
		"/images/nfts/0x5f6809f90b6ca15663b1fd791d548631df3664a8.png"
	],
	[
		"0x82d932a6af6ef773def4312994153d9c80a8f55b",
		"Ape Tape EP by Spottie WiFi",
		"Ape Tape EP by Spottie WiFi",
		"ERC1155",
		"/images/nfts/0x82d932a6af6ef773def4312994153d9c80a8f55b.png"
	],
	[
		"0xd0b53410454370a482979c0adaf3667c6308a801",
		"Elite Ape Entry Coins",
		"COINS",
		"ERC1155",
		"/images/nfts/0xd0b53410454370a482979c0adaf3667c6308a801.png"
	],
	[
		"0x7721e8dd956e07f7254385a7c039e9bde92e425d",
		"NoShitZone",
		"NOSHIT",
		"ERC1155",
		"/images/nfts/0x7721e8dd956e07f7254385a7c039e9bde92e425d.png"
	],
	[
		"0xadae0ddaf90170a44adebcfb8eede12041d13220",
		"Pixelmon Evolution 2 Serum",
		"ES",
		"ERC1155",
		"/images/nfts/0xadae0ddaf90170a44adebcfb8eede12041d13220.png"
	],
	[
		"0x4fd15ae37e6424d75ad5fc0cdefcfba835806460",
		"RAGS Y3K",
		"RAGSTRINITY",
		"ERC1155",
		"/images/nfts/0x4fd15ae37e6424d75ad5fc0cdefcfba835806460.png"
	],
	[
		"0x576b46f3fec611da0383c3a2a343325e8ba9de46",
		"UAE NFT - From Desert To Mars | Anantha Krishnan Nadamel",
		"UAENFT",
		"ERC1155",
		"/images/nfts/0x576b46f3fec611da0383c3a2a343325e8ba9de46.png"
	],
	[
		"0xddb149ae8e6635df01a530da1e46921bd78dc385",
		"ESSENCE//",
		"ESSENCE//",
		"ERC1155",
		"/images/nfts/0xddb149ae8e6635df01a530da1e46921bd78dc385.png"
	],
	[
		"0x5734f570352b8ee609e6be384815cee89091296f",
		"CC0 x ricky",
		"CC0 x ricky",
		"ERC1155",
		"/images/nfts/0x5734f570352b8ee609e6be384815cee89091296f.png"
	],
	[
		"0x6d4bbc0387dd4759eee30f6a482ac6dc2df3facf",
		"RTFKT X NIKE Trillium Lace Engine",
		"RTFKT X NIKE Trillium Lace Engine",
		"ERC1155",
		"/images/nfts/0x6d4bbc0387dd4759eee30f6a482ac6dc2df3facf.png"
	],
	[
		"0x4bd77619a75c8eda181e3587339e7011da75bf0e",
		"Dolce&Gabbana Disco Drip",
		"DGDD",
		"ERC1155",
		"/images/nfts/0x4bd77619a75c8eda181e3587339e7011da75bf0e.png"
	],
	[
		"0xeba867502ef59adbd8bc73fbdb531ed9381b5f97",
		"Planetary Property Association: Shuttle Passes",
		"PPA",
		"ERC1155",
		"/images/nfts/0xeba867502ef59adbd8bc73fbdb531ed9381b5f97.png"
	],
	[
		"0x49b86c1c88cec2def5a8ead5b4f977445877f99a",
		"goodluckgraphics",
		"goodluckgraphics",
		"ERC1155",
		"/images/nfts/0x49b86c1c88cec2def5a8ead5b4f977445877f99a.png"
	],
	[
		"0x82f8b200758d2a5cd5d584e8ee06e4182526b0ae",
		"HD Pass",
		"HDPass",
		"ERC1155",
		"/images/nfts/0x82f8b200758d2a5cd5d584e8ee06e4182526b0ae.png"
	],
	[
		"0xe929a2b373485bd25108c4788bee3d73d2fc61c2",
		"berndawgler and ohyouknowx",
		"berndawgler and ohyouknowx",
		"ERC1155",
		"/images/nfts/0xe929a2b373485bd25108c4788bee3d73d2fc61c2.png"
	],
	[
		"0x33fd426905f149f8376e227d0c9d3340aad17af1",
		"The Memes by 6529",
		"The Memes by 6529",
		"ERC1155",
		"/images/nfts/0x33fd426905f149f8376e227d0c9d3340aad17af1.png"
	],
	[
		"0xdb2e506d2863646c0141f77f2ce9f99bbbb6b8ab",
		"Ethernal Elves Artifacts",
		"Ethernal Elves Artifacts",
		"ERC1155",
		"/images/nfts/0xdb2e506d2863646c0141f77f2ce9f99bbbb6b8ab.png"
	],
	[
		"0x3adf71d5fbb59e32730ceb8e6605af958a204e6b",
		"Gear Pods",
		"PODS",
		"ERC1155",
		"/images/nfts/0x3adf71d5fbb59e32730ceb8e6605af958a204e6b.png"
	],
	[
		"0x06fd60173bf869b8ce4439e3477223c013bad466",
		"BYOVape",
		"BYOVAPE",
		"ERC1155",
		"/images/nfts/0x06fd60173bf869b8ce4439e3477223c013bad466.png"
	],
	[
		"0xffffeed14c6c4c3cfb897526fa4a23b2f862833b",
		"KREEPY CLAIM",
		"KREEPY CLAIM",
		"ERC1155",
		"/images/nfts/0xffffeed14c6c4c3cfb897526fa4a23b2f862833b.png"
	],
	[
		"0x0e1f990d264a9818460dde1b81c0b04d8a88e751",
		"TIMEPieces x Robotos",
		"TIMEPieces x Robotos",
		"ERC1155",
		"/images/nfts/0x0e1f990d264a9818460dde1b81c0b04d8a88e751.png"
	],
	[
		"0xbbbe227ce52d770a05f179e8eb0e9c6e5c339fb6",
		"Samantha Cavet Editions",
		"Samantha Cavet Editions",
		"ERC1155",
		"/images/nfts/0xbbbe227ce52d770a05f179e8eb0e9c6e5c339fb6.png"
	],
	[
		"0x0bd4d37e0907c9f564aaa0a7528837b81b25c605",
		"LlamaBoost",
		"LLP",
		"ERC1155",
		"/images/nfts/0x0bd4d37e0907c9f564aaa0a7528837b81b25c605.png"
	],
	[
		"0xa24eab851c71dc043bb7195e7da9fbcfd0186096",
		"Kuroro Beasts - Trainer Badges",
		"Kuroro Beasts - Trainer Badges",
		"ERC1155",
		"/images/nfts/0xa24eab851c71dc043bb7195e7da9fbcfd0186096.png"
	],
	[
		"0x8a8bb53ff4efe4b583009acf78153e31d25e1600",
		"Gimo's Editions",
		"Gimo's Editions",
		"ERC1155",
		"/images/nfts/0x8a8bb53ff4efe4b583009acf78153e31d25e1600.png"
	],
	[
		"0x339cac7e7719d701a251930ebe5ea10e37a2fd0a",
		"Trial and Error Poster",
		"TNEP",
		"ERC1155",
		"/images/nfts/0x339cac7e7719d701a251930ebe5ea10e37a2fd0a.png"
	],
	[
		"0x9f94a2bca4ae047b8fa7d8dffec587ab6101390c",
		"CryptoMonkz - Official",
		"CryptoMonkz - Official",
		"ERC1155",
		"/images/nfts/0x9f94a2bca4ae047b8fa7d8dffec587ab6101390c.png"
	],
	[
		"0x7cc7add921e2222738561d03c89589929cefcf21",
		"Chimpers Chronicles",
		"Chimpers Chronicles",
		"ERC1155",
		"/images/nfts/0x7cc7add921e2222738561d03c89589929cefcf21.png"
	],
	[
		"0xffce5f9b3ef3ea9ab68591ea268d36c8f216bd02",
		"DGA Token Editions",
		"DGA Token Editions",
		"ERC1155",
		"/images/nfts/0xffce5f9b3ef3ea9ab68591ea268d36c8f216bd02.png"
	],
	[
		"0x65f9f7f4a4ddd517b35c9357f575f0f1df431cbc",
		"Lazy Drinks Official",
		"DRINKS",
		"ERC1155",
		"/images/nfts/0x65f9f7f4a4ddd517b35c9357f575f0f1df431cbc.png"
	],
	[
		"0x5b18c2b5979854411cbfb2f1ba8ffbb03cad2c1e",
		"Wolf Game - Gem",
		"Wolf Game - Gem",
		"ERC1155",
		"/images/nfts/0x5b18c2b5979854411cbfb2f1ba8ffbb03cad2c1e.png"
	],
	[
		"0xb94c3fd0016888bab09dbc229f9397294e828a54",
		"Forgotten Runes Comics",
		"Forgotten Runes Comics",
		"ERC1155",
		"/images/nfts/0xb94c3fd0016888bab09dbc229f9397294e828a54.png"
	],
	[
		"0xedc227ad7fef4a2c6dbc2303a5732087314a4ce9",
		"Tom Sachs: Rocket Factory - Mars Rocks",
		"Tom Sachs: Rocket Factory - Mars Rocks",
		"ERC1155",
		"/images/nfts/0xedc227ad7fef4a2c6dbc2303a5732087314a4ce9.png"
	],
	[
		"0x6831d9f924986dcc19cdf18d962063d695fdabc2",
		"UNDRWRLD by Zenoyis",
		"UNDRWRLD by Zenoyis",
		"ERC1155",
		"/images/nfts/0x6831d9f924986dcc19cdf18d962063d695fdabc2.png"
	],
	[
		"0x647037de761696d224333778e69082ce3b742242",
		"Ape Drops 01 : Snoop Dogg Ape Tracks",
		"Ape Drops 01 : Snoop Dogg Ape Tracks",
		"ERC1155",
		"/images/nfts/0x647037de761696d224333778e69082ce3b742242.png"
	],
	[
		"0x59bdb74d66bddbf32f632b6bd9b3a2b35477d7a5",
		"P3TX SERUM",
		"P3TX SERUM",
		"ERC1155",
		"/images/nfts/0x59bdb74d66bddbf32f632b6bd9b3a2b35477d7a5.png"
	],
	[
		"0xb0b700f58cd7c7cc7829d5a0d093ce589a74a73b",
		"Michael Hartley Editions",
		"Michael Hartley Editions",
		"ERC1155",
		"/images/nfts/0xb0b700f58cd7c7cc7829d5a0d093ce589a74a73b.png"
	],
	[
		"0x28472a58a490c5e09a238847f66a68a47cc76f0f",
		"adidas Originals Into the Metaverse",
		"ADI",
		"ERC1155",
		"/images/nfts/0x28472a58a490c5e09a238847f66a68a47cc76f0f.png"
	],
	[
		"0xa7206d878c5c3871826dfdb42191c49b1d11f466",
		"LOSTPOETS",
		"LOSTPOETS",
		"ERC1155",
		"/images/nfts/0xa7206d878c5c3871826dfdb42191c49b1d11f466.png"
	],
	[
		"0x19bfcdea24062e7db4e92c6742032cd89a3c8e07",
		"FLUF Haus",
		"FLUF Haus",
		"ERC1155",
		"/images/nfts/0x19bfcdea24062e7db4e92c6742032cd89a3c8e07.png"
	],
	[
		"0x276e74fc41ce7ddc5ae2ef6f3a7bd54460185a7e",
		"Ghxsts Cxlture",
		"Ghxsts Cxlture",
		"ERC1155",
		"/images/nfts/0x276e74fc41ce7ddc5ae2ef6f3a7bd54460185a7e.png"
	],
	[
		"0x595a70409711f20523bd99b83d088cea9d3f92e1",
		"AlphaGang",
		"AG",
		"ERC1155",
		"/images/nfts/0x595a70409711f20523bd99b83d088cea9d3f92e1.png"
	],
	[
		"0x8887ce34f6f1a4de4e8eb2a9195eeb261c413365",
		"Editions x Guido",
		"RAW",
		"ERC1155",
		"/images/nfts/0x8887ce34f6f1a4de4e8eb2a9195eeb261c413365.png"
	],
	[
		"0xa6146896d6605c1b54af5ef861d5de2de1101646",
		"Access Key [FROZEN]",
		"NABU",
		"ERC1155",
		"/images/nfts/0xa6146896d6605c1b54af5ef861d5de2de1101646.png"
	],
	[
		"0xc8d9b60d79cad803eb165a95ede37fd0d372920c",
		"Kaiju Test Samples",
		"Kaiju Test Samples",
		"ERC1155",
		"/images/nfts/0xc8d9b60d79cad803eb165a95ede37fd0d372920c.png"
	],
	[
		"0x390416ae4324494338293974ee6388e777fac34b",
		"GM GN Industries by Degen Toonz",
		"GM GN Industries by Degen Toonz",
		"ERC1155",
		"/images/nfts/0x390416ae4324494338293974ee6388e777fac34b.png"
	],
	[
		"0xa6876433a780b3448943d4e264de662125623ba2",
		"Kumite OG Medallion",
		"KumiteOG",
		"ERC1155",
		"/images/nfts/0xa6876433a780b3448943d4e264de662125623ba2.png"
	],
	[
		"0xadc02d1d71bb7fcc796faad36c31d76ff6cbd7df",
		"UNWORLD All is flux.",
		"UNW",
		"ERC1155",
		"/images/nfts/0xadc02d1d71bb7fcc796faad36c31d76ff6cbd7df.png"
	],
	[
		"0x86825dfca7a6224cfbd2da48e85df2fc3aa7c4b1",
		"RTFKT - MNLTH",
		"RTFKT - MNLTH",
		"ERC1155",
		"/images/nfts/0x86825dfca7a6224cfbd2da48e85df2fc3aa7c4b1.png"
	],
	[
		"0x6c709966ead8fdc5bc6d49463d258b9d3432fe38",
		"CATBOTICA Nanocats",
		"NCAT",
		"ERC1155",
		"/images/nfts/0x6c709966ead8fdc5bc6d49463d258b9d3432fe38.png"
	],
	[
		"0xce15f018b083844a0b650b8000a00f227fb8cfbe",
		"Trait Swap - Dynamic NFTs (Old Contract)",
		"Trait Swap - Dynamic NFTs (Old Contract)",
		"ERC1155",
		"/images/nfts/0xce15f018b083844a0b650b8000a00f227fb8cfbe.png"
	],
	[
		"0x74ee68a33f6c9f113e22b3b77418b75f85d07d22",
		"Zerion Genesis Collection",
		"ZGC",
		"ERC1155",
		"/images/nfts/0x74ee68a33f6c9f113e22b3b77418b75f85d07d22.png"
	],
	[
		"0x2e91afa008e2c860085d97e41d73890f22007f78",
		"BBRC - MERCH PASS",
		"BBRC - MERCH PASS",
		"ERC1155",
		"/images/nfts/0x2e91afa008e2c860085d97e41d73890f22007f78.png"
	],
	[
		"0x41e3d4b3a79e464f65fffe18aa063de983ef97de",
		"Hashflow (Official)",
		"Hashflow (Official)",
		"ERC1155",
		"/images/nfts/0x41e3d4b3a79e464f65fffe18aa063de983ef97de.png"
	],
	[
		"0xd07dc4262bcdbf85190c01c996b4c06a461d2430",
		"Rarible",
		"RARI",
		"ERC1155",
		"/images/nfts/0xd07dc4262bcdbf85190c01c996b4c06a461d2430.png"
	],
	[
		"0x46b52267a6aadf7e1a519eb5143188c3ade37190",
		"BBRC - IVY TRUNK",
		"BBRC - IVY TRUNK",
		"ERC1155",
		"/images/nfts/0x46b52267a6aadf7e1a519eb5143188c3ade37190.png"
	],
	[
		"0xd7b397edad16ca8111ca4a3b832d0a5e3ae2438c",
		"Gutter Rats",
		"Gutter Rats",
		"ERC1155",
		"/images/nfts/0xd7b397edad16ca8111ca4a3b832d0a5e3ae2438c.png"
	],
	[
		"0xf1f3ca6268f330fda08418db12171c3173ee39c9",
		"Zapper - Season 2 Edition",
		"ZPR NFT",
		"ERC1155",
		"/images/nfts/0xf1f3ca6268f330fda08418db12171c3173ee39c9.png"
	],
	[
		"0x043371857049a56769b8c331ec3e52a660c94f09",
		"Elliott Grogan Editions",
		"Elliott Grogan Editions",
		"ERC1155",
		"/images/nfts/0x043371857049a56769b8c331ec3e52a660c94f09.png"
	],
	[
		"0xf35240c347843e3594dcfc80fef30ebd2f55def6",
		"Editions X Dre Dogue",
		"Editions X Dre Dogue",
		"ERC1155",
		"/images/nfts/0xf35240c347843e3594dcfc80fef30ebd2f55def6.png"
	],
	[
		"0xae6b237fdb7023aa01776183c5fd55e69a74fc2f",
		"North Radiant Inc.",
		"North Radiant Inc.",
		"ERC1155",
		"/images/nfts/0xae6b237fdb7023aa01776183c5fd55e69a74fc2f.png"
	],
	[
		"0xbed57beec7191e59d18844124cbb0db660aef25f",
		"Yat Gems",
		"Yat Gems",
		"ERC1155",
		"/images/nfts/0xbed57beec7191e59d18844124cbb0db660aef25f.png"
	],
	[
		"0x29190d0dc19b6c506d01f4d7f305e7aaf5425092",
		"Elixir of The Ancient",
		"Elixir of The Ancient",
		"ERC1155",
		"/images/nfts/0x29190d0dc19b6c506d01f4d7f305e7aaf5425092.png"
	],
	[
		"0x208a40d3d8e4d438d95e0647a2e4e0d78e6525b5",
		"Steve Aoki - Piss On the Dance Floor - Goblintown Anthem",
		"PISS",
		"ERC1155",
		"/images/nfts/0x208a40d3d8e4d438d95e0647a2e4e0d78e6525b5.png"
	],
	[
		"0x11dd2bfb64d5e5ecf5a7b0a5c5e187e56220f903",
		"Unifriends Item Shop",
		"UNISHP",
		"ERC1155",
		"/images/nfts/0x11dd2bfb64d5e5ecf5a7b0a5c5e187e56220f903.png"
	],
	[
		"0xab9867b16ee77cab40774849c5ab2c6075732f5c",
		"Picks Passport",
		"Picks Passport",
		"ERC1155",
		"/images/nfts/0xab9867b16ee77cab40774849c5ab2c6075732f5c.png"
	],
	[
		"0x406c60c2e8038a0e90d2f28eff7260cc7af84ee6",
		"bb3 explorer badge",
		"BB3EB",
		"ERC1155",
		"/images/nfts/0x406c60c2e8038a0e90d2f28eff7260cc7af84ee6.png"
	],
	[
		"0x6ece2e550d7848c40c26a0e704b7a19d1f8dbcf0",
		"Silks Sky Falls Land Parcels",
		"Silks Sky Falls Land Parcels",
		"ERC1155",
		"/images/nfts/0x6ece2e550d7848c40c26a0e704b7a19d1f8dbcf0.png"
	],
	[
		"0xbacc764cf4cf56b2e1b49cd525ab058e1955c33b",
		"Vipers Den I 00 I LOTSof9",
		"Vipers Den I 00 I LOTSof9",
		"ERC1155",
		"/images/nfts/0xbacc764cf4cf56b2e1b49cd525ab058e1955c33b.png"
	],
	[
		"0x38a6fd7148c4900338e903258b5e289dfa995e2e",
		"Champs Only 2022 (EXPIRED)",
		"RAW",
		"ERC1155",
		"/images/nfts/0x38a6fd7148c4900338e903258b5e289dfa995e2e.png"
	],
	[
		"0x3f13dd36206e3afb692049c8d7efa43f85f52f3a",
		"Mystery Shells",
		"MysteryShells",
		"ERC1155",
		"/images/nfts/0x3f13dd36206e3afb692049c8d7efa43f85f52f3a.png"
	],
	[
		"0x9a06ef3a841316a9e2c1c93b9c21a7342abe484f",
		"RTFKT SKIN VIAL: EVO X",
		"RTFKT SKIN VIAL: EVO X",
		"ERC1155",
		"/images/nfts/0x9a06ef3a841316a9e2c1c93b9c21a7342abe484f.png"
	],
	[
		"0xa3a5c5a9494640b2c15b1ff328bb26809279fa1f",
		"SLEEP EXHIBITION",
		"SLEEP EXHIBITION",
		"ERC1155",
		"/images/nfts/0xa3a5c5a9494640b2c15b1ff328bb26809279fa1f.png"
	],
	[
		"0x6dddb0d63f5e12fdb18113916bb3c6d67688024a",
		"52icons - Rainer Hosch Genesis",
		"52i",
		"ERC1155",
		"/images/nfts/0x6dddb0d63f5e12fdb18113916bb3c6d67688024a.png"
	],
	[
		"0xfd43d1da000558473822302e1d44d81da2e4cc0d",
		"Love, Death + Robots Official",
		"LDR",
		"ERC1155",
		"/images/nfts/0xfd43d1da000558473822302e1d44d81da2e4cc0d.png"
	],
	[
		"0xa342f5d851e866e18ff98f351f2c6637f4478db5",
		"The Sandbox ASSETS",
		"ASSET",
		"ERC1155",
		"/images/nfts/0xa342f5d851e866e18ff98f351f2c6637f4478db5.png"
	],
	[
		"0x6694a1dc364ff79298539a8a9ad624fe8a4a1708",
		"2112.run rootPasses",
		"2112RP",
		"ERC1155",
		"/images/nfts/0x6694a1dc364ff79298539a8a9ad624fe8a4a1708.png"
	],
	[
		"0x03c7cff13261cc80b29d4d0be46800663489255e",
		"The Holy Pets",
		"PETS",
		"ERC1155",
		"/images/nfts/0x03c7cff13261cc80b29d4d0be46800663489255e.png"
	],
	[
		"0xa5fadc8395b67716dc5eefb2b5e823a4f6e2de9f",
		"GCC Exclusives",
		"GCC Exclusives",
		"ERC1155",
		"/images/nfts/0xa5fadc8395b67716dc5eefb2b5e823a4f6e2de9f.png"
	],
	[
		"0x5079fc4e96338be1b5aff236ff4b00ec4452b2d3",
		"OCM Dessert",
		"OCM Dessert",
		"ERC1155",
		"/images/nfts/0x5079fc4e96338be1b5aff236ff4b00ec4452b2d3.png"
	],
	[
		"0x7f72528229f85c99d8843c0317ef91f4a2793edf",
		"1111 by Kevin Abosch",
		"1111",
		"ERC1155",
		"/images/nfts/0x7f72528229f85c99d8843c0317ef91f4a2793edf.png"
	],
	[
		"0x6fad73936527d2a82aea5384d252462941b44042",
		"FLUF World: Scenes & Sounds",
		"RAW",
		"ERC1155",
		"/images/nfts/0x6fad73936527d2a82aea5384d252462941b44042.png"
	],
	[
		"0xbffa496d867cea1ddf549415683422622f9cc6cc",
		"=PI",
		"=PI",
		"ERC1155",
		"/images/nfts/0xbffa496d867cea1ddf549415683422622f9cc6cc.png"
	],
	[
		"0x3e67911d6b61c1d1b6e6086cac2ad4f7af28255d",
		"Akutar Accessories",
		"AKUBOX",
		"ERC1155",
		"/images/nfts/0x3e67911d6b61c1d1b6e6086cac2ad4f7af28255d.png"
	],
	[
		"0x236672ed575e1e479b8e101aeeb920f32361f6f9",
		"The Watch",
		"FRONTIER",
		"ERC1155",
		"/images/nfts/0x236672ed575e1e479b8e101aeeb920f32361f6f9.png"
	],
	[
		"0x1f8483664620ff1278f4c1b0d11e4d7daa11a035",
		"3LAND INVENTORY",
		"3LAND INVENTORY",
		"ERC1155",
		"/images/nfts/0x1f8483664620ff1278f4c1b0d11e4d7daa11a035.png"
	],
	[
		"0x11cdef1d76351291648aac1cff29e808d97566cb",
		"Pulse Pass by Sammy Arriaga",
		"PULSE",
		"ERC1155",
		"/images/nfts/0x11cdef1d76351291648aac1cff29e808d97566cb.png"
	],
	[
		"0x39b80981a3e7c6bbcbedd42838ec1e397b6e538d",
		"Basketball Headz Serums",
		"Serum",
		"ERC1155",
		"/images/nfts/0x39b80981a3e7c6bbcbedd42838ec1e397b6e538d.png"
	],
	[
		"0x01cecf7a8f0095fa622ff03d714fd2244548da35",
		"ShitPlunger",
		"ShitPlunger",
		"ERC1155",
		"/images/nfts/0x01cecf7a8f0095fa622ff03d714fd2244548da35.png"
	],
	[
		"0xe25f0fe686477f9df3c2876c4902d3b85f75f33a",
		"IlluminatiNFT DAO",
		"TRUTH",
		"ERC1155",
		"/images/nfts/0xe25f0fe686477f9df3c2876c4902d3b85f75f33a.png"
	],
	[
		"0xf0ea56402b2e2b27556d7abf4236c7327722fe41",
		"Pixlverse Items",
		"PVIT",
		"ERC1155",
		"/images/nfts/0xf0ea56402b2e2b27556d7abf4236c7327722fe41.png"
	],
	[
		"0xb9655f835418fb64b63f934acb745d12d810fedb",
		"Grandpa Ape Chemistry Club",
		"Grandpa Ape Chemistry Club",
		"ERC1155",
		"/images/nfts/0xb9655f835418fb64b63f934acb745d12d810fedb.png"
	],
	[
		"0xffbc81170340cc12444615e14a39cc4240244a9c",
		"Woodies Special Mints",
		"WOODIESSPECIAL",
		"ERC1155",
		"/images/nfts/0xffbc81170340cc12444615e14a39cc4240244a9c.png"
	],
	[
		"0x226bf5293692610692e2c996c9875c914d2a7f73",
		"oncyber labs",
		"oncyber labs",
		"ERC1155",
		"/images/nfts/0x226bf5293692610692e2c996c9875c914d2a7f73.png"
	],
	[
		"0xe4597f9182ba947f7f3bf8cbc6562285751d5aee",
		"SuperFarm Genesis Series",
		"SuperFarm Genesis Series",
		"ERC1155",
		"/images/nfts/0xe4597f9182ba947f7f3bf8cbc6562285751d5aee.png"
	],
	[
		"0x95112f1363bd3e8f47e61146ee75ca96f2b035d4",
		"Eleni is playing again",
		"Eleni is playing again",
		"ERC1155",
		"/images/nfts/0x95112f1363bd3e8f47e61146ee75ca96f2b035d4.png"
	],
	[
		"0x8e417d1821a15c894cb6201a759bfd36536336e3",
		"Eltier Editions",
		"Eltied",
		"ERC1155",
		"/images/nfts/0x8e417d1821a15c894cb6201a759bfd36536336e3.png"
	],
	[
		"0xdc2576a24dcf5ab8c4bb48413245d3ca741ee12b",
		"Trolltown Mutational Elixirs",
		"TTME",
		"ERC1155",
		"/images/nfts/0xdc2576a24dcf5ab8c4bb48413245d3ca741ee12b.png"
	],
	[
		"0x246fa78c606eaa5489657a018bf445d453c21de1",
		"Nick Bng Editions",
		"Nick Bng Editions",
		"ERC1155",
		"/images/nfts/0x246fa78c606eaa5489657a018bf445d453c21de1.png"
	],
	[
		"0x33cfae13a9486c29cd3b11391cc7eca53822e8c7",
		"Inhabitants: MintPass",
		"PASS2",
		"ERC1155",
		"/images/nfts/0x33cfae13a9486c29cd3b11391cc7eca53822e8c7.png"
	],
	[
		"0x7deb7bce4d360ebe68278dee6054b882aa62d19c",
		"Inhabitants: United Planets",
		"PLANET",
		"ERC1155",
		"/images/nfts/0x7deb7bce4d360ebe68278dee6054b882aa62d19c.png"
	],
	[
		"0x2079812353e2c9409a788fbf5f383fa62ad85be8",
		"Bobu, the Bean Farmer",
		"Bobu, the Bean Farmer",
		"ERC1155",
		"/images/nfts/0x2079812353e2c9409a788fbf5f383fa62ad85be8.png"
	],
	[
		"0x5911a6da952a9d1b67be13cecb389ad247420360",
		"Benji Bananas : Membership Pass",
		"Benji Bananas : Membership Pass",
		"ERC1155",
		"/images/nfts/0x5911a6da952a9d1b67be13cecb389ad247420360.png"
	],
	[
		"0xf90733ab2f368ffe41bfba80443e04fc33321f67",
		"Gray Boys: Science Lab",
		"Gray Boys: Science Lab",
		"ERC1155",
		"/images/nfts/0xf90733ab2f368ffe41bfba80443e04fc33321f67.png"
	],
	[
		"0x805ea79e3c0c7837cfe8f84ec09ea67d43465da1",
		"Based Fish Mafia Wire",
		"Based Fish Mafia Wire",
		"ERC1155",
		"/images/nfts/0x805ea79e3c0c7837cfe8f84ec09ea67d43465da1.png"
	],
	[
		"0x73da73ef3a6982109c4d5bdb0db9dd3e3783f313",
		"My Curio Cards",
		"My Curio Cards",
		"ERC1155",
		"/images/nfts/0x73da73ef3a6982109c4d5bdb0db9dd3e3783f313.png"
	],
	[
		"0xa56d1b415cb4b23e76910bb8c2f5a0a5b2c86a87",
		"Degenz Access Pass",
		"Degenz Access Pass",
		"ERC1155",
		"/images/nfts/0xa56d1b415cb4b23e76910bb8c2f5a0a5b2c86a87.png"
	],
	[
		"0x10daa9f4c0f985430fde4959adb2c791ef2ccf83",
		"The Meta Key",
		"MetaKey",
		"ERC1155",
		"/images/nfts/0x10daa9f4c0f985430fde4959adb2c791ef2ccf83.png"
	],
	[
		"0xd90d018a472eafd5d615c4feb962300fc9311d70",
		"Luna's Editions",
		"Luna's Editions",
		"ERC1155",
		"/images/nfts/0xd90d018a472eafd5d615c4feb962300fc9311d70.png"
	],
	[
		"0xd9b20aa6fc7d27812a1ab36fffc72b5250b30a4d",
		"THE HECK!",
		"THE HECK!",
		"ERC1155",
		"/images/nfts/0xd9b20aa6fc7d27812a1ab36fffc72b5250b30a4d.png"
	],
	[
		"0x76f3a1ef80a1142f9bd2b868d59ab75a1c0916d4",
		"AquaHQ",
		"AquaHQ",
		"ERC1155",
		"/images/nfts/0x76f3a1ef80a1142f9bd2b868d59ab75a1c0916d4.png"
	],
	[
		"0xb66a603f4cfe17e3d27b87a8bfcad319856518b8",
		"Rarible",
		"RARI",
		"ERC1155",
		"/images/nfts/0xb66a603f4cfe17e3d27b87a8bfcad319856518b8.png"
	],
	[
		"0x3d4264bff123e68dba7647469787bc763c6c5389",
		"Wizard Pass Official",
		"Wizard Pass Official",
		"ERC1155",
		"/images/nfts/0x3d4264bff123e68dba7647469787bc763c6c5389.png"
	],
	[
		"0x497a9a79e82e6fc0ff10a16f6f75e6fcd5ae65a8",
		"77-Bit",
		"RONIN",
		"ERC1155",
		"/images/nfts/0x497a9a79e82e6fc0ff10a16f6f75e6fcd5ae65a8.png"
	],
	[
		"0xddd6754c22ffac44980342173fa956bc7dda018e",
		"Prysm Squads Access NFT",
		"SAP",
		"ERC1155",
		"/images/nfts/0xddd6754c22ffac44980342173fa956bc7dda018e.png"
	],
	[
		"0x7d8d74b44b433ca6f134e43eec1e63b0c43eeafa",
		"Obey Make Art Not War Ukraine",
		"MANWU",
		"ERC1155",
		"/images/nfts/0x7d8d74b44b433ca6f134e43eec1e63b0c43eeafa.png"
	],
	[
		"0x2b6f861ae6419e51aeab201fb5f89706766e7dba",
		"Karma VIP Allow List",
		"Karma VIP Allow List",
		"ERC1155",
		"/images/nfts/0x2b6f861ae6419e51aeab201fb5f89706766e7dba.png"
	],
	[
		"0xab36b08a43f47fd74b8652fe3d3b08faaca821ac",
		"Los Muertos Diablo: Mint Pass - old V2",
		"Los Muertos Diablo: Mint Pass - old V2",
		"ERC1155",
		"/images/nfts/0xab36b08a43f47fd74b8652fe3d3b08faaca821ac.png"
	],
	[
		"0x211838a8a587b02de8a02a6edafbfd7277c317d4",
		"IDZ - old V3",
		"IDZ",
		"ERC1155",
		"/images/nfts/0x211838a8a587b02de8a02a6edafbfd7277c317d4.png"
	],
	[
		"0xf4bacb2375654ef2459f427c8c6cf34573f75154",
		"TPL Mecha Part",
		"TPLMECHAPART",
		"ERC1155",
		"/images/nfts/0xf4bacb2375654ef2459f427c8c6cf34573f75154.png"
	],
	[
		"0xbfd5329c285b485baa5f45e2f7d8cf100d3bf0ce",
		"NFT Land Alpha",
		"NFT Land Alpha",
		"ERC1155",
		"/images/nfts/0xbfd5329c285b485baa5f45e2f7d8cf100d3bf0ce.png"
	],
	[
		"0x605757a5cceb44ced7a5be421735e0151333c338",
		"WRLDNS - Registration Passes",
		"WRLDNS - Registration Passes",
		"ERC1155",
		"/images/nfts/0x605757a5cceb44ced7a5be421735e0151333c338.png"
	],
	[
		"0x76be3b62873462d2142405439777e971754e8e77",
		"Parallel Alpha",
		"LL",
		"ERC1155",
		"/images/nfts/0x76be3b62873462d2142405439777e971754e8e77.png"
	],
	[
		"0x045737619bb0fe286ffb8c9c81117bc4ab5c997f",
		"PoorLand Fragment",
		"PoorLand Fragment",
		"ERC1155",
		"/images/nfts/0x045737619bb0fe286ffb8c9c81117bc4ab5c997f.png"
	],
	[
		"0xf64e6fb725f04042b5197e2529b84be4a925902c",
		"ZenAcademy",
		"ZEN",
		"ERC1155",
		"/images/nfts/0xf64e6fb725f04042b5197e2529b84be4a925902c.png"
	],
	[
		"0xd6a152c351588eec72556bc9769d9b22f37bfbf1",
		"Sidus Items",
		"SIDUS",
		"ERC1155",
		"/images/nfts/0xd6a152c351588eec72556bc9769d9b22f37bfbf1.png"
	],
	[
		"0x93317e87a3a47821803caadc54ae418af80603da",
		"Cameo Pass",
		"CAMEOPASS",
		"ERC1155",
		"/images/nfts/0x93317e87a3a47821803caadc54ae418af80603da.png"
	],
	[
		"0x38398a2d7a4278b8d83967e0d235164335a0394a",
		"Parallel Auxiliary Items",
		"RAW",
		"ERC1155",
		"/images/nfts/0x38398a2d7a4278b8d83967e0d235164335a0394a.png"
	],
	[
		"0xbfd2cfa581253ef250bfe328e9d1f2ee07bf5744",
		"WAGMI Game Genesis Collection Legacy (Disabled)",
		"WAGMI",
		"ERC1155",
		"/images/nfts/0xbfd2cfa581253ef250bfe328e9d1f2ee07bf5744.png"
	],
	[
		"0x03a1343c5eff84ae346f28f7b7072624ca2b170e",
		"DAN DAO",
		"DAN DAO",
		"ERC1155",
		"/images/nfts/0x03a1343c5eff84ae346f28f7b7072624ca2b170e.png"
	],
	[
		"0x9d6c87c83159f53550718c4b8a7e5d189983747a",
		"Venice 99'",
		"Venice 99'",
		"ERC1155",
		"/images/nfts/0x9d6c87c83159f53550718c4b8a7e5d189983747a.png"
	],
	[
		"0xec43e92046c1527586dfaf02031622c30af9a1d6",
		"Verse Works",
		"Verse Works",
		"ERC1155",
		"/images/nfts/0xec43e92046c1527586dfaf02031622c30af9a1d6.png"
	],
	[
		"0x07511e88628f990d0ada3c446da3859833a0798f",
		"Holy Heroes",
		"HOLY",
		"ERC1155",
		"/images/nfts/0x07511e88628f990d0ada3c446da3859833a0798f.png"
	],
	[
		"0xc36cf0cfcb5d905b8b513860db0cfe63f6cf9f5c",
		"Town Star",
		"RAW",
		"ERC1155",
		"/images/nfts/0xc36cf0cfcb5d905b8b513860db0cfe63f6cf9f5c.png"
	],
	[
		"0x9cc05bdc13dc65223623fecd20fa1f34109f8206",
		"Flippr Access Pass",
		"FLIPPR",
		"ERC1155",
		"/images/nfts/0x9cc05bdc13dc65223623fecd20fa1f34109f8206.png"
	],
	[
		"0x598c038b10e22bb8fa4d1900435712e6dbe4c1d1",
		"Wolf Game - Merch",
		"Wolf Game - Merch",
		"ERC1155",
		"/images/nfts/0x598c038b10e22bb8fa4d1900435712e6dbe4c1d1.png"
	]
] as const;