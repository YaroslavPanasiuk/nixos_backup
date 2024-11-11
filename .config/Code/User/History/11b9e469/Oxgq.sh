#!/bin/sh

layout=$(hyprctl devices -j | jq '.keyboards.[] | select(.main == true).active_keymap' | awk '{print $NF}')
echo $layout
if [ $layout == '(US)"' ]; then
    dunstify -a "Layout" "English" -i "/home/yaros/Documents/america-flag.png" -u low
    exit
fi
if [ $layout == 'Ukrainian"' ]; then
    dunstify -a "Layout" "Ukrainian" -i "/home/yaros/Documents/flag.png" -u low
    exit
fi