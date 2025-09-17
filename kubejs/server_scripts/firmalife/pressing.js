// requires: firmalife

ServerEvents.recipes(event =>{

    addCreateRecipeHandler(event);
    
    global.FIRMALIFE_METALS.forEach(metal =>{
        event.recipes.create.pressing("firmalife:metal/sheet/" + metal, "firmalife:metal/double_ingot/" + metal)
            .id("modpack:pressing/sheet/" + metal)
    })
    
    event.recipes.create.finalize();
})