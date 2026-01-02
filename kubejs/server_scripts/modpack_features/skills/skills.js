//priority: 10
//packmode: skills

const ENABLE_SKILL_SYSTEM = false

let PlayerSkillData = function(){

    this.getPlayer = function(){
        return this.player
    }

    this.setPlayer = function(new_player){
        this.player = new_player
        return this
    }

    this.getPoints = function(){
        return this.points
    }

    this.setPoints = function(points){
        this.points = points
        return this
    }

    this.addPoints = function(points){
        this.points = this.getPoints() + points
        return this
    }

    this.removePoints = function(points){
        this.points = this.getPoints() - points
        return this
    }

    this.getExperience = function(){
        return this.experience
    }

    this.setExperience = function(experience){
        this.experience = experience
        return this
    }

    this.addExperience = function(experience){
        this.experience = this.getExperience() + experience
        return this
    }

    this.removeExperience = function(experience){
        this.experience = this.getExperience() - experience
        return this
    }

    this.getLevel = function(){
        return this.level
    }

    this.setLevel = function(level){
        this.level = level
        return this
    }

    this.addLevel = function(level){
        this.level = this.getLevel() + level
        return this
    }

    this.removeLevel = function(level){
        this.level = this.getLevel() - level
        return this
    }

    this.refresh =  function(){
        PlayerDataMap[player.getUuid()] = this
        return this
    }

    this.init = function(player){
        this.player = player
        this.points = player.persistentData.getInt("skillPoints")
        this.experience = player.persistentData.getInt("skillExperience")
        this.level = player.persistentData.getInt("skillLevel")
        return this
    }

    return this
}

let PlayerDataMap = {}

global.PlayerDataMapCopy = null

function initSkillData(player){

    let datakeys = [
        "skillPoints",
        "skillExperience",
        "skillLevel"
    ]

    datakeys.forEach(key => {

        let value = player.persistentData.getInt(key)

        if (typeof value === "number" || !isNaN(value)){
            console.log("player: " + player.username + " has " + value + " " + key)
        } else {
            player.persistentData.putInt(key, new Number(1))
        }

    })

    PlayerDataMap[player.getUuid()] = new PlayerSkillData().init(player)
}

PlayerEvents.loggedIn(event => {

    let player = event.getPlayer()

    console.log(PlayerDataMap)

    initSkillData(player)

    console.log(PlayerDataMap)
})

PlayerEvents.loggedOut(event => {

    let player = event.getPlayer()

    player.persistentData.putInt("skillPoints", new Number(PlayerDataMap[player.getUuid()].getPoints()))
    player.persistentData.putInt("skillExperience", new Number(PlayerDataMap[player.getUuid()].getExperience()))
    player.persistentData.putInt("skillLevel", new Number(PlayerDataMap[player.getUuid()].getLevel()))

    console.log(new Number(PlayerDataMap[player.getUuid()].getPoints()))
})
