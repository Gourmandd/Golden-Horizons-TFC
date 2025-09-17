// ---------------------------------------- //
// Registers various food items and fluids  //
// ---------------------------------------- //

StartupEvents.registry("item", event =>{

    event.create("nettles").displayName("Nettles")/* getting 1.21 running.food(food => {food.hunger(0)})*/

    event.create("halloumi").displayName("Halloumi")/* getting 1.21 running.food(food => {food.hunger(0)})*/
    event.create("fried_halloumi").displayName("Fried Halloumi")/* getting 1.21 running.food(food => {food.hunger(0)})*/

    event.create("mozzarella").displayName("Mozzarella")/* getting 1.21 running.food(food => {food.hunger(0)})*/

    event.create("soft_chhurpi").displayName("Soft Chhurpi")/* getting 1.21 running.food(food => {food.hunger(0)})*/
    event.create("hard_chhurpi").displayName("Hard Chhurpi")/* getting 1.21 running.food(food => {food.hunger(0)})*/

    event.create("food/amaranth_flour").displayName("Amaranth Flour")/* getting 1.21 running.food(food => {food.hunger(0)})*/
})

/*
StartupEvents.registry("fluid", event =>{

    event.create("boiled_water")
        .bucketColor(0xB2E0FE)
        .thinTexture(0xB2E0FE)
        .displayName("Boiled Water")
        .noBlock()
    
    event.create("brew")
        .bucketColor(0x300C0B)
        .thinTexture(0x300C0B)
        .displayName("Brew")
        .noBlock().noBucket()
    
    event.create("garum")
        .bucketColor(0x321C0B)
        .thinTexture(0x321C0B)
        .displayName("Garum")
        .noBlock()
})*/