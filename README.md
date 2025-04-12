# Golden-Horizons-TFC
Files for a minecraft modpack for 1.20.1 that is based on top of the gameplay created by the [TerraFirmaCraft](https://github.com/TerraFirmaCraft/TerraFirmaCraft) mod

**This entire text is a work in progress**

Golden horizons is available on Curseforge and Modrinth
[Modrinth](https://modrinth.com/modpack/golden-horizons)
[Curseforge](https://www.curseforge.com/minecraft/modpacks/golden-horizons-tfc)

## Reporting issues

You can report issues here on github or on Discord. Espacially if its a crash you should also send the crash/debug log which you can sanitise and share using [MCLOGS](https://mclo.gs/)

## Suggestions / discussion 

This section is being worked on.

There is a discord server which you can find on the Modrinth page. Though so far most discussion lives on the Content Forum on the TerraFirmaCraft discord server **Note**: *please do not ask for support or about suggestions for modpack specific things in the general of the Terrafirmacraft server*, ask on the thread in the "**Content**" channel, the server has had a few issues like that with other modpacks before.

## Some Notes

The python folder contains the scripts that generated all the json files with the MCresources comment at the top.
The config folders have configs for mods that are not in the modpack, they are a leftover from testing. 

## Aether

Work on adding the Aether and addons happens on the aether branch, it has its own TODO list

## Installing the pack from github

This might be incomplete

A guide if you might want to install the "bleeding edge" of the modpack for any reason like development or for things not yet in a release.

This will go over how to edit the previous release with whatever new changes.
Other ways like "splicing" the modpacks import file might be possible with some extra files and support that will be added at some point (the manifest and modlist files)

1. Install the newest release with a launcher of your choice, and download the modpack either through the launcher or import the modpack file (.zip for Curseforge, .mcpack for modrinth, other launchers may support both or none). You might have and want to launch game once to make sure everything is fine.

2. If there are any mods that were updated, removed or added since the latest release, make those changes (you can check the commit history)

3. Download the latest files from github, if you have experience with git you may be able to get it to do this for you. Otherwise download the **config**, **default configs**, **kubejs** and **emi.json** files and replace the ones in the modpacks folder. Make sure to not "merge" the files since that will keep files that were removed, best way would be to delete the existing ones and then add the new ones in.

4. Run the game and have a look whether the new changes and old stuff stuff still work. Things to watch out for are, Kubejs scripts (warnings in chat), if modpack datapack is loaded (check recipes, example: Farmer's Delight compost) and if modpack resources are loaded. (If there are no tips, or if you search @kubejs in EMI there are a lot of items are missing their textures)

