
const $ItemProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')
const $Vessel = Java.loadClass("net.dries007.tfc.common.items.VesselItem")
const $Jug = Java.loadClass("net.dries007.tfc.common.items.JugItem")
const $TFCConfig = Java.loadClass("net.dries007.tfc.config.TFCConfig")
const $TFCTags = Java.loadClass("net.dries007.tfc.common.TFCTags")



let mold_types = [
    {"cap": "Chisel", "low": "chisel"},
    {"cap": "Pickaxe", "low": "pickaxe"},
    {"cap": "Axe", "low": "axe"},
    {"cap": "Hoe", "low": "hoe"},
    {"cap": "Sword", "low": "sword"},
    {"cap": "Saw", "low": "saw"},
    {"cap": "Scythe", "low": "scythe"},
    {"cap": "Propick", "low": "propick"},
    {"cap": "Shovel", "low": "shovel"},
    {"cap": "Hammer", "low": "hammer"},
    {"cap": "Javelin", "low": "javelin"},
    {"cap": "Mace", "low": "mace"},
    {"cap": "Knife", "low": "knife"},
    {"cap": "Bell", "low": "bell"},
    {"cap": "Ingot", "low": "ingot"},
]



StartupEvents.registry("item", event =>{



function register_clay_type_item(type){//FYI to future me, register a clay ball and block item seperatly as im not adding optional stuff to this function

    mold_types.forEach(mold_type =>{
        event.create("ceramic/unfired_"+ type.low + "_" + mold_type.low + "_mold").displayName("Unfired " + type.cap + " " + mold_type.cap + " Mold")
    })

    event.create("ceramic/unfired_"+ type.low + "_blowpipe").displayName("Unfired " + type.cap + " Blowpipe")
    event.create("ceramic/unfired_"+ type.low + "_flower_pot").displayName("Unfired "+ type.cap + " Flower Pot")
    event.create("ceramic/unfired_"+ type.low + "_bowl").displayName("Unfired "+ type.cap + " Bowl")
    event.create("ceramic/unfired_"+ type.low + "_pan").displayName("Unfired "+ type.cap + " Pan")
    event.create("ceramic/unfired_"+ type.low + "_spindle_head").displayName("Unfired "+ type.cap + " Spindle Head")
    event.create("ceramic/unfired_"+ type.low + "_pot").displayName("Unfired "+ type.cap + " Pot")

    //event.create("ceramic/unfired_"+ type + "_large_vessel").displayName("Unfired "+ type + " Large Vessel") What? large vessel is a block

    event.create("ceramic/unfired_"+ type.low + "_brick").displayName("Unfired "+ type.cap + " Brick")
    event.create("ceramic/"+ type.low + "_brick").displayName(""+ type.cap + " Brick")

    event.createCustom("ceramic/"+ type.low +"_vessel", () => new $Vessel(new $ItemProperties().stacksTo(1))).displayName("Unfired "+ type.cap + " Vessel")
    event.createCustom("ceramic/"+ type.low +"_jug", () => new $Jug(new $ItemProperties().stacksTo(1), $TFCConfig.SERVER.jugCapacity, $TFCTags.Fluids.USABLE_IN_JUG)).displayName("Unfired "+ type.cap + " Jug")

    event.create("ceramic/unfired_"+ type.low + "_vessel").displayName("Unfired "+ type.cap + " Vessel")
    event.create("ceramic/unfired_"+ type.low + "_jug").displayName("Unfired "+ type.cap + " Jug")
}


// template for the type argument {"cap": "", "low": ""} the fact that I have to do this to remind myself says a lot about this code
    register_clay_type_item({"cap": "Kaolinite", "low": "kaolinite"})
    register_clay_type_item({"cap": "Yixing", "low": "yixing"})
    register_clay_type_item({"cap": "Porcelain", "low": "porcelain"})
    register_clay_type_item({"cap": "Earthenware", "low": "earthenware"})
    register_clay_type_item({"cap": "Yellowware", "low": "yellowware"})


    event.create("clay/yixing_clay_ball").displayName("Yixing Clay Ball").tag("tfc:any_knapping")
    event.create("clay/porcelain_clay_ball").displayName("Porcelain Clay Ball").tag("tfc:any_knapping")
    event.create("clay/earthenware_clay_ball").displayName("Earthenware Clay Ball").tag("tfc:any_knapping")
    event.create("clay/yellowware_clay_ball").displayName("Yellowware Clay Ball").tag("tfc:any_knapping")

})



StartupEvents.registry("block", event =>{

    function register_clay_type_item(type){
        event.create("ceramic/"+ type.low + "_bricks").displayName(type.cap + " Bricks").requiresTool(true).tagBlock("minecraft:mineable/pickaxe").soundType("deepslate_bricks")
        event.create("ceramic/"+ type.low + "_brick_slab", "slab").displayName(type.cap + " Brick Slab").property(BlockProperties.SLAB_TYPE).requiresTool(true).tagBlock("minecraft:mineable/pickaxe").soundType("deepslate_bricks")
        event.create("ceramic/"+ type.low + "_brick_stairs", "stairs").displayName(type.cap + " Brick Stairs").property(BlockProperties.STAIRS_SHAPE).requiresTool(true).tagBlock("minecraft:mineable/pickaxe").soundType("deepslate_bricks")
        event.create("ceramic/"+ type.low + "_brick_wall", "wall").displayName(type.cap + " Brick Wall").property(BlockProperties.IN_WALL).requiresTool(true).tagBlock("minecraft:mineable/pickaxe").soundType("deepslate_bricks")
    }


    register_clay_type_item({"cap": "Kaolinite", "low": "kaolinite"})
    register_clay_type_item({"cap": "Yixing", "low": "yixing"})
    register_clay_type_item({"cap": "Porcelain", "low": "porcelain"})
    register_clay_type_item({"cap": "Earthenware", "low": "earthenware"})
    register_clay_type_item({"cap": "Yellowware", "low": "yellowware"})


    event.create("clay/yixing_clay_block").displayName("Yixing Clay Block").tagBlock("minecraft:mineable/shovel").soundType("wet_grass")
    event.create("clay/porcelain_clay_block").displayName("Porcelain Clay Block").tagBlock("minecraft:mineable/shovel").soundType("wet_grass")
    event.create("clay/earthenware_clay_block").displayName("Earthenware Clay Block").tagBlock("minecraft:mineable/shovel").soundType("wet_grass")
    event.create("clay/yellowware_clay_block").displayName("Yellowware Clay Block").tagBlock("minecraft:mineable/shovel").soundType("wet_grass")

})



//event.createCustom("test_vessel", () => new $Vessel(new $ItemProperties().stacksTo(1))).displayName("Test Vessel")
//event.createCustom('ceramic/test_vessel', () => new $Vessel(new $ItemProperties().stacksTo(1)))
//event.createCustom('ceramic/test_jug', () => new $Jug(new $ItemProperties().stacksTo(1), $TFCConfig.SERVER.jugCapacity, $TFCTags.Fluids.USABLE_IN_JUG))