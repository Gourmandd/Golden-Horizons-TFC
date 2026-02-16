// packmode: test
// the way caupona does these recipes leads to other mods like TFC and wark to complain.

const BREW_TAG = "modpack:food/brew_ingredients"

const EFFECTS = {
    INTSANT_HEALTH: "minecraft:instant_health",
    WATER_BREATHING: "minecraft:water_breathing",
    SHOCKING: "createaddition:shocking",
    UNLUCK: "minecraft:unluck",
    SLOWNESS: "minecraft:slowness",
    SLOW_FALLING: "minecraft:slow_falling",
    RAID_OMEN: "minecraft:raid_omen",
    JUMP_BOOST: "minecraft:jump_boost",
    DOLPHINS_GRACE: "minecraft:dolphins_grace",
    PINNED: "tfc:pinned",
    REGENERATION: "minecraft:regeneration",
    CONDUIT_POWER: "minecraft:conduit_power",
    LUCK: "minecraft:luck",
    BAD_OMEN: "minecraft:bad_omen",
    STRENGHT: "minecraft:strength",
    WEAKNESS: "minecraft:weakness",
    OVERBURDENED: "tfc:overburdened",
    GLOW_INK: "tfc:glow_ink",
    NOURISHMENT: "farmersdelight:nourishment",
    WITHER: "minecraft:wither",
    GLOWING: "minecraft:glowing",
    INFESTED: "minecraft:infested",
    //HYPERACTIVE: "caupona:hyperactive", doesnt do anything
    THIRST: "tfc:thirst",
    EXHAUSTED: "tfc:exhausted",
    INVISIBILITY: "minecraft:invisibility",
    RESISTANCE: "minecraft:resistance",
    BLINDNESS: "minecraft:blindness",
    HASTE: "minecraft:haste",
    POISON: "minecraft:poison",
    HUNGER: "minecraft:hunger",
    WEAVING: "minecraft:weaving",
    FIRE_RESISTANCE: "minecraft:fire_resistance",
    SATURATION: "minecraft:saturation",
    MINING_FATIGUE: "minecraft:mining_fatigue",
    HEALTH_BOOST: "minecraft:health_boost",
    SPEED: "minecraft:speed",
    TRIAL_OMEN: "minecraft:trial_omen",
    INK: "tfc:ink",
    DARKNESS: "minecraft:darkness",
    HERO_OF_THE_VILLAGE: "minecraft:hero_of_the_village",
    LEVITATION: "minecraft:levitation",
    INSTANT_DAMAGE: "minecraft:instant_damage",
    OOZING: "minecraft:oozing",
    NAUSEA: "minecraft:nausea",
    WIND_CHARGED: "minecraft:wind_charged",
    COMFORT: "farmersdelight:comfort",
    ABSORPTION: "minecraft:absorption",
    NIGHT_VISION: "minecraft:night_vision",
    ANOTHER_ROLL: "pastel:another_roll",
    ASCENSION: "pastel:ascension",
    DEADLY_POISON: "pastel:deadly_poison",
    CALMING: "pastel:calming",
    DENSITY: "pastel:density",
    DIVINITY: "pastel:divinity",
    EFFECT_PROLONGING: "pastel:effect_prolonging",
    ETERNAL_SLUMBER: "pastel:eternal_slumber",
    FATAL_SLUMBER: "pastel:fatal_slumber",
    FRENZY: "pastel:frenzy",
    IMMUNITY: "pastel:immunity",
    LAVA_GLIDING: "pastel:lava_gliding",
    LIFE_DRAIN: "pastel:life_drain",
    LIGHTWEIGHT: "pastel:lightweight",
    MAGIC_ANNULATION: "pastel:magic_annulation",
    NOURISHING: "pastel:nourishing",
    PROJECTILE_REBOUND: "pastel:projectile_rebound",
    SCARRED: "pastel:scarred",
    SOMNOLENCE: "pastel:somnolence",
    STIFFNESS: "pastel:stiffness",
    SWIFTNESS: "pastel:swiftness",
    TOUGHNESS: "pastel:toughness",
    VULNERABILITY: "pastel:vulnerability"
}

const BREW_VALUES = {
    "minecraft:redstone": [{ effect: EFFECTS.SHOCKING, amplitute: 1, duration: 30 }],
    //"minecraft:bone_meal": [{ effect: EFFECTS.BLINDNESS, amplitute: 1, duration: 60 }],
    "minecraft:snowball": [{ effect: EFFECTS.CONDUIT_POWER, amplitute: 1, duration: 40 }],
    //"minecraft:egg": [{ effect: EFFECTS.OOZING, amplitute: 1, duration: 60 }],
    "minecraft:rotten_flesh": [{ effect: EFFECTS.BLINDNESS, amplitute: 1, duration: 40 }, { effect: EFFECTS.MINING_FATIGUE, amplitute: 1, duration: 40 }],
    "minecraft:charcoal": [{ effect: EFFECTS.COMFORT, amplitute: 1, duration: 40 }, { effect: EFFECTS.THIRST, amplitute: 1, duration: 40 }],
    //"minecraft:honeycomb": [{ effect: EFFECTS.ABSORPTION, amplitute: 1, duration: 30 }],
    "minecraft:slime_ball": [{ effect: EFFECTS.OOZING, amplitute: 1, duration: 60 }],
    //"quark:moss_paste": [{ effect: EFFECTS.INTSANT_HEALTH, amplitute: 1, duration: 1 }],
    "minecraft:glowstone_dust": [{ effect: EFFECTS.GLOWING, amplitute: 1, duration: 40 }],
    "minecraft:gunpowder": [{ effect: EFFECTS.INSTANT_DAMAGE, amplitute: 1, duration: 1 }, { effect: EFFECTS.STRENGHT, amplitute: 1, duration: 24 }],
    "minecraft:blaze_powder": [{ effect: EFFECTS.FIRE_RESISTANCE, amplitute: 1, duration: 22 }],
    "minecraft:sugar": [{ effect: EFFECTS.SPEED, amplitute: 1, duration: 30 }],
    //"artisanal:soap": [{ effect: "", amplitute: 1, duration: 1 }],
    "tfc:powder/amethyst": [{ effect: EFFECTS.MAGIC_ANNULATION, amplitute: 1, duration: 30 }],
    "tfc:powder/diamond": [{ effect: EFFECTS.RESISTANCE, amplitute: 1, duration: 40 }],
    "tfc:powder/emerald": [{ effect: EFFECTS.SPEED, amplitute: 1, duration: 20 }],
    "tfc:powder/lapis_lazuli": [{ effect: EFFECTS.SATURATION, amplitute: 1, duration: 12 }],
    "tfc:powder/opal": [{ effect: EFFECTS.IMMUNITY, amplitute: 1, duration: 20 }, { effect: EFFECTS.DARKNESS, amplitute: 1, duration: 20 }],
    "tfc:powder/pyrite": [{ effect: EFFECTS.GLOWING, amplitute: 1, duration: 20 }],
    "tfc:powder/ruby": [{ effect: EFFECTS.ANOTHER_ROLL, amplitute: 1, duration: 26 }],
    "tfc:powder/sapphire": [{ effect: EFFECTS.JUMP_BOOST, amplitute: 1, duration: 40 }],
    "tfc:powder/topaz": [{ effect: EFFECTS.SPEED, amplitute: 1, duration: 22 }],
    "tfc:food/blackberry": [{ effect: EFFECTS.REGENERATION, amplitute: 1, duration: 20 }],
    "tfc:food/blueberry": [{ effect: EFFECTS.REGENERATION, amplitute: 1, duration: 14 }],
    "tfc:food/cranberry": [{ effect: EFFECTS.COMFORT, amplitute: 1, duration: 40 }, { effect: EFFECTS.SOMNOLENCE, amplitute: 1, duration: 30 }],
    "tfc:food/bunchberry": [{ effect: EFFECTS.NOURISHMENT, amplitute: 1, duration: 30 }],
    "tfc:food/cloudberry": [{ effect: EFFECTS.CALMING, amplitute: 1, duration: 60 }],
    "tfc:food/elderberry": [{ effect: EFFECTS.EFFECT_PROLONGING, amplitute: 1, duration: 10 }, { effect: EFFECTS.IMMUNITY, amplitute: 1, duration: 40 }],
    "tfc:food/gooseberry": [{ effect: EFFECTS.HUNGER, amplitute: 1, duration: 20 }, { effect: EFFECTS.JUMP_BOOST, amplitute: 1, duration: 40 }],
    "tfc:food/raspberry": [{ effect: EFFECTS.REGENERATION, amplitute: 1, duration: 14 }],
    "tfc:food/snowberry": [{ effect: EFFECTS.FIRE_RESISTANCE, amplitute: 1, duration: 40 }],
    "tfc:food/strawberry": [{ effect: EFFECTS.COMFORT, amplitute: 1, duration: 60 }],
    "tfc:food/wintergreen_berry": [{ effect: EFFECTS.HEALTH_BOOST, amplitute: 1, duration: 60 }],
    "tfc:food/banana": [{ effect: EFFECTS.UNLUCK, amplitute: 1, duration: 60 }],
    "tfc:food/cherry": [{ effect: EFFECTS.LUCK, amplitute: 1, duration: 60 }],
    "tfc:food/green_apple": [{ effect: EFFECTS.POISON, amplitute: 1, duration: 10 }, { effect: EFFECTS.RESISTANCE, amplitute: 1, duration: 24 }],
    "tfc:food/lemon": [{ effect: EFFECTS.POISON, amplitute: 1, duration: 10 }, { effect: EFFECTS.HASTE, amplitute: 1, duration: 40 }],
    "tfc:food/olive": [{ effect: EFFECTS.NOURISHMENT, amplitute: 1, duration: 60 }, { effect: EFFECTS.IMMUNITY, amplitute: 1, duration: 20 }],
    "tfc:food/orange": [{ effect: EFFECTS.REGENERATION, amplitute: 1, duration: 10 }],
    "tfc:food/peach": [{ effect: EFFECTS.REGENERATION, amplitute: 1, duration: 14 }],
    "tfc:food/plum": [{ effect: EFFECTS.EFFECT_PROLONGING, amplitute: 1, duration: 30 }],
    "tfc:food/red_apple": [{ effect: EFFECTS.SPEED, amplitute: 1, duration: 40 }],
    "tfc:food/pumpkin_chunks": [{ effect: EFFECTS.COMFORT, amplitute: 1, duration: 50 }],
    "tfc:food/melon_slice": [{ effect: EFFECTS.INTSANT_HEALTH, amplitute: 1, duration: 1 }],
    "tfc:food/barley_flour": [{ effect: EFFECTS.SATURATION, amplitute: 1, duration: 30 }],
    "tfc:food/maize_flour": [{ effect: EFFECTS.SATURATION, amplitute: 1, duration: 30 }],
    "tfc:food/oat_flour": [{ effect: EFFECTS.SATURATION, amplitute: 1, duration: 30 }],
    "tfc:food/rye_flour": [{ effect: EFFECTS.SATURATION, amplitute: 1, duration: 30 }],
    "tfc:food/rice_flour": [{ effect: EFFECTS.SATURATION, amplitute: 1, duration: 40 }],
    "tfc:food/wheat_flour": [{ effect: EFFECTS.SATURATION, amplitute: 1, duration: 30 }],
    //"firmalife:food/dark_chocolate_blend": [{ effect: EFFECTS.SPEED, amplitute: 1, duration: 120 }],
    //"firmalife:food/milk_chocolate_blend": [{ effect: EFFECTS.SPEED, amplitute: 1, duration: 80 }],
    //"firmalife:food/white_chocolate_blend": [{ effect: EFFECTS.SPEED, amplitute: 1, duration: 100 }],
    //"firmalife:food/masa_flour": [{ effect: EFFECTS.SATURATION, amplitute: 1, duration: 30 }],
    //"firmalife:food/nightshade_berry": [{ effect: EFFECTS.DEADLY_POISON, amplitute: 1, duration: 30 }],
    "tfc:plant/blood_lily": [{ effect: EFFECTS.REGENERATION, amplitute: 1, duration: 60 }],
    "tfc:soot": [{ effect: EFFECTS.DARKNESS, amplitute: 1, duration: 180 }, { effect: EFFECTS.BLINDNESS, amplitute: 1, duration: 180 }, { effect: EFFECTS.SOMNOLENCE, amplitute: 1, duration: 180 }],
    "tfc:compost": [{ effect: EFFECTS.DENSITY, amplitute: 1, duration: 240 }, { effect: EFFECTS.RESISTANCE, amplitute: 1, duration: 240 }],
    "tfc:rotten_compost": [{ effect: EFFECTS.NAUSEA, amplitute: 1, duration: 20 }],
    "tfc:kaolin_clay": [{ effect: EFFECTS.REGENERATION, amplitute: 2, duration: 18 }],
    "minecraft:clay_ball": [{ effect: EFFECTS.REGENERATION, amplitute: 1, duration: 8 }, { effect: EFFECTS.THIRST, amplitute: 1, duration: 20 }],
    "tfc:glue": [{ effect: EFFECTS.OOZING, amplitute: 1, duration: 120 }],
    "tfc:olive_paste": [{ effect: EFFECTS.REGENERATION, amplitute: 2, duration: 10 }, { effect: EFFECTS.COMFORT, amplitute: 1, duration: 60 }],
    "tfc:mortar": [{ effect: EFFECTS.STIFFNESS, amplitute: 1, duration: 20 }, { effect: EFFECTS.RESISTANCE, amplitute: 1, duration: 20 }, { effect: EFFECTS.SCARRED, amplitute: 1, duration: 20 }],
    "tfc:powder/charcoal": [{ effect: EFFECTS.REGENERATION, amplitute: 1, duration: 16 }, { effect: EFFECTS.THIRST, amplitute: 1, duration: 24 }],
    "tfc:powder/coke": [{ effect: EFFECTS.DEADLY_POISON, amplitute: 1, duration: 20 }],
    "tfc:powder/flux": [{ effect: EFFECTS.REGENERATION, amplitute: 1, duration: 8 }, { effect: EFFECTS.HUNGER, amplitute: 1, duration: 8 }, { effect: EFFECTS.STIFFNESS, amplitute: 1, duration: 16 }],
    "tfc:powder/graphite": [{ effect: EFFECTS.POISON, amplitute: 1, duration: 10 }],
    "tfc:powder/kaolinite": [{ effect: EFFECTS.REGENERATION, amplitute: 2, duration: 18 }],
    "tfc:powder/lime": [{ effect: EFFECTS.REGENERATION, amplitute: 1, duration: 8 }, { effect: EFFECTS.HUNGER, amplitute: 1, duration: 8 }, { effect: EFFECTS.STIFFNESS, amplitute: 1, duration: 16 }],
    "tfc:powder/salt": [{ effect: EFFECTS.THIRST, amplitute: 1, duration: 60 }],
    "tfc:powder/saltpeter": [{ effect: EFFECTS.POISON, amplitute: 1, duration: 8 }, { effect: EFFECTS.SLOWNESS, amplitute: 1, duration: 8 }, { effect: EFFECTS.STRENGHT, amplitute: 1, duration: 8 }],
    "tfc:powder/soda_ash": [{ effect: EFFECTS.DOLPHINS_GRACE, amplitute: 1, duration: 24 }],
    "tfc:powder/sulfur": [{ effect: EFFECTS.FRENZY, amplitute: 1, duration: 60 }, { effect: EFFECTS.INSTANT_DAMAGE, amplitute: 1, duration: 1 }],
    "tfc:powder/sylvite": [{ effect: EFFECTS.MAGIC_ANNULATION, amplitute: 1, duration: 60 }],
    "tfc:powder/wood_ash": [{ effect: EFFECTS.HUNGER, amplitute: 1, duration: 30 }, { effect: EFFECTS.IMMUNITY, amplitute: 1, duration: 30 }],
    "tfc:powder/native_copper": [{ effect: EFFECTS.POISON, amplitute: 1, duration: 20 }, { effect: EFFECTS.HASTE, amplitute: 1, duration: 60 }, { effect: EFFECTS.LIGHTWEIGHT, amplitute: 1, duration: 60 }],
    "tfc:powder/native_gold": [{ effect: EFFECTS.HASTE, amplitute: 1, duration: 60 }],
    "tfc:powder/hematite": [{ effect: EFFECTS.JUMP_BOOST, amplitute: 1, duration: 60 }],
    "tfc:powder/native_silver": [{ effect: EFFECTS.HASTE, amplitute: 1, duration: 60 }],
    "tfc:powder/cassiterite": [{ effect: EFFECTS.POISON, amplitute: 1, duration: 10 }],
    "tfc:powder/bismuthinite": [{ effect: EFFECTS.DEADLY_POISON, amplitute: 1, duration: 10 }],
    "tfc:powder/garnierite": [{ effect: EFFECTS.FATAL_SLUMBER, amplitute: 1, duration: 120 }],
    "tfc:powder/malachite": [{ effect: EFFECTS.POISON, amplitute: 1, duration: 20 }, { effect: EFFECTS.HASTE, amplitute: 1, duration: 60 }, { effect: EFFECTS.LIGHTWEIGHT, amplitute: 1, duration: 60 }],
    "tfc:powder/magnetite": [{ effect: EFFECTS.NIGHT_VISION, amplitute: 1, duration: 60 }],
    "tfc:powder/limonite": [{ effect: EFFECTS.SPEED, amplitute: 1, duration: 60 }],
    "tfc:powder/sphalerite": [{ effect: EFFECTS.DEADLY_POISON, amplitute: 1, duration: 10 }],
    "tfc:powder/tetrahedrite": [{ effect: EFFECTS.POISON, amplitute: 1, duration: 20 }, { effect: EFFECTS.HASTE, amplitute: 1, duration: 60 }, { effect: EFFECTS.LIGHTWEIGHT, amplitute: 1, duration: 60 }],
    "tfc:blubber": [{ effect: EFFECTS.NOURISHMENT, amplitute: 1, duration: 80 }, { effect: EFFECTS.COMFORT, amplitute: 1, duration: 0 }],
    "afc:maple_sugar": [{ effect: EFFECTS.SPEED, amplitute: 1, duration: 60 }],
    "afc:birch_sugar": [{ effect: EFFECTS.SPEED, amplitute: 1, duration: 60 }],
    //"artisanal:perishable_sugar": [{ effect: "", amplitute: 1, duration: 1 }],
    //"artisanal:non_perishable_sugar": [{ effect: "", amplitute: 1, duration: 1 }],
    //"firmalife:spice/basil_leaves": [{ effect: "", amplitute: 1, duration: 1 }],
    //"firmalife:spice/cinnamon": [{ effect: "", amplitute: 1, duration: 1 }],
    //"firmalife:spice/vanilla": [{ effect: "", amplitute: 1, duration: 1 }],
    //"firmalife:fruit_leaf": [{ effect: "", amplitute: 1, duration: 1 }],
    //"firmalife:ice_shavings": [{ effect: "", amplitute: 1, duration: 1 }],
    //"firmalife:beeswax": [{ effect: "", amplitute: 1, duration: 1 }],
    //"firmalife:rennet": [{ effect: "", amplitute: 1, duration: 1 }],
    //"firmalife:plant/cilantro": [{ effect: "", amplitute: 1, duration: 1 }],
    "tfc:straw": [{ effect: "", amplitute: 1, duration: 1 }],
    "minecraft:scute": [{ effect: "", amplitute: 1, duration: 1 }],
    "minecraft:brown_mushroom": [{ effect: "", amplitute: 1, duration: 1 }],
    "minecraft:red_mushroom": [{ effect: "", amplitute: 1, duration: 1 }],
    "minecraft:bamboo": [{ effect: "", amplitute: 1, duration: 1 }],
    "minecraft:fire_charge": [{ effect: "", amplitute: 1, duration: 1 }],
    "minecraft:bone": [{ effect: "", amplitute: 1, duration: 1 }],
    "minecraft:feather": [{ effect: "", amplitute: 1, duration: 1 }],
    "minecraft:leather": [{ effect: "", amplitute: 1, duration: 1 }],
    "tfc:food/boiled_egg": [{ effect: "", amplitute: 1, duration: 1 }],
    //"firmalife:food/shredded_cheese": [{ effect: "", amplitute: 1, duration: 1 }],
    "tfc:food/beet": [{ effect: "", amplitute: 1, duration: 1 }],
    "tfc:food/cabbage": [{ effect: "", amplitute: 1, duration: 1 }],
    "tfc:food/carrot": [{ effect: "", amplitute: 1, duration: 1 }],
    "tfc:food/garlic": [{ effect: "", amplitute: 1, duration: 1 }],
    "tfc:food/onion": [{ effect: "", amplitute: 1, duration: 1 }],
    "tfc:food/potato": [{ effect: "", amplitute: 1, duration: 1 }],
    "tfc:food/sugarcane": [{ effect: "", amplitute: 1, duration: 1 }],
    "tfc:food/tomato": [{ effect: "", amplitute: 1, duration: 1 }],
    "tfc:food/cattail_root": [{ effect: "", amplitute: 1, duration: 1 }],
    "tfc:food/dried_kelp": [{ effect: "", amplitute: 1, duration: 1 }],
    //"firmalife:food/pineapple": [{ effect: "", amplitute: 1, duration: 1 }],
    "tfc:rock/loose/chalk": [{ effect: "", amplitute: 1, duration: 1 }],
    //"firmalife:food/soy_mixture": [{ effect: "", amplitute: 1, duration: 1 }],
    "tfc:plant/athyrium_fern": [{ effect: "", amplitute: 1, duration: 1 }]
}

ServerEvents.recipes(event => {

    event.custom({
        "type": "caupona:tags",
        "tag": BREW_TAG,
        "tags": []
    }).id("modpack:food_tag/brew")

    event.custom({
        "type": "caupona:bowl",
        "fluid": {
            "fluid": `${mod_id}:brew`
        },
        "inType": {
            "item": "minecraft:bowl"
        },
        "item": `${mod_id}:brew`
    }).id("modpack:bowl/brew")

    event.custom({
        "type": "caupona:cooking",
        "allow": [
            {
                "type": "only",
                "number": {
                    "type": "tag",
                    "tag": BREW_TAG,
                }
            }
        ],
        "base": [
            {
                "type": "fluid",
                "fluid": "minecraft:water"
            }
        ],
        "density": 0.25,
        "deny": [],
        "output": `${mod_id}:brew`,
        "priority": 64,
        "removeNBT": false,
        "time": 200
    }).id("modpack:cooking/brew")

    Object.keys(BREW_VALUES).forEach(item => {

        let effects = BREW_VALUES[item]
        let isEffectValid = true
        let duration = 0
        let json = {
            type: "caupona:food",
            heal: 0,
            item: {
                "item": item
            },
            sat: 1,
            effects: []
        }
        let counter = 0

        effects.forEach(entry => {

            if (counter == 0) {
                duration = entry.duration
            }

            counter + 1

            json.effects.push(
                {
                    level: entry.amplitute,
                    time: entry.duration,
                    effect: {
                        "id": entry.effect,
                        "amplifier": entry.amplitute,
                        "duration": entry.duration
                    },
                    "chance": 1.0
                }
            )

            if (entry.effect == "") {
                isEffectValid = false
            }
        })

        // set duration after iterating on entries
        json.items = [
            {
                "item": item,
                "time": duration
            }
        ]

        // if the json is valid, create it
        if (isEffectValid) {
            event.custom(json).id(`modpack:food/${item.replace(":", "/")}`)
        }
    })
})

ServerEvents.tags("item", event => {

    Object.keys(BREW_VALUES).forEach(item => {
        event.add(BREW_TAG, item)
    })
})
