let metal_items = [
    {"name":"aluminium", "displayName": "Aluminium"},
    {"name":"harderned_steel", "displayName": "Harderned Steel"},
    {"name":"nethersteel", "displayName": "Nethersteel"},
    {"name":"aluminium_bronze", "displayName": "Aluminium Bronze"},
    {"name":"cast_iron_alloy", "displayName": "Cast Iron Alloy"},
]

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

let aether_wood_types = [
    "skyroot",
    "fieldsproot",
    "blightwillow",
    "cloudcap",
    "jellyshroom",
    "crystal",
    "glacia",
    "roseroot",
    "yagroot",
    "cruderoot",
    "conberry",
    "sunroot",
]

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

StartupEvents.registry("item", event =>{
    event.create("nettles").displayName("Nettles").food(food => {food.hunger(0)})

    event.create("halloumi").displayName("Halloumi").food(food => {food.hunger(0)})
    event.create("fried_halloumi").displayName("Fried Halloumi").food(food => {food.hunger(0)})

    event.create("mozzarella").displayName("Mozzarella").food(food => {food.hunger(0)})

    event.create("soft_chhurpi").displayName("Soft Chhurpi").food(food => {food.hunger(0)})
    event.create("hard_chhurpi").displayName("Hard Chhurpi").food(food => {food.hunger(0)})

    //event.create("drying_bricks/aether").displayName("Wet Aether Mud Bricks")
    //event.create("mud_bricks/aether").displayName("Aether Mud Bricks")

    event.create("quicksoil_glass_batch").displayName("Quicksoil Glass Batch")
    event.create("unfired_shaft").displayName("Unfired Shaft")
    event.create("fired_shaft").displayName("Fired Shaft")
    event.create("oscillating_mechanism").displayName("Oscillating Mechanism")
    event.create("torque_mechanism").displayName("Torque Mechanism")

    colours.forEach(colour =>{event.create(colour.low + "_lens").displayName(colour.cap + " Lens")})
    /*
    event.create("jerky").displayName("Jerky").food(food => food)
    */

    aether_wood_types.forEach(type => {
        event.create("kubejs:wood/lumber/" + type).displayName(capitalizeFirstLetter(type) + " Lumber")
    })

    event.create("soft_bark").displayName("Soft Bark")
    event.create("bark_paper").displayName("Bark Paper").tag("tfc:scrapable")

    colours.forEach(colour => {event.create("terracotta/shard_" + colour.low).displayName(colour.cap + " Terracotta Shard")})

    function register_metal_items(metal){
        event.create("kubejs:metal/ingot/" + metal.name).displayName(metal.displayName + " Ingot").tag("tfc:pileable_ingots")
        event.create("kubejs:metal/double_ingot/" + metal.name).displayName(metal.displayName + " Double Ingot").tag("forge:double_ingots").tag("tfc:pileable_double_ingots")
        event.create("kubejs:metal/sheet/" + metal.name).displayName(metal.displayName + " Sheet").tag("forge:sheets").tag("tfc:pileable_sheets")
        event.create("kubejs:metal/double_sheet/" + metal.name).displayName(metal.displayName + " Double Sheet").tag("forge:double_sheets")
        event.create("kubejs:metal/rod/" + metal.name).displayName(metal.displayName + " Rod").tag("forge:rods")
    }
    metal_items.forEach(metal => {register_metal_items(metal)});

})

StartupEvents.registry("fluid", event =>{

    //event.create("glass/quicksoil").bucketColor(0xFFB141).thinTexture(0xFFB141).displayName("Molten Quicksoil Glass").bucketColor(0xFFB141).thickTexture(0xFFB141).noBucket().noBlock().tag("tfc:molten_metals").tag("kubejs:molten_glass")
    event.create("brew").bucketColor(0x300C0B).thinTexture(0x300C0B).displayName("Brew").noBlock().noBucket()
    event.create("garum").bucketColor(0x321C0B).thinTexture(0x321C0B).displayName("Garum").noBlock()

    colours.forEach(colour => {
    event.create("glass/" + colour.low).displayName("Molten " + colour.cap + " Glass").bucketColor(colour.hex).thickTexture(colour.hex).noBucket().noBlock().tag("tfc:molten_metals").tag("kubejs:molten_glass")})
    event.create("glass/clear").displayName("Molten Clear Glass").bucketColor(0xD4FBFB).thickTexture(0xD4FBFB).noBucket().noBlock().tag("tfc:molten_metals").tag("kubejs:molten_glass")
    event.create("electrum").displayName("Electrum").bucketColor(0xFFF10F).thickTexture(0xFFF10F).noBucket().noBlock().tag("tfc:molten_metals")
    event.create("aluminium").displayName("Aluminium").bucketColor(0xCDD6DA).thickTexture(0xCDD6DA).noBucket().noBlock().tag("tfc:molten_metals")
    event.create("sentrite").displayName("Sentrite").bucketColor(0x38D6DA).thickTexture(0x38D6DA).noBucket().noBlock().tag("tfc:molten_metals")

})

StartupEvents.registry("block", event =>{

    event.create("arkenium_anvil", "tfc:anvil").displayName("Arkenium Anvil").tier(0).tagBlock("minecraft:mineable/pickaxe").soundType("stone").requiresTool().texture('top', "aethersdelight:block/raw_arkenium_block").texture('side', "aethersdelight:block/arkenium_blast_furnace_top")

    event.create("nettles_bush", "tfc:stationary_berry_bush").productItem("kubejs:nettles").lifecycle("january", "healthy").lifecycle("february", "healthy").lifecycle("march", "flowering").lifecycle("april", "flowering").lifecycle("june", "fruiting").lifecycle("july", "fruiting").tagBlock("minecraft:mineable/hoe").hardness(0.5).soundType("grass")
    event.create("felsic_tuff_mixture").displayName("Felsic Tuff Mixture").soundType("sand").tagBlock("minecraft:mineable/shovel")

    colours.forEach(colour => {
    event.create("terracotta/crushed_" + colour.low).displayName(colour.cap + " Crushed Terracotta").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/shovel").soundType("sand").requiresTool(true).tagBlock("tfc:can_landslide").tagBlock("minecraft:sand").tagBlock("tfc:grass_plantable")
    event.create("molten_glass/" + colour.low).displayName(colour.cap + " Glass Blob").color(colour.hex).textureAll("kubejs:block/thick_fluid_flow").tagBlock("minecraft:mineable/pickaxe").soundType("glass").requiresTool(true)
    })
    event.create("molten_glass/clear").displayName("Clear Glass Blob").color(0xD4FBFB).textureAll("kubejs:block/thick_fluid_flow").tagBlock("minecraft:mineable/pickaxe").soundType("glass").requiresTool(true)

    event.create("quicksoil_poured_glass").displayName("Quicksoil Poured Glass").soundType("glass").renderType("translucent").box(0,0,0,16,1,16).noValidSpawns(true).transparent(true).defaultTranslucent().hardness(0.3).tag("c:hidden_from_recipe_viewers")
    event.create("andesite_machine").displayName("Andesite Machine").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/axe")
    event.create("copper_machine").displayName("Copper Machine").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/axe")
    event.create("brass_machine").displayName("Brass Machine").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/axe")

    event.create("dirt/aether", "tfc:dirt").farmland(farmland =>{farmland.hardness(1)}).soundType("sand").tagBlock("minecraft:mineable/shovel")
    event.create("clay/aether").soundType("sand").tagBlock("minecraft:mineable/shovel")
    //event.create("clay_grass/aether").soundType("sand").tagBlock("minecraft:mineable/shovel")
})




Platform.mods.kubejs.name = 'Horizons'
