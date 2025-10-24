//priority: 100

const createAdditionRecipes = function(){

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