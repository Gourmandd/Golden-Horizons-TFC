// requires: kubejs_tfc

TFCEvents.data(event => {

    global.DYE_COLOURS.forEach(colour => {
        event.metal(`${mod_id}:glass/${colour}`, global.MELTING_POINTS["glass"], 0.02143,
            null, null, null, 1, `modpack:glass/${colour}`
        )
    })
})
