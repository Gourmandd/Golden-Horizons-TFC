ServerEvents.recipes(event =>{

    let datagen = Datagen(event).recipe()

    global.DYE_COLOURS.forEach(colour => {

        datagen.createMixing(
            outputOf(IO_TYPE.FLUID, `tfc:${colour}_dye`, 1000, 1),
            [
                inputOf(IO_TYPE.FLUID, "minecraft:water", 1000),
                inputOf(IO_TYPE.ITEM, `minecraft:${colour}_dye`, 1)
            ]
        ).heatRequirement(HEAT_REQUIREMENT.HEATED).id(`modpack:mixing/dye/${colour}`).generate()
    })

    global.TFC_SOIL_TYPES.forEach(type =>{

        datagen.createMixing(
            outputOf(IO_TYPE.ITEM, `tfc:mud/${type}`, 1, 1),
            [
                inputOf(IO_TYPE.FLUID, "minecraft:water", 250),
                inputOf(IO_TYPE.ITEM, `tfc:dirt/${type}`, 1)
            ]
        ).heatRequirement(HEAT_REQUIREMENT.HEATED).id(`modpack:mixing/mud/${type}`).generate()
    })

    global.TFC_FLOUR_TYPES.forEach(type => {

        datagen.createMixing(
            outputOf(IO_TYPE.ITEM, `tfc:food/${type}_dough`, 1, 1),
            [
                inputOf(IO_TYPE.FLUID, "minecraft:water", 100),
                inputOf(IO_TYPE.ITEM, `tfc:food/${type}_flour`, 1)
            ]
        ).heatRequirement(HEAT_REQUIREMENT.HEATED).id(`modpack:mixing/dough/flatbread/${type}`).generate()

        if (Platform.isLoaded("firmalife")){

            datagen.createMixing(
                outputOf(IO_TYPE.ITEM, "firmalife:food/barley_dough", 4, 1),
                [
                    inputOf(IO_TYPE.FLUID, "firmalife:yeast_starter", 1000),
                    inputOf(IO_TYPE.TAG, "tfc:foods/sweeteners", 1),
                    inputOf(IO_TYPE.ITEM, `tfc:food/${type}_flour`, 1)
                ]
            ).heatRequirement(HEAT_REQUIREMENT.HEATED).id(`modpack:mixing/dough/bread/${type}`).generate() 
        }
    })
})