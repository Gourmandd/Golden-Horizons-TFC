// requires: firmalife
// to be ported to the mod.

ServerEvents.recipes(event => {

    let datagen = Datagen(event).recipe()

    global.FIRMALIFE_METALS.forEach(metal => {
        datagen.createAdditionRolling(
            outputOf(IO_TYPE.ITEM, `firmalife:metal/rod/${metal}`, 2, 1),
            inputOf(IO_TYPE.ITEM, `firmalife:metal/ingot/${metal}`, 1)
        ).id(`modpack:rolling/rod/${metal}`).generate()
    })
})
