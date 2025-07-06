
try{
console.info("Loot Tables loaded")


LootJS.modifiers((event) => {

    const REMOVE_DIRT = [ //according to the logs this is somehow being redeclared. So its not a const for now.
        "minecraft:dirt", // maybe making this local to the event could work
        "minecraft:grass_block",
        "minecraft:podzol",
        "minecraft:mycelium",
        "minecraft:farmland"
    ]

    const CORAL_TYPES = [
        "fire",
        "bubble",
        "tube",
        "brain",
        "horn"
    ]

    const REMOVE_SEEDS = [
        "minecraft:grass",
        "minecraft:tall_grass",
        "minecraft:fern",
        "minecraft:large_fern"
    ]


    global.DYE_COLOURS.forEach(colour => { 
    event.addBlockLootModifier(`kubejs:terracotta/crushed_${colour}`).randomChance(0.25).addLoot(`kubejs:terracotta/shard_${colour}`)
    event.addBlockLootModifier(`kubejs:terracotta/crushed_${colour}`).randomChance(0.5).addLoot(`kubejs:terracotta/shard_${colour}`)
    event.addBlockLootModifier(`kubejs:terracotta/crushed_${colour}`).randomChance(1).addLoot(`kubejs:terracotta/shard_${colour}`)
    event.addBlockLootModifier(`kubejs:terracotta/crushed_${colour}`).randomChance(0.75).addLoot(`kubejs:terracotta/shard_${colour}`)
    event.addBlockLootModifier(`kubejs:terracotta/crushed_${colour}`).removeLoot(`kubejs:terracotta/crushed_${colour}`)

    event.addBlockLootModifier(`minecraft:${colour}_stained_glass`).addLoot(`minecraft:${colour}_stained_glass`)
    event.addBlockLootModifier(`hearth_and_home:${colour}_stained_barred_glass`).addLoot(`hearth_and_home:${colour}_stained_barred_glass`).removeLoot("minecraft:iron_nugget")
    event.addBlockLootModifier(`hearth_and_home:${colour}_stained_barred_glass_pane`).addLoot(`hearth_and_home:${colour}_stained_barred_glass_pane`).removeLoot("minecraft:iron_nugget")
    })

    CORAL_TYPES.forEach(type =>{
        event.addBlockLootModifier(`minecraft:${type}_coral`).removeLoot(`minecraft:${type}_coral`).addLoot(`tfc:coral/${type}_coral`)
        event.addBlockLootModifier(`minecraft:dead_${type}_coral`).removeLoot(`minecraft:dead_${type}_coral`).addLoot(`tfc:coral/${type}_dead_coral`)
        event.addBlockLootModifier(`minecraft:${type}_coral_fan`).removeLoot(`minecraft:${type}_coral_fan`).addLoot(`tfc:coral/${type}_coral_fan`)
        event.addBlockLootModifier(`minecraft:dead_${type}_coral_fan`).removeLoot(`minecraft:dead_${type}_coral_fan`).addLoot(`tfc:coral/${type}_dead_coral_fan`)
    })

    REMOVE_DIRT.forEach(blockID =>{
        event.addBlockLootModifier(blockID).replaceLoot("minecraft:dirt", "tfc:dirt/loam")
    })

    REMOVE_SEEDS.forEach(blockID => {
        event.addBlockLootModifier(blockID).removeLoot("minecraft:wheat_seeds")
    })

    //minecraft glass is hardcoded to not drop anything unless gem saw or silk touch??
    //event.addBlockLootModifier("minecraft:orange_stained_glass").addLoot("minecraft:orange_stained_glass")
    //event.addBlockLootModifier("minecraft:glass").addLoot("minecraft:glass")
    //hearth and home
    event.addBlockLootModifier("hearth_and_home:barred_glass").addLoot("hearth_and_home:barred_glass").removeLoot("minecraft:iron_nugget")
    event.addBlockLootModifier("hearth_and_home:barred_glass_pane").addLoot("hearth_and_home:barred_glass_pane").removeLoot("minecraft:iron_nugget")

    global.CUSTOM_CLAY_TYPES.forEach(type => {

    if (type == "kaolinite"){return} //guard statement, kaolin already has its own clay blocks.
        event.addBlockLootModifier(`kubejs:clay/${type}_clay_block`).removeLoot(`kubejs:clay/${type}_clay_block`)
        event.addBlockLootModifier(`kubejs:clay/${type}_clay_block`).randomChance(0.50).addLoot(`kubejs:clay/${type}_clay_ball`)
        event.addBlockLootModifier(`kubejs:clay/${type}_clay_block`).randomChance(0.50).addLoot(`kubejs:clay/${type}_clay_ball`)
        event.addBlockLootModifier(`kubejs:clay/${type}_clay_block`).randomChance(1).addLoot(`kubejs:clay/${type}_clay_ball`)
        event.addBlockLootModifier(`kubejs:clay/${type}_clay_block`).randomChance(1).addLoot(`kubejs:clay/${type}_clay_ball`)
    }) 

    event.addBlockLootModifier("tfc:plant/moss").removeLoot("tfc:plant/moss").randomChance(0.25).addLoot("quark:moss_paste")
    event.addBlockLootModifier("quark:midori_block").addLoot("quark:moss_paste").removeLoot("quark:midori_block")
    event.addBlockLootModifier("quark:midori_pillar").addLoot("quark:moss_paste").removeLoot("quark:midori_pillar")
    event.addBlockLootModifier("quark:midori_block_stairs").addLoot("quark:moss_paste").removeLoot("quark:midori_block_stairs")
    event.addBlockLootModifier("quark:midori_block_slab").addLoot("quark:moss_paste").removeLoot("quark:midori_block_slab")


    global.DYE_COLOURS.forEach(colour =>{
        event.addBlockLootModifier(`spectrum:${colour}_sapling`).replaceLoot("minecraft:oak_sapling", "tfc:wood/sapling/oak")
        event.addBlockLootModifier(`spectrum:${colour}_leaves`).replaceLoot("minecraft:oak_sapling", "tfc:wood/sapling/oak").replaceLoot("minecraft:oak_leaves", "tfc:wood/leaves/oak")
        event.addBlockLootModifier(`spectrum:${colour}_log`).replaceLoot("minecraft:oak_log", "tfc:wood/log/oak")
        event.addBlockLootModifier(`spectrum:stripped_${colour}_log`).replaceLoot("minecraft:stripped_oak_log", "tfc:wood/stripped_log/oak")
        event.addBlockLootModifier(`spectrum:${colour}_wood`).replaceLoot("minecraft:oak_wood", "tfc:wood/wood/oak")
        event.addBlockLootModifier(`spectrum:stripped_${colour}_wood`).replaceLoot("minecraft:stripped_oak_wood", "tfc:wood/stripped_wood/oak")
        event.addBlockLootModifier(`spectrum:${colour}_planks`).replaceLoot("minecraft:oak_planks", "tfc:wood/planks/oak")
        event.addBlockLootModifier(`spectrum:${colour}_stairs`).replaceLoot("minecraft:oak_stairs", "tfc:wood/planks/oak_stairs")
        event.addBlockLootModifier(`spectrum:${colour}_pressure_plate`).replaceLoot("minecraft:oak_pressure_plate", "tfc:wood/planks/oak_pressure_plate")
        event.addBlockLootModifier(`spectrum:${colour}_slab`).replaceLoot("minecraft:oak_slab", "tfc:wood/planks/oak_slab")
        event.addBlockLootModifier(`spectrum:${colour}_fence`).replaceLoot("minecraft:oak_fence", "tfc:wood/planks/oak_fence")
        event.addBlockLootModifier(`spectrum:${colour}_fence_gate`).replaceLoot("minecraft:oak_fence_gate", "tfc:wood/planks/oak_fence_gate")
        event.addBlockLootModifier(`spectrum:${colour}_button`).replaceLoot("minecraft:oak_button", "tfc:wood/planks/oak_button")
    })
})

} catch(e) {
    console.log(e)
}