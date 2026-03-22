// requires: afc
// to be ported to the mod. If still needed

ServerEvents.tags("item", event => {

    // fixing a AFC bug
    global.AFC_WOOD_TYPES.forEach(type => {
        event.add("tfc:support_beams", `afc:wood/support/${type}`)
    })
})
