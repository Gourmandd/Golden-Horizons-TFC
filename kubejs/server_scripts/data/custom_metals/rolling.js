
ServerEvents.recipes(event => {

    let datagen = Datagen(event).recipe()

    global.KUBEJS_METALS.forEach(metal => {
        datagen.createAdditionRolling(
            outputOf(IO_TYPE.ITEM, `${mod_id}:metal/rod/${metal}`, 2, 1),
            inputOf(IO_TYPE.ITEM, `${mod_id}:metal/ingot/${metal}`, 1)
        ).id(`${mod_id}:rolling/rod/${metal}`).generate()
    })
})
