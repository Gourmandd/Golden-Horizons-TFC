// ---------------------------------------------- //
// Adding potion and other effects to eating food //
// ---------------------------------------------- //

ItemEvents.foodEaten("spectrum:sawblade_holly_berry", event =>{

    // The reasoning for this is that in one of the cookbooks they are mentioned to be poisonous
    // lore wise they might only be poisonous to the guys from the Deeper Down.
    event.player.potionEffects.add("spectrum:deadly_poison", 60, 0, true, true)
})