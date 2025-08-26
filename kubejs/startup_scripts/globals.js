//priority: 10

// --------------------------------------- //
// Globals to be used for any script type  //
// --------------------------------------- //


// should switch to using a global
//global.nameProcessing = (name) =>
function nameProcessing(name){
  name = name.replace("_", " ")
  name = name.replace("_", " ")
  name = name.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
  //console.log(name)
  return name
}

global.NAMESPACE = "modpack"
global.REGISTRY_NAMESPACE = "kubejs"

global.CROPS = [
    "barley",
    "oat",
    "rye",
    "maize",
    "wheat",
    "rice",
    "beet",
    "cabbage",
    "carrot",
    "garlic",
    "green_bean",
    "potato",
    "onion",
    "soybean",
    "squash",
    "sugarcane",
    "tomato",
    "jute",
    "papyrus",
    "pumpkin",
    "melon",
    "red_bell_pepper",
    "yellow_bell_pepper"
  ]

global.CROP_PRODUCTS = {
    "barley": ["item:tfc:food/barley"],
    "oat": ["item:tfc:food/oat"],
    "rye": ["item:tfc:food/rye"],
    "maize": ["item:tfc:food/maize"],
    "wheat": ["item:tfc:food/wheat"],
    "rice": ["item:tfc:food/rice"],
    "beet": ["item:tfc:food/beet"],
    "cabbage": ["item:tfc:food/cabbage"],
    "carrot": ["item:tfc:food/carrot"],
    "garlic": ["item:tfc:food/garlic"],
    "green_bean": ["item:tfc:food/green_bean"],
    "potato": ["item:tfc:food/potato"],
    "onion": ["item:tfc:food/onion"],
    "soybean": ["item:tfc:food/soybean"],
    "squash": ["item:tfc:food/squash"],
    "sugarcane": ["item:tfc:food/sugarcane"],
    "tomato": ["item:tfc:food/tomato"],
    "jute": ["item:tfc:jute"],
    "papyrus": ["item:tfc:papyrus"],
    "pumpkin": ["item:tfc:food/pumpkin_chunk"],
    "melon": ["item:tfc:food/melon_slice"],
    "red_bell_pepper": ["item:tfc:food/red_bell_pepper"],
    "yellow_bell_pepper": ["item:tfc:food/yellow_bell_pepper"]
  }

global.ROCK_TYPES = [
    "granite",
    "diorite",
    "gabbro",
    "shale",
    "claystone",
    "limestone",
    "conglomerate",
    "dolomite",
    "chert",
    "chalk",
    "rhyolite",
    "basalt",
    "andesite",
    "dacite",
    "quartzite",
    "slate",
    "phyllite",
    "schist",
    "gneiss",
    "marble"
  ]

global.SEDIMENTARY_ROCKS = [
  "shale",
  "claystone",
  "limestone",
  "conglomerate",
  "dolomite",
  "chert",
  "chalk"
]

global.METAMORPHIC_ROCKS = [
  "quartzite",
  "slate",
  "phyllite",
  "schist",
  "gneiss",
  "marble"
]

global.IGNEOUS_EXTRUSIVE_ROCKS = [
  "rhyolite",
  "basalt",
  "andesite",
  "dacite",
]

global.IGNEOUS_INTRUSIVE_ROCKS = [
  "granite",
  "diorite",
  "gabbro",
]

global.FLUXSTONES = [
    "item:tfc:ore/borax","item:tfc:powder/flux","item:tfc:food/shellfish","item:tfc:groundcover/mollusk",
    "item:tfc:groundcover/clam","item:minecraft:scute","item:tfc:groundcover/mussel","item:tfc:groundcover/sea_urchin",
    "item:tfc:rock/loose/limestone","item:tfc:rock/loose/dolomite","item:tfc:rock/loose/marble",
    "item:tfc:rock/mossy_loose/limestone", "item:tfc:rock/mossy_loose/dolomite","item:tfc:rock/mossy_loose/marble",
    "item:minecraft:nautilus_shell"
  ]

global.TFC_GEMS = [
    "amethyst",
    "diamond",
    "emerald",
    "lapis_lazuli",
    "opal",
    "pyrite",
    "ruby",
    "sapphire",
    "topaz",
  ]

global.TFC_WOOD_TYPES = [
    "acacia",
    "ash",
    "aspen",
    "birch",
    "blackwood",
    "chestnut",
    "douglas_fir",
    "hickory",
    "kapok",
    "mangrove",
    "maple",
    "oak",
    "palm",
    "pine",
    "rosewood",
    "sequoia",
    "spruce",
    "sycamore",
    "white_cedar",
    "willow"
  ]

global.AFC_WOOD_TYPES = [
    "baobab",
    "eucalyptus",
    "mahogany",
    "hevea",
    "tualang",
    "teak",
    "cypress",
    "fig",
    "ironwood",
    "ipe"
]

global.OVERWORLD_WOOD_TYPES = [
    "acacia",
    "ash",
    "aspen",
    "birch",
    "blackwood",
    "chestnut",
    "douglas_fir",
    "hickory",
    "kapok",
    "mangrove",
    "maple",
    "oak",
    "palm",
    "pine",
    "rosewood",
    "sequoia",
    "spruce",
    "sycamore",
    "white_cedar",
    "willow",
    "baobab",
    "eucalyptus",
    "mahogany",
    "hevea",
    "tualang",
    "teak",
    "cypress",
    "fig",
    "ironwood",
    "ipe"
  ]

global.WOOD_TYPE_TO_MOD = {
    "acacia": "tfc",
    "ash": "tfc",
    "aspen": "tfc",
    "birch": "tfc",
    "blackwood": "tfc",
    "chestnut": "tfc",
    "douglas_fir": "tfc",
    "hickory": "tfc",
    "kapok": "tfc",
    "mangrove": "tfc",
    "maple": "tfc",
    "oak": "tfc",
    "palm": "tfc",
    "pine": "tfc",
    "rosewood": "tfc",
    "sequoia": "tfc",
    "spruce": "tfc",
    "sycamore": "tfc",
    "white_cedar": "tfc",
    "willow": "tfc",
    "baobab": "afc",
    "eucalyptus": "afc",
    "mahogany": "afc",
    "hevea": "afc",
    "tualang": "afc",
    "teak": "afc",
    "cypress": "afc",
    "fig": "afc",
    "ironwood": "afc",
    "ipe": "afc"
}


global.BUSH_PRODUCTS = {
    "blackberry": ["item:tfc:food/blackberry"],
    "raspberry": ["item:tfc:food/raspberry"],
    "blueberry": ["item:tfc:food/blueberry"],
    "elderberry": ["item:tfc:food/elderberry"],
    "snowberry": ["item:tfc:food/snowberry"],
    "bunchberry": ["item:tfc:food/bunchberry"],
    "gooseberry": ["item:tfc:food/gooseberry"],
    "cloudberry": ["item:tfc:food/cloudberry"],
    "strawberry": ["item:tfc:food/strawberry"],
    "wintergreen_berry": ["item:tfc:food/wintergreen_berry"],
    "cranberry": ["item:tfc:food/cranberry"],
    "pineapple": ["item:firmalife:food/pineapple"],
    "nightshade": ["item:firmalife:food/nightshade_berry"]
  }

global.FRUIT_TREE_PRODUCTS = {
  "cherry": ["item:tfc:food/cherry"],
  "green_apple": ["item:tfc:food/green_apple"],
  "red_apple": ["item:tfc:food/red_apple"],
  "lemon": ["item:tfc:food/lemon"],
  "olive": ["item:tfc:food/olive"],
  "orange": ["item:tfc:food/orange"],
  "peach": ["item:tfc:food/peach"],
  "plum": ["item:tfc:food/plum"],
  "banana": ["item:tfc:food/banana"],
  "cocoa": ["item:firmalife:food/cocoa_beans"],
  "fig": ["item:firmalife:food/fig"]
  }

global.TFC_BUSHES = [
    "blackberry",
    "raspberry",
    "blueberry",
    "elderberry",
    "snowberry",
    "bunchberry",
    "gooseberry",
    "cloudberry",
    "strawberry",
    "wintergreen_berry",
    "cranberry"
  ]

global.FIRMALIFE_BUSHES = [
    "pineapple",
    "nightshade"
  ]

global.TFC_FRUIT_TREES = [
    "cherry",
    "green_apple",
    "red_apple",
    "lemon",
    "olive",
    "orange",
    "peach",
    "plum",
    "banana"
  ]
  
global.FIRMALIFE_FRUIT_TREES = [
    "cocoa",
    "fig"
  ]
  
global.FIRMALIFE_GRAPES = [
    "red",
    "white"
  ]


global.TFC_METALS = [
    "bismuth",
    "bismuth_bronze",
    "black_bronze",
    "black_steel",
    "blue_steel",
    "red_steel", 
    "brass",
    "cast_iron",
    "bronze",
    "copper",
    "gold",
    "nickel",
    "rose_gold",
    "silver",
    "steel",
    "sterling_silver",
    "tin",
    "wrought_iron",
    "zinc"
  ]

global.FIRMALIFE_METALS = [
    "chromium",
    "stainless_steel"
  ]

global.OTHER_METALS = [
    "electrum",
    "unknown"
  ]

global.KUBEJS_METALS = [
    "aluminium",
    "aluminium_bronze",
    "cast_iron_alloy",
    "harderned_steel",
    "nethersteel",
  ]

global.METAL_FLUIDS = {
  "aluminium":"kubejs:aluminium",
  "aluminium_bronze":"createbigcannons:molten_bronze",
  "harderned_steel":"createbigcannons:molten_steel",
  "cast_iron_alloy":"createbigcannons:molten_cast_iron",
  "nethersteel":"createbigcannons:molten_nethersteel",
  "electrum": "kubejs:electrum"
}

global.CUSTOM_CLAY_TYPES = [
  "kaolinite",
  "yixing",
  "yellowware",
  "earthenware",
  "porcelain"
]

global.TFC_TOOL_TYPES = [
  "pickaxe",
  "axe",
  "propick",
  "shovel",
  "hoe",
  "chisel",
  "hammer",
  "saw",
  "javelin",
  "scythe",
  "knife",
  "sword",
  "mace"
]

global.TFC_TOOL_HEADS = {
  "pickaxe": "head",
  "axe": "head",
  "propick": "head",
  "shovel": "head",
  "hoe": "head",
  "chisel": "head",
  "hammer": "head",
  "saw": "blade",
  "javelin": "head",
  "scythe": "blade",
  "knife": "blade",
  "sword": "blade",
  "mace": "head",
}

global.DYE_COLOURS = [
  "white",
  "brown",
  "green",
  "orange",
  "magenta",
  "red",
  "black",
  "light_blue",
  "yellow",
  "lime",
  "pink",
  "gray",
  "light_gray",
  "cyan",
  "purple",
  "blue",
]

global.COLOUR_TO_HEX = {
  "blue": 0xCDD7FC,
  "red": 0xE29F9F,
  "white": 0xEEF8FA,
  "light_gray": 0xCDD2DA,
  "gray": 0x92959B,
  "black": 0x383A3D,
  "brown": 0x8D6B55,
  "orange": 0xFBAB60,
  "yellow": 0xFFF189,
  "lime": 0xBBF378,
  "green": 0x5AA256,
  "cyan": 0x92C9BB,
  "light_blue": 0xA3D8DF,
  "purple": 0xA884E1,
  "magenta": 0xC684E1,
  "pink": 0xF2A4E0,
}

global.TOOL_METALS = [
  "bronze",
  "bismuth_bronze",
  "black_bronze",
  "copper",
  "wrought_iron",
  "steel",
  "black_steel",
  "red_steel",
  "blue_steel"
]

global.CASTABLE_METALS = [
  "bronze",
  "bismuth_bronze",
  "black_bronze",
  "copper"
]

global.MELTING_POINTS = {
  "bismuth": 270,
  "bismuth_bronze": 985,
  "black_bronze": 1070,
  "black_steel": 1485,
  "blue_steel": 1540,
  "red_steel": 1540, 
  "brass": 930,
  "cast_iron": 1535,
  "bronze": 950,
  "copper": 1080,
  "gold": 1060,
  "nickel": 1453,
  "rose_gold": 960,
  "silver": 961,
  "steel": 1540,
  "sterling_silver": 950,
  "tin": 230,
  "unknown": 400,
  "wrought_iron": 1535,
  "zinc": 420,
  "chromium": 1250,
  "stainless_steel": 1540,
  "aluminium": 780,
  "aluminium_bronze": 1180,
  "cast_iron_alloy": 1535,
  "harderned_steel": 1585,
  "nethersteel": 1615,
  "electrum": 1060,
  "pig_iron": 1535,
  "glass": 1070,
}

global.CAUPONA_ASPICS = [
    "nettle_soup",
    "mushroom_soup",
    "bisque",
    "borscht",
    "stock",
    "seaweed_soup",
    "stracciatella",
    "vegetable_soup",
    "egg_drop_soup",
    "fish_soup",
    "goulash",
    "meat_soup",
    "poultry_soup",
    "pumpkin_soup"
]

global.TFC_MAKES_DYE_TAGS = [
    "white",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "light_blue",
    "purple",
    "magenta",
    "pink"
]

global.TFC_FLOUR_TYPES = [
  "barley",
  "maize",
  "rye",
  "rice",
  "oat",
  "wheat"
]

global.ORE_GRADES = [
  "normal",
  "poor",
  "rich",
  "small"
]

global.RAW_METALS = [
  "bismuth",
  "tin",
  "nickel",
  "chromium",
  "cast_iron",
  "copper",
  "gold",
  "silver",
  "zinc"
]

global.RAW_METALS_ORES = {
  "bismuth": "bismuthinite",
  "tin": "cassiterite",
  "nickel": "garnierite",
  "chromium": "chromite",
  "cast_iron": ["hematite", "limonite", "magnetite"],
  "copper": ["malachite", "native_copper", "tetrahedrite"],
  "gold": "native_gold",
  "silver": "native_silver",
  "zinc": "sphalerite"
}

global.ORE_TO_METAL = {
  "bismuthinite": "bismuth",
  "cassiterite": "tin",
  "garnierite": "nickel",
  "chromite": "chromium",
  "hematite": "cast_iron",
  "limonite": "cast_iron",
  "magnetite": "cast_iron",
  "malachite": "copper",
  "native_copper": "copper",
  "tetrahedrite": "copper",
  "native_gold": "gold",
  "native_silver": "silver",
  "sphalerite": "zinc",
}

global.TFC_ORES = [
  "bismuthinite",
  "cassiterite",
  "garnierite",
  "hematite",
  "limonite",
  "magnetite",
  "malachite",
  "native_copper",
  "tetrahedrite",
  "native_gold",
  "native_silver",
  "sphalerite",
]

global.FIRMALIFE_ORES = [
  "chromite",
]

global.ORE_MINING_TIERS = {
  "bismuthinite": "tfc:needs_copper_tool",
  "cassiterite": "tfc:needs_copper_tool",
  "garnierite": "tfc:bronze_tool",
  "chromite": "tfc:needs_copper_tool",
  "hematite": "tfc:needs_copper_tool",
  "limonite": "tfc:needs_copper_tool",
  "magnetite": "tfc:needs_copper_tool",
  "malachite": "tfc:needs_copper_tool",
  "native_copper": "tfc:needs_copper_tool",
  "tetrahedrite": "tfc:needs_copper_tool",
  "native_gold": "tfc:needs_copper_tool",
  "native_silver": "tfc:needs_copper_tool",
  "sphalerite": "tfc:needs_copper_tool",
  "amethyst": "tfc:needs_steel_tool",
  "diamond": "tfc:needs_black_steel_tool",
  "emerald": "tfc:needs_steel_tool",
  "lapis_lazuli": "tfc:needs_bronze_tool",
  "opal": "tfc:needs_bronze_tool",
  "pyrite": "tfc:needs_copper_tool",
  "ruby": "tfc:needs_black_steel_tool",
  "sapphire": "tfc:needs_black_steel_tool",
  "topaz": "tfc:needs_steel_tool",
  "sylvite": "tfc:needs_copper_tool",
  "saltpeter": "tfc:needs_copper_tool",
  "halite": "tfc:needs_bronze_tool",
  "cryolite": "tfc:needs_bronze_tool",
  "cinnabar": "tfc:needs_bronze_tool",
  "sulfur": "tfc:needs_copper_tool",
  "graphite": "tfc:needs_copper_tool",
  "lignite": "tfc:needs_copper_tool",
  "bituminous_coal": "tfc:needs_copper_tool",
  "gypsum": "tfc:needs_copper_tool",
  "borax": "tfc:needs_copper_tool",
  "shimmerstone": "tfc:needs_copper_tool",
  "azurite": "tfc:needs_steel_tool",
  "stratine": "tfc:needs_steel_tool",
  "paltaeria": "tfc:needs_black_steel_tool",
  "malachite": "tfc:needs_steel_tool",
}

global.TFC_MINERALS = [
  "sylvite",
  "saltpeter",
  "halite",
  "cryolite",
  "cinnabar",
  "sulfur",
  "graphite",
  "lignite",
  "bituminous_coal",
  "gypsum",
  "borax",
]
global.TFC_SAND_COLOURS = [
  "black",
  "brown",
  "green",
  "pink",
  "white",
  "yellow",
  "red"
]

global.TFC_ROCKS_TO_SAND_COLOURS = {
  "granite": "pink",
  "diorite": "black",
  "gabbro": "brown",
  "shale": "yellow",
  "claystone": "brown",
  "limestone": "yellow",
  "conglomerate": "brown",
  "dolomite": "black",
  "chert": "red",
  "chalk": "white",
  "rhyolite": "black",
  "basalt": "black",
  "andesite": "brown",
  "dacite": "black",
  "quartzite": "pink",
  "slate": "yellow",
  "phyllite": "green",
  "schist": "green",
  "gneiss": "green",
  "marble": "white"
}

global.TFC_SOIL_TYPES = [
  "loam",
  "sandy_loam",
  "silt",
  "silty_loam"
]

// These are Spectrum ores that will be integrated into TFC worldgen
global.SPECTRUM_OVERWORLD_ORES = [
  "shimmerstone",
  "azurite",
  "stratine",
  "paltaeria"
]

// Deeper Down unique ores
global.SPECTRUM_DEEPER_DOWN_ORES = [
  "malachite"
]

// TFC ores that will appear in the Deeper Down
global.TFC_DEEPER_DOWN_ORES = [
  
]

global.DEEPER_DOWN_ROCK_TYPES = [
  "argillite",
  "nephelinite",
  "blackslag",
  "travertine",
  "picrite_basalt",
]

global.STONE_TO_COBBLESTONE = {
  "argillite": "kubejs:rock/cobble/argillite",
  "nephelinite": "kubejs:rock/cobble/nephelinite",
  "blackslag": "kubejs:rock/cobble/blackslag",
  "travertine": "kubejs:rock/cobble/travertine",
  "picrite_basalt": "kubejs:rock/cobble/picrite_basalt",
  "granite": "tfc:rock/cobble/granite",
  "diorite": "tfc:rock/cobble/diorite",
  "gabbro": "tfc:rock/cobble/gabbro",
  "shale": "tfc:rock/cobble/shale",
  "claystone": "tfc:rock/cobble/claystone",
  "limestone": "tfc:rock/cobble/limestone",
  "conglomerate": "tfc:rock/cobble/conglomerate",
  "dolomite": "tfc:rock/cobble/dolomite",
  "chert": "tfc:rock/cobble/chert",
  "chalk": "tfc:rock/cobble/chalk",
  "rhyolite": "tfc:rock/cobble/rhyolite",
  "basalt": "tfc:rock/cobble/basalt",
  "andesite": "tfc:rock/cobble/andesite",
  "dacite": "tfc:rock/cobble/dacite",
  "quartzite": "tfc:rock/cobble/quartzite",
  "slate": "tfc:rock/cobble/slate",
  "phyllite": "tfc:rock/cobble/phyllite",
  "schist": "tfc:rock/cobble/schist",
  "gneiss": "tfc:rock/cobble/gneiss",
  "marble": "tfc:rock/cobble/marble"
}

global.STONE_TO_COBBLESTONE_TEXTURE = {
  "argillite": "minecraft:block/cobblestone",
  "nephelinite": "minecraft:block/cobbled_deepslate",
  "blackslag": "spectrum:block/cobbled_blackslag",
  "travertine": "tfc:block/rock/cobble/claystone",
  "picrite_basalt": "tfc:block/rock/cobble/phyllite",
  "granite": "tfc:block/rock/cobble/granite",
  "diorite": "tfc:block/rock/cobble/diorite",
  "gabbro": "tfc:block/rock/cobble/gabbro",
  "shale": "tfc:block/rock/cobble/shale",
  "claystone": "tfc:block/rock/cobble/claystone",
  "limestone": "tfc:block/rock/cobble/limestone",
  "conglomerate": "tfc:block/rock/cobble/conglomerate",
  "dolomite": "tfc:block/rock/cobble/dolomite",
  "chert": "tfc:block/rock/cobble/chert",
  "chalk": "tfc:block/rock/cobble/chalk",
  "rhyolite": "tfc:block/rock/cobble/rhyolite",
  "basalt": "tfc:block/rock/cobble/basalt",
  "andesite": "tfc:block/rock/cobble/andesite",
  "dacite": "tfc:block/rock/cobble/dacite",
  "quartzite": "tfc:block/rock/cobble/quartzite",
  "slate": "tfc:block/rock/cobble/slate",
  "phyllite": "tfc:block/rock/cobble/phyllite",
  "schist": "tfc:block/rock/cobble/schist",
  "gneiss": "tfc:block/rock/cobble/gneiss",
  "marble": "tfc:block/rock/cobble/marble"
}

global.CUSTOM_ROCK_MODELS = {
  "argillite": "minecraft:block/stone",
  "nephelinite": "minecraft:block/deepslate",
  "blackslag": "spectrum:block/blackslag",
  "travertine": "minecraft:block/dripstone_block",
  "picrite_basalt": "spectrum:block/basal_marble",
}

global.DEEPER_DOWN_ROCK_STONES = {
  "argillite": "minecraft:stone",
  "nephelinite": "minecraft:deepslate",
  "blackslag": "spectrum:blackslag",
  "travertine": "minecraft:dripstone_block",
  "picrite_basalt": "spectrum:basal_marble",
}

global.NOXWOODS = [
  "chestnut",
  "ivory",
  "slate",
  "ebony"
]

global.SPECTRUM_WOODS = [
  "chestnut",
  "ivory",
  "slate",
  "ebony",
  "weeping_gala"
]

global.SPECTRUM_GEMSTONES = [
  "onyx",
  "moonstone",
  "citrine",
  "amethyst",
  "topaz"
]

/*
global.BURNED_BLOCKS_DICT = {}

// Adding stuff to BURNED_BLOCKS_DICT
StartupEvents.init(event => {

  global.TFC_WOOD_TYPES.forEach(woodType => {
    global.BURNED_BLOCKS_DICT[`tfc:wood/planks/${woodType}`] = "kubejs:wood/planks/charred"

    global.BURNED_BLOCKS_DICT[`tfc:wood/log/${woodType}`] = "kubejs:wood/log/charred"
    global.BURNED_BLOCKS_DICT[`tfc:wood/stripped_log/${woodType}`] = "kubejs:wood/log/charred"
    global.BURNED_BLOCKS_DICT[`tfc:wood/wood/${woodType}`] = "kubejs:wood/log/charred"
    global.BURNED_BLOCKS_DICT[`tfc:wood/stripped_wood/${woodType}`] = "kubejs:wood/log/charred"
  })

  global.AFC_WOOD_TYPES.forEach(woodType => {
    global.BURNED_BLOCKS_DICT[`afc:wood/planks/${woodType}`] = "kubejs:wood/planks/charred"

    global.BURNED_BLOCKS_DICT[`afc:wood/log/${woodType}`] = "kubejs:wood/log/charred"
    global.BURNED_BLOCKS_DICT[`afc:wood/stripped_log/${woodType}`] = "kubejs:wood/log/charred"
    global.BURNED_BLOCKS_DICT[`afc:wood/wood/${woodType}`] = "kubejs:wood/log/charred"
    global.BURNED_BLOCKS_DICT[`afc:wood/stripped_wood/${woodType}`] = "kubejs:wood/log/charred"
  })

  global.DYE_COLOURS.forEach(colour => {
    global.BURNED_BLOCKS_DICT[`spectrum:${colour}_planks`] = "kubejs:wood/planks/charred"

    global.BURNED_BLOCKS_DICT[`spectrum:${colour}_log`] = "kubejs:wood/log/charred"
    global.BURNED_BLOCKS_DICT[`spectrum:stripped_${colour}_log`] = "kubejs:wood/log/charred"
    global.BURNED_BLOCKS_DICT[`spectrum:${colour}_wood`] = "kubejs:wood/log/charred"
    global.BURNED_BLOCKS_DICT[`spectrum:stripped_${colour}_wood`] = "kubejs:wood/log/charred"
  })

})
  */