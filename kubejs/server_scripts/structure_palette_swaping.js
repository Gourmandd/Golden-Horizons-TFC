// priority: 1

// Script made by arguz on Discord.
// Script is here: https://discord.com/channels/432522930610765835/1296242720322621460/1296242807891169372
// This has been modified from the original.
// Thank you to the original author.

MoreJSEvents.structureLoad((event) => {
    event.forEachPalettes((palette) => {
        palette.forEach((blockData) => {
            if (blockData != null) {
                const tfc_block_id = global.MINECRAFT_TO_TFC_MAPS[blockData.id]
                if (tfc_block_id)
                    blockData.setBlock(tfc_block_id, blockData.properties);
            }
        });
    });
});
