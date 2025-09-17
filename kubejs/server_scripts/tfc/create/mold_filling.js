// --------------------------------------------------- //
// Generates recipes for filling TFC molds with Create //
// --------------------------------------------------- //

// components in recipes may be a bit broken in Create right now
/* 
ServerEvents.recipes(event =>{

    const TOOLS_100 = [
        "pickaxe_head",
        "axe_head",
        "propick_head",
        "shovel_head",
        "hoe_head",
        "chisel_head",
        "hammer_head",
        "saw_blade",
        "javelin_head",
        "scythe_blade",
        "knife_blade"
    ]
        
    const TOOLS_200 = [
        "sword_blade",
        "mace_head"
    ]

    const BELL_METALS = [
        "gold",
        "bronze",
        "brass"
    ]
    
    global.CASTABLE_METALS.forEach(metal =>{
        TOOLS_100.forEach(tool =>{
            event.recipes.createFilling(
                Item.of(`tfc:ceramic/${tool}_mold["tfc:fluid"={"amount":100,"id":"tfc:metal/${metal}"}]`),
                [Item.of(`tfc:ceramic/${tool}_mold`), Fluid.of(`tfc:metal/${metal}`, 100)]
        ).id(`modpack:filling/mold/${metal}/${tool}`)
        })

        TOOLS_200.forEach(tool =>{
            event.recipes.createFilling(
                Item.of(`tfc:ceramic/${tool}_mold["tfc:fluid"={"amount":200,"id":"tfc:metal/${metal}"}]`),
                [Item.of(`tfc:ceramic/${tool}_mold`), Fluid.of(`tfc:metal/${metal}`, 200)]
        ).id(`modpack:filling/mold/${metal}/${tool}`)
        })

        event.recipes.createFilling(
            Item.of(`tfc:ceramic/ingot_mold["tfc:fluid"={"amount":100,"id":"tfc:metal/${metal}"}]`),
            [Item.of("tfc:ceramic/ingot_mold"), Fluid.of(`tfc:metal/${metal}`, 100)]
        ).id(`modpack:filling/mold/${metal}/ingot`)

    })

    BELL_METALS.forEach(metal =>{
        event.recipes.createFilling(
            Item.of(`tfc:ceramic/bell_mold["tfc:fluid"={"amount":100,"id":"tfc:metal/${metal}"}]`),
            [Item.of("tfc:ceramic/bell_mold"), Fluid.of(`tfc:metal/${metal}`, 100)]
        ).id(`modpack:filling/mold/${metal}/bell`)
    })
    
})
    */