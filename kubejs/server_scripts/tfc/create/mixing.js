ServerEvents.recipes(event =>{

    addCreateRecipeHandler(event);

    global.DYE_COLOURS.forEach(colour => {
        event.recipes.create.mixing(Fluid.of(`tfc:${colour}_dye`, 1000), [Fluid.of("minecraft:water",1000), `minecraft:${colour}_dye`])
            .heated()
            .id(`modpack:mixing/dye/${colour}`)
    })
    
    event.recipes.create.finalize();
})