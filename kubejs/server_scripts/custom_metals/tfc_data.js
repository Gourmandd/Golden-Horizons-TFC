// requires: kubejs_tfc

TFCEvents.data(event =>{
    
    global.KUBEJS_METALS.forEach(metal => {
        event.metal(global.METAL_FLUIDS[metal], global.MELTING_POINTS[metal], 0.02143, 
            `kubejs:metal/ingot/${metal}`, `kubejs:metal/double_ingot/${metal}`, `kubejs:metal/sheet/${metal}`, 2, `modpack:${metal}`
        )
    })
})