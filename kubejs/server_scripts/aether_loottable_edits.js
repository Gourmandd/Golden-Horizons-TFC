let colours = [
    {"low": "blue", "cap" : "Blue"},
    {"low": "red", "cap" : "Red"},
    {"low": "white", "cap" : "White"},
    {"low": "light_gray", "cap" : "Light Gray"},
    {"low": "gray", "cap" : "Gray"},
    {"low": "black", "cap" : "Black"},
    {"low": "brown", "cap" : "Brown"},
    {"low": "orange", "cap" : "Orange"},
    {"low": "yellow", "cap" : "Yellow"},
    {"low": "lime", "cap" : "Lime"},
    {"low": "green", "cap" : "Green"},
    {"low": "cyan", "cap" : "Cyan"},
    {"low": "light_blue", "cap" : "Light Blue"},
    {"low": "purple", "cap" : "Purple"},
    {"low": "magenta", "cap" : "Magenta"},
    {"low": "pink", "cap" : "Pink"},
]

LootJS.modifiers(event => {
    // entities
    colours.forEach(colour =>{
        event.addEntityLootModifier("aether:sheepuff").removeLoot("minecraft:" + colour.low + "_wool")
    })
    event.addEntityLootModifier("deep_aether:quail").replaceLoot("deep_aether:raw_quail", "tfc:food/quail", true)
    event.addEntityLootModifier("aether:sheepuff").replaceLoot("minecraft:mutton", "tfc:food/mutton", true).addLoot("tfc:medium_sheepskin_hide").randomChance(0.10).removeLoot("#minecraft:wool")
    event.addEntityLootModifier("aether:phyg").replaceLoot("minecraft:porkchop", "tfc:food/pork", true).addLoot("tfc:medium_raw_hide").randomChance(0.10)
    event.addEntityLootModifier("aether:flying_cow").replaceLoot("minecraft:beef", "tfc:food/beef", true).replaceLoot("minecraft:leather", "tfc:large_raw_hide")

    event.addEntityLootModifier("aether:mimic")
        .replaceLoot("aether:zanite_pickaxe", "tfc:metal/pickaxe/black_bronze", true)
        .replaceLoot("aether:skyroot_pickaxe", "tfc:metal/pickaxe/copper", true)
        .replaceLoot("aether:holystone_pickaxe", "tfc:metal/pickaxe/bronze", true)

    event.addEntityLootModifier("aether:valkyrie_queen").replaceLoot("minecraft:golden_sword", "createaddition:electrum_amulet", true) // untested
    event.addEntityLootModifier("aether:minic").replaceLoot("aether:skyroot_pickaxe", "tfc:metal/pickaxe/copper", true).replaceLoot("aether:holystone_pickaxe", "tfc:metal/pickaxe/bronze")
    event.addEntityLootModifier("aether_redux:shimmercow").replaceLoot("minecraft:beef", "tfc:food/beef", true).replaceLoot("minecraft:leather", "tfc:large_raw_hide")
    event.addEntityLootModifier("aether_redux:mykapod").replaceLoot("minecraft:slime_ball", "tfc:glue", true)

    // chests
    /*
    event.addLootTableModifier("aether:chests/dungeon/bronze/bronze_dungeon_trash").replaceLoot("aether:skyroot_pickaxe", "tfc:metal/pickaxe/copper", true)
    event.addLootTableModifier("aether:chests/dungeon/bronze/bronze_dungeon_disc").replaceLoot("aether:skyroot_pickaxe", "tfc:metal/pickaxe/copper", true)
    event.addLootTableModifier("aether:chests/dungeon/bronze/bronze_dungeon_loot").replaceLoot("aether:zanite_pickaxe", "tfc:metal/pickaxe/black_bronze", true).replaceLoot("aether:skyroot_pickaxe", "tfc:metal/pickaxe/copper", true).replaceLoot("aether:holystone_pickaxe", "tfc:metal/pickaxe/bronze", true)
    */

    event.addLootTableModifier("aether:chests/dungeon/bronze/bronze_dungeon").replaceLoot("aether:zanite_pickaxe", "tfc:metal/pickaxe/black_bronze", true).replaceLoot("aether:skyroot_pickaxe", "tfc:metal/pickaxe/copper", true).replaceLoot("aether:holystone_pickaxe", "tfc:metal/pickaxe/bronze", true)

    event.addLootTableModifier("aether:chests/dungeon/gold/gold_dungeon_reward")
        .replaceLoot("minecraft:chainmail_boots", "magistuarmory:chainmail_boots", true)
        .replaceLoot("minecraft:chainmail_leggings", "magistuarmory:chainmail_leggings", true)
        .replaceLoot("minecraft:chainmail_chestplate", "magistuarmory:chainmail_chestplate", true)
        .replaceLoot("minecraft:chainmail_helmet", "magistuarmory:chainmail_helmet", true)

    event.addLootTableModifier("aether:chests/dungeon/silver/silver_dungeon")
    .replaceLoot("aether:zanite_pickaxe", "tfc:metal/pickaxe/black_bronze", true)
    
    event.addLootTableModifier("aether:chests/dungeon/silver/silver_dungeon_reward")
        .replaceLoot("minecraft:iron_sword", "tfc:metal/sword/wrought_iron", true)
        .replaceLoot("minecraft:golden_sword", "tfc:metal/double_ingot/gold", true)
        .replaceLoot("aether:valkyrie_pickaxe", "tfc:metal/pickaxe/steel", true)
        .replaceLoot("aether:gravitite_pickaxe", "tfc:metal/pickaxe/wrought_iron", true)
})