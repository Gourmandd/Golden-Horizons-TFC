// requires: pastel

ServerEvents.tags("block", event => {

    global.CUSTOM_ROCK_TYPES.forEach(rock_type => {

        let can_collapse = [
            global.DEEPER_DOWN_ROCK_STONES[rock_type],
            `${mod_id}:rock/spike/${rock_type}`,
            `${mod_id}:rock/hardened/${rock_type}`
        ]

        let mineable_pickaxe = [
            `${mod_id}:rock/spike/${rock_type}`,
            `${mod_id}:rock/hardened/${rock_type}`,
            `${mod_id}:rock/cobble/${rock_type}`,
            `${mod_id}:rock/cobble/${rock_type}_stairs`,
            `${mod_id}:rock/cobble/${rock_type}_slab`,
            `${mod_id}:rock/cobble/${rock_type}_wall`,
            `${mod_id}:rock/mossy_cobble/${rock_type}`,
            `${mod_id}:rock/mossy_cobble/${rock_type}_stairs`,
            `${mod_id}:rock/mossy_cobble/${rock_type}_slab`,
            `${mod_id}:rock/mossy_cobble/${rock_type}_wall`,
            `${mod_id}:rock/mossy_bricks/${rock_type}`,
            `${mod_id}:rock/mossy_bricks/${rock_type}_stairs`,
            `${mod_id}:rock/mossy_bricks/${rock_type}_slab`,
            `${mod_id}:rock/mossy_bricks/${rock_type}_wall`,
            `${mod_id}:rock/aqueduct/${rock_type}`,
            `${mod_id}:rock/loose/${rock_type}`,
            `${mod_id}:rock/mossy_loose/${rock_type}`,
        ]

        event.add("tfc:can_collapse", can_collapse)

        event.add("tfc:breaks_when_isolated", global.DEEPER_DOWN_ROCK_STONES[rock_type])
        event.add("tfc:can_trigger_collapse", global.DEEPER_DOWN_ROCK_STONES[rock_type])
        event.add("tfc:can_start_collapse", global.DEEPER_DOWN_ROCK_STONES[rock_type])

        event.add("tfc:can_trigger_collapse", `${mod_id}:rock/hardened/${rock_type}`)

        event.add("c:stones/spike", `${mod_id}:rock/spike/${rock_type}`)

        event.add("c:stones", `${mod_id}:rock/hardened/${rock_type}`)
        event.add("c:stones/hardened", `${mod_id}:rock/hardened/${rock_type}`)

        event.add("tfc:can_landslide", `${mod_id}:rock/cobble/${rock_type}`)
        event.add("c:cobblestones/normal", `${mod_id}:rock/cobble/${rock_type}`)
        event.add("c:cobblestones", `${mod_id}:rock/cobble/${rock_type}`)

        event.add("minecraft:stairs", `${mod_id}:rock/cobble/${rock_type}_stairs`)
        event.add("minecraft:slabs", `${mod_id}:rock/cobble/${rock_type}_slab`)
        event.add("minecraft:walls", `${mod_id}:rock/cobble/${rock_type}_wall`)

        event.add("tfc:can_landslide", `${mod_id}:rock/mossy_cobble/${rock_type}`)
        event.add("c:cobblestones/mossy", `${mod_id}:rock/mossy_cobble/${rock_type}`)
        event.add("c:cobblestones", `${mod_id}:rock/mossy_cobble/${rock_type}`)

        event.add("minecraft:stairs", `${mod_id}:rock/mossy_cobble/${rock_type}_stairs`)
        event.add("minecraft:slabs", `${mod_id}:rock/mossy_cobble/${rock_type}_slab`)
        event.add("minecraft:walls", `${mod_id}:rock/mossy_cobble/${rock_type}_wall`)

        event.add("minecraft:stone_bricks", `${mod_id}:rock/mossy_bricks/${rock_type}`)

        event.add("minecraft:stairs", `${mod_id}:rock/mossy_bricks/${rock_type}_stairs`)
        event.add("minecraft:slabs", `${mod_id}:rock/mossy_bricks/${rock_type}_slab`)
        event.add("minecraft:walls", `${mod_id}:rock/mossy_bricks/${rock_type}_wall`)

        event.add("tfc:aqueducts", `${mod_id}:rock/aqueduct/${rock_type}`)

        event.add("c:gravels", `${mod_id}:rock/gravel/${rock_type}`)
        event.add("tfc:can_landslide", `${mod_id}:rock/gravel/${rock_type}`)
        event.add("minecraft:mineable/shovel", `${mod_id}:rock/gravel/${rock_type}`)

        event.add("c:stones/loose", `${mod_id}:rock/loose/${rock_type}`)
        event.add("c:stones/loose", `${mod_id}:rock/mossy_loose/${rock_type}`)

        if (global.ROCK_HAS_DECORATIONS[rock_type]) {

            mineable_pickaxe.push(`${mod_id}:rock/cracked_bricks/${rock_type}`)
            mineable_pickaxe.push(`${mod_id}:rock/cracked_bricks/${rock_type}_stairs`)
            mineable_pickaxe.push(`${mod_id}:rock/cracked_bricks/${rock_type}_slab`)
            mineable_pickaxe.push(`${mod_id}:rock/cracked_bricks/${rock_type}_wall`)
            mineable_pickaxe.push(`${mod_id}:rock/smooth/${rock_type}`)
            mineable_pickaxe.push(`${mod_id}:rock/smooth/${rock_type}_stairs`)
            mineable_pickaxe.push(`${mod_id}:rock/smooth/${rock_type}_slab`)
            mineable_pickaxe.push(`${mod_id}:rock/smooth/${rock_type}_wall`)
            mineable_pickaxe.push(`${mod_id}:rock/raw/${rock_type}`)
            mineable_pickaxe.push(`${mod_id}:rock/raw/${rock_type}_stairs`)
            mineable_pickaxe.push(`${mod_id}:rock/raw/${rock_type}_slab`)
            mineable_pickaxe.push(`${mod_id}:rock/raw/${rock_type}_wall`)
            mineable_pickaxe.push(`${mod_id}:rock/pressure_plate/${rock_type}`)
            mineable_pickaxe.push(`${mod_id}:rock/button/${rock_type}`)
            mineable_pickaxe.push(`${mod_id}:rock/chiseled/${rock_type}`)

            event.add("minecraft:stone_bricks", `${mod_id}:rock/cracked_bricks/${rock_type}`)
            event.add("minecraft:stone_bricks", `${mod_id}:rock/bricks/${rock_type}`)
            event.add("minecraft:stone_bricks", `${mod_id}:rock/chiseled/${rock_type}`)
            event.add("c:stones/smooth", `${mod_id}:rock/smooth/${rock_type}`)

            event.add("minecraft:stairs", `${mod_id}:rock/bricks/${rock_type}_stairs`)
            event.add("minecraft:slabs", `${mod_id}:rock/bricks/${rock_type}_slab`)
            event.add("minecraft:walls", `${mod_id}:rock/bricks/${rock_type}_wall`)

            event.add("minecraft:stairs", `${mod_id}:rock/cracked_bricks/${rock_type}_stairs`)
            event.add("minecraft:slabs", `${mod_id}:rock/cracked_bricks/${rock_type}_slab`)
            event.add("minecraft:walls", `${mod_id}:rock/cracked_bricks/${rock_type}_wall`)

            event.add("minecraft:stairs", `${mod_id}:rock/smooth/${rock_type}_stairs`)
            event.add("minecraft:slabs", `${mod_id}:rock/smooth/${rock_type}_slab`)
            event.add("minecraft:walls", `${mod_id}:rock/smooth/${rock_type}_wall`)

            event.add("minecraft:pressure_plates", `${mod_id}:rock/pressure_plate/${rock_type}`)
            event.add("c:stones/pressure_plate", `${mod_id}:rock/pressure_plate/${rock_type}`)
            event.add("minecraft:stone_pressure_plates", `${mod_id}:rock/pressure_plate/${rock_type}`)

            event.add("minecraft:buttons", `${mod_id}:rock/button/${rock_type}`)
            event.add("minecraft:stone_buttons", `${mod_id}:rock/button/${rock_type}`)
        }

        event.add("minecraft:mineable/pickaxe", mineable_pickaxe)
    })


    const LOOSE_MATERIAL = [
        "pastel:black_materia",
        "pastel:shimmel",
        "pastel:sawblade_grass",
        "pastel:overgrown_blackslag",
        "pastel:ashen_blackslag",
        "pastel:overgrown_slush",
        "pastel:slush"
    ]

    LOOSE_MATERIAL.forEach(block => {
        event.add("tfc:can_collapse", block)
        event.add("tfc:can_trigger_collapse", block)
        event.add("tfc:can_start_collapse", block)
    })

    event.add("tfc:can_landslide", "pastel:black_materia")
    event.add("minecraft:big_dripleaf_placeable", "#tfc:rock/hardened")
    event.add("pastel:nightdew_soils", "#tfc:rock/hardened")
})

ServerEvents.tags("item", event => {

    global.CUSTOM_ROCK_TYPES.forEach(rock_type => {
        event.add("c:stones", `${mod_id}:rock/hardened/${rock_type}`)
        event.add("c:stones/hardened", `${mod_id}:rock/hardened/${rock_type}`)

        event.add("c:cobblestones/normal", `${mod_id}:rock/cobble/${rock_type}`)
        event.add("c:cobblestones", `${mod_id}:rock/cobble/${rock_type}`)

        event.add("minecraft:stairs", `${mod_id}:rock/cobble/${rock_type}_stairs`)
        event.add("minecraft:slabs", `${mod_id}:rock/cobble/${rock_type}_slab`)
        event.add("minecraft:walls", `${mod_id}:rock/cobble/${rock_type}_wall`)

        event.add("c:cobblestones/mossy", `${mod_id}:rock/mossy_cobble/${rock_type}`)
        event.add("c:cobblestones", `${mod_id}:rock/mossy_cobble/${rock_type}`)

        event.add("minecraft:stairs", `${mod_id}:rock/mossy_cobble/${rock_type}_stairs`)
        event.add("minecraft:slabs", `${mod_id}:rock/mossy_cobble/${rock_type}_slab`)
        event.add("minecraft:walls", `${mod_id}:rock/mossy_cobble/${rock_type}_wall`)

        event.add("minecraft:stone_bricks", `${mod_id}:rock/mossy_bricks/${rock_type}`)

        event.add("minecraft:stairs", `${mod_id}:rock/mossy_bricks/${rock_type}_stairs`)
        event.add("minecraft:slabs", `${mod_id}:rock/mossy_bricks/${rock_type}_slab`)
        event.add("minecraft:walls", `${mod_id}:rock/mossy_bricks/${rock_type}_wall`)

        event.add("tfc:aqueducts", `${mod_id}:rock/aqueduct/${rock_type}`)

        event.add("c:gravels", `${mod_id}:rock/gravel/${rock_type}`)

        event.add("c:stones/loose", `${mod_id}:rock/loose/${rock_type}`)
        event.add("c:stones/loose", `${mod_id}:rock/mossy_loose/${rock_type}`)

        //event.add("tfc:rock_knapping", `${mod_id}:rock/loose/${rock_type}`)
        //event.add("tfc:rock_knapping", `${mod_id}:rock/mossy_loose/${rock_type}`)

        if (global.ROCK_HAS_DECORATIONS[rock_type]) {

            event.add("minecraft:stone_bricks", `${mod_id}:rock/cracked_bricks/${rock_type}`)
            event.add("minecraft:stone_bricks", `${mod_id}:rock/bricks/${rock_type}`)
            event.add("minecraft:stone_bricks", `${mod_id}:rock/chiseled/${rock_type}`)
            event.add("c:stones/smooth", `${mod_id}:rock/smooth/${rock_type}`)

            event.add("minecraft:stairs", `${mod_id}:rock/bricks/${rock_type}_stairs`)
            event.add("minecraft:slabs", `${mod_id}:rock/bricks/${rock_type}_slab`)
            event.add("minecraft:walls", `${mod_id}:rock/bricks/${rock_type}_wall`)

            event.add("minecraft:stairs", `${mod_id}:rock/cracked_bricks/${rock_type}_stairs`)
            event.add("minecraft:slabs", `${mod_id}:rock/cracked_bricks/${rock_type}_slab`)
            event.add("minecraft:walls", `${mod_id}:rock/cracked_bricks/${rock_type}_wall`)

            event.add("minecraft:stairs", `${mod_id}:rock/smooth/${rock_type}_stairs`)
            event.add("minecraft:slabs", `${mod_id}:rock/smooth/${rock_type}_slab`)
            event.add("minecraft:walls", `${mod_id}:rock/smooth/${rock_type}_wall`)

            event.add("c:stones/pressure_plate", `${mod_id}:rock/pressure_plate/${rock_type}`)

            event.add("minecraft:buttons", `${mod_id}:rock/button/${rock_type}`)
            event.add("minecraft:stone_buttons", `${mod_id}:rock/button/${rock_type}`)
        }
    })
})
