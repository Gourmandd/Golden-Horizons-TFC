// ---------------------------------------------------------- //
// Generates recipes related to create cutting using the saw  //
// ---------------------------------------------------------- //

const LOG_TYPES = [
    "wood",
    "log"
]

ServerEvents.recipes(event =>{

    const LOG_TYPES = [
        "wood",
        "log"
    ]

    const CUTTING_TIME = 100

    global.TFC_WOOD_TYPES.forEach(wood =>{
        //stripped logs from logs
        LOG_TYPES.forEach(type =>{
            event.recipes.create.cutting("tfc:wood/stripped_" + type + "/" + wood, Item.of("tfc:wood/" + type + "/" + wood)).processingTime(CUTTING_TIME)
                .id("modpack:cutting/tfc/"+ type + "/stripping/"+ wood)
            event.recipes.create.cutting(Item.of("tfc:wood/planks/" + wood, 4), Item.of("tfc:wood/stripped_"+ type + "/"+ wood)).processingTime(CUTTING_TIME)
                .id("modpack:cutting/tfc/"+ type + "to_planks/" + wood)
        })     
        event.recipes.create.cutting(Item.of("tfc:wood/lumber/" + wood, 4), Item.of("tfc:wood/planks/"+ wood)).processingTime(CUTTING_TIME)
            .id("modpack:cutting/tfc/into_lumber/" + wood)   
    })

    global.AFC_WOOD_TYPES.forEach(wood =>{
        //stripped logs from logs
        LOG_TYPES.forEach(type =>{
            event.recipes.create.cutting("afc:wood/stripped_" + type + "/" + wood, Item.of("afc:wood/" + type + "/" + wood)).processingTime(CUTTING_TIME)
                .id("modpack:cutting/afc/"+ type + "/stripping/"+ wood)
            event.recipes.create.cutting(Item.of("afc:wood/planks/" + wood, 4), Item.of("afc:wood/stripped_"+ type + "/"+ wood)).processingTime(CUTTING_TIME)
                .id("modpack:cutting/afc/"+ type + "to_planks/" + wood)
        })  
        event.recipes.create.cutting(Item.of("afc:wood/lumber/" + wood, 4), Item.of("afc:wood/planks/"+ wood)).processingTime(CUTTING_TIME)
            .id("modpack:cutting/afc/into_lumber/" + wood) 
    })

    global.TFC_METALS.forEach(metal =>{
        event.recipes.create.cutting(Item.of("tfc:metal/double_ingot/" + metal, 2), "tfc:metal/double_sheet/" + metal).processingTime(CUTTING_TIME)
            .id("modpack:cutting/double_sheet/" + metal, )
        
        event.recipes.create.cutting(Item.of("tfc:metal/ingot/" + metal, 2), "tfc:metal/double_ingot/" + metal).processingTime(CUTTING_TIME)
            .id("modpack:cutting/double_ingot/" + metal, )
    })

    global.KUBEJS_METALS.forEach(metal =>{
        event.recipes.create.cutting(Item.of("kubejs:metal/double_ingot/" + metal, 2), "kubejs:metal/double_sheet/" + metal).processingTime(CUTTING_TIME)
        .id("modpack:cutting/double_sheet/" + metal, )
    
        event.recipes.create.cutting(Item.of("kubejs:metal/ingot/" + metal, 2), "kubejs:metal/double_ingot/" + metal).processingTime(CUTTING_TIME)
        .id("modpack:cutting/double_ingot/" + metal, )
    })

    global.FIRMALIFE_METALS.forEach(metal =>{
        event.recipes.create.cutting(Item.of("firmalife:metal/double_ingot/" + metal, 2), "firmalife:metal/double_sheet/" + metal).processingTime(CUTTING_TIME)
        .id("modpack:cutting/double_sheet/" + metal, )
    
        event.recipes.create.cutting(Item.of("firmalife:metal/ingot/" + metal, 2), "firmalife:metal/double_ingot/" + metal).processingTime(CUTTING_TIME)
        .id("modpack:cutting/double_ingot/" + metal, )
    })
})