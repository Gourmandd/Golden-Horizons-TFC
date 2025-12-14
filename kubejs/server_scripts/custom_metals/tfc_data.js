// requires: kubejs_tfc

TFCEvents.data(event => {

    global.KUBEJS_METALS.forEach(metal => {
        event.metal(global.METAL_FLUIDS[metal], global.MELTING_POINTS[metal], 0.02143,
            `${mod_id}:metal/ingot/${metal}`, `${mod_id}:metal/double_ingot/${metal}`, `${mod_id}:metal/sheet/${metal}`, 2, `${mod_id}:${metal}`
        )
    })
})
