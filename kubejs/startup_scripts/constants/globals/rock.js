//priority: 50

// --------------------------------------- //
// Globals to be used for any script type  //
// --------------------------------------- //


global.ROCK_BLOCKS = {
    "bricks": {
        "argillite": "minecraft:stone_bricks",
        "nephelinite": "minecraft:deepslate_bricks",
        "travertine": "architects_palette:dripstone_bricks",
        "blackslag": "spectrum:blackslag_bricks",
        "picrite_basalt": "spectrum:basal_marble_bricks",
        "breccia": "caupona:felsic_tuff_bricks",
        "komatiite": "create:cut_scoria_bricks",
        "peridotite": "modpack:rock/bricks/peridotite",
        "serpentine": "modpack:rock/bricks/serpentine",
        "blueschist": "modpack:rock/bricks/blueschist",
        "arkose": "quark:limestone_bricks",
        "suevite": "create:cut_scorchia_bricks",
        "soapstone": "create:cut_limestone_bricks",
        "sandstone": "create:cut_ochrum_bricks",
        "red_sandstone": "quark:jasper_bricks",
        "phonolite": "quark:shale_bricks",
    },
    "raw": {
        "argillite": "minecraft:stone",
        "nephelinite": "minecraft:deepslate",
        "travertine": "minecraft:dripstone_block",
        "blackslag": "spectrum:blackslag",
        "picrite_basalt": "spectrum:basal_marble",
        "breccia": "caupona:felsic_tuff",
        "komatiite": "create:scoria",
        "peridotite": "modpack:rock/raw/peridotite",
        "serpentine": "modpack:rock/raw/serpentine",
        "blueschist": "modpack:rock/raw/blueschist",
        "arkose": "quark:limestone",
        "suevite": "create:scorchia",
        "soapstone": "create:limestone",
        "sandstone": "create:ochrum",
        "red_sandstone": "quark:jasper",
        "phonolite": "quark:shale",
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
    "blueschist": "black",
    "arkose": "brown",
    "suevite": "black",
    "soapstone": "white",
    "sandstone": "yellow",
    "red_sandstone": "red",
    "phonolite": "black"
}

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
    "blueschist": "modpack:rock/cobble/blueschist",
    "arkose": "modpack:rock/cobble/arkose",
    "suevite": "modpack:rock/cobble/suevite",
    "soapstone": "modpack:rock/cobble/soapstone",
    "sandstone": "modpack:rock/cobble/sandstone",
    "red_sandstone": "modpack:rock/cobble/red_sandstone",
    "phonolite": "modpack:rock/cobble/phonolite",
}
