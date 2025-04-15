
ServerEvents.recipes(event =>{
    global.DYE_COLOURS.forEach(colour =>{

        event.shapeless(Item.of("minecraft:" + colour + "_terracotta"), [
            "kubejs:terracotta/shard_" + colour,
            "kubejs:terracotta/shard_" + colour,
            "kubejs:terracotta/shard_" + colour,
            "kubejs:terracotta/shard_" + colour,
        ]).id("modpack:crafting/shapeless/" + colour + "_terracotta_from_shards")

        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless("hearth_and_home:" + colour + "_terracotta_bricks",["minecraft:" + colour + "_terracotta" ,"#tfc:chisels"])
        ).id("modpack:crafting/shapeless/terracotta_bricks/" + colour)

        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless("hearth_and_home:" + colour + "_shingles",["minecraft:" + colour + "_terracotta" ,"#tfc:saws"])
        ).id("modpack:crafting/shapeless/terracotta_shingles/" + colour)

        event.remove("hearth_and_home:" + colour + "_shingles")

        event.recipes.tfc.landslide("kubejs:terracotta/crushed_" + colour, "kubejs:terracotta/crushed_" + colour)
            .id("modpack:landslide/crushed_" + colour + "_terracotta")

        event.recipes.create.milling([Item.of("kubejs:terracotta/shard_" + colour), Item.of("kubejs:terracotta/shard_" + colour).withChance(0.5)], Item.of("kubejs:terracotta/crushed_" + colour))
            .id("modpack:milling/crushed_terracotta/" + colour)

        event.recipes.create.crushing("kubejs:terracotta/crushed_" + colour, "minecraft:" + colour + "_terracotta").processingTime(75).id("modpack:crushing/terracotta/" + colour)  
    })
})