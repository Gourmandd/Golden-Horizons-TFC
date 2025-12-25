ClientEvents.lang("en_us", event => {

    global.KUBEJS_METALS.forEach(metal => {
        event.add(`metal.modpack.${metal}`, nameProcessing(metal))
        event.add(`item.modpack.metal.ingot.${metal}`, nameProcessing(metal) + " Ingot")
        event.add(`item.modpack.metal.double_ingot.${metal}`, nameProcessing(metal) + " Double Ingot")
        event.add(`item.modpack.metal.sheet.${metal}`, nameProcessing(metal) + " Sheet")
        event.add(`item.modpack.metal.double_sheet.${metal}`, nameProcessing(metal) + " Double Sheet")
        event.add(`item.modpack.metal.rod.${metal}`, nameProcessing(metal) + " Rod")
        event.add(`block.modpack.metal.block.${metal}`, nameProcessing(metal) + " Plated Block")
        event.add(`block.modpack.metal.block.${metal}_slab`, nameProcessing(metal) + " Plated Slab")
        event.add(`block.modpack.metal.block.${metal}_stairs`, nameProcessing(metal) + " Plated Stairs")
    })

    global.DYE_COLOURS.forEach(colour => {
        event.add("metal.modpack.glass/" + colour, nameProcessing(colour) + " Glass")
    })
    event.add("metal.modpack.glass/clear", "Clear Glass")
})
