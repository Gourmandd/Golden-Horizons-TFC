// requires: kubejs_tfc

ServerEvents.recipes(event => {

    global.DYE_COLOURS.forEach(colour =>{

        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless(`hearth_and_home:${colour}_terracotta_bricks`,[`minecraft:${colour}_terracotta` ,"#tfc:chisels"])
        ).id(`modpack:crafting/shapeless/terracotta_bricks/${colour}`)

        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless(`hearth_and_home:${colour}_shingles`,[`minecraft:${colour}_terracotta` ,"#tfc:saws"])
        ).id(`modpack:crafting/shapeless/terracotta_shingles/${colour}`)

        event.recipes.tfc.landslide(`kubejs:terracotta/crushed_${colour}`, `kubejs:terracotta/crushed_${colour}`)
            .id(`modpack:landslide/crushed_${colour}_terracotta`)
    })
})