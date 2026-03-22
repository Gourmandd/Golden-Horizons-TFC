// to be ported to the mod.

ServerEvents.recipes(event => {

    if (Platform.isLoaded("firmalife")) {
        global.TFC_FLOUR_TYPES.forEach(type => {
            event.smoking(`tfc:food/${type}_bread`, `firmalife:food/${type}_dough`).xp(0).cookingTime(100)
            event.smoking(`firmalife:food/${type}_flatbread`, `tfc:food/${type}_dough`).xp(0).cookingTime(100)
        })


        event.smoking("firmalife:food/tofu", "firmalife:food/soy_mixture").xp(0).cookingTime(100)
        event.smoking("firmalife:food/hardtack", "firmalife:food/hardtack_dough").xp(0).cookingTime(100)
    }

    global.TFC_SOIL_TYPES.forEach(type => {
        event.smoking(`tfc:mud_brick/${type}`, `tfc:drying_bricks/${type}`).xp(0).cookingTime(100)
        event.smoking(`tfc:dirt/${type}`, `tfc:mud/${type}`).xp(0).cookingTime(100)
    })

})
