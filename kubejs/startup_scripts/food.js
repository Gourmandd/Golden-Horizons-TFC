// ---------------------------------------- //
// Registers various food items and fluids  //
// ---------------------------------------- //

StartupEvents.registry("item", event =>{

    event.create("nettles").displayName("Nettles").food(0,0)

    event.create("halloumi").displayName("Halloumi").food(0,0)
    event.create("fried_halloumi").displayName("Fried Halloumi").food(0,0)

    event.create("mozzarella").displayName("Mozzarella").food(0,0)

    event.create("soft_chhurpi").displayName("Soft Chhurpi").food(0,0)
    event.create("hard_chhurpi").displayName("Hard Chhurpi").food(0,0)

    event.create("food/amaranth_flour").displayName("Amaranth Flour").food(0,0)
})