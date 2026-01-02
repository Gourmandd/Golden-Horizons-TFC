ClientEvents.generateAssets("last", event => {

    let datagen = Datagen(event).blockModel()

    global.DYE_COLOURS.forEach(colour => {
        datagen.supportBlockModel(`${mod_id}:wood/support/${colour}`, `pastel:block/stripped_${colour}`, `pastel:block/stripped_${colour}_top`)
    })

    global.SPECTRUM_WOODS.forEach(woodType => {
        let texturePart

        if (global.NOXWOODS.indexOf(woodType) > -1) {

            texturePart = `${woodType}_noxcap_stem`
        } else {

            texturePart = `${woodType}_log`
        }

        datagen.supportBlockModel(`${mod_id}:wood/support/${woodType}`, `pastel:block/stripped_${texturePart}`, `pastel:block/stripped_${texturePart}_top`)
    })
})
