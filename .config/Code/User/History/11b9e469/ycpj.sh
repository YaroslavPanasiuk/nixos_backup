#!/bin/sh

layout=$(hyprctl devices -j | jq '.keyboards.[] | select(.main == true).active_keymap' | awk '{print $NF}')

if [ $1 == "ua" ] && [ "$layout" != '"Ukrainian"' ]; then 
    layout='(US)"'
fi
if [ $1 == "us" ] && [ "$layout" != '(US)"' ]; then 
    layout='"Ukrainian"'
fi
if [ -n $1 ]; then
    exit
fi

if [ $layout == '"Ukrainian"' ]; then
    hyprctl switchxkblayout at-translated-set-2-keyboard 0
    dunstify -a "Layout" "English" -i "/home/yaros/Documents/america-flag.png" -u low
    exit
fi
if [ $layout == '(US)"' ]; then
    hyprctl switchxkblayout at-translated-set-2-keyboard 1
    dunstify -a "Layout" "Ukrainian" -i "/home/yaros/Documents/flag.png" -u low
    exit
fi