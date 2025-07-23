
const HEATED_COMPACTING = {
    "minecraft:stone_bricks": "architects_palette:heavy_stone_bricks",
    "minecraft:mossy_stone_bricks": "architects_palette:heavy_mossy_stone_bricks",
    "minecraft:end_stone": "architects_palette:heavy_end_stone_bricks",
    "minecraft:calcite": "architects_palette:heavy_calcite_bricks",
    "minecraft:tuff": "architects_palette:heavy_tuff_bricks",
    "minecraft:dripstone_block": "architects_palette:heavy_dripstone_bricks"
}
ServerEvents.recipes(event =>{

    global.TFC_METALS.forEach(metal =>{
        event.recipes.create.compacting(`tfc:metal/double_ingot/${metal}`, [`tfc:metal/ingot/${metal}`, `tfc:metal/ingot/${metal}`, "tfc:powder/flux"]).heatRequirement("heated")
            .id(`modpack:compacting/double_ingot/${metal}`)
        event.recipes.create.compacting(`tfc:metal/double_sheet/${metal}`, [`tfc:metal/sheet/${metal}`, `tfc:metal/sheet/${metal}`, "tfc:powder/flux"]).heatRequirement("heated")
            .id(`modpack:compacting/double_sheet/${metal}`)

        if (metal != "wrought_iron"){
            event.recipes.create.compacting(`tfc:metal/sheet/${metal}`, Fluid.of(`tfc:metal/${metal}`, 200)).heatRequirement("heated")
                .id(`modpack:compacting/sheet/${metal}`)
        }
    })

    global.FIRMALIFE_METALS.forEach(metal =>{
        event.recipes.create.compacting(`firmalife:metal/double_ingot/${metal}`, [`firmalife:metal/ingot/${metal}`, `firmalife:metal/ingot/${metal}`, "tfc:powder/flux"]).heatRequirement("heated")
            .id(`modpack:compacting/double_ingot/${metal}`)
        event.recipes.create.compacting(`firmalife:metal/double_sheet/${metal}`, [`firmalife:metal/sheet/${metal}`, `firmalife:metal/sheet/${metal}`, "tfc:powder/flux"]).heatRequirement("heated")
            .id(`modpack:compacting/double_sheet/${metal}`)
        event.recipes.create.compacting(`firmalife:metal/sheet/${metal}`, Fluid.of(`firmalife:metal/${metal}`, 200)).heatRequirement("heated")
            .id(`modpack:compacting/sheet/${metal}`)
    })

    global.KUBEJS_METALS.forEach(metal =>{
        event.recipes.create.compacting(`kubejs:metal/double_ingot/${metal}`, [`kubejs:metal/ingot/${metal}`, `kubejs:metal/ingot/${metal}`, "tfc:powder/flux"]).heatRequirement("heated")
            .id(`modpack:compacting/double_ingot/${metal}`)
        event.recipes.create.compacting(`kubejs:metal/double_sheet/${metal}`, [`kubejs:metal/sheet/${metal}`, `kubejs:metal/sheet/${metal}`, "tfc:powder/flux"]).heatRequirement("heated")
            .id(`modpack:compacting/double_sheet/${metal}`)
        event.recipes.create.compacting(`kubejs:metal/sheet/${metal}`, Fluid.of(global.METAL_FLUIDS[metal], 200)).heatRequirement("heated")
            .id(`modpack:compacting/sheet/${metal}`)
    })

    global.TFC_SAND_COLOURS.forEach(colour =>{
        event.recipes.create.compacting(`tfc:raw_sandstone/${colour}`, [`tfc:sand/${colour}`, `tfc:sand/${colour}`])
            .id(`modpack:compacting/sand/${colour}`)
    })

    Object.keys(HEATED_COMPACTING).forEach(entry =>{
        event.recipes.create.compacting(HEATED_COMPACTING[entry], entry).heatRequirement("heated")
            .id(`modpack:compacting/heavy_bricks/${entry.split(":").pop()}`)
    })
})