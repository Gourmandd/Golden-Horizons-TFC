ServerEvents.generateData("last", event => {

    let datagen = Datagen(event).tfcData()

    function basic_item_heat(fileName, item, capacity) {
        datagen.itemHeat(item, 1100, capacity).id(`${mod_id}:tfc/item_heat/clay/${fileName}`).generate()
    }

    global.CUSTOM_CLAY_TYPES.forEach(type => {

        basic_item_heat(`${type}_blowpipe`, `${mod_id}:ceramic/unfired_${type}_blowpipe`, 0.6)
        basic_item_heat(`${type}_flower_pot`, `${mod_id}:ceramic/unfired_${type}_flower_pot`, 0.6)
        basic_item_heat(`${type}_bowl`, `${mod_id}:ceramic/unfired_${type}_bowl`, 0.4)
        basic_item_heat(`${type}_pan`, `${mod_id}:ceramic/unfired_${type}_pan`, 0.6)
        basic_item_heat(`${type}_spindle_head`, `${mod_id}:ceramic/unfired_${type}_spindle_head`, 0.8)
        basic_item_heat(`${type}_pot`, `${mod_id}:ceramic/unfired_${type}_pot`, 0.8)
        basic_item_heat(`${type}_brick`, `${mod_id}:ceramic/unfired_${type}_brick`, 0.4)
        basic_item_heat(`${type}_jug`, `${mod_id}:ceramic/unfired_${type}_jug`, 0.8)
    })
})
