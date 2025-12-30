// -------------------------------------- //
// Registers Items for custom clay types  //
// -------------------------------------- //


StartupEvents.registry("item", event => {

    global.CUSTOM_CLAY_TYPES.forEach(type => {

        event.create(`${id}:ceramic/unfired_${type}_blowpipe`).displayName(`Unfired ${nameProcessing(type)} Blowpipe`)
        event.create(`${id}:ceramic/unfired_${type}_flower_pot`).displayName(`Unfired ${nameProcessing(type)} Flower Pot`)
        event.create(`${id}:ceramic/unfired_${type}_bowl`).displayName(`Unfired ${nameProcessing(type)} Bowl`)
        event.create(`${id}:ceramic/unfired_${type}_pan`).displayName(`Unfired ${nameProcessing(type)} Pan`)
        event.create(`${id}:ceramic/unfired_${type}_spindle_head`).displayName(`Unfired ${nameProcessing(type)} Spindle Head`)
        event.create(`${id}:ceramic/unfired_${type}_pot`).displayName(`Unfired ${nameProcessing(type)} Pot`)

        event.create(`${id}:ceramic/unfired_${type}_brick`).displayName(`Unfired ${nameProcessing(type)} Brick`)
        event.create(`${id}:ceramic/${type}_brick`).displayName(`${nameProcessing(type)} Brick`)

        event.create(`${id}:ceramic/unfired_${type}_vessel`).displayName(`Unfired ${nameProcessing(type)} Vessel`)
        event.create(`${id}:ceramic/unfired_${type}_jug`).displayName(`Unfired ${nameProcessing(type)} Jug`)

        event.create(`${id}:ceramic/unfired_${type}_bell_mold`).displayName(`Unfired ${nameProcessing(type)} Bell Mold`)
        event.create(`${id}:ceramic/unfired_${type}_ingot_mold`).displayName(`Unfired ${nameProcessing(type)} Ingot Mold`)

        global.TFC_TOOL_TYPES.forEach(mold_type => {
            event.create(`${id}:ceramic/unfired_${type}_${mold_type}_mold`).displayName(`Unfired ${nameProcessing(type)} ${nameProcessing(mold_type)} Mold`)
        })

        if (type == "kaolinite") {
            return
        } else {
            event.create(`${id}:clay/${type}_clay_ball`).displayName(`${nameProcessing(type)} Clay Ball`).tag("tfc:any_knapping")
        }
    })
})



StartupEvents.registry("block", event => {

    global.CUSTOM_CLAY_TYPES.forEach(type => {

        event.create(`${id}:ceramic/${type}_bricks`).displayName(`${nameProcessing(type)} Bricks`).requiresTool(true).tagBlock("minecraft:mineable/pickaxe").soundType("deepslate_bricks")
        event.create(`${id}:ceramic/${type}_brick_slab`, "slab").displayName(`${nameProcessing(type)} Brick Slab`).property(BlockProperties.SLAB_TYPE).requiresTool(true).tagBlock("minecraft:mineable/pickaxe").soundType("deepslate_bricks")
        event.create(`${id}:ceramic/${type}_brick_stairs`, "stairs").displayName(`${nameProcessing(type)} Brick Stairs`).property(BlockProperties.STAIRS_SHAPE).requiresTool(true).tagBlock("minecraft:mineable/pickaxe").soundType("deepslate_bricks")
        event.create(`${id}:ceramic/${type}_brick_wall`, "wall").displayName(`${nameProcessing(type)} Brick Wall`).property(BlockProperties.IN_WALL).requiresTool(true).tagBlock("minecraft:mineable/pickaxe").soundType("deepslate_bricks")

        if (type == "kaolinite") {
            return
        } else {
            event.create(`${id}:clay/${type}_clay_block`).displayName(`${nameProcessing(type)} Clay Block`).tagBlock("minecraft:mineable/shovel").soundType("wet_grass")
        }
    })
})



//event.createCustom("test_vessel", () => new $Vessel(new $ItemProperties().stacksTo(1))).displayName("Test Vessel")
//event.createCustom('ceramic/test_vessel', () => new $Vessel(new $ItemProperties().stacksTo(1)))
//event.createCustom('ceramic/test_jug', () => new $Jug(new $ItemProperties().stacksTo(1), $TFCConfig.SERVER.jugCapacity, $TFCTags.Fluids.USABLE_IN_JUG))
