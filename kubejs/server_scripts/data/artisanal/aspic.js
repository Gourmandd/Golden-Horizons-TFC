// requires: artisanal
// requires: caupona

ServerEvents.recipes(event =>{

    // TFC compatible recipes for Caupona soup
    global.CAUPONA_ASPICS.forEach(soup =>{
        scaleablePotRecipeFluid(event, `caupona:${soup}_aspic`, "minecraft:water", 250, `caupona:${soup}`, 250, 500, 300, `melting_${soup}_aspic`)
        scaleablePotRecipeItem(event, "tfc:powder/salt", `caupona:${soup}`, 250, `caupona:${soup}_aspic`, 1000, 300, `solidifying_${soup}`)

    })
})