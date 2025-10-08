
ServerEvents.recipes(event =>{

    let datagen = Datagen(event).recipe()

    global.KUBEJS_METALS.forEach(metal =>{
        datagen.createPressing(outputOf(IO_TYPE.ITEM, "kubejs:metal/sheet/" + metal, 1, 1), inputOf(IO_TYPE.ITEM, "kubejs:metal/double_ingot/" + metal, 1))
            .id("modpack:pressing/sheet/" + metal)
            .generate()
    })
})