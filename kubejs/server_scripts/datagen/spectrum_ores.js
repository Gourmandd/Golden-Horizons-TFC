LootJS.modifiers(event =>{

    const SPECTRUM_ORE_DATA = {
        "shimmerstone": {"drop": "spectrum:shimmerstone_gem", "tier": "tfc:needs_copper_tool"},
        "azurite": {"drop": "spectrum:raw_azurite", "tier": "tfc:needs_steel_tool"},
        "stratine": {"drop": "spectrum:stratine_fragments", "tier": "tfc:needs_steel_tool"},
        "paltaeria": {"drop": "spectrum:paltaeria_fragments", "tier": "tfc:needs_black_steel_tool"},
        "malachite": {"drop": "spectrum:raw_malachite", "tier": "tfc:needs_steel_tool"}
    }

    global.SPECTRUM_OVERWORLD_ORES.forEach(ore => {

        global.ROCK_TYPES.forEach(rockType =>{
            
            if (ore == "paltaeria" || ore == "stratine"){
                event.addBlockLootModifier(`kubejs:ore/${ore}/${rockType}`).removeLoot(`kubejs:ore/${ore}/${rockType}`)
                    .addLoot(SPECTRUM_ORE_DATA[ore].drop).addLoot(SPECTRUM_ORE_DATA[ore].drop).randomChance(0.5).addLoot(SPECTRUM_ORE_DATA[ore].drop).randomChance(0.25)
                return
            }
            event.addBlockLootModifier(`kubejs:ore/${ore}/${rockType}`).removeLoot(`kubejs:ore/${ore}/${rockType}`)
                .addLoot(SPECTRUM_ORE_DATA[ore].drop)
        })

        global.DEEPER_DOWN_ROCK_TYPES.forEach(rockType =>{

            if (ore == "paltaeria" || ore == "stratine"){
                event.addBlockLootModifier(`kubejs:ore/${ore}/${rockType}`).removeLoot(`kubejs:ore/${ore}/${rockType}`)
                    .addLoot(SPECTRUM_ORE_DATA[ore].drop).addLoot(SPECTRUM_ORE_DATA[ore].drop).randomChance(0.5).addLoot(SPECTRUM_ORE_DATA[ore].drop).randomChance(0.25)
                return
            }
            event.addBlockLootModifier(`kubejs:ore/${ore}/${rockType}`).removeLoot(`kubejs:ore/${ore}/${rockType}`)
                .addLoot(SPECTRUM_ORE_DATA[ore].drop)
        })
    })

    global.SPECTRUM_DEEPER_DOWN_ORES.forEach(ore => {

        global.ROCK_TYPES.forEach(rockType =>{
            event.addBlockLootModifier(`kubejs:ore/${ore}/${rockType}`).removeLoot(`kubejs:ore/${ore}/${rockType}`)
                .addLoot(SPECTRUM_ORE_DATA[ore].drop)
        })

        global.DEEPER_DOWN_ROCK_TYPES.forEach(rockType =>{
            event.addBlockLootModifier(`kubejs:ore/${ore}/${rockType}`).removeLoot(`kubejs:ore/${ore}/${rockType}`)
                .addLoot(SPECTRUM_ORE_DATA[ore].drop)
        })
    })

    const ORE_BLOCK_GRADES = [
        "normal",
        "poor",
        "rich",
    ]
    
    global.DEEPER_DOWN_ROCK_TYPES.forEach(rockType =>{
        global.TFC_MINERALS.forEach(ore =>{
            event.addBlockLootModifier(`kubejs:ore/${ore}/${rockType}`).removeLoot(`kubejs:ore/${ore}/${rockType}`)
                .addLoot("tfc:ore/" + ore)
        })

        global.TFC_GEMS.forEach(ore =>{
            event.addBlockLootModifier(`kubejs:ore/${ore}/${rockType}`).removeLoot(`kubejs:ore/${ore}/${rockType}`)
                .addLoot("tfc:ore/" + ore)
        })

        global.TFC_ORES.forEach(ore =>{
            event.addBlockLootModifier(`kubejs:ore/poor_${ore}/${rockType}`).removeLoot(`kubejs:ore/poor_${ore}/${rockType}`)
                .addLoot("tfc:ore/poor_" + ore)
            event.addBlockLootModifier(`kubejs:ore/normal_${ore}/${rockType}`).removeLoot(`kubejs:ore/normal_${ore}/${rockType}`)
                .addLoot("tfc:ore/normal_" + ore)
            event.addBlockLootModifier(`kubejs:ore/rich_${ore}/${rockType}`).removeLoot(`kubejs:ore/rich_${ore}/${rockType}`)
                .addLoot("tfc:ore/rich_" + ore)
        })

        global.FIRMALIFE_ORES.forEach(ore =>{
            ORE_BLOCK_GRADES.forEach(grade =>{
                event.addBlockLootModifier(`kubejs:ore/poor_${ore}/${rockType}`).removeLoot(`kubejs:ore/poor_${ore}/${rockType}`)
                    .addLoot("firmalife:ore/poor_" + ore)
                event.addBlockLootModifier(`kubejs:ore/normal_${ore}/${rockType}`).removeLoot(`kubejs:ore/normal_${ore}/${rockType}`)
                    .addLoot("firmalife:ore/normal_" + ore)
                event.addBlockLootModifier(`kubejs:ore/rich_${ore}/${rockType}`).removeLoot(`kubejs:ore/rich_${ore}/${rockType}`)
                    .addLoot("firmalife:ore/rich_" + ore)
            })
        })
    })
})

ServerEvents.tags("item", event =>{

    global.ROCK_TYPES.forEach(rockType =>{

        event.add("spectrum:shimmerstone_ores", `kubejs:ore/shimmerstone/${rockType}`)
        event.add("spectrum:azurite_ores", `kubejs:ore/azurite/${rockType}`)
    })
})

ServerEvents.tags("block", event =>{

    global.ROCK_TYPES.forEach(rockType =>{

        event.add("spectrum:shimmerstone_ores", `kubejs:ore/shimmerstone/${rockType}`)
        event.add("spectrum:azurite_ores", `kubejs:ore/azurite/${rockType}`)
    })
})

// Useful to have: /kill @e[type=tfc:falling_block] when using tfc clearworld