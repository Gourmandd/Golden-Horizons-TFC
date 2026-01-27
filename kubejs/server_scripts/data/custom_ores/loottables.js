// ----------------------------------- //
// Loottables for TFCified Pastel ores //
// ----------------------------------- //

LootJS.modifiers(event => {

    const PASTEL_ORE_DATA = {
        "shimmerstone": { "drop": "pastel:shimmerstone_gem", "tier": "tfc:needs_copper_tool" },
        "azurite": { "drop": "pastel:raw_azurite", "tier": "tfc:needs_steel_tool" },
        "stratine": { "drop": "pastel:stratine_fragments", "tier": "tfc:needs_steel_tool" },
        "paltaeria": { "drop": "pastel:paltaeria_fragments", "tier": "tfc:needs_black_steel_tool" },
        "malachite": { "drop": "pastel:raw_malachite", "tier": "tfc:needs_steel_tool" }
    }

    let isIsolated = function (item) {
        return LootEntry.of(item).matchCustomCondition({ "condition": "tfc:is_isolated" })
    }

    let multiDrop = function (item) {
        return LootEntry.of(item, [1, 2])
    }

    let singleDrop = function (item) {
        return LootEntry.of(item, 1)
    }

    let multiDropOre = function (event, ore, rockType) {
        event.addBlockModifier(`${mod_id}:ore/${ore}/${rockType}`)
            .removeLoot(Ingredient.all)
            .addAlternativesLoot(isIsolated(`${mod_id}:ore/${ore}/${rockType}`), multiDrop(PASTEL_ORE_DATA[ore].drop))
    }

    let singleDropOre = function (event, mod, ore, rockType, drop) {
        event.addBlockModifier(`${mod}:ore/${ore}/${rockType}`)
            .removeLoot(Ingredient.all)
            .addAlternativesLoot(isIsolated(`${mod}:ore/${ore}/${rockType}`), singleDrop(drop))
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

    function addGradedOre(rockType, arrayOfOres, oreNamespace) {
        arrayOfOres.forEach(ore => {
            global.ORE_BLOCK_GRADES.forEach(grade => {
                if (global.CUSTOM_GRADED_ORES.indexOf(ore) > -1) {
                    singleDropOre(event, oreNamespace, `${grade}_${ore}`, rockType, `${mod_id}:ore/${grade}_${ore}`)
                } else {
                    singleDropOre(event, oreNamespace, `${grade}_${ore}`, rockType, `tfc:ore/${grade}_${ore}`)
                }
            })
        })
    }

    function addNonGradedOre(rockType, arrayOfOres, oreNamespace) {

        arrayOfOres.forEach(ore => {

            if (global.FULL_BLOCK_ORES.indexOf(ore) > -1) return

            if (global.CUSTOM_PASTEL_ORES.indexOf(ore) > -1) {
                if (ore == "paltaeria" || ore == "stratine") {
                    multiDropOre(event, ore, rockType)
                } else {
                    singleDropOre(event, oreNamespace, ore, rockType, PASTEL_ORE_DATA[ore].drop)
                }
            } else {
                if (global.CUSTOM_ORES.indexOf(ore) > -1) {
                    if (ore == "anthracite") {
                        singleDropOre(event, oreNamespace, ore, rockType, `pastel:pure_coal`)
                    } else {
                        singleDropOre(event, oreNamespace, ore, rockType, `${mod_id}:ore/${ore}`)
                    }
                } else {
                    singleDropOre(event, oreNamespace, ore, rockType, `tfc:ore/${ore}`)
                }
            }
        })
    }

    function addOre(rockType, arrayOfOres, isGraded) {

        let oreNamespace = "tfc"

        if (global.CUSTOM_ROCK_TYPES.indexOf(rockType)) {
            oreNamespace = mod_id
        }

        if (global.CUSTOM_ORES.indexOf(rockType) || global.CUSTOM_GRADED_ORES.indexOf(rockType)) {
            oreNamespace = mod_id
        }

        if (isGraded) {
            addGradedOre(rockType, arrayOfOres, oreNamespace)
        } else {
            addNonGradedOre(rockType, arrayOfOres, oreNamespace)
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

// Useful to have: /kill @e[type=tfc:falling_block] when using tfc clearworld
