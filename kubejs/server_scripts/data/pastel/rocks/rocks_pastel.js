// requires: pastel

ServerEvents.recipes(event => {

    let datagen = Datagen(event).terraFirmaCraftRecipes()

    const COBBLE = {
        "nephelinite": "minecraft:cobbled_deepslate",
        "argillite": "minecraft:cobblestone",
        "blackslag": "pastel:cobbled_blackslag"
    }

    global.CUSTOM_ROCK_TYPES.forEach(rockType => {

        datagen.advancedShapeless(
            outputOf(IO_TYPE.ITEM, `${mod_id}:brick/${rockType}`, 1),
            [inputOf(IO_TYPE.ITEM, `${mod_id}:rock/loose/${rockType}`, 1)],
            inputOf(IO_TYPE.ITEM_TAG, "#tfc:chisels", 1)
        )
            .addModifier(datagen.MODIFIERS.DAMAGE_CRAFTING_REMAINDER)
            .id(`${mod_id}:crafting/rock/${rockType}_brick`)
            .generate()

        let cobble = ""

        if (Object.keys(COBBLE).indexOf(rockType) == -1) {
            cobble = `${mod_id}:rock/cobble/${rockType}`
        } else {
            cobble = COBBLE[rockType]
        }

        datagen.landslide(cobble, cobble).id(`${mod_id}:landslide/cobble/${rockType}`).generate()
        datagen.collapse(cobble, `${mod_id}:rock/mortared_cobble/${rockType}`).id(`${mod_id}:collapse/mortared_cobble/${rockType}`).generate()
        datagen.collapse(cobble, global.DEEPER_DOWN_ROCK_STONES[rockType]).id(`${mod_id}:collapse/raw_rock/${rockType}`).generate()
    })

    datagen.landslide("pastel:black_materia", "pastel:black_materia").id(`${mod_id}:landslide/black_materia`).generate()
    datagen.collapse(`pastel:cobbled_blackslag`, "pastel:shimmel").id(`${mod_id}:collapse/shimmel`).generate()
    datagen.collapse(`pastel:cobbled_blackslag`, "pastel:sawblade_grass").id(`${mod_id}:collapse/sawblade_grass`).generate()
    datagen.collapse(`pastel:cobbled_blackslag`, "pastel:overgrown_blackslag").id(`${mod_id}:collapse/overgrown_blackslag`).generate()
    datagen.collapse(`pastel:cobbled_blackslag`, "pastel:ashen_blackslag").id(`${mod_id}:collapse/ashen_blackslag`).generate()
    datagen.collapse("pastel:slush", "pastel:overgrown_slush").id(`${mod_id}:collapse/overgrown_slush`).generate()
    datagen.collapse("pastel:slush", "pastel:slush").id(`${mod_id}:collapse/slush`).generate()

    delete datagen
})
