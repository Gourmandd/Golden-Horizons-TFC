from mcresources import ResourceManager

rm = ResourceManager('horizons')

#
#
#THIS WILL BE REPLACED
#
#

metals = [
"copper",
"bronze",
"black_bronze",
"bismuth_bronze"
]

tools_100 = [
"pickaxe_head",
"axe_head",
"propick_head",
"shovel_head",
"hoe_head",
"chisel_head",
"hammer_head",
"saw_blade",
"javelin_head",
"scythe_blade",
"knife_blade"
]

tools_200 =[
"sword_blade",
"mace_head"
]

def mold_filling(metal, amount, tool, rm: ResourceManager):
    rm.recipe("casting/" + tool + "/" + metal  , "create:sequenced_assembly",

    {
        "ingredient": {
          "item": "tfc:ceramic/"+ tool + "_mold"
        },
        "loops": 1,
        "results": [
          {
            "item": "tfc:metal/"+ tool +"/" + metal
          }
        ],
        "sequence": [
          {
            "type": "create:filling",
            "ingredients": [
              {
                "item": "tfc:ceramic/"+ tool + "_mold"
              },
              {
                "amount": amount,
                "fluid": "tfc:metal/" + metal,
                "nbt": {}
              }
            ],
            "results": [
              {
                "item": "tfc:ceramic/"+ tool + "_mold"
              }
            ]
          },
          {
            "type": "create:pressing",
            "ingredients": [
              {
                "item": "tfc:ceramic/"+ tool + "_mold"
              }
            ],
            "results": [
              {
                "item": "tfc:ceramic/"+ tool + "_mold"
              }
            ]
          },
          {
            "type": "create:cutting",
            "ingredients": [
              {
                "item": "tfc:ceramic/"+ tool + "_mold"
              }
            ],
            "results": [
              {
                "item": "tfc:ceramic/"+ tool + "_mold"
              }
            ]
          }
        ],
        "transitionalItem": {
          "item": "tfc:ceramic/"+ tool + "_mold"
        }
    }
)

def tool_casting(metal):
    for i in tools_100:
        mold_filling(metal, 100, i, rm)

    for i in tools_200:
        mold_filling(metal, 200, i, rm)



for i in metals:
    tool_casting(i)