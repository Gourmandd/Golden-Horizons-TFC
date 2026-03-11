// packmode: experimental

BlockEvents.broken(event => {

    let Target = event.block

    if (event.block.hasTag("modpack:poisonous_dust_blocks") == false) {
        return
    }

    if (Math.random() > 0.9) {
        let NewEntity = event.level.createEntity("minecraft:area_effect_cloud")

        NewEntity.x += Target.getX()
        NewEntity.y += Target.getY()
        NewEntity.z += Target.getZ()

        let RadiusMultiplier = Math.random() * 2
        let DurationMultiplier = Math.random()

        NewEntity.mergeNbt(
            {
                custom_particle: { type: "cloud" },
                Radius: 1 * RadiusMultiplier,
                Duration: 300 * DurationMultiplier,
                potion_duration_scale: 0.25,
                potion_contents: {
                    potion: "minecraft:poison",
                    custom_color: Target.getBlock().defaultMapColor().col
                }
            }
        )

        NewEntity.setRadiusPerTick(-0.01)
        NewEntity.spawn()
    }
})
