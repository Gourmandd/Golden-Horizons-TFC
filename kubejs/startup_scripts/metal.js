// --------------------------------------------- //
// Registers items and fluids for custom metals  //
// --------------------------------------------- //

StartupEvents.registry("item", event => {

    global.KUBEJS_METALS.forEach(metal => {

        /*
        event.create(`${id}:metal/ingot/${metal}`)
            .displayName(nameProcessing(metal) + " Ingot")
            .tag("tfc:pileable_ingots")
            .tag("c:ingots")
            .tag(`${id}:melting/ingot`)

        event.create(`${id}:metal/double_ingot/${metal}`)
            .displayName(nameProcessing(metal) + " Double Ingot")
            .tag("c:double_ingots")
            .tag("tfc:pileable_double_ingots")
            .tag(`${id}:melting/double_ingot`)

        event.create(`${id}:metal/sheet/${metal}`)
            .displayName(nameProcessing(metal) + " Sheet")
            .tag("c:sheets")
            .tag("tfc:pileable_sheets")
            .tag(`${id}:melting/sheet`)

        event.create(`${id}:metal/double_sheet/${metal}`)
            .displayName(nameProcessing(metal) + " Double Sheet")
            .tag("c:double_sheets")
            .tag(`${id}:melting/double_sheet`)

        event.create(`${id}:metal/rod/${metal}`)
            .displayName(nameProcessing(metal) + " Rod")
            .tag("c:rods")
            .tag("c:rods/all_metal")
            .tag(`${id}:melting/rod`)
            */
    })
})
