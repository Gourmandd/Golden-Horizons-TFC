// requires: firmalife

ServerEvents.recipes(event =>{

    let datagen = Datagen(event).recipe()
    const ITEM = IO_TYPE.ITEM
    
    global.FIRMALIFE_METALS.forEach(metal =>{

        datagen.createCompacting(
            outputOf(ITEM, `firmalife:metal/double_ingot/${metal}`, 1, 1),
            [
                inputOf(ITEM, `firmalife:metal/ingot/${metal}`, 1),
                inputOf(ITEM, `firmalife:metal/ingot/${metal}`, 1),
                inputOf(ITEM, "tfc:powder/flux", 1)
            ]
        ).heatRequirement(HEAT_REQUIREMENT.HEATED)
        .id(`modpack:compacting/double_ingot/${metal}`)
        .generate()

        datagen.createCompacting(
            outputOf(ITEM, `firmalife:metal/double_sheet/${metal}`, 1, 1),
            [
                inputOf(ITEM, `firmalife:metal/sheet/${metal}`, 1),
                inputOf(ITEM, `firmalife:metal/sheet/${metal}`, 1),
                inputOf(ITEM, "tfc:powder/flux", 1)
            ]
        ).heatRequirement(HEAT_REQUIREMENT.HEATED)
        .id(`modpack:compacting/double_sheet/${metal}`)
        .generate()

        datagen.createCompacting(
            outputOf(ITEM, `firmalife:metal/sheet/${metal}`, 1, 1),
            inputOf(IO_TYPE.FLUID, `firmalife:metal/${metal}`, 200)
        ).heatRequirement(HEAT_REQUIREMENT.HEATED)
        .id(`modpack:compacting/sheet/${metal}`)
        .generate()
    })
})