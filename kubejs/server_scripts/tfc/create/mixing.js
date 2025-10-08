ServerEvents.recipes(event =>{

    let datagen = Datagen(event).recipe()

    global.DYE_COLOURS.forEach(colour => {

        datagen.createMixing(
            outputOf(IO_TYPE.FLUID, `tfc:${colour}_dye`, 1000),
            [
                inputOf(IO_TYPE.FLUID, "minecraft:water", 1000),
                inputOf(IO_TYPE.ITEM, `minecraft:${colour}_dye`, 1)
            ]
        ).heatRequirement(HEAT_REQUIREMENT.HEATED).id(`modpack:mixing/dye/${colour}`).generate()
    })
})