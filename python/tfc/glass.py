from mcresources import ResourceManager

rm = ResourceManager('modpack')

def heating_recipe(resource_location, input_item, output_fluid, temperature, amount, heat_data_location):
    rm.data(resource_location,{
    "type": "tfc:heating",
    "ingredient": {
    "item": input_item
    },
    "result_fluid": {
    "fluid": output_fluid,
    "amount": amount
    },
    "temperature": temperature
    })
    heating_data(heat_data_location, input_item)

def crushing_recipe(resource_location, input_item, output_item, count = 1, chance = 1):
    rm.data(resource_location, {
    "type": "create:milling",
    "ingredients": [
        {
        "item": input_item
        }
    ],
    "results": [
        {
        "item": output_item,
        "count": count,
        "chance": chance
        }
    ],
    "processingTime": 50
    })

def item_application_recipe(resource_location, input_item, input_block, result_block):
    rm.data(resource_location, {
    "type": "create:item_application",
    "ingredients": [
    {
        "item": input_block
    },
    {
        "item": input_item
    }
    ],
    "results": [
    {
        "item": result_block
    }
    ]
    })

def heating_data(resource_location, input_item):
    rm.data(resource_location, {
    "ingredient": {
        "item": input_item
    },
    "heat_capacity": 1.2
    })

def sawing_recipe(resource_location,input_item, output_item, count):
    rm.data(resource_location,{
    "type": "create:cutting",
    "ingredients": [
        {
        "item": input_item
        }
    ],
    "processingTime": 50,
    "results": [
        {
        "count": count,
        "item": output_item
        }
    ]
    }
    )

def casting_recipe(resource_location, input_fluid, amount, output_item, mold):
    rm.data(resource_location, {
    "type": "tfc:casting",
    "mold": {
        "item": mold
    },
    "fluid": {
        "ingredient": input_fluid,
        "amount": amount
    },
    "result": {"item": output_item},
    "break_chance": 0.01
    })

def filling_recipe(resource_location, input_item, input_fluid, amount, output_item):
    rm.data(resource_location, {
    "type": "create:filling",
    "ingredients": [
    {
        "item": input_item
    },
    {
        "amount": amount,
        "fluid": input_fluid
    }
    ],
    "results": [
    {
        "item": output_item
    }
    ]
    }
    )

def compacting_recipe(resource_location,input_fluid, amount, output):
    rm.data(resource_location, {
    "type": "create:compacting",
    "ingredients": [
        {
        "fluid": input_fluid,
        "amount": amount
        }
    ],
    "results": [
        {
        "item": output
        }
    ]
    })
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
    "blue",
]

def generate(colour):
    fluid_heat(colour)
    item_application(colour)
    melting(colour)
    crushing()
    cutting_glass(colour)
    casting(colour)
    filling(colour)
    compacting(colour)


def fluid_heat(colour): #done
    rm.data("modpack:tfc/metals/glass/" + colour, {
    "tier": 1,
    "fluid": "kubejs:glass/" + colour,
    "melt_temperature": 270,
    "specific_heat_capacity": 0.02143,
    "ingots": {
        "item": "minecraft:netherrack"
    },
    "double_ingots": {
        "item": "minecraft:netherrack"
    },
    "sheets": {
        "item": "minecraft:netherrack"
    }
    }
    )
    rm.data("modpack:tfc/metals/glass/clear", {
    "tier": 1,
    "fluid": "kubejs:glass/clear",
    "melt_temperature": 270,
    "specific_heat_capacity": 0.02143,
    "ingots": {
        "item": "minecraft:netherrack"
    },
    "double_ingots": {
        "item": "minecraft:netherrack"
    },
    "sheets": {
        "item": "minecraft:netherrack"
    }
    }
    )

def melting(colour): #done
    heating_recipe("modpack:recipes/glass/heating/minecraft/" + colour + "_glass", "minecraft:" + colour + "_stained_glass", "kubejs:glass/" + colour, 1070, 800, "modpack:tfc/item_heats/glass/minecraft/" + colour + "_stained_glass")
    heating_recipe("modpack:recipes/glass/heating/minecraft/" + colour + "_glass_pane", "minecraft:" + colour + "_stained_glass_pane", "kubejs:glass/" + colour, 1070, 50, "modpack:tfc/item_heats/glass/minecraft/" + colour + "_stained_glass_pane")

    heating_recipe("modpack:recipes/glass/heating/quark/" + colour + "_framed_glass", "quark:" + colour + "_framed_glass", "kubejs:glass/" + colour, 1070, 800, "modpack:tfc/item_heats/glass/quark/" + colour + "_framed_glass")
    heating_recipe("modpack:recipes/glass/heating/quark/" + colour + "_framed_glass_pane", "quark:" + colour + "_framed_glass_pane", "kubejs:glass/" + colour, 1070, 50, "modpack:tfc/item_heats/glass/quark/" + colour + "_framed_glass_pane")

    heating_recipe("modpack:recipes/glass/heating/hnh/" + colour + "_stained_barred_glass", "hearth_and_home:" + colour + "_stained_barred_glass", "kubejs:glass/" + colour, 1070, 800, "modpack:tfc/item_heats/glass/hnh/" + colour + "_stained_barred_glass")
    heating_recipe("modpack:recipes/glass/heating/hnh/" + colour + "_stained_barred_glass_pane", "hearth_and_home:" + colour + "_stained_barred_glass_pane", "kubejs:glass/" + colour, 1070, 50, "modpack:tfc/item_heats/glass/hnh/" + colour + "_stained_barred_glass_pane")
    
    
    heating_recipe("modpack:recipes/glass/heating/minecraft/glass", "minecraft:glass", "kubejs:glass/clear", 1070, 800, "modpack:tfc/item_heats/glass/minecraft/glass")
    heating_recipe("modpack:recipes/glass/heating/minecraft/glass_pane", "minecraft:glass_pane", "kubejs:glass/clear", 1070, 50, "modpack:tfc/item_heats/glass/minecraft/glass_pane")

    heating_recipe("modpack:recipes/glass/heating/quark/framed_glass", "quark:framed_glass", "kubejs:glass/clear", 1070, 800, "modpack:tfc/item_heats/glass/quark/framed_glass")
    heating_recipe("modpack:recipes/glass/heating/quark/framed_glass_pane", "quark:framed_glass_pane", "kubejs:glass/clear", 1070, 50, "modpack:tfc/item_heats/glass/quark/framed_glass_pane")

    heating_recipe("modpack:recipes/glass/heating/hnh/stained_barred_glass", "hearth_and_home:barred_glass", "kubejs:glass/clear", 1070, 800, "modpack:tfc/item_heats/glass/hnh/barred_glass")
    heating_recipe("modpack:recipes/glass/heating/hnh/stained_barred_glass_pane", "hearth_and_home:barred_glass_pane", "kubejs:glass/clear", 1070, 50, "modpack:tfc/item_heats/glass/hnh/barred_glass_pane")

def item_application(colour):
    item_application_recipe("modpack:recipes/glass/item_application/barred_" + colour, "tfc:metal/rod/wrought_iron", "kubejs:molten_glass/" + colour, "hearth_and_home:" + colour + "_stained_barred_glass")
    item_application_recipe("modpack:recipes/glass/item_application/framed_" + colour, "tfc:metal/rod/steel", "kubejs:molten_glass/" + colour, "quark:" + colour + "_framed_glass")
    item_application_recipe("modpack:recipes/glass/item_application/stained_" + colour, "tfc:powder/flux", "kubejs:molten_glass/" + colour, "minecraft:" + colour + "_stained_glass")

    item_application_recipe("modpack:recipes/glass/item_application/barred", "tfc:metal/rod/wrought_iron", "kubejs:molten_glass/clear", "hearth_and_home:barred_glass")
    item_application_recipe("modpack:recipes/glass/item_application/framed", "tfc:metal/rod/steel", "kubejs:molten_glass/clear", "quark:framed_glass")
    item_application_recipe("modpack:recipes/glass/item_application/stained", "tfc:powder/flux", "kubejs:molten_glass/clear", "minecraft:glass")

def crushing():
    for colour in ["pink","white","light_blue"]: #silica glass, clear glass is at the end of the fn
        crushing_recipe("modpack:recipes/glass/crushing/barred_" + colour, "hearth_and_home:" + colour + "_stained_barred_glass", "tfc:silica_glass_batch")
        crushing_recipe("modpack:recipes/glass/crushing/framed_" + colour, "quark:" + colour + "_framed_glass", "tfc:silica_glass_batch")
        crushing_recipe("modpack:recipes/glass/crushing/stained_" + colour, "minecraft:" + colour + "_stained_glass", "tfc:silica_glass_batch")

    for colour in ["light_gray","gray","black","blue","purple","magenta"]: #volcanic glass
        crushing_recipe("modpack:recipes/glass/crushing/barred_" + colour, "hearth_and_home:" + colour + "_stained_barred_glass", "tfc:volcanic_glass_batch")
        crushing_recipe("modpack:recipes/glass/crushing/framed_" + colour, "quark:" + colour + "_framed_glass", "tfc:volcanic_glass_batch")
        crushing_recipe("modpack:recipes/glass/crushing/stained_" + colour, "minecraft:" + colour + "_stained_glass", "tfc:volcanic_glass_batch")

    for colour in ["lime","green","cyan"]: #olivine glass
        crushing_recipe("modpack:recipes/glass/crushing/barred_" + colour, "hearth_and_home:" + colour + "_stained_barred_glass", "tfc:olivine_glass_batch")
        crushing_recipe("modpack:recipes/glass/crushing/framed_" + colour, "quark:" + colour + "_framed_glass", "tfc:olivine_glass_batch")
        crushing_recipe("modpack:recipes/glass/crushing/stained_" + colour, "minecraft:" + colour + "_stained_glass", "tfc:olivine_glass_batch")
    
    for colour in ["brown","red","orange","yellow"]: #hemaitic glass
        crushing_recipe("modpack:recipes/glass/crushing/barred_" + colour, "hearth_and_home:" + colour + "_stained_barred_glass", "tfc:hematitic_glass_batch")
        crushing_recipe("modpack:recipes/glass/crushing/framed_" + colour, "quark:" + colour + "_framed_glass", "tfc:hematitic_glass_batch")
        crushing_recipe("modpack:recipes/glass/crushing/stained_" + colour, "minecraft:" + colour + "_stained_glass", "tfc:hematitic_glass_batch")

    crushing_recipe("modpack:recipes/glass/crushing/barred", "hearth_and_home:barred_glass", "tfc:silica_glass_batch")
    crushing_recipe("modpack:recipes/glass/crushing/framed", "quark:framed_glass", "tfc:silica_glass_batch")
    crushing_recipe("modpack:recipes/glass/crushing/stained", "minecraft:glass", "tfc:silica_glass_batch")

def glass_block_item_models(colour): #used once
    rm.item_model("modpack/molten_glass/" + colour, {"layer0": "kubejs:item/glass/" + colour})

def cutting_glass(colour):
    sawing_recipe("modpack:recipes/glass/sawing/barred", "hearth_and_home:barred_glass", "hearth_and_home:barred_glass_pane", 8)
    sawing_recipe("modpack:recipes/glass/sawing/framed", "quark:framed_glass", "quark:framed_glass_pane", 8)
    sawing_recipe("modpack:recipes/glass/sawing/stained", "minecraft:glass", "minecraft:glass_pane", 8)

    sawing_recipe("modpack:recipes/glass/sawing/barred_" + colour, "hearth_and_home:" + colour + "_stained_barred_glass", "hearth_and_home:" + colour + "_stained_barred_glass_pane", 8)
    sawing_recipe("modpack:recipes/glass/sawing/framed_" + colour, "quark:" + colour + "_framed_glass", "quark:" + colour + "_framed_glass_pane", 8)
    sawing_recipe("modpack:recipes/glass/sawing/stained_" + colour, "minecraft:" + colour + "_stained_glass", "minecraft:" + colour + "_stained_glass_pane", 8)
    
def casting(colour):
    casting_recipe("modpack:recipes/glass/casting/glass/" + colour, "kubejs:glass/" + colour, 800, "minecraft:" + colour + "_stained_glass", "kubejs:glass_mold")
    casting_recipe("modpack:recipes/glass/casting/pane/" + colour, "kubejs:glass/" + colour, 50, "minecraft:" + colour + "_stained_glass_pane", "kubejs:glass_pane_mold")

    casting_recipe("modpack:recipes/glass/casting/glass/clear", "kubejs:glass/clear", 800, "minecraft:glass", "kubejs:glass_mold")
    casting_recipe("modpack:recipes/glass/casting/pane/clear", "kubejs:glass/clear", 50, "minecraft:glass_pane", "kubejs:glass_pane_mold")

def filling(colour):
    filling_recipe("modpack:recipes/glass/filling/pane/" + colour, "kubejs:glass_pane_mold", "kubejs:glass/" + colour, 50, {"item": "kubejs:glass_pane_mold", "nbt": {"tank":{"Amount":50,"FluidName":"kubejs:glass/" + colour}}})
    filling_recipe("modpack:recipes/glass/filling/glass/" + colour, "kubejs:glass_mold", "kubejs:glass/" + colour, 800, {"item": "kubejs:glass_mold", "nbt": {"tank":{"Amount": 800,"FluidName":"kubejs:glass/" + colour}}})

    filling_recipe("modpack:recipes/glass/filling/molten_glass/" + colour, "tfc:powder/flux", "kubejs:glass/" + colour, 800, "kubejs:molten_glass/" + colour )


    filling_recipe("modpack:recipes/glass/filling/pane/clear", "kubejs:glass_pane_mold", "kubejs:glass/clear", 50, {"item": "kubejs:glass_pane_mold", "nbt": {"tank":{"Amount":50,"FluidName":"kubejs:glass/clear"}}})
    filling_recipe("modpack:recipes/glass/filling/glass/clear", "kubejs:glass_mold", "kubejs:glass/clear", 800, {"item": "kubejs:glass_mold", "nbt": {"tank":{"Amount": 800,"FluidName":"kubejs:glass/clear"}}})

    filling_recipe("modpack:recipes/glass/filling/molten_glass/clear", "tfc:powder/flux", "kubejs:glass/clear", 800, "kubejs:molten_glass/clear" ) 

def compacting(colour):
    compacting_recipe("modpack:recipes/glass/compacting/" + colour, "kubejs:glass/" + colour, 800, "kubejs:molten_glass/" + colour)
    compacting_recipe("modpack:recipes/glass/compacting/clear", "kubejs:glass/clear", 800, "kubejs:molten_glass/clear")

for colour in colours:
    generate(colour)
    print(colour)
    #glass_block_item_models(colour)





