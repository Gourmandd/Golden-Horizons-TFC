

StartupEvents.registry("item", event =>{

    event.create("saw").displayName("Wrought Iron Sawblade")
    event.create("unfired_shaft").displayName("Unfired Shaft")
    event.create("fired_shaft").displayName("Fired Shaft")
    event.create("oscillating_mechanism").displayName("Oscillating Mechanism")
    event.create("torque_mechanism").displayName("Torque Mechanism")

    event.create("soft_bark").displayName("Soft Bark")
    
    global.DYE_COLOURS.forEach(colour => {event.create(`terracotta/shard_${colour}`).displayName(`${nameProcessing(colour)} Terracotta Shard`)})

    event.create("raw_aluminium_mixture").displayName("Raw Aluminium Mixture")
    event.create("aluminium_nugget").displayName("Aluminium Nugget")
})

StartupEvents.registry("block", event =>{

    event.create("felsic_tuff_mixture").displayName("Felsic Tuff Mixture").soundType("sand").tagBlock("minecraft:mineable/shovel")

    global.DYE_COLOURS.forEach(colour => {

        event.create(`terracotta/crushed_${colour}`)
            .displayName(`${nameProcessing(colour)} Crushed Terracotta`)
            .soundType("sand")
            .requiresTool(true)
            .tagBlock("minecraft:mineable/pickaxe")
            .tagBlock("minecraft:mineable/shovel")
            .tagBlock("tfc:can_landslide")
            .tagBlock("minecraft:sand")
            .tagBlock("tfc:grass_plantable")
    })

    event.create("andesite_machine").displayName("Andesite Machine").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/axe")
    event.create("copper_machine").displayName("Copper Machine").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/axe")
    event.create("brass_machine").displayName("Brass Machine").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/axe")
    
})

StartupEvents.registry("fluid", event => {

    event.create("shale_clay_slurry")
        .displayName("Shale Clay Slurry")
        .bucketColor(0x4E4664)
        .thinTexture(0x4E4664)
        .noBucket()
        .noBlock()

    event.create("filtered_shale_clay_slurry")
        .displayName("Filtered Shale Clay Slurry")
        .bucketColor(0x746D89)
        .thinTexture(0x746D89)
        .noBucket()
        .noBlock()
})



Platform.mods.kubejs.name = 'Horizons'
