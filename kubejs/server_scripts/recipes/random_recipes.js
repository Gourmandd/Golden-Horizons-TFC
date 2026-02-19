// --------------------- //
// Bulk edits to recipes //
// --------------------- //

try {
    console.info("Random Recipes loaded")

    ServerEvents.recipes(event => {

        event.remove({ type: "create_mechanical_extruder:extruding", mod: "create_mechanical_extruder" })
        event.remove({ type: "minecraft:crafting_shaped", mod: "caupona" })
        event.remove({ type: "architects_palette:warping" })
        event.remove({ type: "createbigcannons:melting" })
        //event.remove({ type: "caupona:boiling" })
        //event.remove({ type: "caupona:cooking" })
        //event.remove({ type: "caupona:dolium", mod: "caupona" })
        //event.remove({ type: "caupona:frying" })
        //event.remove({ type: "caupona:bowl" })
        //event.remove({ type: "caupona:food" })
        event.remove({ mod: "caupona" })
        //event.remove({ type: "caupona:spice" })
        //event.remove({ mod: "quark", input: Ingredient.of(/.*glass.*/) })
        //event.remove({ mod: "simpleradio" })
        event.remove({ mod: "copycats" })
        //event.remove({ mod: "functionalstorage" })
        event.remove({ mod: "everycomp", type: "farmersdelight:cutting" })

        event.remove({ mod: "farmersdelight", output: "#c:stripped_logs" })
        event.remove({ mod: "farmersdelight", output: "#c:stripped_woods" })
        event.remove({ mod: "farmersdelight", output: "#minecraft:planks" })
        event.remove({ mod: "farmersdelight", output: "#c:dyes" })


        event.remove({ type: "minecraft:blasting", not: { mod: "pastel" } })
        event.remove({ type: "minecraft:smelting", not: { mod: "pastel" } })
        event.remove({ type: "minecraft:blasting", input: "#c:ores" })

        event.replaceInput({ item: "minecraft:honeycomb", not: { output: "minecraft:honeycomb_block" } }, "minecraft:honeycomb", "firmalife:beeswax")
    })

    BlockEvents.rightClicked("farmersdelight:rich_soil", event => {
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

} catch (e) {
    console.log(e)
}
