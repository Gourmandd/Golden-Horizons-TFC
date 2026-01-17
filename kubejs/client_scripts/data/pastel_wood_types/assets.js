ClientEvents.generateAssets("after_mods", event => {

    let datagen = Datagen(event).blockModel()

    global.PASTEL_WOOD_TYPES.forEach(woodType => {
        datagen.simpleItemModel(`${mod_id}:wood/lumber/${woodType}`, `${mod_id}:item/wood/lumber/${woodType}`)
        datagen.supportBlockModel(`${mod_id}:wood/support/${woodType}`, global.CUSTOM_WOOD_TEXTURES["stripped_log_side"][woodType], global.CUSTOM_WOOD_TEXTURES["stripped_log_top"][woodType])
        datagen.twigBlockModel(`${mod_id}:wood/twig/${woodType}`, global.CUSTOM_WOOD_TEXTURES["log_side"][woodType], global.CUSTOM_WOOD_TEXTURES["log_top"][woodType], `${mod_id}:item/wood/twig/${woodType}`)
        datagen.scribingTableBlockModel(`${mod_id}:wood/scribing_table/${woodType}`, global.CUSTOM_WOOD_TEXTURES["stripped_log_side"][woodType], global.CUSTOM_WOOD_TEXTURES["planks"][woodType])
        datagen.sewingTableBlockModel(`${mod_id}:wood/sewing_table/${woodType}`, global.CUSTOM_WOOD_TEXTURES["stripped_log_side"][woodType], global.CUSTOM_WOOD_TEXTURES["planks"][woodType])
    })
})
