
ServerEvents.recipes(event =>{

    global.TFC_METALS.forEach(metal =>{
        event.recipes.create.compacting("tfc:metal/double_ingot/" + metal, ["tfc:metal/ingot/" + metal, "tfc:metal/ingot/" + metal, "tfc:powder/flux"]).heatRequirement("heated")
            .id("modpack:compacting/double_ingot/" + metal)
        event.recipes.create.compacting("tfc:metal/double_sheet/" + metal, ["tfc:metal/sheet/" + metal, "tfc:metal/sheet/" + metal, "tfc:powder/flux"]).heatRequirement("heated")
            .id("modpack:compacting/double_sheet/" + metal)
        event.recipes.create.compacting("tfc:metal/sheet/" + metal, Fluid.of("tfc:metal/" + metal, 200)).heatRequirement("heated")
            .id("modpack:compacting/sheet/" + metal)
    })

    global.FIRMALIFE_METALS.forEach(metal =>{
        event.recipes.create.compacting("firmalife:metal/double_ingot/" + metal, ["firmalife:metal/ingot/" + metal, "firmalife:metal/ingot/" + metal, "tfc:powder/flux"]).heatRequirement("heated")
            .id("modpack:compacting/double_ingot/" + metal)
        event.recipes.create.compacting("firmalife:metal/double_sheet/" + metal, ["firmalife:metal/sheet/" + metal, "firmalife:metal/sheet/" + metal, "tfc:powder/flux"]).heatRequirement("heated")
            .id("modpack:compacting/double_sheet/" + metal)
        event.recipes.create.compacting("firmalife:metal/sheet/" + metal, Fluid.of("firmalife:metal/" + metal, 200)).heatRequirement("heated")
            .id("modpack:compacting/sheet/" + metal)
    })

    global.KUBEJS_METALS.forEach(metal =>{
        event.recipes.create.compacting("kubejs:metal/double_ingot/" + metal, ["kubejs:metal/ingot/" + metal, "kubejs:metal/ingot/" + metal, "tfc:powder/flux"]).heatRequirement("heated")
            .id("modpack:compacting/double_ingot/" + metal)
        event.recipes.create.compacting("kubejs:metal/double_sheet/" + metal, ["kubejs:metal/sheet/" + metal, "kubejs:metal/sheet/" + metal, "tfc:powder/flux"]).heatRequirement("heated")
            .id("modpack:compacting/double_sheet/" + metal)
        event.recipes.create.compacting("kubejs:metal/sheet/" + metal, Fluid.of(global.METAL_FLUIDS[metal], 200)).heatRequirement("heated")
            .id("modpack:compacting/sheet/" + metal)
    })
})