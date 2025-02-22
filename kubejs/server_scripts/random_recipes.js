try {
console.info("Random Recipes loaded")

let colours = [
    {"low": "blue", "cap" : "Blue"},
    {"low": "red", "cap" : "Red"},
    {"low": "white", "cap" : "White"},
    {"low": "light_gray", "cap" : "Light Gray"},
    {"low": "gray", "cap" : "Gray"},
    {"low": "black", "cap" : "Black"},
    {"low": "brown", "cap" : "Brown"},
    {"low": "orange", "cap" : "Orange"},
    {"low": "yellow", "cap" : "Yellow"},
    {"low": "lime", "cap" : "Lime"},
    {"low": "green", "cap" : "Green"},
    {"low": "cyan", "cap" : "Cyan"},
    {"low": "light_blue", "cap" : "Light Blue"},
    {"low": "purple", "cap" : "Purple"},
    {"low": "magenta", "cap" : "Magenta"},
    {"low": "pink", "cap" : "Pink"},

]


ServerEvents.recipes(event =>{

event.remove({ type: "minecraft:smelting" })
event.remove({ type: "spectrum:anvil_crushing" })
event.remove({ type: "create:haunting" })
event.remove({ type: "aether:repairing" })

event.remove({type: "minecraft:crafting_shaped", mod: "caupona"})
//event.remove({type: "caupona:aspic_melt" })
event.remove({type: "caupona:boiling" })
event.remove({type: "caupona:cooking"})
event.remove({type: "caupona:dolium", mod: "caupona"})
event.remove({type: "caupona:frying"})
event.remove({type: "caupona:spice"}) 
event.remove({mod: "quark", input: Ingredient.of(/.*glass.*/)}) 
event.remove({mod: "farmersdelight", output: Ingredient.of("crabbersdelight:coral_fragments")})
event.remove({mod: "estrogen"})
event.remove({mod: "copycats"})
event.remove({mod: "functionalstorage"})
//event.remove({type: "create:sequenced_assembly", mod: "exposure"}) I cant remove those recipes even through datapack?


event.remove({output: Ingredient.of(/.*lamp.*/), mod: "another_furniture"})
event.remove({input: "tfc:metal/ingot/zinc", type: "minecraft:stonecutting"})

event.remove({mod: "farmersdelight", output: "#forge:stripped_logs"})
event.remove({mod: "farmersdelight", output: "#forge:stripped_wood"})
event.remove({mod: "farmersdelight", output: "#tfc:dyes"})

event.remove({mod: "hearth_and_home", input: "minecraft:stick", not: {output: "hearth_and_home:shoji"}})

event.remove({mod: "magistuarmory"})

event.remove({mod: "hearth_and_home", input: "minecraft:glass"})
})

BlockEvents.rightClicked("farmersdelight:rich_soil", event =>{
    event.cancel() //cant till the soil anymore. Used for growing mushrooms
})



// This could lead to something like a recipe type or just an interaction, could be funny or not funny. 
// But it doesnt work since I dont know how to get the item to drop
/*
EntityEvents.death(event =>{
    let source = event.getSource()
    let entity = event.getEntity().getName()
    
    if (source + "" == "DamageSource (create.crush)" & entity == "translation{key='entity.minecraft.creeper', args=[]}"){
        event.server.runCommand("/tell @a its a creeper")
        let position_z = event.getEntity().getPosition().z()
        event.server.runCommand("/tell @a its a creeper" + position_z)
    }   
    //event.server.runCommand("/tell @a " + source)
})*/


ServerEvents.tags("block", event => {
    event.remove("minecraft:needs_iron_tool", "aethersdelight:arkenium_ore")
    event.add("minecraft:needs_stone_tool", "aethersdelight:arkenium_ore")

})

} catch(e) {
    console.log(e)
}