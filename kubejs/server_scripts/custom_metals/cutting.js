// ---------------------------------------------------------- //
// Generates recipes related to create cutting using the saw  //
// ---------------------------------------------------------- //


ServerEvents.recipes(event =>{

    const CUTTING_TIME = 100

    addCreateRecipeHandler(event);

    global.KUBEJS_METALS.forEach(metal =>{
        event.recipes.create.cutting(Item.of(`kubejs:metal/double_ingot/${metal}`, 2), `kubejs:metal/double_sheet/${metal}`).processingTime(CUTTING_TIME)
        .id(`modpack:cutting/double_sheet/${metal}`, )
    
        event.recipes.create.cutting(Item.of(`kubejs:metal/ingot/${metal}`, 2), `kubejs:metal/double_ingot/${metal}`).processingTime(CUTTING_TIME)
        .id(`modpack:cutting/double_ingot/${metal}`, )
    })
    
    event.recipes.create.finalize();
})