// ------------------------------------------ //
// Adding a Mortaring cobblestone interaction //
// ------------------------------------------ //

const COBBLESTONE_TO_MORTARED = {}

global.ROCK_TYPES.forEach(rock => {
    COBBLESTONE_TO_MORTARED[`tfc:rock/cobble/${rock}`] = `modpack:rock/mortared_cobble/${rock}`
})

global.CUSTOM_ROCK_TYPES.forEach(rock => {
    COBBLESTONE_TO_MORTARED[`modpack:rock/cobble/${rock}`] = `modpack:rock/mortared_cobble/${rock}`
})

BlockEvents.placed(event => {

    if (COBBLESTONE_TO_MORTARED[event.block.id] == undefined) {
        return
    }

    if (event.player.offHandItem.getId() == "tfc:mortar") {
        event.block.set(COBBLESTONE_TO_MORTARED[event.block.id])
        event.player.offHandItem.setCount(event.player.offHandItem.count - 1)
        event.level.spawnParticles("tfc:compost_ready", false, event.block.getX(), event.block.getY(), event.block.getZ(), 0.4, 0.4, 0.4, 8, 1)
        event.getPlayer().playNotifySound("minecraft:block.slime_block.place", "blocks", 0.5, 1)
    }
})


BlockEvents.rightClicked(event => {

    if (COBBLESTONE_TO_MORTARED[event.block.id] == undefined) {
        return
    }

    if (event.player.offHandItem.getId() == "tfc:mortar") {
        event.block.set(COBBLESTONE_TO_MORTARED[event.block.id])
        event.player.offHandItem.setCount(event.player.offHandItem.count - 1)
        event.level.spawnParticles("tfc:compost_ready", false, event.block.getX(), event.block.getY(), event.block.getZ(), 0.4, 0.4, 0.4, 8, 0.5)
        event.getPlayer().playNotifySound("minecraft:block.slime_block.place", "blocks", 0.5, 1)
    }
})
