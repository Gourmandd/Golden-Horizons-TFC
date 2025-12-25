
ServerEvents.tags("item", event => {

    global.CUSTOM_FRUIT_TREE_TYPES.forEach(tree => {
        event.add("minecraft:leaves", `${mod_id}:plant/${tree}_leaves`)
    })
})

ServerEvents.tags("block", event => {

    global.CUSTOM_FRUIT_TREE_TYPES.forEach(tree => {
        event.add("minecraft:leaves", `${mod_id}:plant/${tree}_leaves`)
        event.add("minecraft:mineable/hoe", [`${mod_id}:plant/${tree}_leaves`, `${mod_id}:plant/${tree}_sapling`])
        event.add("tfc:mineable/hoe", [`${mod_id}:plant/${tree}_leaves`, `${mod_id}:plant/${tree}_sapling`])
        event.add("tfc:mineable/scythe", [`${mod_id}:plant/${tree}_leaves`, `${mod_id}:plant/${tree}_sapling`])
        event.add("tfc:mineable/knife", [`${mod_id}:plant/${tree}_leaves`, `${mod_id}:plant/${tree}_sapling`])
        event.add("tfc:fruit_tree_leaves", `${mod_id}:plant/${tree}_leaves`)
        event.add("tfc:fruit_tree_saplings", `${mod_id}:plant/${tree}_sapling`)

        event.add("tfc:fruit_tree_branches", [`${mod_id}:plant/${tree}_branch`, `${mod_id}:plant/${tree}_growing_branch`])
        event.add("minecraft:mineable/axe", [`${mod_id}:plant/${tree}_branch`, `${mod_id}:plant/${tree}_growing_branch`])
    })
})
