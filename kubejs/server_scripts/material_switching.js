ServerEvents.recipes(events =>{

function replace_materials(material, new_material){

events.replaceInput({input: material}, material, new_material)
events.replaceOutput({output: material}, material, new_material)
}

//events.remove({input: "minecraft:barrel", mod: "createdeco"})

replace_materials("minecraft:gold_ingot", "tfc:metal/ingot/gold")
replace_materials("minecraft:iron_ingot", "tfc:metal/ingot/wrought_iron")
replace_materials("minecraft:copper_ingot", "tfc:metal/ingot/copper")
replace_materials("create:zinc_ingot", "tfc:metal/ingot/zinc")
replace_materials("create:brass_ingot", "tfc:metal/ingot/brass")
replace_materials("minecraft:diamond", "tfc:gem/diamond")
replace_materials("minecraft:emerald", "tfc:gem/emerald")
replace_materials("minecraft:amethyst_shard", "tfc:gem/amethyst")
replace_materials("minecraft:lapis_lazuli", "tfc:gem/lapis_lazuli")

replace_materials("#createbigcannons:ingot_steel", "tfc:metal/ingot/steel")
replace_materials("magistuarmory:woolen_fabric", "#modpack:cloth")
replace_materials("minecraft:lapis_lazuli", "tfc:gem/lapis_lazuli")

replace_materials("create:golden_sheet", "tfc:metal/sheet/gold")
replace_materials("create:iron_sheet", "tfc:metal/sheet/wrought_iron")
replace_materials("create:copper_sheet", "tfc:metal/sheet/copper")
replace_materials("create:brass_sheet", "tfc:metal/sheet/brass")
replace_materials("createaddition:zinc_sheet", "tfc:metal/sheet/zinc")
replace_materials("createdeco:zinc_sheet", "tfc:metal/sheet/zinc")

replace_materials("minecraft:dried_kelp", "tfc:food/dried_kelp")
replace_materials("minecraft:slime_ball", "tfc:glue")
replace_materials("minecraft:iron_bars", "tfc:metal/bars/wrought_iron")

replace_materials("createdeco:industrial_iron_ingot", "tfc:metal/ingot/cast_iron")
replace_materials("createdeco:industrial_iron_sheet", "tfc:metal/sheet/cast_iron")
replace_materials("createbigcannons:cast_iron_ingot", "tfc:metal/ingot/cast_iron")
replace_materials("createdeco:industrial_iron_nugget", "createbigcannons:cast_iron_nugget" )

replace_materials("createaddition:diamond_grit", "tfc:powder/diamond")
replace_materials("corn_delight:corn", "tfc:food/maize")
replace_materials("minecraft:feather", "artisanal:quill")
replace_materials("minecraft:sweet_berries", "#forge:fruits/berries")
replace_materials("#minecraft:fox_food", "#forge:fruits/berries")
replace_materials("minecraft:dirt", "#minecraft:dirt")
replace_materials("farmersdelight:cooked_bacon", "firmalife:food/cooked_bacon")

//replace_materials("minecraft:apple", "tfc:foods/apples")

events.replaceInput({input: "minecraft:sand",not:{output: /.*sandstone.*/} }, "minecraft:sand", "#forge:sand")

events.replaceInput({input: "minecraft:string", not:{type: "tfc:loom"}}, "minecraft:string", "#forge:string")
events.replaceOutput({output: "minecraft:string"}, "minecraft:string", "#forge:string")
})
