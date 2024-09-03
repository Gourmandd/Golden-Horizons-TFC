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

def fluid_dye_making(colour):
    rm.recipe("mixing/dye/" + colour, "create:mixing", {
    "ingredients": [
    {
    "item": "minecraft:" + colour + "_dye"
    },
    {
    "fluid": "minecraft:water",
    "amount": 1000
    }
    ],
    "results": [
    {
    "fluid": "tfc:" + colour + "_dye",
    "amount": 1000
    }
    ],
    "heatRequirement": "heated"
    })

def making_chalk(colour):
    rm.recipe("mixing/chalk/chalk_from_" + colour + "_dye", "minecraft:crafting_shapeless", {
      "ingredients": [
    {
      "tag": "tfc:glass_batches"
    },
    {
      "item": "minecraft:" + colour + "_dye"
    }
  ],
  "result": {
    "item": "chalk:" + colour + "_chalk"
  }
    })

def fluid_dye_to_solid(colour):
    rm.recipe("compacting/dye/" + colour, "create:compacting", {
    "ingredients": [
    {
    "fluid": "tfc:" + colour + "_dye",
    "amount": 1000
    }
    ],
    "results": [
    {
    "item": "minecraft:" + colour + "_dye"
    }
    ]
    })

def removing_windmill_dyeing(colour):
    rm.recipe("dye/" + colour + "_windmill_blade", "forge:disabled", {})

for i in colours:
    fluid_dye_making(i)
    fluid_dye_to_solid(i)
    removing_windmill_dyeing(i)
    making_chalk(i)