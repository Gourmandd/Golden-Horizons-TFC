// requires: lootjs

LootJS.modifiers(event => {

    global.DEEPER_DOWN_ROCK_TYPES.forEach(rockType => {
        event.addBlockModifier(`${mod_id}:rock/hardened/${rockType}`).replaceLoot(`${mod_id}:rock/hardened/${rockType}`, Item.of(`${mod_id}:rock/loose/${rockType}`, 3)).addLoot(`${mod_id}:rock/loose/${rockType}`).randomChance(0.25)

    })

    event.addBlockModifier("minecraft:stone").replaceLoot("minecraft:cobblestone", Item.of(`${mod_id}:rock/loose/argillite`, 3)).addLoot(`${mod_id}:rock/loose/argillite`).randomChance(0.25)
    event.addBlockModifier("minecraft:deepslate").replaceLoot("minecraft:cobbled_deepslate", Item.of(`${mod_id}:rock/loose/nephelinite`, 3)).addLoot(`${mod_id}:rock/loose/nephelinite`).randomChance(0.25)
    event.addBlockModifier("minecraft:dripstone_block").replaceLoot("minecraft:dripstone_block", Item.of(`${mod_id}:rock/loose/travertine`, 3)).addLoot(`${mod_id}:rock/loose/travertine`).randomChance(0.25)
    event.addBlockModifier("pastel:blackslag").replaceLoot("pastel:cobbled_blackslag", Item.of(`${mod_id}:rock/loose/blackslag`, 3)).addLoot(`${mod_id}:rock/loose/blackslag`).randomChance(0.25)
    event.addBlockModifier("pastel:basal_marble").replaceLoot("pastel:basal_marble", Item.of(`${mod_id}:rock/loose/picrite_basalt`, 3)).addLoot(`${mod_id}:rock/loose/picrite_basalt`).randomChance(0.25)

    event.addBlockModifier("pastel:shimmel").replaceLoot("pastel:cobbled_blackslag", Item.of(`${mod_id}:rock/loose/blackslag`, 3)).addLoot(`${mod_id}:rock/loose/blackslag`).randomChance(0.25)
    event.addBlockModifier("pastel:sawblade_grass").replaceLoot("pastel:cobbled_blackslag", Item.of(`${mod_id}:rock/loose/blackslag`, 3)).addLoot(`${mod_id}:rock/loose/blackslag`).randomChance(0.25)
    event.addBlockModifier("pastel:overgrown_blackslag").replaceLoot("pastel:cobbled_blackslag", Item.of(`${mod_id}:rock/loose/blackslag`, 3)).addLoot(`${mod_id}:rock/loose/blackslag`).randomChance(0.25)
    event.addBlockModifier("pastel:ashen_blackslag").replaceLoot("pastel:cobbled_blackslag", Item.of(`${mod_id}:rock/loose/blackslag`, 3)).addLoot(`${mod_id}:rock/loose/blackslag`).randomChance(0.25)
})
