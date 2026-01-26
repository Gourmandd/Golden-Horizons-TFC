//priority: 50

// --------------------------------------- //
// Globals to be used for any script type  //
// --------------------------------------- //

global.FLUXSTONES = [
    "item:tfc:ore/borax", "item:tfc:powder/flux", "item:tfc:food/shellfish", "item:tfc:groundcover/mollusk",
    "item:tfc:groundcover/clam", "item:minecraft:scute", "item:tfc:groundcover/mussel", "item:tfc:groundcover/sea_urchin",
    "item:tfc:rock/loose/limestone", "item:tfc:rock/loose/dolomite", "item:tfc:rock/loose/marble",
    "item:tfc:rock/mossy_loose/limestone", "item:tfc:rock/mossy_loose/dolomite", "item:tfc:rock/mossy_loose/marble",
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

// Grades of ore items
global.ORE_GRADES = [
    "normal",
    "poor",
    "rich",
    "small"
]

// Grades of ore blocks
global.ORE_BLOCK_GRADES = [
    "normal",
    "poor",
    "rich"
]

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
    "galena": "lead"
}

global.RAW_METALS_ORES = {
    "bismuth": "bismuthinite",
    "tin": "cassiterite",
    "nickel": "garnierite",
    "chromium": "chromite",
    "cast_iron": ["hematite", "limonite", "magnetite"],
    "copper": ["malachite", "native_copper", "tetrahedrite"],
    "gold": "native_gold",
    "silver": "native_silver",
    "zinc": "sphalerite",
    "lead": "galena"
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

global.FULL_BLOCK_ORES = [
    "halite",
    "lignite",
    "bituminous_coal"
]

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

global.TFC_MINERAL_ORES = [
    "sylvite",
    "saltpeter",
    "cryolite",
    "cinnabar",
    "sulfur",
    "graphite",
    "gypsum",
    "borax",
]

global.SPECTRUM_GEMSTONES = [
    "onyx",
    "moonstone",
    "citrine",
    "amethyst",
    "topaz"
]
