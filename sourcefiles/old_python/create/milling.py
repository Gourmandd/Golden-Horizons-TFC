from mcresources import ResourceManager

rm = ResourceManager("horizons")

gems =[
    "amethyst",
    "opal",
    "emerald",
    "diamond",
    "lapis_lazuli",
    "pyrite",
    "ruby",
    "sapphire",
    "topaz"
]

dyes = [ #this only contains dyes that have a quern recipes that has a tfc:makes_brown_dye like tag,
    "white",
    "brown",
    "red",
    "orange",
    "yellow",
    "green",
    "light_blue",
    "purple",
    "magenta",
    "pink"
]

def gem_crushing(gem):
    rm.recipe("milling/gem/cut_" + gem, "create:crushing", {
  "ingredients": [
    {
      "item": "tfc:gem/" + gem
    }
  ],
  "results": [
    {
      "item": "tfc:powder/" + gem,
      "count": 4
    }
  ],
  "processingTime": 50
})
    rm.recipe("milling/gem/raw_" + gem, "create:crushing", {
  "ingredients": [
    {
      "item": "tfc:ore/" + gem
    }
  ],
  "results": [
    {
      "item": "tfc:powder/" + gem,
      "count": 4
    }
  ],
  "processingTime": 50
})

for gem in gems:
    gem_crushing(gem)


def dye_milling(dye):
    rm.recipe("milling/dye/" + dye, "create:milling", {
  "ingredients": [
    {
      "tag": "tfc:makes_" + dye + "_dye"
    }
  ],
  "results": [
    {
      "item": "minecraft:" + dye + "_dye",
      "count": 2
    }
  ],
  "processingTime": 50
})

for dye in dyes:
    dye_milling(dye)