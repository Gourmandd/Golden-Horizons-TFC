
ServerEvents.tags("item", event => {
    global.SPECTRUM_GEMSTONES.forEach(gemstone => {
        event.add("tfc:can_landslide", `spectrum:${gemstone}_powder_block`)
    })
})
