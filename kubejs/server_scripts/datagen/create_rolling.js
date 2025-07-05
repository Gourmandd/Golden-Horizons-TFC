
ServerEvents.recipes(event =>{

    global.TFC_METALS.forEach(metal =>{
        rolling(event, `tfc:metal/ingot/${metal}`, `tfc:metal/rod/${metal}`, 2, `rod/${metal}`)
    })

    global.FIRMALIFE_METALS.forEach(metal =>{
        rolling(event, `firmalife:metal/ingot/${metal}`, `firmalife:metal/rod/${metal}`, 2, `rod/${metal}`)
    })

    global.KUBEJS_METALS.forEach(metal =>{
        rolling(event, `kubejs:metal/ingot/${metal}`, `kubejs:metal/rod/${metal}`, 2, `rod/${metal}`)
    })
})