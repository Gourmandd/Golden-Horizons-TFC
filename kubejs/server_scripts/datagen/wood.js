ServerEvents.recipes(event =>{

    global.TFC_WOOD_TYPES.forEach(type =>{
        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless(Item.of("tfc:wood/lumber/" + type, 2), [Item.of("tfc:wood/support/" + type, "#tfc:saws")])
        ).id("modpack:crafting/shapeless/supports_to_lumber/" + type)
    })

    global.AFC_WOOD_TYPES.forEach(type =>{
        event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless(Item.of("afc:wood/lumber/" + type, 2), [Item.of("afc:wood/support/" + type, "#tfc:saws")])
        ).id("modpack:crafting/shapeless/supports_to_lumber/" + type)
    })
})

ServerEvents.tags("item", event =>{

    global.AFC_WOOD_TYPES.forEach(type =>{
        event.add("tfc:support_beams", "afc:wood/support/" + type )
    })
})