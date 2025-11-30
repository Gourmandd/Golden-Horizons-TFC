const PAGE_TYPE = global.PAGE_TYPE

ClientEvents.lang("en_us", event => {

    let DATA = global.modonomicon_books

    Object.keys(DATA).forEach(book => {

        Object.keys(DATA[book]).forEach(category => {

            let entries = DATA[book][category]

            entries.forEach(entry => {

                event.add(`book.modpack.${book}.${category}.${entry.entry}.name`, entry.name)
                event.add(`book.modpack.${book}.${category}.${entry.entry}.description`, entry.description)

                let page_count = 0

                entry.pages.forEach(page => {
                    page_count = page_count + 1 // first page is page 1

                    event.add(`book.modpack.${book}.${category}.${entry.entry}.page${page_count}.text`, page.text)
                    event.add(`book.modpack.${book}.${category}.${entry.entry}.page${page_count}.title`, page.title)
                })
            })
        })
    })
})
