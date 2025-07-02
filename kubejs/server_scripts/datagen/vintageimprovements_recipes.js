

// Vinatge improvements doesn't have a Create v6 1.20.1 version so has been removed for now.
ServerEvents.recipes(event =>{
    /*
    global.TFC_METALS.forEach(metal =>{
        event.recipes.vintageimprovements.hammering("tfc:metal/sheet/" + metal, "tfc:metal/double_ingot/" + metal).anvilBlock("tfc:metal/anvil/steel").hammerBlows(5)
            .id("modpack:hammering/sheet/" + metal)
    })

    global.FIRMALIFE_METALS.forEach(metal =>{
        event.recipes.vintageimprovements.hammering("firmalife:metal/sheet/" + metal, "firmalife:metal/double_ingot/" + metal).anvilBlock("firmalife:metal/anvil/steel").hammerBlows(5)
            .id("modpack:hammering/sheet/" + metal)
    })

    global.KUBEJS_METALS.forEach(metal =>{
        event.recipes.vintageimprovements.hammering("kubejs:metal/sheet/" + metal, "kubejs:metal/double_ingot/" + metal).anvilBlock("kubejs:metal/anvil/steel").hammerBlows(5)
            .id("modpack:hammering/sheet/" + metal)
    })

    event.recipes.vintageimprovements.hammering("tfc:refined_iron_bloom", "tfc:raw_iron_bloom").anvilBlock("kubejs:metal/anvil/steel").hammerBlows(5)
        .id("modpack:hammering/raw_iron_bloom")

    event.recipes.vintageimprovements.hammering("tfc:metal/ingot/wrought_iron", "tfc:refined_iron_bloom").anvilBlock("kubejs:metal/anvil/steel").hammerBlows(5)
        .id("modpack:hammering/refined_iron_bloom")
    
    event.recipes.vintageimprovements.hammering("tfc:metal/ingot/high_carbon_steel", "tfc:metal/ingot/pig_iron").anvilBlock("kubejs:metal/anvil/steel").hammerBlows(5)
        .id("modpack:hammering/pig_iron")

    event.recipes.vintageimprovements.hammering("tfc:metal/ingot/steel", "tfc:metal/ingot/high_carbon_steel").anvilBlock("kubejs:metal/anvil/steel").hammerBlows(5)
        .id("modpack:hammering/high_carbon_steel")

    event.recipes.vintageimprovements.hammering("tfc:metal/ingot/black_steel", "tfc:metal/ingot/high_carbon_black_steel").anvilBlock("kubejs:metal/anvil/black_steel").hammerBlows(5)
        .id("modpack:hammering/high_carbon_black_steel")
    
    event.recipes.vintageimprovements.hammering("tfc:metal/ingot/red_steel", "tfc:metal/ingot/high_carbon_red_steel").anvilBlock("kubejs:metal/anvil/red_steel").hammerBlows(5)
        .id("modpack:hammering/high_carbon_red_steel")

    event.recipes.vintageimprovements.hammering("tfc:metal/ingot/blue_steel", "tfc:metal/ingot/high_carbon_blue_steel").anvilBlock("kubejs:metal/anvil/blue_steel").hammerBlows(5)
        .id("modpack:hammering/high_carbon_blue_steel")

    
    event.recipes.vintageimprovements.curving("tfc:wooden_bucket", "#minecraft:planks")
        .id("modpack:curving/wooden_bucket")

    event.recipes.vintageimprovements.curving("tfc:metal/bucket/blue_steel", "tfc:metal/sheet/blue_steel")
        .id("modpack:curving/blue_steel_bucket")
    
    event.recipes.vintageimprovements.curving("tfc:metal/bucket/red_steel", "tfc:metal/sheet/red_steel")
        .id("modpack:curving/red_steel_bucket")
    */

    // replacement recipes
    const HAMMERING = {
        "tfc:raw_iron_bloom": "tfc:refined_iron_bloom",
        "tfc:refined_iron_bloom": "tfc:metal/ingot/wrought_iron",
        "tfc:metal/ingot/pig_iron": "tfc:metal/ingot/high_carbon_steel",
        "tfc:metal/ingot/high_carbon_steel": "tfc:metal/ingot/steel",
        "tfc:metal/ingot/high_carbon_black_steel": "tfc:metal/ingot/black_steel",
        "tfc:metal/ingot/high_carbon_red_steel": "tfc:metal/ingot/red_steel",
        "tfc:metal/ingot/high_carbon_blue_steel": "tfc:metal/ingot/blue_steel"
    }

    Object.keys(HAMMERING).forEach(key => {
        event.recipes.create.sequenced_assembly(
            Item.of(HAMMERING[key]),
            Item.of(key),
            [
                event.recipes.create.pressing(key, key),
                event.recipes.create.pressing(key, key),
                event.recipes.create.pressing(key, key),
                event.recipes.create.pressing(key, key),
                event.recipes.create.pressing(key, key)
            ]
        )
        .id("modpack:sequenced_assembly/hammering/" + key.replace(":", "/"))
        .transitionalItem(key)
    })
})