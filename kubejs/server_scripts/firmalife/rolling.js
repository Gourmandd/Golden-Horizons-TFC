// requires: firmalife

ServerEvents.recipes(event =>{

    global.FIRMALIFE_METALS.forEach(metal =>{
        rolling(event, `firmalife:metal/ingot/${metal}`, `firmalife:metal/rod/${metal}`, 2, `rod/${metal}`)
    })
    
})