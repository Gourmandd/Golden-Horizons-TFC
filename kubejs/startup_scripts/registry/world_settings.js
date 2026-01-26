TFCEvents.defaultWorldSettings(event => {

    event.addRock("peridotite", {
        "cobble": `${id}:rock/cobble/peridotite`,
        "gravel": `${id}:rock/gravel/peridotite`,
        "hardened": `${id}:rock/hardened/peridotite`,
        "karst": false,
        "loose": `${id}:rock/loose/peridotite`,
        "mafic": true,
        "mossy_loose": `${id}:rock/mossy_loose/peridotite`,
        "raw": `${id}:rock/raw/peridotite`,
        "sand": "tfc:sand/green",
        "sandstone": "tfc:raw_sandstone/green",
        "spike": `${id}:rock/spike/peridotite`
    }, true)

    event.addRock("komatiite", {
        "cobble": `${id}:rock/cobble/komatiite`,
        "gravel": `${id}:rock/gravel/komatiite`,
        "hardened": `${id}:rock/hardened/komatiite`,
        "karst": false,
        "loose": `${id}:rock/loose/komatiite`,
        "mafic": true,
        "mossy_loose": `${id}:rock/mossy_loose/komatiite`,
        "raw": `create:scoria`,
        "sand": "tfc:sand/green",
        "sandstone": "tfc:raw_sandstone/green",
        "spike": `${id}:rock/spike/komatiite`
    }, true)

    event.addRock("serpentine", {
        "cobble": `${id}:rock/cobble/serpentine`,
        "gravel": `${id}:rock/gravel/serpentine`,
        "hardened": `${id}:rock/hardened/serpentine`,
        "karst": false,
        "loose": `${id}:rock/loose/serpentine`,
        "mafic": true,
        "mossy_loose": `${id}:rock/mossy_loose/serpentine`,
        "raw": `${id}:rock/raw/serpentine`,
        "sand": "tfc:sand/green",
        "sandstone": "tfc:raw_sandstone/green",
        "spike": `${id}:rock/spike/serpentine`
    }, true)

    event.addRock("blueschist", {
        "cobble": `${id}:rock/cobble/blueschist`,
        "gravel": `${id}:rock/gravel/blueschist`,
        "hardened": `${id}:rock/hardened/blueschist`,
        "karst": false,
        "loose": `${id}:rock/loose/blueschist`,
        "mafic": true,
        "mossy_loose": `${id}:rock/mossy_loose/blueschist`,
        "raw": `${id}:rock/raw/blueschist`,
        "sand": "tfc:sand/black",
        "sandstone": "tfc:raw_sandstone/black",
        "spike": `${id}:rock/spike/blueschist`
    }, true)


    event.addRock("breccia", {
        "cobble": `${id}:rock/cobble/breccia`,
        "gravel": `${id}:rock/gravel/breccia`,
        "hardened": `${id}:rock/hardened/breccia`,
        "karst": false,
        "loose": `${id}:rock/loose/breccia`,
        "mafic": true,
        "mossy_loose": `${id}:rock/mossy_loose/breccia`,
        "raw": `caupona:felsic_tuff`,
        "sand": "tfc:sand/yellow",
        "sandstone": "tfc:raw_sandstone/yellow",
        "spike": `${id}:rock/spike/breccia`
    }, false)

    event.defineLayer('breccia', {
        breccia: "low_grade"
    })

    event.defineLayer('blueschist', {
        blueschist: "high_grade"
    })

    event.defineLayer('komatiite', {
        komatiite: "low_grade"
    })

    event.defineLayer('serpentine', {
        serpentine: "high_grade"
    })

    event.defineLayer('peridotite', {
        peridotite: "high_grade"
    })

    event.defineLayer('tough_mafic', {
        peridotite: "high_grade",
        serpentine: "high_grade",
        blueschist: "high_grade",
        komatiite: "low_grade"
    })

    event.addLandLayer('breccia')
    event.addLandLayer('serpentine')
    event.addVolcanicLayer('blueschist')
    event.addVolcanicLayer('komatiite')
    event.addLandLayer('tough_mafic')

    event.addToBottom("blueschist")
    event.addToBottom("komatiite")
    event.addToBottom("serpentine")
    event.addToBottom("peridotite")

    // debug
    //console.log(event.getLandLayers())
    //console.log(event.getRock("blueschist"))
    //console.log(event.getRockNames())
})
