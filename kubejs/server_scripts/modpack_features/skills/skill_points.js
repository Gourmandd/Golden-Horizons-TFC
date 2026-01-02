//packmode: skills

let IPlayerInfo = Java.loadClass("net.dries007.tfc.common.player.IPlayerInfo")

PlayerEvents.tick(event => {

    if (!ENABLE_SKILL_SYSTEM){
        return
    }

    let player = event.getPlayer()

    let PlayerInfo = IPlayerInfo.get(player)

    let tick = event.getServer().getTickCount()
    
    if (tick % 40 == 0){

        let avgNutrition = PlayerInfo.nutrition().getAverageNutrition()
        let xp_points = Math.floor((avgNutrition * 10) * (avgNutrition * 10) / 4)

        let data = PlayerDataMap[player.getUuid()]

        if (data == null){
            initSkillData(player)
            data = PlayerDataMap[player.getUuid()]
        }

        data.addExperience(xp_points)

        let level_requirement = (data.getLevel() * 7.5) * 100

        player.tell(data.getExperience())
        //player.tell(points)

        if (data.getExperience() >= level_requirement){
            data.addLevel(1)
            data.removeExperience(level_requirement)
            player.tell("Level up to " + data.getLevel() + "(" + level_requirement + ")")
        }

    }
})