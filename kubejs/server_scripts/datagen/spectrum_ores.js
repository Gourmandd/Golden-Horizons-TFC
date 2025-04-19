
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


ServerEvents.highPriorityData(event =>{
    // "kubejs:ore/shimmerstone/granite": "tfc:rock/raw/granite"
    let shimmerstone_revelation =  {
        "advancement": "spectrum:milestones/reveal_shimmerstone",
        "block_states": {}
    }
    
    let azurite_revelation =  {
        "advancement": "spectrum:milestones/reveal_azurite",
        "block_states": {}
    }

    let paltaeria_revelation =  {
        "advancement": "spectrum:milestones/reveal_paltaeria",
        "block_states": {}
    }

    let stratine_revelation =  {
        "advancement": "spectrum:milestones/reveal_stratine",
        "block_states": {}
    }

    global.ROCK_TYPES.forEach(rockType =>{
        let key = ""
        let value = "tfc:rock/raw/" + rockType

        key = "kubejs:ore/shimmerstone/" + rockType
        shimmerstone_revelation.block_states[key] = value

        key = "kubejs:ore/azurite/" + rockType
        azurite_revelation.block_states[key] = value

        key = "kubejs:ore/stratine/" + rockType
        stratine_revelation.block_states[key] = value

        key = "kubejs:ore/paltaeria/" + rockType
        paltaeria_revelation.block_states[key] = value
    })

    console.log(stratine_revelation)
    console.log(shimmerstone_revelation)
    console.log(azurite_revelation)

    event.addJson("modpack:revelations/shimmerstone_ores", shimmerstone_revelation)
    event.addJson("modpack:revelations/azurite_ores", azurite_revelation)
    event.addJson("modpack:revelations/stratine_ores", stratine_revelation)
    event.addJson("modpack:revelations/paltaeria_ores", paltaeria_revelation)
})

// Useful to have: /kill @e[type=tfc:falling_block] when using tfc clearworld