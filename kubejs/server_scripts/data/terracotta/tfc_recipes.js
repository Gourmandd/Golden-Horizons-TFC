ServerEvents.recipes(event => {

    let datagen = Datagen(event).terraFirmaCraftRecipes()

    global.DYE_COLOURS.forEach(colour => {

        datagen.landslide(`${mod_id}:terracotta/crushed_${colour}`, `${mod_id}:terracotta/crushed_${colour}`).id(`${mod_id}:landslide/crushed_${colour}_terracotta`).generate()
    })
})
