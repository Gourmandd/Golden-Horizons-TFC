// requires: pastel

ServerEvents.recipes(event => {

    const BASE = {
        "argillite": "minecraft:cobblestone",
        "nephelinite": "minecraft:cobbled_deepslate",
        "blackslag": "pastel:cobbled_blackslag",
        "travertine": `${mod_id}:rock/cobble/travertine`,
        "picrite_basalt": `${mod_id}:rock/cobble/picrite_basalt`
    }

    global.DEEPER_DOWN_ROCK_TYPES.forEach(rock_type => {

        event.shapeless(Item.of(`${mod_id}:rock/loose/${rock_type}`, 4), Item.of(BASE[rock_type]))
            .id(`${mod_id}:crafting/rock/${rock_type}_cobble_to_loose_rocks`)
        event.shapeless(Item.of(`${mod_id}:rock/loose/${rock_type}`, 4), Item.of(`${BASE[rock_type]}_wall`))
            .id(`${mod_id}:crafting/rock/${rock_type}_cobble_wall_to_loose_rocks`)
        event.shapeless(Item.of(`${mod_id}:rock/loose/${rock_type}`, 2), Item.of(`${BASE[rock_type]}_slab`))
            .id(`${mod_id}:crafting/rock/${rock_type}_cobble_slab_to_loose_rocks`)
        event.shapeless(Item.of(`${mod_id}:rock/loose/${rock_type}`, 3), Item.of(`${BASE[rock_type]}_stairs`))
            .id(`${mod_id}:crafting/rock/${rock_type}_cobble_stairs_to_loose_rocks`)

        event.shaped(Item.of(BASE[rock_type]), ["XX", "XX"], { "X": `${mod_id}:rock/loose/${rock_type}` })
            .id(`${mod_id}:crafting/rock/${rock_type}_loose_rock_to_cobble`)

        event.shaped(Item.of(`${BASE[rock_type]}_wall`, 6), ["XXX", "XXX"], { "X": BASE[rock_type] })
            .id(`${mod_id}:crafting/rock/${rock_type}_cobble_wall`)
        event.shaped(Item.of(`${BASE[rock_type]}_stairs`, 8), ["X  ", "XX ", "XXX"], { "X": BASE[rock_type] })
            .id(`${mod_id}:crafting/rock/${rock_type}_cobble_stairs`)
        event.shaped(Item.of(`${BASE[rock_type]}_slab`, 6), ["XXX"], { "X": BASE[rock_type] })
            .id(`${mod_id}:crafting/rock/${rock_type}_slab`)

        event.shaped(Item.of(`${mod_id}:rock/hardened/${rock_type}`, 2), ["RMR", "MRM", "RMR"], { "R": global.DEEPER_DOWN_ROCK_STONES[rock_type], "M": "tfc:mortar" })
            .id(`${mod_id}:crafting/rock/hardened/${rock_type}`)

    })
})
