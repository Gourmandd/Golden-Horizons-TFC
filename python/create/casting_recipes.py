from mcresources import ResourceManager

rm = ResourceManager('Horizons')

# THING TO DO
# Sawing double sheets into double ingots, DONE
# And sawing double ingots into ingots     DONE
# 
# Pressing(compating) ingots into sheets (heated) DONE
#
# FIlling tool molds
#
# (pricy)Sequenced assembly for tool heads? (can use tools, including gem saws) will go in a seperate script
#
# Deployer pressing clay into molds

tfc_metals = [

"copper",
"gold",
"bismuth",
"silver",
"rose_gold",
"bismuth_bronze",
"black_bronze",
"bronze",
"brass",
"nickel",
"tin",
"zinc",
"sterling_silver",
"cast_iron",
"steel",
"black_steel",
"blue_steel",
"red_steel"
]

firmalife_metals = [

"chromium",
"stainless_steel"
]

castable_metals = [
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

bell_metals =[
    "gold",
    "bronze",
    "brass"
]

tool_metals =[
    "bronze",
    "black_bronze",
    "bismuth_bronze",
    "copper",
    "red_steel",
    "blue_steel",
    "black_steel",
    "steel",
    "wrought_iron",
]

def sawing_double_sheets(mod, metal):
    rm.recipe("cutting/double_sheets/"+ metal, "create:cutting",{
  "ingredients": [
    {
      "item": mod + ":metal/double_sheet/" + metal
    }
  ],
  "processingTime": 50,
  "results": [
    {
      "item": mod + ":metal/double_ingot/" + metal,
      "count": 2
    }
  ]
})

def sawing_double_ingots(mod, metal):
  rm.recipe("cutting/double_ingots/"+ metal, "create:cutting",{
  "ingredients": [
    {
      "item": mod + ":metal/double_ingot/" + metal
    }
  ],
  "processingTime": 50,
  "results": [
    {
      "item": mod + ":metal/ingot/" + metal,
      "count": 2
    }
  ]
})

def ingots_to_sheets(mod, metal):
    rm.recipe("pressing/ingots_to_sheets_"+ metal, "create:pressing", {
    "ingredients": [
      {
        "item": mod + ":metal/double_ingot/" + metal
      }
    ],
    "results": [
      {
        "item": mod + ":metal/sheet/" + metal
      }
    ]
  })

def metal_generate(mod, metal):
    ingots_to_sheets(mod, metal)
    sawing_double_ingots(mod, metal)
    sawing_double_sheets(mod, metal)

for i in tfc_metals:
    metal_generate("tfc", i)

#tool mold filling
def tool_mold_filling(metal, amount, tool):
    rm.recipe("mold_filling/"+ tool +"_mold/"+ metal,"create:filling",{
    "ingredients":[
        {"item": "tfc:ceramic/"+ tool +"_mold",
        "nbt": ""},
        {"fluid": "tfc:metal/" + metal,
         "amount": amount}
    ],
    "results": [
       {"item": "tfc:ceramic/"+ tool +"_mold",
        "nbt": {"tank":{"Amount":amount,"FluidName": "tfc:metal/" + metal}}},
    ]
    })

for i in tools_100:
    for metal in castable_metals:
        tool_mold_filling(metal, 100, i)
for i in tools_200:
    for metal in castable_metals:
        tool_mold_filling(metal, 200, i)
#bells
for i in bell_metals:
    rm.recipe("mold_filling/bell_mold/"+ i,"create:filling",{
    "ingredients":[
        {"item": "tfc:ceramic/bell_mold",
        "nbt": ""},
        {"fluid": "tfc:metal/" + i,
         "amount": 100}
    ],
    "results": [
       {"item": "tfc:ceramic/bell_mold",
        "nbt": {"tank":{"Amount":100,"FluidName": "tfc:metal/" + i}}},
    ]
    })

#molding 
def deployer_molding(tool):
  rm.recipe("deploying/molds/"+ tool, "create:deploying",{
  "ingredients": [
    {
      "item": "minecraft:clay"
    },
    {
      "tag": "modpack:tools/" + tool
    }
  ],
  "results": [
    {
      "item": "tfc:ceramic/unfired_" + tool + "_mold"
    }
  ],
  "keepHeldItem": "true"
}) 

for i in tools_100:
    deployer_molding(i)

for i in tools_200:
    deployer_molding(i)
  
for tool in tools_100:
    for metal in tool_metals:
        rm.item_tag("tools/" + tool,"tfc:metal/" + tool + "/" + metal)
        rm.item_tag("tools/axe_head","tfc:metal/axe_head/copper")
#This aint working
for tool in tools_200:
    for metal in tool_metals:
        rm.item_tag("tools/" + tool,"tfc:metal/" + tool + "/" + metal)

rm.flush() # you need this for the tags to be generates *facepalm* wasted an hour

