ServerEvents.recipes(event => {

    let datagen = Datagen(event).recipe()
    const ITEM = IO_TYPE.ITEM
    const FLUID = IO_TYPE.FLUID
    const TAG = IO_TYPE.ITEM_TAG
    const FLUID_TAG = IO_TYPE.FLUID_TAG
    const NAMESPACE = "modpack"

    let recipes = [
        {
            input: [inputOf(ITEM, "tfc:food/dried_seaweed", 1)],
            result: [outputOf(ITEM, "tfc:powder/soda_ash", 3, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "soda_ash_seaweed"
        },
        {
            input: [inputOf(ITEM, "tfc:food/dried_kelp", 1)],
            result: [outputOf(ITEM, "tfc:powder/soda_ash", 3, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "soda_ash_kelp"
        },
        {
            input: [inputOf(ITEM, "minecraft:sand", 1), inputOf(FLUID, "tfc:limewater", 100)],
            result: [outputOf(ITEM, "tfc:mortar", 16, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "mortar"
        },
        {
            input: [inputOf(ITEM, "tfc:powder/wood_ash", 1), inputOf(FLUID, "minecraft:water", 200)],
            result: [outputOf(FLUID, "tfc:lye", 200, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "lye"
        },
        {
            input: [inputOf(ITEM, "tfc:powder/lime", 1), inputOf(FLUID, "minecraft:water", 500)],
            result: [outputOf(FLUID, "tfc:limewater", 500, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "limewater_lime"
        },
        {
            input: [inputOf(ITEM, "tfc:powder/flux", 1), inputOf(FLUID, "minecraft:water", 200)],
            result: [outputOf(FLUID, "tfc:limewater", 500, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "limewater_flux"
        },
        {
            input: [inputOf(ITEM, "tfc:powder/flux", 1)],
            result: [outputOf(ITEM, "tfc:powder/lime", 1, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "lime"
        },
        {
            input: [inputOf(ITEM, "tfc:kaolin_clay", 1)],
            result: [outputOf(ITEM, "tfc:powder/kaolinite", 1, 0.5)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "kaolinite"
        },
        {
            input: [inputOf(ITEM, "minecraft:bone_meal", 1), inputOf(FLUID, "tfc:limewater", 500)],
            result: [outputOf(ITEM, "tfc:glue", 1, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "glue"
        },
        {
            input: [inputOf(ITEM, "create:crushed_raw_zinc", 1), inputOf(TAG, "c:cobblestones/normal", 1)],
            result: [outputOf(ITEM, "create:asurine", 1, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "asurine"
        },
        {
            input: [inputOf(ITEM, "create:crushed_raw_copper", 1), inputOf(TAG, "c:cobblestones/normal", 1)],
            result: [outputOf(ITEM, "create:veridium", 1, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "veridium"
        },
        {
            input: [inputOf(ITEM, "create:crushed_raw_iron", 1), inputOf(TAG, "c:cobblestones/normal", 1)],
            result: [outputOf(ITEM, "create:crimsite", 1, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "crimsite"
        },
        {
            input: [inputOf(ITEM, "tfc:blubber", 1), inputOf(FLUID, "minecraft:water", 200)],
            result: [outputOf(FLUID, "tfc:tallow", 200, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "tallow"
        },
        {
            input: [inputOf(ITEM, "tfc:powder/salt", 1), inputOf(FLUID, "minecraft:water", 100)],
            result: [outputOf(FLUID, "tfc:salt_water", 100, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "salt_water"
        },
        {
            input: [inputOf(ITEM, "tfc:food/rice_grain", 1), inputOf(FLUID, "minecraft:water", 100)],
            result: [outputOf(ITEM, "tfc:food/cooked_rice", 1, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "rice"
        },
        {
            input: [inputOf(ITEM, "tfc:olive_paste", 1), inputOf(FLUID, "minecraft:water", 200)],
            result: [outputOf(FLUID, "tfc:olive_oil_water", 200, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "olive_oil_water"
        },
        {
            input: [inputOf(ITEM, "minecraft:egg", 1), inputOf(FLUID, "minecraft:water", 100)],
            result: [outputOf(ITEM, "tfc:food/boiled_egg", 1, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "egg"
        },
        {
            input: [inputOf(ITEM, "tfc:food/beet", 1), inputOf(ITEM, "tfc:food/beet", 1), inputOf(FLUID, "tfc:salt_water", 1000)],
            result: [outputOf(ITEM, "minecraft:sugar", 1, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "sugar"
        },
        {
            input: [inputOf(ITEM, "spectrum:shale_clay", 1), inputOf(FLUID, "minecraft:water", 1000)],
            result: [outputOf(ITEM, "tfc:rock/loose/shale", 1, 0.5), outputOf(FLUID, "modpack:shale_clay_slurry", 1000, 1)],
            heated: HEAT_REQUIREMENT.NONE,
            id: "shale_clay_slurry"
        },
        {
            input: [inputOf(ITEM, "tfc:jute_net", 1), inputOf(FLUID, "modpack:shale_clay_slurry", 1000)],
            result: [outputOf(ITEM, "tfc:dirty_jute_net", 1, 1), outputOf(FLUID, "modpack:filtered_shale_clay_slurry", 1000, 1)],
            heated: HEAT_REQUIREMENT.NONE,
            id: "filtered_shale_clay_slurry"
        },
        {
            input: [inputOf(FLUID, "modpack:filtered_shale_clay_slurry", 1000)],
            result: [
                outputOf(ITEM, "tfc:powder/kaolinite", 1, 0.2),
                outputOf(ITEM, "tfc:powder/kaolinite", 1, 0.1),
                outputOf(ITEM, "tfc:powder/flux", 1, 0.2),
                outputOf(ITEM, "tfc:powder/malachite", 1, 0.2)
            ],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "heating_filtered_shale_clay_slurry"
        }
    ]

    let firmalife_recipes = [
        {
            input: [inputOf(ITEM, "firmalife:food/tomato_sauce_mix", 1), inputOf(FLUID, "minecraft:water", 100)],
            result: [outputOf(ITEM, "firmalife:food/tomato_sauce", 1, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "tomato_sauce_from_cube"
        },
        {
            input: [inputOf(ITEM, "tfc:powder/salt", 1), inputOf(FLUID, "minecraft:water", 100), inputOf(TAG, "c:foods/vegetable/tomato", 1), inputOf(TAG, "c:foods/vegetable/garlic", 1)],
            result: [outputOf(ITEM, "firmalife:food/tomato_sauce", 5, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "tomato_sauce"
        },
        {
            input: [inputOf(ITEM, "tfc:food/soybean", 1), inputOf(ITEM, "tfc:powder/salt", 1), inputOf(FLUID, "minecraft:water", 100)],
            result: [outputOf(ITEM, "firmalife:food/soy_mixture", 2, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "soy_mixture"
        },
        {
            input: [inputOf(ITEM, "tfc:food/maize_grain", 1), inputOf(FLUID, "tfc:limewater", 100)],
            result: [outputOf(ITEM, "firmalife:food/cured_maize", 1, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "cured_maize"
        },
        {
            input: [inputOf(ITEM, "firmalife:food/roasted_cocoa_beans", 1)],
            result: [outputOf(ITEM, "firmalife:food/cocoa_butter", 2, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "cocoa_butter"
        },
        {
            input: [inputOf(TAG, "tfc:foods/sweeteners", 1), inputOf(FLUID_TAG, "tfc:milks", 1000), inputOf(ITEM, "firmalife:food/cocoa_butter", 1), inputOf(ITEM, "firmalife:food/cocoa_butter", 1)],
            result: [outputOf(ITEM, "firmalife:food/white_chocolate_blend", 1, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "white_chocolate_blend"
        },
        {
            input: [inputOf(TAG, "tfc:foods/sweeteners", 1), inputOf(FLUID_TAG, "tfc:milks", 1000), inputOf(ITEM, "firmalife:food/cocoa_powder", 1), inputOf(ITEM, "firmalife:food/cocoa_butter", 1)],
            result: [outputOf(ITEM, "firmalife:food/milk_chocolate_blend", 1, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "milk_chocolate_blend"
        },
        {
            input: [inputOf(TAG, "tfc:foods/sweeteners", 1), inputOf(FLUID_TAG, "tfc:milks", 1000), inputOf(ITEM, "firmalife:food/cocoa_powder", 1), inputOf(ITEM, "firmalife:food/cocoa_powder", 1)],
            result: [outputOf(ITEM, "firmalife:food/dark_chocolate_blend", 1, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "dark_chocolate_blend"
        },
        {
            input: [inputOf(TAG, "tfc:foods/sweeteners", 1), inputOf(FLUID, "firmalife:cream", 1000), inputOf(ITEM, "firmalife:ice_shavings", 1), inputOf(ITEM, "firmalife:spice/vanilla", 1)],
            result: [outputOf(ITEM, "firmalife:food/vanilla_ice_cream", 1, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "vanilla_ice_cream"
        },
        {
            input: [inputOf(ITEM, "firmalife:food/vanilla_ice_cream", 1), inputOf(ITEM, "tfc:food/strawberry", 1), inputOf(ITEM, "tfc:food/strawberry", 1)],
            result: [outputOf(ITEM, "firmalife:food/strawberry_ice_cream", 1, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "strawberry_ice_cream"
        },
        {
            input: [inputOf(ITEM, "firmalife:food/vanilla_ice_cream", 1), inputOf(FLUID, "firmalife:chocolate", 1000)],
            result: [outputOf(ITEM, "firmalife:food/chocolate_ice_cream", 1, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "chocolate_ice_cream"
        },
        {
            input: [inputOf(ITEM, "tfc:powder/salt", 1), inputOf(ITEM, "firmalife:spice/basil_leaves", 1), inputOf(FLUID, "tfc:olive_oil", 1000), inputOf(TAG, "tfc:foods/dough", 1)],
            result: [outputOf(ITEM, "firmalife:food/pizza_dough", 4, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "pizza_dough"
        },
        {
            input: [inputOf(ITEM, "firmalife:food/butter", 1), inputOf(TAG, "tfc:foods/flour", 1), inputOf(FLUID, "minecraft:water", 1000), inputOf(TAG, "tfc:sweetener", 1)],
            result: [outputOf(ITEM, "firmalife:food/pie_dough", 4, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "pie_dough"
        },
        {
            input: [inputOf(ITEM, "tfc:powder/salt", 1), inputOf(TAG, "tfc:foods/flour", 1), inputOf(FLUID, "minecraft:water", 1000)],
            result: [outputOf(ITEM, "firmalife:food/hardtack_dough", 4, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "hardtack_dough"
        },
        {
            input: [inputOf(ITEM, "minecraft:egg", 1), inputOf(ITEM, "firmalife:food/butter", 1), inputOf(ITEM, "firmalife:spice/vanilla", 1), inputOf(TAG, "tfc:sweetener", 1), inputOf(TAG, "tfc:foods/flour", 1)],
            result: [outputOf(ITEM, "firmalife:food/cookie_dough", 4, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "cookie_dough"
        },
        {
            input: [, inputOf(TAG, "firmalife:foods/chocolate", 1), inputOf(ITEM, "firmalife:food/cookie_dough", 1), inputOf(ITEM, "firmalife:food/cookie_dough", 1), inputOf(ITEM, "firmalife:food/cookie_dough", 1), inputOf(ITEM, "firmalife:food/cookie_dough", 1)],
            result: [outputOf(ITEM, "firmalife:food/chocolate_chip_cookie_dough", 4, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "chocolate_chip_cookie_dough"
        },
        {
            input: [inputOf(ITEM, "tfc:powder/salt", 1), inputOf(FLUID, "firmalife:cream", 1000)],
            result: [outputOf(ITEM, "firmalife:food/butter", 1, 1)],
            heated: HEAT_REQUIREMENT.HEATED,
            id: "butter"
        },
    ]

    if (Platform.isLoaded("firmalife")) {
        recipes.concat(firmalife_recipes)
    }

    recipes.forEach(recipe => {
        datagen.createMixing(recipe.result, recipe.input)
            .heatRequirement(recipe.heated)
            .id(NAMESPACE + ":mixing/" + recipe.id)
            .generate()
    })
})
