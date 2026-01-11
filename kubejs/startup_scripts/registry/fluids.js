StartupEvents.registry('fluid', event => {

    global.DYE_COLOURS.forEach(colour => {
        event.create(`${id}:glass/${colour}`, 'thick')
            .tint(global.COLOUR_TO_HEX[colour])
            .noBucket()
            .noBlock()
            .tag('tfc:molten_metals')
            .tag(`${id}:molten_glass`)
    })

    event.create(`${id}:glass/clear`, 'thick')
        .tint(0xD4FBFB)
        .noBucket()
        .noBlock()
        .tag('tfc:molten_metals')
        .tag(`${id}:molten_glass`)

    event.create(`${id}:electrum`, 'thick')
        .displayName('Electrum')
        .tint(0xFFF10F)
        .noBucket()
        .noBlock()
        .tag('tfc:molten_metals')

    event.create(`${id}:aluminium`, 'thick')
        .displayName('Aluminium')
        .tint(0xCDD6DA)
        .noBucket()
        .noBlock()
        .tag('tfc:molten_metals')

    event.create(`${id}:shale_clay_slurry`, 'thin')
        .displayName('Shale Clay Slurry')
        .tint(0x4E4664)
        .noBucket()
        .noBlock()

    event.create(`${id}:filtered_shale_clay_slurry`, 'thin')
        .displayName('Filtered Shale Clay Slurry')
        .tint(0x746D89)
        .noBucket()
        .noBlock()

    event.create(`${id}:boiled_water`, 'thin')
        .displayName('Boiled Water')
        .noBlock()

    event.create(`${id}:brew`, 'thin')
        .displayName('Brew')
        .noBlock().noBucket()

    event.create(`${id}:garum`, 'thin')
        .displayName('Garum')
        .tint(0x321C0B)
        .noBlock()

    // awful workaround for the time being
    if (!Platform.isLoaded("createbigcannons")) {
        event.create(`createbigcannons:molten_nethersteel`, 'thick')
            .displayName('Nethersteel')
            .tint(0xCDD6DA)
            .noBucket()
            .noBlock()
            .tag('tfc:molten_metals')

        event.create(`createbigcannons:molten_cast_iron`, 'thick')
            .displayName('Cast Iron Alloy')
            .tint(0xCDD6DA)
            .noBucket()
            .noBlock()
            .tag('tfc:molten_metals')

        event.create(`createbigcannons:molten_bronze`, 'thick')
            .displayName('Aluminium Bronze')
            .tint(0xCDD6DA)
            .noBucket()
            .noBlock()
            .tag('tfc:molten_metals')

        event.create(`createbigcannons:molten_steel`, 'thick')
            .displayName('Hardened Steel')
            .tint(0xCDD6DA)
            .noBucket()
            .noBlock()
            .tag('tfc:molten_metals')
    }
})
