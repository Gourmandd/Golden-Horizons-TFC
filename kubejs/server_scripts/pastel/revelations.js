// requires: pastel

// ----------------------------- //
// Generates data for revelation //
// ----------------------------- //

// Making a "builder" could be a more sane way of generating revelations

ServerEvents.generateData("after_mods", event =>{
    // "kubejs:ore/shimmerstone/granite": "tfc:rock/raw/granite"

    let malachite_revelation = {
        "advancement": "pastel:milestones/reveal_malachite",
        "block_states": {}
    }

    let shimmerstone_revelation =  {
        "advancement": "pastel:milestones/reveal_shimmerstone",
        "block_states": {}
    }
    
    let azurite_revelation =  {
        "advancement": "pastel:milestones/reveal_azurite",
        "block_states": {}
    }

    let paltaeria_revelation =  {
        "advancement": "pastel:milestones/reveal_paltaeria",
        "block_states": {}
    }

    let stratine_revelation =  {
        "advancement": "pastel:milestones/reveal_stratine",
        "block_states": {}
    }

    function setBlockStatesFromRock(rockType, value){
        let key = ""

        key = `kubejs:ore/shimmerstone/${rockType}`
        shimmerstone_revelation.block_states[key] = value

        key = `kubejs:ore/azurite/${rockType}`
        azurite_revelation.block_states[key] = value

        key = `kubejs:ore/stratine/${rockType}`
        stratine_revelation.block_states[key] = value

        key = `kubejs:ore/paltaeria/${rockType}`
        paltaeria_revelation.block_states[key] = value

        key = `kubejs:ore/malachite/${rockType}`
        malachite_revelation.block_states[key] = value
    }

    global.ROCK_TYPES.forEach(rockType =>{
        setBlockStatesFromRock(rockType, `tfc:rock/raw/${rockType}`)
    })

    global.DEEPER_DOWN_ROCK_TYPES.forEach(rockType =>{
        setBlockStatesFromRock(rockType, global.DEEPER_DOWN_ROCK_STONES[rockType])
    })

    event.json(`modpack:revelations/shimmerstone_ores`, shimmerstone_revelation)
    event.json(`modpack:revelations/azurite_ores`, azurite_revelation)
    event.json(`modpack:revelations/stratine_ores`, stratine_revelation)
    event.json(`modpack:revelations/paltaeria_ores`, paltaeria_revelation)
    event.json(`modpack:revelations/malachite_ores`, malachite_revelation)


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
            "advancement": `pastel:milestones/reveal_colored_trees_${type}`,
            "block_states": {}
        }

        let Items = {  
            "tfc:wood/planks/oak": `pastel:${colour}_planks`,
            "tfc:wood/planks/oak_stairs": `pastel:${colour}_stairs`,
            "tfc:wood/planks/oak_pressure_plate": `pastel:${colour}_pressure_plate`,
            "tfc:wood/planks/oak_fence": `pastel:${colour}_fence`,
            "tfc:wood/planks/oak_fence_gate": `pastel:${colour}_fence_gate`,
            "tfc:wood/planks/oak_button": `pastel:${colour}_button`,
            "tfc:wood/planks/oak_slab": `pastel:${colour}_slab`,
            "tfc:wood/stripped_log/oak": `spectral-decorations:${colour}_beam`,
            "tfc:wood/stripped_wood/oak": `spectral-decorations:${colour}_amphora`,
            "tfc:wood/planks/oak_bookshelf": `spectral-decorations:${colour}_lantern`,
            "tfc:wood/log/oak": `spectral-decorations:${colour}_light`,
            "everycomp:af/tfc/oak_flower_box": `everycomp:af/pastel/${colour}_flower_box`,
            "everycomp:af/tfc/oak_shutter": `everycomp:af/pastel/${colour}_shutter`,
            "everycomp:af/tfc/oak_table": `everycomp:af/pastel/${colour}_table`,
            "everycomp:af/tfc/oak_chair": `everycomp:af/pastel/${colour}_chair`,
            "everycomp:af/tfc/oak_shelf": `everycomp:af/pastel/${colour}_shelf`,
            "everycomp:af/tfc/oak_drawer": `everycomp:af/pastel/${colour}_drawer`,
            "everycomp:af/tfc/oak_bench": `everycomp:af/pastel/${colour}_bench`,
            "everycomp:c/tfc/oak_window": `everycomp:c/pastel/${colour}_window`,
            "everycomp:c/tfc/oak_window_pane": `everycomp:c/pastel/${colour}_window_pane`,
            "everycomp:hnhome/tfc/oak_sanded_wood": `everycomp:hnhome/pastel/${colour}_sanded_wood`,
            "everycomp:hnhome/tfc/oak_parquet": `everycomp:hnhome/pastel/${colour}_parquet`,
            "everycomp:hnhome/tfc/oak_trim": `everycomp:hnhome/pastel/${colour}_trim`,
            "everycomp:hnhome/tfc/oak_vertical_trim": `everycomp:hnhome/pastel/${colour}_vertical_trim`,
            "everycomp:hnhome/tfc/oak_lattice": `everycomp:hnhome/pastel/${colour}_lattice`,
            "everycomp:q/tfc/oak_bookshelf": `everycomp:q/pastel/${colour}_bookshelf`,
            "everycomp:q/tfc/oak_post": `everycomp:q/pastel/${colour}_post`,
            "everycomp:q/tfc/stripped_oak_post": `everycomp:q/pastel/stripped_${colour}_post`,
            "everycomp:q/tfc/vertical_oak_planks": `everycomp:q/pastel/vertical_${colour}_planks`,
            "everycomp:q/tfc/oak_ladder": `everycomp:q/pastel/${colour}_ladder`,
            "everycomp:q/tfc/hollow_oak_log": `everycomp:q/pastel/hollow_${colour}_log`,
            "everycomp:ap/tfc/oak_railing": `everycomp:ap/pastel/${colour}_railing`,
            "everycomp:ap/tfc/oak_boards": `everycomp:ap/pastel/${colour}_boards`,
            "everycomp:ap/tfc/oak_board_slab": `everycomp:ap/pastel/${colour}_board_slab`,
            "everycomp:ap/tfc/oak_board_stairs": `everycomp:ap/pastel/${colour}_board_stairs`,
            "everycomp:ap/tfc/oak_board_wall": `everycomp:ap/pastel/${colour}_board_wall`,
            "everycomp:fs/tfc/oak_1": `everycomp:fs/pastel/${colour}_1`,
            "everycomp:fs/tfc/oak_2": `everycomp:fs/pastel/${colour}_2`,
            "everycomp:fs/tfc/oak_4": `everycomp:fs/pastel/${colour}_4`,
            "everycomp:ls/tfc/oak_shutter": `everycomp:ls/pastel/${colour}_shutter`,
        }

        //flip the dictionary the other way.
        Object.keys(Items).forEach(entry =>{
            json.block_states[Items[entry]] = entry 
          })

        return json
    }

    CMY_COLOURS.forEach(colour =>{
        event.json(`modpack:revelations/wood/${colour}`, getColouredWoodItems(colour, "cmy"))
    })

    WHITE_COLOURS.forEach(colour =>{
        event.json(`modpack:revelations/wood/${colour}`, getColouredWoodItems(colour, "w"))
    })

    BLACK_COLOURS.forEach(colour =>{
        event.json(`modpack:revelations/wood/${colour}`, getColouredWoodItems(colour, "k"))
    })



    // the one for weeping gala is an actual json file in the datapack.
})

// Useful to have: /kill @e[type=tfc:falling_block] when using tfc clearworld