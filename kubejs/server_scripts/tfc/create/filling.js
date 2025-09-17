// ---------------------------------------------------------- //
// Generates recipes related to create cutting using the saw  //
// ---------------------------------------------------------- //



ServerEvents.recipes(event =>{
    
    addCreateRecipeHandler(event);
    
    global.TFC_SOIL_TYPES.forEach(type =>{
        event.recipes.createFilling(`tfc:grass/${type}`, [`tfc:dirt/${type}`, Fluid.of("minecraft:water", 500)])
            .id(`modpack:filling/mud/${type}`)
    })

    event.recipes.create.finalize();
})