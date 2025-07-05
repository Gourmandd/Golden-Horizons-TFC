// ---------------------------------------------------------- //
// Generation of tags and recipes for a large amount of items //
// ---------------------------------------------------------- //

const COPPER_STATES = [
    "",
    "exposed" + "_",
    "weathered" + "_",
    "oxidized" + "_",
]

const SIGN_METALS = [
    "bronze",
    "bismuth_bronze",
    "black_bronze",
    "copper",
    "wrought_iron",
    "steel",
    "black_steel",
    "red_steel",
    "blue_steel"
]

ServerEvents.tags("item", event =>{

    global.TOOL_METALS.forEach(metal => {
        global.OVERWORLD_WOOD_TYPES.forEach(wood => {
            event.add(`modpack:hanging_signs/metal/${metal}`, `${global.WOOD_TYPE_TO_MOD[wood]}:wood/hanging_sign/${metal}/${wood}`) 
            event.add("modpack:bladed_axles", `${global.WOOD_TYPE_TO_MOD[wood]}:wood/bladed_axle/${wood}`)  
        })
    })

    COPPER_STATES.forEach(state =>{
        event.add(`modpack:copper_shingles`, [`create:${state}copper_shingles`, `create:waxed_${state}copper_shingles`])
        event.add(`modpack:copper_shingle_stairs`, `create:${state}copper_shingle_stairs`, `create:waxed_${state}copper_shingle_stairs`)
        event.add(`modpack:copper_shingle_slabs`, [`create:${state}copper_shingle_slab`, `create:waxed_${state}copper_shingle_slab`])
        event.add(`modpack:copper_tiles`, [`create:${state}copper_tiles`, `create:waxed_${state}copper_tiles`])
        event.add(`modpack:copper_tile_stairs`, [`create:${state}copper_tile_stairs`, `create:waxed_${state}copper_tile_stairs`])
        event.add(`modpack:copper_tile_slabs`, [`create:${state}copper_tile_slab`, `create:waxed_${state}copper_tile_slab`])
        event.add(`modpack:cut_copper_roofs`, [`alekiroofs:${state}cut_copper_roofing`, `alekiroofs:waxed_${state}cut_copper_roofing`])
        event.add(`modpack:cut_copper_blocks`, [`minecraft:${state}cut_copper`, `minecraft:waxed_${state}cut_copper`])
        event.add(`modpack:cut_copper_stairs`, [`minecraft:${state}cut_copper_stairs`, `minecraft:waxed_${state}cut_copper_stairs`])
        event.add(`modpack:cut_copper_slabs`, [`minecraft:${state}cut_copper_slab`, `minecraft:waxed_${state}cut_copper_slab`])
        event.add(`modpack:copper_blocks`, [`minecraft:${state}copper_block`, `minecraft:waxed_${state}copper_block`])
        event.add(`modpack:copper_shutters`, [`shutter:${state}copper_shutter`, `shutter:waxed_${state}copper_shutter`])
    })
})

ServerEvents.recipes(event =>{
    event.recipes.tfc.heating(`#modpack:copper_shingles`, 1080).resultFluid(Fluid.of("tfc:metal/copper", 50)).id(`modpack:heating/melting/copper_shingles`)
    event.recipes.tfc.heating(`#modpack:copper_shingle_stairs`, 1080).resultFluid(Fluid.of("tfc:metal/copper", 25)).id(`modpack:heating/melting/copper_shingle_stairs`)
    event.recipes.tfc.heating(`#modpack:copper_shingle_slabs`, 1080).resultFluid(Fluid.of("tfc:metal/copper", 25)).id(`modpack:heating/melting/copper_shingle_slabs`)
    event.recipes.tfc.heating(`#modpack:copper_tiles`, 1080).resultFluid(Fluid.of("tfc:metal/copper", 50)).id(`modpack:heating/melting/copper_tiles`)
    event.recipes.tfc.heating(`#modpack:copper_tile_stairs`, 1080).resultFluid(Fluid.of("tfc:metal/copper", 25)).id(`modpack:heating/melting/copper_tile_stairs`)
    event.recipes.tfc.heating(`#modpack:copper_tile_slabs`, 1080).resultFluid(Fluid.of("tfc:metal/copper", 25)).id(`modpack:heating/melting/copper_tile_slabs`)
    event.recipes.tfc.heating(`#modpack:cut_copper_roofs`, 1080).resultFluid(Fluid.of("tfc:metal/copper", 25)).id(`modpack:heating/melting/cut_copper_roofs`)
    event.recipes.tfc.heating(`#modpack:cut_copper_blocks`, 1080).resultFluid(Fluid.of("tfc:metal/copper", 50)).id(`modpack:heating/melting/cut_copper_blocks`)
    event.recipes.tfc.heating(`#modpack:cut_copper_stairs`, 1080).resultFluid(Fluid.of("tfc:metal/copper", 25)).id(`modpack:heating/melting/cut_copper_stairs`)
    event.recipes.tfc.heating(`#modpack:cut_copper_slabs`, 1080).resultFluid(Fluid.of("tfc:metal/copper", 25)).id(`modpack:heating/melting/cut_copper_slabs`)
    event.recipes.tfc.heating(`#modpack:copper_shutters`, 1080).resultFluid(Fluid.of("tfc:metal/copper", 50)).id(`modpack:heating/melting/copper_shutters`)
})

TFCEvents.data(event =>{
    event.itemHeat([
        `#modpack:copper_tiles`,
        `#modpack:copper_tile_slabs`,
        `#modpack:copper_tile_stairs`,
        `#modpack:copper_shingles`,
        `#modpack:copper_shingle_slabs`,
        `#modpack:copper_shingle_stairs`,
        `#modpack:cut_copper_blocks`,
        `#modpack:cut_copper_slabs`,
        `#modpack:cut_copper_stairs`,
        `#modpack:cut_copper_roofs`,
        `#modpack:copper_blocks`,
        `#modpack:copper_shutters`
    ],
    2.857,
    648,
    864,
    `modpack:copper_blocks`
    )

    event.itemHeat(`#modpack:axles`, 1, 1, 1, `modpack:axles`)
    event.itemHeat(`#modpack:hanging_signs`, 1, 1, 1, `modpack:hanging_signs`)
})