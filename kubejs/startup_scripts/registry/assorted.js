// -------------------------------------------- //
// Assorted Registry and Startup Script Stuff   //
// -------------------------------------------- //

StartupEvents.registry("item", event => {

    event.create(`${id}:saw`).displayName("Wrought Iron Sawblade")
    event.create(`${id}:unfired_shaft`).displayName("Unfired Shaft")
    event.create(`${id}:fired_shaft`).displayName("Fired Shaft")
    event.create(`${id}:oscillating_mechanism`).displayName("Oscillating Mechanism")
    event.create(`${id}:torque_mechanism`).displayName("Torque Mechanism")

    event.create(`${id}:olive_pomace`).displayName("Olive Pomace")
    event.create(`${id}:dry_olive_pomace`).displayName("Dry Olive Pomace")

    event.create(`${id}:raw_aluminium_mixture`).displayName("Raw Aluminium Mixture")
    event.create(`${id}:aluminium_nugget`).displayName("Aluminium Nugget")

    event.create(`${id}:tool/brick_mold`).maxDamage(1800).displayName("Brick Mold")
})


StartupEvents.registry("block", event => {

    event.create(`${id}:andesite_machine`).displayName("Andesite Machine").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/axe")
    event.create(`${id}:copper_machine`).displayName("Copper Machine").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/axe")
    event.create(`${id}:brass_machine`).displayName("Brass Machine").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/axe")
})

Platform.mods.kubejs.name = 'Horizons'
