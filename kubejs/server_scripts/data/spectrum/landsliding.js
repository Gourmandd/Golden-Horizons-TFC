// requires: spectrum

ServerEvents.recipes(event => {

    let datagen = Datagen(event).terraFirmaCraftRecipes()

    datagen.collapse(`spectrum:cobbled_blackslag`, "spectrum:shimmel").id(`${mod_id}:collapse/shimmel`).generate()
    datagen.collapse(`spectrum:cobbled_blackslag`, "spectrum:sawblade_grass").id(`${mod_id}:collapse/sawblade_grass`).generate()
    datagen.collapse(`spectrum:cobbled_blackslag`, "spectrum:overgrown_blackslag").id(`${mod_id}:collapse/overgrown_blackslag`).generate()
    datagen.collapse(`spectrum:cobbled_blackslag`, "spectrum:ashen_blackslag").id(`${mod_id}:collapse/ashen_blackslag`).generate()
    datagen.collapse("spectrum:slush", "spectrum:overgrown_slush").id(`${mod_id}:collapse/overgrown_slush`).generate()
    datagen.collapse("spectrum:slush", "spectrum:slush").id(`${mod_id}:collapse/slush`).generate()

    delete datagen
})
