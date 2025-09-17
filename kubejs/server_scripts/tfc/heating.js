// requires: kubejs_tfc

ServerEvents.recipes(event =>{
    
    const POWDERS = [
        "bismuthinite",
        "cassiterite",
        "garnierite",
        "hematite",
        "limonite",
        "magnetite",
        "malachite",
        "native_copper",
        "tetrahedrite",
        "native_gold",
        "native_silver",
        "sphalerite",
    ]

    // Melting powders
    POWDERS.forEach(ore =>{
        event.recipes.tfc.heating(`tfc:powder/${ore}`, global.MELTING_POINTS[global.ORE_TO_METAL[ore]])
            .resultFluid(Fluid.of(`tfc:metal/${global.ORE_TO_METAL[ore]}`, 5))
            .id(`modpack:heating/powder/${ore}`)
    })

    // Melting hanging signs
    global.TOOL_METALS.forEach(metal =>{

        if (metal == "wrought_iron"){

            event.recipes.tfc.heating(`#modpack:hanging_signs/metal/${metal}`, global.MELTING_POINTS[metal])
                .resultFluid(Fluid.of("tfc:metal/cast_iron", 4))
                .id(`modpack:heating/hanging_sign/${metal}`)

        } else {
                
            event.recipes.tfc.heating(`#modpack:hanging_signs/metal/${metal}`, global.MELTING_POINTS[metal])
                .resultFluid(Fluid.of(`tfc:metal/${metal}`, 4))
                .id(`modpack:heating/hanging_sign/${metal}`)
    
        }

    })
})