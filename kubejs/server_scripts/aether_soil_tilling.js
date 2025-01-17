BlockEvents.rightClicked(event =>{

    //event.player.tell(event.player.mainHandItem.id)
    //event.player.tell(event.getBlock().getId())

    let aether_dirt = [
        "aether:aether_dirt", "aether:aether_grass_block",
        "aether:enchanted_aether_grass_block", 
        "aether_redux:avelium", "aether:aether_dirt_path", 
        "deep_aether:golden_heights_grass_block", "deep_aether:golden_heights_dirt_path",
        "aether:aether_farmland"
    ]
    let hoes = Ingredient.of("#minecraft:hoes").stacks
    let hoe_list = []
    let pos = event.getBlock().getPos()

    hoes.forEach(item => {
        hoe_list.push(item)
    })


    if (aether_dirt.indexOf(event.getBlock().getId()) == -1){
        return
    }

    if (hoe_list.indexOf(event.player.mainHandItem.id) == -1){
        return
    }

    if (event.getLevel().getBlock(pos.getX(), pos.getY() + 1, pos.getZ()) == "minecraft:air"){
        event.getBlock().set("kubejs:dirt/aether_farmland")
    }


})