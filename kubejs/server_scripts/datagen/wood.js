ServerEvents.recipes(event =>{
    
    global.OVERWORLD_WOOD_TYPES.forEach(type => {
         event.recipes.tfc.damage_inputs_shapeless_crafting(
            event.shapeless(Item.of(`${global.WOOD_TYPE_TO_MOD[type]}:wood/lumber/${type}`, 2), [Item.of(`${global.WOOD_TYPE_TO_MOD[type]}:wood/support/${type}`, "#tfc:saws")])
        ).id(`modpack:crafting/shapeless/supports_to_lumber/${type}`)
    })
})

ServerEvents.tags("item", event =>{

    global.AFC_WOOD_TYPES.forEach(type =>{
        event.add("tfc:support_beams", `afc:wood/support/${type}`)
    })
})