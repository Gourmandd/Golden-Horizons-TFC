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

function stairVariants(stairs, stairs_inner, stairs_outer) {
    return {
        'facing=east,half=bottom,shape=straight': { 'model': stairs },
        'facing=west,half=bottom,shape=straight': { 'model': stairs, 'y': 180, 'uvlock': true },
        'facing=south,half=bottom,shape=straight': { 'model': stairs, 'y': 90, 'uvlock': true },
        'facing=north,half=bottom,shape=straight': { 'model': stairs, 'y': 270, 'uvlock': true },
        'facing=east,half=bottom,shape=outer_right': { 'model': stairs_outer },
        'facing=west,half=bottom,shape=outer_right': { 'model': stairs_outer, 'y': 180, 'uvlock': true },
        'facing=south,half=bottom,shape=outer_right': { 'model': stairs_outer, 'y': 90, 'uvlock': true },
        'facing=north,half=bottom,shape=outer_right': { 'model': stairs_outer, 'y': 270, 'uvlock': true },
        'facing=east,half=bottom,shape=outer_left': { 'model': stairs_outer, 'y': 270, 'uvlock': true },
        'facing=west,half=bottom,shape=outer_left': { 'model': stairs_outer, 'y': 90, 'uvlock': true },
        'facing=south,half=bottom,shape=outer_left': { 'model': stairs_outer },
        'facing=north,half=bottom,shape=outer_left': { 'model': stairs_outer, 'y': 180, 'uvlock': true },
        'facing=east,half=bottom,shape=inner_right': { 'model': stairs_inner },
        'facing=west,half=bottom,shape=inner_right': { 'model': stairs_inner, 'y': 180, 'uvlock': true },
        'facing=south,half=bottom,shape=inner_right': { 'model': stairs_inner, 'y': 90, 'uvlock': true },
        'facing=north,half=bottom,shape=inner_right': { 'model': stairs_inner, 'y': 270, 'uvlock': true },
        'facing=east,half=bottom,shape=inner_left': { 'model': stairs_inner, 'y': 270, 'uvlock': true },
        'facing=west,half=bottom,shape=inner_left': { 'model': stairs_inner, 'y': 90, 'uvlock': true },
        'facing=south,half=bottom,shape=inner_left': { 'model': stairs_inner },
        'facing=north,half=bottom,shape=inner_left': { 'model': stairs_inner, 'y': 180, 'uvlock': true },
        'facing=east,half=top,shape=straight': { 'model': stairs, 'x': 180, 'uvlock': true },
        'facing=west,half=top,shape=straight': { 'model': stairs, 'x': 180, 'y': 180, 'uvlock': true },
        'facing=south,half=top,shape=straight': { 'model': stairs, 'x': 180, 'y': 90, 'uvlock': true },
        'facing=north,half=top,shape=straight': { 'model': stairs, 'x': 180, 'y': 270, 'uvlock': true },
        'facing=east,half=top,shape=outer_right': { 'model': stairs_outer, 'x': 180, 'y': 90, 'uvlock': true },
        'facing=west,half=top,shape=outer_right': { 'model': stairs_outer, 'x': 180, 'y': 270, 'uvlock': true },
        'facing=south,half=top,shape=outer_right': { 'model': stairs_outer, 'x': 180, 'y': 180, 'uvlock': true },
        'facing=north,half=top,shape=outer_right': { 'model': stairs_outer, 'x': 180, 'uvlock': true },
        'facing=east,half=top,shape=outer_left': { 'model': stairs_outer, 'x': 180, 'uvlock': true },
        'facing=west,half=top,shape=outer_left': { 'model': stairs_outer, 'x': 180, 'y': 180, 'uvlock': true },
        'facing=south,half=top,shape=outer_left': { 'model': stairs_outer, 'x': 180, 'y': 90, 'uvlock': true },
        'facing=north,half=top,shape=outer_left': { 'model': stairs_outer, 'x': 180, 'y': 270, 'uvlock': true },
        'facing=east,half=top,shape=inner_right': { 'model': stairs_inner, 'x': 180, 'y': 90, 'uvlock': true },
        'facing=west,half=top,shape=inner_right': { 'model': stairs_inner, 'x': 180, 'y': 270, 'uvlock': true },
        'facing=south,half=top,shape=inner_right': { 'model': stairs_inner, 'x': 180, 'y': 180, 'uvlock': true },
        'facing=north,half=top,shape=inner_right': { 'model': stairs_inner, 'x': 180, 'uvlock': true },
        'facing=east,half=top,shape=inner_left': { 'model': stairs_inner, 'x': 180, 'uvlock': true },
        'facing=west,half=top,shape=inner_left': { 'model': stairs_inner, 'x': 180, 'y': 180, 'uvlock': true },
        'facing=south,half=top,shape=inner_left': { 'model': stairs_inner, 'x': 180, 'y': 90, 'uvlock': true },
        'facing=north,half=top,shape=inner_left': { 'model': stairs_inner, 'x': 180, 'y': 270, 'uvlock': true }
    }
}

function wallMultipart(blockModelRoot) {
    return {
        "multipart": [
            {
                "when": {
                    "up": "true"
                },
                "apply": {
                    "model": `${blockModelRoot}_post`
                }
            },
            {
                "when": {
                    "north": "low"
                },
                "apply": {
                    "model": `${blockModelRoot}_side`,
                    "uvlock": true
                }
            },
            {
                "when": {
                    "east": "low"
                },
                "apply": {
                    "model": `${blockModelRoot}_side`,
                    "y": 90,
                    "uvlock": true
                }
            },
            {
                "when": {
                    "south": "low"
                },
                "apply": {
                    "model": `${blockModelRoot}_side`,
                    "y": 180,
                    "uvlock": true
                }
            },
            {
                "when": {
                    "west": "low"
                },
                "apply": {
                    "model": `${blockModelRoot}_side`,
                    "y": 270,
                    "uvlock": true
                }
            },
            {
                "when": {
                    "north": "tall"
                },
                "apply": {
                    "model": `${blockModelRoot}_side`,
                    "uvlock": true
                }
            },
            {
                "when": {
                    "east": "tall"
                },
                "apply": {
                    "model": `${blockModelRoot}_side`,
                    "y": 90,
                    "uvlock": true
                }
            },
            {
                "when": {
                    "south": "tall"
                },
                "apply": {
                    "model": `${blockModelRoot}_side`,
                    "y": 180,
                    "uvlock": true
                }
            },
            {
                "when": {
                    "west": "tall"
                },
                "apply": {
                    "model": `${blockModelRoot}_side`,
                    "y": 270,
                    "uvlock": true
                }
            }
        ]
    }
}

function aqueductMultipart(blockModelRoot) {
    return {
        "multipart": [
            {
                "apply": {
                    "model": `${blockModelRoot}/base`
                }
            },
            {
                "when": {
                    "north": "false"
                },
                "apply": {
                    "model": `${blockModelRoot}/north`
                }
            },
            {
                "when": {
                    "east": "false"
                },
                "apply": {
                    "model": `${blockModelRoot}/east`
                }
            },
            {
                "when": {
                    "south": "false"
                },
                "apply": {
                    "model": `${blockModelRoot}/south`
                }
            },
            {
                "when": {
                    "west": "false"
                },
                "apply": {
                    "model": `${blockModelRoot}/west`
                }
            }
        ]
    }
}

function looseRockVariants(blockModelRoot) {
    return {
        "count=1": [
            {
                "model": `${blockModelRoot}_1`,
                "y": 90
            },
            {
                "model": `${blockModelRoot}_1`,
            },
            {
                "model": `${blockModelRoot}_1`,
                "y": 180
            },
            {
                "model": `${blockModelRoot}_1`,
                "y": 270
            }
        ],
        "count=2": [
            {
                "model": `${blockModelRoot}_2`,
                "y": 90
            },
            {
                "model": `${blockModelRoot}_2`,
            },
            {
                "model": `${blockModelRoot}_2`,
                "y": 180
            },
            {
                "model": `${blockModelRoot}_2`,
                "y": 270
            }
        ],
        "count=3": [
            {
                "model": `${blockModelRoot}_3`,
                "y": 90
            },
            {
                "model": `${blockModelRoot}_3`,
            },
            {
                "model": `${blockModelRoot}_3`,
                "y": 180
            },
            {
                "model": `${blockModelRoot}_3`,
                "y": 270
            }
        ]
    }
}

function verticalSupportMultipart(blockModelRoot) {
    return {
        "multipart": [
            {
                "apply": {
                    "model": `${blockModelRoot}_vertical`
                }
            },
            {
                "when": {
                    "north": true
                },
                "apply": {
                    "model": `${blockModelRoot}_connection`,
                    "y": 270
                }
            },
            {
                "when": {
                    "east": true
                },
                "apply": {
                    "model": `${blockModelRoot}_connection`
                }
            },
            {
                "when": {
                    "south": true
                },
                "apply": {
                    "model": `${blockModelRoot}_connection`,
                    "y": 90
                }
            },
            {
                "when": {
                    "west": true
                },
                "apply": {
                    "model": `${blockModelRoot}_connection`,
                    "y": 180
                }
            }
        ]
    }
}

function horizontalSupportMultipart(blockModelRoot) {
    return {
        "multipart": [
            {
                "apply": {
                    "model": `${blockModelRoot}_horizontal`
                }
            },
            {
                "when": {
                    "north": true
                },
                "apply": {
                    "model": `${blockModelRoot}_connection`,
                    "y": 270
                }
            },
            {
                "when": {
                    "east": true
                },
                "apply": {
                    "model": `${blockModelRoot}_connection`
                }
            },
            {
                "when": {
                    "south": true
                },
                "apply": {
                    "model": `${blockModelRoot}_connection`,
                    "y": 90
                }
            },
            {
                "when": {
                    "west": true
                },
                "apply": {
                    "model": `${blockModelRoot}_connection`,
                    "y": 180
                }
            }
        ]
    }
}

console.info('Hello, World! (Loaded client scripts)')
