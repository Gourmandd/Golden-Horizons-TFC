ServerEvents.tags("item", event =>{
    global.DYE_COLOURS.forEach(colour =>{
        event.add(`modpack:molten_glass`, `kubejs:molten_glass/${colour}`)
    })
    event.add("modpack:molten_glass", `kubejs:molten_glass/clear`)

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