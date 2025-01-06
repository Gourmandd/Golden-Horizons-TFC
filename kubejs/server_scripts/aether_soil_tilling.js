BlockEvents.rightClicked("aether:aether_dirt", event =>{

    event.player.tell(event.player.mainHandItem.id)

    let hoes = Ingredient.of("#minecraft:hoes").stacks
    let hoe_list = []
    hoes.forEach(item => {
        hoe_list.push(item)
    })

    let pos = event.getBlock().getPos()

    //event.player.tell(hoe_list)

    if (hoe_list.indexOf(event.player.mainHandItem.id) == -1){
        return
    }

    event.player.tell("has a hoe")

    if (event.getLevel().getBlock(pos.getX(), pos.getY() + 1, pos.getZ()) == "minecraft:air"){
        event.player.tell("air above")
        event.getLevel().getBlock().set("kubejs:aether_farmland")
    }


})