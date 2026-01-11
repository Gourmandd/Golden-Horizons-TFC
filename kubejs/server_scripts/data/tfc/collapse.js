ServerEvents.recipes(event => {

    let datagen = Datagen(event).terraFirmaCraftRecipes()

    global.ROCK_TYPES.forEach(rockType => {
        datagen.collapse(`tfc:rock/cobble/${rockType}`, `${mod_id}:rock/mortared_cobble/${rockType}`).id(`${mod_id}:collapse/mortared_cobble/${rockType}`).generate()
    })
})
