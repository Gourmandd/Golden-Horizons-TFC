// A bunch of testing around to see how viable TFC X Cold Sweat compat using KJS is, all commented out during for modpack release.
/*
const $Temperature = Java.loadClass("com.momosoftworks.coldsweat.api.util.Temperature")

BlockEvents.rightClicked("tfc:sand/white", event => {
    event.player.tell($Temperature.get(event.player.self, Internal.Temperature$Type_("world")))
})


*/