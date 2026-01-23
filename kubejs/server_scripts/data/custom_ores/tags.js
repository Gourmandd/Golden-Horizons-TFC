
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

    function addDustTag(rockType, ore, id, isGraded) {
        if (isGraded) {
            global.ORE_BLOCK_GRADES.forEach(grade => {
                event.add("modpack:poisonous_dust_blocks", `${id}:ore/${grade}_${ore}/${rockType}`)
            })
        } else {
            event.add("modpack:poisonous_dust_blocks", `${id}:ore/${ore}/${rockType}`)
        }
    }

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

        addDustTag(rockType, "chromite", "firmalife", true)
        addDustTag(rockType, "bismuthinite", "tfc", true)
        addDustTag(rockType, "sulfur", "tfc")
        addDustTag(rockType, "cinnabar", "tfc")
        addDustTag(rockType, "garnierite", "tfc", true)
        addDustTag(rockType, "graphite", "tfc")
    })

    global.CUSTOM_ROCK_TYPES.forEach(rockType => {
        addOre(rockType, global.CUSTOM_ORES, false)
        addOre(rockType, global.CUSTOM_GRADED_ORES, true)

        addOre(rockType, global.TFC_MINERALS, false)
        addOre(rockType, global.TFC_GEMS, false)
        addOre(rockType, global.TFC_ORES, true)

        event.add("pastel:shimmerstone_ores", `${mod_id}:ore/shimmerstone/${rockType}`)
        event.add("pastel:azurite_ores", `${mod_id}:ore/azurite/${rockType}`)

        addDustTag(rockType, "bismuthinite", mod_id, true)
        addDustTag(rockType, "sulfur", mod_id)
        addDustTag(rockType, "cinnabar", mod_id)
        addDustTag(rockType, "garnierite", mod_id, true)
        addDustTag(rockType, "graphite", mod_id)
    })
})
