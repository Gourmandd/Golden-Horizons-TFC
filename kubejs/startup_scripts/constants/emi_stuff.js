
global.EMI = {}

// has base, stairs, slab and wall block
global.EMI.BASIC_BLOCKS = [

    "caupona:opus_incertum",

    "caupona:mixed_bricks",

    "caupona:opus_latericium",

    "caupona:opus_reticulatum",

    "caupona:felsic_tuff_bricks",

    "caupona:felsic_tuff",

    "caupona:polished_felsic_tuff",

    "firmalife:tile_bricks",

    "quark:raw_iron_bricks",

    "quark:raw_gold_bricks",

    "quark:raw_copper_bricks",

    "minecraft:stone_bricks",

    "quark:limestone",

    "quark:limestone_bricks",

    "quark:jasper",

    "quark:jasper_bricks",

    "quark:shale",

    "quark:shale_bricks",

    "quark:calcite_bricks",

    "quark:polished_calcite",

    "minecraft:polished_deepslate",

    "minecraft:deepslate_bricks",

    "minecraft:deepslate_tiles",

    "minecraft:bricks",

    "minecraft:prismarine",

    "minecraft:nether_bricks",

    "minecraft:red_nether_bricks",

    "minecraft:blackstone",

    "minecraft:polished_blackstone",

    "minecraft:polished_blackstone_bricks",

    "spectrum:polished_basalt",

    "spectrum:basalt_bricks",

    "spectrum:basalt_tiles",

    "spectrum:polished_calcite",

    "spectrum:calcite_bricks",

    "spectrum:calcite_tiles",

    "spectrum:basal_marble",

    "spectrum:blackslag",

    "spectrum:polished_blackslag",

    "spectrum:blackslag_tiles",

    "spectrum:blackslag_bricks",

    "spectrum:bone_ash_bricks",

    "spectrum:bone_ash_tiles",

    "spectrum:polished_bone_ash",

    "spectrum:pyrite",

    "spectrum:pyrite_tiles",

    "spectrum:polished_basal_marble",

    "spectrum:basal_marble_tiles",

    "spectrum:basal_marble_bricks",

    "tfc:mud_bricks/entisol",

    "tfc:mud_bricks/aridisol",

    "tfc:mud_bricks/oxisol",

    "tfc:mud_bricks/fluvisol",

    "tfc:mud_bricks/andisol",

    "tfc:mud_bricks/podzol",

    "tfc:mud_bricks/alfisol",

    "tfc:mud_bricks/mollisol",

    "tfc:raw_sandstone/brown",

    "tfc:smooth_sandstone/brown",

    "tfc:cut_sandstone/brown",

    "tfc:raw_sandstone/white",

    "tfc:smooth_sandstone/white",

    "tfc:cut_sandstone/white",

    "tfc:raw_sandstone/black",

    "tfc:smooth_sandstone/black",

    "tfc:cut_sandstone/black",

    "tfc:raw_sandstone/red",

    "tfc:smooth_sandstone/red",

    "tfc:cut_sandstone/red",

    "tfc:raw_sandstone/yellow",

    "tfc:smooth_sandstone/yellow",

    "tfc:cut_sandstone/yellow",

    "tfc:raw_sandstone/green",

    "tfc:smooth_sandstone/green",

    "tfc:cut_sandstone/green",

    "tfc:raw_sandstone/pink",

    "tfc:smooth_sandstone/pink",

    "tfc:cut_sandstone/pink",

    "tfc:rock/raw/granite",

    "tfc:rock/cobble/granite",

    "tfc:rock/mossy_cobble/granite",

    "tfc:rock/bricks/granite",

    "tfc:rock/smooth/granite",

    "tfc:rock/cracked_bricks/granite",

    "tfc:rock/mossy_bricks/granite",

    "tfc:rock/raw/diorite",

    "tfc:rock/mossy_cobble/diorite",

    "tfc:rock/cobble/diorite",

    "tfc:rock/bricks/diorite",

    "tfc:rock/cracked_bricks/diorite",

    "tfc:rock/mossy_bricks/diorite",

    "tfc:rock/smooth/diorite",

    "tfc:rock/raw/gabbro",

    "tfc:rock/mossy_cobble/gabbro",

    "tfc:rock/cobble/gabbro",

    "tfc:rock/bricks/gabbro",

    "tfc:rock/cracked_bricks/gabbro",

    "tfc:rock/mossy_bricks/gabbro",

    "tfc:rock/smooth/gabbro",

    "tfc:rock/raw/shale",

    "tfc:rock/cobble/shale",

    "tfc:rock/mossy_cobble/shale",

    "tfc:rock/bricks/shale",

    "tfc:rock/cracked_bricks/shale",

    "tfc:rock/mossy_bricks/shale",

    "tfc:rock/smooth/shale",

    "tfc:rock/raw/claystone",

    "tfc:rock/cobble/claystone",

    "tfc:rock/mossy_cobble/claystone",

    "tfc:rock/bricks/claystone",

    "tfc:rock/cracked_bricks/claystone",

    "tfc:rock/mossy_bricks/claystone",

    "tfc:rock/smooth/claystone",

    "tfc:rock/raw/limestone",

    "tfc:rock/cobble/limestone",

    "tfc:rock/mossy_cobble/limestone",

    "tfc:rock/bricks/limestone",

    "tfc:rock/cracked_bricks/limestone",

    "tfc:rock/mossy_bricks/limestone",

    "tfc:rock/smooth/limestone",

    "tfc:rock/raw/conglomerate",

    "tfc:rock/cobble/conglomerate",

    "tfc:rock/mossy_cobble/conglomerate",

    "tfc:rock/bricks/conglomerate",

    "tfc:rock/cracked_bricks/conglomerate",

    "tfc:rock/mossy_bricks/conglomerate",

    "tfc:rock/smooth/conglomerate",

    "tfc:rock/raw/dolomite",

    "tfc:rock/mossy_cobble/dolomite",

    "tfc:rock/cobble/dolomite",

    "tfc:rock/bricks/dolomite",

    "tfc:rock/cracked_bricks/dolomite",

    "tfc:rock/mossy_bricks/dolomite",

    "tfc:rock/smooth/dolomite",

    "tfc:rock/raw/chert",

    "tfc:rock/cobble/chert",

    "tfc:rock/mossy_cobble/chert",

    "tfc:rock/bricks/chert",

    "tfc:rock/cracked_bricks/chert",

    "tfc:rock/mossy_bricks/chert",

    "tfc:rock/smooth/chert",

    "tfc:rock/raw/chalk",

    "tfc:rock/cobble/chalk",

    "tfc:rock/mossy_cobble/chalk",

    "tfc:rock/bricks/chalk",

    "tfc:rock/cracked_bricks/chalk",

    "tfc:rock/mossy_bricks/chalk",

    "tfc:rock/smooth/chalk",

    "tfc:rock/raw/tuff",

    "tfc:rock/cobble/tuff",

    "tfc:rock/mossy_cobble/tuff",

    "tfc:rock/bricks/tuff",

    "tfc:rock/cracked_bricks/tuff",

    "tfc:rock/mossy_bricks/tuff",

    "tfc:rock/smooth/tuff",

    "tfc:rock/raw/rhyolite",

    "tfc:rock/cobble/rhyolite",

    "tfc:rock/mossy_cobble/rhyolite",

    "tfc:rock/bricks/rhyolite",

    "tfc:rock/cracked_bricks/rhyolite",

    "tfc:rock/mossy_bricks/rhyolite",

    "tfc:rock/smooth/rhyolite",

    "tfc:rock/raw/basalt",

    "tfc:rock/cobble/basalt",

    "tfc:rock/mossy_cobble/basalt",

    "tfc:rock/bricks/basalt",

    "tfc:rock/cracked_bricks/basalt",

    "tfc:rock/mossy_bricks/basalt",

    "tfc:rock/smooth/basalt",

    "tfc:rock/raw/andesite",

    "tfc:rock/cobble/andesite",

    "tfc:rock/mossy_cobble/andesite",

    "tfc:rock/bricks/andesite",

    "tfc:rock/cracked_bricks/andesite",

    "tfc:rock/mossy_bricks/andesite",

    "tfc:rock/smooth/andesite",

    "tfc:rock/raw/dacite",

    "tfc:rock/cobble/dacite",

    "tfc:rock/mossy_cobble/dacite",

    "tfc:rock/bricks/dacite",

    "tfc:rock/cracked_bricks/dacite",

    "tfc:rock/mossy_bricks/dacite",

    "tfc:rock/smooth/dacite",

    "tfc:rock/raw/quartzite",

    "tfc:rock/cobble/quartzite",

    "tfc:rock/mossy_cobble/quartzite",

    "tfc:rock/bricks/quartzite",

    "tfc:rock/cracked_bricks/quartzite",

    "tfc:rock/mossy_bricks/quartzite",

    "tfc:rock/smooth/quartzite",

    "tfc:rock/raw/slate",

    "tfc:rock/cobble/slate",

    "tfc:rock/mossy_cobble/slate",

    "tfc:rock/bricks/slate",

    "tfc:rock/cracked_bricks/slate",

    "tfc:rock/mossy_bricks/slate",

    "tfc:rock/smooth/slate",

    "tfc:rock/raw/phyllite",

    "tfc:rock/mossy_cobble/phyllite",

    "tfc:rock/cobble/phyllite",

    "tfc:rock/cracked_bricks/phyllite",

    "tfc:rock/mossy_bricks/phyllite",

    "tfc:rock/bricks/phyllite",

    "tfc:rock/smooth/phyllite",

    "tfc:rock/raw/schist",

    "tfc:rock/cobble/schist",

    "tfc:rock/mossy_cobble/schist",

    "tfc:rock/bricks/schist",

    "tfc:rock/cracked_bricks/schist",

    "tfc:rock/mossy_bricks/schist",

    "tfc:rock/smooth/schist",

    "tfc:rock/raw/gneiss",

    "tfc:rock/cobble/gneiss",

    "tfc:rock/mossy_cobble/gneiss",

    "tfc:rock/bricks/gneiss",

    "tfc:rock/cracked_bricks/gneiss",

    "tfc:rock/mossy_bricks/gneiss",

    "tfc:rock/smooth/gneiss",

    "tfc:rock/raw/marble",

    "tfc:rock/cobble/marble",

    "tfc:rock/mossy_cobble/marble",

    "tfc:rock/bricks/marble",

    "tfc:rock/cracked_bricks/marble",

    "tfc:rock/mossy_bricks/marble",

    "tfc:rock/smooth/marble",

    "tfc:alabaster/bricks/white",

    "tfc:alabaster/polished/white",

    "tfc:alabaster/bricks/orange",

    "tfc:alabaster/polished/orange",

    "tfc:alabaster/bricks/magenta",

    "tfc:alabaster/polished/magenta",

    "tfc:alabaster/bricks/light_blue",

    "tfc:alabaster/polished/light_blue",

    "tfc:alabaster/bricks/yellow",

    "tfc:alabaster/polished/yellow",

    "tfc:alabaster/bricks/lime",

    "tfc:alabaster/polished/lime",

    "tfc:alabaster/bricks/pink",

    "tfc:alabaster/polished/pink",

    "tfc:alabaster/bricks/gray",

    "tfc:alabaster/polished/gray",

    "tfc:alabaster/bricks/light_gray",

    "tfc:alabaster/polished/light_gray",

    "tfc:alabaster/bricks/cyan",

    "tfc:alabaster/polished/cyan",

    "tfc:alabaster/bricks/purple",

    "tfc:alabaster/polished/purple",

    "tfc:alabaster/bricks/blue",

    "tfc:alabaster/polished/blue",

    "tfc:alabaster/bricks/brown",

    "tfc:alabaster/polished/brown",

    "tfc:alabaster/bricks/green",

    "tfc:alabaster/polished/green",

    "tfc:alabaster/bricks/red",

    "tfc:alabaster/polished/red",

    "tfc:alabaster/bricks/black",

    "tfc:alabaster/polished/black",

    "create:cut_granite",

    "create:polished_cut_granite",

    "create:cut_granite_bricks",

    "create:small_granite_bricks",

    "create:cut_diorite",

    "create:polished_cut_diorite",

    "create:cut_diorite_bricks",

    "create:small_diorite_bricks",

    "create:cut_andesite",

    "create:polished_cut_andesite",

    "create:cut_andesite_bricks",

    "create:small_andesite_bricks",

    "create:layered_andesite",

    "create:cut_calcite",

    "create:polished_cut_calcite",

    "create:cut_calcite_bricks",

    "create:small_calcite_bricks",

    "create:cut_dripstone",

    "create:polished_cut_dripstone",

    "create:cut_dripstone_bricks",

    "create:small_dripstone_bricks",

    "create:cut_deepslate",

    "create:polished_cut_deepslate",

    "create:cut_deepslate_bricks",

    "create:small_deepslate_bricks",

    "create:cut_tuff",

    "create:polished_cut_tuff",

    "create:cut_tuff_bricks",

    "create:small_tuff_bricks",

    "create:cut_asurine",

    "create:polished_cut_asurine",

    "create:cut_asurine_bricks",

    "create:small_asurine_bricks",

    "create:cut_crimsite",

    "create:polished_cut_crimsite",

    "create:cut_crimsite_bricks",

    "create:small_crimsite_bricks",

    "create:cut_limestone",

    "create:polished_cut_limestone",

    "create:cut_limestone_bricks",

    "create:small_limestone_bricks",

    "create:cut_ochrum",

    "create:polished_cut_ochrum",

    "create:cut_ochrum_bricks",

    "create:small_ochrum_bricks",

    "create:cut_scoria",

    "create:polished_cut_scoria",

    "create:cut_scoria_bricks",

    "create:small_scoria_bricks",

    "create:cut_scorchia",

    "create:polished_cut_scorchia",

    "create:cut_scorchia_bricks",

    "create:small_scorchia_bricks",

    "create:cut_veridium",

    "create:polished_cut_veridium",

    "create:cut_veridium_bricks",

    "create:small_veridium_bricks",

    "modpack:rock/cobble/argillite",

    "modpack:rock/mossy_cobble/argillite",

    "modpack:rock/mossy_bricks/argillite",

    "modpack:rock/cobble/nephelinite",

    "modpack:rock/mossy_cobble/nephelinite",

    "modpack:rock/mossy_bricks/nephelinite",

    "modpack:rock/cobble/blackslag",

    "modpack:rock/mossy_cobble/blackslag",

    "modpack:rock/mossy_bricks/blackslag",

    "modpack:rock/cobble/picrite_basalt",

    "modpack:rock/mossy_cobble/picrite_basalt",

    "modpack:rock/mossy_bricks/picrite_basalt",

    "modpack:rock/cobble/travertine",

    "modpack:rock/mossy_cobble/travertine",

    "modpack:rock/mossy_bricks/travertine",

    "modpack:rock/cobble/breccia",

    "modpack:rock/mossy_cobble/breccia",

    "modpack:rock/mossy_bricks/breccia",

    "modpack:rock/cobble/komatiite",

    "modpack:rock/mossy_cobble/komatiite",

    "modpack:rock/mossy_bricks/komatiite",

    "modpack:rock/cobble/sandstone",

    "modpack:rock/mossy_cobble/sandstone",

    "modpack:rock/mossy_bricks/sandstone",

    "modpack:rock/cobble/red_sandstone",

    "modpack:rock/mossy_cobble/red_sandstone",

    "modpack:rock/mossy_bricks/red_sandstone",

    "modpack:rock/cobble/suevite",

    "modpack:rock/mossy_cobble/suevite",

    "modpack:rock/mossy_bricks/suevite",

    "modpack:rock/cobble/phonolite",

    "modpack:rock/mossy_cobble/phonolite",

    "modpack:rock/mossy_bricks/phonolite",

    "modpack:rock/cobble/arkose",

    "modpack:rock/mossy_cobble/arkose",

    "modpack:rock/mossy_bricks/arkose",

    "modpack:rock/cobble/soapstone",

    "modpack:rock/mossy_cobble/soapstone",

    "modpack:rock/mossy_bricks/soapstone",

    "modpack:rock/raw/blueschist",

    "modpack:rock/cobble/blueschist",

    "modpack:rock/mossy_cobble/blueschist",

    "modpack:rock/bricks/blueschist",

    "modpack:rock/cracked_bricks/blueschist",

    "modpack:rock/mossy_bricks/blueschist",

    "modpack:rock/smooth/blueschist",

    "modpack:rock/raw/peridotite",

    "modpack:rock/cobble/peridotite",

    "modpack:rock/mossy_cobble/peridotite",

    "modpack:rock/bricks/peridotite",

    "modpack:rock/cracked_bricks/peridotite",

    "modpack:rock/mossy_bricks/peridotite",

    "modpack:rock/smooth/peridotite",

    "modpack:rock/raw/serpentine",

    "modpack:rock/cobble/serpentine",

    "modpack:rock/mossy_cobble/serpentine",

    "modpack:rock/bricks/serpentine",

    "modpack:rock/cracked_bricks/serpentine",

    "modpack:rock/mossy_bricks/serpentine",

    "modpack:rock/smooth/serpentine",

    "modpack:rock/mossy_bricks/greywacke",

    "modpack:rock/mossy_bricks/marlstone",

    "modpack:ceramic/bricks/yixing",

    "modpack:ceramic/bricks/yellowware",

    "modpack:ceramic/bricks/porcelain",

    "modpack:ceramic/bricks/kaolinite",

    "modpack:ceramic/bricks/earthenware",

    "firmalife:rustic_bricks"
]

global.EMI.BASIC_BLOCKS_CUSTOM = [
    {
        base: "minecraft:calcite",
        stairs: "quark:calcite_stairs",
        slab: "quark:calcite_slab",
        wall: "quark:calcite_wall",
    },
    {
        base: "minecraft:smooth_basalt",
        stairs: "spectrum:smooth_basalt_stairs",
        slab: "spectrum:smooth_basalt_slab",
        wall: "spectrum:smooth_basalt_wall",
    },
    {
        base: "minecraft:dripstone_block",
        stairs: "quark:dripstone_block_stairs",
        slab: "quark:dripstone_block_slab",
        wall: "quark:dripstone_block_wall"
    }
]

global.EMI.LIMITED_BLOCKS = [

    "minecraft:bamboo_planks",

    "minecraft:bamboo_mosaic",

    "minecraft:stone",

    "quark:polished_limestone",

    "quark:polished_shale",

    "quark:polished_jasper",

    "quark:polished_dripstone",

    "minecraft:prismarine_bricks",

    "minecraft:dark_prismarine",

    "quark:midori_block",

    "quark:duskbound_block",

    "quark:iron_plate",

    "quark:rusty_iron_plate",

    "minecraft:purpur_block",

    "minecraft:quartz_block",

    "minecraft:smooth_quartz",

    "quark:shingles",

    "quark:white_shingles",

    "quark:light_gray_shingles",

    "quark:gray_shingles",

    "quark:black_shingles",

    "quark:brown_shingles",

    "quark:red_shingles",

    "quark:orange_shingles",

    "quark:yellow_shingles",

    "quark:lime_shingles",

    "quark:green_shingles",

    "quark:cyan_shingles",

    "quark:light_blue_shingles",

    "quark:blue_shingles",

    "quark:purple_shingles",

    "quark:magenta_shingles",

    "quark:pink_shingles",

    "spectrum:polished_shale_clay",

    "spectrum:exposed_polished_shale_clay",

    "spectrum:weathered_polished_shale_clay",

    "spectrum:shale_clay_tiles",

    "spectrum:exposed_shale_clay_tiles",

    "spectrum:weathered_shale_clay_tiles",

    "spectrum:shale_clay_bricks",

    "spectrum:exposed_shale_clay_bricks",

    "spectrum:weathered_shale_clay_bricks",

    "tfc:metal/block/bismuth",

    "tfc:metal/block/bismuth_bronze",

    "tfc:metal/block/black_bronze",

    "tfc:metal/block/bronze",

    "tfc:metal/exposed_block/bronze",

    "tfc:metal/weathered_block/bronze",

    "tfc:metal/oxidized_block/bronze",

    "tfc:metal/block/brass",

    "tfc:metal/exposed_block/brass",

    "tfc:metal/weathered_block/brass",

    "tfc:metal/oxidized_block/brass",

    "tfc:metal/block/copper",

    "tfc:metal/exposed_block/copper",

    "tfc:metal/weathered_block/copper",

    "tfc:metal/oxidized_block/copper",

    "tfc:metal/block/gold",

    "tfc:metal/block/nickel",

    "tfc:metal/block/rose_gold",

    "tfc:metal/block/silver",

    "tfc:metal/exposed_block/silver",

    "tfc:metal/weathered_block/silver",

    "tfc:metal/oxidized_block/silver",

    "tfc:metal/block/tin",

    "tfc:metal/block/zinc",

    "tfc:metal/block/sterling_silver",

    "tfc:metal/exposed_block/sterling_silver",

    "tfc:metal/weathered_block/sterling_silver",

    "tfc:metal/oxidized_block/sterling_silver",

    "tfc:metal/block/wrought_iron",

    "tfc:metal/exposed_block/wrought_iron",

    "tfc:metal/weathered_block/wrought_iron",

    "tfc:metal/oxidized_block/wrought_iron",

    "tfc:metal/block/cast_iron",

    "tfc:metal/block/steel",

    "tfc:metal/exposed_block/steel",

    "tfc:metal/weathered_block/steel",

    "tfc:metal/oxidized_block/steel",

    "tfc:metal/block/black_steel",

    "tfc:metal/block/blue_steel",

    "tfc:metal/block/red_steel",

    "firmalife:metal/block/chromium",

    "firmalife:metal/block/stainless_steel",

    "create:copper_shingles",

    "create:exposed_copper_shingles",

    "create:weathered_copper_shingles",

    "create:oxidized_copper_shingles",

    "create:waxed_copper_shingles",

    "create:waxed_exposed_copper_shingles",

    "create:waxed_weathered_copper_shingles",

    "create:waxed_oxidized_copper_shingles",

    "create:copper_tiles",

    "create:exposed_copper_tiles",

    "create:weathered_copper_tiles",

    "create:oxidized_copper_tiles",

    "create:waxed_copper_tiles",

    "create:waxed_exposed_copper_tiles",

    "create:waxed_weathered_copper_tiles",

    "create:waxed_oxidized_copper_tiles",

    "modpack:metal/block/aluminium",

    "modpack:metal/block/aluminium_bronze",

    "modpack:metal/block/cast_iron_alloy",

    "modpack:metal/block/hardened_steel",

    "modpack:metal/block/nethersteel",

    "modpack:metal/block/lead",

    "modpack:metal/block/electrum",

    "spectrum:slate_noxwood_planks",

    "spectrum:ebony_noxwood_planks",

    "spectrum:ivory_noxwood_planks",

    "spectrum:chestnut_noxwood_planks",

    "tfc:wood/planks/acacia",

    "tfc:wood/planks/ash",

    "tfc:wood/planks/aspen",

    "tfc:wood/planks/birch",

    "tfc:wood/planks/blackwood",

    "tfc:wood/planks/chestnut",

    "tfc:wood/planks/douglas_fir",

    "tfc:wood/planks/hickory",

    "tfc:wood/planks/kapok",

    "tfc:wood/planks/mangrove",

    "tfc:wood/planks/maple",

    "tfc:wood/planks/oak",

    "tfc:wood/planks/palm",

    "tfc:wood/planks/palm_mosaic",

    "tfc:wood/planks/pine",

    "tfc:wood/planks/rosewood",

    "tfc:wood/planks/sequoia",

    "tfc:wood/planks/spruce",

    "tfc:wood/planks/sycamore",

    "tfc:wood/planks/white_cedar",

    "tfc:wood/planks/willow",

    "afc:wood/planks/baobab",

    "afc:wood/planks/eucalyptus",

    "afc:wood/planks/mahogany",

    "afc:wood/planks/hevea",

    "afc:wood/planks/tualang",

    "afc:wood/planks/teak",

    "afc:wood/planks/cypress",

    "afc:wood/planks/fig",

    "afc:wood/planks/ironwood",

    "afc:wood/planks/ipe",

    "afc:wood/planks/araucaria",

    "afc:wood/planks/beech",

    "afc:wood/planks/ginkgo",

    "afc:wood/planks/mahoe",

    "spectrum:white_planks",

    "spectrum:orange_planks",

    "spectrum:magenta_planks",

    "spectrum:light_blue_planks",

    "spectrum:yellow_planks",

    "spectrum:lime_planks",

    "spectrum:pink_planks",

    "spectrum:gray_planks",

    "spectrum:light_gray_planks",

    "spectrum:cyan_planks",

    "spectrum:purple_planks",

    "spectrum:blue_planks",

    "spectrum:brown_planks",

    "spectrum:green_planks",

    "spectrum:red_planks",

    "spectrum:black_planks",

    "spectrum:weeping_gala_planks",

    "burningblock:burnt_planks"
]

global.EMI.AP_BASIC_BLOCKS = [

    "architects_palette:plating_block",

    "architects_palette:myonite",

    "architects_palette:myonite_bricks",

    "architects_palette:mushy_myonite_bricks",

    "architects_palette:olivestone_bricks",

    "architects_palette:olivestone_tiles",

    "architects_palette:algal_bricks",

    "architects_palette:overgrown_algal_bricks",

    "architects_palette:coal_ore_bricks",

    "architects_palette:lapis_ore_bricks",

    "architects_palette:redstone_ore_bricks",

    "architects_palette:iron_ore_bricks",

    "architects_palette:gold_ore_bricks",

    "architects_palette:emerald_ore_bricks",

    "architects_palette:diamond_ore_bricks",

    "architects_palette:flint_tiles",

    "architects_palette:polished_packed_ice",

    "architects_palette:osseous_bricks",

    "architects_palette:withered_osseous_bricks",

    "architects_palette:polished_glowstone",

    "architects_palette:bamboo_boards",

    "architects_palette:basalt_tiles",

    "architects_palette:twisted_boards",

    "architects_palette:dripstone_bricks",

    "architects_palette:calcite_bricks",

    "architects_palette:nether_brass_block",

    "architects_palette:cut_nether_brass",

    "architects_palette:esoterrack",

    "architects_palette:onyx",

    "architects_palette:onyx_bricks",

    "architects_palette:wardstone",

    "architects_palette:warpstone",

    "architects_palette:wardstone_bricks",

    "architects_palette:ancient_plating",

    "architects_palette:tread_plate",

    "architects_palette:oracle_bricks",

    "architects_palette:dark_oracle_bricks",

    "architects_palette:oracle_tiles",

    "architects_palette:cerebral_block",

    "architects_palette:cerebral_tiles",

    "architects_palette:moonshale",

    "architects_palette:moonshale_bricks",

    "architects_palette:craterstone",

    "architects_palette:nebulite",

    "architects_palette:esoterrack_bricks"
]

global.EMI.AP_BLOCKS_NO_WALLS = [

    "architects_palette:oracle_block",

    "architects_palette:twisted_planks",

    "architects_palette:entrails",

    "architects_palette:sunmetal_block",

    "architects_palette:entwine_block",

    "architects_palette:gilded_sandstone",

    "architects_palette:smooth_nether_brass",

    "architects_palette:polished_nebulite"
]

global.EMI.AP_BLOCKS_NO_WALLS_AND_STAIRS = [
    "architects_palette:abyssaline_bricks",

    "architects_palette:hadaline_bricks",

    "architects_palette:abyssaline_tiles",

    "architects_palette:hadaline_tiles",
]
