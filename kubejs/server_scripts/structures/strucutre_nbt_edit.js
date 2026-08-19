//packmode: nbt_modify

let nbt_files = [
    "kubejs/nbt/excavation_site/excavation_site.nbt",
    "kubejs/nbt/forsaken_cathedral/cellar.nbt",
    "kubejs/nbt/forsaken_cathedral/entrance.nbt",
    "kubejs/nbt/preservation_ruins/dike_gate.nbt",
    "kubejs/nbt/preservation_ruins/wireless_redstone.nbt",
    "kubejs/nbt/undergrowth_manor/bottom1.nbt",
    "kubejs/nbt/undergrowth_manor/bottom2.nbt",
    "kubejs/nbt/undergrowth_manor/bottom3.nbt",
    "kubejs/nbt/undergrowth_manor/bottom4.nbt",
    "kubejs/nbt/undergrowth_manor/top1.nbt",
    "kubejs/nbt/undergrowth_manor/top2.nbt",
    "kubejs/nbt/undergrowth_manor/top3.nbt",
    "kubejs/nbt/undergrowth_manor/top4.nbt"

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
    "minecraft:crimson_stairs": "afc:wood/planks/mahogany_stairs",
    "minecraft:crimson_fence": "afc:wood/fence/mahogany",
    "minecraft:mangrove_sign": "tfc:wood/fence/mangrove",
    "minecraft:gravel": "modpack:rock/gravel/argillite",
    "minecraft:short_grass": "tfc:plant/bluegrass",
    "minecraft:grass": "tfc:plant/bluegrass",
    "minecraft:fern": "tfc:plant/sword_fern"
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
