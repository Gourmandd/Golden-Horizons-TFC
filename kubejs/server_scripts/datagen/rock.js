
ServerEvents.recipes(event =>{

    global.DEEPER_DOWN_ROCK_TYPES.forEach(rock_type =>{
        event.shapeless(Item.of("kubejs:rock/loose/" + rock_type, 4), Item.of("kubejs:rock/cobble/" + rock_type))
            .id("modpack:crafting/rock/" + rock_type + "_cobble_to_loose_rocks")
        event.shapeless(Item.of("kubejs:rock/loose/" + rock_type, 4), Item.of("kubejs:rock/cobble/" + rock_type + "_wall"))
            .id("modpack:crafting/rock/" + rock_type + "_cobble_wall_to_loose_rocks")
        event.shapeless(Item.of("kubejs:rock/loose/" + rock_type, 2), Item.of("kubejs:rock/cobble/" + rock_type + "_slab"))
            .id("modpack:crafting/rock/" + rock_type + "_cobble_slab_to_loose_rocks")
        event.shapeless(Item.of("kubejs:rock/loose/" + rock_type, 3), Item.of("kubejs:rock/cobble/" + rock_type + "_stairs"))
            .id("modpack:crafting/rock/" + rock_type + "_cobble_stairs_to_loose_rocks")

        event.shaped(Item.of("kubejs:rock/cobble/" + rock_type), ["XX", "XX"], {"X": "kubejs:rock/loose/" + rock_type})
            .id("modpack:crafting/rock/" + rock_type + "_loose_rock_to_cobble")
        event.shaped(Item.of("kubejs:rock/cobble/" + rock_type + "_wall", 6), ["XXX", "XXX"], {"X": "kubejs:rock/cobble/" + rock_type})
            .id("modpack:crafting/rock/" + rock_type + "_cobble_wall")
        event.shaped(Item.of("kubejs:rock/cobble/" + rock_type + "_stairs", 8), ["X  ", "XX ", "XXX"], {"X": "kubejs:rock/cobble/" + rock_type})
            .id("modpack:crafting/rock/" + rock_type + "_cobble_stairs")
        event.shaped(Item.of("kubejs:rock/cobble/" + rock_type + "_slab", 6), ["XXX"], {"X": "kubejs:rock/cobble/" + rock_type})
            .id("modpack:crafting/rock/" + rock_type + "_slab")

        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.recipes.minecraft.crafting_shapeless(Item.of("kubejs:brick/" + rock_type, 1), [Item.of("kubejs:rock/loose/" + rock_type, 1), "#tfc:chisels"])
                .id("modpack:crafting/rock/" + rock_type + "_brick")
        )

        event.recipes.tfc.landslide("kubejs:rock/cobble/" + rock_type, "kubejs:rock/cobble/" + rock_type)
        event.recipes.tfc.collapse("kubejs:rock/cobble/" + rock_type, "kubejs:rock/mortared_cobble/" + rock_type)
    })

    global.ROCK_TYPES.forEach(rock_type =>{
        event.recipes.tfc.collapse("tfc:rock/cobble/" + rock_type, "kubejs:rock/mortared_cobble/" + rock_type)
    })
})  