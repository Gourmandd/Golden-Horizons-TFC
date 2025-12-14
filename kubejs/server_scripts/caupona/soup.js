
ServerEvents.recipes(event => {

    const ITEM = IO_TYPE.ITEM
    const TAG = IO_TYPE.ITEM_TAG
    const FLUID = IO_TYPE.FLUID
    const FLUID_TAG = IO_TYPE.FLUID_TAG

    const TEMP = 300
    const DURATION = 1000

    let tags = global.Tag

    function notRotten(input) {
        return {
            "type": "tfc:and",
            "children": [
                input,
                {
                    "type": "tfc:not_rotten"
                }
            ]
        }
    }

    let soups = [
        {
            fluid: "caupona:acquacotta",
            base: "caupona:stock",
            is_spiced: true,
            ingredients: [
                notRotten(inputOf(TAG, tags.BREAD, 1,)),
                notRotten(inputOf(TAG, tags.BREAD, 1,)),
                notRotten(inputOf(TAG, tags.BREAD, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,))
            ]
        },
        {
            fluid: "caupona:bisque",
            base: "caupona:stock",
            is_spiced: true,
            ingredients: [
                notRotten(inputOf(TAG, "caupona:seafood/crustaceans", 1,)),
                notRotten(inputOf(TAG, "caupona:seafood/crustaceans", 1,)),
                notRotten(inputOf(TAG, "caupona:seafood/crustaceans", 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,))
            ]
        },
        {
            fluid: "caupona:borscht",
            base: "caupona:stock",
            is_spiced: true,
            ingredients: [
                notRotten(inputOf(TAG, tags.BEET, 1,)),
                notRotten(inputOf(TAG, tags.BEET, 1,)),
                notRotten(inputOf(TAG, tags.BEET, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,))
            ]
        },
        {
            fluid: "caupona:borscht_cream",
            base: "caupona:scalded_milk",
            is_spiced: true,
            ingredients: [
                notRotten(inputOf(TAG, tags.BEET, 1,)),
                notRotten(inputOf(TAG, tags.BEET, 1,)),
                notRotten(inputOf(TAG, tags.BEET, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,))
            ]
        },
        {
            fluid: "caupona:congee",
            base: "caupona:stock",
            is_spiced: true,
            ingredients: [
                notRotten(inputOf(TAG, tags.RICE, 1,)),
                notRotten(inputOf(TAG, tags.RICE, 1,)),
                notRotten(inputOf(TAG, tags.RICE, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,))
            ]
        },
        {
            fluid: "caupona:cream_of_meat_soup",
            base: "caupona:scalded_milk",
            is_spiced: true,
            ingredients: [
                notRotten(inputOf(TAG, tags.RED_MEAT, 1,)),
                notRotten(inputOf(TAG, tags.RED_MEAT, 1,)),
                notRotten(inputOf(TAG, tags.RED_MEAT, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,))
            ]
        },
        {
            fluid: "caupona:cream_of_mushroom_soup",
            base: "caupona:scalded_milk",
            is_spiced: true,
            ingredients: [
                notRotten(inputOf(TAG, tags.EDIBLE_MUSHROOMS, 1,)),
                notRotten(inputOf(TAG, tags.EDIBLE_MUSHROOMS, 1,)),
                notRotten(inputOf(TAG, tags.EDIBLE_MUSHROOMS, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,))
            ]
        },
        {
            fluid: "caupona:custard",
            base: "caupona:scalded_milk",
            is_spiced: false,
            ingredients: [
                notRotten(inputOf(TAG, tags.EGG, 1,)),
                notRotten(inputOf(TAG, tags.EGG, 1,)),
                notRotten(inputOf(TAG, tags.EGG, 1,)),
                notRotten(inputOf(TAG, tags.EGG, 1,)),
                notRotten(inputOf(TAG, tags.SWEETENERS, 1,))
            ]
        },
        {
            fluid: "caupona:egg_drop_soup",
            base: "caupona:stock",
            is_spiced: true,
            ingredients: [
                notRotten(inputOf(TAG, tags.EGG, 1,)),
                notRotten(inputOf(TAG, tags.EGG, 1,)),
                notRotten(inputOf(TAG, tags.EGG, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,))
            ]
        },
        {
            fluid: "caupona:egg_tongsui",
            base: "caupona:nail_soup",
            is_spiced: false,
            ingredients: [
                notRotten(inputOf(TAG, tags.EGG, 1,)),
                notRotten(inputOf(TAG, tags.EGG, 1,)),
                notRotten(inputOf(TAG, tags.EGG, 1,)),
                notRotten(inputOf(TAG, tags.SWEETENERS, 1,)),
                notRotten(inputOf(TAG, tags.SWEETENERS, 1,))
            ]
        },
        {
            fluid: "caupona:fish_chowder",
            base: "caupona:scalded_milk",
            is_spiced: true,
            ingredients: [
                notRotten(inputOf(TAG, tags.FISH, 1,)),
                notRotten(inputOf(TAG, tags.FISH, 1,)),
                notRotten(inputOf(TAG, tags.FISH, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,))
            ]
        },
        {
            fluid: "caupona:fish_soup",
            base: "caupona:stock",
            is_spiced: true,
            ingredients: [
                notRotten(inputOf(TAG, tags.FISH, 1,)),
                notRotten(inputOf(TAG, tags.FISH, 1,)),
                notRotten(inputOf(TAG, tags.FISH, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,))
            ]
        },
        {
            fluid: "caupona:fricassee",
            base: "caupona:scalded_milk",
            is_spiced: true,
            ingredients: [
                notRotten(inputOf(TAG, tags.FOWL, 1,)),
                notRotten(inputOf(TAG, tags.FOWL, 1,)),
                notRotten(inputOf(TAG, tags.FOWL, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,))
            ]
        },
        {
            fluid: "caupona:goji_tongsui",
            base: "caupona:nail_soup",
            is_spiced: false,
            ingredients: [
                notRotten(inputOf(TAG, tags.BERRIES, 1,)),
                notRotten(inputOf(TAG, tags.BERRIES, 1,)),
                notRotten(inputOf(TAG, tags.SWEETENERS, 1,)),
                notRotten(inputOf(TAG, tags.SWEETENERS, 1,)),
                notRotten(inputOf(TAG, tags.SWEETENERS, 1,))
            ]
        },
        {
            fluid: "caupona:goulash",
            base: "caupona:stock",
            is_spiced: true,
            ingredients: [
                notRotten(inputOf(TAG, tags.BEEF, 1,)),
                notRotten(inputOf(TAG, tags.BEEF, 1,)),
                notRotten(inputOf(TAG, tags.BEEF, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,))
            ]
        },
        {
            fluid: "caupona:gruel",
            base: "caupona:nail_soup",
            is_spiced: false,
            ingredients: [
                notRotten(inputOf(TAG, tags.FLOUR, 1,)),
                notRotten(inputOf(TAG, tags.FLOUR, 1,)),
                notRotten(inputOf(TAG, tags.FLOUR, 1,)),
                notRotten(inputOf(TAG, tags.FLOUR, 1,)),
                notRotten(inputOf(TAG, tags.SWEETENERS, 1,))
            ]
        },
        {
            fluid: "caupona:meat_soup",
            base: "caupona:stock",
            is_spiced: true,
            ingredients: [
                notRotten(inputOf(TAG, tags.RED_MEAT, 1,)),
                notRotten(inputOf(TAG, tags.RED_MEAT, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,))
            ]
        }, ,
        {
            fluid: "caupona:mushroom_soup",
            base: "caupona:stock",
            is_spiced: true,
            ingredients: [
                notRotten(inputOf(TAG, tags.EDIBLE_MUSHROOMS, 1,)),
                notRotten(inputOf(TAG, tags.EDIBLE_MUSHROOMS, 1,)),
                notRotten(inputOf(TAG, tags.EDIBLE_MUSHROOMS, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,))
            ]
        },
        {
            fluid: "caupona:nettle_soup",
            base: "caupona:nail_soup",
            is_spiced: true,
            ingredients: [
                notRotten(inputOf(ITEM, "kubejs:nettles", 1,)),
                notRotten(inputOf(ITEM, "kubejs:nettles", 1,)),
                notRotten(inputOf(ITEM, "kubejs:nettles", 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,))
            ]
        },
        {
            fluid: "caupona:okroshka",
            base: "caupona:stock",
            is_spiced: true,
            ingredients: [
                notRotten(inputOf(ITEM, "minecraft:snowball", 1,)),
                notRotten(inputOf(TAG, tags.RED_MEAT, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,))
            ]
        },
        {
            fluid: "caupona:porridge",
            base: "caupona:scalded_milk",
            is_spiced: false,
            ingredients: [
                notRotten(inputOf(TAG, tags.FRUIT, 1,)),
                notRotten(inputOf(TAG, tags.GRAIN, 1,)),
                notRotten(inputOf(TAG, tags.GRAIN, 1,)),
                notRotten(inputOf(TAG, tags.GRAIN, 1,)),
                notRotten(inputOf(TAG, tags.SWEETENERS, 1,))
            ]
        },
        {
            fluid: "caupona:poultry_soup",
            base: "caupona:stock",
            is_spiced: true,
            ingredients: [
                notRotten(inputOf(TAG, tags.FOWL, 1,)),
                notRotten(inputOf(TAG, tags.FOWL, 1,)),
                notRotten(inputOf(TAG, tags.FOWL, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,))
            ]
        },
        {
            fluid: "caupona:pumpkin_soup",
            base: "caupona:stock",
            is_spiced: true,
            ingredients: [
                notRotten(inputOf(TAG, tags.PUMPKIN, 1,)),
                notRotten(inputOf(TAG, tags.PUMPKIN, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,))
            ]
        },
        {
            fluid: "caupona:pumpkin_soup_cream",
            base: "caupona:scalded_milk",
            is_spiced: true,
            ingredients: [
                notRotten(inputOf(TAG, tags.PUMPKIN, 1,)),
                notRotten(inputOf(TAG, tags.PUMPKIN, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,))
            ]
        },
        {
            fluid: "caupona:rice_pudding",
            base: "caupona:scalded_milk",
            is_spiced: false,
            ingredients: [
                notRotten(inputOf(TAG, tags.RICE, 1,)),
                notRotten(inputOf(TAG, tags.RICE, 1,)),
                notRotten(inputOf(TAG, tags.RICE, 1,)),
                notRotten(inputOf(TAG, tags.SWEETENERS, 1,)),
                notRotten(inputOf(TAG, tags.SWEETENERS, 1,))
            ]
        },
        {
            fluid: "caupona:seaweed_soup",
            base: "caupona:stock",
            is_spiced: true,
            ingredients: [
                notRotten(inputOf(TAG, "modpack:seaweed", 1,)),
                notRotten(inputOf(TAG, "modpack:seaweed", 1,)),
                notRotten(inputOf(TAG, "modpack:seaweed", 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,))
            ]
        },
        {
            fluid: "caupona:stracciatella",
            base: "caupona:stock",
            is_spiced: true,
            ingredients: [
                notRotten(inputOf(TAG, tags.EGG, 1,)),
                notRotten(inputOf(TAG, tags.EGG, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,))
            ]
        },
        {
            fluid: "caupona:ukha",
            base: "caupona:nail_soup",
            is_spiced: true,
            ingredients: [
                notRotten(inputOf(TAG, tags.FISH, 1,)),
                notRotten(inputOf(TAG, tags.ROOT_VEGETABLES, 1,)),
                notRotten(inputOf(TAG, tags.ROOT_VEGETABLES, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,))
            ]
        },
        {
            fluid: "caupona:vegetable_chowder",
            base: "caupona:scalded_milk",
            is_spiced: true,
            ingredients: [
                notRotten(inputOf(TAG, tags.ROOT_VEGETABLES, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,))
            ]
        },
        {
            fluid: "caupona:vegetable_soup",
            base: "caupona:stock",
            is_spiced: true,
            ingredients: [
                notRotten(inputOf(TAG, tags.ROOT_VEGETABLES, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,)),
                notRotten(inputOf(TAG, tags.VEGETABLES, 1,))
            ]
        }
    ]


    soups.forEach(recipe => {
        let fluid_input = inputOf(FLUID, recipe.base, 1000)
        let fluid_output = outputOf(FLUID, recipe.fluid, 1000, 1)
        let full_ingredients = recipe.ingredients

        if (recipe.is_spiced) {
            full_ingredients.push(inputOf(TAG, tags.SPICES, 1,))
        }
        delete fluid_input.type

        event.custom({
            type: "tfc:pot",
            ingredients: full_ingredients,
            fluid_ingredient: fluid_input,
            duration: DURATION,
            temperature: TEMP,
            fluid_output: fluid_output
        }).id("modpack:pot/" + recipe.fluid.replace(":", "/"))
    })
})
