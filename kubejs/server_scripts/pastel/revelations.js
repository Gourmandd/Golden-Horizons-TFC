// requires: pastel

ServerEvents.generateData("after_mods", event =>{
    // "kubejs:ore/shimmerstone/granite": "tfc:rock/raw/granite"

    let datagen = Datagen(event).databank()

    function hideBlock(advancement, block, cloak){
        datagen.hiding(datagen.advancementCondition(advancement), datagen.blockType(cloak, block)).generate()
    }

    function hideItem(advancement, item, cloak, name){
        datagen.hiding(datagen.advancementCondition(advancement), datagen.itemType(cloak, item, {"text": "\u00a7k" + name})).generate()
    }

    const PASTEL_ORES = [
        "malachite",
        "shimmerstone",
        "azurite",
        "paltaeria",
        "stratine"
    ]

    // "pastel:milestones/reveal_malachite"
    PASTEL_ORES.forEach(ore => {

        global.ROCK_TYPES.forEach(rockType =>{

            hideBlock(`pastel:milestones/reveal_${ore}`, `kubejs:ore/${ore}/${rockType}`, `tfc:rock/raw/${rockType}`)
            hideItem(`pastel:milestones/reveal_${ore}`, `kubejs:ore/${ore}/${rockType}`, `tfc:rock/raw/${rockType}`, rockType + " " + ore)
        })

        global.DEEPER_DOWN_ROCK_TYPES.forEach(rockType =>{

            hideBlock(`pastel:milestones/reveal_${ore}`, `kubejs:ore/${ore}/${rockType}`, global.DEEPER_DOWN_ROCK_STONES[rockType])
            hideItem(`pastel:milestones/reveal_${ore}`, `kubejs:ore/${ore}/${rockType}`, global.DEEPER_DOWN_ROCK_STONES[rockType], rockType + " " + ore)
        })
    })

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


    function getColouredWoodItems(colour){

        let block_states = {  
            "tfc:wood/planks/oak": `pastel:${colour}_planks`,
            "tfc:wood/planks/oak_stairs": `pastel:${colour}_stairs`,
            "tfc:wood/pressure_plate/oak": `pastel:${colour}_pressure_plate`,
            "tfc:wood/fence/oak": `pastel:${colour}_fence`,
            "tfc:wood/fence_gate/oak": `pastel:${colour}_fence_gate`,
            "tfc:wood/button/oak": `pastel:${colour}_button`,
            "tfc:wood/planks/oak_slab": `pastel:${colour}_slab`,
            //"everycomp:af/tfc/oak_flower_box": `everycomp:af/pastel/${colour}_flower_box`,
            //"everycomp:af/tfc/oak_shutter": `everycomp:af/pastel/${colour}_shutter`,
            //"everycomp:af/tfc/oak_table": `everycomp:af/pastel/${colour}_table`,
            //"everycomp:af/tfc/oak_chair": `everycomp:af/pastel/${colour}_chair`,
            //"everycomp:af/tfc/oak_shelf": `everycomp:af/pastel/${colour}_shelf`,
            //"everycomp:af/tfc/oak_drawer": `everycomp:af/pastel/${colour}_drawer`,
            //"everycomp:af/tfc/oak_bench": `everycomp:af/pastel/${colour}_bench`,
            "everycomp:c/tfc/oak_window": `everycomp:c/pastel/${colour}_window`,
            "everycomp:c/tfc/oak_window_pane": `everycomp:c/pastel/${colour}_window_pane`,
            //"everycomp:q/tfc/oak_bookshelf": `everycomp:q/pastel/${colour}_bookshelf`,
            //"everycomp:q/tfc/oak_post": `everycomp:q/pastel/${colour}_post`,
            //"everycomp:q/tfc/stripped_oak_post": `everycomp:q/pastel/stripped_${colour}_post`,
            //"everycomp:q/tfc/vertical_oak_planks": `everycomp:q/pastel/vertical_${colour}_planks`,
            //"everycomp:q/tfc/oak_ladder": `everycomp:q/pastel/${colour}_ladder`,
            //"everycomp:q/tfc/hollow_oak_log": `everycomp:q/pastel/hollow_${colour}_log`,
            "everycomp:ap/tfc/oak_railing": `everycomp:ap/pastel/${colour}_railing`,
            "everycomp:ap/tfc/oak_boards": `everycomp:ap/pastel/${colour}_boards`,
            "everycomp:ap/tfc/oak_board_slab": `everycomp:ap/pastel/${colour}_board_slab`,
            "everycomp:ap/tfc/oak_board_stairs": `everycomp:ap/pastel/${colour}_board_stairs`,
            "everycomp:ap/tfc/oak_board_wall": `everycomp:ap/pastel/${colour}_board_wall`,
            "everycomp:ls/tfc/oak_shutter": `everycomp:ls/pastel/${colour}_shutter`,
        }

        return block_states
    }

    CMY_COLOURS.forEach(colour =>{

        let states = getColouredWoodItems(colour)

        Object.keys(states).forEach(block => {

            hideItem(`pastel:milestones/reveal_colored_trees_cmy`, states[block], block, block.split(":").pop().split("/").pop().replace("_", " "))
            hideItem(`pastel:milestones/reveal_colored_trees_cmy`, `kubejs:wood/lumber/${colour}`, "tfc:wood/lumber/oak", colour + " lumber")
        })
    })

    WHITE_COLOURS.forEach(colour =>{
        let states = getColouredWoodItems(colour)

        Object.keys(states).forEach(block => {

            hideItem(`pastel:milestones/reveal_colored_trees_w`, states[block], block, block.split(":").pop().split("/").pop().replace("_", " "))
            hideItem(`pastel:milestones/reveal_colored_trees_w`, `kubejs:wood/lumber/${colour}`, "tfc:wood/lumber/oak", colour + " lumber")
        })
    })

    BLACK_COLOURS.forEach(colour =>{
        let states = getColouredWoodItems(colour)

        Object.keys(states).forEach(block => {

            hideItem(`pastel:milestones/reveal_colored_trees_k`, states[block], block, block.split(":").pop().split("/").pop().replace("_", " "))
            hideItem(`pastel:milestones/reveal_colored_trees_k`, `kubejs:wood/lumber/${colour}`, "tfc:wood/lumber/oak", colour + " lumber")
        })
    })




    // the one for weeping gala is an actual json file in the datapack.
})

// Useful to have: /kill @e[type=tfc:falling_block] when using tfc clearworld