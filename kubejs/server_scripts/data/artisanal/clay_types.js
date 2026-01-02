//priority: 1
// requires: kubejs_tfc
// requires: artisanal

// -------------------------------------------- //
// Generates data related to custom clay types  //
// -------------------------------------------- //


ServerEvents.recipes(event =>{

    global.CUSTOM_CLAY_TYPES.forEach(type =>{

        if (type == "kaolinite"){
            event.recipes.tfc.damage_inputs_shapeless_crafting(
                event.recipes.shapeless(
                    `kubejs:ceramic/unfired_kaolinite_brick`, [`#artisanal:brick_molds`, Item.of("tfc:kaolin_clay"), Item.of("tfc:kaolin_clay")]
                )
            ).id(`modpack:crafting/shapeless/brick_molds/kaolinite_bricks`)

        } else {
            event.recipes.tfc.damage_inputs_shapeless_crafting(
                event.recipes.shapeless(
                    `kubejs:ceramic/unfired_${type}_brick`, [`#artisanal:brick_molds`, Item.of(`kubejs:clay/${type}_clay_ball`), Item.of(`kubejs:clay/${type}_clay_ball`)]
                )
            ).id(`modpack:crafting/shapeless/brick_molds/${type}_bricks`)
        }
    })
})