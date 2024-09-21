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


//This can be done with loot tables within the datapack
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


    //minecraft glass is hardcoded to not drop anything unless gem saw or silk touch??
    //event.addBlockLootModifier("minecraft:orange_stained_glass").addLoot("minecraft:orange_stained_glass")
    //event.addBlockLootModifier("minecraft:glass").addLoot("minecraft:glass")
    //hearth and home
    event.addBlockLootModifier("hearth_and_home:barred_glass").addLoot("hearth_and_home:barred_glass").removeLoot("minecraft:iron_nugget")
    event.addBlockLootModifier("hearth_and_home:barred_glass_pane").addLoot("hearth_and_home:barred_glass_pane").removeLoot("minecraft:iron_nugget")
 
})


ServerEvents.recipes(event =>{

event.remove({ type: "minecraft:smelting" })
event.remove({ type: "spectrum:anvil_crushing" })
event.remove({ type: "create:haunting" })
event.remove({ type: "create:haunting" })

event.remove({type: "minecraft:crafting_shaped", mod: "caupona"})
//event.remove({type: "caupona:aspic_melt" })
event.remove({type: "caupona:boiling" })
event.remove({type: "caupona:cooking"})
event.remove({type: "caupona:dolium", mod: "caupona"})
event.remove({type: "caupona:frying"})
event.remove({type: "caupona:spice"}) 
event.remove({mod: "quark", input: Ingredient.of(/.*glass.*/)}) 
event.remove({mod: "farmersdelight", output: Ingredient.of("crabbersdelight:coral_fragments")})
event.remove({mod: "estrogen"})
event.remove({mod: "copycats"})
event.remove({mod: "functionalstorage"})
//event.remove({type: "create:sequenced_assembly", mod: "exposure"}) I cant remove those recipes even through datapack?


event.remove({output: Ingredient.of(/.*lamp.*/), mod: "another_furniture"})
event.remove({input: "tfc:metal/ingot/zinc", type: "minecraft:stonecutting"})

event.remove({mod: "farmersdelight", output: "#forge:stripped_logs"})
event.remove({mod: "farmersdelight", output: "#forge:stripped_wood"})
event.remove({mod: "farmersdelight", output: "#tfc:dyes"})

event.remove({mod: "hearth_and_home", input: "minecraft:stick", not: {output: "hearth_and_home:shoji"}})

event.remove({mod: "magistuarmory"})

event.remove({mod: "hearth_and_home", input: "minecraft:glass"})
})

BlockEvents.rightClicked("farmersdelight:rich_soil", event =>{
    event.cancel() //cant till the soil anymore. Used for growing mushrooms
})

TFCEvents.data(event =>{
    event.climateRange(climate => {
        climate.maxHydration(70)
        climate.minHydration(10)
        climate.minTemperature(-3)
        climate.maxTemperature(27)
        climate.temperatureWiggle(3)
    }, 'kubejs:nettles_bush')
})

ServerEvents.tags('item', event => {
})