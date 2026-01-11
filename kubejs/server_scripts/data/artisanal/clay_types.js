//priority: 1
// requires: artisanal

// -------------------------------------------- //
// Generates data related to custom clay types  //
// -------------------------------------------- //


ServerEvents.recipes(event => {

    let datagen = Datagen(event).terraFirmaCraftRecipes()

    global.CUSTOM_CLAY_TYPES.forEach(type => {

        if (type == "kaolinite") {
            datagen.advancedShapeless(
                outputOf(IO_TYPE.ITEM, `${mod_id}:ceramic/unfired_kaolinite_brick`, 1),
                [inputOf(IO_TYPE.ITEM, "tfc:kaolin_clay", 1), inputOf(IO_TYPE.ITEM, "tfc:kaolin_clay", 1)],
                inputOf(IO_TYPE.ITEM_TAG, `artisanal:brick_molds`, 1)
            )
                .addModifier(datagen.MODIFIERS.DAMAGE_CRAFTING_REMAINDER)
                .id(`${mod_id}:crafting/shapeless/brick_molds/kaolinite_bricks`)
                .generate()

        } else {

            datagen.advancedShapeless(
                outputOf(IO_TYPE.ITEM, `${mod_id}:ceramic/unfired_${type}_brick`, 1),
                [inputOf(IO_TYPE.ITEM, `kubejs:clay/${type}_clay_ball`, 1), inputOf(IO_TYPE.ITEM, `kubejs:clay/${type}_clay_ball`, 1)],
                inputOf(IO_TYPE.ITEM_TAG, `artisanal:brick_molds`, 1)
            )
                .addModifier(datagen.MODIFIERS.DAMAGE_CRAFTING_REMAINDER)
                .id(`${mod_id}:crafting/shapeless/brick_molds/${type}_bricks`)
                .generate()
        }
    })
})
