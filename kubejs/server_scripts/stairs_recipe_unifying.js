// ---------------------------------------------------------------------------------- //
// Makes all recipes that give stairs give 8 stairs, which is the standard set by TFC //
// ---------------------------------------------------------------------------------- //



ServerEvents.recipes(event =>{

    // modified from https://discord.com/channels/303440391124942858/1060221802380546109
    // Thank you to the original author! KJS example scripts continue to be helpful!
    event.forEachRecipe({ type: 'minecraft:crafting_shaped', output: '#minecraft:stairs' }, r => {
        let ingredients = r.originalRecipeIngredients // returns a List<Ingredient>
        let output = r.originalRecipeResult    // returns an ItemStack
        event.shaped(Item.of(output.id, 8), ['S  ', 'SS ', 'SSS' ], { S: ingredients[0] }).id(r.getId())
        
        // stairs can be returned to blocks at 4 stairs to 3 blocks 
        event.shaped(Item.of(ingredients[0], 3), ['SS', 'SS'], { S: output.id }).id("modpack:stairs_to_blocks/" + Item.of(ingredients[0]).getId().replace(":", "/"))
      })
})


ServerEvents.tags("item", event =>{
  global.DYE_COLOURS.forEach(colour =>{
    event.add("minecraft:stairs", [`hearth_and_home:${colour}_shingle_stairs`, `hearth_and_home:${colour}_terracotta_brick_stairs`])
    event.add("minecraft:stairs", ["hearth_and_home:shingle_stairs", "hearth_and_home:terracotta_brick_stairs"])
    })

    event.add("minecraft:stairs", ["#modpack:copper_shingle_stairs", "#modpack:copper_tile_stairs"])

    const EXTRA_STAIRS = [
      "spectrum:pyrite_stairs",
      "spectrum:pyrite_tiles_stairs",
      "spectrum:planed_basalt_stairs"
    ]
    EXTRA_STAIRS.forEach(item =>{ 
      event.add("minecraft:stairs", item)
    })
})