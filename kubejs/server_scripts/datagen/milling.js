
ServerEvents.recipes(event =>{

    const METAL_TO_CREATE_CRUSHED_ORE = {
        "bismuth": "create:crushed_raw_uranium",
        "tin": "create:crushed_raw_tin",
        "nickel": "create:crushed_raw_nickel",
        "chromium": "create:crushed_raw_aluminum",
        "cast_iron": "create:crushed_raw_iron",
        "copper": "create:crushed_raw_copper",
        "gold": "create:crushed_raw_gold",
        "silver": "create:crushed_raw_silver",
        "zinc": "create:crushed_raw_zinc"
    }

    const GRADE_TO_PERCENTAGE = {
        "normal": 25,
        "poor": 15,
        "rich": 35,
        "small": 10,
    }
    
    const ORE_BONUS = 2

    global.TFC_GEMS.forEach(gem => {
        event.recipes.create.crushing(Item.of("tfc:powder/" + gem, 4), "tfc:ore/" + gem).processingTime(50).id("modpack:crushing/gem/" + gem)
        event.recipes.create.crushing(Item.of("tfc:powder/" + gem, 4), "tfc:gem/" + gem).processingTime(50).id("modpack:crushing/cut_gem/" + gem)
    })

    global.TFC_MAKES_DYE_TAGS.forEach(colour =>{
        event.recipes.create.milling(Item.of("minecraft:" + colour + "_dye", 2), "#tfc:makes_" + colour + "_dye").processingTime(50).id("modpack:milling/dye/" + colour)
    })

    event.recipes.create.milling(Item.of("minecraft:light_gray_dye", 2), "tfc:plant/yucca").processingTime(50).id("modpack:milling/dye/yucca")
    event.recipes.create.milling(Item.of("minecraft:lime_dye", 2), "tfc:plant/moss").processingTime(50).id("modpack:milling/dye/moss")

    global.TFC_FLOUR_TYPES.forEach(type =>{
        event.recipes.create.milling(Item.of("tfc:food/" + type + "_flour", 1), "tfc:food/" + type + "_grain").processingTime(75).id("modpack:milling/flour/" + type)
    })
    event.recipes.create.milling(Item.of("firmalife:food/masa_flour", 4), "firmalife:food/nixtamal").processingTime(75).id("modpack:milling/flour/masa")

    global.ROCK_TYPES.forEach(type =>{
        event.recipes.create.crushing(Item.of("tfc:rock/gravel/" + type, 1), "tfc:rock/cobble/" + type).processingTime(75).id("modpack:crushing/cobble/" + type)
        event.recipes.create.crushing(Item.of("tfc:rock/gravel/" + type, 1), "tfc:rock/mossy_cobble/" + type).processingTime(75).id("modpack:crushing/mossy_cobble/" + type)
    
        event.recipes.create.crushing(Item.of("tfc:sand/" + global.TFC_ROCKS_TO_SAND_COLOURS[type], 1), "tfc:rock/gravel/" + type).processingTime(75).id("modpack:crushing/gravel" + type)
    })

    global.TFC_SAND_COLOURS.forEach(colour =>{
        event.recipes.create.milling(Item.of("tfc:sand/" + colour, 1), Item.of("tfc:raw_sandstone/" + colour, 1)).processingTime(50).id("modpack:milling/raw_sandstone/" + colour)
    })

    global.RAW_METALS.forEach(metal =>{

        global.ORE_GRADES.forEach(grade =>{
          //event.recipes.create.milling(Item.of("create:crushed_raw_zinc").withChance(0.70), "tfc:ore/rich_sphalerite").processingTime(100).id("modpack:milling/ore/" + global.RAW_METALS_ORES[metal])
          if (metal == "chromium"){
            event.recipes.create.milling(Item.of(METAL_TO_CREATE_CRUSHED_ORE[metal]).withChance((GRADE_TO_PERCENTAGE[grade] * ORE_BONUS) / 100), Item.of("firmalife:ore/" + grade + "_" + global.RAW_METALS_ORES[metal])).processingTime(100).id("modpack:milling/ore/" + grade + "_" + global.RAW_METALS_ORES[metal])
            return
            } 
          if (metal == "cast_iron" || metal == "copper"){
            global.RAW_METALS_ORES[metal].forEach(entry =>{
                event.recipes.create.milling(Item.of(METAL_TO_CREATE_CRUSHED_ORE[metal]).withChance((GRADE_TO_PERCENTAGE[grade] * ORE_BONUS) / 100), Item.of("tfc:ore/" + grade + "_" + entry)).processingTime(100).id("modpack:milling/ore/" + grade + "_" + entry) 
            })
          } else {
            event.recipes.create.milling(Item.of(METAL_TO_CREATE_CRUSHED_ORE[metal]).withChance((GRADE_TO_PERCENTAGE[grade] * ORE_BONUS) / 100), Item.of("tfc:ore/" + grade + "_" + global.RAW_METALS_ORES[metal])).processingTime(100).id("modpack:milling/ore/" + grade + "_" + global.RAW_METALS_ORES[metal])
          }
        })
    })
})