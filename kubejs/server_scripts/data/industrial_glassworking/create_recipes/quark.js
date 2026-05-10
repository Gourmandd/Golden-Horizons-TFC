// requires: quark
// to be ported to the mod.

ServerEvents.recipes(event => {

    let datagen = Datagen(event).terraFirmaCraftRecipes()

    const ITEM = IO_TYPE.ITEM
    const FLUID = IO_TYPE.FLUID

    const GLASS_TO_BATCH = {
        "white": "tfc:silica_glass_batch",
        "brown": "tfc:hematitic_glass_batch",
        "green": "tfc:olivine_glass_batch",
        "orange": "tfc:hematitic_glass_batch",
        "magenta": "tfc:volcanic_glass_batch",
        "red": "tfc:hematitic_glass_batch",
        "black": "tfc:volcanic_glass_batch",
        "light_blue": "tfc:silica_glass_batch",
        "yellow": "tfc:hematitic_glass_batch",
        "lime": "tfc:olivine_glass_batch",
        "pink": "tfc:silica_glass_batch",
        "gray": "tfc:volcanic_glass_batch",
        "light_gray": "tfc:volcanic_glass_batch",
        "cyan": "tfc:olivine_glass_batch",
        "purple": "tfc:volcanic_glass_batch",
        "blue": "tfc:volcanic_glass_batch",
    }

    global.DYE_COLOURS.forEach(colour => {

        datagen.createItemApplication(outputOf(ITEM, `quark:${colour}_framed_glass`, 1, 1),
            inputOf(ITEM, `${mod_id}:molten_glass/${colour}`, 1),
            inputOf(ITEM, "tfc:metal/rod/steel", 1)
        ).id(`modpack:recipes/item_application/glass/framed_${colour}`).generate()

        datagen.createCrushing(outputOf(ITEM, GLASS_TO_BATCH[colour], 1, 1),
            [
                inputOf(ITEM, `quark:${colour}_framed_glass`, 1)
            ]
        ).id(`modpack:recipes/crushing/glass/framed_${colour}`).generate()

        datagen.createCutting(outputOf(ITEM, `quark:${colour}_framed_glass_pane`, 8, 1),
            [
                inputOf(ITEM, `quark:${colour}_framed_glass`, 1)
            ]
        ).id(`modpack:recipes/cutting/glass/framed_${colour}`).generate()
    })

    datagen.createItemApplication(outputOf(ITEM, "quark:framed_glass", 1, 1),
        inputOf(ITEM, `kubejs:molten_glass/clear`, 1),
        inputOf(ITEM, "tfc:metal/rod/steel", 1)
    ).id("modpack:recipes/item_application/glass/framed_clear").generate()

    datagen.createCrushing(outputOf(ITEM, "tfc:silica_glass_batch", 1, 1),
        [
            inputOf(ITEM, "quark:framed_glass", 1)
        ]
    ).id("modpack:recipes/crushing/glass/framed_clear").generate()

    datagen.createCutting(outputOf(ITEM, "quark:framed_glass_pane", 8, 1),
        [
            inputOf(ITEM, "quark:framed_glass", 1)
        ]
    ).id("modpack:recipes/cutting/glass/framed_clear").generate()
})
