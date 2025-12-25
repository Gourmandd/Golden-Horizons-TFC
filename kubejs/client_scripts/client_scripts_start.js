// priority: 100
// Visit the wiki for more info - https://kubejs.com/

let mod_id = "modpack"

function nameProcessing(name) {
    name = name.replace("_", " ")
    name = name.replace("_", " ")
    name = name.replace(/(^\w|\s\w)/g, m => m.toUpperCase())
    //console.log(name)
    return name
}

console.info('Hello, World! (Loaded client scripts)')
