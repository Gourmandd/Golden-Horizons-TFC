// requires: pastel
// requires: kubejs_tfc

ServerEvents.recipes(event =>{

    global.DEEPER_DOWN_ROCK_TYPES.forEach(rock_type =>{

        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.recipes.minecraft.crafting_shapeless(Item.of(`kubejs:brick/${rock_type}`, 1), [Item.of(`kubejs:rock/loose/${rock_type}`, 1), "#tfc:chisels"])
                .id(`modpack:crafting/rock/${rock_type}_brick`)
        )

        event.recipes.tfc.landslide(`kubejs:rock/cobble/${rock_type}`, `kubejs:rock/cobble/${rock_type}`)
        event.recipes.tfc.collapse(`kubejs:rock/cobble/${rock_type}`, `kubejs:rock/mortared_cobble/${rock_type}`)
        event.recipes.tfc.collapse(`kubejs:rock/cobble/${rock_type}`, global.DEEPER_DOWN_ROCK_STONES[rock_type])
    })

    event.recipes.tfc.landslide("pastel:black_materia", "pastel:black_materia")
    event.recipes.tfc.collapse(`kubejs:rock/cobble/blackslag`, "pastel:shimmel")
    event.recipes.tfc.collapse(`kubejs:rock/cobble/blackslag`, "pastel:sawblade_grass")
    event.recipes.tfc.collapse(`kubejs:rock/cobble/blackslag`, "pastel:overgrown_blackslag")
    event.recipes.tfc.collapse(`kubejs:rock/cobble/blackslag`, "pastel:ashen_blackslag")
    event.recipes.tfc.collapse("pastel:slush", "pastel:overgrown_slush")
    event.recipes.tfc.collapse("pastel:slush", "pastel:slush")
})