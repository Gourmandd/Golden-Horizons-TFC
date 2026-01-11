//priority: 100

const terraFirmaCraftRecipes = function () {

    this.MODIFIERS = {
        DAMAGE_CRAFTING_REMAINDER: {
            "type": "tfc:damage_crafting_remainder"
        },
    }

    this.ANVIL_TIER = {
        STONE: -1,
        COPPER: 0,
        BRONZE: 1,
        IRON: 2,
        STEEL: 3,
        BLACK_STEEL: 4,
        COLOURED_STEEL: 5,
    }

    this.TFCfluidStack = function (inputFluid) {
        return {
            fluid: inputFluid.fluid,
            amount: inputFluid.amount,
        }
    }

    this.alloyMetalContent = function (metalFluid, max, min) {
        return {
            "fluid": metalFluid,
            "max": max,
            "min": min
        }
    }

    this.alloy = function (output, input) {

        this.location = null

        this.id = function (id) {
            this.location = id
            return this
        }

        this.generate = function () {
            generateRecipe(this.event, this.getAsMap(), this.location)
        }

        this.getAsMap = function () {
            return {
                type: "tfc:alloy",
                contents: input,
                result: output
            }
        }

        this.printMap = function () {
            console.log(this.getAsMap())
            return this
        }

        return this
    }

    this.anvil = function (output, input, rules) {

        this.location = null
        this.tier = 1

        this.id = function (id) {
            this.location = id
            return this
        }

        this.setTier = function (int) {
            this.tier = int
            return this
        }

        this.generate = function () {
            generateRecipe(this.event, this.getAsMap(), this.location)
        }

        this.getAsMap = function () {
            return {
                type: "tfc:anvil",
                ingredient: input,
                result: output,
                rules: rules,
                tier: this.tier
            }
        }

        this.printMap = function () {
            console.log(this.getAsMap())
            return this
        }

        return this
    }

    this.barrelSealed = function (outputItem, outputFluid, inputItem, inputFluid) {

        this.location = null
        this.duration = 72000

        this.setDuration = function (ticks) {
            this.duration = ticks
            return this
        }

        this.id = function (id) {
            this.location = id
            return this
        }

        this.generate = function () {
            generateRecipe(this.event, this.getAsMap(), this.location)
        }

        this.getAsMap = function () {

            let json = {
                type: "tfc:barrel_sealed",
                duration: this.duration
            }

            if (inputItem != null) {
                json.input_item = inputItem
            }

            if (inputFluid != null) {
                json.input_fluid = TFCfluidStack(inputFluid)
            }

            if (outputItem != null) {
                json.output_item = outputItem
            }

            if (outputFluid != null) {
                json.output_fluid = outputFluid
            }
            return json
        }

        this.printMap = function () {
            console.log(this.getAsMap())
            return this
        }

        return this
    }

    this.barrelInstant = function (outputItem, outputFluid, inputItem, inputFluid) {

        this.location = null

        this.id = function (id) {
            this.location = id
            return this
        }

        this.generate = function () {
            generateRecipe(this.event, this.getAsMap(), this.location)
        }

        this.getAsMap = function () {

            let json = {
                type: "tfc:barrel_instant",
            }

            if (inputItem != null) {
                json.input_item = inputItem
            }

            if (inputFluid != null) {
                json.input_fluid = TFCfluidStack(inputFluid)
            }

            if (outputItem != null) {
                json.output_item = outputItem
            }

            if (outputFluid != null) {
                json.output_fluid = outputFluid
            }
            return json
        }

        this.printMap = function () {
            console.log(this.getAsMap())
            return this
        }

        return this
    }

    this.casting = function (output, inputFluid, moldItem) {

        this.location = null
        this.break_chance = 0.1

        this.id = function (id) {
            this.location = id
            return this
        }

        this.breakChance = function (chance) {
            this.break_chance = chance
            return this
        }

        this.generate = function () {
            generateRecipe(this.event, this.getAsMap(), this.location)
        }

        this.getAsMap = function () {

            let json = {
                type: "tfc:casting",
                fluid: TFCfluidStack(inputFluid),
                mold: moldItem,
                result: output
            }

            if (this.break_chance != 0.1) {
                json.break_chance = this.break_chance
            }

            return json
        }

        this.printMap = function () {
            console.log(this.getAsMap())
            return this
        }

        return this
    }

    this.collapse = function (output, input) {

        this.location = null

        this.id = function (id) {
            this.location = id
            return this
        }

        this.generate = function () {
            generateRecipe(this.event, this.getAsMap(), this.location)
        }

        this.getAsMap = function () {
            return {
                type: "tfc:collapse",
                ingredient: getIOArray(input),
                result: output
            }
        }

        this.printMap = function () {
            console.log(this.getAsMap())
            return this
        }

        return this
    }

    this.landslide = function (output, input) {

        this.location = null

        this.id = function (id) {
            this.location = id
            return this
        }

        this.generate = function () {
            generateRecipe(this.event, this.getAsMap(), this.location)
        }

        this.getAsMap = function () {
            return {
                type: "tfc:landslide",
                ingredient: getIOArray(input),
                result: output
            }
        }

        this.printMap = function () {
            console.log(this.getAsMap())
            return this
        }

        return this
    }

    this.heating = function (outputItem, outputFluid, input, temperature) {

        this.location = null
        this.useDurability = false

        this.id = function (id) {
            this.location = id
            return this
        }

        this.useDurability = function () {
            this.useDurability = true
            return this
        }

        this.generate = function () {
            generateRecipe(this.event, this.getAsMap(), this.location)
        }

        this.getAsMap = function () {

            let json = {
                type: "tfc:heating",
                ingredient: input,
                temperature: temperature
            }

            if (outputItem != null) {
                json.result_item = outputItem
            }

            if (outputFluid != null) {
                json.result_fluid = outputFluid
            }

            if (this.useDurability == true) {
                json.use_durability = true
            }

            return json
        }

        this.printMap = function () {
            console.log(this.getAsMap())
            return this
        }

        return this
    }

    this.knapping = function (output, knappingType, pattern) {

        this.location = null
        this.outside_slot_required = false

        this.id = function (id) {
            this.location = id
            return this
        }

        this.outsideSlotRequired = function (bool) {
            this.outside_slot_required = bool // 1.21.1 TFC has no datapack docs, Im not sure what this does, it may have been refactored.
            return this
        }

        this.generate = function () {
            generateRecipe(this.event, this.getAsMap(), this.location)
        }

        this.getAsMap = function () {

            let json = {
                type: "tfc:knapping",
                knapping_type: knappingType,
                pattern: pattern,
                result: output
            }

            if (this.outside_slot_required == true) {
                json.outside_slot_required = true
            }

            return json
        }

        this.printMap = function () {
            console.log(this.getAsMap())
            return this
        }

        return this
    }

    this.advancedShapeless = function (output, inputsArray, primaryInput) {

        this.location = null
        this.modifiers = []

        this.id = function (id) {
            this.location = id
            return this
        }

        this.addModifier = function (modifier) {
            this.modifiers.push(modifier)
            return this
        }

        this.generate = function () {
            generateRecipe(this.event, this.getAsMap(), this.location)
        }

        this.getAsMap = function () {

            inputsArray.push(primaryInput)

            return {
                type: "tfc:advanced_shapeless_crafting",
                ingredients: inputsArray,
                primary_ingredient: primaryInput,
                remainder: {
                    modifiers: this.modifiers
                },
                result: output
            }
        }

        this.printMap = function () {
            console.log(this.getAsMap())
            return this
        }

        return this
    }

    this.quern = function (output, input) {

        this.location = null

        this.id = function (id) {
            this.location = id
            return this
        }

        this.generate = function () {
            generateRecipe(this.event, this.getAsMap(), this.location)
        }

        this.getAsMap = function () {
            return {
                type: "tfc:quern",
                ingredient: input,
                result: output
            }
        }

        this.printMap = function () {
            console.log(this.getAsMap())
            return this
        }

        return this
    }

    this.welding = function (output, firstInput, secondInput) {

        this.location = null
        this.tier = 0

        this.id = function (id) {
            this.location = id
            return this
        }

        this.setTier = function (int) {
            this.tier = int
            return this
        }

        this.generate = function () {
            generateRecipe(this.event, this.getAsMap(), this.location)
        }

        this.getAsMap = function () {
            return {
                type: "tfc:welding",
                first_input: firstInput,
                second_input: secondInput,
                result: output,
                tier: this.tier
            }
        }

        this.printMap = function () {
            console.log(this.getAsMap())
            return this
        }

        return this
    }

    return this
}
