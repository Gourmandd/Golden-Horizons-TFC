
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
        
    const TOOLS_200 =[
        "sword_blade",
        "mace_head"
    ]

    const BELL_METALS = [
        "gold",
        "bronze",
        "brass"
    ]

    global.CASTABLE_METALS.forEach( metal =>{
        TOOLS_100.forEach(tool =>{
            event.recipes.create.filling(
                Item.of(`tfc:ceramic/${tool}_mold`, {"tank": {"Amount": 100,"FluidName": `tfc:metal/${metal}`}}),
                [Item.of(`tfc:ceramic/${tool}_mold`, {}), Fluid.of(`tfc:metal/${metal}`, 100)]
        ).id(`modpack:filling/mold/${metal}/${tool}`)
        })

        TOOLS_200.forEach(tool =>{
            event.recipes.create.filling(
                Item.of(`tfc:ceramic/${tool}_mold`, {"tank": {"Amount": 200,"FluidName": `tfc:metal/${metal}`}}),
                [Item.of(`tfc:ceramic/${tool}_mold`, {}), Fluid.of(`tfc:metal/${metal}`, 200)]
        ).id(`modpack:filling/mold/${metal}/${tool}`)
        })

        event.recipes.create.filling(
            Item.of("tfc:ceramic/ingot_mold", {"tank": {"Amount": 100,"FluidName": `tfc:metal/${metal}`}}),
            [Item.of("tfc:ceramic/ingot_mold", {}), Fluid.of(`tfc:metal/${metal}`, 100)]
        ).id(`modpack:filling/mold/${metal}/ingot`)

    })

    BELL_METALS.forEach(metal =>{
        event.recipes.create.filling(
            Item.of("tfc:ceramic/bell_mold", {"tank": {"Amount": 100,"FluidName": `tfc:metal/${metal}`}}),
            [Item.of("tfc:ceramic/bell_mold", {}), Fluid.of(`tfc:metal/${metal}`, 100)]
        ).id(`modpack:filling/mold/${metal}/bell`)
    })
})