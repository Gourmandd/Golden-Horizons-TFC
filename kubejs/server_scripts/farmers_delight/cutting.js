
const GIVES_PLANK = [
    "bookshelf",
    "log_fence",
    "fence_gate",
    "tool_rack",
    "workbench",
    "loom",
]

const GIVES_LUMBER = [
    "door",
    "trapdoor",
    "fence",
    "pressure_plate",
    "button",
    "slab",
    "stairs",
]

const BLOCK_SHAPES = [
    "bricks",
    "wall",
    "stairs",
    "slab"
]

const BRICK_TYPES = [
    "bricks",
    "mossy_bricks",
    "cracked_bricks"
]



ServerEvents.recipes(event =>{

    let datagen = Datagen(event).recipe()
    const ITEM = IO_TYPE.ITEM
    const TAG = IO_TYPE.ITEM_TAG

    global.OVERWORLD_WOOD_TYPES.forEach(type => {

        let mod = global.WOOD_TYPE_TO_MOD[type]

            if (!Platform.isLoaded("afc") && mod == "afc"){return}

            datagen.farmersCutting(outputOf(ITEM, `${mod}:wood/lumber/${type}`, 1, 1), inputOf(TAG, `modpack:cutting/wood/for_lumber/${type}`, 1), CUTTING_TOOL.AXE)
                .id(`modpack:fd_cutting/wood/${mod}_lumber/${type}`)
                .generate()

            console.log(mod)
            datagen.farmersCutting(outputOf(ITEM, `${mod}:wood/planks/${type}`, 1, 1), inputOf(TAG, `modpack:cutting/wood/for_planks/${type}`, 1), CUTTING_TOOL.AXE)
                .id(`modpack:fd_cutting/wood/${mod}_planks/${type}`)
                .generate()
    })

    global.DYE_COLOURS.forEach(colour => {

        datagen.farmersCutting(outputOf(ITEM, `minecraft:${colour}_terracotta`, 1, 0.5), inputOf(TAG, `modpack:cutting/terracotta_bricks/${colour}`, 1), CUTTING_TOOL.PICKAXE)
            .id(`modpack:fd_cutting/terracotta/${colour}`)
            .generate()
    })

    datagen.farmersCutting(outputOf(ITEM, "minecraft:terracotta", 1, 0.5), inputOf(TAG, `modpack:cutting/terracotta_bricks/plain`, 1), CUTTING_TOOL.PICKAXE)
        .id(`modpack:fd_cutting/terracotta/plain`)
        .generate()
    
    datagen.farmersCutting(outputOf(ITEM, "tfc:alabaster_brick", 1, 0.5), inputOf(TAG, `modpack:cutting/alabaster_brick`, 1), CUTTING_TOOL.PICKAXE)
        .id(`modpack:fd_cutting/alabaster`)
        .generate()

    datagen.farmersCutting(outputOf(ITEM, "tfc:ore/gypsum", 1, 0.5), inputOf(TAG, `modpack:cutting/gypsum`, 1), CUTTING_TOOL.PICKAXE)
        .id(`modpack:fd_cutting/gypsum`)
        .generate()

    global.TFC_SOIL_TYPES.forEach(soil => {
        datagen.farmersCutting(outputOf(ITEM, `tfc:mud_brick/${soil}`, 1, 0.5), inputOf(TAG, `modpack:cutting/mud/${soil}/brick`, 1), CUTTING_TOOL.PICKAXE)
            .id(`modpack:fd_cutting/mud/${soil}`)
            .generate()
    })

    global.TFC_SAND_COLOURS.forEach(colour => {
        datagen.farmersCutting(outputOf(ITEM, `tfc:sand/${colour}`, 1, 0.5), inputOf(TAG, `modpack:cutting/sandstone/${colour}`, 1), CUTTING_TOOL.PICKAXE)
            .id(`modpack:fd_cutting/sandstone/${colour}`)
            .generate()
    })

    global.ROCK_TYPES.forEach(rock => {
        datagen.farmersCutting(outputOf(ITEM, `tfc:rock/loose/${rock}`, 1, 0.5), inputOf(TAG, `modpack:cutting/rock/${rock}`, 1), CUTTING_TOOL.PICKAXE)
            .id(`modpack:fd_cutting/rock/${rock}`)
            .generate()
    })
})