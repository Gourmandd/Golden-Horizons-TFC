// -------------------------------------------- //
// Assorted Registry and Startup Script Stuff   //
// -------------------------------------------- //

StartupEvents.registry("item", event => {

    event.create("saw").displayName("Wrought Iron Sawblade")
    event.create("unfired_shaft").displayName("Unfired Shaft")
    event.create("fired_shaft").displayName("Fired Shaft")
    event.create("oscillating_mechanism").displayName("Oscillating Mechanism")
    event.create("torque_mechanism").displayName("Torque Mechanism")

    event.create("olive_pomace").displayName("Olive Pomace")
    event.create("dry_olive_pomace").displayName("Dry Olive Pomace")
    event.create("soft_bark").displayName("Soft Bark")

    global.DYE_COLOURS.forEach(colour => { event.create(`terracotta/shard_${colour}`).displayName(`${nameProcessing(colour)} Terracotta Shard`) })

    event.create("raw_aluminium_mixture").displayName("Raw Aluminium Mixture")
    event.create("aluminium_nugget").displayName("Aluminium Nugget")
})


StartupEvents.registry("block", event => {

    event.create("brick/snow")
        .soundType("snow")
        .hardness(3)
        /* getting 1.21 running.textureAll("kubejs:block/snow_bricks")*/
        .displayName("Snow Bricks")
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:mineable/shovel")

    event.create("brick/snow_stairs", "stairs")
        .soundType("snow")
        .hardness(3)
        /* getting 1.21 running.textureAll("kubejs:block/snow_bricks")*/
        .displayName("Snow Brick Stairs")
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:mineable/shovel")

    event.create("deco_bucket/wooden")
        .displayName("Decorational Wooden Bucket")
        .defaultTranslucent()
        .notSolid()
        .tagBlock("minecraft:mineable/axe")


    event.create("deco_bucket/red_steel")
        .displayName("Decorational Red Steel Bucket")
        .soundType("stone")
        .defaultTranslucent()
        .notSolid()
        .tagBlock("minecraft:mineable/pickaxe")


    event.create("deco_bucket/blue_steel")
        .displayName("Decorational Blue Steel Bucket")
        .soundType("stone")
        .defaultTranslucent()
        .notSolid()
        .tagBlock("minecraft:mineable/pickaxe")


    event.create("deco_bucket/wrought_iron")
        .displayName("Decorational Wrought Iron Bucket")
        .soundType("stone")
        .defaultTranslucent()
        .notSolid()
        .tagBlock("minecraft:mineable/pickaxe")


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

Platform.mods.kubejs.name = 'Horizons'
Platform.mods.modpack.name = 'Horizons'
