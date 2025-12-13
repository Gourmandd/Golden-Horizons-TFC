// requires: kubejs_tfc

TFCEvents.data(event => {

    // Supports need data to function
    global.DYE_COLOURS.forEach(colour => {
        event.support(`${mod_id}:wood/support/${colour}`, 2, 2, 4)
    })

    global.SPECTRUM_WOODS.forEach(type => {
        event.support(`${mod_id}:wood/support/${type}`, 3, 3, 5)
    })
})
