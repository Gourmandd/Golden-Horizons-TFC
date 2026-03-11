// ---------------------- //
// Bulk loottable changes //
// ---------------------- //

try {
    console.info("Loot Tables loaded")

    LootJS.modifiers((event) => {

        global.DYE_COLOURS.forEach(colour => {
            event.addBlockModifier(`spectrum:${colour}_sapling`).replaceLoot("minecraft:oak_sapling", "tfc:wood/sapling/oak")
            event.addBlockModifier(`spectrum:${colour}_leaves`).replaceLoot("minecraft:oak_sapling", "tfc:wood/sapling/oak").replaceLoot("minecraft:oak_leaves", "tfc:wood/leaves/oak")
            event.addBlockModifier(`spectrum:${colour}_log`).replaceLoot("minecraft:oak_log", "tfc:wood/log/oak")
            event.addBlockModifier(`spectrum:stripped_${colour}_log`).replaceLoot("minecraft:stripped_oak_log", "tfc:wood/stripped_log/oak")
            event.addBlockModifier(`spectrum:${colour}_wood`).replaceLoot("minecraft:oak_wood", "tfc:wood/wood/oak")
            event.addBlockModifier(`spectrum:stripped_${colour}_wood`).replaceLoot("minecraft:stripped_oak_wood", "tfc:wood/stripped_wood/oak")
            event.addBlockModifier(`spectrum:${colour}_planks`).replaceLoot("minecraft:oak_planks", "tfc:wood/planks/oak")
            event.addBlockModifier(`spectrum:${colour}_stairs`).replaceLoot("minecraft:oak_stairs", "tfc:wood/planks/oak_stairs")
            event.addBlockModifier(`spectrum:${colour}_pressure_plate`).replaceLoot("minecraft:oak_pressure_plate", "tfc:wood/pressure_plate/oak")
            event.addBlockModifier(`spectrum:${colour}_slab`).replaceLoot("minecraft:oak_slab", "tfc:wood/planks/oak_slab")
            event.addBlockModifier(`spectrum:${colour}_fence`).replaceLoot("minecraft:oak_fence", "tfc:wood/fence/oak")
            event.addBlockModifier(`spectrum:${colour}_fence_gate`).replaceLoot("minecraft:oak_fence_gate", "tfc:wood/fence_gate/oak")
            event.addBlockModifier(`spectrum:${colour}_button`).replaceLoot("minecraft:oak_button", "tfc:wood/button/oak")
        })
    })

} catch (e) {
    console.log(e)
}
