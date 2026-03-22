// to be ported to the mod.

ServerEvents.recipes(event => {

    let datagen = Datagen(event).recipe()

    global.TFC_METALS.forEach(metal => {
        datagen.createAdditionRolling(
            outputOf(IO_TYPE.ITEM, `tfc:metal/rod/${metal}`, 2, 1),
            inputOf(IO_TYPE.ITEM, `tfc:metal/ingot/${metal}`, 1)
        ).id(`modpack:rolling/rod/${metal}`).generate()
    })
})
