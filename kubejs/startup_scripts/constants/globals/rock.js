//priority: 50

// --------------------------------------- //
// Globals to be used for any script type  //
// --------------------------------------- //

// should be replaced with a map generated in Java using the rock type enum.
global.ROCK_HAS_DECORATIONS = {
    "argillite": false,
    "nephelinite": false,
    "blackslag": false,
    "picrite_basalt": false,
    "travertine": false,
    "komatiite": false,
    "breccia": false,
    "peridotite": true,
    "serpentine": true,
    "blueschist": true
}

global.CUSTOM_ROCK_TEXTURES = {
    "hardened": {
        "argillite": "minecraft:block/stone",
        "nephelinite": "minecraft:block/deepslate",
        "blackslag": "pastel:block/blackslag",
        "picrite_basalt": "pastel:block/basal_marble",
        "travertine": "minecraft:block/dripstone_block",
        "breccia": "caupona:block/felsic_tuff",
        "komatiite": "create:block/palettes/stone_types/scoria",
        "peridotite": "modpack:block/rock/raw/peridotite",
        "serpentine": "modpack:block/rock/raw/serpentine"
    },
    "raw": {
        "argillite": "minecraft:block/stone",
        "nephelinite": "minecraft:block/deepslate",
        "blackslag": "pastel:block/blackslag",
        "picrite_basalt": "pastel:block/basal_marble",
        "travertine": "minecraft:block/dripstone_block",
        "breccia": "caupona:block/felsic_tuff",
        "komatiite": "create:block/palettes/stone_types/scoria",
        "peridotite": "modpack:block/rock/raw/peridotite",
        "serpentine": "modpack:block/rock/raw/serpentine",
        "blueschist": "modpack:block/rock/raw/blueschist"
    },
    "cobble": {
        "argillite": "minecraft:block/cobblestone",
        "nephelinite": "minecraft:block/cobbled_deepslate",
        "blackslag": "pastel:block/cobbled_blackslag",
        "picrite_basalt": "modpack:block/rock/cobble/picrite_basalt",
        "travertine": "modpack:block/rock/cobble/travertine",
        "breccia": "modpack:block/rock/cobble/breccia",
        "komatiite": "modpack:block/rock/cobble/komatiite",
        "peridotite": "modpack:block/rock/cobble/peridotite",
        "serpentine": "modpack:block/rock/cobble/serpentine",
        "blueschist": "modpack:block/rock/cobble/blueschist"
    },
    "mossy_cobble": {
        "argillite": "minecraft:block/mossy_cobblestone",
        "nephelinite": "minecraft:block/cobbled_deepslate",
        "blackslag": "pastel:block/cobbled_blackslag",
        "picrite_basalt": "modpack:block/rock/mossy_cobble/picrite_basalt",
        "travertine": "modpack:block/rock/mossy_cobble/travertine",
        "breccia": "modpack:block/rock/mossy_cobble/breccia",
        "komatiite": "modpack:block/rock/mossy_cobble/komatiite",
        "peridotite": "modpack:block/rock/mossy_cobble/peridotite",
        "serpentine": "modpack:block/rock/mossy_cobble/serpentine",
        "blueschist": "modpack:block/rock/mossy_cobble/blueschist"
    },
    "bricks": {
        "argillite": "minecraft:block/stone_bricks",
        "nephelinite": "minecraft:block/deepslate_bricks",
        "blackslag": "pastel:block/blackslag_bricks",
        "picrite_basalt": "pastel:block/basal_marble_bricks",
        "travertine": "architects_palette:block/dripstone_bricks",
        "breccia": "caupona:block/felsic_tuff_bricks",
        "komatiite": "create:block/palettes/stone_types/brick/scoria_cut_brick",
        "peridotite": "modpack:block/rock/bricks/peridotite",
        "serpentine": "modpack:block/rock/bricks/serpentine",
        "blueschist": "modpack:block/rock/bricks/blueschist"
    },
    "mossy_bricks": {
        "argillite": "minecraft:block/mossy_stone_bricks",
        "nephelinite": "minecraft:block/cobbled_deepslate",
        "blackslag": "pastel:block/cobbled_blackslag",
        "picrite_basalt": "tfc:block/rock/mossy_bricks/phyllite",
        "travertine": "tfc:block/rock/mossy_bricks/claystone",
        "breccia": "caupona:block/felsic_tuff_bricks",
        "komatiite": "create:block/palettes/stone_types/brick/scoria_cut_brick",
        "peridotite": "modpack:block/rock/mossy_bricks/peridotite",
        "serpentine": "modpack:block/rock/mossy_bricks/serpentine",
        "blueschist": "modpack:block/rock/mossy_bricks/blueschist"
    },
    "gravel": {
        "argillite": "minecraft:block/gravel",
        "nephelinite": "modpack:block/rock/gravel/nephelinite",
        "blackslag": "modpack:block/rock/gravel/blackslag",
        "picrite_basalt": "modpack:block/rock/gravel/picrite_basalt",
        "travertine": "modpack:block/rock/gravel/travertine",
        "breccia": "modpack:block/rock/gravel/breccia",
        "komatiite": "modpack:block/rock/gravel/komatiite",
        "peridotite": "modpack:block/rock/gravel/peridotite",
        "serpentine": "modpack:block/rock/gravel/serpentine",
        "blueschist": "modpack:block/rock/gravel/blueschist"
    },
    "loose": {
        "argillite": "modpack:item/rock/loose_rock/argillite",
        "nephelinite": "modpack:item/rock/loose_rock/nephelinite",
        "blackslag": "modpack:item/rock/loose_rock/blackslag",
        "picrite_basalt": "modpack:item/rock/loose_rock/picrite_basalt",
        "travertine": "modpack:item/rock/loose_rock/travertine",
        "breccia": "modpack:item/rock/loose_rock/breccia",
        "komatiite": "modpack:item/rock/loose_rock/komatiite",
        "peridotite": "modpack:item/rock/loose_rock/peridotite",
        "serpentine": "modpack:item/rock/loose_rock/serpentine",
        "blueschist": "modpack:item/rock/loose_rock/blueschist"
    }
}

global.ROCK_BLOCKS = {
    "bricks": {
        "argillite": "minecraft:stone_bricks",
        "nephelinite": "minecraft:deepslate_bricks",
        "travertine": "architects_palette:dripstone_bricks",
        "blackslag": "pastel:blackslag_bricks",
        "picrite_basalt": "pastel:basal_marble_bricks",
        "breccia": "caupona:felsic_tuff_bricks",
        "komatiite": "create:cut_scoria_bricks",
        "peridotite": "modpack:rock/bricks/peridotite",
        "serpentine": "modpack:rock/bricks/serpentine",
        "blueschist": "modpack:rock/bricks/blueschist"
    },
    "raw": {
        "argillite": "minecraft:stone",
        "nephelinite": "minecraft:deepslate",
        "travertine": "minecraft:dripstone_block",
        "blackslag": "pastel:blackslag",
        "picrite_basalt": "pastel:basal_marble",
        "breccia": "caupona:felsic_tuff",
        "komatiite": "create:scoria",
        "peridotite": "modpack:rock/raw/peridotite",
        "serpentine": "modpack:rock/raw/serpentine",
        "blueschist": "modpack:rock/raw/blueschist"
    }
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
    "marble",
    "tuff"
]

global.SEDIMENTARY_ROCKS = [
    "shale",
    "claystone",
    "limestone",
    "conglomerate",
    "dolomite",
    "chert",
    "chalk",
    "tuff"
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

global.TFC_SAND_COLOURS = [
    "black",
    "brown",
    "green",
    "pink",
    "white",
    "yellow",
    "red"
]

global.ROCKS_TO_SAND_COLOURS = {
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
    "marble": "white",
    "tuff": "black",
    "argillite": "brown",
    "nephelinite": "black",
    "blackslag": "black",
    "picrite_basalt": "black",
    "travertine": "brown",
    "breccia": "yellow",
    "komatiite": "brown",
    "peridotite": "green",
    "serpentine": "green",
    "blueschist": "black"
}

// These are Spectrum ores that will be integrated into TFC worldgen
// To Be Removed
global.SPECTRUM_OVERWORLD_ORES = [
    "shimmerstone",
    "azurite",
    "stratine",
    "paltaeria"
]

// To Be Removed
global.SPECTRUM_DEEPER_DOWN_ORES = [
    "malachite"
]

// To Be Removed
global.DEEPER_DOWN_ROCK_TYPES = [
    "argillite",
    "nephelinite",
    "blackslag",
    "travertine",
    "picrite_basalt",
]

global.STONE_TO_COBBLESTONE = {
    "argillite": `${id}:rock/cobble/argillite`,
    "nephelinite": `${id}:rock/cobble/nephelinite`,
    "blackslag": `${id}:rock/cobble/blackslag`,
    "travertine": `${id}:rock/cobble/travertine`,
    "picrite_basalt": `${id}:rock/cobble/picrite_basalt`,
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
    "marble": "tfc:rock/cobble/marble",
    "tuff": "tfc:rock/cobble/tuff",
    "breccia": "modpack:rock/cobble/breccia",
    "komatiite": "modpack:rock/cobble/komatiite",
    "peridotite": "modpack:rock/cobble/peridotite",
    "serpentine": "modpack:rock/cobble/serpentine",
    "blueschist": "modpack:rock/cobble/blueschist"
}

global.STONE_TO_ROCK_TEXTURE = {
    "argillite": "minecraft:block/stone",
    "nephelinite": "minecraft:block/deepslate",
    "blackslag": "pastel:block/blackslag",
    "travertine": "minecraft:block/dripstone_block",
    "picrite_basalt": "pastel:block/basal_marble",
    "granite": "tfc:block/rock/raw/granite",
    "diorite": "tfc:block/rock/raw/diorite",
    "gabbro": "tfc:block/rock/raw/gabbro",
    "shale": "tfc:block/rock/raw/shale",
    "claystone": "tfc:block/rock/raw/claystone",
    "limestone": "tfc:block/rock/raw/limestone",
    "conglomerate": "tfc:block/rock/raw/conglomerate",
    "dolomite": "tfc:block/rock/raw/dolomite",
    "chert": "tfc:block/rock/raw/chert",
    "chalk": "tfc:block/rock/raw/chalk",
    "rhyolite": "tfc:block/rock/raw/rhyolite",
    "basalt": "tfc:block/rock/raw/basalt",
    "andesite": "tfc:block/rock/raw/andesite",
    "dacite": "tfc:block/rock/raw/dacite",
    "quartzite": "tfc:block/rock/raw/quartzite",
    "slate": "tfc:block/rock/raw/slate",
    "phyllite": "tfc:block/rock/raw/phyllite",
    "schist": "tfc:block/rock/raw/schist",
    "gneiss": "tfc:block/rock/raw/gneiss",
    "marble": "tfc:block/rock/raw/marble",
    "tuff": "tfc:block/rock/raw/tuff",
    "breccia": "caupona:block/felsic_tuff",
    "komatiite": "create:block/palettes/stone_types/scoria",
    "peridotite": "modpack:block/rock/raw/peridotite",
    "serpentine": "modpack:block/rock/raw/serpentine",
    "blueschist": "modpack:block/rock/raw/blueschist"
}

global.STONE_TO_COBBLESTONE_TEXTURE = {
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
    "marble": "tfc:block/rock/cobble/marble",
    "tuff": "tfc:block/rock/cobble/tuff",
    "argillite": "minecraft:block/cobblestone",
    "nephelinite": "minecraft:block/cobbled_deepslate",
    "blackslag": "pastel:block/cobbled_blackslag",
    "travertine": "modpack:block/rock/cobble/travertine",
    "picrite_basalt": "modpack:block/rock/cobble/picrite_basalt",
    "breccia": "modpack:block/rock/cobble/breccia",
    "komatiite": "modpack:block/rock/cobble/komatiite",
    "peridotite": "modpack:block/rock/cobble/peridotite",
    "serpentine": "modpack:block/rock/cobble/serpentine",
    "blueschist": "modpack:block/rock/cobble/blueschist"
}

global.CUSTOM_ROCK_MODELS = {
    "argillite": "minecraft:block/stone",
    "nephelinite": "minecraft:block/deepslate",
    "blackslag": "pastel:block/blackslag",
    "travertine": "minecraft:block/dripstone_block",
    "picrite_basalt": "pastel:block/basal_marble",
    "breccia": "caupona:block/felsic_tuff",
    "komatiite": "create:block/scoria",
    "peridotite": "modpack:block/rock/raw/peridotite",
    "serpentine": "modpack:block/rock/raw/serpentine",
    "blueschist": "modpack:block/rock/raw/blueschist"
}

// To Be Removed
global.DEEPER_DOWN_ROCK_STONES = {
    "argillite": "minecraft:stone",
    "nephelinite": "minecraft:deepslate",
    "blackslag": "pastel:blackslag",
    "travertine": "minecraft:dripstone_block",
    "picrite_basalt": "pastel:basal_marble",
}
