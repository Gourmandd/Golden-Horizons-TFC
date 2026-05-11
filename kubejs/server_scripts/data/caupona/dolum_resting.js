// requires: caupona

ServerEvents.recipes(event => {

    const TEMP = 300
    const DURATION = 1000

    // TFC compatible recipes for Caupona soup
    global.CAUPONA_ASPICS.forEach(soup => {

        event.custom({
            type: "tfc:pot",
            ingredients: [
                {
                    "item": "tfc:powder/salt"
                }
            ],
            fluid_ingredient: {
                "fluid": `caupona:${soup}`,
                "amount": 1000
            },
            duration: DURATION,
            temperature: TEMP,
            item_output: [{
                "id": `caupona:${soup}_aspic`
            }]
        }).id(`modpack:pot/aspic/${soup}`)

        event.custom({
            type: "tfc:pot",
            ingredients: [
                {
                    "item": `caupona:${soup}_aspic`
                }
            ],
            fluid_ingredient: {
                "fluid": "minecraft:water",
                "amount": 1000
            },
            duration: DURATION,
            temperature: TEMP,
            fluid_output: {
                "id": `caupona:${soup}`,
                "amount": 1000
            }
        }).id(`modpack:pot/aspic_melting/${soup}`)
    })
})
