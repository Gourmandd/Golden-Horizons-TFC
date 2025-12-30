let StewItem = Java.loadClass("com.teammoeg.caupona.item.StewItem")
let CPBlocks = Java.loadClass("com.teammoeg.caupona.CPBlocks")
let ItemClass = Java.loadClass("net.minecraft.world.item.Item")
//let Lazy = Java.loadClass("net.neoforged.neoforge.common.util.Lazy")
let BuiltInRegistries = Java.loadClass("net.minecraft.core.registries.BuiltInRegistries")
let ResourceLocation = Java.loadClass("net.minecraft.resources.ResourceLocation")

StartupEvents.registry("item", event => {

    let p = ItemClass.Properties().craftRemainder(Items.BOWL).stacksTo(1);
    let f = () => BuiltInRegistries.FLUID.get(ResourceLocation.fromNamespaceAndPath(id, "brew"))

    event.createCustom(`${id}:brew`, () => new StewItem(CPBlocks.BOWL.get(), f, p))
})
