// to be ported to the mod.

ServerEvents.recipes(event => {

    const CUTTING_TIME = 100

    let datagen = Datagen(event).recipe()
    const ITEM = IO_TYPE.ITEM

    global.KUBEJS_METALS.forEach(metal => {

        datagen.createCutting(outputOf(ITEM, `${mod_id}:metal/double_ingot/${metal}`, 2, 1), inputOf(ITEM, `${mod_id}:metal/double_sheet/${metal}`, 1))
            .processingTime(CUTTING_TIME)
            .id(`${mod_id}:cutting/double_sheet/${metal}`)
            .generate()

        datagen.createCutting(outputOf(ITEM, `${mod_id}:metal/ingot/${metal}`, 2, 1), inputOf(ITEM, `${mod_id}:metal/double_ingot/${metal}`, 1))
            .processingTime(CUTTING_TIME)
            .id(`${mod_id}:cutting/double_ingot/${metal}`)
            .generate()
    })
})
