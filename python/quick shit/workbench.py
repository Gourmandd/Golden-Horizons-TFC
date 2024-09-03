workbenches = []
line = ""

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

for wood in tfc_wood_types:
    workbenches.append("tfc:wood/planks/" + wood + "_workbench")

for wood in afc_wood_types:
    workbenches.append("afc:wood/planks/" + wood + "_workbench")

    