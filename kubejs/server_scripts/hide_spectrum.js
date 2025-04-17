
//temporary file, for until spectrum content is integrated in any way

ServerEvents.tags("item", event =>{

    const SPECTRUM_HIDDEN = true

    if (SPECTRUM_HIDDEN){
        event.add("c:hidden_from_recipe_viewers", 
            "#spectrum:basalts",
            "#spectrum:calcites",
            "#spectrum:blackslags",
            "#spectrum:shale_clays",
            "#spectrum:basal_marbles",
            "#spectrum:dragonbone_blocks",
            "#spectrum:pyrite",
            "#spectrum:ores",
            "#spectrum:topaz_crystals",
            "#spectrum:amethyst_crystals",
            "#spectrum:citrine_crystals",
            "#spectrum:onyx_crystals",
            "#spectrum:moonstone_crystals",
            "#moonlight:non_recolorable",
            "#spectrum:gemstone_glass",
            "#spectrum:noxcap_stems",
            "#spectrum:noxwood",
            "#spectrum:weeping_gala_logs",
            "#spectrum:mob_heads",
            "#yttr:not_gifts",
            "#spectrum:player_only_glass",
            "#spectrum:pedestals",
            "#spectrum:rock_candy",
            "#spectrum:alcohols",
            "#spectrum:pastel_node_upgrades",
            "#spectrum:pure_resource_blocks",
            "#spectrum:pure_resources",
            "#spectrum:idols",
            "#spectrum:emissive",
            "#spectrum:memory_bonding_agents",
            "#spectrum:shimmerstone_lights",
            "#modern_industrialization:replicator_blacklist",
            "#ad_astra:destroyed_in_space",
            "#spectrum:shooting_stars",
            "#c:trifles",
            "#spectrum:glass_arrows",
            "#trinkets:chest/necklace"
        )
    }
})