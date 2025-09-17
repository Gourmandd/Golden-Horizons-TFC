// requires: pastel
// requires: kubejs_tfc

ServerEvents.recipes(event =>{

    // recycling recipes for custom wood types
    function lumberRecipes(wood){

        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless(Item.of(`kubejs:wood/lumber/${wood}`, 8), [`#pastel:${wood}_logs`, "#tfc:saws"])
        ).id(`modpack:crafting/shapeless/lumber/logs/${wood}`)

        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless(Item.of(`kubejs:wood/lumber/${wood}`, 4), [`pastel:${wood}_planks`, "#tfc:saws"])
        ).id(`modpack:crafting/shapeless/lumber/planks/${wood}`)

        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless(Item.of(`kubejs:wood/lumber/${wood}`, 3), [`pastel:${wood}_stairs`, "#tfc:saws"])
        ).id(`modpack:crafting/shapeless/lumber/stairs/${wood}`)

        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless(Item.of(`kubejs:wood/lumber/${wood}`, 2), [`pastel:${wood}_slab`, "#tfc:saws"])
        ).id(`modpack:crafting/shapeless/lumber/slab/${wood}`)
    }


    // Wooden Support recycling & Crafting
    global.DYE_COLOURS.forEach(colour => {
        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless(Item.of(`kubejs:wood/support/${colour}`, 8), [`#pastel:${colour}_logs`, "#tfc:saws"])
        ).id(`modpack:crafting/shapeless/supports/${colour}`)

        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless(Item.of(`kubejs:wood/lumber/${colour}`, 2), [Item.of(`kubejs:wood/support/${colour}`), "#tfc:saws"])
        ).id(`modpack:crafting/shapeless/supports_to_lumber/${colour}`)
    })


    // Wooden Support recycling & Crafting
    global.SPECTRUM_WOODS.forEach(type => {

        if (global.NOXWOODS.indexOf(type) > -1){
            
            event.recipes.tfc.damage_inputs_shapeless_crafting(
                event.shapeless(Item.of(`kubejs:wood/support/${type}`, 8), [`#pastel:${type}_noxcap_stems`, "#tfc:saws"])
            ).id(`modpack:crafting/shapeless/supports/${type}_noxwood`)

            event.recipes.tfc.damage_inputs_shapeless_crafting(
                event.shapeless(Item.of(`kubejs:wood/lumber/${type}`, 2), [Item.of(`kubejs:wood/support/${type}`), "#tfc:saws"])
            ).id(`modpack:crafting/shapeless/supports_to_lumber/${type}_noxwood`)

        } else {

            event.recipes.tfc.damage_inputs_shapeless_crafting(
                event.shapeless(Item.of(`kubejs:wood/support/${type}`, 8), [`#pastel:${type}_logs`, "#tfc:saws"])
            ).id(`modpack:crafting/shapeless/supports/${type}`)

            event.recipes.tfc.damage_inputs_shapeless_crafting(
                event.shapeless(Item.of(`kubejs:wood/lumber/${type}`, 2), [Item.of(`kubejs:wood/support/${type}`), "#tfc:saws"])
            ).id(`modpack:crafting/shapeless/supports_to_lumber/${type}`)
        }
    })





    // TFCified wood block crafting
    global.SPECTRUM_WOODS.forEach(wood => {

        if (global.NOXWOODS.indexOf(wood) > -1){

            event.recipes.tfc.damage_inputs_shapeless_crafting(
                event.shapeless(Item.of(`kubejs:wood/lumber/${wood}`, 8), [`#pastel:${wood}_noxcap_stems`, "#tfc:saws"])
            ).id(`modpack:crafting/shapeless/lumber/logs/${wood}`)

            event.recipes.tfc.damage_inputs_shapeless_crafting(
                event.shapeless(Item.of(`kubejs:wood/lumber/${wood}`, 4), [`pastel:${wood}_noxwood_planks`, "#tfc:saws"])
            ).id(`modpack:crafting/shapeless/lumber/planks/${wood}`)

            event.recipes.tfc.damage_inputs_shapeless_crafting(
                event.shapeless(Item.of(`kubejs:wood/lumber/${wood}`, 3), [`pastel:${wood}_noxwood_stairs`, "#tfc:saws"])
            ).id(`modpack:crafting/shapeless/lumber/stairs/${wood}`)

            event.recipes.tfc.damage_inputs_shapeless_crafting(
                event.shapeless(Item.of(`kubejs:wood/lumber/${wood}`, 2), [`pastel:${wood}_noxwood_slab`, "#tfc:saws"])
            ).id(`modpack:crafting/shapeless/lumber/slab/${wood}`)


        } else {

            lumberRecipes(wood)
        }
    })
})