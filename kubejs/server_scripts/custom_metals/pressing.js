
ServerEvents.recipes(event =>{

    addCreateRecipeHandler(event);
    
    global.KUBEJS_METALS.forEach(metal =>{
        event.recipes.create.pressing("kubejs:metal/sheet/" + metal, "kubejs:metal/double_ingot/" + metal)
            .id("modpack:pressing/sheet/" + metal)
    })
    
    event.recipes.create.finalize();
})