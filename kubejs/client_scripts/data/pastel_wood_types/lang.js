ClientEvents.lang("en_us", event => {

    function createWoodLang(woodType) {

        event.add(`block.${mod_id}.wood.twig.${woodType}`, `${nameProcessing(woodType)} Twig`)
        event.add(`item.${mod_id}.wood.lumber.${woodType}`, `${nameProcessing(woodType)} Lumber`)
        event.add(`block.${mod_id}.wood.sewing_table.${woodType}`, `${nameProcessing(woodType)} Sewing Table`)
        event.add(`block.${mod_id}.wood.scribing_table.${woodType}`, `${nameProcessing(woodType)} Scribing Table`)
        event.add(`block.${mod_id}.wood.support.${woodType}`, `${nameProcessing(woodType)} Support`)
        event.add(`block.${mod_id}.wood.vertical_support.${woodType}`, `${nameProcessing(woodType)} Support`)
        event.add(`block.${mod_id}.wood.horizontal_support.${woodType}`, `${nameProcessing(woodType)} Support`)
        event.add(`block.${mod_id}.wood.shelf.${woodType}`, `${nameProcessing(woodType)} Shelf`)
        event.add(`block.${mod_id}.wood.tool_rack.${woodType}`, `${nameProcessing(woodType)} Tool Rack`)
        event.add(`block.${mod_id}.wood.sluice.${woodType}`, `${nameProcessing(woodType)} Sluice`)
        event.add(`block.${mod_id}.wood.loom.${woodType}`, `${nameProcessing(woodType)} Loom`)
    }

    global.PASTEL_WOOD_TYPES.forEach(woodType => {
        createWoodLang(woodType)
    })
})
