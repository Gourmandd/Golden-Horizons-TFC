// to be ported to the mod.

ServerEvents.generateData("last", event => {

    let datagen = Datagen(event).tfcData()

    global.DYE_COLOURS.forEach(colour => {
        datagen.fluidHeat(`${mod_id}:glass/${colour}`, global.MELTING_POINTS["glass"], 0.02143).id(`modpack:tfc/fluid_heat/glass/${colour}`).generate()
    })
})
