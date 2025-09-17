// requires: kubejs_tfc

ServerEvents.recipes(event =>{
    
    global.DYE_COLOURS.forEach(colour =>{
        
        event.recipes.tfc.barrel_sealed(1000)
            .inputFluid(Fluid.of(`tfc:${colour}_dye`, 25))
            .inputItem("#modpack:unfired_vessels")
            .outputItem(`tfc:ceramic/${colour}_unfired_vessel`)
            .id(`tfc:barrel/dye/${colour}_glazed_vessel`)
    })
})