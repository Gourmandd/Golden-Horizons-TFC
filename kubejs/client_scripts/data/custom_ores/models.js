
ClientEvents.generateAssets("before_mods", event => {

    // block models
    function addOre(rockType, arrayOfOres, isGraded) {

        let textureAll = global.STONE_TO_ROCK_TEXTURE[rockType]

        // generate the models here.
        if (isGraded) {
            arrayOfOres.forEach(ore => {
                global.ORE_BLOCK_GRADES.forEach(grade => {
                    let textureOverlay = findOreOverlayTexture(ore, grade)
                    event.blockModel(`${mod_id}:ore/${grade}_${ore}/${rockType}`, model => {
                        model.parent("tfc:block/ore")
                        model.texture("all", textureAll)
                        model.texture("overlay", textureOverlay)
                    })
                    event.itemModel(`${mod_id}:ore/${grade}_${ore}/${rockType}`, model => {
                        model.parent(`${mod_id}:block/ore/${grade}_${ore}/${rockType}`)
                    })
                })
            })
        } else {
            arrayOfOres.forEach(ore => {

                if (global.FULL_BLOCK_ORES.indexOf(ore) > -1) return

                let textureOverlay = findOreOverlayTexture(ore, null)
                event.blockModel(`${mod_id}:ore/${ore}/${rockType}`, model => {
                    model.parent("tfc:block/ore")
                    model.texture("all", textureAll)
                    model.texture("overlay", textureOverlay)
                })
                event.itemModel(`${mod_id}:ore/${ore}/${rockType}`, model => {
                    model.parent(`${mod_id}:block/ore/${ore}/${rockType}`)
                })
            })
        }
    }

    function findOreOverlayTexture(ore, grade) {
        let overlay = "tfc:block/ore/amethyst"

        if (grade == null) {
            if (global.CUSTOM_ORES.indexOf(ore)) {
                overlay = `${mod_id}:block/ore/${ore}`
            }
            if (global.TFC_MINERALS.indexOf(ore)) {
                overlay = `tfc:block/ore/${ore}`
            }
            if (global.TFC_GEMS.indexOf(ore)) {
                overlay = `tfc:block/ore/${ore}`
            }
        } else {
            if (global.CUSTOM_GRADED_ORES.indexOf(ore)) {
                overlay = `${mod_id}:block/ore/${grade}_${ore}`
            }
            if (global.TFC_ORES.indexOf(ore)) {
                overlay = `tfc:block/ore/${grade}_${ore}`
            }
        }

        return overlay
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

    // item models.
})
