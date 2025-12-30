global.PAGE_TYPE = {
    TEXT: "modonomicon:text",
    IMAGE: "modonomicon:image",
    CRAFTING_RECIPE: "modonomicon:crafting_recipe",
    MULTIBLOCK: "modonomicon:multiblock"
}

const PAGE_TYPE = global.PAGE_TYPE

global.modonomicon_books = {
    // book
    "guide": {
        //category
        "getting_started": [
            //entry
            {
                // "book.{namespace}.{book}.{category}.{entry}.{tag}
                entry: "intro",
                position: [0, 0],
                icon: "minecraft:textures/item/nether_star.png",
                // "book.modpack.guide.getting_started.intro.name"
                name: "Waking Up",
                // "book.modpack.guide.getting_started.intro.description"
                description: "You open your eyes, and see a blank slate.",
                pages: [
                    {
                        type: PAGE_TYPE.TEXT,
                        // "book.modpack.guide.getting_started.intro.page1.title"
                        title: "Waking Up",
                        // "book.modpack.guide.getting_started.intro.page1.text"
                        text: "I opened my eyes, and I find myself in an empty world."
                    }
                ]
            },
            {
                // "book.{namespace}.{book}.{category}.{entry}.{tag}
                entry: "info",
                position: [0, -1],
                icon: "minecraft:textures/item/book.png",
                name: "Info",
                description: "Important info.",
                pages: [
                    {
                        type: PAGE_TYPE.TEXT,
                        title: "Info",
                        text: "The goal of this guide-book is to try to ease you into this modpack and into the Terrafirmacraft mod among others.\\\n\\\nTo unlock new entries just do things, explore and gather resources. Hints are available. \\\n The Terrafirmacraft guide book is also still available"
                    },
                    {
                        type: PAGE_TYPE.TEXT,
                        title: "Info",
                        text: "If you don't know already; In your inventory menu on the right side there is a menu where you can search items, You can use [R] and [U] to browse recipes.",
                    }
                ]
            },
            {
                // "book.{namespace}.{book}.{category}.{entry}.{tag}
                entry: "sticks_and_stones",
                position: [2, 0],
                icon: "tfc:textures/item/loose_rock/gabbro.png",
                name: "Sticks and Stones",
                description: "Making my first tools.",
                parents: ["modpack:getting_started/intro"],
                pages: [
                    {
                        type: PAGE_TYPE.IMAGE,
                        image: ["tfc:textures/gui/book/gui/rock_knapping.png"],
                        title: "Knapping",
                        text: "By bashing two stones against each other I can make complex tools.",
                        border: false
                    },
                    {
                        type: PAGE_TYPE.CRAFTING_RECIPE,
                        recipe: "tfc:crafting/stone/shovel/igneous_extrusive",
                        title: "Stone Shovel",
                        text: "I can finally dig dirt! Praise be to my own ingenuity.  \\\n\\\n (twigs can be found near trees)"
                    },
                    {
                        type: PAGE_TYPE.CRAFTING_RECIPE,
                        recipe: "tfc:crafting/stone/axe/igneous_extrusive",
                        title: "Stone Axe",
                        text: "Such a sharp blade can chop a tree down!",
                    },
                    {
                        type: PAGE_TYPE.CRAFTING_RECIPE,
                        recipe: "tfc:crafting/stone/knife/igneous_extrusive",
                        title: "Stone Knife",
                        text: "I can use this to harvest straw from grass!"
                    },
                    {
                        type: PAGE_TYPE.CRAFTING_RECIPE,
                        recipe: "tfc:crafting/stone/javelin/igneous_extrusive",
                        title: "Stone Javelin",
                        text: "This is where the fun begins..."
                    },
                    {
                        type: PAGE_TYPE.CRAFTING_RECIPE,
                        recipe: "tfc:crafting/stone/hammer/igneous_extrusive",
                        title: "Stone Hammer",
                        text: "Nothing, object or alive, is safe from being bonked by this hefty hammer!"
                    },
                    {
                        type: PAGE_TYPE.CRAFTING_RECIPE,
                        recipe: "tfc:crafting/stone/hoe/igneous_extrusive",
                        title: "Stone Hoe",
                        text: "Tilling soils means that I can give my crops an unfair advantage. The grass cannot compete now!"
                    }
                ]
            },
            {
                // "book.{namespace}.{book}.{category}.{entry}.{tag}
                entry: "clay",
                position: [2, 2],
                icon: "minecraft:textures/item/clay_ball.png",
                name: "Locating Clay",
                description: "About a new material.",
                parents: ["modpack:getting_started/intro"],
                pages: [
                    {
                        type: PAGE_TYPE.MULTIBLOCK,
                        multiblock: "modpack:clay_indicators",
                        title: "Locating Clay",
                        text: "These plants have a shared secret under them!",
                        showVisualiseButton: false
                    },
                    {
                        type: PAGE_TYPE.TEXT,
                        title: "Locating Clay",
                        text: "While walking around I noticed some soil to be much more elastic around certain groups of plants. I can form shapes out of this clay!",
                    }
                ]
            },
            {
                // "book.{namespace}.{book}.{category}.{entry}.{tag}
                entry: "food",
                position: [2, -2],
                icon: "minecraft:textures/item/carrot.png",
                name: "Food and Water",
                description: "Keeping yourself sustained.",
                parents: ["modpack:getting_started/intro"],
                pages: [
                    {
                        type: PAGE_TYPE.TEXT,
                        title: "Food and Water",
                        text: "Around me I noticed that there are wild crops, berries and also animals. I won't be hungry for a while. \\\n\\\nThough I should eat a variety of nutrients to keep healthy!",
                    },
                    {
                        type: PAGE_TYPE.TEXT,
                        title: "Food and Water",
                        text: "To satisfy my thirst I can drink from any water source, with no penalties \\\n \\\n (unless I had a delicious mouthful of ocean water)",
                    }
                ]
            },
            {
                // "book.{namespace}.{book}.{category}.{entry}.{tag}
                entry: "firepit",
                position: [4, -2],
                icon: "tfc:textures/item/firepit.png",
                name: "Fire Pits",
                description: "Let there be cooked meat!",
                parents: ["modpack:getting_started/sticks_and_stones"],
                pages: [
                    {
                        type: PAGE_TYPE.TEXT,
                        title: "Making Fires",
                        text: "By dropping a pile of items: \n- A log\n- at least 3 sticks and\n- any amount of straw \\\n\\\n Then by igniting them with firestarters I can make a fire pit!",
                    },
                    {
                        type: PAGE_TYPE.MULTIBLOCK,
                        multiblock: "modpack:firepit",
                        title: "Making Fires",
                        text: "To keep it going, it needs a steady source of logs and can be relight.",
                        showVisualiseButton: false
                    },
                    {
                        type: PAGE_TYPE.IMAGE,
                        image: ["tfc:textures/gui/book/gui/firepit.png"],
                        title: "Fire Pit Interface",
                        text: "I can only cook one item at once though.",
                        border: false
                    },
                ]
            },
            {
                // "book.{namespace}.{book}.{category}.{entry}.{tag}
                entry: "pit_kiln",
                position: [4, 0],
                icon: "tfc:textures/item/firestarter.png",
                name: "Pit Kilns",
                description: "Making pots and stuff like that.",
                parents: [
                    "modpack:getting_started/clay",
                    "modpack:getting_started/sticks_and_stones"
                ],
                pages: [
                    {
                        type: PAGE_TYPE.TEXT,
                        title: "Making Fires",
                        text: "By dropping a pile of items: \\\n - A log, \\\n - at least 3 stick and \\\n - any amount of straw \\\\ Then igniting them with firestarters I can make a fire pit!",
                    },
                    {
                        type: PAGE_TYPE.MULTIBLOCK,
                        multiblock: "modpack:firepit",
                        title: "Making Fires",
                        text: "To keep it going, it needs a steady source of logs and can be relight.",
                        showVisualiseButton: false
                    },
                    {
                        type: PAGE_TYPE.IMAGE,
                        image: ["tfc:textures/gui/book/gui/firepit.png"],
                        title: "Knapping",
                        text: "I can only cook one item at once though.",
                        border: false
                    },
                ]
            }
        ]
    }
}
