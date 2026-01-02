ServerEvents.tags("item", event => {
    global.CUSTOM_CLAY_TYPES.forEach(type => {

        global.TFC_TOOL_TYPES.forEach(tool => {
            event.add("tfc:unfired_molds", `${mod_id}:ceramic/unfired_${type}_${tool}_mold`)
            event.add(`${mod_id}:clay/${type}_recycling_5`, `${mod_id}:ceramic/unfired_${type}_${tool}_mold`)
        })

        event.add("tfc:unfired_vessels", `${mod_id}:ceramic/unfired_${type}_vessel`)
        event.add("tfc:unfired_molds", [`${mod_id}:ceramic/unfired_${type}_bell_mold`, `${mod_id}:ceramic/unfired_${type}_ingot_mold`])
        event.add("tfc:fired_vessels", `${mod_id}:ceramic/${type}_vessel`)
        event.add("tfc:fluid_item_ingredient_empty_containers", `${mod_id}:ceramic/${type}_jug`)

        event.add(`${mod_id}:clay/${type}_recycling_5`, [
            `${mod_id}:ceramic/unfired_${type}_vessel`,
            `${mod_id}:ceramic/unfired_${type}_bell_mold`,
            `${mod_id}:ceramic/unfired_${type}_vessel`,
            `${mod_id}:ceramic/unfired_${type}_jug`,
            `${mod_id}:ceramic/unfired_${type}_pot`,
            `${mod_id}:ceramic/unfired_${type}_spindle_head`,
            `${mod_id}:ceramic/unfired_${type}_pan`,
            `${mod_id}:ceramic/unfired_${type}_blowpipe`
        ])

        event.add(`${mod_id}:clay/${type}_recycling_1`, [
            `${mod_id}:ceramic/unfired_${type}_brick`,
            `${mod_id}:ceramic/unfired_${type}_bowl`,
            `${mod_id}:ceramic/unfired_${type}_flower_pot`,
            `${mod_id}:ceramic/unfired_${type}_ingot_mold`,
        ])

        event.add("tfc:unfired_pottery", [
            `${mod_id}:ceramic/unfired_${type}_vessel`,
            `${mod_id}:ceramic/unfired_${type}_bell_mold`,
            `${mod_id}:ceramic/unfired_${type}_vessel`,
            `${mod_id}:ceramic/unfired_${type}_jug`,
            `${mod_id}:ceramic/unfired_${type}_pot`,
            `${mod_id}:ceramic/unfired_${type}_spindle_head`,
            `${mod_id}:ceramic/unfired_${type}_pan`,
            `${mod_id}:ceramic/unfired_${type}_blowpipe`,
            `${mod_id}:ceramic/unfired_${type}_brick`,
            `${mod_id}:ceramic/unfired_${type}_bowl`,
            `${mod_id}:ceramic/unfired_${type}_flower_pot`,
        ])

        event.add("c:clay_balls",
            `${mod_id}:clay/${type}_clay_ball`
        )

        event.add("modpack:unfired_vessels",
            `${mod_id}:ceramic/unfired_${type}_vessel`
        )

        event.add("create:upright_on_belt",
            `${mod_id}:ceramic/${type}_jug`
        )
    })

    global.TOOL_METALS.forEach(metal => {
        global.TFC_TOOL_TYPES.forEach(tool => {
            event.add(`${mod_id}:tool_heads/${tool}`, `tfc:metal/${tool}_${global.TFC_TOOL_HEADS[tool]}/${metal}`)
        })
    })
})

ServerEvents.tags("block", event => {

    global.CUSTOM_CLAY_TYPES.forEach(type => {

        event.add("tfc:grass_plantable_on",
            `${mod_id}:clay/${type}_clay_block`
        )

        event.add("tfc:halophyte_plantable_on",
            `${mod_id}:clay/${type}_clay_block`
        )

        event.add("tfc:sea_bush_plantable_on",
            `${mod_id}:clay/${type}_clay_block`
        )
    })
})
