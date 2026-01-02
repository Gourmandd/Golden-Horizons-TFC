// ---------------------- //
// Bulk loottable changes //
// ---------------------- //

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
        event.addBlockModifier(`minecraft:${colour}_stained_glass`).addLoot(`minecraft:${colour}_stained_glass`)
        // hnh is not on 1.21, to be replaced probably.
        //event.addBlockLootModifier(`hearth_and_home:${colour}_stained_barred_glass`).addLoot(`hearth_and_home:${colour}_stained_barred_glass`).removeLoot("minecraft:iron_nugget")
        //event.addBlockLootModifier(`hearth_and_home:${colour}_stained_barred_glass_pane`).addLoot(`hearth_and_home:${colour}_stained_barred_glass_pane`).removeLoot("minecraft:iron_nugget")
    })

    CORAL_TYPES.forEach(type =>{
        event.addBlockModifier(`minecraft:${type}_coral`).removeLoot(`minecraft:${type}_coral`).addLoot(`tfc:coral/${type}_coral`)
        event.addBlockModifier(`minecraft:dead_${type}_coral`).removeLoot(`minecraft:dead_${type}_coral`).addLoot(`tfc:coral/${type}_dead_coral`)
        event.addBlockModifier(`minecraft:${type}_coral_fan`).removeLoot(`minecraft:${type}_coral_fan`).addLoot(`tfc:coral/${type}_coral_fan`)
        event.addBlockModifier(`minecraft:dead_${type}_coral_fan`).removeLoot(`minecraft:dead_${type}_coral_fan`).addLoot(`tfc:coral/${type}_dead_coral_fan`)
    })

    REMOVE_DIRT.forEach(blockID =>{
        event.addBlockModifier(blockID).replaceLoot("minecraft:dirt", "tfc:dirt/aridisol")
    })

    REMOVE_SEEDS.forEach(blockID => {
        event.addBlockModifier(blockID).removeLoot("minecraft:wheat_seeds")
    })

    //minecraft glass is hardcoded to not drop anything unless gem saw or silk touch??
    //event.addBlockLootModifier("minecraft:orange_stained_glass").addLoot("minecraft:orange_stained_glass")
    //event.addBlockLootModifier("minecraft:glass").addLoot("minecraft:glass")
    //hearth and home
    //event.addBlockLootModifier("hearth_and_home:barred_glass").addLoot("hearth_and_home:barred_glass").removeLoot("minecraft:iron_nugget")
    //event.addBlockLootModifier("hearth_and_home:barred_glass_pane").addLoot("hearth_and_home:barred_glass_pane").removeLoot("minecraft:iron_nugget")
})

} catch(e) {
    console.log(e)
}