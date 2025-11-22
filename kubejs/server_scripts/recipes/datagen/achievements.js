const AdvancementDatagen = function () {

  this.frames = {
    TASK: "task",
    CHALLENGE: "challenge",
    GOAL: "goal",
  };
  this.parent = null
  this.location = "modpack:advancements/test"
  this.frame = "task";
  this.show_toast = true
  this.announce_to_chat = true
  this.hidden = true
  this.background = "minecraft:block/dirt"
  this.title = {
    translate: "block.minecraft.dirt"
  }
  this.description = {
    translate: "block.minecraft.dirt"
  }
  this.icon = {
    id: "minecraft:diamond",
  };
  this.criteria = {}
  this.requirements = [[]]
  this.rewards = {}

  this.setParent = function (parent) {
    this.parent = parent
    return this
  }

  this.setId = function (id) {
    this.location = id
    return this
  }

  this.setTitle = function (text) {
    this.title = text
    return this
  }

  this.setDescription = function (text) {
    this.description = text
    return this
  }

  this.addCriteria = function (name, criteria) {
    this.criteria[name] = criteria
    this.requirements[0].push(name)
    return this
  }

  this.setFrame = function (frame) {
    this.frame = frame;
    return this;
  };

  this.setRewards = function (xp, recipe_id, loot_id, function_id) {
    let rewards = {}
    if (!xp == null) {
      rewards["experience"] = xp
    }
    if (!recipe_id == null) {
      rewards["recipe"] = recipe_id
    }
    if (!loot_id == null) {
      rewards["loot"] = loot_id
    }
    if (!function_id == null) {
      rewards["function"] = function_id
    }
    this.rewards = rewards
    return this
  }

  this.setIcon = function (item_id, count, components) {
    let icon = {
      id: item_id,
    };
    if (count != null) {
      icon.count = count;
    }
    if (components != null) {
      icon.components = components;
    }
    this.icon = icon;
    return this;
  };

  this.getAsMap = function () {
    let json = {
      display: {
        icon: this.icon,
        title: this.title,
        description: this.description,
        frame: this.frame, // challenge, goal. task
        background: this.background, // no idea what this is, probably block id, only root needs this
        show_toast: this.show_toast, // bool
        announce_to_chat: this.announce_to_chat,
        hidden: this.hidden,
      },
      criteria: this.criteria,
      requirements: this.requirements,
      rewards: this.rewards,
      send_telemetry_event: false,
    };

    if (parent == null) {
      console.log(json)
      console.log("null")
      return json;
    } else {
      json.parent = this.parent;
      console.log(json)
      console.log("not null")
      return json;
    }
  };

  this.generate = function () {
    this.event.json(this.location, this.getAsMap())
  }

  return this
};

/*
let json = {
  parent: "some parent",
  display: {
    icon: {
      id: "item:id",
      count: "item count? (optional)",
      components: "optional",
    },
    title: "text component",
    description: "text component",
    frame: "frameId", // challenge, goal. task
    background: "", // no idea what this is
    show_toast: false, // bool
    announce_to_chat: false,
    hidden: false,
  },
  criteria: {
    name: {
      trigger: "",
      conditions: {},
    },
  },
  requirements: [["name", "name2"]],
  rewards: {
    experience: 0,
    recipes: "recipe_id",
    loot: "loottable_id",
    function: "mc_function",
  },
  send_telemetry_event: false,
};
*/
