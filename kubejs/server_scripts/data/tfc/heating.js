// to be ported to the mod.

ServerEvents.recipes(event => {

    let datagen = Datagen(event).terraFirmaCraftRecipes()

    const POWDERS = [
        "bismuthinite",
        "cassiterite",
        "garnierite",
        "hematite",
        "limonite",
        "magnetite",
        "malachite",
        "native_copper",
        "tetrahedrite",
        "native_gold",
        "native_silver",
        "sphalerite",
    ]

    // Melting powders
    POWDERS.forEach(ore => {
        datagen.heating(
            null,
            outputOf(IO_TYPE.FLUID, `tfc:metal/${global.ORE_TO_METAL[ore]}`, 5),
            inputOf(IO_TYPE.ITEM, `tfc:powder/${ore}`, 1),
            global.MELTING_POINTS[global.ORE_TO_METAL[ore]]
        )
            .id(`modpack:heating/powder/${ore}`)
            .generate()
    })

    // Melting hanging signs
    global.TOOL_METALS.forEach(metal => {

        if (metal == "wrought_iron") {

            datagen.heating(
                null,
                outputOf(IO_TYPE.FLUID, "tfc:metal/cast_iron", 4),
                inputOf(IO_TYPE.ITEM_TAG, `modpack:hanging_signs/${metal}`, 1),
                global.MELTING_POINTS[metal]
            )
                .id(`modpack:heating/hanging_sign/${metal}`)
                .generate()

        } else {

            datagen.heating(
                null,
                outputOf(IO_TYPE.FLUID, `tfc:metal/${metal}`, 4),
                inputOf(IO_TYPE.ITEM_TAG, `modpack:hanging_signs/${metal}`, 1),
                global.MELTING_POINTS[metal]
            )
                .id(`modpack:heating/hanging_sign/${metal}`)
                .generate()
        }

    })

    let COPPER_ITEMS = [
        { tag: `modpack:copper_shingles`, fluid_amount: 50, id: `modpack:heating/melting/copper_shingles` },
        { tag: `modpack:copper_shingle_stairs`, fluid_amount: 25, id: `modpack:heating/melting/copper_shingle_stairs` },
        { tag: `modpack:copper_shingle_slabs`, fluid_amount: 25, id: `modpack:heating/melting/copper_shingle_slabs` },
        { tag: `modpack:copper_tiles`, fluid_amount: 50, id: `modpack:heating/melting/copper_tiles` },
        { tag: `modpack:copper_tile_stairs`, fluid_amount: 25, id: `modpack:heating/melting/copper_tile_stairs` },
        { tag: `modpack:copper_tile_slabs`, fluid_amount: 25, id: `modpack:heating/melting/copper_tile_slabs` },
        //{ tag: `modpack:cut_copper_roofs`, fluid_amount: 25, id: `modpack:heating/melting/cut_copper_roofs` },
        { tag: `modpack:cut_copper_blocks`, fluid_amount: 50, id: `modpack:heating/melting/cut_copper_blocks` },
        { tag: `modpack:cut_copper_stairs`, fluid_amount: 25, id: `modpack:heating/melting/cut_copper_stairs` },
        { tag: `modpack:cut_copper_slabs`, fluid_amount: 25, id: `modpack:heating/melting/cut_copper_slabs` },
        { tag: `modpack:copper_shutters`, fluid_amount: 50, id: `modpack:heating/melting/copper_shutters` }
    ]

    COPPER_ITEMS.forEach(entry => {
        datagen.heating(
            null,
            outputOf(IO_TYPE.FLUID, `tfc:metal/copper`, entry.fluid_amount),
            inputOf(IO_TYPE.ITEM_TAG, entry.tag, 1),
            global.MELTING_POINTS["copper"]
        )
            .id(entry.id)
            .generate()
    })
})
