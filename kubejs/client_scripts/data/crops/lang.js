ClientEvents.lang("en_us", event => {

    function nameProcessing(name) {
        name = name.replace("_", " ")
        name = name.replace("_", " ")
        name = name.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
        //console.log(name)
        return name
    }

    global.CUSTOM_CROP_TYPES.forEach(crop => {
        event.add(`item.modpack.seeds.${crop}`, nameProcessing(crop) + " Seeds")
        event.add(`block.modpack.wild_crop.${crop}`, "Wild " + nameProcessing(crop))
        event.add(`block.modpack.dead_crop.${crop}`, "Dead " + nameProcessing(crop))
    })
})
