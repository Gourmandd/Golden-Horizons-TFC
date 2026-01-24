ClientEvents.generateAssets("before_mods", event => {

    // TODO: add a global for these. Which the script asks for from CategoryUtil.
    const hasDecorations = {
        "argillite": false,
        "nephelinite": false,
        "blackslag": false,
        "picrite_basalt": false,
        "travertine": false,
        "komatiite": false,
        "breccia": false,
        "peridotite": true,
        "serpentine": true
    }

    const HAS_CUSTOM_COBBLE = {
        "argillite": false,
        "nephelinite": false,
        "blackslag": false,
        "picrite_basalt": true,
        "travertine": true
    }

    const HAS_VARIANT = [
        "raw",
        "cobble",
        "mossy_cobble",
        "bricks",
        "mossy_bricks"
    ]

    const ROCK_CATEGORY = {
        "argillite": "sedimentary",
        "nephelinite": "igneous_extrusive",
        "blackslag": "igneous_extrusive",
        "picrite_basalt": "igneous_extrusive",
        "travertine": "sedimentary",
        "breccia": "sedimentary",
        "peridotite": "igneous_intrusive",
        "komatiite": "igneous_extrusive",
        "serpentine": "metamorphic",
    }

    // variants that rocktypes with no decorations have.
    const NO_DECORATION_VARIANTS = [
        "hardened",
        "spike",
        "mossy_cobble",
        "mossy_bricks",
        "mossy_loose",
        "loose",
        "gravel",
        "aqueduct"
    ]

    let datagen = Datagen(event).blockModel()

    global.CUSTOM_ROCK_TYPES.forEach(rockType => {

        NO_DECORATION_VARIANTS.forEach(blockType => {
            if (HAS_VARIANT.indexOf(blockType) > -1) {
                datagen.simpleBlockModel(`${mod_id}:rock/${blockType}/${rockType}`, global.CUSTOM_ROCK_TEXTURES[blockType][rockType])
                datagen.simpleSlabModel(`${mod_id}:rock/${blockType}/${rockType}_slab`, global.CUSTOM_ROCK_TEXTURES[blockType][rockType])
                datagen.simpleStairModel(`${mod_id}:rock/${blockType}/${rockType}_stairs`, global.CUSTOM_ROCK_TEXTURES[blockType][rockType])
                datagen.simpleWallModel(`${mod_id}:rock/${blockType}/${rockType}_wall`, global.CUSTOM_ROCK_TEXTURES[blockType][rockType])
            }
        })

        let cobbleTexture = global.CUSTOM_ROCK_TEXTURES["cobble"][rockType]
        let looseTexture = global.CUSTOM_ROCK_TEXTURES["loose"][rockType]
        let rawTexture = global.CUSTOM_ROCK_TEXTURES["raw"][rockType]

        datagen.simpleItemModel(`${mod_id}:brick/${rockType}`, `${mod_id}:item/rock/brick/${rockType}`)
        datagen.simpleBlockModel(`${mod_id}:rock/gravel/${rockType}`, global.CUSTOM_ROCK_TEXTURES["gravel"][rockType])
        datagen.simpleBlockModel(`${mod_id}:rock/hardened/${rockType}`, global.CUSTOM_ROCK_TEXTURES["hardened"][rockType])
        datagen.rockSpikeModel(`${mod_id}:rock/spike/${rockType}`, global.CUSTOM_ROCK_TEXTURES["raw"][rockType])
        datagen.aqueductModel(`${mod_id}:rock/aqueduct/${rockType}`, global.CUSTOM_ROCK_TEXTURES["bricks"][rockType])
        datagen.looseRockModel(`${mod_id}:rock/loose/${rockType}`, cobbleTexture, global.CUSTOM_ROCK_TEXTURES["loose"][rockType], ROCK_CATEGORY[rockType])
        datagen.looseRockModel(`${mod_id}:rock/mossy_loose/${rockType}`, global.CUSTOM_ROCK_TEXTURES["mossy_cobble"][rockType], looseTexture, ROCK_CATEGORY[rockType])

        datagen.simpleBlockModel(`${mod_id}:rock/cobble/${rockType}`, cobbleTexture)
        datagen.simpleSlabModel(`${mod_id}:rock/cobble/${rockType}_slab`, cobbleTexture)
        datagen.simpleStairModel(`${mod_id}:rock/cobble/${rockType}_stairs`, cobbleTexture)
        datagen.simpleWallModel(`${mod_id}:rock/cobble/${rockType}_wall`, cobbleTexture)

        if (hasDecorations[rockType]) {

            let bricksTexture = `${mod_id}:block/rock/bricks/${rockType}`
            let crackedBricksTexture = `${mod_id}:block/rock/cracked_bricks/${rockType}`
            let smoothTexture = `${mod_id}:block/rock/smooth/${rockType}`

            datagen.simpleBlockModel(`${mod_id}:rock/bricks/${rockType}`, bricksTexture)
            datagen.simpleSlabModel(`${mod_id}:rock/bricks/${rockType}_slab`, bricksTexture)
            datagen.simpleStairModel(`${mod_id}:rock/bricks/${rockType}_stairs`, bricksTexture)
            datagen.simpleWallModel(`${mod_id}:rock/bricks/${rockType}_wall`, bricksTexture)

            datagen.simpleBlockModel(`${mod_id}:rock/cracked_bricks/${rockType}`, crackedBricksTexture)
            datagen.simpleSlabModel(`${mod_id}:rock/cracked_bricks/${rockType}_slab`, crackedBricksTexture)
            datagen.simpleStairModel(`${mod_id}:rock/cracked_bricks/${rockType}_stairs`, crackedBricksTexture)
            datagen.simpleWallModel(`${mod_id}:rock/cracked_bricks/${rockType}_wall`, crackedBricksTexture)

            datagen.simpleBlockModel(`${mod_id}:rock/smooth/${rockType}`, smoothTexture)
            datagen.simpleSlabModel(`${mod_id}:rock/smooth/${rockType}_slab`, smoothTexture)
            datagen.simpleStairModel(`${mod_id}:rock/smooth/${rockType}_stairs`, smoothTexture)
            datagen.simpleWallModel(`${mod_id}:rock/smooth/${rockType}_wall`, smoothTexture)

            datagen.simpleBlockModel(`${mod_id}:rock/hardened/${rockType}`, rawTexture)
            datagen.simpleBlockModel(`${mod_id}:rock/chiseled/${rockType}`, rawTexture)

            datagen.simpleBlockModel(`${mod_id}:rock/raw/${rockType}`, rawTexture)
            datagen.simpleSlabModel(`${mod_id}:rock/raw/${rockType}_slab`, rawTexture)
            datagen.simpleStairModel(`${mod_id}:rock/raw/${rockType}_stairs`, rawTexture)
            datagen.simpleWallModel(`${mod_id}:rock/raw/${rockType}_wall`, rawTexture)

            datagen.buttonModel(`${mod_id}:rock/button/${rockType}`, smoothTexture)
            datagen.pressurePlateModel(`${mod_id}:rock/pressure_plate/${rockType}`, smoothTexture)
        }
    })
})
