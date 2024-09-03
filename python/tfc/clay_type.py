from mcresources import ResourceManager

rm = ResourceManager('modpack')

# Unused 

clay_types = [
    "kaolinite",
    "yixing",
    "yellowware",
    "earthenware",
    "porcelain"
]

tools = [
"pickaxe",
"axe",
"propick",
"shovel",
"hoe",
"chisel",
"hammer",
"saw",
"javelin",
"scythe",
"knife",
"sword",
"mace"
]

def heating_recipe(location, input, output, temp):
    rm.recipe(location, "tfc:heating", {
    "ingredient": {
      "item": input
    },
    "result_item": {
      "item": output
    },
    "temperature": temp
    })

def item_heat(location, item, capacity):
    rm.data(location,{
    "ingredient": {
      "item": item
    },
    "heat_capacity": capacity
    })

def knapping(type, result, count, shape, name, slot):
    rm.recipe("clay_knapping/" + type + "/" + name , "tfc:knapping",{
    "knapping_type": "tfc:" + type,
    "outside_slot_required": slot,
    "pattern": shape,
    "result": {
    "item": result,
    "count": count
    }
    })

def cutting(resource_location, input, output, action):
    rm.recipe(resource_location, "farmersdelight:cutting", {
    "type": "farmersdelight:cutting",
    "ingredients": [
      {
        "tag": input
      }
    ],
    "result": [
      {
        "item": output
      }
    ],
    "tool": {
      "type": "farmersdelight:tool_action",
      "action": action
    }})

def generate(type):
    clay_recipes(type)
    clay_heating(type)
    clay_models(type)
    clay_tags(type)
    clay_firing(type)

def clay_recipes(type: str):

    rm.tag("modpack:clay/" + type, "items", "kubejs:ceramic/" + type + "_bricks") # add brick blocks, stairs etc
    rm.tag("modpack:clay/" + type, "items", "kubejs:ceramic/" + type + "_brick_stairs")
    rm.tag("modpack:clay/" + type, "items", "kubejs:ceramic/" + type + "_brick_slab")
    rm.tag("modpack:clay/" + type, "items", "kubejs:ceramic/" + type + "_brick_wall")
    cutting("modpack:cutting/clay_types/" + type + "_bricks", "modpack:clay/" + type, "kubejs:ceramic/" + type + "_brick", "pickaxe_dig")

    knapping(type, "kubejs:ceramic/unfired_" + type + "_chisel_mold", 1, ["XX XX","XX XX","XX XX","XX XX","XX XX"], "unfired_" + type + "_chisel_mold", "true")
    knapping(type, "kubejs:ceramic/unfired_" + type + "_pickaxe_mold", 1, ["XXXXX","X   X"," XXX ", "XXXXX", "XXXXX"], "unfired_" + type + "_pickaxe_mold", "true")
    knapping(type, "kubejs:ceramic/unfired_" + type + "_axe_mold", 1, ["X XXX","    X","     ","    X","X XXX"], "unfired_" + type + "_axe_mold", "false")
    knapping(type, "kubejs:ceramic/unfired_" + type + "_hoe_mold", 1, ["XXXXX","     ","  XXX", "XXXXX", "XXXXX"], "unfired_" + type + "_hoe_mold", "true")
    knapping(type, "kubejs:ceramic/unfired_" + type + "_sword_mold", 1, ["  XXX","   XX","X   X","XX  X","XXXX "], "unfired_" + type + "_sword_mold", "false")
    knapping(type, "kubejs:ceramic/unfired_" + type + "_saw_mold", 1, ["  XXX","   XX","X   X","X    ","XXX  "], "unfired_" + type + "_saw_mold", "false")
    knapping(type, "kubejs:ceramic/unfired_" + type + "_scythe_mold", 1, ["XXXXX","X    ","    X","  XXX","XXXXX"], "unfired_" + type + "_scythe_mold", "false")
    knapping(type, "kubejs:ceramic/unfired_" + type + "_propick_mold", 1, ["XXXXX","    X"," XXX "," XXXX","XXXXX"], "unfired_" + type + "_propick_mold", "false")
    knapping(type, "kubejs:ceramic/unfired_" + type + "_hammer_mold", 1, ["XXXXX","     ","     ","XX XX","XXXXX"], "unfired_" + type + "_hammer_mold", "true")
    knapping(type, "kubejs:ceramic/unfired_" + type + "_javelin_mold", 1, ["   XX","    X","     ","X   X","XX XX"], "unfired_" + type + "_javelin_mold", "false")
    knapping(type, "kubejs:ceramic/unfired_" + type + "_mace_mold", 1, ["XX XX","X   X","X   X","X   X","XX XX"], "unfired_" + type + "_mace_mold", "true")
    knapping(type, "kubejs:ceramic/unfired_" + type + "_knife_mold", 1, ["XX XX","X  XX","X  XX","X  XX","X  XX"], "unfired_" + type + "_knife_mold", "true")
    knapping(type, "kubejs:ceramic/unfired_" + type + "_bell_mold", 1, ["XXXXX","XX XX","X   X","X   X","X   X"], "unfired_" + type + "_bell_mold", "true")
    knapping(type, "kubejs:ceramic/unfired_" + type + "_ingot_mold", 2, ["XXXXX","X  XX","X  XX","X  XX","XXXXX"], "unfired_" + type + "_ingot_mold", "true")
    knapping(type, "kubejs:ceramic/unfired_" + type + "_shovel_mold", 2, ["X   X","X   X","X   X","X   X","XX XX"], "unfired_" + type + "_shovel_mold", "true")

    knapping(type, "kubejs:ceramic/unfired_" + type + "_flower_pot", 2, [" X X "," XXX ","     "," X X "," XXX "], "unfired_" + type + "_flower_pot", "false")
    knapping(type, "kubejs:ceramic/unfired_" + type + "_blowpipe", 1, [" X X "," X X "," XXX "," XXX "," XXX "], "unfired_" + type + "_blowpipe", "true")
    knapping(type, "kubejs:ceramic/unfired_" + type + "_bowl", 4, ["X   X"," XXX ","     ","X   X"," XXX "], "unfired_" + type + "_bowl_4", "false")
    knapping(type, "kubejs:ceramic/unfired_" + type + "_bowl", 2, ["     ","X   X"," XXX ","     ","     "], "unfired_" + type + "_bowl_2", "true")
    knapping(type, "kubejs:ceramic/unfired_" + type + "_pan", 1, ["     ","X   X","XXXXX"," XXX ","     "], "unfired_" + type + "_pan", "true")
    knapping(type, "kubejs:ceramic/unfired_" + type + "_spindle_head", 1, ["     ","  X  ","XXXXX","  X  ","     "], "unfired_" + type + "_spindle_head", "true")
    knapping(type, "kubejs:ceramic/unfired_" + type + "_pot", 1, ["X   X","X   X","X   X","XXXXX"," XXX "], "unfired_" + type + "_pot", "false")
    knapping(type, "kubejs:ceramic/unfired_" + type + "_vessel", 1, [" XXX ","XXXXX","XXXXX","XXXXX"," XXX "], "unfired_" + type + "_vessel", "false")
    knapping(type, "kubejs:ceramic/unfired_" + type + "_jug", 1, [" X   ","XXXX ","XXX X","XXXX ","XXX  "], "unfired_" + type + "_jug", "false")
    knapping(type, "kubejs:ceramic/unfired_" + type + "_brick", 3, ["XXXXX","     ","XXXXX","     ","XXXXX"], "unfired_" + type + "_brick", "false")

    knapping(type, "kubejs:unfired_shaft", 2, [" X X "," X X "," X X "," X X "," X X "], type + "_shaft_vertical_2", "true")
    knapping(type, "kubejs:unfired_shaft", 3, ["X X X","X X X","X X X","X X X","X X X"], type + "_shaft_vertical_3", "false")

    knapping(type, "kubejs:unfired_shaft", 2, ["     ","XXXXX","     ","XXXXX","     "], type + "_shaft_horizontal_2", "true")
    
    rm.crafting_shaped("crafting/clay_types/"+ type + "_bricks", ["XMX", "MXM", "XMX"], {"X": "kubejs:ceramic/" + type + "_brick", "M": "tfc:mortar"}, {"item": "kubejs:ceramic/"+ type + "_bricks", "count": 2})
    rm.crafting_shaped("crafting/clay_types/"+ type + "_brick_stairs", ["X  ", "XX ", "XXX"], {"X": "kubejs:ceramic/" + type + "_bricks"}, {"item" :"kubejs:ceramic/"+ type + "_brick_stairs", "count": 8})
    rm.crafting_shaped("crafting/clay_types/"+ type + "_brick_slab", ["XXX"], {"X": "kubejs:ceramic/" + type + "_bricks"}, {"item" :"kubejs:ceramic/"+ type + "_brick_slab","count": 6})
    rm.crafting_shaped("crafting/clay_types/"+ type + "_brick_wall", ["XXX", "XXX"], {"X": "kubejs:ceramic/" + type + "_bricks"}, {"item" :"kubejs:ceramic/"+ type + "_brick_wall","count": 6})

    rm.crafting_shapeless("crafting/clay_types/"+ type + "_recycling_5", {"tag": "modpack:clay/"+ type + "_recycling_5"}, {"item": "kubejs:clay/" + type + "_clay_ball", "count": 5})
    rm.crafting_shapeless("crafting/clay_types/"+ type + "_recycling_1", {"tag": "modpack:clay/"+ type + "_recycling_1"}, {"item": "kubejs:clay/" + type + "_clay_ball"})

def clay_tags(type):
    #add all molds into the tag so it gets an item heat
    #add vessels into the tag so it gets an item heat
    for tool in tools:
        rm.tag("tfc:unfired_molds", "items", "kubejs:ceramic/unfired_" + type + "_" + tool + "_mold")
    rm.tag("tfc:unfired_vessels", "items", "kubejs:ceramic/unfired_" + type + "_vessel")

    rm.tag("tfc:unfired_molds", "items", "kubejs:ceramic/unfired_" + type + "_bell_mold")
    rm.tag("tfc:unfired_molds", "items", "kubejs:ceramic/unfired_" + type + "_ingot_mold")

    #recycling
    for tool in tools:
        rm.tag("modpack:clay/"+ type + "_recycling_5", "items", "kubejs:ceramic/unfired_" + type + "_" + tool + "_mold")
    rm.tag("modpack:clay/"+ type + "_recycling_5", "items", "kubejs:ceramic/unfired_" + type + "_vessel")

    rm.tag("modpack:clay/"+ type + "_recycling_5", "items", "kubejs:ceramic/unfired_" + type + "_bell_mold")
    
    rm.tag("modpack:clay/"+ type + "_recycling_5", "items", "kubejs:ceramic/unfired_" + type + "_vessel")
    rm.tag("modpack:clay/"+ type + "_recycling_5", "items", "kubejs:ceramic/unfired_" + type + "_jug")
    rm.tag("modpack:clay/"+ type + "_recycling_5", "items", "kubejs:ceramic/unfired_" + type + "_pot")
    rm.tag("modpack:clay/"+ type + "_recycling_5", "items", "kubejs:ceramic/unfired_" + type + "_spindle_head")
    rm.tag("modpack:clay/"+ type + "_recycling_5", "items", "kubejs:ceramic/unfired_" + type + "_pan")
    rm.tag("modpack:clay/"+ type + "_recycling_5", "items", "kubejs:ceramic/unfired_" + type + "_blowpipe")

    rm.tag("modpack:clay/"+ type + "_recycling_1", "items", "kubejs:ceramic/unfired_" + type + "_brick")
    rm.tag("modpack:clay/"+ type + "_recycling_1", "items", "kubejs:ceramic/unfired_" + type + "_bowl")
    rm.tag("modpack:clay/"+ type + "_recycling_1", "items", "kubejs:ceramic/unfired_" + type + "_flower_pot")
    rm.tag("modpack:clay/"+ type + "_recycling_1", "items", "kubejs:ceramic/unfired_" + type + "_ingot_mold")
    
    rm.tag("tfc:unfired_pottery", "items", "kubejs:ceramic/unfired_" + type + "_vessel")
    rm.tag("tfc:unfired_pottery", "items", "kubejs:ceramic/unfired_" + type + "_jug")
    rm.tag("tfc:unfired_pottery", "items", "kubejs:ceramic/unfired_" + type + "_pot")
    rm.tag("tfc:unfired_pottery", "items", "kubejs:ceramic/unfired_" + type + "_spindle_head")
    rm.tag("tfc:unfired_pottery", "items", "kubejs:ceramic/unfired_" + type + "_pan")
    rm.tag("tfc:unfired_pottery", "items", "kubejs:ceramic/unfired_" + type + "_blowpipe")

    rm.tag("tfc:unfired_pottery", "items", "kubejs:ceramic/unfired_" + type + "_brick")
    rm.tag("tfc:unfired_pottery", "items", "kubejs:ceramic/unfired_" + type + "_bowl")
    rm.tag("tfc:unfired_pottery", "items", "kubejs:ceramic/unfired_" + type + "_flower_pot")


def clay_models(type): #models for the brick blocks, vessels and jugs as KJS doesnt want to do that for some reason

    rm.item_model("kubejs:ceramic/" + type + "_vessel")
    rm.item_model("kubejs:ceramic/" + type + "_jug")

def clay_heating(type): #except molds and vessels
    item_heat("modpack:tfc/item_heats/clay/" + type + "_blowpipe", "kubejs:ceramic/unfired_" + type + "_blowpipe", 0.6)
    item_heat("modpack:tfc/item_heats/clay/" + type + "_flower_pot", "kubejs:ceramic/unfired_" + type + "_flower_pot", 0.6)
    item_heat("modpack:tfc/item_heats/clay/" + type + "_bowl", "kubejs:ceramic/unfired_" + type + "_bowl", 0.4)
    item_heat("modpack:tfc/item_heats/clay/" + type + "_pan", "kubejs:ceramic/unfired_" + type + "_pan", 0.6)
    item_heat("modpack:tfc/item_heats/clay/" + type + "_spindle_head", "kubejs:ceramic/unfired_" + type + "_spindle_head", 0.8)
    item_heat("modpack:tfc/item_heats/clay/" + type + "_pot", "kubejs:ceramic/unfired_" + type + "_pot", 0.8)
    item_heat("modpack:tfc/item_heats/clay/" + type + "_brick", "kubejs:ceramic/unfired_" + type + "_brick", 0.4)
    item_heat("modpack:tfc/item_heats/clay/" + type + "_jug", "kubejs:ceramic/unfired_" + type + "_jug", 0.8)

def clay_firing(type):
    #makes tfc fired stuff
    heating_recipe("heating/clay/" + type + "/blowpipe", "kubejs:ceramic/unfired_" + type + "_blowpipe", "tfc:ceramic_blowpipe", 1399)
    heating_recipe("heating/clay/" + type + "/flower_pot", "kubejs:ceramic/unfired_" + type + "_flower_pot", "minecraft:flower_pot", 1399)
    heating_recipe("heating/clay/" + type + "/bowl", "kubejs:ceramic/unfired_" + type + "_bowl", "tfc:ceramic/bowl", 1399)
    heating_recipe("heating/clay/" + type + "/pan", "kubejs:ceramic/unfired_" + type + "_pan", "tfc:pan/empty", 1399)
    heating_recipe("heating/clay/" + type + "/spindle_head", "kubejs:ceramic/unfired_" + type + "_spindle_head", "tfc:ceramic/spindle_head", 1399)
    heating_recipe("heating/clay/" + type + "/pot", "kubejs:ceramic/unfired_" + type + "_pot", "tfc:ceramic/pot", 1399)

    #molds
    for tool in ["saw", "sword", "knife", "scythe"]:
      heating_recipe("heating/clay/" + type + "/" + tool, "kubejs:ceramic/unfired_" + type + "_" + tool + "_mold", "tfc:ceramic/" + tool + "_blade_mold", 1399)
    for tool in ["pickaxe", "axe", "propick", "shovel", "hoe", "chisel", "hammer", "javelin", "mace"]:
      heating_recipe("heating/clay/" + type + "/" + tool, "kubejs:ceramic/unfired_" + type + "_" + tool + "_mold", "tfc:ceramic/" + tool + "_head_mold", 1399)
    heating_recipe("heating/clay/" + type + "/bell", "kubejs:ceramic/unfired_" + type + "_bell_mold", "tfc:ceramic/bell_mold", 1399)
    heating_recipe("heating/clay/" + type + "/ingot" , "kubejs:ceramic/unfired_" + type + "_ingot_mold", "tfc:ceramic/ingot_mold", 1399)

    #unique
    heating_recipe("heating/clay/" + type + "/brick", "kubejs:ceramic/unfired_" + type + "_brick", "kubejs:ceramic/" + type + "_brick", 1399)
    heating_recipe("heating/clay/" + type + "/vessel", "kubejs:ceramic/unfired_" + type + "_vessel", "kubejs:ceramic/" + type + "_vessel", 1399)
    heating_recipe("heating/clay/" + type + "/jug", "kubejs:ceramic/unfired_" + type + "_jug", "kubejs:ceramic/" + type + "_jug", 1399)

for clay in clay_types:
    generate(clay)

rm.flush()

