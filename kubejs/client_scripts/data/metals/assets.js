// ---------------------------------- //
// Generates assets for custom metals //
// ---------------------------------- //

ClientEvents.generateAssets("before_mods", event => {

    function simpleItemModel(location, texture) {

        event.itemModel(location, model => {
            model.parent("item/generated")
            model.texture("layer0", texture)
        })
    }

    function blockItemModel(location, blockModel) {

        event.itemModel(location, model => {
            model.parent(blockModel)
        })
    }

    function simpleBlockModel(location, texture) {

        event.blockModel(location, model => {
            model.parent("block/cube_all")
            model.texture("all", texture)
        })
    }

    function stairBlockModel(location, texture) {

        event.blockModel(`${location}_stairs`, model => {
            model.parent("minecraft:block/stairs")
            model.texture("bottom", texture)
            model.texture("top", texture)
            model.texture("side", texture)
        })

        event.blockModel(`${location}_stairs_inner`, model => {
            model.parent("minecraft:block/inner_stairs")
            model.texture("bottom", texture)
            model.texture("top", texture)
            model.texture("side", texture)
        })

        event.blockModel(`${location}_stairs_outer`, model => {
            model.parent("minecraft:block/outer_stairs")
            model.texture("bottom", texture)
            model.texture("top", texture)
            model.texture("side", texture)
        })
    }

    function slabBlockModel(location, texture) {

        event.blockModel(`${location}_slab`, model => {
            model.parent("minecraft:block/slab")
            model.texture("bottom", texture)
            model.texture("top", texture)
            model.texture("side", texture)
        })

        event.blockModel(`${location}_slab_double`, model => {
            model.parent("minecraft:block/cube_all")
            model.texture("all", texture)
        })

        event.blockModel(`${location}_slab_top`, model => {
            model.parent("minecraft:block/slab_top")
            model.texture("bottom", texture)
            model.texture("top", texture)
            model.texture("side", texture)
        })
    }

    function simpleBlockstate(location, model) {
        event.blockState(location, state => {
            state.simpleVariant("", model)
        })
    }

    function slabBlockstate(location, model) {
        event.blockState(location, state => {
            state.simpleVariant("type=bottom", `${model}`)
            state.simpleVariant("type=double", `${model}_double`)
            state.simpleVariant("type=top", `${model}_top`)
        })
    }

    function stairsBlockstate(location, model) {

        let variants = stairVariants(`${model}_stairs`, `${model}_stairs_inner`, `${model}_stairs_outer`)

        event.json(location, { "variants": variants })
    }


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
        simpleItemModel(`modpack:metal/ingot/${metal}`, `modpack:item/metal/ingot/${metal}`)
        simpleItemModel(`modpack:metal/double_ingot/${metal}`, `modpack:item/metal/double_ingot/${metal}`)
        simpleItemModel(`modpack:metal/sheet/${metal}`, `modpack:item/metal/sheet/${metal}`)
        simpleItemModel(`modpack:metal/double_sheet/${metal}`, `modpack:item/metal/double_sheet/${metal}`)
        simpleItemModel(`modpack:metal/rod/${metal}`, `modpack:item/metal/rod/${metal}`)
        blockItemModel(`modpack:metal/block/${metal}`, `modpack:block/metal/block/${metal}`)
        blockItemModel(`modpack:metal/block/${metal}_slab`, `modpack:block/metal/block/${metal}_slab`)
        blockItemModel(`modpack:metal/block/${metal}_stairs`, `modpack:block/metal/block/${metal}_stairs`)

        simpleBlockModel(`modpack:metal/block/${metal}`, metal_texture)
        slabBlockModel(`modpack:metal/block/${metal}`, metal_texture)
        stairBlockModel(`modpack:metal/block/${metal}`, metal_texture)

        // blockstates
        simpleBlockstate(`modpack:metal/block/${metal}`, `modpack:block/metal/block/${metal}`)
        slabBlockstate(`modpack:metal/block/${metal}_slab`, `modpack:block/metal/block/${metal}_slab`)
        stairsBlockstate(`modpack:metal/block/${metal}_stairs`, `modpack:block/metal/block/${metal}`)
    })
})
