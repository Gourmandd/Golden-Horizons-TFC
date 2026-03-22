// to be ported to the mod.

ServerEvents.generateData("last", event => {

    let datagen = Datagen(event).tfcData()

    global.KUBEJS_METALS.forEach(metal => {
        datagen.fluidHeat(global.METAL_FLUIDS[metal], global.MELTING_POINTS[metal], 0.02143).generate()
    })
})
