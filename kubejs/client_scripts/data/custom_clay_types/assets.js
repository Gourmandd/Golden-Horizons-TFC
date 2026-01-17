ClientEvents.generateAssets("last", event => {

    let datagen = Datagen(event).BlockModelDatagen()

    function createCeramicModel(clayType) {

        global.CLAY_ITEM_TYPES.forEach(type => {

            if (!(type == "jug" || type == "unfired_pan" || (clayType == "kaolinite" && type == "clay_ball"))) {
                if (global.CLAY_MOLD_TYPES.indexOf(type) == -1) {
                    datagen.simpleItemModel(`${mod_id}:ceramic/${clayType}/${type}`, `${mod_id}:item/ceramic/${clayType}/${type}`)
                } else {
                    datagen.simpleItemModel(`${mod_id}:ceramic/${clayType}/unfired_${type}_mold`, `${mod_id}:item/ceramic/${clayType}/unfired_${type}_mold`)
                }
            }
        })
    }

    global.CUSTOM_CLAY_TYPES.forEach(clayType => {
        createCeramicModel(clayType)
    })
})
