
const GIVES_PLANK = [
    "bookshelf",
    "log_fence",
    "fence_gate",
    "tool_rack",
    "workbench",
    "loom",
]

const GIVES_LUMBER = [
    "door",
    "trapdoor",
    "fence",
    "pressure_plate",
    "button",
    "slab",
    "stairs",
]

const BLOCK_SHAPES = [
    "bricks",
    "wall",
    "stairs",
    "slab"
]

const BRICK_TYPES = [
    "bricks",
    "mossy_bricks",
    "cracked_bricks"
]



ServerEvents.recipes(event =>{

    function cutting(id, input, input_type, output, action, output_chance, output_count){
        let ingredients = {}
        if (input_type == "tag"){
            ingredients = {"tag": input}
        }
        if (input_type == "item"){
            ingredients = {"item": input}
        }
        event.custom({
            "type": "farmersdelight:cutting",
            "ingredients": [ingredients],
            "result": [{
                "item": {
                    "id": output,
                    "chance": output_chance,
                    "count": output_count
                }
            }],
            "tool": {
                "type": "farmersdelight:item_ability",
                "action": action
            }
        })
        .id(id)
    }

    global.OVERWORLD_WOOD_TYPES.forEach(type => {

        let mod = global.WOOD_TYPE_TO_MOD[type]

            if (!Platform.isLoaded("afc" && mod == "afc")){return}
            
            cutting(`modpack:fd_cutting/wood/${mod}_lumber/${type}`, `modpack:cutting/wood/for_lumber/${type}`, "tag",  `${mod}:wood/lumber/${type}`, "axe_dig", 1, 1)
            cutting(`modpack:fd_cutting/wood/${mod}_planks/${type}`, `modpack:cutting/wood/for_planks/${type}`, "tag",  `${mod}:wood/planks/${type}`, "axe_dig", 1, 1)
    })

    global.DYE_COLOURS.forEach(colour => {
        cutting(`modpack:fd_cutting/terracotta/${colour}`, `modpack:cutting/terracotta_bricks/${colour}`, "tag", `minecraft:${colour}_terracotta`, "pickaxe_dig", 0.5, 1)
    })
    cutting(`modpack:fd_cutting/terracotta/plain`, `modpack:cutting/terracotta_bricks/plain`, "tag", "minecraft:terracotta", "pickaxe_dig", 0.5, 1)

    cutting(`modpack:fd_cutting/alabaster`, `modpack:cutting/alabaster_brick`, "tag", "tfc:alabaster_brick","pickaxe_dig", 0.5, 1,)

    cutting(`modpack:fd_cutting/gypsum`, `modpack:cutting/gypsum`, "tag", "tfc:ore/gypsum","pickaxe_dig", 1, 1)

    global.TFC_SOIL_TYPES.forEach(soil => {
        cutting(`modpack:fd_cutting/mud/${soil}`, `modpack:cutting/mud/${soil}/brick`, "tag", `tfc:mud_brick/${soil}`, "pickaxe_dig", 0.5, 1)
    })

    global.TFC_SAND_COLOURS.forEach(colour => {
        cutting(`modpack:fd_cutting/sandstone/${colour}`, `modpack:cutting/sandstone/${colour}`, "tag", `tfc:sand/${colour}`, "pickaxe_dig", 0.5, 1)
    })

    global.ROCK_TYPES.forEach(rock => {
        cutting(`modpack:fd_cutting/rock/${rock}`, `modpack:cutting/rock/${rock}`, "tag", `tfc:rock/loose/${rock}`, "pickaxe_dig", 0.5, 1)
    })
})