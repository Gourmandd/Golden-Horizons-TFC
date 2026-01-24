//priority: 50

// --------------------------------------- //
// Globals to be used for any script type  //
// --------------------------------------- //

let $CategoryUtil = Java.loadClass("net.gourmand.GoldenHorizonsCore.registry.category.CategoryUtil")

// should switch to using a global
//global.nameProcessing = (name) =>
function nameProcessing(name) {
    name = name.replace("_", " ")
    name = name.replace("_", " ")
    name = name.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
    //console.log(name)
    return name
}

global.MOD_ID = "modpack"

let id = global.MOD_ID

global.CUSTOM_CROP_TYPES = $CategoryUtil.getCropNames()

global.CUSTOM_FRUIT_TREE_TYPES = $CategoryUtil.getFruitTreeNames()

global.CUSTOM_STATIONARY_BUSH_TYPES = $CategoryUtil.getStationaryBushNames()

global.CUSTOM_SPREADING_BUSH_TYPES = $CategoryUtil.getSpreadingBushNames()

global.KUBEJS_METALS = $CategoryUtil.getMetalNames()

global.CUSTOM_ORES = $CategoryUtil.getAllOreNames()

global.CUSTOM_GRADED_ORES = $CategoryUtil.getGradedOreNames()

global.CUSTOM_PASTEL_ORES = $CategoryUtil.getPastelOreNames()

global.CUSTOM_ROCK_TYPES = $CategoryUtil.getAllRockNames()

global.FULL_VARIANT_CUSTOM_ROCK_TYPES = $CategoryUtil.getAllVariantRockNames()

global.CUSTOM_CLAY_TYPES = $CategoryUtil.getClayNames()

global.CLAY_ITEM_TYPES = $CategoryUtil.getClayItemTypeNames()

global.CLAY_MOLD_TYPES = $CategoryUtil.getClayMoldNames()

global.PASTEL_WOOD_TYPES = $CategoryUtil.getPastelWoodNames()

global.METAL_FLUIDS = {
    "aluminium": id + ":aluminium",
    "aluminium_bronze": "createbigcannons:molten_bronze",
    "hardened_steel": "createbigcannons:molten_steel",
    "cast_iron_alloy": "createbigcannons:molten_cast_iron",
    "nethersteel": "createbigcannons:molten_nethersteel",
    "electrum": id + ":electrum"
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
        "serpentine": "modpack:block/rock/raw/serpentine"
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
        "serpentine": "modpack:block/rock/cobble/serpentine"
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
        "serpentine": "modpack:block/rock/mossy_cobble/serpentine"
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
        "serpentine": "modpack:block/rock/bricks/serpentine"
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
        "serpentine": "modpack:block/rock/mossy_bricks/serpentine"
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
        "serpentine": "modpack:block/rock/gravel/serpentine"
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
        "serpentine": "modpack:item/rock/loose_rock/serpentine"
    },
    "mossy_loose": {
        "argillite": "modpack:block/rock/loose_rock/mossy_argillite",
        "nephelinite": "modpack:block/rock/loose_rock/mossy_nephelinite",
        "blackslag": "modpack:block/rock/loose_rock/mossy_blackslag",
        "picrite_basalt": "modpack:block/rock/loose_rock/mossy_picrite_basalt",
        "travertine": "modpack:block/rock/loose_rock/mossy_travertine",
        "breccia": "modpack:block/rock/loose_rock/mossy_breccia",
        "komatiite": "modpack:block/rock/loose_rock/mossy_komatiite",
        "peridotite": "modpack:block/rock/loose_rock/mossy_peridotite",
        "serpentine": "modpack:block/rock/loose_rock/mossy_serpentine"
    },
}

global.CUSTOM_WOOD_TEXTURES = {
    "log_top": {
        "weeping_gala": "pastel:block/weeping_gala_log_top",
        "slate_noxwood": "pastel:block/slate_noxcap_stem_top",
        "chestnut_noxwood": "pastel:block/chestnut_noxcap_stem_top",
        "ivory_noxwood": "pastel:block/ivory_noxcap_stem_top",
        "ebony_noxwood": "pastel:block/ebony_noxcap_stem_top",
        "white": "pastel:block/white_log_top",
        "light_gray": "pastel:block/light_gray_log_top",
        "gray": "pastel:block/gray_log_top",
        "black": "pastel:block/black_log_top",
        "brown": "pastel:block/brown_log_top",
        "red": "pastel:block/red_log_top",
        "orange": "pastel:block/orange_log_top",
        "yellow": "pastel:block/yellow_log_top",
        "lime": "pastel:block/lime_log_top",
        "green": "pastel:block/green_log_top",
        "cyan": "pastel:block/cyan_log_top",
        "light_blue": "pastel:block/light_blue_log_top",
        "blue": "pastel:block/blue_log_top",
        "purple": "pastel:block/purple_log_top",
        "magenta": "pastel:block/magenta_log_top",
        "pink": "pastel:block/pink_log_top"
    },
    "log_side": {
        "weeping_gala": "pastel:block/weeping_gala_log",
        "slate_noxwood": "pastel:block/slate_noxcap_stem",
        "chestnut_noxwood": "pastel:block/chestnut_noxcap_stem",
        "ivory_noxwood": "pastel:block/ivory_noxcap_stem",
        "ebony_noxwood": "pastel:block/ebony_noxcap_stem",
        "white": "pastel:block/white_log",
        "light_gray": "pastel:block/light_gray_log",
        "gray": "pastel:block/gray_log",
        "black": "pastel:block/black_log",
        "brown": "pastel:block/brown_log",
        "red": "pastel:block/red_log",
        "orange": "pastel:block/orange_log",
        "yellow": "pastel:block/yellow_log",
        "lime": "pastel:block/lime_log",
        "green": "pastel:block/green_log",
        "cyan": "pastel:block/cyan_log",
        "light_blue": "pastel:block/light_blue_log",
        "blue": "pastel:block/blue_log",
        "purple": "pastel:block/purple_log",
        "magenta": "pastel:block/magenta_log",
        "pink": "pastel:block/pink_log"
    },
    "stripped_log_top": {
        "weeping_gala": "pastel:block/stripped_weeping_gala_log_top",
        "slate_noxwood": "pastel:block/stripped_slate_noxcap_stem_top",
        "chestnut_noxwood": "pastel:block/stripped_chestnut_noxcap_stem_top",
        "ivory_noxwood": "pastel:block/stripped_ivory_noxcap_stem_top",
        "ebony_noxwood": "pastel:block/stripped_ebony_noxcap_stem_top",
        "white": "pastel:block/stripped_white_log_top",
        "light_gray": "pastel:block/stripped_light_gray_log_top",
        "gray": "pastel:block/stripped_gray_log_top",
        "black": "pastel:block/stripped_black_log_top",
        "brown": "pastel:block/stripped_brown_log_top",
        "red": "pastel:block/stripped_red_log_top",
        "orange": "pastel:block/stripped_orange_log_top",
        "yellow": "pastel:block/stripped_yellow_log_top",
        "lime": "pastel:block/stripped_lime_log_top",
        "green": "pastel:block/stripped_green_log_top",
        "cyan": "pastel:block/stripped_cyan_log_top",
        "light_blue": "pastel:block/stripped_light_blue_log_top",
        "blue": "pastel:block/stripped_blue_log_top",
        "purple": "pastel:block/stripped_purple_log_top",
        "magenta": "pastel:block/stripped_magenta_log_top",
        "pink": "pastel:block/stripped_pink_log_top"
    },
    "stripped_log_side": {
        "weeping_gala": "pastel:block/stripped_weeping_gala_log",
        "slate_noxwood": "pastel:block/stripped_slate_noxcap_stem",
        "chestnut_noxwood": "pastel:block/stripped_chestnut_noxcap_stem",
        "ivory_noxwood": "pastel:block/stripped_ivory_noxcap_stem",
        "ebony_noxwood": "pastel:block/stripped_ebony_noxcap_stem",
        "white": "pastel:block/stripped_white_log",
        "light_gray": "pastel:block/stripped_light_gray_log",
        "gray": "pastel:block/stripped_gray_log",
        "black": "pastel:block/stripped_black_log",
        "brown": "pastel:block/stripped_brown_log",
        "red": "pastel:block/stripped_red_log",
        "orange": "pastel:block/stripped_orange_log",
        "yellow": "pastel:block/stripped_yellow_log",
        "lime": "pastel:block/stripped_lime_log",
        "green": "pastel:block/stripped_green_log",
        "cyan": "pastel:block/stripped_cyan_log",
        "light_blue": "pastel:block/stripped_light_blue_log",
        "blue": "pastel:block/stripped_blue_log",
        "purple": "pastel:block/stripped_purple_log",
        "magenta": "pastel:block/stripped_magenta_log",
        "pink": "pastel:block/stripped_pink_log"
    },
    "planks": {
        "weeping_gala": "pastel:block/weeping_gala_planks",
        "slate_noxwood": "pastel:block/slate_noxwood_planks",
        "chestnut_noxwood": "pastel:block/chestnut_noxwood_planks",
        "ivory_noxwood": "pastel:block/ivory_noxwood_planks",
        "ebony_noxwood": "pastel:block/ebony_noxwood_planks",
        "white": "pastel:block/white_planks",
        "light_gray": "pastel:block/light_gray_planks",
        "gray": "pastel:block/gray_planks",
        "black": "pastel:block/black_planks",
        "brown": "pastel:block/brown_planks",
        "red": "pastel:block/red_planks",
        "orange": "pastel:block/orange_planks",
        "yellow": "pastel:block/yellow_planks",
        "lime": "pastel:block/lime_planks",
        "green": "pastel:block/green_planks",
        "cyan": "pastel:block/cyan_planks",
        "light_blue": "pastel:block/light_blue_planks",
        "blue": "pastel:block/blue_planks",
        "purple": "pastel:block/purple_planks",
        "magenta": "pastel:block/magenta_planks",
        "pink": "pastel:block/pink_planks"
    }
}

global.PASTEL_WOODS = {
    "planks": {
        "weeping_gala": "pastel:weeping_gala_planks",
        "slate_noxwood": "pastel:slate_noxwood_planks",
        "chestnut_noxwood": "pastel:chestnut_noxwood_planks",
        "ivory_noxwood": "pastel:ivory_noxwood_planks",
        "ebony_noxwood": "pastel:ebony_noxwood_planks",
        "white": "pastel:white_planks",
        "light_gray": "pastel:light_gray_planks",
        "gray": "pastel:gray_planks",
        "black": "pastel:black_planks",
        "brown": "pastel:brown_planks",
        "red": "pastel:red_planks",
        "orange": "pastel:orange_planks",
        "yellow": "pastel:yellow_planks",
        "lime": "pastel:lime_planks",
        "green": "pastel:green_planks",
        "cyan": "pastel:cyan_planks",
        "light_blue": "pastel:light_blue_planks",
        "blue": "pastel:blue_planks",
        "purple": "pastel:purple_planks",
        "magenta": "pastel:magenta_planks",
        "pink": "pastel:pink_planks"
    },
    "slab": {
        "weeping_gala": "pastel:weeping_gala_slab",
        "slate_noxwood": "pastel:slate_noxwood_slab",
        "chestnut_noxwood": "pastel:chestnut_noxwood_slab",
        "ivory_noxwood": "pastel:ivory_noxwood_slab",
        "ebony_noxwood": "pastel:ebony_noxwood_slab",
        "white": "pastel:white_slab",
        "light_gray": "pastel:light_gray_slab",
        "gray": "pastel:gray_slab",
        "black": "pastel:black_slab",
        "brown": "pastel:brown_slab",
        "red": "pastel:red_slab",
        "orange": "pastel:orange_slab",
        "yellow": "pastel:yellow_slab",
        "lime": "pastel:lime_slab",
        "green": "pastel:green_slab",
        "cyan": "pastel:cyan_slab",
        "light_blue": "pastel:light_blue_slab",
        "blue": "pastel:blue_slab",
        "purple": "pastel:purple_slab",
        "magenta": "pastel:magenta_slab",
        "pink": "pastel:pink_slab"
    },
    "stairs": {
        "weeping_gala": "pastel:weeping_gala_stairs",
        "slate_noxwood": "pastel:slate_noxwood_stairs",
        "chestnut_noxwood": "pastel:chestnut_noxwood_stairs",
        "ivory_noxwood": "pastel:ivory_noxwood_stairs",
        "ebony_noxwood": "pastel:ebony_noxwood_stairs",
        "white": "pastel:white_stairs",
        "light_gray": "pastel:light_gray_stairs",
        "gray": "pastel:gray_stairs",
        "black": "pastel:black_stairs",
        "brown": "pastel:brown_stairs",
        "red": "pastel:red_stairs",
        "orange": "pastel:orange_stairs",
        "yellow": "pastel:yellow_stairs",
        "lime": "pastel:lime_stairs",
        "green": "pastel:green_stairs",
        "cyan": "pastel:cyan_stairs",
        "light_blue": "pastel:light_blue_stairs",
        "blue": "pastel:blue_stairs",
        "purple": "pastel:purple_stairs",
        "magenta": "pastel:magenta_stairs",
        "pink": "pastel:pink_stairs"
    },
    "log": {
        "weeping_gala": "pastel:weeping_gala_log",
        "slate_noxwood": "pastel:slate_noxcap_stem",
        "chestnut_noxwood": "pastel:chestnut_noxcap_stem",
        "ivory_noxwood": "pastel:ivory_noxcap_stem",
        "ebony_noxwood": "pastel:ebony_noxcap_stem",
        "white": "pastel:white_log",
        "light_gray": "pastel:light_gray_log",
        "gray": "pastel:gray_log",
        "black": "pastel:black_log",
        "brown": "pastel:brown_log",
        "red": "pastel:red_log",
        "orange": "pastel:orange_log",
        "yellow": "pastel:yellow_log",
        "lime": "pastel:lime_log",
        "green": "pastel:green_log",
        "cyan": "pastel:cyan_log",
        "light_blue": "pastel:light_blue_log",
        "blue": "pastel:blue_log",
        "purple": "pastel:purple_log",
        "magenta": "pastel:magenta_log",
        "pink": "pastel:pink_log"
    },
    "stripped_log": {
        "weeping_gala": "pastel:stripped_weeping_gala_log",
        "slate_noxwood": "pastel:stripped_slate_noxcap_stem",
        "chestnut_noxwood": "pastel:stripped_chestnut_noxcap_stem",
        "ivory_noxwood": "pastel:stripped_ivory_noxcap_stem",
        "ebony_noxwood": "pastel:stripped_ebony_noxcap_stem",
        "white": "pastel:stripped_white_log",
        "light_gray": "pastel:stripped_light_gray_log",
        "gray": "pastel:stripped_gray_log",
        "black": "pastel:stripped_black_log",
        "brown": "pastel:stripped_brown_log",
        "red": "pastel:stripped_red_log",
        "orange": "pastel:stripped_orange_log",
        "yellow": "pastel:stripped_yellow_log",
        "lime": "pastel:stripped_lime_log",
        "green": "pastel:stripped_green_log",
        "cyan": "pastel:stripped_cyan_log",
        "light_blue": "pastel:stripped_light_blue_log",
        "blue": "pastel:stripped_blue_log",
        "purple": "pastel:stripped_purple_log",
        "magenta": "pastel:stripped_magenta_log",
        "pink": "pastel:stripped_pink_log"
    },
    "wood": {
        "weeping_gala": "pastel:weeping_gala_wood",
        "slate_noxwood": "pastel:slate_noxcap_hyphae",
        "chestnut_noxwood": "pastel:chestnut_noxcap_hyphae",
        "ivory_noxwood": "pastel:ivory_noxcap_hyphae",
        "ebony_noxwood": "pastel:ebony_noxcap_hyphae",
        "white": "pastel:white_wood",
        "light_gray": "pastel:light_gray_wood",
        "gray": "pastel:gray_wood",
        "black": "pastel:black_wood",
        "brown": "pastel:brown_wood",
        "red": "pastel:red_wood",
        "orange": "pastel:orange_wood",
        "yellow": "pastel:yellow_wood",
        "lime": "pastel:lime_wood",
        "green": "pastel:green_wood",
        "cyan": "pastel:cyan_wood",
        "light_blue": "pastel:light_blue_wood",
        "blue": "pastel:blue_wood",
        "purple": "pastel:purple_wood",
        "magenta": "pastel:magenta_wood",
        "pink": "pastel:pink_wood"
    },
    "stripped_wood": {
        "weeping_gala": "pastel:stripped_weeping_gala_wood",
        "slate_noxwood": "pastel:stripped_slate_noxcap_hyphae",
        "chestnut_noxwood": "pastel:stripped_chestnut_noxcap_hyphae",
        "ivory_noxwood": "pastel:stripped_ivory_noxcap_hyphae",
        "ebony_noxwood": "pastel:stripped_ebony_noxcap_hyphae",
        "white": "pastel:stripped_white_wood",
        "light_gray": "pastel:stripped_light_gray_wood",
        "gray": "pastel:stripped_gray_wood",
        "black": "pastel:stripped_black_wood",
        "brown": "pastel:stripped_brown_wood",
        "red": "pastel:stripped_red_wood",
        "orange": "pastel:stripped_orange_wood",
        "yellow": "pastel:stripped_yellow_wood",
        "lime": "pastel:stripped_lime_wood",
        "green": "pastel:stripped_green_wood",
        "cyan": "pastel:stripped_cyan_wood",
        "light_blue": "pastel:stripped_light_blue_wood",
        "blue": "pastel:stripped_blue_wood",
        "purple": "pastel:stripped_purple_wood",
        "magenta": "pastel:stripped_magenta_wood",
        "pink": "pastel:stripped_pink_wood"
    },
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
        "serpentine": "modpack:rock/bricks/serpentine"
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
        "serpentine": "modpack:rock/raw/serpentine"
    }
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
    "ipe",
    "mahoe",
    "ginkgo",
    "beech",
    "araucaria"
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
    "ipe",
    "mahoe",
    "ginkgo",
    "beech",
    "araucaria"
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
    "ipe": "afc",
    "mahoe": "afc",
    "ginkgo": "afc",
    "beech": "afc",
    "araucaria": "afc"
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
    "unknown"
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
    "light_gray",
    "gray",
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "lime",
    "green",
    "cyan",
    "light_blue",
    "blue",
    "purple",
    "magenta",
    "pink",
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
    "hardened_steel": 1585,
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

global.ORE_BLOCK_GRADES = [
    "normal",
    "poor",
    "rich"
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
    "serpentine": "green"
}

global.TFC_SOIL_TYPES = [
    "entisol",
    "aridisol",
    "oxisol",
    "fluvisol",
    "andisol",
    "podzol",
    "alfisol",
    "mollisol"
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
    "serpentine": "modpack:rock/cobble/serpentine"
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
    "peridotite": "modpack:rock/raw/peridotite",
    "serpentine": "modpack:rock/raw/serpentine"
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
    "serpentine": "modpack:block/rock/cobble/serpentine"
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
    "serpentine": "modpack:block/rock/raw/serpentine"
}

// to be deprecated
global.DEEPER_DOWN_ROCK_STONES = {
    "argillite": "minecraft:stone",
    "nephelinite": "minecraft:deepslate",
    "blackslag": "pastel:blackslag",
    "travertine": "minecraft:dripstone_block",
    "picrite_basalt": "pastel:basal_marble",
}

global.NOXWOODS = [
    "chestnut",
    "ivory",
    "slate",
    "ebony",
    "chestnut_noxwood",
    "ivory_noxwood",
    "slate_noxwood",
    "ebony_noxwood"
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
