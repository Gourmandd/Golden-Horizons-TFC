// requires: pastel

ServerEvents.recipes(event => {

    global.CUSTOM_ROCK_TYPES.forEach(rock_type => {

        event.shapeless(Item.of(`${mod_id}:rock/loose/${rock_type}`, 4), Item.of(`${mod_id}:rock/cobble/${rock_type}`))
            .id(`${mod_id}:crafting/rock/${rock_type}/cobble_to_loose_rocks`)
        event.shapeless(Item.of(`${mod_id}:rock/loose/${rock_type}`, 4), Item.of(`${mod_id}:rock/cobble/${rock_type}_wall`))
            .id(`${mod_id}:crafting/rock/${rock_type}/cobble_wall_to_loose_rocks`)
        event.shapeless(Item.of(`${mod_id}:rock/loose/${rock_type}`, 2), Item.of(`${mod_id}:rock/cobble/${rock_type}_slab`))
            .id(`${mod_id}:crafting/rock/${rock_type}/cobble_slab_to_loose_rocks`)
        event.shapeless(Item.of(`${mod_id}:rock/loose/${rock_type}`, 3), Item.of(`${mod_id}:rock/cobble/${rock_type}_stairs`))
            .id(`${mod_id}:crafting/rock/${rock_type}/cobble_stairs_to_loose_rocks`)

        event.shaped(Item.of(`${mod_id}:rock/cobble/${rock_type}`), ["XX", "XX"], { "X": `${mod_id}:rock/loose/${rock_type}` })
            .id(`${mod_id}:crafting/rock/${rock_type}/loose_rock_to_cobble`)

        event.shaped(Item.of(`${mod_id}:rock/cobble/${rock_type}_wall`, 6), ["XXX", "XXX"], { "X": `${mod_id}:rock/cobble/${rock_type}` })
            .id(`${mod_id}:crafting/rock/${rock_type}/cobble_wall`)
        event.shaped(Item.of(`${mod_id}:rock/cobble/${rock_type}_stairs`, 8), ["X  ", "XX ", "XXX"], { "X": `${mod_id}:rock/cobble/${rock_type}` })
            .id(`${mod_id}:crafting/rock/${rock_type}/cobble_stairs`)
        event.shaped(Item.of(`${mod_id}:rock/cobble/${rock_type}_slab`, 6), ["XXX"], { "X": `${mod_id}:rock/cobble/${rock_type}` })
            .id(`${mod_id}:crafting/rock/${rock_type}/cobble_slab`)


        event.shapeless(Item.of(`${mod_id}:rock/mossy_loose/${rock_type}`, 4), Item.of(`${mod_id}:rock/mossy_cobble/${rock_type}`))
            .id(`${mod_id}:crafting/rock/${rock_type}/mossy_cobble_to_mossy_loose_rocks`)
        event.shapeless(Item.of(`${mod_id}:rock/mossy_loose/${rock_type}`, 4), Item.of(`${mod_id}:rock/mossy_cobble/${rock_type}_wall`))
            .id(`${mod_id}:crafting/rock/${rock_type}/mossy_cobble_wall_to_mossy_loose_rocks`)
        event.shapeless(Item.of(`${mod_id}:rock/mossy_loose/${rock_type}`, 2), Item.of(`${mod_id}:rock/mossy_cobble/${rock_type}_slab`))
            .id(`${mod_id}:crafting/rock/${rock_type}/mossy_cobble_slab_to_mossy_loose_rocks`)
        event.shapeless(Item.of(`${mod_id}:rock/mossy_loose/${rock_type}`, 3), Item.of(`${mod_id}:rock/mossy_cobble/${rock_type}_stairs`))
            .id(`${mod_id}:crafting/rock/${rock_type}/mossy_cobble_stairs_to_mossy_loose_rocks`)

        event.shaped(Item.of(`${mod_id}:rock/mossy_cobble/${rock_type}`), ["XX", "XX"], { "X": `${mod_id}:rock/mossy_loose/${rock_type}` })
            .id(`${mod_id}:crafting/rock/${rock_type}/mossy_loose_rock_to_mossy_cobble`)

        event.shaped(Item.of(`${mod_id}:rock/mossy_cobble/${rock_type}_wall`, 6), ["XXX", "XXX"], { "X": `${mod_id}:rock/mossy_cobble/${rock_type}` })
            .id(`${mod_id}:crafting/rock/${rock_type}/mossy_cobble_wall`)
        event.shaped(Item.of(`${mod_id}:rock/mossy_cobble/${rock_type}_stairs`, 8), ["X  ", "XX ", "XXX"], { "X": `${mod_id}:rock/mossy_cobble/${rock_type}` })
            .id(`${mod_id}:crafting/rock/${rock_type}/mossy_cobble_stairs`)
        event.shaped(Item.of(`${mod_id}:rock/mossy_cobble/${rock_type}_slab`, 6), ["XXX"], { "X": `${mod_id}:rock/mossy_cobble/${rock_type}` })
            .id(`${mod_id}:crafting/rock/${rock_type}/mossy_cobble_slab`)


        event.shaped(Item.of(`${mod_id}:rock/mossy_bricks/${rock_type}_wall`, 6), ["XXX", "XXX"], { "X": `${mod_id}:rock/mossy_bricks/${rock_type}` })
            .id(`${mod_id}:crafting/rock/${rock_type}/mossy_bricks_wall`)
        event.shaped(Item.of(`${mod_id}:rock/mossy_bricks/${rock_type}_stairs`, 8), ["X  ", "XX ", "XXX"], { "X": `${mod_id}:rock/mossy_bricks/${rock_type}` })
            .id(`${mod_id}:crafting/rock/${rock_type}/mossy_bricks_stairs`)
        event.shaped(Item.of(`${mod_id}:rock/mossy_bricks/${rock_type}_slab`, 6), ["XXX"], { "X": `${mod_id}:rock/mossy_bricks/${rock_type}` })
            .id(`${mod_id}:crafting/rock/${rock_type}/mossy_bricks_slab`)

        event.shaped(Item.of(`${mod_id}:rock/hardened/${rock_type}`, 2), ["RMR", "MRM", "RMR"], { "R": global.ROCK_BLOCKS["raw"][rock_type], "M": "tfc:mortar" })
            .id(`${mod_id}:crafting/rock/${rock_type}/hardened`)

        event.shaped(Item.of(`${mod_id}:rock/aqueduct/${rock_type}`, 2), ["B B", "MBM"], { "B": `${mod_id}:brick/${rock_type}`, "M": "tfc:mortar" })
            .id(`${mod_id}:crafting/rock/${rock_type}/aqueduct`)

        event.shaped(Item.of(global.ROCK_BLOCKS["bricks"][rock_type], 4), ["BMB", "MBM", "BMB"], { "B": `${mod_id}:brick/${rock_type}`, "M": "tfc:mortar" })
            .id(`${mod_id}:crafting/rock/${rock_type}/bricks`)

    })
})
