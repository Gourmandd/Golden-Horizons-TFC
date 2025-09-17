// requires: afc

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

    global.AFC_WOOD_TYPES.forEach(wood =>{
        //stripped logs from logs
        LOG_TYPES.forEach(type =>{
            event.recipes.create.cutting(`afc:wood/stripped_${type}/${wood}`, Item.of(`afc:wood/${type}/${wood}`)).processingTime(CUTTING_TIME)
                .id(`modpack:cutting/afc/${type}/stripping/${wood}`)
            event.recipes.create.cutting(Item.of(`afc:wood/planks/${wood}`, 4), Item.of(`afc:wood/stripped_${type}/${wood}`)).processingTime(CUTTING_TIME)
                .id(`modpack:cutting/afc/${type}to_planks/${wood}`)
        })  
        event.recipes.create.cutting(Item.of(`afc:wood/lumber/${wood}`, 4), Item.of(`afc:wood/planks/${wood}`)).processingTime(CUTTING_TIME)
            .id(`modpack:cutting/afc/into_lumber/${wood}`) 
    })

    event.recipes.create.finalize();
})