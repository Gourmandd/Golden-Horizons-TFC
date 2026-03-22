// ---------------------------------------------------------------------------------- //
// Makes all recipes that give stairs give 8 stairs, which is the standard set by TFC //
// ---------------------------------------------------------------------------------- //



ServerEvents.recipes(event => {

    // modified from https://discord.com/channels/303440391124942858/1060221802380546109
    // Thank you to the original author! KJS example scripts continue to be helpful!
    event.forEachRecipe({ type: 'minecraft:crafting_shaped', output: '#minecraft:stairs' }, r => {

        let ingredients = r.originalRecipeIngredients // returns a List<Ingredient>
        let output = r.originalRecipeResult    // returns an ItemStack
        let result = Item.of(ingredients[0].first, 3)
        let id = "modpack:stairs_to_blocks/" + Item.of(ingredients[0].first).getId().replace(":", "/")

        // All stairs return 4
        event.shaped(Item.of(output.id, 4), ['S  ', 'SS '], { S: ingredients[0] }).id(r.getId())

        if (output.id.includes("tfc:", 0) && output.getCount() == 4) {
            return
        } else {
            // stairs can be returned to blocks at 4 stairs to 3 blocks
            event.shaped(result, ['SS', 'SS'], { S: output.id }).id(id)
        }
    })
})


ServerEvents.tags("item", event => {
    const EXTRA_STAIRS = [
        "spectrum:pyrite_stairs",
        "spectrum:pyrite_tiles_stairs",
        "spectrum:planed_basalt_stairs"
    ]

    EXTRA_STAIRS.forEach(item => {
        event.add("minecraft:stairs", item)
    })
})
