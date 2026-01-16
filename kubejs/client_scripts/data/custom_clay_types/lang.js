ClientEvents.lang("en_us", event => {

    function createCeramicLang(clayType) {

        global.CLAY_ITEM_TYPES.forEach(type => {

            if (global.CLAY_MOLD_TYPES.indexOf(type) == -1) {
                event.add(`item.${mod_id}.ceramic.${clayType}.${type}`, `${nameProcessing(clayType)} ${nameProcessing(type)}`)
            } else {
                event.add(`item.${mod_id}.ceramic.${clayType}.unfired_${type}_mold`, `Unfired ${nameProcessing(clayType)} ${nameProcessing(type)} Mold`)
            }
        })
    }

    global.CUSTOM_CLAY_TYPES.forEach(clayType => {
        createCeramicLang(clayType)
    })
})
