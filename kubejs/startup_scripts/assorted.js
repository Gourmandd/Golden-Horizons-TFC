

StartupEvents.registry("item", event =>{

    event.create("saw").displayName("Wrought Iron Sawblade")
    event.create("unfired_shaft").displayName("Unfired Shaft")
    event.create("fired_shaft").displayName("Fired Shaft")
    event.create("oscillating_mechanism").displayName("Oscillating Mechanism")
    event.create("torque_mechanism").displayName("Torque Mechanism")

    event.create("soft_bark").displayName("Soft Bark")
    
    global.DYE_COLOURS.forEach(colour => {event.create("terracotta/shard_" + colour).displayName(nameProcessing(colour) + " Terracotta Shard")})

    event.create("food/gingerbread_man_cutter").displayName("Gingerbread Man Cutter").unstackable().maxDamage(64)
    event.create("food/gingerbread_woman_cutter").displayName("Gingerbread Woman Cutter").unstackable().maxDamage(64)
    event.create("food/gingerbread_star_cutter").displayName("Gingerbread Star Cutter").unstackable().maxDamage(64)
    event.create("food/gingerbread_tree_cutter").displayName("Gingerbread Tree Cutter").unstackable().maxDamage(64)
    event.create("food/gingerbread_creeper_cutter").displayName("Gingerbread Creeper Cutter").unstackable().maxDamage(64)

    event.create("raw_aluminium_mixture").displayName("Raw Aluminium Mixture")
    event.create("aluminium_nugget").displayName("Aluminium Nugget")
})

StartupEvents.registry("block", event =>{

    event.create("felsic_tuff_mixture").displayName("Felsic Tuff Mixture").soundType("sand").tagBlock("minecraft:mineable/shovel")

    global.DYE_COLOURS.forEach(colour => {
        event.create("terracotta/crushed_" + colour).displayName(nameProcessing(colour) + " Crushed Terracotta").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/shovel").soundType("sand").requiresTool(true).tagBlock("tfc:can_landslide").tagBlock("minecraft:sand").tagBlock("tfc:grass_plantable")
    })

    event.create("andesite_machine").displayName("Andesite Machine").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/axe")
    event.create("copper_machine").displayName("Copper Machine").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/axe")
    event.create("brass_machine").displayName("Brass Machine").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/axe")
    
})




Platform.mods.kubejs.name = 'Horizons'
