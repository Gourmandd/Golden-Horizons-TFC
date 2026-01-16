//priority: 1

// -------------------------------------------- //
// Generates data related to custom clay types  //
// -------------------------------------------- //



ServerEvents.recipes(event => {

    let datagen = Datagen(event).terraFirmaCraftRecipes()

    function item_heating(fileName, input, output, temp) {

        datagen.heating(
            outputOf(IO_TYPE.ITEM, output, 1),
            null,
            inputOf(IO_TYPE.ITEM, input, 1),
            temp
        )
            .id(`${mod_id}:heating/${fileName}`)
            .generate()
    }

    function knapping(type, result, count, shape, fileName, slot) {

        datagen.knapping(outputOf(IO_TYPE.ITEM, result, count), "tfc:" + type, shape)
            .id(`${mod_id}:knapping/${type}/${fileName}`)
            .outsideSlotRequired(slot)
            .generate()
    }

    global.CUSTOM_CLAY_TYPES.forEach(type => {

        knapping(type, `${mod_id}:ceramic/${type}/unfired_chisel_head_mold`, 1, ["XX XX", "XX XX", "XX XX", "XX XX", "XX XX"], `${type}/unfired_chisel_head_mold`, true)
        knapping(type, `${mod_id}:ceramic/${type}/unfired_pickaxe_head_mold`, 1, ["XXXXX", "X   X", " XXX ", "XXXXX", "XXXXX"], `${type}/unfired_pickaxe_head_mold`, true)
        knapping(type, `${mod_id}:ceramic/${type}/unfired_axe_head_mold`, 1, ["X XXX", "    X", "     ", "    X", "X XXX"], `${type}/unfired_axe_head_mold`, false)
        knapping(type, `${mod_id}:ceramic/${type}/unfired_hoe_head_mold`, 1, ["XXXXX", "     ", "  XXX", "XXXXX", "XXXXX"], `${type}/unfired_hoe_head_mold`, true)
        knapping(type, `${mod_id}:ceramic/${type}/unfired_sword_blade_mold`, 1, ["  XXX", "   XX", "X   X", "XX  X", "XXXX "], `${type}/unfired_sword_blade_mold`, false)
        knapping(type, `${mod_id}:ceramic/${type}/unfired_saw_blade_mold`, 1, ["  XXX", "   XX", "X   X", "X    ", "XXX  "], `${type}/unfired_saw_blade_mold`, false)
        knapping(type, `${mod_id}:ceramic/${type}/unfired_scythe_blade_mold`, 1, ["XXXXX", "X    ", "    X", "  XXX", "XXXXX"], `${type}/unfired_scythe_blade_mold`, false)
        knapping(type, `${mod_id}:ceramic/${type}/unfired_propick_head_mold`, 1, ["XXXXX", "    X", " XXX ", " XXXX", "XXXXX"], `${type}/unfired_propick_head_mold`, false)
        knapping(type, `${mod_id}:ceramic/${type}/unfired_hammer_head_mold`, 1, ["XXXXX", "     ", "     ", "XX XX", "XXXXX"], `${type}/unfired_hammer_head_mold`, true)
        knapping(type, `${mod_id}:ceramic/${type}/unfired_javelin_head_mold`, 1, ["   XX", "    X", "     ", "X   X", "XX XX"], `${type}/unfired_javelin_head_mold`, false)
        knapping(type, `${mod_id}:ceramic/${type}/unfired_mace_head_mold`, 1, ["XX XX", "X   X", "X   X", "X   X", "XX XX"], `${type}/unfired_mace_head_mold`, true)
        knapping(type, `${mod_id}:ceramic/${type}/unfired_knife_blade_mold`, 1, ["XX XX", "X  XX", "X  XX", "X  XX", "X  XX"], `${type}/unfired_knife_blade_mold`, true)
        knapping(type, `${mod_id}:ceramic/${type}/unfired_bell_mold`, 1, ["XXXXX", "XX XX", "X   X", "X   X", "X   X"], `${type}/unfired_bell_mold`, true)
        knapping(type, `${mod_id}:ceramic/${type}/unfired_ingot_mold`, 2, ["XXXXX", "X  XX", "X  XX", "X  XX", "XXXXX"], `${type}/unfired_ingot_mold`, true)
        knapping(type, `${mod_id}:ceramic/${type}/unfired_shovel_head_mold`, 1, ["X   X", "X   X", "X   X", "X   X", "XX XX"], `${type}/unfired_shovel_head_mold`, true)

        //extras
        knapping(type, "caupona:clay_cistern", 1, ["XX XX", "X   X", "X   X", "X   X", " XXX "], `${type}/clay_cistern`, true)
        knapping(type, "caupona:clay_portable_brazier", 1, ["X   X", " XXX ", "X   X", "X   X", " XXX "], `${type}/clay_portable_brazier`, true)
        knapping(type, "tfc:ceramic/unfired_large_vessel", 1, ["X   X", "X   X", "X   X", "X   X", "XXXXX"], `${type}/large_vessel`, true)
        //knapping(type, "artisanal:ceramic/unfired_small_pot", 1, [" XX  ", "XX   ", "X X X", "  XXX", "  XXX"], `${type}/small_pot`, true)
        knapping(type, "firmalife:clay_oven_top", 1, ["XXXXX", "XX XX", "X   X", "X   X", "XXXXX"], `${type}/oven_top`, true)
        knapping(type, "firmalife:clay_oven_bottom", 1, ["XX XX", "X   X", "X   X", "XX XX", "XXXXX"], `${type}/oven_bottom`, true)
        knapping(type, "firmalife:clay_oven_chimney", 1, ["XXXXX", "XX XX", "XX XX", "XX XX", "XXXXX"], `${type}/oven_chimney`, true)
        knapping(type, "tfc:ceramic/unfired_pan", 1, ["     ", "X   X", "XXXXX", " XXX ", "     "], `${type}/pan`, true)
        //knapping(type, "tfc_hammer_time:ceramic/unfired_sledgehammer_head_mold", 1, ["  XXX", "    X", "X   X", "X    ", "XXX  "], `${type}/sledgehammer_head_mold`, true)
        //knapping(type, "tfc_hammer_time:ceramic/unfired_excavator_head_mold", 1, ["XXXXX", "X   X", "X   X", "X   X", "X   X"], `${type}/excavator_head_mold`, true)
        //knapping(type, "tfcchannelcasting:unfired_heart_mold", 1, ["X X X", "     ", "     ", "X   X", "XX XX"], `${type}/heart_mold`, true)

        //extras

        knapping(type, `${mod_id}:ceramic/${type}/unfired_flower_pot`, 2, [" X X ", " XXX ", "     ", " X X ", " XXX "], `${type}/unfired_flower_pot`, false)
        knapping(type, `${mod_id}:ceramic/${type}/unfired_blowpipe`, 1, [" X X ", " X X ", " XXX ", " XXX ", " XXX "], `${type}/unfired_blowpipe`, true)
        knapping(type, `${mod_id}:ceramic/${type}/unfired_bowl`, 4, ["X   X", " XXX ", "     ", "X   X", " XXX "], `${type}/unfired_bowl_4`, false)
        knapping(type, `${mod_id}:ceramic/${type}/unfired_bowl`, 2, ["     ", "X   X", " XXX ", "     ", "     "], `${type}/unfired_bowl_2`, true)
        knapping(type, `${mod_id}:ceramic/${type}/unfired_pan`, 1, ["     ", "X   X", "XXXXX", " XXX ", "     "], `${type}/unfired_pan`, true)
        knapping(type, `${mod_id}:ceramic/${type}/unfired_spindle_head`, 1, ["     ", "  X  ", "XXXXX", "  X  ", "     "], `${type}/unfired_spindle_head`, true)
        knapping(type, `${mod_id}:ceramic/${type}/unfired_pot`, 1, ["X   X", "X   X", "X   X", "XXXXX", " XXX "], `${type}/unfired_pot`, false)
        knapping(type, `${mod_id}:ceramic/${type}/unfired_vessel`, 1, [" XXX ", "XXXXX", "XXXXX", "XXXXX", " XXX "], `${type}/unfired_vessel`, false)
        knapping(type, `${mod_id}:ceramic/${type}/unfired_jug`, 1, [" X   ", "XXXX ", "XXX X", "XXXX ", "XXX  "], `${type}/unfired_jug`, false)
        knapping(type, `${mod_id}:ceramic/${type}/unfired_brick`, 3, ["XXXXX", "     ", "XXXXX", "     ", "XXXXX"], `${type}/unfired_brick`, false)

        knapping(type, `${mod_id}:unfired_shaft`, 2, [" X X ", " X X ", " X X ", " X X ", " X X "], `${type}/shaft_vertical_2`, true)
        knapping(type, `${mod_id}:unfired_shaft`, 3, ["X X X", "X X X", "X X X", "X X X", "X X X"], `${type}/shaft_vertical_3`, false)

        knapping(type, `${mod_id}:unfired_shaft`, 2, ["     ", "XXXXX", "     ", "XXXXX", "     "], `${type}/shaft_horizontal_2`, true)
        knapping(type, `${mod_id}:unfired_shaft`, 3, ["XXXXX", "     ", "XXXXX", "     ", "XXXXX"], `${type}/shaft_horizontal_3`, true)

        event.shaped(`2x ${mod_id}:ceramic/${type}_bricks`, ["XMX", "MXM", "XMX"], { "X": `${mod_id}:ceramic/${type}/brick`, "M": "tfc:mortar" }).id(`${mod_id}:crafting/${type}/bricks`)
        event.shaped(`8x ${mod_id}:ceramic/${type}_brick_stairs`, ["X  ", "XX ", "XXX"], { "X": `${mod_id}:ceramic/${type}_bricks` }).id(`${mod_id}:crafting/${type}/brick_stairs`)
        event.shaped(`6x ${mod_id}:ceramic/${type}_brick_slab`, ["XXX"], { "X": `${mod_id}:ceramic/${type}_bricks` }).id(`${mod_id}:crafting/${type}/brick_slab`)
        event.shaped(`6x ${mod_id}:ceramic/${type}_brick_wall`, ["XXX", "XXX"], { "X": `${mod_id}:ceramic/${type}_bricks` }).id(`${mod_id}:crafting/${type}/brick_wall`)

        if (type == "kaolinite") {

            event.shapeless(Item.of("tfc:kaolin_clay"), `#${mod_id}:clay/${type}/recycling_1`).id(`${mod_id}:crafting/${type}/recycling_1`)
            event.shapeless(Item.of("tfc:kaolin_clay", 4), `#${mod_id}:clay/${type}/recycling_5`).id(`${mod_id}:crafting/${type}/recycling_5`)
        } else {

            event.shapeless(Item.of(`${mod_id}:ceramic/${type}/clay_ball`), `#${mod_id}:clay/${type}/recycling_1`).id(`${mod_id}:crafting/${type}/recycling_1`)
            event.shapeless(Item.of(`${mod_id}:ceramic/${type}/clay_ball`, 4), `#${mod_id}:clay/${type}/recycling_5`).id(`${mod_id}:crafting/${type}/recycling_5`)
            event.shaped(Item.of(`${mod_id}:clay/${type}_clay_block`), ["XX", "XX"], { "X": `${mod_id}:ceramic/${type}/clay_ball` }).id(`${mod_id}:crafting/${type}/clay_block`)
        }

        //makes tfc fired stuff
        item_heating(`heating/clay/${type}/blowpipe`, `${mod_id}:ceramic/${type}/unfired_blowpipe`, "tfc:ceramic_blowpipe", 1399)
        item_heating(`heating/clay/${type}/flower_pot`, `${mod_id}:ceramic/${type}/unfired_flower_pot`, "minecraft:flower_pot", 1399)
        item_heating(`heating/clay/${type}/bowl`, `${mod_id}:ceramic/${type}/unfired_bowl`, "tfc:ceramic/bowl", 1399)
        item_heating(`heating/clay/${type}/pan`, `${mod_id}:ceramic/${type}/unfired_pan`, "tfc:pan/empty", 1399)
        item_heating(`heating/clay/${type}/spindle_head`, `${mod_id}:ceramic/${type}/unfired_spindle_head`, "tfc:ceramic/spindle_head", 1399)
        item_heating(`heating/clay/${type}/pot`, `${mod_id}:ceramic/${type}/unfired_pot`, "tfc:ceramic/pot", 1399)

        //molds
        let bladed_tools = ["saw", "sword", "knife", "scythe"]
        bladed_tools.forEach(tool => {
            item_heating(`heating/clay/${type}/${tool}_blade`, `${mod_id}:ceramic/${type}/unfired_${tool}_blade_mold`, `tfc:ceramic/${tool}_blade_mold`, 1399)
        })
        let headed_tools = ["pickaxe", "axe", "propick", "shovel", "hoe", "chisel", "hammer", "javelin", "mace"]
        headed_tools.forEach(tool => {
            item_heating(`heating/clay/${type}/${tool}_head`, `${mod_id}:ceramic/${type}/unfired_${tool}_head_mold`, `tfc:ceramic/${tool}_head_mold`, 1399)
        })
        item_heating(`heating/clay/${type}/bell`, `${mod_id}:ceramic/${type}/unfired_bell_mold`, `tfc:ceramic/bell_mold`, 1399)
        item_heating(`heating/clay/${type}/ingot`, `${mod_id}:ceramic/${type}/unfired_ingot_mold`, `tfc:ceramic/ingot_mold`, 1399)

        //unique
        item_heating(`heating/clay/${type}/brick`, `${mod_id}:ceramic/${type}/unfired_brick`, `${mod_id}:ceramic/${type}/brick`, 1399)
        item_heating(`heating/clay/${type}/vessel`, `${mod_id}:ceramic/${type}/unfired_vessel`, `${mod_id}:ceramic/${type}/vessel`, 1399)
        item_heating(`heating/clay/${type}/jug`, `${mod_id}:ceramic/${type}/unfired_jug`, `${mod_id}:ceramic/${type}/jug`, 1399)

    })
})
