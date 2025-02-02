StartupEvents.registry("item", event =>{
    event.create("nettles").displayName("Nettles").food(food => {food.hunger(0)})

    event.create("halloumi").displayName("Halloumi").food(food => {food.hunger(0)})
    event.create("fried_halloumi").displayName("Fried Halloumi").food(food => {food.hunger(0)})

    event.create("mozzarella").displayName("Mozzarella").food(food => {food.hunger(0)})

    event.create("soft_chhurpi").displayName("Soft Chhurpi").food(food => {food.hunger(0)})
    event.create("hard_chhurpi").displayName("Hard Chhurpi").food(food => {food.hunger(0)})

    event.create("food/tomatillo").food(food => {food.hunger(0)})
    event.create("food/ginger").food(food => {food.hunger(0)})


    
    event.create("food/ginger_mash").food(food => {food.hunger(0)})
    event.create("food/dried_ginger").food(food => {food.hunger(0)})
    event.create("food/ground_ginger").food(food => {food.hunger(0)})

    event.create("food/garlic_mash").food(food => {food.hunger(0)})
    event.create("food/dried_garlic").food(food => {food.hunger(0)})
    event.create("food/ground_garlic").food(food => {food.hunger(0)})



    event.create("food/gingerbread_dough").food(food => {food.hunger(0)})

    //Aether has a gingerbread Man
    event.create("food/gingerbread_woman").food(food => {food.hunger(0)})
    event.create("food/gingerbread_star").food(food => {food.hunger(0)})
    event.create("food/gingerbread_tree").food(food => {food.hunger(0)})
    event.create("food/gingerbread_creeper").food(food => {food.hunger(0)})

    event.create("food/raw_gingerbread_man").food(food => {food.hunger(0)})
    event.create("food/raw_gingerbread_woman").food(food => {food.hunger(0)})
    event.create("food/raw_gingerbread_star").food(food => {food.hunger(0)})
    event.create("food/raw_gingerbread_tree").food(food => {food.hunger(0)})
    event.create("food/raw_gingerbread_creeper").food(food => {food.hunger(0)})



    event.create("food/ginger_tea").food(food => {food.hunger(0).effect("aether:remedy",20 ,1 ,1)})

    event.create("food/salsa_verde").food(food => {food.hunger(0)})
/*
    event.create("food/sun_dried_tomatoes").food(food => {food.hunger(0)})
    event.create("food/raisin").food(food => {food.hunger(0)})
    event.create("food/jerky").food(food => {food.hunger(0)})
    event.create("food/stock_fish").food(food => {food.hunger(0)})
    event.create("food/dried_mushroom").food(food => {food.hunger(0)})

    event.create("food/raisin_cookie").food(food => {food.hunger(0)})
    
    event.create("food/pemmican").food(food => {food.hunger(0)})
    event.create("food/trail_mix").food(food => {food.hunger(0)})


    event.create("food/sauerkraut").food(food => {food.hunger(0)})
    event.create("food/pickled_tomatoes").food(food => {food.hunger(0)})
*/
    //event.create("food/raisin_cookie").food(food => {food.hunger(0)})
    event.create("food/baked_onion").food(food => {food.hunger(0)})
    
})

StartupEvents.registry("fluid", event =>{

    event.create("brew").bucketColor(0x300C0B).thinTexture(0x300C0B).displayName("Brew").noBlock().noBucket()
    event.create("garum").bucketColor(0x321C0B).thinTexture(0x321C0B).displayName("Garum").noBlock()

})