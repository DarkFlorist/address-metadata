
export type Address = `0x${string}`
export type Name = string
export type Symbol = string
export type NftType = 'ERC721' | 'ERC1155' | 'CRYPTOPUNKS'
export type LogoRelativePath = `/images/nfts/${string}`
export type NftMetadataWithLogo = readonly [Address, Name, Symbol, NftType, LogoRelativePath]
export type NftMetadataWithoutLogo = readonly [Address, Name, Symbol, NftType]

export type NftMetadataData = readonly (NftMetadataWithLogo | NftMetadataWithoutLogo)[]

export const nftMetadataData: NftMetadataData = [
	[
		"0x000000be320d58eabb01d14b6755b0403a93ab7d",
		"YuGiOhCard0",
		"YGO",
		"ERC721",
		"/images/nfts/0x000000be320d58eabb01d14b6755b0403a93ab7d.png"
	],
	[
		"0x012116441fe8a8d71ae1043735f6d8e52377e7ec",
		"Degen Park Official0",
		"DGNPRK",
		"ERC721",
		"/images/nfts/0x012116441fe8a8d71ae1043735f6d8e52377e7ec.png"
	],
	[
		"0x024bba6cb351288487b7f93e6d76e07f6dcbe296",
		"Sedimentary Geologico Dissolution by Landlines Art0",
		"GEO",
		"ERC721",
		"/images/nfts/0x024bba6cb351288487b7f93e6d76e07f6dcbe296.png"
	],
	[
		"0x06012c8cf97bead5deae237070f9587f8e7a266d",
		"CryptoKitties0",
		"CKITTY",
		"ERC721",
		"/images/nfts/0x06012c8cf97bead5deae237070f9587f8e7a266d.png"
	],
	[
		"0x062e691c2054de82f28008a8ccc6d7a1c8ce060d",
		"Pudgy Rods0",
		"PP",
		"ERC721",
		"/images/nfts/0x062e691c2054de82f28008a8ccc6d7a1c8ce060d.png"
	],
	[
		"0x076e2f3aa749470f43f3d6beac4a4d4a9be5c130",
		"X Pacman NFT0",
		"X Pacman NFT",
		"ERC1155",
		"/images/nfts/0x076e2f3aa749470f43f3d6beac4a4d4a9be5c130.png"
	],
	[
		"0x07ed0d72800d412fea8cc23675098ce11550b089",
		"CryptoPunks Darkmode0",
		"CPDM",
		"ERC721",
		"/images/nfts/0x07ed0d72800d412fea8cc23675098ce11550b089.png"
	],
	[
		"0x08005e68736bb579fca86195befc4baf623a5bea",
		"Bitties by Swause0",
		"BIT",
		"ERC721",
		"/images/nfts/0x08005e68736bb579fca86195befc4baf623a5bea.gif"
	],
	[
		"0x099a16f0414cb0cc0555d5f1f8140166462d39ff",
		"UnStackedToadz0",
		"USTACK",
		"ERC721",
		"/images/nfts/0x099a16f0414cb0cc0555d5f1f8140166462d39ff.png"
	],
	[
		"0x0b0b186841c55d8a09d53db48dc8cab9dbf4dbd6",
		"Satoshibles0",
		"SBLS",
		"ERC721",
		"/images/nfts/0x0b0b186841c55d8a09d53db48dc8cab9dbf4dbd6.webp"
	],
	[
		"0x0b7ec708017ab07780eeafcdf76519d42e68dc2a",
		"EtherPolice Original0",
		"EtherPolice Original",
		"ERC1155",
		"/images/nfts/0x0b7ec708017ab07780eeafcdf76519d42e68dc2a.gif"
	],
	[
		"0x0bd3007c50fcda6be1f94c04f9d7afd10c1bf409",
		"Joy Fellaz0",
		"JF",
		"ERC721",
		"/images/nfts/0x0bd3007c50fcda6be1f94c04f9d7afd10c1bf409.webp"
	],
	[
		"0x0bf3cf7960ad8827c75d821f4b3353af8d4fbca4",
		"poobsnft0",
		"poobsnft",
		"ERC721",
		"/images/nfts/0x0bf3cf7960ad8827c75d821f4b3353af8d4fbca4.png"
	],
	[
		"0x0d5d0e3418ef2d699faefa3ba5f0db2928d4633d",
		"CryptoUnicorn Do0",
		"",
		"ERC1155",
		"/images/nfts/0x0d5d0e3418ef2d699faefa3ba5f0db2928d4633d.png"
	],
	[
		"0x0e1f990d264a9818460dde1b81c0b04d8a88e751",
		"TIMEPieces x Robotos0",
		"",
		"ERC1155",
		"/images/nfts/0x0e1f990d264a9818460dde1b81c0b04d8a88e751.png"
	],
	[
		"0x0fd9db36d10358be4447b3ae41387a395dc18e1d",
		"[void]0",
		"SCAPEXT",
		"ERC721",
		"/images/nfts/0x0fd9db36d10358be4447b3ae41387a395dc18e1d.png"
	],
	[
		"0x10341de1ef918be11118947e92183c03053a409e",
		"0xTribe0",
		"0xTribe",
		"ERC721",
		"/images/nfts/0x10341de1ef918be11118947e92183c03053a409e.png"
	],
	[
		"0x113213f3edd627fbd107a7b003ba19924a24e07d",
		"Ghost Ape Yacht Club OG0",
		"GAYC",
		"ERC721",
		"/images/nfts/0x113213f3edd627fbd107a7b003ba19924a24e07d.gif"
	],
	[
		"0x1146d33d1e5ea2ca26f4b3ac9176d0db4923370c",
		"Monday APE0",
		"MAPE",
		"ERC721",
		"/images/nfts/0x1146d33d1e5ea2ca26f4b3ac9176d0db4923370c.png"
	],
	[
		"0x114cf92d89baa5f4ad8a314b8ff62891735a3d78",
		"Cyber Pantherz V10",
		"CPZV1",
		"ERC721",
		"/images/nfts/0x114cf92d89baa5f4ad8a314b8ff62891735a3d78.png"
	],
	[
		"0x127e479ac59a1ea76afdedf830fecc2909aa4cae",
		"Avarik Saga Universe0",
		"AVARIK",
		"ERC721",
		"/images/nfts/0x127e479ac59a1ea76afdedf830fecc2909aa4cae.png"
	],
	[
		"0x132189d34365e92fe45a461e9f74259fe73176b9",
		"OnChain Buccaneers (OCB)0",
		"OCB",
		"ERC721",
		"/images/nfts/0x132189d34365e92fe45a461e9f74259fe73176b9.png"
	],
	[
		"0x135511599d8d78e4e5d2ed7e224b54d80ff97309",
		"CryptoTrunks POAP0",
		"POAP",
		"ERC721",
		"/images/nfts/0x135511599d8d78e4e5d2ed7e224b54d80ff97309.png"
	],
	[
		"0x15c2b137e59620552bd0d712fe7279cf1f47468d",
		"Glue Factory Show0",
		"GFS",
		"ERC721",
		"/images/nfts/0x15c2b137e59620552bd0d712fe7279cf1f47468d.png"
	],
	[
		"0x15f517fd214f95cb6ac8b02cf3a8796a10c11d26",
		"wwwq10",
		"BPVw",
		"ERC721",
		"/images/nfts/0x15f517fd214f95cb6ac8b02cf3a8796a10c11d26.png"
	],
	[
		"0x16438c0aad6854ae1842a2955d034994f84c674a",
		"Mr. Naughty dreamer0",
		"MRNA",
		"ERC721",
		"/images/nfts/0x16438c0aad6854ae1842a2955d034994f84c674a.png"
	],
	[
		"0x17612f7289bd64b3b5868faa1d093165ce613b4f",
		"0xMechs: Blueprints | MINT LIVE!0",
		"0xMECHBP",
		"ERC721",
		"/images/nfts/0x17612f7289bd64b3b5868faa1d093165ce613b4f.png"
	],
	[
		"0x17a0ae9ec603c95f7b5a86d3ab42c82438db4ca0",
		"Honorary Offshoots0",
		"HOFF",
		"ERC721",
		"/images/nfts/0x17a0ae9ec603c95f7b5a86d3ab42c82438db4ca0.png"
	],
	[
		"0x18cb9db75fa62a9717aa98292b939e579b7c7ccd",
		"Property's NFT0",
		"PP",
		"ERC721",
		"/images/nfts/0x18cb9db75fa62a9717aa98292b939e579b7c7ccd.png"
	],
	[
		"0x18d250c3d31d56bcc2f52baad0d5d8eb8d496c04",
		"Lunar Tiger NFT0",
		"LunarTiger",
		"ERC721",
		"/images/nfts/0x18d250c3d31d56bcc2f52baad0d5d8eb8d496c04.webp"
	],
	[
		"0x1917032c2268e065f612f779f18f57bf9bba6c2e",
		"Tripsters - Ape Collection0",
		"TripRoom",
		"ERC721",
		"/images/nfts/0x1917032c2268e065f612f779f18f57bf9bba6c2e.png"
	],
	[
		"0x1981cc36b59cffdd24b01cc5d698daa75e367e04",
		"Crypto.Chicks0",
		"CCH",
		"ERC721",
		"/images/nfts/0x1981cc36b59cffdd24b01cc5d698daa75e367e04.png"
	],
	[
		"0x19d84b2a4b21910339af097a1bddb48682d6f47d",
		"DASK - Dead Army Skeleton Klub0",
		"DASK",
		"ERC721",
		"/images/nfts/0x19d84b2a4b21910339af097a1bddb48682d6f47d.webp"
	],
	[
		"0x1af830626f0d837a790ef85aaddaaeb28a26f121",
		"Night Moon Birds Victorian Pass Item0",
		"Night Moon Birds Victorian Pass Item",
		"ERC1155",
		"/images/nfts/0x1af830626f0d837a790ef85aaddaaeb28a26f121.png"
	],
	[
		"0x1b61b3c844a8e986ae75448857fac881208a1e5e",
		"OLD Fud Token - Migrated to Polygon0",
		"FUD",
		"ERC1155",
		"/images/nfts/0x1b61b3c844a8e986ae75448857fac881208a1e5e.webp"
	],
	[
		"0x1bad88ff13430b9f888522dcb103cb6b444d1650",
		"The Pride : Genesis0",
		"TPG",
		"ERC721",
		"/images/nfts/0x1bad88ff13430b9f888522dcb103cb6b444d1650.png"
	],
	[
		"0x1c8bf83aefa2ffb66fd9dcb99905df56fc89ef6d",
		"bodegacatceo editions =^-^=0",
		"ceo",
		"ERC721"
	],
	[
		"0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6",
		"CrypToadz by GREMPLIN0",
		"TOADZ",
		"ERC721",
		"/images/nfts/0x1cb1a5e65610aeff2551a50f76a87a7d3fb649c6.webp"
	],
	[
		"0x1cf6c91b65f3c3577643eb5fad570e3f324bdfcd",
		"Pixoods0",
		"",
		"ERC721",
		"/images/nfts/0x1cf6c91b65f3c3577643eb5fad570e3f324bdfcd.png"
	],
	[
		"0x1e038a99aac19162633dcc4d215e5a27e6eb0355",
		"ArcadeNFT - ToadRunnerz0",
		"TDRZ",
		"ERC721",
		"/images/nfts/0x1e038a99aac19162633dcc4d215e5a27e6eb0355.png"
	],
	[
		"0x1e15c05cbad367f044cbfbafda3d9a1510db5513",
		"Crypto SupDucks0",
		"cSUP",
		"ERC721",
		"/images/nfts/0x1e15c05cbad367f044cbfbafda3d9a1510db5513.png"
	],
	[
		"0x1e6d2b2f7799a5be419a7627d94e1cb9714b6b25",
		"Pink Shit APE0",
		"PSA",
		"ERC721",
		"/images/nfts/0x1e6d2b2f7799a5be419a7627d94e1cb9714b6b25.gif"
	],
	[
		"0x1e82490ef9d72c88083ec3bdd4ede9fab6e4a6d2",
		"RASC Honorary Members0",
		"HRASC",
		"ERC721",
		"/images/nfts/0x1e82490ef9d72c88083ec3bdd4ede9fab6e4a6d2.png"
	],
	[
		"0x1f63796fd993c0ade182ec018f60ae6b74e6966c",
		"truePengu0",
		"",
		"ERC1155",
		"/images/nfts/0x1f63796fd993c0ade182ec018f60ae6b74e6966c.png"
	],
	[
		"0x2134011f905a6f3349cf1f1d5f562fd280417469",
		"NFT_PAPI0",
		"PAPI",
		"ERC721",
		"/images/nfts/0x2134011f905a6f3349cf1f1d5f562fd280417469.png"
	],
	[
		"0x21850dcfe24874382b12d05c5b189f5a2acf0e5b",
		"The KILLAZ0",
		"Kz",
		"ERC721",
		"/images/nfts/0x21850dcfe24874382b12d05c5b189f5a2acf0e5b.png"
	],
	[
		"0x21bf3da0cf0f28da27169239102e26d3d46956e5",
		"Monaco Planet Yacht0",
		"MONA",
		"ERC721",
		"/images/nfts/0x21bf3da0cf0f28da27169239102e26d3d46956e5.webp"
	],
	[
		"0x22b19e6d6db2352009c305d946c90937c4c7c693",
		"Infinite Ape Journey Club - IAJC0",
		"IAJC",
		"ERC721",
		"/images/nfts/0x22b19e6d6db2352009c305d946c90937c4c7c693.png"
	],
	[
		"0x22c1f6050e56d2876009903609a2cc3fef83b415",
		"POAP0",
		"The Proof of Attendance Protocol",
		"ERC721",
		"/images/nfts/0x22c1f6050e56d2876009903609a2cc3fef83b415.png"
	],
	[
		"0x24b56813472f519646382d71ff165a6afc1e2149",
		"SMILESSS X SHIESTY-SEASON0",
		"",
		"ERC1155",
		"/images/nfts/0x24b56813472f519646382d71ff165a6afc1e2149.png"
	],
	[
		"0x26baebef64ba69705adff49d3c10bf8ed5fe1573",
		"Guilty Bunnies Official0",
		"GB",
		"ERC721",
		"/images/nfts/0x26baebef64ba69705adff49d3c10bf8ed5fe1573.png"
	],
	[
		"0x28f0521c77923f107e29a5502a5a1152517f9000",
		"Pawn Bots0",
		"BOTS",
		"ERC721",
		"/images/nfts/0x28f0521c77923f107e29a5502a5a1152517f9000.gif"
	],
	[
		"0x2a72f262228b23dbdb5d1ec993b31f15e450902b",
		"Garden Tomb0",
		"GT",
		"ERC721",
		"/images/nfts/0x2a72f262228b23dbdb5d1ec993b31f15e450902b.png"
	],
	[
		"0x2b00ef8f7545dba5b6ac39c0737eeb89a4c9e274",
		"Party Polar Bears0",
		"PartyPolarBears",
		"ERC721",
		"/images/nfts/0x2b00ef8f7545dba5b6ac39c0737eeb89a4c9e274.webp"
	],
	[
		"0x2cac9de879f8c76038649f86ac208ef65ce38035",
		"CryptoUnicorn u0",
		"",
		"ERC1155",
		"/images/nfts/0x2cac9de879f8c76038649f86ac208ef65ce38035.png"
	],
	[
		"0x2d097c1535988216499722df726617a3607b0f08",
		"Bear Market Bears NFT0",
		"BEAR",
		"ERC721",
		"/images/nfts/0x2d097c1535988216499722df726617a3607b0f08.webp"
	],
	[
		"0x2ed3096834b51506ab90d44914e8354bdd334fda",
		"Evolutionz Colorz0",
		"COLORZ",
		"ERC721",
		"/images/nfts/0x2ed3096834b51506ab90d44914e8354bdd334fda.png"
	],
	[
		"0x2fe776dd5fd2388f5ccaefad214989131b3a8d6b",
		"Crypto Noun Punks0",
		"CNP",
		"ERC721",
		"/images/nfts/0x2fe776dd5fd2388f5ccaefad214989131b3a8d6b.png"
	],
	[
		"0x301144b43d8dcba1b3e9f70ed7338d0751d700a3",
		"Wunks0",
		"WUNKSV2",
		"ERC721",
		"/images/nfts/0x301144b43d8dcba1b3e9f70ed7338d0751d700a3.webp"
	],
	[
		"0x30f2de24790a23b1b54094a16225c02f1ea1f81e",
		"Creamy Cows0",
		"MOO",
		"ERC721",
		"/images/nfts/0x30f2de24790a23b1b54094a16225c02f1ea1f81e.png"
	],
	[
		"0x31d4da52c12542ac3d6aadba5ed26a3a563a86dc",
		"Fly Frogs0",
		"FlyFrogs",
		"ERC721",
		"/images/nfts/0x31d4da52c12542ac3d6aadba5ed26a3a563a86dc.png"
	],
	[
		"0x31f3bba9b71cb1d5e96cd62f0ba3958c034b55e9",
		"Party Penguins0",
		"PartyPenguins",
		"ERC721",
		"/images/nfts/0x31f3bba9b71cb1d5e96cd62f0ba3958c034b55e9.webp"
	],
	[
		"0x32a36ed7904a19808aab85887171a190a0014b6a",
		"Gutter Punks - Chromie Squiggles0",
		"GPCS",
		"ERC721",
		"/images/nfts/0x32a36ed7904a19808aab85887171a190a0014b6a.png"
	],
	[
		"0x337104a4f06260ff327d6734c555a0f5d8f863aa",
		"Arcade.xyz Borrower Notes0",
		"aBN",
		"ERC721",
		"/images/nfts/0x337104a4f06260ff327d6734c555a0f5d8f863aa.png"
	],
	[
		"0x33857ad1031122a00a68e6bf9ac4475ba6c6f8be",
		"Candy Robbers0",
		"CANDY",
		"ERC721",
		"/images/nfts/0x33857ad1031122a00a68e6bf9ac4475ba6c6f8be.webp"
	],
	[
		"0x33d3272edbcf2c28db7817efcf49127ccf09172c",
		"ColorPencil X BAYC0",
		"CPBY",
		"ERC721",
		"/images/nfts/0x33d3272edbcf2c28db7817efcf49127ccf09172c.webp"
	],
	[
		"0x35e1402fa69c60851ea8b86f04d823ff41796a51",
		"Zodiac Capsules0",
		"ZODIACCAPSULE",
		"ERC721",
		"/images/nfts/0x35e1402fa69c60851ea8b86f04d823ff41796a51.png"
	],
	[
		"0x3610aba55608edf963971e492a82ba50a14f765b",
		"Fancy Bored Apes V20",
		"FBA",
		"ERC721",
		"/images/nfts/0x3610aba55608edf963971e492a82ba50a14f765b.png"
	],
	[
		"0x372c08cce37726a3ea407683903c094b2d2fffcb",
		"Chad Heads0",
		"CHADS",
		"ERC721",
		"/images/nfts/0x372c08cce37726a3ea407683903c094b2d2fffcb.png"
	],
	[
		"0x3865f35fc73b579880b978e23ce0816c185cbd94",
		"RaceToMoon0",
		"RTM",
		"ERC721",
		"/images/nfts/0x3865f35fc73b579880b978e23ce0816c185cbd94.png"
	],
	[
		"0x39e23bf386df825d52d3e63aa80d59562ce21bde",
		"Digi Penguins Founders Pass0",
		"DPFP",
		"ERC721",
		"/images/nfts/0x39e23bf386df825d52d3e63aa80d59562ce21bde.png"
	],
	[
		"0x3b3ee1931dc30c1957379fac9aba94d1c48a5405",
		"Foundation (FND)0",
		"FNDNFT",
		"ERC721",
		"/images/nfts/0x3b3ee1931dc30c1957379fac9aba94d1c48a5405.png"
	],
	[
		"0x3c9bfa7bf08d4752d2981e509d6389763ce29260",
		"Meta Girlfriends0",
		"MG",
		"ERC721",
		"/images/nfts/0x3c9bfa7bf08d4752d2981e509d6389763ce29260.webp"
	],
	[
		"0x3e217570c202afe7c4fee9bb26bf4ef9784ed7c2",
		"XmasBees Official0",
		"XBEE",
		"ERC721",
		"/images/nfts/0x3e217570c202afe7c4fee9bb26bf4ef9784ed7c2.png"
	],
	[
		"0x3e2803e5d68dfcfacfbc9be836e24d24fca674b8",
		"ELVEN0",
		"ELVN",
		"ERC721",
		"/images/nfts/0x3e2803e5d68dfcfacfbc9be836e24d24fca674b8.png"
	],
	[
		"0x3e694237fb993ea7b4a29e16dd78f0b01df5b699",
		"White-Arts0",
		"GradisArt",
		"ERC1155",
		"/images/nfts/0x3e694237fb993ea7b4a29e16dd78f0b01df5b699.png"
	],
	[
		"0x3e8abaf75664ceffb765d9c2f138375f81bdcfc0",
		"The Angels of Aether Orig.0",
		"The Angels of Aether",
		"ERC1155",
		"/images/nfts/0x3e8abaf75664ceffb765d9c2f138375f81bdcfc0.png"
	],
	[
		"0x3ed0814be6c0679a89ca6ed323e475ca66a73743",
		"NFF Presents: Oscar Haley And The Great Beyond0",
		"NFFOH",
		"ERC721",
		"/images/nfts/0x3ed0814be6c0679a89ca6ed323e475ca66a73743.gif"
	],
	[
		"0x3ef695917af881972539e835c692b3a0ebb53595",
		"Rebels of Gyaku Original0",
		"Rebels of Gyaku Original",
		"ERC1155",
		"/images/nfts/0x3ef695917af881972539e835c692b3a0ebb53595.gif"
	],
	[
		"0x3f5fb35468e9834a43dca1c160c69eaae78b6360",
		"Koala Intelligence Agency0",
		"KIA",
		"ERC721",
		"/images/nfts/0x3f5fb35468e9834a43dca1c160c69eaae78b6360.png"
	],
	[
		"0x41ef41011e9394b26b424b0ccd13eacf58ac04ab",
		"Otoko NFT0",
		"OTK",
		"ERC721",
		"/images/nfts/0x41ef41011e9394b26b424b0ccd13eacf58ac04ab.png"
	],
	[
		"0x42069abfe407c60cf4ae4112bedead391dba1cdb",
		"CryptoDickbutts0",
		"CDB",
		"ERC721",
		"/images/nfts/0x42069abfe407c60cf4ae4112bedead391dba1cdb.webp"
	],
	[
		"0x42cbfe5c5c1646856ef117735fa2b3ce0e4e5df0",
		"Gutter Punks - NFTokers0",
		"GPN",
		"ERC721",
		"/images/nfts/0x42cbfe5c5c1646856ef117735fa2b3ce0e4e5df0.png"
	],
	[
		"0x42f1654b8eeb80c96471451b1106b63d0b1a9fe1",
		"Chubbiverse Frens0",
		"CHF",
		"ERC721",
		"/images/nfts/0x42f1654b8eeb80c96471451b1106b63d0b1a9fe1.webp"
	],
	[
		"0x444467738cf0c5bcca9c1d6f66670f4c493e53ff",
		"FoxyFam0",
		"FOXY",
		"ERC721",
		"/images/nfts/0x444467738cf0c5bcca9c1d6f66670f4c493e53ff.png"
	],
	[
		"0x44ee938637cf1dac29ef61f80d00e6496c9646b6",
		"Non-Fungible Films x National Lampoon: Special Edition0",
		"NFFxNL",
		"ERC721",
		"/images/nfts/0x44ee938637cf1dac29ef61f80d00e6496c9646b6.png"
	],
	[
		"0x454cbc099079dc38b145e37e982e524af3279c44",
		"The Yakuza Cats Society0",
		"YCS",
		"ERC721",
		"/images/nfts/0x454cbc099079dc38b145e37e982e524af3279c44.png"
	],
	[
		"0x467ada72952e6c961b80658705a72c52ffacec57",
		"Fluidente by Artofsoul0",
		"FDT",
		"ERC721",
		"/images/nfts/0x467ada72952e6c961b80658705a72c52ffacec57.webp"
	],
	[
		"0x472891572599552826d96d5c87be026f02c5f252",
		"DMC - Exoplanets0",
		"",
		"ERC1155",
		"/images/nfts/0x472891572599552826d96d5c87be026f02c5f252.png"
	],
	[
		"0x48394969b0b984e1fd2bf601c5fc59f0dc0bbe98",
		"Ape War City0",
		"WOL",
		"ERC721",
		"/images/nfts/0x48394969b0b984e1fd2bf601c5fc59f0dc0bbe98.png"
	],
	[
		"0x4923017f3b7fac4e096b46e401c0662f0b7e393f",
		"Buzzed Bear Hideout0",
		"BEAR",
		"ERC721",
		"/images/nfts/0x4923017f3b7fac4e096b46e401c0662f0b7e393f.webp"
	],
	[
		"0x494630dbfd30a5a47cb6df744f938d0e7e71d577",
		"Shiba In Official0",
		"Shiba",
		"ERC721",
		"/images/nfts/0x494630dbfd30a5a47cb6df744f938d0e7e71d577.gif"
	],
	[
		"0x495f1ec64467539cad047629086e3cd95459e374",
		"Big Eye Rebellion0",
		"BER",
		"ERC721",
		"/images/nfts/0x495f1ec64467539cad047629086e3cd95459e374.png"
	],
	[
		"0x4a309b096178a331a1dd5fc76d023d41e01428c3",
		"Midnight Bird Ape0",
		"MidnightApes",
		"ERC721",
		"/images/nfts/0x4a309b096178a331a1dd5fc76d023d41e01428c3.png"
	],
	[
		"0x4ad2d817b60db6ee79c1ae016429251a0d25423f",
		"CryptoTrunks0",
		"CT",
		"ERC721",
		"/images/nfts/0x4ad2d817b60db6ee79c1ae016429251a0d25423f.png"
	],
	[
		"0x4d8066630794e2b8e6f0eb4dd1ca83ae668f7782",
		"Pacman Origin0",
		"Pacman Origin",
		"ERC1155",
		"/images/nfts/0x4d8066630794e2b8e6f0eb4dd1ca83ae668f7782.png"
	],
	[
		"0x4dbbdafb9568ab0e4380967aaf1bfb7274541cd1",
		"The Super Big Apes Club0",
		"The Super Fat Ape Club",
		"ERC1155",
		"/images/nfts/0x4dbbdafb9568ab0e4380967aaf1bfb7274541cd1.png"
	],
	[
		"0x4df4ba88c2975b3a65667b0bacb1b78e6e8ce164",
		"National Beer Day 2022 - Resonate0",
		"NBD",
		"ERC1155",
		"/images/nfts/0x4df4ba88c2975b3a65667b0bacb1b78e6e8ce164.png"
	],
	[
		"0x4e16d3b5b5f49060127ecf2ad1e78d7182edbda8",
		"Amparuche0",
		"AMP",
		"ERC721",
		"/images/nfts/0x4e16d3b5b5f49060127ecf2ad1e78d7182edbda8.png"
	],
	[
		"0x4eb3fc0c2315f808dd7dfc3271e08995f620e12f",
		"Alphabetty Doodle Collection0",
		"",
		"ERC1155",
		"/images/nfts/0x4eb3fc0c2315f808dd7dfc3271e08995f620e12f.webp"
	],
	[
		"0x4f6232f80e341adc0fbf793becfb5dd0bc6df965",
		"Pacman NFT Official0",
		"Pacman NFT",
		"ERC1155",
		"/images/nfts/0x4f6232f80e341adc0fbf793becfb5dd0bc6df965.png"
	],
	[
		"0x50842cd03177aee608840a659768c55a5405ac46",
		"Cyber Wolves0",
		"CW",
		"ERC721",
		"/images/nfts/0x50842cd03177aee608840a659768c55a5405ac46.png"
	],
	[
		"0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a",
		"The Sandbox0",
		"",
		"ERC721",
		"/images/nfts/0x50f5474724e0ee42d9a4e711ccfb275809fd6d4a.png"
	],
	[
		"0x514b6d66578381252ccae65f1a7cabfb4ab99560",
		"wallybombr0",
		"GLIT",
		"ERC721",
		"/images/nfts/0x514b6d66578381252ccae65f1a7cabfb4ab99560.png"
	],
	[
		"0x51abcb8aeca60c69ca58e4bcfd6350ba7587ebfc",
		"Croodles0",
		"CROODLESNFT",
		"ERC721",
		"/images/nfts/0x51abcb8aeca60c69ca58e4bcfd6350ba7587ebfc.png"
	],
	[
		"0x51ae5e2533854495f6c587865af64119db8f59b4",
		"PunkScape Relics0",
		"PS",
		"ERC721",
		"/images/nfts/0x51ae5e2533854495f6c587865af64119db8f59b4.png"
	],
	[
		"0x51e613727fdd2e0b91b51c3e5427e9440a7957e4",
		"Crypto Corgis0",
		"CORGI",
		"ERC1155",
		"/images/nfts/0x51e613727fdd2e0b91b51c3e5427e9440a7957e4.png"
	],
	[
		"0x51fb9046affd19b8f0f4d894337d8943bcefedf9",
		"WomenUnite Cool0",
		"WomenUnite",
		"ERC1155",
		"/images/nfts/0x51fb9046affd19b8f0f4d894337d8943bcefedf9.webp"
	],
	[
		"0x5208390b80f7e4dd63b691896b8677b21fafbc32",
		"Bored Koda Klub0",
		"BKK",
		"ERC721",
		"/images/nfts/0x5208390b80f7e4dd63b691896b8677b21fafbc32.png"
	],
	[
		"0x524cab2ec69124574082676e6f654a18df49a048",
		"Lil Pudgys0",
		"LP",
		"ERC721",
		"/images/nfts/0x524cab2ec69124574082676e6f654a18df49a048.png"
	],
	[
		"0x5266c5aca260818be013c80bd9ed5ba0f3d49070",
		"ADVENTUROUS HALFLINGS0",
		"HFLS",
		"ERC721",
		"/images/nfts/0x5266c5aca260818be013c80bd9ed5ba0f3d49070.png"
	],
	[
		"0x52f6af183a4680ee87d1403e8e8d25fc2c569cc5",
		"GhozalIreneDAO0",
		"GhozalIreneDAO",
		"ERC721",
		"/images/nfts/0x52f6af183a4680ee87d1403e8e8d25fc2c569cc5.png"
	],
	[
		"0x53d8b721adeac7cd39a852e177dc02ad0ac9a8aa",
		"Bored Beanz Yacht Club0",
		"BBYC",
		"ERC721",
		"/images/nfts/0x53d8b721adeac7cd39a852e177dc02ad0ac9a8aa.png"
	],
	[
		"0x55043668c1cbdc274ba72149083e96471af4a379",
		"CryptoUnicorn Ty0",
		"",
		"ERC1155",
		"/images/nfts/0x55043668c1cbdc274ba72149083e96471af4a379.png"
	],
	[
		"0x5644327379a532014eefa6fba07cf53e12141fcb",
		"MillionairePigClub0",
		"MPC",
		"ERC721",
		"/images/nfts/0x5644327379a532014eefa6fba07cf53e12141fcb.gif"
	],
	[
		"0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
		"ENS: Ethereum Name Service0",
		"ENS",
		"ERC721",
		"/images/nfts/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85.png"
	],
	[
		"0x581e4fd879eff9d2f36012c4dad563f64a2f250d",
		"Grandpa Apes0",
		"GA",
		"ERC721",
		"/images/nfts/0x581e4fd879eff9d2f36012c4dad563f64a2f250d.png"
	],
	[
		"0x5a2cd9369a4e25b23cb115d3188ada26d109cc77",
		"RarefiedEyes0",
		"REYES",
		"ERC721",
		"/images/nfts/0x5a2cd9369a4e25b23cb115d3188ada26d109cc77.png"
	],
	[
		"0x5b90d6efc18bb895c0e4409daf6a7c11730cfc17",
		"Hapu NFT0",
		"Hapu",
		"ERC721",
		"/images/nfts/0x5b90d6efc18bb895c0e4409daf6a7c11730cfc17.png"
	],
	[
		"0x5c1469ab0e3b4f96d7f25e23d80c540259f2ad5b",
		"Toy Boogers Special Editions0",
		"",
		"ERC1155",
		"/images/nfts/0x5c1469ab0e3b4f96d7f25e23d80c540259f2ad5b.png"
	],
	[
		"0x5c400511fb292a50b4d81e601815f617db804302",
		"Superfuzz The Good Guys0",
		"SFGG",
		"ERC721",
		"/images/nfts/0x5c400511fb292a50b4d81e601815f617db804302.webp"
	],
	[
		"0x5c4b8287739baa7196229a57616657738fd46ab9",
		"Powerfull Crypto-Empire0",
		"Powerfull Crypto-Empire",
		"ERC1155",
		"/images/nfts/0x5c4b8287739baa7196229a57616657738fd46ab9.png"
	],
	[
		"0x5c83df384971ef5ba252336f78ad97d26a0ec7df",
		"Chapter 1: Old Rock0",
		"OR",
		"ERC721",
		"/images/nfts/0x5c83df384971ef5ba252336f78ad97d26a0ec7df.gif"
	],
	[
		"0x5f41a5bea0b2a1c45bfbfd52354a0de49abfb8d6",
		"CRAYON CLUB X BAYC CLUB0",
		"CCBC",
		"ERC721",
		"/images/nfts/0x5f41a5bea0b2a1c45bfbfd52354a0de49abfb8d6.webp"
	],
	[
		"0x5f48045f3a1a19ab9985418869f77612cfa752d6",
		"Nightmare Imp's Tricks0",
		"",
		"ERC1155",
		"/images/nfts/0x5f48045f3a1a19ab9985418869f77612cfa752d6.png"
	],
	[
		"0x5f8c3af28b7af2fd628f9ccd14d12570da0715ae",
		"BitGoatz NFT0",
		"OMG",
		"ERC721",
		"/images/nfts/0x5f8c3af28b7af2fd628f9ccd14d12570da0715ae.gif"
	],
	[
		"0x60e4d786628fea6478f785a6d7e704777c86a7c6",
		"Mutant Ape Yacht Club0",
		"MAYC",
		"ERC721",
		"/images/nfts/0x60e4d786628fea6478f785a6d7e704777c86a7c6.png"
	],
	[
		"0x60f80121c31a0d46b5279700f9df786054aa5ee5",
		"Rarible0",
		"",
		"ERC721",
		"/images/nfts/0x60f80121c31a0d46b5279700f9df786054aa5ee5.png"
	],
	[
		"0x635ebe00dbf1abe84e82bfec1fe0349f6572db3c",
		"THR33LL0",
		"",
		"ERC1155",
		"/images/nfts/0x635ebe00dbf1abe84e82bfec1fe0349f6572db3c.png"
	],
	[
		"0x6381221ca5ea06bbd2d4bbd0b64924d5c88bb925",
		"X Pacman Origin0",
		"X Pacman Origin",
		"ERC1155",
		"/images/nfts/0x6381221ca5ea06bbd2d4bbd0b64924d5c88bb925.png"
	],
	[
		"0x649edc1c85f32afebdcd49bfc1a69224cf6cae27",
		"Dont Buy Poo0",
		"POO",
		"ERC721",
		"/images/nfts/0x649edc1c85f32afebdcd49bfc1a69224cf6cae27.png"
	],
	[
		"0x656d34a8309363302e46de99853f4cef30b85a1d",
		"R Planet - Genesis Collection0",
		"RPlanet",
		"ERC721",
		"/images/nfts/0x656d34a8309363302e46de99853f4cef30b85a1d.png"
	],
	[
		"0x659a4e8254b89928a3781627bbd7e9f480760390",
		"Crypto Bull Dol0",
		"Crypto Bull",
		"ERC1155",
		"/images/nfts/0x659a4e8254b89928a3781627bbd7e9f480760390.png"
	],
	[
		"0x666faa632e5f7ba20a7fce36596a6736f87133be",
		"Asset Vault V20",
		"",
		"ERC721"
	],
	[
		"0x66bd174c61659019091373348879d3cccd03c96c",
		"The End Has Begun0",
		"END",
		"ERC721",
		"/images/nfts/0x66bd174c61659019091373348879d3cccd03c96c.png"
	],
	[
		"0x66fca7555cd481545a5e66ba9a2bec1e256f98e7",
		"Gold Hunt Game | GoldHunters0",
		"GOLDH",
		"ERC721",
		"/images/nfts/0x66fca7555cd481545a5e66ba9a2bec1e256f98e7.png"
	],
	[
		"0x672459f73eb5f4090a294c9b7d9eae7f73230d59",
		"Meow Punks Official0",
		"MP",
		"ERC721",
		"/images/nfts/0x672459f73eb5f4090a294c9b7d9eae7f73230d59.png"
	],
	[
		"0x672c1f1c978b8fd1e9ae18e25d0e55176824989c",
		"SpaceBoysNFT0",
		"SBNFT",
		"ERC721",
		"/images/nfts/0x672c1f1c978b8fd1e9ae18e25d0e55176824989c.gif"
	],
	[
		"0x67504751c5d767deb0122954671cd4623f5b4c59",
		"Punk690",
		"pk69",
		"ERC721",
		"/images/nfts/0x67504751c5d767deb0122954671cd4623f5b4c59.png"
	],
	[
		"0x6a3b5ad93a40e4d6e969da86bb52fe09d11a9613",
		"Troll Army0",
		"TROLL",
		"ERC721",
		"/images/nfts/0x6a3b5ad93a40e4d6e969da86bb52fe09d11a9613.gif"
	],
	[
		"0x6b866ce22189a16b060448df427ee8c957d8019b",
		"Collective 168 - Constellations0",
		"C168-GA1",
		"ERC721",
		"/images/nfts/0x6b866ce22189a16b060448df427ee8c957d8019b.webp"
	],
	[
		"0x6d3ab34f42f8ecf7645f05c343f8d520e0764589",
		"Kingstown.wtf0",
		"KTWTF",
		"ERC721",
		"/images/nfts/0x6d3ab34f42f8ecf7645f05c343f8d520e0764589.png"
	],
	[
		"0x6dc4195d4f5e67f75294815d35b87f4acd8179d8",
		"Moonbirds V20",
		"MB",
		"ERC721"
	],
	[
		"0x6e46227d809c3e0b64541989462f5011933d9068",
		"Bright GODA Mint Pass Item0",
		"",
		"ERC1155",
		"/images/nfts/0x6e46227d809c3e0b64541989462f5011933d9068.png"
	],
	[
		"0x6e8a044f4a21df7af9a17502a867a08af11984db",
		"Super Fat Heroes Club0",
		"",
		"ERC1155",
		"/images/nfts/0x6e8a044f4a21df7af9a17502a867a08af11984db.png"
	],
	[
		"0x6f1e675050c75e881ab90409220b4f3781ba0892",
		"Purrrge0",
		"PURRRGE",
		"ERC721",
		"/images/nfts/0x6f1e675050c75e881ab90409220b4f3781ba0892.gif"
	],
	[
		"0x6f38b6b808e68e031f11bf9d321c6085aedda185",
		"FVCK BOT, DO NOT BUY0",
		"HOPE",
		"ERC721",
		"/images/nfts/0x6f38b6b808e68e031f11bf9d321c6085aedda185.png"
	],
	[
		"0x6f5c8a0e2c0424b2d76b59698e331a1083b4fa92",
		"Phancy Pets0",
		"PHP",
		"ERC721",
		"/images/nfts/0x6f5c8a0e2c0424b2d76b59698e331a1083b4fa92.png"
	],
	[
		"0x6fe9c57ae423d14e78cdd5877d16558bb959d303",
		"EPICBEAST0",
		"EPICBEAST",
		"ERC721",
		"/images/nfts/0x6fe9c57ae423d14e78cdd5877d16558bb959d303.webp"
	],
	[
		"0x7045b78abb6bd2f21a95fb1716ec4bdde324a888",
		"GutterCatGang TURIYI0",
		"GutterCatGang",
		"ERC1155",
		"/images/nfts/0x7045b78abb6bd2f21a95fb1716ec4bdde324a888.png"
	],
	[
		"0x72a71fbdd91e68dea5e1c7d547485bb0b8210a64",
		"AVverse0",
		"AVV",
		"ERC721",
		"/images/nfts/0x72a71fbdd91e68dea5e1c7d547485bb0b8210a64.png"
	],
	[
		"0x72d70aa10fe0e5878e7caa451ac9a7b65fc05aa9",
		"TVO Special0",
		"",
		"ERC1155",
		"/images/nfts/0x72d70aa10fe0e5878e7caa451ac9a7b65fc05aa9.png"
	],
	[
		"0x7357dc2f2b6b51c8e2c7efc728002a499d503c17",
		"The Last Supper Official0",
		"TLS",
		"ERC721",
		"/images/nfts/0x7357dc2f2b6b51c8e2c7efc728002a499d503c17.png"
	],
	[
		"0x7437ee44667bb21c2ec6f8e41051b06b65833820",
		"Hot Dog Time Machine0",
		"HDTM",
		"ERC721",
		"/images/nfts/0x7437ee44667bb21c2ec6f8e41051b06b65833820.png"
	],
	[
		"0x744cb7dfd307d09d00a6e2b536ee616f3f897bdd",
		"The Blinkless: Oculoids0",
		"BLOC",
		"ERC721",
		"/images/nfts/0x744cb7dfd307d09d00a6e2b536ee616f3f897bdd.png"
	],
	[
		"0x7518fe741783c318e34a56eee2b2101ee0e31725",
		"GutterCatGang Sand0",
		"GutterCatGang",
		"ERC1155",
		"/images/nfts/0x7518fe741783c318e34a56eee2b2101ee0e31725.png"
	],
	[
		"0x75a35c67859320baa881c78f91d292174cb6919f",
		"Colorpencil Club X BAYC0",
		"CCBC",
		"ERC721",
		"/images/nfts/0x75a35c67859320baa881c78f91d292174cb6919f.webp"
	],
	[
		"0x75bd294f5adae8428ddcd1431ae2e0d4f5a05707",
		"The Divine Order Of the Zodiac0",
		"THEDIVINEZODIAC",
		"ERC721",
		"/images/nfts/0x75bd294f5adae8428ddcd1431ae2e0d4f5a05707.png"
	],
	[
		"0x78b1d16dba0bd415fd8a9649171a1975642b380a",
		"Eloms0",
		"ELOMS",
		"ERC721",
		"/images/nfts/0x78b1d16dba0bd415fd8a9649171a1975642b380a.png"
	],
	[
		"0x78c34e3493d2ab0bcdef7017b09a8946af94076e",
		"The Unknown 7770",
		"UNK",
		"ERC721",
		"/images/nfts/0x78c34e3493d2ab0bcdef7017b09a8946af94076e.gif"
	],
	[
		"0x797a48c46be32aafcedcfd3d8992493d8a1f256b",
		"Inhabitants: MintPass (MetaHero)0",
		"PASS",
		"ERC1155",
		"/images/nfts/0x797a48c46be32aafcedcfd3d8992493d8a1f256b.png"
	],
	[
		"0x7b41874efe38ea0e4866307b7208d9c856745d31",
		"WeAre by John Johnny0",
		"WeAre",
		"ERC721",
		"/images/nfts/0x7b41874efe38ea0e4866307b7208d9c856745d31.webp"
	],
	[
		"0x7c104b4db94494688027cced1e2ebfb89642c80f",
		"Forgotten Runes Athenaeum0",
		"",
		"ERC1155",
		"/images/nfts/0x7c104b4db94494688027cced1e2ebfb89642c80f.png"
	],
	[
		"0x7c75353b2745c2aefee15f54ec453e41fe8ce65c",
		"Sunbirds - Free Mint0",
		"SUNBIRD",
		"ERC721",
		"/images/nfts/0x7c75353b2745c2aefee15f54ec453e41fe8ce65c.png"
	],
	[
		"0x7deb7bce4d360ebe68278dee6054b882aa62d19c",
		"Inhabitants: United Planets (MetaHero)0",
		"PLANET",
		"ERC1155",
		"/images/nfts/0x7deb7bce4d360ebe68278dee6054b882aa62d19c.png"
	],
	[
		"0x7defc558e0c8901ff98f9d38d18e900da47a7697",
		"CoinMarketAlert 1 Year Access Pass0",
		"ALERT",
		"ERC1155",
		"/images/nfts/0x7defc558e0c8901ff98f9d38d18e900da47a7697.png"
	],
	[
		"0x7e4388bb41793a39ffbe04814b7e4cb97fc26135",
		"Cool GODA Mint Pass Item0",
		"",
		"ERC1155",
		"/images/nfts/0x7e4388bb41793a39ffbe04814b7e4cb97fc26135.png"
	],
	[
		"0x80321ac3ea82f848031f1a8db7b6a351f4cc0a97",
		"Bosozoku Apes Gang Club | BAGC0",
		"BAGC",
		"ERC721",
		"/images/nfts/0x80321ac3ea82f848031f1a8db7b6a351f4cc0a97.png"
	],
	[
		"0x80416304142fa37929f8a4eee83ee7d2dac12d7c",
		"Generativemasks0",
		"GM",
		"ERC721",
		"/images/nfts/0x80416304142fa37929f8a4eee83ee7d2dac12d7c.webp"
	],
	[
		"0x80a4b80c653112b789517eb28ac111519b608b19",
		"Crypto Cannabis Club0",
		"CCC",
		"ERC721",
		"/images/nfts/0x80a4b80c653112b789517eb28ac111519b608b19.png"
	],
	[
		"0x810644accca14c62589a2fe22540caf630c73fb3",
		"SandPlates.io0",
		"SNDPL",
		"ERC721",
		"/images/nfts/0x810644accca14c62589a2fe22540caf630c73fb3.png"
	],
	[
		"0x81a6663b035ad94ed77e17b3aa07125c9a41a99b",
		"BopoVerse BPVw Cyberbullying Task Force0",
		"BPVw",
		"ERC721",
		"/images/nfts/0x81a6663b035ad94ed77e17b3aa07125c9a41a99b.png"
	],
	[
		"0x82c7a8f707110f5fbb16184a5933e9f78a34c6ab",
		"Emblem Vault [Ethereum]0",
		"Emblem.pro",
		"ERC721",
		"/images/nfts/0x82c7a8f707110f5fbb16184a5933e9f78a34c6ab.png"
	],
	[
		"0x838cd6b5bf716ecb1529670850b7265a2d1bbd7c",
		"The Mews Genesis0",
		"LBCC",
		"ERC721",
		"/images/nfts/0x838cd6b5bf716ecb1529670850b7265a2d1bbd7c.png"
	],
	[
		"0x83bd1e2ccbe7b76c7451ea0e421a04317215c139",
		"Great Benzi Bananas Alpa Pass0",
		"Great Benzi Bananas Alpa Pass",
		"ERC1155",
		"/images/nfts/0x83bd1e2ccbe7b76c7451ea0e421a04317215c139.png"
	],
	[
		"0x846716328715a312efd0d89c43938bb5c9f342d6",
		"G.I. Toadz0",
		"GITOADZ",
		"ERC721",
		"/images/nfts/0x846716328715a312efd0d89c43938bb5c9f342d6.webp"
	],
	[
		"0x8475d3ff63925a2ca208a66b911300043e66f603",
		"DrunkenMonkeySociety_V10",
		"DMS",
		"ERC721",
		"/images/nfts/0x8475d3ff63925a2ca208a66b911300043e66f603.png"
	],
	[
		"0x84f6c4b892547a6acee98a3954bc2089f97c43f3",
		"lil Brains WRLD0",
		"BRAINZ",
		"ERC721",
		"/images/nfts/0x84f6c4b892547a6acee98a3954bc2089f97c43f3.png"
	],
	[
		"0x857fb65e09eda078a7f9b38fb31d0547e606375d",
		"Ninjarena Boxes0",
		"NBOX",
		"ERC721",
		"/images/nfts/0x857fb65e09eda078a7f9b38fb31d0547e606375d.png"
	],
	[
		"0x86c2fd70688453b485a4eb81a5073ca9bfb701c6",
		"The China! NFT0",
		"CHINA",
		"ERC721",
		"/images/nfts/0x86c2fd70688453b485a4eb81a5073ca9bfb701c6.png"
	],
	[
		"0x86d2e0f563dabfe881321e7e857cb6345c8867cb",
		"Black Waves Pass0",
		"BWP",
		"ERC721",
		"/images/nfts/0x86d2e0f563dabfe881321e7e857cb6345c8867cb.gif"
	],
	[
		"0x89f17a7ca806a871808362ea17f7b9beb1875080",
		"Frogrunners NFT Official0",
		"RIBBIT",
		"ERC721",
		"/images/nfts/0x89f17a7ca806a871808362ea17f7b9beb1875080.png"
	],
	[
		"0x8aadb8a87e932315d111d362906ce47b3ea6c9ed",
		"theSpaceDoodle0",
		"",
		"ERC1155",
		"/images/nfts/0x8aadb8a87e932315d111d362906ce47b3ea6c9ed.png"
	],
	[
		"0x8bf4b0da05204aa64b7c145f02520b2da54b90db",
		"Ibis Chess Club0",
		"IBIS",
		"ERC721",
		"/images/nfts/0x8bf4b0da05204aa64b7c145f02520b2da54b90db.png"
	],
	[
		"0x8d4e2435c262eb6df10e5e4672a8f07e42d8d67e",
		"CryptoRayRays0",
		"rayrays",
		"ERC721",
		"/images/nfts/0x8d4e2435c262eb6df10e5e4672a8f07e42d8d67e.png"
	],
	[
		"0x8de878b9b29bfbb33eec346965194a37a83b45b1",
		"The F8 Club0",
		"F8CLUB",
		"ERC721",
		"/images/nfts/0x8de878b9b29bfbb33eec346965194a37a83b45b1.gif"
	],
	[
		"0x8e75b3787afb728273a283e3337570e80390bce4",
		"Powerfull PD4 Collection0",
		"Powerfull PD4 Collection",
		"ERC1155",
		"/images/nfts/0x8e75b3787afb728273a283e3337570e80390bce4.gif"
	],
	[
		"0x8eaaabe11896bd09fb852d3a5248004ec44bc793",
		"Refractions0",
		"",
		"ERC1155",
		"/images/nfts/0x8eaaabe11896bd09fb852d3a5248004ec44bc793.webp"
	],
	[
		"0x8f216674f6b4a402e64f401a3fbf92044fc0286d",
		"Night Moon Birds Victorian Pass Official0",
		"Night Moon Birds Victorian Pass Official",
		"ERC1155",
		"/images/nfts/0x8f216674f6b4a402e64f401a3fbf92044fc0286d.png"
	],
	[
		"0x8fa059df6895e519c5fa12a825b8e6d799490ff6",
		"Bored Poskworld Items0",
		"Bored Poskworld Items",
		"ERC1155",
		"/images/nfts/0x8fa059df6895e519c5fa12a825b8e6d799490ff6.png"
	],
	[
		"0x8fd1cd7be9fa2b63d04a58897be4da00988cfc34",
		"Leungz Lunz0",
		"LUNZ",
		"ERC721",
		"/images/nfts/0x8fd1cd7be9fa2b63d04a58897be4da00988cfc34.gif"
	],
	[
		"0x903e2f16bc81d0a3ba9aaf649cfe13f901b6a620",
		"goblincats.xyz0",
		"GOBLINCAT",
		"ERC721",
		"/images/nfts/0x903e2f16bc81d0a3ba9aaf649cfe13f901b6a620.png"
	],
	[
		"0x920a8d9e9f0defd6f86e4388a5503b04cac83b57",
		"Deadfrenz Collection0",
		"DEADFRENZ",
		"ERC721",
		"/images/nfts/0x920a8d9e9f0defd6f86e4388a5503b04cac83b57.png"
	],
	[
		"0x9378368ba6b85c1fba5b131b530f5f5bedf21a18",
		"VeeFriends Series 20",
		"VF2",
		"ERC721",
		"/images/nfts/0x9378368ba6b85c1fba5b131b530f5f5bedf21a18.png"
	],
	[
		"0x93b5e771156e787894ecba2ff1d67b91621e7296",
		"Top Poskworld Lab0",
		"Top Poskworld Lab",
		"ERC1155",
		"/images/nfts/0x93b5e771156e787894ecba2ff1d67b91621e7296.png"
	],
	[
		"0x9522be185a86eebfac2ca7ab0dc0cc7163c6079d",
		"WeatherReport-Forecast0",
		"WeatherReport",
		"ERC1155",
		"/images/nfts/0x9522be185a86eebfac2ca7ab0dc0cc7163c6079d.png"
	],
	[
		"0x95e5e524b259f67332aaefc07322ac2db9e462e1",
		"How Rich Are You ?0",
		"HRAY",
		"ERC721",
		"/images/nfts/0x95e5e524b259f67332aaefc07322ac2db9e462e1.gif"
	],
	[
		"0x96b5835e38e168fb2996495269d798959c01a08e",
		"Whales Of Wallstreet - WOW0",
		"WOW",
		"ERC721",
		"/images/nfts/0x96b5835e38e168fb2996495269d798959c01a08e.png"
	],
	[
		"0x984ac9911c6839a6870a1040a5fb89dd66513bc5",
		"Mighty Manateez0",
		"MM",
		"ERC721",
		"/images/nfts/0x984ac9911c6839a6870a1040a5fb89dd66513bc5.webp"
	],
	[
		"0x98aa66a6acaf96a01317c5392eb05016f7206e45",
		"Lady Tamers Private Island0",
		"LTPI",
		"ERC721",
		"/images/nfts/0x98aa66a6acaf96a01317c5392eb05016f7206e45.png"
	],
	[
		"0x98b5ac33ab3342908d774fd107c9172bda94b8c3",
		"FLICKYGANG BY FLICKPLAY0",
		"FLKY",
		"ERC721",
		"/images/nfts/0x98b5ac33ab3342908d774fd107c9172bda94b8c3.png"
	],
	[
		"0x997cc26df2141a4af2a50b7f75e8a8aa39a4ac1c",
		"Cyberworld by LSD0",
		"CLSD",
		"ERC721",
		"/images/nfts/0x997cc26df2141a4af2a50b7f75e8a8aa39a4ac1c.png"
	],
	[
		"0x9aa62baa781021b32f011733fccae843a5dc0fff",
		"Eureka Rabbit - Mystery Box0",
		"",
		"ERC1155",
		"/images/nfts/0x9aa62baa781021b32f011733fccae843a5dc0fff.png"
	],
	[
		"0x9af03172503ffd0773e7a0d60e4335edb790b318",
		"The Pacman NFT Collection0",
		"The Pacman Collection",
		"ERC1155",
		"/images/nfts/0x9af03172503ffd0773e7a0d60e4335edb790b318.png"
	],
	[
		"0x9bdd58ec85034950c17923a9935a9fef5c08bb4a",
		"Mountains by Pi-Slices0",
		"MOUNT",
		"ERC721",
		"/images/nfts/0x9bdd58ec85034950c17923a9935a9fef5c08bb4a.gif"
	],
	[
		"0x9cf63efbe189091b7e3d364c7f6cfbe06997872b",
		"Chads NFT0",
		"CHAD",
		"ERC721",
		"/images/nfts/0x9cf63efbe189091b7e3d364c7f6cfbe06997872b.png"
	],
	[
		"0x9f1f2696f4e8f138c1cc92361960665cb2d4617e",
		"Non-Fungible Films Studio0",
		"NFFMP",
		"ERC721",
		"/images/nfts/0x9f1f2696f4e8f138c1cc92361960665cb2d4617e.png"
	],
	[
		"0xa01e7bac498dd7f76fed50ea9cb2cf3d6fc1570f",
		"MundaneBunz0",
		"MUNBUNZ",
		"ERC721",
		"/images/nfts/0xa01e7bac498dd7f76fed50ea9cb2cf3d6fc1570f.webp"
	],
	[
		"0xa1d49930961f403e3085464c83360a3604e7ab75",
		"War Of WeatherReport0",
		"WeatherReport",
		"ERC1155",
		"/images/nfts/0xa1d49930961f403e3085464c83360a3604e7ab75.png"
	],
	[
		"0xa1f60f41473b40b2fb894a17fe3f8e62ae8d3289",
		"urlz.com0",
		"Urlz",
		"ERC721",
		"/images/nfts/0xa1f60f41473b40b2fb894a17fe3f8e62ae8d3289.png"
	],
	[
		"0xa23147f7757f94df82bc9c062b9f58ff1e1d69bc",
		"PoodlesNFT0",
		"POODLE",
		"ERC721",
		"/images/nfts/0xa23147f7757f94df82bc9c062b9f58ff1e1d69bc.png"
	],
	[
		"0xa342f5d851e866e18ff98f351f2c6637f4478db5",
		"The Sandbox ASSETS0",
		"ASSET",
		"ERC1155",
		"/images/nfts/0xa342f5d851e866e18ff98f351f2c6637f4478db5.png"
	],
	[
		"0xa3b7cee4e082183e69a03fc03476f28b12c545a7",
		"Chill Frogs NFT0",
		"FROGS",
		"ERC721",
		"/images/nfts/0xa3b7cee4e082183e69a03fc03476f28b12c545a7.png"
	],
	[
		"0xa4631a191044096834ce65d1ee86b16b171d8080",
		"CreatureToadz0",
		"CROAK",
		"ERC721",
		"/images/nfts/0xa4631a191044096834ce65d1ee86b16b171d8080.webp"
	],
	[
		"0xa548fa1d539cab8d78163cb064f7b22e6ef34b2f",
		"UglyUnicorns0",
		"Ugly",
		"ERC721",
		"/images/nfts/0xa548fa1d539cab8d78163cb064f7b22e6ef34b2f.png"
	],
	[
		"0xa57dd75b543d014528fd532b152083f29630c615",
		"rwx quest0",
		"RWXq",
		"ERC1155",
		"/images/nfts/0xa57dd75b543d014528fd532b152083f29630c615.png"
	],
	[
		"0xa59bb344aeca49c1c910fc9b9e305ce6c10d4e24",
		"Bored Awesome Apes0",
		"BA",
		"ERC721",
		"/images/nfts/0xa59bb344aeca49c1c910fc9b9e305ce6c10d4e24.webp"
	],
	[
		"0xa618a963bef74488eadbad1ef0fbe56ecd624bac",
		"Holes Of ChinaChic0",
		"",
		"ERC1155",
		"/images/nfts/0xa618a963bef74488eadbad1ef0fbe56ecd624bac.png"
	],
	[
		"0xa82bb51055790bce02cd00c20ef888251844b016",
		"Art restoring ancient ways V20",
		"PHOENIX",
		"ERC721"
	],
	[
		"0xa9fdb3f96fae7c12d70393659867c6115683ada0",
		"CryptoFoxes0",
		"CFXS",
		"ERC721",
		"/images/nfts/0xa9fdb3f96fae7c12d70393659867c6115683ada0.webp"
	],
	[
		"0xaadb63e1179a4eab0b7cbb088ae51906faddb03b",
		"Save Ring Tickets0",
		"Save Ring Tickets",
		"ERC1155",
		"/images/nfts/0xaadb63e1179a4eab0b7cbb088ae51906faddb03b.gif"
	],
	[
		"0xac7f40aa2d637a06ec69bdaaa4f3277ff521d02f",
		"Happy Monkey Mount Huaguo0",
		"HM",
		"ERC721",
		"/images/nfts/0xac7f40aa2d637a06ec69bdaaa4f3277ff521d02f.png"
	],
	[
		"0xac8774e545605af979d6adc43b26bd7757a81207",
		"TEST NFT 010101010",
		"Lucky Zeroes NFT",
		"ERC1155",
		"/images/nfts/0xac8774e545605af979d6adc43b26bd7757a81207.png"
	],
	[
		"0xad87c7ef60519ee9f30f56eb758512321f085bd2",
		"Krause House Tickets0",
		"KH",
		"ERC1155",
		"/images/nfts/0xad87c7ef60519ee9f30f56eb758512321f085bd2.png"
	],
	[
		"0xafe12842e3703a3cc3a71d9463389b1bf2c5bc1c",
		"Bored Milady Maker0",
		"BMIL",
		"ERC721",
		"/images/nfts/0xafe12842e3703a3cc3a71d9463389b1bf2c5bc1c.png"
	],
	[
		"0xb001094438bbc97b5aedbe3912a844c7b92b385b",
		"NFSneakers.CX - Genesis0",
		"NFSG",
		"ERC721",
		"/images/nfts/0xb001094438bbc97b5aedbe3912a844c7b92b385b.png"
	],
	[
		"0xb04004aa955849739fde52da15249e65950238d3",
		"FREE MINT Editions X Tylersjourney0",
		"",
		"ERC1155",
		"/images/nfts/0xb04004aa955849739fde52da15249e65950238d3.png"
	],
	[
		"0xb05fd8abd64e6421fde30d5db879a3dad54e251b",
		"The Grifters NFTs0",
		"GRIFT",
		"ERC721",
		"/images/nfts/0xb05fd8abd64e6421fde30d5db879a3dad54e251b.gif"
	],
	[
		"0xb2a2eaab4a2fbebf732b50f8d6b47912ca547c7d",
		"Univerxe Earthland0",
		"UEARTH",
		"ERC721",
		"/images/nfts/0xb2a2eaab4a2fbebf732b50f8d6b47912ca547c7d.gif"
	],
	[
		"0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb",
		"CryptoPunks0",
		"PUNK",
		"CRYPTOPUNKS",
		"/images/nfts/0xb47e3cd837ddf8e4c57f05d70ab865de6e193bbb.png"
	],
	[
		"0xb4afbd84b7caf8c3fe2c01cd6ad9008382eeb455",
		"y00ts DickButts by yyc0",
		"YDB",
		"ERC721",
		"/images/nfts/0xb4afbd84b7caf8c3fe2c01cd6ad9008382eeb455.png"
	],
	[
		"0xb4cd5883cb81c0ecfabb12c4594f29897a792fb5",
		"Colorpencil Ape Club X BAYC0",
		"CACB",
		"ERC721",
		"/images/nfts/0xb4cd5883cb81c0ecfabb12c4594f29897a792fb5.webp"
	],
	[
		"0xb501f8748b253c195f103ffb643cc4f9865c81e4",
		"Tragic Crystals0",
		"Tragic Crystals",
		"ERC1155",
		"/images/nfts/0xb501f8748b253c195f103ffb643cc4f9865c81e4.gif"
	],
	[
		"0xb50f84f5d2be56878f0f4d546652a9afd76fd076",
		"Crypto Bull Soc0",
		"Crypto Bull",
		"ERC1155",
		"/images/nfts/0xb50f84f5d2be56878f0f4d546652a9afd76fd076.png"
	],
	[
		"0xb55232ea5683fb7001f31120fc91c983cf9bfdb3",
		"Pokarts0",
		"PKRT",
		"ERC721",
		"/images/nfts/0xb55232ea5683fb7001f31120fc91c983cf9bfdb3.png"
	],
	[
		"0xb5893a75b74f9caccd3c23b4a974db5f53b4e9d2",
		"House of Clownz0",
		"Clownz",
		"ERC721",
		"/images/nfts/0xb5893a75b74f9caccd3c23b4a974db5f53b4e9d2.png"
	],
	[
		"0xb5d53555afd52822f979200e83a515d3464a3c2b",
		"Tsukimi0",
		"TSUKIMI",
		"ERC721",
		"/images/nfts/0xb5d53555afd52822f979200e83a515d3464a3c2b.png"
	],
	[
		"0xb661ab9bcd2878c5f8c136f67fd550a9d7df7197",
		"A:\\Aiko Virtual0",
		"AIKO",
		"ERC721",
		"/images/nfts/0xb661ab9bcd2878c5f8c136f67fd550a9d7df7197.png"
	],
	[
		"0xb67812ce508b9fc190740871032237c24b6896a0",
		"WoW Pixies Official0",
		"PIXIES",
		"ERC721",
		"/images/nfts/0xb67812ce508b9fc190740871032237c24b6896a0.png"
	],
	[
		"0xb6c1bc1c4c115cae13746c06dec9769b69e4461a",
		"Dos Apes0",
		"Dos Apes",
		"ERC721",
		"/images/nfts/0xb6c1bc1c4c115cae13746c06dec9769b69e4461a.png"
	],
	[
		"0xb6d241c6cb1e8d2fc65a012d51406138cb42801d",
		"Turtle Case Gang0",
		"TurtlecaseGang",
		"ERC721",
		"/images/nfts/0xb6d241c6cb1e8d2fc65a012d51406138cb42801d.png"
	],
	[
		"0xb74dda1dd3faf7102a12200a4eba9aea6547939c",
		"The Bear Market Bullies0",
		"BMB",
		"ERC721",
		"/images/nfts/0xb74dda1dd3faf7102a12200a4eba9aea6547939c.png"
	],
	[
		"0xb7def63a9040ad5dc431aff79045617922f4023a",
		"Scapes on Ethereum0",
		"SCAPE",
		"ERC721",
		"/images/nfts/0xb7def63a9040ad5dc431aff79045617922f4023a.png"
	],
	[
		"0xb826b35eca4a3f5fdfc7f16400eaadc04b25d5ef",
		"Draw X Ape0",
		"DApe",
		"ERC721",
		"/images/nfts/0xb826b35eca4a3f5fdfc7f16400eaadc04b25d5ef.webp"
	],
	[
		"0xb87384260216ee7d6afa5aa1e6e8d066ab2f62f8",
		"Scape Extensions0",
		"SCAPEXT",
		"ERC721",
		"/images/nfts/0xb87384260216ee7d6afa5aa1e6e8d066ab2f62f8.png"
	],
	[
		"0xb876cf427307b1984b5e0c9e9280aa3b2fb0d7b6",
		"Mutant Memaw Serums0",
		"",
		"ERC1155",
		"/images/nfts/0xb876cf427307b1984b5e0c9e9280aa3b2fb0d7b6.png"
	],
	[
		"0xb8c2e3ca3803f12884a044aef026724e31bd4591",
		"XI Omega Speedmaster Standard Collection0",
		"Happy Omega Speedmaster, Standard Collection",
		"ERC1155",
		"/images/nfts/0xb8c2e3ca3803f12884a044aef026724e31bd4591.png"
	],
	[
		"0xb8dab05398e9453ade9f4e9d832bc635f75be2bf",
		"BaycShapeShifter0",
		"BAYC",
		"ERC721"
	],
	[
		"0xb9e5717e6d547ebaad8b8b34fcd990bd007168a7",
		"Jack Atomy0",
		"JAT",
		"ERC721",
		"/images/nfts/0xb9e5717e6d547ebaad8b8b34fcd990bd007168a7.png"
	],
	[
		"0xba30e5f9bb24caa003e9f2f0497ad287fdf95623",
		"Bored Ape Kennel Club0",
		"BAKC",
		"ERC721",
		"/images/nfts/0xba30e5f9bb24caa003e9f2f0497ad287fdf95623.png"
	],
	[
		"0xba42a4bdbeb91dd5f502e741caa19eaa64d32e4e",
		"Look Rnbw0",
		"rnbw",
		"ERC721",
		"/images/nfts/0xba42a4bdbeb91dd5f502e741caa19eaa64d32e4e.png"
	],
	[
		"0xbb060bf6dd0aae2029ff86eff7162e7c89bc4148",
		"Swanky Space Squad - Genesis0",
		"SSS",
		"ERC721",
		"/images/nfts/0xbb060bf6dd0aae2029ff86eff7162e7c89bc4148.png"
	],
	[
		"0xbb53dfe73a4fe50cbe2fc436a1667beb5c22956e",
		"BoredAIClub0",
		"BAIC",
		"ERC721",
		"/images/nfts/0xbb53dfe73a4fe50cbe2fc436a1667beb5c22956e.png"
	],
	[
		"0xbbd557d63a280d4935a342800b3769ca50926577",
		"SSA Honoraries0",
		"SSAH",
		"ERC721",
		"/images/nfts/0xbbd557d63a280d4935a342800b3769ca50926577.png"
	],
	[
		"0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d",
		"Bored Ape Yacht Club0",
		"BAYC",
		"ERC721",
		"/images/nfts/0xbc4ca0eda7647a8ab7c2061c2e118a18a936f13d.png"
	],
	[
		"0xbc9ef87f7adac0c562f510694bd37cf184e74e4e",
		"Rabid Reindeer0",
		"RabidReindeer",
		"ERC721",
		"/images/nfts/0xbc9ef87f7adac0c562f510694bd37cf184e74e4e.png"
	],
	[
		"0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e",
		"goblintown.wtf0",
		"GOBLIN",
		"ERC721",
		"/images/nfts/0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e.png"
	],
	[
		"0xbce6d2aa86934af4317ab8615f89e3f9430914cb",
		"VaynerSports Pass VSP0",
		"VSP",
		"ERC721",
		"/images/nfts/0xbce6d2aa86934af4317ab8615f89e3f9430914cb.png"
	],
	[
		"0xbd3531da5cf5857e7cfaa92426877b022e612cf8",
		"Pudgy Penguins0",
		"PPG",
		"ERC721",
		"/images/nfts/0xbd3531da5cf5857e7cfaa92426877b022e612cf8.png"
	],
	[
		"0xbe947929dc9ac2750e1a630716ae11ec123090f9",
		"PixiDigiDaigaku0",
		"PDDaigaku",
		"ERC721",
		"/images/nfts/0xbe947929dc9ac2750e1a630716ae11ec123090f9.png"
	],
	[
		"0xbf662a0e4069b58dfb9bcebebae99a6f13e06f5a",
		"Toy Boogers0",
		"TOY",
		"ERC721",
		"/images/nfts/0xbf662a0e4069b58dfb9bcebebae99a6f13e06f5a.png"
	],
	[
		"0xbf7d77d8af59bb66ce8651a636a255e403d512b0",
		"Honorary Basic Bats0",
		"BBTSVIP",
		"ERC721",
		"/images/nfts/0xbf7d77d8af59bb66ce8651a636a255e403d512b0.png"
	],
	[
		"0xc1d78fec32d016c5e9eefa327dbb05c747ad558c",
		"Street Melts Society0",
		"SMS",
		"ERC721",
		"/images/nfts/0xc1d78fec32d016c5e9eefa327dbb05c747ad558c.png"
	],
	[
		"0xc36442b4a4522e871399cd717abdd847ab11fe88",
		"Uniswap V3 Positions0",
		"UNI-V3-POS",
		"ERC721",
		"/images/nfts/0xc36442b4a4522e871399cd717abdd847ab11fe88.png"
	],
	[
		"0xc4c377565a4b9eb6e657c2422bd33b6e4859b041",
		"Dead Ringers: Edition by Dmitri Cherniak0",
		"",
		"ERC1155",
		"/images/nfts/0xc4c377565a4b9eb6e657c2422bd33b6e4859b041.png"
	],
	[
		"0xc4e0f3ec24972c75df7c716922096f4270b7bb4e",
		"Crowdfunded Mirror Editions0",
		"CROWDFUND_EDITIONS",
		"ERC721"
	],
	[
		"0xc5ae96ef99832e0cb8409877f47fbfed97004b79",
		"Yung Ape Squad Official0",
		"YAS",
		"ERC721",
		"/images/nfts/0xc5ae96ef99832e0cb8409877f47fbfed97004b79.png"
	],
	[
		"0xc6ce183fb60ad4a05d207ee740af50ff0614cf04",
		"Bored d000ds0",
		"Y000",
		"ERC721",
		"/images/nfts/0xc6ce183fb60ad4a05d207ee740af50ff0614cf04.png"
	],
	[
		"0xc7457f480416e145093edb355f626faa0fc7f90e",
		"Tripsters Official Collection0",
		"TRIPSTERS",
		"ERC721",
		"/images/nfts/0xc7457f480416e145093edb355f626faa0fc7f90e.png"
	],
	[
		"0xc86664e7d2608f881f796ee8e24fa9d4d7598406",
		"OFFICIAL WAGMI ARMY0",
		"WAGMI",
		"ERC721",
		"/images/nfts/0xc86664e7d2608f881f796ee8e24fa9d4d7598406.png"
	],
	[
		"0xc92d06c74a26aeaf4d1a1273fac171f3b09fac79",
		"DAO Turtles0",
		"DTS",
		"ERC721",
		"/images/nfts/0xc92d06c74a26aeaf4d1a1273fac171f3b09fac79.webp"
	],
	[
		"0xc9eef4c46abcb11002c9bb8a47445c96cdbcaffb",
		"Nametag: Genesis0",
		"NT",
		"ERC721",
		"/images/nfts/0xc9eef4c46abcb11002c9bb8a47445c96cdbcaffb.png"
	],
	[
		"0xca0b4a2610a9838af5184304daed3e8410bad70d",
		"Frankenapes0",
		"FRANKENAPE",
		"ERC721",
		"/images/nfts/0xca0b4a2610a9838af5184304daed3e8410bad70d.png"
	],
	[
		"0xca7ca7bcc765f77339be2d648ba53ce9c8a262bd",
		"tubby cats0",
		"TUBBY",
		"ERC721",
		"/images/nfts/0xca7ca7bcc765f77339be2d648ba53ce9c8a262bd.png"
	],
	[
		"0xca850e26ffe8cc8294a7e9ccea30f3eedd98edd6",
		"Misfits project0",
		"MF",
		"ERC721",
		"/images/nfts/0xca850e26ffe8cc8294a7e9ccea30f3eedd98edd6.png"
	],
	[
		"0xcb32c247ac2e9670799bb4f2368791c2087b4b83",
		"GateKeep Genesis0",
		"GATEKEEP",
		"ERC721",
		"/images/nfts/0xcb32c247ac2e9670799bb4f2368791c2087b4b83.png"
	],
	[
		"0xcbf51c5c72fe7b7e9140a93d10475c4862dbb8a8",
		"othersoil.xyz Mint Pass0",
		"OSMP",
		"ERC721",
		"/images/nfts/0xcbf51c5c72fe7b7e9140a93d10475c4862dbb8a8.gif"
	],
	[
		"0xcc1240aa82c7c72ea57629420bd24e209b2ae35b",
		"Super Rabbits0",
		"SRabbits",
		"ERC721",
		"/images/nfts/0xcc1240aa82c7c72ea57629420bd24e209b2ae35b.gif"
	],
	[
		"0xccee4d557588e982ecf3a2391d718c76589d8af9",
		"CryptoZoo.co0",
		"EGG",
		"ERC721",
		"/images/nfts/0xccee4d557588e982ecf3a2391d718c76589d8af9.png"
	],
	[
		"0xcdce83324eb08c7c874cebec8a48e7f6b0c5e006",
		"Ape Drops 05 : Ape Fest 20220",
		"",
		"ERC1155",
		"/images/nfts/0xcdce83324eb08c7c874cebec8a48e7f6b0c5e006.png"
	],
	[
		"0xce3ee87de3557a8d113e43afc28d4d3714b30d18",
		"RENGA METAL GENESIS0",
		"RMG",
		"ERC721",
		"/images/nfts/0xce3ee87de3557a8d113e43afc28d4d3714b30d18.png"
	],
	[
		"0xd0288ef47a4c2340e59bf881e1460bd4f09b83c0",
		"Stoned Cat Club0",
		"SCC",
		"ERC721",
		"/images/nfts/0xd0288ef47a4c2340e59bf881e1460bd4f09b83c0.gif"
	],
	[
		"0xd2c80a37aaa39f1ba76d5bb9ef809daa06716a02",
		"3D Generativemasks0",
		"3DGM",
		"ERC721",
		"/images/nfts/0xd2c80a37aaa39f1ba76d5bb9ef809daa06716a02.png"
	],
	[
		"0xd374410e9bb22f3771ffbd0b40a07c0cf44a04fc",
		"The Nifty Portal0",
		"",
		"ERC1155",
		"/images/nfts/0xd374410e9bb22f3771ffbd0b40a07c0cf44a04fc.png"
	],
	[
		"0xd53014c3c4e3223969a1f43068dcc6bc30b6b052",
		"Open Crystals0",
		"Open Crystals",
		"ERC1155",
		"/images/nfts/0xd53014c3c4e3223969a1f43068dcc6bc30b6b052.gif"
	],
	[
		"0xd5a257889ccae20a0d75ce24443e692bbfdc0fa6",
		"Crazy Pacman Limited0",
		"Crazy Pacman Limited",
		"ERC1155",
		"/images/nfts/0xd5a257889ccae20a0d75ce24443e692bbfdc0fa6.png"
	],
	[
		"0xd668a2e001f3385b8bbc5a8682ac3c0d83c19122",
		"KingFrogs0",
		"KF",
		"ERC721",
		"/images/nfts/0xd668a2e001f3385b8bbc5a8682ac3c0d83c19122.webp"
	],
	[
		"0xd6a050527bbdd373f189fe1506d013394b033dd6",
		"XYZ Pacman Official0",
		"",
		"ERC1155",
		"/images/nfts/0xd6a050527bbdd373f189fe1506d013394b033dd6.png"
	],
	[
		"0xd7503e03d35acac4068fc7068ab0f8db7976441f",
		"Tanuki Racooza0",
		"TARA",
		"ERC721",
		"/images/nfts/0xd7503e03d35acac4068fc7068ab0f8db7976441f.png"
	],
	[
		"0xda55e5b697ead7f5b77d43fd500397e24bf793b5",
		"Gutter Punks - Yakuza Cats0",
		"GPYC",
		"ERC721",
		"/images/nfts/0xda55e5b697ead7f5b77d43fd500397e24bf793b5.png"
	],
	[
		"0xdb2f571f8414fb7a3cff71ccb1ff10c17c64991e",
		"Rekt Punks0",
		"REKT",
		"ERC721",
		"/images/nfts/0xdb2f571f8414fb7a3cff71ccb1ff10c17c64991e.gif"
	],
	[
		"0xdbaf349aedee92beed5c392d97983dbbef1d3736",
		"Batty Banties0",
		"BB",
		"ERC721",
		"/images/nfts/0xdbaf349aedee92beed5c392d97983dbbef1d3736.png"
	],
	[
		"0xdc8ce7ba5a173735ec140ea4952e06d4910ab58c",
		"Politically Wrong0",
		"LIES",
		"ERC1155",
		"/images/nfts/0xdc8ce7ba5a173735ec140ea4952e06d4910ab58c.png"
	],
	[
		"0xdc99aa3867b8971959f0e4752ff25731fb1a3ea8",
		"The Pacman Origin0",
		"The Pacman Origin",
		"ERC1155",
		"/images/nfts/0xdc99aa3867b8971959f0e4752ff25731fb1a3ea8.png"
	],
	[
		"0xdd44caa7a8c040c8af1fdd4aeb598c4f80e46227",
		"SPDL Item0",
		"",
		"ERC1155",
		"/images/nfts/0xdd44caa7a8c040c8af1fdd4aeb598c4f80e46227.jpeg"
	],
	[
		"0xddcfcfb93417b43853ee033322f04f1ac3dce835",
		"Apes of Galata Genesis Collection0",
		"AoG",
		"ERC721",
		"/images/nfts/0xddcfcfb93417b43853ee033322f04f1ac3dce835.png"
	],
	[
		"0xde1e16c1f564b7457a019aa6477ac6d100422fe1",
		"ANGRY APES by AA Int'l ft. \"Bored to Death\" by THR33LL0",
		"AngryApes",
		"ERC721",
		"/images/nfts/0xde1e16c1f564b7457a019aa6477ac6d100422fe1.png"
	],
	[
		"0xdf5e772cd2b066172e27a3f7a6f23c460a3b964a",
		"Royal Goats Club0",
		"GOAT",
		"ERC721",
		"/images/nfts/0xdf5e772cd2b066172e27a3f7a6f23c460a3b964a.png"
	],
	[
		"0xe11ea93b4516158afad2f61c48e74a9b92c93adb",
		"Astro X NFT Official Chapter I0",
		"AstroX",
		"ERC721",
		"/images/nfts/0xe11ea93b4516158afad2f61c48e74a9b92c93adb.png"
	],
	[
		"0xe17827609ac34443b3987661f4e037642f6bd9ba",
		"Shellz Orb0",
		"SHELLZ",
		"ERC721",
		"/images/nfts/0xe17827609ac34443b3987661f4e037642f6bd9ba.png"
	],
	[
		"0xe191b6dc268f64005d6add527df902a6bf5f5f03",
		"The Light Dooplicator0",
		"The Light Dooplicator",
		"ERC1155",
		"/images/nfts/0xe191b6dc268f64005d6add527df902a6bf5f5f03.png"
	],
	[
		"0xe1fed3997286754e68af28f077230416ff816edd",
		"The Tokyo Manji Gang0",
		"TMG",
		"ERC721",
		"/images/nfts/0xe1fed3997286754e68af28f077230416ff816edd.png"
	],
	[
		"0xe345e05e6be3ec1129a0d1615301031d5d918b28",
		"Small Moon Birds Victorian Pass Item0",
		"Small Moon Birds Victorian Pass Item",
		"ERC1155",
		"/images/nfts/0xe345e05e6be3ec1129a0d1615301031d5d918b28.png"
	],
	[
		"0xe35035fdca6b76fbcf4ca77bba1adb59c223d5f8",
		"The HadaPixels Originals0",
		"The HadaPixels Originals",
		"ERC1155",
		"/images/nfts/0xe35035fdca6b76fbcf4ca77bba1adb59c223d5f8.gif"
	],
	[
		"0xe3d0fe9b7e0b951663267a3ed1e6577f6f79757e",
		"Gallery General Membership Cards0",
		"GMC",
		"ERC1155",
		"/images/nfts/0xe3d0fe9b7e0b951663267a3ed1e6577f6f79757e.png"
	],
	[
		"0xe4d0e33021476ca05ab22c8bf992d3b013752b80",
		"Lady KILLAz0",
		"LKz",
		"ERC721",
		"/images/nfts/0xe4d0e33021476ca05ab22c8bf992d3b013752b80.png"
	],
	[
		"0xe54cab5bd5618fb3acc5d6ae9ea1d50ac2ba7502",
		"NoNutNov0",
		"NNN",
		"ERC721",
		"/images/nfts/0xe54cab5bd5618fb3acc5d6ae9ea1d50ac2ba7502.gif"
	],
	[
		"0xe8f88d16f24255fcfab25959705d724406d67d9d",
		"NFTiff0",
		"NFTiff",
		"ERC721",
		"/images/nfts/0xe8f88d16f24255fcfab25959705d724406d67d9d.png"
	],
	[
		"0xe9b91d537c3aa5a3fa87275fbd2e4feaaed69bd0",
		"Crypto Marcs0",
		"MARCS",
		"ERC721",
		"/images/nfts/0xe9b91d537c3aa5a3fa87275fbd2e4feaaed69bd0.png"
	],
	[
		"0xe9c171f42bd180b0e4dc5e3c26607f85d13e82c5",
		"RIPit by Lordcalder0",
		"RIPit",
		"ERC721",
		"/images/nfts/0xe9c171f42bd180b0e4dc5e3c26607f85d13e82c5.png"
	],
	[
		"0xea5eebee2923c0d0506d2ff306e839e781e6c7c9",
		"DoodleBitsNFT0",
		"DB",
		"ERC721",
		"/images/nfts/0xea5eebee2923c0d0506d2ff306e839e781e6c7c9.png"
	],
	[
		"0xeadc8e95d2865598c841fd9b463d0ad11d36eabc",
		"MoonFriendz0",
		"",
		"ERC721",
		"/images/nfts/0xeadc8e95d2865598c841fd9b463d0ad11d36eabc.png"
	],
	[
		"0xeafd94523aa508bd86df802ae920ce1440b3acb6",
		"KILLABEARS-V460",
		"KILLABEARS-V46",
		"ERC1155",
		"/images/nfts/0xeafd94523aa508bd86df802ae920ce1440b3acb6.webp"
	],
	[
		"0xeb384eba3793a96a7522beed60ef46c693fbfc15",
		"Pacman X Collection0",
		"Pacman Collection",
		"ERC1155",
		"/images/nfts/0xeb384eba3793a96a7522beed60ef46c693fbfc15.png"
	],
	[
		"0xec3db0b6a6f3085c3b2ebd105aebabd34bce7780",
		"Bored Mummy Baby Waking Up0",
		"BMBWU",
		"ERC721",
		"/images/nfts/0xec3db0b6a6f3085c3b2ebd105aebabd34bce7780.webp"
	],
	[
		"0xec516efecd8276efc608ecd958a4eab8618c61e8",
		"Slacker Duck Pond0",
		"SDP",
		"ERC721",
		"/images/nfts/0xec516efecd8276efc608ecd958a4eab8618c61e8.png"
	],
	[
		"0xede5b530498f8810537d9b64c3f857d06ac09585",
		"One Day Mekabae0",
		"ODB",
		"ERC721",
		"/images/nfts/0xede5b530498f8810537d9b64c3f857d06ac09585.webp"
	],
	[
		"0xee126216132b0ff09268657468b89eccc4f8a6b8",
		"NuBloom Fractal0",
		"NBFR",
		"ERC721",
		"/images/nfts/0xee126216132b0ff09268657468b89eccc4f8a6b8.png"
	],
	[
		"0xeed2743d6a94953267f84b13066edf27ff122ca0",
		"Shit Apes Beast Club0",
		"SABC",
		"ERC721",
		"/images/nfts/0xeed2743d6a94953267f84b13066edf27ff122ca0.png"
	],
	[
		"0xf0644db6d05217f8b8bb7ae9040706cdaf464ba9",
		"Trippy Gelato Creamery: Production One0",
		"TGC",
		"ERC721",
		"/images/nfts/0xf0644db6d05217f8b8bb7ae9040706cdaf464ba9.png"
	],
	[
		"0xf07468ead8cf26c752c676e43c814fee9c8cf402",
		"CryptoPhunks0",
		"PHUNK",
		"ERC721",
		"/images/nfts/0xf07468ead8cf26c752c676e43c814fee9c8cf402.png"
	],
	[
		"0xf57ab9776a06bb0f769ed6cda0037a8da901acb9",
		"Great BenziBananas Pass Items0",
		"Great BenziBananas Pass Items",
		"ERC1155",
		"/images/nfts/0xf57ab9776a06bb0f769ed6cda0037a8da901acb9.png"
	],
	[
		"0xf603f99c529b33b0ea1684ec48dba42e78697359",
		"COLORPENCIL X AZUKI0",
		"CAZUKI",
		"ERC721",
		"/images/nfts/0xf603f99c529b33b0ea1684ec48dba42e78697359.webp"
	],
	[
		"0xf6129b6161be5bbaae3a2d7d95782ac9194cf312",
		"The Light BenziBananas Pass Items0",
		"The Light BenziBananas Pass Items",
		"ERC1155",
		"/images/nfts/0xf6129b6161be5bbaae3a2d7d95782ac9194cf312.png"
	],
	[
		"0xf9c12bd715df34c7850766a48178648ac0cb200d",
		"Permies0",
		"PERM",
		"ERC721",
		"/images/nfts/0xf9c12bd715df34c7850766a48178648ac0cb200d.png"
	],
	[
		"0xfa857ba847db5317856f14d940c3b66fd0040789",
		"Kreators Box0",
		"BOXES",
		"ERC721",
		"/images/nfts/0xfa857ba847db5317856f14d940c3b66fd0040789.gif"
	],
	[
		"0xfaabae17e2da5d7c122fbb2903783459d3f15be5",
		"90s Babes NFT | BABE0",
		"BABE",
		"ERC721",
		"/images/nfts/0xfaabae17e2da5d7c122fbb2903783459d3f15be5.png"
	],
	[
		"0xfbfea4a683d37bf68301f6a9acf7e647bfa8e1a7",
		"SUPERPLASTIC:  Headtripz0",
		"SPTPZ",
		"ERC1155",
		"/images/nfts/0xfbfea4a683d37bf68301f6a9acf7e647bfa8e1a7.webp"
	],
	[
		"0xfcb1315c4273954f74cb16d5b663dbf479eec62e",
		"Capsule House0",
		"CAPSULE",
		"ERC721",
		"/images/nfts/0xfcb1315c4273954f74cb16d5b663dbf479eec62e.png"
	],
	[
		"0xfe43c34b84aeb62172de931b9a0f219a187a7a3a",
		"Genie  Genesis0",
		"Genie : Genesis",
		"ERC1155",
		"/images/nfts/0xfe43c34b84aeb62172de931b9a0f219a187a7a3a.png"
	]
] as const;