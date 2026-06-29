//packmode: admin_tools_test

const DO_ACTION_LOGGING = false

BlockEvents.placed(event => {

    if (!DO_ACTION_LOGGING) {
        return
    }

    let blockBlacklist = [
        "tfc:powderkeg",
        "pastel:ruin",
        "pastel:failing"
    ]

    if (blockBlacklist.indexOf(event.block.id) < 0) {
        return
    }

    console.log(`Player: ${event.player.username}(${event.player.getUuid().toString()}) placed ${event.block.id} at ${event.block.pos.toString()}`)

})
