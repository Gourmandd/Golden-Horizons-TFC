// requires: pastel

ServerEvents.recipes(event => {

    let datagen = Datagen(event).terraFirmaCraftRecipes()

    function damage_inputs(output, outputCount, input, tool, id) {
        if (input[0] == "#") {
            datagen.advancedShapeless(
                outputOf(IO_TYPE.ITEM, output, outputCount),
                [inputOf(IO_TYPE.ITEM_TAG, input, 1)],
                inputOf(IO_TYPE.ITEM_TAG, tool, 1)
            )
                .addModifier(datagen.MODIFIERS.DAMAGE_CRAFTING_REMAINDER)
                .id(id)
                .generate()
        } else {
            datagen.advancedShapeless(
                outputOf(IO_TYPE.ITEM, output, outputCount),
                [inputOf(IO_TYPE.ITEM, input, 1)],
                inputOf(IO_TYPE.ITEM_TAG, tool, 1)
            )
                .addModifier(datagen.MODIFIERS.DAMAGE_CRAFTING_REMAINDER)
                .id(id)
                .generate()
        }
    }

    // Wooden Support recycling & Crafting
    // supports not yet registered by core mod.
    /*
    global.DYE_COLOURS.forEach(colour => {
        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless(Item.of(`${mod_id}:wood/support/${colour}`, 8), [`#pastel:${colour}_logs`, "#tfc:saws"])
        ).id(`${mod_id}:crafting/shapeless/supports/${colour}`)

        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless(Item.of(`${mod_id}:wood/lumber/${colour}`, 2), [Item.of(`${mod_id}:wood/support/${colour}`), "#tfc:saws"])
        ).id(`${mod_id}:crafting/shapeless/supports_to_lumber/${colour}`)
    })
    */

    /*
    // Wooden Support recycling & Crafting
    global.SPECTRUM_WOODS.forEach(type => {

        if (global.NOXWOODS.indexOf(type) > -1) {

            event.recipes.tfc.damage_inputs_shapeless_crafting(
                event.shapeless(Item.of(`${mod_id}:wood/support/${type}`, 8), [`#pastel:${type}_noxcap_stems`, "#tfc:saws"])
            ).id(`${mod_id}:crafting/shapeless/supports/${type}_noxwood`)

            event.recipes.tfc.damage_inputs_shapeless_crafting(
                event.shapeless(Item.of(`${mod_id}:wood/lumber/${type}`, 2), [Item.of(`${mod_id}:wood/support/${type}`), "#tfc:saws"])
            ).id(`${mod_id}:crafting/shapeless/supports_to_lumber/${type}_noxwood`)

        } else {

            event.recipes.tfc.damage_inputs_shapeless_crafting(
                event.shapeless(Item.of(`${mod_id}:wood/support/${type}`, 8), [`#pastel:${type}_logs`, "#tfc:saws"])
            ).id(`${mod_id}:crafting/shapeless/supports/${type}`)

            event.recipes.tfc.damage_inputs_shapeless_crafting(
                event.shapeless(Item.of(`${mod_id}:wood/lumber/${type}`, 2), [Item.of(`${mod_id}:wood/support/${type}`), "#tfc:saws"])
            ).id(`${mod_id}:crafting/shapeless/supports_to_lumber/${type}`)
        }
    })
    */





    // TFCified wood block crafting
    global.SPECTRUM_WOODS.forEach(wood => {

        if (global.NOXWOODS.indexOf(wood) > -1) {

            damage_inputs(`${mod_id}:wood/lumber/${wood}`, 8, `#pastel:${wood}_noxcap_stems`, "#tfc:saws", `${mod_id}:crafting/shapeless/lumber/logs/${wood}`)
            damage_inputs(`${mod_id}:wood/lumber/${wood}`, 4, `pastel:${wood}_noxwood_planks`, "#tfc:saws", `${mod_id}:crafting/shapeless/lumber/planks/${wood}`)
            damage_inputs(`${mod_id}:wood/lumber/${wood}`, 3, `pastel:${wood}_noxwood_stairs`, "#tfc:saws", `${mod_id}:crafting/shapeless/lumber/stairs/${wood}`)
            damage_inputs(`${mod_id}:wood/lumber/${wood}`, 2, `pastel:${wood}_noxwood_slab`, "#tfc:saws", `${mod_id}:crafting/shapeless/lumber/slab/${wood}`)

        } else {

            damage_inputs(`${mod_id}:wood/lumber/${wood}`, 8, `#pastel:${wood}_logs`, "#tfc:saws", `${mod_id}:crafting/shapeless/lumber/logs/${wood}`)
            damage_inputs(`${mod_id}:wood/lumber/${wood}`, 4, `pastel:${wood}_planks`, "#tfc:saws", `${mod_id}:crafting/shapeless/lumber/planks/${wood}`)
            damage_inputs(`${mod_id}:wood/lumber/${wood}`, 3, `pastel:${wood}_stairs`, "#tfc:saws", `${mod_id}:crafting/shapeless/lumber/stairs/${wood}`)
            damage_inputs(`${mod_id}:wood/lumber/${wood}`, 2, `pastel:${wood}_slab`, "#tfc:saws", `${mod_id}:crafting/shapeless/lumber/slab/${wood}`)
        }
    })
})
