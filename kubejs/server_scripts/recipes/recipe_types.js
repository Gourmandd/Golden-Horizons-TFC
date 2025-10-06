//priority: 10

// ---------------------------------------------- //
// Contains common functions for recipes and data //
// ---------------------------------------------- //






// NOTICE: TO BE REPLACED BY datagen.js



// farmers delight cutting
function cutting(event, input, output, action, id){
    event.custom({
        "type": "farmersdelight:cutting",
        "ingredients": [
          {
            "count": 1,
            "tag": input
          }
        ],
        "result": [
          {
            "count": 1,
            "id": output
          }
        ],
        "sound": {
          "sound_id": "minecraft:item.axe.strip"
        },
        "tool": {
          "type": "farmersdelight:item_ability",
          "action": action
        }}).id(`modpack:cutting_board/${id}`)
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
    }).id(`modpack:scalable_pot/${id}`)
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
    }).id(`modpack:scalable_pot/${id}`)
}

function doliumRestingFluid(event, fluid, fluidAmount, outputItem, id){
  event.custom({
    "type": "caupona:dolium",
    "base": "caupona:stock",
    "density": 0.25,
    "fluid": {
      "fluid": fluid,
      "amount": fluidAmount
    },
    "items": [],
    "keepInfo": false,
    "output": {
      "count": 1,
      "id": outputItem
    }}).id(`modpack:dolium_resting/${id}`)
}

function rolling(event, input, output, outputAmount, id){
  event.custom({
      "type": "createaddition:rolling",
      "ingredients": [
        {
          "item": input
        }
      ],
      "results": [
        {
          "id": output,
          "count": outputAmount
        }
      ]
    }).id(`modpack:rolling/${id}`)
}