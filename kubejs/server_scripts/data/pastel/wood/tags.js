ServerEvents.tags("item", event => {

    global.PASTEL_WOOD_TYPES.forEach(wood => {
        event.add("tfc:can_be_lit_on_torch", `${mod_id}:wood/twig/${wood}`)
        event.add("tfc:twigs", `${mod_id}:wood/twig/${wood}`)
        event.add("c:rods/wooden", `${mod_id}:wood/twig/${wood}`)
        event.add("tfc:support_beams", `${mod_id}:wood/support/${wood}`)
        event.add("tfc:scribing_tables", `${mod_id}:wood/scribing_table/${wood}`)
        event.add("tfc:sewing_tables", `${mod_id}:wood/sewing_table/${wood}`)
        event.add("tfc:lumber", `${mod_id}:wood/lumber/${wood}`)
        event.add("tfc:looms", `${mod_id}:wood/loom/${wood}`)
        event.add("tfc:tool_racks", `${mod_id}:wood/tool_rack/${wood}`)
        event.add("tfc:sluices", `${mod_id}:wood/sluice/${wood}`)
    })
})

ServerEvents.tags("block", event => {

    global.PASTEL_WOOD_TYPES.forEach(wood => {

        let axe_mineable = [
            `${mod_id}:wood/twig/${wood}`,
            `${mod_id}:wood/vertical_support/${wood}`,
            `${mod_id}:wood/horizontal_support/${wood}`,
            `${mod_id}:wood/scribing_table/${wood}`,
            `${mod_id}:wood/sewing_table/${wood}`,
            `${mod_id}:wood/sluice/${wood}`,
            `${mod_id}:wood/tool_rack/${wood}`,
            `${mod_id}:wood/shelf/${wood}`,
            `${mod_id}:wood/loom/${wood}`
        ]

        event.add("minecraft:mineable/axe", axe_mineable)
        event.add("tfc:support_beams", `${mod_id}:wood/vertical_support/${wood}`, `${mod_id}:wood/horizontal_support/${wood}`)
        event.add("tfc:twigs", `${mod_id}:wood/twig/${wood}`)
        event.add("tfc:can_be_snow_piled", `${mod_id}:wood/twig/${wood}`)
    })
})
