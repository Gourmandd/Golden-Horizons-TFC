

TFCEvents.data(event => {

    global.DYE_COLOURS.forEach(colour => {
        event.support(`kubejs:wood/support/${colour}`, 2, 2, 4)
    })

    global.SPECTRUM_WOODS.forEach(type => {
        event.support(`kubejs:wood/support/${type}`, 3, 3, 5)
    })
})