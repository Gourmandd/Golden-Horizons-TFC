//priority: 1

// -------------------------------------------- //
// Generates data related to custom clay types  //
// -------------------------------------------- //



ServerEvents.recipes(event =>{
    function item_heating(fileName, input, output, temp){
        event.recipes.tfc.heating(input, temp)
            .resultItem(output)
            .id(`modpack:heating/${fileName}`)
    }

    function knapping(type, result, count, shape, fileName, slot){
        event.recipes.tfc.knapping(Item.of(result, count) , "tfc:" + type, shape)
            .outsideSlotRequired(slot)
            .id(`modpack:knapping/${type}/${fileName}`)
    }

    global.CUSTOM_CLAY_TYPES.forEach(type =>{

        knapping(type, `kubejs:ceramic/unfired_${type}_chisel_mold`, 1, ["XX XX","XX XX","XX XX","XX XX","XX XX"], `unfired_${type}_chisel_mold`, true)
        knapping(type, `kubejs:ceramic/unfired_${type}_pickaxe_mold`, 1, ["XXXXX","X   X"," XXX ", "XXXXX", "XXXXX"], `unfired_${type}_pickaxe_mold`, true)
        knapping(type, `kubejs:ceramic/unfired_${type}_axe_mold`, 1, ["X XXX","    X","     ","    X","X XXX"], `unfired_${type}_axe_mold`, false)
        knapping(type, `kubejs:ceramic/unfired_${type}_hoe_mold`, 1, ["XXXXX","     ","  XXX", "XXXXX", "XXXXX"], `unfired_${type}_hoe_mold`, true)
        knapping(type, `kubejs:ceramic/unfired_${type}_sword_mold`, 1, ["  XXX","   XX","X   X","XX  X","XXXX "], `unfired_${type}_sword_mold`, false)
        knapping(type, `kubejs:ceramic/unfired_${type}_saw_mold`, 1, ["  XXX","   XX","X   X","X    ","XXX  "], `unfired_${type}_saw_mold`, false)
        knapping(type, `kubejs:ceramic/unfired_${type}_scythe_mold`, 1, ["XXXXX","X    ","    X","  XXX","XXXXX"], `unfired_${type}_scythe_mold`, false)
        knapping(type, `kubejs:ceramic/unfired_${type}_propick_mold`, 1, ["XXXXX","    X"," XXX "," XXXX","XXXXX"], `unfired_${type}_propick_mold`, false)
        knapping(type, `kubejs:ceramic/unfired_${type}_hammer_mold`, 1, ["XXXXX","     ","     ","XX XX","XXXXX"], `unfired_${type}_hammer_mold`, true)
        knapping(type, `kubejs:ceramic/unfired_${type}_javelin_mold`, 1, ["   XX","    X","     ","X   X","XX XX"], `unfired_${type}_javelin_mold`, false)
        knapping(type, `kubejs:ceramic/unfired_${type}_mace_mold`, 1, ["XX XX","X   X","X   X","X   X","XX XX"], `unfired_${type}_mace_mold`, true)
        knapping(type, `kubejs:ceramic/unfired_${type}_knife_mold`, 1, ["XX XX","X  XX","X  XX","X  XX","X  XX"], `unfired_${type}_knife_mold`, true)
        knapping(type, `kubejs:ceramic/unfired_${type}_bell_mold`, 1, ["XXXXX","XX XX","X   X","X   X","X   X"], `unfired_${type}_bell_mold`, true)
        knapping(type, `kubejs:ceramic/unfired_${type}_ingot_mold`, 2, ["XXXXX","X  XX","X  XX","X  XX","XXXXX"], `unfired_${type}_ingot_mold`, true)
        knapping(type, `kubejs:ceramic/unfired_${type}_shovel_mold`, 1, ["X   X","X   X","X   X","X   X","XX XX"], `unfired_${type}_shovel_mold`, true)
        
        //extras
        knapping(type, "caupona:clay_cistern", 1, ["XX XX","X   X","X   X","X   X"," XXX "], `${type}_clay_cistern`, true)
        knapping(type, "caupona:clay_portable_brazier", 1, ["X   X"," XXX ","X   X","X   X"," XXX "], `${type}_clay_portable_brazier`, true)
        knapping(type, "tfc:ceramic/unfired_large_vessel", 1, ["X   X","X   X","X   X","X   X","XXXXX"], `${type}_large_vessel`, true)
        knapping(type, "artisanal:ceramic/unfired_small_pot", 1, [" XX  ","XX   ","X X X","  XXX","  XXX"], `${type}_small_pot`, true)
        knapping(type, "firmalife:oven_top", 1, ["XXXXX","XX XX","X   X","X   X","XXXXX"], `${type}_oven_top`, true)
        knapping(type, "firmalife:oven_bottom", 1, ["XX XX","X   X","X   X","XX XX","XXXXX"], `${type}_oven_bottom`, true)
        knapping(type, "firmalife:oven_chimney", 1, ["XXXXX","XX XX","XX XX","XX XX","XXXXX"], `${type}_oven_chimney`, true)
        knapping(type, "tfc:ceramic/unfired_pan", 1, ["     ","X   X","XXXXX"," XXX ","     "], `${type}_pan`, true)
        knapping(type, "tfc_hammer_time:ceramic/unfired_sledgehammer_head_mold", 1, ["  XXX","    X","X   X","X    ","XXX  "], `${type}_sledgehammer_head_mold`, true)
        knapping(type, "tfc_hammer_time:ceramic/unfired_excavator_head_mold", 1, ["XXXXX","X   X","X   X","X   X","X   X"], `${type}_excavator_head_mold`, true)
        knapping(type, "tfcchannelcasting:unfired_heart_mold", 1, ["X X X","     ","     ","X   X","XX XX"], `${type}_heart_mold`, true)

        //extras
    
        knapping(type, `kubejs:ceramic/unfired_${type}_flower_pot`, 2, [" X X "," XXX ","     "," X X "," XXX "], `unfired_${type}_flower_pot`, false)
        knapping(type, `kubejs:ceramic/unfired_${type}_blowpipe`, 1, [" X X "," X X "," XXX "," XXX "," XXX "], `unfired_${type}_blowpipe`, true)
        knapping(type, `kubejs:ceramic/unfired_${type}_bowl`, 4, ["X   X"," XXX ","     ","X   X"," XXX "], `unfired_${type}_bowl_4`, false)
        knapping(type, `kubejs:ceramic/unfired_${type}_bowl`, 2, ["     ","X   X"," XXX ","     ","     "], `unfired_${type}_bowl_2`, true)
        knapping(type, `kubejs:ceramic/unfired_${type}_pan`, 1, ["     ","X   X","XXXXX"," XXX ","     "], `unfired_${type}_pan`, true)
        knapping(type, `kubejs:ceramic/unfired_${type}_spindle_head`, 1, ["     ","  X  ","XXXXX","  X  ","     "], `unfired_${type}_spindle_head`, true)
        knapping(type, `kubejs:ceramic/unfired_${type}_pot`, 1, ["X   X","X   X","X   X","XXXXX"," XXX "], `unfired_${type}_pot`, false)
        knapping(type, `kubejs:ceramic/unfired_${type}_vessel`, 1, [" XXX ","XXXXX","XXXXX","XXXXX"," XXX "], `unfired_${type}_vessel`, false)
        knapping(type, `kubejs:ceramic/unfired_${type}_jug`, 1, [" X   ","XXXX ","XXX X","XXXX ","XXX  "], `unfired_${type}_jug`, false)
        knapping(type, `kubejs:ceramic/unfired_${type}_brick`, 3, ["XXXXX","     ","XXXXX","     ","XXXXX"], `unfired_${type}_brick`, false)
    
        knapping(type, "kubejs:unfired_shaft", 2, [" X X "," X X "," X X "," X X "," X X "], `${type}_shaft_vertical_2`, true)
        knapping(type, "kubejs:unfired_shaft", 3, ["X X X","X X X","X X X","X X X","X X X"], `${type}_shaft_vertical_3`, false)
    
        knapping(type, "kubejs:unfired_shaft", 2, ["     ","XXXXX","     ","XXXXX","     "], `${type}_shaft_horizontal_2`, true)
        knapping(type, "kubejs:unfired_shaft", 3, ["XXXXX","     ","XXXXX","     ","XXXXX"], `${type}_shaft_horizontal_3`, true)

        event.shaped(`2x kubejs:ceramic/${type}_bricks`, ["XMX", "MXM", "XMX"], {"X": `kubejs:ceramic/${type}_brick`, "M": "tfc:mortar"}).id(`modpack:crafting/${type}/bricks`)
        event.shaped(`8x kubejs:ceramic/${type}_brick_stairs`, ["X  ", "XX ", "XXX"], {"X": `kubejs:ceramic/${type}_bricks`}).id(`modpack:crafting/${type}/brick_stairs`)
        event.shaped(`6x kubejs:ceramic/${type}_brick_slab`, ["XXX"], {"X": `kubejs:ceramic/${type}_bricks`}).id(`modpack:crafting/${type}/brick_slab`)
        event.shaped(`6x kubejs:ceramic/${type}_brick_wall`, ["XXX", "XXX"], {"X": `kubejs:ceramic/${type}_bricks`}).id(`modpack:crafting/${type}/brick_wall`)
        
        if (type == "kaolinite"){
            event.shapeless(Item.of("tfc:kaolin_clay"), `#modpack:clay/${type}_recycling_1`).id(`modpack:crafting/${type}/recycling_1`)
            event.shapeless(Item.of("tfc:kaolin_clay", 5), `#modpack:clay/${type}_recycling_5`).id(`modpack:crafting/${type}/recycling_5`)
        } else {
            event.shapeless(Item.of(`kubejs:clay/${type}_clay_ball`), `#modpack:clay/${type}_recycling_1`).id(`modpack:crafting/${type}/recycling_1`)
            event.shapeless(Item.of(`kubejs:clay/${type}_clay_ball`, 5), `#modpack:clay/${type}_recycling_5`).id(`modpack:crafting/${type}/recycling_5`)
            event.shaped(Item.of(`kubejs:clay/${type}_clay_block`), ["XX", "XX"], {"X": `kubejs:clay/${type}_clay_ball`}).id(`modpack:crafting/${type}/clay_block`)
        }
        
        //makes tfc fired stuff
        item_heating(`heating/clay/${type}/blowpipe`, `kubejs:ceramic/unfired_${type}_blowpipe`, "tfc:ceramic_blowpipe", 1399)
        item_heating(`heating/clay/${type}/flower_pot`, `kubejs:ceramic/unfired_${type}_flower_pot`, "minecraft:flower_pot", 1399)
        item_heating(`heating/clay/${type}/bowl`, `kubejs:ceramic/unfired_${type}_bowl`, "tfc:ceramic/bowl", 1399)
        item_heating(`heating/clay/${type}/pan`, `kubejs:ceramic/unfired_${type}_pan`, "tfc:pan/empty", 1399)
        item_heating(`heating/clay/${type}/spindle_head`, `kubejs:ceramic/unfired_${type}_spindle_head`, "tfc:ceramic/spindle_head", 1399)
        item_heating(`heating/clay/${type}/pot`, `kubejs:ceramic/unfired_${type}_pot`, "tfc:ceramic/pot", 1399)
    
        //molds
        let bladed_tools = ["saw", "sword", "knife", "scythe"]
        bladed_tools.forEach(tool =>{
            item_heating(`heating/clay/${type}/${tool}`, `kubejs:ceramic/unfired_${type}_${tool}_mold`, `tfc:ceramic/${tool}_blade_mold`, 1399)
        })
        let headed_tools = ["pickaxe", "axe", "propick", "shovel", "hoe", "chisel", "hammer", "javelin", "mace"]
        headed_tools.forEach(tool =>{
            item_heating(`heating/clay/${type}/${tool}`, `kubejs:ceramic/unfired_${type}_${tool}_mold`, `tfc:ceramic/${tool}_head_mold`, 1399)
        })
        item_heating(`heating/clay/${type}/bell`, `kubejs:ceramic/unfired_${type}_bell_mold`, `tfc:ceramic/bell_mold`, 1399)
        item_heating(`heating/clay/${type}/ingot` , `kubejs:ceramic/unfired_${type}_ingot_mold`, `tfc:ceramic/ingot_mold`, 1399)
    
        //unique
        item_heating(`heating/clay/${type}/brick`, `kubejs:ceramic/unfired_${type}_brick`, `kubejs:ceramic/${type}_brick`, 1399)
        item_heating(`heating/clay/${type}/vessel`, `kubejs:ceramic/unfired_${type}_vessel`, `kubejs:ceramic/${type}_vessel`, 1399)
        item_heating(`heating/clay/${type}/jug`, `kubejs:ceramic/unfired_${type}_jug`, `kubejs:ceramic/${type}_jug`, 1399)
    })
})



ServerEvents.tags("item", event =>{
    global.CUSTOM_CLAY_TYPES.forEach(type => {
        
        global.TFC_TOOL_TYPES.forEach(tool =>{
            event.add("tfc:unfired_molds", `kubejs:ceramic/unfired_${type}_${tool}_mold`)
            event.add(`modpack:clay/${type}_recycling_5`, `kubejs:ceramic/unfired_${type}_${tool}_mold`)
        })

        event.add("tfc:unfired_vessels", `kubejs:ceramic/unfired_${type}_vessel`)
        event.add("tfc:unfired_molds", [`kubejs:ceramic/unfired_${type}_bell_mold`, `kubejs:ceramic/unfired_${type}_ingot_mold`])
        event.add("tfc:fired_vessels", `kubejs:ceramic/${type}_vessel`)
        event.add("tfc:fluid_item_ingredient_empty_containers", `kubejs:ceramic/${type}_jug`)
    
        event.add(`modpack:clay/${type}_recycling_5`, [
            `kubejs:ceramic/unfired_${type}_vessel`,
            `kubejs:ceramic/unfired_${type}_bell_mold`,
            `kubejs:ceramic/unfired_${type}_vessel`,
            `kubejs:ceramic/unfired_${type}_jug`,
            `kubejs:ceramic/unfired_${type}_pot`,
            `kubejs:ceramic/unfired_${type}_spindle_head`,
            `kubejs:ceramic/unfired_${type}_pan`,
            `kubejs:ceramic/unfired_${type}_blowpipe`
        ])

        event.add(`modpack:clay/${type}_recycling_1`, [
            `kubejs:ceramic/unfired_${type}_brick`,
            `kubejs:ceramic/unfired_${type}_bowl`,
            `kubejs:ceramic/unfired_${type}_flower_pot`,
            `kubejs:ceramic/unfired_${type}_ingot_mold`,
        ])

        event.add("tfc:unfired_pottery", [
            `kubejs:ceramic/unfired_${type}_vessel`,
            `kubejs:ceramic/unfired_${type}_bell_mold`,
            `kubejs:ceramic/unfired_${type}_vessel`,
            `kubejs:ceramic/unfired_${type}_jug`,
            `kubejs:ceramic/unfired_${type}_pot`,
            `kubejs:ceramic/unfired_${type}_spindle_head`,
            `kubejs:ceramic/unfired_${type}_pan`,
            `kubejs:ceramic/unfired_${type}_blowpipe`,
            `kubejs:ceramic/unfired_${type}_brick`,
            `kubejs:ceramic/unfired_${type}_bowl`,
            `kubejs:ceramic/unfired_${type}_flower_pot`,
        ])
    })
})



TFCEvents.data(event =>{
    function basic_item_heat(fileName, item, capacity){
        event.itemHeat(item, capacity, 0 , 0 , "modpack:clay/" + fileName)
    }

    global.CUSTOM_CLAY_TYPES.forEach(type =>{

        basic_item_heat(`${type}_blowpipe`, `kubejs:ceramic/unfired_${type}_blowpipe`, 0.6)
        basic_item_heat(`${type}_flower_pot`, `kubejs:ceramic/unfired_${type}_flower_pot`, 0.6)
        basic_item_heat(`${type}_bowl`, `kubejs:ceramic/unfired_${type}_bowl`, 0.4)
        basic_item_heat(`${type}_pan`, `kubejs:ceramic/unfired_${type}_pan`, 0.6)
        basic_item_heat(`${type}_spindle_head`, `kubejs:ceramic/unfired_${type}_spindle_head`, 0.8)
        basic_item_heat(`${type}_pot`, `kubejs:ceramic/unfired_${type}_pot`, 0.8)
        basic_item_heat(`${type}_brick`, `kubejs:ceramic/unfired_${type}_brick`, 0.4)
        basic_item_heat(`${type}_jug`, `kubejs:ceramic/unfired_${type}_jug`, 0.8)
    })
})