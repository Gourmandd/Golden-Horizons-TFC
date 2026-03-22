// to be ported to the mod.

ServerEvents.recipes(event => {

    let datagen = Datagen(event).terraFirmaCraftRecipes()

    // Wooden Support recycling
    global.OVERWORLD_WOOD_TYPES.forEach(type => {
        datagen.advancedShapeless(
            outputOf(IO_TYPE.ITEM, `${global.WOOD_TYPE_TO_MOD[type]}:wood/lumber/${type}`, 2),
            [inputOf(IO_TYPE.ITEM, `${global.WOOD_TYPE_TO_MOD[type]}:wood/support/${type}`, 1)],
            inputOf(IO_TYPE.ITEM_TAG, "c:tools/saw", 1)
        )
            .addModifier(datagen.MODIFIERS.DAMAGE_CRAFTING_REMAINDER)
            .id(`modpack:crafting/shapeless/supports_to_lumber/${type}`)
            .generate()
    })
})
