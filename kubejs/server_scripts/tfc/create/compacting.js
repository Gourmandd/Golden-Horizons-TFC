ServerEvents.recipes(event =>{

    addCreateRecipeHandler(event);
    
    global.TFC_METALS.forEach(metal =>{
        event.recipes.create.compacting(`tfc:metal/double_ingot/${metal}`, [`tfc:metal/ingot/${metal}`, `tfc:metal/ingot/${metal}`, "tfc:powder/flux"]).heated()
            .id(`modpack:compacting/double_ingot/${metal}`)
        event.recipes.create.compacting(`tfc:metal/double_sheet/${metal}`, [`tfc:metal/sheet/${metal}`, `tfc:metal/sheet/${metal}`, "tfc:powder/flux"]).heated()
            .id(`modpack:compacting/double_sheet/${metal}`)

        if (metal != "wrought_iron"){
            event.recipes.create.compacting(`tfc:metal/sheet/${metal}`, Fluid.of(`tfc:metal/${metal}`, 200)).heated()
                .id(`modpack:compacting/sheet/${metal}`)
        }
    })

    global.TFC_SAND_COLOURS.forEach(colour =>{
        event.recipes.create.compacting(`tfc:raw_sandstone/${colour}`, [`tfc:sand/${colour}`, `tfc:sand/${colour}`])
            .id(`modpack:compacting/sand/${colour}`)
    })

    global.DYE_COLOURS.forEach(colour => {
        event.recipes.create.compacting(`minecraft:${colour}_dye`, Fluid.of(`tfc:${colour}_dye`, 1000))
            .heated()
            .id(`modpack:compacting/dye/${colour}`)
    })
    
    event.recipes.create.finalize();
})