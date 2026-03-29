// -------------------------------------------- //
// Assorted Registry and Startup Script Stuff   //
// -------------------------------------------- //

StartupEvents.registry("item", event => {

    event.create(`${id}:saw`).displayName("Wrought Iron Sawblade")
    event.create(`${id}:unfired_shaft`).displayName("Unfired Shaft")
    event.create(`${id}:fired_shaft`).displayName("Fired Shaft")
    event.create(`${id}:oscillating_mechanism`).displayName("Oscillating Mechanism")
    event.create(`${id}:torque_mechanism`).displayName("Torque Mechanism")

    event.create(`${id}:olive_pomace`).displayName("Olive Pomace")
    event.create(`${id}:dry_olive_pomace`).displayName("Dry Olive Pomace")


    // to be ported to the mod.
    global.DYE_COLOURS.forEach(colour => {
        event.create(`${id}:terracotta/shard_${colour}`).displayName(`${nameProcessing(colour)} Terracotta Shard`)
    })

    event.create(`${id}:raw_aluminium_mixture`).displayName("Raw Aluminium Mixture")
    event.create(`${id}:aluminium_nugget`).displayName("Aluminium Nugget")
})


StartupEvents.registry("block", event => {

    event.create(`${id}:brick/snow`)
        .soundType("snow")
        .hardness(3)
        /* getting 1.21 running.textureAll("kubejs:block/snow_bricks")*/
        .displayName("Snow Bricks")
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:mineable/shovel")

    event.create(`${id}:brick/snow_stairs`, "stairs")
        .soundType("snow")
        .hardness(3)
        /* getting 1.21 running.textureAll("kubejs:block/snow_bricks")*/
        .displayName("Snow Brick Stairs")
        .tagBlock("minecraft:mineable/pickaxe")
        .tagBlock("minecraft:mineable/shovel")

    // to be ported to the mod.
    global.DYE_COLOURS.forEach(colour => {
        event.create(`${id}:terracotta/crushed_${colour}`)
            .displayName(`${nameProcessing(colour)} Crushed Terracotta`)
            .soundType("sand")
            .requiresTool(true)
            .tagBlock("minecraft:mineable/pickaxe")
            .tagBlock("minecraft:mineable/shovel")
            .tagBlock("tfc:can_landslide")
            .tagBlock("minecraft:sand")
            .tagBlock("tfc:grass_plantable")
    })


    event.create(`${id}:andesite_machine`).displayName("Andesite Machine").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/axe")
    event.create(`${id}:copper_machine`).displayName("Copper Machine").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/axe")
    event.create(`${id}:brass_machine`).displayName("Brass Machine").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/axe")
})

Platform.mods.kubejs.name = 'Horizons'
