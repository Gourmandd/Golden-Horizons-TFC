let aether_wood_types = [
    "skyroot",
    "fieldsproot",
    "blightwillow",
    "cloudcap",
    "jellyshroom",
    "crystal",
    "glacia",
    "roseroot",
    "yagroot",
    "cruderoot",
    "conberry",
    "sunroot",
]

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

StartupEvents.registry("block", event =>{

    event.create('loose_holystone_pebble', 'tfc:ground_cover').ore().tagBlock("minecraft:mineable/pickaxe")

    aether_wood_types.forEach(type =>{

        event.create( type + '_twig', 'tfc:ground_cover').twig().tagBlock("minecraft:mineable/axe")

    })

    event.create("arkenium_anvil", "tfc:anvil").displayName("Arkenium Anvil").tier(0).tagBlock("minecraft:mineable/pickaxe").soundType("stone").requiresTool().texture('top', "aethersdelight:block/raw_arkenium_block").texture('side', "aethersdelight:block/arkenium_blast_furnace_top")

    event.create("quicksoil_poured_glass").displayName("Quicksoil Poured Glass").soundType("glass").renderType("translucent").box(0,0,0,16,1,16).noValidSpawns(true).transparent(true).defaultTranslucent().hardness(0.3).tag("c:hidden_from_recipe_viewers")

    event.create("divinite_contentrate").displayName("Divinite Contentrate").tagBlock("minecraft:mineable/pickaxe").tagBlock("minecraft:mineable/shovel").soundType("sand")

    event.create("dirt/aether", "tfc:dirt").farmland(farmland =>{farmland.hardness(1)}).soundType("sand").tagBlock("minecraft:mineable/shovel")
    //event.create("clay_grass/aether").soundType("sand").tagBlock("minecraft:mineable/shovel")
})

StartupEvents.registry("item", event =>{

    event.create("drying_bricks/aether").displayName("Wet Aether Mud Bricks")
    event.create("mud_bricks/aether").displayName("Aether Mud Mass")

    event.create("divinite_powder").displayName("Divinite Powder")

    event.create("quicksoil_glass_batch").displayName("Quicksoil Glass Batch")

    aether_wood_types.forEach(type => {
        event.create("kubejs:wood/lumber/" + type).displayName(capitalizeFirstLetter(type) + " Lumber")
    })

})

StartupEvents.registry("fluid", event =>{
    event.create("veridium").displayName("Veridium").bucketColor(0x075ab3).thickTexture(0x075ab3).noBucket().noBlock().tag("tfc:molten_metals")
    event.create("divinite_slurry").bucketColor(0xFFF10F).thinTexture(0xFFF10F).displayName("Divinite Slurry").noBlock().noBucket()
})