#!/bin/sh
sed -i  's/^.*"wlr\/taskbar",.*$/"wlr\/taskbar",/' "$HOME/.config/waybar/config.jsonc"
kill waybar &
#sleep 1
echo "love"
#waybar