ServerEvents.highPriorityData(event =>{
    // "kubejs:ore/shimmerstone/granite": "tfc:rock/raw/granite"
    let shimmerstone_revelation =  {
        "advancement": "spectrum:milestones/reveal_shimmerstone",
        "block_states": {}
    }
    
    let azurite_revelation =  {
        "advancement": "spectrum:milestones/reveal_azurite",
        "block_states": {}
    }

    let paltaeria_revelation =  {
        "advancement": "spectrum:milestones/reveal_paltaeria",
        "block_states": {}
    }

    let stratine_revelation =  {
        "advancement": "spectrum:milestones/reveal_stratine",
        "block_states": {}
    }

    global.ROCK_TYPES.forEach(rockType =>{
        let key = ""
        let value = "tfc:rock/raw/" + rockType

        key = "kubejs:ore/shimmerstone/" + rockType
        shimmerstone_revelation.block_states[key] = value

        key = "kubejs:ore/azurite/" + rockType
        azurite_revelation.block_states[key] = value

        key = "kubejs:ore/stratine/" + rockType
        stratine_revelation.block_states[key] = value

        key = "kubejs:ore/paltaeria/" + rockType
        paltaeria_revelation.block_states[key] = value
    })

    event.addJson("modpack:revelations/shimmerstone_ores", shimmerstone_revelation)
    event.addJson("modpack:revelations/azurite_ores", azurite_revelation)
    event.addJson("modpack:revelations/stratine_ores", stratine_revelation)
    event.addJson("modpack:revelations/paltaeria_ores", paltaeria_revelation)

    const CMY_COLOURS = [
        "orange",
        "magenta",
        "light_blue",
        "yellow",
        "lime",
        "pink",
        "cyan",
        "purple",
        "blue",
        "green",
        "red"
    ]
    const BLACK_COLOURS = [
        "black",
        "brown"
    ]
    const WHITE_COLOURS = [
        "white",
        "gray",
        "light_gray"
    ]

    function getColouredWoodItems(colour, type){
        let json = {
            "advancement": "spectrum:milestones/reveal_colored_trees_" + type,
            "block_states": {}
        }

        let Items = {  
            "tfc:wood/planks/oak": "spectrum:" + colour + "_planks",
            "tfc:wood/planks/oak_stairs": "spectrum:" + colour + "_stairs",
            "tfc:wood/planks/oak_pressure_plate": "spectrum:" + colour + "_pressure_plate",
            "tfc:wood/planks/oak_fence": "spectrum:" + colour + "_fence",
            "tfc:wood/planks/oak_fence_gate": "spectrum:" + colour + "_fence_gate",
            "tfc:wood/planks/oak_button": "spectrum:" + colour + "_button",
            "tfc:wood/planks/oak_slab": "spectrum:" + colour + "_slab",
            "tfc:wood/stripped_log/oak": "spectral-decorations:" + colour + "_beam",
            "tfc:wood/stripped_wood/oak": "spectral-decorations:" + colour + "_amphora",
            "tfc:wood/planks/oak_bookshelf": "spectral-decorations:" + colour + "_lantern",
            "tfc:wood/log/oak": "spectral-decorations:" + colour + "_light",
            "everycomp:af/tfc/oak_flower_box": "everycomp:af/spectrum/" + colour + "_flower_box",
            "everycomp:af/tfc/oak_shutter": "everycomp:af/spectrum/" + colour + "_shutter",
            "everycomp:af/tfc/oak_table": "everycomp:af/spectrum/" + colour + "_table",
            "everycomp:af/tfc/oak_chair": "everycomp:af/spectrum/" + colour + "_chair",
            "everycomp:af/tfc/oak_shelf": "everycomp:af/spectrum/" + colour + "_shelf",
            "everycomp:af/tfc/oak_drawer": "everycomp:af/spectrum/" + colour + "_drawer",
            "everycomp:af/tfc/oak_bench": "everycomp:af/spectrum/" + colour + "_bench",
            "everycomp:c/tfc/oak_window": "everycomp:c/spectrum/" + colour + "_window",
            "everycomp:c/tfc/oak_window_pane": "everycomp:c/spectrum/" + colour + "_window_pane",
            "everycomp:hnhome/tfc/oak_sanded_wood": "everycomp:hnhome/spectrum/" + colour + "_sanded_wood",
            "everycomp:hnhome/tfc/oak_parquet": "everycomp:hnhome/spectrum/" + colour + "_parquet",
            "everycomp:hnhome/tfc/oak_trim": "everycomp:hnhome/spectrum/" + colour + "_trim",
            "everycomp:hnhome/tfc/oak_vertical_trim": "everycomp:hnhome/spectrum/" + colour + "_vertical_trim",
            "everycomp:hnhome/tfc/oak_lattice": "everycomp:hnhome/spectrum/" + colour + "_lattice",
            "everycomp:q/tfc/oak_bookshelf": "everycomp:q/spectrum/" + colour + "_bookshelf",
            "everycomp:q/tfc/oak_post": "everycomp:q/spectrum/" + colour + "_post",
            "everycomp:q/tfc/stripped_oak_post": "everycomp:q/spectrum/stripped_" + colour + "_post",
            "everycomp:q/tfc/vertical_oak_planks": "everycomp:q/spectrum/vertical_" + colour + "_planks",
            "everycomp:q/tfc/oak_ladder": "everycomp:q/spectrum/" + colour + "_ladder",
            "everycomp:q/tfc/hollow_oak_log": "everycomp:q/spectrum/hollow_" + colour + "_log",
            "everycomp:ap/tfc/oak_railing": "everycomp:ap/spectrum/" + colour + "_railing",
            "everycomp:ap/tfc/oak_boards": "everycomp:ap/spectrum/" + colour + "_boards",
            "everycomp:ap/tfc/oak_board_slab": "everycomp:ap/spectrum/" + colour + "_board_slab",
            "everycomp:ap/tfc/oak_board_stairs": "everycomp:ap/spectrum/" + colour + "_board_stairs",
            "everycomp:ap/tfc/oak_board_wall": "everycomp:ap/spectrum/" + colour + "_board_wall",
            "everycomp:fs/tfc/oak_1": "everycomp:fs/spectrum/" + colour + "_1",
            "everycomp:fs/tfc/oak_2": "everycomp:fs/spectrum/" + colour + "_2",
            "everycomp:fs/tfc/oak_4": "everycomp:fs/spectrum/" + colour + "_4",
            "everycomp:ls/tfc/oak_shutter": "everycomp:ls/spectrum/" + colour + "_shutter",
        }

        //flip the dictionary the other way.
        Object.keys(Items).forEach(entry =>{
            json.block_states[Items[entry]] = entry 
          })

        return json
    }

    CMY_COLOURS.forEach(colour =>{
        event.addJson("modpack:revelations/wood/" + colour, getColouredWoodItems(colour, "cmy"))
    })

    WHITE_COLOURS.forEach(colour =>{
        event.addJson("modpack:revelations/wood/" + colour, getColouredWoodItems(colour, "w"))
    })

    BLACK_COLOURS.forEach(colour =>{
        event.addJson("modpack:revelations/wood/" + colour, getColouredWoodItems(colour, "k"))
    })



    // the one for weeping gala is an actual json file in the datapack.
})

// Useful to have: /kill @e[type=tfc:falling_block] when using tfc clearworld