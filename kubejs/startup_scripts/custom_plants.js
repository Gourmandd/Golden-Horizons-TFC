



StartupEvents.registry("block", event =>{

    event.create("kubejs:plant/wild_cotton", "tfc:wild_crop")
        .soundType("grass")
        .tagBlock("minecraft:mineable/hoe")
        .seeds("kubejs:plant/cotton_seeds")
        .food("rusticdelight:cotton_boll")
        .model("rusticdelight:block/wild_cotton")
        .hardness(0.5)
        .deadModel("tfc:block/plant/dead_bush4")
    

    event.create("kubejs:plant/wild_coffee", "tfc:wild_crop")
        .soundType("grass")
        .tagBlock("minecraft:mineable/hoe")
        .seeds("kubejs:plant/coffee_seeds")
        .food("rusticdelight:coffee_beans")
        .model("rusticdelight:block/wild_coffee")
        .hardness(0.5)
        .deadModel("tfc:block/plant/dead_bush3")

        
    event.create("kubejs:plant/cotton", "tfc:crop")
        .stages(3)
        .productItem("rusticdelight:cotton_boll")
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
        .productItem("rusticdelight:coffee_beans")
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
        .productItem("spectrum:amaranth_bushel")
        .nutrient("potassium")
        .soundType("grass")
        .tagBlock("minecraft:mineable/hoe")
        .hardness(0.5)
        .deadBlock(block =>{
            block.soundType("grass")
            block.tagBlock("minecraft:mineable/hoe")
            block.hardness(0.5)
        })
})