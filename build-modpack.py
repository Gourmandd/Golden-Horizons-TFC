#!/usr/bin/python

import os
import json

# This script aims to run on any OS, make an Github issue if this is not the case.
# You need Pakku installed on your system: https://juraj-hrivnak.github.io/Pakku/installing-pakku.html
# You will most likely need a Curseforge API key.

print("Step: Settings up settings.")

def edit_loaders(loaders: dict = {"forge":"47.3.6"}):

    pakku_lock_file = open('pakku-lock.json', 'r+')
    pakku_lock = json.loads(pakku_lock_file.read())
    pakku_lock["loaders"] = loaders

    pakku_lock_file.close()
    open('pakku-lock.json', 'w').close()

    pakku_lock_file = open('pakku-lock.json', 'r+')
    json.dump(pakku_lock, pakku_lock_file, indent=4)
    pakku_lock_file.close()

# get modpack settings as dict.
settings_file = open('modpack-settings.json', 'r')
settings = json.loads(settings_file.read())
settings_file.close()

# set main menu subtitle to version.
menu_version_file = open('.pakku/client-overrides/config/fancymenu/assets/version.txt', 'w')
menu_version_file.write("Version: " + settings["version"])
menu_version_file.close()

# change loader to only Forge, to circumvent a Pakku bug.
edit_loaders({"forge":"47.3.6"})

# change modpack version in Pakku.
os.system("pakku cfg -v " + settings["version"])

print("Step: Exporting modpack.")
# Export Curseforge, Modrinth and a server pack. 
os.system("pakku export") 



print("Step: Reverting changes to Pakku-lock")
# change loader back to Fabric & Forge, to circumvent a Pakku bug.
edit_loaders({"fabric": "0.16.14","forge": "47.3.6"})