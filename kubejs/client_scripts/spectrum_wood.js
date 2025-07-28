ClientEvents.highPriorityAssets( event => {

    function generateSupportModel(woodType){
        
        let texturePart

        if (global.NOXWOODS.indexOf(woodType) > -1){

            texturePart = `${woodType}_noxcap_stem`
        } else {

            texturePart = `${woodType}_log`
        }


        event.add(`kubejs:models/block/wood/support/${woodType}_connection`, {
            "parent": "tfc:block/wood/support/connection_vex",
            "textures": {
                "texture": `spectrum:block/stripped_${texturePart}`,
                "particle": `spectrum:block/stripped_${texturePart}_top`,
                "top": `spectrum:block/stripped_${texturePart}_top`
            }
        })

        event.add(`kubejs:models/block/wood/support/${woodType}_inventory`, {
            "parent": "tfc:block/wood/support/inventory_vex",
            "textures": {
                "texture": `spectrum:block/stripped_${texturePart}`,
                "vertical": `spectrum:block/stripped_${texturePart}`,
                "horizontal": `spectrum:block/stripped_${texturePart}`,
                "top": `spectrum:block/stripped_${texturePart}_top`
            }
        })

        event.add(`kubejs:models/block/wood/support/${woodType}_vertical`, {
            "parent": "tfc:block/wood/support/vertical_vex",
            "textures": {
                "texture": `spectrum:block/stripped_${texturePart}`,
                "particle": `spectrum:block/stripped_${texturePart}_top`,
                "top": `spectrum:block/stripped_${texturePart}_top`
            }
        })
        
        event.add(`kubejs:models/block/wood/support/${woodType}_horizontal`, {
            "parent": "tfc:block/wood/support/horizontal_vex",
            "textures": {
                "texture": `spectrum:block/stripped_${texturePart}`,
                "particle": `spectrum:block/stripped_${texturePart}_top`,
                "top": `spectrum:block/stripped_${texturePart}_top`
            }
        })

        event.add(`kubejs:models/item/wood/support/${woodType}`, {
            "parent": `kubejs:block/wood/support/${woodType}_inventory`,
        })
        
    }
    
    global.DYE_COLOURS.forEach(colour => {
            generateSupportModel(colour)
    })

    global.SPECTRUM_WOODS.forEach(wood => {
            generateSupportModel(wood)
    })
})