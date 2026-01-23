// ---------------------- //
// Bulk loottable changes //
// ---------------------- //

try {
    console.info("Loot Tables loaded")


    LootJS.modifiers((event) => {

        global.DYE_COLOURS.forEach(colour => {
            event.addBlockModifier(`pastel:${colour}_sapling`).replaceLoot("minecraft:oak_sapling", "tfc:wood/sapling/oak")
            event.addBlockModifier(`pastel:${colour}_leaves`).replaceLoot("minecraft:oak_sapling", "tfc:wood/sapling/oak").replaceLoot("minecraft:oak_leaves", "tfc:wood/leaves/oak")
            event.addBlockModifier(`pastel:${colour}_log`).replaceLoot("minecraft:oak_log", "tfc:wood/log/oak")
            event.addBlockModifier(`pastel:stripped_${colour}_log`).replaceLoot("minecraft:stripped_oak_log", "tfc:wood/stripped_log/oak")
            event.addBlockModifier(`pastel:${colour}_wood`).replaceLoot("minecraft:oak_wood", "tfc:wood/wood/oak")
            event.addBlockModifier(`pastel:stripped_${colour}_wood`).replaceLoot("minecraft:stripped_oak_wood", "tfc:wood/stripped_wood/oak")
            event.addBlockModifier(`pastel:${colour}_planks`).replaceLoot("minecraft:oak_planks", "tfc:wood/planks/oak")
            event.addBlockModifier(`pastel:${colour}_stairs`).replaceLoot("minecraft:oak_stairs", "tfc:wood/planks/oak_stairs")
            event.addBlockModifier(`pastel:${colour}_pressure_plate`).replaceLoot("minecraft:oak_pressure_plate", "tfc:wood/pressure_plate/oak")
            event.addBlockModifier(`pastel:${colour}_slab`).replaceLoot("minecraft:oak_slab", "tfc:wood/planks/oak_slab")
            event.addBlockModifier(`pastel:${colour}_fence`).replaceLoot("minecraft:oak_fence", "tfc:wood/fence/oak")
            event.addBlockModifier(`pastel:${colour}_fence_gate`).replaceLoot("minecraft:oak_fence_gate", "tfc:wood/fence_gate/oak")
            event.addBlockModifier(`pastel:${colour}_button`).replaceLoot("minecraft:oak_button", "tfc:wood/button/oak")
        })

        global.PASTEL_WOOD_TYPES.forEach(woodType => {
            event.addBlockModifier(`${mod_id}:wood/twig/${woodType}`).addLoot(`${mod_id}:wood/twig/${woodType}`)
            event.addBlockModifier(`${mod_id}:wood/scribing_table/${woodType}`).addLoot(`${mod_id}:wood/scribing_table/${woodType}`)
            event.addBlockModifier(`${mod_id}:wood/sewing_table/${woodType}`).addLoot(`${mod_id}:wood/sewing_table/${woodType}`)
            event.addBlockModifier(`${mod_id}:wood/vertical_support/${woodType}`).addLoot(`${mod_id}:wood/support/${woodType}`)
            event.addBlockModifier(`${mod_id}:wood/horizontal_support/${woodType}`).addLoot(`${mod_id}:wood/support/${woodType}`)
            event.addBlockModifier(`${mod_id}:wood/loom/${woodType}`).addLoot(`${mod_id}:wood/loom/${woodType}`)
            event.addBlockModifier(`${mod_id}:wood/tool_rack/${woodType}`).addLoot(`${mod_id}:wood/tool_rack/${woodType}`)
            event.addBlockModifier(`${mod_id}:wood/shelf/${woodType}`).addLoot(`${mod_id}:wood/shelf/${woodType}`)

            event.addBlockModifier(`${mod_id}:wood/sluice/${woodType}`).addLoot(`${mod_id}:wood/sluice/${woodType}`).matchCustomCondition({
                "condition": "minecraft:block_state_property",
                "block": `${mod_id}:wood/sluice/${woodType}`,
                "properties": {
                    "upper": "true"
                }
            })
        })
    })



} catch (e) {
    console.log(e)
}
