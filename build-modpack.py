#!/usr/bin/python

import os
import json
import shutil
import glob

# This script aims to run on any OS, make an Github issue if this is not the case.
# Do not run in your instance folder, clone the repo to its own folder and then build. 
# You need Pakku installed on your system: https://juraj-hrivnak.github.io/Pakku/installing-pakku.html
# You will most likely need a Curseforge API key. (see the Pakku documentation)

print("Step: Editing settings.")


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
menu_version_file = open('overrides/config/fancymenu/assets/version.txt', 'w')
menu_version_file.write("Version: " + settings["version"])
menu_version_file.close()


FOLDER = __file__.replace("build-modpack.py", "")
files_to_remove = []

for file in glob.iglob(FOLDER + "overrides/" + '**/*', recursive= True):

    file_name = file.split("/")
    file_name.reverse()
    file_name = file_name[0]
    print(file_name)

    if file_name == "README":
        pass
    else:
        if os.path.isfile(file):
            shutil.copyfile(file, file.replace("overrides/", ""))
            files_to_remove.append(file.replace("overrides/", ""))


# change loader to only Forge, to circumvent a Pakku bug.
edit_loaders({"forge":"47.3.6"})


# change modpack version in Pakku.
os.system("pakku cfg -v " + settings["version"])


print("Step: Exporting modpack.")
# Export Curseforge, Modrinth and a server pack. 
os.system("pakku export") 



print("Step: Reverting changes")
# change loader back to Fabric & Forge, to circumvent a Pakku bug.
edit_loaders({"fabric": "0.16.14","forge": "47.3.6"})

for file in files_to_remove:
    os.remove(file)
