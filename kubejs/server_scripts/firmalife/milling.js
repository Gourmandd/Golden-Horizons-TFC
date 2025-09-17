// requires: firmalife


ServerEvents.recipes(event =>{

    addCreateRecipeHandler(event);

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


    event.recipes.createMilling(Item.of("firmalife:food/masa_flour", 4), "firmalife:food/nixtamal")
        .processingTime(75)
        .id(`modpack:milling/flour/masa`)
    
    global.RAW_METALS.forEach(metal =>{

        global.ORE_GRADES.forEach(grade =>{
          //event.recipes.createMilling(Item.of("create:crushed_raw_zinc").withChance(0.70), "tfc:ore/rich_sphalerite").processingTime(100).id(`modpack:milling/ore/" + global.RAW_METALS_ORES[metal])
          if (metal == "chromium"){
            event.recipes.createMilling(Item.of(METAL_TO_CREATE_CRUSHED_ORE[metal]).withChance((GRADE_TO_PERCENTAGE[grade] * ORE_BONUS) / 100), Item.of(`firmalife:ore/${grade}_${global.RAW_METALS_ORES[metal]}`)).processingTime(100).id(`modpack:milling/ore/${grade}_${global.RAW_METALS_ORES[metal]}`)
            return
            }
        })
    })

    event.recipes.create.finalize();
})