
const DatabankDatagen = function(){


    this.advancementCondition = function(advancement){
        return {
            type: "databank:advancement",
            advancement: advancement
        }
    }


    this.orCondition = function(conditionA, conditionB){
        return {
            type: "databank:or",
            conditionA: conditionA,
            conditionB: conditionB
        }
    }


    this.andCondition = function(conditionA, conditionB){
        return {
            type: "databank:and",
            conditionA: conditionA,
            conditionB: conditionB
        }
    }


    this.notCondition = function(condition){
        return {
            type: "databank:not",
            condition: condition
        }
    }


    this.itemType = function(hidden_as, original, text_component){

        if (text_component == null){
            return {
                "type": "databank:item",
                "hidden_as": hidden_as,
                "original": original
            }
        } else {
            return {
                "type": "databank:item",
                "hidden_as": hidden_as,
                "original": original,
                "name_override": text_component
            }
        }
    }


    this.blockType = function(hidden_as, original, text_component){

        if (text_component == null){
            return {
                "type": "databank:block",
                "hidden_as": hidden_as,
                "original": original
            }
        } else {
            return {
                "type": "databank:block",
                "hidden_as": hidden_as,
                "original": original,
                "name_override": text_component
            }
        }
    }


    this.hiding = function(condition, type){

        this.getAsMap = function(){

            return {
                condition: condition,
                type: type
            }
        }

        this.location = "modpack:databank/hidden/" + type.type.replace("databank:", "") + "s/" + type.original.replace(":", "/")

        this.id = function(id){
            this.location = id
            return this
        }

        this.generate = function(){

            this.event.json(this.location, this.getAsMap())
        }

        this.printMap = function(){
            console.log(this.getAsMap())
            return this
        }

        return this
    }

    return this
}