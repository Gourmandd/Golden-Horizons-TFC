ServerEvents.recipes(event =>{

    const CUTTING_TIME = 100

    let datagen = Datagen(event).recipe()
    const ITEM = IO_TYPE.ITEM

    global.KUBEJS_METALS.forEach(metal =>{

        datagen.createCutting(outputOf(ITEM, `kubejs:metal/double_ingot/${metal}`, 2, 1), inputOf(ITEM, `kubejs:metal/double_sheet/${metal}`, 1))
            .processingTime(CUTTING_TIME)
            .id(`modpack:cutting/double_sheet/${metal}`)
            .generate()

        datagen.createCutting(outputOf(ITEM, `kubejs:metal/ingot/${metal}`, 2, 1), inputOf(ITEM, `kubejs:metal/double_ingot/${metal}`, 1))
            .processingTime(CUTTING_TIME)
            .id(`modpack:cutting/double_ingot/${metal}`)
            .generate()
    })
})