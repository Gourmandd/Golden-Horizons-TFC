//packmode: nbt_modify

let nbt_files = [
    "kubejs/nbt/trial_chambers/chamber/addon/c1_breeze.nbt",
    "kubejs/nbt/trial_chambers/chamber/addon/full_corner_column.nbt",
    "kubejs/nbt/trial_chambers/chamber/addon/full_stacked_walkway.nbt",
    "kubejs/nbt/trial_chambers/chamber/addon/full_stacked_walkway_2.nbt",
    "kubejs/nbt/trial_chambers/chamber/addon/grate_bridge.nbt",
    "kubejs/nbt/trial_chambers/chamber/addon/hanging_platform.nbt",
    "kubejs/nbt/trial_chambers/chamber/addon/lower_staircase_down.nbt",
    "kubejs/nbt/trial_chambers/chamber/addon/short_grate_platform.nbt",
    "kubejs/nbt/trial_chambers/chamber/addon/short_platform.nbt",
    "kubejs/nbt/trial_chambers/chamber/addon/walkway_with_bridge_1.nbt",
    "kubejs/nbt/trial_chambers/chamber/assembly/cover_1.nbt",
    "kubejs/nbt/trial_chambers/chamber/assembly/cover_2.nbt",
    "kubejs/nbt/trial_chambers/chamber/assembly/cover_3.nbt",
    "kubejs/nbt/trial_chambers/chamber/assembly/cover_4.nbt",
    "kubejs/nbt/trial_chambers/chamber/assembly/cover_5.nbt",
    "kubejs/nbt/trial_chambers/chamber/assembly/cover_6.nbt",
    "kubejs/nbt/trial_chambers/chamber/assembly/cover_7.nbt",
    "kubejs/nbt/trial_chambers/chamber/assembly/full_column.nbt",
    "kubejs/nbt/trial_chambers/chamber/assembly/hanging_1.nbt",
    "kubejs/nbt/trial_chambers/chamber/assembly/hanging_2.nbt",
    "kubejs/nbt/trial_chambers/chamber/assembly/hanging_3.nbt",
    "kubejs/nbt/trial_chambers/chamber/assembly/hanging_4.nbt",
    "kubejs/nbt/trial_chambers/chamber/assembly/hanging_5.nbt",
    "kubejs/nbt/trial_chambers/chamber/assembly/left_staircase_1.nbt",
    "kubejs/nbt/trial_chambers/chamber/assembly/left_staircase_2.nbt",
    "kubejs/nbt/trial_chambers/chamber/assembly/left_staircase_3.nbt",
    "kubejs/nbt/trial_chambers/chamber/assembly/platform_1.nbt",
    "kubejs/nbt/trial_chambers/chamber/assembly/right_staircase_1.nbt",
    "kubejs/nbt/trial_chambers/chamber/assembly/right_staircase_2.nbt",
    "kubejs/nbt/trial_chambers/chamber/assembly/right_staircase_3.nbt",
    "kubejs/nbt/trial_chambers/chamber/assembly/spawner_1.nbt",
    "kubejs/nbt/trial_chambers/chamber/eruption/breeze_slice_1.nbt",
    "kubejs/nbt/trial_chambers/chamber/eruption/center_1.nbt",
    "kubejs/nbt/trial_chambers/chamber/eruption/quadrant_1.nbt",
    "kubejs/nbt/trial_chambers/chamber/eruption/quadrant_2.nbt",
    "kubejs/nbt/trial_chambers/chamber/eruption/quadrant_3.nbt",
    "kubejs/nbt/trial_chambers/chamber/eruption/quadrant_4.nbt",
    "kubejs/nbt/trial_chambers/chamber/eruption/quadrant_5.nbt",
    "kubejs/nbt/trial_chambers/chamber/eruption/slice_1.nbt",
    "kubejs/nbt/trial_chambers/chamber/eruption/slice_2.nbt",
    "kubejs/nbt/trial_chambers/chamber/eruption/slice_3.nbt",
    "kubejs/nbt/trial_chambers/chamber/pedestal/center_1.nbt",
    "kubejs/nbt/trial_chambers/chamber/pedestal/ominous_slice_1.nbt",
    "kubejs/nbt/trial_chambers/chamber/pedestal/quadrant_1.nbt",
    "kubejs/nbt/trial_chambers/chamber/pedestal/quadrant_2.nbt",
    "kubejs/nbt/trial_chambers/chamber/pedestal/quadrant_3.nbt",
    "kubejs/nbt/trial_chambers/chamber/pedestal/slice_1.nbt",
    "kubejs/nbt/trial_chambers/chamber/pedestal/slice_2.nbt",
    "kubejs/nbt/trial_chambers/chamber/pedestal/slice_3.nbt",
    "kubejs/nbt/trial_chambers/chamber/pedestal/slice_4.nbt",
    "kubejs/nbt/trial_chambers/chamber/pedestal/slice_5.nbt",
    "kubejs/nbt/trial_chambers/chamber/slanted/center.nbt",
    "kubejs/nbt/trial_chambers/chamber/slanted/hallway_1.nbt",
    "kubejs/nbt/trial_chambers/chamber/slanted/hallway_2.nbt",
    "kubejs/nbt/trial_chambers/chamber/slanted/hallway_3.nbt",
    "kubejs/nbt/trial_chambers/chamber/slanted/hallway_4.nbt",
    "kubejs/nbt/trial_chambers/chamber/slanted/hallway_5.nbt",
    "kubejs/nbt/trial_chambers/chamber/slanted/ominous_upper_arm_1.nbt",
    "kubejs/nbt/trial_chambers/chamber/slanted/quadrant_1.nbt",
    "kubejs/nbt/trial_chambers/chamber/slanted/quadrant_2.nbt",
    "kubejs/nbt/trial_chambers/chamber/slanted/quadrant_3.nbt",
    "kubejs/nbt/trial_chambers/chamber/slanted/quadrant_4.nbt",
    "kubejs/nbt/trial_chambers/chamber/slanted/ramp_1.nbt",
    "kubejs/nbt/trial_chambers/chamber/slanted/ramp_2.nbt",
    "kubejs/nbt/trial_chambers/chamber/slanted/ramp_3.nbt",
    "kubejs/nbt/trial_chambers/chamber/slanted/ramp_4.nbt",
    "kubejs/nbt/trial_chambers/chamber/assembly.nbt",
    "kubejs/nbt/trial_chambers/chamber/chamber_1.nbt",
    "kubejs/nbt/trial_chambers/chamber/chamber_2.nbt",
    "kubejs/nbt/trial_chambers/chamber/chamber_4.nbt",
    "kubejs/nbt/trial_chambers/chamber/chamber_8.nbt",
    "kubejs/nbt/trial_chambers/chamber/entrance_cap.nbt",
    "kubejs/nbt/trial_chambers/chamber/eruption.nbt",
    "kubejs/nbt/trial_chambers/chamber/pedestal.nbt",
    "kubejs/nbt/trial_chambers/chamber/slanted.nbt",
    "kubejs/nbt/trial_chambers/chests/supply.nbt",
    "kubejs/nbt/trial_chambers/corridor/addon/arrow_dispenser.nbt",
    "kubejs/nbt/trial_chambers/corridor/addon/bridge_lower.nbt",
    "kubejs/nbt/trial_chambers/corridor/addon/chandelier_upper.nbt",
    "kubejs/nbt/trial_chambers/corridor/addon/decoration_upper.nbt",
    "kubejs/nbt/trial_chambers/corridor/addon/display_1.nbt",
    "kubejs/nbt/trial_chambers/corridor/addon/display_2.nbt",
    "kubejs/nbt/trial_chambers/corridor/addon/display_3.nbt",
    "kubejs/nbt/trial_chambers/corridor/addon/head_upper.nbt",
    "kubejs/nbt/trial_chambers/corridor/addon/ladder_to_middle.nbt",
    "kubejs/nbt/trial_chambers/corridor/addon/open_walkway.nbt",
    "kubejs/nbt/trial_chambers/corridor/addon/open_walkway_upper.nbt",
    "kubejs/nbt/trial_chambers/corridor/addon/reward_upper.nbt",
    "kubejs/nbt/trial_chambers/corridor/addon/staircase.nbt",
    "kubejs/nbt/trial_chambers/corridor/addon/wall.nbt",
    "kubejs/nbt/trial_chambers/corridor/addon/walled_walkway.nbt",
    "kubejs/nbt/trial_chambers/corridor/atrium/bogged_relief.nbt",
    "kubejs/nbt/trial_chambers/corridor/atrium/breeze_relief.nbt",
    "kubejs/nbt/trial_chambers/corridor/atrium/grand_staircase_1.nbt",
    "kubejs/nbt/trial_chambers/corridor/atrium/grand_staircase_2.nbt",
    "kubejs/nbt/trial_chambers/corridor/atrium/grand_staircase_3.nbt",
    "kubejs/nbt/trial_chambers/corridor/atrium/spider_relief.nbt",
    "kubejs/nbt/trial_chambers/corridor/atrium/spiral_relief.nbt",
    "kubejs/nbt/trial_chambers/corridor/atrium_1.nbt",
    "kubejs/nbt/trial_chambers/corridor/end_1.nbt",
    "kubejs/nbt/trial_chambers/corridor/end_2.nbt",
    "kubejs/nbt/trial_chambers/corridor/entrance_1.nbt",
    "kubejs/nbt/trial_chambers/corridor/entrance_2.nbt",
    "kubejs/nbt/trial_chambers/corridor/entrance_3.nbt",
    "kubejs/nbt/trial_chambers/corridor/first_plate.nbt",
    "kubejs/nbt/trial_chambers/corridor/second_plate.nbt",
    "kubejs/nbt/trial_chambers/corridor/straight_1.nbt",
    "kubejs/nbt/trial_chambers/corridor/straight_2.nbt",
    "kubejs/nbt/trial_chambers/corridor/straight_3.nbt",
    "kubejs/nbt/trial_chambers/corridor/straight_4.nbt",
    "kubejs/nbt/trial_chambers/corridor/straight_5.nbt",
    "kubejs/nbt/trial_chambers/corridor/straight_6.nbt",
    "kubejs/nbt/trial_chambers/corridor/straight_7.nbt",
    "kubejs/nbt/trial_chambers/corridor/straight_8.nbt",
    "kubejs/nbt/trial_chambers/decor/barrel.nbt",
    "kubejs/nbt/trial_chambers/decor/candle_1.nbt",
    "kubejs/nbt/trial_chambers/decor/candle_2.nbt",
    "kubejs/nbt/trial_chambers/decor/candle_3.nbt",
    "kubejs/nbt/trial_chambers/decor/candle_4.nbt",
    "kubejs/nbt/trial_chambers/decor/dead_bush_pot.nbt",
    "kubejs/nbt/trial_chambers/decor/empty_pot.nbt",
    "kubejs/nbt/trial_chambers/decor/flow_pot.nbt",
    "kubejs/nbt/trial_chambers/decor/guster_pot.nbt",
    "kubejs/nbt/trial_chambers/decor/scrape_pot.nbt",
    "kubejs/nbt/trial_chambers/decor/undecorated_pot.nbt",
    "kubejs/nbt/trial_chambers/dispensers/chamber.nbt",
    "kubejs/nbt/trial_chambers/dispensers/floor_dispenser.nbt",
    "kubejs/nbt/trial_chambers/dispensers/wall_dispenser.nbt",
    "kubejs/nbt/trial_chambers/hallway/cache_1.nbt",
    "kubejs/nbt/trial_chambers/hallway/corner_staircase.nbt",
    "kubejs/nbt/trial_chambers/hallway/corner_staircase_down.nbt",
    "kubejs/nbt/trial_chambers/hallway/corridor_connector_1.nbt",
    "kubejs/nbt/trial_chambers/hallway/left_corner.nbt",
    "kubejs/nbt/trial_chambers/hallway/long_straight_staircase.nbt",
    "kubejs/nbt/trial_chambers/hallway/long_straight_staircase_down.nbt",
    "kubejs/nbt/trial_chambers/hallway/lower_hallway_connector.nbt",
    "kubejs/nbt/trial_chambers/hallway/right_corner.nbt",
    "kubejs/nbt/trial_chambers/hallway/rubble.nbt",
    "kubejs/nbt/trial_chambers/hallway/rubble_chamber.nbt",
    "kubejs/nbt/trial_chambers/hallway/rubble_chamber_thin.nbt",
    "kubejs/nbt/trial_chambers/hallway/rubble_thin.nbt",
    "kubejs/nbt/trial_chambers/hallway/straight.nbt",
    "kubejs/nbt/trial_chambers/hallway/straight_staircase.nbt",
    "kubejs/nbt/trial_chambers/hallway/straight_staircase_down.nbt",
    "kubejs/nbt/trial_chambers/hallway/upper_hallway_connector.nbt",
    "kubejs/nbt/trial_chambers/intersection/intersection_1.nbt",
    "kubejs/nbt/trial_chambers/intersection/intersection_2.nbt",
    "kubejs/nbt/trial_chambers/intersection/intersection_3.nbt",
    "kubejs/nbt/trial_chambers/reward/ominous_vault.nbt",
    "kubejs/nbt/trial_chambers/reward/vault.nbt",
    "kubejs/nbt/trial_chambers/spawner/breeze/breeze.nbt",
    "kubejs/nbt/trial_chambers/spawner/connectors/breeze.nbt",
    "kubejs/nbt/trial_chambers/spawner/connectors/melee.nbt",
    "kubejs/nbt/trial_chambers/spawner/connectors/ranged.nbt",
    "kubejs/nbt/trial_chambers/spawner/connectors/slow_ranged.nbt",
    "kubejs/nbt/trial_chambers/spawner/connectors/small_melee.nbt",
    "kubejs/nbt/trial_chambers/spawner/melee/husk.nbt",
    "kubejs/nbt/trial_chambers/spawner/melee/spider.nbt",
    "kubejs/nbt/trial_chambers/spawner/melee/zombie.nbt",
    "kubejs/nbt/trial_chambers/spawner/ranged/poison_skeleton.nbt",
    "kubejs/nbt/trial_chambers/spawner/ranged/skeleton.nbt",
    "kubejs/nbt/trial_chambers/spawner/ranged/stray.nbt",
    "kubejs/nbt/trial_chambers/spawner/slow_ranged/poison_skeleton.nbt",
    "kubejs/nbt/trial_chambers/spawner/slow_ranged/skeleton.nbt",
    "kubejs/nbt/trial_chambers/spawner/slow_ranged/stray.nbt",
    "kubejs/nbt/trial_chambers/spawner/small_melee/baby_zombie.nbt",
    "kubejs/nbt/trial_chambers/spawner/small_melee/cave_spider.nbt",
    "kubejs/nbt/trial_chambers/spawner/small_melee/silverfish.nbt",
    "kubejs/nbt/trial_chambers/spawner/small_melee/slime.nbt"
]

// when you want to the override some replacements in the current operation.
let SPECIFIC_OVERRIDES = {
    // trial chambers
    "minecraft:bone_block": "caupona:felsic_tuff",
    "minecraft:stone": "tfc:rock/raw/slate",
    "minecraft:cactus": "minecraft:air",
    "minecraft:red_mushroom": "minecraft:air",
    "minecraft:brown_mushroom": "minecraft:air",
    "tfc:grass/aridisol": "minecraft:soul_sand",
    "tfc:wood/button/oak": "tfc:rock/button/basalt",
    "minecraft:mossy_cobblestone": "modpack:rock/mossy_bricks/argillite",
    "minecraft:cobblestone": "modpack:rock/bricks/argillite",
    "modpack:rock/mossy_cobble/argillite": "modpack:rock/mossy_bricks/argillite",
    "modpack:rock/cobble/argillite": "modpack:rock/cracked_bricks/argillite",
    "minecraft:cobbled_deepslate": "modpack:rock/cracked_bricks/nephelinite",
    "modpack:rock/cobble/nephelinite": "modpack:rock/cracked_bricks/nephelinite",
    "minecraft:waxed_oxidized_copper_trapdoor": "tfc:wood/trapdoor/birch",
    "minecraft:waxed_oxidized_copper_door": "tfc:wood/door/sequoia",
    "minecraft:oxidized_copper_trapdoor": "tfc:wood/trapdoor/birch",
    "minecraft:dead_bush": "tfc:plant/dead_bush",
    "minecraft:chain": "architects_palette:nether_brass_chain",
    "tfc:metal/chain/copper": "architects_palette:nether_brass_chain",
    "minecraft:potted_dead_bush": "tfc:plant/potted/dead_bush",
    "minecraft:ladder": "create:copper_ladder"
}

nbt_files.forEach(file => {
    let nbt = NBTIO.read(file)

    let blocks = nbt.blocks
    let palette = nbt.palette

    function convert(blockId) {
        let converted = global.MINECRAFT_TO_TFC_MAPS[blockId]

        // if there is no conversion to be found, usually minecraft:air
        if (converted == undefined) [
            converted = blockId
        ]

        if (SPECIFIC_OVERRIDES[converted] != undefined) {
            converted = SPECIFIC_OVERRIDES[converted]
        }

        return converted
    }

    console.log("blocks size:" + blocks.size())
    for (let i = 0; i < blocks.size(); i++) {

        let entry = blocks.getCompound(i)

        if (entry.contains("nbt") && (entry.nbt.id == "minecraft:jigsaw")) {
            let state = entry.nbt.getString("final_state")

            let new_state = convert(state)

            console.log(state + " : " + new_state)

            entry.nbt.putString("final_state", new_state)
        }
    }

    console.log("pallete size:" + palette.size())
    console.log(palette)
    for (let i = 0; i < palette.size(); i++) {

        let entry = palette.getCompound(i)

        if (entry.contains("Name")) {
            let state = entry.getString("Name")

            let new_state = convert(state)

            console.log(state + " : " + new_state)

            entry.putString("Name", new_state)
        }
    }

    NBTIO.write(file, nbt)
})
