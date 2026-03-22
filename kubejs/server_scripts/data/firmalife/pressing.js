// requires: firmalife
// to be ported to the mod.

ServerEvents.recipes(event => {

    let datagen = Datagen(event).recipe()

    global.FIRMALIFE_METALS.forEach(metal => {
        datagen.createPressing(outputOf(IO_TYPE.ITEM, "firmalife:metal/sheet/" + metal, 1, 1), inputOf(IO_TYPE.ITEM, "firmalife:metal/double_ingot/" + metal, 1))
            .id("modpack:pressing/sheet/" + metal)
            .generate()
    })
})
