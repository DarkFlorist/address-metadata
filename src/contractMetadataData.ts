
export type Address = `0x${string}`
export type Name = string
export type Protocol = 'Uniswap' | 'Uniswap V2' | 'Uniswap V3' | 'ETH2' | 'Arbitrum' | 'Lido' | 'Matic' | 'OpenSea' | '0x' | 'Zapper' | 'Aave'
export type LogoRelativePath = string
export type ContractMetadataDataWithLogo = readonly [Address, Name, Protocol, LogoRelativePath]
export type ContractMetadataDataWithoutLogo = readonly [Address, Name, Protocol]

export type ContractMetadataData = readonly (ContractMetadataDataWithLogo | ContractMetadataDataWithoutLogo)[]

export const contractMetadataData: ContractMetadataData = [
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
		"0x00aa1c57e894c4010fe44cb840ae56432d7ea1d1",
		"Uniswap V2 Pair: DOP - WETH",
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
		"0x01388f9242964e2aaadef6379eb92276acb5520e",
		"Uniswap V2 Pair: USDT - FRONT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x01688e1a356c38a8ed7c565bf6c6bfd59543a560",
		"Uniswap V2 Pair: BFC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x01962144d41415cca072900fe87bbe2992a99f10",
		"Uniswap V2 Pair: XOR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x01e6dd22de77b0742f77d428a484d23fd2694536",
		"Uniswap V2 Pair: Fortune - WETH",
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
		"0x04840eaa3497e4c3934698ff88050ceb9893f78f",
		"Uniswap V2 Pair: UniFi - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x049963a8c68d225dc03f32c299fcb1939173dfd3",
		"Uniswap V2 Pair: YFP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x04b6be23297548d828c3c4e4b7fb3f4a67d2dae3",
		"Uniswap V2 Pair: ETHPAD - WETH",
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
		"0x0555f052da0a50d39369b0f634855edc858baa18",
		"Uniswap V2 Pair: DEXG - USDT",
		"Uniswap V2",
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
		"0x06a894754ef1c87aeb2a9f859503b2dbff4dc106",
		"Uniswap V2 Pair: CTC - WETH",
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
		"0x06bf054b9aafc075f9be814e1b7f948c6e845596",
		"Uniswap V2 Pair: WETH - NCR",
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
		"0x07840b4825b74cc6ce264bf2743dee647194f49b",
		"Uniswap V2 Pair: KOMPETE - WETH",
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
		"0x08c42506d5ff7a983ae7be2e5a380a42508b698c",
		"Uniswap V2 Pair: USDT - GENE",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x09062ce4f20aac71f8074ac6cf8e6968abd4d03e",
		"Uniswap V2 Pair: EQX - WETH",
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
		"0x09539705838eea6661633d568f77bc10a02cf375",
		"Uniswap V2 Pair: WAS - WETH",
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
		"0x0a4ccfdc42013bd01420cc8aa1e34e77ce28c580",
		"Uniswap V2 Pair: WETH - $JOY",
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
		"0x0ae4ba350148c5e45a36a1a59c061d7d8964f8b8",
		"Uniswap V2 Pair: JACY - WETH",
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
		"0x0bf46ba06dc1d33c3bd80ff42497ebff13a88900",
		"Uniswap V2 Pair: rDPX - WETH",
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
		"0x0cfb06414c6d9790bc661230dba0b24060808bf4",
		"Uniswap V2 Pair: GAME - USDT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0cfd1ab3f175c684f907ed3704007fceb27727e2",
		"Uniswap V2 Pair: GOKU - WETH",
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
		"0x0d9c6511980f80e477a774156492f5c133d2c0f3",
		"Uniswap V2 Pair: SUPERBID - WETH",
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
		"0x0e4c6715ac7bc80a93f47bbf92281a88ad729c1e",
		"Uniswap V2 Pair: WETH - GGTK",
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
		"0x0ed2b16d5ac4a997f896562f7e8a8a357c1f8222",
		"Uniswap V2 Pair: WETH - MFUND",
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
		"0x0f2156fbe6142c72c150d30c2522a5988110b013",
		"Uniswap V2 Pair: KEL - WETH",
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
		"0x0fdc86703c938e3e1cbc9e14f21c6bf709c13acc",
		"Uniswap V2 Pair: TXL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1037fa1f40b69c9266c4aeb2abcedc7553614b4c",
		"Uniswap V2 Pair: GLCH - WETH",
		"Uniswap V2",
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
		"0x10cfa744c77f1cb9a77fa418ac4a1b6ec62bcce4",
		"Uniswap V2 Pair: MCB - WETH",
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
		"0x11181bd3baf5ce2a478e98361985d42625de35d1",
		"Uniswap V2 Pair: ASTO - USDC",
		"Uniswap V2",
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
		"0x11cb9e028b82eee75443fdc27929b9c49736c552",
		"Uniswap V2 Pair: WETH - DEXE",
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
		"0x123fca7e8272a8e9c3bb7113c259abc4901e792b",
		"Uniswap V2 Pair: CVC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1273ad5d8f3596a7a39efdb5a4b8f82e8f003fc3",
		"Uniswap V2 Pair: HEGIC - WETH",
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
		"0x131caa9c69394acb7c20c1a0af0ca9ebd1cdbb86",
		"Uniswap V2 Pair: DBUY - WETH",
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
		"0x146d3401b6a41122bd318ba676a01c44cb0795e2",
		"Uniswap V2 Pair: NFY - WETH",
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
		"0x153f2044feace1eb377c6e1cf644d12677bd86fd",
		"Uniswap V2 Pair: YDF - WETH",
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
		"0x15ab0333985fd1e289adf4fbbe19261454776642",
		"Uniswap V2 Pair: WETH - MLN",
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
		"0x1636a5dfcf7a21945c06d1bea40b52ce975ea614",
		"Uniswap V2 Pair: LABRA - WETH",
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
		"0x169bf778a5eadab0209c0524ea5ce8e7a616e33b",
		"Uniswap V2 Pair: INSUR - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x171d6a77251f64865aa6250119ec661dabd0c947",
		"Uniswap V2 Pair: UNDEAD - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x178f1a72172a99f7f44e125de6413ea808713e7c",
		"Uniswap V2 Pair: WETH - XCUR",
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
		"0x188270f9662b244862fe617990e065050767cd02",
		"Uniswap V2 Pair: BYN - WETH",
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
		"0x19a7c579e714e43c57997318ff0ba46a6d6891e4",
		"Uniswap V2 Pair: WETH - GLDN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x19dff439fd91c3946b98eb65e07368c5c8c3414d",
		"Uniswap V2 Pair: LINA - USDT",
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
		"0x1b1c28a89caac877c63d0adac173a0b55921ab65",
		"Uniswap V2 Pair: WETH - CyOp",
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
		"0x1b87fde6af5396165fdadf7f532784622a824abf",
		"Uniswap V2 Pair: OCTO - USDC",
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
		"0x1be574041828303f0bfb5d06a2414f3bd6da1b2a",
		"Uniswap V2 Pair: WETH - HUSKY",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1bfffb738d69167d5592160a47d5404a3cf5a846",
		"Uniswap V2 Pair: KEX - WETH",
		"Uniswap V2",
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
		"0x1c6faf9ad252390ee5e6f0b2f8d2fc927a8eb4e6",
		"Uniswap V2 Pair: CoShi - WETH",
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
		"0x1c9052e823b5f4611ef7d5fb4153995b040ccbf5",
		"Uniswap V2 Pair: DXD - WETH",
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
		"0x1cfe0c85f16e03e91a4a27187511104150736d88",
		"Uniswap V2 Pair: $TRUMP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1d4b2b2a2ca8762410801b51f128b73743439e39",
		"Uniswap V2 Pair: DOKI - WETH",
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
		"0x1e8ff5341bc63782b0212926d6eaf43cb80a0c75",
		"Uniswap V2 Pair: WETH - XEND",
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
		"0x1ee312a6d5fe7b4b8c25f0a32fca6391209ebebf",
		"Uniswap V2 Pair: WETH - GOVI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1f1b4836dde1859e2ede1c6155140318ef5931c2",
		"Uniswap V2 Pair: GVR - WETH",
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
		"0x1f6a7d520c828b9ff22a267a187dd2f170e44a8f",
		"Uniswap V2 Pair: FONT - WETH",
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
		"0x1fbf001792e8cc747a5cb4aedf8c26b7421147e7",
		"Uniswap V2 Pair: WETH - USF",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1ffc57cada109985ad896a69fbcebd565db4290e",
		"Uniswap V2 Pair: FTM - WETH",
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
		"0x2084c8115d97a12114a70a27198c3591b6df7d3e",
		"Uniswap V2 Pair: WETH - MFT",
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
		"0x214913d4aab5bb321498edb7309cf68cd8c5d86b",
		"Uniswap V2 Pair: WETH - TKINU",
		"Uniswap V2",
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
		"0x22508de3dc071801fa553579d7110875ac0e3052",
		"Uniswap V2 Pair: WETH - KATANA",
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
		"0x230d77c4dd61439c246b1a99434242ec42065ca3",
		"Uniswap V2 Pair: M87 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x231b7589426ffe1b75405526fc32ac09d44364c4",
		"Uniswap V2 Pair: WBTC - DAI",
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
		"0x233bbf76a7d8da6275c70ea372f19de84dbcc167",
		"Uniswap V2 Pair: STMX - WETH",
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
		"0x23b7e6932cb873b8696afba077c4a2486b1c862e",
		"Uniswap V2 Pair: SIG - WETH",
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
		"0x25647e01bd0967c1b9599fa3521939871d1d0888",
		"Uniswap V2 Pair: WETH - SUPER",
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
		"0x25ea93b7432fed90758828691897901a30b4c7d9",
		"Uniswap V2 Pair: TMTG - LBXC",
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
		"0x2680a95fc9de215f1034f073185cc1f2a28b4107",
		"Uniswap V2 Pair: GET - WETH",
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
		"0x276e62c70e0b540262491199bc1206087f523af6",
		"Uniswap V2 Pair: DRC - WETH",
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
		"0x2823f9f6ebe1407bef214360f81eaf6f3560fd41",
		"Uniswap V2 Pair: TERRAFORM - WETH",
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
		"0x28bc0c76a5f8f8461be181c0cbddf715bc1d96af",
		"Uniswap V2 Pair: TOB - XAMP",
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
		"0x291c69fdaebd3cbe953843da243f8605a766a268",
		"Uniswap V2 Pair: TEL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2999528824a1a839d9af5cfead053236be675984",
		"Uniswap V2 Pair: DOWS - WETH",
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
		"0x29f07e631a2f990e1f6117c6285a44e746b1f090",
		"Uniswap V2 Pair: EVN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2a07160ab59a9a868e2957f394bf6bdd28e91192",
		"Uniswap V2 Pair: WETH - Totoro",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
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
		"0x2a66392317698c5818df7a72a58556049f0ae6f2",
		"Uniswap V2 Pair: WETH - SYLO",
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
		"0x2b788a7b1a0ee0da8cb1d2769825198d9c95d19d",
		"Uniswap V2 Pair: TERA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2b9e92a5b6e69db9fedc47a4c656c9395e8a26d2",
		"Uniswap V2 Pair: XFT - WETH",
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
		"0x2c8eb0861bf6fd761481e8d1ff1c57536c983e98",
		"Uniswap V2 Pair: ROCKS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2caccf71bdf8fff97c06a46eca29b611b1a74b5e",
		"Uniswap V2 Pair: SWFL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2cbfa9117c543a17efe0bb897f7e32f0d3f04130",
		"Uniswap V2 Pair: BIM - WETH",
		"Uniswap V2",
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
		"0x2d27cae0c7e88de9b85b3e44ea37b9cb70ca745f",
		"Uniswap V2 Pair: WETH - SMI",
		"Uniswap V2",
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
		"0x2dce0dda1c2f98e0f171de8333c3c6fe1bbf4877",
		"Uniswap V2 Pair: OHM - FRAX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2deeeda49e5436cfe18e0ba10f58e4496b8fc631",
		"Uniswap V2 Pair: URQA - WETH",
		"Uniswap V2",
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
		"0x2f85e11f6f12ead6af643f083a34e001030d2a6f",
		"Uniswap V2 Pair: LPOOL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
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
		"0x3016a43b482d0480460f6625115bd372fe90c6bf",
		"Uniswap V2 Pair: ShibDoge - WETH",
		"Uniswap V2",
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
		"0x306d9c4c195cb49d48599a773e18ab79469811e3",
		"Uniswap V2 Pair: RARE - WETH",
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
		"0x30ee4e8e49d81312b93f41778f6446827a080ade",
		"Uniswap V2 Pair: EDC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3155acd9f75915fcc21d34035f440da7040bd3ba",
		"Uniswap V2 Pair: PROS - USDC",
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
		"0x31ac548e59565fdd78604a47e1571ef68c80e9f5",
		"Uniswap V2 Pair: CHZ - USDT",
		"Uniswap V2",
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
		"0x323e054a6dd8762011d60993f51e23e2096b221f",
		"Uniswap V2 Pair: DAI - ZAI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x32a505bf9db617d23bf3ebaac9aef80cb24a828c",
		"Uniswap V2 Pair: CHEDDA - WETH",
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
		"0x33be7ed806479061a7e62a33d3c9b500fc9b47bf",
		"Uniswap V2 Pair: REL - WETH",
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
		"0x343fd171caf4f0287ae6b87d75a8964dc44516ab",
		"Uniswap V2 Pair: PNK - WETH",
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
		"0x3473c92d47a2226b1503dfe7c929b2ae454f6b22",
		"Uniswap V2 Pair: N3RDz - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x353a70db3888e957ad2e7444a08a2c9c08a5db47",
		"Uniswap V2 Pair: XP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3571e7f516edb1d283d74d2bb56525c9ff059d63",
		"Uniswap V2 Pair: IGG - WETH",
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
		"0x360bb0c0c8451095f65568e77d04b4ee970c6ec1",
		"Uniswap V2 Pair: BUGG - WETH",
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
		"0x36d19f5f4074b36b4a67124ecf3ad750bab7276c",
		"Uniswap V2 Pair: $WEAPON - WETH",
		"Uniswap V2",
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
		"0x37de1b300b0f3293caee46f19fd167201e33f55f",
		"Uniswap V2 Pair: WETH - VAB",
		"Uniswap V2",
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
		"0x38a94c4f4d9400643f0fb97198f90c93986f018e",
		"Uniswap V2 Pair: WETH - DDIM",
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
		"0x39192f8270865c1006601618e8dccb22c7794fb9",
		"Uniswap V2 Pair: Seal - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x394cb9e147b8b288e38615ae04f442a037bcb99f",
		"Uniswap V2 Pair: SANI - WETH",
		"Uniswap V2",
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
		"0x39892f48a0361437e565aa6bf16a4f4f5f958b13",
		"Uniswap V2 Pair: DIA - USDT",
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
		"0x3a8afc58b70b34a0a5615d3a5ffe623ca1fa92b8",
		"Uniswap V2 Pair: NU - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3aeee5ba053ef8406420dbc5801fc95ec57b0e0a",
		"Uniswap V2 Pair: DEC - WETH",
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
		"0x3ba3c8fb0142a6f2bf3e2990a08957866203f961",
		"Uniswap V2 Pair: DAI - ONC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3bd2035d08363a8cfdab70a41b0faad3510492dc",
		"Uniswap V2 Pair: KLEE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3be9207f5a70aca8ff1557336d3ac153f797a6ac",
		"Uniswap V2 Pair: SHINJI - WETH",
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
		"0x3c442bab170f19dd40d0b1a405c9d93b088b9332",
		"Uniswap V2 Pair: POWR - WETH",
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
		"0x3cd1c0b98be4451ca51265bbaeb76cf7b31e1c02",
		"Uniswap V2 Pair: WETH - WBCB",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3d07f6e1627da96b8836190de64c1aed70e3fc55",
		"Uniswap V2 Pair: SGT - WETH",
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
		"0x3df70e5b6edead5277590d3de5731d17f46e043b",
		"Uniswap V2 Pair: DG - WETH",
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
		"0x3e8468f66d30fc99f745481d4b383f89861702c6",
		"Uniswap V2 Pair: GNO - WETH",
		"Uniswap V2",
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
		"0x3f3aa0726b240aef0fe4f7df2814df525303dc43",
		"Uniswap V2 Pair: WETH - ECO",
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
		"0x3fd4cf9303c4bc9e13772618828712c8eac7dd2f",
		"Uniswap V2 Pair: BNT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4028daac072e492d34a3afdbef0ba7e35d8b55c4",
		"Uniswap V2 Pair: stETH - WETH",
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
		"0x40829a59080a12f16bb8fba22354a6a42c810aab",
		"Uniswap V2 Pair: WETH - VTX",
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
		"0x40ba9b6421d584cec10330f882c5a343d8466b71",
		"Uniswap V2 Pair: YFD - WETH",
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
		"0x411a9b902f364817a0f9c4261ce28b5566a42875",
		"Uniswap V2 Pair: ibETH - ALPHA",
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
		"0x41fcf9e248e2be21c5debe8f010080335dcb0d40",
		"Uniswap V2 Pair: WETH - NFT",
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
		"0x428bc363a7d743425863d6e5699683a69cacedc8",
		"Uniswap V2 Pair: JINU - WETH",
		"Uniswap V2",
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
		"0x42d52847be255eacee8c3f96b3b223c0b3cc0438",
		"Uniswap V2 Pair: WETH - UOS",
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
		"0x438d3e9cacab4614a8f1613ac7b182378d76e1f8",
		"Uniswap V2 Pair: WSCRT - WETH",
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
		"0x44c21f5dcb285d92320ae345c92e8b6204be8cdf",
		"Uniswap V2 Pair: WETH - $DG",
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
		"0x45687b3aaabb7997d3d06561cb7f8677641fd7bc",
		"Uniswap V2 Pair: TAILS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x456fb056a8d118300b624d3aee3864e685ae086c",
		"Uniswap V2 Pair: CAPS - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x459e4eeafb9e5d7299bbbcd5b6ab36667ffe3597",
		"Uniswap V2 Pair: F9 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x45c695f4fb8c206b2d114683ebfa97c6bbda2084",
		"Uniswap V2 Pair: BHC - WETH",
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
		"0x465e22e30ce69ec81c2defa2c71d510875b31891",
		"Uniswap V2 Pair: COVER - WETH",
		"Uniswap V2",
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
		"0x4735eb2b143a395b97453dbb73b15fa6c46c4d3d",
		"Uniswap V2 Pair: KEK - WETH",
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
		"0x4831e261bb90e498f64c99a222dfbfd2c820e8f9",
		"Uniswap V2 Pair: ARNX - WETH",
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
		"0x48616d7ecbf2a439cadd4801fbd643ad2e9d4ee6",
		"Uniswap V2 Pair: ZUZ - WETH",
		"Uniswap V2",
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
		"0x48e313460dd00100e22230e56e0a87b394066844",
		"Uniswap V2 Pair: WETH - OMG",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x496ab075f43991dd794baf982dc3d9817a49b33a",
		"Uniswap V2 Pair: RARE - WETH",
		"Uniswap V2",
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
		"0x4a7d4be868e0b811ea804faf0d3a325c3a29a9ad",
		"Uniswap V2 Pair: REQ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4b3ec6f5290f729e4b9b0ccfbb1dfaa118c078a2",
		"Uniswap V2 Pair: WETH - GAIN",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4b618087dae7765823bc47ffbf38c8ee8489f5ca",
		"Uniswap V2 Pair: WETH - SASHIMI",
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
		"0x4c083084c9d50334b343c44ec97d16011303cc73",
		"Uniswap V2 Pair: WETH - GMEE",
		"Uniswap V2",
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
		"0x4c8341379e95f70c08defb76c4f9c036525edc30",
		"Uniswap V2 Pair: RFI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4c9831fddbe7520887ec86611cd21b8101e78b36",
		"Uniswap V2 Pair: Pacha - WETH",
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
		"0x4d3138931437dcc356ca511ac812e14ba8199fd6",
		"Uniswap V2 Pair: BONDLY - WETH",
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
		"0x4e37dcad9e6e1465f33387587cef22616aac2541",
		"Uniswap V2 Pair: DIS - WETH",
		"Uniswap V2",
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
		"0x4f9fcdae3950a033074b93e269b6c382109fae71",
		"Uniswap V2 Pair: DRGN - WETH",
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
		"0x4fda00d490c1c05ff15d7313d1cebe9c711e434b",
		"Uniswap V2 Pair: WHALE - WETH",
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
		"0x50e3d53b4a22e94ee1ce5c3a852d94d145d5852e",
		"Uniswap V2 Pair: WETH - FNT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5102f3762f1f68d6be9dd5415556466cfb1de6c0",
		"Uniswap V2 Pair: WETH - TRND",
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
		"0x51fe8e8fa3f9f10288fa8c2aff1400f887d21c42",
		"Uniswap V2 Pair: MITx - WETH",
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
		"0x5239873c892376799b6cb49a3cfb1146d4a260b8",
		"Uniswap V2 Pair: NORD - WETH",
		"Uniswap V2",
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
		"0x53455f3b566d6968e9282d982dd1e038e78033ac",
		"Uniswap V2 Pair: DRC - WETH",
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
		"0x54056a936ea638579bd6284073c2cff96050451d",
		"Uniswap V2 Pair: UNDG - WETH",
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
		"0x54965801946d768b395864019903aef8b5b63bb3",
		"Uniswap V2 Pair: EYE - WETH",
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
		"0x55df969467ebdf954fe33470ed9c3c0f8fab0816",
		"Uniswap V2 Pair: WETH - yDAI+yUSDC+yUSDT+yTUSD",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x56606d52e8f4186c80cf94a6230986bacba8b6b5",
		"Uniswap V2 Pair: APOLLO - WETH",
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
		"0x5741a1ceff6148c8aaca0f0456c03c88817e05f5",
		"Uniswap V2 Pair: XIOT - WETH",
		"Uniswap V2",
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
		"0x57ab5aeb8bac2586a0d437163c3eb844246336ce",
		"Uniswap V2 Pair: MIR - WETH",
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
		"0x5916953296edf0996a0e77488b3af450095e2a35",
		"Uniswap V2 Pair: WETH - DMST",
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
		"0x59c2b713c3c3a49f554207946076aa4bea9359ba",
		"Uniswap V2 Pair: WETH - AsunaInu",
		"Uniswap V2",
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
		"0x5ad7452ceafdaeb0936507d5bb5890964ef56bd3",
		"Uniswap V2 Pair: Okinami - USDC",
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
		"0x5b6be21c4d1f2c1c5a3d6af3599f3bb0a785ae2f",
		"Uniswap V2 Pair: GERO - WETH",
		"Uniswap V2",
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
		"0x5c24b84701916d968dcc7bdd6a4c5236bed460b9",
		"Uniswap V2 Pair: WETH - TWT",
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
		"0x5cd136e8197be513b06d39730dc674b1e0f6b7da",
		"Uniswap V2 Pair: KIRO - WETH",
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
		"0x5d149abac8c1b2c6eccda50ec5e74b70fecc24b7",
		"Uniswap V2 Pair: SPDR - WETH",
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
		"0x5dfbe95925ffeb68f7d17920be7b313289a1a583",
		"Uniswap V2 Pair: WETH - MEME",
		"Uniswap V2",
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
		"0x5ed7d3b704d692938ee25fa2c7e75a1e10670b33",
		"Uniswap V2 Pair: pSAFEMOON - WETH",
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
		"0x5f57c5f9564d6a4e25d908605341632e33e7874d",
		"Uniswap V2 Pair: ROCKS - WETH",
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
		"0x60b2cc2c6ecd3dd89b4fd76818ef83186e2f2931",
		"Uniswap V2 Pair: ALPHA - WETH",
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
		"0x6147805e1011417b93e5d693424a62a70d09d0e5",
		"Uniswap V2 Pair: WETH - ankrETH",
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
		"0x61d8c3d7ad3c3c00c9e4b8da089e19e57da90b91",
		"Uniswap V2 Pair: EMN - WETH",
		"Uniswap V2",
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
		"0x629d22e6eeac46a11dbc96be93b90aee9309be4c",
		"Uniswap V2 Pair: AURORA - WETH",
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
		"0x63b61e73d3fa1fb96d51ce457cabe89fffa7a1f1",
		"Uniswap V2 Pair: SHINJA - WETH",
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
		"0x64b91b92240bc1901855dd55ae632addb650d089",
		"Uniswap V2 Pair: Mars - USDT",
		"Uniswap V2",
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
		"0x65224ed2dce0cfc960ffa39ae307b9eddeb256cc",
		"Uniswap V2 Pair: IMPACTXP - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x654def3e97c3f4218c3f49ace81687483c361b2b",
		"Uniswap V2 Pair: AZUKI - WETH",
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
		"0x6660551884b1ccc968662d72c2e6897a1ca4bfac",
		"Uniswap V2 Pair: AC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x669fbbd3612910ff1394f657900fbb8f335d044d",
		"Uniswap V2 Pair: PDOG - WETH",
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
		"0x684b00a5773679f88598a19976fbeb25a68e9a5f",
		"Uniswap V2 Pair: eXRD - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x688c56c2a19b88e46b008aaaa268a29f1772b79b",
		"Uniswap V2 Pair: (Δ) - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x68fa181c720c07b7ff7412220e2431ce90a65a14",
		"Uniswap V2 Pair: DODO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x69884da24f31960f694a8fa1f30aa8e0416fbd04",
		"Uniswap V2 Pair: LTX - WETH",
		"Uniswap V2",
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
		"0x6a3d23fa07c455f88d70c29d230467c407a3964b",
		"Uniswap V2 Pair: WETH - RMPL",
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
		"0x6b4a0bd2eee3ca06652f758844937daf91ea8422",
		"Uniswap V2 Pair: BOOST - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6bc4fbe8b72512d994fba72ade9de502b3d88ac4",
		"Uniswap V2 Pair: EverApe 🍌 - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6c25cf2160db4a1be0f1317fc301f5a5cdba9199",
		"Uniswap V2 Pair: BLV - WETH",
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
		"0x6cd7301d8366382198e2ab7d3cc4c6a74f3b4fc8",
		"Uniswap V2 Pair: CARD - WETH",
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
		"0x6deb633e4441b8879aff48caa6e021e919ddbb0c",
		"Uniswap V2 Pair: RWS - WETH",
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
		"0x6ebb1c40cd3789e6fc02f003b2416383ea5c96f4",
		"Uniswap V2 Pair: LIMIT - WETH",
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
		"0x6f23d2fedb4ff4f1e9f8c521f66e5f2a1451b6f3",
		"Uniswap V2 Pair: MARK - WETH",
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
		"0x700fc86c46299cf2a8fd86edadae3f57014351b0",
		"Uniswap V2 Pair: RACA - USDT",
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
		"0x708d25aa102e8096c5cebb9e6abf01a24bb3d6bf",
		"Uniswap V2 Pair: TEAM - WETH",
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
		"0x718dd8b743ea19d71bdb4cb48bb984b73a65ce06",
		"Uniswap V2 Pair: WETH - DONUT",
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
		"0x724d5c9c618a2152e99a45649a3b8cf198321f46",
		"Uniswap V2 Pair: REVV - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x72af4d1d175672d1f99506e68e6e7cff484be4de",
		"Uniswap V2 Pair: ASH - WETH",
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
		"0x73994f935b23511686ce1dd59c295e5100031f4b",
		"Uniswap V2 Pair: INXT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x73a86455888902108bc88f5831919e23098b9b04",
		"Uniswap V2 Pair: PAID - WETH",
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
		"0x74ac706873c399dfc73a4679b1e1fbf474c306e1",
		"Uniswap V2 Pair: WETH - HOICHI",
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
		"0x7586e4a1e7d950912544732ed533e4a448317225",
		"Uniswap V2 Pair: CLIQ - WETH",
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
		"0x76333b38567f78240d6276e5b3985baa6fa5fda5",
		"Uniswap V2 Pair: BNSD - WETH",
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
		"0x779dac1f4df345acb6ee814afda755f1693770cb",
		"Uniswap V2 Pair: STILTON - WETH",
		"Uniswap V2",
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
		"0x7894dae584dfa3a5d60a13bafc25ee0b43124e7e",
		"Uniswap V2 Pair: PBR - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x78b9524101fb67286338261ddd85e20665e571c1",
		"Uniswap V2 Pair: UNISTAKE - WETH",
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
		"0x797e1dc0738f2f047d7e0dd185e41a35f87c5618",
		"Uniswap V2 Pair: WETH - ZCX",
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
		"0x7a99822968410431edd1ee75dab78866e31caf39",
		"Uniswap V2 Pair: XI - WETH",
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
		"0x7b28470032da06051f2e620531adbaeadb285408",
		"Uniswap V2 Pair: MPL - USDC",
		"Uniswap V2",
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
		"0x7ba9b94127d434182287de708643932ec036d365",
		"Uniswap V2 Pair: eRSDL - WETH",
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
		"0x7c6c06d21f46664afd7d12197ce105651d29d1b0",
		"Uniswap V2 Pair: WETH - STARS",
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
		"0x7d3e6457ade26434f8046c405410488f1985065a",
		"Uniswap V2 Pair: CHURCH - WETH",
		"Uniswap V2",
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
		"0x7d9c8d888d03df89461c645bd1108ae138b63a2a",
		"Uniswap V2 Pair: GLQ - WETH",
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
		"0x7df4a1d4a8d8390bef36f311252423cce04e5647",
		"Uniswap V2 Pair: WETH - ASTRO",
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
		"0x7f1da3697236d4a5e0efd2a99de5d9c076937856",
		"Uniswap V2 Pair: UNN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
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
		"0x7f7b6b6d3c5495cf5664baa7857639e3b964dade",
		"Uniswap V2 Pair: MOONDAY - WETH",
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
		"0x80562222ec4d0f8a2bddd10ce972cbb2d6167802",
		"Uniswap V2 Pair: CAVA - WETH",
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
		"0x80d972d2a62ba71814f4e08bd27f95e5d81d02a9",
		"Uniswap V2 Pair: STOS - WETH",
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
		"0x811f8c60ee1805db7ece0fa3c7b064feba887053",
		"Uniswap V2 Pair: PAPER - WETH",
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
		"0x82cd7e4b567ad7d2a00c3cc93ac968ccb61cafca",
		"Uniswap V2 Pair: USDC - DORA",
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
		"0x83a40563a19c6f19dfb93e5c496280129d97e423",
		"Uniswap V2 Pair: RAK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x841bb1966c1d1b80634111691471c667e4c2bfe4",
		"Uniswap V2 Pair: HDRN - USDC",
		"Uniswap V2",
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
		"0x85917d97a4c399816cf6edb2d2e8767002f6a96a",
		"Uniswap V2 Pair: ATD - WETH",
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
		"0x8672aa02f8a5b6eb6bb0915ce6c65f771d705127",
		"Uniswap V2 Pair: USDC - OCT",
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
		"0x873823930b78e1c1c3d9674b5cb107dd2d211bf0",
		"Uniswap V2 Pair: SPDR - USDT",
		"Uniswap V2",
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
		"0x87b01a1935cdd35588a2aff22ecba1a9ce7cebd2",
		"Uniswap V2 Pair: POND - WETH",
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
		"0x87febfb3ac5791034fd5ef1a615e9d9627c2665d",
		"Uniswap V2 Pair: KP3R - WETH",
		"Uniswap V2",
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
		"0x88ae9e1625cfcbd128b89e7f037eaaf6a7cc9666",
		"Uniswap V2 Pair: FST - WETH",
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
		"0x88ff79eb2bc5850f27315415da8685282c7610f9",
		"Uniswap V2 Pair: ESD - USDC",
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
		"0x89b1251a978e88218affdf0147ffe376291f1447",
		"Uniswap V2 Pair: SPICE - USDC",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8ae720a71622e824f576b4a8c03031066548a3b1",
		"Uniswap V2 Pair: RAI - WETH",
		"Uniswap V2",
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
		"0x8c07e1dfede38b1908698988b4202a87e0d7a0f7",
		"Uniswap V2 Pair: SIDUS - WETH",
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
		"0x8c56ca4f7eb12a7c217bbe36cc427a9dcb66f590",
		"Uniswap V2 Pair: MAGIC - WETH",
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
		"0x8d01c6e109c3db63f7aa43404157b274cf18ffd8",
		"Uniswap V2 Pair: UTU - WETH",
		"Uniswap V2",
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
		"0x8da66b6e90cac30db0dce239086cfdb2dbf66a30",
		"Uniswap V2 Pair: GNYerc20 - WETH",
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
		"0x8ef79d6c328c25da633559c20c75f638a4863462",
		"Uniswap V2 Pair: QOM - WETH",
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
		"0x8ff2fd6f94cdce7c56bb11328eb9928c9483aa66",
		"Uniswap V2 Pair: MINDS - WETH",
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
		"0x9081b50bad8beefac48cc616694c26b027c559bb",
		"Uniswap V2 Pair: ORAI - WETH",
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
		"0x91204649a5c9ab2cadfc2089fd22ed0fbfe170ed",
		"Uniswap V2 Pair: BXX - WETH",
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
		"0x91b1b853c1426c4aa78cac984c6f6dd1e80b0c4f",
		"Uniswap V2 Pair: DON - USDT",
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
		"0x92330d8818e8a3b50f027c819fa46031ffba2c8c",
		"Uniswap V2 Pair: WETH - FRM",
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
		"0x92c2fc5f306405eab0ff0958f6d85d7f8892cf4d",
		"Uniswap V2 Pair: DAI - HOPR",
		"Uniswap V2",
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
		"0x9346c20186d1794101b8517177a1b15c49c9ff9b",
		"Uniswap V2 Pair: yyDAI+yUSDC+yUSDT+yTUSD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x937e882083a0aaf58d7fcf566de8e5d990e882a9",
		"Uniswap V2 Pair: kitty - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x93d2707e73b4f096c274929bb2e4f631c7e61502",
		"Uniswap V2 Pair: JUL - WETH",
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
		"0x95a5543111343ab2a66a06bc663a1170acf050b9",
		"Uniswap V2 Pair: AUSCM - WETH",
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
		"0x96b1071dec3158bd1c0bfc8aecf5ee969f9ca3db",
		"Uniswap V2 Pair: ELX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
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
		"0x979a6e410760b83bdc6dcddd0e904998ea575197",
		"Uniswap V2 Pair: USHIBA - WETH",
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
		"0x989ebc2b7e1e16f1ececd9a4fad931618c12ce36",
		"Uniswap V2 Pair: DOGEFI - WETH",
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
		"0x98f90bfc702ec548d21b5a566a4df6853e2890d4",
		"Uniswap V2 Pair: AKRO - USDC",
		"Uniswap V2",
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
		"0x99986e1b28267338af96b81201f5ed4d84f2d852",
		"Uniswap V2 Pair: YIELD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x99b1db3318aa3040f336fb65c55400e164ddcd7f",
		"Uniswap V2 Pair: OM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x99d915da0f77c92dba4ef1b9e88dc8f590bb509a",
		"Uniswap V2 Pair: SAFE - WETH",
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
		"0x9a4d5580497abde06df106b5cd2d2ecbed7b09c9",
		"Uniswap V2 Pair: TANGO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9a632cd9cb44f9383bf6f3117056c2455b30a6e0",
		"Uniswap V2 Pair: DENT - WETH",
		"Uniswap V2",
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
		"0x9bd8844a562978567ae10b5b05a9b68fe908de41",
		"Uniswap V2 Pair: YUNO - WETH",
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
		"0x9c2b19dbdfad3f283c0b96c5546d91a275778d91",
		"Uniswap V2 Pair: WETH - MCC",
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
		"0x9dc696f1067a6b9929986283f6d316be9c9198fd",
		"Uniswap V2 Pair: WETH - BONDLY",
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
		"0x9def9511fec79f83afcbffe4776b1d817dc775ae",
		"Uniswap V2 Pair: ANT - WETH",
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
		"0x9e98deac1a416c9ce3c892bd8eef586f1291ca35",
		"Uniswap V2 Pair: BEL - WETH",
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
		"0x9f4aa9b4661f0c55b61fc12b1944f006a71c773f",
		"Uniswap V2 Pair: NCT - WETH",
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
		"0x9f9373b2b5fe5f6b32f171191946b0be30e0bd30",
		"Uniswap V2 Pair: VPAD - USDT",
		"Uniswap V2",
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
		"0xa0787e87b10c9b1b88d75915ac8ec5608ac6d054",
		"Uniswap V2 Pair: NII - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa0abda1f980e03d7eadb78aed8fc1f2dd0fe83dd",
		"Uniswap V2 Pair: BUSD - USDT",
		"Uniswap V2",
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
		"0xa1af3bb298673f46cf1299efc7e73e7b2e2d20b8",
		"Uniswap V2 Pair: WETH - TSUKA",
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
		"0xa2107fa5b38d9bbd2c461d6edf11b11a50f6b974",
		"Uniswap V2 Pair: LINK - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa22a11d16187c2833b6067c1a666e6fa9317836f",
		"Uniswap V2 Pair: CHONK - WETH",
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
		"0xa29fe6ef9592b5d408cca961d0fb9b1faf497d6d",
		"Uniswap V2 Pair: WETH - DEXT",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa2b04f8133fc25887a436812eae384e32a8a84f2",
		"Uniswap V2 Pair: WETH - COTI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa323fc62c71b210e54171887445d7fca569d8430",
		"Uniswap V2 Pair: WETH - VISION",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa32523371390b0cc4e11f6bb236ecf4c2cdea101",
		"Uniswap V2 Pair: RING - WETH",
		"Uniswap V2",
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
		"0xa3b79b78678c15eec77389b380988b0229da1876",
		"Uniswap V2 Pair: WHITE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa3d588a914c7534356a006ae3c1d8ae19c9694e1",
		"Uniswap V2 Pair: WETH - PDEX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa40bb1c47f6dd27142a2bd7c93bfa98db9d1f5c5",
		"Uniswap V2 Pair: MASK - USDC",
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
		"0xa4f35395910d7a4ff110669ced4b70227a166877",
		"Uniswap V2 Pair: MRCH - WETH",
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
		"0xa5904961f61bae7c4dd8478077556c91bf291cfd",
		"Uniswap V2 Pair: YAMv2 - WETH",
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
		"0xa66cdad5facbcbf74d9b60dcc8034c2a485e63ff",
		"Uniswap V2 Pair: WETH - RVF",
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
		"0xa80108e9e31f9ecf044f5f99b5d7879508770fcd",
		"Uniswap V2 Pair: FYZ - WETH",
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
		"0xa8bef252afac1d6263f22c1e4f33f3777ed30bd6",
		"Uniswap V2 Pair: ENOL - WETH",
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
		"0xa9bd7eef0c7affbdbdae92105712e9ff8b06ed49",
		"Uniswap V2 Pair: BMI - WETH",
		"Uniswap V2",
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
		"0xaa934346e4f74bc23e62153ee964df8b826694ef",
		"Uniswap V2 Pair: MM - WETH",
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
		"0xaba7af37dbdc67b7463917e483b55340d153928a",
		"Uniswap V2 Pair: BABYDOGE - WETH",
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
		"0xac6776d1c8d455ad282c76eb4c2ade2b07170104",
		"Uniswap V2 Pair: KIBA - WETH",
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
		"0xad3e3cc56cffa42235b326090176891292dfca20",
		"Uniswap V2 Pair: WETH - YFMS",
		"Uniswap V2",
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
		"0xae461ca67b15dc8dc81ce7615e0320da1a9ab8d5",
		"Uniswap V2 Pair: DAI - USDC",
		"Uniswap V2",
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
		"0xae95aebf655e9b40c7e0d262198b970cd25f28af",
		"Uniswap V2 Pair: rHEGIC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaed171a3369e54aff2601dc92a8d15bbc7e9fa32",
		"Uniswap V2 Pair: LIFE - WETH",
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
		"0xb011eeaab8bf0c6de75510128da95498e4b7e67f",
		"Uniswap V2 Pair: APE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb039f945deca4b4ec44c28083f91f37e6d2a27a6",
		"Uniswap V2 Pair: PBX - USDT",
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
		"0xb1637be0173330664adecb343faf112ca837da06",
		"Uniswap V2 Pair: 🐟 - WETH",
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
		"0xb34daaf8832432e5619efcf8262a4f5ecfd1384a",
		"Uniswap V2 Pair: WETH - KINE",
		"Uniswap V2",
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
		"0xb58645ac31c5c40f03ea4cc44885ffeff1d74851",
		"Uniswap V2 Pair: CIBS - WETH",
		"Uniswap V2",
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
		"0xb62a74f8be38cef3b00455b9989637349d4a1bc3",
		"Uniswap V2 Pair: WETH - UBX",
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
		"0xb767c20d9773adce84d0f0a5bc64e2f114ad3076",
		"Uniswap V2 Pair: wOMI - WETH",
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
		"0xb8b84ce0cade916988bd129eafd7934ade5fa6a9",
		"Uniswap V2 Pair: HAKKA - MKR",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb8ec4eb95d104753747bc689e6e997a637245bbd",
		"Uniswap V2 Pair: SHIH - WETH",
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
		"0xbaa48ef52fe0cf3a2682c1247b18d4274a988132",
		"Uniswap V2 Pair: HORD - WETH",
		"Uniswap V2",
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
		"0xbc8ed8c2ad89c14e55ee35d933f83e41cbd11121",
		"Uniswap V2 Pair: ARAID - WETH",
		"Uniswap V2",
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
		"0xbdfe29d9e42ea541c581eef6cf3a2bb27b51e2c4",
		"Uniswap V2 Pair: WETH - COOK",
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
		"0xbe38a889d67467b665e30e20ee5604a6f5696e38",
		"Uniswap V2 Pair: WETH - PTF",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbe55c87dff2a9f5c95cb5c07572c51fd91fe0732",
		"Uniswap V2 Pair: ROOM - WETH",
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
		"0xbe9ba93515e87c7bd3a0cebb9f61aaabe7a77dd3",
		"Uniswap V2 Pair: WETH - PYLON",
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
		"0xbefeaa0335d842b31053b091d5e2ba5d6a696dbe",
		"Uniswap V2 Pair: DFSocial - WETH",
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
		"0xbf4ff08b9a3bbb77a362b609119100545c0445fe",
		"Uniswap V2 Pair: PMON - WETH",
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
		"0xc0067d751fb1172dbab1fa003efe214ee8f419b6",
		"Uniswap V2 Pair: DOGE - WETH",
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
		"0xc169f0eb31403c0bcc43dc9feca648a79fafc0f4",
		"Uniswap V2 Pair: CAP - WETH",
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
		"0xc1cd55a152d025c9ec44b501ee2202fb6330bbcc",
		"Uniswap V2 Pair: GLX - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc277c03c6e30f00bd18ab6583092c64fc3390847",
		"Uniswap V2 Pair: Gold 1 - WETH",
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
		"0xc2d20328eb8bb0bf0984d9149eab611920be9ba1",
		"Uniswap V2 Pair: VNLA - WETH",
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
		"0xc34da1ab0f93dfed30729951dafcfb9ce3e2a9ae",
		"Uniswap V2 Pair: WETH - XTM",
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
		"0xc366336dc7cf8131d4e538bc0205e603014743f0",
		"Uniswap V2 Pair: AGFI - WETH",
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
		"0xc3f6486d0ecae8038b37aaef1c39e2a12dcb4423",
		"Uniswap V2 Pair: WETH - KAI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc3fa0a8d68a43ed336174cb5673903572bbace8e",
		"Uniswap V2 Pair: YFIM - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc433e27c2b7a77e4021524a90354b9922c825335",
		"Uniswap V2 Pair: RDT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc447aaa230af55b2eaa75227521768914ec590aa",
		"Uniswap V2 Pair: UNIQ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc449907e7af59cc2420545224f08762e9935b3c4",
		"Uniswap V2 Pair: FREN - WETH",
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
		"0xc491405d542a393d8d202a72f0fb076447e61891",
		"Uniswap V2 Pair: WETH - WHACKD",
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
		"0xc4d9102e36c5063b98010a03c1f7c8bd44c32a00",
		"Uniswap V2 Pair: WETH - ATRI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc4da39e646e7f5d233b89ca0f7b75344e7ddb2cc",
		"Uniswap V2 Pair: KIMCHI - WETH",
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
		"0xc5a788f63e5d9cf2c324621eed51a98f85ae373b",
		"Uniswap V2 Pair: DZAR - WETH",
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
		"0xc5ed7350e0fb3f780c756ba7d5d8539dc242a414",
		"Uniswap V2 Pair: WETH - DUCK",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc60c479f3cc66f1654a4113f4949c98ce77a9995",
		"Uniswap V2 Pair: KYL - WETH",
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
		"0xc6bc9b105a37d11b44654ccc3ba5f76098f2ca38",
		"Uniswap V2 Pair: PSWAP - WETH",
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
		"0xc92b1c381450c5972ee3f4a801e651257aed449a",
		"Uniswap V2 Pair: DEXM - WETH",
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
		"0xcab335e1964363e48a790da303b74ec02d3f8fb2",
		"Uniswap V2 Pair: DFYN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcabebc0c5a9d6522640d81c22975ca31b8f8ff48",
		"Uniswap V2 Pair: KTLYO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcb1a16bfb8fc536d7ab9ab9c17e3239cad505928",
		"Uniswap V2 Pair: BANKETH - WETH",
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
		"0xcb49221ad08e84b1692f80b62cd5f90c1aadbe6e",
		"Uniswap V2 Pair: CUDOS - WETH",
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
		"0xcbc1ce4a9f18c6e8a0a328708ba6ab484f84bb47",
		"Uniswap V2 Pair: POODL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcbde90a6abfb904d61a3c5f46a35b736c3a3d68f",
		"Uniswap V2 Pair: KWIK - WETH",
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
		"0xccb63225a7b19dcf66717e4d40c9a72b39331d61",
		"Uniswap V2 Pair: MC - WETH",
		"Uniswap V2",
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
		"0xcd4a2f72e3d646e8addab74a68c2175d6a36b0e3",
		"Uniswap V2 Pair: WETH - DAFI",
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
		"0xce0848e77370687e9cb33b4af15f1861616d46c6",
		"Uniswap V2 Pair: SOGE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xce2cc0513634cef3a7c9c257e294ef5e3092f185",
		"Uniswap V2 Pair: OGN - WETH",
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
		"0xcf4236db746dbc1855a4d095aaf58da9b030491e",
		"Uniswap V2 Pair: BLZ - WETH",
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
		"0xcfb8cf118b4f0abb2e8ce6dbeb90d6bc0a62693d",
		"Uniswap V2 Pair: TEND - WETH",
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
		"0xd058416f4c83a4f187631c454f872b076c0a7642",
		"Uniswap V2 Pair: ZOOT - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd07d843cd1d769cdf918be8a3c2c0b708889f7fc",
		"Uniswap V2 Pair: WETH - OPCT",
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
		"0xd0af55fb4be7f8946f06a826056b8993fdff7654",
		"Uniswap V2 Pair: Mikaboshi - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd0fbb87e47da9987d345dbdf3a34d4266cf5ebe9",
		"Uniswap V2 Pair: DSLA - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd0fecb59019d8d1fdd6a4d7be9e89aa54cfb962a",
		"Uniswap V2 Pair: WETH - FRMX",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd11ad84d720a5e7fa11c8412af6c1caa815a436d",
		"Uniswap V2 Pair: DVG - WETH",
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
		"0xd24314cccb742cee02c23e815b5fbf930bdd16c5",
		"Uniswap V2 Pair: WETH - yLand",
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
		"0xd34361f7830fdf2ca6d7023a32a776db39762ce9",
		"Uniswap V2 Pair: TACO - WETH",
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
		"0xd3772a963790fede65646cfdae08734a17cd0f47",
		"Uniswap V2 Pair: ADX - WETH",
		"Uniswap V2",
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
		"0xd417f1fcab7947cb4ee838fb73d35b9541ca8211",
		"Uniswap V2 Pair: SWFTC - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd4405f0704621dbe9d4dea60e128e0c3b26bddbd",
		"Uniswap V2 Pair: BAC - DAI",
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
		"0xd51b4c6bef349571aac48793d830da975d25f920",
		"Uniswap V2 Pair: DIAMND - WETH",
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
		"0xd65e975c7d0d5871eff8b079120e43c9f377ada1",
		"Uniswap V2 Pair: YOP - WETH",
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
		"0xd7cfbcadaaf6475321cfcf3884f15a93400be658",
		"Uniswap V2 Pair: OCTO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd805fb416585d1d724e29f0e38529b9c7a5db81d",
		"Uniswap V2 Pair: GINU - WETH",
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
		"0xd8a07e9fe071106bf29536b93e8c9a26527af787",
		"Uniswap V2 Pair: BLANK - WETH",
		"Uniswap V2",
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
		"0xd9159376499936868a5b061a4633481131e70732",
		"Uniswap V2 Pair: VALUE - WETH",
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
		"0xd9d39540d61f8d6eb2ee7eedfae93cc09cc24f0e",
		"Uniswap V2 Pair: FOAM - WETH",
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
		"0xdadf443c086f9d3c556ebc57c398a852f6a02898",
		"Uniswap V2 Pair: DOS - WETH",
		"Uniswap V2",
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
		"0xdb9cd2f59b930ce823d8b071ba8f2174b59194b5",
		"Uniswap V2 Pair: PRT - WETH",
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
		"0xdc2b82bc1106c9c5286e59344896fb0ceb932f53",
		"Uniswap V2 Pair: WETH - RGT",
		"Uniswap V2",
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
		"0xdc7d8cc3a22fe0ec69770e02931f43451b7b975e",
		"Uniswap V2 Pair: EWTB - WETH",
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
		"0xdcff4c70131b476595b449c7db17cd92663aa513",
		"Uniswap V2 Pair: kSEED - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdd39323c337c33d0285c1d4228a1a46a8502c79f",
		"Uniswap V2 Pair: HATI - USDC",
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
		"0xdd6614b5171c413dac9ae0985df0deeb6ff9573a",
		"Uniswap V2 Pair: NEKO - WETH",
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
		"0xdec87f2f3e7a936b08ebd7b2371ab12cc8b68340",
		"Uniswap V2 Pair: WETH - FCL",
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
		"0xdf6b861b4fbcfaffb62dd1906fcd3a863955704b",
		"Uniswap V2 Pair: BUILD - WETH",
		"Uniswap V2",
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
		"0xdfcf744c8ae896e8631ba9b9dc717546646f6708",
		"Uniswap V2 Pair: WETH - SAITO",
		"Uniswap V2",
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
		"0xe0cc5afc0ff2c76183416fb8d1a29f6799fb2cdf",
		"Uniswap V2 Pair: XIO - WETH",
		"Uniswap V2",
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
		"0xe1573b9d29e2183b1af0e743dc2754979a40d237",
		"Uniswap V2 Pair: FXS - FRAX",
		"Uniswap V2",
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
		"0xe275eb6154cb4a73f0ba573e43b2b06e9e78b7f0",
		"Uniswap V2 Pair: WETH - FSW",
		"Uniswap V2",
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
		"0xe2f021411a15f677100a79f1bf6afd89d00c778b",
		"Uniswap V2 Pair: SLINK - WETH",
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
		"0xe4253a969c3977d031eab6906f4e6e7335edcd43",
		"Uniswap V2 Pair: WETH - YETIC",
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
		"0xe495fdfabc7c51c0851e76543c0f552205414894",
		"Uniswap V2 Pair: MDX - WETH",
		"Uniswap V2",
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
		"0xe5c5227d8105d8d5f26ff3634eb52e2d7cc15b50",
		"Uniswap V2 Pair: ALBT - WETH",
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
		"0xe632ded5195e945a31f56d674aab0c0c9e7e812c",
		"Uniswap V2 Pair: WETH - UBI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe6936df3d937cfc2ccf5b84ddbfd5455b468bbb9",
		"Uniswap V2 Pair: MONA - WETH",
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
		"0xe7607a563105f7dba8beb87ad7f5b3a9ec793958",
		"Uniswap V2 Pair: INFI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe86204c4eddd2f70ee00ead6805f917671f56c52",
		"Uniswap V2 Pair: WBTC - DIGG",
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
		"0xe93dc496dbc669d7ee4f03b0eb0a10bb13a4b2a4",
		"Uniswap V2 Pair: USDC - DUCK",
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
		"0xe98f89a2b3aecdbe2118202826478eb02434459a",
		"Uniswap V2 Pair: DAI - DEBASE",
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
		"0xea8091470479b457792f2f56a4e58c7329bc1b1d",
		"Uniswap V2 Pair: WETH - YFFC",
		"Uniswap V2",
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
		"0xebfb684dd2b01e698ca6c14f10e4f289934a54d6",
		"Uniswap V2 Pair: UNI - USDC",
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
		"0xecfe2c3c1ac0a5a59227a01f3dd7044159b11a57",
		"Uniswap V2 Pair: RAMP - WETH",
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
		"0xed643618dd5194f243a8f23c7bd786a37a6dcf8b",
		"Uniswap V2 Pair: YFBETA - WETH",
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
		"0xedf1fa564a91a5664f172470c47450af17724757",
		"Uniswap V2 Pair: OCC - USDC",
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
		"0xeebbce0288149ccaaa839e3e06c5b28ca355c1bf",
		"Uniswap V2 Pair: HRD - WETH",
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
		"0xef035f52e5a8974adbf4380e020cd4a0a349c517",
		"Uniswap V2 Pair: KORE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xef5a01f893a81506439572922cc7cb779e7cc91c",
		"Uniswap V2 Pair: MILF - WETH",
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
		"0xf043c39a106db6b58c76995f30ba35fd211c3b76",
		"Uniswap V2 Pair: APY - WETH",
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
		"0xf0644757918d29e5a9b9ca62d8a4d599ab9f5109",
		"Uniswap V2 Pair: MAPS - WETH",
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
		"0xf0d1109e723cb06e400e2e57d0b6c7c32bedf61a",
		"Uniswap V2 Pair: BEL - USDT",
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
		"0xf20ef17b889b437c151eb5ba15a47bfc62bff469",
		"Uniswap V2 Pair: LUSD - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf21638ee30e1ee8ccff28c08583f0b5ca208dab1",
		"Uniswap V2 Pair: VERI - WETH",
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
		"0xf232d640a5700724748464ba8bd8bed21db609a6",
		"Uniswap V2 Pair: SKL - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf248959d7aa50cd47b448f507063eaa6cc5404c4",
		"Uniswap V2 Pair: WETH - PRE",
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
		"0xf2a9e1b9b79d708aa2f333e6abac07a1d87451e1",
		"Uniswap V2 Pair: COLL - WETH",
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
		"0xf3a4b52bf0d1fcb8a81123f44933edbc35af4da0",
		"Uniswap V2 Pair: WETH - ESS",
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
		"0xf44e8ff3bb644479124e691bf572f7813a1bc499",
		"Uniswap V2 Pair: WETH - EDDA",
		"Uniswap V2",
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
		"0xf4d4e16c9a93d88990e0b98820c363369ca91c01",
		"Uniswap V2 Pair: CC - WETH",
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
		"0xf5b92789f6cdf1b7c0d7252696433cbe34b61354",
		"Uniswap V2 Pair: ISLE - WETH",
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
		"0xf650233ec6ea1c6717ac4f409f09e6c9ebc8c4d2",
		"Uniswap V2 Pair: wCRES - WETH",
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
		"0xf6c3595cbd6858b47e93c83312cef89750cea3a4",
		"Uniswap V2 Pair: WETH - CUBE",
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
		"0xf7d31825946e7fd99ef07212d34b9dad84c396b7",
		"Uniswap V2 Pair: BONE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf7ef5352de45a20d8c8565cd94a4bd6c8831f749",
		"Uniswap V2 Pair: LINU - WETH",
		"Uniswap V2",
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
		"0xf82d8ec196fb0d56c6b82a8b1870f09502a49f88",
		"Uniswap V2 Pair: KISHU - WETH",
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
		"0xf898301c2807e99abaa39396a696d1202122d23e",
		"Uniswap V2 Pair: UCO - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf91c12dae1313d0be5d7a27aa559b1171cc1eac5",
		"Uniswap V2 Pair: ETH2x-FLI - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf956cdc8f43637f34f4be368fa1cb7da01d622be",
		"Uniswap V2 Pair: AIOZ - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf9fdd3a82566cbaf5dd3d3094d8dd9aaa72a1c36",
		"Uniswap V2 Pair: SLM - WETH",
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
		"0xfa5562729fdc3ed3a52c3aab2e12bd504fd24991",
		"Uniswap V2 Pair: AVG - WETH",
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
		"0xfaab5238f5d2163e25518b0c1af205da0f783dd0",
		"Uniswap V2 Pair: $ROPE - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfaad1072e259b5ed342d3f16277477b46d379abc",
		"Uniswap V2 Pair: DEGEN - WETH",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
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
		"0xfc0dd985f6de9c2322ebd97c3422b0857c4d78c7",
		"Uniswap V2 Pair: ARMOR - DAI",
		"Uniswap V2",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfc6f3e19d82868a9386acd23c7118552d04d41e8",
		"Uniswap V2 Pair: BISHU - WETH",
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
		"0xfca090c1868004bec9c91f53db013288dc21c55b",
		"Uniswap V2 Pair: WETH - MOD",
		"Uniswap V2",
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
		"0xfd0a40bc83c5fae4203dec7e5929b446b07d1c76",
		"Uniswap V2 Pair: FRAX - WETH",
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
		"0xfe796ba940256e65048d1e6b52ec8755067c7145",
		"Uniswap V2 Pair: VOLT - WETH",
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
		"0xfee4800067bfc9dff564d116cba4d4b16ca7b7b3",
		"Uniswap V2 Pair: KEANU - WETH",
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
		"0xffa98a091331df4600f87c9164cd27e8a5cd2405",
		"Uniswap V2 Pair: POLS - WETH",
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
		"0x00cef0386ed94d738c8f8a74e8bfd0376926d24c",
		"Uniswap V3 Pool: BUSD - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x015769601d8d4879c0e193eeab31f10cf03c9ea9",
		"Uniswap V3 Pool: USDC - MLP",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x020c349a0541d76c16f501abc6b2e9c98adae892",
		"Uniswap V3 Pool: USDC - SNX",
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
		"0x04916039b1f59d9745bf6e0a21f191d1e0a84287",
		"Uniswap V3 Pool: YFI - WETH",
		"Uniswap V3",
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
		"0x04ed15a29addad1e8189026d17879403997050a3",
		"Uniswap V3 Pool: PSWAP - WETH",
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
		"0x06729eb2424da47898f935267bd4a62940de5105",
		"Uniswap V3 Pool: CEL - WETH",
		"Uniswap V3",
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
		"0x075f4849d3c2088e5599cecf6ee0fdf8addfd124",
		"Uniswap V3 Pool: WETH - ✺RUG",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x07a6e955ba4345bae83ac2a6faa771fddd8a2011",
		"Uniswap V3 Pool: MATIC - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x07ed78c6c91ce18811ad281d0533819cf848075b",
		"Uniswap V3 Pool: ERN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x07f3d316630719f4fc69c152f397c150f0831071",
		"Uniswap V3 Pool: EURT - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x094a28b22e1b4218d590ea6fa916b3c5e670ba55",
		"Uniswap V3 Pool: USDC - UOS",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0a55882f4e1117adc54afbbac4a39079ad52fb89",
		"Uniswap V3 Pool: SSV - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0bb5fd9b4e16607d32c4e5ac625ac5381c605920",
		"Uniswap V3 Pool: sOHM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0cfbed8f2248d2735203f602be0cae5a3131ec68",
		"Uniswap V3 Pool: WETH - SLP",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x0e2c4be9f3408e5b1ff631576d946eb8c224b5ed",
		"Uniswap V3 Pool: WETH - GRT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x11184bf5937beb9085b4f070e7b410be052e37a6",
		"Uniswap V3 Pool: ZENIQ - WETH",
		"Uniswap V3",
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
		"0x122e55503a0b2e5cd528effa44d0b2fea300f24b",
		"Uniswap V3 Pool: WOO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x126b3e5bfe28244626d4b294a84c50d8a2297859",
		"Uniswap V3 Pool: STMX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x127452f3f9cdc0389b0bf59ce6131aa3bd763598",
		"Uniswap V3 Pool: WETH - SOL",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x13dc0a39dc00f394e030b97b0b569dedbe634c0d",
		"Uniswap V3 Pool: ANKR - WETH",
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
		"0x151ccb92bc1ed5c6d0f9adb5cec4763ceb66ac7f",
		"Uniswap V3 Pool: ETH2x-FLI - WETH",
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
		"0x162cec59dfac80086d7370f11dcd8705a45c9333",
		"Uniswap V3 Pool: WETH - GODS",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x16980c16811bde2b3358c1ce4341541a4c772ec9",
		"Uniswap V3 Pool: LUSD - DAI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x16b70f44719b227278a2dc1122e8106cc929ecd1",
		"Uniswap V3 Pool: WETH - LUNA",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x18d96b617a3e5c42a2ada4bc5d1b48e223f17d0d",
		"Uniswap V3 Pool: USDC - UST",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x19363890e559d365e943604286e448a19ffead9c",
		"Uniswap V3 Pool: MET - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x19c10e1f20df3a8c2ac93a62d7fba719fa777026",
		"Uniswap V3 Pool: DINO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x19f83460e387f1b01f94b85c2532ebc15b0b712e",
		"Uniswap V3 Pool: USDT - SAITO",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1a349a3397a8431eed8d94a05f88f9001117fcaa",
		"Uniswap V3 Pool: FUN - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1a89ae3ba4f9a97b10bac6a77061f00bb956858b",
		"Uniswap V3 Pool: IMPT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1c98562a2fab5af19d8fb3291a36ac3c618835d9",
		"Uniswap V3 Pool: Metis - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x1d42064fc4beb5f8aaf85f4617ae8b3b5b8bd801",
		"Uniswap V3 Pool: UNI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x216fb666dd61600e74f7b2ca25a38aa99db1a4e9",
		"Uniswap V3 Pool: USDC - TSUKA",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x21f396dd37a26d7754c513fd916d07f66aa6b81e",
		"Uniswap V3 Pool: MON - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x223203a27dfc1b6f9687e57b9ec7ed68298bb59c",
		"Uniswap V3 Pool: WETH - LOOMI",
		"Uniswap V3",
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
		"0x2519042aa735edb4688a8376d69d4bb69431206c",
		"Uniswap V3 Pool: LPT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x25c0edc51909fc20429c6ece9b8f4fbb5af13878",
		"Uniswap V3 Pool: ASIC - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x27a9ff745cf1dd366d94267cb4ade2350588a187",
		"Uniswap V3 Pool: WETH - AVINOC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x27dd7b7d610c9be6620a893b51d0f7856c6f3bfd",
		"Uniswap V3 Pool: TLOS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2837809fd68e4a4104af76bbec5b622b6146b2cb",
		"Uniswap V3 Pool: WETH - RAIL",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x283e2e83b7f3e297c4b7c02114ab0196b001a109",
		"Uniswap V3 Pool: OCEAN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x290a6a7460b308ee3f19023d2d00de604bcf5b42",
		"Uniswap V3 Pool: MATIC - WETH",
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
		"0x29f0096512b4af1d689c1a11a867a6e707a8dcde",
		"Uniswap V3 Pool: FUN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2a0330c7e979a4d18e5b0c987b877da24dd37d04",
		"Uniswap V3 Pool: AIOZ - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2a9d2ba41aba912316d16742f259412b681898db",
		"Uniswap V3 Pool: XEN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2ae4517b2806b84a576c10f698d6567ce80a6490",
		"Uniswap V3 Pool: MAXI - HEX",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2b43fe4f41d871fbc75af6e0ce85bce38ff1edc7",
		"Uniswap V3 Pool: Coval - WETH",
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
		"0x2dd31cc03ed996a99fbfdffa07f8f4604b1a2ec1",
		"Uniswap V3 Pool: GEL - WETH",
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
		"0x2e4784446a0a06df3d1a040b03e1680ee266c35a",
		"Uniswap V3 Pool: CVX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x2efec2097beede290b2eed63e2faf5ecbbc528fc",
		"Uniswap V3 Pool: WETH - TRU",
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
		"0x2fa7361d7e3b812375604681eb155a97b4d65e9e",
		"Uniswap V3 Pool: aKLIMA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3019d4e366576a88d28b623afaf3ecb9ec9d9580",
		"Uniswap V3 Pool: AXS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3139bbba7f4b9125595cb4ebeefdac1fce7ab5f1",
		"Uniswap V3 Pool: RUNE - WETH",
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
		"0x3311bf503b5cd93fdb37776cb22dd47b75bf5a28",
		"Uniswap V3 Pool: HEX - PLSD",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3328ca5b535d537f88715b305375c591cf52d541",
		"Uniswap V3 Pool: PLSD - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x33f6e97ea6f5dfa6691176b33ad5677e08fb6b38",
		"Uniswap V3 Pool: LUNA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3416cf6c708da44db2624d63ea0aaef7113527c6",
		"Uniswap V3 Pool: USDC - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x34b8487fc2912c486b04d1436b07f19f7730cd43",
		"Uniswap V3 Pool: WETH - POLK",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3536c21b5c7b0ec72a58e7bce46b7fadef10f941",
		"Uniswap V3 Pool: RWASTE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x353bb62ed786cdf7624bd4049859182f3c1e9e5d",
		"Uniswap V3 Pool: XEN - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x36bcf57291a291a6e0e0bff7b12b69b556bcd9ed",
		"Uniswap V3 Pool: WETH - ICE",
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
		"0x3782a3425cd093d5cd0c5b684be72641e199029c",
		"Uniswap V3 Pool: BYTES - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x381fe4eb128db1621647ca00965da3f9e09f4fac",
		"Uniswap V3 Pool: ELON - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x38b6e47a97f4680a983eadc8e510c37d73967c29",
		"Uniswap V3 Pool: JASMY - USDT",
		"Uniswap V3",
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
		"0x3b685307c8611afb2a9e83ebc8743dc20480716e",
		"Uniswap V3 Pool: FTM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x3bc810483e4e2344f0e114a57af13cedc44cf717",
		"Uniswap V3 Pool: LEASH - WETH",
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
		"0x3ffedcddd268511acc44ae67845bdd56c8417fa4",
		"Uniswap V3 Pool: WBTC - FUN",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4585fe77225b41b697c938b018e2ac67ac5a20c0",
		"Uniswap V3 Pool: WBTC - WETH",
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
		"0x486263aa56d1b49d78dea765754164b880c99954",
		"Uniswap V3 Pool: FUN - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x489cebe6cd5dc5dcb7047a1f0d4f358a5d2fb295",
		"Uniswap V3 Pool: IOTX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x48da0965ab2d2cbf1c17c09cfb5cbe67ad5b1406",
		"Uniswap V3 Pool: DAI - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x495864cad6cf60e97efcd3f14ff8b1f167956ba2",
		"Uniswap V3 Pool: API3 - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x498498fa386ef2860e7abf8c60254580c8c41ec5",
		"Uniswap V3 Pool: DC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4a73a7e29988f171910119d660c4dd548282bf2a",
		"Uniswap V3 Pool: WETH - PSP",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4a97b4da0d43e1d36952e239cfda8922e8643931",
		"Uniswap V3 Pool: HEX - HDRN",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4b3d09151ad295623ac9e50967739fd437b0d892",
		"Uniswap V3 Pool: WETH - NCR",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4b5ab61593a2401b1075b90c04cbcdd3f87ce011",
		"Uniswap V3 Pool: WETH - LOOKS",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4b62fa30fea125e43780dc425c2be5acb4ba743b",
		"Uniswap V3 Pool: TONCOIN - WETH",
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
		"0x4c54ff7f1c424ff5487a32aad0b48b19cbaf087f",
		"Uniswap V3 Pool: NEXO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4c83a7f819a5c37d64b4c5a2f8238ea082fa1f4e",
		"Uniswap V3 Pool: WETH - CRV",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4e0924d3a751be199c426d52fb1f2337fa96f736",
		"Uniswap V3 Pool: LUSD - USDC",
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
		"0x4efc9e2e3e77732ce2f9612b8f050082c01688bd",
		"Uniswap V3 Pool: GREEN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x4fde70fdadfdb82295efacef32c48328f830ab75",
		"Uniswap V3 Pool: UNQT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5104846dc1c3c7697b856dc69e350ae4dcc47e24",
		"Uniswap V3 Pool: LORDS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x52414c8b908e9a75c3c8704b2ae5e39ab7156c05",
		"Uniswap V3 Pool: WETH - REEF",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5764a6f2212d502bc5970f9f129ffcd61e5d7563",
		"Uniswap V3 Pool: SHIB - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5777d92f208679db4b9778590fa3cab3ac9e2168",
		"Uniswap V3 Pool: DAI - USDC",
		"Uniswap V3",
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
		"0x59b4bb1f5d943cf71a10df63f6b743ee4a4489ee",
		"Uniswap V3 Pool: XMON - WETH",
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
		"0x5b781915b6b610a1aba8135ad5df084ffe528da4",
		"Uniswap V3 Pool: WETH - SUPER",
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
		"0x5c128d25a21f681e678cb050e551a895c9309945",
		"Uniswap V3 Pool: BIT - WETH",
		"Uniswap V3",
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
		"0x5e35c4eba72470ee1177dcb14dddf4d9e6d915f4",
		"Uniswap V3 Pool: BUSD - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x60594a405d53811d3bc4766596efd80fd545a270",
		"Uniswap V3 Pool: DAI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x60a6b23a7a87c5ce9e3f81c869691f784b18a704",
		"Uniswap V3 Pool: WETH - MTO",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x610a94f64d1d149623369e5bac9576065d23893b",
		"Uniswap V3 Pool: ELON - WETH",
		"Uniswap V3",
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
		"0x62979dff3b5eb032ecba1a5934d1fd4367bb695c",
		"Uniswap V3 Pool: WETH - TSUKA",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x632e675672f2657f227da8d9bb3fe9177838e726",
		"Uniswap V3 Pool: RPL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x63805e5d951398bc1c1bec242d303f59fa7732e3",
		"Uniswap V3 Pool: X2Y2 - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x64a078926ad9f9e88016c199017aea196e3899e1",
		"Uniswap V3 Pool: WETH - BTT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x655e25fed94ddb846601705ace4349815e2a95d1",
		"Uniswap V3 Pool: KYL - WETH",
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
		"0x69d91b94f0aaf8e8a2586909fa77a5c2c89818d5",
		"Uniswap V3 Pool: HEX - USDC",
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
		"0x6ae0cdc5d2b89a8dcb99ad6b3435b3e7f7290077",
		"Uniswap V3 Pool: KROM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6b1c477b4c67958915b194ae8b007bf078dadb81",
		"Uniswap V3 Pool: ⚗️ - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6c4ab1907805adcb0b7ae911a5d1b0b99d608b3c",
		"Uniswap V3 Pool: DYDX - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6c6bc977e13df9b0de53b251522280bb72383700",
		"Uniswap V3 Pool: DAI - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x6ce6d6d40a4c4088309293b0582372a2e6bb632e",
		"Uniswap V3 Pool: STG - WETH",
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
		"0x6f48eca74b38d2936b02ab603ff4e36a6c0e3a77",
		"Uniswap V3 Pool: DAI - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x70bb8e6844dfb681810fd557dd741bcaf027bf94",
		"Uniswap V3 Pool: OGN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x71c1d309dea75c5a2feea55dbee68aac6768c12e",
		"Uniswap V3 Pool: WETH - OMI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7270233ccae676e776a659affc35219e6fcfbb10",
		"Uniswap V3 Pool: USDC - wCFG",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x735a26a57a0a0069dfabd41595a970faf5e1ee8b",
		"Uniswap V3 Pool: agEUR - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7379e81228514a1d2a6cf7559203998e20598346",
		"Uniswap V3 Pool: WETH - sETH2",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x73a6a761fe483ba19debb8f56ac5bbf14c0cdad1",
		"Uniswap V3 Pool: SUSHI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x75bff91af9878f5ec3fede9b52d51159afc2430a",
		"Uniswap V3 Pool: FUN - DAI",
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
		"0x78194ba1a135a71f7fba71fda7cdd3885872b8ff",
		"Uniswap V3 Pool: WETH - MNW",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7858e59e0c01ea06df3af3d20ac7b0003275d4bf",
		"Uniswap V3 Pool: USDC - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x78ab16803d92f6db77ef6d4e92fe139affab78cf",
		"Uniswap V3 Pool: FREE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x78d4704c65dfd869f7f44d78c3fbbbdb5b412c71",
		"Uniswap V3 Pool: HDRN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7981877bd447de8ff0507ba2bcf9ae6ae510ade3",
		"Uniswap V3 Pool: Nvir - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7a5ae802895d5f90b6edbafc870fd348fba2a3d2",
		"Uniswap V3 Pool: UST - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7b12d855445073987d45ea97b1af3554f05e4ef4",
		"Uniswap V3 Pool: WOOL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7bea39867e4169dbe237d55c8242a8f2fcdcc387",
		"Uniswap V3 Pool: USDC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7e3a3a525d9d265d11d1d1db3cad678746b47d09",
		"Uniswap V3 Pool: GP - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x7ec0b75a98997c927ace6d87958147a105147ea0",
		"Uniswap V3 Pool: YGG - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x80c7770b4399ae22149db17e97f9fc8a10ca5100",
		"Uniswap V3 Pool: LYXe - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x80dbf454431ba9b64f0a8753f72a86afea6ee2f3",
		"Uniswap V3 Pool: QSP - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x813b22032e94667cc0f854cc7241fc5a309c45bc",
		"Uniswap V3 Pool: USDC - LOOKS",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x824664650c789bf01b5bba80473977ca820fb1eb",
		"Uniswap V3 Pool: EJS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x82743c07bf3be4d55876f87bca6cce5f84429bd0",
		"Uniswap V3 Pool: HEX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x82c427adfdf2d245ec51d8046b41c4ee87f0d29c",
		"Uniswap V3 Pool: WETH - oSQTH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x83abecf7204d5afc1bea5df734f085f2535a9976",
		"Uniswap V3 Pool: PEOPLE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x840deeef2f115cf50da625f7368c24af6fe74410",
		"Uniswap V3 Pool: cbETH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x84383fb05f610222430f69727aa638f8fdbf5cc1",
		"Uniswap V3 Pool: MM - USDC",
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
		"0x84ae4aa9581e6b7f50f660c5b6970aef1ed82be8",
		"Uniswap V3 Pool: PPAY - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x85b5a7dc1630f9465d8409e2ac53313b70a71b9c",
		"Uniswap V3 Pool: EFI - USDT",
		"Uniswap V3",
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
		"0x87b1d1b59725209879cc5c5adeb99d8bc9eccf12",
		"Uniswap V3 Pool: CRO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x88977729330e55aa7111fec4967d8a561ac7c741",
		"Uniswap V3 Pool: OCC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640",
		"Uniswap V3 Pool: USDC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8ad599c3a0ff1de082011efddc58f1908eb6e6d8",
		"Uniswap V3 Pool: USDC - WETH",
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
		"0x8c13148228765ba9e84eaf940b0416a5e349a5e7",
		"Uniswap V3 Pool: INDEX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8c54aa2a32a779e6f6fbea568ad85a19e0109c26",
		"Uniswap V3 Pool: FEI - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8d132e304d697dbec65fc41fdab9cf6404e0dd1c",
		"Uniswap V3 Pool: WETH - HOP",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8db1b906d47dfc1d84a87fc49bd0522e285b98b9",
		"Uniswap V3 Pool: agEUR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8debdc55ae250b4334f96dfdfe04e76652658c7a",
		"Uniswap V3 Pool: QRDO - WETH",
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
		"0x8ecc2244e67d0bb6a1850b1db825e25354cf881a",
		"Uniswap V3 Pool: AUDIO - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x8f8ef111b67c04eb1641f5ff19ee54cda062f163",
		"Uniswap V3 Pool: WBTC - PAX",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x919fa96e88d67499339577fa202345436bcdaf79",
		"Uniswap V3 Pool: WETH - CRV",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x92560c178ce069cc014138ed3c2f5221ba71f58a",
		"Uniswap V3 Pool: WETH - ENS",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9275e26bfb23b18bebb07bff45e85110f60963e9",
		"Uniswap V3 Pool: USDT - LYNK",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x92995d179a5528334356cb4dc5c6cbb1c068696c",
		"Uniswap V3 Pool: USDC - UST",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x92c7b5ce4cb0e5483f3365c1449f21578ee9f21a",
		"Uniswap V3 Pool: FRAX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x92f0b57e3814e4bd74ef6a6fd6d825db522ccfe2",
		"Uniswap V3 Pool: SOUL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x92ffbf968a1fbd766f94dcb495f2b39cc2bca7e3",
		"Uniswap V3 Pool: WETH - CAW",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9359c87b38dd25192c5f2b07b351ac91c90e6ca7",
		"Uniswap V3 Pool: DPI - WETH",
		"Uniswap V3",
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
		"0x9410cf01dcdccdb9b56e285b39cea375e5e90883",
		"Uniswap V3 Pool: XI - WETH",
		"Uniswap V3",
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
		"0x94981f69f7483af3ae218cbfe65233cc3c60d93a",
		"Uniswap V3 Pool: RBN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x94b4ba66da4faa4fe09e17c0a8810d2afee70163",
		"Uniswap V3 Pool: FNK - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x94e4b2e24523cf9b3e631a6943c346df9687c723",
		"Uniswap V3 Pool: SHIB - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x959c7d5706ac0b5a29f506a1019ba7f2a1c70c70",
		"Uniswap V3 Pool: SHI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x96b0837489d046a4f5aa9ac2fc9e086bd14bac1e",
		"Uniswap V3 Pool: RND - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x97a5a0b2d7ed3accb7fd6404a1f5ca29320905af",
		"Uniswap V3 Pool: TORN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x97e7d56a0408570ba1a7852de36350f7713906ec",
		"Uniswap V3 Pool: DAI - FRAX",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x98409d8ca9629fbe01ab1b914ebf304175e384c8",
		"Uniswap V3 Pool: WETH - VRA",
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
		"0x99c7550be72f05ec31c446cd536f8a29c89fdb77",
		"Uniswap V3 Pool: MATIC - WETH",
		"Uniswap V3",
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
		"0x9bd730ddcfe6b5b9ecba1cf66e153adaa807e238",
		"Uniswap V3 Pool: GRPFT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9d2713fa2f387ed1284a4176e7841253b4da2a71",
		"Uniswap V3 Pool: FTX Token - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9d77a98501902047612030e114b61b0252b27985",
		"Uniswap V3 Pool: WETH - VOLT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9db9e0e53058c89e5b94e29621a205198648425b",
		"Uniswap V3 Pool: WBTC - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9e0905249ceefffb9605e034b534544684a58be6",
		"Uniswap V3 Pool: HEX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9e588733b77abd51879f391fce7beb6a1de7bdbd",
		"Uniswap V3 Pool: WETH - RAINI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9ee5f9bf3c2619a443d1cc228aa67b6a9776f961",
		"Uniswap V3 Pool: Nvir - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0x9febc984504356225405e26833608b17719c82ae",
		"Uniswap V3 Pool: 1INCH - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa08d8ddf045f583e2cb3ef2ea99900ed60897d0b",
		"Uniswap V3 Pool: WETH - SDAX",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa20ad630cee74bc834aa9b8fcb432c5c02710479",
		"Uniswap V3 Pool: REVV - WETH",
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
		"0xa2ff3d4ffaf8c67cfc71a19ea437bcc2a9893d16",
		"Uniswap V3 Pool: TKING - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa3f558aebaecaf0e11ca4b2199cc5ed341edfd74",
		"Uniswap V3 Pool: LDO - WETH",
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
		"0xa4e0faa58465a2d369aa21b3e42d43374c6f9613",
		"Uniswap V3 Pool: rETH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa6cc3c2531fdaa6ae1a3ca84c2855806728693e8",
		"Uniswap V3 Pool: LINK - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa7f72a1ec0ab189998a3eec8b886e6360aff39da",
		"Uniswap V3 Pool: sILV - WETH",
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
		"0xa9c5b677f0ed59d39d3f441dcb5daf0d6e276b5b",
		"Uniswap V3 Pool: TOWN - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaaaa50ab9c0eb7ca6e797cfe05d9805d61687e10",
		"Uniswap V3 Pool: AAA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaae63df9a86f9a682507c922db38fae5e777a606",
		"Uniswap V3 Pool: USDC - SWEAT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xac4b3dacb91461209ae9d41ec517c2b9cb1b7daf",
		"Uniswap V3 Pool: APE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xad6d2f2cb7bf2c55c7493fd650d3a66a4c72c483",
		"Uniswap V3 Pool: PAPER - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xae614a7a56cb79c04df2aeba6f5dab80a39ca78e",
		"Uniswap V3 Pool: BAT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xae91b3bc45379290d9e8ff8a633f34ad3101086b",
		"Uniswap V3 Pool: WETH - NFD",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xaff1025438da93bd86427f2f9f7d06088f720a8d",
		"Uniswap V3 Pool: CELR - WETH",
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
		"0xb03f87e577c4fe4685cf2c88a8473414bb1d04f1",
		"Uniswap V3 Pool: FX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb06e7ed37cfa8f0f2888355dd1913e45412798c5",
		"Uniswap V3 Pool: USDC - GRT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb07fe2f407f971125d4eb1977f8acee8846c7324",
		"Uniswap V3 Pool: APE - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb0f4a77bde7fee134265307c5cc19abff0ba409b",
		"Uniswap V3 Pool: CHZ - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb11d15da84a206670beba4e8172c69e653516e80",
		"Uniswap V3 Pool: FLOKI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb1608e16609a7ff3ac5b0da49a0539bb0c3c3d9d",
		"Uniswap V3 Pool: EWTB - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb1914469141ebb6e244e75cee3f35d43bf6b85e5",
		"Uniswap V3 Pool: TRAC - WETH",
		"Uniswap V3",
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
		"0xb32fcfff9616deec20dd44d664f490dee7fe2c7a",
		"Uniswap V3 Pool: PANDA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb404057ee4b1d7359ca5a57ac1c020b74c23e56b",
		"Uniswap V3 Pool: FTX Token - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb82d251b7e92832dccb7f3c6f03ae20f2d7ee597",
		"Uniswap V3 Pool: SOS - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb8c05b7ca698f7cfd9b8a08f177e0ac5f2696bf9",
		"Uniswap V3 Pool: erowan - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb9c4a5522a2f8ba9e2ff7063df8c02ed443337a3",
		"Uniswap V3 Pool: WETH - ENS",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xba8080b0b09181e09bca0612b22b9475d8171055",
		"Uniswap V3 Pool: WBNB - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xba8eb224b656681b2b8cce9c3fc920d98594675b",
		"Uniswap V3 Pool: RSR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbaec0e18c770993ffb1175fef493b5113cc6e32d",
		"Uniswap V3 Pool: ILV - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbb2e5c2ff298fd96e166f90c8abacaf714df14f8",
		"Uniswap V3 Pool: DAI - FEI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbc9b75563e8df1dc761589444103342ec582cc29",
		"Uniswap V3 Pool: FORTH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc00c5977395664267c118d71569dccf4bc37bf5f",
		"Uniswap V3 Pool: BGLD - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc0793782d11dd9bf7b3a7a5a74614f1debe1da2e",
		"Uniswap V3 Pool: POW - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc0fbed3cbbf272e0649ddfefdec99f4eba7eca22",
		"Uniswap V3 Pool: WETH - CAW",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc246467ab1466f4963ba45c335479b3055e82060",
		"Uniswap V3 Pool: LEASH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc29271e3a68a7647fd1399298ef18feca3879f59",
		"Uniswap V3 Pool: WETH - WTON",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc2a856c3aff2110c1171b8f942256d40e980c726",
		"Uniswap V3 Pool: FRAX - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc2e9f25be6257c210d7adf0d4cd6e3e881ba25f8",
		"Uniswap V3 Pool: DAI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc3f6b81fb9e6db259272026601689e383f94c0b0",
		"Uniswap V3 Pool: OVR - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc4d9c69962ddb2388e1532279704fc6eb199c963",
		"Uniswap V3 Pool: CSWAP - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc5af84701f98fa483ece78af83f11b6c38aca71d",
		"Uniswap V3 Pool: WETH - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc63b0708e2f7e69cb8a1df0e1389a98c35a76d52",
		"Uniswap V3 Pool: FRAX - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcb0c5d9d92f4f2f80cce7aa271a1e148c226e19d",
		"Uniswap V3 Pool: RAI - DAI",
		"Uniswap V3",
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
		"0xcbcdf9626bc03e24f779434178a73a0b4bad62ed",
		"Uniswap V3 Pool: WBTC - WETH",
		"Uniswap V3",
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
		"0xcd9dab5e666de980cecdc180cb31f296733e2587",
		"Uniswap V3 Pool: AKITA - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xcf7e21b96a7dae8e1663b5a266fd812cbe973e70",
		"Uniswap V3 Pool: gOHM - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd017617f6f0fd22796e137a8240cc38f52a147b2",
		"Uniswap V3 Pool: WETH - GTC",
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
		"0xd0af1981f52146a6939385451daea0726e13a484",
		"Uniswap V3 Pool: XYO - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd0fc8ba7e267f2bc56044a7715a489d851dc6d78",
		"Uniswap V3 Pool: UNI - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd124c5808a0d89738e0aef655c0aa19ec6175811",
		"Uniswap V3 Pool: WETH - SLP",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd1d5a4c0ea98971894772dcd6d2f1dc71083c44e",
		"Uniswap V3 Pool: LQTY - WETH",
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
		"0xd34e4855146ac0c6d0e4a652bd5fb54830f91ba8",
		"Uniswap V3 Pool: STRONG - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd35efae4097d005720608eaf37e42a5936c94b44",
		"Uniswap V3 Pool: 1INCH - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd5ad5ec825cac700d7deafe3102dc2b6da6d195d",
		"Uniswap V3 Pool: BUSD - USDT",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd6a309f49cf79542cea91df7b334eb4bd29aa0d7",
		"Uniswap V3 Pool: USDC - STG",
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
		"0xd83d78108dd0d1dffff11ea3f99871671a52488b",
		"Uniswap V3 Pool: PAX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd8de6af55f618a7bc69835d55ddc6582220c36c0",
		"Uniswap V3 Pool: DYDX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xd94fdb60194fefa7ef8b416f8ba99278ab3e00dc",
		"Uniswap V3 Pool: DINU - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdc2c21f1b54ddaf39e944689a8f90cb844135cc9",
		"Uniswap V3 Pool: BAL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdd005650ac6805457f4fa6ee1816813ce815e914",
		"Uniswap V3 Pool: USDC - NCR",
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
		"0xdf50fbde8180c8785842c8e316ebe06f542d3443",
		"Uniswap V3 Pool: FEI - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xdf9ab3c649005ebfdf682d2302ca1f673e0d37a2",
		"Uniswap V3 Pool: WETH - BTRFLY",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe0554a476a092703abdb3ef35c80e0d76d32939f",
		"Uniswap V3 Pool: USDC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe05e653453f733786f2dabae0ffa1e96cfcc4b25",
		"Uniswap V3 Pool: HEX - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe0cfa17aa9b8f930fd936633c0252d5cb745c2c3",
		"Uniswap V3 Pool: DYDX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe11ee9c18d03b43d6a7fc53e51aedda8451e837a",
		"Uniswap V3 Pool: WETH - PLU",
		"Uniswap V3",
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
		"0xe1d92f1de49caec73514f696fea2a7d5441498e5",
		"Uniswap V3 Pool: LRC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe297c3f3f0190b8341dd543d2d552248207af23a",
		"Uniswap V3 Pool: GAS - WETH",
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
		"0xe3a4f7959f4e4aac08ae3029d3a707ef4ec6da95",
		"Uniswap V3 Pool: TOWER - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe3fe800b0de664bf0bca8ad58ecbc73b259047b0",
		"Uniswap V3 Pool: POWR - WETH",
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
		"0xe744f5e2edfdcb9fdb43b288ecb8b21c8487e888",
		"Uniswap V3 Pool: WETH - DOGEGF",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe859041c9c6d70177f83de991b9d757e13cea26e",
		"Uniswap V3 Pool: HDRN - USDC",
		"Uniswap V3",
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
		"0xe931b03260b2854e77e8da8378a1bc017b13cb97",
		"Uniswap V3 Pool: 1INCH - WETH",
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
		"0xe9e12db15d8a0ec338f148ffd9dc9606312a6b28",
		"Uniswap V3 Pool: MC - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xea4ba4ce14fdd287f380b55419b1c5b6c3f22ab6",
		"Uniswap V3 Pool: COMP - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xeb5c52e8af57334fab0b5f3d888990c108545527",
		"Uniswap V3 Pool: WETH - WRLD",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xede8dd046586d22625ae7ff2708f879ef7bdb8cf",
		"Uniswap V3 Pool: SNX - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xef9a9283440b2d7efb9c7dcc17e94e234d5ccccd",
		"Uniswap V3 Pool: sILV2 - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xefbd546647fda46067225bd0221e08ba91071584",
		"Uniswap V3 Pool: RVP - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xefc73f21bb4645ea4cb1f1b5a674985c590c4070",
		"Uniswap V3 Pool: XFT - WETH",
		"Uniswap V3",
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
		"0xf359492d26764481002ed88bd2acae83ca50b5c9",
		"Uniswap V3 Pool: TEL - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf4ad61db72f114be877e87d62dc5e7bd52df4d9b",
		"Uniswap V3 Pool: LDO - WETH",
		"Uniswap V3",
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
		"0xf6a42a1963b34ad95bc82c8afe1cadf27b0abf2d",
		"Uniswap V3 Pool: WETH - ETHM",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf6e21e21cb48e1ab575c58d526110f736cd33066",
		"Uniswap V3 Pool: PLSD - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf745b36540a1606f69630da6c6bd9930351b0c68",
		"Uniswap V3 Pool: HDRN - WETH",
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
		"0xf79fc43494ce8a4613cb0b2a67a1b1207fd05d27",
		"Uniswap V3 Pool: APE - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf87bb87fd9ea1c260ddf77b9c707ad9437ff8364",
		"Uniswap V3 Pool: WETH - TRIBE",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf8a95b2409c27678a6d18d950c5d913d5c38ab03",
		"Uniswap V3 Pool: GALA - WETH",
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
		"0xfaa318479b7755b2dbfdd34dc306cb28b420ad12",
		"Uniswap V3 Pool: UNI - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfaace66bd25abff62718abd6db97560e414ec074",
		"Uniswap V3 Pool: WETH - RARI",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfad57d2039c21811c8f2b5d5b65308aa99d31559",
		"Uniswap V3 Pool: LINK - USDC",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfc9f572124d8f469960b94537b493f2676776c03",
		"Uniswap V3 Pool: PILOT - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfca9090d2c91e11cc546b0d7e4918c79e0088194",
		"Uniswap V3 Pool: XSGD - WETH",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfd76be67fff3bac84e3d5444167bbc018f5968b6",
		"Uniswap V3 Pool: WETH - IMX",
		"Uniswap V3",
		"images/contracts/uniswap.svg"
	],
	[
		"0xfe7aff6f4f1b0d9f65767e96573e6df8b1ff5920",
		"Uniswap V3 Pool: JUSTICE - WETH",
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
		"0x1f98431c8ad98523631ae4a59f267346ea31f984",
		"Uniswap V3 Factory",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5ba1e12693dc8f9c48aad8770482f4739beed696",
		"Uniswap Multicall2",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb753548f6e010e7e680ba186f9ca1bdab2e90cf2",
		"Uniswap ProxyAdmin",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0xbfd8137f7d1516d3ea5ca83523914859ec47f573",
		"Uniswap TickLens",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0xb27308f9f90d607463bb33ea1bebb41c27ce5ab6",
		"Uniswap Quoter",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe592427a0aece92de3edee1f18e0157c05861564",
		"Uniswap Swap Router",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45",
		"Uniswap Swap Router 02 (1.1.0)",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0x42b24a95702b9986e82d421cc3568932790a48ec",
		"Uniswap NFTDescriptor",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0x91ae842a5ffd8d12023116943e72a606179294f3",
		"Uniswap NonfungibleTokenPositionDescriptor",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0xee6a57ec80ea46401049e92587e52f5ec1c24785",
		"Uniswap TransparentUpgradeableProxy",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0xc36442b4a4522e871399cd717abdd847ab11fe88",
		"Uniswap NonfungiblePositionManager",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0xa5644e29708357803b5a882d272c41cc0df92b34",
		"Uniswap V3 Migrator",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0xe34139463ba50bd61336e0c446bd8c0867c6fe65",
		"Uniswap Uniswap V3 Staker (1.0.2)",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0x5c69bee701ef814a2b6a3edd4b1652cb9cc5aa6f",
		"Uniswap V2 Factory",
		"Uniswap",
		"images/contracts/uniswap.svg"
	],
	[
		"0xf164fc0ec4e93095b804a4795bbe1e041497b92a",
		"Uniswap V2 Router 01",
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
		"0x00000000219ab540356cbb839cbe05303d7705fa",
		"Beacon Deposit Contract",
		"ETH2"
	],
	[
		"0x8315177ab297ba92a06054ce80a67ed4dbd7ed3a",
		"Arbitrum: Bridge",
		"Arbitrum"
	],
	[
		"0xdc24316b9ae028f1497c275eb9192a3ea0f67022",
		"Lido: Curve Liquidity Farming Pool",
		"Lido"
	],
	[
		"0x8484ef722627bf18ca5ae6bcf031c23e6e922b30",
		"Polygon/Matic: Ether Bridge",
		"Matic"
	],
	[
		"0x8de9c5a032463c561423387a9648c5c7bcc5bc90",
		"OpenSea: Fees",
		"OpenSea"
	],
	[
		"0x34ba0f2379bf9b81d09f7259892e26a8b0885095",
		"OpenSea: Fees 2",
		"OpenSea"
	],
	[
		"0x0000a26b00c1f0df003000390027140000faa719",
		"OpenSea: Fees 3",
		"OpenSea"
	],
	[
		"0x18c2e87d183c5338a9142f97db176f3832b1d6de",
		"OpenSea: Payments",
		"OpenSea"
	],
	[
		"0xa5409ec958c83c3f309868babaca7c86dcb077c1",
		"OpenSea: Registry",
		"OpenSea"
	],
	[
		"0x9b814233894cd227f561b78cc65891aa55c62ad2",
		"OpenSea: Royalties Distributor",
		"OpenSea"
	],
	[
		"0x5b3256965e7c3cf26e11fcaf296dfc8807c01073",
		"OpenSea: Wallet",
		"OpenSea"
	],
	[
		"0x7be8076f4ea4a4ad08075c2508e481d6c946d12b",
		"OpenSea: Wyvern Exchange v1",
		"OpenSea"
	],
	[
		"0x7f268357a8c2552623316e2562d90e642bb538e5",
		"OpenSea: Wyvern Exchange v2",
		"OpenSea"
	],
	[
		"0xdffe798c7172dd6deb32baee68af322e8f495ce0",
		"0x: Asset Proxy Owner",
		"0x"
	],
	[
		"0x38a795580d0f687e399913a00ddef6a17612c722",
		"0x: Coordinator",
		"0x"
	],
	[
		"0x45797531b873fd5e519477a070a955764c1a5b07",
		"0x: Coordinator Registry",
		"0x"
	],
	[
		"0xccc2431a7335f21d9268ba62f0b32b0f2efc463f",
		"0x: Dev Utils",
		"0x"
	],
	[
		"0x7eefbd48fd63d441ec7435d024ec7c5131019add",
		"0x: ERC1155 Proxy",
		"0x"
	],
	[
		"0x8ed95d1746bf1e4dab58d8ed4724f1ef95b20db0",
		"0x: Erc20 Bridge Proxy",
		"0x"
	],
	[
		"0x95e6f48254609a6ee006f7d493c8e5fb97094cef",
		"0x: ERC20 Proxy",
		"0x"
	],
	[
		"0xefc70a1b18c432bdc64b596838b4d138f6bc6cad",
		"0x: ERC721 Proxy",
		"0x"
	],
	[
		"0x0ac2d6f5f5afc669d3ca38f830dad2b4f238ad3f",
		"0x: Eth2Dai Bridge",
		"0x"
	],
	[
		"0xdef1c0ded9bec7f1a1670819833240f027b25eff",
		"0x: Exchange Proxy",
		"0x"
	],
	[
		"0xf740b67da229f2f10bcbd38a7979992fcc71b8eb",
		"0x: Exchange Proxy Allowance Target",
		"0x"
	],
	[
		"0x080bf510fcbf18b91105470639e9561022937712",
		"0x: Exchange v2.1",
		"0x"
	],
	[
		"0x61935cbdd02287b511119ddb11aeb42f1593b7ef",
		"0x: Exchange v3",
		"0x"
	],
	[
		"0x206376e8940e42538781cd94ef024df3c1e0fd43",
		"0x: Ext Dev Pool",
		"0x"
	],
	[
		"0xa3ac9844514b96bb502627ca9dceb57c4be289e3",
		"0x: Forwarder 2",
		"0x"
	],
	[
		"0x7d3455421bbc5ed534a83c88fd80387dc8271392",
		"0x: Governor",
		"0x"
	],
	[
		"0xef701d5389ae74503d633396c4d654eabedc9d78",
		"0x: Multi Asset Proxy",
		"0x"
	],
	[
		"0xa09329c6003c9a5402102e226417738ee22cf1f2",
		"0x: Order Validator",
		"0x"
	],
	[
		"0x2a17c35ff147b32f13f19f2e311446eeb02503f3",
		"0x: Staking",
		"0x"
	],
	[
		"0xa26e80e7dea86279c6d778d702cc413e6cffa777",
		"0x: Staking Proxy",
		"0x"
	],
	[
		"0x3517b88c19508c08650616019062b898ab65ed29",
		"0x: Static Call Proxy",
		"0x"
	],
	[
		"0x926a74c5c36adf004c87399e65f75628b0f98d2c",
		"0x: Token Registry",
		"0x"
	],
	[
		"0x8da0d80f5007ef1e431dd2127178d224e32c2ef4",
		"0x: Token Transfer Proxy",
		"0x"
	],
	[
		"0xa6baaed2053058a3c8f11e0c7a9716304454b09e",
		"0x: Uniswap Bridge",
		"0x"
	],
	[
		"0x4422610f73f4143a3936f8fa300329bba8833b54",
		"Zapper.Fi Uniswap V2 Zap Out",
		"Zapper"
	],
	[
		"0x647965b19280988a75c3a1369938c8927e6c8715",
		"Zapper.Fi: Balancer Zap In",
		"Zapper"
	],
	[
		"0x03e86d24c462fa6ad88568053361186e4a5af68e",
		"Zapper.Fi: Balancer Zap in ETH or ERC20",
		"Zapper"
	],
	[
		"0xa2acfaaaa01c4999385104787c1f24a9cf95b725",
		"Zapper.Fi: Balancer Zap in V2.5",
		"Zapper"
	],
	[
		"0x52fc6455f258760705e70f70160b06619bfe0adb",
		"Zapper.Fi: cDAI Unipool",
		"Zapper"
	],
	[
		"0xd17cda470bd0237fae82ef254c84d06d0e4cc02f",
		"Zapper.Fi: CHAI Unipool",
		"Zapper"
	],
	[
		"0xe5e8506a590766d738d80affc6b5e538c4b92f82",
		"Zapper.Fi: Compound Zap",
		"Zapper"
	],
	[
		"0x83c32bf929f80e404ff30ede7333271460b13cd9",
		"Zapper.Fi: Curve - Curve Pool Pipe",
		"Zapper"
	],
	[
		"0x456974df1042ba7a46fd49512a8778ac3b840a21",
		"Zapper.Fi: Curve Zap in",
		"Zapper"
	],
	[
		"0x7a0a6906de7714d27413f5092ed1a0636a3fbc9a",
		"Zapper.Fi: Curve Zap In 2",
		"Zapper"
	],
	[
		"0xadcd4fde447c10df243c01828a6298958e69a3f6",
		"Zapper.Fi: Curve Zap in ETH or ERC20",
		"Zapper"
	],
	[
		"0x983dd5dc5a99ec27bb850b865ca99407b38722bf",
		"Zapper.Fi: Curve Zap Out",
		"Zapper"
	],
	[
		"0xe03a338d5c305613afc3877389dd3b0617233387",
		"Zapper.Fi: Curve Zap Out 2",
		"Zapper"
	],
	[
		"0x8dfcb49766c0296e4373a0300b52c3637614db59",
		"Zapper.Fi: DAI LLP 100% ETH",
		"Zapper"
	],
	[
		"0x929a10efda7099865dad8286aee8715078902d51",
		"Zapper.Fi: DAI Unipool",
		"Zapper"
	],
	[
		"0x1ee8c303f5ab9b36bc30b9345dec7e9a748fa693",
		"Zapper.Fi: Double Bull",
		"Zapper"
	],
	[
		"0xf0cd9981f15695324763a06869d1c1dd90073c2a",
		"Zapper.Fi: ERC20 Inputs",
		"Zapper"
	],
	[
		"0x04b35ef193e2357328ae79914569721a7ffd6146",
		"Zapper.Fi: ETH Bull",
		"Zapper"
	],
	[
		"0xe34b087bf3c99e664316a15b01e5295eb3512760",
		"Zapper.Fi: Ethereum to Polygon Bridge",
		"Zapper"
	],
	[
		"0x97402249515994cc0d22092d3375033ad0ea438a",
		"Zapper.Fi: General UniPool",
		"Zapper"
	],
	[
		"0x98e562a87c5243eef333e43cb1834223f526c434",
		"Zapper.Fi: Harvest Zap In",
		"Zapper"
	],
	[
		"0xebd5e23927891fbfda10487ccc9a1a1a7b9a4210",
		"Zapper.Fi: Lender",
		"Zapper"
	],
	[
		"0x20ef0c900f8e7ec3a1a89a761f0670ae9e3dd709",
		"Zapper.Fi: LINK LLP 100% ETH",
		"Zapper"
	],
	[
		"0x408609f5acab253d41cb5dfce913ff367937313b",
		"Zapper.Fi: LINK LLP 100% LINK",
		"Zapper"
	],
	[
		"0x8e8b9cf6d411b6c8dacc63c306f2691ed195d91d",
		"Zapper.Fi: LINK Unipool",
		"Zapper"
	],
	[
		"0x13240b97c40d7e306cedf3adc9cb057cec74c361",
		"Zapper.Fi: MKR Unipool",
		"Zapper"
	],
	[
		"0x3b122c376e472ae6ae7a4739bebf7b68e045b285",
		"Zapper.Fi: Moderate Bull",
		"Zapper"
	],
	[
		"0x7f1cd65679d73eb98fcebe8b61c13d3d68605717",
		"Zapper.Fi: Multi-Pool",
		"Zapper"
	],
	[
		"0xe80a9a878c4bed81f3803de10beff08ca8cd8c61",
		"Zapper.Fi: Mushrooms Zap In",
		"Zapper"
	],
	[
		"0x4752b3bf9dabd61fe8150760ec580b183d9fda57",
		"Zapper.Fi: PoolTogether Zap In",
		"Zapper"
	],
	[
		"0xd3eba712988df0f8a7e5073719a40ce4cbf60b33",
		"Zapper.Fi: sETH Unipool",
		"Zapper"
	],
	[
		"0xe3385df5b47687405a02fc24322dedb7df381852",
		"Zapper.Fi: SNX Unipool",
		"Zapper"
	],
	[
		"0xecb53d65816444dbbf6a326b8df959caeda3faf9",
		"Zapper.Fi: Super Saver",
		"Zapper"
	],
	[
		"0xc4ec123cd61d8ca3ea1ee413d5cb0a95de6d34cd",
		"Zapper.Fi: sUSD Curve Pool",
		"Zapper"
	],
	[
		"0x3098cfaaba3795ab98dc2d5066ec4d2584ae7c68",
		"Zapper.Fi: Sushiswap Zap Out",
		"Zapper"
	],
	[
		"0x606563f8dc27f316b77f22d14d9cd025b4f70469",
		"Zapper.Fi: UniPool General",
		"Zapper"
	],
	[
		"0x4316e3ad83ca2cf0ea5e3b25e3de2fa7f93cfe9c",
		"Zapper.Fi: Unipool UnZap",
		"Zapper"
	],
	[
		"0x4f026054b9c934d92cd2db344ea1ae193a22067d",
		"Zapper.Fi: Uniswap ERC20 Zap Ins V2",
		"Zapper"
	],
	[
		"0x66895417881b1d77ca71bd9e5ba1e729f3aa44d3",
		"Zapper.Fi: Uniswap V1 - Curve Pool Pipe",
		"Zapper"
	],
	[
		"0xaeccd58001d52b4b931fd6fd5bf87d4f911100b7",
		"Zapper.Fi: Uniswap V1 - Uniswap V1 Pool Pipe",
		"Zapper"
	],
	[
		"0x6d313883c6db5ea58bdd5546f403f1fe27e92690",
		"Zapper.Fi: Uniswap V1 - Uniswap V2 Pipe",
		"Zapper"
	],
	[
		"0x80c5e6908368cb9db503ba968d7ec5a565bfb389",
		"Zapper.Fi: Uniswap V2 Zap In",
		"Zapper"
	],
	[
		"0x6d9893fa101cd2b1f8d1a12de3189ff7b80fdc10",
		"Zapper.Fi: Uniswap V2 Zap In 2",
		"Zapper"
	],
	[
		"0x343e3a490c9251dc0eaa81da146ba6abe6c78b2d",
		"Zapper.Fi: Uniswap Zap Out V2",
		"Zapper"
	],
	[
		"0x21091c5ea13854ab0965090dc4fc20280f1a5730",
		"Zapper.Fi: wBTC LLP 100% ETH",
		"Zapper"
	],
	[
		"0xe4b7b00a802834bea733f06a0a24a869f2765df7",
		"Zapper.Fi: wBTC LLP 100% wBTC",
		"Zapper"
	],
	[
		"0x4ebee4cf5ba7de81f222fefa4e5d0c30c4968fff",
		"Zapper.Fi: wBTC Unipool",
		"Zapper"
	],
	[
		"0x92be6adb6a12da0ca607f9d87db2f9978cd6ec3e",
		"Zapper.Fi: Yearn yVault Zap In",
		"Zapper"
	],
	[
		"0xd6b88257e91e4e4d4e990b3a858c849ef2dfde8c",
		"Zapper.Fi: Yearn yVault Zap Out",
		"Zapper"
	],
	[
		"0x9c57618bfcdfae4ce8e49226ca22a7837de64a2d",
		"Zapper.Fi: yVault V1 Zap In/Out",
		"Zapper"
	],
	[
		"0x2fba0b21a553f0f268293be7abb07a54fffd2b02",
		"Zapper.Fi: Zap Out V2",
		"Zapper"
	],
	[
		"0xfaff15c6cdaca61a4f87d329689293e07c98f578",
		"Zapper.Fi: Zapper NFT",
		"Zapper"
	],
	[
		"0x311bb771e4f8952e6da169b425e7e92d6ac45756",
		"Aave: Lending Pool Configurator V2",
		"Aave",
		"images/contracts/aave.png"
	],
	[
		"0xb53c1a33016b2dc2ff3653530bff1848a515c8c5",
		"Aave: Lending Pool Provider V2",
		"Aave",
		"images/contracts/aave.png"
	],
	[
		"0x52d306e36e3b6b02c153d0266ff0f85d18bcd413",
		"Aave: Lending Pool Registry V2",
		"Aave",
		"images/contracts/aave.png"
	],
	[
		"0x7d2768de32b0b80b7a3454c06bdac94a69ddc7a9",
		"Aave: Lending Pool V2",
		"Aave",
		"images/contracts/aave.png"
	],
	[
		"0x8a32f49ffba88aba6eff96f45d8bd1d4b3f35c7d",
		"Aave: Lending Rate Oracle V2",
		"Aave",
		"images/contracts/aave.png"
	],
	[
		"0xb9062896ec3a615a4e4444df183f0531a77218ae",
		"Aave: Pool Admin V2",
		"Aave",
		"images/contracts/aave.png"
	],
	[
		"0xa50ba011c48153de246e5192c8f9258a2ba79ca9",
		"Aave: Price Oracle V2",
		"Aave",
		"images/contracts/aave.png"
	],
	[
		"0x057835ad21a177dbdd3090bb1cae03eacf78fc6d",
		"Aave: Protocol Data Provider V2",
		"Aave",
		"images/contracts/aave.png"
	],
	[
		"0xdcd33426ba191383f1c9b431a342498fdac73488",
		"Aave: WETHGateway V2",
		"Aave",
		"images/contracts/aave.png"
	],
	[
		"0xf7dba49d571745d9d7fcb56225b05bea803ebf3c",
		"Aave: Aave Variable Debt V2",
		"Aave",
		"images/contracts/aave.png"
	],
	[
		"0xe3a3de71b827cb73663a24cdb6243ba7f986cc3b",
		"Aave: Interest Rate Strategy V2",
		"Aave",
		"images/contracts/aave.png"
	]
] as const