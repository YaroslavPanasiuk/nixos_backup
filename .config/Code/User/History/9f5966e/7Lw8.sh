#!/bin/sh
sed -i  's/^.*"wlr\/taskbar",.*$/"wlr\/taskbar",/' "$HOME/.config/waybar/config.jsonc"
pkill -USR1 waybar
waybar