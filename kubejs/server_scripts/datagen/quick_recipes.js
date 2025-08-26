try {

console.info("Quick Recipes loaded")

//I cant get this working in json

ServerEvents.recipes(event =>{
    event.shapeless(
        Item.of('createaddition:diamond_grit_sandpaper', "{Damage:512,RepairCost:0,display:{Name:'{\"text\":\"Gem Sandpaper\"}'}}"),
        [
            "tfc:glue",
            "minecraft:paper",
            "#tfc:gem_powders"
        ]
    )
})


} catch(e) {
    console.log(e)
}
