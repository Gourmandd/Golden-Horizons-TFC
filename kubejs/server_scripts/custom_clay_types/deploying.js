// ---------------------------------------------- //
// Generates recipes related to create deploying  //
// ---------------------------------------------- //

ServerEvents.recipes(event =>{

    let datagen = Datagen(event).recipe()

    const ITEM = IO_TYPE.ITEM
    const TAG = IO_TYPE.ITEM_TAG

    global.CUSTOM_CLAY_TYPES.forEach(type =>{

        global.TFC_TOOL_TYPES.forEach(tool =>{

            if (type == "kaolinite"){

                datagen.createDeploying(
                    outputOf(ITEM, `kubejs:ceramic/unfired_kaolinite_${tool}_mold`, 1, 1), 
                    inputOf(ITEM, "tfc:white_kaolin_clay", 1),
                    inputOf(TAG, `#modpack:tool_heads/${tool}`, 1)
                ).id(`modpack:deploying/mold_pressing/${tool}/kaolinite`).generate()

                return
            }
            datagen.createDeploying(
                outputOf(ITEM, `kubejs:ceramic/unfired_${type}_${tool}_mold`,1 , 1), 
                inputOf(ITEM, `kubejs:clay/${type}_clay_block`, 1),
                inputOf(TAG, `#modpack:tool_heads/${tool}`, 1)
            ).id(`modpack:deploying/mold_pressing/${tool}/${type}`).generate()
        })

        if (type == "kaolinite"){

            datagen.createDeploying(
                outputOf(ITEM, "kubejs:ceramic/unfired_kaolinite_ingot_mold", 2, 1), 
                inputOf(ITEM, "tfc:white_kaolin_clay", 1),
                inputOf(TAG, "#c:ingots", 1)
            ).id("modpack:deploying/mold_pressing/ingot/kaolinite").generate()

            datagen.createDeploying(
                outputOf(ITEM, "kubejs:ceramic/unfired_kaolinite_bell_mold", 1, 1), 
                inputOf(ITEM, "tfc:white_kaolin_clay", 1),
                inputOf(TAG, "#modpack:bells", 1)
            ).id("modpack:deploying/mold_pressing/bell/kaolinite").generate()

            return
        }
        datagen.createDeploying(
            outputOf(ITEM, `kubejs:ceramic/unfired_${type}_ingot_mold`, 2, 1), 
            inputOf(ITEM, `kubejs:clay/${type}_clay_block`, 1),
            inputOf(TAG, "#c:ingots", 1)
        ).id(`modpack:deploying/mold_pressing/ingot/${type}`).generate()

        datagen.createDeploying(
            outputOf(ITEM, `kubejs:ceramic/unfired_${type}_bell_mold`, 1, 1), 
            inputOf(ITEM, `kubejs:clay/${type}_clay_block`),
            inputOf(TAG, "#modpack:bells")
        ).id(`modpack:deploying/mold_pressing/bell/${type}`).generate()
    })

    global.TFC_TOOL_TYPES.forEach(tool =>{

        datagen.createDeploying(
            outputOf(ITEM, `tfc:ceramic/unfired_${tool}_${global.TFC_TOOL_HEADS[tool]}_mold`, 1, 1), 
            inputOf(ITEM, "minecraft:clay"),
            inputOf(TAG, `#modpack:tool_heads/${tool}`)
        ).id(`modpack:deploying/mold_pressing/${tool}/clay`).generate()
    })

    datagen.createDeploying(
        outputOf(ITEM, "tfc:ceramic/unfired_ingot_mold", 2, 1), 
        inputOf(ITEM, "minecraft:clay"),
        inputOf(TAG, "#c:ingots")
    ).id("modpack:deploying/mold_pressing/ingot/clay").generate()

    datagen.createDeploying(
        outputOf(ITEM, "tfc:ceramic/unfired_bell_mold", 1, 1), 
        inputOf(ITEM, "minecraft:clay"),
        inputOf(TAG, "#modpack:bells")
    ).id("modpack:deploying/mold_pressing/bell/clay").generate()

    datagen.createDeploying(
        outputOf(ITEM, "tfc:ceramic/unfired_fire_ingot_mold", 2, 1), 
        inputOf(ITEM, "tfc:fire_clay_block"),
        inputOf(TAG, "#c:ingots")
    ).id("modpack:deploying/mold_pressing/ingot/fire_clay").generate()
})