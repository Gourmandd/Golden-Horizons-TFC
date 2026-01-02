
ServerEvents.recipes(event => {

    let datagen = Datagen(event).recipe()

    global.KUBEJS_METALS.forEach(metal => {
        datagen.createPressing(outputOf(IO_TYPE.ITEM, `${mod_id}:metal/sheet/` + metal, 1, 1), inputOf(IO_TYPE.ITEM, `${mod_id}:metal/double_ingot/` + metal, 1))
            .id(`${mod_id}:pressing/sheet/` + metal)
            .generate()
    })
})
