
StartupEvents.registry("item", event =>{

    global.DYE_COLOURS.forEach(colour =>{
        event.create(`${colour}_lens`)
            .displayName(`${nameProcessing(colour)} Lens`)
    })

    event.create("glass_mold", 'tfc:mold')
        .capacity(800)
        .fluidTagAccept("kubejs:molten_glass")
    
    event.create("glass_pane_mold", 'tfc:mold')
        .capacity(50)
        .fluidTagAccept("kubejs:molten_glass")
})

StartupEvents.registry("fluid", event =>{

    global.DYE_COLOURS.forEach(colour => {
        event.create(`glass/${colour}`)
            .displayName(`Molten ${nameProcessing(colour)} Glass`)
            .bucketColor(global.COLOUR_TO_HEX[colour])
            .thickTexture(global.COLOUR_TO_HEX[colour])
            .noBucket()
            .noBlock()
            .tag("tfc:molten_metals")
            .tag("kubejs:molten_glass")
    })

    event.create("glass/clear")
        .displayName("Molten Clear Glass")
        .bucketColor(0xD4FBFB)
        .thickTexture(0xD4FBFB)
        .noBucket()
        .noBlock()
        .tag("tfc:molten_metals")
        .tag("kubejs:molten_glass")
})

StartupEvents.registry("block", event =>{

    global.DYE_COLOURS.forEach(colour => {
        event.create(`molten_glass/${colour}`)
            .displayName(`${nameProcessing(colour)} Glass Blob`)
            .color(global.COLOUR_TO_HEX[colour])
            .textureAll("kubejs:block/thick_fluid_flow")
            .tagBlock("minecraft:mineable/pickaxe")
            .soundType("glass")
            .requiresTool(true)
    })

    event.create("molten_glass/clear")
        .displayName("Clear Glass Blob")
        .color(0xD4FBFB)
        .textureAll("kubejs:block/thick_fluid_flow")
        .tagBlock("minecraft:mineable/pickaxe")
        .soundType("glass")
        .requiresTool(true)
})