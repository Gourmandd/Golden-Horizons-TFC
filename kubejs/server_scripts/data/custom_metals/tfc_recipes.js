//priority: 1
// requires: kubejs_tfc

ServerEvents.recipes(event => {

    global.KUBEJS_METALS.forEach(metal => {

        event.recipes.tfc.welding(Item.of(`${mod_id}:metal/double_ingot/${metal}`), Item.of(`${mod_id}:metal/ingot/${metal}`), Item.of(`${mod_id}:metal/ingot/${metal}`))
            .id(`${mod_id}:welding/${metal}_double_ingot`)


        event.recipes.tfc.welding(Item.of(`${mod_id}:metal/double_sheet/${metal}`), Item.of(`${mod_id}:metal/sheet/${metal}`), Item.of(`${mod_id}:metal/sheet/${metal}`))
            .id(`${mod_id}:welding/${metal}_double_sheet`)

        event.recipes.tfc.anvil(`${mod_id}:metal/sheet/${metal}`, `${mod_id}:metal/double_ingot/${metal}`, [
            "hit_last",
            "hit_second_last",
            "hit_third_last"
        ]).tier(2).id(`${mod_id}:anvil/sheet/${metal}`)

        event.recipes.tfc.anvil(Item.of(`${mod_id}:metal/rod/${metal}`, 2), `${mod_id}:metal/ingot/${metal}`, [
            "bend_last",
            "draw_second_last",
            "draw_third_last"
        ]).tier(2).id(`${mod_id}:anvil/rod/${metal}`)

        event.recipes.tfc.casting(`${mod_id}:metal/ingot/${metal}`, "tfc:ceramic/ingot_mold", Fluid.of(global.METAL_FLUIDS[metal], 100), 0.1)
            .id(`${mod_id}:casting/ingot_mold/${metal}`)

        event.recipes.tfc.casting(`${mod_id}:metal/ingot/${metal}`, "tfc:ceramic/fire_ingot_mold", Fluid.of(global.METAL_FLUIDS[metal], 100), 0.01)
            .id(`${mod_id}:casting/fire_ingot_mold/${metal}`)

        event.recipes.tfc.heating(`${mod_id}:metal/ingot/${metal}`, global.MELTING_POINTS[metal]).resultFluid(Fluid.of(global.METAL_FLUIDS[metal], 100)).id(`${mod_id}:heating/ingot/${metal}`)
        event.recipes.tfc.heating(`${mod_id}:metal/double_ingot/${metal}`, global.MELTING_POINTS[metal]).resultFluid(Fluid.of(global.METAL_FLUIDS[metal], 200)).id(`${mod_id}:heating/double_ingot/${metal}`)
        event.recipes.tfc.heating(`${mod_id}:metal/sheet/${metal}`, global.MELTING_POINTS[metal]).resultFluid(Fluid.of(global.METAL_FLUIDS[metal], 200)).id(`${mod_id}:heating/sheet/${metal}`)
        event.recipes.tfc.heating(`${mod_id}:metal/double_sheet/${metal}`, global.MELTING_POINTS[metal]).resultFluid(Fluid.of(global.METAL_FLUIDS[metal], 400)).id(`${mod_id}:heating/double_sheet/${metal}`)
        event.recipes.tfc.heating(`${mod_id}:metal/rod/${metal}`, global.MELTING_POINTS[metal]).resultFluid(Fluid.of(global.METAL_FLUIDS[metal], 50)).id(`${mod_id}:heating/rod/${metal}`)
    })
})
