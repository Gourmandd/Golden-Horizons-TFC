//priority: 10

function getBlockModel(blockId) {
    return blockId.replace(":", ":block/")
}

const BlockModelDatagen = function () {

    let directions = ["north", "west", "east", "south"]

    this.simpleBlockModel = function (blockLocation, texture) {

        let blockModel = getBlockModel(blockLocation)

        event.blockState(blockLocation, state => {
            state.simpleVariant("", blockModel)
        })

        event.blockModel(blockLocation, model => {
            model.parent("block/cube_all")
            model.texture("all", texture)
        })

        event.itemModel(blockLocation, model => {
            model.parent(blockModel)
        })
    }

    this.simpleSlabModel = function (blockLocation, texture) {

        let blockModel = getBlockModel(blockLocation)

        event.blockState(blockLocation, state => {
            state.simpleVariant("type=bottom", `${blockModel}_bottom`)
            state.simpleVariant("type=double", `${blockModel}_double`)
            state.simpleVariant("type=top", `${blockModel}_top`)
        })

        event.blockModel(`${blockLocation}_bottom`, model => {
            model.parent("minecraft:block/slab")
            model.texture("bottom", texture)
            model.texture("top", texture)
            model.texture("side", texture)
        })

        event.blockModel(`${blockLocation}_double`, model => {
            model.parent("minecraft:block/cube_all")
            model.texture("all", texture)
        })

        event.blockModel(`${blockLocation}_top`, model => {
            model.parent("minecraft:block/slab_top")
            model.texture("bottom", texture)
            model.texture("top", texture)
            model.texture("side", texture)
        })

        event.itemModel(blockLocation, model => {
            model.parent(`${blockModel}_bottom`)
        })
    }

    this.simpleStairModel = function (blockLocation, texture) {

        let blockModel = getBlockModel(blockLocation)
        let variants = stairVariants(`${blockModel}`, `${blockModel}_inner`, `${blockModel}_outer`)

        event.json(blockLocation.replace(":", ":blockstates/"), { "variants": variants })

        event.blockModel(`${blockLocation}`, model => {
            model.parent("minecraft:block/stairs")
            model.texture("bottom", texture)
            model.texture("top", texture)
            model.texture("side", texture)
        })

        event.blockModel(`${blockLocation}_inner`, model => {
            model.parent("minecraft:block/inner_stairs")
            model.texture("bottom", texture)
            model.texture("top", texture)
            model.texture("side", texture)
        })

        event.blockModel(`${blockLocation}_outer`, model => {
            model.parent("minecraft:block/outer_stairs")
            model.texture("bottom", texture)
            model.texture("top", texture)
            model.texture("side", texture)
        })

        event.itemModel(blockLocation, model => {
            model.parent(blockModel)
        })
    }

    this.simpleWallModel = function (blockLocation, texture) {

        let blockModel = getBlockModel(blockLocation)

        event.json(blockLocation.replace(":", ":blockstates/"), wallMultipart(blockModel))

        event.blockModel(`${blockLocation}_post`, model => {
            model.parent("minecraft:block/template_wall_post")
            model.texture("wall", texture)
        })

        event.blockModel(`${blockLocation}_side`, model => {
            model.parent("minecraft:block/template_wall_side")
            model.texture("wall", texture)
        })

        event.blockModel(`${blockLocation}_side_tall`, model => {
            model.parent("minecraft:block/template_wall_side_tall")
            model.texture("wall", texture)
        })

        event.itemModel(blockLocation, model => {
            model.parent("minecraft:block/wall_inventory")
            model.texture("wall", texture)
        })
    }

    this.rockSpikeModel = function (blockLocation, texture) {

        let blockModel = getBlockModel(blockLocation)

        event.blockState(blockLocation, state => {
            state.simpleVariant("part=base", `${blockModel}_base`)
            state.simpleVariant("part=middle", `${blockModel}_middle`)
            state.simpleVariant("part=tip", `${blockModel}_tip`)
        })

        event.blockModel(`${blockLocation}_base`, model => {
            model.parent("tfc:block/rock/spike_base")
            model.texture("texture", texture)
            model.texture("particle", texture)
        })

        event.blockModel(`${blockLocation}_middle`, model => {
            model.parent("tfc:block/rock/spike_middle")
            model.texture("texture", texture)
            model.texture("particle", texture)
        })

        event.blockModel(`${blockLocation}_tip`, model => {
            model.parent("tfc:block/rock/spike_tip")
            model.texture("texture", texture)
            model.texture("particle", texture)
        })

        event.itemModel(blockLocation, model => {
            model.parent(`${blockModel}_base`)
            model.texture("layer0", texture)
        })
    }

    this.aqueductModel = function (blockLocation, texture) {

        let blockModel = getBlockModel(blockLocation)

        event.json(blockLocation.replace(":", ":blockstates/"), aqueductMultipart(blockModel))

        event.blockModel(`${blockLocation}/base`, model => {
            model.parent("tfc:block/aqueduct/base")
            model.texture("texture", texture)
            model.texture("particle", texture)
        })

        directions.forEach(direction => {
            event.blockModel(`${blockLocation}/${direction}`, model => {
                model.parent(`tfc:block/aqueduct/${direction}`)
                model.texture("texture", texture)
                model.texture("particle", texture)
            })
        })

        event.itemModel(blockLocation, model => {
            model.parent(`${blockModel}/base`)
        })
    }

    this.looseRockModel = function (blockLocation, blockTexture, itemTexture, rockCategory) {

        let blockModel = getBlockModel(blockLocation)

        event.json(blockLocation.replace(":", ":blockstates/"), { "variants": looseRockVariants(blockModel) })

        event.blockModel(`${blockLocation}_1`, model => {
            model.parent(`tfc:block/rock/loose_${rockCategory}_1`)
            model.texture("texture", blockTexture)
        })
        event.blockModel(`${blockLocation}_2`, model => {
            model.parent(`tfc:block/rock/loose_${rockCategory}_2`)
            model.texture("texture", blockTexture)
        })
        event.blockModel(`${blockLocation}_3`, model => {
            model.parent(`tfc:block/rock/loose_${rockCategory}_3`)
            model.texture("texture", blockTexture)
        })

        if (itemTexture != null) {
            if (blockLocation.includes("mossy")) {
                event.itemModel(blockLocation, model => {
                    model.parent("minecraft:item/generated")
                    model.texture("layer0", itemTexture)
                    model.texture("layer1", `tfc:item/loose_rock/moss_${rockCategory.replace("sedimentary", "sedementary")}`)
                })
            } else {
                event.itemModel(blockLocation, model => {
                    model.parent("minecraft:item/generated")
                    model.texture("layer0", itemTexture)
                })
            }
        }
    }

    return this
}
