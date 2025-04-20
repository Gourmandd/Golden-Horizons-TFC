########################################
#          Scrapped feature            #
#                                      #
########################################


from mcresources import ResourceManager

rm = ResourceManager('modpack')


bronze_age_metal = ["wrought_iron", "cast_iron"]
bronze_age_tool_metal = ["wrought_iron"]

iron_age_metal = ["steel"]
iron_age_tool_metal = ["steel"]

copper_age_metal = ["rose_gold", "copper", "tin", "bismuth", "zinc", "gold", "silver", "sterling_silver", "bronze", "black_bronze", "bismuth_bronze", "brass"]
copper_age_tool_metal = ["copper", "bronze", "black_bronze", "bismuth_bronze"]

steel_age_metal = ["nickel", "chromium", "stainless_steel", "black_steel"]
steel_age_tool_metal = ["black_steel"]

black_steel_age_metal = ["blue_steel", "red_steel"]
black_steel_age_tool_metal = ["blue_steel", "red_steel"]

ages = ["bronze_age", "iron_age", "copper_age", "steel_age", "black_steel"]
 
def revelation(location, advancement, block_states, items, block_name_replacements, item_name_replacements):
    rm.data("revelations/" + location,{
    "advancement": advancement,
    "block_states": block_states,
    "items": items,
    "item_name_replacements": item_name_replacements,
    "block_name_replacements": block_name_replacements
    })

copper_age_achievement_item_states = {}
bronze_age_achievement_item_states = {}
iron_age_achievement_item_states = {}
steel_age_achievement_item_states = {}
black_steel_achievement_item_states = {} 

copper_age_achievement_block_states = {}
bronze_age_achievement_block_states = {}
iron_age_achievement_block_states = {}
steel_age_achievement_block_states = {}
black_steel_achievement_block_states = {} 

copper_age_achievement_item_name_replacements = {}
bronze_age_achievement_item_name_replacements = {}
iron_age_achievement_item_name_replacements = {}
steel_age_achievement_item_name_replacements = {}
black_steel_achievement_item_name_replacements = {}



def generate_main():
    
    for metal in copper_age_metal:
        pass

        

    
    #revelation(location, advancement, block_states, items, block_name_replacements, item_name_replacements)
    #revelation(location, advancement, block_states, items, block_name_replacements, item_name_replacements)
    #revelation(location, advancement, block_states, items, block_name_replacements, item_name_replacements)
    #revelation(location, advancement, block_states, items, block_name_replacements, item_name_replacements)
    #revelation(location, advancement, block_states, items, block_name_replacements, item_name_replacements)