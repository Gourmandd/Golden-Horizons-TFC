ServerEvents.tags("item", event => {

    let new_entries = []

    const ASSORTED = [
        "#c:ores",
        "#tfc:ore_deposits",
        "#architects_palette:cage_lanterns",
        "minecraft:suspicious_stew",
        "#minecraft:trim_templates",
        "#pastel:spawn_eggs",
        "#c:shulker_boxes", //this should be revealed when you get shulker memory (custom advancement)
        "minecraft:enchanted_book", //this should be revealed when you get enchanter instead
        "#minecraft:candles",
        "pastel:infested_blackslag",
        "minecraft:carrot",
        "minecraft:potato",
        "minecraft:baked_potato",
        "farmersdelight:carrot_crate",
        "farmersdelight:potato_crate",
        "farmersdelight:beetroot_crate",
        "farmersdelight:cabbage_crate",
        "farmersdelight:tomato_crate",
        "farmersdelight:onion_crate",
        "#farmersdelight:wild_crops"
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

    const EPIC_KNIGHTS_UNUSED_MATERIALS = [
        "wood",
        "stone",
        "tin",
        "copper",
        "silver",
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

    function addVanillaWoodType(type){

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

    function addVanillaStoneType(type){

        new_entries.push(`minecraft:${type}`)
        new_entries.push(`minecraft:${type}_stairs`)
        new_entries.push(`minecraft:${type}_slab`)
        new_entries.push(`minecraft:${type}_wall`)
        new_entries.push(`minecraft:polished_${type}`)
        new_entries.push(`minecraft:polished_${type}_stairs`)
        new_entries.push(`minecraft:polished_${type}_slab`)
        new_entries.push(`minecraft:polished_${type}_wall`)
    }

    function addToolType(type){
        new_entries.push(`minecraft:${type}_shovel`)
        new_entries.push(`minecraft:${type}_pickaxe`)
        new_entries.push(`minecraft:${type}_axe`)
        new_entries.push(`minecraft:${type}_hoe`)
        new_entries.push(`minecraft:${type}_sword`)
    }

    function addArmourType(type){
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

        if (type == "mangrove"){
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

        if (type == "wooden" || type == "stone"){
            addToolType(type)
            return
        }

        if (type == "chainmail"){
            addArmourType(type)
            return
        }

        addToolType(type)
        addArmourType(type)
    })

    EPIC_KNIGHTS_UNUSED_MATERIALS.forEach(material => {
        new_entries.push(`magistuarmory:${material}_stylet`)
        new_entries.push(`magistuarmory:${material}_shortsword`)
        new_entries.push(`magistuarmory:${material}_katzbalger`)
        new_entries.push(`magistuarmory:${material}_pike`)
        new_entries.push(`magistuarmory:${material}_ranseur`)
        new_entries.push(`magistuarmory:${material}_ahlspiess`)
        new_entries.push(`magistuarmory:${material}_chivalrylance`)
        new_entries.push(`magistuarmory:${material}_bastardsword`)
        new_entries.push(`magistuarmory:${material}_estoc`)
        new_entries.push(`magistuarmory:${material}_claymore`)
        new_entries.push(`magistuarmory:${material}_zweihander`)
        new_entries.push(`magistuarmory:${material}_flamebladedsword`)
        new_entries.push(`magistuarmory:${material}_lochaberaxe`)
        new_entries.push(`magistuarmory:${material}_concavehalberd`)
        new_entries.push(`magistuarmory:${material}_heavymace`)
        new_entries.push(`magistuarmory:${material}_heavywarhammer`)
        new_entries.push(`magistuarmory:${material}_lucernhammer`)
        new_entries.push(`magistuarmory:${material}_morgenstern`)
        new_entries.push(`magistuarmory:${material}_chainmorgenstern`)
        new_entries.push(`magistuarmory:${material}_guisarme`)

        if (material != "wood"){
            new_entries.push(`magistuarmory:${material}_heatershield`)
            new_entries.push(`magistuarmory:${material}_target`)
            new_entries.push(`magistuarmory:${material}_buckler`)
            new_entries.push(`magistuarmory:${material}_rondache`)
            new_entries.push(`magistuarmory:${material}_tartsche`)
            new_entries.push(`magistuarmory:${material}_ellipticalshield`)
            new_entries.push(`magistuarmory:${material}_roundshield`)    
            new_entries.push(`magistuarmory:${material}_pavese`)
            new_entries.push(`magistuarmory:${material}_kiteshield`)
        }
    })

    event.add("c:hidden_from_recipe_viewers", new_entries)
    event.add("c:hidden_from_recipe_viewers", Ingredient.of(/spawn_egg.*/).itemIds)
    event.add("c:hidden_from_recipe_viewers", Ingredient.of(/caupona:.*loaf.*/).itemIds)
})