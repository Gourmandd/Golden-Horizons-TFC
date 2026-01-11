ServerEvents.generateData("last", event => {

    let datagen = Datagen(event).tfcData()

    // Supports need data to function
    global.DYE_COLOURS.forEach(colour => {
        datagen.support(`${mod_id}:wood/support/${colour}`, 2, 2, 4)
    })

    global.SPECTRUM_WOODS.forEach(type => {
        datagen.support(`${mod_id}:wood/support/${type}`, 3, 3, 5)
    })
})
