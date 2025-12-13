// requires: kubejs_tfc
// requires: quark

// glass related recipes (horrors beyong my comprehension)
ServerEvents.recipes(event => {

    global.DYE_COLOURS.forEach(colour => {

        event.recipes.tfc.heating(Item.of(`quark:${colour}_framed_glass`), 1070).resultFluid(Fluid.of(`${mod_id}:glass/${colour}`, 800))
            .id(`modpack:recipes/heating/glass/quark/${colour}_glass`)
        event.recipes.tfc.heating(Item.of(`quark:${colour}_framed_glass_pane`), 1070).resultFluid(Fluid.of(`${mod_id}:glass/${colour}`, 50))
            .id(`modpack:recipes/heating/glass/quark/${colour}_glass_pane`)

    })

    event.recipes.tfc.heating("quark:framed_glass", 1070).resultFluid(Fluid.of(`${mod_id}:glass/clear`, 800))
        .id("modpack:recipes/heating/glass/quark/glass")
    event.recipes.tfc.heating("quark:framed_glass_pane", 1070).resultFluid(Fluid.of(`${mod_id}:glass/clear`, 50))
        .id("modpack:recipes/heating/glass/quark/glass_pane")


})
