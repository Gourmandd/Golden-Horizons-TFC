TFCEvents.data(event => {

    event.climateRange(climate => {
        climate.minHydration(5)
        climate.maxHydration(60)
        climate.hydrationWiggle(3)

        climate.minTemperature(-10)
        climate.maxTemperature(6)
        climate.temperatureWiggle(2)
    }, "kubejs:plant/aloe_bush")


    event.climateRange(climate => {
        climate.minHydration(10)
        climate.maxHydration(40)
        climate.hydrationWiggle(3)

        climate.minTemperature(-1)
        climate.maxTemperature(6)
        climate.temperatureWiggle(2)
    }, "kubejs:plant/sawblade_holly_bush")
})

BlockEvents.rightClicked(event => {
    if (event.item == "spectrum:sawblade_holly_berry" || event.item == "spectrum:aloe_leaf"){
        event.block.set("minecraft:air")
        event.cancel()
    }
})