let colours = [
    {"low": "blue", "cap" : "Blue", "hex" : 0xCDD7FC},
    {"low": "red", "cap" : "Red", "hex" : 0xE29F9F},
    {"low": "white", "cap" : "White", "hex" : 0xEEF8FA},
    {"low": "light_gray", "cap" : "Light Gray", "hex" : 0xCDD2DA},
    {"low": "gray", "cap" : "Gray", "hex" : 0x92959B},
    {"low": "black", "cap" : "Black", "hex" : 0x383A3D},
    {"low": "brown", "cap" : "Brown", "hex" : 0x8D6B55},
    {"low": "orange", "cap" : "Orange", "hex" : 0xFBAB60},
    {"low": "yellow", "cap" : "Yellow", "hex" : 0xFFF189},
    {"low": "lime", "cap" : "Lime", "hex" : 0xBBF378},
    {"low": "green", "cap" : "Green", "hex" : 0x5AA256},
    {"low": "cyan", "cap" : "Cyan", "hex" : 0x92C9BB},
    {"low": "light_blue", "cap" : "Light Blue", "hex" : 0xA3D8DF},
    {"low": "purple", "cap" : "Purple", "hex" : 0xA884E1},
    {"low": "magenta", "cap" : "Magenta", "hex" : 0xC684E1},
    {"low": "pink", "cap" : "Pink", "hex" : 0xF2A4E0},

]



StartupEvents.registry("item", event =>{
event.create("nettles").displayName("Nettles").food(food => {food.hunger(0)})

event.create("halloumi").displayName("Halloumi").food(food => {food.hunger(0)})
event.create("fried_halloumi").displayName("Fried Halloumi").food(food => {food.hunger(0)})

event.create("mozzarella").displayName("Mozzarella").food(food => {food.hunger(0)})

event.create("soft_chhurpi").displayName("Soft Chhurpi").food(food => {food.hunger(0)})
event.create("hard_chhurpi").displayName("Hard Chhurpi").food(food => {food.hunger(0)})

event.create("unfired_shaft").displayName("Unfired Shaft")
event.create("fired_shaft").displayName("Fired Shaft")
event.create("torque_mechanism").displayName("Torque Mechanism")

colours.forEach(colour =>{event.create(colour.low + "_lens").displayName(colour.cap + " Lens")})
/*
event.create("jerky").displayName("Jerky").food(food => food)
*/

event.create("soft_bark").displayName("Soft Bark")
event.create("bark_paper").displayName("Bark Paper").tag("tfc:scrapable")

colours.forEach(colour => {event.create("terracotta/shard_" + colour.low).displayName(colour.cap + " Terracotta Shard")})

})

StartupEvents.registry("fluid", event =>{

event.create("brew").bucketColor(0x300C0B).thinTexture(0x300C0B).displayName("Brew")
event.create("garum").bucketColor(0x321C0B).thinTexture(0x321C0B).displayName("Garum")

colours.forEach(colour => {
event.create("glass/" + colour.low).displayName("Molten " + colour.cap + " Glass").bucketColor(colour.hex).thickTexture(colour.hex).noBucket().noBlock().tag("tfc:molten_metals").tag("kubejs:molten_glass")})
event.create("glass/clear").displayName("Molten Clear Glass").bucketColor(0xD4FBFB).thickTexture(0xD4FBFB).noBucket().noBlock().tag("tfc:molten_metals").tag("kubejs:molten_glass")
})

StartupEvents.registry("block", event =>{

event.create("nettles_bush", "tfc:stationary_berry_bush").productItem("kubejs:nettles").lifecycle("january", "healthy").lifecycle("february", "healthy").lifecycle("march", "flowering").lifecycle("april", "flowering").lifecycle("june", "fruiting").lifecycle("july", "fruiting").tagBlock("minecraft:mineable/hoe").hardness(0.5).soundType("grass")
event.create("felsic_tuff_mixture").displayName("Felsic Tuff Mixture").soundType("sand").tagBlock("minecraft:mineable/shovel")

colours.forEach(colour => {
event.create("terracotta/crushed_" + colour.low).displayName(colour.cap + " Crushed Terracotta").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/shovel").soundType("sand").requiresTool(true).tagBlock("tfc:can_landslide").tagBlock("minecraft:sand").tagBlock("tfc:grass_plantable")
event.create("molten_glass/" + colour.low).displayName(colour.cap + " Glass Blob").color(colour.hex).textureAll("kubejs:block/thick_fluid_flow").tagBlock("minecraft:mineable/pickaxe").soundType("glass").requiresTool(true)
})
event.create("molten_glass/clear").displayName("Clear Glass Blob").color(0xD4FBFB).textureAll("kubejs:block/thick_fluid_flow").tagBlock("minecraft:mineable/pickaxe").soundType("glass").requiresTool(true)


event.create("andesite_machine").displayName("Andesite Machine").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/axe")
event.create("copper_machine").displayName("Copper Machine").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/axe")
event.create("brass_machine").displayName("Brass Machine").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/axe")

})


Platform.mods.kubejs.name = 'Horizons'
