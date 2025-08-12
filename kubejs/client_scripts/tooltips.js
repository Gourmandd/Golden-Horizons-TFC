
ItemEvents.tooltip(event =>{

    let REMOVED_FUNCTIONALITY = [
        "minecraft:smoker",
        "minecraft:furnace",
        "minecraft:blast_furnace",
        "minecraft:grindstone",
        "minecraft:brewing_stand",
        "minecraft:enchanting_table",
        "minecraft:fletching_table",
    ]
    
    REMOVED_FUNCTIONALITY.forEach(item =>{
        event.add(item, Text.translate("modpack.item_functionality").color(0x9D2829))
    })

    const CHANGED_FUNCTIONALITY = [
        "minecraft:anvil",
        "minecraft:damaged_anvil",
        "minecraft:chipped_anvil",
    ]

    CHANGED_FUNCTIONALITY.forEach(item =>{
        event.add(item, Text.translate("modpack.item_changed_functionality"))
    })
    
})