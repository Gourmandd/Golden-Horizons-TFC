ClientEvents.lang("en_us", event => {

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

        if (global.ROCK_HAS_DECORATIONS[rockType]) {

            event.add(`block.${mod_id}.rock.bricks.${rockType}`, `${nameProcessing(rockType)} Bricks`)
            event.add(`block.${mod_id}.rock.bricks.${rockType}_slab`, `${nameProcessing(rockType)} Brick Slab`)
            event.add(`block.${mod_id}.rock.bricks.${rockType}_stairs`, `${nameProcessing(rockType)} Brick Stairs`)
            event.add(`block.${mod_id}.rock.bricks.${rockType}_wall`, `${nameProcessing(rockType)} Brick Wall`)

            event.add(`block.${mod_id}.rock.cracked_bricks.${rockType}`, `${nameProcessing(rockType)} Cracked Bricks`)
            event.add(`block.${mod_id}.rock.cracked_bricks.${rockType}_slab`, `${nameProcessing(rockType)} Cracked Brick Slab`)
            event.add(`block.${mod_id}.rock.cracked_bricks.${rockType}_stairs`, `${nameProcessing(rockType)} Cracked Brick Stairs`)
            event.add(`block.${mod_id}.rock.cracked_bricks.${rockType}_wall`, `${nameProcessing(rockType)} Cracked Brick Wall`)

            event.add(`block.${mod_id}.rock.smooth.${rockType}`, `Smooth ${nameProcessing(rockType)}`)
            event.add(`block.${mod_id}.rock.smooth.${rockType}_slab`, `Smooth ${nameProcessing(rockType)} Slab`)
            event.add(`block.${mod_id}.rock.smooth.${rockType}_stairs`, `Smooth ${nameProcessing(rockType)} Stairs`)
            event.add(`block.${mod_id}.rock.smooth.${rockType}_wall`, `Smooth ${nameProcessing(rockType)} Wall`)

            event.add(`block.${mod_id}.rock.hardened.${rockType}`, `Hardened ${nameProcessing(rockType)}`)
            event.add(`block.${mod_id}.rock.chiseled.${rockType}`, `Chiseled ${nameProcessing(rockType)}`)

            event.add(`block.${mod_id}.rock.raw.${rockType}`, `Raw ${nameProcessing(rockType)}`)
            event.add(`block.${mod_id}.rock.raw.${rockType}_slab`, `Raw ${nameProcessing(rockType)} Slab`)
            event.add(`block.${mod_id}.rock.raw.${rockType}_stairs`, `Raw ${nameProcessing(rockType)} Stairs`)
            event.add(`block.${mod_id}.rock.raw.${rockType}_wall`, `Raw ${nameProcessing(rockType)} Wall`)

            event.add(`block.${mod_id}.rock.button.${rockType}`, `${nameProcessing(rockType)} Button`)
            event.add(`block.${mod_id}.rock.pressure_plate.${rockType}`, `${nameProcessing(rockType)} Pressure Plate`)
        }
    })
})
