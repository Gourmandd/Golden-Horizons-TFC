// requires: pastel

ServerEvents.recipes(event =>{

    global.DEEPER_DOWN_ROCK_TYPES.forEach(rock_type =>{
        event.shapeless(Item.of(`kubejs:rock/loose/${rock_type}`, 4), Item.of(`kubejs:rock/cobble/${rock_type}`))
            .id(`modpack:crafting/rock/${rock_type}_cobble_to_loose_rocks`)
        event.shapeless(Item.of(`kubejs:rock/loose/${rock_type}`, 4), Item.of(`kubejs:rock/cobble/${rock_type}_wall`))
            .id(`modpack:crafting/rock/${rock_type}_cobble_wall_to_loose_rocks`)
        event.shapeless(Item.of(`kubejs:rock/loose/${rock_type}`, 2), Item.of(`kubejs:rock/cobble/${rock_type}_slab`))
            .id(`modpack:crafting/rock/${rock_type}_cobble_slab_to_loose_rocks`)
        event.shapeless(Item.of(`kubejs:rock/loose/${rock_type}`, 3), Item.of(`kubejs:rock/cobble/${rock_type}_stairs`))
            .id(`modpack:crafting/rock/${rock_type}_cobble_stairs_to_loose_rocks`)

        event.shaped(Item.of(`kubejs:rock/cobble/${rock_type}`), ["XX", "XX"], {"X": `kubejs:rock/loose/${rock_type}`})
            .id(`modpack:crafting/rock/${rock_type}_loose_rock_to_cobble`)
        event.shaped(Item.of(`kubejs:rock/cobble/${rock_type}_wall`, 6), ["XXX", "XXX"], {"X": `kubejs:rock/cobble/${rock_type}`})
            .id(`modpack:crafting/rock/${rock_type}_cobble_wall`)
        event.shaped(Item.of(`kubejs:rock/cobble/${rock_type}` + "_stairs", 8), ["X  ", "XX ", "XXX"], {"X": `kubejs:rock/cobble/${rock_type}`})
            .id(`modpack:crafting/rock/${rock_type}_cobble_stairs`)
        event.shaped(Item.of(`kubejs:rock/cobble/${rock_type}` + "_slab", 6), ["XXX"], {"X": `kubejs:rock/cobble/${rock_type}`})
            .id(`modpack:crafting/rock/${rock_type}_slab`)

        event.shaped(Item.of(`kubejs:rock/hardened/${rock_type}`, 2), ["RMR", "MRM", "RMR"], {"R": global.DEEPER_DOWN_ROCK_STONES[rock_type], "M": "tfc:mortar"})
            .id(`modpack:crafting/rock/hardened/${rock_type}`)

    })
})