// ---------------------------------------------------------- //
// Generates recipes related to create cutting using the saw  //
// ---------------------------------------------------------- //



ServerEvents.recipes(event =>{
    
    let datagen = Datagen(event).recipe()
    
    global.TFC_SOIL_TYPES.forEach(type =>{

        datagen.createFilling(
            outputOf(IO_TYPE.ITEM, `tfc:grass/${type}`, 1, 1), 
            inputOf(IO_TYPE.ITEM, `tfc:dirt/${type}`, 1), 
            inputOf(IO_TYPE.FLUID, "minecraft:water", 500)
        ).id(`modpack:filling/mud/${type}`).generate()
    })
})