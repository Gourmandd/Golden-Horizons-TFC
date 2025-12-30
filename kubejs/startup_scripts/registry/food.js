// ---------------------------------------- //
// Registers various food items and fluids  //
// ---------------------------------------- //

StartupEvents.registry("item", event => {

    event.create(`${id}:nettles`).displayName("Nettles").food(0, 0)

    event.create(`${id}:halloumi`).displayName("Halloumi").food(0, 0)
    event.create(`${id}:fried_halloumi`).displayName("Fried Halloumi").food(0, 0)
    event.create(`${id}:mozzarella`).displayName("Mozzarella").food(0, 0)
    event.create(`${id}:soft_chhurpi`).displayName("Soft Chhurpi").food(0, 0)
    event.create(`${id}:hard_chhurpi`).displayName("Hard Chhurpi").food(0, 0)

    event.create(`${id}:food/amaranth_flour`).displayName("Amaranth Flour").food(0, 0)
})
