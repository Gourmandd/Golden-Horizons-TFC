
ServerEvents.recipes(event => {

    let datagen = Datagen(event).recipe()

    const ITEM = IO_TYPE.ITEM
    const TAG = IO_TYPE.ITEM_TAG

    const SHORT_COOKING_TIME = 100
    const COOKING_TIME = 200
    const LONG_COOKING_TIME = 400

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

    const MODPACK_NAMESPACE = "modpack"
    const RUSTIC_NAMESPACE = "rusticdelight:cooking/"
    const MILK = "farmersdelight:milk_bottle"

    let recipes = [
        {
            container: "minecraft:bowl",
            cookingtime: LONG_COOKING_TIME,
            experience: 2.0,
            ingredients: [
                notRotten(inputOf(ITEM, "rusticdelight:batter", 1)),
                inputOf(ITEM, MILK, 1),
                notRotten(inputOf(TAG, Tag.VEGETABLES, 1)),
                notRotten(inputOf(TAG, Tag.VEGETABLES, 1)),
                notRotten(inputOf(TAG, Tag.CABBAGE, 1)),
                notRotten(inputOf(TAG, Tag.CABBAGE, 1)),
            ],
            result: outputOf(ITEM, "rusticdelight:vegetable_pancakes", 1, 1),
            id: RUSTIC_NAMESPACE + "vegetable_pancakes"
        },
        {
            container: "minecraft:bowl",
            cookingtime: COOKING_TIME,
            experience: 1.0,
            ingredients: [
                notRotten(inputOf(ITEM, "tfc:food/yellow_bell_pepper", 1)),
                notRotten(inputOf(TAG, Tag.RICE, 1)),
                notRotten(inputOf(TAG, Tag.VEGETABLES, 1))
            ],
            result: outputOf(ITEM, "rusticdelight:stuffed_bell_pepper_yellow", 1, 1),
            id: RUSTIC_NAMESPACE + "stuffed_bell_pepper_yellow"
        },
        {
            container: "minecraft:bowl",
            cookingtime: COOKING_TIME,
            experience: 1.0,
            ingredients: [
                notRotten(inputOf(ITEM, "tfc:food/red_bell_pepper", 1)),
                notRotten(inputOf(TAG, Tag.RICE, 1)),
                notRotten(inputOf(TAG, Tag.VEGETABLES, 1))
            ],
            result: outputOf(ITEM, "rusticdelight:stuffed_bell_pepper_red", 1, 1),
            id: RUSTIC_NAMESPACE + "stuffed_bell_pepper_red"
        },
        {
            container: "minecraft:bowl",
            cookingtime: COOKING_TIME,
            experience: 1.0,
            ingredients: [
                notRotten(inputOf(ITEM, "tfc:food/green_bell_pepper", 1)),
                notRotten(inputOf(TAG, Tag.RICE, 1)),
                notRotten(inputOf(TAG, Tag.VEGETABLES, 1))
            ],
            result: outputOf(ITEM, "rusticdelight:stuffed_bell_pepper_green", 1, 1),
            id: RUSTIC_NAMESPACE + "stuffed_bell_pepper_green"
        },
        {
            container: null,
            cookingtime: SHORT_COOKING_TIME,
            experience: 1.0,
            ingredients: [
                inputOf(ITEM, "rusticdelight:cooking_oil" , 1),
                notRotten(inputOf(TAG, Tag.DOUGH, 1)),
                notRotten(inputOf(TAG, Tag.CABBAGE, 1)),
                notRotten(inputOf(TAG, Tag.VEGETABLES, 1))
            ],
            result: outputOf(ITEM, "rusticdelight:spring_rolls", 2, 1),
            id: RUSTIC_NAMESPACE + "spring_rolls"
        },
        {
            container: "minecraft:bowl",
            cookingtime: LONG_COOKING_TIME,
            experience: 2.0,
            ingredients: [
                notRotten(inputOf(ITEM, "rusticdelight:batter", 1)),
                notRotten(inputOf(ITEM, "rusticdelight:syrup", 1)),
                notRotten(inputOf(TAG, Tag.PUMPKIN, 1)),
                notRotten(inputOf(TAG, Tag.PUMPKIN, 1)),
                notRotten(inputOf(TAG, Tag.PUMPKIN, 1)),
                notRotten(inputOf(TAG, Tag.PUMPKIN, 1))
            ],
            result: outputOf(ITEM, "rusticdelight:pumpkin_pancakes", 1, 1),
            id: RUSTIC_NAMESPACE + "pumpkin_pancakes"
        },
        {
            container: "minecraft:bowl",
            cookingtime: LONG_COOKING_TIME,
            experience: 2.0,
            ingredients: [
                notRotten(inputOf(ITEM, "rusticdelight:batter", 1)),
                notRotten(inputOf(ITEM, "rusticdelight:syrup", 1)),
                notRotten(inputOf(TAG, Tag.SWEETENERS, 1)),
                notRotten(inputOf(TAG, Tag.SWEETENERS, 1)),
                notRotten(inputOf(TAG, Tag.SWEETENERS, 1)),
                notRotten(inputOf(TAG, Tag.SWEETENERS, 1))
            ],
            result: outputOf(ITEM, "rusticdelight:pancakes", 1, 1),
            id: RUSTIC_NAMESPACE + "pancakes"
        },
        {
            container: "minecraft:bowl",
            cookingtime: LONG_COOKING_TIME,
            experience: 2.0,
            ingredients: [
                notRotten(inputOf(ITEM, "rusticdelight:batter", 1)),
                inputOf(ITEM, "minecraft:honey_bottle", 1),
                notRotten(inputOf(TAG, Tag.BERRIES, 1)),
                notRotten(inputOf(TAG, Tag.BERRIES, 1)),
                notRotten(inputOf(TAG, Tag.SWEETENERS, 1)),
                notRotten(inputOf(TAG, Tag.SWEETENERS, 1))
            ],
            result: outputOf(ITEM, "rusticdelight:honey_pancakes", 1, 1),
            id: RUSTIC_NAMESPACE + "honey_pancakes"
        },
        {
            container: "minecraft:bowl",
            cookingtime: LONG_COOKING_TIME,
            experience: 2.0,
            ingredients: [
                notRotten(inputOf(ITEM, "rusticdelight:batter", 1)),
                inputOf(ITEM, MILK, 1),
                notRotten(inputOf(TAG, Tag.CHERRY, 1)),
                notRotten(inputOf(TAG, Tag.CHERRY, 1)),
                notRotten(inputOf(TAG, Tag.CHERRY, 1)),
                notRotten(inputOf(TAG, Tag.CHERRY, 1))
            ],
            result: outputOf(ITEM, "rusticdelight:cherry_blossom_pancakes", 1, 1),
            id: RUSTIC_NAMESPACE + "cherry_blossom_pancakes"
        },
        {
            container: "minecraft:bowl",
            cookingtime: SHORT_COOKING_TIME,
            experience: 0.35,
            ingredients: [
                inputOf(ITEM, MILK, 1),
                notRotten(inputOf(TAG, Tag.FLOUR, 1)),
                notRotten(inputOf(TAG, Tag.FLOUR, 1)),
                notRotten(inputOf(TAG, Tag.EGG, 1))
            ],
            result: outputOf(ITEM, "rusticdelight:batter", 1, 1),
            id: RUSTIC_NAMESPACE + "batter"
        },
        {
            container: "minecraft:bowl",
            cookingtime: COOKING_TIME,
            experience: 1.0,
            ingredients: [
                notRotten(inputOf(TAG, Tag.PASTA, 1)),
                notRotten(inputOf(TAG, Tag.BELL_PEPPER, 1)),
                notRotten(inputOf(TAG, Tag.BELL_PEPPER, 1)),
                notRotten(inputOf(TAG, Tag.BELL_PEPPER, 1))
            ],
            result: outputOf(ITEM, "rusticdelight:bell_pepper_pasta", 1, 1),
            id: RUSTIC_NAMESPACE + "bell_pepper_pasta"
        },
        {
            container: "minecraft:bowl",
            cookingtime: COOKING_TIME,
            experience: 1.0,
            ingredients: [
                notRotten(inputOf(TAG, Tag.BELL_PEPPER, 1)),
                notRotten(inputOf(TAG, Tag.BELL_PEPPER, 1)),
                notRotten(inputOf(TAG, Tag.BELL_PEPPER, 1))
            ],
            result: outputOf(ITEM, "rusticdelight:bell_pepper_soup", 1, 1),
            id: RUSTIC_NAMESPACE + "bell_pepper_soup"
        },
        {
            container: "minecraft:bowl",
            cookingtime: COOKING_TIME,
            experience: 1.0,
            ingredients: [
                inputOf(ITEM, "rusticdelight:cooking_oil" , 1),
                notRotten(inputOf(ITEM, "rusticdelight:batter", 1)),
                notRotten(inputOf(TAG, Tag.SQUID, 1)),
                notRotten(inputOf(TAG, Tag.TOMATO, 1))
            ],
            result: outputOf(ITEM, "rusticdelight:fried_calamari", 1, 1),
            id: RUSTIC_NAMESPACE + "fried_calamari"
        },
        {
            container: "minecraft:bowl",
            cookingtime: COOKING_TIME,
            experience: 1.0,
            ingredients: [
                inputOf(ITEM, "rusticdelight:cooking_oil" , 1),
                notRotten(inputOf(ITEM, "rusticdelight:batter", 1)),
                notRotten(inputOf(TAG, Tag.CHICKEN, 1)),
                notRotten(inputOf(TAG, Tag.TOMATO, 1))
            ],
            result: outputOf(ITEM, "rusticdelight:fried_chicken", 1, 1),
            id: RUSTIC_NAMESPACE + "fried_chicken"
        },
        {
            container: "minecraft:bowl",
            cookingtime: COOKING_TIME,
            experience: 1.0,
            ingredients: [
                inputOf(ITEM, "rusticdelight:cooking_oil" , 1),
                notRotten(inputOf(TAG, Tag.EDIBLE_MUSHROOMS, 1)),
                notRotten(inputOf(TAG, Tag.EDIBLE_MUSHROOMS, 1)),
                notRotten(inputOf(TAG, Tag.ONION, 1)),
            ],
            result: outputOf(ITEM, "rusticdelight:fried_mushrooms", 1, 1),
            id: RUSTIC_NAMESPACE + "fried_mushrooms"
        },
        {
            container: "minecraft:bowl",
            cookingtime: LONG_COOKING_TIME,
            experience: 1.0,
            ingredients: [
                notRotten(inputOf(TAG, Tag.COFFEE, 1)),
                notRotten(inputOf(TAG, Tag.CARROT, 1)),
                notRotten(inputOf(TAG, Tag.BEEF, 1)),
                notRotten(inputOf(TAG, Tag.BEEF, 1))
            ],
            result: outputOf(ITEM, "rusticdelight:coffee_braised_beef", 1, 1),
            id: RUSTIC_NAMESPACE + "coffee_braised_beef"
        },
        {
            container: "minecraft:bowl",
            cookingtime: SHORT_COOKING_TIME,
            experience: 0.35,
            ingredients: [
                inputOf(ITEM, "rusticdelight:cooking_oil" , 1),
                notRotten(inputOf(TAG, Tag.DOUGH, 1))
            ],
            result: outputOf(ITEM, "rusticdelight:fried_dough", 1, 1),
            id: RUSTIC_NAMESPACE + "fried_dough"
        },
        {
            container: "minecraft:bowl",
            cookingtime: SHORT_COOKING_TIME,
            experience: 0.35,
            ingredients: [
                inputOf(ITEM, "rusticdelight:cooking_oil" , 1),
                notRotten(inputOf(ITEM, "farmersdelight:dumplings" , 1)),
                notRotten(inputOf(ITEM, "farmersdelight:dumplings" , 1))
            ],
            result: outputOf(ITEM, "rusticdelight:fried_dumplings", 2, 1),
            id: RUSTIC_NAMESPACE + "fried_dumplings"
        },
        {
            container: "minecraft:bowl",
            cookingtime: SHORT_COOKING_TIME,
            experience: 0.35,
            ingredients: [
                inputOf(ITEM, "rusticdelight:cooking_oil" , 1),
                notRotten(inputOf(TAG, Tag.DOUGH, 1)),
                notRotten(inputOf(TAG, Tag.FRUIT, 1)),
                notRotten(inputOf(TAG, Tag.SWEETENERS, 1))
            ],
            result: outputOf(ITEM, "rusticdelight:fruit_beignet", 1, 1),
            id: RUSTIC_NAMESPACE + "fruit_beignet"
        },
        {
            container: "minecraft:bowl",
            cookingtime: COOKING_TIME,
            experience: 1.0,
            ingredients: [
                notRotten(inputOf(ITEM, "rusticdelight:roasted_coffee_beans" , 1)),
                notRotten(inputOf(ITEM, "rusticdelight:roasted_coffee_beans" , 1)),
                notRotten(inputOf(ITEM, "rusticdelight:roasted_coffee_beans" , 1)),
                notRotten(inputOf(ITEM, "rusticdelight:roasted_coffee_beans" , 1))
            ],
            result: outputOf(ITEM, "rusticdelight:coffee", 1, 1),
            id: RUSTIC_NAMESPACE + "coffee"
        },
        {
            container: "minecraft:bowl",
            cookingtime: LONG_COOKING_TIME,
            experience: 1.0,
            ingredients: [
                notRotten(inputOf(ITEM, "rusticdelight:roasted_coffee_beans" , 1)),
                notRotten(inputOf(ITEM, "rusticdelight:roasted_coffee_beans" , 1)),
                notRotten(inputOf(ITEM, "rusticdelight:roasted_coffee_beans" , 1)),
                notRotten(inputOf(ITEM, "rusticdelight:roasted_coffee_beans" , 1)),
                notRotten(inputOf(ITEM, "rusticdelight:roasted_coffee_beans" , 1)),
                notRotten(inputOf(ITEM, "rusticdelight:roasted_coffee_beans" , 1))
            ],
            result: outputOf(ITEM, "rusticdelight:dark_coffee", 1, 1),
            id: RUSTIC_NAMESPACE + "dark_coffee"
        },
        {
            container: "minecraft:bowl",
            cookingtime: COOKING_TIME,
            experience: 1.0,
            ingredients: [
                inputOf(ITEM, MILK , 1),
                notRotten(inputOf(ITEM, "rusticdelight:roasted_coffee_beans" , 1)),
                notRotten(inputOf(ITEM, "rusticdelight:roasted_coffee_beans" , 1)),
                notRotten(inputOf(ITEM, "rusticdelight:roasted_coffee_beans" , 1))
            ],
            result: outputOf(ITEM, "rusticdelight:milk_coffee", 1, 1),
            id: RUSTIC_NAMESPACE + "milk_coffee"
        },
        {
            container: "minecraft:bowl",
            cookingtime: COOKING_TIME,
            experience: 1.0,
            ingredients: [
                inputOf(ITEM, MILK , 1),
                notRotten(inputOf(ITEM, "rusticdelight:roasted_coffee_beans" , 1)),
                notRotten(inputOf(ITEM, "rusticdelight:roasted_coffee_beans" , 1)),
                notRotten(inputOf(ITEM, "rusticdelight:roasted_coffee_beans" , 1)),
                notRotten(inputOf(ITEM, "minecraft:honey_bottle" , 1))
            ],
            result: outputOf(ITEM, "rusticdelight:honey_coffee", 1, 1),
            id: RUSTIC_NAMESPACE + "honey_coffee"
        },
        {
            container: "minecraft:bowl",
            cookingtime: COOKING_TIME,
            experience: 1.0,
            ingredients: [
                inputOf(ITEM, MILK , 1),
                notRotten(inputOf(ITEM, "rusticdelight:roasted_coffee_beans" , 1)),
                notRotten(inputOf(ITEM, "rusticdelight:roasted_coffee_beans" , 1)),
                notRotten(inputOf(ITEM, "rusticdelight:roasted_coffee_beans" , 1)),
                notRotten(inputOf(ITEM, "rusticdelight:syrup" , 1))
            ],
            result: outputOf(ITEM, "rusticdelight:syrup_coffee", 1, 1),
            id: RUSTIC_NAMESPACE + "syrup_coffee"
        }
    ]

    let firmalife_recipes = [
        {
            container: "minecraft:bowl",
            cookingtime: LONG_COOKING_TIME,
            experience: 2.0,
            ingredients: [
                notRotten(inputOf(ITEM, "rusticdelight:batter", 1)),
                inputOf(ITEM, MILK, 1),
                notRotten(inputOf(ITEM, "firmalife:food/roasted_cocoa_beans", 1)),
                notRotten(inputOf(ITEM, "firmalife:food/roasted_cocoa_beans", 1)),
                notRotten(inputOf(ITEM, "firmalife:food/roasted_cocoa_beans", 1)),
                notRotten(inputOf(ITEM, "firmalife:food/roasted_cocoa_beans", 1))
            ],
            result: outputOf(ITEM, "rusticdelight:chocolate_pancakes", 1, 1),
            id: RUSTIC_NAMESPACE + "chocolate_pancakes"
        },
        {
            container: "minecraft:bowl",
            cookingtime: COOKING_TIME,
            experience: 1.0,
            ingredients: [
                inputOf(ITEM, MILK , 1),
                notRotten(inputOf(ITEM, "rusticdelight:roasted_coffee_beans" , 1)),
                notRotten(inputOf(ITEM, "rusticdelight:roasted_coffee_beans" , 1)),
                notRotten(inputOf(ITEM, "rusticdelight:roasted_coffee_beans" , 1)),
                notRotten(inputOf(ITEM, "firmalife:food/roasted_cocoa_beans" , 1)),
                notRotten(inputOf(ITEM, "firmalife:food/roasted_cocoa_beans" , 1))
            ],
            result: outputOf(ITEM, "rusticdelight:chocolate_coffee", 1, 1),
            id: RUSTIC_NAMESPACE + "chocolate_coffee"
        }
    ]

    if (Platform.isLoaded("firmalife")){
        recipes + firmalife_recipes
    }

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