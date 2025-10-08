
ServerEvents.recipes(event =>{

    let datagen = Datagen(event).recipe()

    global.KUBEJS_METALS.forEach(metal =>{
        datagen.createAdditionRolling(
            outputOf(IO_TYPE.ITEM, `kubejs:metal/rod/${metal}`, 2, 1),
            inputOf(IO_TYPE.ITEM, `kubejs:metal/ingot/${metal}`, 1)
        ).id(`modpack:rolling/rod/${metal}`).generate()
    })
})