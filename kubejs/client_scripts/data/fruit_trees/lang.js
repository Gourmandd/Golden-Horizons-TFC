ClientEvents.lang("en_us", event => {

    global.CUSTOM_FRUIT_TREE_TYPES.forEach(tree => {
        event.add(`block.modpack.plant.${tree}_leaves`, nameProcessing(tree) + " Leaves")
        event.add(`block.modpack.plant.${tree}_growing_branch`, nameProcessing(tree) + " Growing Branch")
        event.add(`block.modpack.plant.${tree}_branch`, nameProcessing(tree) + " Branch")
        event.add(`block.modpack.plant.${tree}_sapling`, nameProcessing(tree) + " Sapling")
    })
})
