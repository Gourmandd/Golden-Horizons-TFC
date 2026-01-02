// requires: kubejs_tfc

ServerEvents.recipes(event => {

    global.DYE_COLOURS.forEach(colour => {

        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless(`hearth_and_home:${colour}_terracotta_bricks`, [`minecraft:${colour}_terracotta`, "#tfc:chisels"])
        ).id(`${mod_id}:crafting/shapeless/terracotta_bricks/${colour}`)

        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless(`hearth_and_home:${colour}_shingles`, [`minecraft:${colour}_terracotta`, "#tfc:saws"])
        ).id(`${mod_id}:crafting/shapeless/terracotta_shingles/${colour}`)

        event.recipes.tfc.landslide(`kubejs:terracotta/crushed_${colour}`, `${mod_id}:terracotta/crushed_${colour}`)
            .id(`${mod_id}:landslide/crushed_${colour}_terracotta`)
    })
})
