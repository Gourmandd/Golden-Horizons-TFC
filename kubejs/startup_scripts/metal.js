// --------------------------------------------- //
// Registers items and fluids for custom metals  //
// --------------------------------------------- //

StartupEvents.registry("item", event =>{

    global.KUBEJS_METALS.forEach(metal =>{

        event.create("kubejs:metal/ingot/" + metal)
            .displayName(nameProcessing(metal) + " Ingot")
            .tag("tfc:pileable_ingots")
            .tag("c:ingots")
            .tag("modpack:melting/ingot")

        event.create("kubejs:metal/double_ingot/" + metal)
            .displayName(nameProcessing(metal) + " Double Ingot")
            .tag("c:double_ingots")
            .tag("tfc:pileable_double_ingots")
            .tag("modpack:melting/double_ingot")

        event.create("kubejs:metal/sheet/" + metal)
            .displayName(nameProcessing(metal) + " Sheet")
            .tag("c:sheets")
            .tag("tfc:pileable_sheets")
            .tag("modpack:melting/sheet")

        event.create("kubejs:metal/double_sheet/" + metal)
            .displayName(nameProcessing(metal) + " Double Sheet")
            .tag("c:double_sheets")
            .tag("modpack:melting/double_sheet")

        event.create("kubejs:metal/rod/" + metal)
            .displayName(nameProcessing(metal) + " Rod")
            .tag("c:rods")
            .tag("c:rods/all_metal")
            .tag("modpack:melting/rod")  
    })
})