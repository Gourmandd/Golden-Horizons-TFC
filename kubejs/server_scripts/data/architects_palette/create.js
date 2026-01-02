// requires: architects_palette

ServerEvents.recipes(event =>{

    let datagen = Datagen(event).recipe()

    const HEATED_COMPACTING = {
        "minecraft:stone_bricks": "architects_palette:heavy_stone_bricks",
        "minecraft:mossy_stone_bricks": "architects_palette:heavy_mossy_stone_bricks",
        "minecraft:end_stone": "architects_palette:heavy_end_stone_bricks",
        "minecraft:calcite": "architects_palette:heavy_calcite_bricks",
        "tfc:rock/raw/tuff": "architects_palette:heavy_tuff_bricks",
        "minecraft:dripstone_block": "architects_palette:heavy_dripstone_bricks"
    }

    Object.keys(HEATED_COMPACTING).forEach(entry =>{
        datagen.createCompacting(outputOf(IO_TYPE.ITEM, HEATED_COMPACTING[entry],1 ,1), inputOf(IO_TYPE.ITEM, entry, 1)).heatRequirement(HEAT_REQUIREMENT.HEATED)
            .id(`modpack:compacting/heavy_bricks/${entry.split(":").pop()}`)
            .generate()
    })
})