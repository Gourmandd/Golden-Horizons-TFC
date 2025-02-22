

ItemEvents.foodEaten("aether:white_apple", event =>{
    event.player.removeEffect("aether:remedy")
})

ItemEvents.foodEaten("ancient_aether:slammberry", event =>{
    event.server.scheduleInTicks(1, o =>{event.player.removeEffect("ancient_aether:natures_boost")})
})
