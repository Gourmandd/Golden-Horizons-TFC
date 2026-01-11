ServerEvents.generateData("last", event => {

    let datagen = Datagen(event).tfcData()

    function basic_item_heat(fileName, item, capacity) {
        datagen.itemHeat(item, 1100, capacity).id(`${mod_id}:tfc/item_heat/clay/${fileName}`).generate()
    }

    global.KUBEJS_METALS.forEach(metal => {
        datagen.fluidHeat(global.METAL_FLUIDS[metal], global.MELTING_POINTS[metal], 0.02143).generate()

        basic_item_heat(`metal/ingot/${metal}`, `${mod_id}:metal/ingot/${metal}`, datagen.HEAT_CAPACITY.INGOT)
        basic_item_heat(`metal/double_ingot/${metal}`, `${mod_id}:metal/double_ingot/${metal}`, datagen.HEAT_CAPACITY.DOUBLE_INGOT)
        basic_item_heat(`metal/sheet/${metal}`, `${mod_id}:metal/sheet/${metal}`, datagen.HEAT_CAPACITY.SHEET)
        basic_item_heat(`metal/double_sheet/${metal}`, `${mod_id}:metal/double_sheet/${metal}`, datagen.HEAT_CAPACITY.DOUBLE_SHEET)
        basic_item_heat(`metal/rod/${metal}`, `${mod_id}:metal/rod/${metal}`, datagen.HEAT_CAPACITY.ROD)

        basic_item_heat(`metal/block/${metal}`, `${mod_id}:metal/block/${metal}`, datagen.HEAT_CAPACITY.INGOT)
        basic_item_heat(`metal/block/${metal}_slab`, `${mod_id}:metal/block/${metal}_slab`, datagen.HEAT_CAPACITY.INGOT)
        basic_item_heat(`metal/block/${metal}_stairs`, `${mod_id}:metal/block/${metal}_stairs`, datagen.HEAT_CAPACITY.INGOT)
    })
})
