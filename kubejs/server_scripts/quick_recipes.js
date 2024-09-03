

// Quick and dirty recipes that I could port to the python code but too lazy for now

ServerEvents.recipes(event =>{
let colours = [
    {"low": "blue", "cap" : "Blue"},
    {"low": "red", "cap" : "Red"},
    {"low": "white", "cap" : "White"},
    {"low": "light_gray", "cap" : "Light Gray"},
    {"low": "gray", "cap" : "Gray"},
    {"low": "black", "cap" : "Black"},
    {"low": "brown", "cap" : "Brown"},
    {"low": "orange", "cap" : "Orange"},
    {"low": "yellow", "cap" : "Yellow"},
    {"low": "lime", "cap" : "Lime"},
    {"low": "green", "cap" : "Green"},
    {"low": "cyan", "cap" : "Cyan"},
    {"low": "light_blue", "cap" : "Light Blue"},
    {"low": "purple", "cap" : "Purple"},
    {"low": "magenta", "cap" : "Magenta"},
    {"low": "pink", "cap" : "Pink"},
]

colours.forEach(colour => {
    event.custom({
        "type": "minecraft:crafting_shaped",
        "pattern": [
          "BB",
          "BB"
        ],
        "key": {
          "B": {
            "item": "minecraft:" + colour.low + "_terracotta"
          }
        },
        "result": {
          "item": "hearth_and_home:" + colour.low + "_terracotta_bricks",
          "count": 4
        }
      })
})
})
