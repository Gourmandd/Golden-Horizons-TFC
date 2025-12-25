ClientEvents.lang("en_us", event => {

    global.DYE_COLOURS.forEach(colour => {
        event.add(`fluid_type.modpack.glass.${colour}`, "Molten " + nameProcessing(colour) + " Glass")
    })
})
