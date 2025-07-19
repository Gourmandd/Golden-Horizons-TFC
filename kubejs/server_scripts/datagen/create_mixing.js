
ServerEvents.recipes(event =>{

    event.recipes.create.mixing(
        [Item.of("tfc:rock/loose/shale").withChance(0.5), Fluid.of("kubejs:shale_clay_slurry", 1000)],
        [Item.of("spectrum:shale_clay"), Fluid.of("minecraft:water", 1000)]
    ).id("modpack:mixing/shale_clay_slurry")

    event.recipes.create.mixing(
        [Item.of("tfc:dirty_jute_net"), Fluid.of("kubejs:filtered_shale_clay_slurry", 1000)],
        [Item.of("tfc:jute_net"), Fluid.of("kubejs:shale_clay_slurry", 1000)]
    ).id("modpack:mixing/filtered_shale_clay_slurry")

    event.recipes.create.mixing(
        [
            Item.of("tfc:powder/kaolinite").withChance(0.20),
            Item.of("tfc:powder/kaolinite").withChance(0.10),
            Item.of("tfc:powder/flux").withChance(0.20),
            Item.of("tfc:powder/malachite").withChance(0.20)
        ],
        Fluid.of("kubejs:filtered_shale_clay_slurry", 1000)
    ).heatRequirement("heated")
    .id("modpack:mixing/heating_filtered_shale_clay_slurry")
})