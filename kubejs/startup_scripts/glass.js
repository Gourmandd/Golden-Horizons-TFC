// --------------------------------------------------------------- //
// Registers items, blocks and fluids for industrial glassworking  //
// --------------------------------------------------------------- //

StartupEvents.registry("item", event =>{

    global.DYE_COLOURS.forEach(colour =>{
        event.create(`${colour}_lens`)
            .displayName(`${nameProcessing(colour)} Lens`)
    })
})

StartupEvents.registry("block", event =>{

    global.DYE_COLOURS.forEach(colour => {
        event.create(`molten_glass/${colour}`)
            .displayName(`${nameProcessing(colour)} Glass Blob`)
            .color(global.COLOUR_TO_HEX[colour])
            /* getting 1.21 running.textureAll("kubejs:block/thick_fluid_flow")*/
            .tagBlock("minecraft:mineable/pickaxe")
            .soundType("glass")
            .requiresTool(true)
    })

    event.create("molten_glass/clear")
        .displayName("Clear Glass Blob")
        .color(0xD4FBFB)
        /* getting 1.21 running.textureAll("kubejs:block/thick_fluid_flow")*/
        .tagBlock("minecraft:mineable/pickaxe")
        .soundType("glass")
        .requiresTool(true)
})