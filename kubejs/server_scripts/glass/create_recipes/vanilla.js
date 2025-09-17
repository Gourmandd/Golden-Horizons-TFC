// requires: kubejs_tfc
// glass related recipes (horrors beyong my comprehension)
ServerEvents.recipes(event =>{

    addCreateRecipeHandler(event);
    
    const GLASS_TO_BATCH = {
        "white":  "tfc:silica_glass_batch",
        "brown":  "tfc:hematitic_glass_batch",
        "green":  "tfc:olivine_glass_batch",
        "orange":  "tfc:hematitic_glass_batch",
        "magenta":  "tfc:volcanic_glass_batch",
        "red":  "tfc:hematitic_glass_batch",
        "black":  "tfc:volcanic_glass_batch",
        "light_blue":  "tfc:silica_glass_batch",
        "yellow":  "tfc:hematitic_glass_batch",
        "lime":  "tfc:olivine_glass_batch",
        "pink":  "tfc:silica_glass_batch",
        "gray":  "tfc:volcanic_glass_batch",
        "light_gray":  "tfc:volcanic_glass_batch",
        "cyan":  "tfc:olivine_glass_batch",
        "purple":  "tfc:volcanic_glass_batch",
        "blue":  "tfc:volcanic_glass_batch",
    }

    global.DYE_COLOURS.forEach(colour =>{

            //Item application Recipes
            event.recipes.create.item_application(Item.of(`minecraft:${colour}_stained_glass`),[`kubejs:molten_glass/${colour}`,  "tfc:powder/flux"])
                .id(`modpack:recipes/item_application/glass/stained_${colour}`)

            //Crushing recipes
            event.recipes.create.crushing(Item.of(GLASS_TO_BATCH[colour]), `minecraft:${colour}_stained_glass`)
                .id(`modpack:recipes/crushing/glass/stained_${colour}`)

            //Cutting recipes
            event.recipes.create.cutting(Item.of(`minecraft:${colour}_stained_glass_pane`, 8), `minecraft:${colour}_stained_glass`)
                .id(`modpack:recipes/cutting/glass/stained_${colour}`)

        
            //filling recipes
            event.recipes.create.filling(Item.of("kubejs:glass_pane_mold", {"tank":{"Amount":50,"FluidName":`kubejs:glass/${colour}`}}), [Item.of("kubejs:glass_pane_mold", {}), Fluid.of(`kubejs:glass/${colour}`, 50)])
                .id(`modpack:recipes/filling/glass_pane/${colour}`)
            event.recipes.create.filling(Item.of("kubejs:glass_mold", {"tank":{"Amount":800,"FluidName":`kubejs:glass/${colour}`}}), [Item.of("kubejs:glass_mold", {}), Fluid.of(`kubejs:glass/${colour}`, 800)])
                .id(`modpack:recipes/filling/glass/${colour}`)
            event.recipes.create.filling(Item.of(`kubejs:molten_glass/${colour}`), [Item.of("tfc:powder/flux"), Fluid.of(`kubejs:glass/${colour}`, 800)])
                .id(`modpack:recipes/filling/molten_glass/${colour}`)

            //compacting recipes
            event.recipes.create.compacting(Item.of(`kubejs:molten_glass/${colour}`), Fluid.of(`kubejs:glass/${colour}`, 800))
                .id(`modpack:recipes/compacting/glass/${colour}`)

            //sequenced assembly for lenses
            event.recipes.create.sequenced_assembly(`kubejs:${colour}_lens`, `kubejs:molten_glass/${colour}`, [
                event.recipes.create.deploying(Item.of(`minecraft:${colour}_stained_glass_pane`), [Item.of(`minecraft:${colour}_stained_glass_pane`), Item.of("tfc:powder/soda_ash")]),
                event.recipes.create.deploying(Item.of(`minecraft:${colour}_stained_glass_pane`), [Item.of(`minecraft:${colour}_stained_glass_pane`), Item.of("tfc:bellows")]),
                event.recipes.create.deploying(Item.of(`minecraft:${colour}_stained_glass_pane`), [Item.of(`minecraft:${colour}_stained_glass_pane`), Item.of("tfc:paddle")]),
                event.recipes.create.deploying(Item.of(`minecraft:${colour}_stained_glass_pane`), [Item.of(`minecraft:${colour}_stained_glass_pane`), Item.of("tfc:wool_cloth")]),
                event.recipes.create.deploying(Item.of(`minecraft:${colour}_stained_glass_pane`), [Item.of(`minecraft:${colour}_stained_glass_pane`), Item.of("tfc:gem_saw")]),
            ]).transitionalItem(`minecraft:${colour}_stained_glass_pane`).loops(3)
        })

    event.recipes.create.item_application("minecraft:glass",[`kubejs:molten_glass/clear`,  "tfc:powder/flux"])
        .id("modpack:recipes/item_application/glass/clear")

    event.recipes.create.crushing("tfc:silica_glass_batch", "minecraft:glass")
        .id("modpack:recipes/crushing/glass/clear")

    event.recipes.create.cutting(Item.of("minecraft:glass_pane", 8), "minecraft:glass")
        .id("modpack:recipes/cutting/glass/clear")


    event.recipes.create.filling(Item.of("kubejs:glass_pane_mold", {"tank":{"Amount":50,"FluidName":`kubejs:glass/clear`}}), [Item.of("kubejs:glass_pane_mold", {}), Fluid.of(`kubejs:glass/clear`, 50)])
        .id("modpack:recipes/filling/glass_pane/clear")
    event.recipes.create.filling(Item.of("kubejs:glass_mold", {"tank":{"Amount":800,"FluidName":`kubejs:glass/clear`}}), [Item.of("kubejs:glass_mold", {}), Fluid.of(`kubejs:glass/clear`, 800)])
        .id("modpack:recipes/filling/glass/clear")
    event.recipes.create.filling(Item.of(`kubejs:molten_glass/clear`), [Item.of("tfc:powder/flux"), Fluid.of(`kubejs:glass/clear`, 800)])
        .id("modpack:recipes/filling/molten_glass/clear")

    event.recipes.create.compacting(Item.of(`kubejs:molten_glass/clear`), Fluid.of(`kubejs:glass/clear`, 800))
        .id("modpack:recipes/compacting/glass/clear")

    event.recipes.create.sequenced_assembly("tfc:lens", `kubejs:molten_glass/clear`, [
        event.recipes.create.deploying(Item.of("minecraft:glass_pane"), [Item.of("minecraft:glass_pane"), Item.of("tfc:powder/soda_ash")]),
        event.recipes.create.deploying(Item.of("minecraft:glass_pane"), [Item.of("minecraft:glass_pane"), Item.of("tfc:bellows")]),
        event.recipes.create.deploying(Item.of("minecraft:glass_pane"), [Item.of("minecraft:glass_pane"), Item.of("tfc:paddle")]),
        event.recipes.create.deploying(Item.of("minecraft:glass_pane"), [Item.of("minecraft:glass_pane"), Item.of("tfc:wool_cloth")]),
        event.recipes.create.deploying(Item.of("minecraft:glass_pane"), [Item.of("minecraft:glass_pane"), Item.of("tfc:gem_saw")]),
    ]).transitionalItem("minecraft:glass_pane").loops(3)
        .id("modpack:sequences_assembly/lens_clear")
    
    event.recipes.create.finalize();
})