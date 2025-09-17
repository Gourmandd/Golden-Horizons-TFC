// requires: architects_palette

ServerEvents.recipes(event =>{

    addCreateRecipeHandler(event);

    const HEATED_COMPACTING = {
        "minecraft:stone_bricks": "architects_palette:heavy_stone_bricks",
        "minecraft:mossy_stone_bricks": "architects_palette:heavy_mossy_stone_bricks",
        "minecraft:end_stone": "architects_palette:heavy_end_stone_bricks",
        "minecraft:calcite": "architects_palette:heavy_calcite_bricks",
        "minecraft:tuff": "architects_palette:heavy_tuff_bricks",
        "minecraft:dripstone_block": "architects_palette:heavy_dripstone_bricks"
    }

    Object.keys(HEATED_COMPACTING).forEach(entry =>{
        event.recipes.create.compacting(HEATED_COMPACTING[entry], entry).heated()
            .id(`modpack:compacting/heavy_bricks/${entry.split(":").pop()}`)
    })

    event.recipes.create.finalize();
})