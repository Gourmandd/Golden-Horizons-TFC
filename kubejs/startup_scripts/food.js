StartupEvents.registry("item", event =>{
    event.create("nettles").displayName("Nettles").food(food => {food.hunger(0)})

    event.create("halloumi").displayName("Halloumi").food(food => {food.hunger(0)})
    event.create("fried_halloumi").displayName("Fried Halloumi").food(food => {food.hunger(0)})

    event.create("mozzarella").displayName("Mozzarella").food(food => {food.hunger(0)})

    event.create("soft_chhurpi").displayName("Soft Chhurpi").food(food => {food.hunger(0)})
    event.create("hard_chhurpi").displayName("Hard Chhurpi").food(food => {food.hunger(0)})

})

StartupEvents.registry("fluid", event =>{

    event.create("boiled_water").bucketColor(0xB2E0FE).thinTexture(0xB2E0FE).displayName("Boiled Water").noBlock()
    event.create("brew").bucketColor(0x300C0B).thinTexture(0x300C0B).displayName("Brew").noBlock().noBucket()
    event.create("garum").bucketColor(0x321C0B).thinTexture(0x321C0B).displayName("Garum").noBlock()
})