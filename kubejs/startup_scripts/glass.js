// --------------------------------------------------------------- //
// Registers items, blocks and fluids for industrial glassworking  //
// --------------------------------------------------------------- //

StartupEvents.registry("item", event => {

    global.DYE_COLOURS.forEach(colour => {
        event.create(`${id}:${colour}_lens`)
            .displayName(`${nameProcessing(colour)} Lens`)
    })
})

StartupEvents.registry("block", event => {

    global.DYE_COLOURS.forEach(colour => {
        event.create(`${id}:molten_glass/${colour}`)
            .parentModel("block/cube_all")
            .displayName(`${nameProcessing(colour)} Glass Blob`)
            .color(global.COLOUR_TO_HEX[colour])
            .texture("all", id + ":block/thick_fluid_flow")
            .tagBlock("minecraft:mineable/pickaxe")
            .soundType("glass")
            .requiresTool(true)
    })

    event.create(`${id}:molten_glass/clear`)
        .displayName("Clear Glass Blob")
        .color(0xD4FBFB)
        .parentModel("block/cube_all")
        .texture("all", id + ":block/thick_fluid_flow")
        .tagBlock("minecraft:mineable/pickaxe")
        .soundType("glass")
        .requiresTool(true)
})
