BlockEvents.placed(event =>{

    let block = event.getBlock().getId()
    //event.player.tell(block)

    let aether_plants = [
        "kubejs:zanberry_bush",
        "kubejs:blue_berry_bush",
        "kubejs:plant/wynd_oats",
    ]

    let overworld_plants = [
        "tfc:plant/blackberry_bush",
        "tfc:plant/raspberry_bush",
        "tfc:plant/blueberry_bush",
        "tfc:plant/elderberry_bush",
        "tfc:plant/snowberry_bush",
        "tfc:plant/bunchberry_bush",
        "tfc:plant/gooseberry_bush",
        "tfc:plant/cloudberry_bush",
        "tfc:plant/strawberry_bush",
        "tfc:plant/wintergreen_bush",
        "tfc:plant/cranberry_bush",
        "firmalife:plant/pineapple_bush",
        "firmalife:plant/nightshade_bush",
        "tfc:crop/rye",
        "tfc:crop/oat",
        "tfc:crop/barley",
        "tfc:crop/maize",
        "tfc:crop/wheat",
        "tfc:crop/rice",
        "tfc:crop/beet",
        "tfc:crop/cabbage",
        "tfc:crop/carrot",
        "tfc:crop/garlic",
        "tfc:crop/green_bean",
        "tfc:crop/potato",
        "tfc:crop/onion",
        "tfc:crop/soybean",
        "tfc:crop/squash",
        "tfc:crop/sugarcane",
        "tfc:crop/tomato",
        "tfc:crop/jute",
        "tfc:crop/papyrus",
        "tfc:crop/melon",
        "tfc:crop/pumpkin",
        "tfc:crop/red_bell_pepper",
        "tfc:crop/yellow_bell_pepper"
    ]

    function cancel_block_place(message){
        event.player.tell(message + " Your item is desynced, right click on it in the inventory to get it back, while the bug is being fixed!")
        event.getPlayer().playNotifySound("minecraft:block.note_block.banjo", "blocks", 1, 1)
        event.cancel()
        //event.getPlayer().inventoryMenu(). //Cant find a way to resync the held item
    }

    if (aether_plants.indexOf(block) > -1 && event.level.dimension == "minecraft:overworld"){
        cancel_block_place("The Overworld's air is too dense for it to live!")
    }

    if (overworld_plants.indexOf(block) > -1 && event.level.dimension == "aether:the_aether"){
        cancel_block_place("The Aether's air is too thin for it to live!")
    }


})
