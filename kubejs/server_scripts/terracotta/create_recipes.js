
ServerEvents.recipes(event => {

    global.DYE_COLOURS.forEach(colour =>{
        
        event.shapeless(Item.of(`minecraft:${colour}_terracotta`), [
            `kubejs:terracotta/shard_${colour}`,
            `kubejs:terracotta/shard_${colour}`,
            `kubejs:terracotta/shard_${colour}`,
            `kubejs:terracotta/shard_${colour}`,
        ]).id(`modpack:crafting/shapeless/${colour}_terracotta_from_shards`)

        event.remove(`hearth_and_home:${colour}_shingles`)

        event.recipes.create.milling(
            [
                Item.of(`kubejs:terracotta/shard_${colour}`),
                withChance(`kubejs:terracotta/shard_${colour}`, 0.5, 1)
            ], 
                Item.of(`kubejs:terracotta/crushed_${colour}`))
            .id(`modpack:milling/crushed_terracotta/${colour}`)
    })
})