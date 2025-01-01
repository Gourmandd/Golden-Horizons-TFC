BlockEvents.placed(event =>{

    let block = event.getBlock().getId()
    //event.player.tell(block)

    let aether_plants = [
        "kubejs:peppermint_bush",
        "kubejs:zanberry_bush",
        "kubejs:blue_berry_bush"
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
    ]

    if (aether_plants.indexOf(block) > -1 && event.level.dimension == "minecraft:overworld"){
        event.player.tell("The Overworld's air is too dense for it to live!") 
        event.cancel()        
    }

    if (overworld_plants.indexOf(block) > -1 && event.level.dimension == "aether:the_aether"){
        event.player.tell("The Aether's air is too thin for it to live!") 
        event.cancel()        
    }

})
