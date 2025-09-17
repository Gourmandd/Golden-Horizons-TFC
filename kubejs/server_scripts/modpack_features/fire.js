// ------------------------------------------------------- //
// Script to generate dict for the custom burning mechanic //
// ------------------------------------------------------- //

/*
ServerEvents.tags("item", event => {

  console.log(global.BURNED_BLOCKS_DICT)
  
  Object.keys(global.BURNED_BLOCK_TAGS_DICT).forEach(tag => {
    
    Ingredient.of(tag).getItemIds().forEach(item => {

      global.BURNED_BLOCKS_DICT[item] = global.BURNED_BLOCK_TAGS_DICT[tag]
      console.log(item + " " + global.BURNED_BLOCK_TAGS_DICT[tag])
    })
  })
})
*/