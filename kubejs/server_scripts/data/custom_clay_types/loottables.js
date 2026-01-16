// ---------------------- //
// Bulk loottable changes //
// ---------------------- //

try {
    console.info("Loot Tables loaded")


    LootJS.modifiers((event) => {

        global.CUSTOM_CLAY_TYPES.forEach(type => {

            if (type == "kaolinite") { return } //guard statement, kaolin already has its own clay blocks.
            event.addBlockModifier(`${mod_id}:clay/${type}_clay_block`).removeLoot(`${mod_id}:clay/${type}_clay_block`)
            event.addBlockModifier(`${mod_id}:clay/${type}_clay_block`).randomChance(0.50).addLoot(`${mod_id}:ceramic/${type}/clay_ball`)
            event.addBlockModifier(`${mod_id}:clay/${type}_clay_block`).randomChance(0.50).addLoot(`${mod_id}:ceramic/${type}/clay_ball`)
            event.addBlockModifier(`${mod_id}:clay/${type}_clay_block`).randomChance(1).addLoot(`${mod_id}:ceramic/${type}/clay_ball`)
            event.addBlockModifier(`${mod_id}:clay/${type}_clay_block`).randomChance(1).addLoot(`${mod_id}:ceramic/${type}/clay_ball`)
        })
    })

} catch (e) {
    console.log(e)
}
