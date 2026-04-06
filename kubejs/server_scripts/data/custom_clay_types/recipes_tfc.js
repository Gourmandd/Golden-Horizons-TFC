//priority: 1
// to be ported to the mod.

// -------------------------------------------- //
// Generates data related to custom clay types  //
// -------------------------------------------- //



ServerEvents.recipes(event => {

    let datagen = Datagen(event).terraFirmaCraftRecipes()

    function knapping(type, result, count, shape, fileName, slot) {

        datagen.knapping(outputOf(IO_TYPE.ITEM, result, count), "tfc:" + type, shape)
            .id(`${mod_id}:knapping/${type}/${fileName}`)
            .outsideSlotRequired(slot)
            .generate()
    }

    global.CUSTOM_CLAY_TYPES.forEach(type => {

        //extras
        knapping(type, "caupona:clay_cistern", 1, ["XX XX", "X   X", "X   X", "X   X", " XXX "], `${type}/clay_cistern`, true)
        knapping(type, "caupona:clay_portable_brazier", 1, ["X   X", " XXX ", "X   X", "X   X", " XXX "], `${type}/clay_portable_brazier`, true)
        knapping(type, "tfc:ceramic/unfired_large_vessel", 1, ["X   X", "X   X", "X   X", "X   X", "XXXXX"], `${type}/large_vessel`, true)
        //knapping(type, "artisanal:ceramic/unfired_small_pot", 1, [" XX  ", "XX   ", "X X X", "  XXX", "  XXX"], `${type}/small_pot`, true)
        knapping(type, "firmalife:clay_oven_top", 1, ["XXXXX", "XX XX", "X   X", "X   X", "XXXXX"], `${type}/oven_top`, true)
        knapping(type, "firmalife:clay_oven_bottom", 1, ["XX XX", "X   X", "X   X", "XX XX", "XXXXX"], `${type}/oven_bottom`, true)
        knapping(type, "firmalife:clay_oven_chimney", 1, ["XXXXX", "XX XX", "XX XX", "XX XX", "XXXXX"], `${type}/oven_chimney`, true)

        //knapping(type, "tfc_hammer_time:ceramic/unfired_sledgehammer_head_mold", 1, ["  XXX", "    X", "X   X", "X    ", "XXX  "], `${type}/sledgehammer_head_mold`, true)
        //knapping(type, "tfc_hammer_time:ceramic/unfired_excavator_head_mold", 1, ["XXXXX", "X   X", "X   X", "X   X", "X   X"], `${type}/excavator_head_mold`, true)

        knapping(type, `${mod_id}:unfired_shaft`, 2, [" X X ", " X X ", " X X ", " X X ", " X X "], `${type}/shaft_vertical_2`, true)
        knapping(type, `${mod_id}:unfired_shaft`, 3, ["X X X", "X X X", "X X X", "X X X", "X X X"], `${type}/shaft_vertical_3`, false)

        knapping(type, `${mod_id}:unfired_shaft`, 2, ["     ", "XXXXX", "     ", "XXXXX", "     "], `${type}/shaft_horizontal_2`, true)
        knapping(type, `${mod_id}:unfired_shaft`, 3, ["XXXXX", "     ", "XXXXX", "     ", "XXXXX"], `${type}/shaft_horizontal_3`, true)
    })
})
