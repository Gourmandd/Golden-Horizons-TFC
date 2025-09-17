// requires: kubejs_tfc
// requires: hnh

// glass related recipes (horrors beyong my comprehension)
ServerEvents.recipes(event =>{

    global.DYE_COLOURS.forEach(colour =>{

            event.recipes.tfc.heating(Item.of(`hearth_and_home:${colour}_stained_barred_glass`), 1070).resultFluid(Fluid.of(`kubejs:glass/${colour}`, 800))
                .id(`modpack:recipes/heating/glass/hnh/${colour}_glass`)
            event.recipes.tfc.heating(Item.of(`hearth_and_home:${colour}_stained_barred_glass_pane`), 1070).resultFluid(Fluid.of(`kubejs:glass/${colour}`, 50))
                .id(`modpack:recipes/heating/glass/hnh/${colour}_glass_pane`)

        })
        
    event.recipes.tfc.heating("hearth_and_home:barred_glass", 1070).resultFluid(Fluid.of(`kubejs:glass/clear`, 800))
        .id("modpack:recipes/heating/glass/hnh/glass")
    event.recipes.tfc.heating("hearth_and_home:barred_glass_pane", 1070).resultFluid(Fluid.of(`kubejs:glass/clear`, 50))
        .id("modpack:recipes/heating/glass/hnh/glass_pane")
})