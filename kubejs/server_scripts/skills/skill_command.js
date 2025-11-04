//packmode: skills

function skillCommand(counter, type, player, value){

    const data = PlayerDataMap[player.getUuid()]

    if (counter == "level"){
        switch(type) {
            case "add":
                data.addLevel(value)
                break;
            case "remove":
                data.removeLevel(value)
                break;
            case "set":
                data.setLevel(value)
                break;
        }
    }

    if (counter == "points"){
        switch(type) {
            case "add":
                data.addPoints(value)
                break;
            case "remove":
                data.removePoints(value)
                break;
            case "set":
                data.setPoints(value)
                break;
        }
    }

    if (counter == "experience"){
        switch(type) {
            case "add":
                data.addExperience(value)
                break;
            case "remove":
                data.removeExperience(value)
                break;
            case "set":
                data.setExperience(value)
                break;
        }
    }
}



ServerEvents.commandRegistry(event => {

    const { commands: Commands, arguments: Arguments} = event;

    event.register(

        Commands.literal("skill")
		.requires(src => src.hasPermission(2))//2 is op.
        .then(Commands.argument('counter', Arguments.STRING.create(event)) // level, points, experience
            .then(Commands.argument('type', Arguments.STRING.create(event)) // add, remove, set
                .then(Commands.argument('player', Arguments.PLAYER.create(event))
                    .then(Commands.argument('value', Arguments.INTEGER.create(event))

                        .executes(ctx => {
                            
                            const counter = Arguments.STRING.getResult(ctx, "counter");
                            const type = Arguments.STRING.getResult(ctx, "type");
                            const player = Arguments.PLAYER.getResult(ctx, "player");
                            const value = Arguments.INTEGER.getResult(ctx, "value");

                            if (PlayerDataMap[player.getUuid()] == null){

                                return 0
                            } else {

                                skillCommand(counter, type, player, value)
                            }

                            return 1 // always return something
                        })
                    )
                )
            )
        )
    )
})