ServerEvents.tags("item", event =>{

    global.OVERWORLD_WOOD_TYPES.forEach(type => {

        let mod = global.WOOD_TYPE_TO_MOD[type]

        // planks
        GIVES_PLANK.forEach(item =>{
            event.add(`modpack:cutting/wood/for_planks/${type}`, `${mod}:wood/planks/${type}_${item}`)
        })


        event.add(`modpack:cutting/wood/for_planks/${type}`, `everycomp:c/${mod}/${type}_window`)
        event.add(`modpack:cutting/wood/for_planks/${type}`, `everycomp:fd/${mod}/${type}_cabinet`)
        event.add(`modpack:cutting/wood/for_planks/${type}`, `everycomp:hnhome/${mod}/${type}_sanded_wood`)
        event.add(`modpack:cutting/wood/for_planks/${type}`, `everycomp:hnhome/${mod}/${type}_parquet`)
        event.add(`modpack:cutting/wood/for_planks/${type}`, `everycomp:hnhome/${mod}/${type}_trim`)
        event.add(`modpack:cutting/wood/for_planks/${type}`, `everycomp:hnhome/${mod}/${type}_vertical_trim`)
        event.add(`modpack:cutting/wood/for_planks/${type}`, `everycomp:q/${mod}/${type}_post`)
        event.add(`modpack:cutting/wood/for_planks/${type}`, `everycomp:q/${mod}/stripped_${type}_post`)
        event.add(`modpack:cutting/wood/for_planks/${type}`, `everycomp:q/${mod}/vertical_${type}_planks`)
        event.add(`modpack:cutting/wood/for_planks/${type}`, `everycomp:q/${mod}/hollow_${type}_log`)
        event.add(`modpack:cutting/wood/for_planks/${type}`, `everycomp:af/${mod}/${type}_flower_box`)
        event.add(`modpack:cutting/wood/for_planks/${type}`, `everycomp:af/${mod}/${type}_table`)
        event.add(`modpack:cutting/wood/for_planks/${type}`, `everycomp:af/${mod}/${type}_chair`)
        event.add(`modpack:cutting/wood/for_planks/${type}`, `everycomp:af/${mod}/${type}_shelf`)
        event.add(`modpack:cutting/wood/for_planks/${type}`, `everycomp:af/${mod}/${type}_drawer`)
        event.add(`modpack:cutting/wood/for_planks/${type}`, `everycomp:af/${mod}/${type}_bench`)
        event.add(`modpack:cutting/wood/for_planks/${type}`, `everycomp:q/${mod}/${type}_bookshelf`)
        event.add(`modpack:cutting/wood/for_planks/${type}`, `everycomp:hnhome/${mod}/${type}_lattice`)
        event.add(`modpack:cutting/wood/for_planks/${type}`,`${mod}:wood/chest/${type}`)
        event.add(`modpack:cutting/wood/for_planks/${type}`,`${mod}:wood/trapped_chest/${type}`)
        event.add(`modpack:cutting/wood/for_planks/${type}`,`${mod}:wood/barrel/${type}`)
        event.add(`modpack:cutting/wood/for_planks/${type}`,`${mod}:wood/lectern/${type}`)
        event.add(`modpack:cutting/wood/for_planks/${type}`,`${mod}:wood/scribing_table/${type}`)
        event.add(`modpack:cutting/wood/for_planks/${type}`,`${mod}:wood/sewing_table/${type}`)
        event.add(`modpack:cutting/wood/for_planks/${type}`,`${mod}:wood/jar_shelf/${type}`)
        event.add(`modpack:cutting/wood/for_planks/${type}`,`${mod}:wood/boat/${type}`)

        // lumber
        GIVES_LUMBER.forEach(item =>{
            event.add(`modpack:cutting/wood/for_lumber/${type}`,  `${mod}:wood/planks/${type}_${item}`)
        })
        event.add(`modpack:cutting/wood/for_lumber/${type}`, `everycomp:af/${mod}/${type}_shutter`)
        event.add(`modpack:cutting/wood/for_lumber/${type}`, `everycomp:c/${mod}/${type}_window_pane`)
        event.add(`modpack:cutting/wood/for_lumber/${type}`, `everycomp:q/${mod}/${type}_ladder`)
        event.add(`modpack:cutting/wood/for_lumber/${type}`,`${mod}:wood/sluice/${type}`)
        event.add(`modpack:cutting/wood/for_lumber/${type}`,`${mod}:wood/support/${type}`)
        event.add(`modpack:cutting/wood/for_lumber/${type}`,`${mod}:wood/sign/${type}`)

        global.TOOL_METALS.forEach(metal => {
            event.add(`modpack:cutting/wood/for_lumber/${type}`,`${mod}:wood/hanging_sign/${metal}/${type}`)
        })    
    })
    
    // terracotta and alabaster
    global.DYE_COLOURS.forEach(colour => {
        BLOCK_SHAPES.forEach(shape => {

            if (shape == "wall"){
                
                event.add(`modpack:cutting/alabaster_brick`, `tfc:alabaster/bricks/${colour}_${shape}`)
                event.add(`modpack:cutting/alabaster_brick`, `tfc:alabaster/polished/${colour}_${shape}`)
                return
            } 

            if (shape == "bricks"){
                //event.add(`modpack:cutting/terracotta_bricks/${colour}`, `hearth_and_home:${colour}_terracotta_bricks`)
                //event.add(`modpack:cutting/terracotta_bricks/${colour}`, `hearth_and_home:${colour}_shingles`)
            } else {
                //event.add(`modpack:cutting/terracotta_bricks/${colour}`, `hearth_and_home:${colour}_terracotta_brick_${shape}`)
                //event.add(`modpack:cutting/terracotta_bricks/${colour}`, `hearth_and_home:${colour}_shingle_${shape}`)
                event.add(`modpack:cutting/alabaster_brick`, `tfc:alabaster/bricks/${colour}_${shape}`)
                event.add(`modpack:cutting/alabaster_brick`, `tfc:alabaster/polished/${colour}_${shape}`)
            }   
        })
        event.add(`modpack:cutting/gypsum`, `tfc:alabaster/raw/${colour}`)
    })
    event.add(`modpack:cutting/gypsum`, "tfc:alabaster/raw")

    event.add(`modpack:cutting/alabaster_brick`, "tfc:alabaster/polished")
    event.add(`modpack:cutting/alabaster_brick`, "tfc:alabaster/bricks")

    event.add(`modpack:cutting/terracotta_bricks/plain`, "hearth_and_home:terracotta_bricks")
    event.add(`modpack:cutting/terracotta_bricks/plain`, "hearth_and_home:terracotta_brick_stairs")
    event.add(`modpack:cutting/terracotta_bricks/plain`, "hearth_and_home:terracotta_brick_slab")
    event.add(`modpack:cutting/terracotta_bricks/plain`, "hearth_and_home:shingles")
    event.add(`modpack:cutting/terracotta_bricks/plain`, "hearth_and_home:shingle_stairs")
    event.add(`modpack:cutting/terracotta_bricks/plain`, "hearth_and_home:shingle_slab")

    // rock
    global.ROCK_TYPES.forEach(rock => {
        BRICK_TYPES.forEach(type => {
            BLOCK_SHAPES.forEach(shape => {

                if (shape == "bricks"){
                    event.add(`modpack:cutting/rock/${rock}`, `tfc:rock/${type}/${rock}`)
                    event.add(`modpack:cutting/rock/${rock}`, `tfc:rock/smooth/${rock}`)
                } else {
                    event.add(`modpack:cutting/rock/${rock}`, `tfc:rock/${type}/${rock}_${shape}`)
                    event.add(`modpack:cutting/rock/${rock}`, `tfc:rock/smooth/${rock}_${shape}`)
                }  
            })
        })
        event.add(`modpack:cutting/rock/${rock}`, `tfc:rock/chiseled/${rock}`)
    })

    // mud bricks
    global.TFC_SOIL_TYPES.forEach(soil => {
        BLOCK_SHAPES.forEach(shape => {

            if (shape == "bricks"){
                event.add(`modpack:cutting/mud/${soil}/brick`, `tfc:mud_bricks/${soil}`)
            } else {
                event.add(`modpack:cutting/mud/${soil}/brick`, `tfc:mud_bricks/${soil}_${shape}`)
            }  
        })
    })

    // sandstone
    global.TFC_SAND_COLOURS.forEach(colour => {
        BLOCK_SHAPES.forEach(shape => {

            if (shape == "bricks"){
                event.add(`modpack:cutting/sandstone/${colour}`, `tfc:smooth_sandstone/${colour}`)
                event.add(`modpack:cutting/sandstone/${colour}`, `tfc:raw_sandstone/${colour}`)
                event.add(`modpack:cutting/sandstone/${colour}`, `tfc:cut_sandstone/${colour}`)
            } else {
                event.add(`modpack:cutting/sandstone/${colour}`, `tfc:smooth_sandstone/${colour}_${shape}`)
                event.add(`modpack:cutting/sandstone/${colour}`, `tfc:raw_sandstone/${colour}_${shape}`)
                event.add(`modpack:cutting/sandstone/${colour}`, `tfc:cut_sandstone/${colour}_${shape}`)
            }  
        })
    })
})