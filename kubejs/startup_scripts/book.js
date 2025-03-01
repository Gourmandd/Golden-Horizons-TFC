const $WritableBookItem = Java.loadClass("net.minecraft.world.item.WritableBookItem")

StartupEvents.registry("item", event =>{

    event.createCustom("wax_tablet", () => new $WritableBookItem(new $ItemProperties().stacksTo(1)))

})