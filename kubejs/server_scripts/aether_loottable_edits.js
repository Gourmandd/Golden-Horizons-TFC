try {
console.info("Aether Loot Table Edits loaded")

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
    event.addEntityLootModifier("aether:cockatrice").addLoot("artisanal:bear_fat").addLoot("minecraft:bone")
    event.addEntityLootModifier("aether:aerwhale").addLoot("tfc:blubber").addLoot("tfc:blubber").addLoot("tfc:blubber")
    event.addEntityLootModifier("deep_aether:quail").replaceLoot("deep_aether:raw_quail", "tfc:food/quail", true).addLoot("artisanal:poultry_fat").addLoot("minecraft:bone")
    event.addEntityLootModifier("aether:sheepuff").replaceLoot("minecraft:mutton", "tfc:food/mutton", true).addLoot("tfc:medium_sheepskin_hide").randomChance(0.10).removeLoot("#minecraft:wool").addLoot("firmalife:rennet").addLoot("artisanal:suet").addLoot("minecraft:bone")
    event.addEntityLootModifier("aether:phyg").replaceLoot("minecraft:porkchop", "tfc:food/pork", true).addLoot("tfc:medium_raw_hide").randomChance(0.10).addLoot("artisanal:pork_fat").addLoot("minecraft:bone")
    event.addEntityLootModifier("aether:flying_cow").replaceLoot("minecraft:beef", "tfc:food/beef", true).replaceLoot("minecraft:leather", "tfc:large_raw_hide").addLoot("firmalife:rennet").addLoot("artisanal:suet").addLoot("minecraft:bone")

    event.addEntityLootModifier("aether:valkyrie_queen").replaceLoot("minecraft:golden_sword", "createaddition:electrum_amulet", true)
    event.addEntityLootModifier("aether:minic").replaceLoot("aether:skyroot_pickaxe", "tfc:metal/pickaxe/copper", true).replaceLoot("aether:holystone_pickaxe", "tfc:metal/pickaxe/bronze")
    event.addEntityLootModifier("aether_redux:shimmercow").replaceLoot("minecraft:beef", "tfc:food/beef", true).replaceLoot("minecraft:leather", "tfc:large_raw_hide").addLoot("firmalife:rennet").addLoot("artisanal:suet").addLoot("minecraft:bone")
    event.addEntityLootModifier("aether_redux:mykapod").replaceLoot("minecraft:slime_ball", "tfc:glue", true)

    event.addEntityLootModifier("aether:blue_swet").replaceLoot("minecraft:sugar", "artisanal:perishable_sugar", true).randomChance(0.10)
    event.addEntityLootModifier("aether:golden_swet").replaceLoot("minecraft:sugar", "artisanal:perishable_sugar", true).randomChance(0.10)
    event.addEntityLootModifier("aether_redux:vanilla_swet").replaceLoot("minecraft:sugar", "artisanal:perishable_sugar", true).randomChance(0.10)
    event.addEntityLootModifier("ancient_aether:festive_swet").replaceLoot("minecraft:sugar", "artisanal:perishable_sugar", true).randomChance(0.10)

    // chests
    /*
    event.addLootTableModifier("aether:chests/dungeon/bronze/bronze_dungeon_trash").replaceLoot("aether:skyroot_pickaxe", "tfc:metal/pickaxe/copper", true)
    event.addLootTableModifier("aether:chests/dungeon/bronze/bronze_dungeon_disc").replaceLoot("aether:skyroot_pickaxe", "tfc:metal/pickaxe/copper", true)
    event.addLootTableModifier("aether:chests/dungeon/bronze/bronze_dungeon_loot").replaceLoot("aether:zanite_pickaxe", "tfc:metal/pickaxe/black_bronze", true).replaceLoot("aether:skyroot_pickaxe", "tfc:metal/pickaxe/copper", true).replaceLoot("aether:holystone_pickaxe", "tfc:metal/pickaxe/bronze", true)
    */


    event.addLootTableModifier("aether:chests/dungeon/gold/gold_dungeon_reward")
        .replaceLoot("minecraft:chainmail_boots", "magistuarmory:chainmail_boots", true)
        .replaceLoot("minecraft:chainmail_leggings", "magistuarmory:chainmail_leggings", true)
        .replaceLoot("minecraft:chainmail_chestplate", "magistuarmory:chainmail_chestplate", true)
        .replaceLoot("minecraft:chainmail_helmet", "magistuarmory:chainmail_helmet", true)

    
    event.addLootTableModifier("aether:chests/dungeon/silver/silver_dungeon_reward")
        .replaceLoot("minecraft:iron_sword", "tfc:metal/sword/wrought_iron", true)
        .replaceLoot("minecraft:golden_sword", "tfc:metal/double_ingot/gold", true)
        .replaceLoot("aether:valkyrie_pickaxe", "tfc:metal/pickaxe/steel", true)
        .replaceLoot("aether:gravitite_pickaxe", "tfc:metal/pickaxe/wrought_iron", true)
    


    let PickaxeLootTables = [
        "ancient_aether:chests/dungeon/laboratory/sentry_laboratory",
        "ancient_aether:selectors/sentry_vase",
        "ancient_aether:chests/dungeon/laboratory/sentry_laboratory_loot",
        "ancient_aether:chests/dungeon/bronze/bronze_dungeon_miscellaneous",
        "ancient_aether:chests/dungeon/bronze/bronze_dungeon_loot",
        "ancient_aether:chests/dungeon/bronze/bronze_dungeon_library",
        "ancient_aether:chests/settlement_secret",
        "ancient_aether:chests/camp_generic",
        "ancient_aether:chests/camp_skyroot",
        "ancient_aether:chests/camp_wyndcap",
        "aether:chests/dungeon/silver/silver_dungeon",
        "aether:chests/dungeon/silver/silver_dungeon_valkyrie",
        "aether:chests/dungeon/silver/silver_dungeon_reward",
        "aether:chests/dungeon/silver/silver_dungeon_gravitite",
        "aether:chests/dungeon/silver/silver_dungeon_loot",
        "aether:chests/dungeon/bronze/bronze_dungeon",
        "aether:entities/mimic",
        "ancient_aether:chests/dungeon/bronze/bronze_dungeon",
        "aether:chests/dungeon/bronze/bronze_dungeon_disc",
        "aether:chests/dungeon/bronze/bronze_dungeon_trash",
        "aether:chests/dungeon/bronze/bronze_dungeon_loot",

    ]

    PickaxeLootTables.forEach(lootTableId =>{
        event.addLootTableModifier(lootTableId)
            .replaceLoot("aether:zanite_pickaxe", "tfc:metal/pickaxe/black_bronze", true)
            .replaceLoot("aether:skyroot_pickaxe", "tfc:metal/pickaxe/copper", true)
            .replaceLoot("aether:holystone_pickaxe", "tfc:metal/pickaxe/bronze", true)
            .replaceLoot("aether:valkyrie_pickaxe", "tfc:metal/pickaxe/wrought_iron", true)
            .replaceLoot("ancient_aether:divine_pickaxe", "tfc:metal/pickaxe/steel", true)
    
    })



    let DirtLootTables = [
        "aether:blocks/aether_dirt_path",
        "aether:blocks/aether_grass_block",
        "aether:blocks/aether_enchanted_grass_block",
        "deep_aether:blocks/golden_heights_grass_block",
        "deep_aether:blocks/golden_heights_dirt_path",
        "aether_redux:blocks/avelium",
        "aether:blocks/aether_dirt"
    ] 

    DirtLootTables.forEach(lootTableId =>{
        event.addLootTableModifier(lootTableId).replaceLoot("aether:aether_dirt", "kubejs:dirt/aether", true)
    })

    //torch replacements
    let torchLootTables = [
        "ancient_aether:chests/dungeon/laboratory/sentry_laboratory",
        "aether:chests/dungeon/bronze/bronze_dungeon_disc",
        "aether:blocks/ambrosium_torch",
        "aether:chests/dungeon/bronze/bronze_dungeon_loot",
        "aether:chests/dungeon/bronze/bronze_dungeon_trash",
        "aether:chests/dungeon/silver/silver_dungeon",
        "aether:chests/dungeon/silver/silver_dungeon_disc",
        "aether:chests/dungeon/silver/silver_dungeon_loot",
        "aether:chests/dungeon/silver/silver_dungeon_reward",
        "aether:chests/dungeon/silver/silver_dungeon_trash",
        "ancient_aether:chests/camp_generic",
        "ancient_aether:chests/camp_skyroot",
        "ancient_aether:chests/dungeon/laboratory/sentry_laboratory_loot",
        "ancient_aether:chests/dungeon/bronze/bronze_dungeon_supplies",
        "ancient_aether:chests/dungeon/bronze/bronze_dungeon_loot",
        "aether:entities/mimic",
        "ancient_aether:chests/dungeon/bronze/bronze_dungeon",
        "aether:chests/dungeon/bronze/bronze_dungeon"
    ]

    torchLootTables.forEach(lootTableId =>{
        event.addLootTableModifier(lootTableId).replaceLoot("aether:ambrosium_torch", "tfc:torch", true)
    })
    

    //skyroot bucket replacements, and known drops
    let SkyrootBucketLootTables = [ 
        "ancient_aether:chests/dungeon/laboratory/sentry_laboratory", //bucket, milk
        "ancient_aether:chests/dungeon/laboratory/sentry_laboratory_loot", //bucket
        "ancient_aether:chests/dungeon/laboratory/sentry_laboratory_supplies", //remedy, milk
        "ancient_aether:chests/dungeon/bronze/bronze_dungeon", //poison
        "ancient_aether:chests/dungeon/bronze/bronze_dungeon_loot", // poison
        "ancient_aether:chests/dungeon/bronze/bronze_dungeon_supplies", // poison
        "aether:chests/dungeon/bronze/bronze_dungeon", //poison
        "aether:chests/dungeon/silver/silver_dungeon_loot", //remedy
        "ancient_aether:chests/camp_generic", //milk, remedy
        "ancient_aether:chests/camp_skyroot", //milk, remedy
        "ancient_aether:chests/camp_wyndcap", //milk, remedy
        "ancient_aether:chests/settlement_skyroot_generic", //milk, remedy
        "ancient_aether:chests/settlement_skyroot_library", //bucket, milk
        "ancient_aether:chests/settlement_skyroot_shop", //bucket, milk
    ]

    SkyrootBucketLootTables.forEach(lootTableId =>{
        event.addLootTableModifier(lootTableId).replaceLoot("aether:skyroot_bucket", "tfc:wooden_bucket", true)
        event.addLootTableModifier(lootTableId).replaceLoot("aether:skyroot_milk_bucket", "tfc:wooden_bucket", true)
        event.addLootTableModifier(lootTableId).replaceLoot("aether:skyroot_remedy_bucket", "tfc:wooden_bucket", true)
        event.addLootTableModifier(lootTableId).replaceLoot("aether:skyroot_poison_bucket", "tfc:wooden_bucket", true)
    })

    event.addLootTableModifier("ancient_aether:chests/camp_generic").replaceLoot("ancient_aether:ambrosium_campfire", "tfc:torch", true)
    event.addLootTableModifier("ancient_aether:chests/camp_skyroot").replaceLoot("ancient_aether:ambrosium_campfire", "tfc:torch", true)
    event.addLootTableModifier("ancient_aether:chests/camp_wyndcap").replaceLoot("ancient_aether:ambrosium_campfire", "tfc:torch", true)

    event.addLootTableModifier("lost_aether_content:chests/platinum_treasure_loot").replaceLoot("lost_aether_content:phoenix_pickaxe", "tfc:metal/pickaxe/red_steel", true)


})

} catch(e) {
    console.log(e)
}