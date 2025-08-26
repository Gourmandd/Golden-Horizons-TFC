// ----------------------------------- //
// Zombifying pigs if fed rotten flesh //
// ----------------------------------- //

try {
// Idea inspired by @Talerzykmoth in https://discord.com/channels/432522930610765835/432522930610765837/1330472744390885387

console.info("Pig Zombification loaded")

ItemEvents.entityInteracted(event =>{
    
    let Target = event.getTarget()

    let MobWhitelist = [
        "tfc:pig",
        "minecraft:pig"
    ]
    if (MobWhitelist.indexOf(Target.type) == -1){
        //event.player.tell("not pig is " + Target.type ) //debug
        return
    }

    if (event.getItem().id != "minecraft:rotten_flesh"){
        //event.player.tell("not right item is " + event.getItem().id) //debug
        return
    }

    let NewEntity = event.level.createEntity("minecraft:zoglin")
    let Lightning = event.level.createEntity("minecraft:lightning_bolt")

    NewEntity.x+= Target.x
    NewEntity.y+= Target.y
    NewEntity.z+= Target.z

    Lightning.x+= Target.x
    Lightning.y+= Target.y
    Lightning.z+= Target.z

    Target.kill()
    NewEntity.spawn()
    Lightning.spawn()

    event.getPlayer().playNotifySound("ambient.cave", "blocks", 1, 1)
    event.player.tell("That was a mistake...")

})

} catch(e) {
    console.log(e)
}