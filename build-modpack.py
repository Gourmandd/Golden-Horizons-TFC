#!/usr/bin/python3

import os
import json
import shutil
import glob
import argparse

pakku_command: str = "pakku"


# Run "python ./build-modpack.py" if you have pakku installed on yout system (recommended)
# Or run "python ./build-modpack.py --pakku-location={path/to/pakku.jar}" and replace "{path/to/pakku.jar}" with where your pakku.jar is downloaded.
# if you don't specify a file location ("python ./build-modpack.py --pakku-location=") it will default to "~/Downloads/pakku.jar" which 

# This script aims to run on any OS, since its being tested on a Linux system. Please make an Github issue if this is not the case.
# Do not run in your game instance folder, clone the repo to its own folder and then run this in that folder. (this script overrides user configs)
# You may need a Curseforge API key. (see the Pakku documentation)


parser = argparse.ArgumentParser(description = "Build Modpack", formatter_class=argparse.ArgumentDefaultsHelpFormatter)
parser.add_argument("-p","--pakku-location", required = False, type = str, help = "The file path of pakku.jar")
args = parser.parse_args()


if type(args.pakku_location) is str:

    if not args.pakku_location.endswith(".jar"):
        raise ValueError("pakku location is not a jar.")
    else:
        pakku_command = "java -jar " + args.pakku_location


print("Step: Editing settings.")

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

    if file_name == "README":
        pass
    else:
        if os.path.isfile(file):
            shutil.copyfile(file, file.replace("overrides/", ""))
            files_to_remove.append(file.replace("overrides/", ""))

# change modpack version in Pakku.
os.system(pakku_command + " cfg -v " + settings["version"])

print("Step: Exporting modpack.")
# Export Curseforge, Modrinth and a server pack. 
os.system(pakku_command + " export") 

for file in files_to_remove:
    os.remove(file)
