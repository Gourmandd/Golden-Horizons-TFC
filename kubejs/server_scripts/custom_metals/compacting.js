ServerEvents.recipes(event =>{

    let datagen = Datagen(event).recipe()
    const ITEM = IO_TYPE.ITEM
    
    global.KUBEJS_METALS.forEach(metal =>{

        datagen.createCompacting(
            outputOf(ITEM, `kubejs:metal/double_ingot/${metal}`, 1, 1),
            [
                inputOf(ITEM, `kubejs:metal/ingot/${metal}`, 1),
                inputOf(ITEM, `kubejs:metal/ingot/${metal}`, 1),
                inputOf(ITEM, "tfc:powder/flux", 1)
            ]
        ).heatRequirement(HEAT_REQUIREMENT.HEATED)
        .id(`modpack:compacting/double_ingot/${metal}`)
        .generate()

        datagen.createCompacting(
            outputOf(ITEM, `kubejs:metal/double_sheet/${metal}`, 1, 1),
            [
                inputOf(ITEM, `kubejs:metal/sheet/${metal}`, 1),
                inputOf(ITEM, `kubejs:metal/sheet/${metal}`, 1),
                inputOf(ITEM, "tfc:powder/flux", 1)
            ]
        ).heatRequirement(HEAT_REQUIREMENT.HEATED)
        .id(`modpack:compacting/double_sheet/${metal}`)
        .generate()

        if (Platform.isLoaded("create_big_cannons") && metal !== "aluminium"){
            datagen.createCompacting(
                outputOf(ITEM, `kubejs:metal/sheet/${metal}`, 1, 1),
                inputOf(IO_TYPE.FLUID, global.METAL_FLUIDS[metal], 200)
            ).heatRequirement(HEAT_REQUIREMENT.HEATED)
            .id(`modpack:compacting/sheet/${metal}`)
            .generate()
        }

        if (metal == "aluminium"){
            datagen.createCompacting(
                outputOf(ITEM, `kubejs:metal/sheet/${metal}`, 1, 1),
                inputOf(IO_TYPE.FLUID, global.METAL_FLUIDS[metal], 200)
            ).heatRequirement(HEAT_REQUIREMENT.HEATED)
            .id(`modpack:compacting/sheet/${metal}`)
            .generate()
        }
    })
})