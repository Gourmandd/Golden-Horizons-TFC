//priority: 100

// --------------------------------------- //
// Globals to be used for any script type  //
// --------------------------------------- //

// should switch to using a global
//global.nameProcessing = (name) =>
function nameProcessing(name) {
    name = name.replace("_", " ")
    name = name.replace("_", " ")
    name = name.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
    //console.log(name)
    return name
}

global.MOD_ID = "modpack"
let id = global.MOD_ID

global.DYE_COLOURS = [
    "white",
    "light_gray",
    "gray",
    "black",
    "brown",
    "red",
    "orange",
    "yellow",
    "lime",
    "green",
    "cyan",
    "light_blue",
    "blue",
    "purple",
    "magenta",
    "pink",
]

global.COLOUR_TO_HEX = {
    "blue": 0xCDD7FC,
    "red": 0xE29F9F,
    "white": 0xEEF8FA,
    "light_gray": 0xCDD2DA,
    "gray": 0x92959B,
    "black": 0x383A3D,
    "brown": 0x8D6B55,
    "orange": 0xFBAB60,
    "yellow": 0xFFF189,
    "lime": 0xBBF378,
    "green": 0x5AA256,
    "cyan": 0x92C9BB,
    "light_blue": 0xA3D8DF,
    "purple": 0xA884E1,
    "magenta": 0xC684E1,
    "pink": 0xF2A4E0,
}

global.CAUPONA_ASPICS = [
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

// To Be Removed
global.TFC_MAKES_DYE_TAGS = [
    "white",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "light_blue",
    "purple",
    "magenta",
    "pink"
]

global.TFC_FLOUR_TYPES = [
    "barley",
    "maize",
    "rye",
    "rice",
    "oat",
    "wheat"
]

global.TFC_SOIL_TYPES = [
    "entisol",
    "aridisol",
    "oxisol",
    "fluvisol",
    "andisol",
    "podzol",
    "alfisol",
    "mollisol"
]
