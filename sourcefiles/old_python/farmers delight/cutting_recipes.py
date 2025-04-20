from mcresources import ResourceManager

rm = ResourceManager('modpack')

tfc_wood_types = [
    "acacia",
    "ash",
    "aspen",
    "birch",
    "blackwood",
    "chestnut",
    "douglas_fir",
    "hickory",
    "kapok",
    "mangrove",
    "maple",
    "oak",
    "palm",
    "pine",
    "rosewood",
    "sequoia",
    "spruce",
    "sycamore",
    "white_cedar",
    "willow",
]

afc_wood_types = [
    "baobab",
    "eucalyptus",
    "mahogany",
    "hevea",
    "tualang",
    "teak",
    "cypress",
    "fig",
    "ironwood",
    "ipe"
]

chain_metal = [
    "bismuth_bronze",
    "black_bronze",
    "bronze",
    "copper",
    "wrought_iron",
    "steel",
    "black_steel",
    "blue_steel",
    "red_steel"
]

rock_types = [
    "granite",
    "diorite",
    "gabbro",
    "shale",
    "claystone",
    "limestone",
    "conglomerate",
    "dolomite",
    "chert",
    "chalk",
    "rhyolite",
    "basalt",
    "andesite",
    "dacite",
    "quartzite",
    "slate",
    "phyllite",
    "schist",
    "gneiss",
    "marble",    
]

colours = [
    "white",
    "brown",
    "green",
    "orange",
    "magenta",
    "red",
    "black",
    "light_blue",
    "yellow",
    "lime",
    "pink",
    "gray",
    "light_gray",
    "cyan",
    "purple",
    "blue",
]

soil_types = [
    "silt",
    "silty_loam",
    "loam",
    "sandy_loam"
]

block_shapes = [
    "bricks",
    "_wall",
    "_stairs",
    "_slab"
]

block_shapes_2 = [
    "bricks",
    "_stairs",
    "_slab"
]

brick_types = [
    "bricks",
    "mossy_bricks",
    "cracked_bricks"
]

#the furnature arrays only have things that have the item IDs of tfc:wood/planks/...
furnature_2_lumber = [
    "door",
    "trapdoor",
    "fence",
    "pressure_plate",
    "button",
    "slab",
    "stairs",
]

sand_colours = [
    "red",
    "white",
    "black",
    "yellow",
    "green",
    "brown",
    "pink"
]

furnature_1_plank = [
    "bookshelf",
    "log_fence",
    "fence_gate",
    "tool_rack",
    "workbench",
    "loom",
]
# valid actions are   axe_dig   pickaxe_dig
def cutting(resource_location, input, output, output_chance, output_count, action):
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


def generate_wood_tags(mod, type):
    for item in furnature_1_plank:
        rm.tag("cutting/wood/for_planks/" + type, "items", mod + ":wood/planks/" + type + "_" + item )
    rm.tag("cutting/wood/for_planks/" + type, "items", "everycomp:c/" + mod + "/" + type + "_window")
    rm.tag("cutting/wood/for_planks/" + type, "items", "everycomp:fd/" + mod + "/" + type + "_cabinet")
    rm.tag("cutting/wood/for_planks/" + type, "items", "everycomp:hnhome/" + mod + "/" + type + "_sanded_wood")
    rm.tag("cutting/wood/for_planks/" + type, "items", "everycomp:hnhome/" + mod + "/" + type + "_parquet")
    rm.tag("cutting/wood/for_planks/" + type, "items", "everycomp:hnhome/" + mod + "/" + type + "_trim")
    rm.tag("cutting/wood/for_planks/" + type, "items", "everycomp:hnhome/" + mod + "/" + type + "_vertical_trim")
    rm.tag("cutting/wood/for_planks/" + type, "items", "everycomp:q/" + mod + "/" + type + "_post")
    rm.tag("cutting/wood/for_planks/" + type, "items", "everycomp:q/" + mod + "/stripped_" + type + "_post")
    rm.tag("cutting/wood/for_planks/" + type, "items", "everycomp:q/" + mod + "/vertical_" + type + "_planks")
    rm.tag("cutting/wood/for_planks/" + type, "items", "everycomp:q/" + mod + "/hollow_" + type + "_log")
    rm.tag("cutting/wood/for_planks/" + type, "items", "everycomp:af/" + mod + "/" + type + "_flower_box")
    rm.tag("cutting/wood/for_lumber/" + type, "items", "everycomp:af/" + mod + "/" + type + "_shutter")
    rm.tag("cutting/wood/for_planks/" + type, "items", "everycomp:af/" + mod + "/" + type + "_table")
    rm.tag("cutting/wood/for_planks/" + type, "items", "everycomp:af/" + mod + "/" + type + "_chair")
    rm.tag("cutting/wood/for_planks/" + type, "items", "everycomp:af/" + mod + "/" + type + "_shelf")
    rm.tag("cutting/wood/for_planks/" + type, "items", "everycomp:af/" + mod + "/" + type + "_drawer")
    rm.tag("cutting/wood/for_planks/" + type, "items", "everycomp:af/" + mod + "/" + type + "_bench")

    for item in furnature_2_lumber:
        rm.tag("cutting/wood/for_lumber/" + type, "items", mod + ":wood/planks/" + type + "_" + item )
    rm.tag("cutting/wood/for_lumber/" + type, "items", "everycomp:c/" + mod + "/" + type + "_window_pane")
    rm.tag("cutting/wood/for_lumber/" + type, "items", "everycomp:q/" + mod + "/" + type + "_ladder")
    rm.tag("cutting/wood/for_planks/" + type, "items", "everycomp:q/" + mod + "/" + type + "_bookshelf")
    rm.tag("cutting/wood/for_planks/" + type, "items", "everycomp:hnhome/" + mod + "/" + type + "_lattice")


    rm.tag("cutting/wood/for_planks/" + type, "items", mod + ":wood/chest/" + type)
    rm.tag("cutting/wood/for_planks/" + type, "items", mod + ":wood/trapped_chest/" + type)
    rm.tag("cutting/wood/for_lumber/" + type, "items", mod + ":wood/sluice/" + type)
    rm.tag("cutting/wood/for_planks/" + type, "items", mod + ":wood/barrel/" + type)
    rm.tag("cutting/wood/for_planks/" + type, "items", mod + ":wood/lectern/" + type)
    rm.tag("cutting/wood/for_planks/" + type, "items", mod + ":wood/scribing_table/" + type)
    rm.tag("cutting/wood/for_planks/" + type, "items", mod + ":wood/sewing_table/" + type)
    rm.tag("cutting/wood/for_planks/" + type, "items", mod + ":wood/jar_shelf/" + type)
    rm.tag("cutting/wood/for_planks/" + type, "items", mod + ":wood/boat/" + type)
    rm.tag("cutting/wood/for_lumber/" + type, "items", mod + ":wood/support/" + type)
    rm.tag("cutting/wood/for_lumber/" + type, "items", mod + ":wood/sign/" + type)

    for metal in chain_metal:
        rm.tag("cutting/wood/for_lumber/" + type, "items", mod + ":wood/hanging_sign/" + metal + "/" + type)
    


def generate_tags():
    #terracotta
    for colour in colours:
        for shape in block_shapes_2:
            if shape == "bricks":
                rm.tag("cutting/terracotta_bricks/" + colour, "items", "hearth_and_home:" + colour + "_terracotta_bricks")
                rm.tag("cutting/terracotta_bricks/" + colour, "items", "hearth_and_home:" + colour + "_shingles")
            else:
                rm.tag("cutting/terracotta_bricks/" + colour, "items", "hearth_and_home:" + colour + "_terracotta_brick" + shape)
                rm.tag("cutting/terracotta_bricks/" + colour, "items", "hearth_and_home:" + colour + "_shingle" + shape)
    
    #stone
    for rock in rock_types:
        for type in brick_types:
            for shape in block_shapes:
                if shape == "bricks":
                    rm.tag("cutting/rock/" + rock, "items", "tfc:rock/" + type + "/" + rock)
                    rm.tag("cutting/rock/" + rock, "items", "tfc:rock/smooth/" + rock)
                else:
                    rm.tag("cutting/rock/" + rock, "items", "tfc:rock/" + type + "/" + rock + "" + shape)
                    rm.tag("cutting/rock/" + rock, "items", "tfc:rock/smooth/" + rock + "" + shape)
        rm.tag("cutting/rock/" + rock, "items", "tfc:rock/chiseled/" + rock)

    #alabaster
    for colour in colours:
        for shape in block_shapes:
            if shape == "bricks":
                rm.tag("cutting/alabaster_brick", "items", "tfc:alabaster/bricks/" + colour)
                rm.tag("cutting/alabaster_brick", "items", "tfc:alabaster/polished/" + colour)
            else:
                rm.tag("cutting/alabaster_brick", "items", "tfc:alabaster/bricks/" + colour + shape)
                rm.tag("cutting/alabaster_brick", "items", "tfc:alabaster/polished/" + colour + shape)
        rm.tag("cutting/gypsum", "items", "tfc:alabaster/raw/" + colour)
        rm.tag("cutting/gypsum", "items", "tfc:alabaster/raw")

        rm.tag("cutting/alabaster_brick", "items", "tfc:alabaster/polished")
        rm.tag("cutting/alabaster_brick", "items", "tfc:alabaster/bricks")

    #mud bricks
    for soil in soil_types:
        for shape in block_shapes:
            if shape == "bricks":
                rm.tag("cutting/mud/" + soil + "/brick", "items", "tfc:mud_bricks/" + soil)
            else:
                rm.tag("cutting/mud/" + soil + "/brick", "items", "tfc:mud_bricks/" + soil  + shape )
    
    #sandstone
    for colour in sand_colours:
        for shape in block_shapes:
            if shape == "bricks":
                rm.tag("cutting/sandstone/" + colour , "items", "tfc:smooth_sandstone/" + colour)
                rm.tag("cutting/sandstone/" + colour , "items", "tfc:raw_sandstone/" + colour)
                rm.tag("cutting/sandstone/" + colour , "items", "tfc:cut_sandstone/" + colour)
            else:
                rm.tag("cutting/sandstone/" + colour , "items", "tfc:smooth_sandstone/" + colour + shape)
                rm.tag("cutting/sandstone/" + colour , "items", "tfc:raw_sandstone/" + colour + shape)
                rm.tag("cutting/sandstone/" + colour , "items", "tfc:cut_sandstone/" + colour + shape)

    #wood
    for type in tfc_wood_types:
        generate_wood_tags("tfc", type)
    for type in afc_wood_types:
        generate_wood_tags("afc", type)

    #manual
    rm.tag("cutting/terracotta_bricks/plain", "items", "hearth_and_home:terracotta_bricks")
    rm.tag("cutting/terracotta_bricks/plain", "items", "hearth_and_home:terracotta_brick_stairs")
    rm.tag("cutting/terracotta_bricks/plain", "items", "hearth_and_home:terracotta_brick_slab")
    rm.tag("cutting/terracotta_bricks/plain", "items", "hearth_and_home:shingles")
    rm.tag("cutting/terracotta_bricks/plain", "items", "hearth_and_home:shingle_stairs")
    rm.tag("cutting/terracotta_bricks/plain", "items", "hearth_and_home:shingle_slab")



generate_tags()

def generate_recipes():
    for type in tfc_wood_types:
        cutting("fd_cutting/wood/tfc_lumber/" + type, "modpack:cutting/wood/for_lumber/" + type, "tfc:wood/lumber/" + type , 1, 2, "axe_dig")
        cutting("fd_cutting/wood/tfc_planks/" + type, "modpack:cutting/wood/for_planks/" + type, "tfc:wood/planks/" + type , 1, 1, "axe_dig")
    for type in afc_wood_types:
        cutting("fd_cutting/wood/afc_lumber/" + type, "modpack:cutting/wood/for_lumber/" + type, "afc:wood/lumber/" + type , 1, 2, "axe_dig")
        cutting("fd_cutting/wood/afc_planks/" + type, "modpack:cutting/wood/for_planks/" + type, "afc:wood/planks/" + type , 1, 1, "axe_dig")
    
    for colour in colours:
        rm.recipe("fd_cutting/terracotta/" + colour, "farmersdelight:cutting", {
        "type": "farmersdelight:cutting",
        "ingredients": [
        {
            "tag": "modpack:cutting/terracotta_bricks/" + colour
        }
        ],
        "result": [
        {
            "item": "minecraft:" + colour + "_terracotta",
            "chance": 0.5
        }
        ],
        "tool": {
        "type": "farmersdelight:tool_action",
        "action": "pickaxe_dig"
        }})

    rm.recipe("fd_cutting/terracotta/plain", "farmersdelight:cutting", {
    "type": "farmersdelight:cutting",
    "ingredients": [
    {
        "tag": "modpack:cutting/terracotta_bricks/plain"
    }
    ],
    "result": [
    {
        "item": "minecraft:terracotta",
        "chance": 0.5
    }
    ],
    "tool": {
    "type": "farmersdelight:tool_action",
    "action": "pickaxe_dig"
    }})

    for rock in rock_types:
        cutting("fd_cutting/rock/" + rock, "modpack:cutting/rock/" + rock, "tfc:rock/loose/" + rock , 0.5, 1, "pickaxe_dig")
    
    cutting("fd_cutting/alabaster", "modpack:cutting/alabaster_brick", "tfc:alabaster_brick" , 0.5, 1, "pickaxe_dig")

    cutting("fd_cutting/gypsum", "modpack:cutting/gypsum", "tfc:ore/gypsum" , 1, 1, "pickaxe_dig")

    for soil in soil_types:
        cutting("fd_cutting/mud/" + soil, "modpack:cutting/mud/" + soil + "/brick", "tfc:mud_brick/" + soil , 0.5, 1, "pickaxe_dig")
    
    for colour in sand_colours:
        cutting("fd_cutting/sandstone/" + colour, "modpack:cutting/sandstone/" + colour, "tfc:sand/" + colour , 0.5, 1, "pickaxe_dig")

    
    

generate_recipes()

rm.flush()