// requires: firmalife

// ---------------------------------------------------------- //
// Generates recipes related to create cutting using the saw  //
// ---------------------------------------------------------- //


ServerEvents.recipes(event =>{

    addCreateRecipeHandler(event);
    
    global.FIRMALIFE_METALS.forEach(metal =>{
        event.recipes.create.cutting(Item.of(`firmalife:metal/double_ingot/${metal}`, 2), `firmalife:metal/double_sheet/${metal}`).processingTime(CUTTING_TIME)
        .id(`modpack:cutting/double_sheet/${metal}`, )
    
        event.recipes.create.cutting(Item.of(`firmalife:metal/ingot/${metal}`, 2), `firmalife:metal/double_ingot/${metal}`).processingTime(CUTTING_TIME)
        .id(`modpack:cutting/double_ingot/${metal}`, )
    })
    
    event.recipes.create.finalize();
})