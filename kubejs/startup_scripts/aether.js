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
]

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

StartupEvents.registry("block", event =>{

    event.create('loose_holystone_pebble', 'tfc:ground_cover').ore().tagBlock("minecraft:mineable/pickaxe").soundType("stone")
    event.create('veridium_scree', 'tfc:ground_cover').ore().tagBlock("minecraft:mineable/pickaxe").soundType("stone")
    event.create('arkenium_scree', 'tfc:ground_cover').ore().tagBlock("minecraft:mineable/pickaxe").soundType("stone")
    event.create('clorite_scree', 'tfc:ground_cover').ore().tagBlock("minecraft:mineable/pickaxe").soundType("stone")
    event.create('divinite_scree', 'tfc:ground_cover').ore().tagBlock("minecraft:mineable/pickaxe").soundType("stone")

    aether_wood_types.forEach(type =>{

        event.create( type + '_twig', 'tfc:ground_cover').twig().tagBlock("minecraft:mineable/axe")

    })

    event.create("arkenium_anvil", "tfc:anvil").displayName("Arkenium Anvil").tier(0).tagBlock("minecraft:mineable/pickaxe").soundType("stone").requiresTool().texture('top', "aethersdelight:block/raw_arkenium_block").texture('side', "aethersdelight:block/arkenium_blast_furnace_top")

    event.create("quicksoil_poured_glass").displayName("Quicksoil Poured Glass").soundType("glass").renderType("translucent").box(0,0,0,16,1,16).noValidSpawns(true).transparent(true).defaultTranslucent().hardness(0.3).tag("c:hidden_from_recipe_viewers")

    event.create("dirt/aether", "tfc:dirt").farmland(farmland =>{farmland.hardness(1).soundType("sand").tagBlock("minecraft:mineable/shovel")})
        .soundType("sand").tagBlock("minecraft:mineable/shovel")



    let bushes = [
        {"name": "peppermint", "item": "aethersdelight:peppermint_leaf"},
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


    event.create("plant/wild_ginger", "tfc:wild_crop").type("default").seeds("kubejs:plant/ginger_seeds").food("aethersdelight:ginger").soundType("grass").hardness(0.5).tagBlock("minecraft:mineable/hoe")
    event.create("plant/wild_leek", "tfc:wild_crop").type("default").seeds("kubejs:plant/leek_seeds").food("aethersdelight:leek").soundType("grass").hardness(0.5).tagBlock("minecraft:mineable/hoe")
    event.create("plant/wild_parsnip", "tfc:wild_crop").type("default").seeds("kubejs:plant/parsnip_seeds").food("aethersdelight:parsnip").soundType("grass").hardness(0.5).tagBlock("minecraft:mineable/hoe")

    event.create("plant/ginger", "tfc:crop").stages(4).productItem("aethersdelight:ginger").nutrient("nitrogen").soundType("grass").hardness(0.5).tagBlock("minecraft:mineable/hoe")

    event.create("plant/leek", "tfc:crop").stages(4).productItem("aethersdelight:leek").nutrient("potassium").soundType("grass").hardness(0.5).tagBlock("minecraft:mineable/hoe")

    event.create("plant/parsnip", "tfc:crop").stages(4).productItem("aethersdelight:parsnip").nutrient("phosphorous").soundType("grass").hardness(0.5).tagBlock("minecraft:mineable/hoe")

    event.create("plant/wynd_oats", "tfc:crop").stages(5).productItem("aether_redux:wynd_oat_panicle").nutrient("nitrogen").soundType("grass").hardness(0.5).tagBlock("minecraft:mineable/hoe")

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