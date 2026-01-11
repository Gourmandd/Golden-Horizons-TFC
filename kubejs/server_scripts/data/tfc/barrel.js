
ServerEvents.recipes(event => {

    let datagen = Datagen(event).terraFirmaCraftRecipes()

    global.DYE_COLOURS.forEach(colour => {

        datagen.barrelSealed(
            outputOf(IO_TYPE.ITEM, `tfc:ceramic/${colour}_unfired_vessel`, 1, 1),
            null,
            inputOf(IO_TYPE.ITEM_TAG, "#modpack:unfired_vessels", 1),
            inputOf(IO_TYPE.FLUID, `tfc:${colour}_dye`, 25)
        )
            .id(`tfc:barrel/ceramic/${colour}_glazed_vessel`)
            .setDuration(1200)
            .generate()
    })
})
