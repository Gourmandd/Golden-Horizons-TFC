
ClientEvents.generateAssets("after_mods", event => {

    global.DEEPER_DOWN_ROCK_TYPES.forEach(rockType =>{

        event.blockModel(`kubejs:rock/cobble/${rockType}_slab`, model => {
            model.parent("minecraft:block/slab")
            model.texture("bottom", global.STONE_TO_COBBLESTONE_TEXTURE[rockType])
            model.texture("top", global.STONE_TO_COBBLESTONE_TEXTURE[rockType])
            model.texture("side", global.STONE_TO_COBBLESTONE_TEXTURE[rockType])
        })

        event.blockModel(`kubejs:rock/cobble/${rockType}_slab_double`, model => {
            model.parent("minecraft:block/cube_all")
            model.texture("all", global.STONE_TO_COBBLESTONE_TEXTURE[rockType])
        })

        event.blockModel(`kubejs:rock/cobble/${rockType}_slab_top`, model => {
            model.parent("minecraft:block/slab_top")
            model.texture("bottom", global.STONE_TO_COBBLESTONE_TEXTURE[rockType])
            model.texture("top", global.STONE_TO_COBBLESTONE_TEXTURE[rockType])
            model.texture("side", global.STONE_TO_COBBLESTONE_TEXTURE[rockType])
        })

        event.blockModel(`kubejs:rock/cobble/${rockType}_stairs`, model => {
            model.parent("minecraft:block/stairs")
            model.texture("bottom", global.STONE_TO_COBBLESTONE_TEXTURE[rockType])
            model.texture("top", global.STONE_TO_COBBLESTONE_TEXTURE[rockType])
            model.texture("side", global.STONE_TO_COBBLESTONE_TEXTURE[rockType])
        })

        event.blockModel(`kubejs:rock/cobble/${rockType}_stairs_inner`, model => {
            model.parent("minecraft:block/inner_stairs")
            model.texture("bottom", global.STONE_TO_COBBLESTONE_TEXTURE[rockType])
            model.texture("top", global.STONE_TO_COBBLESTONE_TEXTURE[rockType])
            model.texture("side", global.STONE_TO_COBBLESTONE_TEXTURE[rockType])
        })

        event.blockModel(`kubejs:rock/cobble/${rockType}_stairs_outer`, model => {
            model.parent("minecraft:block/outer_stairs")
            model.texture("bottom", global.STONE_TO_COBBLESTONE_TEXTURE[rockType])
            model.texture("top", global.STONE_TO_COBBLESTONE_TEXTURE[rockType])
            model.texture("side", global.STONE_TO_COBBLESTONE_TEXTURE[rockType])
        })

        event.itemModel(`kubejs:rock/cobble/${rockType}_wall`, model => {
            model.parent("minecraft:block/wall_inventory")
            model.texture("wall", global.STONE_TO_COBBLESTONE_TEXTURE[rockType])
        })

        event.blockModel(`kubejs:rock/cobble/${rockType}_wall_post`, model => {
            model.parent("minecraft:block/template_wall_post")
            model.texture("wall", global.STONE_TO_COBBLESTONE_TEXTURE[rockType])
        })

        event.blockModel(`kubejs:rock/cobble/${rockType}_wall_side`, model => {
            model.parent("minecraft:block/template_wall_side")
            model.texture("wall", global.STONE_TO_COBBLESTONE_TEXTURE[rockType])
        })

        event.blockModel(`kubejs:rock/cobble/${rockType}_wall_side_tall`, model => {
            model.parent("minecraft:block/template_wall_side_tall")
            model.texture("wall", global.STONE_TO_COBBLESTONE_TEXTURE[rockType])
        })
    })
})