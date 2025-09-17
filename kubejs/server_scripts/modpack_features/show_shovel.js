// -------------------------------------------------------------- //
// Makes the Show Shovel break a 3x3x3 area of whitelisted blocks //
// -------------------------------------------------------------- //

BlockEvents.broken(event => {

    if (event.player.isCrouching()){
        return
    }
    
    if (event.player.mainHandItem.id != "kubejs:tool/snow_shovel"){
        return
    }
    
    //whitelisted blocks
    let taggedBlocks = [
        "minecraft:snow",
		"minecraft:snow_block",
		"spectrum:ash",
		"spectrum:ash_pile",
        "tfc:snow_pile"
    ]

    if (taggedBlocks.indexOf(event.block.id) == -1){
        return
    }

    let {block} = event
    let blockPos = block.getPos()

    // we are checking a 3x3x3 cubed area
    for (let x = -1; x < 2; x++){
        for (let y = -1; y < 2; y++){
            for (let z = -1; z < 2; z++){
                
                let checkX = blockPos.getX() + x
                let checkY = blockPos.getY() + y
                let checkZ = blockPos.getZ() + z


                if (x == 0 && y == 0 && z == 0){
                    // we know the origin block already
                } else {

                    let checkBlock = event.level.getBlock(checkX, checkY, checkZ)

                    console.log(checkBlock.pos)

                    if (taggedBlocks.indexOf(checkBlock.id) > -1){
                        event.level.destroyBlock(checkBlock.getPos(), true, event.getPlayer())
                    }
                }
                

            }
        }
    }
})