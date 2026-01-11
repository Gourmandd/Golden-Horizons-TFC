ServerEvents.tags("item", event => {
    global.DYE_COLOURS.forEach(colour => {
        event.add(`${mod_id}:unfired_vessels`, `tfc:ceramic/${colour}_unfired_vessel`)
    })
})
