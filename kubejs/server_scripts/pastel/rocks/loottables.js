// requires: lootjs
// requires: kubejs_tfc

LootJS.modifiers(event => {

    global.DEEPER_DOWN_ROCK_TYPES.forEach(rockType => {
        event.addBlockModifier(`${mod_id}:rock/hardened/${rockType}`).replaceLoot(`${mod_id}:rock/hardened/${rockType}`, Item.of(`${mod_id}:rock/loose/${rockType}`, 3)).addLoot(`${mod_id}:rock/loose/${rockType}`).randomChance(0.25)

    })


    event.addBlockModifier("minecraft:stone").replaceLoot("minecraft:cobblestone", Item.of(`${mod_id}:rock/loose/argillite`, 3)).addLoot(`${mod_id}:rock/loose/argillite`).randomChance(0.25)
    event.addBlockModifier("minecraft:deepslate").replaceLoot("minecraft:cobbled_deepslate", Item.of(`${mod_id}:rock/loose/nephelinite`, 3)).addLoot(`${mod_id}:rock/loose/nephelinite`).randomChance(0.25)
    event.addBlockModifier("minecraft:dripstone_block").replaceLoot("minecraft:dripstone_block", Item.of(`${mod_id}:rock/loose/travertine`, 3)).addLoot(`${mod_id}:rock/loose/travertine`).randomChance(0.25)
    event.addBlockModifier("pastel:blackslag").replaceLoot("pastel:cobbled_blackslag", Item.of(`${mod_id}:rock/loose/blackslag`, 3)).addLoot(`${mod_id}:rock/loose/blackslag`).randomChance(0.25)
    event.addBlockModifier("pastel:basal_marble").replaceLoot("pastel:basal_marble", Item.of(`${mod_id}:rock/loose/picrite_basalt`, 3)).addLoot(`${mod_id}:rock/loose/picrite_basalt`).randomChance(0.25)

    event.addBlockModifier("minecraft:cobbled_deepslate").replaceLoot("minecraft:cobbled_deepslate", Item.of(`${mod_id}:rock/cobble/nephelinite`))
    event.addBlockModifier("minecraft:cobbled_deepslate_slab").replaceLoot("minecraft:cobbled_deepslate_slab", Item.of(`${mod_id}:rock/cobble/nephelinite_slab`))
    event.addBlockModifier("minecraft:cobbled_deepslate_stairs").replaceLoot("minecraft:cobbled_deepslate_stairs", Item.of(`${mod_id}:rock/cobble/nephelinite_stairs`))
    event.addBlockModifier("minecraft:cobbled_deepslate_wall").replaceLoot("minecraft:cobbled_deepslate_wall", Item.of(`${mod_id}:rock/cobble/nephelinite_wall`))

    event.addBlockModifier("minecraft:cobblestone").replaceLoot("minecraft:cobblestone", Item.of(`${mod_id}:rock/cobble/argillite`))
    event.addBlockModifier("minecraft:cobblestone_slab").replaceLoot("minecraft:cobblestone_slab", Item.of(`${mod_id}:rock/cobble/argillite_slab`))
    event.addBlockModifier("minecraft:cobblestone_stairs").replaceLoot("minecraft:cobblestone_stairs", Item.of(`${mod_id}:rock/cobble/argillite_stairs`))
    event.addBlockModifier("minecraft:cobblestone_wall").replaceLoot("minecraft:cobblestone_wall", Item.of(`${mod_id}:rock/cobble/argillite_wall`))

    event.addBlockModifier("pastel:shimmel").replaceLoot("pastel:cobbled_blackslag", Item.of(`${mod_id}:rock/loose/blackslag`, 3)).addLoot(`${mod_id}:rock/loose/blackslag`).randomChance(0.25)
    event.addBlockModifier("pastel:sawblade_grass").replaceLoot("pastel:cobbled_blackslag", Item.of(`${mod_id}:rock/loose/blackslag`, 3)).addLoot(`${mod_id}:rock/loose/blackslag`).randomChance(0.25)
    event.addBlockModifier("pastel:overgrown_blackslag").replaceLoot("pastel:cobbled_blackslag", Item.of(`${mod_id}:rock/loose/blackslag`, 3)).addLoot(`${mod_id}:rock/loose/blackslag`).randomChance(0.25)
    event.addBlockModifier("pastel:ashen_blackslag").replaceLoot("pastel:cobbled_blackslag", Item.of(`${mod_id}:rock/loose/blackslag`, 3)).addLoot(`${mod_id}:rock/loose/blackslag`).randomChance(0.25)
})
