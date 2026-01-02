// requires: kubejs_tfc

// ------------------------------------------------- //
// Recipes and loottables for deeper down rock types //
// ------------------------------------------------- //


ServerEvents.recipes(event =>{

    global.ROCK_TYPES.forEach(rock_type =>{
        event.recipes.tfc.collapse(`tfc:rock/cobble/${rock_type}`, `kubejs:rock/mortared_cobble/${rock_type}`)
    })
})  