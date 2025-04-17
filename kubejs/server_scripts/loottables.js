//This can be done with loot tables within the datapack
try{
console.info("Loot Tables loaded")


LootJS.modifiers((event) => {
    global.DYE_COLOURS.forEach(colour => { 
    event.addBlockLootModifier("kubejs:terracotta/crushed_" + colour).randomChance(0.25).addLoot("kubejs:terracotta/shard_" + colour)
    event.addBlockLootModifier("kubejs:terracotta/crushed_" + colour).randomChance(0.5).addLoot("kubejs:terracotta/shard_" + colour)
    event.addBlockLootModifier("kubejs:terracotta/crushed_" + colour).randomChance(1).addLoot("kubejs:terracotta/shard_" + colour)
    event.addBlockLootModifier("kubejs:terracotta/crushed_" + colour).randomChance(0.75).addLoot("kubejs:terracotta/shard_" + colour)
    event.addBlockLootModifier("kubejs:terracotta/crushed_" + colour).removeLoot("kubejs:terracotta/crushed_" + colour)

    event.addBlockLootModifier("minecraft:"+colour+"_stained_glass").addLoot("minecraft:"+colour+"_stained_glass")
    event.addBlockLootModifier("hearth_and_home:"+colour+"_stained_barred_glass").addLoot("hearth_and_home:"+colour+"_stained_barred_glass").removeLoot("minecraft:iron_nugget")
    event.addBlockLootModifier("hearth_and_home:"+colour+"_stained_barred_glass_pane").addLoot("hearth_and_home:"+colour+"_stained_barred_glass_pane").removeLoot("minecraft:iron_nugget")
    })

    //minecraft glass is hardcoded to not drop anything unless gem saw or silk touch??
    //event.addBlockLootModifier("minecraft:orange_stained_glass").addLoot("minecraft:orange_stained_glass")
    //event.addBlockLootModifier("minecraft:glass").addLoot("minecraft:glass")
    //hearth and home
    event.addBlockLootModifier("hearth_and_home:barred_glass").addLoot("hearth_and_home:barred_glass").removeLoot("minecraft:iron_nugget")
    event.addBlockLootModifier("hearth_and_home:barred_glass_pane").addLoot("hearth_and_home:barred_glass_pane").removeLoot("minecraft:iron_nugget")

    global.CUSTOM_CLAY_TYPES.forEach(type => {

    if (type == "kaolinite"){return}
    event.addBlockLootModifier("kubejs:clay/" + type + "_clay_block").removeLoot("kubejs:clay/" + type + "_clay_block")
    event.addBlockLootModifier("kubejs:clay/" + type + "_clay_block").randomChance(0.50).addLoot("kubejs:clay/" + type + "_clay_ball")
    event.addBlockLootModifier("kubejs:clay/" + type + "_clay_block").randomChance(0.50).addLoot("kubejs:clay/" + type + "_clay_ball")
    event.addBlockLootModifier("kubejs:clay/" + type + "_clay_block").randomChance(1).addLoot("kubejs:clay/" + type + "_clay_ball")
    event.addBlockLootModifier("kubejs:clay/" + type + "_clay_block").randomChance(1).addLoot("kubejs:clay/" + type + "_clay_ball")
    }) 

    event.addBlockLootModifier("tfc:plant/moss").removeLoot("tfc:plant/moss").randomChance(0.25).addLoot("quark:moss_paste")
    event.addBlockLootModifier("quark:midori_block").addLoot("quark:moss_paste").removeLoot("quark:midori_block")
    event.addBlockLootModifier("quark:midori_pillar").addLoot("quark:moss_paste").removeLoot("quark:midori_pillar")
    event.addBlockLootModifier("quark:midori_block_stairs").addLoot("quark:moss_paste").removeLoot("quark:midori_block_stairs")
    event.addBlockLootModifier("quark:midori_block_slab").addLoot("quark:moss_paste").removeLoot("quark:midori_block_slab")
})

} catch(e) {
    console.log(e)
}