ServerEvents.tags("item", event => {
    global.CUSTOM_CLAY_TYPES.forEach(type => {

        global.TFC_TOOL_TYPES.forEach(tool => {
            event.add("tfc:unfired_molds", `${mod_id}:ceramic/${type}/unfired_${tool}_mold`)
            event.add(`${mod_id}:clay/${type}_recycling_5`, `${mod_id}:ceramic/${type}/unfired_${tool}_mold`)
        })

        event.add("tfc:unfired_vessels", `${mod_id}:ceramic/${type}/unfired_vessel`)
        event.add("tfc:unfired_molds", [`${mod_id}:ceramic/${type}/unfired_bell_mold`, `${mod_id}:ceramic/${type}/unfired_ingot_mold`])
        event.add("tfc:fired_vessels", `${mod_id}:ceramic/${type}/vessel`)
        event.add("tfc:fluid_item_ingredient_empty_containers", `${mod_id}:ceramic/${type}/jug`)

        event.add(`${mod_id}:clay/${type}/recycling_5`, [
            `${mod_id}:ceramic/${type}/unfired_vessel`,
            `${mod_id}:ceramic/${type}/unfired_bell_mold`,
            `${mod_id}:ceramic/${type}/unfired_vessel`,
            `${mod_id}:ceramic/${type}/unfired_jug`,
            `${mod_id}:ceramic/${type}/unfired_pot`,
            `${mod_id}:ceramic/${type}/unfired_spindle_head`,
            `${mod_id}:ceramic/${type}/unfired_pan`,
            `${mod_id}:ceramic/${type}/unfired_blowpipe`
        ])

        event.add(`${mod_id}:clay/${type}/recycling_1`, [
            `${mod_id}:ceramic/${type}/unfired_brick`,
            `${mod_id}:ceramic/${type}/unfired_bowl`,
            `${mod_id}:ceramic/${type}/unfired_flower_pot`,
            `${mod_id}:ceramic/${type}/unfired_ingot_mold`,
        ])

        event.add("tfc:unfired_pottery", [
            `${mod_id}:ceramic/${type}/unfired_vessel`,
            `${mod_id}:ceramic/${type}/unfired_bell_mold`,
            `${mod_id}:ceramic/${type}/unfired_vessel`,
            `${mod_id}:ceramic/${type}/unfired_jug`,
            `${mod_id}:ceramic/${type}/unfired_pot`,
            `${mod_id}:ceramic/${type}/unfired_spindle_head`,
            `${mod_id}:ceramic/${type}/unfired_pan`,
            `${mod_id}:ceramic/${type}/unfired_blowpipe`,
            `${mod_id}:ceramic/${type}/unfired_brick`,
            `${mod_id}:ceramic/${type}/unfired_bowl`,
            `${mod_id}:ceramic/${type}/unfired_flower_pot`,
        ])

        event.add("c:clay_balls",
            `${mod_id}:ceramic/${type}/clay_ball`
        )

        event.add("modpack:unfired_vessels",
            `${mod_id}:ceramic/${type}/unfired_vessel`
        )

        event.add("create:upright_on_belt",
            `${mod_id}:ceramic/${type}/jug`
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
