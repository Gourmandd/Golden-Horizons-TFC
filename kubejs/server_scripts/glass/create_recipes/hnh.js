// requires: kubejs_tfc
// requires: hnh

ServerEvents.recipes(event =>{

    addCreateRecipeHandler(event);

    global.DYE_COLOURS.forEach(colour =>{

            //Item application Recipes
            event.recipes.create.item_application(Item.of(`hearth_and_home:${colour}_stained_barred_glass`),[`kubejs:molten_glass/${colour}`,  "tfc:metal/rod/wrought_iron"])
                .id(`modpack:recipes/item_application/glass/barred_${colour}`)

            //Crushing recipes
            event.recipes.create.crushing(Item.of(GLASS_TO_BATCH[colour]), `hearth_and_home:${colour}_stained_barred_glass`)
                .id(`modpack:recipes/crushing/glass/barred_${colour}`)

            //Cutting recipes
            event.recipes.create.cutting(Item.of(`hearth_and_home:${colour}_stained_barred_glass_pane`, 8), `hearth_and_home:${colour}_stained_barred_glass`)
                .id(`modpack:recipes/cutting/glass/barred_${colour}`)
        })


    event.recipes.create.item_application("hearth_and_home:barred_glass",[`kubejs:molten_glass/clear`,  "tfc:metal/rod/wrought_iron"])
        .id("modpack:recipes/item_application/glass/barred_clear")

    event.recipes.create.crushing("tfc:silica_glass_batch", "hearth_and_home:barred_glass")
        .id("modpack:recipes/crushing/glass/barred_clear")

    event.recipes.create.cutting(Item.of("hearth_and_home:barred_glass_pane", 8), "hearth_and_home:barred_glass")
        .id("modpack:recipes/cutting/glass/barred_clear")

    event.recipes.create.finalize();
})