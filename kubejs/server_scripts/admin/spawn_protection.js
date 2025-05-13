/*
let protectionPoints = [
    {"x": 0 , "y": 0}
]

let blockBlacklist = [
    "minecraft:bedrock"
]

function getDistanceBetweenVectors(x1, y1, x2, y2){
    return Math.sqrt((x2 - x1) + (y2 - y1))
}

BlockEvents.placed(event =>{

    // return if block isnt being blacklisted
    if (blockBlacklist.indexOf(event.block.id) < 0){
        return
    }

    // check each point and return and cancel if its in the radius.
    protectionPoints.forEach(vector =>{
        if (getDistanceBetweenVectors(vector.x, vector.y, event.block.getY(), event.block.getX()) < 1000){
            event.cancel()
            return
        }
   })
})*/