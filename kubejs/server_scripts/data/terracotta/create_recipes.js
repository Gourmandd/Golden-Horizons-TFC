// to be ported to the mod.


ServerEvents.recipes(event => {

    let datagen = Datagen(event).recipe()

    global.DYE_COLOURS.forEach(colour => {

        event.shapeless(Item.of(`minecraft:${colour}_terracotta`), [
            `${mod_id}:terracotta/shard_${colour}`,
            `${mod_id}:terracotta/shard_${colour}`,
            `${mod_id}:terracotta/shard_${colour}`,
            `${mod_id}:terracotta/shard_${colour}`,
        ]).id(`${mod_id}:crafting/shapeless/${colour}_terracotta_from_shards`)

        datagen.createMilling(
            [
                outputOf(IO_TYPE.ITEM, `${mod_id}:terracotta/shard_${colour}`, 1, 1),
                outputOf(IO_TYPE.ITEM, `${mod_id}:terracotta/shard_${colour}`, 1, 0.5)
            ],
            inputOf(IO_TYPE.ITEM, `${mod_id}:terracotta/crushed_${colour}`, 1)
        ).id(`${mod_id}:milling/crushed_terracotta/${colour}`).generate()
    })
})
