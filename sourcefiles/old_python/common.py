from mcresources import ResourceManager
rm = ResourceManager("modpack")

class Recipes():
    class TFC():

        def alloying(path: str, result: str, content: list):
            '''
            content is list of dict, Example.

            { "metal": "tfc:copper", "min": 0.2, "max": 0.3 }

            "metal" needs to be a TFC metal definition, namespace:name
            '''
            rm.recipe(path, "tfc:alloy", {
            "result": result, 
            "contents": content 
            })

        def welding(path: str, first_input: dict, second_input: dict, result: dict, tier: int = -1):
            rm.recipe(path, "tfc:welding", { 
            "first_input": first_input, 
            "second_input": second_input, 
            "tier": tier, 
            "result": result 
            })
        
        def anvil(path: str, input: dict, result: dict, rules: list, apply_forging_bonus: bool = False, tier: int = -1):
            '''
            rules is list of str, Example.

            ["punch_last" , "bend_not_last", "draw_not_last"]

            valid actions are: hit, draw, punch, bend, upset, shrink.
            
            valid orders are: any, last, not_last, second_last, third_last.
            '''
            rm.recipe(path, "tfc:anvil", {
            "input": input, 
            "result": result, 
            "tier": tier, 
            "rules": rules, 
            "apply_forging_bonus": apply_forging_bonus 
            })
#needs extra logic
        '''def barrel_instant_item(path:str, ingredient: dict, input_fluid: str, input_fluid_amount: int, output_fluid_amount: int, output_fluid: str = "",  sound: str = "minecraft:block.brewing_stand.brew"):
            rm.recipe(path, "tfc:barrel_instant", {
            "input_item": {
                "ingredient": ingredient 
            },
            "input_fluid": {
                "ingredient": input_fluid, 
                "amount": input_fluid_amount 
            },
            "output_fluid": {
                "fluid": output_fluid, 
                "amount": output_fluid_amount 
            },
            "output_item": {
                "item": output_item, 
                "amount": output_item_amount 
            },
            "sound": sound
            })
        
        def barrel_instant_fluid(path, primary_fluid, primary_fluid_amount, input_fluid, input_fluid_amount, output_fluid, output_fluid_amount, sound: str = "minecraft:block.brewing_stand.brew"):
            rm.recipe(path, "tfc:barrel_instant", {
            "type": "tfc:barrel_instant_fluid",
            "primary_fluid": {
                "ingredient": primary_fluid, 
                "amount": primary_fluid_amount
            },
            "added_fluid": {
                "ingredient": input_fluid, 
                "amount": input_fluid_amount
            },
            "output_fluid": {
                "fluid": output_fluid, 
                "amount": output_fluid_amount
            },
            "sound": sound
            })
        
        def barrel_sealed(path, input_item, input_fluid, input_fluid_amount, output_item, duration):
            rm.recipe(path, "tfc:barrel_sealed", {
            "input_item": {
                "ingredient": input_item #dict
            },
            "input_fluid": {
                "ingredient": input_fluid,
                "amount": input_fluid_amount
            },
            "output_item": output_item,
            "duration": duration
            })''' 
        
        def blast_furnace(path: str, input_fluid: str, input_fluid_amount: int, output_fluid: str, output_fluid_amount: int, catalyst: dict  = {"item": "mincraft:charcoal"}):
            rm.recipe(path,"tfc:blast_furnace", {
            "fluid": {
                "ingredient": input_fluid,
                "amount": input_fluid_amount
            },
            "result": {
                "fluid": output_fluid,
                "amount": output_fluid_amount
            },
            "catalyst": catalyst 
            })
        
        def bloomery(path: str, result: dict, fluid_input: str, fluid_input_amount: int, catalyst: dict = {"item": "mincraft:charcoal"}, duration: int = 15000):
            rm.recipe(path, "tfc:bloomery", {
            "result": result, 
            "fluid": {
                "ingredient": fluid_input,
                "amount": fluid_input_amount
            },
            "catalyst": catalyst, 
            "duration": duration
            })
        
        def casting(path: str, mold: dict, fluid_input: str, fluid_input_amount: int, result: dict, break_chance: int = 1):
            rm.recipe(path, "tfc:casting", {
            "mold": mold,
            "fluid": {
                "ingredient": fluid_input,
                "amount": fluid_input_amount
            },
            "result": result,
            "break_chance": break_chance
            })
        
        def chiseling(path: str, ingredient: str, result: str, mode: str, extra_drop: dict):
            rm.recipe(path, "tfc:chisel", {
            "ingredient": ingredient,
            "result": result,
            "mode": mode,
            "extra_drop": extra_drop
            })

        def collapse(path: str, ingredient: str, copy_input: bool = True, result: str = ""):
            dict = {
            "ingredient": ingredient,
            "copy_input": copy_input,
            }
            if copy_input == False:
                dict["result"] = result
            rm.recipe(path, "tfc:collapse", dict)
        
        def glassworking(path: str, operations: list, batch: dict, result: dict):
            rm.recipe(path, "tfc:glassworking", {
            "operations": operations, 
            "batch": batch, 
            "result": result
            }) 
        
        def heating(path: str, ingredient: dict, fluid: str, fluid_amount: int, temperature: int):
            rm.recipe(path, "tfc:heating",{
            "ingredient": ingredient,
            "result_fluid": {
                "fluid": fluid,
                "amount": fluid_amount
            },
            "temperature": temperature
            })
        
        def knapping(path:str, knapping_type: str, outside_slot_required: bool, pattern: list, result: dict):
            rm.recipe(path, knapping_type, {
            "outside_slot_required": outside_slot_required,
            "pattern": pattern,
            "result": result
            })

        def landslide(path: str, ingredient: str, copy_input: bool = True, result: str = ""):
            dict = {
            "ingredient": ingredient,
            "copy_input": copy_input,
            }
            if copy_input == False:
                dict["result"] = result
            rm.recipe(path, "tfc:landslide", dict)

        def loom(path: str, input: dict, input_amount: int, result_item: str, result_amount: int, steps_required: int, in_progress_texture: str):
            rm.recipe(path, "tfc:loom", {
            "ingredient": {
            "ingredient": input,
                "count": input_amount
            },
            "result": {
                "item": result_item,
                "count": result_amount
            },
            "steps_required": steps_required,
            "in_progress_texture": in_progress_texture
            })
        
        def quern(path: str, input: dict, result: str, result_amount: int):
            rm.recipe(path, "tfc:quern", {
            "ingredient": input,
            "result": {
                "item": result,
                "count": result_amount
            }
            })
        
        def scraping(path: str, input: dict, result: str, result_amount: int, input_texture: str, output_texture: str, extra_drop: str, extra_amount: int):
            rm.recipe(path, "tfc:scraping", {
        "ingredient": input,
        "result": {
            "item": result,
            "count": result_amount
        },
        "input_texture": input_texture,
        "output_texture": output_texture,
        "extra_drop": {
            "item": extra_drop,
            "count": extra_amount
        }
        })

    class Create():
        
        def crushing(path:str, ingredients: list, results: list, processing_time: int):
            rm.recipe(path, "create:crushing", {
            "ingredients": ingredients,
            "results": results,
            "processingTime": processing_time
            })

        def milling(path:str, ingredients: list, results: list, processing_time: int):
            rm.recipe(path, "create:milling", {
            "ingredients": ingredients,
            "results": results,
            "processingTime": processing_time
            })

        def deploying(path:str, ingredients: list, results: list):
            rm.recipe(path, "create:deploying", {
            "ingredients": ingredients,
            "results": results
            })
class Data():
    pass

class Values():
    TFC_METALS = [
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

    FIRMALIFE_METALS = [
    "chromium",
    "stainless_steel"
    ]

    TFC_STONE_TYPES = [
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

    TFC_WOOD_TYPES = [
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

    AFC_WOOD_TYPES = [
    "baobab",
    "eucalyptus",
    "mahogany",
    "hevea",
    "tualang",
    "teak",
    "cypress",
    "fig",
    "ironwood",
    "ipe"
    ]

    COLOURS = [
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

    TFC_TOOLS = [
    "pickaxe",
    "axe",
    "propick",
    "shovel",
    "hoe",
    "chisel",
    "hammer",
    "saw",
    "javelin",
    "scythe",
    "knife",
    "sword",
    "mace"
    ]

    HORIZONS_CLAY_TYPES = [
    "kaolinite",
    "yixing",
    "yellowware",
    "earthenware",
    "porcelain"
    ]

    COPPER_STAGES = [
    "copper",
    "exposed_copper",
    "weathered_copper",
    "oxidized_copper",
    ]

    TFC_CASTABLE_METALS = [
    "bismuth_bronze",
    "bronze",
    "black_bronze",
    "copper",
    ]

    ORE_BLOCK_PURITIES = [
    "poor",
    "normal",
    "rich"
    ]

    TFC_TOOL_METALS = [
    "bismuth_bronze",
    "black_bronze",
    "bronze",
    "copper",
    "wrought_iron",
    "steel",
    "black_steel",
    "blue_steel",
    "red_steel"
    ]

    TFC_SOIL_TYPES = [
    "silt",
    "silty_loam",
    "loam",
    "sandy_loam"
    ]

    TFC_SAND_COLOURS = [
    "red",
    "white",
    "black",
    "yellow",
    "green",
    "brown",
    "pink"
    ]

    TFC_BELL_METALS = [
    "gold",
    "bronze",
    "brass"
    ]
    
    TFC_GEMS = [
    "amethyst",
    "opal",
    "emerald",
    "diamond",
    "lapis_lazuli",
    "pyrite",
    "ruby",
    "sapphire",
    "topaz"
    ]

    CAUPONA_ASPICS = [
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

    AETHER_WOOD = ["skyroot"]

    AETHER_REDUX_WOOD = [
    "fieldsproot",
    "blightwillow",
    "cloudcap",
    "jellyshroom",
    "crystal",
    "glacia",    
    ]

    DEEP_AETHER_WOOD = [
    "roseroot",
    "yagroot",
    "cruderoot",
    "conberry",
    "sunroot",
    ]



















