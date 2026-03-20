// ---------------------- //
// Bulk loottable changes //
// ---------------------- //

try {
    console.info("Loot Tables loaded")


    LootJS.modifiers((event) => {

        const REMOVE_DIRT = [ //according to the logs this is somehow being redeclared. So its not a const for now.
            "minecraft:dirt", // maybe making this local to the event could work
            "minecraft:grass_block",
            "minecraft:podzol",
            "minecraft:mycelium",
            "minecraft:farmland"
        ]

        const CORAL_TYPES = [
            "fire",
            "bubble",
            "tube",
            "brain",
            "horn"
        ]

        const REMOVE_SEEDS = [
            "minecraft:grass",
            "minecraft:tall_grass",
            "minecraft:fern",
            "minecraft:large_fern"
        ]


        event.addBlockModifier(`minecraft:glass`).removeLoot(`quark:clear_shard`)
        global.DYE_COLOURS.forEach(colour => {
            event.addBlockModifier(`minecraft:${colour}_stained_glass`)
                .removeLoot(`minecraft:${colour}_stained_glass`)
                .removeLoot(`quark:${colour}_shard`)
                .addAlternativesLoot(
                    LootEntry.of(`minecraft:${colour}_stained_glass`).matchTool(
                        ItemFilter.item(Item.of("tfc:gem_saw"), false).or(ItemFilter.not(ItemFilter.hasEnchantment("minecraft:silk_touch", 1)))
                    ),
                )
        })

        CORAL_TYPES.forEach(type => {
            event.addBlockModifier(`minecraft:${type}_coral`).removeLoot(`minecraft:${type}_coral`).addLoot(`tfc:coral/${type}_coral`)
            event.addBlockModifier(`minecraft:dead_${type}_coral`).removeLoot(`minecraft:dead_${type}_coral`).addLoot(`tfc:coral/${type}_dead_coral`)
            event.addBlockModifier(`minecraft:${type}_coral_fan`).removeLoot(`minecraft:${type}_coral_fan`).addLoot(`tfc:coral/${type}_coral_fan`)
            event.addBlockModifier(`minecraft:dead_${type}_coral_fan`).removeLoot(`minecraft:dead_${type}_coral_fan`).addLoot(`tfc:coral/${type}_dead_coral_fan`)
        })

        REMOVE_DIRT.forEach(blockID => {
            event.addBlockModifier(blockID).replaceLoot("minecraft:dirt", "tfc:dirt/aridisol")
        })

        REMOVE_SEEDS.forEach(blockID => {
            event.addBlockModifier(blockID).removeLoot("minecraft:wheat_seeds")
        })

        //minecraft glass is hardcoded to not drop anything unless gem saw or silk touch??
        //event.addBlockLootModifier("minecraft:orange_stained_glass").addLoot("minecraft:orange_stained_glass")
        //event.addBlockLootModifier("minecraft:glass").addLoot("minecraft:glass")
    })

} catch (e) {
    console.log(e)
}
