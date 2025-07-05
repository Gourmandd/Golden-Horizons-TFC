
StartupEvents.registry("item", event => {

    global.DYE_COLOURS.forEach(colour => {
        
        event.create(`wood/lumber/${colour}`).displayName(`${nameProcessing(colour)} Lumber`).tag("tfc:lumber")
    })
    
    global.SPECTRUM_WOODS.forEach(wood => {

        if (global.NOXWOODS.indexOf(wood) > -1){

            event.create(`wood/lumber/${wood}`).displayName(`${nameProcessing(wood)} Noxwood Lumber`).tag("tfc:lumber")
        } else {

            event.create(`wood/lumber/${wood}`).displayName(`${nameProcessing(wood)} Lumber`).tag("tfc:lumber")
        }

    })
})