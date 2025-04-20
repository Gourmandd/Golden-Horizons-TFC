from mcresources import ResourceManager

rm = ResourceManager('horizons')

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

def mold_filling(mod, metal):
    rm.recipe("mold_filling/mold/"+ metal,"create:filling",{
    "ingredients":[
        {"item": mod + ":ceramic/ingot_mold",
        "nbt": ""},
        {"fluid": mod + ":metal/" + metal,
         "amount": 100}
    ],
    "results": [
       {"item": "tfc:ceramic/ingot_mold",
        "nbt": {"tank":{"Amount":100,"FluidName": mod +":metal/" + metal}}},
    ]
    })
    rm.recipe("mold_filling/fire_mold/"+ metal,"create:filling",{
    "ingredients":[
        {"item": mod + ":ceramic/fire_ingot_mold",
        "nbt": ""},
        {"fluid": mod + ":metal/" + metal,
         "amount": 100}
    ],
    "results": [
       {"item": "tfc:ceramic/fire_ingot_mold",
        "nbt": {"tank":{"Amount":100,"FluidName": mod +":metal/" + metal}}},
    ]
})


def fluid_to_sheet(mod, metal):
    rm.recipe("sheet_making/" + metal,"create:compacting",{
    "ingredients": [
      {
        "amount": 200,
        "fluid": mod +":metal/" + metal,
      }
    ],
    "results": [
      {
        "item": mod +":metal/sheet/" + metal
      }
    ]
})

def ingot_to_double(mod, metal):
    rm.recipe("welding/double_ingot/"+ metal,"create:compacting",{
    "ingredients": [
        {
            "item": mod +":metal/ingot/" + metal
        },
        {
            "item": "tfc:powder/flux"
        },
        {
            "item": mod +":metal/ingot/" + metal
        }
    ],
    "results": [
        {
          "item": mod +":metal/double_ingot/" + metal
        }
    ],
    "heatRequirement": "heated"
})

def sheet_to_double(mod, metal):
    rm.recipe("welding/double_sheet/"+ metal,"create:compacting",{
    "ingredients": [
        {
            "item": mod +":metal/sheet/" + metal
        },
        {
            "item": "tfc:powder/flux"
        },
        {
            "item": mod +":metal/sheet/" + metal
        }
    ],
    "results": [
        {
          "item": mod +":metal/double_sheet/" + metal
        }
    ],
    "heatRequirement": "heated"
})

def ingot_to_rod(mod, metal):
    rm.recipe("rod_rolling/"+ metal,"createaddition:rolling",{
	"input": {
      	"item": mod +":metal/ingot/" + metal
	},
	"result": {
		"item": mod +":metal/rod/" + metal,
		"count": 2
	}
})

def generate_recipes(mod, metal):
    ingot_to_double(mod, metal)
    ingot_to_rod(mod, metal)
    sheet_to_double(mod, metal)
    fluid_to_sheet(mod, metal)
    mold_filling(mod, metal)

for i in tfc_metals:
    generate_recipes("tfc", i)

for i in firmalife_metals:
    generate_recipes("firmalife", i)
