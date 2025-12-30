
ServerEvents.tags("item", event => {

    function addOre(rockType, oreArray, isGraded) {
        if (isGraded) {
            oreArray.forEach(ore => {
                global.ORE_BLOCK_GRADES.forEach(grade => {
                    event.add("c:ores", `${mod_id}:ore/${grade}_${ore}/${rockType}`)
                })
            })
        } else {

            oreArray.forEach(ore => {

                if (global.FULL_BLOCK_ORES.indexOf(ore) > -1) return

                event.add("c:ores", `${mod_id}:ore/${ore}/${rockType}`)
            })
        }
    }

    global.ROCK_TYPES.forEach(rockType => {
        addOre(rockType, global.CUSTOM_ORES, false)
        addOre(rockType, global.CUSTOM_GRADED_ORES, true)

        event.add("pastel:shimmerstone_ores", `${mod_id}:ore/shimmerstone/${rockType}`)
        event.add("pastel:azurite_ores", `${mod_id}:ore/azurite/${rockType}`)
    })

    global.CUSTOM_ROCK_TYPES.forEach(rockType => {
        addOre(rockType, global.CUSTOM_ORES, false)
        addOre(rockType, global.CUSTOM_GRADED_ORES, true)

        addOre(rockType, global.TFC_MINERALS, false)
        addOre(rockType, global.TFC_GEMS, false)
        addOre(rockType, global.TFC_ORES, true)

        event.add("pastel:shimmerstone_ores", `${mod_id}:ore/shimmerstone/${rockType}`)
        event.add("pastel:azurite_ores", `${mod_id}:ore/azurite/${rockType}`)
    })
})

ServerEvents.tags("block", event => {


    function addOre(rockType, oreArray, isGraded) {
        if (isGraded) {
            oreArray.forEach(ore => {
                global.ORE_BLOCK_GRADES.forEach(grade => {
                    event.add("c:ores", `${mod_id}:ore/${grade}_${ore}/${rockType}`)
                    event.add("minecraft:mineable/pickaxe", `${mod_id}:ore/${grade}_${ore}/${rockType}`)
                    event.add("tfc:prospectable", `${mod_id}:ore/${grade}_${ore}/${rockType}`)
                    event.add("precisionprospecting:prospectable_mineral", `${mod_id}:ore/${grade}_${ore}/${rockType}`)
                })
            })
        } else {
            oreArray.forEach(ore => {

                if (global.FULL_BLOCK_ORES.indexOf(ore) > -1) return

                event.add("c:ores", `${mod_id}:ore/${ore}/${rockType}`)
                event.add("minecraft:mineable/pickaxe", `${mod_id}:ore/${ore}/${rockType}`)
                event.add("tfc:prospectable", `${mod_id}:ore/${ore}/${rockType}`)
                event.add("precisionprospecting:prospectable_mineral", `${mod_id}:ore/${ore}/${rockType}`)
            })
        }
    }

    global.ROCK_TYPES.forEach(rockType => {
        addOre(rockType, global.CUSTOM_ORES, false)
        addOre(rockType, global.CUSTOM_GRADED_ORES, true)

        event.add("pastel:shimmerstone_ores", `${mod_id}:ore/shimmerstone/${rockType}`)
        event.add("pastel:azurite_ores", `${mod_id}:ore/azurite/${rockType}`)
    })

    global.CUSTOM_ROCK_TYPES.forEach(rockType => {
        addOre(rockType, global.CUSTOM_ORES, false)
        addOre(rockType, global.CUSTOM_GRADED_ORES, true)

        addOre(rockType, global.TFC_MINERALS, false)
        addOre(rockType, global.TFC_GEMS, false)
        addOre(rockType, global.TFC_ORES, true)

        event.add("pastel:shimmerstone_ores", `${mod_id}:ore/shimmerstone/${rockType}`)
        event.add("pastel:azurite_ores", `${mod_id}:ore/azurite/${rockType}`)
    })
})
