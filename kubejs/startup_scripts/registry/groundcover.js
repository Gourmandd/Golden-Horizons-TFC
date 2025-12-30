//requires: kubejs_tfc

StartupEvents.registry("block", event => {


    global.SPECTRUM_WOODS.forEach(wood => {

        if (global.NOXWOODS.indexOf(wood) > -1) {

            event.create(`wood/twig/${wood}_noxwood`, "tfc:ground_cover")
                .displayName(`${nameProcessing(wood)} Noxwood Twig`)
                .twig()
                .tagItem("tfc:can_be_lit_on_torch")
                .tagItem("tfc:twigs")
                .tagItem("c:rods/wooden")
                .tagBlock("minecraft:mineable/axe")
                .tagBlock("tfc:twigs")
                .tagBlock("tfc:can_be_snow_piled")

            event.create(`wood/support/${wood}`, "tfc:support")
                .displayName(`${nameProcessing(wood)} Noxwood Support`)
                .tagBlock("minecraft:mineable/axe")
                .tagBlock("tfc:support_beams")
                .tagItem("tfc:support_beams")
                .model(`kubejs:block/wood/support/${wood}_vertical`)
                .connectionModel(`kubejs:block/wood/support/${wood}_connection`)
                .horizontal(block => {
                    block.displayName(`Horizontal ${nameProcessing(wood)} Noxwood Support`)
                    block.model(`kubejs:block/wood/support/${wood}_horizontal`)
                })

        } else {

            event.create(`wood/twig/${wood}`, "tfc:ground_cover")
                .displayName(`${nameProcessing(wood)} Twig`)
                .twig()
                .tagItem("tfc:can_be_lit_on_torch")
                .tagItem("tfc:twigs")
                .tagItem("c:rods/wooden")
                .tagBlock("minecraft:mineable/axe")
                .tagBlock("tfc:twigs")
                .tagBlock("tfc:can_be_snow_piled")

            event.create(`wood/support/${wood}`, "tfc:support")
                .displayName(`${nameProcessing(wood)} Support`)
                .tagBlock("minecraft:mineable/axe")
                .tagBlock("tfc:support_beams")
                .tagItem("tfc:support_beams")
                .model(`kubejs:block/wood/support/${wood}_vertical`)
                .connectionModel(`kubejs:block/wood/support/${wood}_connection`)
                .horizontal(block => {
                    block.displayName(`Horizontal ${nameProcessing(wood)} Support`)
                })
        }
    })
})
