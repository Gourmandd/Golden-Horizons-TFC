from mcresources import ResourceManager

rm = ResourceManager('modpack')

metals = [
    "copper",
    "steel",
    "bronze"
]

armor_bottom_three = [
    "knight",
    "jousting",
    "gothic",
    "maximilian",
    "platemail",
    "crusader",
    "xivcenturyknight",
    "kastenbrust",
]

bottom_three_armours =[
    "boots",
    "chestplate",
    "leggings"
]

tier = 1

def welding(resource_location, input_1, input_2, output, tier):
    rm.recipe(resource_location, "tfc:welding", {
    "type": "tfc:welding",
    "first_input": {"item": input_1},
    "second_input": {"item": input_2},
    "tier": tier, 
    "result": {"item": output}
    })

def resistances(name, ingredient, slashing, piercing, crushing):
    rm.data("modpack:tfc/item_damage_resistances/epic_knights/" + name ,{
        "slashing": slashing,
        "piercing": piercing,
        "crushing": crushing,
        "ingredient": [{"item": ingredient}]
    })

#rm.tag("tfc:deals_piercing_damage", "items", {})


def generate_armour_resistances(): #this will be one of the most unholy things I will write for this modpack (hopefully)
    for type in armor_bottom_three:
        for shape in bottom_three_armours:
            #resistances(type + "_" + shape, "magistuarmory:" + type + "_" + shape)
            if type == "knight":
                resistances(type + "_" + shape, "magistuarmory:" + type + "_" + shape,5,8,9)
            if type == "jousting":
                resistances(type + "_" + shape, "magistuarmory:" + type + "_" + shape,12,10,12)
            if type == "gothic":
                resistances(type + "_" + shape, "magistuarmory:" + type + "_" + shape,5,8,9)
            if type == "maximilian":
                resistances(type + "_" + shape, "magistuarmory:" + type + "_" + shape,6,9,9)
            if type == "platemail":
                resistances(type + "_" + shape, "magistuarmory:" + type + "_" + shape,9,8,5)
            if type == "crusader":
                resistances(type + "_" + shape, "magistuarmory:" + type + "_" + shape,9,8,7)
            if type == "xivcenturyknight":
                resistances(type + "_" + shape, "magistuarmory:" + type + "_" + shape,6,8,8)
            if type == "kastenbrust":
                resistances(type + "_" + shape, "magistuarmory:" + type + "_" + shape,5,8,9)
    #resistances("", "magistuarmory:",5,8,9)
    resistances("armet", "magistuarmory:armet",5,8,9)
    resistances("sallet", "magistuarmory:sallet",5,8,9)
    resistances("grand_bascinet", "magistuarmory:grand_bascinet",5,8,9)
    resistances("maximilian_helmet", "magistuarmory:maximilian_helmet",6,9,9)
    resistances("stechhelm", "magistuarmory:stechhelm",12,10,12)

    resistances("barbute", "magistuarmory:barbute",3,5,5)
    resistances("brigandine_chestplate", "magistuarmory:brigandine_chestplate",8,7,4)
    resistances("halfarmor_chestplate", "magistuarmory:halfarmor_chestplate",3,5,5)
    resistances("wingedhussar_chestplate", "magistuarmory:wingedhussar_chestplate",3,5,5)

    resistances("chainmail_helmet", "magistuarmory:chainmail_helmet",7,7,2)
    resistances("chainmail_chestplate", "magistuarmory:chainmail_chestplate",7,7,2)
    resistances("chainmail_leggings", "magistuarmory:chainmail_leggings",7,7,2)

    resistances("kettlehat", "magistuarmory:kettlehat",9,8,5)

    resistances("greathelm", "magistuarmory:greathelm",9,8,7)

    resistances("ceremonialarmet", "magistuarmory:ceremonialarmet",5,8,9)
    resistances("ceremonial_chestplate", "magistuarmory:ceremonial_chestplate",5,8,9)
    resistances("ceremonial_boots", "magistuarmory:ceremonial_boots",5,8,9)

    resistances("coif", "magistuarmory:coif",3,0,0)
    resistances("gambeson_chestplate", "magistuarmory:gambeson_chestplate",3,0,0)
    resistances("pantyhose", "magistuarmory:pantyhose",3,0,0)

    resistances("bascinet", "magistuarmory:bascinet",6,8,8)

    resistances("norman_helmet", "magistuarmory:norman_helmet",4,4,3)
    resistances("shishak", "magistuarmory:shishak",4,4,3)

    resistances("face_helmet", "magistuarmory:face_helmet",6,6,3)
    resistances("lamellar_chestplate", "magistuarmory:lamellar_chestplate",9,8,4)
    resistances("lamellar_boots", "magistuarmory:lamellar_boots",6,6,3)
    





def generate_weapon(metal):
    tier = 1
    if metal == "bronze":
        tier = 2
    if metal == "steel":
        tier = 4
    #short stick short blade
    welding("welding/"+ metal +"_stylet" , "magistuarmory:hilt", "tfc:metal/knife_blade/" + metal, "magistuarmory:" + metal + "_stylet", tier)
    welding("welding/"+ metal +"_katzbalger", "magistuarmory:hilt", "tfc:metal/sword_blade/" + metal, "magistuarmory:" + metal + "_katzbalger", tier)
    #long stick
    welding("welding/"+ metal +"_ranseur", "magistuarmory:pole", "magistuarmory:"+ metal +"_stylet", "magistuarmory:" + metal + "_ranseur", tier)
    welding("welding/"+ metal +"_pike", "magistuarmory:pole", "tfc:metal/javelin_head/" + metal, "magistuarmory:" + metal + "_pike", tier)
    welding("welding/"+ metal +"_ahlspiess", "tfc:metal/ingot/" + metal, "magistuarmory:" + metal + "_ranseur", "magistuarmory:" + metal + "_ahlspiess", tier)
    welding("welding/"+ metal +"_concavehalberd", "magistuarmory:pole", "tfc:metal/axe_head/" + metal, "magistuarmory:" + metal + "_concavehalberd", tier)
    welding("welding/"+ metal +"_heavywarhammer", "magistuarmory:pole", "tfc:metal/hammer_head/" + metal, "magistuarmory:" + metal + "_heavywarhammer", tier)
    welding("welding/"+ metal +"_lucernhammer", "magistuarmory:pole", "tfc:metal/propick_head/" + metal, "magistuarmory:" + metal + "_lucernhammer", tier)
    welding("welding/"+ metal +"_guisarme", "tfc:metal/axe_head/" + metal, "magistuarmory:" + metal + "_pike", "magistuarmory:" + metal + "_guisarme", tier)
    welding("welding/"+ metal +"_lochaberaxe", "tfc:metal/knife_blade/" + metal, "magistuarmory:" + metal + "_pike", "magistuarmory:" + metal + "_lochaberaxe", tier)
    #long blade
    welding("welding/"+ metal +"_chivalrylance", "magistuarmory:pole", "tfc:metal/double_ingot/" + metal, "magistuarmory:" + metal + "_chivalrylance", tier)
    welding("welding/"+ metal +"_estoc", "tfc:metal/ingot/" + metal, "magistuarmory:"+ metal +"_stylet", "magistuarmory:" + metal + "_estoc", tier)
    welding("welding/"+ metal +"_claymore", "tfc:metal/double_ingot/" + metal, "magistuarmory:"+ metal +"_katzbalger", "magistuarmory:" + metal + "_claymore", tier)
    welding("welding/"+ metal +"_zweihander", "tfc:metal/double_ingot/" + metal, "magistuarmory:"+ metal +"_katzbalger", "magistuarmory:" + metal + "_zweihander", tier)
    #mace bulb flail
    welding("welding/"+ metal +"_morgenstern", "magistuarmory:pole", "tfc:metal/mace_head/" + metal, "magistuarmory:" + metal + "_morgenstern", tier)
    welding("welding/"+ metal +"_heavymace", "tfc:metal/ingot/" + metal, "magistuarmory:"+ metal +"_morgenstern", "magistuarmory:" + metal + "_heavymace", tier)
    welding("welding/"+ metal +"_chainmorgenstern", "tfc:metal/chain/" + metal, "magistuarmory:"+ metal +"_morgenstern", "magistuarmory:" + metal + "_chainmorgenstern", tier)
    #shield
    welding("welding/"+ metal +"_target", "tfc:metal/double_ingot/" + metal, "tfc:metal/ingot/" + metal, "magistuarmory:" + metal + "_target", tier)
    welding("welding/"+ metal +"_rondache", "tfc:metal/double_ingot/" + metal, "magistuarmory:" + metal + "_target", "magistuarmory:" + metal + "_rondache", tier)

    welding("welding/"+ metal +"_tartsche", "tfc:metal/double_ingot/" + metal, "magistuarmory:" + metal + "_roundshield", "magistuarmory:" + metal + "_tartsche", tier)
    welding("welding/"+ metal +"_pavese", "tfc:metal/double_ingot/" + metal, "magistuarmory:" + metal + "_tartsche", "magistuarmory:" + metal + "_pavese", tier)

    rm.recipe("welding/"+ metal +"_roundshield", "tfc:welding", {
    "type": "tfc:welding",
    "first_input": {"item": "tfc:metal/double_ingot/" + metal},
    "second_input": {"tag": "minecraft:planks"},
    "tier": tier, 
    "result": {"item": "magistuarmory:" + metal + "_roundshield"}
    })

    #tags
    rm.tag("tfc:deals_piercing_damage", "items", "magistuarmory:" + metal + "_stylet")
    rm.tag("tfc:deals_piercing_damage", "items", "magistuarmory:pitchfork")
    rm.tag("tfc:deals_piercing_damage", "items", "magistuarmory:" + metal + "_pike")
    rm.tag("tfc:deals_piercing_damage", "items", "magistuarmory:" + metal + "_ranseur")
    rm.tag("tfc:deals_piercing_damage", "items", "magistuarmory:" + metal + "_ahlspiess")
    rm.tag("tfc:deals_piercing_damage", "items", "magistuarmory:" + metal + "_chivalrylance")
    rm.tag("tfc:deals_piercing_damage", "items", "magistuarmory:" + metal + "_guisarme")
    rm.tag("tfc:deals_piercing_damage", "items", "magistuarmory:" + metal + "_concavehalberd")

    rm.tag("tfc:deals_slashing_damage", "items", "magistuarmory:" + metal + "_lochaberaxe")
    rm.tag("tfc:deals_slashing_damage", "items", "magistuarmory:" + metal + "_katzbalger")
    rm.tag("tfc:deals_slashing_damage", "items", "magistuarmory:" + metal + "_estoc")
    rm.tag("tfc:deals_slashing_damage", "items", "magistuarmory:" + metal + "_claymore")
    rm.tag("tfc:deals_slashing_damage", "items", "magistuarmory:" + metal + "_zweihander")
    rm.tag("tfc:deals_slashing_damage", "items", "magistuarmory:messer_sword")
    rm.tag("tfc:deals_slashing_damage", "items", "magistuarmory:noble_sword")

    rm.tag("tfc:deals_crushing_damage", "items", "magistuarmory:" + metal + "_heavymace")
    rm.tag("tfc:deals_crushing_damage", "items", "magistuarmory:" + metal + "_heavywarhammer")
    rm.tag("tfc:deals_crushing_damage", "items", "magistuarmory:" + metal + "_lucernhammer")
    rm.tag("tfc:deals_crushing_damage", "items", "magistuarmory:" + metal + "_morgenstern")
    rm.tag("tfc:deals_crushing_damage", "items", "magistuarmory:" + metal + "_chainmorgenstern")
    rm.tag("tfc:deals_crushing_damage", "items", "magistuarmory:blacksmith_hammer")
    rm.tag("tfc:deals_crushing_damage", "items", "magistuarmory:barbedclub")
    rm.tag("tfc:deals_crushing_damage", "items", "magistuarmory:club")
    



generate_armour_resistances()

for i in metals:
    generate_weapon(i)

rm.flush()