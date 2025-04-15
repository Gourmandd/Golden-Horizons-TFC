
ServerEvents.recipes(event =>{

    global.TFC_METALS.forEach(metal =>{
        event.recipes.create.pressing("tfc:metal/sheet/" + metal, "tfc:metal/double_ingot/" + metal)
            .id("modpack:pressing/sheet/" + metal)
    })

    global.FIRMALIFE_METALS.forEach(metal =>{
        event.recipes.create.pressing("firmalife:metal/sheet/" + metal, "firmalife:metal/double_ingot/" + metal)
            .id("modpack:pressing/sheet/" + metal)
    })

    global.KUBEJS_METALS.forEach(metal =>{
        event.recipes.create.pressing("kubejs:metal/sheet/" + metal, "kubejs:metal/double_ingot/" + metal)
            .id("modpack:pressing/sheet/" + metal)
    })
})