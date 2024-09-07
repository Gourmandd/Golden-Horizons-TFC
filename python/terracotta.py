from mcresources import ResourceManager

rm = ResourceManager('Horizons')

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
    "dark_blue",
]

def bricks_recipe(colour):
    rm.crafting_shaped("terracotta_bricks/" + colour + "_terracotta_bricks", 
        [" T ","TCT"," T "],
        {"T": "minecraft:" + colour + "_terracotta", "C": "#tfc:chisels"}, 
        {"item": "hearth_and_home:" + colour + "_terracotta_bricks",
        "count": 4})

def raw_from_shards_recipe(colour):
    rm.crafting_shapeless("terracotta/" + colour + "_terracotta_bricks", [
        {"item": "kubejs:terracotta/shard_" + colour,},
        {"item": "kubejs:terracotta/shard_" + colour,},
        {"item": "kubejs:terracotta/shard_" + colour,},
        {"item": "kubejs:terracotta/shard_" + colour,}
    ],
    {"item": "minecraft:" + colour + "_terracotta"}

)
    
def landslide_recipe(colour):
    rm.data("recipes/landslide/terracotta/" + colour + "_crushed_terracotta", 
    {
    "type": "tfc:landslide",
    "ingredient": "kubejs:terracotta/crushed_" + colour,
    "result": "kubejs:terracotta/crushed_" + colour
})

def milling_recipe(colour):
    rm.data("recipes/milling/terracotta/" + colour + "_crushed_terracotta", {
        "type": "create:milling",
        "ingredients": [{"item": "kubejs:terracotta/crushed_" + colour}],
        "results": [
            {"item": "kubejs:terracotta/shard_" + colour},
            {"item": "kubejs:terracotta/shard_" + colour, "chance": 0.5}
            ],
        "processingTime": 50
})   

def milling_recipe_raw_to_crushed(colour):
    rm.data("recipes/milling/terracotta/" + colour + "_terracotta", {
        "type": "create:milling",
        "ingredients": [{"item": "minecraft:" + colour + "_terracotta"}],
        "results": [
            {"item": "kubejs:terracotta/crushed_" + colour},
            ],
        "processingTime": 50
})   

def quern_recipe(colour):
    rm.data("recipes/quern/terracotta/terracotta_" + colour, {
    "type": "tfc:quern",
    "ingredient": {
        "item": "kubejs:terracotta/crushed_" + colour
    },
    "result": {
        "item": "kubejs:terracotta/shard_" + colour,
    }
})
    
for colour in colours:
    bricks_recipe(colour)
    landslide_recipe(colour)
    milling_recipe(colour)
    quern_recipe(colour)
    raw_from_shards_recipe(colour)
    milling_recipe_raw_to_crushed(colour)