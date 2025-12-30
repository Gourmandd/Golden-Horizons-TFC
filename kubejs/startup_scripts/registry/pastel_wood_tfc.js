// requires: kubejs_tfc

// ------------------------------------------------- //
// Registers Items for TFCified Spectrum Wood types  //
// ------------------------------------------------- //

StartupEvents.registry("block", event => {

    global.DYE_COLOURS.forEach(colour => {

        event.create(`${id}:wood/support/${colour}`, "tfc:support")
            .displayName(`${nameProcessing(colour)} Support`)
            .tagBlock("minecraft:mineable/axe")
            .tagBlock("tfc:support_beams")
            .tagItem("tfc:support_beams")
            .model(`${id}:block/wood/support/${colour}_vertical`)
            .connectionModel(`${id}:block/wood/support/${colour}_connection`)
            .horizontal(block => {
                block.displayName(`Horizontal ${nameProcessing(colour)} Support`)
            })
    })
})
