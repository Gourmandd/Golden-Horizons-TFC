
ClientEvents.generateAssets("before_mods", event => {

    function addOre(rockType, arrayOfOres, isGraded) {

        if (isGraded) {
            arrayOfOres.forEach(ore => {
                global.ORE_BLOCK_GRADES.forEach(grade => {
                    event.blockState(`${mod_id}:ore/${grade}_${ore}/${rockType}`, state => {
                        state.simpleVariant("", `${mod_id}:block/ore/${grade}_${ore}/${rockType}`)
                    })
                })
            })
        } else {
            arrayOfOres.forEach(ore => {
                event.blockState(`${mod_id}:ore/${ore}/${rockType}`, state => {
                    state.simpleVariant("", `${mod_id}:block/ore/${ore}/${rockType}`)
                })
            })
        }
    }


    global.ROCK_TYPES.forEach(rockType => {
        addOre(rockType, global.CUSTOM_ORES, false)
        addOre(rockType, global.CUSTOM_GRADED_ORES, true)
    })

    global.CUSTOM_ROCK_TYPES.forEach(rockType => {
        addOre(rockType, global.CUSTOM_ORES, false)
        addOre(rockType, global.CUSTOM_GRADED_ORES, true)

        addOre(rockType, global.TFC_MINERALS, false)
        addOre(rockType, global.TFC_GEMS, false)
        addOre(rockType, global.TFC_ORES, true)
    })
})
