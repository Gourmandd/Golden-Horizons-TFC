from mcresources import ResourceManager


rm = ResourceManager('modpack')

rock_types = [
    "granite",
    "diorite",
    "gabbro",
    "shale",
    "claystone",
    "limestone",
    "conglomerate",
    "dolomite",
    "chert",
    "chalk",
    "rhyolite",
    "basalt",
    "andesite",
    "dacite",
    "quartzite",
    "slate",
    "phyllite",
    "schist",
    "gneiss",
    "marble",
]

ore_purities = ["poor","normal","rich"]

bronze_age_ores = ["hematite", "limonite", "magnetite"]
bronze_age_minerals = ["cinnabar", "cryolite", "halite", "lapis_lazuli", "opal"]

copper_age_ores = ["native_copper", "tetrahedrite", "malachite", "cassiterite", "bismuthinite", "sphalerite", "native_gold", "native_silver"]
copper_age_minerals = ["gypsum", "bituminous_coal", "lignite", "graphite", "sulfur", "saltpeter", "sylvite", "pyrite", "borax"]

#keep in mind that this has firmalife chromite
steel_age_ores = ["garnierite", "chromite"]
steel_age_minerals = ["amethyst", "emerald", "topaz"]

black_steel_age_minerals = ["diamond", "sapphire", "ruby"]

copper_age_achievement_block_states = {}
bronze_age_achievement_block_states = {}
steel_age_achievement_block_states = {}
black_steel_age_achievement_block_states = {} 

copper_age_achievement_block_name_replacements = {}
bronze_age_achievement_block_name_replacements = {}
steel_age_achievement_block_name_replacements = {}
black_steel_achievement_block_name_replacements = {}

#'32x tfc:ore/bituminous_coal/granite'
for rock in rock_types:
    for mineral in copper_age_minerals:
        copper_age_achievement_block_states.__setitem__("tfc:ore/" + mineral + "/" + rock, "tfc:rock/raw/" + rock)
        copper_age_achievement_block_name_replacements.__setitem__("tfc:ore/" + mineral + "/" + rock, "block.tfc.rock.raw." + rock)
    for mineral in bronze_age_minerals:
        bronze_age_achievement_block_states.__setitem__("tfc:ore/" + mineral + "/" + rock, "tfc:rock/raw/" + rock)
        bronze_age_achievement_block_name_replacements.__setitem__("tfc:ore/" + mineral + "/" + rock, "block.tfc.rock.raw." + rock)
    for mineral in steel_age_minerals:
        steel_age_achievement_block_states.__setitem__("tfc:ore/" + mineral + "/" + rock, "tfc:rock/raw/" + rock)
        steel_age_achievement_block_name_replacements.__setitem__("tfc:ore/" + mineral + "/" + rock, "block.tfc.rock.raw." + rock)
    for mineral in black_steel_age_minerals:
        black_steel_age_achievement_block_states.__setitem__("tfc:ore/" + mineral + "/" + rock, "tfc:rock/raw/" + rock)
        black_steel_achievement_block_name_replacements.__setitem__("tfc:ore/" + mineral + "/" + rock, "block.tfc.rock.raw." + rock)
    
    for purity in ore_purities:
        for ore in copper_age_ores:
            copper_age_achievement_block_states.__setitem__("tfc:ore/" + purity + "_"+ ore + "/" + rock, "tfc:rock/raw/" + rock)
            copper_age_achievement_block_name_replacements.__setitem__("tfc:ore/" + purity + "_"+ ore + "/" + rock, "block.tfc.rock.raw." + rock)
        for ore in bronze_age_ores:
            bronze_age_achievement_block_states.__setitem__("tfc:ore/" + purity + "_"+ ore + "/" + rock, "tfc:rock/raw/" + rock)
            bronze_age_achievement_block_name_replacements.__setitem__("tfc:ore/" + purity + "_"+ ore + "/" + rock, "block.tfc.rock.raw." + rock)
        for ore in steel_age_ores:
            if ore == "chromite":
                steel_age_achievement_block_states.__setitem__("firmalife:ore/" + purity + "_"+ ore + "/" + rock, "tfc:rock/raw/" + rock)
                steel_age_achievement_block_name_replacements.__setitem__("firmalife:ore/" + purity + "_"+ ore + "/" + rock, "block.tfc.rock.raw." + rock)
            else:
                steel_age_achievement_block_states.__setitem__("tfc:ore/" + purity + "_"+ ore + "/" + rock, "tfc:rock/raw/" + rock)
                steel_age_achievement_block_name_replacements.__setitem__("tfc:ore/" + purity + "_"+ ore + "/" + rock, "block.tfc.rock.raw." + rock)
        


def revelation(location, advancement, block_states, items, block_name_replacements, item_name_replacements):
    rm.data("revelations/" + location,{
    "advancement": advancement,
    "block_states": block_states,
    "items": items,
    "item_name_replacements": item_name_replacements,
    "block_name_replacements": block_name_replacements
    })

#copper age
revelation("copper_age_ores", "tfc:story/copper_age", copper_age_achievement_block_states, {}, copper_age_achievement_block_name_replacements, {})

#bronze age
revelation("bronze_age_ores", "tfc:story/bronze_age", bronze_age_achievement_block_states, {}, bronze_age_achievement_block_name_replacements, {})

#steel age
revelation("steel_age_ores", "tfc:story/steel_age", steel_age_achievement_block_states, {}, steel_age_achievement_block_name_replacements, {})

#black_steel age
revelation("black_steel_ores", "tfc:story/black_steel", black_steel_age_achievement_block_states, {}, black_steel_achievement_block_name_replacements, {})