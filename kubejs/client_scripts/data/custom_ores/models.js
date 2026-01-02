
ClientEvents.generateAssets("before_mods", event => {

    // block models
    function addOre(rockType, arrayOfOres, isGraded, namespace) {

        let textureAll = global.STONE_TO_ROCK_TEXTURE[rockType]

        // generate the models here.
        if (isGraded) {
            arrayOfOres.forEach(ore => {
                global.ORE_BLOCK_GRADES.forEach(grade => {
                    let textureOverlay = findOreOverlayTexture(ore, grade, namespace)
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

                let textureOverlay = findOreOverlayTexture(ore, null, namespace)
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

    function findOreOverlayTexture(ore, grade, namespace) {
        let overlay = "tfc:block/ore/amethyst"

        if (grade == null) {
            overlay = `${namespace}:block/ore/${ore}`
        } else {
            switch (grade) {
                case "normal":
                    overlay = `${namespace}:block/ore/${grade}_${ore}`;
                    break;
                default:
                    overlay = `${namespace}:block/ore/${grade}/${ore}`;
                    break;
            }
        }

        return overlay
    }


    global.ROCK_TYPES.forEach(rockType => {
        addOre(rockType, global.CUSTOM_ORES, false, mod_id)
        addOre(rockType, global.CUSTOM_GRADED_ORES, true, mod_id)
    })

    global.CUSTOM_ROCK_TYPES.forEach(rockType => {
        addOre(rockType, global.CUSTOM_ORES, false, mod_id)
        addOre(rockType, global.CUSTOM_GRADED_ORES, true, mod_id)

        addOre(rockType, global.TFC_MINERALS, false, "tfc")
        addOre(rockType, global.TFC_GEMS, false, "tfc")
        addOre(rockType, global.TFC_ORES, true, "tfc")
    })
})
