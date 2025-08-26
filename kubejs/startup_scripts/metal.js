// --------------------------------------------- //
// Registers items and fluids for custom metals  //
// --------------------------------------------- //

StartupEvents.registry("item", event =>{

    global.KUBEJS_METALS.forEach(metal =>{

        event.create("kubejs:metal/ingot/" + metal)
            .displayName(nameProcessing(metal) + " Ingot")
            .tag("tfc:pileable_ingots")
            .tag("forge:ingots")
            .tag("modpack:melting/ingot")

        event.create("kubejs:metal/double_ingot/" + metal)
            .displayName(nameProcessing(metal) + " Double Ingot")
            .tag("forge:double_ingots")
            .tag("tfc:pileable_double_ingots")
            .tag("modpack:melting/double_ingot")

        event.create("kubejs:metal/sheet/" + metal)
            .displayName(nameProcessing(metal) + " Sheet")
            .tag("forge:sheets")
            .tag("tfc:pileable_sheets")
            .tag("modpack:melting/sheet")

        event.create("kubejs:metal/double_sheet/" + metal)
            .displayName(nameProcessing(metal) + " Double Sheet")
            .tag("forge:double_sheets")
            .tag("modpack:melting/double_sheet")

        event.create("kubejs:metal/rod/" + metal)
            .displayName(nameProcessing(metal) + " Rod")
            .tag("forge:rods")
            .tag("modpack:melting/rod")  
    })
})

StartupEvents.registry("fluid", event =>{
    
    event.create("electrum")
        .displayName("Electrum")
        .bucketColor(0xFFF10F)
        .thickTexture(0xFFF10F)
        .noBucket()
        .noBlock()
        .tag("tfc:molten_metals")
    
    event.create("aluminium")
        .displayName("Aluminium")
        .bucketColor(0xCDD6DA)
        .thickTexture(0xCDD6DA)
        .noBucket()
        .noBlock()
        .tag("tfc:molten_metals")
})