// ---------------------------------- //
// Generating data for the guide book //
// -------------------- ------------- //

// general
// intro
new global.createEntry("")
    .addPage(
        new global.createTextPage("book.modpack.guide.general.intro.page1.text")
            .setTitle("book.modpack.guide.general.intro.page1.title")
            .generate()
    )
    .setNameLang("book.modpack.guide.general.intro.name")
    .setDescription("book.modpack.guide.general.intro.description")
    .setFileName("intro")
    .setPosition(0, 0)
    .setCategory("general")
    .setIcon("minecraft:textures/item/nether_star.png")
    .generate()


// info
new global.createEntry("")
    .addPage(
        new global.createTextPage("book.modpack.guide.general.info.page1.text")
            .setTitle("book.modpack.guide.general.info.page1.title")
            .generate()
    )
    .addPage(
        new global.createTextPage("book.modpack.guide.general.info.page2.text")
            .setTitle("book.modpack.guide.general.info.page2.title")
            .generate()
    )
    .setNameLang("book.modpack.guide.general.info.name")
    .setDescription("book.modpack.guide.general.info.description")
    .setFileName("info")
    .setPosition(0, -1)
    .setCategory("general")
    .setIcon("minecraft:textures/item/book.png")
    .generate()


// sticks and stones
new global.createEntry("")
    .addPage(
        new global.createImagePage(["tfc:textures/gui/book/gui/rock_knapping.png"])
            .setText("book.modpack.guide.general.sticks_and_stones.page1.text")
            .setTitle("book.modpack.guide.general.sticks_and_stones.page1.title")
            .setBorder(false)
            .generate()
    )
    .addPage(
        new global.createRecipePage("modonomicon:crafting_recipe", "tfc:crafting/stone/axe_igneous_extrusive")
            .setText("book.modpack.guide.general.sticks_and_stones.page2.text")
            .setTitle1("book.modpack.guide.general.sticks_and_stones.page2.title")
            .generate()
    )
    .addPage(
        new global.createRecipePage("modonomicon:crafting_recipe", "tfc:crafting/stone/knife_igneous_extrusive")
            .setText("book.modpack.guide.general.sticks_and_stones.page3.text")
            .setTitle1("book.modpack.guide.general.sticks_and_stones.page3.title")
            .generate()
    )
    .setNameLang("book.modpack.guide.general.sticks_and_stones.name")
    .setDescription("book.modpack.guide.general.sticks_and_stones.description")
    .setFileName("sticks_and_stones")
    .setPosition(2, 0)
    .setCategory("general")
    .addParent("modpack:general/intro")
    .setIcon("tfc:textures/item/loose_rock/gabbro.png")
    .generate()


// clay
new global.createEntry("")
    .addPage(
        new global.createMultiblockPage("modpack:clay_indicators")
            .showVisualizeButton(false)
            .setText("book.modpack.guide.general.clay.page1.text")
            .setName("book.modpack.guide.general.clay.name")
            .generate()
    )
    .addPage(
        new global.createTextPage("book.modpack.guide.general.clay.page2.text")
            .setTitle("book.modpack.guide.general.clay.name")
            .generate()
    )
    .setNameLang("book.modpack.guide.general.clay.name")
    .setDescription("book.modpack.guide.general.clay.description")
    .setFileName("clay")
    .setPosition(2, 2)
    .setCategory("general")
    .addParent("modpack:general/intro")
    .setIcon("minecraft:textures/item/clay_ball.png")
    .generate()


// food and water
new global.createEntry("")
    .addPage(
        new global.createTextPage("book.modpack.guide.general.food.page1.text")
            .setTitle("book.modpack.guide.general.food.name")
            .generate()
    )
    .addPage(
        new global.createTextPage("book.modpack.guide.general.food.page2.text")
            .setTitle("book.modpack.guide.general.food.name")
            .generate()
    )
    .setNameLang("book.modpack.guide.general.food.name")
    .setDescription("book.modpack.guide.general.food.description")
    .setFileName("food")
    .setPosition(2, -2)
    .setCategory("general")
    .addParent("modpack:general/intro")
    .setIcon("minecraft:textures/item/carrot.png")
    .generate()


// fire pits
new global.createEntry("")
    .addPage(
        new global.createTextPage("book.modpack.guide.general.firepit.page1.text")
            .setTitle("book.modpack.guide.general.firepit.name")
            .generate()
    )
    .addPage(
        new global.createMultiblockPage("modpack:firepit")
            .showVisualizeButton(false)
            .setText("book.modpack.guide.general.firepit.page2.text")
            .setName("book.modpack.guide.general.firepit.name")
            .generate()
    )
    .addPage(
        new global.createImagePage(["tfc:textures/gui/book/gui/firepit.png"])
            .setText("book.modpack.guide.general.firepit.page3.text")
            .setTitle("book.modpack.guide.general.firepit.name")
            .setBorder(false)
            .generate()
    )
    .setNameLang("book.modpack.guide.general.food.name")
    .setDescription("book.modpack.guide.general.food.description")
    .setFileName("firepit")
    .setPosition(4, -2)
    .setCategory("general")
    .addParent("modpack:general/sticks_and_stones")
    .setIcon("tfc:textures/item/firepit.png")
    .generate()