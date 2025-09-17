// requires: firmalife

ServerEvents.recipes(event =>{

    addCreateRecipeHandler(event);
    
    global.FIRMALIFE_METALS.forEach(metal =>{
        event.recipes.create.compacting(`firmalife:metal/double_ingot/${metal}`, [`firmalife:metal/ingot/${metal}`, `firmalife:metal/ingot/${metal}`, "tfc:powder/flux"]).heatRequirement("heated")
            .id(`modpack:compacting/double_ingot/${metal}`)
        event.recipes.create.compacting(`firmalife:metal/double_sheet/${metal}`, [`firmalife:metal/sheet/${metal}`, `firmalife:metal/sheet/${metal}`, "tfc:powder/flux"]).heatRequirement("heated")
            .id(`modpack:compacting/double_sheet/${metal}`)
        event.recipes.create.compacting(`firmalife:metal/sheet/${metal}`, Fluid.of(`firmalife:metal/${metal}`, 200)).heatRequirement("heated")
            .id(`modpack:compacting/sheet/${metal}`)
    })
    
    event.recipes.create.finalize();
})