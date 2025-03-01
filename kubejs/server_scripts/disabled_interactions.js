try {
console.info("Disabled Interactions loaded")

BlockEvents.rightClicked(event =>{

    let InteractionBlacklist = [
        "minecraft:smoker",
        "minecraft:furnace",
        "minecraft:blast_furnace",
        "minecraft:grindstone",
        "minecraft:anvil",
        "minecraft:damaged_anvil",
        "minecraft:chipped_anvil",
        "minecraft:anvil",
        "minecraft:brewing_stand",
        "minecraft:beacon",
        "minecraft:enchanting_table",
        "aether:altar",
        "aether:freezer"
    ]

    if (InteractionBlacklist.indexOf(event.getBlock().getId()) == -1){
        //console.log("block is " + event.getBlock().getId())
        return
    }

    event.getPlayer().playNotifySound("minecraft:block.note_block.bell", "blocks", 1, 1)
    event.cancel()
})

} catch(e) {
    console.log(e)
}