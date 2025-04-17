
ServerEvents.recipes(event =>{

    /*
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
    })*/

    global.TFC_SOIL_TYPES.forEach(type =>{
        event.recipes.create.pressing("tfc:grass_path/" + type ,"tfc:dirt/" + type).id("modpack:pressing/soil/" + type)
        event.recipes.create.pressing("tfc:grass_path/" + type ,"tfc:grass/" + type).id("modpack:pressing/grass/" + type)
    })
})