ClientEvents.generateAssets("before_mods", event => {

    // TODO: add a global for these. Which the script asks for from CategoryUtil.
    const hasDecorations = {
        "argillite": false,
        "nephelinite": false,
        "blackslag": false,
        "picrite_basalt": false,
        "travertine": false
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
        "travertine": "sedimentary"
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

        datagen.simpleBlockModel(`${mod_id}:rock/gravel/${rockType}`, global.CUSTOM_ROCK_TEXTURES["gravel"][rockType])
        datagen.simpleBlockModel(`${mod_id}:rock/hardened/${rockType}`, global.CUSTOM_ROCK_TEXTURES["hardened"][rockType])
        datagen.rockSpikeModel(`${mod_id}:rock/spike/${rockType}`, global.CUSTOM_ROCK_TEXTURES["raw"][rockType])
        datagen.aqueductModel(`${mod_id}:rock/aqueduct/${rockType}`, global.CUSTOM_ROCK_TEXTURES["bricks"][rockType])
        datagen.looseRockModel(`${mod_id}:rock/loose/${rockType}`, global.CUSTOM_ROCK_TEXTURES["cobble"][rockType], global.CUSTOM_ROCK_TEXTURES["loose"][rockType], ROCK_CATEGORY[rockType])
        datagen.looseRockModel(`${mod_id}:rock/mossy_loose/${rockType}`, global.CUSTOM_ROCK_TEXTURES["mossy_cobble"][rockType], global.CUSTOM_ROCK_TEXTURES["loose"][rockType], ROCK_CATEGORY[rockType])

        datagen.simpleBlockModel(`${mod_id}:rock/cobble/${rockType}`, global.CUSTOM_ROCK_TEXTURES["cobble"][rockType])
        datagen.simpleSlabModel(`${mod_id}:rock/cobble/${rockType}_slab`, global.CUSTOM_ROCK_TEXTURES["cobble"][rockType])
        datagen.simpleStairModel(`${mod_id}:rock/cobble/${rockType}_stairs`, global.CUSTOM_ROCK_TEXTURES["cobble"][rockType])
        datagen.simpleWallModel(`${mod_id}:rock/cobble/${rockType}_wall`, global.CUSTOM_ROCK_TEXTURES["cobble"][rockType])
    })
})
