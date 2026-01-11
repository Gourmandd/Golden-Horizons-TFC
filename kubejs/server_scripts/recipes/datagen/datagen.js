//priority: 10

const IO_TYPE = {
    ITEM: "item",
    ITEM_TAG: "item_tag",
    FLUID: "fluid",
    FLUID_TAG: "fluid_tag",
}

const PREDICATE = {
    ALL_OF: "all_of",
    ANY_OF: "any_of",
    BLOCK_STATE_PROPERTY: "block_state_property",
    DAMAGE_SOURCE_PROPERTIES: "damage_source_properties",
    ENCHANTMENT_ACTIVE_CHECK: "enchantment_active_check",
    ENTITY_PROPERTIES: "entity_properties",
    ENTITY_SCORES: "entity_scores",
    INVERTED: "inverted",
    KILLED_BY_PLAYER: "killed_by_player",
    LOCATION_CHECK: "location_check",
    MATCH_TOOL: "match_tool",
    RANDOM_CHANCE: "random_chance",
    RANDOM_CHANCE_WITH_ENCHANTED_BONUS: "random_chance_with_enchanted_bonus",
    REFERENCE: "reference",
    SURVIVES_EXPLOSION: "survives_explosion",
    TABLE_BONUS: "table_bonus",
    VALUE_CHECK: "value_check",
    WEATHER_CHECK: "weather_check",
}

const BASE_DATAGEN = function () {
    this.location = null

    this.id = function (id) {
        this.location = id
        return this
    }

    this.generate = function () {
        generateRecipe(this.event, this.getAsMap(), this.location)
    }

    this.printMap = function () {
        console.log(this.getAsMap())
        return this
    }

    return this
}

let RECIPES = [
    createModRecipes(),
    createAdditionRecipes(),
    farmersDelightRecipes(),
    terraFirmaCraftRecipes()
]

function singularObjectArray(array) {
    return [array[0]]
}

function getIOArray(input) {
    if (Array.isArray(input)) {
        return input
    } else {
        return [input]
    }
}

function generateRecipe(event, json, id) {
    if (id == null) {
        event.custom(json)
    } else {
        event.custom(json).id(id)
    }
}

function Datagen(event) {
    this.event = event

    this.recipe = function () {

        let obj = new Object
        RECIPES.forEach((recipeDatagen) => {
            Object.assign(this.recipe, recipeDatagen)
        })
        return this
    }

    this.databank = function () {
        return DatabankDatagen()
    }

    this.advancement = function () {
        return AdvancementDatagen()
    }

    this.tfcData = function () {
        return terraFirmaCraftData()
    }

    return this
}

/**
 * @param {String} type
 * @param {String} id
 * @param {Number} count
 */
function inputOf(io_type, id, count) {
    if (io_type == IO_TYPE.ITEM) {
        return {
            item: id,
            count: count,
        }
    }
    if (io_type == IO_TYPE.ITEM_TAG) {
        return {
            tag: id.replace("#", ""),
            count: count,
        }
    }
    if (io_type == IO_TYPE.FLUID) {
        return {
            type: "fluid_stack",
            fluid: id,
            amount: count,
        }
    }
    if (io_type == IO_TYPE.FLUID_TAG) {
        return {
            tag: id,
            amount: count,
        }
    }
}

function outputOf(io_type, id, count, chance) {

    if (chance == null || chance == undefined) {
        chance = 1
    }

    if (io_type == IO_TYPE.ITEM) {
        return {
            id: id,
            count: count,
            chance: chance,
        }
    }
    if (io_type == IO_TYPE.FLUID) {
        return {
            id: id,
            amount: count,
            chance: chance,
        }
    }
}

// These not only test the various features of the recipes, but also act as examples of how you can use these
const DO_DATAGEN_TESTS = false

ServerEvents.recipes((event) => {
    if (DO_DATAGEN_TESTS) {
        let datagen = Datagen(event).recipe()

        const ITEM = IO_TYPE.ITEM
        const FLUID = IO_TYPE.FLUID
        // create mod
        datagen
            .createCutting(
                outputOf(ITEM, "minecraft:diamond", 1, 0.75),
                inputOf(ITEM, "minecraft:stone", 1),
            )
            .id("modpack:cutting_test2")
            .generate()
        datagen
            .createCutting(
                outputOf(ITEM, "minecraft:dirt", 1, 0.75),
                inputOf(ITEM, "minecraft:stone", 1),
            )
            .id("modpack:cutting_test")
            .generate()
        datagen
            .createPressing(
                outputOf(ITEM, "minecraft:dirt", 1, 0.75),
                inputOf(ITEM, "minecraft:stone", 1),
            )
            .id("modpack:pressing_test")
            .generate()

        datagen
            .createHaunting(
                outputOf(ITEM, "minecraft:dirt", 1, 0.75),
                inputOf(ITEM, "minecraft:stone", 1),
            )
            .id("modpack:haunting_test")
            .generate()
        datagen
            .createSplashing(
                outputOf(ITEM, "minecraft:dirt", 1, 0.75),
                inputOf(ITEM, "minecraft:stone", 1),
            )
            .id("modpack:splashing_test")
            .generate()

        datagen
            .createMixing(
                outputOf(ITEM, "minecraft:dirt", 1, 0.75),
                inputOf(ITEM, "minecraft:stone", 1),
            )
            .heatRequirement(HEAT_REQUIREMENT.HEATED)
            .id("modpack:mixing_test")
            .generate()
        datagen
            .createSandpaperPolishing(
                outputOf(ITEM, "minecraft:dirt", 1, 0.75),
                inputOf(ITEM, "minecraft:stone", 1),
            )
            .id("modpack:sandpaper_test")
            .generate()

        datagen
            .createDeploying(
                outputOf(ITEM, "minecraft:dirt", 1, 0.75),
                inputOf(ITEM, "minecraft:stone", 1),
                inputOf(ITEM, "minecraft:apple", 1),
            )
            .id("modpack:deploying_test")
            .generate()

        datagen
            .createDeploying(
                outputOf(ITEM, "minecraft:dirt", 1, 0.75),
                inputOf(ITEM, "minecraft:stone", 1),
                inputOf(ITEM, "minecraft:apple", 1),
            )
            .id("modpack:deploying_test_keep_item")
            .keepItem()
            .generate()

        datagen
            .createItemApplication(
                outputOf(ITEM, "minecraft:dirt", 1, 0.75),
                inputOf(ITEM, "minecraft:stone", 1),
                inputOf(ITEM, "minecraft:apple", 1),
            )
            .id("modpack:deploying_test")
            .generate()

        datagen
            .createMechanicalCrafting(
                outputOf(ITEM, "minecraft:dirt", 1, 1),
                { A: { item: "minecraft:stone" }, B: { item: "minecraft:apple" } },
                ["ABA", "BAB", "ABA"],
            )
            .id("modpack:mechanical_crafting_test")
            .generate()

        datagen
            .createCompacting(
                outputOf(ITEM, "minecraft:dirt", 1, 0.75),
                inputOf(ITEM, "minecraft:stone", 1),
            )
            .id("modpack:compacting_test")
            .generate()
        datagen
            .createCompacting(
                outputOf(FLUID, "minecraft:water", 1000, 1),
                inputOf(ITEM, "minecraft:stone", 1),
            )
            .id("modpack:compacting_test_fluid_out")
            .generate()
        datagen
            .createCompacting(outputOf(ITEM, "minecraft:stone", 1, 0.75), [
                inputOf(FLUID, "minecraft:water", 100),
            ])
            .id("modpack:compacting_test_fluid_in")
            .generate()

        datagen
            .createMilling(
                outputOf(ITEM, "minecraft:dirt", 1, 0.75),
                inputOf(ITEM, "minecraft:stone", 1),
            )
            .id("modpack:milling_test")
            .generate()
        datagen
            .createCrushing(
                outputOf(ITEM, "minecraft:dirt", 1, 0.5),
                inputOf(ITEM, "minecraft:stone", 1),
            )
            .id("modpack:crushing_test")
            .generate()
        // modpack disables viewing emptying recipes as they bloat up the view, might want to filter out bucket emptying ones out instead.
        datagen
            .createEmptying(
                outputOf(ITEM, "minecraft:dirt", 1, 0.75),
                outputOf(FLUID, "minecraft:water", 500, 1),
                inputOf(ITEM, "minecraft:stone", 1),
            )
            .id("modpack:emptying_test")
            .generate()

        datagen
            .createFilling(
                outputOf(ITEM, "minecraft:dirt", 1, 0.75),
                inputOf(ITEM, "minecraft:stone", 1),
                inputOf(FLUID, "minecraft:water", 500),
            )
            .id("modpack:filling_test")
            .generate()

        datagen
            .createSequencedAssembly(
                outputOf(ITEM, "minecraft:dirt", 1, 1),
                inputOf(ITEM, "minecraft:stone", 1),
                [
                    datagen
                        .createDeploying(
                            outputOf(ITEM, "minecraft:stone", 1, 0.75),
                            inputOf(ITEM, "minecraft:stone", 1),
                            inputOf(ITEM, "minecraft:apple", 1),
                        )
                        .getAsMap(),
                    datagen
                        .createDeploying(
                            outputOf(ITEM, "minecraft:stone", 1, 0.75),
                            inputOf(ITEM, "minecraft:stone", 1),
                            inputOf(ITEM, "minecraft:emerald", 1),
                        )
                        .getAsMap(),
                    datagen
                        .createDeploying(
                            outputOf(ITEM, "minecraft:stone", 1, 0.75),
                            inputOf(ITEM, "minecraft:stone", 1),
                            inputOf(ITEM, "minecraft:stick", 1),
                        )
                        .getAsMap(),
                ],
            )
            .id("modpack:sequenced_assembly_test")
            .setLoops(3)
            .generate()

        // farmer's delight

        datagen
            .farmersCutting(
                outputOf(ITEM, "minecraft:dirt", 2, 0.75),
                inputOf(ITEM, "minecraft:stone", 1),
                CUTTING_TOOL.PICKAXE,
            )
            .id("modpack:fd_cutting_test")
            .generate()
        datagen
            .farmersCooking(
                outputOf(ITEM, "minecraft:dirt", 2, 0.75),
                inputOf(ITEM, "minecraft:stone", 1),
            )
            .id("modpack:cooking_test")
            .generate()

        // create addition

        datagen
            .createAdditionRolling(
                outputOf(ITEM, "minecraft:dirt", 2, 0.75),
                inputOf(ITEM, "minecraft:stone", 1),
            )
            .id("modpack:rolling_test")
            .generate()
        datagen
            .createAdditionCharging(
                outputOf(ITEM, "minecraft:dirt", 2, 0.75),
                inputOf(ITEM, "minecraft:stone", 1),
                4000,
            )
            .id("modpack:charging_test")
            .generate()
    }
})

ServerEvents.generateData("before_mods", (event) => {
    if (DO_DATAGEN_TESTS) {
        let databank = Datagen(event).databank()

        databank
            .hiding(
                databank.advancementCondition("pastel:hidden/collect_shards/amethyst"),
                databank.itemType("minecraft:emerald", "minecraft:diamond", {
                    text: "Testing",
                }),
            )
            .generate()
        databank
            .hiding(
                databank.advancementCondition("pastel:hidden/collect_shards/amethyst"),
                databank.blockType(
                    "minecraft:emerald_block",
                    "minecraft:diamond_block",
                    { text: "Testing" },
                ),
            )
            .generate()

        let advancement = Datagen(event).advancement()

        advancement.id("modpack:advancement/test").addCriteria("test", {
            "trigger": "minecraft:impossible"
        }).generate()
    }
})
