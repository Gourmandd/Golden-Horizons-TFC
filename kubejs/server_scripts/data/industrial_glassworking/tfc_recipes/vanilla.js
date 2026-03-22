// to be ported to the mod.

ServerEvents.recipes(event => {

    let datagen = Datagen(event).terraFirmaCraftRecipes()

    const TEMP = 1070

    function heating(item, fluidOutput, id) {
        datagen.heating(
            null,
            fluidOutput,
            inputOf(IO_TYPE.ITEM, item, 1),
            TEMP
        )
            .id(id)
            .generate()
    }

    function casting(result, fluidInput, mold, id) {
        datagen.casting(
            outputOf(IO_TYPE.ITEM, result, 1),
            fluidInput,
            inputOf(IO_TYPE.ITEM, mold, 1)
        ).id(id).breakChance(0).generate()
    }

    global.DYE_COLOURS.forEach(colour => {
        heating(`minecraft:${colour}_stained_glass`, outputOf(IO_TYPE.FLUID, `${mod_id}:glass/${colour}`, 800), `${mod_id}:heating/glass/minecraft/${colour}_glass`)
        heating(`minecraft:${colour}_stained_glass_pane`, outputOf(IO_TYPE.FLUID, `${mod_id}:glass/${colour}`, 50), `${mod_id}:heating/glass/minecraft/${colour}_glass_pane`)

        heating(`${mod_id}:${colour}_lens`, outputOf(IO_TYPE.FLUID, `${mod_id}:glass/${colour}`, 400), `${mod_id}:heating/glass/lens/${colour}`)
        heating(`${mod_id}:molten_glass/${colour}`, outputOf(IO_TYPE.FLUID, `${mod_id}:glass/${colour}`, 800), `${mod_id}:heating/molten_glass/${colour}`)

        casting(`minecraft:${colour}_stained_glass`, inputOf(IO_TYPE.FLUID, `${mod_id}:glass/${colour}`, 800), `${mod_id}:glass_mold`, `modpack:casting/glass/${colour}`)
        casting(`minecraft:${colour}_stained_glass_pane`, inputOf(IO_TYPE.FLUID, `${mod_id}:glass/${colour}`, 50), `${mod_id}:glass_pane_mold`, `modpack:casting/glass_pane/${colour}`)
    })

    // dealing with clear glass seperately
    heating("minecraft:glass", outputOf(IO_TYPE.FLUID, `${mod_id}:glass/clear`, 800), `${mod_id}:heating/glass/minecraft/clear_glass`)
    heating(`minecraft:glass_pane`, outputOf(IO_TYPE.FLUID, `${mod_id}:glass/clear`, 50), `${mod_id}:heating/glass/minecraft/clear_glass_pane`)

    heating(`tfc:lens`, outputOf(IO_TYPE.FLUID, `${mod_id}:glass/clear`, 400), `${mod_id}:heating/glass/lens/clear`)
    heating(`${mod_id}:molten_glass/clear`, outputOf(IO_TYPE.FLUID, `${mod_id}:glass/clear`, 800), `${mod_id}:heating/molten_glass/clear`)

    casting(`minecraft:glass`, inputOf(IO_TYPE.FLUID, `${mod_id}:glass/clear`, 800), `${mod_id}:glass_mold`, `${mod_id}:casting/glass/clear`)
    casting(`minecraft:glass_pane`, inputOf(IO_TYPE.FLUID, `${mod_id}:glass/clear`, 50), `${mod_id}:glass_pane_mold`, `${mod_id}:casting/glass_pane/clear`)


    heating("tfc:silica_glass_batch", outputOf(IO_TYPE.FLUID, `${mod_id}:glass/clear`, 800), `${mod_id}:recipes/heating/glass_batches/silica`)
    heating("tfc:volcanic_glass_batch", outputOf(IO_TYPE.FLUID, `${mod_id}:glass/blue`, 800), `${mod_id}:recipes/heating/glass_batches/volcanic`)
    heating("tfc:olivine_glass_batch", outputOf(IO_TYPE.FLUID, `${mod_id}:glass/green`, 800), `${mod_id}:recipes/heating/glass_batches/olivine`)
    heating("tfc:hematitic_glass_batch", outputOf(IO_TYPE.FLUID, `${mod_id}:glass/orange`, 800), `${mod_id}:recipes/heating/glass_batches/hematitic`)
})
