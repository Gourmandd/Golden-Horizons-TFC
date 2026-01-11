//priority: 100

function getIngredient(ingredient) {
    if (Array.isArray(ingredient)) {
        let resultArray = []

        ingredient.forEach(entry => {
            if (entry[0] == "#") {
                resultArray.push({
                    "tag": entry.replace("#", "")
                })
            } else {
                resultArray.push({
                    "item": entry.replace("#", "")
                })
            }
        })
        return resultArray

    } else {
        if (ingredient[0] == "#") {
            return {
                "tag": ingredient.replace("#", "")
            }
        } else {
            return {
                "item": ingredient.replace("#", "")
            }
        }
    }
}

const terraFirmaCraftData = function () {

    this.HEAT_CAPACITY = {
        DOUBLE_SHEET: 11.428572,
        SHEET: 5.714286,
        DOUBLE_INGOT: 5.714286,
        INGOT: 2.857143,
        ROD: 1.4285715,
        ANVIL: 40.0,
    }

    this.itemHeat = function (ingredient, temperature, heat_capacity) {

        if (Array.isArray(ingredient)) {
            this.location = `${mod_id}:tfc/item_heat/${ingredient[0].replace(":", "/").replace("#", "/")}`
        } else {
            this.location = `${mod_id}:tfc/item_heat/${ingredient.replace(":", "/").replace("#", "/")}`
        }
        this.is_metal

        this.id = function (id) {
            this.location = id
            return this
        }

        this.setMetal = function (bool) {
            this.is_metal = bool
            return this
        }

        this.getAsMap = function () {
            if (this.is_metal) {
                return {
                    forging_temperature: (temperature * 0.6),
                    welding_temperature: (temperature * 0.8),
                    heat_capacity: heat_capacity,
                    ingredient: getIngredient(ingredient)
                }
            } else {
                return {
                    heat_capacity: heat_capacity,
                    ingredient: getIngredient(ingredient)
                }
            }
        }

        this.generate = function () {
            this.event.json(this.location, this.getAsMap())
        }

        this.printMap = function () {
            console.log(this.getAsMap())
            return this
        }

        return this
    }

    this.fluidHeat = function (fluidLocation, temperature, specific_heat_capacity) {

        this.location = `${mod_id}:tfc/fluid_heat/${fluidLocation.replace(":", "/")}`
        this.is_metal

        this.id = function (id) {
            this.location = id
            return this
        }


        this.getAsMap = function () {
            return {
                fluid: fluidLocation,
                melt_temperature: temperature,
                specific_heat_capacity: specific_heat_capacity
            }
        }

        this.generate = function () {
            this.event.json(this.location, this.getAsMap())
        }

        this.printMap = function () {
            console.log(this.getAsMap())
            return this
        }

        return this
    }

    this.support = function (itemLocation, down, horizontal, up) {

        this.location = `${mod_id}:tfc/support/${itemLocation.replace(":", "/")}`

        this.id = function (id) {
            this.location = id
            return this
        }


        this.getAsMap = function () {
            return {
                Ingredient: itemLocation,
                support_down: down,
                support_horizontal: horizontal,
                support_up: up
            }
        }

        this.generate = function () {
            this.event.json(this.location, this.getAsMap())
        }

        this.printMap = function () {
            console.log(this.getAsMap())
            return this
        }

        return this
    }

    return this
}
