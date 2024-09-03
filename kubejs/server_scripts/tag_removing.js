ServerEvents.tags("item", event =>{

//this can be done with json
event.remove("forge:rods/copper", "createaddition:copper_rod")
event.remove("forge:rods/gold", "createaddition:gold_rod")
event.remove("forge:rods/brass", "createaddition:brass_rod")

})