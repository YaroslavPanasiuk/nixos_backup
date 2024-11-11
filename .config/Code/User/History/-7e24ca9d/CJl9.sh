#!/bin/sh
while [ true ];
do
sleep 5m
count=$(hyprctl clients | grep 'ID:' | wc -l)
if [ $count -le 14 ]; then
sed -i  's/^.*"wlr\/taskbar",.*$/"wlr\/taskbar",/' "$HOME/.config/waybar/config.jsonc"
fi
done