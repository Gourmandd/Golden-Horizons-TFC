from mcresources import ResourceManager

rm = ResourceManager("modpack")

aether_wood = ["skyroot"]

aether_redux_wood = [
    "fieldsproot",
    "blightwillow",
    "cloudcap",
    "jellyshroom",
    "crystal",
    "glacia",    
]

deep_aether_wood = [
    "roseroot",
    "yagroot",
    "cruderoot",
    "conberry",
    "sunroot",    
]
'''
gravitation_wood = [
    "aerfin",
    "beladon",
    "enchanted"    
]
'''

def lumber_from_logs(type, mod, tag):
    rm.crafting_shapeless("aether/crafting/wood/lumber_from_" + type + "_logs", [{"tag": mod + ":" + tag},{"tag": "tfc:saws"}],{"item": "kubejs:wood/lumber/" + type, "count": 8})
    rm.crafting_shaped("aether/crafting/wood/planks_from_" + type + "_lumber", ["LL","LL"], {"L":{"item":"kubejs:wood/lumber/" + type}},{"item":mod + ":" + type + "_planks"})

def lumber_from_plank_variants(type, mod):
    rm.crafting_shapeless("aether/crafting/wood/lumber_from_" + type + "_planks", [{"item": mod + ":" + type + "_planks"},{"tag": "tfc:saws"}],{"item": "kubejs:wood/lumber/" + type, "count": 4})
    rm.crafting_shapeless("aether/crafting/wood/lumber_from_" + type + "_stairs", [{"item": mod + ":" + type + "_stairs"},{"tag": "tfc:saws"}],{"item": "kubejs:wood/lumber/" + type, "count": 3})
    rm.crafting_shapeless("aether/crafting/wood/lumber_from_" + type + "_slabs", [{"item": mod + ":" + type + "_slab"},{"tag": "tfc:saws"}],{"item": "kubejs:wood/lumber/" + type, "count": 2})

def aether_wood_products(type, mod):
    rm.crafting_shaped(mod + ":" + type + "_fence", ["PLP","PLP"], {"P":{"item":mod + ":" + type + "_planks"},"L":{"item":"kubejs:wood/lumber/" + type}},{"item":mod + ":" + type + "_fence", "count":8 })
    rm.crafting_shaped(mod + ":" + type + "_fence_gate", ["LPL","LPL"], {"P":{"item":mod + ":" + type + "_planks"},"L":{"item":"kubejs:wood/lumber/" + type}},{"item":mod + ":" + type + "_fence_gate", "count":2 })
    rm.crafting_shaped(mod + ":" + type + "_stairs", ["P  ","PP ","PPP"], {"P":{"item":mod + ":" + type + "_planks"}},{"item":mod + ":" + type + "_stairs", "count":8 })
    rm.crafting_shaped(mod + ":" + type + "_trapdoor", ["LLL","LLL"], {"L":{"item":"kubejs:wood/lumber/" + type}},{"item":mod + ":" + type + "_trapdoor", "count":3 })
    rm.crafting_shaped(mod + ":" + type + "_door", ["LL","LL","LL"], {"L":{"item":"kubejs:wood/lumber/" + type}},{"item":mod + ":" + type + "_door", "count":2 })
    rm.crafting_shaped(mod + ":" + type + "_sign", ["LLL","LLL"," S "], {"L":{"item":"kubejs:wood/lumber/" + type}, "S":{"tag":"forge:rods/wooden"}},{"item":mod + ":" + type + "_sign", "count":3 })
    rm.crafting_shaped(mod + ":" + type + "_hanging_sign", ["S S","LLL","LLL"], {"L":{"item":"kubejs:wood/lumber/" + type}, "S":{"item":"tfc:metal/chain/steel"}},{"item":mod + ":" + type + "_hanging_sign", "count":3 })
    rm.crafting_shaped(mod + ":" + type + "_pressure_plate", ["LL"], {"L":{"item":"kubejs:wood/lumber/" + type}},{"item":mod + ":" + type + "_pressure_plate"})


    
def generate():
    for type in aether_wood:
        if type == "skyroot":
            lumber_from_logs(type, "aether", "crafts_skyroot_planks")

    for type in aether_redux_wood:
        if type == "cloudcap":
            lumber_from_logs(type, "aether_redux", type + "_stems")
        elif type == "jellyshroom":
            lumber_from_logs(type, "aether_redux", type + "_stems")
        else:
            lumber_from_logs(type, "aether_redux", type + "_logs")
        
    for type in deep_aether_wood:
        lumber_from_logs(type, "deep_aether", type + "_logs")
        lumber_from_plank_variants(type, "deep_aether")
        aether_wood_products(type, "deep_aether")

    for type in aether_wood:
        lumber_from_plank_variants(type, "aether")
        aether_wood_products(type, "aether")

    for type in aether_redux_wood:
        lumber_from_plank_variants(type, "aether_redux")
        aether_wood_products(type, "aether_redux")
'''
    for type in gravitation_wood:
        lumber_from_logs(type, "gravitation", type + "_logs")
        lumber_from_plank_variants(type, "gravitation")
        aether_wood_products(type, "gravitation")
'''



generate()