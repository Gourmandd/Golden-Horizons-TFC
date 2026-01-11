// requires: artisanal
console.log("WARNING: TEST RECIPES WHEN ARTISANAL IS ADDED")

ServerEvents.recipes(event => {

    let datagen = Datagen(event).terraFirmaCraftRecipes()

    global.TOOL_METALS.forEach(metal => {

        if (metal == "wrought_iron") {

            datagen.heating(
                null,
                outputOf(IO_TYPE.FLUID, "tfc:metal/cast_iron", 200),
                inputOf(IO_TYPE.ITEM, `artisanal:metal/can_opener/${metal}`, 1),
                global.MELTING_POINTS[metal]
            )
                .id(`${mod_id}:heating/can_opener/${metal}`)
                .useDurability()
                .generate()

        } else {

            datagen.heating(
                null,
                outputOf(IO_TYPE.FLUID, `tfc:metal/${metal}`, 200),
                inputOf(IO_TYPE.ITEM, `artisanal:metal/can_opener/${metal}`, 1),
                global.MELTING_POINTS[metal]
            )
                .id(`${mod_id}:heating/can_opener/${metal}`)
                .useDurability()
                .generate()
        }

    })
})
