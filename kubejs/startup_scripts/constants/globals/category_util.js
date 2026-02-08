let $CategoryUtil = Java.loadClass("net.gourmand.core.registry.category.CategoryUtil")

// metal
global.KUBEJS_METALS = $CategoryUtil.getMetalNames()

// clay
global.CUSTOM_CLAY_TYPES = $CategoryUtil.getClayNames()

global.CLAY_ITEM_TYPES = $CategoryUtil.getClayItemTypeNames()

global.CLAY_MOLD_TYPES = $CategoryUtil.getClayMoldNames()

// crop
global.CUSTOM_CROP_TYPES = $CategoryUtil.getCropNames()

global.CUSTOM_FRUIT_TREE_TYPES = $CategoryUtil.getFruitTreeNames()

global.CUSTOM_STATIONARY_BUSH_TYPES = $CategoryUtil.getStationaryBushNames()

global.CUSTOM_SPREADING_BUSH_TYPES = $CategoryUtil.getSpreadingBushNames()

// ore
global.CUSTOM_ORES = $CategoryUtil.getAllOreNames()

global.CUSTOM_NON_GRADED_ORES = $CategoryUtil.getNonGradedOreNames()


global.CUSTOM_GRADED_ORES = $CategoryUtil.getGradedOreNames()

global.CUSTOM_PASTEL_ORES = $CategoryUtil.getPastelOreNames()

// wood
global.PASTEL_WOOD_TYPES = $CategoryUtil.getPastelWoodNames()

// rock
global.CUSTOM_ROCK_TYPES = $CategoryUtil.getAllRockNames()

global.FULL_VARIANT_CUSTOM_ROCK_TYPES = $CategoryUtil.getAllVariantRockNames()
