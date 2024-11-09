// counld be improved with some work

BlockEvents.rightClicked("tfc:charcoal_forge", event =>{

    let dimension = String(event.player.getLevel().getDimension().getPath())

    if (dimension != "the_aether"){return}


    function lighting(){

        let blockProperties = String(event.getBlock().getBlockState())
        let filter = "Block{tfc:charcoal_forge}[heat_level=0]"

        if (blockProperties != filter){return}

        event.block.set("tfc:charcoal_forge", {heat_level:"1"})

        // debug event.player.tell(String(event.getBlock().getBlockState())) 
        if (event.player.mainHandItem.isDamageableItem()){event.player.mainHandItem.setDamageValue(event.player.mainHandItem.getDamageValue() + 1)}
        else {event.player.mainHandItem.count - 1}
    }


    //main improvement that could be made
    if (event.player.mainHandItem.getId() == "minecraft:flint_and_steel"){lighting()}

    if (event.player.mainHandItem.getId() == "minecraft:fire_charge"){lighting()}

    if (event.player.mainHandItem.getId() == "tfc:firestarter"){lighting()}

})