// requires: kubejs_tfc

ServerEvents.recipes(event => {
    global.SPECTRUM_GEMSTONES.forEach(gemstone => {

        if (gemstone == "amethyst"){
            event.recipes.tfc.quern(Item.of(`pastel:${gemstone}_powder`, 2), "minecraft:amethyst_shard")

        } else {
            event.recipes.tfc.quern(Item.of(`pastel:${gemstone}_powder`, 2), `pastel:${gemstone}_shard`)
        }
    })
})