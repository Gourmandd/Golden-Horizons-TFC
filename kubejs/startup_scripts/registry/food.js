// ---------------------------------------- //
// Registers various food items and fluids  //
// ---------------------------------------- //

StartupEvents.registry("item", event => {

    event.create(`${id}:nettles`).displayName("Nettles").food(0, 0)

    event.create(`${id}:halloumi`).displayName("Halloumi").food(0, 0)
    event.create(`${id}:fried_halloumi`).displayName("Fried Halloumi").food(0, 0)
    event.create(`${id}:food/brie`).displayName("Brie").food(0, 0)
    event.create(`${id}:soft_chhurpi`).displayName("Soft Chhurpi").food(0, 0)
    event.create(`${id}:hard_chhurpi`).displayName("Hard Chhurpi").food(0, 0)

    event.create(`${id}:food/raw_pasta_dough`).displayName("Raw Pasta Dough").food(0, 0)

    event.create(`${id}:food/amaranth_flour`).displayName("Amaranth Flour").food(0, 0)

    event.create(`${id}:food/myceylon_cookie_dough`).displayName("Myceylon Cookie Dough").food(0, 0)
    event.create(`${id}:food/sweet_berry_cookie_dough`).displayName("Sweet Berry Cookie Dough").food(0, 0)
    event.create(`${id}:food/honey_cookie_dough`).displayName("Honey Cookie Dough").food(0, 0)
    event.create(`${id}:food/syrup_cookie_dough`).displayName("Syrup Cookie Dough").food(0, 0)
    event.create(`${id}:food/cherry_blossom_cookie_dough`).displayName("Cherry Blossom Cookie Dough").food(0, 0)
    event.create(`${id}:food/coffee_cookie_dough`).displayName("Coffee Cookie Dough").food(0, 0)

    event.create(`${id}:food/honey_cake_base`).displayName("Honey Cake Base").food(0, 0)
    event.create(`${id}:food/chocolate_cake_base`).displayName("Chocolate Cake Base").food(0, 0)
    event.create(`${id}:food/cake_base`).displayName("Cake Base").food(0, 0)
})
