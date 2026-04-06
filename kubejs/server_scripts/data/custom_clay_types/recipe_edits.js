
ServerEvents.recipes(event => {

    // blocks are 4 clay balls, these normally return all 5 from standard clay knapping, thus duplicating clay balls when using the deployer method.
    global.TFC_TOOL_TYPES.forEach(tool => {

        event.shapeless(Item.of("minecraft:clay_ball", 4), `tfc:ceramic/unfired_${tool}_${global.TFC_TOOL_HEADS[tool]}_mold`)
            .id(`tfc:crafting/ceramic/unfired_${tool}_${global.TFC_TOOL_HEADS[tool]}_mold_to_clay`)
    })

    event.shapeless(Item.of("minecraft:clay_ball", 4), `tfc:ceramic/unfired_bell_mold`)
        .id(`tfc:crafting/ceramic/unfired_bell_mold_to_clay`)
})
