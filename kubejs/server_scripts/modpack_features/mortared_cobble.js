// ------------------------------------------ //
// Adding a Mortaring cobblestone interaction //
// ------------------------------------------ //

const COBBLESTONE_TO_MORTARED = {
    "modpack:rock/cobble/argillite": "modpack:rock/mortared_cobble/argillite",
    "modpack:rock/cobble/nephelinite": "modpack:rock/mortared_cobble/nephelinite",
    "modpack:rock/cobble/blackslag": "modpack:rock/mortared_cobble/blackslag",
    "modpack:rock/cobble/travertine": "modpack:rock/mortared_cobble/travertine",
    "modpack:rock/cobble/picrite_basalt": "modpack:rock/mortared_cobble/picrite_basalt",
    "tfc:rock/cobble/granite": "modpack:rock/mortared_cobble/granite",
    "tfc:rock/cobble/diorite": "modpack:rock/mortared_cobble/diorite",
    "tfc:rock/cobble/gabbro": "modpack:rock/mortared_cobble/gabbro",
    "tfc:rock/cobble/shale": "modpack:rock/mortared_cobble/shale",
    "tfc:rock/cobble/claystone": "modpack:rock/mortared_cobble/claystone",
    "tfc:rock/cobble/limestone": "modpack:rock/mortared_cobble/limestone",
    "tfc:rock/cobble/conglomerate": "modpack:rock/mortared_cobble/conglomerate",
    "tfc:rock/cobble/dolomite": "modpack:rock/mortared_cobble/dolomite",
    "tfc:rock/cobble/chert": "modpack:rock/mortared_cobble/chert",
    "tfc:rock/cobble/chalk": "modpack:rock/mortared_cobble/chalk",
    "tfc:rock/cobble/rhyolite": "modpack:rock/mortared_cobble/rhyolite",
    "tfc:rock/cobble/basalt": "modpack:rock/mortared_cobble/basalt",
    "tfc:rock/cobble/andesite": "modpack:rock/mortared_cobble/andesite",
    "tfc:rock/cobble/dacite": "modpack:rock/mortared_cobble/dacite",
    "tfc:rock/cobble/quartzite": "modpack:rock/mortared_cobble/quartzite",
    "tfc:rock/cobble/slate": "modpack:rock/mortared_cobble/slate",
    "tfc:rock/cobble/phyllite": "modpack:rock/mortared_cobble/phyllite",
    "tfc:rock/cobble/schist": "modpack:rock/mortared_cobble/schist",
    "tfc:rock/cobble/gneiss": "modpack:rock/mortared_cobble/gneiss",
    "tfc:rock/cobble/marble": "modpack:rock/mortared_cobble/marble"
}


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
