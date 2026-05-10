StartupEvents.registry('fluid', event => {

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

    event.create(`${id}:garum`, 'thin')
        .displayName('Garum')
        .tint(0x321C0B)
        .noBlock()
})
