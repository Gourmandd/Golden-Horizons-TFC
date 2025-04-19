
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
        event.create("kubejs:ore/" + name + "/" + rock)
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
    }

    const SPECTRUM_ORE_DATA = {
        "shimmerstone": {"drop": "spectrum:shimmerstone_gem", "tier": "tfc:needs_copper_tool"},
        "azurite": {"drop": "spectrum:raw_azurite", "tier": "tfc:needs_steel_tool"},
        "stratine": {"drop": "spectrum:stratine_fragments", "tier": "tfc:needs_steel_tool"},
        "paltaeria": {"drop": "spectrum:paltaeria_fragments", "tier": "tfc:needs_black_steel_tool"}
    }

    global.SPECTRUM_OVERWORLD_ORES.forEach(ore => {
        global.ROCK_TYPES.forEach(rockType =>{
            createOre(ore, rockType, SPECTRUM_ORE_DATA[ore].tier)
        })
    })
    
    //event.createCustom("kubejs:shimmerore", new $ShimmerstoneOreBlock($FabricBlockSettings.copyOf($Blocks.IRON_ORE).ticksRandomly(), $UniformInt.CODEC.intRange(2, 4), $SpectrumAdvancements.REVEAL_SHIMMERSTONE, $Blocks.STONE.defaultBlockState) )


})