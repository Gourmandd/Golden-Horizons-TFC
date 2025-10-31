// requires: kubejs_tfc

// ------------------------------------------------- //
// Registers Items for TFCified Spectrum Wood types  //
// ------------------------------------------------- //

StartupEvents.registry("block", event => {

    global.DYE_COLOURS.forEach(colour => {

        event.create(`wood/support/${colour}`, "tfc:support")
            .displayName(`${nameProcessing(colour)} Support`)
            .tagBlock("minecraft:mineable/axe")
            .tagBlock("tfc:support_beams")
            .tagItem("tfc:support_beams")
            .model(`kubejs:block/wood/support/${colour}_vertical`)
            .connectionModel(`kubejs:block/wood/support/${colour}_connection`)
            .horizontal(block => {
                 block.displayName(`Horizontal ${nameProcessing(colour)} Support`)
            })
    })
})
