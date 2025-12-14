ServerEvents.recipes(event => {

    let datagen = Datagen(event).recipe()
    const ITEM = IO_TYPE.ITEM

    global.KUBEJS_METALS.forEach(metal => {

        datagen.createCompacting(
            outputOf(ITEM, `${mod_id}:metal/double_ingot/${metal}`, 1, 1),
            [
                inputOf(ITEM, `${mod_id}:metal/ingot/${metal}`, 1),
                inputOf(ITEM, `${mod_id}:metal/ingot/${metal}`, 1),
                inputOf(ITEM, "tfc:powder/flux", 1)
            ]
        ).heatRequirement(HEAT_REQUIREMENT.HEATED)
            .id(`${mod_id}:compacting/double_ingot/${metal}`)
            .generate()

        datagen.createCompacting(
            outputOf(ITEM, `${mod_id}:metal/double_sheet/${metal}`, 1, 1),
            [
                inputOf(ITEM, `${mod_id}:metal/sheet/${metal}`, 1),
                inputOf(ITEM, `${mod_id}:metal/sheet/${metal}`, 1),
                inputOf(ITEM, "tfc:powder/flux", 1)
            ]
        ).heatRequirement(HEAT_REQUIREMENT.HEATED)
            .id(`${mod_id}:compacting/double_sheet/${metal}`)
            .generate()

        if (Platform.isLoaded("create_big_cannons") && metal !== "aluminium") {
            datagen.createCompacting(
                outputOf(ITEM, `${mod_id}:metal/sheet/${metal}`, 1, 1),
                inputOf(IO_TYPE.FLUID, global.METAL_FLUIDS[metal], 200)
            ).heatRequirement(HEAT_REQUIREMENT.HEATED)
                .id(`${mod_id}:compacting/sheet/${metal}`)
                .generate()
        }

        if (metal == "aluminium") {
            datagen.createCompacting(
                outputOf(ITEM, `${mod_id}:metal/sheet/${metal}`, 1, 1),
                inputOf(IO_TYPE.FLUID, global.METAL_FLUIDS[metal], 200)
            ).heatRequirement(HEAT_REQUIREMENT.HEATED)
                .id(`${mod_id}:compacting/sheet/${metal}`)
                .generate()
        }
    })
})
