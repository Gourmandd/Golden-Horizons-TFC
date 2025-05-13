ServerEvents.recipes(event =>{

    const STONE_POLISHING = {
        "minecraft:stone": "minecraft:smooth_stone",
        "minecraft:granite": "minecraft:polished_granite",
        "minecraft:diorite": "minecraft:polished_diorite",
        "minecraft:andesite": "minecraft:polished_andesite",
        "quark:limestone": "quark:polished_limestone",
        "quark:jasper": "quark:polished_jasper",
        "quark:myalite": "quark:polished_myalite",
        "quark:shale": "quark:polished_shale",
        "minecraft:calcite": "quark:polished_calcite",
        "minecraft:calcite": "hearth_and_home:polished_calcite",
        "minecraft:dripstone_block": "quark:polished_dripstone",
        "minecraft:tuff": "quark:polished_tuff",
        "minecraft:cobbled_deepslate": "minecraft:polished_deepslate",
        "minecraft:blackstone": "minecraft:polished_blackstone",
        "minecraft:basalt": "minecraft:polished_basalt",

        "minecraft:polished_granite": "create:cut_granite",
        "minecraft:polished_diorite": "create:cut_diorite",
        "minecraft:polished_andesite": "create:cut_andesite",
        "quark:polished_calcite": "create:cut_calcite",
        "quark:polished_dripstone": "create:cut_dripstone",
        "quark:polished_calcite": "create:cut_calcite",
        "minecraft:polished_deepslate": "create:cut_deepslate",
        "quark:polished_tuff": "create:cut_tuff",
        "create:asurine": "create:cut_asurine",
        "create:crimsite": "create:cut_crimsite",
        "create:limestone": "create:cut_limestone",
        "create:ochrum": "create:cut_ochrum",
        "create:scoria": "create:cut_scoria",
        "create:ochrum": "create:cut_ochrum",
        "create:scorchia": "create:cut_scorchia",
        "create:veridium": "create:cut_veridium",

        "architects_palette:abyssaline": "architects_palette:abyssaline_plating",
        "architects_palette:hadaline": "architects_palette:hadaline_plating",

        "architects_palette:nebulite": "architects_palette:polished_nebulite",
        "minecraft:glowstone": "architects_palette:polished_glowstone"
    }

    Object.keys(STONE_POLISHING).forEach(entry =>{
        let id = "modpack:crafting/shapeless/polishing/" + Item.of(STONE_POLISHING[entry]).getMod() + "/" + entry.split(":").pop()
        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless(STONE_POLISHING[entry] ,[entry ,"#create:sandpaper"])
        ).id(id)
    })

    const BRICKS_MAKING = {
        "minecraft:netherrack": "quark:netherrack_bricks",
        "minecraft:end_stone": "minecraft:end_stone_bricks",
        "minecraft:stone": "minecraft:stone_bricks",
        "minecraft:granite": "quark:granite_bricks",
        "minecraft:diorite": "quark:diorite_bricks",
        "minecraft:andesite": "quark:andesite_bricks",
        "quark:limestone": "quark:limestone_bricks",
        "quark:shale": "quark:shale_bricks",
        "quark:myalite": "quark:myalite_bricks",
        "quark:jasper": "quark:jasper_bricks",
        "minecraft:tuff": "quark:tuff_bricks",
        "minecraft:calcite": "quark:calcite_bricks",
        "minecraft:dripstone_block": "quark:dripstone_bricks",
        "minecraft:deepslate": "minecraft:deepslate_bricks",
        "minecraft:blackstone": "minecraft:polished_blackstone_bricks",
        "minecraft:deepslate_bricks": "minecraft:deepslate_tiles",
        "spectrum:polished_basalt": "spectrum:basalt_bricks",
        "spectrum:polished_calcite": "spectrum:calcite_bricks",
        "spectrum:polished_blackslag": "spectrum:blackslag_bricks",
        "spectrum:polished_shale_clay": "spectrum:shale_clay_bricks",
        "spectrum:exposed_polished_shale_clay": "spectrum:exposed_shale_clay_bricks",
        "spectrum:weathered_polished_shale_clay": "spectrum:weathered_shale_clay_bricks",
        "spectrum:polished_basal_marble": "spectrum:basal_marble_bricks",

        "minecraft:packed_ice": "architects_palette:polished_packed_ice",
        "architects_palette:nether_brass_block": "architects_palette:cut_nether_brass",
        "architects_palette:flint_block": "architects_palette:flint_tiles",
        "minecraft:bone_block": "architects_palette:osseous_bricks",
        "architects_palette:withered_bone_block": "architects_palette:withered_osseous_bricks",
        "minecraft:basalt": "architects_palette:basalt_tiles",
        "quark:dripstone_bricks": "architects_palette:dripstone_bricks",
        "quark:calcite_bricks": "architects_palette:calcite_bricks",
        "quark:tuff_bricks": "architects_palette:tuff_bricks",
        "architects_palette:esoterrack": "architects_palette:esoterrack_bricks",
        "architects_palette:wardstone": "architects_palette:wardstone_bricks",
        "architects_palette:onyx": "architects_palette:onyx_bricks",
        "architects_palette:moonshale": "architects_palette:moonshale_bricks",
        "architects_palette:cerebral_block": "architects_palette:cerebral_tiles",
        "architects_palette:oracle_block": "architects_palette:oracle_bricks",
        "architects_palette:oracle_bricks": "architects_palette:oracle_tiles",
        "architects_palette:olivestone_bricks": "architects_palette:olivestone_tiles",
        "architects_palette:abyssaline": "architects_palette:abyssaline_bricks",
        "architects_palette:abyssaline_bricks": "architects_palette:abyssaline_tiles",

        "architects_palette:hadaline": "architects_palette:hadaline_bricks",
        "architects_palette:hadaline_bricks": "architects_palette:hadaline_tiles"


    }

    Object.keys(BRICKS_MAKING).forEach(entry =>{
        let id = "modpack:crafting/shapeless/bricks/" + Item.of(BRICKS_MAKING[entry]).getMod() + "/" + entry.split(":").pop()
        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless(BRICKS_MAKING[entry] ,[entry ,"#tfc:chisels"])
        ).id(id)
    })
})

//  Object.keys(METAL_DATA).forEach(entry =>{
//  event.add("modpack.info.metal." + entry, METAL_DATA[entry])
//  })