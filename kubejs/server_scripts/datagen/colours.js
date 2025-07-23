// -------------------------------------------- //
// Generates recipes related to coloured items  //
// -------------------------------------------- //

ServerEvents.recipes(event =>{
    
    global.DYE_COLOURS.forEach(colour =>{

        event.recipes.create.mixing(Fluid.of(`tfc:${colour}_dye`, 1000), [Fluid.of("minecraft:water",1000), `minecraft:${colour}_dye`])
            .heatRequirement("heated")
            .id(`modpack:mixing/dye/${colour}`)

        event.shapeless(`chalk:${colour}_chalk`, ["#tfc:glass_batches", `minecraft:${colour}_dye`])
            .id(`chalk:chalk_from_${colour}_dye`)

        event.recipes.create.compacting(`minecraft:${colour}_dye`, Fluid.of(`tfc:${colour}_dye`, 1000))
            .heatRequirement("heated")
            .id(`modpack:compacting/dye/${colour}`)
        
        event.recipes.tfc.barrel_sealed(1000)
            .inputFluid(Fluid.of(`tfc:${colour}_dye`, 25))
            .inputItem("#modpack:unfired_vessels")
            .outputItem(`tfc:ceramic/${colour}_unfired_vessel`)
            .id(`tfc:barrel/dye/${colour}_glazed_vessel`)
        
        event.shapeless(`tfc:ceramic/${colour}_unfired_vessel`, ["#modpack:unfired_vessels", `minecraft:${colour}_dye`])
            .id(`tfc:crafting/ceramic/${colour}_unfired_vessel`)
    })
})