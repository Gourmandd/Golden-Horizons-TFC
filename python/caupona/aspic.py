from mcresources import ResourceManager

rm = ResourceManager('Horizons')

aspics=[
    "nettle_soup",
    "mushroom_soup",
    "bisque",
    "borscht",
    "stock",
    "seaweed_soup",
    "stracciatella",
    "vegetable_soup",
    "egg_drop_soup",
    "fish_soup",
    "goulash",
    "meat_soup",
    "poultry_soup",
    "pumpkin_soup"
]
    
def aspic_from_pot_1(soup):
    rm.recipe("caupona/"+ soup + "_1", "artisanal:scalable_pot", 
    {"ingredients": [
    {
        "item": "tfc:powder/salt"
    }
    ],
    "fluid_ingredient": {
      "ingredient": "caupona:" + soup,
      "amount": 250
    },
    "duration": 1000,
    "temperature": 300,
    "item_output": [
    {
      "item": "caupona:" + soup + "_aspic",
    }
    ]
    })

def soup_from_aspic_pot(soup):
    rm.recipe("caupona/"+ soup + "_melting", "artisanal:scalable_pot", 
    {"ingredients": [
    {
        "item": "caupona:" + soup + "_aspic"
    }
    ],
    "fluid_ingredient": {
      "ingredient": "minecraft:water",
      "amount": 250
    },
    "duration": 500,
    "temperature": 300,
    "fluid_output": {
      "fluid": "caupona:" + soup,
      "amount": 250
    },
    })

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

def generate(soup):
    soup_from_aspic_pot(soup)
    aspic_from_soup_dolium(soup)
    aspic_from_pot_1(soup)
    #aspic_from_pot_2(soup)
    #aspic_from_pot_3(soup)
    #aspic_from_pot_4(soup)

for item in aspics:
    generate(item)