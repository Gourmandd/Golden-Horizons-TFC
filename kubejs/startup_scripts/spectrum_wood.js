
StartupEvents.registry("item", event => {

    global.DYE_COLOURS.forEach(colour => {
        
        event.create(`wood/lumber/${colour}`).displayName(`${nameProcessing(colour)} Lumber`).tag("tfc:lumber")
    })
    
    global.SPECTRUM_WOODS.forEach(wood => {

        if (global.NOXWOODS.indexOf(wood) > -1){

            event.create(`wood/lumber/${wood}`).displayName(`${nameProcessing(wood)} Noxwood Lumber`).tag("tfc:lumber")
        } else {

            event.create(`wood/lumber/${wood}`).displayName(`${nameProcessing(wood)} Lumber`).tag("tfc:lumber")
        }

    })
})



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

    global.SPECTRUM_WOODS.forEach(wood => {

        if (global.NOXWOODS.indexOf(wood) > -1){
            
            event.create(`wood/twig/${wood}_noxwood`, "tfc:ground_cover")
                .displayName(`${nameProcessing(wood)} Noxwood Twig`)
                .twig()
                .tagItem("tfc:can_be_lit_on_torch")
                .tagItem("tfc:twigs")
                .tagItem("forge:rods/wooden")
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
                .tagItem("forge:rods/wooden")
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
                .horizontal( block => {
                    block.displayName(`Horizontal ${nameProcessing(wood)} Support`)
                })
        }

    })
})