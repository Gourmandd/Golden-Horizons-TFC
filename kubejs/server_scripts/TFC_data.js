TFCEvents.data(event =>{

    event.climateRange(climate => {
        climate.maxHydration(70)
        climate.minHydration(10)
        climate.minTemperature(-3)
        climate.maxTemperature(27)
        climate.temperatureWiggle(3)
    }, 'kubejs:nettles_bush')

    event.climateRange(climate => {
        climate.maxHydration(70)
        climate.minHydration(10)
        climate.minTemperature(-60)
        climate.maxTemperature(-20)
        climate.temperatureWiggle(3)
    }, 'kubejs:peppermint_bush')

    event.climateRange(climate => {
        climate.maxHydration(70)
        climate.minHydration(10)
        climate.minTemperature(-20)
        climate.maxTemperature(-1)
        climate.temperatureWiggle(3)
    }, 'kubejs:zanberry_bush')

    event.climateRange(climate => {
        climate.maxHydration(70)
        climate.minHydration(10)
        climate.minTemperature(25)
        climate.maxTemperature(40)
        climate.temperatureWiggle(3)
    }, 'kubejs:blue_berry_bush')

})
