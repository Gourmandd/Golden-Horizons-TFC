// requires: pastel
// requires: lootjs

// ------------------------------------------------ //
// Script for adding mob head drops to TFC animals  //
// ------------------------------------------------ //

LootJS.modifiers(event => {

    const CHANCE_1 = 0.1
    const CHANCE_2 = 0.2
    const CHANCE_3 = 0.4

    // Capitalised name since not intended to be modified, like a const, but Rhino really doesnt like consts sometimes.
    let ENTITY_MOB_HEAD_LOOT = {
        "tfc:cow": "pastel:cow_head",
        "tfc:salmon": "pastel:salmon_head",
        "tfc:tropical_fish": "pastel:tropical_fish_head",
        "tfc:pufferfish": "pastel:pufferfish_head",
        "tfc:dolphin": "pastel:dolphin_head",
        "tfc:squid": "pastel:squid_head",
        "tfc:octopoteuthis": "pastel:glow_squid_head",
        "tfc:turtle": "pastel:turtle_head",
        "tfc:polar_bear": "pastel:polar_bear_head",
        "tfc:wolf": "pastel:wolf_head",
        "tfc:pig": "pastel:pig_head",
        "tfc:goat": "pastel:goat_head",
        "tfc:alpaca": "pastel:llama_head",
        "tfc:sheep": "pastel:sheep_head",
        "tfc:chicken": "pastel:chicken_head",
        "tfc:rabbit": "pastel:rabbit_head",
        "tfc:panda": "pastel:panda_head",
        "tfc:ocelot": "pastel:ocelot_head",
        "tfc:donkey": "pastel:donkey_head",
        "tfc:mule": "pastel:mule_head",
        "tfc:horse": "pastel:horse_head",
        "tfc:cat": "pastel:cat_head",
        "tfc:dog": "pastel:wolf_head"
    }


    Object.keys(ENTITY_MOB_HEAD_LOOT).forEach(entity => {
        event.addEntityModifier(entity)
            .randomChanceWithEnchantment("pastel:treasure_hunter", [0, CHANCE_1, CHANCE_2, CHANCE_3])
            .addLoot(ENTITY_MOB_HEAD_LOOT[entity])
    })



    let MOB_VARIANT_HEAD_LOOT = {
        "red": {"type": "tfc:fox", "head": "pastel:fox_head", "nbt": "Type"},
        "snow": {"type": "tfc:fox", "head": "pastel:fox_arctic_head", "nbt": "Type"},
        "minecraft:temperate": {"type": "tfc:frog", "head": "pastel:frog_temperate_head", "nbt": "variant"},
        "minecraft:warm": {"type": "tfc:frog", "head": "pastel:frog_warm_head", "nbt": "variant"},
        "minecraft:cold": {"type": "tfc:frog", "head": "pastel:frog_cold_head", "nbt": "variant"}
    }


    Object.keys(MOB_VARIANT_HEAD_LOOT).forEach(variant => {

        let ID = MOB_VARIANT_HEAD_LOOT[variant].type
        let head = MOB_VARIANT_HEAD_LOOT[variant].head
        let NBTkey = MOB_VARIANT_HEAD_LOOT[variant].nbt

        event.addEntityModifier(ID)
            .matchEntityCustom((entity) => entity.getNbt().get(NBTkey) == variant)
            .randomChanceWithEnchantment("pastel:treasure_hunter", [0, CHANCE_1, CHANCE_2, CHANCE_3])
            .addLoot(head)
    })

    event.addEntityModifier("minecraft:wither_skeleton").replaceLoot("minecraft:coal", "tfc:ore/lignite").removeLoot("minecraft:stone_sword")
    event.addEntityModifier("minecraft:piglin").removeLoot("minecraft:golden_sword")
    event.addEntityModifier("minecraft:zombified_piglin").removeLoot("minecraft:golden_sword")
})