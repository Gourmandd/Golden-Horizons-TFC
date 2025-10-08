StartupEvents.registry('fluid', event => {

    global.DYE_COLOURS.forEach(colour => {
        event.create(`glass/${colour}`, 'thick')
            .displayName(`Molten ${nameProcessing(colour)} Glass`)
            .tint(global.COLOUR_TO_HEX[colour])
            .noBucket()
            .noBlock()
            .tag('tfc:molten_metals')
            .tag('kubejs:molten_glass')
    })

    event.create('glass/clear', 'thick')
        .displayName('Molten Clear Glass')
        .tint(0xD4FBFB)
        .noBucket()
        .noBlock()
        .tag('tfc:molten_metals')
        .tag('kubejs:molten_glass')
    
    event.create('electrum', 'thick')
        .displayName('Electrum')
        .tint(0xFFF10F)
        .noBucket()
        .noBlock()
        .tag('tfc:molten_metals')
    
    event.create('aluminium', 'thick')
        .displayName('Aluminium')
        .tint(0xCDD6DA)
        .noBucket()
        .noBlock()
        .tag('tfc:molten_metals')

    event.create('shale_clay_slurry', 'thin')
        .displayName('Shale Clay Slurry')
        .tint(0x4E4664)
        .noBucket()
        .noBlock()

    event.create('filtered_shale_clay_slurry', 'thin')
        .displayName('Filtered Shale Clay Slurry')
        .tint(0x746D89)
        .noBucket()
        .noBlock()

    event.create('boiled_water', 'thin')
        .displayName('Boiled Water')
        .noBlock()
    
    event.create('brew', 'thin')
        .displayName('Brew')
        .noBlock().noBucket()
    
    event.create('garum', 'thin')
        .displayName('Garum')
        .tint(0x321C0B)
        .noBlock()
})