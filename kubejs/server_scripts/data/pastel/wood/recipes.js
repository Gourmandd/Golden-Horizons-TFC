// requires: pastel

ServerEvents.recipes(event => {

    // TFCified wood block crafting
    global.DYE_COLOURS.forEach(colour => {

        event.remove(`create:cutting/runtime_generated/compat/create/tag_runtime_generated/compat/pastel/${colour}_to_${colour}_planks`)


        event.remove(`pastel:crafting_table/colored_wood/${colour}_planks`)
        event.remove(`pastel:crafting_table/colored_wood/${colour}_plank_fence`)
        event.remove(`pastel:crafting_table/colored_wood/${colour}_plank_fence_gate`)
        event.remove(`pastel:crafting_table/colored_wood/${colour}_plank_pressure_plate`)

        event.shaped(Item.of(`pastel:${colour}_planks`), ["LL", "LL"], { "L": `${mod_id}:wood/lumber/${colour}` })
            .id(`${mod_id}:crafting/shaped/${colour}/planks`)

        event.shaped(Item.of(`pastel:${colour}_fence`, 8), ["PLP", "PLP"], { "L": `${mod_id}:wood/lumber/${colour}`, "P": `pastel:${colour}_planks` })
            .id(`${mod_id}:crafting/shaped/${colour}/fence`)

        event.shaped(Item.of(`pastel:${colour}_fence_gate`, 2), ["LPL", "LPL"], { "L": `${mod_id}:wood/lumber/${colour}`, "P": `pastel:${colour}_planks` })
            .id(`${mod_id}:crafting/shaped/${colour}/fence_gate`)

        event.shaped(Item.of(`pastel:${colour}_pressure_plate`, 1), ["LL"], { "L": `${mod_id}:wood/lumber/${colour}` })
            .id(`${mod_id}:crafting/shaped/${colour}/pressure_plate`)
    })


    // TFCified wood block crafting
    global.SPECTRUM_WOODS.forEach(wood => {

        if (global.NOXWOODS.indexOf(wood) > -1) {

            event.remove(`pastel:crafting_table/noxwood/${wood}_planks`)
            event.remove(`pastel:crafting_table/noxwood/${wood}_door`)
            event.remove(`pastel:crafting_table/noxwood/${wood}_trapdoor`)
            event.remove(`pastel:crafting_table/noxwood/${wood}_fence`)
            event.remove(`pastel:crafting_table/noxwood/${wood}_fence_gate`)
            event.remove(`pastel:crafting_table/noxwood/${wood}_pressure_plate`)

            event.shaped(Item.of(`pastel:${wood}_noxwood_planks`), ["LL", "LL"], { "L": `${mod_id}:wood/lumber/${wood}` })
                .id(`${mod_id}:crafting/shaped/${wood}/planks`)

            event.shaped(Item.of(`pastel:${wood}_noxwood_door`, 2), ["LL", "LL", "LL"], { "L": `${mod_id}:wood/lumber/${wood}` })
                .id(`${mod_id}:crafting/shaped/${wood}/door`)

            event.shaped(Item.of(`pastel:${wood}_noxwood_trapdoor`, 3), ["LLL", "LLL"], { "L": `${mod_id}:wood/lumber/${wood}` })
                .id(`${mod_id}:crafting/shaped/${wood}/trapdoor`)

            event.shaped(Item.of(`pastel:${wood}_noxwood_fence`, 8), ["PLP", "PLP"], { "L": `${mod_id}:wood/lumber/${wood}`, "P": `pastel:${wood}_noxwood_planks` })
                .id(`${mod_id}:crafting/shaped/${wood}/fence`)

            event.shaped(Item.of(`pastel:${wood}_noxwood_fence_gate`, 2), ["LPL", "LPL"], { "L": `${mod_id}:wood/lumber/${wood}`, "P": `pastel:${wood}_noxwood_planks` })
                .id(`${mod_id}:crafting/shaped/${wood}/fence_gate`)

            event.shaped(Item.of(`pastel:${wood}_noxwood_pressure_plate`, 1), ["LL"], { "L": `${mod_id}:wood/lumber/${wood}` })
                .id(`${mod_id}:crafting/shaped/${wood}/pressure_plate`)

        } else {


            event.remove(`pastel:crafting_table/${wood}/planks`)
            event.remove(`pastel:crafting_table/${wood}/door`)
            event.remove(`pastel:crafting_table/${wood}/trapdoor`)
            event.remove(`pastel:crafting_table/${wood}/fence`)
            event.remove(`pastel:crafting_table/${wood}/gate`)
            event.remove(`pastel:crafting_table/${wood}/pressure_plate`)

            event.shaped(Item.of(`pastel:${wood}_planks`), ["LL", "LL"], { "L": `${mod_id}:wood/lumber/${wood}` })
                .id(`${mod_id}:crafting/shaped/${wood}/planks`)

            event.shaped(Item.of(`pastel:${wood}_door`, 2), ["LL", "LL", "LL"], { "L": `${mod_id}:wood/lumber/${wood}` })
                .id(`${mod_id}:crafting/shaped/${wood}/door`)

            event.shaped(Item.of(`pastel:${wood}_trapdoor`, 3), ["LLL", "LLL"], { "L": `${mod_id}:wood/lumber/${wood}` })
                .id(`${mod_id}:crafting/shaped/${wood}/trapdoor`)

            event.shaped(Item.of(`pastel:${wood}_fence`, 8), ["PLP", "PLP"], { "L": `${mod_id}:wood/lumber/${wood}`, "P": `pastel:${wood}_planks` })
                .id(`${mod_id}:crafting/shaped/${wood}/fence`)

            event.shaped(Item.of(`pastel:${wood}_fence_gate`, 2), ["LPL", "LPL"], { "L": `${mod_id}:wood/lumber/${wood}`, "P": `pastel:${wood}_planks` })
                .id(`${mod_id}:crafting/shaped/${wood}/fence_gate`)

            event.shaped(Item.of(`pastel:${wood}_pressure_plate`, 1), ["LL"], { "L": `${mod_id}:wood/lumber/${wood}` })
                .id(`${mod_id}:crafting/shaped/${wood}/prssure_plate`)

        }
    })
})
