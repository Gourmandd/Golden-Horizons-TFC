// to be ported to the mod.

// ---------------------------------------------------------- //
// Generates recipes related to create cutting using the saw  //
// ---------------------------------------------------------- //


ServerEvents.recipes(event => {

    let datagen = Datagen(event).recipe()
    const ITEM = IO_TYPE.ITEM

    const LOG_TYPES = [
        "wood",
        "log"
    ]

    const CUTTING_TIME = 100

    global.TFC_WOOD_TYPES.forEach(wood => {
        //stripped logs from logs
        LOG_TYPES.forEach(type => {

            datagen.createCutting(outputOf(ITEM, `tfc:wood/stripped_${type}/${wood}`, 1, 1), inputOf(ITEM, `tfc:wood/${type}/${wood}`, 1))
                .processingTime(CUTTING_TIME)
                .id(`modpack:cutting/tfc/${type}/stripping/${wood}`)
                .generate()

            datagen.createCutting(outputOf(ITEM, `tfc:wood/planks/${wood}`, 4, 1), inputOf(ITEM, `tfc:wood/stripped_${type}/${wood}`, 1))
                .processingTime(CUTTING_TIME)
                .id(`modpack:cutting/tfc/${type}to_planks/${wood}`)
                .generate()
        })

        datagen.createCutting(outputOf(ITEM, `tfc:wood/lumber/${wood}`, 4, 1), inputOf(ITEM, `tfc:wood/planks/${wood}`, 1))
            .processingTime(CUTTING_TIME)
            .id(`modpack:cutting/tfc/into_lumber/${wood}`)
            .generate()
    })

    global.TFC_METALS.forEach(metal => {

        datagen.createCutting(outputOf(ITEM, `tfc:metal/double_ingot/${metal}`, 2, 1), inputOf(ITEM, `tfc:metal/double_sheet/${metal}`, 1))
            .processingTime(CUTTING_TIME)
            .id(`modpack:cutting/double_sheet/${metal}`)
            .generate()

        datagen.createCutting(outputOf(ITEM, `tfc:metal/ingot/${metal}`, 2, 1), inputOf(ITEM, `tfc:metal/double_ingot/${metal}`, 1))
            .processingTime(CUTTING_TIME)
            .id(`modpack:cutting/double_ingot/${metal}`)
            .generate()
    })
})
