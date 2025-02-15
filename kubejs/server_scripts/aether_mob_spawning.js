// replaced by aether_mob_breeding.js in startup scripts
try {
console.info("Aether Mob Spawning loaded")

/*EntityEvents.spawned(event => {

    //console.log(event.entity.type + " was born")
    //console.log(event.entity.nbt.getInt("Age"))

    let mob_blacklist = [
    ] //add blacklisted mobs into both arrays

    let mob_whitelist = [
        "aether:sheepuff",
        "deep_aether:quail",
        "aether:phyg",
        "aether:moa",
        "aether_redux:shimmercow",
        "aether:flying_cow",
        "aether:aerbunny",
    ] 

    function chanced_remove_entity(bool){
        if (JavaMath.random() > 0.10){
            if (bool){
                console.log("A " + event.entity.type + " was removed")  
            }
            event.cancel()
            return
        } 
    }
    
    if (mob_whitelist.indexOf(event.entity.type) == -1){
        return
    }

    if (mob_blacklist.indexOf(event.entity.type) > -1){
        chanced_remove_entity(true)
    } 

    //console.log(event.entity.type + " is detected")
    //console.log(event.entity.nbt.getInt("Age"))
    

    if (event.entity.nbt.getInt("Age") != -24000.0){
        return
    }

    console.log(event.entity.type + " is a baby")
    chanced_remove_entity(true)

})*/

} catch(e) {
    console.log(e)
}