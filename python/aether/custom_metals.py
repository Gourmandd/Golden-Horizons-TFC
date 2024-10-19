from mcresources import ResourceManager

rm = ResourceManager("modpack")

metals = [
    {"metal": "aluminium", "fluid": "kubejs:aluminium"},
    {"metal": "aluminium_bronze", "fluid": "createbigcannons:molten_bronze"},
    {"metal": "harderned_steel", "fluid": "createbigcannons:molten_steel"},
    {"metal": "cast_iron_alloy", "fluid": "createbigcannons:molten_cast_iron"},
    {"metal": "nethersteel", "fluid": "createbigcannons:molten_nethersteel"}
]

def mold_filling(metal, fluid):
    rm.recipe("custom_metals/mold_filling/mold/"+ metal,"create:filling",{
    "ingredients":[
        {"item": "tfc:ceramic/ingot_mold",
        "nbt": ""},
        {"fluid": fluid,
         "amount": 100}
    ],
    "results": [
       {"item": "tfc:ceramic/ingot_mold",
        "nbt": {"tank":{"Amount":100,"FluidName": fluid}}},
    ]
    })
    rm.recipe("custom_metals/mold_filling/fire_mold/"+ metal,"create:filling",{
    "ingredients":[
        {"item": "tfc:ceramic/fire_ingot_mold",
        "nbt": ""},
        {"fluid": fluid,
         "amount": 100}
    ],
    "results": [
       {"item": "tfc:ceramic/fire_ingot_mold",
        "nbt": {"tank":{"Amount":100,"FluidName": fluid}}},
    ]
})

def welding(path, metal, input_type, output_type):
    rm.recipe("custom_metals/welding/" + path,"tfc:welding", {
    "first_input": {
        "item": "kubejs:metal/" + input_type + "/" + metal
    },
    "second_input": {
        "item": "kubejs:metal/" + input_type + "/" + metal
    },
    "tier": 0,
    "result": {
        "item": "kubejs:metal/" + output_type + "/" + metal
    }
})

def rolling(path, metal):
    rm.recipe("custom_metals/rolling/" + path,"createaddition:rolling",{
	"input": {
      	"item": "kubejs:metal/ingot/" + metal
	},
	"result": {
		"item": "kubejs:metal/rod/" + metal,
		"count": 2
	}
})

def fluid_compacting(path, metal, output_type, fluid, fluid_amount):
    rm.recipe("custom_metals/compacting/" + path,"create:compacting",{
    "ingredients": [
      {
        "amount": fluid_amount,
        "fluid": fluid
      }
    ],
    "results": [
      {
        "item": "kubejs:metal/"+ output_type + "/" + metal
      }
    ]
})
    
def item_compacting(path, metal, input_type, output_type):
    rm.recipe("custom_metals/compacting/" + path,"create:compacting",{
    "ingredients": [
        {
            "item": "kubejs:metal/" + input_type + "/" + metal
        },
        {
            "item": "tfc:powder/flux"
        },
        {
            "item": "kubejs:metal/" + input_type + "/" + metal
        }
    ],
    "results": [
        {
          "item": "kubejs:metal/" + output_type + "/" + metal
        }
    ],
    "heatRequirement": "heated"
})

def cutting(path, metal, input_type, output_type):
    rm.recipe("custom_metals/cutting/" + path, "create:cutting",{
    "ingredients": [
        {
        "item": "kubejs:metal/" + input_type + "/" + metal
        }
    ],
    "processingTime": 50,
    "results": [
        {
        "item": "kubejs:metal/" + output_type + "/" + metal,
        "count": 2
        }
    ]
})
    
def pressing(path, metal):
    rm.recipe("custom_metals/pressing/" + path, "create:pressing", {
    "ingredients": [
    {
    "item": "kubejs:metal/double_ingot/" + metal
    }
    ],
    "results": [
    {
    "item": "kubejs:metal/sheet/" + metal
    }
    ]
})

def sheet_anvil(path, metal):
    rm.recipe("custom_metals/anvil/sheet/" + path, "tfc:anvil", {
    "input": {
        "item": "kubejs:metal/double_ingot/" + metal
    },
    "result": {
        "item": "kubejs:metal/sheet/" + metal
    },
    "tier": 2,
    "rules": [
        "hit_last",
        "hit_second_last",
        "hit_third_last"
    ]
})

def rod_anvil(path, metal):
    rm.recipe("custom_metals/anvil/rod/" + path, "tfc:anvil", {
    "input": {
        "item": "kubejs:metal/ingot/" + metal
    },
    "result": {
        "item": "kubejs:metal/rod/" + metal,
        "count": 2
    },
    "tier": 2,
    "rules": [
        "bend_last",
        "draw_second_last",
        "draw_third_last"
    ]
})

def generate():
    for m in metals:
        metal = m.get("metal")
        fluid = m.get("fluid")
        cutting("double_ingot/" + metal, metal, "double_ingot", "ingot")

        cutting("double_sheet/" + metal, metal, "double_sheet", "double_ingot")
        welding("double_ingot/" + metal, metal, "ingot", "double_ingot")
        item_compacting("double_ingot/" + metal, metal, "ingot", "double_ingot")

        fluid_compacting("sheet/" + metal, metal, "sheet", fluid, 200)
        pressing("sheet/" + metal, metal)
        sheet_anvil("sheet/" + metal, metal)

        item_compacting("double_sheet/" + metal, metal, "sheet", "double_sheet")
        welding("double_sheet/" + metal, metal, "sheet", "double_sheet")

        rod_anvil("rod/" + metal, metal)
        rolling("rod/" + metal, metal)



generate()