ItemEvents.modification(event => {

    event.modify("aether:white_apple", item => {
      item.foodProperties = food => {
        food.removeEffect("aether:remedy")
        food.effect("minecraft:poison", 100, 0, 1)
      }
    })

  })