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

There is a discord server which you can find on the Modrinth page. Though so far, most discussion lives on the Content Forum on the TerraFirmaCraft discord server **Note**: *please do not ask for support or about suggestions for modpack specific things in the general of the Terrafirmacraft server*, ask on the thread in the "**Content**" channel, the server has had a few issues like that with other modpacks before.

## Some Notes

To add, remove, or update mods see Pakku documentation, which allows for version controlled mod management if used with Git. (https://juraj-hrivnak.github.io/Pakku/home.html)

Some assets are licensed under ARR, these are just art assets such as pack icons. (See LICENSE file for more info)

## Building/Exporting the pack

1. Download/install dependancies. Python and Pakku. (See instructions for Pakku here: https://juraj-hrivnak.github.io/Pakku/installing-pakku.html)

2. Clone the repository, you don't need to nessesarily do this in the .minecraft folder in a launcher such as Prism Launcher.

3. Run the "build-modpack.py" Python script. It will use Pakku to export a .zip (for Curseforge), .mrpack (for Modrinth), and another .zip but for servers (not distributed).

Pakku may give you an error if you don't provide an Curseforge API key, used to download mods for the server pack which is only really recommened for server operators who want to install the pack on a server.
 
