// ------------------------------------------ //
// Bulk Swapping of materials used in recipes //
// ------------------------------------------ //

try {
    console.info("Material Switching loaded")


    ServerEvents.recipes(events => {

        function replace_materials(material, new_material) {

            events.replaceInput({ input: material }, material, new_material)
            events.replaceOutput({ output: material }, material, new_material)
        }

        //events.remove({input: "minecraft:barrel", mod: "createdeco"})

        replace_materials("minecraft:gold_ingot", "tfc:metal/ingot/gold")
        replace_materials("minecraft:coal", "tfc:ore/bituminous_coal")
        replace_materials("minecraft:iron_ingot", "tfc:metal/ingot/wrought_iron")
        replace_materials("minecraft:copper_ingot", "tfc:metal/ingot/copper")
        replace_materials("create:zinc_ingot", "tfc:metal/ingot/zinc")
        replace_materials("create:brass_ingot", "tfc:metal/ingot/brass")
        replace_materials("minecraft:diamond", "tfc:gem/diamond")
        replace_materials("minecraft:emerald", "tfc:gem/emerald")
        replace_materials("minecraft:lapis_lazuli", "tfc:gem/lapis_lazuli")

        replace_materials("#createbigcannons:ingot_steel", "tfc:metal/ingot/steel")
        replace_materials("minecraft:lapis_lazuli", "tfc:gem/lapis_lazuli")

        replace_materials("create:golden_sheet", "tfc:metal/sheet/gold")
        replace_materials("create:iron_sheet", "tfc:metal/sheet/wrought_iron")
        replace_materials("create:copper_sheet", "tfc:metal/sheet/copper")
        replace_materials("create:brass_sheet", "tfc:metal/sheet/brass")
        replace_materials("createaddition:zinc_sheet", "tfc:metal/sheet/zinc")

        replace_materials("minecraft:dried_kelp", "tfc:food/dried_kelp")
        replace_materials("minecraft:slime_ball", "tfc:glue")
        replace_materials("minecraft:iron_bars", "tfc:metal/bars/wrought_iron")

        //replace_materials("createbigcannons:cast_iron_ingot", "tfc:metal/ingot/cast_iron")

        replace_materials("createaddition:diamond_grit", "tfc:powder/diamond")
        replace_materials("corn_delight:corn", "tfc:food/maize")
        //replace_materials("minecraft:feather", "artisanal:quill")
        replace_materials("minecraft:sweet_berries", "#c:foods/fruit/berries")
        replace_materials("#minecraft:fox_food", "#c:foods/fruit/berries")
        replace_materials("minecraft:dirt", "#minecraft:dirt")
        //replace_materials("farmersdelight:cooked_bacon", "firmalife:food/cooked_bacon")

        //replace_materials("minecraft:apple", "tfc:foods/apples")

        events.replaceInput({ input: "create:andesite_alloy", output: /.*cloth.*/ }, "create:andesite_alloy", "#minecraft:planks")
        events.replaceInput({ input: "create:andesite_alloy", not: { output: /.*cloth.*/ } }, "create:andesite_alloy", "tfc:metal/ingot/steel")
        events.replaceOutput({ output: "create:andesite_alloy" }, "create:andesite_alloy", "tfc:metal/ingot/steel")

        events.replaceInput({ input: "minecraft:sand", not: { output: /.*sandstone.*/ } }, "minecraft:sand", "#c:sands")

        events.replaceInput({ input: "minecraft:string", not: { type: "tfc:loom" } }, "minecraft:string", "#c:strings")
        events.replaceOutput({ output: "minecraft:string" }, "minecraft:string", "#c:strings")

        events.replaceInput(
            [
                { input: "minecraft:amethyst_shard", output: "minecraft:calibrated_sculk_sensor" },
                { input: "minecraft:amethyst_shard", mod: "create" }
            ],
            "minecraft:amethyst_shard", "tfc:gem/amethyst"
        )

        events.replaceInput(
            [
                { input: "minecraft:tuff", mod: "pastel" }
            ],
            "minecraft:tuff", "tfc:rock/raw/tuff"
        )

        events.replaceOutput({ output: "minecraft:amethyst_shard", not: { mod: "pastel" } }, "minecraft:amethyst_shard", "tfc:gem/amethyst")
    })

} catch (e) {
    console.log(e)
}
