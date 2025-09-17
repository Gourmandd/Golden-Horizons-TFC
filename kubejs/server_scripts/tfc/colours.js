// -------------------------------------------- //
// Generates recipes related to coloured items  //
// -------------------------------------------- //

ServerEvents.recipes(event =>{
    
    global.DYE_COLOURS.forEach(colour =>{

        event.shapeless(`chalk:${colour}_chalk`, ["#tfc:glass_batches", `minecraft:${colour}_dye`])
            .id(`chalk:chalk_from_${colour}_dye`)
        
        event.shapeless(`tfc:ceramic/${colour}_unfired_vessel`, ["#modpack:unfired_vessels", `minecraft:${colour}_dye`])
            .id(`tfc:crafting/ceramic/${colour}_unfired_vessel`)
    })
})