


ServerEvents.recipes(event =>{

    function lumberRecipes(wood){

        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless(Item.of(`kubejs:wood/lumber/${wood}`, 8), [`#spectrum:${wood}_logs`, "#tfc:saws"])
        ).id(`modpack:crafting/shapeless/lumber/logs/${wood}`)

        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless(Item.of(`kubejs:wood/lumber/${wood}`, 4), [`spectrum:${wood}_planks`, "#tfc:saws"])
        ).id(`modpack:crafting/shapeless/lumber/planks/${wood}`)

        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless(Item.of(`kubejs:wood/lumber/${wood}`, 3), [`spectrum:${wood}_stairs`, "#tfc:saws"])
        ).id(`modpack:crafting/shapeless/lumber/stairs/${wood}`)

        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless(Item.of(`kubejs:wood/lumber/${wood}`, 2), [`spectrum:${wood}_slab`, "#tfc:saws"])
        ).id(`modpack:crafting/shapeless/lumber/slab/${wood}`)
    }
    
    global.OVERWORLD_WOOD_TYPES.forEach(type => {
         event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless(Item.of(`${global.WOOD_TYPE_TO_MOD[type]}:wood/lumber/${type}`, 2), [Item.of(`${global.WOOD_TYPE_TO_MOD[type]}:wood/support/${type}`, "#tfc:saws")])
        ).id(`modpack:crafting/shapeless/supports_to_lumber/${type}`)
    })

    global.DYE_COLOURS.forEach(colour => {
        

        event.remove(`spectrum:crafting_table/colored_wood/${colour}_planks`)
        event.remove(`spectrum:crafting_table/colored_wood/${colour}_plank_fence`)
        event.remove(`spectrum:crafting_table/colored_wood/${colour}_plank_fence_gate`)
        event.remove(`spectrum:crafting_table/colored_wood/${colour}_plank_pressure_plate`)

        event.shaped(Item.of(`spectrum:${colour}_planks`), ["LL", "LL"], {"L": `kubejs:wood/lumber/${colour}`})
            .id(`modpack:crafting/shaped/${colour}/planks`)

        event.shaped(Item.of(`spectrum:${colour}_fence`, 8), ["PLP", "PLP"], {"L": `kubejs:wood/lumber/${colour}`, "P": `spectrum:${colour}_planks`})
            .id(`modpack:crafting/shaped/${colour}/fence`)

        event.shaped(Item.of(`spectrum:${colour}_fence_gate`, 2), ["LPL", "LPL"], {"L": `kubejs:wood/lumber/${colour}`, "P": `spectrum:${colour}_planks`})
            .id(`modpack:crafting/shaped/${colour}/fence_gate`)

        event.shaped(Item.of(`spectrum:${colour}_pressure_plate`, 1), ["LL"], {"L": `kubejs:wood/lumber/${colour}`})
            .id(`modpack:crafting/shaped/${colour}/pressure_plate`)

        lumberRecipes(colour)
    })

    global.SPECTRUM_WOODS.forEach(wood => {

        if (global.NOXWOODS.indexOf(wood) > -1){

            event.remove(`spectrum:crafting_table/noxwood/${wood}_planks`)
            event.remove(`spectrum:crafting_table/noxwood/${wood}_door`)
            event.remove(`spectrum:crafting_table/noxwood/${wood}_trapdoor`)
            event.remove(`spectrum:crafting_table/noxwood/${wood}_fence`)
            event.remove(`spectrum:crafting_table/noxwood/${wood}_fence_gate`)
            event.remove(`spectrum:crafting_table/noxwood/${wood}_pressure_plate`)

            event.shaped(Item.of(`spectrum:${wood}_noxwood_planks`), ["LL", "LL"], {"L": `kubejs:wood/lumber/${wood}`})
                .id(`modpack:crafting/shaped/${wood}/planks`)

            event.shaped(Item.of(`spectrum:${wood}_noxwood_door`, 2), ["LL", "LL", "LL"], {"L": `kubejs:wood/lumber/${wood}`})
                .id(`modpack:crafting/shaped/${wood}/door`)

            event.shaped(Item.of(`spectrum:${wood}_noxwood_trapdoor`, 3), ["LLL", "LLL"], {"L": `kubejs:wood/lumber/${wood}`})
                .id(`modpack:crafting/shaped/${wood}/trapdoor`)

            event.shaped(Item.of(`spectrum:${wood}_noxwood_fence`, 8), ["PLP", "PLP"], {"L": `kubejs:wood/lumber/${wood}`, "P": `spectrum:${wood}_noxwood_planks`})
                .id(`modpack:crafting/shaped/${wood}/fence`)

            event.shaped(Item.of(`spectrum:${wood}_noxwood_fence_gate`, 2), ["LPL", "LPL"], {"L": `kubejs:wood/lumber/${wood}`, "P": `spectrum:${wood}_noxwood_planks`})
                .id(`modpack:crafting/shaped/${wood}/fence_gate`)
                
            event.shaped(Item.of(`spectrum:${wood}_noxwood_pressure_plate`, 1), ["LL"], {"L": `kubejs:wood/lumber/${wood}`})
                .id(`modpack:crafting/shaped/${wood}/pressure_plate`)

            event.recipes.tfc.damage_inputs_shapeless_crafting(
                event.shapeless(Item.of(`kubejs:wood/lumber/${wood}`, 8), [`#spectrum:${wood}_noxcap_stems`, "#tfc:saws"])
            ).id(`modpack:crafting/shapeless/lumber/logs/${wood}`)

            event.recipes.tfc.damage_inputs_shapeless_crafting(
                event.shapeless(Item.of(`kubejs:wood/lumber/${wood}`, 4), [`spectrum:${wood}_noxwood_planks`, "#tfc:saws"])
            ).id(`modpack:crafting/shapeless/lumber/planks/${wood}`)

            event.recipes.tfc.damage_inputs_shapeless_crafting(
                event.shapeless(Item.of(`kubejs:wood/lumber/${wood}`, 3), [`spectrum:${wood}_noxwood_stairs`, "#tfc:saws"])
            ).id(`modpack:crafting/shapeless/lumber/stairs/${wood}`)

            event.recipes.tfc.damage_inputs_shapeless_crafting(
                event.shapeless(Item.of(`kubejs:wood/lumber/${wood}`, 2), [`spectrum:${wood}_noxwood_slab`, "#tfc:saws"])
            ).id(`modpack:crafting/shapeless/lumber/slab/${wood}`)


        } else {


            event.remove(`spectrum:crafting_table/${wood}/planks`)
            event.remove(`spectrum:crafting_table/${wood}/door`)
            event.remove(`spectrum:crafting_table/${wood}/trapdoor`)
            event.remove(`spectrum:crafting_table/${wood}/fence`)
            event.remove(`spectrum:crafting_table/${wood}/gate`)
            event.remove(`spectrum:crafting_table/${wood}/pressure_plate`)

            event.shaped(Item.of(`spectrum:${wood}_planks`), ["LL", "LL"], {"L": `kubejs:wood/lumber/${wood}`})
                .id(`modpack:crafting/shaped/${wood}/planks`)

            event.shaped(Item.of(`spectrum:${wood}_door`, 2), ["LL", "LL", "LL"], {"L": `kubejs:wood/lumber/${wood}`})
                .id(`modpack:crafting/shaped/${wood}/door`)

            event.shaped(Item.of(`spectrum:${wood}_trapdoor`, 3), ["LLL", "LLL"], {"L": `kubejs:wood/lumber/${wood}`})
                .id(`modpack:crafting/shaped/${wood}/trapdoor`)

            event.shaped(Item.of(`spectrum:${wood}_fence`, 8), ["PLP", "PLP"], {"L": `kubejs:wood/lumber/${wood}`, "P": `spectrum:${wood}_planks`})
                .id(`modpack:crafting/shaped/${wood}/fence`)

            event.shaped(Item.of(`spectrum:${wood}_fence_gate`, 2), ["LPL", "LPL"], {"L": `kubejs:wood/lumber/${wood}`, "P": `spectrum:${wood}_planks`})
                .id(`modpack:crafting/shaped/${wood}/fence_gate`)

            event.shaped(Item.of(`spectrum:${wood}_pressure_plate`, 1), ["LL"], {"L": `kubejs:wood/lumber/${wood}`})
                .id(`modpack:crafting/shaped/${wood}/prssure_plate`)

            lumberRecipes(wood)
        }
    })
})

ServerEvents.tags("item", event =>{

    global.AFC_WOOD_TYPES.forEach(type =>{
        event.add("tfc:support_beams", `afc:wood/support/${type}`)
    })
})