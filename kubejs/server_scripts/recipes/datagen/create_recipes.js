//priority: 100

const HEAT_REQUIREMENT = {
    NONE: "none",
    HEATED: "heated",
    SUPERHEATED: "superheated",
}

const createModRecipes = function(){

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
        this.heat_requirement = HEAT_REQUIREMENT.NONE

        this.id = function(id){
            this.location = id
            return this
        }

        this.heatRequirement = function(heatRequirement){
            this.heat_requirement = heatRequirement
            return this
        }

        this.generate = function(){
            generateRecipe(this.event, this.getAsMap(), this.location)
        }

        this.getAsMap = function(){
            return {
                type: "create:compacting",
                ingredients: getIOArray(input),
                heat_requirement: this.heat_requirement,
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
        this.heat_requirement = HEAT_REQUIREMENT.NONE

        this.id = function(id){
            this.location = id
            return this
        }

        this.heatRequirement = function(heatRequirement){
            this.heat_requirement = heatRequirement
            return this
        }

        this.generate = function(){
            generateRecipe(this.event, this.getAsMap(), this.location)
        }

        this.getAsMap = function(){
            return {
                type: "create:mixing",
                ingredients: getIOArray(input),
                heat_requirement: this.heat_requirement,
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

    return this
}