



StartupEvents.registry("block", event =>{

    event.create("kubejs:plant/wild_cotton", "tfc:wild_crop")
        .soundType("grass")
        .tagBlock("tfc:mineable_with_sharp_tool")
        .tagBlock("tfc:plants")
        .seeds("kubejs:plant/cotton_seeds")
        .food("rusticdelight:cotton_boll")
        .model("rusticdelight:block/wild_cotton")
        .hardness(0.5)
        .deadModel("tfc:block/plant/dead_bush4")
        .type("default")


    event.create("kubejs:plant/wild_coffee", "tfc:wild_crop")
        .soundType("grass")
        .tagBlock("tfc:mineable_with_sharp_tool")
        .tagBlock("tfc:plants")
        .seeds("kubejs:plant/coffee_seeds")
        .food("rusticdelight:coffee_beans")
        .model("rusticdelight:block/wild_coffee")
        .hardness(0.5)
        .deadModel("tfc:block/plant/dead_bush3")
        .type("default")


    event.create("kubejs:plant/wild_amaranth", "tfc:wild_crop")
        .soundType("grass")
        .tagBlock("tfc:mineable_with_sharp_tool")
        .tagBlock("tfc:plants")
        .seeds("kubejs:plant/amaranth_seeds")
        .food("spectrum:amaranth_bushel")
        .model("kubejs:block/plant/amaranth_5")
        .hardness(0.5)
        .doubleDeadModels("minecraft:block/air", "tfc:block/plant/dead_bush_large")
        .type("double")

        
    event.create("kubejs:plant/cotton", "tfc:crop")
        .stages(3)
        .existingProductItem("rusticdelight:cotton_boll")
        .nutrient("potassium")
        .soundType("grass")
        .tagBlock("minecraft:mineable/hoe")
        .hardness(0.5)
        .deadBlock(block =>{
            block.soundType("grass")
            block.tagBlock("minecraft:mineable/hoe")
            block.hardness(0.5)
        })


    event.create("kubejs:plant/coffee", "tfc:crop")
        .stages(5)
        .existingProductItem("rusticdelight:coffee_beans")
        .nutrient("potassium")
        .soundType("grass")
        .tagBlock("minecraft:mineable/hoe")
        .hardness(0.5)
        .deadBlock(block =>{
            block.soundType("grass")
            block.tagBlock("minecraft:mineable/hoe")
            block.hardness(0.5)
        })
    

    event.create("kubejs:plant/amaranth", "tfc:double_crop")
        .stages(2)
        .doubleStages(3)
        .existingProductItem("spectrum:amaranth_bushel")
        .nutrient("potassium")
        .soundType("grass")
        .tagBlock("minecraft:mineable/hoe")
        .hardness(0.5)
        .deadBlock(block =>{
            block.soundType("grass")
            block.tagBlock("minecraft:mineable/hoe")
            block.hardness(0.5)
        })


    event.create("kubejs:plant/sawblade_holly_bush", "tfc:stationary_berry_bush")
        .displayName("Sawblade Holly Bush")
        .soundType("grass")
        .hardness(0.5)
        .tagBlock("minecraft:mineable/hoe")
        .productItem("spectrum:sawblade_holly_berry")


    event.create("kubejs:plant/aloe_bush", "tfc:stationary_berry_bush")
        .displayName("Aloe Bush")
        .soundType("grass")
        .hardness(0.5)
        .tagBlock("minecraft:mineable/hoe")
        .productItem("spectrum:aloe_leaf")

    
    event.create("kubejs:plant/glistering_melon", "tfc:spreading_crop")
        .model(0, "kubejs:block/plant/cotton_age_0")
        .model(1, "kubejs:block/plant/cotton_age_0")
        .model(2, "kubejs:block/plant/cotton_age_0")
        .model(3, "kubejs:block/plant/cotton_age_0")
        .model(4, "kubejs:block/plant/cotton_age_0")
        .model(5, "kubejs:block/plant/cotton_age_0")
        .model(6, "kubejs:block/plant/cotton_age_0")
        .model(7, "kubejs:block/plant/cotton_age_0")
        .model(8, "kubejs:block/plant/cotton_age_0")
        .model("kubejs:block/plant/cotton_age_0")
        .stages(7)
        .soundType("grass")
        .hardness(0.5)
        .tagBlock("minecraft:mineable/hoe")
        .fruitBlock("spectrum:glistering_melon")
        .deadBlock(block =>{
            block.soundType("grass")
            block.tagBlock("minecraft:mineable/hoe")
            block.hardness(0.5)
        })
    
        

    

})