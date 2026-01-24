// requires: lootjs

LootJS.modifiers(event => {

    const hasDecorations = {
        "argillite": false,
        "nephelinite": false,
        "blackslag": false,
        "picrite_basalt": false,
        "travertine": false,
        "komatiite": false,
        "breccia": false,
        "peridotite": true,
        "serpentine": true
    }

    global.CUSTOM_ROCK_TYPES.forEach(rockType => {
        event.addBlockModifier(`${mod_id}:rock/hardened/${rockType}`).addLoot(Item.of(`${mod_id}:rock/loose/${rockType}`, 2))
        event.addBlockModifier(`${mod_id}:rock/spike/${rockType}`).addLoot(Item.of(`${mod_id}:rock/loose/${rockType}`, 2))
        event.addBlockModifier(`${mod_id}:rock/gravel/${rockType}`).addLoot(`${mod_id}:rock/gravel/${rockType}`)

        event.addBlockModifier(`${mod_id}:rock/cobble/${rockType}`).addLoot(`${mod_id}:rock/cobble/${rockType}`)
        event.addBlockModifier(`${mod_id}:rock/cobble/${rockType}_stairs`).addLoot(`${mod_id}:rock/cobble/${rockType}_stairs`)
        event.addBlockModifier(`${mod_id}:rock/cobble/${rockType}_slab`).addLoot(`${mod_id}:rock/cobble/${rockType}_slab`)
        event.addBlockModifier(`${mod_id}:rock/cobble/${rockType}_wall`).addLoot(`${mod_id}:rock/cobble/${rockType}_wall`)

        event.addBlockModifier(`${mod_id}:rock/mossy_cobble/${rockType}`).addLoot(`${mod_id}:rock/mossy_cobble/${rockType}`)
        event.addBlockModifier(`${mod_id}:rock/mossy_cobble/${rockType}_stairs`).addLoot(`${mod_id}:rock/mossy_cobble/${rockType}_stairs`)
        event.addBlockModifier(`${mod_id}:rock/mossy_cobble/${rockType}_slab`).addLoot(`${mod_id}:rock/mossy_cobble/${rockType}_slab`)
        event.addBlockModifier(`${mod_id}:rock/mossy_cobble/${rockType}_wall`).addLoot(`${mod_id}:rock/mossy_cobble/${rockType}_wall`)

        event.addBlockModifier(`${mod_id}:rock/mossy_bricks/${rockType}`).addLoot(`${mod_id}:rock/mossy_bricks/${rockType}`)
        event.addBlockModifier(`${mod_id}:rock/mossy_bricks/${rockType}_stairs`).addLoot(`${mod_id}:rock/mossy_bricks/${rockType}_stairs`)
        event.addBlockModifier(`${mod_id}:rock/mossy_bricks/${rockType}_slab`).addLoot(`${mod_id}:rock/mossy_bricks/${rockType}_slab`)
        event.addBlockModifier(`${mod_id}:rock/mossy_bricks/${rockType}_wall`).addLoot(`${mod_id}:rock/mossy_bricks/${rockType}_wall`)

        event.addBlockModifier(`${mod_id}:rock/aqueduct/${rockType}`).addLoot(`${mod_id}:rock/aqueduct/${rockType}`)
        event.addBlockModifier(`${mod_id}:rock/loose/${rockType}`).addLoot(`${mod_id}:rock/loose/${rockType}`)
        event.addBlockModifier(`${mod_id}:rock/mossy_loose/${rockType}`).addLoot(`${mod_id}:rock/mossy_loose/${rockType}`)

        if (hasDecorations[rockType]) {

            event.addBlockModifier(`${mod_id}:rock/pressure_plate/${rockType}`).addLoot(`${mod_id}:rock/pressure_plate/${rockType}`)
            event.addBlockModifier(`${mod_id}:rock/button/${rockType}`).addLoot(`${mod_id}:rock/button/${rockType}`)
            event.addBlockModifier(`${mod_id}:rock/chiseled/${rockType}`).addLoot(`${mod_id}:rock/chiseled/${rockType}`)
            event.addBlockModifier(`${mod_id}:rock/hardened/${rockType}`).addLoot(Item.of(`${mod_id}:rock/loose/${rockType}`, 3))
            event.addBlockModifier(`${mod_id}:rock/hardened/${rockType}`).addLoot(`${mod_id}:rock/loose/${rockType}`).randomChance(0.25)

            event.addBlockModifier(`${mod_id}:rock/raw/${rockType}`).addLoot(Item.of(`${mod_id}:rock/loose/${rockType}`, 3))
            event.addBlockModifier(`${mod_id}:rock/raw/${rockType}`).addLoot(`${mod_id}:rock/loose/${rockType}`).randomChance(0.25)
            event.addBlockModifier(`${mod_id}:rock/raw/${rockType}_stairs`).addLoot(`${mod_id}:rock/raw/${rockType}_stairs`)
            event.addBlockModifier(`${mod_id}:rock/raw/${rockType}_slab`).addLoot(`${mod_id}:rock/raw/${rockType}_slab`)
            event.addBlockModifier(`${mod_id}:rock/raw/${rockType}_wall`).addLoot(`${mod_id}:rock/raw/${rockType}_wall`)

            event.addBlockModifier(`${mod_id}:rock/smooth/${rockType}`).addLoot(`${mod_id}:rock/smooth/${rockType}`)
            event.addBlockModifier(`${mod_id}:rock/smooth/${rockType}_stairs`).addLoot(`${mod_id}:rock/smooth/${rockType}_stairs`)
            event.addBlockModifier(`${mod_id}:rock/smooth/${rockType}_slab`).addLoot(`${mod_id}:rock/smooth/${rockType}_slab`)
            event.addBlockModifier(`${mod_id}:rock/smooth/${rockType}_wall`).addLoot(`${mod_id}:rock/smooth/${rockType}_wall`)

            event.addBlockModifier(`${mod_id}:rock/bricks/${rockType}`).addLoot(`${mod_id}:rock/bricks/${rockType}`)
            event.addBlockModifier(`${mod_id}:rock/bricks/${rockType}_stairs`).addLoot(`${mod_id}:rock/bricks/${rockType}_stairs`)
            event.addBlockModifier(`${mod_id}:rock/bricks/${rockType}_slab`).addLoot(`${mod_id}:rock/bricks/${rockType}_slab`)
            event.addBlockModifier(`${mod_id}:rock/bricks/${rockType}_wall`).addLoot(`${mod_id}:rock/bricks/${rockType}_wall`)

            event.addBlockModifier(`${mod_id}:rock/cracked_bricks/${rockType}`).addLoot(`${mod_id}:rock/cracked_bricks/${rockType}`)
            event.addBlockModifier(`${mod_id}:rock/cracked_bricks/${rockType}_stairs`).addLoot(`${mod_id}:rock/cracked_bricks/${rockType}_stairs`)
            event.addBlockModifier(`${mod_id}:rock/cracked_bricks/${rockType}_slab`).addLoot(`${mod_id}:rock/cracked_bricks/${rockType}_slab`)
            event.addBlockModifier(`${mod_id}:rock/cracked_bricks/${rockType}_wall`).addLoot(`${mod_id}:rock/cracked_bricks/${rockType}_wall`)
        }
    })

    event.addBlockModifier("caupona:felsic_tuff").replaceLoot("caupona:felsic_tuff", Item.of(`${mod_id}:rock/loose/breccia`, 3)).addLoot(`${mod_id}:rock/loose/breccia`).randomChance(0.25)
    event.addBlockModifier("create:scoria").replaceLoot("create:scoria", Item.of(`${mod_id}:rock/loose/komatiite`, 3)).addLoot(`${mod_id}:rock/loose/komatiite`).randomChance(0.25)
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
