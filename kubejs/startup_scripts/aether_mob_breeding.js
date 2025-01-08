
ForgeEvents.onEvent("net.minecraftforge.event.entity.living.BabyEntitySpawnEvent", event =>{

    try {

        let mob_whitelist = [
            "aether:sheepuff",
            "deep_aether:quail",
            "aether:phyg",
            "aether:moa",
            "aether_redux:shimmercow",
            "aether:flying_cow",
            "aether:aerbunny",
        ] 

        if (mob_whitelist.indexOf(event.child.type) > -1){

            if (JavaMath.random() > 0.10){

                console.log("A " + event.child.type + " was removed")  
                event.setCanceled(true)
                return
            } 
        }

    } catch(e) {
        console.log(e)
    }

})