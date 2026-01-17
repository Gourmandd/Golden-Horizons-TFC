ClientEvents.lang("en_us", event => {


    // TODO: add a global for these. Which the script asks for from CategoryUtil.
    const hasDecorations = {
        "argillite": false,
        "nephelinite": false,
        "blackslag": false,
        "picrite_basalt": false,
        "travertine": false
    }

    const HAS_VARIANT = [
        "raw",
        "cobble",
        "mossy_cobble",
        "bricks",
        "mossy_bricks"
    ]

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

    global.CUSTOM_ROCK_TYPES.forEach(rockType => {
        event.add(`item.${mod_id}.brick.${rockType}`, `${nameProcessing(rockType)} Brick`)

        NO_DECORATION_VARIANTS.forEach(blockType => {
            if (HAS_VARIANT.indexOf(blockType) > -1) {
                event.add(`block.${mod_id}.rock.${blockType}.${rockType}`, `${nameProcessing(rockType)} ${nameProcessing(blockType)}`)
                event.add(`block.${mod_id}.rock.${blockType}.${rockType}_stairs`, `${nameProcessing(rockType)} ${nameProcessing(blockType)} Stairs`)
                event.add(`block.${mod_id}.rock.${blockType}.${rockType}_wall`, `${nameProcessing(rockType)} ${nameProcessing(blockType)} Wall`)
                event.add(`block.${mod_id}.rock.${blockType}.${rockType}_slab`, `${nameProcessing(rockType)} ${nameProcessing(blockType)} Slab`)
            } else {

                if (blockType == "loose" || blockType == "mossy_loose") {
                    event.add(`block.${mod_id}.rock.${blockType}.${rockType}`, `${nameProcessing(blockType)} ${nameProcessing(rockType)}`)
                } else {
                    event.add(`block.${mod_id}.rock.${blockType}.${rockType}`, `${nameProcessing(rockType)} ${nameProcessing(blockType)}`)
                }
            }
        })

        event.add(`block.${mod_id}.rock.cobble.${rockType}`, `${nameProcessing(rockType)} Cobble`)
        event.add(`block.${mod_id}.rock.cobble.${rockType}_stairs`, `${nameProcessing(rockType)} Cobble Stairs`)
        event.add(`block.${mod_id}.rock.cobble.${rockType}_wall`, `${nameProcessing(rockType)} Cobble Wall`)
        event.add(`block.${mod_id}.rock.cobble.${rockType}_slab`, `${nameProcessing(rockType)} Cobble Slab`)
    })
})
