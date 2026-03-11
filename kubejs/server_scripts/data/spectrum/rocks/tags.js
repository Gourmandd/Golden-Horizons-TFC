// requires: spectrum

ServerEvents.tags("block", event => {

    const LOOSE_MATERIAL = [
        "spectrum:black_materia",
        "spectrum:shimmel",
        "spectrum:sawblade_grass",
        "spectrum:overgrown_blackslag",
        "spectrum:ashen_blackslag",
        "spectrum:overgrown_slush",
        "spectrum:slush"
    ]

    LOOSE_MATERIAL.forEach(block => {
        event.add("tfc:can_collapse", block)
        event.add("tfc:can_trigger_collapse", block)
        event.add("tfc:can_start_collapse", block)
    })

    event.add("tfc:can_landslide", "spectrum:black_materia")
    event.add("minecraft:big_dripleaf_placeable", "#tfc:rock/hardened")
    event.add("spectrum:nightdew_soils", "#tfc:rock/hardened")
})
