// to be ported to the mod.

ServerEvents.recipes(event => {

    let datagen = Datagen(event).recipe()

    const ITEM = IO_TYPE.ITEM

    global.TFC_METALS.forEach(metal => {

        datagen.createPressing(outputOf(ITEM, "tfc:metal/sheet/" + metal, 1, 1), inputOf(ITEM, "tfc:metal/double_ingot/" + metal, 1))
            .id("modpack:pressing/sheet/" + metal)
            .generate()
    })

    global.TFC_SOIL_TYPES.forEach(type => {

        datagen.createPressing(outputOf(ITEM, `tfc:grass_path/${type}`, 1, 1), inputOf(ITEM, `tfc:dirt/${type}`, 1))
            .id(`modpack:pressing/soil/${type}`)
            .generate()

        datagen.createPressing(outputOf(ITEM, `tfc:grass_path/${type}`, 1, 1), inputOf(ITEM, `tfc:grass/${type}`, 1))
            .id(`modpack:pressing/grass/${type}`)
            .generate()
    })
})
