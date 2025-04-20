from mcresources import ResourceManager

rm = ResourceManager('Horizons')

woods = [ #woods that have the same name in vanilla and tfc
"oak",
"birch",
"spruce",
"acacia",
"mangrove"
]

def wood_swapping(wood):
 
    rm.crafting_shapeless("crafting/swapping/" + wood + "_planks", {"item": "minecraft:" + wood + "_planks"},{"item": "tfc:wood/planks/" + wood})
    rm.crafting_shapeless("crafting/swapping/" + wood + "_stripped_log", {"item": "minecraft:stripped_" + wood + "_log"},{"item": "tfc:wood/stripped_log/" + wood})
    rm.crafting_shapeless("crafting/swapping/" + wood + "_log", {"item": "minecraft:" + wood + "_log"},{"item": "tfc:wood/log/" + wood})
    rm.crafting_shapeless("crafting/swapping/" + wood + "_stripped_wood", {"item": "minecraft:stripped_" + wood + "_wood"},{"item": "tfc:wood/stripped_wood/" + wood})
    rm.crafting_shapeless("crafting/swapping/" + wood + "_wood", {"item": "minecraft:" + wood + "_wood"},{"item": "tfc:wood/wood/" + wood})


for i in woods:
    wood_swapping(i)

