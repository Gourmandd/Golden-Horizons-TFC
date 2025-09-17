// ---------------------- //
// Bulk loottable changes //
// ---------------------- //

try{
console.info("Loot Tables loaded")


LootJS.modifiers((event) => {

    global.DYE_COLOURS.forEach(colour => { 
        event.addBlockModifier(`kubejs:terracotta/crushed_${colour}`).randomChance(0.25).addLoot(`kubejs:terracotta/shard_${colour}`)
        event.addBlockModifier(`kubejs:terracotta/crushed_${colour}`).randomChance(0.5).addLoot(`kubejs:terracotta/shard_${colour}`)
        event.addBlockModifier(`kubejs:terracotta/crushed_${colour}`).randomChance(1).addLoot(`kubejs:terracotta/shard_${colour}`)
        event.addBlockModifier(`kubejs:terracotta/crushed_${colour}`).randomChance(0.75).addLoot(`kubejs:terracotta/shard_${colour}`)
        event.addBlockModifier(`kubejs:terracotta/crushed_${colour}`).removeLoot(`kubejs:terracotta/crushed_${colour}`)
    })
})

} catch(e) {
    console.log(e)
}