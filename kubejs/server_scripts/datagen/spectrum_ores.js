
LootJS.modifiers(event =>{

    const SPECTRUM_ORE_DATA = {
        "shimmerstone": {"drop": "spectrum:shimmerstone_gem", "tier": "tfc:needs_copper_tool"},
        "azurite": {"drop": "spectrum:raw_azurite", "tier": "tfc:needs_steel_tool"},
        "stratine": {"drop": "spectrum:stratine_fragments", "tier": "tfc:needs_steel_tool"},
        "paltaeria": {"drop": "spectrum:paltaeria_fragments", "tier": "tfc:needs_black_steel_tool"}
    }

    global.SPECTRUM_OVERWORLD_ORES.forEach(ore => {

        global.ROCK_TYPES.forEach(rockType =>{
            
            if (ore == "paltaeria" || ore == "stratine"){
                event.addBlockLootModifier("kubejs:ore/" + ore + "/" + rockType).removeLoot("kubejs:ore/" + ore + "/" + rockType)
                    .addLoot(SPECTRUM_ORE_DATA[ore].drop).addLoot(SPECTRUM_ORE_DATA[ore].drop).randomChance(0.5).addLoot(SPECTRUM_ORE_DATA[ore].drop).randomChance(0.25)
                return
            }
            event.addBlockLootModifier("kubejs:ore/" + ore + "/" + rockType).removeLoot("kubejs:ore/" + ore + "/" + rockType)
                .addLoot(SPECTRUM_ORE_DATA[ore].drop)
        })
    })
})

ServerEvents.tags("item", event =>{

    global.ROCK_TYPES.forEach(rockType =>{

        event.add("spectrum:shimmerstone_ores", "kubejs:ore/shimmerstone/" + rockType)
        event.add("spectrum:azurite_ores", "kubejs:ore/azurite/" + rockType)
    })
})

ServerEvents.tags("block", event =>{

    global.ROCK_TYPES.forEach(rockType =>{

        event.add("spectrum:shimmerstone_ores", "kubejs:ore/shimmerstone/" + rockType)
        event.add("spectrum:azurite_ores", "kubejs:ore/azurite/" + rockType)
    })
})

// Useful to have: /kill @e[type=tfc:falling_block] when using tfc clearworld