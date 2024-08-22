#!/bin/sh
sleep 5 
sed -i  's/^.*pattern.*$/   "wlr\/taskbar",/' "$HOME/.config/waybar/config.jsonc"
