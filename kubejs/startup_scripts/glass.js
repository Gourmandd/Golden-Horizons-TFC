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

    colours.forEach(colour =>{event.create(colour.low + "_lens").displayName(colour.cap + " Lens")})

    event.create("glass_mold", 'tfc:mold').capacity(800).fluidTagAccept("kubejs:molten_glass")
    event.create("glass_pane_mold", 'tfc:mold').capacity(50).fluidTagAccept("kubejs:molten_glass")

})

StartupEvents.registry("fluid", event =>{

    colours.forEach(colour => {
        event.create("glass/" + colour.low).displayName("Molten " + colour.cap + " Glass").bucketColor(colour.hex).thickTexture(colour.hex).noBucket().noBlock().tag("tfc:molten_metals").tag("kubejs:molten_glass")
    })

    event.create("glass/clear").displayName("Molten Clear Glass").bucketColor(0xD4FBFB).thickTexture(0xD4FBFB).noBucket().noBlock().tag("tfc:molten_metals").tag("kubejs:molten_glass")

    //event.create("glass/quicksoil").bucketColor(0xFFB141).thinTexture(0xFFB141).displayName("Molten Quicksoil Glass").bucketColor(0xFFB141).thickTexture(0xFFB141).noBucket().noBlock().tag("tfc:molten_metals").tag("kubejs:molten_glass")

})

StartupEvents.registry("block", event =>{

    colours.forEach(colour => {
        event.create("molten_glass/" + colour.low).displayName(colour.cap + " Glass Blob").color(colour.hex).textureAll("kubejs:block/thick_fluid_flow").tagBlock("minecraft:mineable/pickaxe").soundType("glass").requiresTool(true)
    })
    event.create("molten_glass/clear").displayName("Clear Glass Blob").color(0xD4FBFB).textureAll("kubejs:block/thick_fluid_flow").tagBlock("minecraft:mineable/pickaxe").soundType("glass").requiresTool(true)
    
})