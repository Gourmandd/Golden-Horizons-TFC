from mcresources import ResourceManager

rm = ResourceManager('modpack')

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

def generate(colour):
    rm.configured_feature("terracotta/boulder_" + colour, "tfc:boulder",
        {"states": [
        {
        "rock": "tfc:rock/raw/" + rock,
        "blocks": [
        "minecraft:" + colour + "_terracotta",
        "kubejs:terracotta/crushed_" + colour
        ]
        } for rock in rock_types ]
    })
    
    rm.configured_feature("terracotta/patch_" + colour, "tfc:soil_disc",{
    "min_radius": 3,
    "max_radius": 7,
    "height": 5,
    "states": [
      {
        "replace": "tfc:dirt/silt",
        "with": "kubejs:terracotta/crushed_" + colour
      },
      {
        "replace": "tfc:dirt/loam",
        "with": "kubejs:terracotta/crushed_" + colour
      },
      {
        "replace": "tfc:dirt/sandy_loam",
        "with": "kubejs:terracotta/crushed_" + colour
      },
      {
        "replace": "tfc:dirt/silty_loam",
        "with": "kubejs:terracotta/crushed_" + colour
      },
      {
        "replace": "tfc:grass/silt",
        "with": "kubejs:terracotta/crushed_" + colour
      },
      {
        "replace": "tfc:grass/loam",
        "with": "kubejs:terracotta/crushed_" + colour
      },
      {
        "replace": "tfc:grass/sandy_loam",
        "with": "kubejs:terracotta/crushed_" + colour
      },
      {
        "replace": "tfc:grass/silty_loam",
        "with": "kubejs:terracotta/crushed_" + colour
      }
    ]
    })

    #rm.configured_feature("terracotta/if_then_" + colour, "tfc:if_then", {
    #"if": "modpack:terracotta/boulder_" + colour,
    #"then": "modpack:terracotta/patch_" + colour
  #})

    rm.placed_feature("terracotta/boulder_" + colour, "modpack:terracotta/boulder_" + colour,
        {
          "type": "minecraft:rarity_filter",
          "chance": 10000
        },
        {
          "type": "minecraft:in_square"
        },
        {
          "type": "minecraft:heightmap",
          "heightmap": "OCEAN_FLOOR_WG"
        },
        {
          "type": "tfc:flat_enough",
          "flatness": 0.4
        }  
    )
    
    #rm.placed_feature("terracotta/if_then_" + colour, "modpack:terracotta/if_then_" + colour, 
     #   {
      #    "type": "minecraft:rarity_filter",
       #   "chance": 11
       # },
       # {
       #   "type": "minecraft:in_square"
       # },
       # {
       #   "type": "minecraft:heightmap",
       #   "heightmap": "OCEAN_FLOOR_WG"
       # },
       # {
       #   "type": "tfc:flat_enough",
       #   "flatness": 0.4
       # }                  
    #)
    
    rm.placed_feature("terracotta/patch_" + colour, "modpack:terracotta/patch_" + colour,
        {
          "type": "minecraft:rarity_filter",
          "chance": 10000
        },
        {
          "type": "minecraft:in_square"
        },
        {
          "type": "minecraft:heightmap",
          "heightmap": "OCEAN_FLOOR_WG"
        },
        {
          "type": "tfc:flat_enough",
          "flatness": 0.4
        }  )
    
    #rm.placed_feature_tag("feature/terracotta_boulders", "terracotta/if_then_" + colour)
    #rm.placed_feature_tag("feature/boulders", "#modpack:feature/terracotta_boulders")

for colour in colours:
    generate(colour)

rm.flush()
