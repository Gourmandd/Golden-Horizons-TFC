ClientEvents.lang("en_us", event => {

    const OVERWORLD_PASTEL_PROSPECTING = {
        "shimmerstone": "Something Shiny?",
        "azurite": "Something?",
        "paltaeria": "Something?",
        "stratine": "Something Dense",
        "malachite": "Something Powerful"
    }

    function createOreLang(arrayOfRocks, ore, isGraded) {

        // block lang
        if (isGraded) {
            global.ORE_BLOCK_GRADES.forEach(grade => {
                arrayOfRocks.forEach(rockType => {
                    event.add(`block.${mod_id}.ore.${grade}_${ore}.${rockType}`, `${nameProcessing(grade)} ${nameProcessing(rockType)} ${nameProcessing(ore)}`)
                })
            })
        } else {
            arrayOfRocks.forEach(rockType => {
                event.add(`block.${mod_id}.ore.${ore}.${rockType}`, `${nameProcessing(rockType)} ${nameProcessing(ore)}`)
            })
        }

        // prospecting lang
        let text = nameProcessing(ore)
        if (ore == "pyrite") {
            text = "Native Gold?"
        }

        if (Object.keys(OVERWORLD_PASTEL_PROSPECTING).indexOf(ore) > -1) {
            ore = OVERWORLD_PASTEL_PROSPECTING[ore]
        }

        if (isGraded) {
            global.ORE_BLOCK_GRADES.forEach(grade => {
                arrayOfRocks.forEach(rockType => {
                    event.add(`block.${mod_id}.ore.${grade}_${ore}.${rockType}.prospected`, `${text}`)
                })
            })
        } else {
            arrayOfRocks.forEach(rockType => {
                event.add(`block.${mod_id}.ore.${ore}.${rockType}.prospected`, `${text}`)
            })
        }
    }

    Object.keys(OVERWORLD_PASTEL_PROSPECTING).forEach(ore => {

        global.ROCK_TYPES.forEach(rockType => {

            let prospectedKey = `block.${mod_id}.ore.${ore}.${rockType}.prospected`
            event.add(prospectedKey, OVERWORLD_PASTEL_PROSPECTING[ore])
        })
    })

    global.CUSTOM_ORES.forEach(ore => {
        if (global.CUSTOM_GRADED_ORES.indexOf(ore) > -1) {
            createOreLang(global.ROCK_TYPES, ore, true)
            createOreLang(global.CUSTOM_ROCK_TYPES, ore, true)
        } else {
            createOreLang(global.ROCK_TYPES, ore, false)
            createOreLang(global.CUSTOM_ROCK_TYPES, ore, false)
        }

        if (global.CUSTOM_PASTEL_ORES.indexOf(ore) == -1) {
            if (global.CUSTOM_GRADED_ORES.indexOf(ore) > -1) {
                global.ORE_BLOCK_GRADES.forEach(grade => {
                    event.add(`item.${mod_id}.ore.${grade}_${ore}`, `${nameProcessing(grade)} ${nameProcessing(ore)}`)
                })
                event.add(`block.${mod_id}.ore.small_${ore}`, `Small ${nameProcessing(ore)}`)
            } else {
                event.add(`item.${mod_id}.ore.${ore}`, nameProcessing(ore))
            }
        }
    })

    global.TFC_MINERALS.forEach(ore => {
        createOreLang(global.CUSTOM_ROCK_TYPES, ore, false)
    })

    global.TFC_GEMS.forEach(ore => {
        createOreLang(global.CUSTOM_ROCK_TYPES, ore, false)
    })

    global.TFC_ORES.forEach(ore => {
        createOreLang(global.CUSTOM_ROCK_TYPES, ore, true)
    })
})
