#!/bin/sh
waybar
sed -i  's/^.*"wlr\/taskbar",.*$/"wlr\/taskbar",/' "$HOME/.config/waybar/config.jsonc"
pkill -USR2 waybar