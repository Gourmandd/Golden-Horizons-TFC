//priority: 10

function nameProcessing(name){
  name = name.replace("_", " ")
  name = name.replace("_", " ")
  name = name.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
  //console.log(name)
  return name
}

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