// requires: artisanal
// requires: kubejs_tfc

ServerEvents.recipes(event =>{
    
    global.TOOL_METALS.forEach(metal =>{

        if (metal == "wrought_iron"){
        
            event.recipes.tfc.heating(`artisanal:metal/can_opener/${metal}`, global.MELTING_POINTS[metal])
                .resultFluid(Fluid.of("tfc:metal/cast_iron", 200))
                .id(`modpack:heating/can_opener/${metal}`)
                .useDurability(true)

        } else {
        
            event.recipes.tfc.heating(`artisanal:metal/can_opener/${metal}`, global.MELTING_POINTS[metal])
                .resultFluid(Fluid.of(`tfc:metal/${metal}`, 200))
                .id(`modpack:heating/can_opener/${metal}`)
                .useDurability(true)
        }

    })
})