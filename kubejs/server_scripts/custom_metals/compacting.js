ServerEvents.recipes(event =>{
    
    addCreateRecipeHandler(event);
    
    global.KUBEJS_METALS.forEach(metal =>{
        event.recipes.create.compacting(`kubejs:metal/double_ingot/${metal}`, [`kubejs:metal/ingot/${metal}`, `kubejs:metal/ingot/${metal}`, "tfc:powder/flux"]).heated()
            .id(`modpack:compacting/double_ingot/${metal}`)
        event.recipes.create.compacting(`kubejs:metal/double_sheet/${metal}`, [`kubejs:metal/sheet/${metal}`, `kubejs:metal/sheet/${metal}`, "tfc:powder/flux"]).heated()
            .id(`modpack:compacting/double_sheet/${metal}`)
        event.recipes.create.compacting(`kubejs:metal/sheet/${metal}`, Fluid.of(global.METAL_FLUIDS[metal], 200)).heated()
            .id(`modpack:compacting/sheet/${metal}`)
    })
    
    event.recipes.create.finalize();
})