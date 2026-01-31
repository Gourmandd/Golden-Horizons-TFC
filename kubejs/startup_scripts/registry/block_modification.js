BlockEvents.modification(event => {

    let RAW_STONE = [
        "minecraft:stone",
        "minecraft:deepslate",
        "pastel:blackslag",
        "caupona:felsic_tuff",
        "create:scoria",
        "minecraft:smooth_basalt",
        "minecraft:calcite"
    ]

    RAW_STONE.forEach(stone => {
        event.modify(stone, block => {
            block.destroySpeed = 6.5
        })
    })
})
