
/*
let $ShimmerstoneOreBlock = Java.loadClass("de.dafuqs.spectrum.registries.SpectrumBlocks")
let $UniformInt = Java.loadClass("net.minecraft.util.valueproviders.UniformInt")
let $FabricBlockSettings = Java.loadClass("net.fabricmc.fabric.api.object.builder.v1.block.FabricBlockSettings")
let $SpectrumAdvancements = Java.loadClass("de.dafuqs.spectrum.registries.SpectrumAdvancements")
let $Blocks = Java.loadClass("net.minecraft.world.level.block.Blocks")
*/

StartupEvents.registry("block", event =>{

    function createOre(name, rock, tierTag){
        //let prospectedKey = "block.kubejs.ore." + name + "." + rock + ".prospected"
        //let prospectedName = nameProcessing(name)
        event.create(`ore/${name}/${rock}`)
            .soundType("stone")
            .requiresTool()
            .tagBlock("minecraft:mineable/pickaxe")
            .tagBlock("forge:ores")
            .tagBlock(tierTag)
            .opaque(true)
            .hardness(1.5) 
            .resistance(4)
            .renderType('cutout')
            .displayName(nameProcessing(rock) + " " + nameProcessing(name))
            .tagBlock("tfc:prospectable")
            .tagBlock("precisionprospecting:prospectable_mineral")
    }

    const DEEPER_DOWN_STONES = [
        "argillite", //classic stone
        "nephelinite", //deepslate
        "blackslag", //blackslag
        "travertine", //dripstone
        "picrite_basalt" //basal marble
    ]

    const ORE_BLOCK_GRADES = [
        "normal",
        "poor",
        "rich",
    ]

    global.SPECTRUM_OVERWORLD_ORES.forEach(ore => {
        global.ROCK_TYPES.forEach(rockType =>{
            createOre(ore, rockType, global.ORE_MINING_TIERS[ore])
        })

        DEEPER_DOWN_STONES.forEach(rockType =>{
            createOre(ore, rockType, global.ORE_MINING_TIERS[ore])
        })
    })

    global.SPECTRUM_DEEPER_DOWN_ORES.forEach(ore =>{
        global.ROCK_TYPES.forEach(rockType =>{
            createOre(ore, rockType, global.ORE_MINING_TIERS[ore])
        })

        DEEPER_DOWN_STONES.forEach(rockType =>{
            createOre(ore, rockType, global.ORE_MINING_TIERS[ore])
        })
    })

    // generate TFC ores with deeper down stones.
    DEEPER_DOWN_STONES.forEach(rockType =>{

        global.TFC_GEMS.forEach(ore =>{
            createOre(ore, rockType, global.ORE_MINING_TIERS[ore])
        })

        global.TFC_MINERALS.forEach(ore =>{
            createOre(ore, rockType, global.ORE_MINING_TIERS[ore])
        })

        global.TFC_ORES.forEach(ore =>{
            ORE_BLOCK_GRADES.forEach(grade =>{
                createOre(grade + "_" + ore, rockType, global.ORE_MINING_TIERS[ore])
            })
        })

        global.FIRMALIFE_ORES.forEach(ore =>{
            ORE_BLOCK_GRADES.forEach(grade =>{
                createOre(grade + "_" + ore, rockType, global.ORE_MINING_TIERS[ore])
            })
        })
    })
    


    
    //event.createCustom("kubejs:shimmerore", new $ShimmerstoneOreBlock($FabricBlockSettings.copyOf($Blocks.IRON_ORE).ticksRandomly(), $UniformInt.CODEC.intRange(2, 4), $SpectrumAdvancements.REVEAL_SHIMMERSTONE, $Blocks.STONE.defaultBlockState) )


})