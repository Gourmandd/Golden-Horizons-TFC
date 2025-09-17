// requires: kubejs_tfc

// glass related recipes (horrors beyong my comprehension)
ServerEvents.recipes(event =>{

    global.DYE_COLOURS.forEach(colour =>{
            //Heating Recipes
            event.recipes.tfc.heating(Item.of(`minecraft:${colour}_stained_glass`), 1070).resultFluid(Fluid.of(`kubejs:glass/${colour}`, 800))
                .id(`modpack:recipes/heating/glass/minecraft/${colour}_glass`)
            event.recipes.tfc.heating(Item.of(`minecraft:${colour}_stained_glass_pane`), 1070).resultFluid(Fluid.of(`kubejs:glass/${colour}`, 50))
                .id(`modpack:recipes/heating/glass/minecraft/${colour}_glass_pane`)

            event.recipes.tfc.heating(Item.of(`kubejs:${colour}_lens`), 1070).resultFluid(Fluid.of(`kubejs:glass/${colour}`, 400))
                .id(`modpack:recipes/heating/glass/lens/${colour}`)
            event.recipes.tfc.heating(Item.of(`kubejs:molten_glass/${colour}`), 1070).resultFluid(Fluid.of(`kubejs:glass/${colour}`, 800))
                .id(`modpack:recipes/heating/molten_glass/${colour}`)


            //casting recipes
            event.recipes.tfc.casting(`minecraft:${colour}_stained_glass`, "kubejs:glass_mold", Fluid.of(`kubejs:glass/${colour}`, 800), 0)
                .id(`modpack:recipes/casting/glass/${colour}`)
            event.recipes.tfc.casting(`minecraft:${colour}_stained_glass_pane`, "kubejs:glass_pane_mold", Fluid.of(`kubejs:glass/${colour}`, 50), 0)
                .id(`modpack:recipes/casting/glass_pane/${colour}`)
        
        })
        

    event.recipes.tfc.heating("minecraft:glass", 1070).resultFluid(Fluid.of(`kubejs:glass/clear`, 800))
        .id("modpack:recipes/heating/glass/minecraft/glass")
    event.recipes.tfc.heating("minecraft:glass_pane", 1070).resultFluid(Fluid.of(`kubejs:glass/clear`, 50))
        .id("modpack:recipes/heating/glass/minecraft/glass_pane")

    event.recipes.tfc.heating(Item.of("tfc:lens"), 1070).resultFluid(Fluid.of(`kubejs:glass/clear`, 400))
        .id("modpack:recipes/heating/glass/lens/clear")
    event.recipes.tfc.heating(Item.of(`kubejs:molten_glass/clear`), 1070).resultFluid(Fluid.of(`kubejs:glass/clear`, 800))
        .id("modpack:recipes/heating/molten_glass/clear")

    event.recipes.tfc.casting("minecraft:glass", "kubejs:glass_mold", Fluid.of(`kubejs:glass/clear`, 800), 0)
        .id("modpack:recipes/casting/glass/clear")
    event.recipes.tfc.casting("minecraft:glass_pane", "kubejs:glass_pane_mold", Fluid.of(`kubejs:glass/clear`, 50), 0)
        .id("modpack:recipes/casting/glass_pane/")


    event.recipes.tfc.heating(Item.of("tfc:silica_glass_batch"), 1070).resultFluid(Fluid.of(`kubejs:glass/clear`, 800))
        .id("modpack:recipes/heating/glass_batches/silica")
    event.recipes.tfc.heating(Item.of("tfc:volcanic_glass_batch"), 1070).resultFluid(Fluid.of("kubejs:glass/blue", 800))
        .id("modpack:recipes/heating/glass_batches/volcanic")
    event.recipes.tfc.heating(Item.of("tfc:olivine_glass_batch"), 1070).resultFluid(Fluid.of("kubejs:glass/green", 800))
        .id("modpack:recipes/heating/glass_batches/olivine")
    event.recipes.tfc.heating(Item.of("tfc:hematitic_glass_batch"), 1070).resultFluid(Fluid.of("kubejs:glass/orange", 800))
        .id("modpack:recipes/heating/glass_batches/hematitic")


})