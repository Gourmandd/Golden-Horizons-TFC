ServerEvents.recipes(event => {
    global.SPECTRUM_GEMSTONES.forEach(gemstone => {

        if (gemstone == "amethyst"){
            event.recipes.tfc.quern(Item.of(`spectrum:${gemstone}_powder`, 2), "minecraft:amethyst_shard")

        } else {
            event.recipes.tfc.quern(Item.of(`spectrum:${gemstone}_powder`, 2), `spectrum:${gemstone}_shard`)
        }
    })
})