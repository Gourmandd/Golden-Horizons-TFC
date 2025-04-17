
ClientEvents.lang("en_us", event =>{

    function nameProcessing(name){
        name = name.replace("_", " ")
        name = name.replace("_", " ")
        name = name.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
        //console.log(name)
        return name
    }

    global.KUBEJS_METALS.forEach(metal => {
        event.add("metal.modpack." + metal, nameProcessing(metal))
    })

    global.DYE_COLOURS.forEach(colour =>{
        event.add("metal.modpack.glass/" + colour, nameProcessing(colour) + " Glass")
    })
    event.add("metal.modpack.glass/clear", "Clear Glass")
})