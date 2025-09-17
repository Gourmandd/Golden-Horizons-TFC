// requires: kubejs_tfc

TFCEvents.data(event =>{
    function basic_item_heat(fileName, item, capacity){
        event.itemHeat(item, capacity, 0 , 0 , "modpack:clay/" + fileName)
    }

    global.CUSTOM_CLAY_TYPES.forEach(type =>{

        basic_item_heat(`${type}_blowpipe`, `kubejs:ceramic/unfired_${type}_blowpipe`, 0.6)
        basic_item_heat(`${type}_flower_pot`, `kubejs:ceramic/unfired_${type}_flower_pot`, 0.6)
        basic_item_heat(`${type}_bowl`, `kubejs:ceramic/unfired_${type}_bowl`, 0.4)
        basic_item_heat(`${type}_pan`, `kubejs:ceramic/unfired_${type}_pan`, 0.6)
        basic_item_heat(`${type}_spindle_head`, `kubejs:ceramic/unfired_${type}_spindle_head`, 0.8)
        basic_item_heat(`${type}_pot`, `kubejs:ceramic/unfired_${type}_pot`, 0.8)
        basic_item_heat(`${type}_brick`, `kubejs:ceramic/unfired_${type}_brick`, 0.4)
        basic_item_heat(`${type}_jug`, `kubejs:ceramic/unfired_${type}_jug`, 0.8)
    })
})