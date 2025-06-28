
const COBBLESTONE_TO_MORTARED = {
    "kubejs:rock/cobble/argillite": "kubejs:rock/mortared_cobble/argillite",
    "kubejs:rock/cobble/nephelinite": "kubejs:rock/mortared_cobble/nephelinite",
    "kubejs:rock/cobble/blackslag": "kubejs:rock/mortared_cobble/blackslag",
    "kubejs:rock/cobble/travertine": "kubejs:rock/mortared_cobble/travertine",
    "kubejs:rock/cobble/picrite_basalt": "kubejs:rock/mortared_cobble/picrite_basalt",
    "tfc:rock/cobble/granite": "kubejs:rock/mortared_cobble/granite",
    "tfc:rock/cobble/diorite": "kubejs:rock/mortared_cobble/diorite",
    "tfc:rock/cobble/gabbro": "kubejs:rock/mortared_cobble/gabbro",
    "tfc:rock/cobble/shale": "kubejs:rock/mortared_cobble/shale",
    "tfc:rock/cobble/claystone": "kubejs:rock/mortared_cobble/claystone",
    "tfc:rock/cobble/limestone": "kubejs:rock/mortared_cobble/limestone",
    "tfc:rock/cobble/conglomerate": "kubejs:rock/mortared_cobble/conglomerate",
    "tfc:rock/cobble/dolomite": "kubejs:rock/mortared_cobble/dolomite",
    "tfc:rock/cobble/chert": "kubejs:rock/mortared_cobble/chert",
    "tfc:rock/cobble/chalk": "kubejs:rock/mortared_cobble/chalk",
    "tfc:rock/cobble/rhyolite": "kubejs:rock/mortared_cobble/rhyolite",
    "tfc:rock/cobble/basalt": "kubejs:rock/mortared_cobble/basalt",
    "tfc:rock/cobble/andesite": "kubejs:rock/mortared_cobble/andesite",
    "tfc:rock/cobble/dacite": "kubejs:rock/mortared_cobble/dacite",
    "tfc:rock/cobble/quartzite": "kubejs:rock/mortared_cobble/quartzite",
    "tfc:rock/cobble/slate": "kubejs:rock/mortared_cobble/slate",
    "tfc:rock/cobble/phyllite": "kubejs:rock/mortared_cobble/phyllite",
    "tfc:rock/cobble/schist": "kubejs:rock/mortared_cobble/schist",
    "tfc:rock/cobble/gneiss": "kubejs:rock/mortared_cobble/gneiss",
    "tfc:rock/cobble/marble": "kubejs:rock/mortared_cobble/marble"
}


BlockEvents.placed(event =>{

    if (COBBLESTONE_TO_MORTARED[event.block.id] == undefined){
        return
    }

    if (event.player.offHandItem.getId() == "tfc:mortar"){
        event.block.set(COBBLESTONE_TO_MORTARED[event.block.id])
        event.player.offHandItem.setCount(event.player.offHandItem.count - 1)
        event.level.spawnParticles("tfc:compost_ready", false, event.block.getX(), event.block.getY(), event.block.getZ(), 0.4, 0.4, 0.4, 8, 0.5)
        event.getPlayer().playNotifySound("minecraft:block.slime_block.place", "blocks", 0.5, 1)
    }
})


BlockEvents.rightClicked(event =>{

    if (COBBLESTONE_TO_MORTARED[event.block.id] == undefined){
        return
    }

    if (event.player.offHandItem.getId() == "tfc:mortar"){
        event.block.set(COBBLESTONE_TO_MORTARED[event.block.id])
        event.player.offHandItem.setCount(event.player.offHandItem.count - 1)
        event.level.spawnParticles("tfc:compost_ready", false, event.block.getX(), event.block.getY(), event.block.getZ(), 0.4, 0.4, 0.4, 8, 0.5)
        event.getPlayer().playNotifySound("minecraft:block.slime_block.place", "blocks", 0.5, 1)
    }
})