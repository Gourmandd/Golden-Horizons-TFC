from mcresources import ResourceManager

rm = ResourceManager('horizons')

tfc_wood_types =[
    "ash",
    "chestnut",
    "mangrove",
    "pine",
    "sycamore",
    "aspen",
    "douglas_fir",
    "maple",
    "rosewood",
    "white_cedar",
    "birch",
    "hickory",
    "oak",
    "sequoia",
    "willow",
    "acacia",
    "blackwood",
    "kapok",
    "palm",
    "spruce",
]

afc_wood_types =[
    "baobab",
    "tualang",
    "ironwood",
    "eucalyptus",
    "teak",
    "ipe",
    "mahogany",
    "cypress",
    "hevea",
    "fig",
    
]

spectrum_logs= [
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
    "dark_blue",
]

def log_stripping_tfc(wood, type, mod):
    rm.recipe("cutting/"+ type + "/stripping/"+mod+"/"+ wood, "create:cutting", {
    "ingredients": [
    {
    "item": mod+":wood/"+ type +"/"+ wood
    }
    ],
    "processingTime": 50,
    "results": [
    {
    "item": mod+":wood/stripped_"+ type+"/" + wood
    }
    ]
    })

def stripped_log_into_planks_tfc(wood, type, mod):
    rm.recipe("cutting/"+ type + "/into_planks/"+mod+"/" + wood, "create:cutting", {
    "ingredients": [
    {
    "item": mod+":wood/stripped_"+ type + "/"+ wood
    }
    ],
    "processingTime": 50,
    "results": [
    {
    "item": mod+":wood/planks/" + wood,
    "count": 4
    }
    ]
    })

def planks_into_lumber_tfc(wood, mod):
    rm.recipe("cutting/into_lumber/"+mod+"/" + wood, "create:cutting", {
    "ingredients": [
    {
    "item": mod+":wood/planks/"+ wood
    }
    ],
    "processingTime": 50,
    "results": [
    {
    "item": mod+":wood/lumber/" + wood,
    "count": 4
    }
    ]
    })

def tfc_generate_planks(wood, mod):
    planks_into_lumber_tfc(wood, mod)

def tfc_generate_logs(wood, type, mod):
    stripped_log_into_planks_tfc(wood, type, mod)
    log_stripping_tfc(wood, type, mod)

def tfc_generate_wood(wood, type, mod):
    stripped_log_into_planks_tfc(wood, type, mod)
    log_stripping_tfc(wood, type, mod)

for i in tfc_wood_types:
    tfc_generate_planks(i, "tfc")
    tfc_generate_logs(i, "log", "tfc")
    tfc_generate_wood(i, "wood", "tfc")

for i in afc_wood_types:
    tfc_generate_planks(i, "afc")
    tfc_generate_logs(i, "log", "afc")
    tfc_generate_wood(i, "wood", "afc")
































# Not needed for the time being

# SPECTRUM
def log_stripping_spectrum(wood, type):
    rm.recipe("cutting/"+ type + "/stripping/spectrum/"+ wood, "create:cutting", {
    "ingredients": [
    {
    "item": "spectrum:"+ wood + "_" + type
    }
    ],
    "processingTime": 50,
    "results": [
    {
    "item": "spectrum:stripped_" + wood + "_" + type
    }
    ]
    })

def stripped_log_into_planks_spectrum(wood, type):
    rm.recipe("cutting/"+ type + "/into_planks/spectrum/" + wood, "create:cutting", {
    "ingredients": [
    {
    "item": "spectrum:stripped_" + wood + "_" + type
    }
    ],
    "processingTime": 50,
    "results": [
    {
    "item": "spectrum:" + wood + "_planks",
    "count": 4
    }
    ]
    })

def planks_into_lumber_spectrum(wood):
    rm.recipe("cutting/into_lumber/spectrum/" + wood, "create:cutting", {
    "ingredients": [
    {
    "item": "spectrum:" + wood + "_planks"
    }
    ],
    "processingTime": 50,
    "results": [
    {
    "item": "kubejs:" + wood + "_lumber",
    "count": 4
    }
    ]
    })

def spectrum_lumber_into_planks(wood):
    rm.crafting_shaped("crafting/spectrum_lumber/"+ wood, ["WW", "WW"], "kubejs:" + wood + "_lumber", "spectrum:" + wood + "_planks" )

def spectrum_generate_planks(wood):
    spectrum_lumber_into_planks(wood)
    planks_into_lumber_spectrum(wood)

def spectrum_generate_logs(wood, type):
    log_stripping_spectrum(wood, type)
    stripped_log_into_planks_spectrum(wood, type)
    
def spectrum_generate_wood(wood, type):
    log_stripping_spectrum(wood, type)
    stripped_log_into_planks_spectrum(wood, type)

for i in spectrum_logs:
    spectrum_generate_planks(i)
    spectrum_generate_logs(i, "log")
    spectrum_generate_wood(i, "wood")