BlockEvents.modification(event => {

    let RAW_STONE = [
        "create:scorchia",
        "create:ochrum",
        "create:limestone",
        "create:scoria",

        "quark:jasper",
        "quark:shale",
        "quark:limestone",

        "spectrum:blackslag",
        "spectrum:basal_marble",

        "caupona:felsic_tuff",

        "minecraft:stone",
        "minecraft:deepslate",
        "minecraft:dripstone_block",
        "minecraft:smooth_basalt",
        "minecraft:calcite"
    ]

    RAW_STONE.forEach(stone => {
        event.modify(stone, block => {
            block.destroySpeed = 6.5
        })
    })
})
