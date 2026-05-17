// -------------------------------------- //
// Adds info tooltips for less confusion  //
// -------------------------------------- //



ItemEvents.modifyTooltips(event => {

    let REMOVED_FUNCTIONALITY = [
        "minecraft:smoker",
        "minecraft:furnace",
        "minecraft:blast_furnace",
        "minecraft:grindstone",
        "minecraft:brewing_stand",
        "minecraft:enchanting_table",
        "minecraft:fletching_table",
    ]

    REMOVED_FUNCTIONALITY.forEach(item => {
        event.add(item, Text.translate("modpack.item_functionality").color(0x9D2829))
    })

    const CHANGED_FUNCTIONALITY = [
        "minecraft:anvil",
        "minecraft:damaged_anvil",
        "minecraft:chipped_anvil",
    ]

    CHANGED_FUNCTIONALITY.forEach(item => {
        event.add(item, Text.translate("modpack.item_changed_functionality"))
    })
})

ItemEvents.modifyTooltips(event => {

    global.EMI.BASIC_BLOCKS.forEach(id => {

        event.modify(id, { shift: false }, tooltip => { // Default Tooltip
            tooltip.insert(1, Text.of('§8Hold [§r§7Shift§r§8] for summary§r'))
        })

        event.modify(id, { shift: true }, tooltip => { // Shift Tooltip
            tooltip.insert(1, Text.of('§6This block has three variants:§r'))
            tooltip.insert(2, Text.of('- §r§eStairs§r§6'))
            tooltip.insert(3, Text.of('- §r§eSlab§r§6'))
            tooltip.insert(4, Text.of('- §r§eWall§r§6'))
        })
    })

    global.EMI.LIMITED_BLOCKS.forEach(id => {

        event.modify(id, { shift: false }, tooltip => { // Default Tooltip
            tooltip.insert(1, Text.of('§8Hold [§r§7Shift§r§8] for summary§r'))
        })

        event.modify(id, { shift: true }, tooltip => { // Shift Tooltip
            tooltip.insert(1, Text.of('§6This block has two variants:§r'))
            tooltip.insert(2, Text.of('- §r§eStairs§r§6'))
            tooltip.insert(3, Text.of('- §r§eSlab§r§6'))
        })
    })

    global.EMI.BASIC_BLOCKS_CUSTOM.forEach(id => {

        event.modify(id.base, { shift: false }, tooltip => { // Default Tooltip
            tooltip.insert(1, Text.of('§8Hold [§r§7Shift§r§8] for summary§r'))
        })

        event.modify(id.base, { shift: true }, tooltip => { // Shift Tooltip
            tooltip.insert(1, Text.of('§6This block has three variants:§r'))
            tooltip.insert(2, Text.of('- §r§eStairs§r§6'))
            tooltip.insert(3, Text.of('- §r§eSlab§r§6'))
            tooltip.insert(4, Text.of('- §r§eWall§r§6'))
        })
    })

    global.EMI.AP_BASIC_BLOCKS.forEach(id => {

        event.modify(id, { shift: false }, tooltip => { // Default Tooltip
            tooltip.insert(1, Text.of('§8Hold [§r§7Shift§r§8] for summary§r'))
        })

        event.modify(id, { shift: true }, tooltip => { // Shift Tooltip
            tooltip.insert(1, Text.of('§6This block has three variants:§r'))
            tooltip.insert(2, Text.of('- §r§eStairs§r§6'))
            tooltip.insert(3, Text.of('- §r§eSlab§r§6'))
            tooltip.insert(4, Text.of('- §r§eWall§r§6'))
        })
    })

    global.EMI.AP_BLOCKS_NO_WALLS.forEach(id => {

        event.modify(id, { shift: false }, tooltip => { // Default Tooltip
            tooltip.insert(1, Text.of('§8Hold [§r§7Shift§r§8] for summary§r'))
        })

        event.modify(id, { shift: true }, tooltip => { // Shift Tooltip
            tooltip.insert(1, Text.of('§6This block has two variants:§r'))
            tooltip.insert(2, Text.of('- §r§eStairs§r§6'))
            tooltip.insert(3, Text.of('- §r§eSlab§r§6'))
        })
    })

    global.EMI.AP_BLOCKS_NO_WALLS_AND_STAIRS.forEach(id => {

        event.modify(id, { shift: false }, tooltip => { // Default Tooltip
            tooltip.insert(1, Text.of('§8Hold [§r§7Shift§r§8] for summary§r'))
        })

        event.modify(id, { shift: true }, tooltip => { // Shift Tooltip
            tooltip.insert(1, Text.of('§6This block has a single variant:§r'))
            tooltip.insert(3, Text.of('- §r§eSlab§r§6'))
        })
    })
})
