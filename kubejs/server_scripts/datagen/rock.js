ServerEvents.recipes(event =>{

    global.DEEPER_DOWN_ROCK_TYPES.forEach(rock_type =>{
        event.shapeless(Item.of(`kubejs:rock/loose/${rock_type}`, 4), Item.of(`kubejs:rock/cobble/${rock_type}`))
            .id(`modpack:crafting/rock/${rock_type}_cobble_to_loose_rocks`)
        event.shapeless(Item.of(`kubejs:rock/loose/${rock_type}`, 4), Item.of(`kubejs:rock/cobble/${rock_type}_wall`))
            .id(`modpack:crafting/rock/${rock_type}_cobble_wall_to_loose_rocks`)
        event.shapeless(Item.of(`kubejs:rock/loose/${rock_type}`, 2), Item.of(`kubejs:rock/cobble/${rock_type}_slab`))
            .id(`modpack:crafting/rock/${rock_type}_cobble_slab_to_loose_rocks`)
        event.shapeless(Item.of(`kubejs:rock/loose/${rock_type}`, 3), Item.of(`kubejs:rock/cobble/${rock_type}_stairs`))
            .id(`modpack:crafting/rock/${rock_type}_cobble_stairs_to_loose_rocks`)

        event.shaped(Item.of(`kubejs:rock/cobble/${rock_type}`), ["XX", "XX"], {"X": `kubejs:rock/loose/${rock_type}`})
            .id(`modpack:crafting/rock/${rock_type}_loose_rock_to_cobble`)
        event.shaped(Item.of(`kubejs:rock/cobble/${rock_type}_wall`, 6), ["XXX", "XXX"], {"X": `kubejs:rock/cobble/${rock_type}`})
            .id(`modpack:crafting/rock/${rock_type}_cobble_wall`)
        event.shaped(Item.of(`kubejs:rock/cobble/${rock_type}` + "_stairs", 8), ["X  ", "XX ", "XXX"], {"X": `kubejs:rock/cobble/${rock_type}`})
            .id(`modpack:crafting/rock/${rock_type}_cobble_stairs`)
        event.shaped(Item.of(`kubejs:rock/cobble/${rock_type}` + "_slab", 6), ["XXX"], {"X": `kubejs:rock/cobble/${rock_type}`})
            .id(`modpack:crafting/rock/${rock_type}_slab`)

        event.shaped(Item.of(`kubejs:rock/hardened/${rock_type}`, 2), ["RMR", "MRM", "RMR"], {"R": global.DEEPER_DOWN_ROCK_STONES[rock_type], "M": "tfc:mortar"})
            .id(`modpack:crafting/rock/hardened/${rock_type}`)

        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.recipes.minecraft.crafting_shapeless(Item.of(`kubejs:brick/${rock_type}`, 1), [Item.of(`kubejs:rock/loose/${rock_type}`, 1), "#tfc:chisels"])
                .id(`modpack:crafting/rock/${rock_type}_brick`)
        )

        event.recipes.tfc.landslide(`kubejs:rock/cobble/${rock_type}`, `kubejs:rock/cobble/${rock_type}`)
        event.recipes.tfc.collapse(`kubejs:rock/cobble/${rock_type}`, `kubejs:rock/mortared_cobble/${rock_type}`)
    })

    global.ROCK_TYPES.forEach(rock_type =>{
        event.recipes.tfc.collapse(`tfc:rock/cobble/${rock_type}`, `kubejs:rock/mortared_cobble/${rock_type}`)
    })
})  

LootJS.modifiers(event =>{

    event.addBlockLootModifier("minecraft:stone").replaceLoot("minecraft:cobblestone", Item.of(`kubejs:rock/loose/argillite`, 3)).addLoot(`kubejs:rock/loose/argillite`).randomChance(0.25)
    event.addBlockLootModifier("minecraft:deepslate").replaceLoot("minecraft:cobbled_deepslate", Item.of(`kubejs:rock/loose/nephelinite`, 3)).addLoot(`kubejs:rock/loose/nephelinite`).randomChance(0.25)
    event.addBlockLootModifier("minecraft:dripstone_block").replaceLoot("minecraft:dripstone_block", Item.of(`kubejs:rock/loose/travertine`,3)).addLoot(`kubejs:rock/loose/travertine`).randomChance(0.25)
    event.addBlockLootModifier("spectrum:blackslag").replaceLoot("spectrum:cobbled_blackslag", Item.of(`kubejs:rock/loose/blackslag`, 3)).addLoot(`kubejs:rock/loose/blackslag`).randomChance(0.25)
    event.addBlockLootModifier("spectrum:basal_marble").replaceLoot("spectrum:basal_marble", Item.of(`kubejs:rock/loose/picrite_basalt`, 3)).addLoot(`kubejs:rock/loose/picrite_basalt`).randomChance(0.25)

    event.addBlockLootModifier("minecraft:cobbled_deepslate").replaceLoot("minecraft:cobbled_deepslate", Item.of(`kubejs:rock/cobble/nephelinite`))
    event.addBlockLootModifier("minecraft:cobbled_deepslate_slab").replaceLoot("minecraft:cobbled_deepslate_slab", Item.of(`kubejs:rock/cobble/nephelinite_slab`))
    event.addBlockLootModifier("minecraft:cobbled_deepslate_stairs").replaceLoot("minecraft:cobbled_deepslate_stairs", Item.of(`kubejs:rock/cobble/nephelinite_stairs`))
    event.addBlockLootModifier("minecraft:cobbled_deepslate_wall").replaceLoot("minecraft:cobbled_deepslate_wall", Item.of(`kubejs:rock/cobble/nephelinite_wall`))

    event.addBlockLootModifier("minecraft:cobblestone").replaceLoot("minecraft:cobblestone", Item.of(`kubejs:rock/cobble/argillite`))
    event.addBlockLootModifier("minecraft:cobblestone_slab").replaceLoot("minecraft:cobblestone_slab", Item.of(`kubejs:rock/cobble/argillite_slab`))
    event.addBlockLootModifier("minecraft:cobblestone_stairs").replaceLoot("minecraft:cobblestone_stairs", Item.of(`kubejs:rock/cobble/argillite_stairs`))
    event.addBlockLootModifier("minecraft:cobblestone_wall").replaceLoot("minecraft:cobblestone_wall", Item.of(`kubejs:rock/cobble/argillite_wall`))
    
    event.addBlockLootModifier("spectrum:shimmel").replaceLoot("spectrum:cobbled_blackslag", Item.of(`kubejs:rock/loose/blackslag`, 3)).addLoot(`kubejs:rock/loose/blackslag`).randomChance(0.25)
    event.addBlockLootModifier("spectrum:sawblade_grass").replaceLoot("spectrum:cobbled_blackslag", Item.of(`kubejs:rock/loose/blackslag`, 3)).addLoot(`kubejs:rock/loose/blackslag`).randomChance(0.25)
    event.addBlockLootModifier("spectrum:overgrown_blackslag").replaceLoot("spectrum:cobbled_blackslag", Item.of(`kubejs:rock/loose/blackslag`, 3)).addLoot(`kubejs:rock/loose/blackslag`).randomChance(0.25)
    event.addBlockLootModifier("spectrum:ashen_blackslag").replaceLoot("spectrum:cobbled_blackslag", Item.of(`kubejs:rock/loose/blackslag`, 3)).addLoot(`kubejs:rock/loose/blackslag`).randomChance(0.25)
})  
