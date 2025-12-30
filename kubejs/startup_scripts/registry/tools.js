// requires: kubejs_tfc

const $ItemProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')
const $Vessel = Java.loadClass("net.dries007.tfc.common.items.VesselItem")
const $Jug = Java.loadClass("net.dries007.tfc.common.items.JugItem")
const $TFCConfig = Java.loadClass("net.dries007.tfc.config.TFCConfig")
const $TFCTags = Java.loadClass("net.dries007.tfc.common.TFCTags")

StartupEvents.registry("item", event => {

    /* getting 1.21 running
    event.create("metal/bucket/wrought_iron", "tfc:fluid_container")
        .displayName("Wrought Iron Bucket")
        .canPlaceLiquid(true)
        .canPlaceLiquidSource(true)
        .capacity(1000)
        .fluidTagAccept("modpack:usable_in_wrought_iron_bucket")

    /* getting 1.21 running
    event.create("glass_mold", 'tfc:mold')
        .capacity(800)
        .fluidTagAccept("kubejs:molten_glass")

    event.create("glass_pane_mold", 'tfc:mold')
        .capacity(50)
        .fluidTagAccept("kubejs:molten_glass")
    */
})

StartupEvents.registry("item", event => {

    global.CUSTOM_CLAY_TYPES.forEach(type => {


        //event.create(`ceramic/unfired_${type}_large_vessel`).displayName("Unfired ${type} Large Vessel") What? large vessel is a block


        //event.createCustom(`ceramic/${type}_vessel`, () => new $Vessel(new $ItemProperties().stacksTo(1))).displayName(`Unfired ${nameProcessing(type)} Vessel`)
        //event.createCustom(`ceramic/${type}_jug`, () => new $Jug(new $ItemProperties().stacksTo(1), $TFCConfig.SERVER.jugCapacity, $TFCTags.Fluids.USABLE_IN_JUG)).displayName(`Unfired ${nameProcessing(type)} Jug`)
    })
})
