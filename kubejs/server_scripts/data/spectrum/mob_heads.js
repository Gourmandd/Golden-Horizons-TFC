// requires: spectrum
// requires: lootjs

// ------------------------------------------------ //
// Script for adding mob head drops to TFC animals  //
// ------------------------------------------------ //

LootJS.modifiers(event => {

    const CHANCE_1 = 0.1
    const CHANCE_2 = 0.2
    const CHANCE_3 = 0.4

    const ENCHANTMENT_CONDITION = {
        "condition": "minecraft:random_chance_with_enchanted_bonus",
        "unenchanted_chance": 0,
        "enchanted_chance": {
            "type": "minecraft:linear",
            "base": 0.1,
            "per_level_above_first": 0.15
        },
        "enchantment": "spectrum:treasure_hunter"
    }

    // Capitalised name since not intended to be modified, like a const, but Rhino really doesnt like consts sometimes.
    let ENTITY_MOB_HEAD_LOOT = {
        "tfc:cow": "spectrum:cow_head",
        "tfc:salmon": "spectrum:salmon_head",
        "tfc:tropical_fish": "spectrum:tropical_fish_head",
        "tfc:pufferfish": "spectrum:pufferfish_head",
        "tfc:dolphin": "spectrum:dolphin_head",
        "tfc:squid": "spectrum:squid_head",
        "tfc:octopoteuthis": "spectrum:glow_squid_head",
        "tfc:turtle": "spectrum:turtle_head",
        "tfc:polar_bear": "spectrum:polar_bear_head",
        "tfc:wolf": "spectrum:wolf_head",
        "tfc:pig": "spectrum:pig_head",
        "tfc:goat": "spectrum:goat_head",
        "tfc:alpaca": "spectrum:llama_head",
        "tfc:sheep": "spectrum:sheep_head",
        "tfc:chicken": "spectrum:chicken_head",
        "tfc:rabbit": "spectrum:rabbit_head",
        "tfc:panda": "spectrum:panda_head",
        "tfc:ocelot": "spectrum:ocelot_head",
        "tfc:donkey": "spectrum:donkey_head",
        "tfc:mule": "spectrum:mule_head",
        "tfc:horse": "spectrum:horse_head",
        "tfc:cat": "spectrum:cat_head",
        "tfc:dog": "spectrum:wolf_head"
    }




    Object.keys(ENTITY_MOB_HEAD_LOOT).forEach(entity => {
        event.addEntityModifier(entity)
            .addLoot(
                LootEntry.of(ENTITY_MOB_HEAD_LOOT[entity]).matchCustomCondition(ENCHANTMENT_CONDITION)
            )
    })

    // /summon tfc:frog 19.64 -60.00 -2.51 {variant:"minecraft:warm",CustomName:'"Powered Creeper"'} // you can use this to test.
    let MOB_VARIANT_HEAD_LOOT = {
        "snow": { "type": "tfc:fox", "head": "spectrum:fox_arctic_head", "nbt": "Type" },
        "red": { "type": "tfc:fox", "head": "spectrum:fox_red_head", "nbt": "Type" },
        "minecraft:temperate": { "type": "tfc:frog", "head": "spectrum:frog_temperate_head", "nbt": "variant" },
        "minecraft:warm": { "type": "tfc:frog", "head": "spectrum:frog_warm_head", "nbt": "variant" },
        "minecraft:cold": { "type": "tfc:frog", "head": "spectrum:frog_cold_head", "nbt": "variant" }
    }


    Object.keys(MOB_VARIANT_HEAD_LOOT).forEach(variant => {

        let ID = MOB_VARIANT_HEAD_LOOT[variant].type
        let head = MOB_VARIANT_HEAD_LOOT[variant].head
        let NBTkey = MOB_VARIANT_HEAD_LOOT[variant].nbt

        event.addEntityModifier(ID)
            .matchEntityCustom((entity) => entity.getNbt().get(NBTkey) == variant)
            .addLoot(head).matchCustomCondition(ENCHANTMENT_CONDITION)
    })

    event.addEntityModifier("minecraft:wither_skeleton").replaceLoot("minecraft:coal", "tfc:ore/lignite").removeLoot("minecraft:stone_sword")
    event.addEntityModifier("minecraft:piglin").removeLoot("minecraft:golden_sword")
    event.addEntityModifier("minecraft:zombified_piglin").removeLoot("minecraft:golden_sword")
})
