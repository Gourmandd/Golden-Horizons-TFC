ServerEvents.tags("item", event =>{
    global.DYE_COLOURS.forEach(colour => {
        event.add("modpack:unfired_vessels", `tfc:ceramic/${colour}_unfired_vessel`)
    })
})