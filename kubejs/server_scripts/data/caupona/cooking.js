
ServerEvents.recipes(event => {

    let datagen = Datagen(event).recipe()

    const ITEM = IO_TYPE.ITEM
    const TAG = IO_TYPE.ITEM_TAG

    const COOKING_TIME = 200

    function notRotten(input){
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

    let Tag = global.Tag

    const LOCATION = "modpack:cooking/caupona/"


    let recipes = [
        {
            container: "minecraft:bowl",
            cookingtime: COOKING_TIME,
            experience: 2.0,
            ingredients: [
                notRotten(inputOf(TAG, Tag.FOWL, 1)),
                notRotten(inputOf(TAG, Tag.FOWL, 1)),
                notRotten(inputOf(TAG, Tag.CABBAGE, 1)),
                notRotten(inputOf(TAG, Tag.ONION, 1)),
                notRotten(inputOf(ITEM, "tfc:powder/salt", 1))
            ],
            result: outputOf(ITEM, "caupona:seared_poultry", 1, 1),
            id: LOCATION + "seared_poultry"
        },
        {
            container: "minecraft:bowl",
            cookingtime: COOKING_TIME,
            experience: 2.0,
            ingredients: [
                notRotten(inputOf(TAG, Tag.FISH, 1)),
                notRotten(inputOf(TAG, Tag.FISH, 1)),
                notRotten(inputOf(TAG, Tag.CABBAGE, 1)),
                notRotten(inputOf(TAG, Tag.ONION, 1)),
                notRotten(inputOf(ITEM, "tfc:powder/salt", 1))
            ],
            result: outputOf(ITEM, "caupona:seared_fillet", 1, 1),
            id: LOCATION + "seared_fillet"
        },
        {
            container: "minecraft:bowl",
            cookingtime: COOKING_TIME,
            experience: 2.0,
            ingredients: [
                notRotten(inputOf(TAG, Tag.VEGETABLES, 1)),
                notRotten(inputOf(TAG, Tag.VEGETABLES, 1)),
                notRotten(inputOf(TAG, Tag.VEGETABLES, 1)),
                notRotten(inputOf(TAG, Tag.ONION, 1)),
                notRotten(inputOf(ITEM, "tfc:powder/salt", 1))
            ],
            result: outputOf(ITEM, "caupona:sauteed_vegetables", 1, 1),
            id: LOCATION + "sauteed_vegetables"
        },
        {
            container: "minecraft:bowl",
            cookingtime: COOKING_TIME,
            experience: 2.0,
            ingredients: [
                notRotten(inputOf(TAG, Tag.FISH, 1)),
                notRotten(inputOf(TAG, Tag.FISH, 1)),
                notRotten(inputOf(TAG, Tag.TOMATO, 1)),
                notRotten(inputOf(TAG, Tag.ONION, 1)),
                notRotten(inputOf(ITEM, "tfc:powder/salt", 1))
            ],
            result: outputOf(ITEM, "caupona:sauteed_seafood", 1, 1),
            id: LOCATION + "sauteed_seafood"
        },
        {
            container: "minecraft:bowl",
            cookingtime: COOKING_TIME,
            experience: 2.0,
            ingredients: [
                notRotten(inputOf(TAG, Tag.ROOT_VEGETABLES, 1)),
                notRotten(inputOf(TAG, Tag.ROOT_VEGETABLES, 1)),
                notRotten(inputOf(TAG, Tag.TOMATO, 1)),
                notRotten(inputOf(TAG, Tag.ONION, 1)),
                notRotten(inputOf(ITEM, "tfc:powder/salt", 1))
            ],
            result: outputOf(ITEM, "caupona:sauteed_roots", 1, 1),
            id: LOCATION + "sauteed_roots"
        },
        {
            container: "minecraft:bowl",
            cookingtime: COOKING_TIME,
            experience: 2.0,
            ingredients: [
                notRotten(inputOf(TAG, Tag.EDIBLE_MUSHROOMS, 1)),
                notRotten(inputOf(TAG, Tag.EDIBLE_MUSHROOMS, 1)),
                notRotten(inputOf(TAG, Tag.TOMATO, 1)),
                notRotten(inputOf(TAG, Tag.ONION, 1)),
                notRotten(inputOf(ITEM, "tfc:powder/salt", 1))
            ],
            result: outputOf(ITEM, "caupona:sauteed_mushrooms", 1, 1),
            id: LOCATION + "sauteed_mushrooms"
        },
        {
            container: "minecraft:bowl",
            cookingtime: COOKING_TIME,
            experience: 2.0,
            ingredients: [
                notRotten(inputOf(TAG, Tag.RED_MEAT, 1)),
                notRotten(inputOf(TAG, Tag.RED_MEAT, 1)),
                notRotten(inputOf(TAG, Tag.TOMATO, 1)),
                notRotten(inputOf(TAG, Tag.ONION, 1)),
                notRotten(inputOf(ITEM, "tfc:powder/salt", 1))
            ],
            result: outputOf(ITEM, "caupona:sauteed_meat", 1, 1),
            id: LOCATION + "sauteed_meat"
        },
        {
            container: "minecraft:bowl",
            cookingtime: COOKING_TIME,
            experience: 2.0,
            ingredients: [
                notRotten(inputOf(TAG, Tag.LEAFY_GREEN, 1)),
                notRotten(inputOf(TAG, Tag.LEAFY_GREEN, 1)),
                notRotten(inputOf(TAG, Tag.TOMATO, 1)),
                notRotten(inputOf(TAG, Tag.ONION, 1)),
                notRotten(inputOf(ITEM, "tfc:powder/salt", 1))
            ],
            result: outputOf(ITEM, "caupona:sauteed_greens", 1, 1),
            id: LOCATION + "sauteed_greens"
        },
        {
            container: "minecraft:bowl",
            cookingtime: COOKING_TIME,
            experience: 2.0,
            ingredients: [
                notRotten(inputOf(TAG, Tag.BEEF, 1)),
                notRotten(inputOf(TAG, Tag.BEEF, 1)),
                notRotten(inputOf(TAG, Tag.TOMATO, 1)),
                notRotten(inputOf(TAG, Tag.ONION, 1)),
                notRotten(inputOf(ITEM, "tfc:powder/salt", 1))
            ],
            result: outputOf(ITEM, "caupona:sauteed_beef", 1, 1),
            id: LOCATION + "sauteed_beef"
        },
        {
            container: "minecraft:bowl",
            cookingtime: COOKING_TIME,
            experience: 2.0,
            ingredients: [
                notRotten(inputOf(TAG, Tag.EGG, 1)),
                notRotten(inputOf(TAG, Tag.EGG, 1)),
                notRotten(inputOf(TAG, Tag.TOMATO, 1)),
                notRotten(inputOf(TAG, Tag.ONION, 1)),
                notRotten(inputOf(ITEM, "tfc:powder/salt", 1))
            ],
            result: outputOf(ITEM, "caupona:huevos_pericos", 1, 1),
            id: LOCATION + "huevos_pericos"
        }
    ]



    recipes.forEach(recipe => {

        if (recipe.container == null){
            datagen.farmersCooking(recipe.result, recipe.ingredients)
                .setExperience(recipe.experience)
                .setCookingTime(recipe.cookingtime)
                .id(recipe.id)
                .generate()
        } else {
            datagen.farmersCooking(recipe.result, recipe.ingredients)
                .setContainer(recipe.container)
                .setExperience(recipe.experience)
                .setCookingTime(recipe.cookingtime)
                .id(recipe.id)
                .generate()
        }
    })
})