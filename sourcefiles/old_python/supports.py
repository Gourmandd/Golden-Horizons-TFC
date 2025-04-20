from mcresources import ResourceManager
import common

rm = ResourceManager("modpack")

# Generates supports to lumber recipes and data for aether supports.

aether_wood_types = [
    "skyroot",
    "fieldsproot",
    "blightwillow",
    "cloudcap",
    "jellyshroom",
    "crystal",
    "glacia",
    "roseroot",
    "yagroot",
    "cruderoot",
    "conberry",
    "sunroot",
    "highsproot",
    "sakura"
]

aether_wood_assets = [
    {"type":"skyroot", "base": "aether:block/natural/stripped_skyroot_log", "top": "aether:block/natural/stripped_skyroot_log_top"},
    {"type":"fieldsproot", "base": "aether_redux:block/natural/stripped_fieldsproot_log", "top": "aether_redux:block/natural/stripped_fieldsproot_log_top"},
    {"type":"blightwillow", "base": "aether_redux:block/natural/stripped_blightwillow_log", "top": "aether_redux:block/natural/stripped_blightwillow_log_top"},
    {"type":"cloudcap", "base": "aether_redux:block/natural/stripped_cloudcap_stem", "top": "aether_redux:block/natural/stripped_cloudcap_stem_top"},
    {"type":"jellyshroom", "base": "aether_redux:block/natural/jellyshroom_stem", "top": "aether_redux:block/natural/jellyshroom_stem_top"},
    {"type":"crystal", "base": "aether_redux:block/natural/stripped_crystal_log", "top": "aether_redux:block/natural/stripped_crystal_log_top"},
    {"type":"glacia", "base": "aether_redux:block/natural/stripped_glacia_log", "top": "aether_redux:block/natural/stripped_glacia_log_top"},
    {"type":"roseroot", "base": "deep_aether:block/stripped_roseroot_log", "top": "deep_aether:block/stripped_roseroot_log_top"},
    {"type":"yagroot", "base": "deep_aether:block/stripped_yagroot_log", "top": "deep_aether:block/stripped_yagroot_log_top"},
    {"type":"cruderoot", "base": "deep_aether:block/stripped_cruderoot_log", "top": "deep_aether:block/stripped_cruderoot_log_top"},
    {"type":"conberry", "base": "deep_aether:block/stripped_conberry_log", "top": "deep_aether:block/stripped_conberry_log_top"},
    {"type":"sunroot", "base": "deep_aether:block/stripped_sunroot_log", "top": "deep_aether:block/stripped_sunroot_log_top"},
    {"type":"highsproot", "base": "ancient_aether:block/stripped_highsproot_log", "top": "ancient_aether:block/stripped_highsproot_log_top"},
    {"type":"sakura", "base": "ancient_aether:block/stripped_sakura_log", "top": "ancient_aether:block/stripped_sakura_log_top"},
]

def generate_lumber_recipes(type, mod):
    rm.recipe("recycling/supports/" + mod + "/" + type, "tfc:damage_inputs_shapeless_crafting", {
    "recipe": {
    "type": "minecraft:crafting_shapeless",
    "ingredients": [
        {
        "item": mod + ":wood/support/" + type
        },
        {
        "tag": "tfc:saws"
        }
    ],
    "result": {
        "item": mod + ":wood/lumber/" + type,
        "count": 2
        }
    }
    })

def generate_support_data(type):
    rm.data("tfc/supports/" + type, {
    "ingredient": "kubejs:wood/support/" + type + "_horizontal",
    "support_up": 1,
    "support_down": 1,
    "support_horizontal": 4
})
    
def generate_support_assets(type, base, top):
    rm.block_model("kubejs:wood/support/" + type + "_vertical", 
        {"texture": base,
		"top": top},
        "tfc:block/wood/support/vertical_vex"
    )

    rm.block_model("kubejs:wood/support/" + type + "_connection", 
        {
            "texture": base,
		    "top": top
        },
        "tfc:block/wood/support/connection_vex"
    )

    rm.block_model("kubejs:wood/support/" + type + "_horizontal", 
        {
            "texture": base 
        },
        "tfc:block/wood/support/horizontal_vex"
    )

    rm.block_model("kubejs:wood/support/" + type + "_inventory", 
        {
            "vertical": base,
            "horizontal": base,
            "top": top
	    },
        "tfc:block/wood/support/inventory_vex"
    )

    rm.item_model("kubejs:wood/support/" + type + "", parent= "kubejs:block/wood/support/" + type + "_inventory"
    )

for type in aether_wood_types:
    generate_lumber_recipes(type, "kubejs")
    generate_support_data(type)

for type in common.Values.TFC_WOOD_TYPES:
    generate_lumber_recipes(type, "tfc")

for type in common.Values.AFC_WOOD_TYPES:
    generate_lumber_recipes(type, "afc")

for wood in aether_wood_assets:
    generate_support_assets(wood.get("type"), wood.get("base"), wood.get("top"))
