
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

    POWDERS.forEach(ore =>{
        event.recipes.tfc.heating("tfc:powder/" + ore, global.MELTING_POINTS[global.ORE_TO_METAL[ore]]).resultFluid(Fluid.of("tfc:metal/" + global.ORE_TO_METAL[ore], 5))
            .id("modpack:heating/powder/" + ore)
    })

    global.TOOL_METALS.forEach(metal =>{
        event.recipes.tfc.heating("artisanal:metal/can_opener/" + metal, global.MELTING_POINTS[metal]).resultFluid(Fluid.of("tfc:metal/" + metal, 200)).useDurability(true)
            .id("modpack:heating/can_opener/" + metal)
    })
})