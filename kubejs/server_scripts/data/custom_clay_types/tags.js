// to be ported to the mod.

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
