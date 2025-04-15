
ItemEvents.tooltip(event =>{

    [
        "minecraft:smoker",
        "minecraft:furnace",
        "minecraft:blast_furnace",
        "minecraft:grindstone",
        "minecraft:brewing_stand",
        "minecraft:beacon",
        "minecraft:enchanting_table",
        "minecraft:fletching_table"
    ].forEach(item =>{
        event.add(item, Text.translate("modpack.item_functionality").color(0x9D2829))
    })

    [
        "minecraft:anvil",
        "minecraft:damaged_anvil",
        "minecraft:chipped_anvil"
    ].forEach(item =>{
        event.add(item, Text.translate("modpack.item_changed_functionality"))
    })
    
})