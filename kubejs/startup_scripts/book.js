const $WritableBookItem = Java.loadClass("net.minecraft.world.item.WritableBookItem")

StartupEvents.registry("item", event =>{

    event.createCustom("stone_tablet", () => new $WritableBookItem(new $ItemProperties().stacksTo(1))).displayName("Stone Tablet")

})