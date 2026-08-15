//packmode: nbt_modify

let nbt_files = [
    "kubejs/nbt/graveyard/amethyst.nbt",
    "kubejs/nbt/graveyard/citrine.nbt",
    "kubejs/nbt/graveyard/topaz.nbt",
    "kubejs/nbt/memorial/house.nbt",
    "kubejs/nbt/memorial/house_special.nbt",
    "kubejs/nbt/memorial/yard.nbt",
    "kubejs/nbt/mushroom_park/picnic1.nbt",
    "kubejs/nbt/mushroom_park/picnic2.nbt",
    "kubejs/nbt/mushroom_park/picnic3.nbt",
    "kubejs/nbt/mushroom_park/picnic4.nbt",
    "kubejs/nbt/mushroom_park/picnic5.nbt",
    "kubejs/nbt/mushroom_park/picnic6.nbt",
    "kubejs/nbt/mushroom_park/picnic7.nbt",
    "kubejs/nbt/mushroom_park/picnic8.nbt",
    "kubejs/nbt/mushroom_park/picnic9.nbt",
    "kubejs/nbt/streets/fish.nbt",
    "kubejs/nbt/streets/simple.nbt",
    "kubejs/nbt/streets/trees.nbt",
    "kubejs/nbt/terrace_houses/bricks.nbt",
    "kubejs/nbt/terrace_houses/light_blue.nbt",
    "kubejs/nbt/terrace_houses/pink.nbt",
    "kubejs/nbt/terrace_houses/white.nbt",
    "kubejs/nbt/trading_hall_stalls/banners.nbt",
    "kubejs/nbt/trading_hall_stalls/books.nbt",
    "kubejs/nbt/trading_hall_stalls/empty1.nbt",
    "kubejs/nbt/trading_hall_stalls/empty2.nbt",
    "kubejs/nbt/trading_hall_stalls/empty3.nbt",
    "kubejs/nbt/trading_hall_stalls/finesmith.nbt",
    "kubejs/nbt/trading_hall_stalls/fishing.nbt",
    "kubejs/nbt/trading_hall_stalls/flowers.nbt",
    "kubejs/nbt/trading_hall_stalls/food.nbt",
    "kubejs/nbt/trading_hall_stalls/fruit.nbt",
    "kubejs/nbt/trading_hall_stalls/gift_shop.nbt",
    "kubejs/nbt/trading_hall_stalls/heads.nbt",
    "kubejs/nbt/trading_hall_stalls/ironworks.nbt",
    "kubejs/nbt/trading_hall_stalls/loom.nbt",
    "kubejs/nbt/trading_hall_stalls/loot.nbt",
    "kubejs/nbt/trading_hall_stalls/mushrooms.nbt",
    "kubejs/nbt/trading_hall_stalls/music.nbt",
    "kubejs/nbt/trading_hall_stalls/storage.nbt",
    "kubejs/nbt/trading_hall_stalls/tools.nbt",
    "kubejs/nbt/arboretum.nbt",
    "kubejs/nbt/bookshop.nbt",
    "kubejs/nbt/moonstone_temple.nbt",
    "kubejs/nbt/mushroom_park.nbt",
    "kubejs/nbt/restaurant.nbt",
    "kubejs/nbt/seed_vault.nbt",
    "kubejs/nbt/terrace_houses_base.nbt",
    "kubejs/nbt/trading_hall.nbt",
    "kubejs/nbt/waterfall.nbt"
]

// when you want to the override some replacements in the current operation.
let SPECIFIC_OVERRIDES = {
    // trial chambers
    /*
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
    "minecraft:chain": "architects_palette:nether_brass_chain",
    "tfc:metal/chain/copper": "architects_palette:nether_brass_chain",
    "minecraft:ladder": "create:copper_ladder"
    */
    // city below overrides
    /*
    "minecraft:seagrass": "minecraft:water",
    "minecraft:sea_pickle": "minecraft:water",
    "tfc:crop/wheat": "tfc:plant/dead_bush",
    "minecraft:moss_block": "tfc:grass/mollisol",
    "afc:wood/planks/teak": "tfc:grass/aridisol",
    "minecraft:jungle_planks": "tfc:grass/aridisol",
    */
}



console.log(global.MINECRAFT_TO_TFC_MAPS)

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
