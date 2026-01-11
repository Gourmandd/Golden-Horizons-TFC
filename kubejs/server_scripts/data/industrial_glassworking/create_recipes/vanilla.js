// glass related recipes (horrors beyong my comprehension)
ServerEvents.recipes(event => {

    let datagen = Datagen(event).recipe()

    const ITEM = IO_TYPE.ITEM
    const FLUID = IO_TYPE.FLUID

    const GLASS_TO_BATCH = {
        "white": "tfc:silica_glass_batch",
        "brown": "tfc:hematitic_glass_batch",
        "green": "tfc:olivine_glass_batch",
        "orange": "tfc:hematitic_glass_batch",
        "magenta": "tfc:volcanic_glass_batch",
        "red": "tfc:hematitic_glass_batch",
        "black": "tfc:volcanic_glass_batch",
        "light_blue": "tfc:silica_glass_batch",
        "yellow": "tfc:hematitic_glass_batch",
        "lime": "tfc:olivine_glass_batch",
        "pink": "tfc:silica_glass_batch",
        "gray": "tfc:volcanic_glass_batch",
        "light_gray": "tfc:volcanic_glass_batch",
        "cyan": "tfc:olivine_glass_batch",
        "purple": "tfc:volcanic_glass_batch",
        "blue": "tfc:volcanic_glass_batch",
    }

    global.DYE_COLOURS.forEach(colour => {

        // vanilla
        datagen.createItemApplication(outputOf(ITEM, `minecraft:${colour}_stained_glass`, 1, 1),
            inputOf(ITEM, `${mod_id}:molten_glass/${colour}`, 1),
            inputOf(ITEM, "tfc:powder/flux", 1)
        ).id(`modpack:recipes/item_application/glass/stained_${colour}`).generate()

        datagen.createCrushing(outputOf(ITEM, GLASS_TO_BATCH[colour], 1, 1),
            [
                inputOf(ITEM, `minecraft:${colour}_stained_glass`, 1)
            ]
        ).id(`modpack:recipes/crushing/glass/stained_${colour}`).generate()

        datagen.createCutting(outputOf(ITEM, `minecraft:${colour}_stained_glass_pane`, 8, 1),
            [
                inputOf(ITEM, `minecraft:${colour}_stained_glass`, 1)
            ]
        ).id(`modpack:recipes/cutting/glass/stained_${colour}`).generate()

        datagen.createFilling(outputOf(ITEM, `${mod_id}:molten_glass/${colour}`, 1, 1),
            inputOf(ITEM, "tfc:powder/flux", 1),
            inputOf(FLUID, `${mod_id}:glass/${colour}`, 800)
        ).id(`modpack:recipes/filling/molten_glass/${colour}`).generate()

        datagen.createCompacting(outputOf(ITEM, `${mod_id}:molten_glass/${colour}`, 1, 1),
            [
                inputOf(FLUID, `${mod_id}:glass/${colour}`, 800)
            ]
        ).id(`modpack:recipes/compacting/glass/${colour}`).generate()

        /* nbt in create recipes might be broken
        event.recipes.create.filling(Item.of("kubejs:glass_pane_mold", {"tank":{"Amount":50,"FluidName":`${mod_id}:glass/${colour}`}}), [Item.of("kubejs:glass_pane_mold", {}), Fluid.of(`${mod_id}:glass/${colour}`, 50)])
            .id(`modpack:recipes/filling/glass_pane/${colour}`)
        event.recipes.create.filling(Item.of("kubejs:glass_mold", {"tank":{"Amount":800,"FluidName":`${mod_id}:glass/${colour}`}}), [Item.of("kubejs:glass_mold", {}), Fluid.of(`${mod_id}:glass/${colour}`, 800)])
            .id(`modpack:recipes/filling/glass/${colour}`)*/

        let transitionalItem = `minecraft:${colour}_stained_glass_pane`

        datagen.createSequencedAssembly(
            outputOf(ITEM, `${mod_id}:${colour}_lens`, 1, 1),
            inputOf(ITEM, `${mod_id}:molten_glass/${colour}`, 1),
            [
                datagen.createDeploying(outputOf(ITEM, transitionalItem, 1, 1), inputOf(ITEM, transitionalItem, 1), inputOf(ITEM, "tfc:powder/soda_ash", 1)).getAsMap(),
                datagen.createDeploying(outputOf(ITEM, transitionalItem, 1, 1), inputOf(ITEM, transitionalItem, 1), inputOf(ITEM, "tfc:bellows", 1)).keepItem().getAsMap(),
                datagen.createDeploying(outputOf(ITEM, transitionalItem, 1, 1), inputOf(ITEM, transitionalItem, 1), inputOf(ITEM, "tfc:paddle", 1)).keepItem().getAsMap(),
                datagen.createDeploying(outputOf(ITEM, transitionalItem, 1, 1), inputOf(ITEM, transitionalItem, 1), inputOf(ITEM, "tfc:wool_cloth", 1)).keepItem().getAsMap(),
                datagen.createDeploying(outputOf(ITEM, transitionalItem, 1, 1), inputOf(ITEM, transitionalItem, 1), inputOf(ITEM, "tfc:gem_saw", 1)).keepItem().getAsMap()
            ]
        ).setTransitionalItem(transitionalItem).setLoops(3).id(`modpack:sequenced_assembly/lens/${colour}`).generate()
    })

    /*

    event.recipes.create.item_application("minecraft:glass",[`${mod_id}:molten_glass/clear`,  "tfc:powder/flux"])
        .id("modpack:recipes/item_application/glass/clear")

    event.recipes.create.crushing("tfc:silica_glass_batch", "minecraft:glass")
        .id("modpack:recipes/crushing/glass/clear")

    event.recipes.create.cutting(Item.of("minecraft:glass_pane", 8), "minecraft:glass")
        .id("modpack:recipes/cutting/glass/clear")

    /*
    event.recipes.create.filling(Item.of("kubejs:glass_pane_mold", {"tank":{"Amount":50,"FluidName":`${mod_id}:glass/clear`}}), [Item.of("kubejs:glass_pane_mold", {}), Fluid.of(`${mod_id}:glass/clear`, 50)])
        .id("modpack:recipes/filling/glass_pane/clear")
    event.recipes.create.filling(Item.of("kubejs:glass_mold", {"tank":{"Amount":800,"FluidName":`${mod_id}:glass/clear`}}), [Item.of("kubejs:glass_mold", {}), Fluid.of(`${mod_id}:glass/clear`, 800)])
        .id("modpack:recipes/filling/glass/clear")
    */
    /*
     event.recipes.create.filling(Item.of(`${mod_id}:molten_glass/clear`), [Item.of("tfc:powder/flux"), Fluid.of(`${mod_id}:glass/clear`, 800)])
         .id("modpack:recipes/filling/molten_glass/clear")

     event.recipes.create.compacting(Item.of(`${mod_id}:molten_glass/clear`), Fluid.of(`${mod_id}:glass/clear`, 800))
         .id("modpack:recipes/compacting/glass/clear")

     event.recipes.create.sequenced_assembly("tfc:lens", `${mod_id}:molten_glass/clear`, [
         event.recipes.create.deploying(Item.of("minecraft:glass_pane"), [Item.of("minecraft:glass_pane"), Item.of("tfc:powder/soda_ash")]),
         event.recipes.create.deploying(Item.of("minecraft:glass_pane"), [Item.of("minecraft:glass_pane"), Item.of("tfc:bellows")]),
         event.recipes.create.deploying(Item.of("minecraft:glass_pane"), [Item.of("minecraft:glass_pane"), Item.of("tfc:paddle")]),
         event.recipes.create.deploying(Item.of("minecraft:glass_pane"), [Item.of("minecraft:glass_pane"), Item.of("tfc:wool_cloth")]),
         event.recipes.create.deploying(Item.of("minecraft:glass_pane"), [Item.of("minecraft:glass_pane"), Item.of("tfc:gem_saw")]),
     ]).transitionalItem("minecraft:glass_pane").loops(3)
         .id("modpack:sequences_assembly/lens_clear")*/
})
