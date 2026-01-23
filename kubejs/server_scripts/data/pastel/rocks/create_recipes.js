
ServerEvents.recipes(event => {

    let datagen = Datagen(event).recipe()
    const ITEM = IO_TYPE.ITEM

    const PROCESSING_TIME = 200

    const PROCESSING_TIME_HARD = 400

    global.CUSTOM_ROCK_TYPES.forEach(rockType => {

        datagen.createCrushing(outputOf(ITEM, `${mod_id}:rock/gravel/${rockType}`, 1, 1), inputOf(ITEM, `${mod_id}:rock/cobble/${rockType}`, 1))
            .id(`${mod_id}:crushing/cobble/${rockType}`)
            .processingTime(PROCESSING_TIME_HARD)
            .generate()

        datagen.createCrushing(outputOf(ITEM, `${mod_id}:rock/gravel/${rockType}`, 1, 1), inputOf(ITEM, `${mod_id}:rock/mossy_cobble/${rockType}`, 1))
            .id(`${mod_id}:crushing/mossy_cobble/${rockType}`)
            .processingTime(PROCESSING_TIME_HARD)
            .generate()

        datagen.createCrushing(outputOf(ITEM, `tfc:sand/${global.ROCKS_TO_SAND_COLOURS[rockType]}`, 1, 1), inputOf(ITEM, `${mod_id}:rock/gravel/${rockType}`, 1))
            .id(`${mod_id}:crushing/gravel/${rockType}`)
            .processingTime(PROCESSING_TIME_HARD)
            .generate()
    })
})
