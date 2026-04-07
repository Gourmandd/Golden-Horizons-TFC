// requires: lootjs

LootJS.modifiers(event => {

    const ISOLATED = { "condition": "tfc:is_isolated" }


    function addRockLikeBlock(block, loose, drop) {
        event.addBlockModifier(block).removeLoot(drop)
            .addAlternativesLoot(
                LootEntry.of(block).matchCustomCondition(ISOLATED),
                LootEntry.group(LootEntry.of(loose, 3), LootEntry.of(loose, 1).randomChance(0.25))
            )
    }

    addRockLikeBlock("create:scorchia", `${mod_id}:rock/loose/suevite`, "create:scorchia")
    addRockLikeBlock("create:limestone", `${mod_id}:rock/loose/soapstone`, "create:limestone")
    addRockLikeBlock("create:ochrum", `${mod_id}:rock/loose/sandstone`, "create:ochrum")
    addRockLikeBlock("quark:jasper", `${mod_id}:rock/loose/red_sandstone`, "quark:jasper")
    addRockLikeBlock("quark:shale", `${mod_id}:rock/loose/phonolite`, "quark:shale")
    addRockLikeBlock("quark:limestone", `${mod_id}:rock/loose/arkose`, "quark:limestone")
    addRockLikeBlock("caupona:felsic_tuff", `${mod_id}:rock/loose/breccia`, "caupona:felsic_tuff")
    addRockLikeBlock("create:scoria", `${mod_id}:rock/loose/komatiite`, "create:scoria")
    addRockLikeBlock("minecraft:stone", `${mod_id}:rock/loose/argillite`, "minecraft:cobblestone")
    addRockLikeBlock("minecraft:deepslate", `${mod_id}:rock/loose/nephelinite`, "minecraft:cobbled_deepslate")
    addRockLikeBlock("minecraft:dripstone_block", `${mod_id}:rock/loose/travertine`, "minecraft:dripstone_block")
    addRockLikeBlock("spectrum:blackslag", `${mod_id}:rock/loose/blackslag`, "spectrum:cobbled_blackslag")
    addRockLikeBlock("spectrum:basal_marble", `${mod_id}:rock/loose/picrite_basalt`, "spectrum:basal_marble")

    addRockLikeBlock("spectrum:shimmel", `${mod_id}:rock/loose/blackslag`, "spectrum:cobbled_blackslag")
    addRockLikeBlock("spectrum:sawblade_grass", `${mod_id}:rock/loose/blackslag`, "spectrum:cobbled_blackslag")
    addRockLikeBlock("spectrum:overgrown_blackslag", `${mod_id}:rock/loose/blackslag`, "spectrum:cobbled_blackslag")
    addRockLikeBlock("spectrum:ashen_blackslag", `${mod_id}:rock/loose/blackslag`, "spectrum:cobbled_blackslag")
})
