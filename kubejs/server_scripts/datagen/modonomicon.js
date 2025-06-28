
/**
 * @param condition (dict) the type of condition to display the entry, 
 *  @param show_title_seperator (bool) 
 *  @param text (str) lang tag of page's text
 *  @param title (str) lang tag of page's title
 *  @param use_markdown_in_title (bool)
 */
function TextPage(condition, show_title_seperator, text, title, use_markdown_in_title){
    return {
        "type": "modonomicon:text",
        "condition": condition,
        "show_title_seperator": show_title_seperator,
        "text": text,
        "title": title,
        "use_markdown_in_title": use_markdown_in_title
    }
}

/**
 * @param multiblock_name (str) lang tag of the multiblock's title
 * @param multiblock_id (str) id of the multiblock (see Modonomicon doc) 
 * @param text (str) lang tag of page's text
 */
function MultiblockPage(multiblock_name, multiblock_id, text){
    return  {
        "type": "modonomicon:multiblock",
        "multiblock_name": multiblock_name,
        "multiblock_id": multiblock_id,
        "text": text
    }
}

/**
 * 
 * @param border (bool) whether a border is around the image
 * @param images (array) array of texture ids.
 * @param text (str) lang tag of page's text
 * @param title (str) lang tag of page's title
 */
function ImagePage(border, images, text, title){
    let imageArray = []
    images.forEach(image =>{
        imageArray.push(image)
    })

    return {
        "type": "modonomicon:image",
        "border": border,
        "images": imageArray,
        "text": text,
        "title": title
    }
}

/**
 * @param default_rotation (number) rotation in degrees
 * @param entity_id (str) registry id of entity
 * @param name (str) lang tag as the title above the entity
 * @param offset (number) offset
 * @param rotate (bool) whether the enitity rotates in the window
 * @param scale (number) the scale of the entity
 * @param text (str) lang tag of page's text
 */
function EntityPage(default_rotation, entity_id, name, offset, rotate, scale, text){
    return {
        "type": "modonomicon:entity",
        "anchor": "",
        "default_rotation": default_rotation,
        "entity_id": entity_id,
        "name": name,
        "offset": offset,
        "rotate": rotate,
        "scale": scale,
        "text": text
    }
}

/**
 * 
 * @param item (dict) defined similarly to the result in recipes eg, { "item": "minecraft:command_block"}
 * @param text (str) lang tag of the page's text
 * @param title (str) lang tag of the page's title
 */
function SpotlightPage(item, text, title){
    return  {
        "type": "modonomicon:spotlight",
        "anchor": "",
        "item": item,
        "text": text,
        "title": title
    }
}

function EmptyPage(){
    return {
        "type": "modonomicon:empty",
        "anchor": ""
    }
}

/**
 *  @param recipe_id_1 (str) recipe id of the first recipe @param recipe_id_2 (str) recipe id of the second recipe @param title1 (str) lang tag of the page's text
 */
function CraftingRecipePage(recipe_id_1, recipe_id_2, title1, title2, text){
    return  {
      "type": "modonomicon:crafting_recipe",
      "anchor": "",
      "recipe_id_1": recipe_id_1,
      "recipe_id_2": recipe_id_2,
      "text": text,
      "title1": title1,
      "title2": title2
    }
}

/**
 *  @param recipe_id_1 (str) recipe id of the first recipe @param recipe_id_2 (str) recipe id of the second recipe @param title1 (str) lang tag of the page's text
 */
function SmeltingRecipePage(recipe_id_1, recipe_id_2, title1, title2, text){
    return  {
      "type": "modonomicon:smelting_recipe",
      "anchor": "",
      "recipe_id_1": recipe_id_1,
      "recipe_id_2": recipe_id_2,
      "text": text,
      "title1": title1,
      "title2": title2
    }
}

/**
 *  @param recipe_id_1 (str) recipe id of the first recipe @param recipe_id_2 (str) recipe id of the second recipe @param title1 (str) lang tag of the page's text
 */
function SmokingRecipePage(recipe_id_1, recipe_id_2, title1, title2, text){
    return  {
      "type": "modonomicon:smoking_recipe",
      "anchor": "",
      "recipe_id_1": recipe_id_1,
      "recipe_id_2": recipe_id_2,
      "text": text,
      "title1": title1,
      "title2": title2
    }
}

/**
 *  @param recipe_id_1 (str) recipe id of the first recipe @param recipe_id_2 (str) recipe id of the second recipe @param title1 (str) lang tag of the page's text
 */
function BlastingRecipePage(recipe_id_1, recipe_id_2, title1, title2, text){
    return  {
      "type": "modonomicon:blasting_recipe",
      "anchor": "",
      "recipe_id_1": recipe_id_1,
      "recipe_id_2": recipe_id_2,
      "text": text,
      "title1": title1,
      "title2": title2
    }
}

/**
 *  @param recipe_id_1 (str) recipe id of the first recipe @param recipe_id_2 (str) recipe id of the second recipe @param title1 (str) lang tag of the page's text
 */
function CampfireCookingRecipePage(recipe_id_1, recipe_id_2, title1, title2, text){
    return  {
      "type": "modonomicon:campfire_cooking_recipe",
      "anchor": "",
      "recipe_id_1": recipe_id_1,
      "recipe_id_2": recipe_id_2,
      "text": text,
      "title1": title1,
      "title2": title2
    }
}

/**
 *  @param recipe_id_1 (str) recipe id of the first recipe @param recipe_id_2 (str) recipe id of the second recipe @param title1 (str) lang tag of the page's text
 */
function StonecuttingRecipePage(recipe_id_1, recipe_id_2, title1, title2, text){
    return  {
      "type": "modonomicon:stonecutting_recipe",
      "anchor": "",
      "recipe_id_1": recipe_id_1,
      "recipe_id_2": recipe_id_2,
      "text": text,
      "title1": title1,
      "title2": title2
    }
}

/**
 *  @param recipe_id_1 (str) recipe id of the first recipe @param recipe_id_2 (str) recipe id of the second recipe @param title1 (str) lang tag of the page's text
 */
function SmithingRecipePage(recipe_id_1, recipe_id_2, title1, title2, text){
    return  {
      "type": "modonomicon:smithing_recipe",
      "anchor": "",
      "recipe_id_1": recipe_id_1,
      "recipe_id_2": recipe_id_2,
      "text": text,
      "title1": title1,
      "title2": title2
    }
}

/**
 * @param {string} path data path to create the entry in, eg "kubejs/data/[namespace]/modonomicon/books/[bookname]/entries/[category]/[entry].json"
 * @param {number} background_u_index 
 * @param {number} background_v_index 
 * @param {string} category category id of the category this entry is in
 * @param {string} description lang tag of the page's description
 * @param {boolean} hide_while_locked 
 * @param {string} icon texture id of the entry's icon
 * @param {string} name lang tag of the page's name
 * @param {Array} pages array of pages (see Modonomicon doc)
 * @param {boolean} show_when_any_parent_unlocked 
 * @param {Array} parentsList list of parents
 * @param {number} x 
 * @param {number} y 
 */
function CreateEntry(
        path,
        background_u_index, 
        background_v_index, 
        category,
        description,
        hide_while_locked,
        icon,
        name,
        pages,
        show_when_any_parent_unlocked,
        parentsList,
        x,
        y    
    ){
    
    let parents = []

    if (parentsList == []){
        console.log(parentsList, "_hello")
        parents = []
    } else {
        console.log(parentsList, "_hello")
        parentsList.forEach(parent =>{
            parents.push(
                {
                    "entry": parent
                }
            )
        })
    }
    console.log(parents , "_hello")
    JsonIO.write(path, {
        "background_u_index": background_u_index,
        "background_v_index": background_v_index,
        "category": category,
        "description": description,
        "hide_while_locked": hide_while_locked,
        "icon": {
            "height": 16,
            "texture": icon,
            "width": 16
        },
        "name": name,
        "pages": pages,
        "show_when_any_parent_unlocked": show_when_any_parent_unlocked,
        "parents": parents,
        "x": x,
        "y": y
        }    
    ) 
}

const BOOK_PATH = "kubejs/data/modpack/modonomicon/books/guide"
const ENTRY_PATH = "kubejs/data/modpack/modonomicon/books/guide/entries"
CreateEntry(ENTRY_PATH + "/general/content_mods.json", 0, 0, 
    "modpack:general", 
    "book.modpack.guide.content_mods.description",
    false,
    "minecraft:textures/item/nether_star.png",
    "book.modpack.guide.general.content_mods.name",
    [   
        TextPage(
            {"type": "modonomicon:none"}, 
            true, 
            "book.modpack.guide.general.content_mods.page1.text", 
            "book.modpack.guide.general.content_mods.page1.title", 
            false
        ),
        ImagePage(
            true, 
            ["tfc:textures/gui/book/biomes/rolling_hills_with_river.png"], 
            "book.modpack.guide.general.content_mods.page2.text", 
            "book.modpack.guide.general.content_mods.page2.title"
        ),
        ImagePage(
            true, 
            ["tfc:textures/gui/book/biomes/rolling_hills_with_river.png"], 
            "book.modpack.guide.general.content_mods.page3.text", 
            "book.modpack.guide.general.content_mods.page3.title"
        ),
        ImagePage(
            true, 
            ["tfc:textures/gui/book/biomes/rolling_hills_with_river.png"], 
            "book.modpack.guide.general.content_mods.page4.text", 
            "book.modpack.guide.general.content_mods.page4.title"
        ),
        ImagePage(
            true, 
            ["tfc:textures/gui/book/biomes/rolling_hills_with_river.png"], 
            "book.modpack.guide.general.content_mods.page5.text", 
            "book.modpack.guide.general.content_mods.page5.title"
        ),
        ImagePage(
            true, 
            ["tfc:textures/gui/book/biomes/rolling_hills_with_river.png"], 
            "book.modpack.guide.general.content_mods.page6.text", 
            "book.modpack.guide.general.content_mods.page6.title"
        )
    ],
    true,
    ["modpack:general/intro"],
    3,
    0
)
/*
let page = TextPage({"type": "modonomicon:none"}, true, "book.modpack.guide.general.content_mods.page1.text", "book.modpack.guide.general.content_mods.page1.title", false)
console.log(page);
*/
