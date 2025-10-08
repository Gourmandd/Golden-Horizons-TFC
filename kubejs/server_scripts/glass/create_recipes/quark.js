// requires: kubejs_tfc
// requires: quark

ServerEvents.recipes(event =>{

    console.log("INFO: PORT QUARK GLASS SCRIPT, QUARK HAS BEEN ADDED TO THE PACK")
    /*
    global.DYE_COLOURS.forEach(colour =>{

            //Item application Recipes
            event.recipes.create.item_application(Item.of(`quark:${colour}_framed_glass`),[`kubejs:molten_glass/${colour}`,  "tfc:metal/rod/steel"])
                .id(`modpack:recipes/item_application/glass/framed_${colour}`)

            //Crushing recipes
            event.recipes.create.crushing(Item.of(GLASS_TO_BATCH[colour]), `quark:${colour}_framed_glass`)
                .id(`modpack:recipes/crushing/glass/framed_${colour}`)

            //Cutting recipes
            event.recipes.create.cutting(Item.of(`quark:${colour}_framed_glass_pane`, 8), `quark:${colour}_framed_glass`)
                .id(`modpack:recipes/cutting/glass/framed_${colour}`)
        })

    event.recipes.create.item_application("quark:framed_glass",[`kubejs:molten_glass/clear`,  "tfc:metal/rod/steel"])
        .id("modpack:recipes/item_application/glass/framed_clear")

    event.recipes.create.crushing("tfc:silica_glass_batch", "quark:framed_glass")
        .id("modpack:recipes/crushing/glass/framed_clear")

    event.recipes.create.cutting(Item.of("quark:framed_glass_pane", 8), "quark:framed_glass")
        .id("modpack:recipes/cutting/glass/framed_clear")*/
})