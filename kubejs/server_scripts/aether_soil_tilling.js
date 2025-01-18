BlockEvents.rightClicked(event =>{

    //event.player.tell(event.player.mainHandItem.id)
    //event.player.tell(event.getBlock().getId())

    // check for dirt block
    let aetherDirt = [
        "aether:aether_dirt", "aether:aether_grass_block",
        "aether:enchanted_aether_grass_block", 
        "aether_redux:avelium", "aether:aether_dirt_path", 
        "deep_aether:golden_heights_grass_block", "deep_aether:golden_heights_dirt_path",
        "aether:aether_farmland"
    ]

    if (aetherDirt.indexOf(event.getBlock().getId()) == -1){
        console.log("test 1")
        return
    }

    // check for hoe
    let hoes = Ingredient.of("#minecraft:hoes").itemIds
    let hoeList = []
    let pos = event.getBlock().getPos()

    hoes.forEach(item => {
        hoeList.push(item)
    })

    if (hoeList.indexOf(event.player.mainHandItem.id) == -1){
        //console.log("test 2")
        return
    }

    // check above block
    let aboveBlock = event.getLevel().getBlock(pos.getX(), pos.getY() + 1, pos.getZ())

    let blockWhitelist = [
        "minecraft:air", "minecraft:cave_air"
    ]

    if (blockWhitelist.indexOf(aboveBlock) == -1){
        console.log("test 3 " + aboveBlock)
        return
    }

    // if all passed then set the block
    event.getBlock().set("kubejs:dirt/aether_farmland")

})