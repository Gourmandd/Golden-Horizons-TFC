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

ServerEvents.tags("item", event => {

    global.TOOL_METALS.forEach(metal => {
        global.OVERWORLD_WOOD_TYPES.forEach(wood => {
            event.add(`modpack:hanging_signs/${metal}`, `${global.WOOD_TYPE_TO_MOD[wood]}:wood/hanging_sign/${metal}/${wood}`)
            event.add("modpack:bladed_axles", `${global.WOOD_TYPE_TO_MOD[wood]}:wood/bladed_axle/${wood}`)
        })
    })

    COPPER_STATES.forEach(state => {
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
