// ---------------------- //
// Bulk loottable changes //
// ---------------------- //

try{
console.info("Loot Tables loaded")


LootJS.modifiers((event) => {

    global.CUSTOM_CLAY_TYPES.forEach(type => {

    if (type == "kaolinite"){return} //guard statement, kaolin already has its own clay blocks.
        event.addBlockModifier(`kubejs:clay/${type}_clay_block`).removeLoot(`kubejs:clay/${type}_clay_block`)
        event.addBlockModifier(`kubejs:clay/${type}_clay_block`).randomChance(0.50).addLoot(`kubejs:clay/${type}_clay_ball`)
        event.addBlockModifier(`kubejs:clay/${type}_clay_block`).randomChance(0.50).addLoot(`kubejs:clay/${type}_clay_ball`)
        event.addBlockModifier(`kubejs:clay/${type}_clay_block`).randomChance(1).addLoot(`kubejs:clay/${type}_clay_ball`)
        event.addBlockModifier(`kubejs:clay/${type}_clay_block`).randomChance(1).addLoot(`kubejs:clay/${type}_clay_ball`)
    }) 
})

} catch(e) {
    console.log(e)
}