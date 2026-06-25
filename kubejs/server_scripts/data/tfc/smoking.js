
ServerEvents.recipes(event => {

    global.TFC_SOIL_TYPES.forEach(type => {
        event.smoking(`tfc:mud_brick/${type}`, `tfc:drying_bricks/${type}`).xp(0).cookingTime(100)
        event.smoking(`tfc:dirt/${type}`, `tfc:mud/${type}`).xp(0).cookingTime(100)
    })

})
