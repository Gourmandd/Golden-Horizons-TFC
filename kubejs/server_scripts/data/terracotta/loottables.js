// to be ported to the mod.

// ---------------------- //
// Bulk loottable changes //
// ---------------------- //

try {
    console.info("Loot Tables loaded")

    LootJS.modifiers((event) => {

        global.DYE_COLOURS.forEach(colour => {
            event.addBlockModifier(`${mod_id}:terracotta/crushed_${colour}`).randomChance(0.25).addLoot(`${mod_id}:terracotta/shard_${colour}`)
            event.addBlockModifier(`${mod_id}:terracotta/crushed_${colour}`).randomChance(0.5).addLoot(`${mod_id}:terracotta/shard_${colour}`)
            event.addBlockModifier(`${mod_id}:terracotta/crushed_${colour}`).randomChance(1).addLoot(`${mod_id}:terracotta/shard_${colour}`)
            event.addBlockModifier(`${mod_id}:terracotta/crushed_${colour}`).randomChance(0.75).addLoot(`${mod_id}:terracotta/shard_${colour}`)
            event.addBlockModifier(`${mod_id}:terracotta/crushed_${colour}`).removeLoot(`${mod_id}:terracotta/crushed_${colour}`)
        })
    })

} catch (e) {
    console.log(e)
}
