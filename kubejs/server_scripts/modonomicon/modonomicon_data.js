// priority: 10

// ---------------------------------- //
// Generating data for the guide book //
// ---------------------------------- //

const PAGE_TYPE = global.PAGE_TYPE

ServerEvents.generateData("before_mods", event => {

    let DATA = global.modonomicon_books

    Object.keys(DATA).forEach(book => {

        Object.keys(DATA[book]).forEach(category => {

            let entries = DATA[book][category]

            entries.forEach(entry => {

                let generatedEntry = new global.createEntry("")
                    .setNameLang(`book.modpack.${book}.${category}.${entry.entry}.name`)
                    .setDescription(`book.modpack.${book}.${category}.${entry.entry}.description`)
                    .setFileName(entry.entry)
                    .setPosition(entry.position[0], entry.position[1])
                    .setCategory(category)
                    .setIcon(entry.icon)

                let page_count = 0

                entry.pages.forEach(page => {
                    page_count = page_count + 1 // first page is page 1

                    let generatedPage = {}

                    if (page.type == PAGE_TYPE.TEXT) {
                        generatedPage = new global.createTextPage(`book.modpack.${book}.${category}.${entry.entry}.page${page_count}.text`)
                            .setTitle(`book.modpack.${book}.${category}.${entry.entry}.page${page_count}.title`)
                            .generate()
                    }
                    if (page.type == PAGE_TYPE.IMAGE) {
                        generatedPage = new global.createImagePage(page.image)
                            .setText(`book.modpack.${book}.${category}.${entry.entry}.page${page_count}.text`)
                            .setTitle(`book.modpack.${book}.${category}.${entry.entry}.page${page_count}.title`)
                            .setBorder(page.border)
                            .generate()
                    }
                    if (page.type == PAGE_TYPE.CRAFTING_RECIPE) {
                        generatedPage = new global.createRecipePage("modonomicon:crafting_recipe", page.recipe)
                            .setText(`book.modpack.${book}.${category}.${entry.entry}.page${page_count}.text`)
                            .setTitle1(`book.modpack.${book}.${category}.${entry.entry}.page${page_count}.title`)
                            .generate()
                    }
                    if (page.type == PAGE_TYPE.MULTIBLOCK) {
                        generatedPage = new global.createMultiblockPage(page.multiblock)
                            .showVisualizeButton(page.showVisualiseButton)
                            .setText(`book.modpack.${book}.${category}.${entry.entry}.page${page_count}.text`)
                            .setName(`book.modpack.${book}.${category}.${entry.entry}.page${page_count}.title`)
                            .generate()
                    }

                    generatedEntry.addPage(generatedPage)
                })

                console.log(entry.parents)

                if (Array.isArray(entry.parents)) {
                    entry.parents.forEach(parent => {
                        generatedEntry = generatedEntry.addParent(parent)
                    })
                }

                generatedEntry.generate()
            })
        })
    })
})



/*
// getting_started
// intro
new global.createEntry("")
    .addPage(
        new global.createTextPage("book.modpack.guide.getting_started.intro.page1.text")
            .setTitle("book.modpack.guide.getting_started.intro.page1.title")
            .generate()
    )
    .setNameLang("book.modpack.guide.getting_started.intro.name")
    .setDescription("book.modpack.guide.getting_started.intro.description")
    .setFileName("intro")
    .setPosition(0, 0)
    .setCategory("getting_started")
    .setIcon("minecraft:textures/item/nether_star.png")
    .generate()


// info
new global.createEntry("")
    .addPage(
        new global.createTextPage("book.modpack.guide.getting_started.info.page1.text")
            .setTitle("book.modpack.guide.getting_started.info.page1.title")
            .generate()
    )
    .addPage(
        new global.createTextPage("book.modpack.guide.getting_started.info.page2.text")
            .setTitle("book.modpack.guide.getting_started.info.page2.title")
            .generate()
    )
    .setNameLang("book.modpack.guide.getting_started.info.name")
    .setDescription("book.modpack.guide.getting_started.info.description")
    .setFileName("info")
    .setPosition(0, -1)
    .setCategory("getting_started")
    .setIcon("minecraft:textures/item/book.png")
    .generate()


// sticks and stones
new global.createEntry("")
    .addPage(
        new global.createImagePage(["tfc:textures/gui/book/gui/rock_knapping.png"])
            .setText("book.modpack.guide.getting_started.sticks_and_stones.page1.text")
            .setTitle("book.modpack.guide.getting_started.sticks_and_stones.page1.title")
            .setBorder(false)
            .generate()
    )
    .addPage(
        new global.createRecipePage("modonomicon:crafting_recipe", "tfc:crafting/stone/axe_igneous_extrusive")
            .setText("book.modpack.guide.getting_started.sticks_and_stones.page2.text")
            .setTitle1("book.modpack.guide.getting_started.sticks_and_stones.page2.title")
            .generate()
    )
    .addPage(
        new global.createRecipePage("modonomicon:crafting_recipe", "tfc:crafting/stone/knife_igneous_extrusive")
            .setText("book.modpack.guide.getting_started.sticks_and_stones.page3.text")
            .setTitle1("book.modpack.guide.getting_started.sticks_and_stones.page3.title")
            .generate()
    )
    .setNameLang("book.modpack.guide.getting_started.sticks_and_stones.name")
    .setDescription("book.modpack.guide.getting_started.sticks_and_stones.description")
    .setFileName("sticks_and_stones")
    .setPosition(2, 0)
    .setCategory("getting_started")
    .addParent("modpack:getting_started/intro")
    .setIcon("tfc:textures/item/loose_rock/gabbro.png")
    .generate()


// clay
new global.createEntry("")
    .addPage(
        new global.createMultiblockPage("modpack:clay_indicators")
            .showVisualizeButton(false)
            .setText("book.modpack.guide.getting_started.clay.page1.text")
            .setName("book.modpack.guide.getting_started.clay.name")
            .generate()
    )
    .addPage(
        new global.createTextPage("book.modpack.guide.getting_started.clay.page2.text")
            .setTitle("book.modpack.guide.getting_started.clay.name")
            .generate()
    )
    .setNameLang("book.modpack.guide.getting_started.clay.name")
    .setDescription("book.modpack.guide.getting_started.clay.description")
    .setFileName("clay")
    .setPosition(2, 2)
    .setCategory("getting_started")
    .addParent("modpack:getting_started/intro")
    .setIcon("minecraft:textures/item/clay_ball.png")
    .generate()


// food and water
new global.createEntry("")
    .addPage(
        new global.createTextPage("book.modpack.guide.getting_started.food.page1.text")
            .setTitle("book.modpack.guide.getting_started.food.name")
            .generate()
    )
    .addPage(
        new global.createTextPage("book.modpack.guide.getting_started.food.page2.text")
            .setTitle("book.modpack.guide.getting_started.food.name")
            .generate()
    )
    .setNameLang("book.modpack.guide.getting_started.food.name")
    .setDescription("book.modpack.guide.getting_started.food.description")
    .setFileName("food")
    .setPosition(2, -2)
    .setCategory("getting_started")
    .addParent("modpack:getting_started/intro")
    .setIcon("minecraft:textures/item/carrot.png")
    .generate()


// fire pits
new global.createEntry("")
    .addPage(
        new global.createTextPage("book.modpack.guide.getting_started.firepit.page1.text")
            .setTitle("book.modpack.guide.getting_started.firepit.name")
            .generate()
    )
    .addPage(
        new global.createMultiblockPage("modpack:firepit")
            .showVisualizeButton(false)
            .setText("book.modpack.guide.getting_started.firepit.page2.text")
            .setName("book.modpack.guide.getting_started.firepit.name")
            .generate()
    )
    .addPage(
        new global.createImagePage(["tfc:textures/gui/book/gui/firepit.png"])
            .setText("book.modpack.guide.getting_started.firepit.page3.text")
            .setTitle("book.modpack.guide.getting_started.firepit.name")
            .setBorder(false)
            .generate()
    )
    .setNameLang("book.modpack.guide.getting_started.food.name")
    .setDescription("book.modpack.guide.getting_started.food.description")
    .setFileName("firepit")
    .setPosition(4, -2)
    .setCategory("getting_started")
    .addParent("modpack:getting_started/sticks_and_stones")
    .setIcon("tfc:textures/item/firepit.png")
    .generate()
    */
