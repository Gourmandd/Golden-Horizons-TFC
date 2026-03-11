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

    global.spectrum_WOOD_TYPES.forEach(wood => {

        LOG_TYPES.forEach(type => {
            //stripped logs from logs
            /*
            datagen.createCutting(outputOf(ITEM, global.PASTEL_WOODS[`stripped_${type}`][wood], 1, 1), inputOf(ITEM, global.PASTEL_WOODS[type][wood], 1))
                .processingTime(CUTTING_TIME)
                .id(`modpack:cutting/spectrum/${type}/stripping/${wood}`)
                .generate()
            */

            datagen.createCutting(outputOf(ITEM, global.PASTEL_WOODS["planks"][wood], 4, 1), inputOf(ITEM, global.PASTEL_WOODS[`stripped_${type}`][wood], 1))
                .processingTime(CUTTING_TIME)
                .id(`modpack:cutting/spectrum/${type}_to_planks/${wood}`)
                .generate()
        })

        datagen.createCutting(outputOf(ITEM, `${mod_id}:wood/lumber/${wood}`, 4, 1), inputOf(ITEM, global.PASTEL_WOODS["planks"][wood], 1))
            .processingTime(CUTTING_TIME)
            .id(`modpack:cutting/spectrum/into_lumber/${wood}`)
            .generate()
    })
})
