#!/bin/sh
while [ true ];
do
sleep 5m
sed -i  's/^.*"wlr\/taskbar",.*$/"wlr\/taskbar",/' "$HOME/.config/waybar/config.jsonc"
done