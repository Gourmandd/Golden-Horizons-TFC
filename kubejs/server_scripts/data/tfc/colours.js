// -------------------------------------------- //
// Generates recipes related to coloured items  //
// -------------------------------------------- //

ServerEvents.recipes(event => {

    global.DYE_COLOURS.forEach(colour => {

        event.shapeless(`chalk:${colour}_chalk`, ["#tfc:glass_batches", `minecraft:${colour}_dye`])
            .id(`chalk:chalk_from_${colour}_dye`)

        event.shapeless(`tfc:ceramic/${colour}_unfired_vessel`, ["#modpack:unfired_vessels", `minecraft:${colour}_dye`])
            .id(`tfc:crafting/ceramic/${colour}_unfired_vessel`)

        event.custom({
            "type": "create:milling",
            "ingredients": [
                {
                    "tag": `c:dyes/makes_${colour}`
                }
            ],
            "results": [
                {
                    "id": `minecraft:${colour}_dye`,
                    "count": 1
                }
            ],
            "processingTime": 50
        }).id(`modpack:milling/dye/making_${colour}_dye`)

        event.custom({
            "type": "tfc:quern",
            "ingredient": {
                "tag": `c:dyes/makes_${colour}`
            },
            "result": {
                "id": `minecraft:${colour}_dye`,
                "count": 1
            }
        }).id(`modpack:quern/dye/making_${colour}_dye`)

        event.custom({
            "type": "tfc:pot",
            "ingredients": [
                {
                    "tag": `c:dyes/makes_${colour}`
                },
                {
                    "tag": `c:dyes/makes_${colour}`
                },
                {
                    "tag": `c:dyes/makes_${colour}`
                },
                {
                    "tag": `c:dyes/makes_${colour}`
                },
                {
                    "tag": `c:dyes/makes_${colour}`
                }
            ],
            "fluid_ingredient": {
                "fluid": "minecraft:water",
                "amount": 1000
            },
            "duration": 1000,
            "temperature": 300,
            "fluid_output": {
                "id": `tfc:${colour}_dye`,
                "amount": 1000
            }
        }).id(`modpack:pot/dye/making_${colour}_dye`)

    })
})
