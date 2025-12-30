
StartupEvents.registry("block", event => {

    Object.keys(global.STONE_TO_COBBLESTONE).forEach(rock_type => {

        event.create(`${id}:rock/mortared_cobble/${rock_type}`)
            .parentModel("block/cube_all")
            .texture("all", global.STONE_TO_COBBLESTONE_TEXTURE[rock_type])
            .displayName(`Mortared ${nameProcessing(rock_type)}`)
            .soundType("stone")
            .tagBlock("minecraft:mineable/pickaxe")
            .tagBlock("tfc:can_collapse")
            .tagBlock("tfc:can_trigger_collapse")
            .tagBlock("tfc:can_start_collapse")
            .tagBlock("c:stones")
    })
})
