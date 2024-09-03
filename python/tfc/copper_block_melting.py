from mcresources import ResourceManager

rm = ResourceManager('Horizons')

copper_stages=[
    "copper",
    "exposed_copper",
    "weathered_copper",
    "oxidized_copper",
]

stages=[
    "",
    "exposed_",
    "weathered_",
    "oxidized_"
]

block_shapes=[
    "stairs",
    "slab"
]

def generate_shingles(stage, wax, shape, amount):
    rm.recipe("heating/copper/create/"+ wax + stage + "_" + shape, "tfc:heating",{
    "ingredient": {
    "item": "create:" + wax + stage + "_" + shape
    },
    "result_fluid": {
    "fluid": "tfc:metal/copper",
    "amount": amount
    },
    "temperature": 1080
    })
    rm.data("item_heats/copper/create/"+ wax + stage + "_" + shape,
    {
    "ingredient": {
    "item": "create:" + wax + stage + "_" + shape
    },
    "heat_capacity": amount * 3
    })

def generate_cut_copper(stage, wax, shape, amount):
    rm.recipe("heating/copper/minecraft/"+ wax + stage + "cut_copper" + shape, "tfc:heating",{
    "ingredient": {
    "item": "minecraft:" + wax + stage + "cut_copper" + shape
    },
    "result_fluid": {
    "fluid": "tfc:metal/copper",
    "amount": amount
    },
    "temperature": 1080
    })
    rm.data("item_heats/copper/minecraft/" + wax + stage + "cut_copper" + shape,
    {
    "ingredient": {
    "item": "minecraft:" + wax + stage + "cut_copper" + shape
    },
    "heat_capacity": amount * 3
    })

def generate_copper_block():
    rm.recipe("heating/copper/minecraft/" + stage + "_block", "tfc:heating",{
    "ingredient": {
    "item": ":"
    },
    "result_fluid": {
    "fluid": "tfc:metal/copper",
    "amount": 0
    },
    "temperature": 1080
    })
    rm.data("item_heats/copper/",
    {
    "ingredient": {
    "item": ":"
    },
    "heat_capacity": 0
    })

def generate_firmalife():
    rm.recipe("heating/copper/", "tfc:heating",{
    "ingredient": {
    "item": ":"
    },
    "result_fluid": {
    "fluid": "tfc:metal/copper",
    "amount": 0
    },
    "temperature": 1080
    })
    rm.data("item_heats/copper/",
    {
    "ingredient": {
    "item": ":"
    },
    "heat_capacity": 0
    })

for stage in copper_stages:
    for shape in block_shapes:
        generate_shingles(stage, "waxed_", "shingle_" + shape, 450)
        generate_shingles(stage, "", "shingle_" + shape, 450)
        generate_shingles(stage, "waxed_", "tile_" + shape, 450)
        generate_shingles(stage, "", "tile_" + shape, 450)

    generate_shingles(stage, "", "shingles", 450)
    generate_shingles(stage, "waxed_", "shingles", 450)
    generate_shingles(stage, "", "tiles", 450)
    generate_shingles(stage, "waxed_", "tiles", 450)


for stage in stages:
    for shape in block_shapes:
        generate_cut_copper(stage, "waxed_", "_" + shape, 450)
        generate_cut_copper(stage, "", "_" + shape, 450)
        generate_cut_copper(stage, "waxed_", "_" + shape, 450)
        generate_cut_copper(stage, "",  "_" + shape, 450)

    generate_cut_copper(stage, "waxed_", "", 450)
    generate_cut_copper(stage, "", "", 450)
