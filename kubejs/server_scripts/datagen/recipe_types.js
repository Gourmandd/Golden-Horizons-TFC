//priority: 1

// ---------------------------------------------- //
// Contains common functions for recipes and data //
// ---------------------------------------------- //



// farmers delight cutting
function cutting(event, input, output, action, id){
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
          {
            "tag": input
          }
        ],
        "result": [
          {
            "item": output
          }
        ],
        "tool": {
          "type": "farmersdelight:tool_action",
          "action": action
        }}).id("modpack:cutting_board/" + id)
}

//artisanal TFC scaleable pot recipe
function scaleablePotRecipeFluid(event, input, inputFluid, fluidAmount, outputFluid, outputAmount, duration, temperature, id){
  event.custom({
      "type": "artisanal:scalable_pot",
      "ingredients": [
        {
            "item": input
        }
        ],
        "fluid_ingredient": {
          "ingredient": inputFluid,
          "amount": fluidAmount
        },
        "duration": duration,
        "temperature": temperature,
        "fluid_output": {
          "fluid": outputFluid,
          "amount": outputAmount
        },
    }).id("modpack:scalable_pot/" + id)
}

function scaleablePotRecipeItem(event, input, inputFluid, fluidAmount, outputItem, duration, temperature, id){
  event.custom({
      "type": "artisanal:scalable_pot",
      "ingredients": [
        {
            "item": input
        }
        ],
        "fluid_ingredient": {
          "ingredient": inputFluid,
          "amount": fluidAmount
        },
        "duration": duration,
        "temperature": temperature,
        "item_output": [
          {
            "item": outputItem,
          }
        ]
    }).id("modpack:scalable_pot/" + id)
}

function doliumRestingFluid(event, fluid, fluidAmount, outputItem, id){
  event.custom({
    "type": "caupona:dolium",
    "amount": fluidAmount,
    "base": "caupona:stock",
    "density": 0.25,
    "fluid": fluid,
    "items": [],
    "keepInfo": false,
    "output": {
      "type": "forge:nbt",
      "count": 1,
      "item": outputItem
    }}).id("modpack:dolium_resting/" + id)
}

/*
def aspic_from_soup_dolium(soup):
    rm.recipe("caupona/"+ soup + "_dolium_aspic","caupona:dolium",
    {
    "amount": 250,
    "base": "caupona:stock",
    "density": 0.25,
    "fluid": "caupona:" + soup,
    "items": [],
    "keepInfo": False,
    "output": {
      "type": "forge:nbt",
      "count": 1,
      "item": "caupona:" + soup + "_aspic"
    }
    })
*/