

StartupEvents.registry("item", event =>{

    global.DEEPER_DOWN_ROCK_TYPES.forEach(rock_type =>{

        event.create(`rock/loose/${rock_type}`)
            .displayName(`Loose ${nameProcessing(rock_type)} Rock`)
            .tag("tfc:any_knapping")
            .tag("tfc:rock_knapping")
        
        event.create(`brick/${rock_type}`)
            .displayName(`${nameProcessing(rock_type)} Brick`)
    })
})

StartupEvents.registry("block", event =>{

    Object.keys(global.STONE_TO_COBBLESTONE).forEach(rock_type =>{
        event.create(`rock/mortared_cobble/${rock_type}`)
            .textureAll(global.STONE_TO_COBBLESTONE_TEXTURE[rock_type])
            .displayName(`Mortared ${nameProcessing(rock_type)}`)
            .soundType("stone").tagBlock("minecraft:mineable/pickaxe")
            .tagBlock("tfc:can_collapse")
            .tagBlock("tfc:can_trigger_collapse")
            .tagBlock("tfc:can_start_collapse")
            .tagBlock("forge:stone")
    })


    global.DEEPER_DOWN_ROCK_TYPES.forEach(rock_type =>{
        

        event.create(`rock/hardened/${rock_type}`)
            .model(global.CUSTOM_ROCK_MODELS[rock_type])
            .displayName(`Hardened ${nameProcessing(rock_type)}`)
            .soundType("stone")
            .tagBlock("minecraft:mineable/pickaxe")
            .tagItem("forge:stone")
            .requiresTool(true)

        event.create(`rock/cobble/${rock_type}`)
            .textureAll(global.STONE_TO_COBBLESTONE_TEXTURE[rock_type])
            .displayName(`${nameProcessing(rock_type)} Cobble`)
            .soundType("stone")
            .tagBlock("minecraft:mineable/pickaxe")
            .tagItem("forge:cobblestone/normal")
            .tagBlock("tfc:can_landslide")
            .requiresTool(true)

        event.create(`rock/cobble/${rock_type}_slab`, "slab")
            .textureAll(global.STONE_TO_COBBLESTONE_TEXTURE[rock_type])
            .displayName(`${nameProcessing(rock_type)} Cobble Slab`)
            .soundType("stone")
            .tagBlock("minecraft:mineable/pickaxe")
            .requiresTool(true)

        event.create(`rock/cobble/${rock_type}_stairs`, "stairs")
            .textureAll(global.STONE_TO_COBBLESTONE_TEXTURE[rock_type])
            .displayName(`${nameProcessing(rock_type)} Cobble Stairs`)
            .soundType("stone")
            .tagBlock("minecraft:mineable/pickaxe")
            .requiresTool(true)

        event.create(`rock/cobble/${rock_type}_wall`, "wall")
            .textureAll(global.STONE_TO_COBBLESTONE_TEXTURE[rock_type])
            .displayName(`${nameProcessing(rock_type)} Cobble Wall`)
            .soundType("stone")
            .tagBlock("minecraft:mineable/pickaxe")
            .requiresTool(true)
    })
})