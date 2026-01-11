//priority: 1

ServerEvents.recipes(event => {

    let datagen = Datagen(event).terraFirmaCraftRecipes()

    function heating(item, temperature, fluidOutput, id) {
        datagen.heating(
            null,
            fluidOutput,
            inputOf(IO_TYPE.ITEM, item, 1),
            temperature
        )
            .id(id)
            .generate()
    }

    function welding(output, input, tier, id) {
        datagen.welding(
            outputOf(IO_TYPE.ITEM, output, 1),
            inputOf(IO_TYPE.ITEM, input, 1),
            inputOf(IO_TYPE.ITEM, input, 1)
        ).setTier(tier).id(id).generate()
    }


    global.KUBEJS_METALS.forEach(metal => {

        welding(`${mod_id}:metal/double_ingot/${metal}`, `${mod_id}:metal/ingot/${metal}`, datagen.ANVIL_TIER.IRON, `${mod_id}:welding/${metal}_double_ingot`)
        welding(`${mod_id}:metal/double_sheet/${metal}`, `${mod_id}:metal/sheet/${metal}`, datagen.ANVIL_TIER.IRON, `${mod_id}:welding/${metal}_double_sheet`)

        datagen.anvil(
            outputOf(IO_TYPE.ITEM, `${mod_id}:metal/sheet/${metal}`, 1),
            inputOf(IO_TYPE.ITEM, `${mod_id}:metal/double_ingot/${metal}`, 1),
            [
                "hit_last",
                "hit_second_last",
                "hit_third_last"
            ]
        ).setTier(datagen.ANVIL_TIER.IRON).id(`${mod_id}:anvil/sheet/${metal}`).generate()

        datagen.anvil(
            outputOf(IO_TYPE.ITEM, `${mod_id}:metal/rod/${metal}`, 2),
            inputOf(IO_TYPE.ITEM, `${mod_id}:metal/ingot/${metal}`, 1),
            [
                "bend_last",
                "draw_second_last",
                "draw_third_last"
            ]
        ).setTier(datagen.ANVIL_TIER.IRON).id(`${mod_id}:anvil/rod/${metal}`).generate()

        datagen.casting(
            outputOf(IO_TYPE.ITEM, `${mod_id}:metal/ingot/${metal}`, 1),
            inputOf(IO_TYPE.FLUID, global.METAL_FLUIDS[metal], 100),
            inputOf(IO_TYPE.ITEM, "tfc:ceramic/ingot_mold", 1)
        ).id(`${mod_id}:casting/ingot_mold/${metal}`).breakChance(0.1).generate()

        datagen.casting(
            outputOf(IO_TYPE.ITEM, `${mod_id}:metal/ingot/${metal}`, 1),
            inputOf(IO_TYPE.FLUID, global.METAL_FLUIDS[metal], 100),
            inputOf(IO_TYPE.ITEM, "tfc:ceramic/fire_ingot_mold", 1)
        ).id(`${mod_id}:casting/fire_ingot_mold/${metal}`).breakChance(0.01).generate()

        heating(`${mod_id}:metal/ingot/${metal}`, global.MELTING_POINTS[metal], outputOf(IO_TYPE.FLUID, global.METAL_FLUIDS[metal], 100), `${mod_id}:heating/ingot/${metal}`)
        heating(`${mod_id}:metal/double_ingot/${metal}`, global.MELTING_POINTS[metal], outputOf(IO_TYPE.FLUID, global.METAL_FLUIDS[metal], 200), `${mod_id}:heating/double_ingot/${metal}`)
        heating(`${mod_id}:metal/sheet/${metal}`, global.MELTING_POINTS[metal], outputOf(IO_TYPE.FLUID, global.METAL_FLUIDS[metal], 200), `${mod_id}:heating/sheet/${metal}`)
        heating(`${mod_id}:metal/double_sheet/${metal}`, global.MELTING_POINTS[metal], outputOf(IO_TYPE.FLUID, global.METAL_FLUIDS[metal], 400), `${mod_id}:heating/double_sheet/${metal}`)
        heating(`${mod_id}:metal/rod/${metal}`, global.MELTING_POINTS[metal], outputOf(IO_TYPE.FLUID, global.METAL_FLUIDS[metal], 50), `${mod_id}:heating/rod/${metal}`)
    })
})
