from mcresources import ResourceManager

import common

rm = ResourceManager("modpack")

for colour in common.Values.COLOURS:
    rm.recipe("glass/" + colour, "create:sequenced_assembly", {
    "ingredient": {
      "item": "kubejs:molten_glass/" + colour
    },
    "transitionalItem": {
      "item": "minecraft:" + colour + "_stained_glass_pane"
    },
    "sequence": [
        {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "minecraft:" + colour + "_stained_glass_pane"
          },
          {
            "item": "tfc:powder/soda_ash"
          }
        ],
        "results": [
          {
            "item": "minecraft:" + colour + "_stained_glass_pane"
          }
        ],
        "keepHeldItem": True
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "minecraft:" + colour + "_stained_glass_pane"
          },
          {
            "item": "tfc:bellows"
          }
        ],
        "results": [
          {
            "item": "minecraft:" + colour + "_stained_glass_pane"
          }
        ],
        "keepHeldItem": True
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "minecraft:" + colour + "_stained_glass_pane"
          },
          {
            "item": "tfc:paddle"
          }
        ],
        "results": [
          {
            "item": "minecraft:" + colour + "_stained_glass_pane"
          }
        ],
        "keepHeldItem": True
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "minecraft:" + colour + "_stained_glass_pane"
          },
          {
            "item": "tfc:wool_cloth"
          }
        ],
        "results": [
          {
            "item": "minecraft:" + colour + "_stained_glass_pane"
          }
        ],
        "keepHeldItem": True
      },
      {
        "type": "create:deploying",
        "ingredients": [
          {
            "item": "minecraft:" + colour + "_stained_glass_pane"
          },
          {
            "item": "tfc:gem_saw"
          }
        ],
        "results": [
          {
            "item": "minecraft:" + colour + "_stained_glass_pane"
          }
        ]
      }
    ],
    "results": [
      {
        "item": "kubejs:" + colour + "_lens",
        "chance": 1
      }
    ],
    "loops": 3

    })

    rm.recipe("glass/lenses/" + colour, "tfc:heating", {
    "ingredient": {
      "item": "kubejs:"+ colour + "_lens"
    },
    "result_fluid": {
      "fluid": "kubejs:glass/" + colour,
      "amount": 400
    },
    "temperature": 1070
  })