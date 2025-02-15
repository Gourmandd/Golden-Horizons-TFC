try {
/*
TFCEvents.registerClimateModel(event => {
    event.registerClimateModel("kubejs:aether", model => {
        model.setCurrentTemperatureCalculation((level, pos, calendarTicks, daysInMonth) => {
            return pos.get * -0.2
        })
        model.setAverageTemperatureCalculation((level, pos) => {
            return pos.get * -0.2
        })
        model.setAverageRainfallCalculation((level, pos) => {
            return 100
        })
        model.setAirFog((level, pos, calendarTicks) => {
            return 0.25
        })
        model.setWaterFog((level, pos, calendarTicks) => {
            return 0.25
        })
        model.setWindVector((block, calendarTicks) => {
            return event.newVec2(1, 1)
        })
    })
})
*/



    console.info("loaded aether climate model")
    
    } catch(e) {
        console.log(e)
    }
    