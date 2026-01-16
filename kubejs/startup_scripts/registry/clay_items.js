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
