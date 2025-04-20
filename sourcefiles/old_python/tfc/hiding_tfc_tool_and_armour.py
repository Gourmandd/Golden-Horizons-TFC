from mcresources import ResourceManager

rm = ResourceManager('modpack')

metals =[
    "bismuth_bronze",
    "bronze",
    "black_bronze",
    "copper",
    "wrought_iron",
    "steel",
    "black_steel",
    "red_steel",
    "blue_steel"
]

armours = [
    "helmet",
    "chestplate",
    "greaves",
    "boots",
]

tools = [
    "sword",
    "mace",
    "javelin"
]

castable_metal = [
    "bismuth_bronze",
    "bronze",
    "black_bronze",
    "copper",
]
#rm.recipe(LOCATION, TYPE, JSON)

def generate():
    for metal in metals:
        for armour in armours:
            rm.recipe("tfc:welding/" + metal + "_" + armour, "forge:disabled", {})
            rm.recipe("tfc:anvil/" + metal + "_unfinished_" + armour, "forge:disabled", {})

        for tool in tools:
            rm.recipe("tfc:crafting/metal/" + tool + "/" + metal, "forge:disabled", {})
            if tool == "sword":
                rm.recipe("tfc:anvil/" + metal + "_" + tool + "_blade", "forge:disabled", {})
            else:
                rm.recipe("tfc:anvil/" + metal + "_" + tool + "_head", "forge:disabled", {})

            for metal in castable_metal:
                if tool == "sword":
                  rm.recipe("tfc:clay_knapping/" + tool + "_blade_mold", "forge:disabled", {})
                else:
                  rm.recipe("tfc:clay_knapping/" + tool + "_head_mold", "forge:disabled", {})

generate()