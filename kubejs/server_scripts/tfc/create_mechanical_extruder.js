
ServerEvents.recipes(event => {
    

    global.IGNEOUS_EXTRUSIVE_ROCKS.forEach(rockType => {
        event.recipes.create_mechanical_extruder.extruding(
            Item.of(`tfc:rock/raw/${rockType}`),
            [
                BlockPredicate.of("minecraft:water"),
                BlockPredicate.of("minecraft:lava")
            ]
        )
        .requiredBonks(3)
        .catalyst(`tfc:rock/raw/${rockType}`)
        .id(`modpack:extruding/${rockType}`)
    })

    global.IGNEOUS_INTRUSIVE_ROCKS.forEach(rockType => {
        event.recipes.create_mechanical_extruder.extruding(
            Item.of(`tfc:rock/raw/${rockType}`),
            [
                BlockPredicate.of("minecraft:water"),
                BlockPredicate.of("minecraft:lava")
            ]
        )
        .requiredBonks(30)
        .catalyst(`tfc:rock/raw/${rockType}`)
        .id(`modpack:extruding/${rockType}`)
    })

})