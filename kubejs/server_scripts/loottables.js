//This can be done with loot tables within the datapack

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
let clay = ["yixing", "earthenware", "yellowware", "porcelain"]

LootJS.modifiers((event) => {
    colours.forEach(colour => { 
    event.addBlockLootModifier("kubejs:terracotta/crushed_" + colour.low).randomChance(0.25).addLoot("kubejs:terracotta/shard_" + colour.low)
    event.addBlockLootModifier("kubejs:terracotta/crushed_" + colour.low).randomChance(0.5).addLoot("kubejs:terracotta/shard_" + colour.low)
    event.addBlockLootModifier("kubejs:terracotta/crushed_" + colour.low).randomChance(1).addLoot("kubejs:terracotta/shard_" + colour.low)
    event.addBlockLootModifier("kubejs:terracotta/crushed_" + colour.low).randomChance(0.75).addLoot("kubejs:terracotta/shard_" + colour.low)
    event.addBlockLootModifier("kubejs:terracotta/crushed_" + colour.low).removeLoot("kubejs:terracotta/crushed_" + colour.low)
    })

   clay.forEach(type => {
    event.addBlockLootModifier("kubejs:clay/" + type + "_clay_block").removeLoot("kubejs:clay/" + type + "_clay_block")
    event.addBlockLootModifier("kubejs:clay/" + type + "_clay_block").randomChance(0.50).addLoot("kubejs:clay/" + type + "_clay_ball")
    event.addBlockLootModifier("kubejs:clay/" + type + "_clay_block").randomChance(0.50).addLoot("kubejs:clay/" + type + "_clay_ball")
    event.addBlockLootModifier("kubejs:clay/" + type + "_clay_block").randomChance(1).addLoot("kubejs:clay/" + type + "_clay_ball")
    event.addBlockLootModifier("kubejs:clay/" + type + "_clay_block").randomChance(1).addLoot("kubejs:clay/" + type + "_clay_ball")
    }) 

    event.addBlockLootModifier("tfc:plant/moss").addLoot("quark:moss_paste").removeLoot("tfc:plant/moss")
    event.addBlockLootModifier("quark:midori_block").addLoot("quark:moss_paste").removeLoot("quark:midori_block")
    event.addBlockLootModifier("quark:midori_pillar").addLoot("quark:moss_paste").removeLoot("quark:midori_pillar")
    event.addBlockLootModifier("quark:midori_block_stairs").addLoot("quark:moss_paste").removeLoot("quark:midori_block_stairs")
    event.addBlockLootModifier("quark:midori_block_slab").addLoot("quark:moss_paste").removeLoot("quark:midori_block_slab")

    colours.forEach(colour =>{

    event.addBlockLootModifier("minecraft:"+colour.low+"_stained_glass").addLoot("minecraft:"+colour.low+"_stained_glass")
    event.addBlockLootModifier("hearth_and_home:"+colour.low+"_stained_barred_glass").addLoot("hearth_and_home:"+colour.low+"_stained_barred_glass").removeLoot("minecraft:iron_nugget")
    event.addBlockLootModifier("hearth_and_home:"+colour.low+"_stained_barred_glass_pane").addLoot("hearth_and_home:"+colour.low+"_stained_barred_glass_pane").removeLoot("minecraft:iron_nugget")
    })

    event.addBlockLootModifier("kubejs:clay/caelum_clay_block").removeLoot("kubejs:clay/caelum_clay_block")
    event.addBlockLootModifier("kubejs:clay/caelum_clay_block").randomChance(0.75).addLoot("kubejs:clay/caelum_clay_ball")
    event.addBlockLootModifier("kubejs:clay/caelum_clay_block").randomChance(1).addLoot("kubejs:clay/caelum_clay_ball")


    //minecraft glass is hardcoded to not drop anything unless gem saw or silk touch??
    //event.addBlockLootModifier("minecraft:orange_stained_glass").addLoot("minecraft:orange_stained_glass")
    //event.addBlockLootModifier("minecraft:glass").addLoot("minecraft:glass")
    //hearth and home
    event.addBlockLootModifier("hearth_and_home:barred_glass").addLoot("hearth_and_home:barred_glass").removeLoot("minecraft:iron_nugget")
    event.addBlockLootModifier("hearth_and_home:barred_glass_pane").addLoot("hearth_and_home:barred_glass_pane").removeLoot("minecraft:iron_nugget")
 
})

