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

    addRockLikeBlock("caupona:felsic_tuff", `${mod_id}:rock/loose/breccia`, "caupona:felsic_tuff")
    addRockLikeBlock("create:scoria", `${mod_id}:rock/loose/komatiite`, "create:scoria")
    addRockLikeBlock("minecraft:stone", `${mod_id}:rock/loose/argillite`, "minecraft:cobblestone")
    addRockLikeBlock("minecraft:deepslate", `${mod_id}:rock/loose/nephelinite`, "minecraft:cobbled_deepslate")
    addRockLikeBlock("minecraft:dripstone_block", `${mod_id}:rock/loose/travertine`, "minecraft:dripstone_block")
    addRockLikeBlock("pastel:blackslag", `${mod_id}:rock/loose/blackslag`, "pastel:cobbled_blackslag")
    addRockLikeBlock("pastel:basal_marble", `${mod_id}:rock/loose/picrite_basalt`, "pastel:basal_marble")

    addRockLikeBlock("pastel:shimmel", `${mod_id}:rock/loose/blackslag`, "pastel:cobbled_blackslag")
    addRockLikeBlock("pastel:sawblade_grass", `${mod_id}:rock/loose/blackslag`, "pastel:cobbled_blackslag")
    addRockLikeBlock("pastel:overgrown_blackslag", `${mod_id}:rock/loose/blackslag`, "pastel:cobbled_blackslag")
    addRockLikeBlock("pastel:ashen_blackslag", `${mod_id}:rock/loose/blackslag`, "pastel:cobbled_blackslag")
})
