
ServerEvents.recipes(event => {

    if (Platform.isLoaded("firmalife")){
        global.TFC_FLOUR_TYPES.forEach(type => {
            event.smoking(`tfc:food/${type}_bread`, `firmalife:food/${type}_dough`, 0, 100, "food")
            event.smoking(`firmalife:food/${type}_flatbread`, `tfc:food/${type}_dough`, 0, 100, "food")
        })

        event.smoking("firmalife:food/tofu", "firmalife:food/soy_mixture", 0, 100, "food")
        event.smoking("firmalife:food/hardtack", "firmalife:food/hardtack_dough", 0, 100, "food")
    }

    global.TFC_SOIL_TYPES.forEach(type => {
        event.smoking(`tfc:mud_brick/${type}`, `tfc:drying_bricks/${type}`, 0, 100, "food")
        event.smoking(`tfc:dirt/${type}`, `tfc:mud/${type}`, 0, 100, "food")
    })

})