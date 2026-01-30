// requires: pastel

ServerEvents.tags("block", event => {

    global.CUSTOM_ROCK_TYPES.forEach(rockType => {

        let can_collapse = [
            global.ROCK_BLOCKS["raw"][rockType],
            `${mod_id}:rock/spike/${rockType}`,
            `${mod_id}:rock/hardened/${rockType}`
        ]

        let mineable_pickaxe = [
            `${mod_id}:rock/spike/${rockType}`,
            `${mod_id}:rock/hardened/${rockType}`,
            `${mod_id}:rock/cobble/${rockType}`,
            `${mod_id}:rock/cobble/${rockType}_stairs`,
            `${mod_id}:rock/cobble/${rockType}_slab`,
            `${mod_id}:rock/cobble/${rockType}_wall`,
            `${mod_id}:rock/mossy_cobble/${rockType}`,
            `${mod_id}:rock/mossy_cobble/${rockType}_stairs`,
            `${mod_id}:rock/mossy_cobble/${rockType}_slab`,
            `${mod_id}:rock/mossy_cobble/${rockType}_wall`,
            `${mod_id}:rock/mossy_bricks/${rockType}`,
            `${mod_id}:rock/mossy_bricks/${rockType}_stairs`,
            `${mod_id}:rock/mossy_bricks/${rockType}_slab`,
            `${mod_id}:rock/mossy_bricks/${rockType}_wall`,
            `${mod_id}:rock/aqueduct/${rockType}`,
            `${mod_id}:rock/loose/${rockType}`,
            `${mod_id}:rock/mossy_loose/${rockType}`,
        ]

        event.add("c:stones", global.ROCK_BLOCKS["raw"][rockType])
        event.add("c:stones/raw", global.ROCK_BLOCKS["raw"][rockType])

        event.add("tfc:can_collapse", can_collapse)

        event.add("tfc:breaks_when_isolated", global.DEEPER_DOWN_ROCK_STONES[rockType])
        event.add("tfc:can_trigger_collapse", global.DEEPER_DOWN_ROCK_STONES[rockType])
        event.add("tfc:can_start_collapse", global.DEEPER_DOWN_ROCK_STONES[rockType])

        event.add("tfc:can_trigger_collapse", `${mod_id}:rock/hardened/${rockType}`)

        event.add("c:stones/spike", `${mod_id}:rock/spike/${rockType}`)

        event.add("c:stones", `${mod_id}:rock/hardened/${rockType}`)
        event.add("c:stones/hardened", `${mod_id}:rock/hardened/${rockType}`)

        event.add("tfc:can_landslide", `${mod_id}:rock/cobble/${rockType}`)
        event.add("c:cobblestones/normal", `${mod_id}:rock/cobble/${rockType}`)
        event.add("c:cobblestones", `${mod_id}:rock/cobble/${rockType}`)

        event.add("minecraft:stairs", `${mod_id}:rock/cobble/${rockType}_stairs`)
        event.add("minecraft:slabs", `${mod_id}:rock/cobble/${rockType}_slab`)
        event.add("minecraft:walls", `${mod_id}:rock/cobble/${rockType}_wall`)

        event.add("tfc:can_landslide", `${mod_id}:rock/mossy_cobble/${rockType}`)
        event.add("c:cobblestones/mossy", `${mod_id}:rock/mossy_cobble/${rockType}`)
        event.add("c:cobblestones", `${mod_id}:rock/mossy_cobble/${rockType}`)

        event.add("minecraft:stairs", `${mod_id}:rock/mossy_cobble/${rockType}_stairs`)
        event.add("minecraft:slabs", `${mod_id}:rock/mossy_cobble/${rockType}_slab`)
        event.add("minecraft:walls", `${mod_id}:rock/mossy_cobble/${rockType}_wall`)

        event.add("minecraft:stone_bricks", `${mod_id}:rock/mossy_bricks/${rockType}`)

        event.add("minecraft:stairs", `${mod_id}:rock/mossy_bricks/${rockType}_stairs`)
        event.add("minecraft:slabs", `${mod_id}:rock/mossy_bricks/${rockType}_slab`)
        event.add("minecraft:walls", `${mod_id}:rock/mossy_bricks/${rockType}_wall`)

        event.add("tfc:aqueducts", `${mod_id}:rock/aqueduct/${rockType}`)

        event.add("c:gravels", `${mod_id}:rock/gravel/${rockType}`)
        event.add("tfc:can_landslide", `${mod_id}:rock/gravel/${rockType}`)
        event.add("minecraft:mineable/shovel", `${mod_id}:rock/gravel/${rockType}`)

        event.add("c:stones/loose", `${mod_id}:rock/loose/${rockType}`)
        event.add("c:stones/loose", `${mod_id}:rock/mossy_loose/${rockType}`)

        if (global.ROCK_HAS_DECORATIONS[rockType]) {

            mineable_pickaxe.push(`${mod_id}:rock/cracked_bricks/${rockType}`)
            mineable_pickaxe.push(`${mod_id}:rock/cracked_bricks/${rockType}_stairs`)
            mineable_pickaxe.push(`${mod_id}:rock/cracked_bricks/${rockType}_slab`)
            mineable_pickaxe.push(`${mod_id}:rock/cracked_bricks/${rockType}_wall`)
            mineable_pickaxe.push(`${mod_id}:rock/smooth/${rockType}`)
            mineable_pickaxe.push(`${mod_id}:rock/smooth/${rockType}_stairs`)
            mineable_pickaxe.push(`${mod_id}:rock/smooth/${rockType}_slab`)
            mineable_pickaxe.push(`${mod_id}:rock/smooth/${rockType}_wall`)
            mineable_pickaxe.push(`${mod_id}:rock/raw/${rockType}`)
            mineable_pickaxe.push(`${mod_id}:rock/raw/${rockType}_stairs`)
            mineable_pickaxe.push(`${mod_id}:rock/raw/${rockType}_slab`)
            mineable_pickaxe.push(`${mod_id}:rock/raw/${rockType}_wall`)
            mineable_pickaxe.push(`${mod_id}:rock/pressure_plate/${rockType}`)
            mineable_pickaxe.push(`${mod_id}:rock/button/${rockType}`)
            mineable_pickaxe.push(`${mod_id}:rock/chiseled/${rockType}`)

            event.add("minecraft:stone_bricks", `${mod_id}:rock/cracked_bricks/${rockType}`)
            event.add("minecraft:stone_bricks", `${mod_id}:rock/bricks/${rockType}`)
            event.add("minecraft:stone_bricks", `${mod_id}:rock/chiseled/${rockType}`)
            event.add("c:stones/smooth", `${mod_id}:rock/smooth/${rockType}`)

            event.add("minecraft:stairs", `${mod_id}:rock/bricks/${rockType}_stairs`)
            event.add("minecraft:slabs", `${mod_id}:rock/bricks/${rockType}_slab`)
            event.add("minecraft:walls", `${mod_id}:rock/bricks/${rockType}_wall`)

            event.add("minecraft:stairs", `${mod_id}:rock/cracked_bricks/${rockType}_stairs`)
            event.add("minecraft:slabs", `${mod_id}:rock/cracked_bricks/${rockType}_slab`)
            event.add("minecraft:walls", `${mod_id}:rock/cracked_bricks/${rockType}_wall`)

            event.add("minecraft:stairs", `${mod_id}:rock/smooth/${rockType}_stairs`)
            event.add("minecraft:slabs", `${mod_id}:rock/smooth/${rockType}_slab`)
            event.add("minecraft:walls", `${mod_id}:rock/smooth/${rockType}_wall`)

            event.add("minecraft:pressure_plates", `${mod_id}:rock/pressure_plate/${rockType}`)
            event.add("c:stones/pressure_plate", `${mod_id}:rock/pressure_plate/${rockType}`)
            event.add("minecraft:stone_pressure_plates", `${mod_id}:rock/pressure_plate/${rockType}`)

            event.add("minecraft:buttons", `${mod_id}:rock/button/${rockType}`)
            event.add("minecraft:stone_buttons", `${mod_id}:rock/button/${rockType}`)
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

    global.CUSTOM_ROCK_TYPES.forEach(rockType => {
        event.add("c:stones", `${mod_id}:rock/hardened/${rockType}`)
        event.add("c:stones/hardened", `${mod_id}:rock/hardened/${rockType}`)

        event.add("c:cobblestones/normal", `${mod_id}:rock/cobble/${rockType}`)
        event.add("c:cobblestones", `${mod_id}:rock/cobble/${rockType}`)

        event.add("minecraft:stairs", `${mod_id}:rock/cobble/${rockType}_stairs`)
        event.add("minecraft:slabs", `${mod_id}:rock/cobble/${rockType}_slab`)
        event.add("minecraft:walls", `${mod_id}:rock/cobble/${rockType}_wall`)

        event.add("c:cobblestones/mossy", `${mod_id}:rock/mossy_cobble/${rockType}`)
        event.add("c:cobblestones", `${mod_id}:rock/mossy_cobble/${rockType}`)

        event.add("minecraft:stairs", `${mod_id}:rock/mossy_cobble/${rockType}_stairs`)
        event.add("minecraft:slabs", `${mod_id}:rock/mossy_cobble/${rockType}_slab`)
        event.add("minecraft:walls", `${mod_id}:rock/mossy_cobble/${rockType}_wall`)

        event.add("minecraft:stone_bricks", `${mod_id}:rock/mossy_bricks/${rockType}`)

        event.add("minecraft:stairs", `${mod_id}:rock/mossy_bricks/${rockType}_stairs`)
        event.add("minecraft:slabs", `${mod_id}:rock/mossy_bricks/${rockType}_slab`)
        event.add("minecraft:walls", `${mod_id}:rock/mossy_bricks/${rockType}_wall`)

        event.add("tfc:aqueducts", `${mod_id}:rock/aqueduct/${rockType}`)

        event.add("c:gravels", `${mod_id}:rock/gravel/${rockType}`)

        event.add("c:stones/loose", `${mod_id}:rock/loose/${rockType}`)
        event.add("c:stones/loose", `${mod_id}:rock/mossy_loose/${rockType}`)

        //event.add("tfc:rock_knapping", `${mod_id}:rock/loose/${rockType}`)
        //event.add("tfc:rock_knapping", `${mod_id}:rock/mossy_loose/${rockType}`)

        if (global.ROCK_HAS_DECORATIONS[rockType]) {

            event.add("minecraft:stone_bricks", `${mod_id}:rock/cracked_bricks/${rockType}`)
            event.add("minecraft:stone_bricks", `${mod_id}:rock/bricks/${rockType}`)
            event.add("minecraft:stone_bricks", `${mod_id}:rock/chiseled/${rockType}`)
            event.add("c:stones/smooth", `${mod_id}:rock/smooth/${rockType}`)

            event.add("minecraft:stairs", `${mod_id}:rock/bricks/${rockType}_stairs`)
            event.add("minecraft:slabs", `${mod_id}:rock/bricks/${rockType}_slab`)
            event.add("minecraft:walls", `${mod_id}:rock/bricks/${rockType}_wall`)

            event.add("minecraft:stairs", `${mod_id}:rock/cracked_bricks/${rockType}_stairs`)
            event.add("minecraft:slabs", `${mod_id}:rock/cracked_bricks/${rockType}_slab`)
            event.add("minecraft:walls", `${mod_id}:rock/cracked_bricks/${rockType}_wall`)

            event.add("minecraft:stairs", `${mod_id}:rock/smooth/${rockType}_stairs`)
            event.add("minecraft:slabs", `${mod_id}:rock/smooth/${rockType}_slab`)
            event.add("minecraft:walls", `${mod_id}:rock/smooth/${rockType}_wall`)

            event.add("c:stones/pressure_plate", `${mod_id}:rock/pressure_plate/${rockType}`)

            event.add("minecraft:buttons", `${mod_id}:rock/button/${rockType}`)
            event.add("minecraft:stone_buttons", `${mod_id}:rock/button/${rockType}`)
        }
    })
})
