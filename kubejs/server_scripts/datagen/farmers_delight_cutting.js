
const GIVES_PLANK = [
    "bookshelf",
    "log_fence",
    "fence_gate",
    "tool_rack",
    "workbench",
    "loom",
]

const GIVES_LUMBER = [
    "door",
    "trapdoor",
    "fence",
    "pressure_plate",
    "button",
    "slab",
    "stairs",
]

const BLOCK_SHAPES = [
    "bricks",
    "wall",
    "stairs",
    "slab"
]

const BRICK_TYPES = [
    "bricks",
    "mossy_bricks",
    "cracked_bricks"
]

let NAMESPACE = global.NAMESPACE

ServerEvents.tags("item", event =>{

    global.OVERWORLD_WOOD_TYPES.forEach(type => {

        let mod = global.WOOD_TYPE_TO_MOD[type]

        // planks
        GIVES_PLANK.forEach(item =>{
            event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`, `${mod}:wood/planks/${type}_${item}`)
        })


        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`, `everycomp:c/${mod}/${type}_window`)
        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`, `everycomp:fd/${mod}/${type}_cabinet`)
        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`, `everycomp:hnhome/${mod}/${type}_sanded_wood`)
        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`, `everycomp:hnhome/${mod}/${type}_parquet`)
        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`, `everycomp:hnhome/${mod}/${type}_trim`)
        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`, `everycomp:hnhome/${mod}/${type}_vertical_trim`)
        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`, `everycomp:q/${mod}/${type}_post`)
        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`, `everycomp:q/${mod}/stripped_${type}_post`)
        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`, `everycomp:q/${mod}/vertical_${type}_planks`)
        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`, `everycomp:q/${mod}/hollow_${type}_log`)
        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`, `everycomp:af/${mod}/${type}_flower_box`)
        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`, `everycomp:af/${mod}/${type}_table`)
        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`, `everycomp:af/${mod}/${type}_chair`)
        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`, `everycomp:af/${mod}/${type}_shelf`)
        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`, `everycomp:af/${mod}/${type}_drawer`)
        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`, `everycomp:af/${mod}/${type}_bench`)
        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`, `everycomp:q/${mod}/${type}_bookshelf`)
        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`, `everycomp:hnhome/${mod}/${type}_lattice`)
        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`,`${mod}:wood/chest/${type}`)
        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`,`${mod}:wood/trapped_chest/${type}`)
        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`,`${mod}:wood/barrel/${type}`)
        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`,`${mod}:wood/lectern/${type}`)
        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`,`${mod}:wood/scribing_table/${type}`)
        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`,`${mod}:wood/sewing_table/${type}`)
        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`,`${mod}:wood/jar_shelf/${type}`)
        event.add(`${NAMESPACE}:cutting/wood/for_planks/${type}`,`${mod}:wood/boat/${type}`)

        // lumber
        GIVES_LUMBER.forEach(item =>{
            event.add(`${NAMESPACE}:cutting/wood/for_lumber/${type}`,  `${mod}:wood/planks/${type}_${item}`)
        })
        event.add(`${NAMESPACE}:cutting/wood/for_lumber/${type}`, `everycomp:af/${mod}/${type}_shutter`)
        event.add(`${NAMESPACE}:cutting/wood/for_lumber/${type}`, `everycomp:c/${mod}/${type}_window_pane`)
        event.add(`${NAMESPACE}:cutting/wood/for_lumber/${type}`, `everycomp:q/${mod}/${type}_ladder`)
        event.add(`${NAMESPACE}:cutting/wood/for_lumber/${type}`,`${mod}:wood/sluice/${type}`)
        event.add(`${NAMESPACE}:cutting/wood/for_lumber/${type}`,`${mod}:wood/support/${type}`)
        event.add(`${NAMESPACE}:cutting/wood/for_lumber/${type}`,`${mod}:wood/sign/${type}`)

        global.TOOL_METALS.forEach(metal => {
            event.add(`${NAMESPACE}:cutting/wood/for_lumber/${type}`,`${mod}:wood/hanging_sign/${metal}/${type}`)
        })    
    })
    
    // terracotta and alabaster
    global.DYE_COLOURS.forEach(colour => {
        BLOCK_SHAPES.forEach(shape => {

            if (shape == "wall"){
                
                event.add(`${NAMESPACE}:cutting/alabaster_brick`, `tfc:alabaster/bricks/${colour}_${shape}`)
                event.add(`${NAMESPACE}:cutting/alabaster_brick`, `tfc:alabaster/polished/${colour}_${shape}`)
                return
            } 

            if (shape == "bricks"){
                event.add(`${NAMESPACE}:cutting/terracotta_bricks/${colour}`, `hearth_and_home:${colour}_terracotta_bricks`)
                event.add(`${NAMESPACE}:cutting/terracotta_bricks/${colour}`, `hearth_and_home:${colour}_shingles`)
            } else {
                event.add(`${NAMESPACE}:cutting/terracotta_bricks/${colour}`, `hearth_and_home:${colour}_terracotta_brick_${shape}`)
                event.add(`${NAMESPACE}:cutting/terracotta_bricks/${colour}`, `hearth_and_home:${colour}_shingle_${shape}`)
                event.add(`${NAMESPACE}:cutting/alabaster_brick`, `tfc:alabaster/bricks/${colour}_${shape}`)
                event.add(`${NAMESPACE}:cutting/alabaster_brick`, `tfc:alabaster/polished/${colour}_${shape}`)
            }   
        })
        event.add(`${NAMESPACE}:cutting/gypsum`, `tfc:alabaster/raw/${colour}`)
    })
    event.add(`${NAMESPACE}:cutting/gypsum`, "tfc:alabaster/raw")

    event.add(`${NAMESPACE}:cutting/alabaster_brick`, "tfc:alabaster/polished")
    event.add(`${NAMESPACE}:cutting/alabaster_brick`, "tfc:alabaster/bricks")

    event.add(`${NAMESPACE}:cutting/terracotta_bricks/plain`, "hearth_and_home:terracotta_bricks")
    event.add(`${NAMESPACE}:cutting/terracotta_bricks/plain`, "hearth_and_home:terracotta_brick_stairs")
    event.add(`${NAMESPACE}:cutting/terracotta_bricks/plain`, "hearth_and_home:terracotta_brick_slab")
    event.add(`${NAMESPACE}:cutting/terracotta_bricks/plain`, "hearth_and_home:shingles")
    event.add(`${NAMESPACE}:cutting/terracotta_bricks/plain`, "hearth_and_home:shingle_stairs")
    event.add(`${NAMESPACE}:cutting/terracotta_bricks/plain`, "hearth_and_home:shingle_slab")

    // rock
    global.ROCK_TYPES.forEach(rock => {
        BRICK_TYPES.forEach(type => {
            BLOCK_SHAPES.forEach(shape => {

                if (shape == "bricks"){
                    event.add(`${NAMESPACE}:cutting/rock/${rock}`, `tfc:rock/${type}/${rock}`)
                    event.add(`${NAMESPACE}:cutting/rock/${rock}`, `tfc:rock/smooth/${rock}`)
                } else {
                    event.add(`${NAMESPACE}:cutting/rock/${rock}`, `tfc:rock/${type}/${rock}_${shape}`)
                    event.add(`${NAMESPACE}:cutting/rock/${rock}`, `tfc:rock/smooth/${rock}_${shape}`)
                }  
            })
        })
        event.add(`${NAMESPACE}:cutting/rock/${rock}`, `tfc:rock/chiseled/${rock}`)
    })

    // mud bricks
    global.TFC_SOIL_TYPES.forEach(soil => {
        BLOCK_SHAPES.forEach(shape => {

            if (shape == "bricks"){
                event.add(`${NAMESPACE}:cutting/mud/${soil}/brick`, `tfc:mud_bricks/${soil}`)
            } else {
                event.add(`${NAMESPACE}:cutting/mud/${soil}/brick`, `tfc:mud_bricks/${soil}_${shape}`)
            }  
        })
    })

    // sandstone
    global.TFC_SAND_COLOURS.forEach(colour => {
        BLOCK_SHAPES.forEach(shape => {

            if (shape == "bricks"){
                event.add(`${NAMESPACE}:cutting/sandstone/${colour}`, `tfc:smooth_sandstone/${colour}`)
                event.add(`${NAMESPACE}:cutting/sandstone/${colour}`, `tfc:raw_sandstone/${colour}`)
                event.add(`${NAMESPACE}:cutting/sandstone/${colour}`, `tfc:cut_sandstone/${colour}`)
            } else {
                event.add(`${NAMESPACE}:cutting/sandstone/${colour}`, `tfc:smooth_sandstone/${colour}_${shape}`)
                event.add(`${NAMESPACE}:cutting/sandstone/${colour}`, `tfc:raw_sandstone/${colour}_${shape}`)
                event.add(`${NAMESPACE}:cutting/sandstone/${colour}`, `tfc:cut_sandstone/${colour}_${shape}`)
            }  
        })
    })
})

ServerEvents.recipes(event =>{

    function cutting(id, input, input_type, output, action, output_chance, output_count){
        let ingredients = {}
        if (input_type == "tag"){
            ingredients = {"tag": input}
        }
        if (input_type == "item"){
            ingredients = {"item": input}
        }
        event.custom({
            "type": "farmersdelight:cutting",
            "ingredients": [ingredients],
            "result": [{
                "item": output,
                "chance": output_chance,
                "count": output_count
            }],
            "tool": {
                "type": "farmersdelight:tool_action",
                "action": action
            }
        })
        .id(id)
    }

    global.OVERWORLD_WOOD_TYPES.forEach(type => {

        let mod = global.WOOD_TYPE_TO_MOD[type]
            cutting(`${NAMESPACE}:fd_cutting/wood/${mod}_lumber/${type}`, `${NAMESPACE}:cutting/wood/for_lumber/${type}`, "tag",  `${mod}:wood/lumber/${type}`, "axe_dig", 1, 1)
            cutting(`${NAMESPACE}:fd_cutting/wood/${mod}_planks/${type}`, `${NAMESPACE}:cutting/wood/for_planks/${type}`, "tag",  `${mod}:wood/planks/${type}`, "axe_dig", 1, 1)
    })

    global.DYE_COLOURS.forEach(colour => {
        cutting(`${NAMESPACE}:fd_cutting/terracotta/${colour}`, `${NAMESPACE}:cutting/terracotta_bricks/${colour}`, "tag", `minecraft:${colour}_terracotta`, "pickaxe_dig", 0.5, 1)
    })
    cutting(`${NAMESPACE}:fd_cutting/terracotta/plain`, `${NAMESPACE}:cutting/terracotta_bricks/plain`, "tag", "minecraft:terracotta", "pickaxe_dig", 0.5, 1)

    cutting(`${NAMESPACE}:fd_cutting/alabaster`, `${NAMESPACE}:cutting/alabaster_brick`, "tag", "tfc:alabaster_brick","pickaxe_dig", 0.5, 1,)

    cutting(`${NAMESPACE}:fd_cutting/gypsum`, `${NAMESPACE}:cutting/gypsum`, "tag", "tfc:ore/gypsum","pickaxe_dig", 1, 1)

    global.TFC_SOIL_TYPES.forEach(soil => {
        cutting(`${NAMESPACE}:fd_cutting/mud/${soil}`, `${NAMESPACE}:cutting/mud/${soil}/brick`, "tag", `tfc:mud_brick/${soil}`, "pickaxe_dig", 0.5, 1)
    })

    global.TFC_SAND_COLOURS.forEach(colour => {
        cutting(`${NAMESPACE}:fd_cutting/sandstone/${colour}`, `${NAMESPACE}:cutting/sandstone/${colour}`, "tag", `tfc:sand/${colour}`, "pickaxe_dig", 0.5, 1)
    })

    global.ROCK_TYPES.forEach(rock => {
        cutting(`${NAMESPACE}:fd_cutting/rock/${rock}`, `${NAMESPACE}:cutting/rock/${rock}`, `tfc:rock/loose/${rock}`, 0.5, 1, "pickaxe_dig")
    })
})