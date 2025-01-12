let aether_wood_types = [
    "skyroot",
    "fieldsproot",
    "blightwillow",
    "cloudcap",
    "jellyshroom",
    "crystal",
    "glacia",
    "roseroot",
    "yagroot",
    "cruderoot",
    "conberry",
    "sunroot",
    "highsproot",
    "sakura"
]

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

StartupEvents.registry("block", event =>{

    event.create('loose_holystone_pebble', 'tfc:ground_cover').ore().tagBlock("minecraft:mineable/pickaxe").soundType("stone")
    event.create('veridium_scree', 'tfc:ground_cover').ore().tagBlock("minecraft:mineable/pickaxe").soundType("stone")
    event.create('clorite_scree', 'tfc:ground_cover').ore().tagBlock("minecraft:mineable/pickaxe").soundType("stone")
    event.create('divinite_scree', 'tfc:ground_cover').ore().tagBlock("minecraft:mineable/pickaxe").soundType("stone")

    aether_wood_types.forEach(type =>{

        event.create( type + '_twig', 'tfc:ground_cover').twig().tagBlock("minecraft:mineable/axe")

    })

    event.create("test_anvil", "tfc:anvil").displayName("Arkenium Anvil").tier(0).tagBlock("minecraft:mineable/pickaxe").soundType("stone").requiresTool().texture('top', "minecraft:block/iron_block").texture('side', "minecraft:block/iron_block")

    event.create("quicksoil_poured_glass").displayName("Quicksoil Poured Glass").soundType("glass").renderType("translucent").box(0,0,0,16,1,16).noValidSpawns(true).transparent(true).defaultTranslucent().hardness(0.3).tag("c:hidden_from_recipe_viewers")

    event.create("dirt/aether", "tfc:dirt").hardness(0.5).farmland(farmland =>{farmland.hardness(1).soundType("sand").tagBlock("minecraft:mineable/shovel")})
        .soundType("sand").tagBlock("minecraft:mineable/shovel")



    let bushes = [
        {"name": "zanberry", "item": "aether_redux:zanberry"},
        {"name": "blue_berry", "item": "aether:blue_berry"}
    ]
    
    bushes.forEach(type =>{
        event.create( "plant/" + type.name + "_bush", "tfc:stationary_berry_bush")
        .productItem(type.item)
        .lifecycle("january", "healthy")
        .lifecycle("february", "flowering")
        .lifecycle("march", "fruiting")
        .lifecycle("april", "flowering")
        .lifecycle("may", "healthy")
        .lifecycle("june", "flowering")
        .lifecycle("july", "fruiting")
        .lifecycle("august", "flowering")
        .lifecycle("september", "healthy")
        .lifecycle("october", "flowering")
        .lifecycle("november", "fruiting")
        .lifecycle("december", "flowering")
        .tagBlock("minecraft:mineable/hoe")
        .hardness(0.5)
        .soundType("grass")   
    })


    event.create("plant/wynd_oats", "tfc:crop").stages(5).productItem("aether_redux:wynd_oat_panicle").nutrient("nitrogen").soundType("grass").hardness(0.5).tagBlock("minecraft:mineable/hoe")


    //event.create("holystone_aqueduct", "tfc:aqueduct").allowedFluids(["minecraft:water", "tfc:salt_water", "tfc:spring_water"])

})

StartupEvents.registry("item", event =>{

    event.create("drying_bricks/aether").displayName("Wet Aether Mud Bricks")
    event.create("mud_bricks/aether").displayName("Aether Mud Bricks")

    event.create("quicksoil_glass_batch").displayName("Quicksoil Glass Batch")

    aether_wood_types.forEach(type => {
        event.create("kubejs:wood/lumber/" + type).displayName(capitalizeFirstLetter(type) + " Lumber")
    })

})

StartupEvents.registry("fluid", event =>{
    event.create("veridium").displayName("Veridium").bucketColor(0x075ab3).thickTexture(0x075ab3).noBucket().noBlock().tag("tfc:molten_metals")
})