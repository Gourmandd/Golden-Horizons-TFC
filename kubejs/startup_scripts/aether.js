const AETHER_WOOD_TYPES = [
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
    event.create('valkyrum_scree', 'tfc:ground_cover').ore().tagBlock("minecraft:mineable/pickaxe").soundType("stone")

    AETHER_WOOD_TYPES.forEach(type =>{

        event.create( 'wood/twig/' + type, 'tfc:ground_cover').twig().tagBlock("minecraft:mineable/axe")

    })

    event.create("valkyrum_anvil", "tfc:anvil").tier(0).tagBlock("minecraft:mineable/pickaxe").soundType("stone").requiresTool().texture('top', "ancient_aether:block/valkyrum_block").texture('side', "ancient_aether:block/valkyrum_block").texture('particle', "ancient_aether:block/valkyrum_block")

    event.create("quicksoil_poured_glass").soundType("glass").renderType("translucent").box(0,0,0,16,1,16).noValidSpawns(true).transparent(true).defaultTranslucent().hardness(0.3).tag("c:hidden_from_recipe_viewers")

    event.create("dirt/aether", "tfc:dirt").hardness(0.5).farmland(farmland =>{farmland.hardness(1).soundType("sand").tagBlock("minecraft:mineable/shovel")})
        .soundType("sand").tagBlock("minecraft:mineable/shovel")



    const BUSHES = [
        {"name": "nettles", "item": "kubejs:nettles"},
        {"name": "zanberry", "item": "aether_redux:zanberry"},
        {"name": "blue_berry", "item": "tfc:food/blueberry"},
        {"name": "snowberry", "item": "tfc:food/snowberry"}
    ]
    
    BUSHES.forEach(type =>{
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

    event.create("plant/wild_tomatillo", "tfc:wild_crop").type("default").seeds("kubejs:plant/tomatillo_seeds").food("kubejs:food/tomatillo").soundType("grass").hardness(0.5).tagBlock("minecraft:mineable/hoe")

    event.create("plant/wild_ginger", "tfc:wild_crop").type("default").seeds("kubejs:plant/ginger_seeds").food("kubejs:food/ginger").soundType("grass").hardness(0.5).tagBlock("minecraft:mineable/hoe")

    event.create("plant/wild_blue_squash", "tfc:wild_crop").type("default").seeds("kubejs:plant/blue_squash_seeds").soundType("grass").hardness(0.5).tagBlock("minecraft:mineable/hoe")
    event.create("plant/wild_green_squash", "tfc:wild_crop").type("default").seeds("kubejs:plant/green_squash_seeds").soundType("grass").hardness(0.5).tagBlock("minecraft:mineable/hoe")
    event.create("plant/wild_purple_squash", "tfc:wild_crop").type("default").seeds("kubejs:plant/purple_squash_seeds").soundType("grass").hardness(0.5).tagBlock("minecraft:mineable/hoe")


    event.create("plant/blue_squash", "tfc:spreading_crop").stages(7).fruitBlock("deep_aether:blue_squash").nutrient("phosphorous").soundType("grass").hardness(0.5).tagBlock("minecraft:mineable/hoe")
    event.create("plant/green_squash", "tfc:spreading_crop").stages(7).fruitBlock("deep_aether:green_squash").nutrient("phosphorous").soundType("grass").hardness(0.5).tagBlock("minecraft:mineable/hoe")
    event.create("plant/purple_squash", "tfc:spreading_crop").stages(7).fruitBlock("deep_aether:purple_squash").nutrient("phosphorous").soundType("grass").hardness(0.5).tagBlock("minecraft:mineable/hoe")

    event.create("plant/ginger", "tfc:crop").stages(6).productItem("kubejs:food/ginger").nutrient("potassium").soundType("grass").hardness(0.5).tagBlock("minecraft:mineable/hoe")

    event.create("plant/wynd_oats", "tfc:crop").stages(5).productItem("aether_redux:wynd_oat_panicle").nutrient("nitrogen").soundType("grass").hardness(0.5).tagBlock("minecraft:mineable/hoe")

    event.create("plant/tomatillo", "tfc:pickable_crop").stages(5).matureFruit("kubejs:food/tomatillo").fruit("kubejs:food/tomatillo").productItem("kubejs:food/tomatillo").nutrient("nitrogen").soundType("grass").hardness(0.5).tagBlock("minecraft:mineable/hoe")

    event.create("plant/goldenleaf_bush", "tfc:spreading_berry_bush").maxHeight(4).productItem("deep_aether:goldenleaf_berries")
        .lifecycle('april', 'flowering')
        .lifecycle('may', 'fruiting')
        .lifecycle('june', 'fruiting')
        .lifecycle('july', 'flowering')
        .lifecycle('august', 'healthy')
        .lifecycle('september', 'flowering')
        .lifecycle('october', 'fruiting')
        .lifecycle('november', 'flowering')

    //event.create("holystone_aqueduct", "tfc:aqueduct").allowedFluids(["minecraft:water", "tfc:salt_water", "tfc:spring_water"])
    // crashes when other aqueduct flows water into this one

    AETHER_WOOD_TYPES.forEach(type =>{
        event.create("wood/support/" + type, "tfc:support").woodSoundType()
    })
    
    const ORE_GRADES = [
        "rich",
        "normal",
        "poor"
    ]

    const AETHER_GRADED_ORE = [
        "valkyrum",
        "veridium",
    ]

    const GRADED_ORE = [
        "malachite",
        "bismuthinite",
        "magnetite",
        "sphalerite",
        "garnierite",
        //unused for holystone
        "native_copper",
        "native_gold",
        "native_silver",
        "cassiterite",
        "limonite",
        "tetrahedrite",
        "hematite",
        "chromite"
        //unused for holystone
    ]

    const ORE = [
        "pyrite",
        "cinnabar",
        "lapis_lazuli",
        "gypsum",
        "saltpeter",
        "cryolite",
        "graphite",
        //unused for holystone
        "bituminous_coal",
        "lignite",
        "sulfur",
        "sylvite",
        "borax",
        "halite",
        "amethyst",
        "diamond",
        "emerald",
        "opal",
        "ruby",
        "sapphire",
        "topaz"
        //unused for holystone
    ]
    
    function CreateOre(name, rock){
        event.create(name + "/" + rock)
            .soundType("stone")
            .requiresTool()
            .tagBlock("minecraft:mineable/pickaxe")
            .tagBlock("forge:ores")
            .tagBlock("minecraft:needs_stone_tool")
            .opaque(true)
            .hardness(1.5)
            .resistance(4)
            .renderType('cutout')
    }
    ORE.forEach(ore =>{
        CreateOre("ore/" + ore, "holystone")
    })

    GRADED_ORE.forEach(ore =>{
        ORE_GRADES.forEach(grade =>{
            CreateOre("ore/" + grade + "_" + ore, "holystone")
        })
    })

    AETHER_GRADED_ORE.forEach(ore =>{
        ORE_GRADES.forEach(grade =>{
            CreateOre("ore/" + grade + "_" + ore, "holystone")
        })
    })
    //event.create("valkyrum_ore").soundType("stone").tagBlock("minecraft:mineable/pickaxe").requiresTool().tagBlock("minecraft:needs_stone_tool").hardness(4.0)
})

StartupEvents.registry("item", event =>{

    event.create("drying_bricks/aether")
    event.create("mud_bricks/aether")

    event.create("quicksoil_glass_batch")

    AETHER_WOOD_TYPES.forEach(type => {
        event.create("kubejs:wood/lumber/" + type)
    })

})

StartupEvents.registry("fluid", event =>{
    event.create("veridium").bucketColor(0x075ab3).thickTexture(0x075ab3).noBucket().noBlock().tag("tfc:molten_metals")
    event.create("gravitite").bucketColor(0xFE75D2).thickTexture(0xFE75D2).noBucket().noBlock().tag("tfc:molten_metals")
    event.create("stratus").bucketColor(0xFE75D2).thickTexture(0xECB4FE).noBucket().noBlock().tag("tfc:molten_metals")
})