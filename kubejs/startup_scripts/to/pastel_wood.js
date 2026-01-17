// requires: kubejs_tfc

// ------------------------------------------------- //
// Registers Items for TFCified Spectrum Wood types  //
// ------------------------------------------------- //

StartupEvents.registry("item", event => {

    global.DYE_COLOURS.forEach(colour => {

        event.create(`${id}:wood/lumber/${colour}`).displayName(`${nameProcessing(colour)} Lumber`).tag("tfc:lumber")
    })

    global.SPECTRUM_WOODS.forEach(wood => {

        if (global.NOXWOODS.indexOf(wood) > -1) {

            event.create(`${id}:wood/lumber/${wood}`).displayName(`${nameProcessing(wood)} Noxwood Lumber`).tag("tfc:lumber")
        } else {

            event.create(`${id}:wood/lumber/${wood}`).displayName(`${nameProcessing(wood)} Lumber`).tag("tfc:lumber")
        }

    })
})
