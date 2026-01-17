//priority: 10

function getBlockModel(blockId) {
    return blockId.replace(":", ":block/")
}

const BlockModelDatagen = function () {

    let directions = ["north", "west", "east", "south"]

    this.simpleItemModel = function (itemLocation, texture) {
        event.itemModel(itemLocation, model => {
            model.parent("item/generated")
            model.texture("layer0", texture)
        })
    }

    this.blockItemModel = function (itemLocation, blockModel) {
        event.itemModel(itemLocation, model => {
            model.parent(blockModel)
        })
    }

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

    this.supportBlockModel = function (blockLocation, textureMain, textureTop) {
        // the expected input is the item id, eg: tfc:wood/support/acacia
        // the horizontal and vertical block ids are inferred so that this function can stay simpler, and that two functions or one more complicated function called twice arnt needed.

        let blockModel = getBlockModel(blockLocation)

        let verticalBlockLocation = blockLocation.replace("support", "vertical_support")
        let horizontalBlockLocation = blockLocation.replace("support", "horizontal_support")

        //strange workaround, doesnt want to work otherwise, this is why im considering java datagen.
        let location = blockModel.replace("block", "models/block")
        event.json(`${location}_connection`, {
            "parent": "tfc:block/wood/support/connection_vex",
            "textures": {
                "texture": textureMain,
                "top": textureTop
            }
        })

        event.json(`${location}_inventory`, {
            "parent": "tfc:block/wood/support/inventory_vex",
            "textures": {
                "texture": textureMain,
                "vertical": textureMain,
                "horizontal": textureMain,
                "top": textureTop
            }
        })

        event.json(`${location}_vertical`, {
            "parent": "tfc:block/wood/support/vertical_vex",
            "textures": {
                "texture": textureMain,
                "top": textureTop
            }
        })

        event.json(`${location}_horizontal`, {
            "parent": "tfc:block/wood/support/horizontal_vex",
            "textures": {
                "texture": textureMain,
                "top": textureTop
            }
        })

        event.json(location.replace("block", "item"), {
            "parent": `${blockModel}_inventory`,
        })

        event.json(verticalBlockLocation.replace(":", ":blockstates/"), verticalSupportMultipart(blockModel))
        event.json(horizontalBlockLocation.replace(":", ":blockstates/"), horizontalSupportMultipart(blockModel))

    }

    this.twigBlockModel = function (blockLocation, textureMain, textureTop, itemTexture) {

        let blockModel = getBlockModel(blockLocation)
        let rotatedModel = blockModel.replace("twig", "twig/45")

        event.json(blockLocation.replace(":", ":blockstates/"), twigBlockstate(blockModel, rotatedModel))

        event.blockModel(`${blockLocation}`, model => {
            model.parent("tfc:block/groundcover/twig")
            model.texture("side", textureMain)
            model.texture("top", textureTop)
            model.texture("particle", textureMain)
        })

        event.blockModel(`${blockLocation.replace("twig", "twig/45")}`, model => {
            model.parent("tfc:block/groundcover/twig_45")
            model.texture("side", textureMain)
            model.texture("top", textureTop)
            model.texture("particle", textureMain)
        })

        event.itemModel(blockLocation, model => {
            model.parent("item/generated")
            model.texture("layer0", itemTexture)
        })
    }

    this.scribingTableBlockModel = function (blockLocation, textureLog, texturePlank) {

        let blockModel = getBlockModel(blockLocation)

        event.json(blockLocation.replace(":", ":blockstates/"), {
            "variants": {
                "facing=east": {
                    "model": blockModel,
                    "y": 90
                },
                "facing=north": {
                    "model": blockModel
                },
                "facing=south": {
                    "model": blockModel,
                    "y": 180
                },
                "facing=west": {
                    "model": blockModel,
                    "y": 270
                }
            }
        })

        event.blockModel(`${blockLocation}`, model => {
            model.parent("tfc:block/scribing_table")
            model.texture("sheet", textureLog)
            model.texture("planks", texturePlank)
            model.texture("particle", texturePlank)
        })


        event.itemModel(blockLocation, model => {
            model.parent(blockModel)
        })
    }

    this.sewingTableBlockModel = function (blockLocation, textureLog, texturePlank) {

        let blockModel = getBlockModel(blockLocation)

        event.json(blockLocation.replace(":", ":blockstates/"), {
            "variants": {
                "facing=east": {
                    "model": blockModel,
                    "y": 90
                },
                "facing=north": {
                    "model": blockModel
                },
                "facing=south": {
                    "model": blockModel,
                    "y": 180
                },
                "facing=west": {
                    "model": blockModel,
                    "y": 270
                }
            }
        })

        event.blockModel(`${blockLocation}`, model => {
            model.parent("tfc:block/sewing_table")
            model.texture("0", textureLog)
            model.texture("1", texturePlank)
            model.texture("particle", texturePlank)
        })


        event.itemModel(blockLocation, model => {
            model.parent(blockModel)
        })
    }

    return this
}
