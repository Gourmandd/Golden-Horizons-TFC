ServerEvents.tags("item", event =>{

    global.ROCK_TYPES.forEach(rockType =>{

        event.add("spectrum:shimmerstone_ores", `kubejs:ore/shimmerstone/${rockType}`)
        event.add("spectrum:azurite_ores", `kubejs:ore/azurite/${rockType}`)
    })

    global.DEEPER_DOWN_ROCK_TYPES.forEach(rockType =>{

        event.add("spectrum:shimmerstone_ores", `kubejs:ore/shimmerstone/${rockType}`)
        event.add("spectrum:azurite_ores", `kubejs:ore/azurite/${rockType}`)
    })
})


ServerEvents.tags("block", event =>{

    global.ROCK_TYPES.forEach(rockType =>{

        event.add("spectrum:shimmerstone_ores", `kubejs:ore/shimmerstone/${rockType}`)
        event.add("spectrum:azurite_ores", `kubejs:ore/azurite/${rockType}`)
    })

    global.DEEPER_DOWN_ROCK_TYPES.forEach(rockType =>{

        event.add("spectrum:shimmerstone_ores", `kubejs:ore/shimmerstone/${rockType}`)
        event.add("spectrum:azurite_ores", `kubejs:ore/azurite/${rockType}`)
    })
})

// Useful to have: /kill @e[type=tfc:falling_block] when using tfc clearworld