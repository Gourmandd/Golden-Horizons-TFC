from mcresources import ResourceManager

rm = ResourceManager('horizons')

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

def clutch(wood, mod):
    rm.recipe( mod + ":crafting/wood/" + wood+ "_clutch", "forge:disabled", {})

def gearbox(wood, mod):
    rm.recipe(mod + ":crafting/wood/" + wood + "_gear_box", "forge:disabled", {})

def water_wheel(wood, mod):
    rm.recipe(mod + ":crafting/wood/" + wood + "_water_wheel", "forge:disabled", {})

def axle(wood, mod):
    rm.recipe(mod + ":crafting/wood/" + wood + "_axle", "forge:disabled", {})

def bladed_axle(wood, mod):
    rm.recipe(mod + ":crafting/wood/" + wood + "_bladed_axle", "forge:disabled", {})

def encased_axle(wood, mod):
    rm.recipe(mod + ":crafting/wood/" + wood + "_encased_axle", "forge:disabled", {})

def generate(wood, mod):
    clutch(wood, mod)
    gearbox(wood, mod)
    water_wheel(wood, mod)
    axle(wood, mod)
    bladed_axle(wood, mod)
    encased_axle(wood, mod)

for i in tfc_wood_types:
    generate(i, "tfc")

for i in afc_wood_types:
    generate(i, "afc")
