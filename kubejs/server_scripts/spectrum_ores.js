let shimmerstone_ores = []
let azurite_ores = []
let stratine_ores = []
let paltaeria_ores = []
let malachite_ores = []

const ROCK_TYPES = [
  "argillite",
  "nephelinite",
  "blackslag",
  "travertine",
  "picrite_basalt",
  "granite",
  "diorite",
  "gabbro",
  "shale",
  "claystone",
  "limestone",
  "conglomerate",
  "dolomite",
  "chert",
  "chalk",
  "rhyolite",
  "basalt",
  "andesite",
  "dacite",
  "quartzite",
  "slate",
  "phyllite",
  "schist",
  "gneiss",
  "marble"
]

ROCK_TYPES.forEach(rockType =>{
  shimmerstone_ores.push(`kubejs:ore/shimmerstone/${rockType}`)
  azurite_ores.push(`kubejs:ore/azurite/${rockType}`)
  stratine_ores.push(`kubejs:ore/stratine/${rockType}`)
  paltaeria_ores.push(`kubejs:ore/paltaeria/${rockType}`)
  malachite_ores.push(`kubejs:ore/malachite/${rockType}`)
})

BlockEvents.broken(event =>{

  function summonParticles(particleID, count, speed){
      event.entity.level.spawnParticles(
      particleID,
      false,
      event.block.x, event.block.y, event.block.z,
      0.5, 0.5, 0.5, count, speed
    )
  }

  if (shimmerstone_ores.indexOf(event.block.id) > -1){
    summonParticles("spectrum:shimmerstone_sparkle", 6, 0.05)
  }

  if (azurite_ores.indexOf(event.block.id) > -1){
    summonParticles("spectrum:azure_aura", 4, 0)
    summonParticles("spectrum:azure_dike_runes", 2, 0.01)
    summonParticles("spectrum:azure_mote", 6, 0.01)
  }

  if (stratine_ores.indexOf(event.block.id) > -1){
    summonParticles("spectrum:drakeblood_dike_runes", 2, 0.01)
    summonParticles("spectrum:drakeblood_dike_runes_major", 2, 0.01)
  }
    
  if (paltaeria_ores.indexOf(event.block.id) > -1){
    summonParticles("spectrum:light_trail", 2, 0.05)
    summonParticles("minecraft:effect", 4, 0)
  }

  if (malachite_ores.indexOf(event.block.id) > -1){
    summonParticles("spectrum:malachite_dike_runes", 2, 0.01)
    summonParticles("spectrum:malachite_dike_runes_major", 2, 0.01)
  }
  
})