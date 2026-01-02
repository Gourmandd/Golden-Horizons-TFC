ServerEvents.recipes(event => {

    let datagen = Datagen(event).recipe()
    const ITEM = IO_TYPE.ITEM
    const TAG = IO_TYPE.ITEM_TAG
    const NAMESPACE = "modpack"

    let recipes = [
        {
            input: [inputOf(ITEM, "tfc:food/tomato", 1)],
            result: [outputOf(ITEM, "farmersdelight:rotten_tomato", 1, 1)],
            id: "rotten_tomato"
        },
        {
            input: [inputOf(TAG, 'c:magma_block', 1)],
            result: [outputOf(ITEM, "minecraft:obsidian", 1, 1)],
            id: "obsidian"
        },
        {
            input: [inputOf(ITEM, "minecraft:packed_ice", 1)],
            result: [outputOf(ITEM, "minecraft:blue_ice", 1, 1)],
            id: "packed_ice"
        },
    ]

    recipes.forEach(recipe => {
        datagen.createHaunting(recipe.result, recipe.input)
            .id(NAMESPACE + ":haunting/" + recipe.id)
            .generate()
    })
})