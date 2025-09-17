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