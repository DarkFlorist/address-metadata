
export type Address = `0x${ string }`
export type Name = string
export type Symbol = string
export type NftType = 'ERC721'
export type LogoRelativePath = `/images/nfts/${string}`
export type Erc721MetadataWithLogo = readonly [Address, Name, Symbol, NftType, LogoRelativePath]
export type Erc721MetadataWithoutLogo = readonly [Address, Name, Symbol, NftType]

export type Erc721MetadataData = readonly (Erc721MetadataWithLogo | Erc721MetadataWithoutLogo)[]

export const erc721MetadataData: Erc721MetadataData = [
	[
		"0x001ba0474ff8796a007afba716237fc5d2e8299e",
		"A FIRE BURNS...",
		"AFB",
		"ERC721",
		"/images/nfts/0x001ba0474ff8796a007afba716237fc5d2e8299e.png"
	],
	[
		"0x011c77fa577c500deedad364b8af9e8540b808c0",
		"ImmortalPlayerCharacter",
		"IPC",
		"ERC721",
		"/images/nfts/0x011c77fa577c500deedad364b8af9e8540b808c0.png"
	],
	[
		"0x01662b3dd5c556aecbbd5efcc809ef22026cac26",
		"Pixel Puppers NFT",
		"PXP",
		"ERC721",
		"/images/nfts/0x01662b3dd5c556aecbbd5efcc809ef22026cac26.png"
	],
	[
		"0x01dd0c20f6d8030a35abefdd83615f374d826cfd",
		"FreeFriends",
		"FF",
		"ERC721",
		"/images/nfts/0x01dd0c20f6d8030a35abefdd83615f374d826cfd.png"
	],
	[
		"0x02beed1404c69e62b76af6dbdae41bd98bca2eab",
		"posersnft",
		"pos",
		"ERC721",
		"/images/nfts/0x02beed1404c69e62b76af6dbdae41bd98bca2eab.png"
	],
	[
		"0x02f74badce458387ecaef9b1f229afb5678e9aad",
		"MoonPepes",
		"MP",
		"ERC721",
		"/images/nfts/0x02f74badce458387ecaef9b1f229afb5678e9aad.png"
	],
	[
		"0x03558d808f9e73a4452ad8ca5cc14d5c0c59d364",
		"NIJI NFT",
		"NIJI",
		"ERC721",
		"/images/nfts/0x03558d808f9e73a4452ad8ca5cc14d5c0c59d364.png"
	],
	[
		"0x036721e5a769cc48b3189efbb9cce4471e8a48b1",
		"Checks - VV Originals",
		"CHECKS",
		"ERC721",
		"/images/nfts/0x036721e5a769cc48b3189efbb9cce4471e8a48b1.png"
	],
	[
		"0x037244f1026df01b6f6880e38a64bef012d9b6e5",
		"boogerz.wtf",
		"bgzwtf",
		"ERC721",
		"/images/nfts/0x037244f1026df01b6f6880e38a64bef012d9b6e5.png"
	],
	[
		"0x04dfdf94c0e5e1d9101a6840e8476fbfce3fe7eb",
		"Spooky SZN Official",
		"SPKYSZN",
		"ERC721",
		"/images/nfts/0x04dfdf94c0e5e1d9101a6840e8476fbfce3fe7eb.png"
	],
	[
		"0x0599fdfe6791a4a0a31cb221fe20d1b81a7408e3",
		"Alpha Cats",
		"AC⚡",
		"ERC721",
		"/images/nfts/0x0599fdfe6791a4a0a31cb221fe20d1b81a7408e3.png"
	],
	[
		"0x059c5890a39fbd83f0c9b19180fb3f4edc187802",
		"Pixel Baby Ninja~Missions~",
		"PBNM",
		"ERC721",
		"/images/nfts/0x059c5890a39fbd83f0c9b19180fb3f4edc187802.png"
	],
	[
		"0x05da517b1bf9999b7762eaefa8372341a1a47559",
		"fastfoodbabymoon",
		"KPR",
		"ERC721",
		"/images/nfts/0x05da517b1bf9999b7762eaefa8372341a1a47559.png"
	],
	[
		"0x05fe4e1c113272211fa00983f162d04cd202ff53",
		"Bone Ducks",
		"BDUCKS",
		"ERC721",
		"/images/nfts/0x05fe4e1c113272211fa00983f162d04cd202ff53.png"
	],
	[
		"0x06012c8cf97bead5deae237070f9587f8e7a266d",
		"CryptoKitties",
		"CK",
		"ERC721",
		"/images/nfts/0x06012c8cf97bead5deae237070f9587f8e7a266d.png"
	],
	[
		"0x06172409226764d4ebd16b6a9ea86998c793b527",
		"Semol Birbs",
		"SEM",
		"ERC721",
		"/images/nfts/0x06172409226764d4ebd16b6a9ea86998c793b527.png"
	],
	[
		"0x062e6604ffa8d4ae459df58aec848a2d3171d881",
		"apileofbones",
		"pilesofbones",
		"ERC721",
		"/images/nfts/0x062e6604ffa8d4ae459df58aec848a2d3171d881.png"
	],
	[
		"0x062e691c2054de82f28008a8ccc6d7a1c8ce060d",
		"Pudgy Rods",
		"PP",
		"ERC721",
		"/images/nfts/0x062e691c2054de82f28008a8ccc6d7a1c8ce060d.png"
	],
	[
		"0x06971f85c9e0ba82e9bc4c7be54f601dded00835",
		"Proof of Cheese",
		"POC",
		"ERC721",
		"/images/nfts/0x06971f85c9e0ba82e9bc4c7be54f601dded00835.png"
	],
	[
		"0x06ad7bb40decf80c054483c924c8c2a50ab86985",
		"LilDuckies",
		"LD",
		"ERC721",
		"/images/nfts/0x06ad7bb40decf80c054483c924c8c2a50ab86985.png"
	],
	[
		"0x06f192d8b7b07c58443fd2f60a03ebde58654643",
		"BestFriend Official",
		"BF",
		"ERC721",
		"/images/nfts/0x06f192d8b7b07c58443fd2f60a03ebde58654643.png"
	],
	[
		"0x07314007735faf41fa8ed4f590e5165bd21604b1",
		"CULTIVATE | GENESIS SORCE VIAL",
		"SORCE",
		"ERC721",
		"/images/nfts/0x07314007735faf41fa8ed4f590e5165bd21604b1.png"
	],
	[
		"0x0735a2961eb2b18b28daa72b593dfbaa7f9d1929",
		"ChillTuna",
		"CHILLTUNA",
		"ERC721",
		"/images/nfts/0x0735a2961eb2b18b28daa72b593dfbaa7f9d1929.png"
	],
	[
		"0x074ec67e45391426ce1bfa45ae01c12f51d95129",
		"Kuma Toys",
		"KUTO",
		"ERC721",
		"/images/nfts/0x074ec67e45391426ce1bfa45ae01c12f51d95129.png"
	],
	[
		"0x078e53a65b032a19894fe7f655b9a9e84f973b75",
		"MedievalMonkeys",
		"MM",
		"ERC721",
		"/images/nfts/0x078e53a65b032a19894fe7f655b9a9e84f973b75.png"
	],
	[
		"0x07a7a80cb340e72525e51bf0699b10dc57add06b",
		"Mutariuum Citizen",
		"MUC",
		"ERC721",
		"/images/nfts/0x07a7a80cb340e72525e51bf0699b10dc57add06b.png"
	],
	[
		"0x07c453bc0462bd2e24cb475893174b40e29f44e0",
		"Gods Clash",
		"GCLASH",
		"ERC721",
		"/images/nfts/0x07c453bc0462bd2e24cb475893174b40e29f44e0.png"
	],
	[
		"0x080c23415bd7f11fd8caea9d132a89e866028af3",
		"Fridge Fame",
		"FF",
		"ERC721",
		"/images/nfts/0x080c23415bd7f11fd8caea9d132a89e866028af3.png"
	],
	[
		"0x081f2f6764e788cc13d5a8311f49b4470335c45c",
		"Beyond Earth Characters",
		"BEOC",
		"ERC721",
		"/images/nfts/0x081f2f6764e788cc13d5a8311f49b4470335c45c.png"
	],
	[
		"0x08549931c9766c7d7ae59d98cc08ee133fe3db12",
		"Sougen Genesis Collection",
		"SGC",
		"ERC721",
		"/images/nfts/0x08549931c9766c7d7ae59d98cc08ee133fe3db12.png"
	],
	[
		"0x085ec39d9c284852e6e96c5455321104254f9bb4",
		"d0g3 1nn",
		"DI",
		"ERC721",
		"/images/nfts/0x085ec39d9c284852e6e96c5455321104254f9bb4.png"
	],
	[
		"0x085f81803db511dc19d0ce93f74e6a8937b58b81",
		"Eggi Nswap",
		"Eggi",
		"ERC721",
		"/images/nfts/0x085f81803db511dc19d0ce93f74e6a8937b58b81.png"
	],
	[
		"0x088124837ed205cfc23e57f6aaab2abac628e0be",
		"Lovecatz",
		"LCAT",
		"ERC721",
		"/images/nfts/0x088124837ed205cfc23e57f6aaab2abac628e0be.png"
	],
	[
		"0x08abed322775731d7b75dbdfe6151dc39ad83800",
		"Moongirls by Emanuele Ferrari",
		"Moongirls",
		"ERC721",
		"/images/nfts/0x08abed322775731d7b75dbdfe6151dc39ad83800.png"
	],
	[
		"0x0916a21a490e5cf2465c4cf7b94a63ae85f2b4fa",
		"Hoomans of Somewhere Nowhere",
		"HOOMAN",
		"ERC721",
		"/images/nfts/0x0916a21a490e5cf2465c4cf7b94a63ae85f2b4fa.png"
	],
	[
		"0x092bbc993042a69811d23feb0e64e3bfa0920c6a",
		"Gutter Juice",
		"JUICE",
		"ERC721",
		"/images/nfts/0x092bbc993042a69811d23feb0e64e3bfa0920c6a.png"
	],
	[
		"0x0965811aad6f8d534a7a879d5f5d119d4bae82e6",
		"Vitalik Pumps",
		"VTLKP",
		"ERC721",
		"/images/nfts/0x0965811aad6f8d534a7a879d5f5d119d4bae82e6.png"
	],
	[
		"0x099a93c756840cd1a5cdc69c20fe6f3244746e9c",
		"Mob's & Aliens",
		"MBNAL",
		"ERC721",
		"/images/nfts/0x099a93c756840cd1a5cdc69c20fe6f3244746e9c.png"
	],
	[
		"0x09a9b1061f15a4d1c4c247ef9284ff38000bad2a",
		"Moonkeys Official",
		"MOONKEYS",
		"ERC721",
		"/images/nfts/0x09a9b1061f15a4d1c4c247ef9284ff38000bad2a.png"
	],
	[
		"0x0a16305612706b4eabce43247d61fe7fbed708e4",
		"Metropolis World Passport Official",
		"METWA",
		"ERC721",
		"/images/nfts/0x0a16305612706b4eabce43247d61fe7fbed708e4.png"
	],
	[
		"0x0a1e21c169ff261fe6f370068a4f71c25f096a55",
		"Mirs of Space",
		"MIRS",
		"ERC721",
		"/images/nfts/0x0a1e21c169ff261fe6f370068a4f71c25f096a55.png"
	],
	[
		"0x0a8d311b99ddaa9ebb45fd606eb0a1533004f26b",
		"ETH GOBBLERS",
		"GOOEY",
		"ERC721",
		"/images/nfts/0x0a8d311b99ddaa9ebb45fd606eb0a1533004f26b.png"
	],
	[
		"0x0b3b95547a22bee3c03be558ec649dbd69af8476",
		"Moondust Official",
		"MDT",
		"ERC721",
		"/images/nfts/0x0b3b95547a22bee3c03be558ec649dbd69af8476.png"
	],
	[
		"0x0bf3cf7960ad8827c75d821f4b3353af8d4fbca4",
		"poobs",
		"poobsnft",
		"ERC721",
		"/images/nfts/0x0bf3cf7960ad8827c75d821f4b3353af8d4fbca4.png"
	],
	[
		"0x0c2e57efddba8c768147d1fdf9176a0a6ebd5d83",
		"Kaiju Kingz",
		"KAIJU",
		"ERC721",
		"/images/nfts/0x0c2e57efddba8c768147d1fdf9176a0a6ebd5d83.png"
	],
	[
		"0x0c3ee1fdcdb45ab9464640f807313190f8dad680",
		"FashionDuck",
		"FDS",
		"ERC721",
		"/images/nfts/0x0c3ee1fdcdb45ab9464640f807313190f8dad680.png"
	],
	[
		"0x0c45c9da96313b95d5ffd8dfec1f8b4c2e47abca",
		"Monsuta",
		"Monsuta",
		"ERC721",
		"/images/nfts/0x0c45c9da96313b95d5ffd8dfec1f8b4c2e47abca.png"
	],
	[
		"0x0c684b8c37bbd3e58dfde822025591d15c030cd9",
		"CF: The Calling",
		"MINTSTONE",
		"ERC721",
		"/images/nfts/0x0c684b8c37bbd3e58dfde822025591d15c030cd9.png"
	],
	[
		"0x0c8a4aa065634f27a7f7bb0a49ce01749b2574a2",
		"BaboBunnyClub",
		"BaboBunny",
		"ERC721",
		"/images/nfts/0x0c8a4aa065634f27a7f7bb0a49ce01749b2574a2.png"
	],
	[
		"0x0cfb5d82be2b949e8fa73a656df91821e2ad99fd",
		"10KTF",
		"10KTF",
		"ERC721",
		"/images/nfts/0x0cfb5d82be2b949e8fa73a656df91821e2ad99fd.png"
	],
	[
		"0x0e33fd2db4f140dca8f65671c40e36f8fd648fff",
		"100 Meals",
		"FEED",
		"ERC721",
		"/images/nfts/0x0e33fd2db4f140dca8f65671c40e36f8fd648fff.png"
	],
	[
		"0x0e534224d71b95ff3ae4ac2bd97e364c8414a4c3",
		"Broman NFT",
		"Broman NFT",
		"ERC721",
		"/images/nfts/0x0e534224d71b95ff3ae4ac2bd97e364c8414a4c3.png"
	],
	[
		"0x0e9d85d1408ae1358a6e0bd31431e23f589af11c",
		"Dickmfer.wtf official",
		"DCK",
		"ERC721",
		"/images/nfts/0x0e9d85d1408ae1358a6e0bd31431e23f589af11c.png"
	],
	[
		"0x0ee80069c9b4993882fe0b3fc256260eff385982",
		"LonelyPop",
		"LP",
		"ERC721",
		"/images/nfts/0x0ee80069c9b4993882fe0b3fc256260eff385982.png"
	],
	[
		"0x0f35e9b270ff810098bae1b120e16f8c58259e0e",
		"CryptoClitbutts",
		"CCB",
		"ERC721",
		"/images/nfts/0x0f35e9b270ff810098bae1b120e16f8c58259e0e.png"
	],
	[
		"0x0f5743bf80d46622839b09cf426983d6b0b6a017",
		"GoArt Keys",
		"GAK",
		"ERC721",
		"/images/nfts/0x0f5743bf80d46622839b09cf426983d6b0b6a017.png"
	],
	[
		"0x0f77625b76e3831914d47a5034323290f9ce8a9e",
		"[ Ledger ] Market – Black-on-Black Nano X",
		"BOBNX",
		"ERC721",
		"/images/nfts/0x0f77625b76e3831914d47a5034323290f9ce8a9e.png"
	],
	[
		"0x0f7cce027e0afe16fbf0dcc8e76932845b4e21d1",
		"Bored Grapes - Bottles",
		"$BOTTLES",
		"ERC721",
		"/images/nfts/0x0f7cce027e0afe16fbf0dcc8e76932845b4e21d1.png"
	],
	[
		"0x1000b3bdc7faebb1ffff9ceb65e54b6360c2d99d",
		"Mutant Baby Apepe YC",
		"MBRA",
		"ERC721",
		"/images/nfts/0x1000b3bdc7faebb1ffff9ceb65e54b6360c2d99d.png"
	],
	[
		"0x101884c6c941b1a70e2c5597f33889023db9da23",
		"ThePixelatedApes",
		"TPA",
		"ERC721",
		"/images/nfts/0x101884c6c941b1a70e2c5597f33889023db9da23.png"
	],
	[
		"0x102fc17bcb529c90b99039d6ed4cd12bd33f90ed",
		"DEATH GIRL NFT",
		"DG",
		"ERC721",
		"/images/nfts/0x102fc17bcb529c90b99039d6ed4cd12bd33f90ed.png"
	],
	[
		"0x10a2fa9d25394ffea51249fa3dcf19c2c12bd5d0",
		"Ibutsu",
		"IBT",
		"ERC721",
		"/images/nfts/0x10a2fa9d25394ffea51249fa3dcf19c2c12bd5d0.png"
	],
	[
		"0x10b366bbf2304b52806b1c9881fc259bd9018d43",
		"Eggz By Soakverse",
		"EGGZ",
		"ERC721",
		"/images/nfts/0x10b366bbf2304b52806b1c9881fc259bd9018d43.png"
	],
	[
		"0x111508edbeb2e906a40fd92e8b4cfaffc606c6dd",
		"NOT DITTO",
		"NOTDITTO",
		"ERC721",
		"/images/nfts/0x111508edbeb2e906a40fd92e8b4cfaffc606c6dd.png"
	],
	[
		"0x1193af965786fc46a63cb4d92c33a48219d1c8b6",
		"Beings Official",
		"BEINGS",
		"ERC721",
		"/images/nfts/0x1193af965786fc46a63cb4d92c33a48219d1c8b6.png"
	],
	[
		"0x11b3cf25f300b8ec587dfc349d419b5181084909",
		"HA HA PEW PEW",
		"HAHAPEWPEW",
		"ERC721",
		"/images/nfts/0x11b3cf25f300b8ec587dfc349d419b5181084909.png"
	],
	[
		"0x123b30e25973fecd8354dd5f41cc45a3065ef88c",
		"alien frens",
		"ALIENFRENS",
		"ERC721",
		"/images/nfts/0x123b30e25973fecd8354dd5f41cc45a3065ef88c.png"
	],
	[
		"0x12b180b635dd9f07a78736fb4e43438fcdb41555",
		"Mooncatz",
		"MOON",
		"ERC721",
		"/images/nfts/0x12b180b635dd9f07a78736fb4e43438fcdb41555.png"
	],
	[
		"0x1347a97789cd3aa0b11433e8117f55ab640a0451",
		"The Long Lost",
		"LOST",
		"ERC721",
		"/images/nfts/0x1347a97789cd3aa0b11433e8117f55ab640a0451.png"
	],
	[
		"0x13baf65517a04fa5707fd8d3534bd51af2302199",
		"Gakko Labs",
		"gakkoverse",
		"ERC721",
		"/images/nfts/0x13baf65517a04fa5707fd8d3534bd51af2302199.png"
	],
	[
		"0x13bd972b0bfaefc9538a43c1fda11d71c720cd47",
		"BoxcatPlanet Official",
		"BCP",
		"ERC721",
		"/images/nfts/0x13bd972b0bfaefc9538a43c1fda11d71c720cd47.png"
	],
	[
		"0x1417404d0d92f9d21b046afbaa9d1c4e17c4c723",
		"Queen Apes",
		"AAQUEENS",
		"ERC721",
		"/images/nfts/0x1417404d0d92f9d21b046afbaa9d1c4e17c4c723.png"
	],
	[
		"0x145ac4edffae802d8260d64e5720e4b210039c71",
		"Akyllers",
		"Akyller",
		"ERC721",
		"/images/nfts/0x145ac4edffae802d8260d64e5720e4b210039c71.png"
	],
	[
		"0x1485297e942ce64e0870ece60179dfda34b4c625",
		"Moonrunners Official",
		"MOONR",
		"ERC721",
		"/images/nfts/0x1485297e942ce64e0870ece60179dfda34b4c625.png"
	],
	[
		"0x14db21f6d5bfbb0451c6af1f9682ca3e190c9881",
		"Meka Rhinos",
		"RHNO",
		"ERC721",
		"/images/nfts/0x14db21f6d5bfbb0451c6af1f9682ca3e190c9881.png"
	],
	[
		"0x14e645e2bb0e15c87230c6206e2c85b494c4a116",
		"Wastelands.cult",
		"wst",
		"ERC721",
		"/images/nfts/0x14e645e2bb0e15c87230c6206e2c85b494c4a116.png"
	],
	[
		"0x152cc0b640fa85fecff43d2a417fa9b369661b97",
		"Big Town Chef - Genesis Chefs",
		"CHEF",
		"ERC721",
		"/images/nfts/0x152cc0b640fa85fecff43d2a417fa9b369661b97.png"
	],
	[
		"0x1562e3428ed1d6cdbdb1695cc505aba33ab4ea5e",
		"TOSHIES",
		"TOSHIES",
		"ERC721",
		"/images/nfts/0x1562e3428ed1d6cdbdb1695cc505aba33ab4ea5e.png"
	],
	[
		"0x15ea13b66b3badb355fcfa6317c3b96567825037",
		"TAT-TWELVE ANONYMOUS TOURNAMENTS",
		"TAT",
		"ERC721",
		"/images/nfts/0x15ea13b66b3badb355fcfa6317c3b96567825037.png"
	],
	[
		"0x160c404b2b49cbc3240055ceaee026df1e8497a0",
		"PXN: Ghost Division",
		"GHOST",
		"ERC721",
		"/images/nfts/0x160c404b2b49cbc3240055ceaee026df1e8497a0.png"
	],
	[
		"0x16129e08420cea192471085e76310da390e2b9e6",
		"Crypto Vending Machines",
		"CVMS",
		"ERC721",
		"/images/nfts/0x16129e08420cea192471085e76310da390e2b9e6.png"
	],
	[
		"0x1628d51edc96f158df31316063f0b4f5b12d2f28",
		"MEGA 404 - Fridge",
		"M404FRIDGE",
		"ERC721",
		"/images/nfts/0x1628d51edc96f158df31316063f0b4f5b12d2f28.png"
	],
	[
		"0x16376312cca9e7e2f15f6eae12a86b72df2b5f61",
		"Boots By Jeremy Booth",
		"boots",
		"ERC721",
		"/images/nfts/0x16376312cca9e7e2f15f6eae12a86b72df2b5f61.png"
	],
	[
		"0x165bd6e2ae984d9c13d94808e9a6ba2b7348c800",
		"DO NOT TRADE",
		"SASSY",
		"ERC721",
		"/images/nfts/0x165bd6e2ae984d9c13d94808e9a6ba2b7348c800.png"
	],
	[
		"0x1792a96e5668ad7c167ab804a100ce42395ce54d",
		"Moonbirds Oddities",
		"ODDITIES",
		"ERC721",
		"/images/nfts/0x1792a96e5668ad7c167ab804a100ce42395ce54d.png"
	],
	[
		"0x17d084106c2f1c716ce39fa015ab022757d30c9a",
		"Kryptoria - Land",
		"KRYPTORIA",
		"ERC721",
		"/images/nfts/0x17d084106c2f1c716ce39fa015ab022757d30c9a.png"
	],
	[
		"0x17f2fdd7e1dae1368d1fc80116310f54f40f30a9",
		"PILLAGERS",
		"PILLAGE",
		"ERC721",
		"/images/nfts/0x17f2fdd7e1dae1368d1fc80116310f54f40f30a9.png"
	],
	[
		"0x1895c2da9155d7720a7957da06ce898a6a29d0a7",
		"WE ARE GOING TO HELL",
		"WAGTH",
		"ERC721",
		"/images/nfts/0x1895c2da9155d7720a7957da06ce898a6a29d0a7.png"
	],
	[
		"0x1931abb6afb5a9148fc363fb52fe74cf65a0bb57",
		"LaLiga Metaverse 'Genesis Pass'",
		"LaLi",
		"ERC721",
		"/images/nfts/0x1931abb6afb5a9148fc363fb52fe74cf65a0bb57.png"
	],
	[
		"0x19445bb9f1b704dd973f8f9a4dce5ea5e55444da",
		"Applied Primate Keycard",
		"KEYCARD",
		"ERC721",
		"/images/nfts/0x19445bb9f1b704dd973f8f9a4dce5ea5e55444da.png"
	],
	[
		"0x19592b48606a42565c8e9af5113d72d4ff557482",
		"LaLLamaPIC",
		"LLAMA",
		"ERC721",
		"/images/nfts/0x19592b48606a42565c8e9af5113d72d4ff557482.png"
	],
	[
		"0x19b436638d31bf38ba33924e6e25f8ce2a764a52",
		"Spirit Gates",
		"SG",
		"ERC721",
		"/images/nfts/0x19b436638d31bf38ba33924e6e25f8ce2a764a52.png"
	],
	[
		"0x19b86299c21505cdf59ce63740b240a9c822b5e4",
		"DEGEN TOONZ COLLECTION",
		"TOONZ",
		"ERC721",
		"/images/nfts/0x19b86299c21505cdf59ce63740b240a9c822b5e4.png"
	],
	[
		"0x19f636d66d7f39dc12f58e900247d899ac1cb034",
		"LuckyHellicorn Official",
		"Lucky",
		"ERC721",
		"/images/nfts/0x19f636d66d7f39dc12f58e900247d899ac1cb034.png"
	],
	[
		"0x1a371de4634c3debf7196a1efc59e620aff0915f",
		"Cash Cows Crew",
		"MOO",
		"ERC721",
		"/images/nfts/0x1a371de4634c3debf7196a1efc59e620aff0915f.png"
	],
	[
		"0x1a4041cce1aea5fff82e13780d1b1f522a047ef9",
		"AstarPrince",
		"APRINCE",
		"ERC721",
		"/images/nfts/0x1a4041cce1aea5fff82e13780d1b1f522a047ef9.png"
	],
	[
		"0x1a92f7381b9f03921564a437210bb9396471050c",
		"Cool Cats NFT",
		"COOL",
		"ERC721",
		"/images/nfts/0x1a92f7381b9f03921564a437210bb9396471050c.png"
	],
	[
		"0x1a9d9b344765259451a0cd52e11a341facc63990",
		"Black and White",
		"Black & White",
		"ERC721",
		"/images/nfts/0x1a9d9b344765259451a0cd52e11a341facc63990.png"
	],
	[
		"0x1ab8c55870a404e769868982645e81ab6ec76f7a",
		"Techie Club Genesis [FREE mint]",
		"TECH",
		"ERC721",
		"/images/nfts/0x1ab8c55870a404e769868982645e81ab6ec76f7a.png"
	],
	[
		"0x1b1bff222999bcd6fd07b64d7880e6a95d54acaa",
		"Lazy Ape Official",
		"LAYC",
		"ERC721",
		"/images/nfts/0x1b1bff222999bcd6fd07b64d7880e6a95d54acaa.png"
	],
	[
		"0x1b23d0f0f6dc3547c1b6945152acbfd6eaad85b0",
		"Pillheads NFT",
		"PILLHEADS",
		"ERC721",
		"/images/nfts/0x1b23d0f0f6dc3547c1b6945152acbfd6eaad85b0.png"
	],
	[
		"0x1b5e1e9fade7c474fc3502e30500f63a5813a31c",
		"Bored Karma Club",
		"BRKC",
		"ERC721",
		"/images/nfts/0x1b5e1e9fade7c474fc3502e30500f63a5813a31c.png"
	],
	[
		"0x1b69916543ec291d91b07133d869b929495ea45b",
		"Rug Birds",
		"RUGBIRD",
		"ERC721",
		"/images/nfts/0x1b69916543ec291d91b07133d869b929495ea45b.png"
	],
	[
		"0x1bad88ff13430b9f888522dcb103cb6b444d1650",
		"The Pride : Genesis",
		"TPG",
		"ERC721",
		"/images/nfts/0x1bad88ff13430b9f888522dcb103cb6b444d1650.png"
	],
	[
		"0x1beebb8f7e12a43201ec8b5799b973d933936bc2",
		"PEPELAND - Official",
		"PL",
		"ERC721",
		"/images/nfts/0x1beebb8f7e12a43201ec8b5799b973d933936bc2.png"
	],
	[
		"0x1c26ada526be569fcdd718707f61c0437f4ac91a",
		"PUMA Nitro Token NFT",
		"PUMANitro",
		"ERC721",
		"/images/nfts/0x1c26ada526be569fcdd718707f61c0437f4ac91a.png"
	],
	[
		"0x1c410e4c1701f88a2a504f4506251624e8166419",
		"EY3K0N",
		"Ey3",
		"ERC721",
		"/images/nfts/0x1c410e4c1701f88a2a504f4506251624e8166419.png"
	],
	[
		"0x1ddb32a082c369834b57473dd3a5146870ecf8b7",
		"Raccools",
		"RACCOOL",
		"ERC721",
		"/images/nfts/0x1ddb32a082c369834b57473dd3a5146870ecf8b7.png"
	],
	[
		"0x1e1c2088f5f0e92ac099c3e70802fa9f436975f6",
		"Its Not What It Looks Like",
		"INWILL",
		"ERC721",
		"/images/nfts/0x1e1c2088f5f0e92ac099c3e70802fa9f436975f6.png"
	],
	[
		"0x1e283601f53032d9aac8dc73632f4e482e761c70",
		"TheJewsNFT",
		"JEWS",
		"ERC721",
		"/images/nfts/0x1e283601f53032d9aac8dc73632f4e482e761c70.png"
	],
	[
		"0x1e4afe0c027d4f14fdba4254efc1a3ac2f7d49b5",
		"CopeBears",
		"CB",
		"ERC721",
		"/images/nfts/0x1e4afe0c027d4f14fdba4254efc1a3ac2f7d49b5.png"
	],
	[
		"0x1f01f454bd3142682a74e9eb93bdc0f7b8b12940",
		"Chubby Grubby",
		"CHUB",
		"ERC721",
		"/images/nfts/0x1f01f454bd3142682a74e9eb93bdc0f7b8b12940.png"
	],
	[
		"0x1f02bf9dde7c79137a08b2dd4fc964bfd2499734",
		"3L3Phants Official",
		"ELENFT",
		"ERC721",
		"/images/nfts/0x1f02bf9dde7c79137a08b2dd4fc964bfd2499734.png"
	],
	[
		"0x1f0ab3d4f62609ba423050b4ceb72cba18abafd4",
		"DR/VRS NFT",
		"DRIVRS",
		"ERC721",
		"/images/nfts/0x1f0ab3d4f62609ba423050b4ceb72cba18abafd4.png"
	],
	[
		"0x1f47ea34d27ecf77bf04a702fbd9e7b7a4b38024",
		"Merge  Machines",
		"MERGE",
		"ERC721",
		"/images/nfts/0x1f47ea34d27ecf77bf04a702fbd9e7b7a4b38024.png"
	],
	[
		"0x1fb7b8ad0c8368db5463b34d5ea58778706d580e",
		"PIXELBAES",
		"PXBAE",
		"ERC721",
		"/images/nfts/0x1fb7b8ad0c8368db5463b34d5ea58778706d580e.png"
	],
	[
		"0x1ffcd1f2511d4a277a7efc08a4f3e808544f6ab0",
		"AMATO Official",
		"AMT",
		"ERC721",
		"/images/nfts/0x1ffcd1f2511d4a277a7efc08a4f3e808544f6ab0.png"
	],
	[
		"0x2030881f8d1b26428360b200c76e8516bd0d9b9b",
		"Lady Rare Apepe YC",
		"LRAYC",
		"ERC721",
		"/images/nfts/0x2030881f8d1b26428360b200c76e8516bd0d9b9b.png"
	],
	[
		"0x2040c9c6691a732ad127fc054474efc31fbfc5f1",
		"NETVVORK",
		"WW",
		"ERC721",
		"/images/nfts/0x2040c9c6691a732ad127fc054474efc31fbfc5f1.png"
	],
	[
		"0x209e639a0ec166ac7a1a4ba41968fa967db30221",
		"Genuine Undead",
		"GU",
		"ERC721",
		"/images/nfts/0x209e639a0ec166ac7a1a4ba41968fa967db30221.png"
	],
	[
		"0x20bbec0d4ef1cf8f903ef071e8cd15a3c02f301a",
		"Bored Jamet Punks Club V2",
		"BJPC",
		"ERC721",
		"/images/nfts/0x20bbec0d4ef1cf8f903ef071e8cd15a3c02f301a.png"
	],
	[
		"0x210727b13f631aeef8fc5f9db324efabcb235152",
		"Mamonono2022",
		"MAMONONO",
		"ERC721",
		"/images/nfts/0x210727b13f631aeef8fc5f9db324efabcb235152.png"
	],
	[
		"0x21177c97be40b52b002fbee000a03212708bcf47",
		"Doge Army by ShibaDoge",
		"DA",
		"ERC721",
		"/images/nfts/0x21177c97be40b52b002fbee000a03212708bcf47.png"
	],
	[
		"0x217880b486ca66c3feba1af1dc1afa9575ea8cd2",
		"borb.",
		"BORB",
		"ERC721",
		"/images/nfts/0x217880b486ca66c3feba1af1dc1afa9575ea8cd2.png"
	],
	[
		"0x223b204e95f85acbe460b5059f73659eee1e7495",
		"8bitguyz Official",
		"GUYZ",
		"ERC721",
		"/images/nfts/0x223b204e95f85acbe460b5059f73659eee1e7495.png"
	],
	[
		"0x223e16c52436cab2ca9fe37087c79986a288fffa",
		"Nickelodeon NFTs (ETH)",
		"NICK",
		"ERC721",
		"/images/nfts/0x223e16c52436cab2ca9fe37087c79986a288fffa.png"
	],
	[
		"0x224dc4df2a55c6c64b7223845895a703e542c258",
		"Melted Faces Reshape",
		"mFrS",
		"ERC721",
		"/images/nfts/0x224dc4df2a55c6c64b7223845895a703e542c258.png"
	],
	[
		"0x22bbc41a725823ebb8f3ae7db74bc67133aaf969",
		"The Goooose NFT",
		"Goose",
		"ERC721",
		"/images/nfts/0x22bbc41a725823ebb8f3ae7db74bc67133aaf969.png"
	],
	[
		"0x22c08c358f62f35b742d023bf2faf67e30e5376e",
		"0xApes Trilogy",
		"0xApe",
		"ERC721",
		"/images/nfts/0x22c08c358f62f35b742d023bf2faf67e30e5376e.png"
	],
	[
		"0x2308742aa28cc460522ff855d24a365f99deba7b",
		"FLUF World: Buzzies",
		"BUZZIES",
		"ERC721",
		"/images/nfts/0x2308742aa28cc460522ff855d24a365f99deba7b.png"
	],
	[
		"0x231d3559aa848bf10366fb9868590f01d34bf240",
		"Valhalla",
		"VAL",
		"ERC721",
		"/images/nfts/0x231d3559aa848bf10366fb9868590f01d34bf240.png"
	],
	[
		"0x23c8ec51e03e04a00591caba9b202f089a6b6bbe",
		"SpaceMonkeys NFT",
		"SMONKEYS",
		"ERC721",
		"/images/nfts/0x23c8ec51e03e04a00591caba9b202f089a6b6bbe.png"
	],
	[
		"0x23df60c63bf9b5bc78f9328f6b864768a0483cb0",
		"The Dropoutz NFT",
		"DPTZ",
		"ERC721",
		"/images/nfts/0x23df60c63bf9b5bc78f9328f6b864768a0483cb0.png"
	],
	[
		"0x248139afb8d3a2e16154fbe4fb528a3a214fd8e7",
		"Boki",
		"BOKI",
		"ERC721",
		"/images/nfts/0x248139afb8d3a2e16154fbe4fb528a3a214fd8e7.png"
	],
	[
		"0x2484bba7ff39fb1fb6057c59dc58546bd1ed9ec5",
		"PePe Edition",
		"PEPE",
		"ERC721",
		"/images/nfts/0x2484bba7ff39fb1fb6057c59dc58546bd1ed9ec5.png"
	],
	[
		"0x248a74f64bbf422dae243ed5d58ef0dd7298b972",
		"LofiLofts",
		"LL",
		"ERC721",
		"/images/nfts/0x248a74f64bbf422dae243ed5d58ef0dd7298b972.png"
	],
	[
		"0x249aeaa7fa06a63ea5389b72217476db881294df",
		"Theirsverse Official",
		"THEIRS",
		"ERC721",
		"/images/nfts/0x249aeaa7fa06a63ea5389b72217476db881294df.png"
	],
	[
		"0x249b90956ea0f80c2cb902dccde246b66a21d401",
		"Eyeverse.world",
		"Eyeverse",
		"ERC721",
		"/images/nfts/0x249b90956ea0f80c2cb902dccde246b66a21d401.png"
	],
	[
		"0x250e674ec63df4273c493c419d9f1e44035cbdac",
		"Weird Creatures Official",
		"WC",
		"ERC721",
		"/images/nfts/0x250e674ec63df4273c493c419d9f1e44035cbdac.png"
	],
	[
		"0x25692da406889bf4db93f921063d9bc952bd01d0",
		"We are Itsuki",
		"$ITSUKI",
		"ERC721",
		"/images/nfts/0x25692da406889bf4db93f921063d9bc952bd01d0.png"
	],
	[
		"0x26badf693f2b103b021c670c852262b379bbbe8a",
		"Illuminati",
		"Truth",
		"ERC721"
	],
	[
		"0x26baebef64ba69705adff49d3c10bf8ed5fe1573",
		"Guilty Bunnies",
		"GB",
		"ERC721",
		"/images/nfts/0x26baebef64ba69705adff49d3c10bf8ed5fe1573.png"
	],
	[
		"0x27013d274aa60c6e6883aa2130e8b01249eb11d4",
		"We All Survived Death",
		"WASD",
		"ERC721",
		"/images/nfts/0x27013d274aa60c6e6883aa2130e8b01249eb11d4.png"
	],
	[
		"0x2761d225a3bd0f308c5481d0fffff2442e7fa98b",
		"League of Prophets Official",
		"LOP",
		"ERC721",
		"/images/nfts/0x2761d225a3bd0f308c5481d0fffff2442e7fa98b.png"
	],
	[
		"0x282a7d13152b3f51a3e31d46a2ca563f8554d85d",
		"Slokh",
		"TSC",
		"ERC721",
		"/images/nfts/0x282a7d13152b3f51a3e31d46a2ca563f8554d85d.png"
	],
	[
		"0x283c0bba69ebd4643cfce761b34b0206e75b2091",
		"Super PUMA",
		"SPRPUMA",
		"ERC721",
		"/images/nfts/0x283c0bba69ebd4643cfce761b34b0206e75b2091.png"
	],
	[
		"0x287850ee043155d8e4aa6656478f1fb98f52d822",
		"Pudgy Mutants",
		"PUDGY",
		"ERC721",
		"/images/nfts/0x287850ee043155d8e4aa6656478f1fb98f52d822.png"
	],
	[
		"0x28c6ea3f9cf9bc1a07a828fce1e7783261691b49",
		"Beyond Earth Land",
		"BEL",
		"ERC721",
		"/images/nfts/0x28c6ea3f9cf9bc1a07a828fce1e7783261691b49.png"
	],
	[
		"0x28d33c407b81f58038300d619b501ab9f4a71b14",
		"Lil Hotties Official",
		"LHT",
		"ERC721",
		"/images/nfts/0x28d33c407b81f58038300d619b501ab9f4a71b14.png"
	],
	[
		"0x28dd343abfa64e6be404eba735485283fcd099d2",
		"OnlyPass",
		"OP",
		"ERC721",
		"/images/nfts/0x28dd343abfa64e6be404eba735485283fcd099d2.png"
	],
	[
		"0x28f0521c77923f107e29a5502a5a1152517f9000",
		"Pawn Bots",
		"BOTS",
		"ERC721",
		"/images/nfts/0x28f0521c77923f107e29a5502a5a1152517f9000.png"
	],
	[
		"0x29652c2e9d3656434bc8133c69258c8d05290f41",
		"Froggy Friends Official",
		"FROGGY",
		"ERC721",
		"/images/nfts/0x29652c2e9d3656434bc8133c69258c8d05290f41.png"
	],
	[
		"0x299ddaf037a800d4b7c02555851c7c294c5ad386",
		"Departed Apes: G Collection",
		"DAGC",
		"ERC721",
		"/images/nfts/0x299ddaf037a800d4b7c02555851c7c294c5ad386.png"
	],
	[
		"0x29b4ea6b1164c7cd8a3a0a1dc4ad88d1e0589124",
		"goodblocks",
		"GDBLK",
		"ERC721",
		"/images/nfts/0x29b4ea6b1164c7cd8a3a0a1dc4ad88d1e0589124.png"
	],
	[
		"0x29d7ebca656665c1a52a92f830e413e394db6b4f",
		"The Phoenixes by Habit Nest",
		"PHNX",
		"ERC721",
		"/images/nfts/0x29d7ebca656665c1a52a92f830e413e394db6b4f.png"
	],
	[
		"0x2a2ce8ebc5af38a2c0ab7667a24b6db05f285fba",
		"This Is Murica NFT",
		"Murican",
		"ERC721",
		"/images/nfts/0x2a2ce8ebc5af38a2c0ab7667a24b6db05f285fba.png"
	],
	[
		"0x2a459947f0ac25ec28c197f09c2d88058a83f3bb",
		"Stickmen Toys",
		"STICK",
		"ERC721",
		"/images/nfts/0x2a459947f0ac25ec28c197f09c2d88058a83f3bb.png"
	],
	[
		"0x2a48420d75777af4c99970c0ed3c25effd1c08be",
		"The MV3 Universe",
		"MV3NFT",
		"ERC721",
		"/images/nfts/0x2a48420d75777af4c99970c0ed3c25effd1c08be.png"
	],
	[
		"0x2a73068880618acc4dc8b0b9db29aa33ca5c5396",
		"The Fallen by Samurai Saga",
		"FALLEN",
		"ERC721",
		"/images/nfts/0x2a73068880618acc4dc8b0b9db29aa33ca5c5396.png"
	],
	[
		"0x2acab3dea77832c09420663b0e1cb386031ba17b",
		"Deadfellaz",
		"DEADFELLAZ",
		"ERC721",
		"/images/nfts/0x2acab3dea77832c09420663b0e1cb386031ba17b.png"
	],
	[
		"0x2acdfe510384c08e62556da121ed81242dab7aad",
		"Citizens of Overworld",
		"OVRWRLD",
		"ERC721",
		"/images/nfts/0x2acdfe510384c08e62556da121ed81242dab7aad.png"
	],
	[
		"0x2b2c05a40148df2bced9c2c222ed4de04f57dce5",
		"Check Mates Official",
		"ChecksMates",
		"ERC721",
		"/images/nfts/0x2b2c05a40148df2bced9c2c222ed4de04f57dce5.png"
	],
	[
		"0x2b9fd4d651414e51c9ba56ae1add36bb71cca24b",
		"Fat Rat Mafia",
		"FRM",
		"ERC721",
		"/images/nfts/0x2b9fd4d651414e51c9ba56ae1add36bb71cca24b.png"
	],
	[
		"0x2bd016017e1f6a7d0948334017e9037028dede98",
		"Game of Thrones: The North Series I Hero Box",
		"GOTB1",
		"ERC721",
		"/images/nfts/0x2bd016017e1f6a7d0948334017e9037028dede98.png"
	],
	[
		"0x2c88aa0956bc9813505d73575f653f69ada60923",
		"Wolf Game - Genesis Land",
		"LAND",
		"ERC721",
		"/images/nfts/0x2c88aa0956bc9813505d73575f653f69ada60923.png"
	],
	[
		"0x2c89a52a7156a3fb0bf416d5231b68748e4c283c",
		"Probably A Label",
		"PAL",
		"ERC721",
		"/images/nfts/0x2c89a52a7156a3fb0bf416d5231b68748e4c283c.png"
	],
	[
		"0x2cf6be9aac1c7630d5a23af88c28275c70eb8819",
		"Bulls and Apes Project - Genesis",
		"BAPBULL",
		"ERC721",
		"/images/nfts/0x2cf6be9aac1c7630d5a23af88c28275c70eb8819.png"
	],
	[
		"0x2d0d57d004f82e9f4471caa8b9f8b1965a814154",
		"PAYC Genesis",
		"PAYC",
		"ERC721",
		"/images/nfts/0x2d0d57d004f82e9f4471caa8b9f8b1965a814154.png"
	],
	[
		"0x2d33bfe1c867346543ac245396dfc6c3ebc8534f",
		"KPR",
		"KPRV2",
		"ERC721",
		"/images/nfts/0x2d33bfe1c867346543ac245396dfc6c3ebc8534f.png"
	],
	[
		"0x2d87a399b21906ba2689cb334ac77dfa01b76361",
		"The Walking Dead Lands - Tools",
		"TWD-LAND-TOOL-DROP",
		"ERC721",
		"/images/nfts/0x2d87a399b21906ba2689cb334ac77dfa01b76361.png"
	],
	[
		"0x2e6f4e6c24043e2089ddb8a8f84273b5c26ec639",
		"Mojis Art",
		"$mojis",
		"ERC721",
		"/images/nfts/0x2e6f4e6c24043e2089ddb8a8f84273b5c26ec639.png"
	],
	[
		"0x2f073c4a897c615101fe4df00ea0869191c6fa8d",
		"Drunk Robots",
		"DR",
		"ERC721",
		"/images/nfts/0x2f073c4a897c615101fe4df00ea0869191c6fa8d.png"
	],
	[
		"0x2f3df38924fb12a82f46298b8e9391e1fb714953",
		"Anatomy Rare Apepe YC",
		"ARAYC",
		"ERC721",
		"/images/nfts/0x2f3df38924fb12a82f46298b8e9391e1fb714953.png"
	],
	[
		"0x2f46e37477ca4033d74986b15f0572e9913b4858",
		"Proof of Pepe",
		"POPEP",
		"ERC721",
		"/images/nfts/0x2f46e37477ca4033d74986b15f0572e9913b4858.png"
	],
	[
		"0x303dfca16294e60459ed569b1ca680619d7b64f9",
		"Familiar Studios",
		"FMLR",
		"ERC721",
		"/images/nfts/0x303dfca16294e60459ed569b1ca680619d7b64f9.png"
	],
	[
		"0x3059955684071b412bd8e6f1506577ac11ddd692",
		"Mutant Y00ts Yacht Club Official",
		"MYYC",
		"ERC721",
		"/images/nfts/0x3059955684071b412bd8e6f1506577ac11ddd692.png"
	],
	[
		"0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949",
		"BEANZ Official",
		"BEANZ",
		"ERC721",
		"/images/nfts/0x306b1ea3ecdf94ab739f1910bbda052ed4a9f949.png"
	],
	[
		"0x3110ef5f612208724ca51f5761a69081809f03b7",
		"Impostors Genesis Aliens",
		"IMPOSTORS",
		"ERC721",
		"/images/nfts/0x3110ef5f612208724ca51f5761a69081809f03b7.png"
	],
	[
		"0x319e0e6a5c93c218e987a48ed3f98b23712db4d8",
		"Mutant Potion",
		"Mutant Potion",
		"ERC721",
		"/images/nfts/0x319e0e6a5c93c218e987a48ed3f98b23712db4d8.png"
	],
	[
		"0x31a3601a29aa27837451edc888e26f3d53cdce68",
		"Mighty Llama Genesis",
		"MGHT",
		"ERC721",
		"/images/nfts/0x31a3601a29aa27837451edc888e26f3d53cdce68.png"
	],
	[
		"0x31a7d612788277457c03e34ecd4efe4d6e6a8e39",
		"Project Kaito",
		"KAITO",
		"ERC721",
		"/images/nfts/0x31a7d612788277457c03e34ecd4efe4d6e6a8e39.png"
	],
	[
		"0x31aaf705fa77a3a7c7b22c1890c387a36b3e1718",
		"Kamiyo",
		"KMY",
		"ERC721",
		"/images/nfts/0x31aaf705fa77a3a7c7b22c1890c387a36b3e1718.png"
	],
	[
		"0x31d45de84fde2fb36575085e05754a4932dd5170",
		"Rare Apepes",
		"RAYC",
		"ERC721",
		"/images/nfts/0x31d45de84fde2fb36575085e05754a4932dd5170.png"
	],
	[
		"0x31d843b99c2c4088cd20d96ef2426673b958ff70",
		"MechMindsAI",
		"MM",
		"ERC721",
		"/images/nfts/0x31d843b99c2c4088cd20d96ef2426673b958ff70.png"
	],
	[
		"0x31fe9d95dde43cf9893b76160f63521a9e3d26b0",
		"Pirate Nation - Founder's Pirates - Old Contract",
		"PIRATE",
		"ERC721",
		"/images/nfts/0x31fe9d95dde43cf9893b76160f63521a9e3d26b0.png"
	],
	[
		"0x32805770d967b99605835fb11d27b22e7f8f0f0e",
		"Crypt Social Club Project",
		"CSC",
		"ERC721",
		"/images/nfts/0x32805770d967b99605835fb11d27b22e7f8f0f0e.png"
	],
	[
		"0x32973908faee0bf825a343000fe412ebe56f802a",
		"Pixelmon - Generation 1",
		"PXLMN",
		"ERC721",
		"/images/nfts/0x32973908faee0bf825a343000fe412ebe56f802a.png"
	],
	[
		"0x32b5cad3bc188c0f54a1259a47c719e4c6314a89",
		"Kawaii Meta Collage - Opera Meets Metaverse",
		"KMC",
		"ERC721",
		"/images/nfts/0x32b5cad3bc188c0f54a1259a47c719e4c6314a89.png"
	],
	[
		"0x32e136be91606c645ff62ff7075b2f0472fa13e1",
		"Tycoon Tigers Club",
		"TTC",
		"ERC721",
		"/images/nfts/0x32e136be91606c645ff62ff7075b2f0472fa13e1.png"
	],
	[
		"0x32edd2f7437665af088347791521f454831aaa29",
		"ShikibuWorld",
		"SKB",
		"ERC721",
		"/images/nfts/0x32edd2f7437665af088347791521f454831aaa29.png"
	],
	[
		"0x32f8ee2b5707138e1bdd04d3631a04eb104dc141",
		"AlphaDogs",
		"AD",
		"ERC721",
		"/images/nfts/0x32f8ee2b5707138e1bdd04d3631a04eb104dc141.png"
	],
	[
		"0x33333333333371718a3c2bb63e5f3b94c9bc13be",
		"SAN Origin",
		"SAN",
		"ERC721",
		"/images/nfts/0x33333333333371718a3c2bb63e5f3b94c9bc13be.png"
	],
	[
		"0x33c6eec1723b12c46732f7ab41398de45641fa42",
		"[ Ledger ] Market Pass - Genesis Edition",
		"LMP",
		"ERC721",
		"/images/nfts/0x33c6eec1723b12c46732f7ab41398de45641fa42.png"
	],
	[
		"0x33fd4167e51a10d19c89c3a606389d0fddc3e676",
		"Galactic Alien Social Club",
		"GASC",
		"ERC721",
		"/images/nfts/0x33fd4167e51a10d19c89c3a606389d0fddc3e676.png"
	],
	[
		"0x340700450f0303791529789793909c703730926f",
		"CryptoBirbs by Vodnik",
		"BRBS",
		"ERC721",
		"/images/nfts/0x340700450f0303791529789793909c703730926f.png"
	],
	[
		"0x340f8999e1f45a7155e4e2be15e20fc64c2d2d13",
		"Dead Cat Check",
		"DEADCATCHECK",
		"ERC721",
		"/images/nfts/0x340f8999e1f45a7155e4e2be15e20fc64c2d2d13.png"
	],
	[
		"0x346b5b8844d2548f6ad55089d8939cffbe3acbaf",
		"Kung Fungus",
		"KUNGFUNGUS",
		"ERC721",
		"/images/nfts/0x346b5b8844d2548f6ad55089d8939cffbe3acbaf.png"
	],
	[
		"0x34913a375683474f0f3022655a07aa59cc848848",
		"AIPudgys",
		"AIP",
		"ERC721",
		"/images/nfts/0x34913a375683474f0f3022655a07aa59cc848848.png"
	],
	[
		"0x34b09150783499056b2e04a94c25814fe6ac1c7b",
		"Project 0xD38",
		"0xD38",
		"ERC721",
		"/images/nfts/0x34b09150783499056b2e04a94c25814fe6ac1c7b.png"
	],
	[
		"0x34bc797f40df0445c8429d485232874b15561728",
		"Lucid Official",
		"LUCD",
		"ERC721",
		"/images/nfts/0x34bc797f40df0445c8429d485232874b15561728.png"
	],
	[
		"0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258",
		"Otherdeed for Otherside",
		"OTHR",
		"ERC721",
		"/images/nfts/0x34d85c9cdeb23fa97cb08333b511ac86e1c4e258.png"
	],
	[
		"0x34eebee6942d8def3c125458d1a86e0a897fd6f9",
		"Checks - VV Edition",
		"CHECKS",
		"ERC721",
		"/images/nfts/0x34eebee6942d8def3c125458d1a86e0a897fd6f9.png"
	],
	[
		"0x354634c4621cdfb7a25e6486cca1e019777d841b",
		"Mutant Hounds",
		"MH",
		"ERC721",
		"/images/nfts/0x354634c4621cdfb7a25e6486cca1e019777d841b.png"
	],
	[
		"0x355891dbe6bd9e1856ae2d293da9d1f411ef991f",
		"ETH Villages",
		"ETHVIL",
		"ERC721",
		"/images/nfts/0x355891dbe6bd9e1856ae2d293da9d1f411ef991f.png"
	],
	[
		"0x356e1363897033759181727e4bff12396c51a7e0",
		"9999 Luftballons",
		"LUFTBALLONS",
		"ERC721",
		"/images/nfts/0x356e1363897033759181727e4bff12396c51a7e0.png"
	],
	[
		"0x35f3b8f37e9341f289398b70fa2c576dd102df75",
		"BALUBA",
		"BALUBA",
		"ERC721",
		"/images/nfts/0x35f3b8f37e9341f289398b70fa2c576dd102df75.png"
	],
	[
		"0x360c8a7c01fd75b00814d6282e95eaff93837f27",
		"LeprechaunTown_WTF",
		"LTWTF",
		"ERC721",
		"/images/nfts/0x360c8a7c01fd75b00814d6282e95eaff93837f27.png"
	],
	[
		"0x362bb483ace8270eab53bbbd6392033cfa40769e",
		"ChadsGPT",
		"CGPT",
		"ERC721",
		"/images/nfts/0x362bb483ace8270eab53bbbd6392033cfa40769e.png"
	],
	[
		"0x36308c9eb628cf99f55a0cff9434bfd02bc8d04a",
		"The Pals Universe By Sean Webster",
		"PALS",
		"ERC721",
		"/images/nfts/0x36308c9eb628cf99f55a0cff9434bfd02bc8d04a.png"
	],
	[
		"0x364c828ee171616a39897688a831c2499ad972ec",
		"Sappy Seals",
		"SAPS",
		"ERC721",
		"/images/nfts/0x364c828ee171616a39897688a831c2499ad972ec.png"
	],
	[
		"0x365d87a8d31c656ed1479c0f54f19e3be9f19537",
		"DuDuLab Project",
		"DuDu",
		"ERC721",
		"/images/nfts/0x365d87a8d31c656ed1479c0f54f19e3be9f19537.png"
	],
	[
		"0x369443a0e62889646b338498d87316252bb5f8c7",
		"DeadDegens",
		"DD",
		"ERC721",
		"/images/nfts/0x369443a0e62889646b338498d87316252bb5f8c7.png"
	],
	[
		"0x37e1abc100676acbd5c581a9d60d914a10d08dd5",
		"CNP Gotouchi",
		"CNPG",
		"ERC721",
		"/images/nfts/0x37e1abc100676acbd5c581a9d60d914a10d08dd5.png"
	],
	[
		"0x38c5699625c10b309dc6bb18be9c458d19b43d3a",
		"Immortal by NFTmemeClub",
		"IMT",
		"ERC721",
		"/images/nfts/0x38c5699625c10b309dc6bb18be9c458d19b43d3a.png"
	],
	[
		"0x38d8b04ab6b9392c8e14f4745eb25dc3f4a49bb0",
		"Lucky Fish NFT",
		"LF",
		"ERC721",
		"/images/nfts/0x38d8b04ab6b9392c8e14f4745eb25dc3f4a49bb0.png"
	],
	[
		"0x39223e2596bf8e1de3894f66947cacc614c24a2f",
		"Suki Learns to Fly",
		"SUKI",
		"ERC721",
		"/images/nfts/0x39223e2596bf8e1de3894f66947cacc614c24a2f.png"
	],
	[
		"0x394e3d3044fc89fcdd966d3cb35ac0b32b0cda91",
		"RENGA",
		"RENGA",
		"ERC721",
		"/images/nfts/0x394e3d3044fc89fcdd966d3cb35ac0b32b0cda91.png"
	],
	[
		"0x395e65993f20be438bf3db2a1b1233485c978558",
		"Sprout Academy",
		"SPROUT",
		"ERC721",
		"/images/nfts/0x395e65993f20be438bf3db2a1b1233485c978558.png"
	],
	[
		"0x3964a3f36d5673a4b5719f70097042909e7131ab",
		"Critters-Town NFT",
		"CrittersTown",
		"ERC721",
		"/images/nfts/0x3964a3f36d5673a4b5719f70097042909e7131ab.png"
	],
	[
		"0x39ee2c7b3cb80254225884ca001f57118c8f21b6",
		"The Potatoz",
		"Potatoz",
		"ERC721",
		"/images/nfts/0x39ee2c7b3cb80254225884ca001f57118c8f21b6.png"
	],
	[
		"0x39f05ce5a8d32975cebfa1239cdb935cae31fe8d",
		"Checks - Art History",
		"CHECKS",
		"ERC721",
		"/images/nfts/0x39f05ce5a8d32975cebfa1239cdb935cae31fe8d.png"
	],
	[
		"0x3a112d86899578e63b373b6d09322e18aed924cb",
		"Lucky Neko!",
		"LKNK",
		"ERC721",
		"/images/nfts/0x3a112d86899578e63b373b6d09322e18aed924cb.png"
	],
	[
		"0x3a2096754df385553c4252e5a82dc862e64169bb",
		"The Possessed",
		"PSSSSD",
		"ERC721",
		"/images/nfts/0x3a2096754df385553c4252e5a82dc862e64169bb.png"
	],
	[
		"0x3a987f099e7f1d0ca6403570a9d5a69b819f86ee",
		"Official Skulourful",
		"SKUL",
		"ERC721",
		"/images/nfts/0x3a987f099e7f1d0ca6403570a9d5a69b819f86ee.png"
	],
	[
		"0x3acce66cd37518a6d77d9ea3039e00b3a2955460",
		"WonderPals",
		"WNDR",
		"ERC721",
		"/images/nfts/0x3acce66cd37518a6d77d9ea3039e00b3a2955460.png"
	],
	[
		"0x3adbdfa13c0b6931257833f4a04e653279e2f4aa",
		"Versailles Heroes",
		"VRHH",
		"ERC721",
		"/images/nfts/0x3adbdfa13c0b6931257833f4a04e653279e2f4aa.png"
	],
	[
		"0x3b14d194c8cf46402beb9820dc218a15e7b0a38f",
		"DeFi Girls",
		"DFGIRL",
		"ERC721",
		"/images/nfts/0x3b14d194c8cf46402beb9820dc218a15e7b0a38f.png"
	],
	[
		"0x3b1fbe997c2253cffa975c066fa3feec326337dd",
		"Donald Trump Yacht Club",
		"Donald Trump Yacht Club",
		"ERC721",
		"/images/nfts/0x3b1fbe997c2253cffa975c066fa3feec326337dd.png"
	],
	[
		"0x3b3698303f600f11589c3dc6e2b0abf18b79cd55",
		"Goblinland_wtf",
		"SMELLYLAND",
		"ERC721",
		"/images/nfts/0x3b3698303f600f11589c3dc6e2b0abf18b79cd55.png"
	],
	[
		"0x3b3c2dacfdd7b620c8916a5f7aa6476bdfb1aa07",
		"Children of Ukiyo",
		"CoU",
		"ERC721",
		"/images/nfts/0x3b3c2dacfdd7b620c8916a5f7aa6476bdfb1aa07.png"
	],
	[
		"0x3b9edbc42ba4acedb4f2aa290aefbb40cd10fcac",
		"PirateApes",
		"BAPC",
		"ERC721",
		"/images/nfts/0x3b9edbc42ba4acedb4f2aa290aefbb40cd10fcac.png"
	],
	[
		"0x3bcacb18f4d60c8cba68cd95860daf3e32bebcb6",
		"Lost Miners of the Ether",
		"MERGE",
		"ERC721",
		"/images/nfts/0x3bcacb18f4d60c8cba68cd95860daf3e32bebcb6.png"
	],
	[
		"0x3bf2922f4520a8ba0c2efc3d2a1539678dad5e9d",
		"0N1 Force",
		"0N1",
		"ERC721",
		"/images/nfts/0x3bf2922f4520a8ba0c2efc3d2a1539678dad5e9d.png"
	],
	[
		"0x3c6d92f1db872469c8dbc04ff6301b766214a712",
		"MoonJaks",
		"MJ",
		"ERC721",
		"/images/nfts/0x3c6d92f1db872469c8dbc04ff6301b766214a712.png"
	],
	[
		"0x3c7b1f3ba0f3dd37c23448c7a10a2df6fc629ac8",
		"Mecha Cat Crew NFT",
		"MCC",
		"ERC721",
		"/images/nfts/0x3c7b1f3ba0f3dd37c23448c7a10a2df6fc629ac8.png"
	],
	[
		"0x3ceb6868bfbf99f6b76fe5bb37343c075677c698",
		"V1 Phunks",
		"V1PHNK",
		"ERC721",
		"/images/nfts/0x3ceb6868bfbf99f6b76fe5bb37343c075677c698.png"
	],
	[
		"0x3cf314571da3e56eaee61af2b30af56f75d3a602",
		"McPepe's",
		"MCPEPES",
		"ERC721",
		"/images/nfts/0x3cf314571da3e56eaee61af2b30af56f75d3a602.png"
	],
	[
		"0x3d0830aa84dae5bb64ea091a943dfbeb0719ec52",
		"Punkillaz Co.",
		"PNKZ",
		"ERC721",
		"/images/nfts/0x3d0830aa84dae5bb64ea091a943dfbeb0719ec52.png"
	],
	[
		"0x3d1226e7361e14d5869b89b4182bd875f9c04371",
		"Warriors of the Hollow Frost",
		"WOTHF",
		"ERC721",
		"/images/nfts/0x3d1226e7361e14d5869b89b4182bd875f9c04371.png"
	],
	[
		"0x3d4e1dbacf05e34d21fd0a4f7ac8f4c0890659a9",
		"Ahegao NFT Official",
		"AHG",
		"ERC721",
		"/images/nfts/0x3d4e1dbacf05e34d21fd0a4f7ac8f4c0890659a9.png"
	],
	[
		"0x3df5c619a4926156f966a64e08f863385c21da0e",
		"HELIX Founder Pass Official",
		"HELIX",
		"ERC721",
		"/images/nfts/0x3df5c619a4926156f966a64e08f863385c21da0e.png"
	],
	[
		"0x3e920067186663bebf6f7981e62b8dbf6113b1fa",
		"Pandoverse Club",
		"PANDO",
		"ERC721",
		"/images/nfts/0x3e920067186663bebf6f7981e62b8dbf6113b1fa.png"
	],
	[
		"0x3e99c4b84c3662b4b0f5a15ae88ca4f2e21034ac",
		"Crypto Dog Society Official",
		"CDS",
		"ERC721",
		"/images/nfts/0x3e99c4b84c3662b4b0f5a15ae88ca4f2e21034ac.png"
	],
	[
		"0x3efde3541dec397387a559829d8e2f061763fe7f",
		"Menji's World Official",
		"MW",
		"ERC721",
		"/images/nfts/0x3efde3541dec397387a559829d8e2f061763fe7f.png"
	],
	[
		"0x3f3915fb8769ee456035331bc2f7fbe380f6b4d2",
		"Createra Genesis Land",
		"CGL",
		"ERC721",
		"/images/nfts/0x3f3915fb8769ee456035331bc2f7fbe380f6b4d2.png"
	],
	[
		"0x3f64bced4cc5e47f2262791d4e1caedabac59bb9",
		"Producer C Official",
		"PRODUCER C",
		"ERC721",
		"/images/nfts/0x3f64bced4cc5e47f2262791d4e1caedabac59bb9.png"
	],
	[
		"0x3f7e4b1ebe37788a941dc095ed56c8ab2bb2d402",
		"Galactic Explorers (GEX)",
		"GEX",
		"ERC721",
		"/images/nfts/0x3f7e4b1ebe37788a941dc095ed56c8ab2bb2d402.png"
	],
	[
		"0x40345597561ff617fbb215cd0f589877ea252a9c",
		"Edomin",
		"EDO",
		"ERC721",
		"/images/nfts/0x40345597561ff617fbb215cd0f589877ea252a9c.png"
	],
	[
		"0x4078f1fcc6d4b20d905a87ac18f533ff5e76863e",
		"PepeDaigaku",
		"PepeDaigaku",
		"ERC721",
		"/images/nfts/0x4078f1fcc6d4b20d905a87ac18f533ff5e76863e.png"
	],
	[
		"0x40948a124b632a900a58ad01e2ef0534b97a1087",
		"Dodoor NFT",
		"DDNFT",
		"ERC721",
		"/images/nfts/0x40948a124b632a900a58ad01e2ef0534b97a1087.png"
	],
	[
		"0x40a1cfdd75071ee0caa50964c2c1acbb9375424e",
		"Bonepen Edition - Collection",
		"BONEPEN",
		"ERC721",
		"/images/nfts/0x40a1cfdd75071ee0caa50964c2c1acbb9375424e.png"
	],
	[
		"0x40a3ff5971822ad4c1529a7157f8e2c445b2494f",
		"EDUCATION PASSPORT NFT",
		"EPASS",
		"ERC721",
		"/images/nfts/0x40a3ff5971822ad4c1529a7157f8e2c445b2494f.png"
	],
	[
		"0x410adce627311feee1e285f85e8ca4bd290c9062",
		"Valhalla Pepe",
		"VALPEPE",
		"ERC721",
		"/images/nfts/0x410adce627311feee1e285f85e8ca4bd290c9062.png"
	],
	[
		"0x41f20599e9e049004c4d169046eb7023117a6244",
		"Gutter Clones",
		"CLONE",
		"ERC721",
		"/images/nfts/0x41f20599e9e049004c4d169046eb7023117a6244.png"
	],
	[
		"0x42026c4dbf2ead2ba951ccb3c321c49b7738cab4",
		"Hyakki-Official",
		"HYA",
		"ERC721",
		"/images/nfts/0x42026c4dbf2ead2ba951ccb3c321c49b7738cab4.png"
	],
	[
		"0x4259dd21b7b45e5ac66443391a6e489c9d1665b4",
		"facefatigueunion",
		"FFU",
		"ERC721",
		"/images/nfts/0x4259dd21b7b45e5ac66443391a6e489c9d1665b4.png"
	],
	[
		"0x42c2cec3ae48302cb93bf14c4205992dfcbdfffb",
		"ELFOOZ",
		"Elfooz",
		"ERC721",
		"/images/nfts/0x42c2cec3ae48302cb93bf14c4205992dfcbdfffb.png"
	],
	[
		"0x42dc0cecefbaf8e81d631a75fa212510c347f66b",
		"BasedHeads",
		"BASED",
		"ERC721",
		"/images/nfts/0x42dc0cecefbaf8e81d631a75fa212510c347f66b.png"
	],
	[
		"0x436f6a8e71f0c26b1690360166f6270021343aaa",
		"pxRobos",
		"RBT",
		"ERC721",
		"/images/nfts/0x436f6a8e71f0c26b1690360166f6270021343aaa.png"
	],
	[
		"0x43ebbeda1ab50de58e2adbc071ab78d27864b5e4",
		"AIPES NFT",
		"AIBAPE",
		"ERC721",
		"/images/nfts/0x43ebbeda1ab50de58e2adbc071ab78d27864b5e4.png"
	],
	[
		"0x4409beba97bb28022462414aeec138b0e7659453",
		"RockerPunks",
		"RP",
		"ERC721",
		"/images/nfts/0x4409beba97bb28022462414aeec138b0e7659453.png"
	],
	[
		"0x444e68716dad3e3de014dd718dce79b739403488",
		"The Bagholders",
		"BAGS",
		"ERC721",
		"/images/nfts/0x444e68716dad3e3de014dd718dce79b739403488.png"
	],
	[
		"0x445ede1ce0a4f6d05720cc691893c5bc3ea1bed7",
		"NICE OFFICIAL",
		"NICE",
		"ERC721",
		"/images/nfts/0x445ede1ce0a4f6d05720cc691893c5bc3ea1bed7.png"
	],
	[
		"0x4499ba2f8968d844a8fa5c6b917361f9c84c40df",
		"Solace.",
		"SOLACE",
		"ERC721",
		"/images/nfts/0x4499ba2f8968d844a8fa5c6b917361f9c84c40df.png"
	],
	[
		"0x455c732fee7b5c3b09531439b598ead4817d5274",
		"adidas IMPOSSIBLE BOX",
		"ADICAP",
		"ERC721",
		"/images/nfts/0x455c732fee7b5c3b09531439b598ead4817d5274.png"
	],
	[
		"0x4591c791790f352685a29111eca67abdc878863e",
		"Voyagers: Genesis",
		"VOYAGERS",
		"ERC721",
		"/images/nfts/0x4591c791790f352685a29111eca67abdc878863e.png"
	],
	[
		"0x460c98172d107e104b7d63f4dd935d025407cf04",
		"CloneZ AI Collection",
		"CloneXAI",
		"ERC721",
		"/images/nfts/0x460c98172d107e104b7d63f4dd935d025407cf04.png"
	],
	[
		"0x460fdc8dfab2310a38ddc6c6de344cd26472a0d7",
		"The Sillies",
		"Sillies",
		"ERC721",
		"/images/nfts/0x460fdc8dfab2310a38ddc6c6de344cd26472a0d7.png"
	],
	[
		"0x4664d282072bff886fadcb2a7e20fe737c58fdca",
		"Earpitz",
		"EARPITZ",
		"ERC721",
		"/images/nfts/0x4664d282072bff886fadcb2a7e20fe737c58fdca.png"
	],
	[
		"0x466cfcd0525189b573e794f554b8a751279213ac",
		"Dooplicator",
		"DOOPL",
		"ERC721",
		"/images/nfts/0x466cfcd0525189b573e794f554b8a751279213ac.png"
	],
	[
		"0x46fdfcb3cd89a1c54d36ee83a4adc184747b40d9",
		"META KONGZ OFFICIAL",
		"KONGZ",
		"ERC721",
		"/images/nfts/0x46fdfcb3cd89a1c54d36ee83a4adc184747b40d9.png"
	],
	[
		"0x477f516db22683e65df58c2cba4f5d5859d48424",
		"SOULS",
		"SOULS",
		"ERC721",
		"/images/nfts/0x477f516db22683e65df58c2cba4f5d5859d48424.png"
	],
	[
		"0x477f885f6333317f5b2810ecc8afadc7d5b69dd2",
		"YuGiYn",
		"YGY",
		"ERC721",
		"/images/nfts/0x477f885f6333317f5b2810ecc8afadc7d5b69dd2.png"
	],
	[
		"0x47a00fc8590c11be4c419d9ae50dec267b6e24ee",
		"Alien Frens Evolution",
		"AFE",
		"ERC721",
		"/images/nfts/0x47a00fc8590c11be4c419d9ae50dec267b6e24ee.png"
	],
	[
		"0x47ca259baf9e5c265e2c679706ee2ac7475f69ea",
		"Mutant Hound Collars AI",
		"MHCA",
		"ERC721",
		"/images/nfts/0x47ca259baf9e5c265e2c679706ee2ac7475f69ea.png"
	],
	[
		"0x47f3a38990ca12e39255e959f7d97fbe5906afd4",
		"Ape Reunion",
		"APE_REUNION",
		"ERC721",
		"/images/nfts/0x47f3a38990ca12e39255e959f7d97fbe5906afd4.png"
	],
	[
		"0x485fdcfe14d4a62044dc7b772b6cf5092a87b85f",
		"The Shimps",
		"TheTwoBoys",
		"ERC721",
		"/images/nfts/0x485fdcfe14d4a62044dc7b772b6cf5092a87b85f.png"
	],
	[
		"0x486d922ef86c365c90641948b907ac245a556332",
		"Strange Connections NFT",
		"SCNFT",
		"ERC721",
		"/images/nfts/0x486d922ef86c365c90641948b907ac245a556332.png"
	],
	[
		"0x48da0766131fd6a099da1af852dc740e80b60e70",
		"Random Ravers GG",
		"RAVERSGG",
		"ERC721",
		"/images/nfts/0x48da0766131fd6a099da1af852dc740e80b60e70.png"
	],
	[
		"0x495f1ec64467539cad047629086e3cd95459e374",
		"Big Eye Rebellion",
		"BER",
		"ERC721",
		"/images/nfts/0x495f1ec64467539cad047629086e3cd95459e374.png"
	],
	[
		"0x49adcc97404c197190a5866885018c558006974a",
		"Lumens by Vibes + Logic",
		"LUMEN",
		"ERC721",
		"/images/nfts/0x49adcc97404c197190a5866885018c558006974a.png"
	],
	[
		"0x49c36afa15c7fdbd57ce3d61d80f39b6615a76ef",
		"3D Invisible Friends",
		"INVSBLE3D",
		"ERC721",
		"/images/nfts/0x49c36afa15c7fdbd57ce3d61d80f39b6615a76ef.png"
	],
	[
		"0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b",
		"CLONE X - X TAKASHI MURAKAMI",
		"CloneX",
		"ERC721",
		"/images/nfts/0x49cf6f5d44e70224e2e23fdcdd2c053f30ada28b.png"
	],
	[
		"0x4a793dff8db7717fa042c5a71cbdaee883016ba6",
		"WHIKO",
		"Whiko",
		"ERC721",
		"/images/nfts/0x4a793dff8db7717fa042c5a71cbdaee883016ba6.png"
	],
	[
		"0x4a8c9d751eeabc5521a68fb080dd7e72e46462af",
		"Arcade Land",
		"ARCLAND",
		"ERC721",
		"/images/nfts/0x4a8c9d751eeabc5521a68fb080dd7e72e46462af.png"
	],
	[
		"0x4b13e4107b62cdcb96e0ad84ad4bc2f684440d13",
		"yEEts NFT",
		"yEEtswtf",
		"ERC721",
		"/images/nfts/0x4b13e4107b62cdcb96e0ad84ad4bc2f684440d13.png"
	],
	[
		"0x4b570b636e4f744199ec82f52d69b08b394ab850",
		"DopeApeClub",
		"DAC",
		"ERC721",
		"/images/nfts/0x4b570b636e4f744199ec82f52d69b08b394ab850.png"
	],
	[
		"0x4b61413d4392c806e6d0ff5ee91e6073c21d6430",
		"Muri by Fabrik",
		"MURI",
		"ERC721",
		"/images/nfts/0x4b61413d4392c806e6d0ff5ee91e6073c21d6430.png"
	],
	[
		"0x4b81714cd2a0e5ec540575d40a46f0639a20b678",
		"RareApepeGrlzYC",
		"RAG",
		"ERC721",
		"/images/nfts/0x4b81714cd2a0e5ec540575d40a46f0639a20b678.png"
	],
	[
		"0x4bb08998a697d0db666783ba5b56e85b33ba262f",
		"Frenly Pandas",
		"FANDAS",
		"ERC721",
		"/images/nfts/0x4bb08998a697d0db666783ba5b56e85b33ba262f.png"
	],
	[
		"0x4be08b9db3eb7690b3d0362fde239aec919483d0",
		"BRYC",
		"BRYC",
		"ERC721",
		"/images/nfts/0x4be08b9db3eb7690b3d0362fde239aec919483d0.png"
	],
	[
		"0x4becbdf97747413a18c5a2a53321d09198d3a100",
		"Okay Bears Yacht Club",
		"OBYC",
		"ERC721",
		"/images/nfts/0x4becbdf97747413a18c5a2a53321d09198d3a100.png"
	],
	[
		"0x4c33397611f0974ead4e0072221933becde79436",
		"Passengers Genesis",
		"PASSENGERS",
		"ERC721",
		"/images/nfts/0x4c33397611f0974ead4e0072221933becde79436.png"
	],
	[
		"0x4c69dbc3a2aa3476c3f7a1227ab70950db1f4858",
		"10K World Cup",
		"10K World Cup",
		"ERC721",
		"/images/nfts/0x4c69dbc3a2aa3476c3f7a1227ab70950db1f4858.png"
	],
	[
		"0x4d5958974dbe62917fa939d114d7de6248003d1e",
		"3600YAKO NFT",
		"YAKO",
		"ERC721",
		"/images/nfts/0x4d5958974dbe62917fa939d114d7de6248003d1e.png"
	],
	[
		"0x4d5ad9198f71f23bd002ef8445a1a8cf2932c744",
		"Casual Sloths Official",
		"CSLOTHS",
		"ERC721",
		"/images/nfts/0x4d5ad9198f71f23bd002ef8445a1a8cf2932c744.png"
	],
	[
		"0x4e1f41613c9084fdb9e34e11fae9412427480e56",
		"Terraforms by Mathcastles",
		"TERRAFORMS",
		"ERC721",
		"/images/nfts/0x4e1f41613c9084fdb9e34e11fae9412427480e56.png"
	],
	[
		"0x4ee7104442ac3fea5665143da9ede79beee8519c",
		"The Kali Yuga Lab",
		"TKYL",
		"ERC721",
		"/images/nfts/0x4ee7104442ac3fea5665143da9ede79beee8519c.png"
	],
	[
		"0x4ef3d9eab34783995bc394d569845585ac805ef8",
		"The Americans NFT",
		"TAs",
		"ERC721",
		"/images/nfts/0x4ef3d9eab34783995bc394d569845585ac805ef8.png"
	],
	[
		"0x4f49149ac66129b56996fd0a043a9be63f85e1e2",
		"This is Nouns",
		"NOUN001",
		"ERC721",
		"/images/nfts/0x4f49149ac66129b56996fd0a043a9be63f85e1e2.png"
	],
	[
		"0x4f636ab8672cdeb2fdf681598fc5fa3efe2e0078",
		"flawless renegades",
		"FR69",
		"ERC721",
		"/images/nfts/0x4f636ab8672cdeb2fdf681598fc5fa3efe2e0078.png"
	],
	[
		"0x4f70d1c9d5c8a57db5acc139915f69d06bd22f49",
		"MushGang",
		"MUSH",
		"ERC721",
		"/images/nfts/0x4f70d1c9d5c8a57db5acc139915f69d06bd22f49.png"
	],
	[
		"0x5008c2a3af41024e9f0bd0432df4f75828602598",
		"Infamous - Clearance Passes",
		"INFM",
		"ERC721",
		"/images/nfts/0x5008c2a3af41024e9f0bd0432df4f75828602598.png"
	],
	[
		"0x5069fbffb1f65e6c3d9efe7c70c4c0d13524e960",
		"Daydreamers NFT",
		"DREAM",
		"ERC721",
		"/images/nfts/0x5069fbffb1f65e6c3d9efe7c70c4c0d13524e960.png"
	],
	[
		"0x5078981549a1cc18673eb76fb47468f546aadc51",
		"feetpix.wtf",
		"FEET",
		"ERC721",
		"/images/nfts/0x5078981549a1cc18673eb76fb47468f546aadc51.png"
	],
	[
		"0x5139cfee9e8533d9f52be27be183ec60c7222274",
		"The Wizards of Etheen",
		"WZRDS",
		"ERC721",
		"/images/nfts/0x5139cfee9e8533d9f52be27be183ec60c7222274.png"
	],
	[
		"0x51544102435f7df4f294848e552d6869d0443e0e",
		"TAYLOR.WTF OG Logo",
		"TAYLOR",
		"ERC721",
		"/images/nfts/0x51544102435f7df4f294848e552d6869d0443e0e.png"
	],
	[
		"0x517a5d9b9a531576713dea44eb13c66b08305b21",
		"Skeletal Cats Official",
		"SKTLCAT",
		"ERC721",
		"/images/nfts/0x517a5d9b9a531576713dea44eb13c66b08305b21.png"
	],
	[
		"0x5188778677b9c337d6fc4e7e3751592c7e6a3992",
		"Atari x Quidd",
		"QMA",
		"ERC721",
		"/images/nfts/0x5188778677b9c337d6fc4e7e3751592c7e6a3992.png"
	],
	[
		"0x518ba36f1ca6dfe3bb1b098b8dd0444030e79d9f",
		"Wonky Stonks",
		"WSTK",
		"ERC721",
		"/images/nfts/0x518ba36f1ca6dfe3bb1b098b8dd0444030e79d9f.png"
	],
	[
		"0x51d09df42b859971fa7bc566103d608e126b8778",
		"Bad Cats Gang",
		"BCG",
		"ERC721",
		"/images/nfts/0x51d09df42b859971fa7bc566103d608e126b8778.png"
	],
	[
		"0x524cab2ec69124574082676e6f654a18df49a048",
		"Lil Pudgys",
		"LP",
		"ERC721",
		"/images/nfts/0x524cab2ec69124574082676e6f654a18df49a048.png"
	],
	[
		"0x5266c5aca260818be013c80bd9ed5ba0f3d49070",
		"ADVENTUROUS HALFLINGS",
		"HFLS",
		"ERC721",
		"/images/nfts/0x5266c5aca260818be013c80bd9ed5ba0f3d49070.png"
	],
	[
		"0x52c5dd8a4ffb5a24121d76c222014697b5e6cc6e",
		"Maximalists",
		"MAXI",
		"ERC721",
		"/images/nfts/0x52c5dd8a4ffb5a24121d76c222014697b5e6cc6e.png"
	],
	[
		"0x52e69720be9b7200f7ea509a6f06d643ad24a777",
		"Smashverse",
		"SMASH",
		"ERC721",
		"/images/nfts/0x52e69720be9b7200f7ea509a6f06d643ad24a777.png"
	],
	[
		"0x543d43f390b7d681513045e8a85707438c463d80",
		"Webaverse Genesis Pass",
		"WEBA",
		"ERC721",
		"/images/nfts/0x543d43f390b7d681513045e8a85707438c463d80.png"
	],
	[
		"0x54616c0815c306fc22417b96282ca4aa6f47d357",
		"troll-town.wtf",
		"TTWTF",
		"ERC721",
		"/images/nfts/0x54616c0815c306fc22417b96282ca4aa6f47d357.png"
	],
	[
		"0x54f7c7df7258cb5f2ceb2dcff5f7f50585ca3923",
		"Teddies",
		"TED",
		"ERC721",
		"/images/nfts/0x54f7c7df7258cb5f2ceb2dcff5f7f50585ca3923.png"
	],
	[
		"0x54f9c72d128b4bbc7ff7564cbe0f193aba7bb146",
		"Bad Influence 0x",
		"BAD",
		"ERC721",
		"/images/nfts/0x54f9c72d128b4bbc7ff7564cbe0f193aba7bb146.png"
	],
	[
		"0x554b96d40b7b35544d98f0fb885d4c193a70b1a2",
		"Synonyms - By Big Hugs Studio",
		"SYNON",
		"ERC721",
		"/images/nfts/0x554b96d40b7b35544d98f0fb885d4c193a70b1a2.png"
	],
	[
		"0x556697ca91476b811f37a851dd2e53ae4c6024db",
		"Brawler Bearz",
		"BB",
		"ERC721",
		"/images/nfts/0x556697ca91476b811f37a851dd2e53ae4c6024db.png"
	],
	[
		"0x55724d388aeb791f64ba42ee918a38ee28a39f19",
		"Mud Cats",
		"MC",
		"ERC721",
		"/images/nfts/0x55724d388aeb791f64ba42ee918a38ee28a39f19.png"
	],
	[
		"0x557e05005e541fddbc27692750088a928d41a8f0",
		"EXE Radiance by EXEVerse",
		"EXERAD",
		"ERC721",
		"/images/nfts/0x557e05005e541fddbc27692750088a928d41a8f0.png"
	],
	[
		"0x565abc3feaa3bc3820b83620f4bbf16b5c4d47a3",
		"Whoopsies Doopsies",
		"WHOOPDOOP",
		"ERC721",
		"/images/nfts/0x565abc3feaa3bc3820b83620f4bbf16b5c4d47a3.png"
	],
	[
		"0x568a6f14c8096983b341b5514930a45637e13222",
		"Acrocalypse Spacecraft",
		"SPACECRAFT",
		"ERC721",
		"/images/nfts/0x568a6f14c8096983b341b5514930a45637e13222.png"
	],
	[
		"0x5691d95d42131742196b1d1ebd02fcfc7edae5c3",
		"DoDoFrens.xyz",
		"DODO",
		"ERC721",
		"/images/nfts/0x5691d95d42131742196b1d1ebd02fcfc7edae5c3.png"
	],
	[
		"0x5733e9490472ac6be02a879f7c3e19eceabc24be",
		"Dininho Adventures",
		"DA",
		"ERC721",
		"/images/nfts/0x5733e9490472ac6be02a879f7c3e19eceabc24be.png"
	],
	[
		"0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85",
		"ENS: Ethereum Name Service",
		"ENS: Ethereum Name Service",
		"ERC721",
		"/images/nfts/0x57f1887a8bf19b14fc0df6fd9b2acc9af147ea85.png"
	],
	[
		"0x5802c586f657c787902280ac091d81832d7faf84",
		"Bored y00ts AC",
		"BYAC",
		"ERC721",
		"/images/nfts/0x5802c586f657c787902280ac091d81832d7faf84.png"
	],
	[
		"0x581e4fd879eff9d2f36012c4dad563f64a2f250d",
		"Grandpa Apes",
		"GA",
		"ERC721",
		"/images/nfts/0x581e4fd879eff9d2f36012c4dad563f64a2f250d.png"
	],
	[
		"0x58732f8cf59571c30d3ec5f3c2bf764ed37d3fac",
		"The Turks #MAXKEBAB",
		"TURK",
		"ERC721",
		"/images/nfts/0x58732f8cf59571c30d3ec5f3c2bf764ed37d3fac.png"
	],
	[
		"0x592f6585dcaaf7524a7c5b17e9c1c80a917ac94c",
		"Hidden Kitten City",
		"HKC",
		"ERC721",
		"/images/nfts/0x592f6585dcaaf7524a7c5b17e9c1c80a917ac94c.png"
	],
	[
		"0x595787ffbc575619f1e22f9f0e4cd069e93d228c",
		"HELIX - PARALLEL CITY LAND",
		"Helix Land",
		"ERC721",
		"/images/nfts/0x595787ffbc575619f1e22f9f0e4cd069e93d228c.png"
	],
	[
		"0x598061a4ac7fa240acc3e7025b4b047ada178704",
		"Cloudmachine",
		"CLOUD",
		"ERC721",
		"/images/nfts/0x598061a4ac7fa240acc3e7025b4b047ada178704.png"
	],
	[
		"0x59ad67e9c6a84e602bc73b3a606f731cc6df210d",
		"Momoguro: Holoself",
		"Holo",
		"ERC721",
		"/images/nfts/0x59ad67e9c6a84e602bc73b3a606f731cc6df210d.png"
	],
	[
		"0x5a0121a0a21232ec0d024dab9017314509026480",
		"Finiliar",
		"FINI",
		"ERC721",
		"/images/nfts/0x5a0121a0a21232ec0d024dab9017314509026480.png"
	],
	[
		"0x5a57ed460bd0368bfcf48dd3dd246a56b4bbb891",
		"Krapopolis Krap Chickens",
		"KRAPCHICKENS",
		"ERC721",
		"/images/nfts/0x5a57ed460bd0368bfcf48dd3dd246a56b4bbb891.png"
	],
	[
		"0x5a8e04a84fb2f6ad4002c824045c7c1bde10cb81",
		"Frog Central",
		"FrogCentral",
		"ERC721",
		"/images/nfts/0x5a8e04a84fb2f6ad4002c824045c7c1bde10cb81.png"
	],
	[
		"0x5aed93f1033c2bb1c662550ab7901cb9beedd850",
		"Shroomio",
		"SHROOMIO",
		"ERC721",
		"/images/nfts/0x5aed93f1033c2bb1c662550ab7901cb9beedd850.png"
	],
	[
		"0x5af0d9827e0c53e4799bb226655a1de152a425a5",
		"Milady Maker",
		"MIL",
		"ERC721",
		"/images/nfts/0x5af0d9827e0c53e4799bb226655a1de152a425a5.png"
	],
	[
		"0x5b003b8a7ddc04ccf873cd098647dd525ad5e854",
		"deadthings",
		"DEAD",
		"ERC721",
		"/images/nfts/0x5b003b8a7ddc04ccf873cd098647dd525ad5e854.png"
	],
	[
		"0x5b15e94477148f12a4914c2f267f10af0e8e93aa",
		"Usedtoiletswtf",
		"TOILET",
		"ERC721",
		"/images/nfts/0x5b15e94477148f12a4914c2f267f10af0e8e93aa.png"
	],
	[
		"0x5b5b5470246992d519b02550213182cf0e0bf2c3",
		"Bricks Checks",
		"BRC",
		"ERC721",
		"/images/nfts/0x5b5b5470246992d519b02550213182cf0e0bf2c3.png"
	],
	[
		"0x5b5cf41d9ec08d101ffeeeebda411677582c9448",
		"XANA: GENESIS (this collection has been moved to another contract)",
		"XGS",
		"ERC721",
		"/images/nfts/0x5b5cf41d9ec08d101ffeeeebda411677582c9448.png"
	],
	[
		"0x5b9d7ee3ba252c41a07c2d6ec799eff8858bf117",
		"BTFA Community",
		"BTFA",
		"ERC721",
		"/images/nfts/0x5b9d7ee3ba252c41a07c2d6ec799eff8858bf117.png"
	],
	[
		"0x5bd815fd6c096bab38b4c6553cfce3585194dff9",
		"The Art of Seasons",
		"TAOS",
		"ERC721",
		"/images/nfts/0x5bd815fd6c096bab38b4c6553cfce3585194dff9.png"
	],
	[
		"0x5bdf47c6691edf5d2e5f7a156324d88e1478fca6",
		"Bagner",
		"BAG",
		"ERC721",
		"/images/nfts/0x5bdf47c6691edf5d2e5f7a156324d88e1478fca6.png"
	],
	[
		"0x5c3228e02fa41e767c7a202eee7b56c3bab9f932",
		"Fat Fingers",
		"FF",
		"ERC721",
		"/images/nfts/0x5c3228e02fa41e767c7a202eee7b56c3bab9f932.png"
	],
	[
		"0x5c588436972621a3ca7006da20e76021e0d4ffc1",
		"WAGMIs NFT",
		"WGM",
		"ERC721",
		"/images/nfts/0x5c588436972621a3ca7006da20e76021e0d4ffc1.png"
	],
	[
		"0x5cc5b05a8a13e3fbdb0bb9fccd98d38e50f90c38",
		"The Sandbox",
		"LAND",
		"ERC721",
		"/images/nfts/0x5cc5b05a8a13e3fbdb0bb9fccd98d38e50f90c38.png"
	],
	[
		"0x5d26060847445efb92c6f03d1382bcdd07b67280",
		"Dolce&Gabbana Realta Parallela",
		"DGRP",
		"ERC721",
		"/images/nfts/0x5d26060847445efb92c6f03d1382bcdd07b67280.png"
	],
	[
		"0x5d62fb8dcd9b480960f55956fbdd8d9f07f2b402",
		"MISTFITS PROJECT",
		"MFN",
		"ERC721",
		"/images/nfts/0x5d62fb8dcd9b480960f55956fbdd8d9f07f2b402.png"
	],
	[
		"0x5d95c4c73e152727750df27ff7da1c7169430dd6",
		"BGYC",
		"BGYC",
		"ERC721",
		"/images/nfts/0x5d95c4c73e152727750df27ff7da1c7169430dd6.png"
	],
	[
		"0x5db2394a5abcbb7ee33d09d1d027d0215a76afce",
		"Fairy Fiends",
		"FWY",
		"ERC721",
		"/images/nfts/0x5db2394a5abcbb7ee33d09d1d027d0215a76afce.png"
	],
	[
		"0x5dee90ca7aea1df95075ea8b417bb497a36b3cf3",
		"Planet COCO",
		"COCO",
		"ERC721",
		"/images/nfts/0x5dee90ca7aea1df95075ea8b417bb497a36b3cf3.png"
	],
	[
		"0x5f1cbe84d44e292fe3eae51b87f34bbdc8f04fc8",
		"BBYC Bored Bits Yacht Club",
		"BBYC",
		"ERC721",
		"/images/nfts/0x5f1cbe84d44e292fe3eae51b87f34bbdc8f04fc8.png"
	],
	[
		"0x5f4a54e29ccb8a02cdf7d7bfa8a0999a8330cced",
		"Reptile Armoury",
		"ARMS",
		"ERC721",
		"/images/nfts/0x5f4a54e29ccb8a02cdf7d7bfa8a0999a8330cced.png"
	],
	[
		"0x5f8c3af28b7af2fd628f9ccd14d12570da0715ae",
		"BitGoatz NFT",
		"OMG",
		"ERC721",
		"/images/nfts/0x5f8c3af28b7af2fd628f9ccd14d12570da0715ae.png"
	],
	[
		"0x5f8f3d8ff1d529e88f1d68bb00b2be47f086501b",
		"Life goes on, META KONGZ",
		"LGO",
		"ERC721",
		"/images/nfts/0x5f8f3d8ff1d529e88f1d68bb00b2be47f086501b.png"
	],
	[
		"0x5f93eff82825323cb8db096fda2abdb9d43c1720",
		"DEEPOBJECTS.ai - Collection 001",
		"DOS",
		"ERC721",
		"/images/nfts/0x5f93eff82825323cb8db096fda2abdb9d43c1720.png"
	],
	[
		"0x5fb46714436090e59a60b349bf7fb82a172fee92",
		"Wealthy Ape Investor Club",
		"WAIC",
		"ERC721",
		"/images/nfts/0x5fb46714436090e59a60b349bf7fb82a172fee92.png"
	],
	[
		"0x5fd0fad0e853d80e228cce268b5ba84b0fa3ab9a",
		"Pikuserushounen",
		"PIKU",
		"ERC721",
		"/images/nfts/0x5fd0fad0e853d80e228cce268b5ba84b0fa3ab9a.png"
	],
	[
		"0x603a481580c8cf85ee169b315653bd9d33c39e52",
		"EVERYBODYS",
		"EVERY",
		"ERC721",
		"/images/nfts/0x603a481580c8cf85ee169b315653bd9d33c39e52.png"
	],
	[
		"0x6079ea481ebb901568e294e8dcdecff6ac451b1a",
		"Monster Cave - Elder Torch",
		"Monster Cave - Elder Torch",
		"ERC721",
		"/images/nfts/0x6079ea481ebb901568e294e8dcdecff6ac451b1a.png"
	],
	[
		"0x60e4d786628fea6478f785a6d7e704777c86a7c6",
		"Mutant Ape Yacht Club",
		"MAYC",
		"ERC721",
		"/images/nfts/0x60e4d786628fea6478f785a6d7e704777c86a7c6.png"
	],
	[
		"0x60eb332bd4a0e2a9eeb3212cfdd6ef03ce4cb3b5",
		"dotbit(.bit): Web3 Identity",
		"DOTBIT",
		"ERC721",
		"/images/nfts/0x60eb332bd4a0e2a9eeb3212cfdd6ef03ce4cb3b5.png"
	],
	[
		"0x6184facb1850c8f7160cc2f7be8d2bc5192d3b70",
		"Space Addicts",
		"ZA",
		"ERC721",
		"/images/nfts/0x6184facb1850c8f7160cc2f7be8d2bc5192d3b70.png"
	],
	[
		"0x61e3d1c26802df805e9fc22dc26342e29ecfe860",
		"Savage Nation",
		"Savage Nation",
		"ERC721",
		"/images/nfts/0x61e3d1c26802df805e9fc22dc26342e29ecfe860.png"
	],
	[
		"0x6208f29a9388d9f9869cc4752f6de8e281738ef6",
		"Pecasso Fantasy",
		"PEFA",
		"ERC721",
		"/images/nfts/0x6208f29a9388d9f9869cc4752f6de8e281738ef6.png"
	],
	[
		"0x62cba733c441e914631cad4782032481b2d8e548",
		"RAC NFT",
		"RAYC",
		"ERC721",
		"/images/nfts/0x62cba733c441e914631cad4782032481b2d8e548.png"
	],
	[
		"0x62d46d36e2b20af50fbc7fd9ac7c9356795c9e5f",
		"FAEBL",
		"FAEBL",
		"ERC721",
		"/images/nfts/0x62d46d36e2b20af50fbc7fd9ac7c9356795c9e5f.png"
	],
	[
		"0x63217dbb73e7a02c1d30f486e899ee66d0aa5e0b",
		"Ghost Boy",
		"GHOST",
		"ERC721",
		"/images/nfts/0x63217dbb73e7a02c1d30f486e899ee66d0aa5e0b.png"
	],
	[
		"0x6339e5e072086621540d0362c4e3cea0d643e114",
		"Opepen Edition",
		"OPEPEN",
		"ERC721",
		"/images/nfts/0x6339e5e072086621540d0362c4e3cea0d643e114.png"
	],
	[
		"0x6372e41cd6415261cf38daccefed2f0cc206c282",
		"Zenogakki: Birth Of Utopia",
		"ZENO",
		"ERC721",
		"/images/nfts/0x6372e41cd6415261cf38daccefed2f0cc206c282.png"
	],
	[
		"0x6389936fac235a4fadf660ca5c428084115579bb",
		"Trident Pseudo Krakens",
		"PSEUDO",
		"ERC721",
		"/images/nfts/0x6389936fac235a4fadf660ca5c428084115579bb.png"
	],
	[
		"0x63d4121a5426f649b0006708b61022ca3d73b37a",
		"Censored Boys Syndicate",
		"CNSRD",
		"ERC721",
		"/images/nfts/0x63d4121a5426f649b0006708b61022ca3d73b37a.png"
	],
	[
		"0x63d85ec7b1561818ec03e158ec125a4113038a00",
		"Kryptoria - Alpha Citizens",
		"KRYPTORIA",
		"ERC721",
		"/images/nfts/0x63d85ec7b1561818ec03e158ec125a4113038a00.png"
	],
	[
		"0x63fa29fec10c997851ccd2466dad20e51b17c8af",
		"FishyFam",
		"FF",
		"ERC721",
		"/images/nfts/0x63fa29fec10c997851ccd2466dad20e51b17c8af.png"
	],
	[
		"0x6400311e9c0887c2c8c559a419be89bbd7a6af9f",
		"W3 Nation Official",
		"w3",
		"ERC721",
		"/images/nfts/0x6400311e9c0887c2c8c559a419be89bbd7a6af9f.png"
	],
	[
		"0x64ad353bc90a04361c4810ae7b3701f3beb48d7e",
		"RENGA Black Box",
		"BOX",
		"ERC721",
		"/images/nfts/0x64ad353bc90a04361c4810ae7b3701f3beb48d7e.png"
	],
	[
		"0x64b6b4142d4d78e49d53430c1d3939f2317f9085",
		"AINightbirds",
		"MBAI",
		"ERC721",
		"/images/nfts/0x64b6b4142d4d78e49d53430c1d3939f2317f9085.png"
	],
	[
		"0x656d34a8309363302e46de99853f4cef30b85a1d",
		"R Planet - Genesis Collection",
		"RPlanet",
		"ERC721",
		"/images/nfts/0x656d34a8309363302e46de99853f4cef30b85a1d.png"
	],
	[
		"0x65784d6f23de30a17122e96c0f0986c378ed6947",
		"Bored Ape Yoga Club",
		"BAYC",
		"ERC721",
		"/images/nfts/0x65784d6f23de30a17122e96c0f0986c378ed6947.png"
	],
	[
		"0x658bdf5cba855e04724589a61c3e4b1856b69a5b",
		"Prisoner of War NFT",
		"POW",
		"ERC721",
		"/images/nfts/0x658bdf5cba855e04724589a61c3e4b1856b69a5b.png"
	],
	[
		"0x6609e542e0626bc3fc2110f0ead172030fbe97ab",
		"This Artwork Is Subject To Change",
		"TAISTC",
		"ERC721",
		"/images/nfts/0x6609e542e0626bc3fc2110f0ead172030fbe97ab.png"
	],
	[
		"0x662081d1df478ba4aceda637dcf1ef762e7a3a6e",
		"1984 Worldwide",
		"1984",
		"ERC721",
		"/images/nfts/0x662081d1df478ba4aceda637dcf1ef762e7a3a6e.png"
	],
	[
		"0x6661c87764adf7fffa3c7922fa6edfa2fd62ccfc",
		"commoners by commonopoly",
		"CMMNR",
		"ERC721",
		"/images/nfts/0x6661c87764adf7fffa3c7922fa6edfa2fd62ccfc.png"
	],
	[
		"0x670d4dd2e6badfbbd372d0d37e06cd2852754a04",
		"Nina's Super Cool World",
		"COOL",
		"ERC721",
		"/images/nfts/0x670d4dd2e6badfbbd372d0d37e06cd2852754a04.png"
	],
	[
		"0x671f3b17628b1498db264e8ac77da4e78167ba9e",
		"FreeNFT.com Collectible Launch Ticket",
		"FreeNFTCLT",
		"ERC721",
		"/images/nfts/0x671f3b17628b1498db264e8ac77da4e78167ba9e.png"
	],
	[
		"0x6728d91abacdbac2f326baa384513a523c21b80a",
		"ShitBeast",
		"SB",
		"ERC721",
		"/images/nfts/0x6728d91abacdbac2f326baa384513a523c21b80a.png"
	],
	[
		"0x682cc62aa7b51103d7b52990e0185871e16575a6",
		"we will rock you!",
		"ROCKS",
		"ERC721",
		"/images/nfts/0x682cc62aa7b51103d7b52990e0185871e16575a6.png"
	],
	[
		"0x684e4ed51d350b4d76a3a07864df572d24e6dc4c",
		"Isekai Meta",
		"ISEKAI",
		"ERC721",
		"/images/nfts/0x684e4ed51d350b4d76a3a07864df572d24e6dc4c.png"
	],
	[
		"0x6866ab4d2bfc8254430d32f152f07da9382035c2",
		"REALFKNCLOWNZ",
		"FKN",
		"ERC721",
		"/images/nfts/0x6866ab4d2bfc8254430d32f152f07da9382035c2.png"
	],
	[
		"0x68bd8b7c45633de6d7afd0b1f7b86b37b8a3c02a",
		"Beanbag Frens",
		"BBFRENS",
		"ERC721",
		"/images/nfts/0x68bd8b7c45633de6d7afd0b1f7b86b37b8a3c02a.png"
	],
	[
		"0x6950f7ec392911de504a79f5334d39f4933faf25",
		"Chimera King",
		"CK",
		"ERC721",
		"/images/nfts/0x6950f7ec392911de504a79f5334d39f4933faf25.png"
	],
	[
		"0x696383fc9c5c8568c2e7af8731279b58b9201394",
		"SubwayRats",
		"SR",
		"ERC721",
		"/images/nfts/0x696383fc9c5c8568c2e7af8731279b58b9201394.png"
	],
	[
		"0x697ed880c89c55a004003318690981d708e0d9ed",
		"Doge Heroes Official",
		"DH",
		"ERC721",
		"/images/nfts/0x697ed880c89c55a004003318690981d708e0d9ed.png"
	],
	[
		"0x69b9c98e8d715c25b330d0d4eb07e68cbb7f6cfc",
		"Starcatchers",
		"STAR",
		"ERC721",
		"/images/nfts/0x69b9c98e8d715c25b330d0d4eb07e68cbb7f6cfc.png"
	],
	[
		"0x69cdc3245c714a6b99cea9b43869e2b893a031ad",
		"Moon Owls NFT",
		"MOOWL",
		"ERC721",
		"/images/nfts/0x69cdc3245c714a6b99cea9b43869e2b893a031ad.png"
	],
	[
		"0x69eda943891e3730a56125a7e0340cb109b5532f",
		"Skull'edz",
		"SKULL",
		"ERC721",
		"/images/nfts/0x69eda943891e3730a56125a7e0340cb109b5532f.png"
	],
	[
		"0x6a77dea20e455c30c95a169031b1b0d9757546dc",
		"BITCOINORB",
		"BTCORB",
		"ERC721",
		"/images/nfts/0x6a77dea20e455c30c95a169031b1b0d9757546dc.png"
	],
	[
		"0x6b123105e9a4c56f1ee2eb012bda74664ec63515",
		"The Estates Collection",
		"ESTATES",
		"ERC721",
		"/images/nfts/0x6b123105e9a4c56f1ee2eb012bda74664ec63515.png"
	],
	[
		"0x6b3c2dd23251d95c34c4f5a3b20140e2881cc36d",
		"Realms of Ethernity Pets",
		"MOUNT",
		"ERC721",
		"/images/nfts/0x6b3c2dd23251d95c34c4f5a3b20140e2881cc36d.png"
	],
	[
		"0x6b8281df97604eeae4b9e0d26e667507eb301e91",
		"EZU",
		"EZU",
		"ERC721",
		"/images/nfts/0x6b8281df97604eeae4b9e0d26e667507eb301e91.png"
	],
	[
		"0x6bb2fd3a5ab3d2e29bbd094b2bfcbd8989594e87",
		"NEN STUDIO",
		"NEN",
		"ERC721",
		"/images/nfts/0x6bb2fd3a5ab3d2e29bbd094b2bfcbd8989594e87.png"
	],
	[
		"0x6c410cf0b8c113dc6a7641b431390b11d5515082",
		"RTFKT Animus Egg ????",
		"Egg",
		"ERC721",
		"/images/nfts/0x6c410cf0b8c113dc6a7641b431390b11d5515082.png"
	],
	[
		"0x6c5a06ae6b773457480c12f12c2fb22627507a3a",
		"CrudeBorne Eggs",
		"CB.EGGS",
		"ERC721",
		"/images/nfts/0x6c5a06ae6b773457480c12f12c2fb22627507a3a.png"
	],
	[
		"0x6c869a43a9d362ef870d75dae56a01887578421d",
		"Homa Gang - Valentine",
		"VAL",
		"ERC721",
		"/images/nfts/0x6c869a43a9d362ef870d75dae56a01887578421d.png"
	],
	[
		"0x6cb26df0c825fece867a84658f87b0ecbcea72f6",
		"Life's A Joke NFT Official",
		"LAJ",
		"ERC721",
		"/images/nfts/0x6cb26df0c825fece867a84658f87b0ecbcea72f6.png"
	],
	[
		"0x6d19568a959fcb4211852f6472d3df7b67c6cd54",
		"MysticsUniverse",
		"MU",
		"ERC721",
		"/images/nfts/0x6d19568a959fcb4211852f6472d3df7b67c6cd54.png"
	],
	[
		"0x6d8aaf30159dbca3baa3ba1531ec7483af5248cb",
		"Supreme Bones X",
		"SBX",
		"ERC721",
		"/images/nfts/0x6d8aaf30159dbca3baa3ba1531ec7483af5248cb.png"
	],
	[
		"0x6d8bfe6b39735f7b0c5232c3a743495ae7f4fa81",
		"BONSAI NFT FARM",
		"BNF",
		"ERC721",
		"/images/nfts/0x6d8bfe6b39735f7b0c5232c3a743495ae7f4fa81.png"
	],
	[
		"0x6d9c17bc83a416bb992ccc671bebd98d7a76cfc3",
		"Dori Samurai",
		"DORI",
		"ERC721",
		"/images/nfts/0x6d9c17bc83a416bb992ccc671bebd98d7a76cfc3.png"
	],
	[
		"0x6de7ac835ec6841af9b94fd1273db83b8d69e3f7",
		"Monsterland (Genesis)",
		"Monsterland",
		"ERC721",
		"/images/nfts/0x6de7ac835ec6841af9b94fd1273db83b8d69e3f7.png"
	],
	[
		"0x6e3b47a8697bc62be030827f4927a50eb3a93d2a",
		"LOREMNFT",
		"LOREM",
		"ERC721",
		"/images/nfts/0x6e3b47a8697bc62be030827f4927a50eb3a93d2a.png"
	],
	[
		"0x6f1c3f578ef3f0d2cf9b1ec712d9654f143ea4d1",
		"Shrooms by Vodnik",
		"SBV",
		"ERC721",
		"/images/nfts/0x6f1c3f578ef3f0d2cf9b1ec712d9654f143ea4d1.png"
	],
	[
		"0x6f3aca0d7d5d8639e314bd20b79abb3e51c06f47",
		"Lana Del Taco",
		"LANAS",
		"ERC721",
		"/images/nfts/0x6f3aca0d7d5d8639e314bd20b79abb3e51c06f47.png"
	],
	[
		"0x6f4388602c5dd6c593bf7c9cf3128aaa2a3e09ce",
		"Tickle Beach",
		"TCKL",
		"ERC721",
		"/images/nfts/0x6f4388602c5dd6c593bf7c9cf3128aaa2a3e09ce.png"
	],
	[
		"0x6f58822e1ece96747df51dc436021bd58f2a039e",
		"handpix.wtf",
		"HAND",
		"ERC721",
		"/images/nfts/0x6f58822e1ece96747df51dc436021bd58f2a039e.png"
	],
	[
		"0x6fdc11ca6df2975e88d5f03c335476990de331cc",
		"Lil Kami",
		"LK",
		"ERC721",
		"/images/nfts/0x6fdc11ca6df2975e88d5f03c335476990de331cc.png"
	],
	[
		"0x6fefb647395e680339badc84dc774e3ca8bca7b9",
		"MY BEAUTIFUL DARK TWISTED FANTASY BY BEEBLE",
		"MBDTF",
		"ERC721",
		"/images/nfts/0x6fefb647395e680339badc84dc774e3ca8bca7b9.png"
	],
	[
		"0x705b9dbd0d5607beafe12e2fb74d64268d3ba35f",
		"y00ts Yacht Club",
		"YYC",
		"ERC721",
		"/images/nfts/0x705b9dbd0d5607beafe12e2fb74d64268d3ba35f.png"
	],
	[
		"0x70685de040818c4e21ea2f080bce756115c15721",
		"Smart Ape Yacht Club (SAYC)",
		"SAYC",
		"ERC721",
		"/images/nfts/0x70685de040818c4e21ea2f080bce756115c15721.png"
	],
	[
		"0x70789e18a75611a9516d6251d650d096740a9e07",
		"SteezyApeGang",
		"SAG",
		"ERC721",
		"/images/nfts/0x70789e18a75611a9516d6251d650d096740a9e07.png"
	],
	[
		"0x709d30f1f60f03d85a0ef33142ef3259392dc9e1",
		"Loser Club Official",
		"LOSERCLUB",
		"ERC721",
		"/images/nfts/0x709d30f1f60f03d85a0ef33142ef3259392dc9e1.png"
	],
	[
		"0x70b66a312f831ce5539fde5bc037d76eeb78eb7e",
		"The Ghost Army",
		"TGA",
		"ERC721",
		"/images/nfts/0x70b66a312f831ce5539fde5bc037d76eeb78eb7e.png"
	],
	[
		"0x7140400c663da4c4fe6adbc26340fc17827c5481",
		"DragonTown",
		"DTown",
		"ERC721",
		"/images/nfts/0x7140400c663da4c4fe6adbc26340fc17827c5481.png"
	],
	[
		"0x7167d8eff9d7e8f58c58001697a61a71150e79bf",
		"Comedian | Open Editions by Highlight",
		"HIGH",
		"ERC721",
		"/images/nfts/0x7167d8eff9d7e8f58c58001697a61a71150e79bf.png"
	],
	[
		"0x716f29b8972d551294d9e02b3eb0fc1107fbf4aa",
		"IO: Imaginary Ones",
		"IO",
		"ERC721",
		"/images/nfts/0x716f29b8972d551294d9e02b3eb0fc1107fbf4aa.png"
	],
	[
		"0x72a71fbdd91e68dea5e1c7d547485bb0b8210a64",
		"AVverse",
		"AVV",
		"ERC721",
		"/images/nfts/0x72a71fbdd91e68dea5e1c7d547485bb0b8210a64.png"
	],
	[
		"0x72a94e6c51cb06453b84c049ce1e1312f7c05e2c",
		"Wiiides",
		"Wiiides",
		"ERC721",
		"/images/nfts/0x72a94e6c51cb06453b84c049ce1e1312f7c05e2c.png"
	],
	[
		"0x73350fdf1bfd08555d6fe440d3ffa87104d1da19",
		"Colizeum ELITE Marketplace",
		"ELITE",
		"ERC721",
		"/images/nfts/0x73350fdf1bfd08555d6fe440d3ffa87104d1da19.png"
	],
	[
		"0x740c178e10662bbb050bde257bfa318defe3cabc",
		"8liens NFT",
		"8LIENS",
		"ERC721",
		"/images/nfts/0x740c178e10662bbb050bde257bfa318defe3cabc.png"
	],
	[
		"0x74211ca76d4cdd26c143e8ffd74469a04ae4e43b",
		"POTHEADZ by Satoshi's Mom",
		"POTHEADZ",
		"ERC721",
		"/images/nfts/0x74211ca76d4cdd26c143e8ffd74469a04ae4e43b.png"
	],
	[
		"0x742fbe84557a978c8c06af20375a17bd2031f036",
		"iamai.wtf",
		"IAMAI",
		"ERC721",
		"/images/nfts/0x742fbe84557a978c8c06af20375a17bd2031f036.png"
	],
	[
		"0x745735600dcf9562060becdae9a1a0afffcd9cf6",
		"Kiko Bakes",
		"YUM",
		"ERC721",
		"/images/nfts/0x745735600dcf9562060becdae9a1a0afffcd9cf6.png"
	],
	[
		"0x749cda693c2f29bf894df5b7060034cb675ee631",
		"Meta Ape Militia",
		"MAM",
		"ERC721",
		"/images/nfts/0x749cda693c2f29bf894df5b7060034cb675ee631.png"
	],
	[
		"0x74cedb4f333cb2e554349f498145e02952b920a9",
		"PECFriends",
		"PECFREN",
		"ERC721",
		"/images/nfts/0x74cedb4f333cb2e554349f498145e02952b920a9.png"
	],
	[
		"0x7509fb53526396937ede6b26d4b2dc8e12e2c376",
		"WhosjiLabs NFT",
		"WhosjiLabs",
		"ERC721",
		"/images/nfts/0x7509fb53526396937ede6b26d4b2dc8e12e2c376.png"
	],
	[
		"0x7521aaba12afff1c18d43398528371d0f991f640",
		"Yummi Gummi by Resaang",
		"GUMMI",
		"ERC721",
		"/images/nfts/0x7521aaba12afff1c18d43398528371d0f991f640.png"
	],
	[
		"0x753f10598c026e73182ca74ed33de05974b9f083",
		"Champions Ascension - Pets of Massina - MIGRATE Your Champions Ascension NFTs. Purchases on Hold",
		"PET",
		"ERC721",
		"/images/nfts/0x753f10598c026e73182ca74ed33de05974b9f083.png"
	],
	[
		"0x75789db97d94749473cb57a0925b35ffc14437ff",
		"OSYC",
		"OSYC",
		"ERC721",
		"/images/nfts/0x75789db97d94749473cb57a0925b35ffc14437ff.png"
	],
	[
		"0x75e95ba5997eb235f40ecf8347cdb11f18ff640b",
		"Psychedelics Anonymous Genesis",
		"PA",
		"ERC721",
		"/images/nfts/0x75e95ba5997eb235f40ecf8347cdb11f18ff640b.png"
	],
	[
		"0x764aeebcf425d56800ef2c84f2578689415a2daa",
		"Sewer Pass",
		"SEWER",
		"ERC721",
		"/images/nfts/0x764aeebcf425d56800ef2c84f2578689415a2daa.png"
	],
	[
		"0x765da497beaf1c7d83476c0e77b6caba672defb9",
		"Darkflex",
		"DARKFLEX",
		"ERC721",
		"/images/nfts/0x765da497beaf1c7d83476c0e77b6caba672defb9.png"
	],
	[
		"0x767e261bb70cb893aed1ce4295e92e7c05a67c1e",
		"MetaArks-2D",
		"MA2D",
		"ERC721",
		"/images/nfts/0x767e261bb70cb893aed1ce4295e92e7c05a67c1e.png"
	],
	[
		"0x76b3af5f0f9b89ca5a4f9fe6c58421dbe567062d",
		"NotOkayBears",
		"NOB",
		"ERC721",
		"/images/nfts/0x76b3af5f0f9b89ca5a4f9fe6c58421dbe567062d.png"
	],
	[
		"0x770ca0b825810f43ca7d67fdc2bdc7f10f911264",
		"Treasure LOOT",
		"TLOOT",
		"ERC721",
		"/images/nfts/0x770ca0b825810f43ca7d67fdc2bdc7f10f911264.png"
	],
	[
		"0x771cb139a67a420c277e5bfcb33fbb007bc0db2c",
		"Shibuya Scramble Punks -SSP-",
		"SSP",
		"ERC721",
		"/images/nfts/0x771cb139a67a420c277e5bfcb33fbb007bc0db2c.png"
	],
	[
		"0x77372a4cc66063575b05b44481f059be356964a4",
		"a KID called BEAST",
		"AKCB",
		"ERC721",
		"/images/nfts/0x77372a4cc66063575b05b44481f059be356964a4.png"
	],
	[
		"0x77e2545d1d63856e22ce82e3d6f2a3b2077232bf",
		"CamelsNFT",
		"Camels",
		"ERC721",
		"/images/nfts/0x77e2545d1d63856e22ce82e3d6f2a3b2077232bf.png"
	],
	[
		"0x77f649385ca963859693c3d3299d36dfc7324eb9",
		"Tribe Odyssey",
		"Tribe",
		"ERC721",
		"/images/nfts/0x77f649385ca963859693c3d3299d36dfc7324eb9.png"
	],
	[
		"0x7867b3ac827426fe68a308e1011394f688cb7ec5",
		"DROP'S - META KAWAII",
		"DROPS",
		"ERC721",
		"/images/nfts/0x7867b3ac827426fe68a308e1011394f688cb7ec5.png"
	],
	[
		"0x78a3b30f90f9a39272c1cb3e558fcd1cbe5fb791",
		"MMMM Genesis Mic-Doll",
		"MICDOLL",
		"ERC721",
		"/images/nfts/0x78a3b30f90f9a39272c1cb3e558fcd1cbe5fb791.png"
	],
	[
		"0x78a5e2b8c280fa5580fbe1e1ed546183f959d305",
		"AlphaSharks NFT",
		"ALPHASHARKS",
		"ERC721",
		"/images/nfts/0x78a5e2b8c280fa5580fbe1e1ed546183f959d305.png"
	],
	[
		"0x7946c4bededc2ab98e1682c55505093c88624c02",
		"WeBearz Official- Explore The Woodz",
		"WBZV2",
		"ERC721",
		"/images/nfts/0x7946c4bededc2ab98e1682c55505093c88624c02.png"
	],
	[
		"0x795baa0b8f58bb4af50311d27c25027cc4ba5f9b",
		"Atsui",
		"ANFT",
		"ERC721",
		"/images/nfts/0x795baa0b8f58bb4af50311d27c25027cc4ba5f9b.png"
	],
	[
		"0x796a722e6f13489790978f6ecb1a3f83ae063825",
		"CryptoBirdeez",
		"DEEZ",
		"ERC721",
		"/images/nfts/0x796a722e6f13489790978f6ecb1a3f83ae063825.png"
	],
	[
		"0x79a40675a001af548de745908dfc97a6410f733b",
		"Mint个鸡吧",
		"鸡Coin",
		"ERC721",
		"/images/nfts/0x79a40675a001af548de745908dfc97a6410f733b.png"
	],
	[
		"0x79aa05963c92a2a10d96bd840eb5e73a1e675e92",
		"The Randoms NFTs",
		"RNDMS",
		"ERC721",
		"/images/nfts/0x79aa05963c92a2a10d96bd840eb5e73a1e675e92.png"
	],
	[
		"0x79f1c4cf7266746698e91034d658e56913e6644f",
		"MetaSamurai - OFFICIAL",
		"MS",
		"ERC721",
		"/images/nfts/0x79f1c4cf7266746698e91034d658e56913e6644f.png"
	],
	[
		"0x79fcdef22feed20eddacbb2587640e45491b757f",
		"mfers",
		"MFER",
		"ERC721",
		"/images/nfts/0x79fcdef22feed20eddacbb2587640e45491b757f.png"
	],
	[
		"0x7a1e98c559ff6676ec2aae3a821fe6e601d8b75b",
		"Friday Beers NFT Official",
		"FB",
		"ERC721",
		"/images/nfts/0x7a1e98c559ff6676ec2aae3a821fe6e601d8b75b.png"
	],
	[
		"0x7a1eb86c35136143dda358d4a2d8ac25c4902388",
		"Metroverse Genesis Mini",
		"METROMINIBLOCK",
		"ERC721",
		"/images/nfts/0x7a1eb86c35136143dda358d4a2d8ac25c4902388.png"
	],
	[
		"0x7a7a47bfb1cca6ee90b8e3bb8a7e56ce3b097f90",
		"SleepyJoe Digital Trading Cards",
		"BDTC",
		"ERC721",
		"/images/nfts/0x7a7a47bfb1cca6ee90b8e3bb8a7e56ce3b097f90.png"
	],
	[
		"0x7a8f3009eb2378552e38926eb7a2d978c14b4fdb",
		"Cel Apes",
		"CELAPES",
		"ERC721",
		"/images/nfts/0x7a8f3009eb2378552e38926eb7a2d978c14b4fdb.png"
	],
	[
		"0x7ab062f22b119cd97fb6dbcc99782724dd4a9c81",
		"RIPNFTs",
		"RIP",
		"ERC721",
		"/images/nfts/0x7ab062f22b119cd97fb6dbcc99782724dd4a9c81.png"
	],
	[
		"0x7ab2352b1d2e185560494d5e577f9d3c238b78c5",
		"Adam Bomb Squad",
		"ABS",
		"ERC721",
		"/images/nfts/0x7ab2352b1d2e185560494d5e577f9d3c238b78c5.png"
	],
	[
		"0x7b692917124f64e1658d67c72ab5df5219078e37",
		"Tiny Astro Genesis",
		"TA",
		"ERC721",
		"/images/nfts/0x7b692917124f64e1658d67c72ab5df5219078e37.png"
	],
	[
		"0x7b7e7b9c354ad3cf0711710830f8f0c5802a77ca",
		"Mutant y00ts AC",
		"MYAC",
		"ERC721",
		"/images/nfts/0x7b7e7b9c354ad3cf0711710830f8f0c5802a77ca.png"
	],
	[
		"0x7b8b270a5a863eefe9ec2848c160d2cade764e2d",
		"Superordinary Friends x TRNZ",
		"SF",
		"ERC721",
		"/images/nfts/0x7b8b270a5a863eefe9ec2848c160d2cade764e2d.png"
	],
	[
		"0x7bc1e07cdfa283db7cf3c680d16ca7f161a64046",
		"TPL Revealed Mech Parts",
		"TPLRMP",
		"ERC721",
		"/images/nfts/0x7bc1e07cdfa283db7cf3c680d16ca7f161a64046.png"
	],
	[
		"0x7bc25283a29a3888cab4555ea86ff1a8c18cc90a",
		"Set In Merge",
		"SIM",
		"ERC721",
		"/images/nfts/0x7bc25283a29a3888cab4555ea86ff1a8c18cc90a.png"
	],
	[
		"0x7c10c8816575e8fdfb11463dd3811cc794a1d407",
		"UINTS",
		"UINTS",
		"ERC721",
		"/images/nfts/0x7c10c8816575e8fdfb11463dd3811cc794a1d407.png"
	],
	[
		"0x7c3e8096b70a4ddc04c4344b8f33b97c9d12bc4e",
		"Care Bears Forever ETH",
		"CARE",
		"ERC721",
		"/images/nfts/0x7c3e8096b70a4ddc04c4344b8f33b97c9d12bc4e.png"
	],
	[
		"0x7c618d4d6300e5e5f36f844c0de27b634d2d5ef4",
		"Dino Reveal",
		"DINOREVEAL",
		"ERC721",
		"/images/nfts/0x7c618d4d6300e5e5f36f844c0de27b634d2d5ef4.png"
	],
	[
		"0x7c729bf7f93ad88686e3a4bb2854b7cffb7dfcb9",
		"CHRYSALISM: DNA",
		"CHRYDNA",
		"ERC721",
		"/images/nfts/0x7c729bf7f93ad88686e3a4bb2854b7cffb7dfcb9.png"
	],
	[
		"0x7d8820fa92eb1584636f4f5b8515b5476b75171a",
		"Murakami.Flowers Official",
		"M.F",
		"ERC721",
		"/images/nfts/0x7d8820fa92eb1584636f4f5b8515b5476b75171a.png"
	],
	[
		"0x7de3e2f540cf5c3065de34ac16a39deb08fcdcf3",
		"Sinners & Saints",
		"SAS",
		"ERC721",
		"/images/nfts/0x7de3e2f540cf5c3065de34ac16a39deb08fcdcf3.png"
	],
	[
		"0x7deda0afe6df3da6a85a87b371f8b464c30c6803",
		"Rebels",
		"RBL",
		"ERC721",
		"/images/nfts/0x7deda0afe6df3da6a85a87b371f8b464c30c6803.png"
	],
	[
		"0x7df64f69544c5bf71171dc5ab69b8602c2ff1e27",
		"Kitaro World Official",
		"KITARO",
		"ERC721",
		"/images/nfts/0x7df64f69544c5bf71171dc5ab69b8602c2ff1e27.png"
	],
	[
		"0x7e655c4382633b9764ee2c63543ee9501c5ffc36",
		"Toasted Toonz",
		"TOONZ",
		"ERC721",
		"/images/nfts/0x7e655c4382633b9764ee2c63543ee9501c5ffc36.png"
	],
	[
		"0x7eba6418388cac0b81c26f9b76d7ea6877bf8308",
		"The Pencil Case Project",
		"PENCIL",
		"ERC721",
		"/images/nfts/0x7eba6418388cac0b81c26f9b76d7ea6877bf8308.png"
	],
	[
		"0x7f36182dee28c45de6072a34d29855bae76dbe2f",
		"Wolf Game",
		"WGAME",
		"ERC721",
		"/images/nfts/0x7f36182dee28c45de6072a34d29855bae76dbe2f.png"
	],
	[
		"0x7f463b874ec264dc7bd8c780f5790b4fc371f11f",
		"BLONKS",
		"BLONKS",
		"ERC721",
		"/images/nfts/0x7f463b874ec264dc7bd8c780f5790b4fc371f11f.png"
	],
	[
		"0x7f8162f4ffe3db46cd3b0626dab699506c0ff63a",
		"Just Mallards",
		"MALLARDS",
		"ERC721",
		"/images/nfts/0x7f8162f4ffe3db46cd3b0626dab699506c0ff63a.png"
	],
	[
		"0x7fda36c8daedcc55b73e964c2831d6161ef60a75",
		"Yaypegs",
		"YAY",
		"ERC721",
		"/images/nfts/0x7fda36c8daedcc55b73e964c2831d6161ef60a75.png"
	],
	[
		"0x7fef3f3364c7d8b9bfabb1b24d5ce92a402c6bd3",
		"Spells*",
		"SPELL",
		"ERC721",
		"/images/nfts/0x7fef3f3364c7d8b9bfabb1b24d5ce92a402c6bd3.png"
	],
	[
		"0x80151bf10579df3aeb59e747d3ac0201e4290986",
		"Funga & Friends",
		"FUNGA",
		"ERC721",
		"/images/nfts/0x80151bf10579df3aeb59e747d3ac0201e4290986.png"
	],
	[
		"0x8052a3765df60dff44eb911982c8ef1ca107ba1a",
		"PhasesNFT-Official",
		"PHASE",
		"ERC721",
		"/images/nfts/0x8052a3765df60dff44eb911982c8ef1ca107ba1a.png"
	],
	[
		"0x809d8f2b12454fc07408d2479cf6dc701ecd5a9f",
		"BBRC - IVY BOYS",
		"IVYBOYS",
		"ERC721",
		"/images/nfts/0x809d8f2b12454fc07408d2479cf6dc701ecd5a9f.png"
	],
	[
		"0x8104137af7e7f0a124801ecd90f79ed1eb6fc06d",
		"Doadz",
		"DOADZ",
		"ERC721",
		"/images/nfts/0x8104137af7e7f0a124801ecd90f79ed1eb6fc06d.png"
	],
	[
		"0x812f5cf0d10539ef9534929940f3aeede3d3d967",
		"DigiDaigaku Masked Villains",
		"DIDMV",
		"ERC721",
		"/images/nfts/0x812f5cf0d10539ef9534929940f3aeede3d3d967.png"
	],
	[
		"0x816840b298c3a326330236ac1368d3887d27a7cb",
		"GMs Edition",
		"GMS",
		"ERC721",
		"/images/nfts/0x816840b298c3a326330236ac1368d3887d27a7cb.png"
	],
	[
		"0x81cf764150665ee2f4fa62ca1a9ff4324b29ec2b",
		"Namida_Official",
		"NAMIDA",
		"ERC721",
		"/images/nfts/0x81cf764150665ee2f4fa62ca1a9ff4324b29ec2b.png"
	],
	[
		"0x81e1966a2b4b3f41057446d07c675cc686894ca2",
		"Cangster - Genesis Collection",
		"CANG",
		"ERC721",
		"/images/nfts/0x81e1966a2b4b3f41057446d07c675cc686894ca2.png"
	],
	[
		"0x826ac0d0c4018afd203e334217a46cc630562132",
		"HardAnimalGenerative",
		"HAG",
		"ERC721",
		"/images/nfts/0x826ac0d0c4018afd203e334217a46cc630562132.png"
	],
	[
		"0x8270fc3b2d23de703b265b2abe008883954fea8e",
		"KUMALEON",
		"KUMA",
		"ERC721",
		"/images/nfts/0x8270fc3b2d23de703b265b2abe008883954fea8e.png"
	],
	[
		"0x82c7a8f707110f5fbb16184a5933e9f78a34c6ab",
		"Emblem Vault Legacy",
		"Emblem.pro",
		"ERC721",
		"/images/nfts/0x82c7a8f707110f5fbb16184a5933e9f78a34c6ab.png"
	],
	[
		"0x82cb9d20862641301c987f0b096086d32bc11b65",
		"AStrandOfHair",
		"ASOH",
		"ERC721",
		"/images/nfts/0x82cb9d20862641301c987f0b096086d32bc11b65.png"
	],
	[
		"0x839c6ca36f51fc2dbf466e027b8a57f840dc9c57",
		"Project Fox",
		"FOX",
		"ERC721",
		"/images/nfts/0x839c6ca36f51fc2dbf466e027b8a57f840dc9c57.png"
	],
	[
		"0x839c908d6468537033022768c9f171695bbf84e9",
		"Elder Apes Community",
		"EAYC",
		"ERC721",
		"/images/nfts/0x839c908d6468537033022768c9f171695bbf84e9.png"
	],
	[
		"0x83b070e842adba2397113c4bca70c00d7df00729",
		"Blvck Genesis",
		"Blvck",
		"ERC721",
		"/images/nfts/0x83b070e842adba2397113c4bca70c00d7df00729.png"
	],
	[
		"0x8407fe3a57b746100a11990c8a4f5604cfd2e955",
		"Beep Boop Battery",
		"BBB",
		"ERC721",
		"/images/nfts/0x8407fe3a57b746100a11990c8a4f5604cfd2e955.png"
	],
	[
		"0x843608fd3539a9f5502880fd4dfdd4f301883ebd",
		"The Jews NFT",
		"TJN",
		"ERC721",
		"/images/nfts/0x843608fd3539a9f5502880fd4dfdd4f301883ebd.png"
	],
	[
		"0x845a007d9f283614f403a24e3eb3455f720559ca",
		"CryptoNinja Partners",
		"CNP",
		"ERC721",
		"/images/nfts/0x845a007d9f283614f403a24e3eb3455f720559ca.png"
	],
	[
		"0x8513db429f5fb564f473fd2e5c523fae33331aa5",
		"The Asylum Halls Genesis",
		"ASM",
		"ERC721",
		"/images/nfts/0x8513db429f5fb564f473fd2e5c523fae33331aa5.png"
	],
	[
		"0x856b5efe21cf134924f40f0124631298bb2204f6",
		"Machine Soldier",
		"MS",
		"ERC721",
		"/images/nfts/0x856b5efe21cf134924f40f0124631298bb2204f6.png"
	],
	[
		"0x85bbab5353ba3ac87d654b6a6806b9a315afbc52",
		"Seelies",
		"SEELIES",
		"ERC721",
		"/images/nfts/0x85bbab5353ba3ac87d654b6a6806b9a315afbc52.png"
	],
	[
		"0x86599b800e23036d761f43d7516092447295659f",
		"ASM Gen II Brains",
		"ASMBrainGenII",
		"ERC721",
		"/images/nfts/0x86599b800e23036d761f43d7516092447295659f.png"
	],
	[
		"0x866ebb7d3dc493ac0994719d4481341a3a678b0c",
		"WinnerCo ID Badge",
		"WCID",
		"ERC721",
		"/images/nfts/0x866ebb7d3dc493ac0994719d4481341a3a678b0c.png"
	],
	[
		"0x867ba3c89fb7c8f4d72068859c26d147f5330043",
		"Chubby Little Jiras",
		"CLJ",
		"ERC721",
		"/images/nfts/0x867ba3c89fb7c8f4d72068859c26d147f5330043.png"
	],
	[
		"0x86c10d10eca1fca9daf87a279abccabe0063f247",
		"Cool Pets NFT",
		"PETS",
		"ERC721",
		"/images/nfts/0x86c10d10eca1fca9daf87a279abccabe0063f247.png"
	],
	[
		"0x86c35fa9665002c08801805280ff6a077b23c98a",
		"CatBlox Genesis Collection",
		"CATBLOXGEN",
		"ERC721",
		"/images/nfts/0x86c35fa9665002c08801805280ff6a077b23c98a.png"
	],
	[
		"0x86cc280d0bac0bd4ea38ba7d31e895aa20cceb4b",
		"OCM Karma",
		"KARMA",
		"ERC721",
		"/images/nfts/0x86cc280d0bac0bd4ea38ba7d31e895aa20cceb4b.png"
	],
	[
		"0x86ef335cb0ada3c681ec4240ef6520c407adeb0b",
		"Monomyth By Heart You",
		"MYTH",
		"ERC721",
		"/images/nfts/0x86ef335cb0ada3c681ec4240ef6520c407adeb0b.png"
	],
	[
		"0x86fc6f6c6702cef7d3bae87ef41256715416db71",
		"Jadu AVA",
		"AVA",
		"ERC721",
		"/images/nfts/0x86fc6f6c6702cef7d3bae87ef41256715416db71.png"
	],
	[
		"0x8728fb57b46eb2353d66ea86e335451e8c5edcc9",
		"PixelMinds",
		"PIND",
		"ERC721",
		"/images/nfts/0x8728fb57b46eb2353d66ea86e335451e8c5edcc9.png"
	],
	[
		"0x87bf1978de79b5d51b3cbb977abc632b8643e4f0",
		"Clash Of Cyborgs",
		"CoC",
		"ERC721",
		"/images/nfts/0x87bf1978de79b5d51b3cbb977abc632b8643e4f0.png"
	],
	[
		"0x881c822cba3325a8692c37c470d2f9654454df84",
		"BearTings NFT",
		"BEART",
		"ERC721",
		"/images/nfts/0x881c822cba3325a8692c37c470d2f9654454df84.png"
	],
	[
		"0x88719cdcacb91f4cc03983e541a71acefbb4d7ce",
		"WebWizards.wtf",
		"WEBWIZ",
		"ERC721",
		"/images/nfts/0x88719cdcacb91f4cc03983e541a71acefbb4d7ce.png"
	],
	[
		"0x8894cf2723d66ed56ce46943ee2e26b01350a127",
		"FatNutz",
		"NUTZ",
		"ERC721",
		"/images/nfts/0x8894cf2723d66ed56ce46943ee2e26b01350a127.png"
	],
	[
		"0x88e5ef9fd7154727fa0268f26d188e77612e1d32",
		"BiPlane Bobo",
		"BPBobo",
		"ERC721",
		"/images/nfts/0x88e5ef9fd7154727fa0268f26d188e77612e1d32.png"
	],
	[
		"0x892cc48335db97e7d4b3b6929086459b9a06931c",
		"NFTMaps Land",
		"MAPS",
		"ERC721",
		"/images/nfts/0x892cc48335db97e7d4b3b6929086459b9a06931c.png"
	],
	[
		"0x8935c97ec10c7e8dab5b9c794e3da6a76ab50108",
		"Wulf Boy Social Club",
		"WBSC",
		"ERC721",
		"/images/nfts/0x8935c97ec10c7e8dab5b9c794e3da6a76ab50108.png"
	],
	[
		"0x89e0b4b0e40953d89cc9928d2acde1c7c2a4e1b8",
		"PPAPE-American Gothic",
		"PPAPEAG",
		"ERC721",
		"/images/nfts/0x89e0b4b0e40953d89cc9928d2acde1c7c2a4e1b8.png"
	],
	[
		"0x8a1bbef259b00ced668a8c69e50d92619c672176",
		"Habbo Avatars",
		"HABBO",
		"ERC721",
		"/images/nfts/0x8a1bbef259b00ced668a8c69e50d92619c672176.png"
	],
	[
		"0x8a2b94860e34f6fdd2bb76ee881b280598f759e2",
		"LinksDAO Champions",
		"CHAMPION",
		"ERC721",
		"/images/nfts/0x8a2b94860e34f6fdd2bb76ee881b280598f759e2.png"
	],
	[
		"0x8a43094a807f5ee87d0c2809b1bef32625787f9a",
		"Fridoos",
		"FRIDOO",
		"ERC721",
		"/images/nfts/0x8a43094a807f5ee87d0c2809b1bef32625787f9a.png"
	],
	[
		"0x8a5a0cfa9087fb8a3c0ce36abb7c320ce7821b94",
		"Ghost Buddy Official",
		"GBN",
		"ERC721",
		"/images/nfts/0x8a5a0cfa9087fb8a3c0ce36abb7c320ce7821b94.png"
	],
	[
		"0x8b9f8ff7bfc70d2a3e0261777bcceb2ea9b31643",
		"Dawn Samurai - Official",
		"DawnSamurai",
		"ERC721",
		"/images/nfts/0x8b9f8ff7bfc70d2a3e0261777bcceb2ea9b31643.png"
	],
	[
		"0x8bc9224253e37cd221c7f510acc42cb6e734db57",
		"HasbullaNFT",
		"HASBI",
		"ERC721",
		"/images/nfts/0x8bc9224253e37cd221c7f510acc42cb6e734db57.png"
	],
	[
		"0x8c01f90d54af84394af14e673b13802a714d72e8",
		"Meta Mountaineers Genesis",
		"METAMOUNTAINEERS",
		"ERC721",
		"/images/nfts/0x8c01f90d54af84394af14e673b13802a714d72e8.png"
	],
	[
		"0x8c3fb10693b228e8b976ff33ce88f97ce2ea9563",
		"Slokh",
		"FROG",
		"ERC721",
		"/images/nfts/0x8c3fb10693b228e8b976ff33ce88f97ce2ea9563.png"
	],
	[
		"0x8cae61967466ebbf15c12dc802b29594bc04efc6",
		"Chungos",
		"CHUNGO",
		"ERC721",
		"/images/nfts/0x8cae61967466ebbf15c12dc802b29594bc04efc6.png"
	],
	[
		"0x8cae69228e33756a1782897e8bda56779a837e20",
		"The Usurpers",
		"USURPR",
		"ERC721",
		"/images/nfts/0x8cae69228e33756a1782897e8bda56779a837e20.png"
	],
	[
		"0x8d4100897447d173289560bc85c5c432be4f44e4",
		"Gray Boys",
		"GRAY",
		"ERC721",
		"/images/nfts/0x8d4100897447d173289560bc85c5c432be4f44e4.png"
	],
	[
		"0x8d64528676e437dc27a4ffe88a80141053c5e6f6",
		"the littles frens NFT",
		"LITTLEFRENS",
		"ERC721",
		"/images/nfts/0x8d64528676e437dc27a4ffe88a80141053c5e6f6.png"
	],
	[
		"0x8dcb8b2d721c022552d826f8bcf2995747248d31",
		"Women Ape Yacht Club",
		"WAYC",
		"ERC721",
		"/images/nfts/0x8dcb8b2d721c022552d826f8bcf2995747248d31.png"
	],
	[
		"0x8e5324d34ee9ab2ed84ac9ba237ca0433e89130c",
		"MetalCore Infantry Genesis",
		"INF",
		"ERC721",
		"/images/nfts/0x8e5324d34ee9ab2ed84ac9ba237ca0433e89130c.png"
	],
	[
		"0x8e6e63e05fffc220f808674e6ce14c82799d9f84",
		"Down Market Ducks",
		"DMD",
		"ERC721",
		"/images/nfts/0x8e6e63e05fffc220f808674e6ce14c82799d9f84.png"
	],
	[
		"0x8eaa9ae1ac89b1c8c8a8104d08c045f78aadb42d",
		"Tableland Rigs",
		"RIG",
		"ERC721",
		"/images/nfts/0x8eaa9ae1ac89b1c8c8a8104d08c045f78aadb42d.png"
	],
	[
		"0x8f0a704e24fcea2572d201a22979a98363656c55",
		"WTCHS_",
		"WTC",
		"ERC721",
		"/images/nfts/0x8f0a704e24fcea2572d201a22979a98363656c55.png"
	],
	[
		"0x8f17a839b6cd38e9888be3cc901a6726e84d6462",
		"Cyber Bandits by Michael Reeder",
		"BANDIT",
		"ERC721",
		"/images/nfts/0x8f17a839b6cd38e9888be3cc901a6726e84d6462.png"
	],
	[
		"0x8f2cef1cbff23d7d657ddbae39650bb860e87132",
		"ANIM.JP Official",
		"AJP",
		"ERC721",
		"/images/nfts/0x8f2cef1cbff23d7d657ddbae39650bb860e87132.png"
	],
	[
		"0x8f41fc6daed55b1955dbb72099ac26d295e34f75",
		"Bruh Pills",
		"BRUH",
		"ERC721",
		"/images/nfts/0x8f41fc6daed55b1955dbb72099ac26d295e34f75.png"
	],
	[
		"0x8f6a4d8ad2493adfd7d1540ccdba11bde5c7eb9e",
		"Degenheim",
		"DGNH",
		"ERC721",
		"/images/nfts/0x8f6a4d8ad2493adfd7d1540ccdba11bde5c7eb9e.png"
	],
	[
		"0x8fb6ec891f80d0da0e966a54ed403f5149a347c8",
		"Honk!",
		"$HONK",
		"ERC721",
		"/images/nfts/0x8fb6ec891f80d0da0e966a54ed403f5149a347c8.png"
	],
	[
		"0x8ff1523091c9517bc328223d50b52ef450200339",
		"Rug Radio - Genesis NFT",
		"✺RUGNFT",
		"ERC721",
		"/images/nfts/0x8ff1523091c9517bc328223d50b52ef450200339.png"
	],
	[
		"0x8ff7e67ee1aea1d59e0fd97ac890e3645a01067b",
		"Official Kaijira",
		"KJRA",
		"ERC721",
		"/images/nfts/0x8ff7e67ee1aea1d59e0fd97ac890e3645a01067b.png"
	],
	[
		"0x904ae1a25757e59456a59a49c4de52d68dccf9ff",
		"Gangsta Mice City",
		"GMC",
		"ERC721",
		"/images/nfts/0x904ae1a25757e59456a59a49c4de52d68dccf9ff.png"
	],
	[
		"0x90c70dc9f3fda4a1d78a2b7d90ca087088355717",
		"Satoshi Island Citizenship NFTs.",
		"CTZN",
		"ERC721",
		"/images/nfts/0x90c70dc9f3fda4a1d78a2b7d90ca087088355717.png"
	],
	[
		"0x9121c7f5976692bc7f97cd380d19a7a7e1d0e0f5",
		"Classic Ugly MUCKS (Unwrapped Collection)",
		"UMYC",
		"ERC721",
		"/images/nfts/0x9121c7f5976692bc7f97cd380d19a7a7e1d0e0f5.png"
	],
	[
		"0x91220b88311dcd521e0d68466ef39514a1baeebc",
		"Sharkz Genesis",
		"SHARKZG",
		"ERC721",
		"/images/nfts/0x91220b88311dcd521e0d68466ef39514a1baeebc.png"
	],
	[
		"0x922b95416763a9c37beac82de7e2ddb75ac35f37",
		"Whimsy Sisters",
		"WHIMSY",
		"ERC721",
		"/images/nfts/0x922b95416763a9c37beac82de7e2ddb75ac35f37.png"
	],
	[
		"0x9231f13343f871b051fa5002e8c04beed91b4f62",
		"50 Years of Atari",
		"1972",
		"ERC721",
		"/images/nfts/0x9231f13343f871b051fa5002e8c04beed91b4f62.png"
	],
	[
		"0x92324a569fa793485b44da60b6663a8cb8fc49a9",
		"GWEI GUYS",
		"GWEI",
		"ERC721",
		"/images/nfts/0x92324a569fa793485b44da60b6663a8cb8fc49a9.png"
	],
	[
		"0x9251dec8df720c2adf3b6f46d968107cbbadf4d4",
		"1337 skulls",
		"1337skulls",
		"ERC721",
		"/images/nfts/0x9251dec8df720c2adf3b6f46d968107cbbadf4d4.png"
	],
	[
		"0x92545aa3524e59fe383c2cfb703f5cb0ce6006f9",
		"MotherFuckerNFTees",
		"MFN",
		"ERC721",
		"/images/nfts/0x92545aa3524e59fe383c2cfb703f5cb0ce6006f9.png"
	],
	[
		"0x926baa7445d56d5e8632046409cdc7d5844ce344",
		"AneroVerse Official",
		"ANERO",
		"ERC721",
		"/images/nfts/0x926baa7445d56d5e8632046409cdc7d5844ce344.png"
	],
	[
		"0x9278d95b79297e728ecf6f59dc0a6074c2e6bf5a",
		"Free JoJo!",
		"JOJO",
		"ERC721",
		"/images/nfts/0x9278d95b79297e728ecf6f59dc0a6074c2e6bf5a.png"
	],
	[
		"0x92a576207ad9cc1968210bff481f29a790863585",
		"GM42",
		"GM42",
		"ERC721",
		"/images/nfts/0x92a576207ad9cc1968210bff481f29a790863585.png"
	],
	[
		"0x92c93fafc20fe882a448f86e594d9667259c42c8",
		"CubeX Official NFTs",
		"CXN",
		"ERC721",
		"/images/nfts/0x92c93fafc20fe882a448f86e594d9667259c42c8.png"
	],
	[
		"0x92e25faee4d7647618a85cef1d7748fdaabdb49c",
		"BRAQ Monsters",
		"MONSTER",
		"ERC721",
		"/images/nfts/0x92e25faee4d7647618a85cef1d7748fdaabdb49c.png"
	],
	[
		"0x932261f9fc8da46c4a22e31b45c4de60623848bf",
		"Zerion DNA 1.0",
		"DNA",
		"ERC721",
		"/images/nfts/0x932261f9fc8da46c4a22e31b45c4de60623848bf.png"
	],
	[
		"0x9370045ce37f381500ac7d6802513bb89871e076",
		"Ape Hater Club",
		"AHC",
		"ERC721",
		"/images/nfts/0x9370045ce37f381500ac7d6802513bb89871e076.png"
	],
	[
		"0x9378168cd82a6ba50b2cee5e41e34af3dfcdd36d",
		"Nutterz",
		"Nutterz",
		"ERC721",
		"/images/nfts/0x9378168cd82a6ba50b2cee5e41e34af3dfcdd36d.png"
	],
	[
		"0x9378368ba6b85c1fba5b131b530f5f5bedf21a18",
		"VeeFriends Series 2",
		"VF2",
		"ERC721",
		"/images/nfts/0x9378368ba6b85c1fba5b131b530f5f5bedf21a18.png"
	],
	[
		"0x942bc2d3e7a589fe5bd4a5c6ef9727dfd82f5c8a",
		"Art Blocks Explorations",
		"EXPLORE",
		"ERC721",
		"/images/nfts/0x942bc2d3e7a589fe5bd4a5c6ef9727dfd82f5c8a.png"
	],
	[
		"0x9450ff0503f3fbf2bc85e9d71f46e47d61777f63",
		"Baby Rare Apepe YC",
		"BBRC",
		"ERC721",
		"/images/nfts/0x9450ff0503f3fbf2bc85e9d71f46e47d61777f63.png"
	],
	[
		"0x94693c9e342f759272d6f7b481703df8e83b1818",
		"Castaways - Treasure Chests",
		"TC",
		"ERC721",
		"/images/nfts/0x94693c9e342f759272d6f7b481703df8e83b1818.png"
	],
	[
		"0x94af96ae8ecc593d986edc66d595b7f8aa5cadb2",
		"Monsters Inside NFT Official",
		"MI",
		"ERC721",
		"/images/nfts/0x94af96ae8ecc593d986edc66d595b7f8aa5cadb2.png"
	],
	[
		"0x94cce07f299945cfe80e309c85cb0a784b3ee6c2",
		"TwitFi Official",
		"TWITFI",
		"ERC721",
		"/images/nfts/0x94cce07f299945cfe80e309c85cb0a784b3ee6c2.png"
	],
	[
		"0x95995a9beaf89265de51104936c6ad9ee961cc88",
		"PANKSNOTDED",
		"PNKS",
		"ERC721",
		"/images/nfts/0x95995a9beaf89265de51104936c6ad9ee961cc88.png"
	],
	[
		"0x95cdb0fbf3ccadabba38acc921a9b2381329f727",
		"Merge by Pob Studio",
		"MERGE",
		"ERC721",
		"/images/nfts/0x95cdb0fbf3ccadabba38acc921a9b2381329f727.png"
	],
	[
		"0x968b6210cafb39ddf70d08afdbf092b35542f25c",
		"Project Yin Yang",
		"YYG",
		"ERC721",
		"/images/nfts/0x968b6210cafb39ddf70d08afdbf092b35542f25c.png"
	],
	[
		"0x969c250871ff1895a23e8e04ee0ff338287e9694",
		"ETHER BIRDS ON-CHAIN",
		"EBOC",
		"ERC721",
		"/images/nfts/0x969c250871ff1895a23e8e04ee0ff338287e9694.png"
	],
	[
		"0x96be46c50e882dbd373081d08e0cde2b055adf6c",
		"ASM AIFA All-Stars",
		"AIFACharacter",
		"ERC721",
		"/images/nfts/0x96be46c50e882dbd373081d08e0cde2b055adf6c.png"
	],
	[
		"0x973e7cf876932fa820139287244b66e21b9030bc",
		"SPOODEEMOON: The Last Frontier",
		"SPDM",
		"ERC721",
		"/images/nfts/0x973e7cf876932fa820139287244b66e21b9030bc.png"
	],
	[
		"0x974ad1d02bbb05d809f137e644c86a1dd7e28afc",
		"Big Free Party",
		"BFP",
		"ERC721",
		"/images/nfts/0x974ad1d02bbb05d809f137e644c86a1dd7e28afc.png"
	],
	[
		"0x975d74900ef48f53fa7d4f3550fa0c89f3b3c1dc",
		"wgmis",
		"WGMIS",
		"ERC721",
		"/images/nfts/0x975d74900ef48f53fa7d4f3550fa0c89f3b3c1dc.png"
	],
	[
		"0x98779a737c6dea58c4b0e818a13188a5d09fb26c",
		"Anonymous Ape Yacht Club",
		"AAYC",
		"ERC721",
		"/images/nfts/0x98779a737c6dea58c4b0e818a13188a5d09fb26c.png"
	],
	[
		"0x98c5b40c18ab19c53324e006fa279fc8904137bd",
		"1 ETH FP - PHASE 1",
		"1EthFP",
		"ERC721",
		"/images/nfts/0x98c5b40c18ab19c53324e006fa279fc8904137bd.png"
	],
	[
		"0x992b11a8fe7abfb2e3b7736a1b5ffa3d44efaa32",
		"Dudelz by JOJAMI",
		"DDLZ",
		"ERC721",
		"/images/nfts/0x992b11a8fe7abfb2e3b7736a1b5ffa3d44efaa32.png"
	],
	[
		"0x9984bd85adfef02cea2c28819af81a6d17a3cb96",
		"Dirty Flies",
		"FG",
		"ERC721",
		"/images/nfts/0x9984bd85adfef02cea2c28819af81a6d17a3cb96.png"
	],
	[
		"0x99a9b7c1116f9ceeb1652de04d5969cce509b069",
		"Art Blocks",
		"BLOCKS",
		"ERC721",
		"/images/nfts/0x99a9b7c1116f9ceeb1652de04d5969cce509b069.png"
	],
	[
		"0x9a38dec0590abc8c883d72e52391090e948ddf12",
		"Everai",
		"EveraiDuo",
		"ERC721",
		"/images/nfts/0x9a38dec0590abc8c883d72e52391090e948ddf12.png"
	],
	[
		"0x9a4536aaee702c057b355a95d030a45c499fde61",
		"The Devious Dead Collection",
		"TDD",
		"ERC721",
		"/images/nfts/0x9a4536aaee702c057b355a95d030a45c499fde61.png"
	],
	[
		"0x9a4b320418544b4da92c38d2a6e2de09d5b0287a",
		"Babbys",
		"BABBY",
		"ERC721",
		"/images/nfts/0x9a4b320418544b4da92c38d2a6e2de09d5b0287a.png"
	],
	[
		"0x9aede54445ccf900413c7d0cae3b588b831b0098",
		"Kitty Cones Collection",
		"KTCS",
		"ERC721",
		"/images/nfts/0x9aede54445ccf900413c7d0cae3b588b831b0098.png"
	],
	[
		"0x9b66d03fc1eee61a512341058e95f1a68dc3a913",
		"Phunk APE Origins",
		"PAO",
		"ERC721",
		"/images/nfts/0x9b66d03fc1eee61a512341058e95f1a68dc3a913.png"
	],
	[
		"0x9c21c678852c3d6cf72bf48f7fd56dc801d61042",
		"smol degens",
		"smoldegens",
		"ERC721",
		"/images/nfts/0x9c21c678852c3d6cf72bf48f7fd56dc801d61042.png"
	],
	[
		"0x9cb7712c6a91506e69e8751fcb08e72e1256477d",
		"Moonturtlez",
		"MOONTURTLE",
		"ERC721",
		"/images/nfts/0x9cb7712c6a91506e69e8751fcb08e72e1256477d.png"
	],
	[
		"0x9ecea566716e98b96fdc1e6e947610ba03366d8f",
		"UNCULTURED",
		"UNC",
		"ERC721",
		"/images/nfts/0x9ecea566716e98b96fdc1e6e947610ba03366d8f.png"
	],
	[
		"0x9eed1df86f82fd18a01947712df5e6e60fa372f0",
		"Gremplinz By Count Boanez",
		"GRMPZ",
		"ERC721",
		"/images/nfts/0x9eed1df86f82fd18a01947712df5e6e60fa372f0.png"
	],
	[
		"0x9efae25f19a633beca03c799ab6fb5da1766559c",
		"Strange Me In NFT",
		"SMIF",
		"ERC721",
		"/images/nfts/0x9efae25f19a633beca03c799ab6fb5da1766559c.png"
	],
	[
		"0x9f35425c2ef3616dd024d866082e0b61023fbfe1",
		"The Official Nigerians NFT",
		"NIGERIANS",
		"ERC721",
		"/images/nfts/0x9f35425c2ef3616dd024d866082e0b61023fbfe1.png"
	],
	[
		"0x9f648eef45b73e1a32ce7b624a44266226a85d88",
		"Doge Club(DOGC)",
		"DOGC",
		"ERC721",
		"/images/nfts/0x9f648eef45b73e1a32ce7b624a44266226a85d88.png"
	],
	[
		"0x9f83b08d90eeda539f7e2797fed3f6996917bba8",
		"KINGSHIP",
		"KS",
		"ERC721",
		"/images/nfts/0x9f83b08d90eeda539f7e2797fed3f6996917bba8.png"
	],
	[
		"0x9fe9caa2c7551520ffae6b8fa126eebf99ab5f3b",
		"Mecha Ape Yacht Club",
		"MechaApeYC",
		"ERC721",
		"/images/nfts/0x9fe9caa2c7551520ffae6b8fa126eebf99ab5f3b.png"
	],
	[
		"0xa01dd8d159b8ce55deb407c8c05822dd524fc57a",
		"Rich CZ Yacht CLub",
		"RCYC",
		"ERC721",
		"/images/nfts/0xa01dd8d159b8ce55deb407c8c05822dd524fc57a.png"
	],
	[
		"0xa09129080ed12cf1b1c7a6e723c63e0820e9d3ae",
		"EIPandas",
		"PANDA",
		"ERC721",
		"/images/nfts/0xa09129080ed12cf1b1c7a6e723c63e0820e9d3ae.png"
	],
	[
		"0xa1d4657e0e6507d5a94d06da93e94dc7c8c44b51",
		"Worldwide Webb Land",
		"WEBBLAND",
		"ERC721",
		"/images/nfts/0xa1d4657e0e6507d5a94d06da93e94dc7c8c44b51.png"
	],
	[
		"0xa27083006d32dd86180ddd1e218d67f1e371801a",
		"Kuma Boss",
		"TB",
		"ERC721",
		"/images/nfts/0xa27083006d32dd86180ddd1e218d67f1e371801a.png"
	],
	[
		"0xa30cf1135be5af62e412f22bd01069e2ceba8706",
		"Humankind Lunchboxes",
		"LNCH",
		"ERC721",
		"/images/nfts/0xa30cf1135be5af62e412f22bd01069e2ceba8706.png"
	],
	[
		"0xa35aa193f94a90eca0ae2a3fb5616e53c1f35193",
		"marimo.life",
		"MRM",
		"ERC721",
		"/images/nfts/0xa35aa193f94a90eca0ae2a3fb5616e53c1f35193.png"
	],
	[
		"0xa3f7250306dbb856d8d312f93029be73343939af",
		"The Sad Times NFT",
		"STBC",
		"ERC721",
		"/images/nfts/0xa3f7250306dbb856d8d312f93029be73343939af.png"
	],
	[
		"0xa47da714d0265c012e85703fa7280d69fd5961df",
		"Swarm Gas",
		"GAS",
		"ERC721",
		"/images/nfts/0xa47da714d0265c012e85703fa7280d69fd5961df.png"
	],
	[
		"0xa4991609c508b6d4fb7156426db0bd49fe298bd8",
		"Dreamy Official",
		"DRMY",
		"ERC721",
		"/images/nfts/0xa4991609c508b6d4fb7156426db0bd49fe298bd8.png"
	],
	[
		"0xa4bcd3b7f141ba1f08f36033fdfce691565561bc",
		"Artsy Monke",
		"ArtsyMonke",
		"ERC721",
		"/images/nfts/0xa4bcd3b7f141ba1f08f36033fdfce691565561bc.png"
	],
	[
		"0xa4d3adea6920aab1a60b7f258c4c563788f262c1",
		"KAGURA JP",
		"KAGURA",
		"ERC721",
		"/images/nfts/0xa4d3adea6920aab1a60b7f258c4c563788f262c1.png"
	],
	[
		"0xa55d6016065fd576e64f3081cd64e1dd3a0488da",
		"Minimen Official",
		"MM",
		"ERC721",
		"/images/nfts/0xa55d6016065fd576e64f3081cd64e1dd3a0488da.png"
	],
	[
		"0xa5c0bd78d1667c13bfb403e2a3336871396713c5",
		"Coolman's Universe",
		"COOLMAN",
		"ERC721",
		"/images/nfts/0xa5c0bd78d1667c13bfb403e2a3336871396713c5.png"
	],
	[
		"0xa5fb4e920c30a4a8158521783e527974ec6aee85",
		"Destroy and... Official",
		"DESTROYAND",
		"ERC721",
		"/images/nfts/0xa5fb4e920c30a4a8158521783e527974ec6aee85.png"
	],
	[
		"0xa605ee5de62bf7b8cdee52ebaaf4563069279d14",
		"S7NS STATION",
		"S7NS",
		"ERC721",
		"/images/nfts/0xa605ee5de62bf7b8cdee52ebaaf4563069279d14.png"
	],
	[
		"0xa6653bec60234562d3b453d10314d8762de51405",
		"CryptoEddies (Classic)",
		"EDDIE",
		"ERC721",
		"/images/nfts/0xa6653bec60234562d3b453d10314d8762de51405.png"
	],
	[
		"0xa6a4511e25c7f2a29be5ccf3978a0f3e238fd2c1",
		"Yaygifs",
		"YAY",
		"ERC721",
		"/images/nfts/0xa6a4511e25c7f2a29be5ccf3978a0f3e238fd2c1.png"
	],
	[
		"0xa6c1c8ef0179071c16e066171d660da4ad314687",
		"Office Hours Corp.",
		"OfficeHrs",
		"ERC721",
		"/images/nfts/0xa6c1c8ef0179071c16e066171d660da4ad314687.png"
	],
	[
		"0xa6d94743723e8ac0d28e2f89e465ce7399db640c",
		"Simp Ape Yacht Club",
		"SAYC",
		"ERC721",
		"/images/nfts/0xa6d94743723e8ac0d28e2f89e465ce7399db640c.png"
	],
	[
		"0xa6e421a14f5068a07a8cb8c29e37dd72d919fbbd",
		"Bananas",
		"BNA",
		"ERC721",
		"/images/nfts/0xa6e421a14f5068a07a8cb8c29e37dd72d919fbbd.png"
	],
	[
		"0xa75689d2a5329acfc70dc6f8f2de7ddfbb4eadb9",
		"Beanstalker",
		"BEAN",
		"ERC721",
		"/images/nfts/0xa75689d2a5329acfc70dc6f8f2de7ddfbb4eadb9.png"
	],
	[
		"0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270",
		"Art Blocks",
		"BLOCKS",
		"ERC721",
		"/images/nfts/0xa7d8d9ef8d8ce8992df33d8b8cf4aebabd5bd270.png"
	],
	[
		"0xa97ad3ce4d36b9d782ca7a2d45b25a052c44dce6",
		"Flur Alpha",
		"Flur Alpha Pass",
		"ERC721",
		"/images/nfts/0xa97ad3ce4d36b9d782ca7a2d45b25a052c44dce6.png"
	],
	[
		"0xa9ba1a433ec326bca975aef9a1641b42717197e7",
		"Evolution Boxes",
		"GAS:EVO",
		"ERC721",
		"/images/nfts/0xa9ba1a433ec326bca975aef9a1641b42717197e7.png"
	],
	[
		"0xa9d99030785b30e98f12f9f290dd8249da2ab7b7",
		"Dylan The Dog Kennel World",
		"DTD",
		"ERC721",
		"/images/nfts/0xa9d99030785b30e98f12f9f290dd8249da2ab7b7.png"
	],
	[
		"0xaa107ccfe230a29c345fd97bc6eb9bd2fccd0750",
		"Decentra Dragon",
		"Dragon",
		"ERC721",
		"/images/nfts/0xaa107ccfe230a29c345fd97bc6eb9bd2fccd0750.png"
	],
	[
		"0xaa462106da447c0440a4be29614c19387a59a331",
		"ENS Maxis",
		"ENSMAXIS",
		"ERC721",
		"/images/nfts/0xaa462106da447c0440a4be29614c19387a59a331.png"
	],
	[
		"0xaaa7a35e442a77e37cde2f445b359aabf5ad0387",
		"STM LOCKED",
		"SM",
		"ERC721",
		"/images/nfts/0xaaa7a35e442a77e37cde2f445b359aabf5ad0387.png"
	],
	[
		"0xaabc3aef1ce0d23eeaabfc7c6cd9043fcebf7400",
		"DigiDaigaku Dragon Eggs",
		"DIDDE",
		"ERC721",
		"/images/nfts/0xaabc3aef1ce0d23eeaabfc7c6cd9043fcebf7400.png"
	],
	[
		"0xaac2cb9f4561d924f7f45b47726f8b3752515ae5",
		"Toysterz",
		"toysterz",
		"ERC721",
		"/images/nfts/0xaac2cb9f4561d924f7f45b47726f8b3752515ae5.png"
	],
	[
		"0xaad35c2dadbe77f97301617d82e661776c891fa9",
		"Akutars",
		"AKU",
		"ERC721",
		"/images/nfts/0xaad35c2dadbe77f97301617d82e661776c891fa9.png"
	],
	[
		"0xaaf03a65cbd8f01b512cd8d530a675b3963de255",
		"The Seekers",
		"SEEKERS",
		"ERC721",
		"/images/nfts/0xaaf03a65cbd8f01b512cd8d530a675b3963de255.png"
	],
	[
		"0xaaf30a4dbf45ae1435634b8407ddf27dae947c13",
		"BoredPepeYC",
		"BPYC",
		"ERC721",
		"/images/nfts/0xaaf30a4dbf45ae1435634b8407ddf27dae947c13.png"
	],
	[
		"0xac5aeb3b4ac8797c2307320ed00a84b869ab9333",
		"90's Kids",
		"NTS",
		"ERC721",
		"/images/nfts/0xac5aeb3b4ac8797c2307320ed00a84b869ab9333.png"
	],
	[
		"0xacd1423e1e7d45dd0f3ae63c5db959d49feadd3f",
		"PudgyDickbutts",
		"PDB",
		"ERC721",
		"/images/nfts/0xacd1423e1e7d45dd0f3ae63c5db959d49feadd3f.png"
	],
	[
		"0xacf63e56fd08970b43401492a02f6f38b6635c91",
		"Kanpai Pandas",
		"YKPS",
		"ERC721",
		"/images/nfts/0xacf63e56fd08970b43401492a02f6f38b6635c91.png"
	],
	[
		"0xacfa101ece167f1894150e090d9471aee2dd3041",
		"Feline Fiendz NFT",
		"FF",
		"ERC721",
		"/images/nfts/0xacfa101ece167f1894150e090d9471aee2dd3041.png"
	],
	[
		"0xad0db7368cdfbd3153f7dfaca51a78eeb39f6d71",
		"Mutant Grandpa Country Club",
		"MACC",
		"ERC721",
		"/images/nfts/0xad0db7368cdfbd3153f7dfaca51a78eeb39f6d71.png"
	],
	[
		"0xad27c6ef1c2e37a78514a9e54f5c35a8bf51601d",
		"Cool Cats Football Club",
		"CCFC",
		"ERC721",
		"/images/nfts/0xad27c6ef1c2e37a78514a9e54f5c35a8bf51601d.png"
	],
	[
		"0xad6917fc71101d377f5cbbc5b1fc0e941f08ae58",
		"Gossamer Academy",
		"GACA",
		"ERC721",
		"/images/nfts/0xad6917fc71101d377f5cbbc5b1fc0e941f08ae58.png"
	],
	[
		"0xadafbf0c2df2a0d79170f5c66f37759ef18d112e",
		"Capies by Fabrik",
		"CAPIES",
		"ERC721",
		"/images/nfts/0xadafbf0c2df2a0d79170f5c66f37759ef18d112e.png"
	],
	[
		"0xae351b8ae55b69a5007618e598dde89d0a092c37",
		"Lost Miners Claim Passes",
		"MINERCLAIM",
		"ERC721",
		"/images/nfts/0xae351b8ae55b69a5007618e598dde89d0a092c37.png"
	],
	[
		"0xae99a698156ee8f8d07cbe7f271c31eeaac07087",
		"Mutant Hound Collars",
		"MHC",
		"ERC721",
		"/images/nfts/0xae99a698156ee8f8d07cbe7f271c31eeaac07087.png"
	],
	[
		"0xaea4fa9451f527d5f36e65f833d88dbb56a0c264",
		"Be VEE - Summer Collection",
		"Summer",
		"ERC721",
		"/images/nfts/0xaea4fa9451f527d5f36e65f833d88dbb56a0c264.png"
	],
	[
		"0xaef41ec3933e7e1e17748ed48b663535c66d9a17",
		"Beep Boop Toolbox",
		"BBT",
		"ERC721",
		"/images/nfts/0xaef41ec3933e7e1e17748ed48b663535c66d9a17.png"
	],
	[
		"0xaf555c317608d4f9aebae2c97bb2984656f408df",
		"PHOTOPIA 2022 - Genesis Edition",
		"P22",
		"ERC721",
		"/images/nfts/0xaf555c317608d4f9aebae2c97bb2984656f408df.png"
	],
	[
		"0xaf559c34d94b0fb7067b5911451fd031802547dd",
		"Ayahuasca Cats",
		"AYACATS",
		"ERC721",
		"/images/nfts/0xaf559c34d94b0fb7067b5911451fd031802547dd.png"
	],
	[
		"0xaf60f9140dfdf85f8db527b4db609ce1986bf735",
		"Squeakers",
		"SQUEAK",
		"ERC721",
		"/images/nfts/0xaf60f9140dfdf85f8db527b4db609ce1986bf735.png"
	],
	[
		"0xb024aae925554ae3d323aed12ff71a889935cbbf",
		"weis",
		"WEI",
		"ERC721",
		"/images/nfts/0xb024aae925554ae3d323aed12ff71a889935cbbf.png"
	],
	[
		"0xb058a347c9e7381a10572201c1381bfbf856b417",
		"Elon Digital Trading Cards (DTC)",
		"ElonDTC",
		"ERC721",
		"/images/nfts/0xb058a347c9e7381a10572201c1381bfbf856b417.png"
	],
	[
		"0xb05fd8abd64e6421fde30d5db879a3dad54e251b",
		"The Grifters NFTs",
		"GRIFT",
		"ERC721",
		"/images/nfts/0xb05fd8abd64e6421fde30d5db879a3dad54e251b.png"
	],
	[
		"0xb060204e66bfc61e428d42a5aa58715051f3409c",
		"IDNTTS",
		"IDS",
		"ERC721",
		"/images/nfts/0xb060204e66bfc61e428d42a5aa58715051f3409c.png"
	],
	[
		"0xb08a61d96108136439180ad3f3e340a24e448f6b",
		"Mirror Pass Genesis",
		"Mirror",
		"ERC721",
		"/images/nfts/0xb08a61d96108136439180ad3f3e340a24e448f6b.png"
	],
	[
		"0xb16dfd9aaaf874fcb1db8a296375577c1baa6f21",
		"Nyolings",
		"NYOLINGS",
		"ERC721",
		"/images/nfts/0xb16dfd9aaaf874fcb1db8a296375577c1baa6f21.png"
	],
	[
		"0xb18380485f7ba9c23deb729bedd3a3499dbd4449",
		"SmallBrosNFT",
		"SBNFT",
		"ERC721",
		"/images/nfts/0xb18380485f7ba9c23deb729bedd3a3499dbd4449.png"
	],
	[
		"0xb1b10c54ce06a474761aba36bd396966389a0d6d",
		"XOXO By Maya & Yehuda Devir",
		"XOXO",
		"ERC721",
		"/images/nfts/0xb1b10c54ce06a474761aba36bd396966389a0d6d.png"
	],
	[
		"0xb2df5bde8432c83a8a1919cc610fa9aef5e53348",
		"MeepsNFT",
		"MEEPS",
		"ERC721",
		"/images/nfts/0xb2df5bde8432c83a8a1919cc610fa9aef5e53348.png"
	],
	[
		"0xb334a4eb0a2d6cc24fd451e779c002b9b33228c3",
		"Supercute World",
		"SUPERCUTE",
		"ERC721",
		"/images/nfts/0xb334a4eb0a2d6cc24fd451e779c002b9b33228c3.png"
	],
	[
		"0xb39304157227d684f28353fb7a016bd1c685da5f",
		"Our Founder Is Dead",
		"OFID",
		"ERC721",
		"/images/nfts/0xb39304157227d684f28353fb7a016bd1c685da5f.png"
	],
	[
		"0xb39f5f5199042086d6f162ededb761d0f33a2849",
		"Orcs Of Orakion",
		"ORC",
		"ERC721",
		"/images/nfts/0xb39f5f5199042086d6f162ededb761d0f33a2849.png"
	],
	[
		"0xb3d46ffb5981984356c430c1d4316e8928a3786e",
		"PEPE RENGA",
		"PEPERENGA",
		"ERC721",
		"/images/nfts/0xb3d46ffb5981984356c430c1d4316e8928a3786e.png"
	],
	[
		"0xb4afbd84b7caf8c3fe2c01cd6ad9008382eeb455",
		"y00ts DickButts by yyc",
		"YDB",
		"ERC721",
		"/images/nfts/0xb4afbd84b7caf8c3fe2c01cd6ad9008382eeb455.png"
	],
	[
		"0xb4d06d46a8285f4ec79fd294f78a881799d8ced9",
		"3Landers",
		"3L",
		"ERC721",
		"/images/nfts/0xb4d06d46a8285f4ec79fd294f78a881799d8ced9.png"
	],
	[
		"0xb4fedc003053c22ac8b808bb424f3e1787f30cf2",
		"Neymar Jr. - JungleVIBES",
		"NRJJV",
		"ERC721",
		"/images/nfts/0xb4fedc003053c22ac8b808bb424f3e1787f30cf2.png"
	],
	[
		"0xb54420149dbe2d5b2186a3e6dc6fc9d1a58316d4",
		"Tokyo Rebels",
		"REBEL",
		"ERC721",
		"/images/nfts/0xb54420149dbe2d5b2186a3e6dc6fc9d1a58316d4.png"
	],
	[
		"0xb5643598496b159263c67bd0d25728713f5aad04",
		"YOLO HOLIDAY",
		"YOLO",
		"ERC721",
		"/images/nfts/0xb5643598496b159263c67bd0d25728713f5aad04.png"
	],
	[
		"0xb5893a75b74f9caccd3c23b4a974db5f53b4e9d2",
		"House of Clownz",
		"Clownz",
		"ERC721",
		"/images/nfts/0xb5893a75b74f9caccd3c23b4a974db5f53b4e9d2.png"
	],
	[
		"0xb5d53555afd52822f979200e83a515d3464a3c2b",
		"Tsukimi",
		"TSUKIMI",
		"ERC721",
		"/images/nfts/0xb5d53555afd52822f979200e83a515d3464a3c2b.png"
	],
	[
		"0xb609183a8245c32fa3c60c498bb54010e9ce8e85",
		"OnChain Human Of Metaverse",
		"HOM",
		"ERC721",
		"/images/nfts/0xb609183a8245c32fa3c60c498bb54010e9ce8e85.png"
	],
	[
		"0xb60c2019ddb48623ed1d134b2bb42f437c6a0202",
		"0xTHULU Relic of Membership",
		"0xRoM",
		"ERC721",
		"/images/nfts/0xb60c2019ddb48623ed1d134b2bb42f437c6a0202.png"
	],
	[
		"0xb648ed2b8a2386a0598ccd84dbb2489dc09aefc4",
		"DRUNK SANTA - Cryptopainter - Limited Edition Burn",
		"CP23",
		"ERC721",
		"/images/nfts/0xb648ed2b8a2386a0598ccd84dbb2489dc09aefc4.png"
	],
	[
		"0xb661ab9bcd2878c5f8c136f67fd550a9d7df7197",
		"A:\\Aiko Virtual",
		"AIKO",
		"ERC721",
		"/images/nfts/0xb661ab9bcd2878c5f8c136f67fd550a9d7df7197.png"
	],
	[
		"0xb6c1bc1c4c115cae13746c06dec9769b69e4461a",
		"Dos Apes",
		"Dos Apes",
		"ERC721",
		"/images/nfts/0xb6c1bc1c4c115cae13746c06dec9769b69e4461a.png"
	],
	[
		"0xb6e72df112f13d2bc38bddf4ea252948cc739de5",
		"Otaku Club NFT",
		"Otaku",
		"ERC721",
		"/images/nfts/0xb6e72df112f13d2bc38bddf4ea252948cc739de5.png"
	],
	[
		"0xb74dda1dd3faf7102a12200a4eba9aea6547939c",
		"The Bear Market Bullies",
		"BMB",
		"ERC721",
		"/images/nfts/0xb74dda1dd3faf7102a12200a4eba9aea6547939c.png"
	],
	[
		"0xb75f09b4340aeb85cd5f2dd87d31751edc11ed39",
		"Genesis Box",
		"GBOX",
		"ERC721",
		"/images/nfts/0xb75f09b4340aeb85cd5f2dd87d31751edc11ed39.png"
	],
	[
		"0xb76fbbb30e31f2c3bdaa2466cfb1cfe39b220d06",
		"Wolf Game - Wool Pouch",
		"WPOUCH",
		"ERC721",
		"/images/nfts/0xb76fbbb30e31f2c3bdaa2466cfb1cfe39b220d06.png"
	],
	[
		"0xb798142459ff3b7253a421a20bef17503c4489d3",
		"RedRex OG Pass",
		"REXOG",
		"ERC721",
		"/images/nfts/0xb798142459ff3b7253a421a20bef17503c4489d3.png"
	],
	[
		"0xb7ab762d27959802aabfb0ddd8d45df0817242ed",
		"VoodoosClub",
		"VDC",
		"ERC721",
		"/images/nfts/0xb7ab762d27959802aabfb0ddd8d45df0817242ed.png"
	],
	[
		"0xb7d405bee01c70a9577316c1b9c2505f146e8842",
		"V3Phunks",
		"V3PHUNKS",
		"ERC721",
		"/images/nfts/0xb7d405bee01c70a9577316c1b9c2505f146e8842.png"
	],
	[
		"0xb828184f3fcdf20da3812eff491610b55cdcb3e2",
		"Metaplaces Small Offices",
		"MSO",
		"ERC721",
		"/images/nfts/0xb828184f3fcdf20da3812eff491610b55cdcb3e2.png"
	],
	[
		"0xb83baa12ae1764137850dbd8fc9a4b80645c5934",
		"Billionaire Birds - official",
		"BBIRD",
		"ERC721",
		"/images/nfts/0xb83baa12ae1764137850dbd8fc9a4b80645c5934.png"
	],
	[
		"0xb83c3ca6e22ef50ec13dc56b6d0729aef6b4546e",
		"VOXVOT_BlindVox",
		"VXVTBV",
		"ERC721",
		"/images/nfts/0xb83c3ca6e22ef50ec13dc56b6d0729aef6b4546e.png"
	],
	[
		"0xb852c6b5892256c264cc2c888ea462189154d8d7",
		"rektguy",
		"Rektguy",
		"ERC721",
		"/images/nfts/0xb852c6b5892256c264cc2c888ea462189154d8d7.png"
	],
	[
		"0xb89c7292e42cf94afa6933c45979d0a5328a4ea2",
		"Toonies SC",
		"TOONIES",
		"ERC721",
		"/images/nfts/0xb89c7292e42cf94afa6933c45979d0a5328a4ea2.png"
	],
	[
		"0xb948f35c1c35206a5fb23b77f9e52a01b793c909",
		"FUTR One By Mintify",
		"MNFUTRONE",
		"ERC721",
		"/images/nfts/0xb948f35c1c35206a5fb23b77f9e52a01b793c909.png"
	],
	[
		"0xb9aecb63908c13b6167ad2eab9bacd7e0daba78a",
		"Probably Nothing Genesis",
		"PN",
		"ERC721",
		"/images/nfts/0xb9aecb63908c13b6167ad2eab9bacd7e0daba78a.png"
	],
	[
		"0xb9b2267d3c35d1fb0bbf752b6205eea91a82cd84",
		"Super Fried Chicken",
		"SFC",
		"ERC721",
		"/images/nfts/0xb9b2267d3c35d1fb0bbf752b6205eea91a82cd84.png"
	],
	[
		"0xba30e5f9bb24caa003e9f2f0497ad287fdf95623",
		"Bored Ape Kennel Club",
		"BAKC",
		"ERC721",
		"/images/nfts/0xba30e5f9bb24caa003e9f2f0497ad287fdf95623.png"
	],
	[
		"0xba627f3d081cc97ac0edc40591eda7053ac63532",
		"Bored & Dangerous",
		"BOOK",
		"ERC721",
		"/images/nfts/0xba627f3d081cc97ac0edc40591eda7053ac63532.png"
	],
	[
		"0xbaf13560f86d65e7a3b982bfc8838791cbc8f3af",
		"Thunder Valley",
		"THDRVLY",
		"ERC721",
		"/images/nfts/0xbaf13560f86d65e7a3b982bfc8838791cbc8f3af.png"
	],
	[
		"0xbb53dfe73a4fe50cbe2fc436a1667beb5c22956e",
		"BoredAIClub",
		"BAIC",
		"ERC721",
		"/images/nfts/0xbb53dfe73a4fe50cbe2fc436a1667beb5c22956e.png"
	],
	[
		"0xbb80f5ce5d443fa4fb971272841f6ebd7ab758f0",
		"LuckyPunxOfficial",
		"LPXNFT",
		"ERC721",
		"/images/nfts/0xbb80f5ce5d443fa4fb971272841f6ebd7ab758f0.png"
	],
	[
		"0xbc0a98af5c0a0386dfc33b2903312592193c9339",
		"Everything Cat",
		"EC",
		"ERC721",
		"/images/nfts/0xbc0a98af5c0a0386dfc33b2903312592193c9339.png"
	],
	[
		"0xbc429421ee207430d220a84f6014b705e3a480a8",
		"Rare Ape Yacht Club",
		"RARE",
		"ERC721",
		"/images/nfts/0xbc429421ee207430d220a84f6014b705e3a480a8.png"
	],
	[
		"0xbc4e8115e17d96cfd8e3ecef2b0d6e19d00f70b2",
		"Bad Ted Yacht Club",
		"BTYC",
		"ERC721",
		"/images/nfts/0xbc4e8115e17d96cfd8e3ecef2b0d6e19d00f70b2.png"
	],
	[
		"0xbc65d5eba89687ced6ec02f691a4410349c71de3",
		"INVAZERS",
		"NVZR",
		"ERC721",
		"/images/nfts/0xbc65d5eba89687ced6ec02f691a4410349c71de3.png"
	],
	[
		"0xbcaecf8a9f679e77d118004ea5d2265e5cf7fcd5",
		"Pixel Kitaro",
		"PKIT",
		"ERC721",
		"/images/nfts/0xbcaecf8a9f679e77d118004ea5d2265e5cf7fcd5.png"
	],
	[
		"0xbcd1a163dee3ac31342eb6626f28e45d637dd091",
		"ESION Club",
		"ESION",
		"ERC721",
		"/images/nfts/0xbcd1a163dee3ac31342eb6626f28e45d637dd091.png"
	],
	[
		"0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e",
		"GoblinTown",
		"GOBLIN",
		"ERC721",
		"/images/nfts/0xbce3781ae7ca1a5e050bd9c4c77369867ebc307e.png"
	],
	[
		"0xbce6d2aa86934af4317ab8615f89e3f9430914cb",
		"VaynerSports Pass VSP",
		"VSP",
		"ERC721",
		"/images/nfts/0xbce6d2aa86934af4317ab8615f89e3f9430914cb.png"
	],
	[
		"0xbd3531da5cf5857e7cfaa92426877b022e612cf8",
		"Pudgy Penguins",
		"PPG",
		"ERC721",
		"/images/nfts/0xbd3531da5cf5857e7cfaa92426877b022e612cf8.png"
	],
	[
		"0xbd3f82a81c3f74542736765ce4fd579d177b6bc5",
		"PG JIRAVERSE",
		"PGJ",
		"ERC721",
		"/images/nfts/0xbd3f82a81c3f74542736765ce4fd579d177b6bc5.png"
	],
	[
		"0xbd4455da5929d5639ee098abfaa3241e9ae111af",
		"NFT Worlds",
		"NFT Worlds",
		"ERC721",
		"/images/nfts/0xbd4455da5929d5639ee098abfaa3241e9ae111af.png"
	],
	[
		"0xbd5fb504d4482ef4366dfa0c0edfb85ed50a9bbb",
		"Corntown wtf",
		"CORN",
		"ERC721",
		"/images/nfts/0xbd5fb504d4482ef4366dfa0c0edfb85ed50a9bbb.png"
	],
	[
		"0xbd79d0930ef4947a810982b735082f0ac47edec7",
		"Legends of the FirstBorne",
		"LOTFB",
		"ERC721",
		"/images/nfts/0xbd79d0930ef4947a810982b735082f0ac47edec7.png"
	],
	[
		"0xbd8451d2d5fb88469a764b05c1e0b623c5106145",
		"MERGE VV",
		"VVMRG",
		"ERC721",
		"/images/nfts/0xbd8451d2d5fb88469a764b05c1e0b623c5106145.png"
	],
	[
		"0xbd9cf2c86a4798d3626749f83df5c235aad20c9b",
		"The Argentinians Official",
		"VAMOS",
		"ERC721",
		"/images/nfts/0xbd9cf2c86a4798d3626749f83df5c235aad20c9b.png"
	],
	[
		"0xbda2481db91fc0f942ed3f53de378ba45ba9d17e",
		"Wolf Game - Farmer",
		"FARMER",
		"ERC721",
		"/images/nfts/0xbda2481db91fc0f942ed3f53de378ba45ba9d17e.png"
	],
	[
		"0xbe38ad09706a5f8e932871a616196ec82c07d3ef",
		"EnfantsTerribles",
		"Enfants Terribles",
		"ERC721",
		"/images/nfts/0xbe38ad09706a5f8e932871a616196ec82c07d3ef.png"
	],
	[
		"0xbe82b9533ddf0acaddcaa6af38830ff4b919482c",
		"OnChainBirds",
		"OCBIRD",
		"ERC721",
		"/images/nfts/0xbe82b9533ddf0acaddcaa6af38830ff4b919482c.png"
	],
	[
		"0xbf6301236d71c0d49144b35241905794f5a10bb9",
		"Feet And Eyes Guys",
		"FEG",
		"ERC721",
		"/images/nfts/0xbf6301236d71c0d49144b35241905794f5a10bb9.png"
	],
	[
		"0xc066a92dcd1cdb01b41e46d2358b54e7e31f9bf2",
		"Peeverse Genesis",
		"PEE",
		"ERC721",
		"/images/nfts/0xc066a92dcd1cdb01b41e46d2358b54e7e31f9bf2.png"
	],
	[
		"0xc067d3e859cbc2c4a8cf9be96bebfa24b0cba5a6",
		"Tokyo Alternative Girls-Contract Migration",
		"TAG",
		"ERC721",
		"/images/nfts/0xc067d3e859cbc2c4a8cf9be96bebfa24b0cba5a6.png"
	],
	[
		"0xc0c30d6bbd74f5c11e255dd34bc2fa7af03122bf",
		"The Saudi Ape",
		"TBAS",
		"ERC721",
		"/images/nfts/0xc0c30d6bbd74f5c11e255dd34bc2fa7af03122bf.png"
	],
	[
		"0xc0f6cc4b7e67f0518851068601c9f7c4ef18b201",
		"The Ponzi",
		"PONZI",
		"ERC721",
		"/images/nfts/0xc0f6cc4b7e67f0518851068601c9f7c4ef18b201.png"
	],
	[
		"0xc0f799a176e10d45fa56c7298d54f813b51fd151",
		"FunApes NFT",
		"FAPES",
		"ERC721",
		"/images/nfts/0xc0f799a176e10d45fa56c7298d54f813b51fd151.png"
	],
	[
		"0xc178994cb9b66307cd62db8b411759dd36d9c2ee",
		"The Legend of CØCKPUNCH™",
		"COCKPUNCH",
		"ERC721",
		"/images/nfts/0xc178994cb9b66307cd62db8b411759dd36d9c2ee.png"
	],
	[
		"0xc1ad47aeb274157e24a5f01b5857830aef962843",
		"Akumu Dragonz",
		"AKUMU",
		"ERC721",
		"/images/nfts/0xc1ad47aeb274157e24a5f01b5857830aef962843.png"
	],
	[
		"0xc2189a47ac4e3d4c34c848b96eea704609be2ece",
		"GoblinAi",
		"GOBAI",
		"ERC721",
		"/images/nfts/0xc2189a47ac4e3d4c34c848b96eea704609be2ece.png"
	],
	[
		"0xc26064ac72101b555ff2fcc1629a7a867b69c188",
		"ETERNALS XYZ",
		"ETN",
		"ERC721",
		"/images/nfts/0xc26064ac72101b555ff2fcc1629a7a867b69c188.png"
	],
	[
		"0xc28313a1080322cd4a23a89b71ba5632d1fc8962",
		"Rug Radio Faces of Web3 by Cory Van Lew",
		"✺RUGCVL",
		"ERC721",
		"/images/nfts/0xc28313a1080322cd4a23a89b71ba5632d1fc8962.png"
	],
	[
		"0xc2bbcf69b37844c4dd1e0eedb5e9f5c6e7314b2c",
		"The Magus World",
		"MGS",
		"ERC721",
		"/images/nfts/0xc2bbcf69b37844c4dd1e0eedb5e9f5c6e7314b2c.png"
	],
	[
		"0xc3062023692b858879274ec8abeb86bc1eff7a1e",
		"Gyangu NFT",
		"GYG",
		"ERC721",
		"/images/nfts/0xc3062023692b858879274ec8abeb86bc1eff7a1e.png"
	],
	[
		"0xc349126d076f85f5fccd8e4833143591b9ba4e57",
		"BeeFrens",
		"BEEFRENS",
		"ERC721",
		"/images/nfts/0xc349126d076f85f5fccd8e4833143591b9ba4e57.png"
	],
	[
		"0xc3bc4630d78ba47f1944826048cabd33eabaf8c5",
		"Rare Zupepe",
		"ZUPEPE",
		"ERC721",
		"/images/nfts/0xc3bc4630d78ba47f1944826048cabd33eabaf8c5.png"
	],
	[
		"0xc3c62e97c85ea5d8d2edc39034e9dfc6452a50d1",
		"ToyMories",
		"TOYMORIES",
		"ERC721",
		"/images/nfts/0xc3c62e97c85ea5d8d2edc39034e9dfc6452a50d1.png"
	],
	[
		"0xc44cd2685d21fc78766c6168909abdb6cce040fd",
		"TereQN!",
		"TQN",
		"ERC721",
		"/images/nfts/0xc44cd2685d21fc78766c6168909abdb6cce040fd.png"
	],
	[
		"0xc46608d8281a974905a6bdec48f671b76d5f22be",
		"Looks Whale Official",
		"LW69",
		"ERC721",
		"/images/nfts/0xc46608d8281a974905a6bdec48f671b76d5f22be.png"
	],
	[
		"0xc4973de5ee925b8219f1e74559fb217a8e355ecf",
		"Azra Games - The Hopeful",
		"HOPE",
		"ERC721",
		"/images/nfts/0xc4973de5ee925b8219f1e74559fb217a8e355ecf.png"
	],
	[
		"0xc4c9a2ad30556987e4d9f3d63afe65eb9655d66a",
		"Gloomers Official",
		"GLOOM",
		"ERC721",
		"/images/nfts/0xc4c9a2ad30556987e4d9f3d63afe65eb9655d66a.png"
	],
	[
		"0xc50b06f4444c5a795f1246d9416adffc178033fb",
		"uglyduckwtf",
		"UglyDuck",
		"ERC721",
		"/images/nfts/0xc50b06f4444c5a795f1246d9416adffc178033fb.png"
	],
	[
		"0xc51b69a9227660677a5c59e744ba3ebb0cea892f",
		"JPEG Punks",
		"JPEG",
		"ERC721",
		"/images/nfts/0xc51b69a9227660677a5c59e744ba3ebb0cea892f.png"
	],
	[
		"0xc597a66d3c37db76eb0bc08a5bd5908c2bebe489",
		"Placeholder [Rebranded]",
		"Check Birds",
		"ERC721",
		"/images/nfts/0xc597a66d3c37db76eb0bc08a5bd5908c2bebe489.png"
	],
	[
		"0xc5b52253f5225835cc81c52cdb3d6a22bc3b0c93",
		"mcgoblin.wtf",
		"MCGOBLIN",
		"ERC721",
		"/images/nfts/0xc5b52253f5225835cc81c52cdb3d6a22bc3b0c93.png"
	],
	[
		"0xc5c17c3d565169f6a968e33e7914bcd0e4894660",
		"Mothz (WenLamp)",
		"MOTHZ",
		"ERC721",
		"/images/nfts/0xc5c17c3d565169f6a968e33e7914bcd0e4894660.png"
	],
	[
		"0xc5e55e4bd5fef12831b5a666fc9e391538acdc45",
		"DentedFeelsNFT",
		"DEN",
		"ERC721",
		"/images/nfts/0xc5e55e4bd5fef12831b5a666fc9e391538acdc45.png"
	],
	[
		"0xc657c2a3bd558716b3f6b843ef09c0fc628e4977",
		"Cosmic Cats Official",
		"COSMIC",
		"ERC721",
		"/images/nfts/0xc657c2a3bd558716b3f6b843ef09c0fc628e4977.png"
	],
	[
		"0xc67b9897d793a823f0e9cf850aa1b0d23e3f8d09",
		"BAPES FUTURE",
		"FUTURE",
		"ERC721",
		"/images/nfts/0xc67b9897d793a823f0e9cf850aa1b0d23e3f8d09.png"
	],
	[
		"0xc68c9c5fa14f718b39a6d836b8870fadde4f2aa5",
		"The Mutant Saudi Ape",
		"TMAS",
		"ERC721",
		"/images/nfts/0xc68c9c5fa14f718b39a6d836b8870fadde4f2aa5.png"
	],
	[
		"0xc6914b08b4dc244300ae50066f18ab14c5bdfab8",
		"DumpOfficial",
		"DUMPIESNFT",
		"ERC721",
		"/images/nfts/0xc6914b08b4dc244300ae50066f18ab14c5bdfab8.png"
	],
	[
		"0xc6ec80029cd2aa4b0021ceb11248c07b25d2de34",
		"the littles NFT",
		"thelittlesnft",
		"ERC721",
		"/images/nfts/0xc6ec80029cd2aa4b0021ceb11248c07b25d2de34.png"
	],
	[
		"0xc6f24005e2be8077f791529cbecefca1c7292842",
		"The math checks out.",
		"CHCKSOUT",
		"ERC721",
		"/images/nfts/0xc6f24005e2be8077f791529cbecefca1c7292842.png"
	],
	[
		"0xc70c411cfdbe542e8208af52092ca4f56b633977",
		"devilvalley",
		"DV",
		"ERC721",
		"/images/nfts/0xc70c411cfdbe542e8208af52092ca4f56b633977.png"
	],
	[
		"0xc799f57355677a19b91c722734743215513dece5",
		"Shattered Eon Colonists",
		"Colonists",
		"ERC721",
		"/images/nfts/0xc799f57355677a19b91c722734743215513dece5.png"
	],
	[
		"0xc7c962e44316e0c052448a0fdd1da15ea24fa9a9",
		"Gossamer Seed",
		"SEED",
		"ERC721",
		"/images/nfts/0xc7c962e44316e0c052448a0fdd1da15ea24fa9a9.png"
	],
	[
		"0xc7e4d1dfb2ffda31f27c6047479dfa7998a07d47",
		"Aopanda Party",
		"APP",
		"ERC721",
		"/images/nfts/0xc7e4d1dfb2ffda31f27c6047479dfa7998a07d47.png"
	],
	[
		"0xc86664e7d2608f881f796ee8e24fa9d4d7598406",
		"OFFICIAL WAGMI ARMY",
		"WAGMI",
		"ERC721",
		"/images/nfts/0xc86664e7d2608f881f796ee8e24fa9d4d7598406.png"
	],
	[
		"0xc878671ff88f1374d2186127573e4a63931370fc",
		"Los Muertos World",
		"LOSMUERTOS",
		"ERC721",
		"/images/nfts/0xc878671ff88f1374d2186127573e4a63931370fc.png"
	],
	[
		"0xc907ddb25a926d51784aedd4cf9c04e3eb5da12c",
		"dirtbirds.wtf",
		"DB",
		"ERC721",
		"/images/nfts/0xc907ddb25a926d51784aedd4cf9c04e3eb5da12c.png"
	],
	[
		"0xc99b3837813b43d93c41bc5706ae0b22c3fa3ccb",
		"Shilly: The Access Passes",
		"SHILLY",
		"ERC721",
		"/images/nfts/0xc99b3837813b43d93c41bc5706ae0b22c3fa3ccb.png"
	],
	[
		"0xc99c679c50033bbc5321eb88752e89a93e9e83c5",
		"KILLABEARS",
		"KILLABEARS",
		"ERC721",
		"/images/nfts/0xc99c679c50033bbc5321eb88752e89a93e9e83c5.png"
	],
	[
		"0xc9a0b20d522aeeac5d8d6ba13146a073a97b326a",
		"Nereus Shapeshifters",
		"SHAPE",
		"ERC721",
		"/images/nfts/0xc9a0b20d522aeeac5d8d6ba13146a073a97b326a.png"
	],
	[
		"0xc9d198089d6c31d0ca5cc5b92c97a57a97bbfde2",
		"Space Riders NFT",
		"SPR",
		"ERC721",
		"/images/nfts/0xc9d198089d6c31d0ca5cc5b92c97a57a97bbfde2.png"
	],
	[
		"0xca21d4228cdcc68d4e23807e5e370c07577dd152",
		"ZORBS by ZORA",
		"ZORB",
		"ERC721",
		"/images/nfts/0xca21d4228cdcc68d4e23807e5e370c07577dd152.png"
	],
	[
		"0xca6d7604ae55ba1ba864c26692a91979f25cdb96",
		"FreeNFT.com Daily Cargo",
		"DC",
		"ERC721",
		"/images/nfts/0xca6d7604ae55ba1ba864c26692a91979f25cdb96.png"
	],
	[
		"0xca7ca7bcc765f77339be2d648ba53ce9c8a262bd",
		"tubby cats",
		"TUBBY",
		"ERC721",
		"/images/nfts/0xca7ca7bcc765f77339be2d648ba53ce9c8a262bd.png"
	],
	[
		"0xca850e26ffe8cc8294a7e9ccea30f3eedd98edd6",
		"Misfits project",
		"MF",
		"ERC721",
		"/images/nfts/0xca850e26ffe8cc8294a7e9ccea30f3eedd98edd6.png"
	],
	[
		"0xcb1bf27e9d005cb808710498835cf2a24b497471",
		"Art of Mob: Ladies First",
		"art_of_mob_ladies_first",
		"ERC721",
		"/images/nfts/0xcb1bf27e9d005cb808710498835cf2a24b497471.png"
	],
	[
		"0xcb323294d1cfb4547126b0e299af2e1fab7f1943",
		"omnis.wtf",
		"OMNIS",
		"ERC721",
		"/images/nfts/0xcb323294d1cfb4547126b0e299af2e1fab7f1943.png"
	],
	[
		"0xcb324a4c479d7b33d3377932227c675f5ef3ec9b",
		"Meg4mint",
		"MGM",
		"ERC721",
		"/images/nfts/0xcb324a4c479d7b33d3377932227c675f5ef3ec9b.png"
	],
	[
		"0xcb897d3a455f55e38ea192ea85af8cd19ca65239",
		"3DBirds",
		"3DB",
		"ERC721",
		"/images/nfts/0xcb897d3a455f55e38ea192ea85af8cd19ca65239.png"
	],
	[
		"0xcba890b4718fc3f67821eece841ba314ff554a8f",
		"The Ordinal War",
		"THR",
		"ERC721",
		"/images/nfts/0xcba890b4718fc3f67821eece841ba314ff554a8f.png"
	],
	[
		"0xcbb796951a5b422687c877fbd12fc56b48c8d58b",
		"Sheep Counting",
		"TEST123",
		"ERC721",
		"/images/nfts/0xcbb796951a5b422687c877fbd12fc56b48c8d58b.png"
	],
	[
		"0xcc7187ddbe8f099d31bac88d8d67f793001d718e",
		"Ether Name Service",
		".ether",
		"ERC721",
		"/images/nfts/0xcc7187ddbe8f099d31bac88d8d67f793001d718e.png"
	],
	[
		"0xcc88d23e7dddcf3dde3fce532f65500ab762069d",
		"Magic Forest No Sleep",
		"MFNS",
		"ERC721",
		"/images/nfts/0xcc88d23e7dddcf3dde3fce532f65500ab762069d.png"
	],
	[
		"0xcca8050215e585e2a223c6ea9d1d1f9b30beaf3e",
		"CryptoSimeji Official",
		"CryptoSimeji",
		"ERC721",
		"/images/nfts/0xcca8050215e585e2a223c6ea9d1d1f9b30beaf3e.png"
	],
	[
		"0xcce1145ec8955a2a4f4a94839b0cd02f79c2b2fc",
		"ethkun! (onchain)",
		"ETHKUN",
		"ERC721",
		"/images/nfts/0xcce1145ec8955a2a4f4a94839b0cd02f79c2b2fc.png"
	],
	[
		"0xcd041f40d497038e2da65988b7d7e2c0d9244619",
		"Lacoste UNDW3 - UNDW3 Card",
		"UNDW3",
		"ERC721",
		"/images/nfts/0xcd041f40d497038e2da65988b7d7e2c0d9244619.png"
	],
	[
		"0xcd221b1f98b0029977dcdb8de5723efd1f5cfcff",
		"DOGE GOBBLERS",
		"DGOB",
		"ERC721",
		"/images/nfts/0xcd221b1f98b0029977dcdb8de5723efd1f5cfcff.png"
	],
	[
		"0xcd8366e0be0df82c72f95f3647795bddda6e9222",
		"fluffers by fluffytopia",
		"FLUFF",
		"ERC721",
		"/images/nfts/0xcd8366e0be0df82c72f95f3647795bddda6e9222.png"
	],
	[
		"0xcde8f5008c313820b558addfcd8628e20cc1c2fe",
		"QzukiNFT",
		"Qzuki",
		"ERC721",
		"/images/nfts/0xcde8f5008c313820b558addfcd8628e20cc1c2fe.png"
	],
	[
		"0xce0f25934deaaddd174427f1978bcd487a85e9fa",
		"Truplay Genesis RhymVerse Heroes",
		"TRU",
		"ERC721",
		"/images/nfts/0xce0f25934deaaddd174427f1978bcd487a85e9fa.png"
	],
	[
		"0xce61f0aacd24fc2056032c241960ac2b33e34a1e",
		"ThievesList",
		"THIEF",
		"ERC721",
		"/images/nfts/0xce61f0aacd24fc2056032c241960ac2b33e34a1e.png"
	],
	[
		"0xce6e3a14b5f8ce2b05af0f117dc922769779aa3b",
		"MEGAMI_NFT",
		"MEGAMI",
		"ERC721",
		"/images/nfts/0xce6e3a14b5f8ce2b05af0f117dc922769779aa3b.png"
	],
	[
		"0xce8f3bf797d587c0a6425028298fb9a45266a1e5",
		"NOT RENGA",
		"NOTRENGA",
		"ERC721",
		"/images/nfts/0xce8f3bf797d587c0a6425028298fb9a45266a1e5.png"
	],
	[
		"0xcf099445347f0f006c19b90f1c1933eb9413682b",
		"Bulls and Apes Project - Teen Bulls",
		"BAPTEENB",
		"ERC721",
		"/images/nfts/0xcf099445347f0f006c19b90f1c1933eb9413682b.png"
	],
	[
		"0xcfe50e49ec3e5eb24cc5bbce524166424563dd4e",
		"Very long CNP",
		"VLCNP",
		"ERC721",
		"/images/nfts/0xcfe50e49ec3e5eb24cc5bbce524166424563dd4e.png"
	],
	[
		"0xd04ff5e94340a2e1d913c3728a12b210c5d5bb2d",
		"OPEN EDITION BY KEVIN ABOSCH",
		"OEKA",
		"ERC721",
		"/images/nfts/0xd04ff5e94340a2e1d913c3728a12b210c5d5bb2d.png"
	],
	[
		"0xd0d1be9a388c26b1847b52f8b1b5108d8f97aef3",
		"G-Drake",
		"GD",
		"ERC721",
		"/images/nfts/0xd0d1be9a388c26b1847b52f8b1b5108d8f97aef3.png"
	],
	[
		"0xd1466d7a2e13a47677608f68093c5ea9fe910611",
		"Matchbook",
		"MTC",
		"ERC721",
		"/images/nfts/0xd1466d7a2e13a47677608f68093c5ea9fe910611.png"
	],
	[
		"0xd1497f4b669c54701890a04f7048598854837811",
		"Kitaro World Scenes",
		"Portals",
		"ERC721",
		"/images/nfts/0xd1497f4b669c54701890a04f7048598854837811.png"
	],
	[
		"0xd186db306f8bbdd515663e3880b2a94c16fa58b2",
		"Mirakai Scrolls",
		"MIRAKAI_SCROLLS",
		"ERC721",
		"/images/nfts/0xd186db306f8bbdd515663e3880b2a94c16fa58b2.png"
	],
	[
		"0xd1c1ab59cb16984184388d5411d6644c07a0b575",
		"Unordinals",
		"BTC",
		"ERC721",
		"/images/nfts/0xd1c1ab59cb16984184388d5411d6644c07a0b575.png"
	],
	[
		"0xd2583ca9971ae6ee6b8239bb7a9f63f53bc75ee3",
		"CXGNUS GENESIS",
		"CXGG",
		"ERC721",
		"/images/nfts/0xd2583ca9971ae6ee6b8239bb7a9f63f53bc75ee3.png"
	],
	[
		"0xd2669aefca82e23d1b0a94459deafd656f6b719a",
		"Etherjump Plots",
		"EJPLOTS",
		"ERC721",
		"/images/nfts/0xd2669aefca82e23d1b0a94459deafd656f6b719a.png"
	],
	[
		"0xd33fb3aa635448117455093e763928a5e93a51e8",
		"Island Voyage Ape Club",
		"IVAC",
		"ERC721",
		"/images/nfts/0xd33fb3aa635448117455093e763928a5e93a51e8.png"
	],
	[
		"0xd3605059c3ce9facf625fa72d727508b7b7f280f",
		"pablos.lol",
		"Pablos",
		"ERC721",
		"/images/nfts/0xd3605059c3ce9facf625fa72d727508b7b7f280f.png"
	],
	[
		"0xd3771e1aad236a9ff04b4ecef91ab88f45eabcc4",
		"Yagiverse Genesis",
		"YAGIVERSE",
		"ERC721",
		"/images/nfts/0xd3771e1aad236a9ff04b4ecef91ab88f45eabcc4.png"
	],
	[
		"0xd3d9ddd0cf0a5f0bfb8f7fceae075df687eaebab",
		"Redacted Remilio Babies",
		"TEST",
		"ERC721",
		"/images/nfts/0xd3d9ddd0cf0a5f0bfb8f7fceae075df687eaebab.png"
	],
	[
		"0xd4190dd1da460fc7bc41a792e688604778820ac9",
		"Lacoste UNDW3: The Emerge",
		"EMERGED",
		"ERC721",
		"/images/nfts/0xd4190dd1da460fc7bc41a792e688604778820ac9.png"
	],
	[
		"0xd4307e0acd12cf46fd6cf93bc264f5d5d1598792",
		"Base, Introduced",
		"BASEINTRODUCED",
		"ERC721",
		"/images/nfts/0xd4307e0acd12cf46fd6cf93bc264f5d5d1598792.png"
	],
	[
		"0xd4b1a63cb167968abf039a858c3745228fff937d",
		"The Ordos Database",
		"TOD",
		"ERC721",
		"/images/nfts/0xd4b1a63cb167968abf039a858c3745228fff937d.png"
	],
	[
		"0xd4d1f32c280056f107ad4adf8e16bc02f2c5b339",
		"Tasties",
		"TASTIES",
		"ERC721",
		"/images/nfts/0xd4d1f32c280056f107ad4adf8e16bc02f2c5b339.png"
	],
	[
		"0xd4e53e3597a2ed999d37e974f1f36b15eb879bad",
		"Shamanzs Genesis",
		"shzv2",
		"ERC721",
		"/images/nfts/0xd4e53e3597a2ed999d37e974f1f36b15eb879bad.png"
	],
	[
		"0xd532b88607b1877fe20c181cba2550e3bbd6b31c",
		"SuperNormal",
		"SUPERNORMAL",
		"ERC721",
		"/images/nfts/0xd532b88607b1877fe20c181cba2550e3bbd6b31c.png"
	],
	[
		"0xd629d90a6bef2e542cab4aa42ee1b509a2fab7f2",
		"Scroll of Mages",
		"SOM",
		"ERC721",
		"/images/nfts/0xd629d90a6bef2e542cab4aa42ee1b509a2fab7f2.png"
	],
	[
		"0xd648922586e98bebf1d8f5833fb6cbe3fcf36fcc",
		"Monkey Trip NFT",
		"MT",
		"ERC721",
		"/images/nfts/0xd648922586e98bebf1d8f5833fb6cbe3fcf36fcc.png"
	],
	[
		"0xd6f75a20aa64634743d40fafa88473020302c530",
		"Onigiri Pepes",
		"OPEPE",
		"ERC721",
		"/images/nfts/0xd6f75a20aa64634743d40fafa88473020302c530.png"
	],
	[
		"0xd73554941aeb80040ed551710d407f0d7af13fe0",
		"DCI NFT",
		"DCI",
		"ERC721",
		"/images/nfts/0xd73554941aeb80040ed551710d407f0d7af13fe0.png"
	],
	[
		"0xd73acd7f5099fdd910215dbff029185f21ffbcf0",
		"Acrocalypse [Legacy]",
		"ACROC",
		"ERC721",
		"/images/nfts/0xd73acd7f5099fdd910215dbff029185f21ffbcf0.png"
	],
	[
		"0xd7ac080800566d42ab9789a99b7ed0dd5ecbe594",
		"The Psychonaut Ape Division",
		"PAD",
		"ERC721",
		"/images/nfts/0xd7ac080800566d42ab9789a99b7ed0dd5ecbe594.png"
	],
	[
		"0xd7fbff0fd48de02901e19b192cc59b1c31198526",
		"Thunderbirds International Rescue Club (FAB)",
		"FAB",
		"ERC721",
		"/images/nfts/0xd7fbff0fd48de02901e19b192cc59b1c31198526.png"
	],
	[
		"0xd88b8b8c45a0531229dbbf93b8c503bfbe17e86a",
		"Asian Disappointments",
		"Asian Disappointments",
		"ERC721",
		"/images/nfts/0xd88b8b8c45a0531229dbbf93b8c503bfbe17e86a.png"
	],
	[
		"0xd8a5d498ab43ed060cb6629b97a19e3e4276dd9f",
		"The Girls of Armament: GENE_SIS",
		"GENESIS",
		"ERC721",
		"/images/nfts/0xd8a5d498ab43ed060cb6629b97a19e3e4276dd9f.png"
	],
	[
		"0xd93206bd0062cc054e397ecccdb8436c3fa5700e",
		"Decagon by Golid and Deca",
		"10GON",
		"ERC721",
		"/images/nfts/0xd93206bd0062cc054e397ecccdb8436c3fa5700e.png"
	],
	[
		"0xd96463a406e734debd0f3eabf2343bdc7a86ac83",
		"Nitro Token by PUMA",
		"NITKN",
		"ERC721",
		"/images/nfts/0xd96463a406e734debd0f3eabf2343bdc7a86ac83.png"
	],
	[
		"0xd998847806dbbbc5fe3e90063475ceccd242b926",
		"Dope CryptoPunks Club",
		"punk",
		"ERC721",
		"/images/nfts/0xd998847806dbbbc5fe3e90063475ceccd242b926.png"
	],
	[
		"0xd9c5a09ffc3ee85f21bc8bce8fb0180106c7d695",
		"UGHA BUGHA OFFICIAL",
		"UB",
		"ERC721",
		"/images/nfts/0xd9c5a09ffc3ee85f21bc8bce8fb0180106c7d695.png"
	],
	[
		"0xda4c9ffb9a96ef44865114be4af25004f0ee385d",
		"Moodies by Hanuka",
		"MOOD",
		"ERC721",
		"/images/nfts/0xda4c9ffb9a96ef44865114be4af25004f0ee385d.png"
	],
	[
		"0xda60730e1feaa7d8321f62ffb069edd869e57d02",
		"Quirklings",
		"QRKL",
		"ERC721",
		"/images/nfts/0xda60730e1feaa7d8321f62ffb069edd869e57d02.png"
	],
	[
		"0xda64c62254e6ffe6783dd00472559a1744512846",
		"Good Minds NFT",
		"GM",
		"ERC721",
		"/images/nfts/0xda64c62254e6ffe6783dd00472559a1744512846.png"
	],
	[
		"0xda72090dea4c4817bcda67e8533d8847faa82a22",
		"The Turtlez Saving Mission Official",
		"TUR",
		"ERC721",
		"/images/nfts/0xda72090dea4c4817bcda67e8533d8847faa82a22.png"
	],
	[
		"0xdb0867214f0a2e129fbc8b72f2898851e28fb09f",
		"The Adventures of Jimmy",
		"JYC",
		"ERC721",
		"/images/nfts/0xdb0867214f0a2e129fbc8b72f2898851e28fb09f.png"
	],
	[
		"0xdb7b094fdc04f51560a03a99f747044951b73727",
		"Boonmirds",
		"MOONBIRD2",
		"ERC721",
		"/images/nfts/0xdb7b094fdc04f51560a03a99f747044951b73727.png"
	],
	[
		"0xdcaf23e44639daf29f6532da213999d737f15aa4",
		"moonbats.wtf",
		"MB",
		"ERC721",
		"/images/nfts/0xdcaf23e44639daf29f6532da213999d737f15aa4.png"
	],
	[
		"0xdcb1cdfe2b5f592e7bdc2696b7a68c6e866c4cc2",
		"Rotten Anti Social Club",
		"RASC",
		"ERC721",
		"/images/nfts/0xdcb1cdfe2b5f592e7bdc2696b7a68c6e866c4cc2.png"
	],
	[
		"0xdcd9be0fdfc70fc24ddcf5a4a0ef281ec730af8e",
		"THE TOKS",
		"TOKS",
		"ERC721",
		"/images/nfts/0xdcd9be0fdfc70fc24ddcf5a4a0ef281ec730af8e.png"
	],
	[
		"0xdcf68c8ebb18df1419c7dff17ed33505faf8a20c",
		"AngryCat - official",
		"Angry Cat",
		"ERC721",
		"/images/nfts/0xdcf68c8ebb18df1419c7dff17ed33505faf8a20c.png"
	],
	[
		"0xdd56a4131fb1b54e1c7054957ce1291782838efd",
		"The Infernals Genesis",
		"INFERNAL",
		"ERC721",
		"/images/nfts/0xdd56a4131fb1b54e1c7054957ce1291782838efd.png"
	],
	[
		"0xddf65c5f5e1656125feb6a856f77f3d1524840e7",
		"AotuNFT",
		"AOTU",
		"ERC721",
		"/images/nfts/0xddf65c5f5e1656125feb6a856f77f3d1524840e7.png"
	],
	[
		"0xde01c9c477cb66dc3bbfc4b7d861934a5f4278ed",
		"HELIX - MYSTERY CAR",
		"MYSTERY CAR",
		"ERC721",
		"/images/nfts/0xde01c9c477cb66dc3bbfc4b7d861934a5f4278ed.png"
	],
	[
		"0xde1ac5fdf1a7203af036f590bcc4c0b91b2d3e3f",
		"Five Head Circle (FHC)",
		"FHC",
		"ERC721",
		"/images/nfts/0xde1ac5fdf1a7203af036f590bcc4c0b91b2d3e3f.png"
	],
	[
		"0xde3f1f2083f826bc3f7f2f96e7e6b321294374b7",
		"BuddaBearsOfficial",
		"BUDDA",
		"ERC721",
		"/images/nfts/0xde3f1f2083f826bc3f7f2f96e7e6b321294374b7.png"
	],
	[
		"0xdebb2d5f818b53e0732444b31d4efe4af887026a",
		"Fuk Everything",
		"FUK",
		"ERC721",
		"/images/nfts/0xdebb2d5f818b53e0732444b31d4efe4af887026a.png"
	],
	[
		"0xdec995f7bd1c165441375e318ae41f3b014b14d0",
		"HungryHamsterClub",
		"HHC",
		"ERC721",
		"/images/nfts/0xdec995f7bd1c165441375e318ae41f3b014b14d0.png"
	],
	[
		"0xdedf88899d7c9025f19c6c9f188deb98d49cd760",
		"Murakami Lucky Cat Coin Bank",
		"Cat Coin Bank",
		"ERC721",
		"/images/nfts/0xdedf88899d7c9025f19c6c9f188deb98d49cd760.png"
	],
	[
		"0xdf3a5f8576a6ff359990688d94cf9c74245607f3",
		"GardenLockdown",
		"PLANT",
		"ERC721",
		"/images/nfts/0xdf3a5f8576a6ff359990688d94cf9c74245607f3.png"
	],
	[
		"0xdfde78d2baec499fe18f2be74b6c287eed9511d7",
		"BrainDrops",
		"BRAIN",
		"ERC721",
		"/images/nfts/0xdfde78d2baec499fe18f2be74b6c287eed9511d7.png"
	],
	[
		"0xe0176ba60efddb29cac5b15338c9962daee9de0c",
		"PREMINT Collector Pass - OFFICIAL",
		"PREMINTCOLL",
		"ERC721",
		"/images/nfts/0xe0176ba60efddb29cac5b15338c9962daee9de0c.png"
	],
	[
		"0xe0c9bfc391cee9e840825239ae9910c77064b356",
		"SUBJECTS World",
		"SUBJECT",
		"ERC721",
		"/images/nfts/0xe0c9bfc391cee9e840825239ae9910c77064b356.png"
	],
	[
		"0xe0d2ace5debc43d3e0e758577d111c4859df6f7e",
		"The Gang Ape Bling Club",
		"GABC",
		"ERC721",
		"/images/nfts/0xe0d2ace5debc43d3e0e758577d111c4859df6f7e.png"
	],
	[
		"0xe0d441fb50b802d587a425b654ed4eb27ea04c6e",
		"Kitsu Mintu",
		"Kitsu Mintu",
		"ERC721",
		"/images/nfts/0xe0d441fb50b802d587a425b654ed4eb27ea04c6e.png"
	],
	[
		"0xe17827609ac34443b3987661f4e037642f6bd9ba",
		"Shellz Orb",
		"SHELLZ",
		"ERC721",
		"/images/nfts/0xe17827609ac34443b3987661f4e037642f6bd9ba.png"
	],
	[
		"0xe185f44b1e212b396aee139c2c902d60e275c334",
		"Makimono: Origins",
		"MAKIMONO",
		"ERC721",
		"/images/nfts/0xe185f44b1e212b396aee139c2c902d60e275c334.png"
	],
	[
		"0xe1b81cd6a494cbca06a8e2055a62c2cf0fa5a8ac",
		"Kubz Relic",
		"Kubz Relic",
		"ERC721",
		"/images/nfts/0xe1b81cd6a494cbca06a8e2055a62c2cf0fa5a8ac.png"
	],
	[
		"0xe21ebcd28d37a67757b9bc7b290f4c4928a430b1",
		"The Saudis",
		"SAUD",
		"ERC721",
		"/images/nfts/0xe21ebcd28d37a67757b9bc7b290f4c4928a430b1.png"
	],
	[
		"0xe2ddf03ba8cdafd2bb4884e52f7fb46df4fc7dc1",
		"Anomura Mystery Bowl",
		"Bowl",
		"ERC721",
		"/images/nfts/0xe2ddf03ba8cdafd2bb4884e52f7fb46df4fc7dc1.png"
	],
	[
		"0xe2e27b49e405f6c25796167b2500c195f972ebac",
		"Owls",
		"HOOT",
		"ERC721",
		"/images/nfts/0xe2e27b49e405f6c25796167b2500c195f972ebac.png"
	],
	[
		"0xe3589ae55bbd7697c76c510a5335eb31d972a17e",
		"Broadside",
		"BSIDE",
		"ERC721",
		"/images/nfts/0xe3589ae55bbd7697c76c510a5335eb31d972a17e.png"
	],
	[
		"0xe361f10965542ee57d39043c9c3972b77841f581",
		"Soulda16Club",
		"SOULDA16",
		"ERC721",
		"/images/nfts/0xe361f10965542ee57d39043c9c3972b77841f581.png"
	],
	[
		"0xe36f5350b097ea72e561ee154b45363c808a56d2",
		"The People Of Crypto",
		"POC",
		"ERC721",
		"/images/nfts/0xe36f5350b097ea72e561ee154b45363c808a56d2.png"
	],
	[
		"0xe388c6b0537c956de663f6197f38a296549004bd",
		"Hello Charlie Official!",
		"CHAR",
		"ERC721",
		"/images/nfts/0xe388c6b0537c956de663f6197f38a296549004bd.png"
	],
	[
		"0xe42cad6fc883877a76a26a16ed92444ab177e306",
		"The Merge: Regenesis",
		"MERGE",
		"ERC721",
		"/images/nfts/0xe42cad6fc883877a76a26a16ed92444ab177e306.png"
	],
	[
		"0xe509c6024a383afb2a5a8f9e50c00aa25345700f",
		"CHIBI BY KENJII",
		"GENZ",
		"ERC721",
		"/images/nfts/0xe509c6024a383afb2a5a8f9e50c00aa25345700f.png"
	],
	[
		"0xe588feda21d17bd8f7b0532d3e439ab245c2f67f",
		"The British",
		"BRITISH",
		"ERC721",
		"/images/nfts/0xe588feda21d17bd8f7b0532d3e439ab245c2f67f.png"
	],
	[
		"0xe5a5520b798c5f67ca1b0657b932656df02595ad",
		"PUNK APES YC",
		"PUNKAYC",
		"ERC721",
		"/images/nfts/0xe5a5520b798c5f67ca1b0657b932656df02595ad.png"
	],
	[
		"0xe5b4d6b5f37cae9dc4c7384cd97038cd0573d7d2",
		"Strxngers",
		"SXNR",
		"ERC721",
		"/images/nfts/0xe5b4d6b5f37cae9dc4c7384cd97038cd0573d7d2.png"
	],
	[
		"0xe5c7d9a18df4fdc12db723761a862845612917ba",
		"NuCyber",
		"LLAMALAND",
		"ERC721",
		"/images/nfts/0xe5c7d9a18df4fdc12db723761a862845612917ba.png"
	],
	[
		"0xe5e771bc685c5a89710131919c616c361ff001c6",
		"WZRDS",
		"WZNFT",
		"ERC721",
		"/images/nfts/0xe5e771bc685c5a89710131919c616c361ff001c6.png"
	],
	[
		"0xe5f1ff64fd5db9113b05f4c17f23a0e92bf3b33e",
		"Halloween Poupelle",
		"HWP",
		"ERC721",
		"/images/nfts/0xe5f1ff64fd5db9113b05f4c17f23a0e92bf3b33e.png"
	],
	[
		"0xe61e0fe5e16f4a06d1e38a53eaa4f43ce89ad19c",
		"BubbleFriends",
		"BubbleFriends",
		"ERC721",
		"/images/nfts/0xe61e0fe5e16f4a06d1e38a53eaa4f43ce89ad19c.png"
	],
	[
		"0xe6408dd80ee4d7596151ead35b37bdf84d2a3b0f",
		"Dragon Fish Tokyo",
		"DFT",
		"ERC721",
		"/images/nfts/0xe6408dd80ee4d7596151ead35b37bdf84d2a3b0f.png"
	],
	[
		"0xe66ff9479d90ded7dea10acaed04e894e8643c27",
		"PFPepe",
		"PFPP",
		"ERC721",
		"/images/nfts/0xe66ff9479d90ded7dea10acaed04e894e8643c27.png"
	],
	[
		"0xe67c92b940c13dcfd9023ced266b48a3a5fdf501",
		"POR&co",
		"POR",
		"ERC721",
		"/images/nfts/0xe67c92b940c13dcfd9023ced266b48a3a5fdf501.png"
	],
	[
		"0xe6a05f25a051a90d5d144c04f783f6999e48e32d",
		"Multibeasts By The Haas Brothers",
		"MTBST",
		"ERC721",
		"/images/nfts/0xe6a05f25a051a90d5d144c04f783f6999e48e32d.png"
	],
	[
		"0xe6cc637f18ac18ee0c674b04c59f885a6f9b6a14",
		"RimusAir",
		"RIMUS",
		"ERC721",
		"/images/nfts/0xe6cc637f18ac18ee0c674b04c59f885a6f9b6a14.png"
	],
	[
		"0xe6d48bf4ee912235398b96e16db6f310c21e82cb",
		"God Hates NFTees",
		"GHN",
		"ERC721",
		"/images/nfts/0xe6d48bf4ee912235398b96e16db6f310c21e82cb.png"
	],
	[
		"0xe75512aa3bec8f00434bbd6ad8b0a3fbff100ad6",
		"MG Land",
		"MGLand",
		"ERC721",
		"/images/nfts/0xe75512aa3bec8f00434bbd6ad8b0a3fbff100ad6.png"
	],
	[
		"0xe83dd605b70b47c8af86580bdd4fcb987ff36e60",
		"BTFDRabbits",
		"BTFD",
		"ERC721"
	],
	[
		"0xe8e2b12e02cefc12603e99cd414d9d9ec82068cf",
		"My Final Form by DNS_ERR",
		"MFFers",
		"ERC721",
		"/images/nfts/0xe8e2b12e02cefc12603e99cd414d9d9ec82068cf.png"
	],
	[
		"0xe90d8fb7b79c8930b5c8891e61c298b412a6e81a",
		"Lasogette",
		"LASOG",
		"ERC721",
		"/images/nfts/0xe90d8fb7b79c8930b5c8891e61c298b412a6e81a.png"
	],
	[
		"0xe915354fc6c43dbb91ab9a1241e5ecfef899c6ec",
		"DegenSkellies",
		"DegenSkellies",
		"ERC721",
		"/images/nfts/0xe915354fc6c43dbb91ab9a1241e5ecfef899c6ec.png"
	],
	[
		"0xe91ceaf5f93032f347ac16fa5b9356ad6aba54bc",
		"JungleKing Official",
		"JK",
		"ERC721",
		"/images/nfts/0xe91ceaf5f93032f347ac16fa5b9356ad6aba54bc.png"
	],
	[
		"0xea00e99f35e9bfe9e50a31e9cd4fc8b6d451a57c",
		"Undeeds",
		"UNDEEDS",
		"ERC721",
		"/images/nfts/0xea00e99f35e9bfe9e50a31e9cd4fc8b6d451a57c.png"
	],
	[
		"0xea67b4dd7bacae340bc4e43652044b5cded1963c",
		"The MoonkysNFT",
		"MOONK",
		"ERC721",
		"/images/nfts/0xea67b4dd7bacae340bc4e43652044b5cded1963c.png"
	],
	[
		"0xea68b14bca0a7ebc9461969ea68454fa7f7135f6",
		"DragonDeez",
		"DD",
		"ERC721",
		"/images/nfts/0xea68b14bca0a7ebc9461969ea68454fa7f7135f6.png"
	],
	[
		"0xea97fc2c61b8faf98f20ba81aa8a2cf117eb04dc",
		"StrayDogz Official",
		"SDZ",
		"ERC721",
		"/images/nfts/0xea97fc2c61b8faf98f20ba81aa8a2cf117eb04dc.png"
	],
	[
		"0xeab79a9468321c0c865b33eae013e573c9d05737",
		"Pocket Bones",
		"BONE",
		"ERC721",
		"/images/nfts/0xeab79a9468321c0c865b33eae013e573c9d05737.png"
	],
	[
		"0xeb2dfc54ebafca8f50efcc1e21a9d100b5aeb349",
		"Kubz",
		"Kubz",
		"ERC721",
		"/images/nfts/0xeb2dfc54ebafca8f50efcc1e21a9d100b5aeb349.png"
	],
	[
		"0xeb4e856f69158052ac0aaf7dc26f63dcb1ee067f",
		"YOLO Fantasy",
		"YF",
		"ERC721",
		"/images/nfts/0xeb4e856f69158052ac0aaf7dc26f63dcb1ee067f.png"
	],
	[
		"0xeb88dda4cc8739c064debf0b8672e596db6bccf4",
		"Champions Ascension - Elemental Eternal - MIGRATE Your Champions Ascension NFTs. Purchases on Hold",
		"ELEMENTAL",
		"ERC721",
		"/images/nfts/0xeb88dda4cc8739c064debf0b8672e596db6bccf4.png"
	],
	[
		"0xec0a7a26456b8451aefc4b00393ce1beff5eb3e9",
		"Allstarz Official",
		"ALLSTAR",
		"ERC721",
		"/images/nfts/0xec0a7a26456b8451aefc4b00393ce1beff5eb3e9.png"
	],
	[
		"0xec64d881dbfd5871320e465562d913bdc25ce8fe",
		"The Chimpsons Official",
		"CHIMPSONS",
		"ERC721",
		"/images/nfts/0xec64d881dbfd5871320e465562d913bdc25ce8fe.png"
	],
	[
		"0xec82aa4cd9d4c7c209e5e2adb2dc90ab3b95c015",
		"The Feline Experiment",
		"TFE",
		"ERC721",
		"/images/nfts/0xec82aa4cd9d4c7c209e5e2adb2dc90ab3b95c015.png"
	],
	[
		"0xeca22c0fd4ac62d81a5633eb547e6797c9579462",
		"Digi Miners NFT",
		"$MINE",
		"ERC721",
		"/images/nfts/0xeca22c0fd4ac62d81a5633eb547e6797c9579462.png"
	],
	[
		"0xeca6349907535d1b0b8dd3d58b5914e0316d34b7",
		"your mom nft",
		"mom",
		"ERC721",
		"/images/nfts/0xeca6349907535d1b0b8dd3d58b5914e0316d34b7.png"
	],
	[
		"0xeccae88ff31e9f823f25beb404cbf2110e81f1fa",
		"Timeline Transit Company",
		"TTC",
		"ERC721",
		"/images/nfts/0xeccae88ff31e9f823f25beb404cbf2110e81f1fa.png"
	],
	[
		"0xecd9837673d4c10f5d61a3e7b81c12aefa0b472b",
		"Alma X Jack Irving - Odyssey",
		"ODSY",
		"ERC721",
		"/images/nfts/0xecd9837673d4c10f5d61a3e7b81c12aefa0b472b.png"
	],
	[
		"0xedf5d556975509303790f53bca834230c72f3f6e",
		"The Clown Squad",
		"CS",
		"ERC721",
		"/images/nfts/0xedf5d556975509303790f53bca834230c72f3f6e.png"
	],
	[
		"0xeea95c5e799565343f4d70bb76878ca8086fcc11",
		"Habibi Ape Club",
		"HAC",
		"ERC721",
		"/images/nfts/0xeea95c5e799565343f4d70bb76878ca8086fcc11.png"
	],
	[
		"0xeeca143947ae66d5f74acb0dbb105faf47b29596",
		"Ethnology Series 2: Gods and Demons",
		"Gods and Demons S2",
		"ERC721",
		"/images/nfts/0xeeca143947ae66d5f74acb0dbb105faf47b29596.png"
	],
	[
		"0xeee4ad0b82d3417d4efd519232702df847bc0a49",
		"STARTJPN Ticket",
		"STK",
		"ERC721",
		"/images/nfts/0xeee4ad0b82d3417d4efd519232702df847bc0a49.png"
	],
	[
		"0xef482ff2f7874bf6cc679a6b49c020441acd5f2c",
		"SKULLPIX Official",
		"SKULLPIX",
		"ERC721",
		"/images/nfts/0xef482ff2f7874bf6cc679a6b49c020441acd5f2c.png"
	],
	[
		"0xefe58f3ace7d7dac903b2cc2e18ef1858d4e2675",
		"Cosmic Clones",
		"COSMICCLONES",
		"ERC721",
		"/images/nfts/0xefe58f3ace7d7dac903b2cc2e18ef1858d4e2675.png"
	],
	[
		"0xefeea2efd639df58f4476b6129e0ae4694d26b78",
		"MoonRatzWTF",
		"MR",
		"ERC721",
		"/images/nfts/0xefeea2efd639df58f4476b6129e0ae4694d26b78.png"
	],
	[
		"0xf03c4e6b6187aca96b18162cbb4468fc6e339120",
		"Master Cats NFT",
		"MASTER",
		"ERC721",
		"/images/nfts/0xf03c4e6b6187aca96b18162cbb4468fc6e339120.png"
	],
	[
		"0xf048cbaad26c1a35e7a04e126fdeb9c8045e676b",
		"Wizards of the Tower Shade",
		"WTS",
		"ERC721",
		"/images/nfts/0xf048cbaad26c1a35e7a04e126fdeb9c8045e676b.png"
	],
	[
		"0xf12955e658c1190de472f4720055403818a25e2f",
		"World of Orion",
		"ORION",
		"ERC721",
		"/images/nfts/0xf12955e658c1190de472f4720055403818a25e2f.png"
	],
	[
		"0xf132f2c8f1eede27070e0850775436a0e6e7268a",
		"Origamasks",
		"⭐",
		"ERC721",
		"/images/nfts/0xf132f2c8f1eede27070e0850775436a0e6e7268a.png"
	],
	[
		"0xf13f29330dca76be26a6c7e268da836aef978e11",
		"Exolienz By BonishBil",
		"EXOZ",
		"ERC721",
		"/images/nfts/0xf13f29330dca76be26a6c7e268da836aef978e11.png"
	],
	[
		"0xf2bdeedae6df6be2829ff91f99b73ac58e8d975b",
		"VibeNauts",
		"VBNTS",
		"ERC721",
		"/images/nfts/0xf2bdeedae6df6be2829ff91f99b73ac58e8d975b.png"
	],
	[
		"0xf34a7223a6ffd99369d4d05a3a6bb215e9570c54",
		"De-Generations: S",
		"DGS",
		"ERC721",
		"/images/nfts/0xf34a7223a6ffd99369d4d05a3a6bb215e9570c54.png"
	],
	[
		"0xf40b0395a45b82044178b6f9cf308a052d20088a",
		"Moonbunny NFT",
		"Moonbunny",
		"ERC721",
		"/images/nfts/0xf40b0395a45b82044178b6f9cf308a052d20088a.png"
	],
	[
		"0xf429210d0f619f71eaa34f37a6a9545068ef166b",
		"Pacific Rim Legacy Collection",
		"PRLC",
		"ERC721",
		"/images/nfts/0xf429210d0f619f71eaa34f37a6a9545068ef166b.png"
	],
	[
		"0xf442459c8bb4b891b789e816775232b812eb2ccd",
		"Patchy Porkers",
		"PORKER",
		"ERC721",
		"/images/nfts/0xf442459c8bb4b891b789e816775232b812eb2ccd.png"
	],
	[
		"0xf4768ee87bd5e6a84c3bd4ae6cc9c3f4305bf376",
		"Khuga by Khuga Labs",
		"KHUGA",
		"ERC721",
		"/images/nfts/0xf4768ee87bd5e6a84c3bd4ae6cc9c3f4305bf376.png"
	],
	[
		"0xf4b2a56f2beb48157adbd7dacf9eb3bf7f89a3c2",
		"Lost Tigerz",
		"LTIGRZ",
		"ERC721",
		"/images/nfts/0xf4b2a56f2beb48157adbd7dacf9eb3bf7f89a3c2.png"
	],
	[
		"0xf4eac65bbc94e3be2e3674992c31781032a6d793",
		"The Uncanny Country Club",
		"RAMPP",
		"ERC721",
		"/images/nfts/0xf4eac65bbc94e3be2e3674992c31781032a6d793.png"
	],
	[
		"0xf507eddfafa8e045443315c97c5c5f0beac873d1",
		"Meta Wizards: Guild",
		"MTWIZ",
		"ERC721",
		"/images/nfts/0xf507eddfafa8e045443315c97c5c5f0beac873d1.png"
	],
	[
		"0xf53bb7d247670452409b13f2e0522b0cd4f6b63b",
		"GenuineUndeadApes",
		"GUA",
		"ERC721",
		"/images/nfts/0xf53bb7d247670452409b13f2e0522b0cd4f6b63b.png"
	],
	[
		"0xf5427f53bb7362d2cedcd143bcf0a6a16ecb916a",
		"Project Ino",
		"INO",
		"ERC721",
		"/images/nfts/0xf5427f53bb7362d2cedcd143bcf0a6a16ecb916a.png"
	],
	[
		"0xf5b969064b91869fbf676ecabccd1c5563f591d0",
		"TheFuckUps",
		"TheFuckUps",
		"ERC721",
		"/images/nfts/0xf5b969064b91869fbf676ecabccd1c5563f591d0.png"
	],
	[
		"0xf61f24c2d93bf2de187546b14425bf631f28d6dc",
		"World of Women Galaxy",
		"WOWG",
		"ERC721",
		"/images/nfts/0xf61f24c2d93bf2de187546b14425bf631f28d6dc.png"
	],
	[
		"0xf661d58cfe893993b11d53d11148c4650590c692",
		"RTFKT x Nike Dunk Genesis CRYPTOKICKS",
		"MNLTHRVLD",
		"ERC721",
		"/images/nfts/0xf661d58cfe893993b11d53d11148c4650590c692.png"
	],
	[
		"0xf7479f9527c57167caff6386daa588b7bf05727f",
		"MegaPunks",
		"MP",
		"ERC721",
		"/images/nfts/0xf7479f9527c57167caff6386daa588b7bf05727f.png"
	],
	[
		"0xf793a77e32a0e5c0cd28383e1e04bbc66ee52438",
		"Apocalyptic Apes",
		"AAPES",
		"ERC721",
		"/images/nfts/0xf793a77e32a0e5c0cd28383e1e04bbc66ee52438.png"
	],
	[
		"0xf7af6dd6c36fc42eb802b33d48ea3d395803c8ea",
		"CheckPunks",
		"CHECKPUNKS",
		"ERC721",
		"/images/nfts/0xf7af6dd6c36fc42eb802b33d48ea3d395803c8ea.png"
	],
	[
		"0xf7d134224a66c6a4ddeb7dee714a280b99044805",
		"end of sartoshi - eos pass",
		"END",
		"ERC721",
		"/images/nfts/0xf7d134224a66c6a4ddeb7dee714a280b99044805.png"
	],
	[
		"0xf80bd8c7f0f68ccf76e638edb53fdb922e05295c",
		"PepeApes Official",
		"PeAp",
		"ERC721",
		"/images/nfts/0xf80bd8c7f0f68ccf76e638edb53fdb922e05295c.png"
	],
	[
		"0xf8157d76367670b779ac8cf9e8bc8fb01ff76c03",
		"LootGPT (for Degenerates)",
		"LOOTGPT",
		"ERC721",
		"/images/nfts/0xf8157d76367670b779ac8cf9e8bc8fb01ff76c03.png"
	],
	[
		"0xf8581210a6a5cb4821f1a85319f246c11067b84e",
		"Godlovenftees",
		"Godlovenftees",
		"ERC721",
		"/images/nfts/0xf8581210a6a5cb4821f1a85319f246c11067b84e.png"
	],
	[
		"0xf96898bf784fa5d5945bdbc555a43cfc951176e9",
		"SUSHIUKI Official",
		"UKI",
		"ERC721",
		"/images/nfts/0xf96898bf784fa5d5945bdbc555a43cfc951176e9.png"
	],
	[
		"0xf9a7fb4f65632bd1fd7e49300719aeb1b6189809",
		"Bored Ricks Wubba Club official",
		"BRWC",
		"ERC721",
		"/images/nfts/0xf9a7fb4f65632bd1fd7e49300719aeb1b6189809.png"
	],
	[
		"0xfa4020b0064aacdbb0ed8becac28c0c95bb29840",
		"TrapMonkie",
		"TM",
		"ERC721",
		"/images/nfts/0xfa4020b0064aacdbb0ed8becac28c0c95bb29840.png"
	],
	[
		"0xfa751bb98e49a2a8113de92d21c2266d5655f274",
		"blklavas",
		"blkv",
		"ERC721",
		"/images/nfts/0xfa751bb98e49a2a8113de92d21c2266d5655f274.png"
	],
	[
		"0xfa969c60a78195c631787d4585ba15a07578c979",
		"Angry Apes Society",
		"AAS",
		"ERC721",
		"/images/nfts/0xfa969c60a78195c631787d4585ba15a07578c979.png"
	],
	[
		"0xfb21114b01468c3d8a9874b874493a0200809b63",
		"Unpunks NFT",
		"UNPU",
		"ERC721",
		"/images/nfts/0xfb21114b01468c3d8a9874b874493a0200809b63.png"
	],
	[
		"0xfb47683d2cca9ecc2d84674bb8658611fd56f277",
		"Unfudables",
		"UNF",
		"ERC721",
		"/images/nfts/0xfb47683d2cca9ecc2d84674bb8658611fd56f277.png"
	],
	[
		"0xfb6e20268256ed02ad06fd983e80a48e87759f29",
		"Project Unleash : Genesis",
		"ULH",
		"ERC721",
		"/images/nfts/0xfb6e20268256ed02ad06fd983e80a48e87759f29.png"
	],
	[
		"0xfb751688fb355b9dc9f41bb83cf39490022dbe23",
		"Bankrupt FTX Yacht Club",
		"BFTX",
		"ERC721",
		"/images/nfts/0xfb751688fb355b9dc9f41bb83cf39490022dbe23.png"
	],
	[
		"0xfb76f849baf4a4db22550ebc7beb520652f888a0",
		"TiffPunks",
		"TPUNKS",
		"ERC721",
		"/images/nfts/0xfb76f849baf4a4db22550ebc7beb520652f888a0.png"
	],
	[
		"0xfc8a98c22a9e32948ab028414d67c62c49b16864",
		"Shrapnel Operators Collection",
		"SOC",
		"ERC721",
		"/images/nfts/0xfc8a98c22a9e32948ab028414d67c62c49b16864.png"
	],
	[
		"0xfdc1618741a74fc19361faf24302ae37802d1f43",
		"Oppies",
		"OPPIE",
		"ERC721",
		"/images/nfts/0xfdc1618741a74fc19361faf24302ae37802d1f43.png"
	],
	[
		"0xfe290336a7fb1d5fdccde1c4ffeb714ab6892bc2",
		"Hello Kitty and Friends World (ETH)",
		"HK",
		"ERC721",
		"/images/nfts/0xfe290336a7fb1d5fdccde1c4ffeb714ab6892bc2.png"
	],
	[
		"0xfe58fc763ba915013aee93c6f0890bfddbe03608",
		"Slokh",
		"BBB",
		"ERC721",
		"/images/nfts/0xfe58fc763ba915013aee93c6f0890bfddbe03608.png"
	],
	[
		"0xfe5a28f19934851695783a0c8ccb25d678bb05d3",
		"CNP Jobs",
		"CNPJ",
		"ERC721",
		"/images/nfts/0xfe5a28f19934851695783a0c8ccb25d678bb05d3.png"
	],
	[
		"0xfe8c6d19365453d26af321d0e8c910428c23873f",
		"Slokh",
		"CBC",
		"ERC721",
		"/images/nfts/0xfe8c6d19365453d26af321d0e8c910428c23873f.png"
	],
	[
		"0xff2351228add6cb04e6694af4258368435eb0ce3",
		"Pudgy Pepes",
		"Pudgy Pepes",
		"ERC721",
		"/images/nfts/0xff2351228add6cb04e6694af4258368435eb0ce3.png"
	],
	[
		"0xff730864741339aeea6110d2a865749c9f68f7fa",
		"METAMISHIMA By TAG COMICS",
		"MM",
		"ERC721",
		"/images/nfts/0xff730864741339aeea6110d2a865749c9f68f7fa.png"
	],
	[
		"0xffc1131dda0299b804c97c436bc8cfea019e00a0",
		"Looki",
		"LOOKI",
		"ERC721",
		"/images/nfts/0xffc1131dda0299b804c97c436bc8cfea019e00a0.png"
	]
] as const;