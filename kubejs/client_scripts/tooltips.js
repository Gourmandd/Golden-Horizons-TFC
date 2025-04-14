
ItemEvents.tooltip(event =>{

    [
        "minecraft:smoker",
        "minecraft:furnace",
        "minecraft:blast_furnace",
        "minecraft:grindstone",
        "minecraft:anvil",
        "minecraft:damaged_anvil",
        "minecraft:chipped_anvil",
        "minecraft:brewing_stand",
        "minecraft:beacon",
        "minecraft:enchanting_table",
        "minecraft:fletching_table",
        "aether:altar",
        "aether:freezer"
    ].forEach(item =>{
        event.add(item, Text.translate("modpack.item_functionality").color(0x9D2829))
    })

})