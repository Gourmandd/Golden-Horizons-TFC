BlockEvents.rightClicked(event =>{

    const SPECTRUM_FLUID_BLOCKS = [
        "spectrum:titration_barrel",
        "spectrum:fusion_shrine_basalt",
        "spectrum:fusion_shrine_calcite"
    ]

    if (SPECTRUM_FLUID_BLOCKS.indexOf(event.block) == -1){
        return
    }

    const FLUID_CONTAINERS = [
        "tfc:wooden_bucket",
        "tfc:metal/bucket/red_steel",
        "tfc:metal/bucket/blue_steel",
        "tfc:ceramic/jug",
        "kubejs:ceramic/yixing_jug",
        "kubejs:ceramic/earthenware_jug",
        "kubejs:ceramic/yellowware_jug",
        "kubejs:ceramic/porcelain_jug",
        "tfc:silica_glass_bottle",
        "tfc:hematitic_glass_bottle",
        "tfc:volcanic_glass_bottle",
        "tfc:olivine_glass_bottle",
    ]
    
    const FLUID_CONTAINER_CAPACITY = {
        "tfc:wooden_bucket": 1000,
        "tfc:metal/bucket/red_steel": 1000,
        "tfc:metal/bucket/blue_steel": 1000,
        "tfc:ceramic/jug": 100,
        "kubejs:ceramic/yixing_jug": 100,
        "kubejs:ceramic/earthenware_jug": 100,
        "kubejs:ceramic/yellowware_jug": 100,
        "kubejs:ceramic/porcelain_jug": 100,
        "tfc:silica_glass_bottle": 500,
        "tfc:hematitic_glass_bottle": 500,
        "tfc:volcanic_glass_bottle": 500,
        "tfc:olivine_glass_bottle": 500,
    }
    
    if (FLUID_CONTAINERS.indexOf(event.item.id) == -1){
        return
    }

    let entityData = event.block.getEntityData()

    let blockFluidName = entityData.get("FluidVariant").fluid
    let blockFluidAmount = entityData.getLong("FluidAmount")

    if (event.item.nbt == null){
        OffloadFluidFromContainer()
    } else {
        OffloadFluidFromItem()
    }



    function OffloadFluidFromContainer(){
        
        let amountToTake = 0
        let remainderFluidAmount = 0

        if (FLUID_CONTAINER_CAPACITY[event.item.id] > (blockFluidAmount / 81)){
            amountToTake = blockFluidAmount / 81
            remainderFluidAmount = 0
        } else {
            amountToTake = FLUID_CONTAINER_CAPACITY[event.item.id]
            remainderFluidAmount = Math.max(0, (blockFluidAmount - (FLUID_CONTAINER_CAPACITY[event.item.id] * 81)))
        }

        event.item.setNbt({"fluid": {"Amount": amountToTake, "FluidName": blockFluidName}})

        entityData.putLong("FluidAmount", remainderFluidAmount)

        if (remainderFluidAmount = 0){
            entityData.put("FluidVariant",  {"fluid": "minecraft:empty"})
        }

        event.block.setEntityData(entityData)

        event.cancel()
    }



    function OffloadFluidFromItem(){

        if (event.item.nbt.get("fluid") == null){
            return
        }

        if (blockFluidAmount == 81000){
            return
        }


        let itemData = event.item.getNbt()

        let itemFluidName = itemData.get("fluid").FluidName 
        let itemFluidAmount = itemData.get("fluid").Amount 

        let newFluidAmount = blockFluidAmount + (itemFluidAmount * 81)
        let fluidRemainder = 0

        if (newFluidAmount > 81000){
            fluidRemainder = newFluidAmount - 81000
        }  

        if (blockFluidName !== itemFluidName && blockFluidName !== "minecraft:empty"){
            return
        }


        entityData.putLong("FluidAmount", newFluidAmount - fluidRemainder) //Convertion between milibuckets and droplets is 1:81
        entityData.put("FluidVariant",  {"fluid": itemFluidName})

        event.block.setEntityData(entityData)

        if (fluidRemainder == 0){
            event.item.nbt = null
        } else {
            event.item.nbt.fluid.putInt("Amount", fluidRemainder / 81) //Divide by 81 to get milibuckets back
        }

        event.cancel()
    }
})