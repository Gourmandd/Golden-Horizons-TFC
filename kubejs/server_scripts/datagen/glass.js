



ServerEvents.recipes(event =>{

    const GLASS_TO_BATCH = {
        "white":  "tfc:silica_glass_batch",
        "brown":  "tfc:hematitic_glass_batch",
        "green":  "tfc:olivine_glass_batch",
        "orange":  "tfc:hematitic_glass_batch",
        "magenta":  "tfc:volcanic_glass_batch",
        "red":  "tfc:hematitic_glass_batch",
        "black":  "tfc:volcanic_glass_batch",
        "light_blue":  "tfc:silica_glass_batch",
        "yellow":  "tfc:hematitic_glass_batch",
        "lime":  "tfc:olivine_glass_batch",
        "pink":  "tfc:silica_glass_batch",
        "gray":  "tfc:volcanic_glass_batch",
        "light_gray":  "tfc:volcanic_glass_batch",
        "cyan":  "tfc:olivine_glass_batch",
        "purple":  "tfc:volcanic_glass_batch",
        "blue":  "tfc:volcanic_glass_batch",
    }

    global.DYE_COLOURS.forEach(colour =>{
            //Heating Recipes
            event.recipes.tfc.heating(Item.of("minecraft:" + colour + "_stained_glass"), 1070).resultFluid(Fluid.of("kubejs:glass/" + colour, 800)).id("modpack:recipes/heating/glass/minecraft/" + colour + "_glass")
            event.recipes.tfc.heating(Item.of("minecraft:" + colour + "_stained_glass_pane"), 1070).resultFluid(Fluid.of("kubejs:glass/" + colour, 50)).id("modpack:recipes/heating/glass/minecraft/" + colour + "_glass_pane")
    
            event.recipes.tfc.heating(Item.of("quark:" + colour + "_framed_glass"), 1070).resultFluid(Fluid.of("kubejs:glass/" + colour, 800)).id("modpack:recipes/heating/glass/quark/" + colour + "_glass")
            event.recipes.tfc.heating(Item.of("quark:" + colour + "_framed_glass_pane"), 1070).resultFluid(Fluid.of("kubejs:glass/" + colour, 50)).id("modpack:recipes/heating/glass/quark/" + colour + "_glass_pane")

            event.recipes.tfc.heating(Item.of("hearth_and_home:" + colour + "_stained_barred_glass"), 1070).resultFluid(Fluid.of("kubejs:glass/" + colour, 800)).id("modpack:recipes/heating/glass/hnh/" + colour + "_glass")
            event.recipes.tfc.heating(Item.of("hearth_and_home:" + colour + "_stained_barred_glass_pane"), 1070).resultFluid(Fluid.of("kubejs:glass/" + colour, 50)).id("modpack:recipes/heating/glass/hnh/" + colour + "_glass_pane")

            event.recipes.tfc.heating(Item.of("kubejs:" + colour + "_lens"), 1070).resultFluid(Fluid.of("kubejs:glass/" + colour, 400)).id("modpack:recipes/heating/glass/lens/" + colour)
            event.recipes.tfc.heating(Item.of("kubejs:molten_glass/" + colour), 1070).resultFluid(Fluid.of("kubejs:glass/" + colour, 800)).id("modpack:recipes/heating/molten_glass/" + colour)

            //Item application Recipes
            event.recipes.create.item_application(Item.of("hearth_and_home:" + colour + "_stained_barred_glass"),["kubejs:molten_glass/" + colour,  "tfc:metal/rod/wrought_iron"]).id("modpack:recipes/item_application/glass/barred_" + colour)
            event.recipes.create.item_application(Item.of("quark:" + colour + "_framed_glass"),["kubejs:molten_glass/" + colour,  "tfc:metal/rod/steel"]).id("modpack:recipes/item_application/glass/framed_" + colour)
            event.recipes.create.item_application(Item.of("minecraft:" + colour + "_stained_glass"),["kubejs:molten_glass/" + colour,  "tfc:powder/flux"]).id("modpack:recipes/item_application/glass/stained_" + colour)

            //Crushing recipes
            event.recipes.create.crushing(Item.of(GLASS_TO_BATCH[colour]), "hearth_and_home:" + colour + "_stained_barred_glass").id("modpack:recipes/crushing/glass/barred_" + colour)
            event.recipes.create.crushing(Item.of(GLASS_TO_BATCH[colour]), "quark:" + colour + "_framed_glass").id("modpack:recipes/crushing/glass/framed_" + colour)
            event.recipes.create.crushing(Item.of(GLASS_TO_BATCH[colour]), "minecraft:" + colour + "_stained_glass").id("modpack:recipes/crushing/glass/stained_" + colour)

            //Cutting recipes
            event.recipes.create.cutting(Item.of("hearth_and_home:" + colour + "_stained_barred_glass_pane", 8), "hearth_and_home:" + colour + "_stained_barred_glass").id("modpack:recipes/cutting/glass/barred_" + colour)
            event.recipes.create.cutting(Item.of("quark:" + colour + "_framed_glass_pane", 8), "quark:" + colour + "_framed_glass").id("modpack:recipes/cutting/glass/framed_" + colour)
            event.recipes.create.cutting(Item.of("minecraft:" + colour + "_stained_glass_pane", 8), "minecraft:" + colour + "_stained_glass").id("modpack:recipes/cutting/glass/stained_" + colour)

            //casting recipes
            event.recipes.tfc.casting("minecraft:" + colour + "_stained_glass", "kubejs:glass_mold", Fluid.of("kubejs:glass/" + colour, 800), 0).id("modpack:recipes/casting/glass/" + colour)
            event.recipes.tfc.casting("minecraft:" + colour + "_stained_glass_pane", "kubejs:glass_pane_mold", Fluid.of("kubejs:glass/" + colour, 50), 0).id("modpack:recipes/casting/glass_pane/" + colour)
        
            //filling recipes
            event.recipes.create.filling(Item.of("kubejs:glass_pane_mold", {"tank":{"Amount":50,"FluidName":"kubejs:glass/" + colour}}), [Item.of("kubejs:glass_pane_mold", {}), Fluid.of("kubejs:glass/" + colour, 50)]).id("modpack:recipes/filling/glass_pane/" + colour)
            event.recipes.create.filling(Item.of("kubejs:glass_mold", {"tank":{"Amount":800,"FluidName":"kubejs:glass/" + colour}}), [Item.of("kubejs:glass_mold", {}), Fluid.of("kubejs:glass/" + colour, 800)]).id("modpack:recipes/filling/glass/" + colour)
            event.recipes.create.filling(Item.of("kubejs:molten_glass/" + colour), [Item.of("tfc:powder/flux"), Fluid.of("kubejs:glass/" + colour, 800)]).id("modpack:recipes/filling/molten_glass/" + colour)

            //compacting recipes
            event.recipes.create.compacting(Item.of("kubejs:molten_glass/" + colour), Fluid.of("kubejs:glass/" + colour, 800)).id("modpack:recipes/compacting/glass/" + colour)

            //sequenced assembly for lenses
            event.recipes.create.sequenced_assembly("kubejs:" + colour + "_lens", "kubejs:molten_glass/" + colour, [
                event.recipes.create.deploying(Item.of("minecraft:" + colour + "_stained_glass_pane"), [Item.of("minecraft:" + colour + "_stained_glass_pane"), Item.of("tfc:powder/soda_ash")]),
                event.recipes.create.deploying(Item.of("minecraft:" + colour + "_stained_glass_pane"), [Item.of("minecraft:" + colour + "_stained_glass_pane"), Item.of("tfc:bellows")]),
                event.recipes.create.deploying(Item.of("minecraft:" + colour + "_stained_glass_pane"), [Item.of("minecraft:" + colour + "_stained_glass_pane"), Item.of("tfc:paddle")]),
                event.recipes.create.deploying(Item.of("minecraft:" + colour + "_stained_glass_pane"), [Item.of("minecraft:" + colour + "_stained_glass_pane"), Item.of("tfc:wool_cloth")]),
                event.recipes.create.deploying(Item.of("minecraft:" + colour + "_stained_glass_pane"), [Item.of("minecraft:" + colour + "_stained_glass_pane"), Item.of("tfc:gem_saw")]),
            ]).transitionalItem("minecraft:" + colour + "_stained_glass_pane").loops(3)
        })
        

    event.recipes.tfc.heating("minecraft:glass", 1070).resultFluid(Fluid.of("kubejs:glass/clear", 800)).id("modpack:recipes/heating/glass/minecraft/glass")
    event.recipes.tfc.heating("minecraft:glass_pane", 1070).resultFluid(Fluid.of("kubejs:glass/clear", 50)).id("modpack:recipes/heating/glass/minecraft/glass_pane")

    event.recipes.tfc.heating("quark:framed_glass", 1070).resultFluid(Fluid.of("kubejs:glass/clear", 800)).id("modpack:recipes/heating/glass/quark/glass")
    event.recipes.tfc.heating("quark:framed_glass_pane", 1070).resultFluid(Fluid.of("kubejs:glass/clear", 50)).id("modpack:recipes/heating/glass/quark/glass_pane")

    event.recipes.tfc.heating("hearth_and_home:barred_glass", 1070).resultFluid(Fluid.of("kubejs:glass/clear", 800)).id("modpack:recipes/heating/glass/hnh/glass")
    event.recipes.tfc.heating("hearth_and_home:barred_glass_pane", 1070).resultFluid(Fluid.of("kubejs:glass/clear", 50)).id("modpack:recipes/heating/glass/hnh/glass_pane")

    event.recipes.tfc.heating(Item.of("tfc:lens"), 1070).resultFluid(Fluid.of("kubejs:glass/clear", 400)).id("modpack:recipes/heating/glass/lens/clear")
    event.recipes.tfc.heating(Item.of("kubejs:molten_glass/clear"), 1070).resultFluid(Fluid.of("kubejs:glass/clear", 800)).id("modpack:recipes/heating/molten_glass/clear")

    event.recipes.create.item_application("hearth_and_home:barred_glass",["kubejs:molten_glass/clear",  "tfc:metal/rod/wrought_iron"]).id("modpack:recipes/item_application/glass/barred_clear")
    event.recipes.create.item_application("quark:framed_glass",["kubejs:molten_glass/clear",  "tfc:metal/rod/steel"]).id("modpack:recipes/item_application/glass/framed_clear")
    event.recipes.create.item_application("minecraft:glass",["kubejs:molten_glass/clear",  "tfc:powder/flux"]).id("modpack:recipes/item_application/glass/clear")

    event.recipes.create.crushing("tfc:silica_glass_batch", "hearth_and_home:barred_glass").id("modpack:recipes/crushing/glass/barred_clear")
    event.recipes.create.crushing("tfc:silica_glass_batch", "quark:framed_glass").id("modpack:recipes/crushing/glass/framed_clear")
    event.recipes.create.crushing("tfc:silica_glass_batch", "minecraft:glass").id("modpack:recipes/crushing/glass/clear")

    event.recipes.create.cutting(Item.of("hearth_and_home:barred_glass_pane", 8), "hearth_and_home:barred_glass").id("modpack:recipes/cutting/glass/barred_clear")
    event.recipes.create.cutting(Item.of("quark:framed_glass_pane", 8), "quark:framed_glass").id("modpack:recipes/cutting/glass/framed_clear")
    event.recipes.create.cutting(Item.of("minecraft:glass_pane", 8), "minecraft:glass").id("modpack:recipes/cutting/glass/clear")

    event.recipes.tfc.casting("minecraft:glass", "kubejs:glass_mold", Fluid.of("kubejs:glass/clear", 800), 0).id("modpack:recipes/casting/glass/clear")
    event.recipes.tfc.casting("minecraft:glass_pane", "kubejs:glass_pane_mold", Fluid.of("kubejs:glass/clear", 50), 0).id("modpack:recipes/casting/glass_pane/")

    event.recipes.create.filling(Item.of("kubejs:glass_pane_mold", {"tank":{"Amount":50,"FluidName":"kubejs:glass/clear"}}), [Item.of("kubejs:glass_pane_mold", {}), Fluid.of("kubejs:glass/clear", 50)]).id("modpack:recipes/filling/glass_pane/clear")
    event.recipes.create.filling(Item.of("kubejs:glass_mold", {"tank":{"Amount":800,"FluidName":"kubejs:glass/clear"}}), [Item.of("kubejs:glass_mold", {}), Fluid.of("kubejs:glass/clear", 800)]).id("modpack:recipes/filling/glass/clear")
    event.recipes.create.filling(Item.of("kubejs:molten_glass/clear"), [Item.of("tfc:powder/flux"), Fluid.of("kubejs:glass/clear", 800)]).id("modpack:recipes/filling/molten_glass/clear").id("modpack:recipes/filling/molten_glass/clear")

    event.recipes.create.compacting(Item.of("kubejs:molten_glass/clear"), Fluid.of("kubejs:glass/clear", 800)).id("modpack:recipes/compacting/glass/clear")

    event.recipes.create.sequenced_assembly("tfc:lens", "kubejs:molten_glass/clear", [
        event.recipes.create.deploying(Item.of("minecraft:glass_pane"), [Item.of("minecraft:glass_pane"), Item.of("tfc:powder/soda_ash")]),
        event.recipes.create.deploying(Item.of("minecraft:glass_pane"), [Item.of("minecraft:glass_pane"), Item.of("tfc:bellows")]),
        event.recipes.create.deploying(Item.of("minecraft:glass_pane"), [Item.of("minecraft:glass_pane"), Item.of("tfc:paddle")]),
        event.recipes.create.deploying(Item.of("minecraft:glass_pane"), [Item.of("minecraft:glass_pane"), Item.of("tfc:wool_cloth")]),
        event.recipes.create.deploying(Item.of("minecraft:glass_pane"), [Item.of("minecraft:glass_pane"), Item.of("tfc:gem_saw")]),
    ]).transitionalItem("minecraft:glass_pane").loops(3)

    event.recipes.tfc.heating(Item.of("tfc:silica_glass_batch"), 1070).resultFluid(Fluid.of("kubejs:glass/clear", 800)).id("modpack:recipes/heating/glass_batches/silica")
    event.recipes.tfc.heating(Item.of("tfc:volcanic_glass_batch"), 1070).resultFluid(Fluid.of("kubejs:glass/blue", 800)).id("modpack:recipes/heating/glass_batches/volcanic")
    event.recipes.tfc.heating(Item.of("tfc:olivine_glass_batch"), 1070).resultFluid(Fluid.of("kubejs:glass/green", 800)).id("modpack:recipes/heating/glass_batches/olivine")
    event.recipes.tfc.heating(Item.of("tfc:hematitic_glass_batch"), 1070).resultFluid(Fluid.of("kubejs:glass/orange", 800)).id("modpack:recipes/heating/glass_batches/hematitic")


})

ServerEvents.tags("item", event =>{
    global.DYE_COLOURS.forEach(colour =>{
        event.add("modpack:molten_glass", "kubejs:molten_glass/" + colour)
    })
    event.add("modpack:molten_glass", "kubejs:molten_glass/clear")

    event.add("modpack:melting/glass", [
        "#exposure:filters",
        "#forge:stained_glass_panes",
        "minecraft:glass_pane",
        "#forge:stained_glass",
        "minecraft:glass",
        "#hearth_and_home:barred_glass_panes",
        "#hearth_and_home:barred_glass",
        "#quark:framed_glasses",
        "#quark:framed_glass_panes",
        "#modpack:molten_glass",
        "#tfc:glass_batches"   
    ])
})
