ClientEvents.lang("en_us", event =>{

    function nameProcessing(name){
        name = name.replace("_", " ")
        name = name.replace("_", " ")
        name = name.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
        //console.log(name)
        return name
    }

    const OVERWORLD_SPECTRUM_PROSPECTING = {
        "shimmerstone": "Something Shiny?",
        "azurite": "Something?",
        "paltaeria": "Something?",
        "stratine": "Something Dense"
    }

    global.SPECTRUM_OVERWORLD_ORES.forEach(ore => {

        global.ROCK_TYPES.forEach(rockType =>{

            let prospectedKey = "block.kubejs.ore." + ore + "." + rockType + ".prospected"
            event.add(prospectedKey, OVERWORLD_SPECTRUM_PROSPECTING[ore])
        })
    })
})

ClientEvents.highPriorityAssets(event =>{

    global.SPECTRUM_OVERWORLD_ORES.forEach(ore => {

        global.ROCK_TYPES.forEach(rockType =>{

            event.add("kubejs:models/block/ore/" + ore + "/" + rockType, {
                "parent": "tfc:block/ore",
                "textures": {
                    "all": "tfc:block/rock/raw/" + rockType,
                    "overlay": "kubejs:block/spectrum/overworld_ore/" + ore
                }
            })
        })
    })
})