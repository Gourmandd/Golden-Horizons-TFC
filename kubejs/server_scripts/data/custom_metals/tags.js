ServerEvents.tags("item", event => {

    global.KUBEJS_METALS.forEach(metal => {
        event.add("c:ingots", `${mod_id}:metal/ingot/${metal}`)
        event.add("c:double_ingots", `${mod_id}:metal/double_ingot/${metal}`)
        event.add("c:sheets", `${mod_id}:metal/sheet/${metal}`)
        event.add("c:double_sheets", `${mod_id}:metal/double_sheet/${metal}`)
        event.add("c:rods", `${mod_id}:metal/rod/${metal}`)

        event.add(`c:ingots/${metal}`, `${mod_id}:metal/ingot/${metal}`)
        event.add(`c:sheets/${metal}`, `${mod_id}:metal/sheet/${metal}`)
        event.add(`c:double_ingots/${metal}`, `${mod_id}:metal/double_ingot/${metal}`)
        event.add(`c:double_sheets/${metal}`, `${mod_id}:metal/double_sheets/${metal}`)


        event.add("tfc:metal_plated_blocks", `${mod_id}:metal/block/${metal}`)
        event.add("minecraft:stairs", `${mod_id}:metal/block/${metal}_stairs`)
        event.add("minecraft:slabs", `${mod_id}:metal/block/${metal}_slab`)
    })
})

ServerEvents.tags("block", event => {

    global.KUBEJS_METALS.forEach(metal => {
        event.add("minecraft:stairs", `${mod_id}:metal/block/${metal}_stairs`)
        event.add("minecraft:slabs", `${mod_id}:metal/block/${metal}_slab`)

        event.add("minecraft:mineable/pickaxe", [`${mod_id}:metal/block/${metal}`, `${mod_id}:metal/block/${metal}_stairs`, `${mod_id}:metal/block/${metal}_slab`])
    })
})
