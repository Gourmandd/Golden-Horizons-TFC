ServerEvents.recipes(event =>{
    global.CAUPONA_ASPICS.forEach(soup =>{
        scaleablePotRecipeFluid(event, "caupona:" + soup + "_aspic", "minecraft:water", 250, "caupona:" + soup, 250, 500, 300, "melting_" + soup + "_aspic")
        scaleablePotRecipeItem(event, "tfc:powder/salt", "caupona:" + soup, 250, "caupona:" + soup + "_aspic", 1000, 300, "solidifying_" + soup)
    
        doliumRestingFluid(event, "caupona:" + soup, 250, "caupona:" + soup + "_aspic", "solidifying_" + soup)
    })
})