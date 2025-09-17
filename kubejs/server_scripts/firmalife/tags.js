// requires: firmalife

ServerEvents.tags("block", event => {

    global.ROCK_TYPES.forEach(rockType => {

        global.FIRMALIFE_ORES.forEach(ore => {

            global.ORE_BLOCK_GRADES.forEach(grade => {

                event.add("tfc:breaks_when_isolated", `firmalife:ore/${grade}_${ore}/${rockType}`)

            })

        })
    })
})

ServerEvents.tags("item", event => {

    global.ROCK_TYPES.forEach(rockType => {

        global.FIRMALIFE_ORES.forEach(ore => {

            global.ORE_BLOCK_GRADES.forEach(grade => {

                event.add("c:ores", `firmalife:ore/${grade}_${ore}/${rockType}`)

            })

        })
    })
})