
ServerEvents.recipes(event =>{

    global.KUBEJS_METALS.forEach(metal =>{
        rolling(event, `kubejs:metal/ingot/${metal}`, `kubejs:metal/rod/${metal}`, 2, `rod/${metal}`)
    })
})