// ------------------------------------------- //
// Generates assets for TFCified pastel ores //
// ------------------------------------------- //

ClientEvents.lang("en_us", event =>{

    function nameProcessing(name){
        name = name.replace("_", " ")
        name = name.replace("_", " ")
        name = name.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
        //console.log(name)
        return name
    }

    const OVERWORLD_PASTEL_PROSPECTING = {
        "shimmerstone": "Something Shiny?",
        "azurite": "Something?",
        "paltaeria": "Something?",
        "stratine": "Something Dense",
        "malachite": "Something Powerful"
    }

    Object.keys(OVERWORLD_PASTEL_PROSPECTING).forEach(ore => {

        global.ROCK_TYPES.forEach(rockType =>{

            let prospectedKey = "block.kubejs.ore." + ore + "." + rockType + ".prospected"
            event.add(prospectedKey, OVERWORLD_PASTEL_PROSPECTING[ore])
        })
    })
})

ClientEvents.generateAssets("last", event =>{

    function generateOreBlockModel(location, all, overlay){
        event.blockModel(location, 
            model => {
                model.parent("tfc:block/ore")
                model.texture("all", all)
                model.texture("overlay", overlay)
            }
        )
    }

    const DEEPER_DOWN_ROCK_TYPES = {
        "argillite": "minecraft:block/stone", //classic stone
        "nephelinite": "minecraft:block/deepslate", //deepslate
        "blackslag": "pastel:block/blackslag", //blackslag
        "travertine": "minecraft:block/dripstone_block", //dripstone
        "picrite_basalt": "pastel:block/basal_marble" //basal marble
    }

    const ORE_BLOCK_GRADES = [
        "normal",
        "poor",
        "rich",
    ]

    global.SPECTRUM_OVERWORLD_ORES.forEach(ore => {
        global.ROCK_TYPES.forEach(rockType =>{
            generateOreBlockModel("kubejs:ore/" + ore + "/" + rockType, "tfc:block/rock/raw/" + rockType, "kubejs:block/pastel/overworld_ore/" + ore)
        })

        Object.keys(DEEPER_DOWN_ROCK_TYPES).forEach(rockType =>{
            generateOreBlockModel("kubejs:ore/" + ore + "/" + rockType, DEEPER_DOWN_ROCK_TYPES[rockType], "kubejs:block/pastel/overworld_ore/" + ore)
        })
    })


    global.SPECTRUM_DEEPER_DOWN_ORES.forEach(ore => {

        global.ROCK_TYPES.forEach(rockType =>{
            generateOreBlockModel("kubejs:ore/" + ore + "/" + rockType, "tfc:block/rock/raw/" + rockType, "kubejs:block/pastel/overworld_ore/" + ore)
        })

        Object.keys(DEEPER_DOWN_ROCK_TYPES).forEach(rockType =>{
            generateOreBlockModel("kubejs:ore/" + ore + "/" + rockType, DEEPER_DOWN_ROCK_TYPES[rockType], "kubejs:block/pastel/overworld_ore/" + ore)
        })
    })
    
    Object.keys(DEEPER_DOWN_ROCK_TYPES).forEach(rockType =>{
        
        global.TFC_MINERALS.forEach(ore =>{
            console.log("kubejs:ore/" + ore + "/" + rockType, DEEPER_DOWN_ROCK_TYPES[rockType], "tfc:block/ore/" + ore)
            generateOreBlockModel("kubejs:ore/" + ore + "/" + rockType, DEEPER_DOWN_ROCK_TYPES[rockType], "tfc:block/ore/" + ore)
        })

        global.TFC_GEMS.forEach(ore =>{
            generateOreBlockModel("kubejs:ore/" + ore + "/" + rockType, DEEPER_DOWN_ROCK_TYPES[rockType], "tfc:block/ore/" + ore)
        })

        global.TFC_ORES.forEach(ore =>{
            generateOreBlockModel("kubejs:ore/rich_" + ore + "/" + rockType, DEEPER_DOWN_ROCK_TYPES[rockType], "tfc:block/ore/rich/" + ore)
            generateOreBlockModel("kubejs:ore/poor_" + ore + "/" + rockType, DEEPER_DOWN_ROCK_TYPES[rockType], "tfc:block/ore/poor/" + ore)
            generateOreBlockModel("kubejs:ore/normal_" + ore + "/" + rockType, DEEPER_DOWN_ROCK_TYPES[rockType], "tfc:block/ore/normal_" + ore)
        })

        global.FIRMALIFE_ORES.forEach(ore =>{
            ORE_BLOCK_GRADES.forEach(grade =>{
                generateOreBlockModel("kubejs:ore/" + grade + "_" + ore + "/" + rockType, DEEPER_DOWN_ROCK_TYPES[rockType], "firmalife:block/ore/" + grade + "_" + ore)
            })
        })
    })
})