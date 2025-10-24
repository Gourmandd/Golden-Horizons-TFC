//priority: 100

const CUTTING_TOOL = {
    PICKAXE: { "type": "farmersdelight:item_ability", "action": "pickaxe_dig" },
    AXE: { "type": "farmersdelight:item_ability", "action": "axe_dig" },
    SHOVEL: { "type": "farmersdelight:item_ability", "action": "shovel_dig" },
    SHEARS: { "tag": "c:tools/shear" },
    KNIFE: { "tag": "c:tools/knife" }
}

const farmersDelightRecipes = function(){

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
        this.container = "minecraft:bowl"
        this.cooking_time

        this.setCookingTime = function(amount){
            this.cooking_time = amount
            return this
        }

        this.setContainer = function(container){
            this.container = container
            return this
        }

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
                container: {"id": this.container},
                cookingtime: this.cooking_time,
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

    return this
}