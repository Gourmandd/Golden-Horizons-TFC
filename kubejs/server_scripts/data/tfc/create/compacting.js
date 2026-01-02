ServerEvents.recipes(event => {

    let datagen = Datagen(event).recipe()
    const ITEM = IO_TYPE.ITEM

    global.TFC_METALS.forEach(metal => {

        datagen.createCompacting(
            outputOf(ITEM, `tfc:metal/double_ingot/${metal}`, 1, 1),
            [
                inputOf(ITEM, `tfc:metal/ingot/${metal}`, 1),
                inputOf(ITEM, `tfc:metal/ingot/${metal}`, 1),
                inputOf(ITEM, "tfc:powder/flux", 1)
            ]
        ).heatRequirement(HEAT_REQUIREMENT.HEATED).id(`modpack:compacting/double_ingot/${metal}`).generate()

        datagen.createCompacting(
            outputOf(ITEM, `tfc:metal/double_sheet/${metal}`, 1, 1),
            [
                inputOf(ITEM, `tfc:metal/sheet/${metal}`, 1),
                inputOf(ITEM, `tfc:metal/sheet/${metal}`, 1),
                inputOf(ITEM, "tfc:powder/flux", 1)
            ]
        ).heatRequirement(HEAT_REQUIREMENT.HEATED).id(`modpack:compacting/double_sheet/${metal}`).generate()

        if (metal != "wrought_iron") {

            datagen.createCompacting(
                outputOf(ITEM, `tfc:metal/sheet/${metal}`, 1, 1),
                [
                    inputOf(IO_TYPE.FLUID, `tfc:metal/${metal}`, 200)
                ]
            ).heatRequirement(HEAT_REQUIREMENT.HEATED).id(`modpack:compacting/sheet/${metal}`).generate()
        }
    })

    global.TFC_SAND_COLOURS.forEach(colour => {

        datagen.createCompacting(
            outputOf(ITEM, `tfc:raw_sandstone/${colour}`, 1, 1),
            [
                inputOf(ITEM, `tfc:sand/${colour}`, 1),
                inputOf(ITEM, `tfc:sand/${colour}`, 1)
            ]
        ).id(`modpack:compacting/sand/${colour}`).generate()
    })

    global.DYE_COLOURS.forEach(colour => {

        datagen.createCompacting(
            outputOf(ITEM, `minecraft:${colour}_dye`, 1, 1),
            [
                inputOf(IO_TYPE.FLUID, `tfc:${colour}_dye`, 1000)
            ]
        ).heatRequirement(HEAT_REQUIREMENT.HEATED).id(`modpack:compacting/dye/${colour}`).generate()
    })
})
