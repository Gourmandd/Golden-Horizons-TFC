// to be ported to the mod.

ServerEvents.recipes(event => {
    global.SPECTRUM_GEMSTONES.forEach(gemstone => {

        let datagen = Datagen(event).terraFirmaCraftRecipes()

        if (gemstone == "amethyst") {
            datagen.quern(outputOf(IO_TYPE.ITEM, `spectrum:${gemstone}_powder`, 2), inputOf(IO_TYPE.ITEM, "minecraft:amethyst_shard", 1))
        } else {
            datagen.quern(outputOf(IO_TYPE.ITEM, `spectrum:${gemstone}_powder`, 2), inputOf(IO_TYPE.ITEM, `spectrum:${gemstone}_shard`, 1))
        }
    })
})
