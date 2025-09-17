try {

console.info("Quick Recipes loaded")

//I cant get this working in json

ServerEvents.recipes(event =>{
    event.shapeless(
        Item.of(`createaddition:diamond_grit_sandpaper[damage=768,custom_name='"Gem Sandpaper"']`),
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
