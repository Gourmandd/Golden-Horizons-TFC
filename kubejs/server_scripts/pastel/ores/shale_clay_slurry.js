
// I need to get fluids to register for this.
/*
ServerEvents.recipes(event =>{

    addCreateRecipeHandler(event);
    
    event.recipes.create.mixing(
        [withChance("tfc:rock/loose/shale", 0.5, 1),, Fluid.of("kubejs:shale_clay_slurry", 1000)],
        [Item.of("pastel:shale_clay"), Fluid.of("minecraft:water", 1000)]
    ).id("modpack:mixing/shale_clay_slurry")

    event.recipes.create.mixing(
        [Item.of("tfc:dirty_jute_net"), Fluid.of("kubejs:filtered_shale_clay_slurry", 1000)],
        [Item.of("tfc:jute_net"), Fluid.of("kubejs:shale_clay_slurry", 1000)]
    ).id("modpack:mixing/filtered_shale_clay_slurry")

    event.recipes.create.mixing(
        [
            withChance("tfc:powder/kaolinite", 0.20, 1),
            withChance("tfc:powder/kaolinite", 0.10, 1),
            withChance("tfc:powder/flux", 0.20, 1),
            withChance("tfc:powder/malachite", 0.20, 1)
        ],
        Fluid.of("kubejs:filtered_shale_clay_slurry", 1000)
    ).heatRequirement("heated")
    .id("modpack:mixing/heating_filtered_shale_clay_slurry")

    event.recipes.create.finalize();
})*/