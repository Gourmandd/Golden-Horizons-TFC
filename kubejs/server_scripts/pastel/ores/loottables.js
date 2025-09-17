// ----------------------------------- //
// Loottables for TFCified Pastel ores //
// ----------------------------------- //

LootJS.modifiers(event =>{

    const PASTEL_ORE_DATA = {
        "shimmerstone": {"drop": "pastel:shimmerstone_gem", "tier": "tfc:needs_copper_tool"},
        "azurite": {"drop": "pastel:raw_azurite", "tier": "tfc:needs_steel_tool"},
        "stratine": {"drop": "pastel:stratine_fragments", "tier": "tfc:needs_steel_tool"},
        "paltaeria": {"drop": "pastel:paltaeria_fragments", "tier": "tfc:needs_black_steel_tool"},
        "malachite": {"drop": "pastel:raw_malachite", "tier": "tfc:needs_steel_tool"}
    }

    let isIsolated = function(item){
        return LootEntry.of(item).matchCustomCondition({"condition": "tfc:is_isolated"})
    }

    let multiDrop = function(item){
        return LootEntry.of(item, 2).randomChance(0.75)
    }

    let singleDrop = function(item){
        return LootEntry.of(item, 1)
    }

    let multiDropOre = function(event, ore, rockType){
        event.addBlockModifier(`kubejs:ore/${ore}/${rockType}`)
            .removeLoot(Ingredient.all)
            .addAlternativesLoot(isIsolated(`kubejs:ore/${ore}/${rockType}`), multiDrop(PASTEL_ORE_DATA[ore].drop), )
    }

    let singleDropOre = function(event, mod, ore, rockType, drop){
        event.addBlockModifier(`${mod}:ore/${ore}/${rockType}`)
            .removeLoot(Ingredient.all)
            .addAlternativesLoot(isIsolated(`${mod}:ore/${ore}/${rockType}`), singleDrop(drop), )
    }
    /*
        "type": "minecraft:alternatives",
            "children": [
            {
                "type": "minecraft:item",
                "name": "tfc:rock/raw/andesite",
                "conditions": [
                    {
                        "condition": "tfc:is_isolated"
                    }
            ]
        }
    */

    global.SPECTRUM_OVERWORLD_ORES.forEach(ore => {

        global.ROCK_TYPES.forEach(rockType =>{
            
            if (ore == "paltaeria" || ore == "stratine"){
                multiDropOre(event, ore, rockType)
                return
            }
                singleDropOre(event, global.REGISTRY_NAMESPACE, ore, rockType, PASTEL_ORE_DATA[ore].drop)  
        })

        global.DEEPER_DOWN_ROCK_TYPES.forEach(rockType =>{

            if (ore == "paltaeria" || ore == "stratine"){
                multiDropOre(event, ore, rockType)
                return
            }
                singleDropOre(event, global.REGISTRY_NAMESPACE, ore, rockType, PASTEL_ORE_DATA[ore].drop)  
        })
    })


    global.SPECTRUM_DEEPER_DOWN_ORES.forEach(ore => {

        global.ROCK_TYPES.forEach(rockType =>{
            singleDropOre(event, global.REGISTRY_NAMESPACE, ore, rockType, PASTEL_ORE_DATA[ore].drop)  
        })

        global.DEEPER_DOWN_ROCK_TYPES.forEach(rockType =>{
            singleDropOre(event, global.REGISTRY_NAMESPACE, ore, rockType, PASTEL_ORE_DATA[ore].drop)  
        })
    })


    global.ROCK_TYPES.forEach(rockType => {


        global.TFC_MINERALS.forEach(ore =>{
            singleDropOre(event, "tfc", ore, rockType, `tfc:ore/${ore}`)  
        })


        global.TFC_GEMS.forEach(ore =>{
            singleDropOre(event, "tfc", ore, rockType, `tfc:ore/${ore}`)  
        })


        global.TFC_ORES.forEach(ore =>{

            global.ORE_BLOCK_GRADES.forEach(grade =>{

                singleDropOre(event, "tfc", `${grade}_${ore}`, rockType, `tfc:ore/${grade}_${ore}`)

            })

        })


        global.FIRMALIFE_ORES.forEach(ore =>{

            global.ORE_BLOCK_GRADES.forEach(grade =>{

                singleDropOre(event, "firmalife", `${grade}_${ore}`, rockType, `firmalife:ore/${grade}_${ore}`)

            })
        })
    })



    global.DEEPER_DOWN_ROCK_TYPES.forEach(rockType =>{


        global.TFC_MINERALS.forEach(ore =>{
            singleDropOre(event, global.REGISTRY_NAMESPACE, ore, rockType, `tfc:ore/${ore}`)  
        })


        global.TFC_GEMS.forEach(ore =>{
            singleDropOre(event, global.REGISTRY_NAMESPACE, ore, rockType, `tfc:ore/${ore}`)  
        })


        global.TFC_ORES.forEach(ore =>{

            global.ORE_BLOCK_GRADES.forEach(grade =>{

                singleDropOre(event, global.REGISTRY_NAMESPACE, `${grade}_${ore}`, rockType, `tfc:ore/${grade}_${ore}`)

            })

        })


        global.FIRMALIFE_ORES.forEach(ore =>{

            global.ORE_BLOCK_GRADES.forEach(grade =>{

                singleDropOre(event, global.REGISTRY_NAMESPACE, `${grade}_${ore}`, rockType, `firmalife:ore/${grade}_${ore}`)

            })
        })
    })
})

// Useful to have: /kill @e[type=tfc:falling_block] when using tfc clearworld