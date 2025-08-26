//priority: 10

// ----------------------------------------- //
// Datagen for creating modonomicon entries  //
// ----------------------------------------- //


// TODO
// - A way to create category
// - A way to generate book.json

const TEST_LANG = "modpack.test"
const BOOK_NAMESPACE = "modpack"
const BOOKNAME = "guide"
const DO_DATAGEN = true 
// enable this while developing. Recommended to delete all entry json and regenerate them because if file names change, 
// old entries arnt deleted automatically.

global.createEmptyPage = function(){
    this.type = "modonomicon:empty"
    this.anchor = ""

    /**
     * @param {string} newAnchor 
     */
    this.setAnchor = function(newAnchor){
        this.anchor = newAnchor
        return this
    }

    this.generate = function(){
        return {
            "type": this.type,
            "anchor": this.anchor
        }
    }
}

/**
 * @param {string} text Lang tag
 */
global.createTextPage = function(text){

    this.type = "modonomicon:text"
    this.anchor = ""
    this.title = TEST_LANG
    this.use_markdown_title = false
    this.show_title_separator = true
    this.text = text

    /**
     * @param {string} anchor 
     */
    this.setAnchor = function(anchor){
        this.anchor = anchor
        return this
    }

    /**
     * @param {boolean} bool 
     */
    this.useMarkdownTitle = function(bool){
        this.use_markdown_title = bool
        return this
    }

    /**
     * @param {boolean} bool 
     */
    this.showTitleSeperator = function(bool){
        this.show_title_separator = bool
        return this
    }

    /**
     * @param {string} title Lang tag
     */
    this.setTitle = function(title){
        this.title = title
        return this
    }

    this.generate = function(){
        return {
            "type": this.type,
            "anchor": this.anchor,
            "use_markdown_title": this.use_markdown_title,
            "show_title_separator": this.show_title_separator,
            "text": this.text,
            "title": this.title

        }
    }
}

/**
 * @param {string} multiblock_id Modonomicon multiblock ID (see docs)
 */
global.createMultiblockPage = function(multiblock_id){

    this.type = "modonomicon:multiblock"
    this.anchor = ""
    this.multiblock_name = TEST_LANG
    this.multiblock_id = multiblock_id
    this.text = TEST_LANG
    this.show_visualize_button = true

    /**
     * @param {string} anchor 
     */
    this.setAnchor = function(anchor){
        this.anchor = anchor
        return this
    }

    /**
     * @param {string} text Lang tag
     */
    this.setText = function(text){
        this.text = text
        return this
    }

    /**
     * @param {string} name Lang tag
     */
    this.setName = function(name){
        this.multiblock_name = name
        return this
    }


    /**
     * @param {boolean} bool 
     */
    this.showVisualizeButton = function(bool){
        this.show_visualize_button = bool
        return this
    }

    this.generate = function(){
        if (DO_DATAGEN){
            return {
                "type": this.type,
                "anchor": this.anchor,
                "multiblock_name": this.multiblock_name,
                "multiblock_id": this.multiblock_id,
                "text": this.text,
                "show_visualize_button": this.show_visualize_button
            }
        }
    }
}

/**
 * @param {Array} images Array of texture resource locations, (need to end with .png for whatever reason)
 */
global.createImagePage = function(images){
    this.type = "modonomicon:image"
    this.anchor = ""
    this.title = TEST_LANG
    this.images = images
    this.use_legacy_rendering = false
    this.text = TEST_LANG
    this.border = true

    /**
     * @param {string} newAnchor 
     */
    this.setAnchor = function(anchor){
        this.anchor = anchor
        return this
    }

    /**
     * @param {string} text Lang tag
     */
    this.setText = function(text){
        this.text = text
        return this
    }

    /**
     * @param {string} title Lang tag
     */
    this.setTitle = function(title){
        this.title = title
        return this
    }

    /**
     * @param {boolean} bool 
     */
    this.useLegacyRendering = function(bool){
        this.use_legacy_rendering = bool
        return this
    }

    /**
     * @param {boolean} bool 
     */
    this.setBorder = function(bool){
        this.border = bool
        return this
    }

    this.generate = function(){
        return {
            "type": this.type,
            "anchor": this.anchor,
            "title": this.title,
            "images": this.images,
            "use_legacy_rendering": this.use_legacy_rendering,
            "text": this.text,
            "border": this.border
        }
    }
}

/**
 * @param {string} entity_id Resource ID of entity 
 */
global.createEntityPage = function(entity_id){
    this.type = "modonomicon:entity"
    this.anchor = ""
    this.name = TEST_LANG
    this.entity_id = entity_id
    this.text = TEST_LANG
    this.scale = 1.0
    this.offset = 0.0
    this.rotate = true
    this.default_rotation -45.0


    /**
     * @param {string} newAnchor 
     */
    this.setAnchor = function(anchor){
        this.anchor = anchor
        return this
    }

    /**
     * @param {string} name Lang tag
     */
    this.setName = function(name){
        this.name = name
        return this
    }

    /**
     * @param {string} text Lang tag
     */
    this.setText = function(text){
        this.text = text
        return this
    }

    /**
     * @param {number} scale
     */
    this.setScale = function(scale){
        this.scale = scale
        return this
    }

    /**
     * @param {number} offset
     */
    this.setOffset = function(offset){
        this.offset = offset
        return this
    }

    /**
     * @param {boolean} bool
     */
    this.rotate = function(bool){
        this.rotate = bool
        return this
    }

    /**
     * @param {number} rotation
     */
    this.setDefaultRotation = function(rotation){
        this.default_rotation = rotation
        return this
    }

    this.generate = function(){
        return {
            "type": this.type,
            "anchor": this.anchor,
            "name": this.name,
            "entity_id": this.entity_id,
            "text": this.text,
            "scale": this.scale,
            "offset": this.offset,
            "rotate": this.rotate,
            "default_rotation": this.default_rotation
        }
    }
}

/**
 * @param {string} item Registry ID of item 
 */
global.createSpotlightPage = function(item){
    this.type = "modonomicon:spotlight"
    this.anchor = ""
    this.title = TEST_LANG
    this.item = item
    this.text = TEST_LANG

    /**
     * @param {string} anchor 
     */
    this.setAnchor = function(anchor){
        this.anchor = anchor
        return this
    }

    /**
     * @param {string} title Lang tag
     */
    this.setTitle = function(title){
        this.title = title
        return this
    }

    /**
     * @param {string} text Lang tag
     */
    this.setText = function(text){
        this.text = text
        return this
    }

    this.generate = function(){
        return {
            "type": this.type,
            "anchor": this.anchor,
            "title": this.title,
            "text": this.text,
            "item": this.item
        }
    }
}

/**
 * @param {string} type Modonomicon entry type
 * @param {string} recipe_id_1 Recipe ID
 */
global.createRecipePage = function(type, recipe_id_1){
    this.type = type
    this.anchor = ""
    this.recipe_id_1 = recipe_id_1
    this.recipe_id_2 = ""
    this.title1 = ""
    this.title2 = ""
    this.text = ""

    /**
     * @param {string} anchor 
     */
    this.setAnchor = function(anchor){
        this.anchor = anchor
        return this
    }

    /**
     * @param {string} recipe_id_2 Recipe ID
     */
    this.setRecipeId2 = function(recipe_id_2){
        this.recipe_id_2 = recipe_id_2
        return this
    }

    /**
     * @param {string} title Lang tag
     */
    this.setTitle1 = function(title){
        this.title1 = title
        return this
    }

    /**
     * @param {string} title Lang tag
     */
    this.setTitle2 = function(title){
        this.title2 = title
        return this
    }

    /**
     * @param {string} text Lang tag
     */
    this.setText = function(text){
        this.text = text
        return this
    }

    this.generate = function(){
        return {
            "type": this.type,
            "anchor": this.anchor,
            "text": this.text,
            "recipe_id_1": this.recipe_id_1,
            "recipe_id_2": this.recipe_id_2,
            "title1": this.title1,
            "title2": this.title2,
        }
    }
}

/**
 * @param {string} path data path to create the entry in, if a blank string, it gets auto generated based on name, category and namespace.
 */
global.createEntry = function(path){
    
    this.path = path
    this.category = "general"
    this.description = "modpack.test"
    this.pages = []
    this.hide_while_locked = true
    this.show_when_any_parent_unlocked = false
    this.background_u_index = 0
    this.background_v_index = 0
    this.parents = []
    this.xPosition = 0
    this.yPosition = 0
    this.icon = "minecraft:textures/item/emerald.png"
    this.nameLang = "modpack.test"
    this.fileName = "test"

    /**
     * @param {number} u 
     * @param {number} v 
     */
    this.setBackgroundUVIndex = function(u, v){
        this.background_u_index = u
        this.background_v_index = v
        return this
    }

    /**
     * @param {string} fileName 
     */
    this.setFileName = function(fileName){
        this.fileName = fileName
        return this
    }

    /**
     * @param {string} texturePath Texture resource ID
     */
    this.setIcon = function(texturePath){
        this.icon = texturePath
        return this
    }

    /**
     * @param {string} category ID of modonomicon category 
     */
    this.setCategory = function(category){
        this.category = category
        return this
    }

    /**
     * @param {string} description Lang Tag
     */
    this.setDescription = function(description){
        this.description = description
        return this
    }

    /**
     * @param {string} nameLang Lang Tag
     */
    this.setNameLang = function(nameLang){
        this.nameLang = nameLang
        return this
    }

    /**
     * @param {number} x 
     * @param {number} y 
     */
    this.setPosition = function(x, y){
        this.xPosition = x
        this.yPosition = y
        return this
    }

    /**
     * @param {boolean} bool 
     */
    this.setHideWhileLocked = function(bool){
        this.hide_while_locked = bool
        return this
    }

    /**
     * @param {boolean} bool 
     */
    this.setShowWhenAnyParentUnlocked = function(bool){
        this.show_when_any_parent_unlocked = bool
        return this
    }

    /**
     * @param {string} parent entry ID
     */
    this.addParent = function(parent){
        this.parents.push(
            {
                "entry": parent 
            }
        )
        return this
    }

    /**
     * @param {Array} parentList array of entry IDs
     */
    this.setParentList = function(parentList){
        this.parents = parentList
        return this
    }

    /**
     * @param {Object} page dictionary that contain page data.
     */
    this.addPage = function(page){
        this.pages.push(page)
        return this
    }

    /**
     * @param {Array} newPages Array of dictionaries that contain page data.
     */
    this.addPages = function(newPages){
        newPages.forEach(page => {
            this.pages.push(page)
        })
        return this
    }
    
    /**
     * generates the json file for the entry
     */
    this.generate = function(){
        let path = this.path

        if (path == "" || path == null){
            path = `kubejs/data/${BOOK_NAMESPACE}/modonomicon/books/${BOOKNAME}/entries/${this.category}/${this.fileName}.json`
        }

        JsonIO.write(path, {
            "background_u_index": this.background_u_index,
            "background_v_index": this.background_v_index,
            "category": BOOK_NAMESPACE + ":" + this.category,
            "description": this.description,
            "hide_while_locked": this.hide_while_locked,
            "icon": {
                "height": 16,
                "texture": this.icon,
                "width": 16
            },
            "name": this.nameLang,
            "pages": this.pages,
            "show_when_any_parent_unlocked": this.show_when_any_parent_unlocked,
            "parents": this.parents,
            "x": this.xPosition,
            "y": this.yPosition
            }    
        ) 
    }
}