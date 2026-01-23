ClientEvents.lang("en_us", event => {

    function nameProcessing(name) {
        name = name.replace("_", " ")
        name = name.replace("_", " ")
        name = name.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
        //console.log(name)
        return name
    }

    global.CUSTOM_CROP_TYPES.forEach(crop => {
        event.add(`item.${mod_id}.seeds.${crop}`, nameProcessing(crop) + " Seeds")
        event.add(`block.${mod_id}.wild_crop.${crop}`, "Wild " + nameProcessing(crop))
        event.add(`block.${mod_id}.dead_crop.${crop}`, "Dead " + nameProcessing(crop))
    })

    global.CUSTOM_STATIONARY_BUSH_TYPES.forEach(bush => {
        console.log(bush)
        event.add(`block.${mod_id}.plant.${bush}_bush`, nameProcessing(bush) + " Bush")
    })

    global.CUSTOM_SPREADING_BUSH_TYPES.forEach(bush => {
        event.add(`block.${mod_id}.plant.${bush}_bush`, nameProcessing(bush) + " Bush")
    })
})
