// requires: quark

// ---------------------- //
// Bulk loottable changes //
// ---------------------- //

try{
console.info("Loot Tables loaded")


LootJS.modifiers((event) => {

    event.addBlockModifier("tfc:plant/moss").removeLoot("tfc:plant/moss").randomChance(0.25).addLoot("quark:moss_paste")
    event.addBlockModifier("quark:midori_block").addLoot("quark:moss_paste").removeLoot("quark:midori_block")
    event.addBlockModifier("quark:midori_pillar").addLoot("quark:moss_paste").removeLoot("quark:midori_pillar")
    event.addBlockModifier("quark:midori_block_stairs").addLoot("quark:moss_paste").removeLoot("quark:midori_block_stairs")
    event.addBlockModifier("quark:midori_block_slab").addLoot("quark:moss_paste").removeLoot("quark:midori_block_slab")

})

} catch(e) {
    console.log(e)
}