
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

    event.create("unfired_shaft").displayName("Unfired Shaft")
    event.create("fired_shaft").displayName("Fired Shaft")
    event.create("oscillating_mechanism").displayName("Oscillating Mechanism")
    event.create("torque_mechanism").displayName("Torque Mechanism")

    event.create("soft_bark").displayName("Soft Bark")
    event.create("bark_paper").displayName("Bark Paper").tag("tfc:scrapable")
    
    colours.forEach(colour => {event.create("terracotta/shard_" + colour.low).displayName(colour.cap + " Terracotta Shard")})

})

StartupEvents.registry("block", event =>{

    event.create("nettles_bush", "tfc:stationary_berry_bush").productItem("kubejs:nettles").lifecycle("january", "healthy").lifecycle("february", "healthy").lifecycle("march", "flowering").lifecycle("april", "flowering").lifecycle("june", "fruiting").lifecycle("july", "fruiting").tagBlock("minecraft:mineable/hoe").hardness(0.5).soundType("grass")
    event.create("felsic_tuff_mixture").displayName("Felsic Tuff Mixture").soundType("sand").tagBlock("minecraft:mineable/shovel")

    colours.forEach(colour => {
        event.create("terracotta/crushed_" + colour.low).displayName(colour.cap + " Crushed Terracotta").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/shovel").soundType("sand").requiresTool(true).tagBlock("tfc:can_landslide").tagBlock("minecraft:sand").tagBlock("tfc:grass_plantable")
    })

    event.create("andesite_machine").displayName("Andesite Machine").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/axe")
    event.create("copper_machine").displayName("Copper Machine").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/axe")
    event.create("brass_machine").displayName("Brass Machine").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/axe")

})




Platform.mods.kubejs.name = 'Horizons'