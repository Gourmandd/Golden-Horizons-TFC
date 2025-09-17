// --------------------------------------------- //
// WIP Script for custom fire burning mechanics  //
// --------------------------------------------- //

/*
let MoonlightEventsHelper = Java.loadClass("net.mehvahdjukaar.moonlight.api.events.MoonlightEventsHelper")
let IFireConsumeBlockEvent = Java.loadClass("net.mehvahdjukaar.moonlight.api.events.IFireConsumeBlockEvent")
// https://github.com/MehVahdJukaar/Moonlight/blob/1.20/common/src/main/java/net/mehvahdjukaar/moonlight/api/events/IFireConsumeBlockEvent.java

StartupEvents.init(event => {

    function onFireConsume(FireEvent){
        console.log("fire")

        let blockId = FireEvent.getState().getBlock().id

        if (blockId in global.BURNED_BLOCKS_DICT){
            let finalBlockState = Block.getBlock(global.BURNED_BLOCKS_DICT[blockId]).defaultBlockState()
            FireEvent.setFinalState(finalBlockState)
        }
    }

    MoonlightEventsHelper.addListener(FireEvent => {
        onFireConsume(FireEvent)
    }, IFireConsumeBlockEvent)

})

StartupEvents.registry("block", event => {
    
    event.create("rubble")
    event.create("wood/planks/charred")
    event.create("wood/log/charred")
    event.create("rock/bricks/charred")
})*/