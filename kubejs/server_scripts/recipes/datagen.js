
const HEAT_REQUIREMENT = {
    NONE: "none",
    HEATED: "heated",
    SUPERHEATED: "superheated",
}

const IO_TYPE = {
    ITEM: "item",
    ITEM_TAG: "item_tag",
    FLUID: "fluid",
    FLUID_TAG: "fluid_tag"
}

const CUTTING_TOOL = {
    PICKAXE: { "type": "farmersdelight:item_ability", "action": "pickaxe_dig" },
    AXE: { "type": "farmersdelight:item_ability", "action": "axe_dig" },
    SHOVEL: { "type": "farmersdelight:item_ability", "action": "shovel_dig" },
    SHEARS: { "tag": "c:tools/shear" },
    KNIFE: { "tag": "c:tools/knife" }
}

function singularObjectArray(array){
    return [array[0]]
}


function getIOArray(input){

    if (Array.isArray(input)){
        return input
    } else {
        return [input]
    }
}

function generateRecipe(event, json, id){

    if (id == null){
        event.custom(json)
    } else {
        event.custom(json).id(id)
    }
}

function Datagen(event){
    this.event = event

    this.recipe = function(){

        this.createCutting = function(output, input){

            this.processing_time = 0
            this.location = null


            this.processingTime = function(ticks){
                this.processing_time = ticks
                return this
            }

            this.id = function(id){
                this.location = id
                return this
            }

            this.generate = function(){
                generateRecipe(this.event, this.getAsMap(), this.location)
            }

            this.getAsMap = function(){
                if (processing_time = 0){
                    return {
                        type: "create:cutting",
                        ingredients: getIOArray(input),
                        results: getIOArray(output),
                    }
                } else {
                    return {
                        type: "create:cutting",
                        ingredients: getIOArray(input),
                        processing_time: this.processing_time,
                        results: getIOArray(output),
                    }
                }
            }

            this.printMap = function(){
                console.log(this.getAsMap())
                return this
            }

            return this
        }

        this.createHaunting = function(output, input){

            this.location = null

            this.id = function(id){
                this.location = id
                return this
            }

            this.generate = function(){
                generateRecipe(this.event, this.getAsMap(), this.location)
            }

            this.getAsMap = function(){
                return {
                    type: "create:haunting",
                    ingredients: getIOArray(input),
                    results: getIOArray(output),
                }
            }

            this.printMap = function(){
                console.log(this.getAsMap())
                return this
            }
            return this
        }

        this.createSplashing = function(output, input){

            this.location = null

            this.id = function(id){
                this.location = id
                return this
            }

            this.generate = function(){
                generateRecipe(this.event, this.getAsMap(), this.location)
            }

            this.getAsMap = function(){
                return {
                    type: "create:splashing",
                    ingredients: singularObjectArray(getIOArray(input)),
                    results: getIOArray(output),
                }
            }

            this.printMap = function(){
                console.log(this.getAsMap())
                return this
            }
            return this
        }

        this.createPressing = function(output, input){

            this.location = null

            this.id = function(id){
                this.location = id
                return this
            }

            this.generate = function(){
                generateRecipe(this.event, this.getAsMap(), this.location)
            }

            this.getAsMap = function(){
                return {
                    type: "create:pressing",
                    ingredients: singularObjectArray(getIOArray(input)),
                    results: getIOArray(output),
                }
            }

            this.printMap = function(){
                console.log(this.getAsMap())
                return this
            }
            return this
        }

        this.createSandpaperPolishing = function(output, input){

            this.location = null

            this.id = function(id){
                this.location = id
                return this
            }

            this.generate = function(){
                generateRecipe(this.event, this.getAsMap(), this.location)
            }

            this.getAsMap = function(){
                return {
                    type: "create:sandpaper_polishing",
                    ingredients: singularObjectArray(getIOArray(input)),
                    results: getIOArray(output),
                }
            }

            this.printMap = function(){
                console.log(this.getAsMap())
                return this
            }
            return this
        }

        this.createDeploying = function(output, input, heldItem){

            this.keepHeldItem = false
            this.location = null

            this.id = function(id){
                this.location = id
                return this
            }

            this.keepItem = function(){
                this.keepHeldItem = true
                return this
            }

            this.generate = function(){
                generateRecipe(this.event, this.getAsMap(), this.location)
            }

            this.getAsMap = function(){
                return {
                    type: "create:deploying",
                    ingredients: [getIOArray(input)[0], getIOArray(heldItem)[0]],
                    keep_held_item: this.keepHeldItem,
                    results: singularObjectArray(getIOArray(output)),
                }
            }

            this.printMap = function(){
                console.log(this.getAsMap())
                return this
            }

            return this
        }

        this.createItemApplication = function(output, input, heldItem){

            this.keepHeldItem = false
            this.location = null

            this.id = function(id){
                this.location = id
                return this
            }

            this.keepItem = function(){
                this.keepHeldItem = true
                return this
            }

            this.generate = function(){
                generateRecipe(this.event, this.getAsMap(), this.location)
            }

            this.getAsMap = function(){
                return {
                    type: "create:item_application",
                    ingredients: [getIOArray(input)[0], getIOArray(heldItem)[0]],
                    keep_held_item: this.keepHeldItem,
                    results: singularObjectArray(getIOArray(output)),
                }
            }

            this.printMap = function(){
                console.log(this.getAsMap())
                return this
            }

            return this
        }

        this.createCompacting = function(output, input){

            this.location = null
            this.heatRequirement = HEAT_REQUIREMENT.NONE

            this.id = function(id){
                this.location = id
                return this
            }

            this.setHeatRequirement = function(heatRequirement){
                this.heatRequirement = heatRequirement
                return this
            }

            this.generate = function(){
                generateRecipe(this.event, this.getAsMap(), this.location)
            }

            this.getAsMap = function(){
                return {
                    type: "create:compacting",
                    ingredients: getIOArray(input),
                    heat_requirement: this.heatRequirement,
                    results: getIOArray(output),
                }
            }

            this.printMap = function(){
                console.log(this.getAsMap())
                return this
            }

            return this
        }

        this.createMixing = function(output, input){

            this.location = null
            this.heatRequirement = HEAT_REQUIREMENT.NONE

            this.id = function(id){
                this.location = id
                return this
            }

            this.setHeatRequirement = function(heatRequirement){
                this.heatRequirement = heatRequirement
                return this
            }

            this.generate = function(){
                generateRecipe(this.event, this.getAsMap(), this.location)
            }

            this.getAsMap = function(){
                return {
                    type: "create:mixing",
                    ingredients: getIOArray(input),
                    heat_requirement: this.heatRequirement,
                    results: getIOArray(output),
                }
            }

            this.printMap = function(){
                console.log(this.getAsMap())
                return this
            }

            return this
        }

        this.createMilling = function(output, input){

            this.processing_time = 0
            this.location = null


            this.processingTime = function(ticks){
                this.processing_time = ticks
                return this
            }

            this.id = function(id){
                this.location = id
                return this
            }

            this.generate = function(){
                generateRecipe(this.event, this.getAsMap(), this.location)
            }

            this.getAsMap = function(){
                if (processing_time = 0){
                    return {
                        type: "create:milling",
                        ingredients: singularObjectArray(getIOArray(input)),
                        results: getIOArray(output),
                    }
                } else {
                    return {
                        type: "create:milling",
                        ingredients: singularObjectArray(getIOArray(input)),
                        processing_time: this.processing_time,
                        results: getIOArray(output),
                    }
                }
            }

            this.printMap = function(){
                console.log(this.getAsMap())
                return this
            }

            return this
        }

        this.createCrushing = function(output, input){

            this.processing_time = 0
            this.location = null


            this.processingTime = function(ticks){
                this.processing_time = ticks
                return this
            }

            this.id = function(id){
                this.location = id
                return this
            }

            this.generate = function(){
                generateRecipe(this.event, this.getAsMap(), this.location)
            }

            this.getAsMap = function(){
                if (processing_time = 0){
                    return {
                        type: "create:crushing",
                        ingredients: singularObjectArray(getIOArray(input)),
                        results: getIOArray(output),
                    }
                } else {
                    return {
                        type: "create:crushing",
                        ingredients: singularObjectArray(getIOArray(input)),
                        processing_time: this.processing_time,
                        results: getIOArray(output),
                    }
                }
            }

            this.printMap = function(){
                console.log(this.getAsMap())
                return this
            }

            return this
        }

        this.createEmptying = function(output, fluid_output, input){

            this.location = null

            this.id = function(id){
                this.location = id
                return this
            }

            this.generate = function(){
                generateRecipe(this.event, this.getAsMap(), this.location)
            }

            this.getAsMap = function(){
                return {
                    type: "create:emptying",
                    ingredients: singularObjectArray(getIOArray(input)),
                    results: [output, fluid_output],
                }
            }

            this.printMap = function(){
                console.log(this.getAsMap())
                return this
            }

            return this
        }

        this.createFilling = function(output, input, fluid_input){

            this.location = null

            this.id = function(id){
                this.location = id
                return this
            }

            this.generate = function(){
                generateRecipe(this.event, this.getAsMap(), this.location)
            }

            this.getAsMap = function(){
                return {
                    type: "create:filling",
                    ingredients: [getIOArray(input)[0], fluid_input],
                    results: getIOArray(output),
                }
            }

            this.printMap = function(){
                console.log(this.getAsMap())
                return this
            }

            return this
        }

        this.createMechanicalCrafting = function(output, key, pattern){

            this.location = null
            this.accept_mirrored = false
            this.category = "misc"
            this.show_notification = false

            this.id = function(id){
                this.location = id
                return this
            }

            this.acceptMirrored = function(){
                this.accept_mirrored = true
                return this
            }

            this.showNotification = function(){
                this.show_notification = true
                return this
            }

            this.setCategory = function(category){
                this.category = category
                return this
            }

            this.generate = function(){
                generateRecipe(this.event, this.getAsMap(), this.location)
            }

            this.getAsMap = function(){
                return {
                    type: "create:mechanical_crafting",
                    accept_mirrored: this.accept_mirrored,
                    category: this.category,
                    key: key,
                    pattern: pattern,
                    result: getIOArray(output)[0],
                    show_notification: this.show_notification
                }
            }

            this.printMap = function(){
                console.log(this.getAsMap())
                return this
            }

            return this
        }

        this.createSequencedAssembly = function(output, input, sequence){

            this.location = null
            this.loops = 1
            this.transitional_item = getIOArray(input)[0]["item"]
            this.sequence = sequence

            this.setTransitionalItem = function(item){
                this.transitional_item = item
                return this
            }

            this.id = function(id){
                this.location = id
                return this
            }

            this.setLoops = function(number){
                this.loops = number
                return this
            }

            this.generate = function(){
                generateRecipe(this.event, this.getAsMap(), this.location)
            }

            this.getAsMap = function(){
                return {
                    type: "create:sequenced_assembly",
                    ingredient: getIOArray(input)[0],
                    results: singularObjectArray(getIOArray(output)),
                    loops: this.loops,
                    sequence: this.sequence,
                    transitional_item: {id: this.transitional_item}
                }
            }

            this.printMap = function(){
                console.log(this.getAsMap())
                return this
            }

            return this
        }

        // farmers delight
        this.farmersCutting = function(output, input, tool){

            this.location = null

            this.id = function(id){
                this.location = id
                return this
            }

            this.generate = function(){
                generateRecipe(this.event, this.getAsMap(), this.location)
            }

            this.getAsMap = function(){

                let result = []

                getIOArray(output).forEach(item => {

                    result.push({"item":
                        {
                            "id": item.id,
                            "count": item.count
                        }, "chance": item.chance
                    })
                })

                return {
                    type: "farmersdelight:cutting",
                    ingredients: singularObjectArray(getIOArray(input)),
                    result: result,
                    tool: tool
                }
            }

            this.printMap = function(){
                console.log(this.getAsMap())
                return this
            }

            return this
        }

        this.farmersCooking = function(output, input){

            this.experience = 1.0
            this.recipe_book_tab = "misc"
            this.location = null


            this.setExperience = function(amount){
                this.experience = amount
                return this
            }

            this.setRecipeBookTab = function(type){
                this.recipe_book_type = type
                return this
            }

            this.id = function(id){
                this.location = id
                return this
            }

            this.generate = function(){
                generateRecipe(this.event, this.getAsMap(), this.location)
            }

            this.getAsMap = function(){
                return {
                    type: "farmersdelight:cooking",
                    experience: this.experience,
                    ingredients: getIOArray(input),
                    recipe_book_tab: this.recipe_book_tab,
                    result: getIOArray(output)[0],
                }
            }

            this.printMap = function(){
                console.log(this.getAsMap())
                return this
            }

            return this
        }

        // create addition
        this.createAdditionRolling = function(output, input){

            this.location = null

            this.id = function(id){
                this.location = id
                return this
            }

            this.generate = function(){
                generateRecipe(this.event, this.getAsMap(), this.location)
            }

            this.getAsMap = function(){
                return {
                    type: "createaddition:rolling",
                    ingredients: singularObjectArray(getIOArray(input)),
                    results: getIOArray(output),
                }
            }

            this.printMap = function(){
                console.log(this.getAsMap())
                return this
            }
            return this
        }

        this.createAdditionCharging = function(output, input, energy){

            this.max_charge_rate = 200 // seems like the default, looking at their github
            this.location = null

            this.MaxChargeRate = function(amount_per_tick){
                this.max_charge_rate = amount_per_tick
                return this
            }

            this.id = function(id){
                this.location = id
                return this
            }

            this.generate = function(){
                generateRecipe(this.event, this.getAsMap(), this.location)
            }

            this.getAsMap = function(){
                return {
                    type: "createaddition:charging",
                    energy: energy,
                    max_charge_rate: this.max_charge_rate,
                    ingredients: singularObjectArray(getIOArray(input)),
                    results: getIOArray(output),
                }
            }

            this.printMap = function(){
                console.log(this.getAsMap())
                return this
            }
            return this
        }

        this.createAdditionLiquidBurning = function(input, burn_time){

            this.location = null

            this.id = function(id){
                this.location = id
                return this
            }

            this.generate = function(){
                generateRecipe(this.event, this.getAsMap(), this.location)
            }

            this.getAsMap = function(){
                return {
                    type: "createaddition:liquid_burning",
                    burn_time: burn_time,
                    ingredients: singularObjectArray(getIOArray(input)),
                    results: [],
                }
            }

            this.printMap = function(){
                console.log(this.getAsMap())
                return this
            }
            return this
        }

        return this
    }

    return this
}



/**
 * @param {String} type 
 * @param {String} id 
 * @param {Number} count 
 */
function inputOf(io_type, id, count){

    if (io_type == IO_TYPE.ITEM){
        return {
            "item": id,
            "count": count,
        }
    }
    if (io_type == IO_TYPE.ITEM_TAG){
        return {
            "tag": id,
            "count": count,
        }
    }
    if (io_type == IO_TYPE.FLUID){
        return {
            "type": "fluid_stack",
            "fluid": id,
            "amount": count,
        }
    }
    if (io_type == IO_TYPE.FLUID_TAG){
        return {
            "tag": id,
            "amount": count,
        }
    }
}


function outputOf(io_type, id, count, chance){

    if (io_type == IO_TYPE.ITEM){
        return {
            "id": id,
            "count": count,
            "chance": chance
        }
    }
    if (io_type == IO_TYPE.FLUID){
        return {
            "id": id,
            "amount": count,
            "chance": chance
        }
    }
}


ServerEvents.recipes(event => {


    // These not only test the various features of the recipes, but also act as examples of how you can use these
    const DO_DATAGEN_TESTS = true

    if (DO_DATAGEN_TESTS){

        let datagen = Datagen(event).recipe()

        const ITEM = IO_TYPE.ITEM
        const FLUID = IO_TYPE.FLUID
        // create mod
        datagen.createCutting(outputOf(ITEM, "minecraft:diamond", 1, 0.75), inputOf(ITEM, "minecraft:stone", 1)).id("modpack:cutting_test2").generate()
        datagen.createCutting(outputOf(ITEM, "minecraft:dirt", 1, 0.75), inputOf(ITEM, "minecraft:stone", 1)).id("modpack:cutting_test").generate()
        datagen.createPressing(outputOf(ITEM, "minecraft:dirt", 1, 0.75), inputOf(ITEM, "minecraft:stone", 1)).id("modpack:pressing_test").generate()

        datagen.createHaunting(outputOf(ITEM, "minecraft:dirt", 1, 0.75), inputOf(ITEM, "minecraft:stone", 1)).id("modpack:haunting_test").generate()
        datagen.createSplashing(outputOf(ITEM, "minecraft:dirt", 1, 0.75), inputOf(ITEM, "minecraft:stone", 1)).id("modpack:splashing_test").generate()

        datagen.createMixing(outputOf(ITEM, "minecraft:dirt", 1, 0.75), inputOf(ITEM, "minecraft:stone", 1)).setHeatRequirement(HEAT_REQUIREMENT.HEATED).id("modpack:mixing_test").generate()
        datagen.createSandpaperPolishing(outputOf(ITEM, "minecraft:dirt", 1, 0.75), inputOf(ITEM, "minecraft:stone", 1)).id("modpack:sandpaper_test").generate()

        datagen.createDeploying(
            outputOf(ITEM, "minecraft:dirt", 1, 0.75), 
            inputOf(ITEM, "minecraft:stone", 1),
            inputOf(ITEM, "minecraft:apple", 1)
        ).id("modpack:deploying_test").generate()

        datagen.createDeploying(
            outputOf(ITEM, "minecraft:dirt", 1, 0.75), 
            inputOf(ITEM, "minecraft:stone", 1),
            inputOf(ITEM, "minecraft:apple", 1)
        ).id("modpack:deploying_test_keep_item").keepItem().generate()

        datagen.createItemApplication(
            outputOf(ITEM, "minecraft:dirt", 1, 0.75), 
            inputOf(ITEM, "minecraft:stone", 1),
            inputOf(ITEM, "minecraft:apple", 1)
        ).id("modpack:deploying_test").generate()

        datagen.createMechanicalCrafting(outputOf(ITEM, "minecraft:dirt", 1, 1), {"A": {"item": "minecraft:stone"}, "B": {"item": "minecraft:apple"}}, ["ABA", "BAB", "ABA"]).id("modpack:mechanical_crafting_test").generate()

        datagen.createCompacting(outputOf(ITEM, "minecraft:dirt", 1, 0.75), inputOf(ITEM, "minecraft:stone", 1)).id("modpack:compacting_test").generate()
        datagen.createCompacting(outputOf(FLUID, "minecraft:water", 1000, 1), inputOf(ITEM, "minecraft:stone", 1)).id("modpack:compacting_test_fluid_out").generate()
        datagen.createCompacting(outputOf(ITEM, "minecraft:stone", 1, 0.75), [inputOf(FLUID, "minecraft:water", 100)]).id("modpack:compacting_test_fluid_in").generate()

        datagen.createMilling(outputOf(ITEM, "minecraft:dirt", 1, 0.75), inputOf(ITEM, "minecraft:stone", 1)).id("modpack:milling_test").generate()
        datagen.createCrushing(outputOf(ITEM, "minecraft:dirt", 1, 0.5), inputOf(ITEM, "minecraft:stone", 1)).id("modpack:crushing_test").generate()
        // modpack disables viewing emptying recipes as they bloat up the view, might want to filter out bucket emptying ones out instead.
        datagen.createEmptying(outputOf(ITEM, "minecraft:dirt", 1, 0.75), outputOf(FLUID, "minecraft:water", 500, 1), inputOf(ITEM, "minecraft:stone", 1)).id("modpack:emptying_test").generate()

        datagen.createFilling(outputOf(ITEM, "minecraft:dirt", 1, 0.75), inputOf(ITEM, "minecraft:stone", 1), inputOf(FLUID, "minecraft:water", 500)).id("modpack:filling_test").generate()

        datagen.createSequencedAssembly(outputOf(ITEM, "minecraft:dirt", 1, 1), inputOf(ITEM, "minecraft:stone", 1), 
            [
            datagen.createDeploying(
                outputOf(ITEM, "minecraft:stone", 1, 0.75), 
                inputOf(ITEM, "minecraft:stone", 1),
                inputOf(ITEM, "minecraft:apple", 1)
            ).getAsMap(),
            datagen.createDeploying(
                outputOf(ITEM, "minecraft:stone", 1, 0.75), 
                inputOf(ITEM, "minecraft:stone", 1),
                inputOf(ITEM, "minecraft:emerald", 1)
            ).getAsMap(),
            datagen.createDeploying(
                outputOf(ITEM, "minecraft:stone", 1, 0.75), 
                inputOf(ITEM, "minecraft:stone", 1),
                inputOf(ITEM, "minecraft:stick", 1)
            ).getAsMap()
            ]
        ).id("modpack:sequenced_assembly_test").setLoops(3).generate()

        // farmer's delight

        datagen.farmersCutting(outputOf(ITEM, "minecraft:dirt", 2, 0.75), inputOf(ITEM, "minecraft:stone", 1), CUTTING_TOOL.PICKAXE).id("modpack:fd_cutting_test").generate()
        datagen.farmersCooking(outputOf(ITEM, "minecraft:dirt", 2, 0.75), inputOf(ITEM, "minecraft:stone", 1)).id("modpack:cooking_test").generate()

        // create addition

        datagen.createAdditionRolling(outputOf(ITEM, "minecraft:dirt", 2, 0.75), inputOf(ITEM, "minecraft:stone", 1)).id("modpack:rolling_test").generate()
        datagen.createAdditionCharging(outputOf(ITEM, "minecraft:dirt", 2, 0.75), inputOf(ITEM, "minecraft:stone", 1), 4000).id("modpack:charging_test").generate()
    }
})

