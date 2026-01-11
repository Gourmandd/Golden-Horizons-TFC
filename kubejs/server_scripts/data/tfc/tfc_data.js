ServerEvents.generateData("last", event => {

    let datagen = Datagen(event).tfcData()

    datagen.itemHeat([
        `#modpack:copper_tiles`,
        `#modpack:copper_tile_slabs`,
        `#modpack:copper_tile_stairs`,
        `#modpack:copper_shingles`,
        `#modpack:copper_shingle_slabs`,
        `#modpack:copper_shingle_stairs`,
        `#modpack:cut_copper_blocks`,
        `#modpack:cut_copper_slabs`,
        `#modpack:cut_copper_stairs`,
        `#modpack:cut_copper_roofs`,
        `#modpack:copper_blocks`,
        `#modpack:copper_shutters`
    ], 1080, 2.857).setMetal(true).generate()

    datagen.itemHeat(`#modpack:axles`, 1535, 2.857).setMetal(true).generate()
    datagen.itemHeat(`#modpack:hanging_signs`, 1535, 2.857).setMetal(true).generate()
})
