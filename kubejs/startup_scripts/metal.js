let metal_items = [
    {"name":"aluminium", "displayName": "Aluminium"},
    {"name":"harderned_steel", "displayName": "Harderned Steel"},
    {"name":"nethersteel", "displayName": "Nethersteel"},
    {"name":"aluminium_bronze", "displayName": "Aluminium Bronze"},
    {"name":"cast_iron_alloy", "displayName": "Cast Iron Alloy"},
]

StartupEvents.registry("item", event =>{
    function register_metal_items(metal){
        event.create("kubejs:metal/ingot/" + metal.name).displayName(metal.displayName + " Ingot")
        event.create("kubejs:metal/double_ingot/" + metal.name).displayName(metal.displayName + " Double Ingot").tag("forge:double_ingots").tag("tfc:pileable_double_ingots")
        event.create("kubejs:metal/sheet/" + metal.name).displayName(metal.displayName + " Sheet").tag("forge:sheets").tag("tfc:pileable_sheets")
        event.create("kubejs:metal/double_sheet/" + metal.name).displayName(metal.displayName + " Double Sheet").tag("forge:double_sheets")
        event.create("kubejs:metal/rod/" + metal.name).displayName(metal.displayName + " Rod").tag("forge:rods")
    }
    metal_items.forEach(metal => {register_metal_items(metal)});
})

StartupEvents.registry("fluid", event =>{
    event.create("electrum").displayName("Electrum").bucketColor(0xFFF10F).thickTexture(0xFFF10F).noBucket().noBlock().tag("tfc:molten_metals")
    event.create("aluminium").displayName("Aluminium").bucketColor(0xCDD6DA).thickTexture(0xCDD6DA).noBucket().noBlock().tag("tfc:molten_metals")
    event.create("sentrite").displayName("Sentrite").bucketColor(0x38D6DA).thickTexture(0x38D6DA).noBucket().noBlock().tag("tfc:molten_metals")
})