// ---------------------------------- //
// Generates assets for custom metals //
// ---------------------------------- //

ClientEvents.generateAssets("before_mods", event => {

    let datagen = Datagen(event).blockModel()

    global.KUBEJS_METALS.forEach(metal => {

        let metal_texture = `modpack:block/metal/full/${metal}`

        switch (metal) {
            case "electrum":
                metal_texture = "createaddition:block/electrum_block/block"
                break
            case "nethersteel":
                //metal_texture = "createbigcannons:block/nethersteel_block"
                break
            case "cast_iron_alloy":
                //metal_texture = "createbigcannons:block/cast_iron_block"
                break
        }

        // models

        datagen.simpleItemModel(`modpack:metal/ingot/${metal}`, `modpack:item/metal/ingot/${metal}`)
        datagen.simpleItemModel(`modpack:metal/double_ingot/${metal}`, `modpack:item/metal/double_ingot/${metal}`)
        datagen.simpleItemModel(`modpack:metal/sheet/${metal}`, `modpack:item/metal/sheet/${metal}`)
        datagen.simpleItemModel(`modpack:metal/double_sheet/${metal}`, `modpack:item/metal/double_sheet/${metal}`)
        datagen.simpleItemModel(`modpack:metal/rod/${metal}`, `modpack:item/metal/rod/${metal}`)


        datagen.blockItemModel(`modpack:metal/block/${metal}`, `modpack:block/metal/block/${metal}`)
        datagen.blockItemModel(`modpack:metal/block/${metal}_slab`, `modpack:block/metal/block/${metal}_slab`)
        datagen.blockItemModel(`modpack:metal/block/${metal}_stairs`, `modpack:block/metal/block/${metal}_stairs`)

        datagen.simpleBlockModel(`modpack:metal/block/${metal}`, metal_texture)
        datagen.simpleSlabModel(`modpack:metal/block/${metal}_slab`, metal_texture)
        datagen.simpleStairModel(`modpack:metal/block/${metal}_stairs`, metal_texture)
    })
})
