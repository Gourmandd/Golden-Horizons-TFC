// requires: afc
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

    global.AFC_WOOD_TYPES.forEach(wood => {
        //stripped logs from logs
        LOG_TYPES.forEach(type => {

            datagen.createCutting(outputOf(ITEM, `afc:wood/stripped_${type}/${wood}`, 1, 1), inputOf(ITEM, `afc:wood/${type}/${wood}`, 1))
                .processingTime(CUTTING_TIME)
                .id(`modpack:cutting/afc/${type}/stripping/${wood}`)
                .generate()

            datagen.createCutting(outputOf(ITEM, `afc:wood/planks/${wood}`, 4, 1), inputOf(ITEM, `afc:wood/stripped_${type}/${wood}`, 1))
                .processingTime(CUTTING_TIME)
                .id(`modpack:cutting/afc/${type}/to_planks/${wood}`)
                .generate()
        })

        datagen.createCutting(outputOf(ITEM, `afc:wood/lumber/${wood}`, 4, 1), inputOf(ITEM, `afc:wood/planks/${wood}`, 1))
            .processingTime(CUTTING_TIME)
            .id(`modpack:cutting/afc/into_lumber/${wood}`)
            .generate()
    })
})
