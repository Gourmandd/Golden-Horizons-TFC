// ---------------------------------------------------------- //
// Generates recipes related to create cutting using the saw  //
// ---------------------------------------------------------- //



ServerEvents.tags("item", event => {
    global.TOOL_METALS.forEach(metal =>{
        global.TFC_TOOL_TYPES.forEach(tool =>{
            event.add("modpack:tool_heads/" + tool, "tfc:metal/" + tool + "_" + global.TFC_TOOL_HEADS[tool] + "/" + metal)
        })
    })
})
ServerEvents.recipes(event =>{

    global.CUSTOM_CLAY_TYPES.forEach(type =>{

        global.TFC_TOOL_TYPES.forEach(tool =>{
            if (type == "kaolinite"){
                event.recipes.create.deploying("kubejs:ceramic/unfired_kaolinite_" + tool + "_mold", ["tfc:white_kaolin_clay", "#modpack:tool_heads/" + tool])
                    .id("modpack:deploying/mold_pressing/" + tool + "/kaolinite")
                return
            }
            event.recipes.create.deploying("kubejs:ceramic/unfired_" + type + "_" + tool + "_mold", ["kubejs:clay/" + type + "_clay_block", "#modpack:tool_heads/" + tool])
            .id("modpack:deploying/mold_pressing/" + tool + "/" + type)
        
        })
        if (type == "kaolinite"){
            event.recipes.create.deploying(Item.of("kubejs:ceramic/unfired_kaolinite_ingot_mold", 2), ["tfc:white_kaolin_clay", "#forge:ingots"])
                .id("modpack:deploying/mold_pressing/ingot/kaolinite")
            event.recipes.create.deploying("kubejs:ceramic/unfired_kaolinite_bell_mold", ["tfc:white_kaolin_clay", "#modpack:bells"])
                .id("modpack:deploying/mold_pressing/bell/kaolinite")
            return
        }
        event.recipes.create.deploying(Item.of("kubejs:ceramic/unfired_" + type + "_ingot_mold", 2), ["kubejs:clay/" + type + "_clay_block", "#forge:ingots"])
            .id("modpack:deploying/mold_pressing/ingot/" + type)
        event.recipes.create.deploying(Item.of("kubejs:ceramic/unfired_" + type + "_bell_mold", 2), ["kubejs:clay/" + type + "_clay_block", "#modpack:bells"])
            .id("modpack:deploying/mold_pressing/bell/" + type)
    })

    global.TFC_TOOL_TYPES.forEach(tool =>{

        event.recipes.create.deploying("tfc:ceramic/unfired_" + tool + "_" + global.TFC_TOOL_HEADS[tool] + "_mold", ["minecraft:clay", "#modpack:tool_heads/" + tool])
            .id("modpack:deploying/mold_pressing/" + tool + "/clay")
    })

    event.recipes.create.deploying(Item.of("tfc:ceramic/unfired_ingot_mold", 2), ["minecraft:clay", "#forge:ingots"])
        .id("modpack:deploying/mold_pressing/ingot/clay")

    event.recipes.create.deploying(Item.of("tfc:ceramic/unfired_bell_mold", 2), ["minecraft:clay", "#modpack:bells"])
        .id("modpack:deploying/mold_pressing/bell/clay")

    event.recipes.create.deploying(Item.of("tfc:ceramic/unfired_fire_ingot_mold", 2), ["tfc:fire_clay_block", "#forge:ingots"])
        .id("modpack:deploying/mold_pressing/ingot/fire_clay")

})