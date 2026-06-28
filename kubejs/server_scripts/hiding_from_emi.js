ServerEvents.tags("item", event => {

    let new_entries = []

    const ASSORTED = [
        "minecraft:dead_tube_coral_fan",
        "minecraft:dead_tube_coral",
        "minecraft:dead_horn_coral",
        "minecraft:dead_horn_coral_fan",
        "minecraft:dead_fire_coral",
        "minecraft:dead_fire_coral_fan",
        "minecraft:dead_bubble_coral",
        "minecraft:dead_bubble_coral_fan",
        "minecraft:dead_brain_coral",
        "minecraft:dead_brain_coral_fan",
        "minecraft:tube_coral_fan",
        "minecraft:tube_coral",
        "minecraft:horn_coral",
        "minecraft:horn_coral_fan",
        "minecraft:fire_coral",
        "minecraft:fire_coral_fan",
        "minecraft:bubble_coral",
        "minecraft:bubble_coral_fan",
        "minecraft:brain_coral",
        "minecraft:brain_coral_fan",
        "#lithiccoins:stamped_coin/constantan",
        "lithiccoins:blank_coin/constantan",
        "#lithiccoins:stamped_coin/uranium",
        "lithiccoins:blank_coin/uranium",
        "#c:ores",
        "#tfc:wild_crops",
        "#tfc:ore_deposits",
        "#architects_palette:cage_lanterns",
        "minecraft:suspicious_stew",
        "#minecraft:trim_templates",
        "#pastel:spawn_eggs",
        "#c:shulker_boxes", //this should be revealed when you get shulker memory (custom advancement)
        "minecraft:enchanted_book", //this should be revealed when you get enchanter instead
        "#minecraft:candles",
        "pastel:infested_blackslag",
        "firmalife:food/fig",
        "firmalife:food/bacon",
        "firmalife:food/cooked_bacon",
        "minecraft:carrot",
        "minecraft:potato",
        "minecraft:baked_potato",
        "farmersdelight:rice",
        "farmersdelight:rice_bag",
        "farmersdelight:carrot_crate",
        "farmersdelight:potato_crate",
        "farmersdelight:beetroot_crate",
        "farmersdelight:cabbage_crate",
        "farmersdelight:tomato_crate",
        "farmersdelight:onion_crate",
        "farmersdelight:chicken_sandwich",
        "farmersdelight:egg_sandwich",
        "farmersdelight:bacon_sandwich",
        "farmersdelight:hamburger",
        "farmersdelight:mutton_wrap",
        "farmersdelight:fruit_salad",
        "farmersdelight:mixed_salad",
        "farmersdelight:nether_salad",
        "farmersdelight:glow_berry_custard",
        "farmersdelight:cooked_rice",
        "rusticdelight:potato_salad",
        "rusticdelight:sweet_salad",
        "firmalife:food/maki_roll",
        "firmalife:food/futo_maki_roll",
        "#farmersdelight:wild_crops",
        "minecraft:cookie",
        "minecraft:glow_berries",
        "minecraft:sweet_berries",
        "minecraft:beetroot",
        "minecraft:tropical_fish",
        "minecraft:chicken",
        "minecraft:cooked_chicken",
        "minecraft:dried_kelp",
        "minecraft:melon_slice",
        "minecraft:beef",
        "minecraft:cooked_beef",
        "minecraft:rabbit",
        "minecraft:cooked_rabbit",
        "minecraft:porkchop",
        "minecraft:cooked_porkchop",
        "minecraft:carrot",
        "minecraft:bread",
        "minecraft:potato",
        "minecraft:baked_potato",
        "minecraft:cod",
        "minecraft:cooked_cod",
        "minecraft:salmon",
        "minecraft:cooked_salmon",
        "minecraft:mutton",
        "minecraft:cooked_mutton",
        "minecraft:apple",
        "minecraft:wheat",
        "farmersdelight:onion",
        "farmersdelight:cabbage",
        "farmersdelight:tomato",
        "farmersdelight:rotten_tomato",
        "farmersdelight:flint_knife",
        "farmersdelight:iron_knife",
        "farmersdelight:golden_knife",
        "farmersdelight:diamond_knife",
        "farmersdelight:netherite_knife",
        "firmalife:food/flavourful_cooked_rice",
        "firmalife:food/rice_pilaf",
        "firmalife:food/raw_lasagna",
        "firmalife:food/cooked_lasagna",
        "firmalife:food/pasta_with_tomato_sauce",
        "firmalife:food/tomato_sauce",
        "firmalife:food/tomato_sauce_mix",
        "firmalife:food/raw_egg_noodles",
        "firmalife:food/raw_rice_noodles",
        "firmalife:food/raw_egg_noodles",
        "firmalife:food/cooked_pasta",
        "firmalife:food/cooked_rice_noodles",
        "survivorsdelight:golden_carrot",
        "survivorsdelight:gold_flake",
        "rusticdelight:cooking_oil",
        "createaddition:cake_base",
        "createaddition:cake_base_baked",
        "create:dough",
        "tfc:sandpaper",
        "farmersdelight:wheat_dough",
        "farmersdelight:straw",
        "farmersdelight:straw_bale",
        "minecraft:packed_mud",
        "minecraft:mud_bricks",
        "minecraft:mud_brick_slab",
        "minecraft:mud_brick_stairs",
        "minecraft:mud_brick_wall",
        "quark:thatch",
        "quark:thatch_slab",
        "quark:thatch_stairs",
        "tfc:thatch_bed",
        "tfc:firepit",
        "tfc:grill",
        "tfc:pot",
        "tfc:stove",
        "tfc:stove_pot",
        "immersive_aircraft:gyrodyne",
        "immersive_aircraft:quadrocopter",
        "createaddition:digital_adapter",
        "moonlight:spawn_box",
        "modpack:ore/quartz", // debug item
        "#caupona:stews",
        "caupona:sapa_spice_jar",
        "caupona:asafoetida_spice_jar",
        "caupona:chives_spice_jar",
        "caupona:sauteed_hodgepodge",
        "spectrum:calcite_stairs",
        "spectrum:calcite_slab",
        "spectrum:calcite_wall",


        // copper

        "minecraft:copper_block",
        "minecraft:waxed_copper_block",
        "minecraft:exposed_copper",
        "minecraft:waxed_exposed_copper",
        "minecraft:weathered_copper",
        "minecraft:waxed_weathered_copper",
        "minecraft:oxidized_copper",
        "minecraft:waxed_oxidized_copper",

        "minecraft:cut_copper",
        "minecraft:waxed_cut_copper",
        "minecraft:exposed_cut_copper",
        "minecraft:waxed_exposed_cut_copper",
        "minecraft:weathered_cut_copper",
        "minecraft:waxed_weathered_cut_copper",
        "minecraft:oxidized_cut_copper",
        "minecraft:waxed_oxidized_cut_copper",

        "minecraft:cut_copper_slab",
        "minecraft:waxed_cut_copper_slab",
        "minecraft:exposed_cut_copper_slab",
        "minecraft:waxed_exposed_cut_copper_slab",
        "minecraft:weathered_cut_copper_slab",
        "minecraft:waxed_weathered_cut_copper_slab",
        "minecraft:oxidized_cut_copper_slab",
        "minecraft:waxed_oxidized_cut_copper_slab",

        "minecraft:cut_copper_stairs",
        "minecraft:waxed_cut_copper_stairs",
        "minecraft:exposed_cut_copper_stairs",
        "minecraft:waxed_exposed_cut_copper_stairs",
        "minecraft:weathered_cut_copper_stairs",
        "minecraft:waxed_weathered_cut_copper_stairs",
        "minecraft:oxidized_cut_copper_stairs",
        "minecraft:waxed_oxidized_cut_copper_stairs",

        "minecraft:chiseled_copper",
        "minecraft:waxed_chiseled_copper",
        "minecraft:exposed_chiseled_copper",
        "minecraft:waxed_exposed_chiseled_copper",
        "minecraft:weathered_chiseled_copper",
        "minecraft:waxed_weathered_chiseled_copper",
        "minecraft:oxidized_chiseled_copper",
        "minecraft:waxed_oxidized_chiseled_copper",

        // unused ingots
        "minecraft:iron_ingot",
        "minecraft:copper_ingot",
        "minecraft:gold_ingot",
        "create:zinc_ingot",
        "create:brass_ingot",
        "create:andesite_alloy",
        "caupona:lead_ingot",
        "createbigcannons:steel_ingot",
        "createbigcannons:bronze_ingot",
        "createbigcannons:nethersteel_ingot",
        "createbigcannons:cast_iron_ingot",
        "createaddition:electrum_ingot",
    ]

    const VANILLA_WOOD_TYPES = [
        "oak",
        "dark_oak",
        "birch",
        "spruce",
        "jungle",
        "acacia",
        "cherry",
        "mangrove"
    ]

    const VANILLA_STEM_TYPES = [
        "crimson",
        "warped"
    ]

    const VANILLA_STONE_TYPES = [
        "granite",
        "diorite",
        "andesite"
    ]

    const EQUIPMENT_TYPES = [
        "wooden",
        "stone",
        "leather",
        "chainmail",
        "iron",
        "golden",
        "diamond",
        "netherite"
    ]

    const INFESTED_BLOCKS = [
        "stone",
        "cobblestone",
        "stone_bricks",
        "mossy_stone_bricks",
        "cracked_stone_bricks",
        "chiseled_stone_bricks",
        "deepslate"
    ]

    function addVanillaWoodType(type) {

        new_entries.push(`minecraft:${type}_planks`)
        new_entries.push(`minecraft:${type}_stairs`)
        new_entries.push(`minecraft:${type}_slab`)
        new_entries.push(`minecraft:${type}_fence_gate`)
        new_entries.push(`minecraft:${type}_fence`)
        new_entries.push(`minecraft:${type}_door`)
        new_entries.push(`minecraft:${type}_trapdoor`)
        new_entries.push(`minecraft:${type}_button`)
        new_entries.push(`minecraft:${type}_pressure_plate`)
        new_entries.push(`minecraft:${type}_sign`)
        new_entries.push(`minecraft:${type}_hanging_sign`)

        new_entries.push(`architects_palette:${type}_boards`)
        new_entries.push(`architects_palette:${type}_board_slab`)
        new_entries.push(`architects_palette:${type}_board_stairs`)
        new_entries.push(`architects_palette:${type}_board_wall`)
        new_entries.push(`architects_palette:${type}_railing`)

        new_entries.push(`farmersdelight:${type}_cabinet`)

        new_entries.push(`shutter:${type}_shutter`)
    }

    function addVanillaStoneType(type) {

        new_entries.push(`minecraft:${type}`)
        new_entries.push(`minecraft:${type}_stairs`)
        new_entries.push(`minecraft:${type}_slab`)
        new_entries.push(`minecraft:${type}_wall`)
        new_entries.push(`minecraft:polished_${type}`)
        new_entries.push(`minecraft:polished_${type}_stairs`)
        new_entries.push(`minecraft:polished_${type}_slab`)
        new_entries.push(`minecraft:polished_${type}_wall`)
    }

    function addToolType(type) {
        new_entries.push(`minecraft:${type}_shovel`)
        new_entries.push(`minecraft:${type}_pickaxe`)
        new_entries.push(`minecraft:${type}_axe`)
        new_entries.push(`minecraft:${type}_hoe`)
        new_entries.push(`minecraft:${type}_sword`)
    }

    function addArmourType(type) {
        new_entries.push(`minecraft:${type}_helmet`)
        new_entries.push(`minecraft:${type}_leggings`)
        new_entries.push(`minecraft:${type}_chestplate`)
        new_entries.push(`minecraft:${type}_boots`)
    }

    //
    // adding stuff past here
    //

    ASSORTED.forEach(entry => {
        new_entries.push(entry)
    })

    VANILLA_WOOD_TYPES.forEach(type => {
        new_entries.push(`minecraft:${type}_log`)
        new_entries.push(`minecraft:${type}_wood`)
        new_entries.push(`minecraft:stripped_${type}_log`)
        new_entries.push(`minecraft:stripped_${type}_wood`)
        new_entries.push(`minecraft:${type}_leaves`)

        new_entries.push(`minecraft:${type}_boat`)
        new_entries.push(`minecraft:${type}_chest_boat`)

        if (type == "mangrove") {
            new_entries.push(`minecraft:mangrove_propagule`)
        } else {
            new_entries.push(`minecraft:${type}_sapling`)
        }

        addVanillaWoodType(type)
    })

    INFESTED_BLOCKS.forEach(block => {
        new_entries.push(`minecraft:infested_${block}`)
    })

    VANILLA_STEM_TYPES.forEach(type => {
        new_entries.push(`minecraft:${type}_stem`)
        new_entries.push(`minecraft:${type}_hyphae`)
        new_entries.push(`minecraft:stripped_${type}_stem`)
        new_entries.push(`minecraft:stripped_${type}_hyphae`)
        new_entries.push(`minecraft:${type}_fungus`)
        new_entries.push(`minecraft:${type}_nylium`)
        new_entries.push(`minecraft:${type}_roots`)

        new_entries.push(`create:${type}_window`)
        new_entries.push(`create:${type}_window_pane`)

        addVanillaWoodType(type)
    })

    VANILLA_STONE_TYPES.forEach(type => {
        addVanillaStoneType(type)
    })

    EQUIPMENT_TYPES.forEach(type => {

        if (type == "wooden" || type == "stone") {
            addToolType(type)
            return
        }

        if (type == "chainmail") {
            addArmourType(type)
            return
        }

        addToolType(type)
        addArmourType(type)
    })

    event.add("c:hidden_from_recipe_viewers", new_entries)
    event.add("c:hidden_from_recipe_viewers", Ingredient.of(/spawn_egg.*/).itemIds)
    event.add("c:hidden_from_recipe_viewers", Ingredient.of(/caupona:.*loaf.*/).itemIds)

    delete new_entries

    global.EMI.BASIC_BLOCKS.forEach(id => {

        if (!(id.includes("quark") || id.includes("tfc") || id.includes("modpack") || id.includes("caupona"))) {
            id = id.replace("bricks", "brick").replace("tiles", "tile")
        }

        event.add("c:hidden_from_recipe_viewers", id + "_stairs")
        event.add("c:hidden_from_recipe_viewers", id + "_slab")
        event.add("c:hidden_from_recipe_viewers", id + "_wall")
    })

    global.EMI.LIMITED_BLOCKS.forEach(id => {

        if (!(id.includes("quark") || id.includes("tfc") || id.includes("modpack") || id.includes("caupona"))) {
            id = id.replace("bricks", "brick").replace("tiles", "tile").replace("shingles", "shingle")
        }

        if (id.includes("bamboo_planks")) {
            id = id.replace("_planks", "")
        }

        if (id.includes("purpur_block")) {
            id = id.replace("_block", "")
        }

        if (id.includes("quartz_block")) {
            id = id.replace("_block", "")
        }

        if (id.includes("spectrum")) {
            id = id.replace("_planks", "")
        }

        event.add("c:hidden_from_recipe_viewers", id + "_stairs")
        event.add("c:hidden_from_recipe_viewers", id + "_slab")
    })

    global.EMI.BASIC_BLOCKS_CUSTOM.forEach(id => {

        event.add("c:hidden_from_recipe_viewers", id.stairs)
        event.add("c:hidden_from_recipe_viewers", id.slab)
        event.add("c:hidden_from_recipe_viewers", id.wall)
    })

    global.EMI.AP_BASIC_BLOCKS.forEach(id => {

        id = id.replace("bricks", "brick").replace("tiles", "tile").replace("boards", "board").replace("_block", "")

        event.add("c:hidden_from_recipe_viewers", id + "_stairs")
        event.add("c:hidden_from_recipe_viewers", id + "_slab")
        event.add("c:hidden_from_recipe_viewers", id + "_wall")
        event.add("c:hidden_from_recipe_viewers", id + "_vertical_slab")
    })

    global.EMI.AP_BLOCKS_NO_WALLS.forEach(id => {

        id = id.replace("bricks", "brick").replace("tiles", "tile").replace("boards", "board").replace("_block", "")

        event.add("c:hidden_from_recipe_viewers", id + "_stairs")
        event.add("c:hidden_from_recipe_viewers", id + "_slab")
        event.add("c:hidden_from_recipe_viewers", id + "_vertical_slab")
    })

    global.EMI.AP_BLOCKS_NO_WALLS_AND_STAIRS.forEach(id => {

        id = id.replace("bricks", "brick").replace("tiles", "tile").replace("boards", "board").replace("_block", "")

        event.add("c:hidden_from_recipe_viewers", id + "_slab")
        event.add("c:hidden_from_recipe_viewers", id + "_vertical_slab")
    })

    event.add("c:hidden_from_recipe_viewers", "burningblock:burnt_stairs")
    event.add("c:hidden_from_recipe_viewers", "burningblock:burnt_slab")
})
