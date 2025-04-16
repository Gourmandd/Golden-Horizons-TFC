const ROCK_DATA = {
  "granite": {"desc":  "Granite is a hard, rock used decoratively!", "type": "Felsic Igneous Intrusive"},
  "diorite": {"desc":  "Diorite has been used since the Neolithic!", "type": "Ingeous Intrusive"},
  "gabbro": {"desc":  "Gabbro is a low silica rock, in which diamonds can form!", "type": "Mafic Ingeous Intrusive"},
  "shale": {"desc":  "Shale is known for spliting into layers easily!", "type": "Sedimentary"},
  "claystone": {"desc":  "Claystone is formed from various clay minerals!", "type": "Sedimentary"},
  "limestone": {"desc":  "Limestone was formed from aquatic skeletons in shallow seas!", "type": "Carbonic Sedimentary"},
  "conglomerate": {"desc":  "Conglomerate is a solid rock made from sediment and gravel!", "type": "Sedimentary"},
  "dolomite": {"desc":  "Dolomite is a mysterious form of limestone!", "type": "Carbonic Sedimentary"},
  "chert": {"desc":  "Chert is made of very pure Jurassic remains!", "type": "Sedimentary"},
  "chalk": {"desc":  "Chalk is a very pure stone of calcium carbonate!", "type": "Carbonic Sedimentary"},
  "rhyolite": {"desc":  "Rhyolite is a tough, glassy rock!", "type": "Felsic Igneous Extrusive"},
  "basalt": {"desc":  "Basalt is a commin volcanic rock!", "type": "Igneous Extrusive"},
  "andesite": {"desc":  "Andesite is named after the Andes mountains!", "type": "Igneous Extrusive"},
  "dacite": {"desc":  "Dacite is an alkali volcanic rock!", "type": "Igneous Extrusive"},
  "quartzite": {"desc":  "Quartzite is a very tough and dense rock!", "type": "Metamorphic"},
  "slate": {"desc":  "Slate is a very fine grained rock!", "type": "Metamorphic"},
  "phyllite": {"desc":  "Phyllite is formed similarly to Slate!", "type": "Metamorphic"},
  "schist": {"desc":  "Schist is a rock with very large grains!", "type": "Metamorphic"},
  "gneiss": {"desc":  "Gneiss is a rock formed under great pressure!", "type": "Metamorphic"},
  "marble": {"desc":  "Marble is a multi-coloured, rock used decoratively!", "type": "Metamorphic"}
}

const WOOD_DATA = {
  "acacia": {"desc": "", "can_boat": true},
  "ash": {"desc": "", "can_boat": true},
  "aspen": {"desc": "", "can_boat": true},
  "birch": {"desc": "", "can_boat": true},
  "blackwood": {"desc": "", "can_boat": true},
  "chestnut": {"desc": "", "can_boat": true},
  "douglas_fir": {"desc": "", "can_boat": false},
  "hickory": {"desc": "", "can_boat": true},
  "kapok": {"desc": "", "can_boat": false},
  "mangrove": {"desc": "", "can_boat": false},
  "maple":{ "desc": "", "can_boat": true},
  "oak": {"desc": "", "can_boat": true},
  "palm": {"desc": "", "can_boat": false},
  "pine": {"desc": "", "can_boat": false},
  "rosewood": {"desc": "", "can_boat": true},
  "sequoia": {"desc": "", "can_boat": false},
  "spruce": {"desc": "", "can_boat": false},
  "sycamore": {"desc": "", "can_boat": true},
  "white_cedar": {"desc": "", "can_boat": false},
  "willow": {"desc": "", "can_boat": false},
  "baobab": {"desc": "", "can_boat": false},
  "eucalyptus": {"desc": "", "can_boat": false},
  "mahogany": {"desc": "", "can_boat": false},
  "hevea": {"desc": "", "can_boat": false},
  "tualang": {"desc": "", "can_boat": false},
  "teak": {"desc": "", "can_boat": false},
  "cypress": {"desc": "", "can_boat": false},
  "fig": {"desc": "", "can_boat": false},
  "ironwood": {"desc": "", "can_boat": false},
  "ipe": {"desc": "", "can_boat": false}
}

const ORE_DATA = {
  "lignite": "Lignite is impure coal mineral!\n It is found in sedimentary rocks.",
  "bituminous_coal": "Bituminous Coal is more pure fuel than Lignite!\n It is also found in sedimentary rocks.",
  "kaolin_clay": "Kaolin Clay is kaolin rich, used for heat resistant ceramics!\n Found near the equator.(18C and 300mm rainfall) .",
  "gypsum": "Gypsum is a soft, white mineral!\n It is found in sedimentary rocks.",
  "fluxstones": "Flux has multiple sources, some easier than others.\n Borax is found in claystone, limestone and shale rocks",
  "sylvite": "Sylvite is a rich, light-coloured fertiliser!\n It is found in shale, claystone and chert rocks.",
  "saltpeter": "Saltpeter is a reactive, nitrous fertiliser!\n It is found in sedimentary rocks.",
  "sulfur": "Sulfur is a pungent, reactive mineral!\n It is found underground in metamorphic, and igneous intrusive rocks.",
  "redstone": "Cryolite and Cinnabar can be ground to redstone!\n They are found in various metamorphic, and igneous intrusive rocks.",
  "salt": "Halite can be ground into salt!\n It is found in sedimentary rocks.",
  "graphite": "Graphite is a flaky, black mineral!\n It is found in gniess, marble, schist and quartzite rocks.",
}

const GEM_DATA = {
  "emerald": "Emeralds are a green gemstone. They are found in igneous extrusive rocks!",
  "topaz": "Topaz are a rich, yellow gemstone. They are found in igneous extrusive rocks!",
  "ruby": "Rubies are a red gemstone. They are found by panning!",
  "opal": "Opals are an iridescent gemstone. They are found in rivers around igneous extrusive and sedimentary rocks!",
  "diamond": "Diamonds are a light blue gemstone. They are found in gabbro rocks!",
  "lapis_lazuli": "Lapis Lazuli are a dark blue gemstone. They are found in limestone and marble rocks!",
  "sapphire": "Sapphires are a blue gemstone. They are found in rare hot springs!",
  "pyrite": "Pyrites are a pale yellow gemstone. They are found in igneous extrusive, and igneous intrusive rocks!",
  "amethyst": "Amethysts are a purple gemstone. They are found in rivers around metamorphic and sedimentary rocks!",
}

const METAL_DATA = {
  "copper": "Copper is a conductive, soft metal!\n It is found in igneous extrusive, metamorphic and carbonic sedimentary rocks.",
  "gold": "Gold is a shiny, soft metal!\n It is found in igneous extrusive, and igneous intrusive rocks.",
  "silver": "Silver is a white, resistant metal!\n It is found in granite, gneiss, schist, and diorite rocks.",
  "tin": "Tin is a soft, useful metal!\n It is found in igneous intrusive rocks.",
  "iron": "Iron is a hard, corroding metal!\n It is found in igneous extrusive, and sedimentary rocks.",
  "bismuth": "Bismuth is a green, low-melting point metal!\n It is found in igneous intrusive, and sedimentary rocks.",
  "nickel": "Nickel is a hard, high-melting point metal!\n It is found in gabbro, and rarely in igneous intrusive rocks.",
  "zinc": "Zinc is a brittle, anti-corroding metal!\n It is found in igneous intrusive, and igneous extrusive rocks.",
  "chromium": "chromium is a reflective, hard metal!\n It is found in igneous extrusive, and some metamorphic rocks.",
  "bronze": "Bronze is a sturdy alloy fitting of your first alloy!\n The different alloy mixes usually contain copper.",
  "brass": "Brass is a hard, and shiny alloy, used for mechanical parts!\n The alloy contains copper, and zinc.",
  "rose_gold": "Rose Gold is a salmon-coloured metal, used for alloying and decoration!\n The alloy contains copper, and gold.",
  "sterling_silver": "Sterling Silver is a soft, but noble alloy, used for alloying and decoration!\n The alloy contains silver, and copper.",
  "wrought_iron": "Wrought Iron is a hard, refined form of iron!\n It is refined from bloom, made from a bloomery.",
  "cast_iron": "Cast Iron is a strudy, but brittle metal!\n It is a unrefined and weak form of iron.",
  "steel": "Steel is a strong ferrous metal, used for many durable parts!\n It is refined from pig iron, made in a blast furnace.",
  "red_steel": "Red Steel is a durable end-game steel alloy!\n The alloy contains steel, black steel, rose gold and brass.",
  "blue_steel": "Blue Steel is a low conductivity, and durable steel alloy!\n The alloy contains steel, black steel, sterling silver and bismuth bronze.",
  "black_steel": "Black Steel is a long-lasting steel alloy!\n The alloy contains steel, black bronze, and nickel.",
  "unknown": "Unknown metal is a failed alloy!\n It cannot be turned back into constituent metals.",
  "stainless_steel": "Stainless Steel is a steel alloy that doesn't corrode!\n The alloy contains steel, nickel, and chromium.",
  "aluminium": "Aluminium is a light, and shiny metal!\n It is used for radio and aircraft parts.",
  "aluminium_bronze": "Aluminium Bronze is a hard, and brittle alloy, used for cannons!\n The alloy contains copper, aluminium, and tin.",
  "nethersteel": "Nethersteel is a hard, and durable alloy, used for strong cannons!\n The alloy contains red steel, bronze, and steel.",
  "cast_iron_alloy": "Cast Iron Alloy is an alloy for use in cannons!\n The alloy contains cast iron, and nickel.",
  "harderned_steel": "Hardenerd Steel is a steel alloy, used for cannons!\n The alloy contains steel, and nickel.",
  "electrum": "Electrum is a soft alloy, it is highly conductive!\n The alloy contains gold, and silver.",
}

// rain is in %
const CROP_DATA = {
  "barley": {"nutrient": "Nitrogen", "temp": "-8 ~ 26", "rain": "18 ~ 75", "desc": "Barley is a tough, staple crop.\n It "},
  "oat": {"nutrient": "Phosphorus", "temp": "3 ~ 40", "rain": "35 ~ 100", "desc": "Oats are a soft, grain crop.\n They "},
  "rye": {"nutrient": "Phosphorus", "temp": "-11 ~ 30", "rain": "25 ~ 85", "desc": "Rye are a staple, grain crop.\n It "},
  "maize": {"nutrient": "Phosphorus", "temp": "13 ~ 40", "rain": "75 ~ 100", "desc": "Maize produces rich ears or corn.\n They "},
  "wheat": {"nutrient": "Phosphorus", "temp": "-4 ~ 35", "rain": "25 ~ 100", "desc": "Wheat is a solid, staple crop.\n It "},
  "rice": {"nutrient": "Phosphorus", "temp": "15 ~ 30", "rain": "25 ~ 100", "desc": "Rice is known for the flooded fields its grown in.\n It "},
  "beet": {"nutrient": "Potassium", "temp": "-5 ~ 20", "rain": "18 ~ 85", "desc": "Beets are a nutritious, root vegetable.\n They "},
  "cabbage": {"nutrient": "Nitrogen", "temp": "-10 ~ 27", "rain": "15 ~ 65", "desc": "Cabbages are a flavourful, leafy green.\n They "},
  "carrot": {"nutrient": "Potassium", "temp": "3 ~ 30", "rain": "25 ~ 100", "desc": "Carrots are a hardy, root vegetable.\n They "},
  "garlic": {"nutrient": "Nitrogen", "temp": "-20 ~ 18", "rain": "15 ~ 75C", "desc": "Garlic is a pungant, flavourful bulb.\n It "},
  "green_bean": {"nutrient": "Nitrogen", "temp": "2 ~ 35", "rain": "38 ~ 100", "desc": "Green Beans are crisp, pods.\n They "},
  "potato": {"nutrient": "Potassium", "temp": "-1 ~ 37", "rain": "50 ~ 100", "desc": "Potatoes are a carb-rich tuber.\n They "},
  "onion": {"nutrient": "Nitrogen", "temp": "0 ~ 30", "rain": "25 ~ 90", "desc": "Onions are a rich, pungent bulb.\n They "},
  "soybean": {"nutrient": "Nitrogen", "temp": "8 ~ 30", "rain": "40 ~ 100", "desc": "Soybeans are a protein-rich bean.\n They" },
  "squash": {"nutrient": "Potassium", "temp": "5 ~ 33", "rain": "23 ~ 95", "desc": "Squashes are small, round gourds.\n They "},
  "sugarcane": {"nutrient": "Potassium", "temp": "12 ~ 38", "rain": "40 ~ 100", "desc": "Sugarcane are processed for its sugar.\n It "},
  "tomato": {"nutrient": "Nitrogen", "temp": "0 ~ 36", "rain": "30 ~ 95", "desc": "Tomatoes are a sweet, juicy fruit.\n They "},
  "jute": {"nutrient": "Nitrogen", "temp": "5 ~ 37", "rain": "25 ~ 100", "desc": "Jute has tough, useful fibers.\n It "},
  "papyrus": {"nutrient": "Nitrogen", "temp": "19 ~ 37", "rain": "70 ~ 100", "desc": "Papyrus's fiber can be used papar.\n It "},
  "pumpkin": {"nutrient": "Phosphorus", "temp": "0 ~ 30", "rain": "30 ~ 80", "desc": "Pumpkins are large, orange gourds.\n They "},
  "melon": {"nutrient": "Phosphorus", "temp": "5 ~ 37", "rain": "75 ~ 100", "desc": "Melons are large, juicy fruits.\n They "},
  "red_bell_pepper": {"nutrient": "Potassium", "temp": "16 ~ 30", "rain": "25 ~ 60", "desc": "Red Bell Peppers are nutritious and colourful.\n They "},
  "yellow_bell_pepper": {"nutrient": "Potassium", "temp": "16 ~ 30", "rain": "25 ~ 60", "desc": "Yellow Bell Peppers are rich, and colourful.\n They "}
}



// rain is in mm
const BUSH_DATA = {
  "blackberry": {"temp": "7 ~ 24", "rain":  "24 ~ 100mm", "fruit":  "August", "desc": "Blackberries are a numerous, small, black fruit!\n They "},
  "raspberry": {"temp": "5 ~ 25", "rain":  "24 ~ 100mm", "fruit":  "October", "desc": "Raspberry bushes ahve small, bunched berries!\n They"},
  "blueberry": {"temp": "7 ~ 29", "rain":  "12 ~ 100mm", "fruit":  "August", "desc": "Blueberries are particularly nutritious berries!\n They "},
  "elderberry": {"temp": "10 ~ 33", "rain":  "12 ~ 100mm", "fruit":  "August", "desc": "Elderberries were once part of traditional medicines!\n They "},
  // rain is in %
  "snowberry": {"temp": "-7 ~ 18", "rain":  "24 ~ 100%", "fruit":  "September", "desc": "Snowberries can grow in characteristically low temperatures!\n They "},
  "bunchberry": {"temp": "15 ~ 35", "rain":  "24 ~ 100%", "fruit":  "October", "desc": "Bunchberry bushes have dark coloured leaves!\n They "},
  "gooseberry": {"temp": "5 ~ 27", "rain":  "24 ~ 100%", "fruit":  "October", "desc": "Gooseberries are a sour, green berry!\n They  "},
  "cloudberry": {"temp": "-2 ~ 17", "rain":  "9 ~ 100%", "fruit":  "September", "desc": "Cloudberries are popular in cold climates!\n They "},
  "strawberry": {"temp": "5 ~ 28", "rain":  "12 ~ 100%", "fruit":  "March", "desc": "Strawberries are a plant that reproduce asexually!\n They "},
  "wintergreen_berry": {"temp": "-6 ~ 17", "rain":  "12 ~ 100%", "fruit":  "December", "desc": "Wintergreen Berries have a minty aroma!\n They "},
  "cranberry": {"temp": "-5 ~ 17", "rain":  "30 ~ 100%", "fruit":  "September", "desc": "Cranberries grow in shallow water!\n They "},
  "pineapple": {"temp": "20 ~ 32", "rain":  "30 ~ 100%", "fruit":  "September", "desc": "Pineapples can be made into string and leather!\n They "},
  "nightshade": {"temp": "7 ~ 24", "rain":  "24 ~ 100%", "fruit":  "August", "desc": "Nightshade Berries are very poisonous!\n They "}
}

const FRUIT_TREE_DATA = {
  "cherry": {"temp": "5 ~ 25", "rain":  "100 ~ 350", "fruit":  "June", "desc": "Be careful of the cherry's pits!\n They "},
  "green_apple": {"temp": "1 ~ 25", "rain":  "110 ~ 280", "fruit":  "October", "desc": "Green Apples are able to grow in colder climates!\n They "},
  "red_apple": {"temp": "1 ~ 25", "rain":  "100 ~ 280", "fruit":  "October", "desc": "Red Apples can be used in many recipes!\n They "},
  "lemon": {"temp": "10 ~ 30", "rain":  "180 ~ 470", "fruit":  "August", "desc": "Lemons are extremely sour!\n They "},
  "olive": {"temp": "5 ~ 30", "rain":  "150 ~ 500", "fruit":  "October", "desc": "Olives can be used to make olive oil!\n They "},
  "orange": {"temp": "15 ~ 36", "rain":  "250 ~ 500", "fruit":  "September", "desc": "Oranges grow in warm climates!\n They "},
  "peach": {"temp": "4 ~ 27", "rain":  "60 ~ 230", "fruit":  "June", "desc": "Peaches are soft, fuzzy fruits!\n They "},
  "plum": {"temp": "15 ~ 31", "rain":  "250 ~ 400", "fruit":  "July", "desc": "Plums were early fruits to be domesticated!\n They "},
  "banana": {"temp": "17 ~ 35", "rain":  "280 ~ 500", "fruit":  "Summer", "desc": "Bananas are boomerangs of yellow goodness!\n They "},
  "cocoa": {"temp": "20 ~ 35", "rain":  "220 ~ 400", "fruit":  "June", "desc": "Cocoa can be used to make chocolate!\n They "},
  "fig": {"temp": "20 ~ 35", "rain":  "125 ~ 215", "fruit":  "May", "desc": "Figs are perfect for very hot climates!\n They "}
}

function get_gem_items(gem){
  return [
    "item:tfc:gem/" + gem,
    "item:tfc:ore/" + gem,
    "item:tfc:powder/" + gem
  ]
}

function get_metal_items(mod, metal){
  return [
    "item:" + mod + ":metal/ingot/" + metal,
    "item:" + mod + ":metal/double_ingot/" + metal,
    "item:" + mod + ":metal/sheet/" + metal,
    "item:" + mod + ":metal/double_sheet/" + metal,
    "item:" + mod + ":metal/rod/" + metal
  ]
}

function get_wood_type_items(mod, wood_types){
  return [
    "item:" + mod + ":wood/sapling/" + wood_types,
    "item:" + mod + ":wood/log/" + wood_types,
    "item:" + mod + ":wood/stripped_log/" + wood_types,
    "item:" + mod + ":wood/planks/" + wood_types,
  ]
}

function get_rock_type_items(rock_type){
  return [
    "item:tfc:rock/hardened/" + rock_type,
    "item:tfc:rock/raw/" + rock_type,
    "item:tfc:rock/cobble/" + rock_type,
    "item:tfc:rock/loose/" + rock_type,
    "item:tfc:rock/mossy_loose/" + rock_type,
    "item:tfc:brick/" + rock_type,
    "item:tfc:rock/bricks/" + rock_type,
    "item:tfc:rock/gravel/" + rock_type,
  ]
}

function get_crop_type_items(crop_type){
  return [
    "item:tfc:seeds/" + crop_type
  ].concat(global.CROP_PRODUCTS[crop_type])
}

function get_bush_type_items(bush_type){

  if (["pineapple","nightshade"].indexOf(bush_type) == -1){
    return [
      "item:tfc:plant/" + bush_type + "_bush"
    ].concat(global.BUSH_PRODUCTS[bush_type])
  } else {
    return [
      "item:firmalife:plant/" + bush_type + "_bush"
    ].concat(global.BUSH_PRODUCTS[bush_type])
  } 
}

function get_fruit_tree_items(tree_type){

  if (["cocoa","fig"].indexOf(tree_type) == -1){
    return [
      "item:tfc:plant/" + tree_type + "_sapling"
    ].concat(global.FRUIT_TREE_PRODUCTS[tree_type])
  } else {
    return [
      "item:firmalife:plant/" + tree_type + "_sapling"
    ].concat(global.FRUIT_TREE_PRODUCTS[tree_type])
  } 
}

function get_jams_items(){
  let jams = ["item:tfc:empty_jar", "item:tfc:jar/melon_slice", "item:tfc:jar/melon_slice_unsealed","item:tfc:jar/pumpkin_chunks","item:tfc:jar/pumpkin_chunks_unsealed"]

  global.TFC_BUSHES.forEach(entry => {
    jams.push("item:tfc:jar/" + entry)  
    jams.push("item:tfc:jar/" + entry + "_unsealed")
    })

  global.FIRMALIFE_BUSHES.forEach(entry => {
    if (entry == "nightshade"){return}
    jams.push("item:firmalife:jar/" + entry)  
    jams.push("item:firmalife:jar/" + entry + "_unsealed")
    })
  
  global.TFC_FRUIT_TREES.forEach(entry =>{
    jams.push("item:tfc:jar/" + entry)  
    jams.push("item:tfc:jar/" + entry + "_unsealed")
    })

  global.FIRMALIFE_FRUIT_TREES.forEach(entry => {
    if (entry == "cocoa"){return}
    jams.push("item:firmalife:jar/" + entry)  
    jams.push("item:firmalife:jar/" + entry + "_unsealed")
    })
  
  global.FIRMALIFE_GRAPES.forEach(entry => {
    jams.push("item:firmalife:jar/" + entry + "_grapes")  
    jams.push("item:firmalife:jar/" + entry + "_grapes_unsealed")
    })

  return jams
}



let METALS = [
  {"name": "aluminium", "stacks": get_metal_items("kubejs", "aluminium")},
  {"name": "aluminium_bronze", "stacks": get_metal_items("kubejs", "aluminium_bronze")},
  {"name": "cast_iron_alloy", "stacks": get_metal_items("kubejs", "cast_iron_alloy")},
  {"name": "harderned_steel", "stacks": get_metal_items("kubejs", "harderned_steel")},
  {"name": "nethersteel", "stacks": get_metal_items("kubejs", "nethersteel")},
  {"name": "bismuth", "stacks": ["item:tfc:ore/small_bismuthinite","item:tfc:powder/bismuthinite"].concat(get_metal_items("tfc", "bismuth"))},
  {"name": "black_steel", "stacks": ["item:tfc:metal/ingot/weak_steel","item:tfc:metal/ingot/high_carbon_black_steel"].concat(get_metal_items("tfc", "black_steel"))},
  {"name": "blue_steel", "stacks": ["item:tfc:metal/ingot/weak_blue_steel","item:tfc:metal/ingot/high_carbon_blue_steel"].concat(get_metal_items("tfc", "blue_steel"))},
  {"name": "red_steel", "stacks": ["item:tfc:metal/ingot/weak_red_steel","item:tfc:metal/ingot/high_carbon_red_steel"].concat(get_metal_items("tfc", "red_steel"))},
  {"name": "brass", "stacks": get_metal_items("tfc", "brass")},
  {"name": "cast_iron", "stacks": get_metal_items("tfc", "cast_iron")},
  {"name": "bronze", "stacks": get_metal_items("tfc", "bronze").concat(get_metal_items("tfc", "black_bronze").concat(get_metal_items("tfc", "bismuth_bronze")))},
  {"name": "chromium", "stacks": ["item:firmalife:ore/small_chromite"].concat(get_metal_items("firmalife", "chromium"))},
  {"name": "copper", "stacks": ["item:tfc:ore/small_native_copper","item:tfc:ore/small_tetrahedrite","item:tfc:ore/small_malachite","item:tfc:powder/native_copper","item:tfc:powder/tetrahedrite","item:tfc:powder/malachite"].concat(get_metal_items("tfc", "copper"))},
  {"name": "electrum", "stacks": ["item:createaddition:electrum_ingot","item:createaddition:electrum_sheet","item:createaddition:electrum_wire","item:createaddition:electrum_rod","item:createaddition:electrum_nugget"]},
  {"name": "gold", "stacks": ["item:tfc:ore/small_native_gold","item:tfc:powder/native_gold"].concat(get_metal_items("tfc", "gold"))},
  {"name": "cast_iron", "stacks": ["item:tfc:ore/small_hematite","item:tfc:ore/small_limonite","item:tfc:ore/small_magnetite","item:tfc:powder/hematite","item:tfc:powder/limonite","item:tfc:powder/magnetite"].concat(get_metal_items("tfc", "cast_iron"))},
  {"name": "nickel", "stacks": ["item:tfc:ore/small_garnierite","item:tfc:powder/garnierite"].concat(get_metal_items("tfc", "nickel"))},
  {"name": "rose_gold", "stacks": get_metal_items("tfc", "rose_gold")},
  {"name": "silver", "stacks": ["item:tfc:ore/small_native_silver","item:tfc:powder/native_silver"].concat(get_metal_items("tfc", "silver"))},
  {"name": "stainless_steel", "stacks": get_metal_items("firmalife", "stainless_steel")},
  {"name": "steel", "stacks": ["item:tfc:metal/ingot/pig_iron","item:tfc:metal/ingot/high_carbon_steel",].concat(get_metal_items("tfc", "steel"))},
  {"name": "sterling_silver", "stacks": get_metal_items("tfc", "sterling_silver")},
  {"name": "tin", "stacks": ["item:tfc:ore/small_cassiterite","item:tfc:powder/cassiterite"].concat(get_metal_items("tfc", "tin"))},
  {"name": "unknown", "stacks": ["item:tfc:metal/ingot/unknown"]},
  {"name": "wrought_iron", "stacks": ["item:tfc:raw_iron_bloom","item:tfc:refined_iron_bloom"].concat(get_metal_items("tfc", "wrought_iron"))},
  {"name": "zinc", "stacks": ["item:tfc:ore/small_sphalerite","item:tfc:powder/sphalerite"].concat(get_metal_items("tfc", "zinc"))},
]

let fluxstones = global.FLUXSTONES
let ORES = [
  {"name": "bituminous_coal", "stacks": ["item:tfc:ore/bituminous_coal"]},
  {"name": "redstone", "stacks": ["item:tfc:ore/cryolite","item:tfc:ore/cinnabar","item:minecraft:redstone"]},
  {"name": "fluxstones", "stacks": fluxstones},
  {"name": "graphite", "stacks": ["item:tfc:ore/graphite","item:tfc:powder/graphite"]},
  {"name": "gypsum", "stacks": ["item:tfc:ore/gypsum","item:tfc:alabaster/raw"]},
  {"name": "salt", "stacks": ["item:tfc:ore/halite","item:tfc:powder/salt"]},
  {"name": "kaolin_clay", "stacks": ["item:tfc:kaolin_clay","item:tfc:powder/kaolinite","item:tfc:fire_clay","item:kubejs:clay/porcelain_clay_ball"]},
  {"name": "lignite", "stacks": ["item:tfc:ore/lignite"]},
  {"name": "saltpeter", "stacks": ["item:tfc:ore/saltpeter","item:tfc:powder/saltpeter"]},
  {"name": "sulfur", "stacks": ["item:tfc:ore/sulfur","item:tfc:powder/sulfur"]},
  {"name": "sylvite", "stacks": ["item:tfc:ore/sylvite","item:tfc:powder/sylvite"]}
]

const FIRESTARTERS = ["item:tfc:firestarter", "item:minecraft:flint_and_steel", "item:artisanal:stone/flint_and/pyrite", "item:artisanal:stone/flint_and/cut_pyrite", "item:artisanal:metal/flint_and/black_steel", "item:artisanal:metal/flint_and/red_steel", "item:artisanal:metal/flint_and/blue_steel"]
const GENERAL = [
  //{"name": "", "stacks": []},
  {"name": "mud", "stacks": ["item:tfc:mud/silt","item:tfc:mud/sandy_loam","item:tfc:mud/loam","item:tfc:mud/silty_loam"], "desc": "Mud can be obtained though crafting, and in swamps."},
  {"name": "mud_brick", "stacks": [
    "item:tfc:drying_bricks/silt","item:tfc:mud_brick/silt",
    "item:tfc:drying_bricks/sandy_loam","item:tfc:mud_brick/sandy_loam",
    "item:tfc:drying_bricks/loam", "item:tfc:mud_brick/loam",
    "item:tfc:drying_bricks/silty_loam","item:tfc:mud_brick/silty_loam"
  ], "desc": "Mud Bricks are a nice early game building block."},
  {"name": "peat", "stacks": ["item:tfc:peat","item:tfc:peat_grass"], "desc": "Peat can be used as a dirty fuel source in firepits, and in pit kilns."},
  {"name": "guano", "stacks": ["item:tfc:groundcover/guano"], "desc": "Guano is very rarely found on beaches."},
  {"name": "pumice", "stacks": ["item:tfc:groundcover/pumice"], "desc": "Pumice is sometimes found around volcanoes."},
  {"name": "icicle", "stacks": ["item:tfc:icicle"], "desc": "Icicles form on overhangs in winter."},
  {"name": "wattle", "stacks": ["item:tfc:wattle", "item:tfc:wattle/red"], "desc": "Wattle and Duab are a great early game building block."},
  {"name": "firepit", "stacks": ["item:tfc:firepit"], "desc": "Firepits are made by lighting at least a log, 3 sticks and some kindling on fire."},
  {"name": "bellows", "stacks": ["item:tfc:bellows"], "desc": "Bellows can heat forges to higher than the fuels normal limit."},
  {"name": "powderkeg", "stacks": ["item:tfc:powderkeg"], "desc": "Powderkegs can be filled with gunpower and blown up!"},
  {"name": "quern", "stacks": ["item:tfc:quern","item:tfc:handstone"], "desc": "Querns needs a handstone, and are used to grind stuff down!"},
  {"name": "crucible", "stacks": ["item:tfc:crucible", "item:tfc:ceramic/unfired_crucible"], "desc": "Crucibles can be placed above forges to melt stuff faster!"},
  {"name": "composter", "stacks": ["item:tfc:composter", "item:tfc:compost", "item:tfc:rotten_compost"], "desc": "Composters can turn plant material into compost fertiliser."},
  {"name": "bloomery", "stacks": ["item:tfc:bloomery", "item:tfc:raw_iron_bloom"], "desc": "Bloomerys can make the iron blooms needed for wrought iron, from cast iron and charcoal!"},
  {"name": "blast_furnace", "stacks": ["item:tfc:blast_furnace","item:tfc:fire_bricks",  "item:tfc:metal/ingot/pig_iron", "fluid:tfc:metal/pig_iron"], "desc": "The Blast Furnace makes pig iron, from cast iron, flux and a lot of fuel!"},
  {"name": "torch", "stacks": ["item:tfc:torch", "item:tfc:dead_torch"], "desc": "Torches eventually burn out! They can be relit with a lit torch."},
  {"name": "firestarters", "stacks": FIRESTARTERS, "desc": "These tools can be used to start fires!"},
  {"name": "charcoal", "stacks": ["item:minecraft:charcoal"], "desc": "Charcoal is a good, simple fuel source! See the TFC guide book on how to make a charcoal pit!"},
  {"name": "grapes", "stacks": ["item:firmalife:seeds/red_grape", "item:firmalife:seeds/white_grape", "item:firmalife:grape_trellis_post"], "desc": "Grapes grow on a trellis, see the TFC guide book for more information!"},

]

ClientEvents.highPriorityAssets(event =>{

  function generate_info(folder, name, stacks){
      event.add("emi:recipe/additions/"  + folder + "/" + name, {
        "type": "emi:info",
        "stacks": stacks,
        "text": "modpack.info." + folder + "." + name
      })
  }

  let LISTED_CATEGORIES = [
    {"name": "general", "array": GENERAL},
    {"name": "ore", "array": ORES},
    {"name": "metal", "array": METALS}
  ]

  LISTED_CATEGORIES.forEach(category =>{
    category.array.forEach(entry =>{
      generate_info(category.name, entry.name, entry.stacks)
    })
  })

  global.TFC_GEMS.forEach(entry =>{
    generate_info("gem", entry, get_gem_items(entry))
  })

  global.CROPS.forEach(entry =>{
    generate_info("plant", entry, get_crop_type_items(entry))
  })

  global.TFC_BUSHES.forEach(entry =>{
    generate_info("plant", entry, get_bush_type_items(entry))
  })

  global.FIRMALIFE_BUSHES.forEach(entry =>{
    generate_info("plant", entry, get_bush_type_items(entry))
  })

  global.ROCK_TYPES.forEach(entry =>{
    generate_info("rock", entry, get_rock_type_items(entry))
  })
  /*
  global.TFC_WOOD_TYPES.forEach(entry =>{
    generate_info("wood", entry, get_wood_type_items("tfc", entry))
  })

  global.AFC_WOOD_TYPES.forEach(entry =>{
    generate_info("wood", entry, get_wood_type_items("afc", entry))
  })
  */
  global.TFC_FRUIT_TREES.forEach(entry =>{
    generate_info("plant", entry, get_fruit_tree_items(entry))
  })

  global.FIRMALIFE_FRUIT_TREES.forEach(entry =>{
    generate_info("plant", entry, get_fruit_tree_items(entry))
  })

  generate_info("food", "jams", get_jams_items())
})


ClientEvents.lang("en_us", event =>{

  GENERAL.forEach(entry =>{
    event.add("modpack.info.general." + entry.name, entry.desc)
  })

  global.CROPS.forEach(entry =>{
    let crop_data = CROP_DATA[entry]
    event.add("modpack.info.plant." + entry, crop_data.desc + "like(s) " + crop_data.nutrient + " and grows at [" + crop_data.temp + "C] and at [" + crop_data.rain + "%] Hydration. ")
  })

  global.TFC_BUSHES.forEach(entry =>{
    let bush_data = BUSH_DATA[entry]
    event.add("modpack.info.plant." + entry, bush_data.desc + "fruit in " + bush_data.fruit + " and they require [" + bush_data.temp + "C] and [" + bush_data.rain + "] Hydration" )
  })

  global.FIRMALIFE_BUSHES.forEach(entry =>{
    let bush_data = BUSH_DATA[entry]
    event.add("modpack.info.plant." + entry, bush_data.desc + "fruit in " + bush_data.fruit + " and they require [" + bush_data.temp + "C] and [" + bush_data.rain + "] Hydration" )
  })


  global.TFC_FRUIT_TREES.forEach(entry =>{
    let tree_data = FRUIT_TREE_DATA[entry]
    event.add("modpack.info.plant." + entry, tree_data.desc + "fruit in " + tree_data.fruit + " and they require [" + tree_data.temp + "C] and [" + tree_data.rain + "] Hydration" )
  })

  global.FIRMALIFE_FRUIT_TREES.forEach(entry =>{
    let tree_data = FRUIT_TREE_DATA[entry]
    event.add("modpack.info.plant." + entry, tree_data.desc + "fruit in " + tree_data.fruit + " and they require [" + tree_data.temp + "C] and [" + tree_data.rain + "mm] Hydration." )
  })

  global.ROCK_TYPES.forEach(entry =>{
    let rock_data = ROCK_DATA[entry]
    event.add("modpack.info.rock." + entry, rock_data.desc + "\n It is a " + rock_data.type + " rock.")
  })

  Object.keys(METAL_DATA).forEach(entry =>{
    event.add("modpack.info.metal." + entry, METAL_DATA[entry])
  })

  Object.keys(GEM_DATA).forEach(entry =>{
    event.add("modpack.info.gem." + entry, GEM_DATA[entry])
  })

  Object.keys(ORE_DATA).forEach(entry =>{
    event.add("modpack.info.ore." + entry, ORE_DATA[entry])
  })

  event.add("modpack.info.food.jams", "Making Jams can be used to preserve fruit for in-game years!")
})

/* Sample
{
    "type": "emi:info",
    "stacks": [
      "item:tfc:ore/lignite"
    ],
    "text": "modpack.info.ore.lignite"
  }
*/