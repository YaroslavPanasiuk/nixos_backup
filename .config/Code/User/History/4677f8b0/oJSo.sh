#!/bin/sh
count=$(hyprctl workspaces | grep 'ID:' | wc -l)
lines=$(expr $count / 6 + 1) 
rofi -show window -config ~/.config/wofi/alttab.rasi -lines 10
echo $lines