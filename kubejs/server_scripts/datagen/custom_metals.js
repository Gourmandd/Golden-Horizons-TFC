//priority: 1
ServerEvents.recipes(event =>{

    global.KUBEJS_METALS.forEach(metal => {

        event.recipes.tfc.welding(Item.of("kubejs:metal/double_ingot/" + metal), Item.of("kubejs:metal/ingot/" + metal), Item.of("kubejs:metal/ingot/" + metal))
            .id("modpack:welding/" + metal + "_double_ingot")
        
        
        event.recipes.tfc.welding(Item.of("kubejs:metal/double_sheet/" + metal), Item.of("kubejs:metal/sheet/" + metal), Item.of("kubejs:metal/sheet/" + metal))
            .id("modpack:welding/" + metal + "_double_sheet")
        
        event.recipes.tfc.anvil("kubejs:metal/sheet/" + metal, "kubejs:metal/double_ingot/" + metal, [
            "hit_last",
            "hit_second_last",
            "hit_third_last"
        ]).tier(2).id("modpack:anvil/sheet/" + metal)

        event.recipes.tfc.anvil(Item.of("kubejs:metal/rod/" + metal, 2), "kubejs:metal/ingot/" + metal, [
            "bend_last",
            "draw_second_last",
            "draw_third_last"
        ]).tier(2).id("modpack:anvil/rod/" + metal)

        event.recipes.tfc.casting("kubejs:metal/ingot/" + metal, "tfc:ceramic/ingot_mold", Fluid.of(global.METAL_FLUIDS[metal], 100), 0.1)
            .id("modpack:casting/ingot_mold/" + metal)
        
        event.recipes.tfc.casting("kubejs:metal/ingot/" + metal, "tfc:ceramic/fire_ingot_mold", Fluid.of(global.METAL_FLUIDS[metal], 100), 0.01)
            .id("modpack:casting/fire_ingot_mold/" + metal)
        
        event.recipes.tfc.heating("kubejs:metal/ingot/" + metal, global.MELTING_POINTS[metal]).resultFluid(Fluid.of(global.METAL_FLUIDS[metal], 100)).id("modpack:heating/ingot/" + metal)
        event.recipes.tfc.heating("kubejs:metal/double_ingot/" + metal, global.MELTING_POINTS[metal]).resultFluid(Fluid.of(global.METAL_FLUIDS[metal], 200)).id("modpack:heating/double_ingot/" + metal)
        event.recipes.tfc.heating("kubejs:metal/sheet/" + metal, global.MELTING_POINTS[metal]).resultFluid(Fluid.of(global.METAL_FLUIDS[metal], 200)).id("modpack:heating/sheet/" + metal)
        event.recipes.tfc.heating("kubejs:metal/double_sheet/" + metal, global.MELTING_POINTS[metal]).resultFluid(Fluid.of(global.METAL_FLUIDS[metal], 400)).id("modpack:heating/double_sheet/" + metal)
        event.recipes.tfc.heating("kubejs:metal/rod/" + metal, global.MELTING_POINTS[metal]).resultFluid(Fluid.of(global.METAL_FLUIDS[metal], 50)).id("modpack:heating/rod/" + metal)
    })
})

TFCEvents.data(event =>{
    
    global.KUBEJS_METALS.forEach(metal => {
        event.metal(global.METAL_FLUIDS[metal], global.MELTING_POINTS[metal], 0.02143, 
            "kubejs:metal/ingot/" + metal, "kubejs:metal/double_ingot/" + metal, "kubejs:metal/sheet/" + metal, 2, "modpack:" + metal
        )
    })
})
