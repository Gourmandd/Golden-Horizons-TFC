// requires: firmalife
// to be ported to the mod.

ServerEvents.recipes(event => {

    const CUTTING_TIME = 100

    let datagen = Datagen(event).recipe()
    const ITEM = IO_TYPE.ITEM

    global.FIRMALIFE_METALS.forEach(metal => {

        datagen.createCutting(outputOf(ITEM, `firmalife:metal/double_ingot/${metal}`, 2, 1), inputOf(ITEM, `firmalife:metal/double_sheet/${metal}`, 1))
            .processingTime(CUTTING_TIME)
            .id(`modpack:cutting/double_sheet/${metal}`)
            .generate()

        datagen.createCutting(outputOf(ITEM, `firmalife:metal/ingot/${metal}`, 2, 1), inputOf(ITEM, `firmalife:metal/double_ingot/${metal}`, 1))
            .processingTime(CUTTING_TIME)
            .id(`modpack:cutting/double_ingot/${metal}`)
            .generate()
    })
})
