// requires: pastel

ServerEvents.tags("block", event => {

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
