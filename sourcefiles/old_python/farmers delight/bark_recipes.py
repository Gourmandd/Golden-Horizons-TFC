from mcresources import ResourceManager

rm = ResourceManager('modpack')

tfc_wood_types =[
    "ash",
    "chestnut",
    "mangrove",
    "pine",
    "sycamore",
    "aspen",
    "douglas_fir",
    "maple",
    "rosewood",
    "white_cedar",
    "birch",
    "hickory",
    "oak",
    "sequoia",
    "willow",
    "acacia",
    "blackwood",
    "kapok",
    "palm",
    "spruce",
]

afc_wood_types =[
    "baobab",
    "tualang",
    "ironwood",
    "eucalyptus",
    "teak",
    "ipe",
    "mahogany",
    "cypress",
    "hevea",
    "fig",
    
]

def cutting(type, mod):
    rm.recipe("modpack:cutting/bark/" + mod + "_" + type, "farmersdelight:cutting", {
    "type": "farmersdelight:cutting",
    "ingredients": [
      {
        "item": mod + ":wood/log/" + type 
      }
    ],
    "result": [
      {
        "item": mod + ":wood/stripped_log/" + type 
      },
            {
        "item": "farmersdelight:tree_bark",
        "chance": 0.25
      }
    ],
    "tool": {
      "type": "farmersdelight:tool_action",
      "action": "axe_dig"
    }})
    rm.recipe("modpack:cutting/bark/" + mod + "_wood_" + type, "farmersdelight:cutting", {
    "type": "farmersdelight:cutting",
    "ingredients": [
      {
        "item": mod + ":wood/wood/" + type 
      }
    ],
    "result": [
      {
        "item": mod + ":wood/stripped_wood/" + type 
      },
            {
        "item": "farmersdelight:tree_bark",
        "chance": 0.25
      }
    ],
    "tool": {
      "type": "farmersdelight:tool_action",
      "action": "axe_dig"
    }})

for type in afc_wood_types:
    cutting(type, "afc")

for type in tfc_wood_types:
    cutting(type, "tfc")