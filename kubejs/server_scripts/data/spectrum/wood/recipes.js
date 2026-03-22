// requires: spectrum
// to be ported to the mod. If possible.

ServerEvents.recipes(event => {

    // TFCified wood block crafting
    global.PASTEL_WOOD_TYPES.forEach(wood => {

        if (global.NOXWOODS.indexOf(wood) > -1) {

            let root = wood.replace("_noxwood", "")

            event.remove(`spectrum:crafting_table/noxwood/${root}_planks`)
            event.remove(`spectrum:crafting_table/noxwood/${root}_door`)
            event.remove(`spectrum:crafting_table/noxwood/${root}_trapdoor`)
            event.remove(`spectrum:crafting_table/noxwood/${root}_fence`)
            event.remove(`spectrum:crafting_table/noxwood/${root}_fence_gate`)
            event.remove(`spectrum:crafting_table/noxwood/${root}_pressure_plate`)

            event.shaped(Item.of(`spectrum:${wood}_planks`), ["LL", "LL"], { "L": `${mod_id}:wood/lumber/${wood}` })
                .id(`${mod_id}:crafting/shaped/${wood}/planks`)

            event.shaped(Item.of(`spectrum:${wood}_door`, 2), ["LL", "LL", "LL"], { "L": `${mod_id}:wood/lumber/${wood}` })
                .id(`${mod_id}:crafting/shaped/${wood}/door`)

            event.shaped(Item.of(`spectrum:${wood}_trapdoor`, 3), ["LLL", "LLL"], { "L": `${mod_id}:wood/lumber/${wood}` })
                .id(`${mod_id}:crafting/shaped/${wood}/trapdoor`)

            event.shaped(Item.of(`spectrum:${wood}_fence`, 8), ["PLP", "PLP"], { "L": `${mod_id}:wood/lumber/${wood}`, "P": `spectrum:${wood}_planks` })
                .id(`${mod_id}:crafting/shaped/${wood}/fence`)

            event.shaped(Item.of(`spectrum:${wood}_fence_gate`, 2), ["LPL", "LPL"], { "L": `${mod_id}:wood/lumber/${wood}`, "P": `spectrum:${wood}_planks` })
                .id(`${mod_id}:crafting/shaped/${wood}/fence_gate`)

            event.shaped(Item.of(`spectrum:${wood}_pressure_plate`, 1), ["LL"], { "L": `${mod_id}:wood/lumber/${wood}` })
                .id(`${mod_id}:crafting/shaped/${wood}/pressure_plate`)

        } else {

            if (wood == "weeping_gala") {

                event.remove(`spectrum:crafting_table/${wood}/door`)
                event.remove(`spectrum:crafting_table/${wood}/trapdoor`)
                event.remove(`spectrum:crafting_table/${wood}/planks`)
                event.remove(`spectrum:crafting_table/${wood}/fence`)
                event.remove(`spectrum:crafting_table/${wood}/gate`)
                event.remove(`spectrum:crafting_table/${wood}/pressure_plate`)

                event.shaped(Item.of(`spectrum:${wood}_door`, 2), ["LL", "LL", "LL"], { "L": `${mod_id}:wood/lumber/${wood}` })
                    .id(`${mod_id}:crafting/shaped/${wood}/door`)

                event.shaped(Item.of(`spectrum:${wood}_trapdoor`, 3), ["LLL", "LLL"], { "L": `${mod_id}:wood/lumber/${wood}` })
                    .id(`${mod_id}:crafting/shaped/${wood}/trapdoor`)
            } else {

                event.remove(`spectrum:crafting_table/colored_wood/${wood}_plank_planks`)
                event.remove(`spectrum:crafting_table/colored_wood/${wood}_plank_fence`)
                event.remove(`spectrum:crafting_table/colored_wood/${wood}_plank_fence_gate`)
                event.remove(`spectrum:crafting_table/colored_wood/${wood}_plank_pressure_plate`)
            }


            event.shaped(Item.of(`spectrum:${wood}_planks`), ["LL", "LL"], { "L": `${mod_id}:wood/lumber/${wood}` })
                .id(`${mod_id}:crafting/shaped/${wood}/planks`)

            event.shaped(Item.of(`spectrum:${wood}_fence`, 8), ["PLP", "PLP"], { "L": `${mod_id}:wood/lumber/${wood}`, "P": `spectrum:${wood}_planks` })
                .id(`${mod_id}:crafting/shaped/${wood}/fence`)

            event.shaped(Item.of(`spectrum:${wood}_fence_gate`, 2), ["LPL", "LPL"], { "L": `${mod_id}:wood/lumber/${wood}`, "P": `spectrum:${wood}_planks` })
                .id(`${mod_id}:crafting/shaped/${wood}/fence_gate`)

            event.shaped(Item.of(`spectrum:${wood}_pressure_plate`, 1), ["LL"], { "L": `${mod_id}:wood/lumber/${wood}` })
                .id(`${mod_id}:crafting/shaped/${wood}/prssure_plate`)
        }

        event.shaped(Item.of(`${mod_id}:wood/scribing_table/${wood}`, 1), ["F B", "PPP", "S S"], { "F": "#c:feathers", "B": "#c:dyes/black", "P": global.PASTEL_WOODS["planks"][wood], "S": global.PASTEL_WOODS["slab"][wood] })
            .id(`${mod_id}:crafting/shaped/${wood}/scribing_table`)

        event.shaped(Item.of(`${mod_id}:wood/sewing_table/${wood}`, 1), [" LS", "PPP", "G G"], { "L": "#c:leathers", "S": "#c:tools/shear", "P": global.PASTEL_WOODS["planks"][wood], "G": global.PASTEL_WOODS["log"][wood] })
            .id(`${mod_id}:crafting/shaped/${wood}/sewing_table`)

        event.shaped(Item.of(`${mod_id}:wood/sluice/${wood}`, 1), ["  S", " SL", "SLL"], { "S": "#c:rods/wooden", "L": `${mod_id}:wood/lumber/${wood}` })
            .id(`${mod_id}:crafting/shaped/${wood}/sluice`)

        event.shaped(Item.of(`${mod_id}:wood/tool_rack/${wood}`, 1), ["LLL", "   ", "LLL"], { "L": `${mod_id}:wood/lumber/${wood}` })
            .id(`${mod_id}:crafting/shaped/${wood}/tool_rack`)

        event.shaped(Item.of(`${mod_id}:wood/loom/${wood}`, 1), ["LLL", "LSL", "L L"], { "S": "#c:rods/wooden", "L": `${mod_id}:wood/lumber/${wood}` })
            .id(`${mod_id}:crafting/shaped/${wood}/loom`)

        event.shaped(Item.of(`${mod_id}:wood/shelf/${wood}`, 2), ["PPP", "L L", "S S"], { "S": "#c:rods/wooden", "L": `${mod_id}:wood/lumber/${wood}`, "P": global.PASTEL_WOODS["planks"][wood] })
            .id(`${mod_id}:crafting/shaped/${wood}/shelf`)
    })
})
