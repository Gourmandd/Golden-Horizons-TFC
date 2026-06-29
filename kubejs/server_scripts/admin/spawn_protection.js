//packmode: admin_tools_test

const DO_PROTECTION = false

function getDistanceBetweenVectors(x1, y1, x2, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1))
}

BlockEvents.placed(event => {

    if (!DO_PROTECTION) {
        return
    }

    let protectionPoints = [
        { "x": 0, "y": 0, "range": 5000 }
    ]

    let blockBlacklist = [
        "minecraft:bedrock"
    ]

    // return if block isnt being blacklisted
    if (blockBlacklist.indexOf(event.block.id) < 0) {
        return
    }

    // check each point and return and cancel if its in the radius.
    protectionPoints.forEach(point => {

        let pos = getDistanceBetweenVectors(point.x, point.y, event.block.getY(), event.block.getX())

        if (pos < point.range) {
            console.log("Violation of spawn protection at: " + String(pos))
            event.player.displayClientMessage("Spawn protection doesn't allow you to do this.", true)
            event.cancel()
            return
        }
    })
})
