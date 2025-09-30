// ------------------------------------------- //
// Generates assets for TFCified Spectrum wood //
// ------------------------------------------- //


ClientEvents.generateAssets("last", event => {

    function generateSupportModel(woodType){
        
        let texturePart

        if (global.NOXWOODS.indexOf(woodType) > -1){

            texturePart = `${woodType}_noxcap_stem`
        } else {

            texturePart = `${woodType}_log`
        }

        event.blockModel(`kubejs:models/block/wood/support/${woodType}_connection`, {
            "parent": "tfc:block/wood/support/connection_vex",
            "textures": {
                "texture": `pastel:block/stripped_${texturePart}`,
                "particle": `pastel:block/stripped_${texturePart}_top`,
                "top": `pastel:block/stripped_${texturePart}_top`
            }
        })

        event.blockModel(`kubejs:models/block/wood/support/${woodType}_inventory`, {
            "parent": "tfc:block/wood/support/inventory_vex",
            "textures": {
                "texture": `pastel:block/stripped_${texturePart}`,
                "vertical": `pastel:block/stripped_${texturePart}`,
                "horizontal": `pastel:block/stripped_${texturePart}`,
                "top": `pastel:block/stripped_${texturePart}_top`
            }
        })

        event.blockModel(`kubejs:models/block/wood/support/${woodType}_vertical`, {
            "parent": "tfc:block/wood/support/vertical_vex",
            "textures": {
                "texture": `pastel:block/stripped_${texturePart}`,
                "particle": `pastel:block/stripped_${texturePart}_top`,
                "top": `pastel:block/stripped_${texturePart}_top`
            }
        })
        
        event.blockModel(`kubejs:models/block/wood/support/${woodType}_horizontal`, {
            "parent": "tfc:block/wood/support/horizontal_vex",
            "textures": {
                "texture": `pastel:block/stripped_${texturePart}`,
                "particle": `pastel:block/stripped_${texturePart}_top`,
                "top": `pastel:block/stripped_${texturePart}_top`
            }
        })

        event.blockModel(`kubejs:models/item/wood/support/${woodType}`, {
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