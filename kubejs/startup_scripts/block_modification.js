BlockEvents.modification(event => {

//event.modify('minecraft:stone', block => {block.requiresTool(true)})

let aether_wood = ["skyroot"]

let aether_redux_wood = [
    "fieldsproot",
    "blightwillow",
    "crystal",
    "glacia",    
]
let aether_redux_stems = [
    "cloudcap",
    "jellyshroom",    
]
let deep_aether_wood = [
    "roseroot",
    "yagroot",
    "cruderoot",
    "conberry",
    "sunroot",    
]

aether_wood.forEach(type => {log_variant_modification("aether", type, "log", "wood")});
aether_redux_wood.forEach(type => {log_variant_modification("aether_redux", type, "log", "wood")});
aether_redux_stems.forEach(type => {log_variant_modification("aether_redux", type, "stem", "hyphae")});
deep_aether_wood.forEach(type => {log_variant_modification("deep_aether", type, "log", "wood")});



function log_variant_modification(mod, type, log, wood){
    event.modify(mod + ":stripped_" + type + "_" + log, block => {block.requiresTool = true, block.destroySpeed = 7.5})
    event.modify(mod + ":" + type + "_" + log, block => {block.requiresTool = true, block.destroySpeed = 7.5})
    event.modify(mod + ":stripped_" + type + "_" + wood, block => {block.requiresTool = true, block.destroySpeed = 7.5})
    event.modify(mod + ":" + type + "_" + wood, block => {block.requiresTool = true, block.destroySpeed = 7.5})
}


let misc_wood_modification = [
    "aether:golden_oak_wood",
    "aether:golden_oak_log",
    "aether_redux:blightwillow_log_wall",
    "aether_redux:blightwillow_wood_wall",
    "aether_redux:stripped_blightwillow_log_wall",
    "aether_redux:stripped_blightwillow_wood_wall",
    "aether_redux:sporing_blightwillow_log",
    "aether_redux:sporing_blightwillow_wood",
    "aether_redux:cloudcap_stem_wall",
    "aether_redux:cloudcap_hyphae_wall",
    "aether_redux:stripped_cloudcap_stem_wall",
    "aether_redux:stripped_cloudcap_hyphae_wall",
    "deep_aether:cruderoot_wall",
    "deep_aether:stripped_cruderoot_wall",
    "deep_aether:yagroot_wall",
    "deep_aether:stripped_yagroot_wall",
    "deep_aether:rotton_roseroot_log"
]
misc_wood_modification.forEach(type =>{event.modify(type, block => {block.requiresTool = true, block.destroySpeed = 7.5})})

let aether_ores = [
    "deep_aether:raw_clorite",
    "aether_redux:divinite",
    "deep_aether:aseterite",
    "aether:ambrosium_ore",
    "aether:zanite_ore",
    "aether:gravitite_ore",
    "aether_redux:veridium_ore",
    "ancient_aether:valkyrum_ore",
    "ancient_aether:aether_quartz_ore",
    "deep_aether:skyjade_ore",
    "kubejs:valkyrum_ore"
]

aether_ores.forEach(type =>{event.modify(type, block => {block.destroySpeed = 4})})
})