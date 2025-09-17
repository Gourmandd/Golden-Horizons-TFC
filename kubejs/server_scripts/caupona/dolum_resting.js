// requires: caupona

ServerEvents.recipes(event =>{

    // TFC compatible recipes for Caupona soup
    global.CAUPONA_ASPICS.forEach(soup =>{
    
        doliumRestingFluid(event, `caupona:${soup}`, 250, `caupona:${soup}_aspic`, `solidifying_${soup}`)
    })
})