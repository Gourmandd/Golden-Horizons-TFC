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
    global.DYE_COLOURS.forEach(colour => {
        damage_inputs(`${mod_id}:wood/lumber/${colour}`, 8, `#pastel:${colour}_logs`, "#c:tools/saw", `${mod_id}:crafting/shapeless/lumber/${colour}`)
        damage_inputs(`${mod_id}:wood/lumber/${colour}`, 2, `${mod_id}:wood/support/${colour}`, "#c:tools/saw", `${mod_id}:crafting/shapeless/supports_to_lumber/${colour}`)

        damage_inputs(`${mod_id}:wood/lumber/${colour}`, 4, global.PASTEL_WOODS["planks"][colour], "#c:tools/saw", `${mod_id}:crafting/shapeless/planks_to_lumber/${colour}`)
        damage_inputs(`${mod_id}:wood/lumber/${colour}`, 3, global.PASTEL_WOODS["stairs"][colour], "#c:tools/saw", `${mod_id}:crafting/shapeless/stairs_to_lumber/${colour}`)
        damage_inputs(`${mod_id}:wood/lumber/${colour}`, 2, global.PASTEL_WOODS["slab"][colour], "#c:tools/saw", `${mod_id}:crafting/shapeless/slab_to_lumber/${colour}`)
    })

    // Wooden Support recycling & Crafting
    global.SPECTRUM_WOODS.forEach(type => {

        if (global.NOXWOODS.indexOf(type) > -1) {

            let wood = type + "_noxwood"

            damage_inputs(`${mod_id}:wood/lumber/${type}_noxwood`, 8, `#pastel:${type}_noxcap_stems`, "#c:tools/saw", `${mod_id}:crafting/shapeless/lumber/${type}_noxwood`)
            damage_inputs(`${mod_id}:wood/lumber/${type}_noxwood`, 2, `${mod_id}:wood/support/${type}_noxwood`, "#c:tools/saw", `${mod_id}:crafting/shapeless/supports_to_lumber/${type}_noxwood`)

            damage_inputs(`${mod_id}:wood/lumber/${wood}`, 4, global.PASTEL_WOODS["planks"][wood], "#c:tools/saw", `${mod_id}:crafting/shapeless/planks_to_lumber/${wood}`)
            damage_inputs(`${mod_id}:wood/lumber/${wood}`, 3, global.PASTEL_WOODS["stairs"][wood], "#c:tools/saw", `${mod_id}:crafting/shapeless/stairs_to_lumber/${wood}`)
            damage_inputs(`${mod_id}:wood/lumber/${wood}`, 2, global.PASTEL_WOODS["slab"][wood], "#c:tools/saw", `${mod_id}:crafting/shapeless/slab_to_lumber/${wood}`)

        } else {

            damage_inputs(`${mod_id}:wood/lumber/${type}`, 8, `#pastel:${type}_logs`, "#c:tools/saw", `${mod_id}:crafting/shapeless/lumber/${type}`)
            damage_inputs(`${mod_id}:wood/lumber/${type}`, 2, `${mod_id}:wood/support/${type}`, "#c:tools/saw", `${mod_id}:crafting/shapeless/supports_to_lumber/${type}`)

            damage_inputs(`${mod_id}:wood/lumber/${type}`, 4, global.PASTEL_WOODS["planks"][type], "#c:tools/saw", `${mod_id}:crafting/shapeless/planks_to_lumber/${type}`)
            damage_inputs(`${mod_id}:wood/lumber/${type}`, 3, global.PASTEL_WOODS["stairs"][type], "#c:tools/saw", `${mod_id}:crafting/shapeless/stairs_to_lumber/${type}`)
            damage_inputs(`${mod_id}:wood/lumber/${type}`, 2, global.PASTEL_WOODS["slab"][type], "#c:tools/saw", `${mod_id}:crafting/shapeless/slab_to_lumber/${type}`)
        }
    })






    // TFCified wood block crafting
    global.SPECTRUM_WOODS.forEach(wood => {

        if (global.NOXWOODS.indexOf(wood) > -1) {

            damage_inputs(`${mod_id}:wood/lumber/${wood}_noxwood`, 8, `#pastel:${wood}_noxcap_stems`, "#c:tools/saw", `${mod_id}:crafting/shapeless/lumber/logs/${wood}`)
            damage_inputs(`${mod_id}:wood/lumber/${wood}_noxwood`, 4, `pastel:${wood}_noxwood_planks`, "#c:tools/saw", `${mod_id}:crafting/shapeless/lumber/planks/${wood}`)
            damage_inputs(`${mod_id}:wood/lumber/${wood}_noxwood`, 3, `pastel:${wood}_noxwood_stairs`, "#c:tools/saw", `${mod_id}:crafting/shapeless/lumber/stairs/${wood}`)
            damage_inputs(`${mod_id}:wood/lumber/${wood}_noxwood`, 2, `pastel:${wood}_noxwood_slab`, "#c:tools/saw", `${mod_id}:crafting/shapeless/lumber/slab/${wood}`)

        } else {

            damage_inputs(`${mod_id}:wood/lumber/${wood}`, 8, `#pastel:${wood}_logs`, "#c:tools/saw", `${mod_id}:crafting/shapeless/lumber/logs/${wood}`)
            damage_inputs(`${mod_id}:wood/lumber/${wood}`, 4, `pastel:${wood}_planks`, "#c:tools/saw", `${mod_id}:crafting/shapeless/lumber/planks/${wood}`)
            damage_inputs(`${mod_id}:wood/lumber/${wood}`, 3, `pastel:${wood}_stairs`, "#c:tools/saw", `${mod_id}:crafting/shapeless/lumber/stairs/${wood}`)
            damage_inputs(`${mod_id}:wood/lumber/${wood}`, 2, `pastel:${wood}_slab`, "#c:tools/saw", `${mod_id}:crafting/shapeless/lumber/slab/${wood}`)
        }
    })
})
