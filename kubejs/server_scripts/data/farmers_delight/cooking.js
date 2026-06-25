
ServerEvents.recipes(event => {

    let datagen = Datagen(event).recipe()

    const ITEM = IO_TYPE.ITEM
    const TAG = IO_TYPE.ITEM_TAG

    const SHORT_COOKING_TIME = 100
    const COOKING_TIME = 200
    const LONG_COOKING_TIME = 400

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

    let Tag = global.Tag

    const MODPACK_NAMESPACE = "modpack"
    const RUSTIC_NAMESPACE = "rusticdelight:cooking/"
    const MILK = "farmersdelight:milk_bottle"

    let recipes = []

    let firmalife_recipes = []

    if (Platform.isLoaded("firmalife")) {
        recipes = recipes.concat(firmalife_recipes)
    }

    recipes.forEach(recipe => {

        if (recipe.container == null) {
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
