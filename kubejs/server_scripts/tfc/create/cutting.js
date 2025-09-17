// ---------------------------------------------------------- //
// Generates recipes related to create cutting using the saw  //
// ---------------------------------------------------------- //


ServerEvents.recipes(event =>{

    addCreateRecipeHandler(event);
       
    const LOG_TYPES = [
        "wood",
        "log"
    ]

    const CUTTING_TIME = 100

    global.TFC_WOOD_TYPES.forEach(wood =>{
        //stripped logs from logs
        LOG_TYPES.forEach(type =>{
            event.recipes.create.cutting(`tfc:wood/stripped_${type}/${wood}`, Item.of(`tfc:wood/${type}/${wood}`)).processingTime(CUTTING_TIME)
                .id(`modpack:cutting/tfc/${type}/stripping/${wood}`)
            event.recipes.create.cutting(Item.of(`tfc:wood/planks/${wood}`, 4), Item.of(`tfc:wood/stripped_${type}/${wood}`)).processingTime(CUTTING_TIME)
                .id(`modpack:cutting/tfc/${type}to_planks/${wood}`)
        })     
        event.recipes.create.cutting(Item.of(`tfc:wood/lumber/${wood}`, 4), Item.of(`tfc:wood/planks/${wood}`)).processingTime(CUTTING_TIME)
            .id(`modpack:cutting/tfc/into_lumber/${wood}`)   
    })

    global.TFC_METALS.forEach(metal =>{
        event.recipes.create.cutting(Item.of(`tfc:metal/double_ingot/${metal}`, 2), `tfc:metal/double_sheet/${metal}`).processingTime(CUTTING_TIME)
            .id(`modpack:cutting/double_sheet/${metal}`, )
        
        event.recipes.create.cutting(Item.of(`tfc:metal/ingot/${metal}`, 2), `tfc:metal/double_ingot/${metal}`).processingTime(CUTTING_TIME)
            .id(`modpack:cutting/double_ingot/${metal}`, )
    })
    
    event.recipes.create.finalize(); 
})