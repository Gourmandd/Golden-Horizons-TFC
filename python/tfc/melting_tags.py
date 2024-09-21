from mcresources import ResourceManager

rm = ResourceManager('modpack')
METALS = [
    "bronze",
    "bismuth_bronze",
    "black_bronze",
    "copper",
    "wrought_iron",
    "steel",
    "black_steel",
    "red_steel",
    "blue_steel"
]

WOOD_TYPES_TFC = [
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

COPPER_STATES =[
    "",
    "exposed" + "_",
    "weathered" + "_",
    "oxidized" + "_",
]

WOOD_TYPES_AFC =[
    "baobab",
    "eucalyptus",
    "mahogany",
    "hevea",
    "tualang",
    "teak",
    "cypress",
    "fig",
    "ironwood",
    "ipe",
]

for metal in METALS:
    for wood in WOOD_TYPES_TFC:
        rm.item_tag("modpack:hanging_signs/metal/" + metal, "tfc:wood/hanging_sign/" + metal + "/" + wood)
    for wood in WOOD_TYPES_AFC:
        rm.item_tag("modpack:hanging_signs/metal/" + metal, "afc:wood/hanging_sign/" + metal + "/" + wood)

for state in COPPER_STATES:
    rm.item_tag("modpack:copper_shingles", "create:" + state + "copper_shingles")
    rm.item_tag("modpack:copper_shingles", "create:waxed_" + state + "copper_shingles")

    rm.item_tag("modpack:copper_shingle_stairs", "create:" + state + "copper_shingle_stairs")
    rm.item_tag("modpack:copper_shingle_stairs", "create:waxed_" + state + "copper_shingle_stairs")

    rm.item_tag("modpack:copper_shingle_slab", "create:" + state + "copper_shingle_slab")
    rm.item_tag("modpack:copper_shingle_slab", "create:waxed_" + state + "copper_shingle_slab")

    rm.item_tag("modpack:copper_tiles", "create:" + state + "copper_tiles")
    rm.item_tag("modpack:copper_tiles", "create:waxed_" + state + "copper_tiles")

    rm.item_tag("modpack:copper_tile_stairs", "create:" + state + "copper_tile_stairs")
    rm.item_tag("modpack:copper_tile_stairs", "create:waxed_" + state + "copper_tile_stairs")

    rm.item_tag("modpack:copper_tile_slab", "create:" + state + "copper_tile_slab")
    rm.item_tag("modpack:copper_tile_slab", "create:waxed_" + state + "copper_tile_slab")

    rm.item_tag("modpack:copper_roofs", "alekiroofs:" + state + "cut_copper_roofing")
    rm.item_tag("modpack:copper_roofs", "alekiroofs:waxed_" + state + "cut_copper_roofing")

    rm.item_tag("modpack:cut_copper", "minecraft:" + state + "cut_copper")
    rm.item_tag("modpack:cut_copper", "minecraft:waxed_" + state + "cut_copper")

    rm.item_tag("modpack:cut_copper_stairs", "minecraft:" + state + "cut_copper_stairs")
    rm.item_tag("modpack:cut_copper_stairs", "minecraft:waxed_" + state + "cut_copper_stairs")

    rm.item_tag("modpack:cut_copper_slab", "minecraft:" + state + "cut_copper_slab")
    rm.item_tag("modpack:cut_copper_slab", "minecraft:waxed_" + state + "cut_copper_slab")

for wood in WOOD_TYPES_TFC:
    rm.item_tag("modpack:axles", "tfc:wood/bladed_axle/" + wood)
for wood in WOOD_TYPES_AFC:
    rm.item_tag("modpack:axles", "afc:wood/bladed_axle/" + wood)

rm.flush()