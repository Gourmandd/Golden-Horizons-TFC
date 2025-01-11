TFCEvents.data(event =>{

    event.climateRange(climate => {
        climate.maxHydration(70)
        climate.minHydration(10)
        climate.minTemperature(-3)
        climate.maxTemperature(27)
        climate.temperatureWiggle(3)
    }, 'kubejs:nettles_bush')

    event.climateRange(climate => {
        climate.maxHydration(30)
        climate.minHydration(30)
        climate.minTemperature(25)
        climate.maxTemperature(40)
        climate.temperatureWiggle(3)
    }, 'kubejs:plant/zanberry_bush')

    event.climateRange(climate => {
        climate.maxHydration(30)
        climate.minHydration(30)
        climate.minTemperature(25)
        climate.maxTemperature(40)
        climate.temperatureWiggle(3)
    }, 'kubejs:plant/blue_berry_bush')


    event.climateRange(climate => {
        climate.maxHydration(100)
        climate.minHydration(90)
        climate.minTemperature(25)
        climate.maxTemperature(40)
        climate.temperatureWiggle(3)
    }, 'kubejs:plant/wynd_oats')

})
