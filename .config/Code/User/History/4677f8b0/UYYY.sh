#!/bin/sh
count=$(hyprctl workspaces | grep 'ID:' | wc -l)
lines=$(expr $count / 5 + 1) 
echo "${lines}"
rofi -show window -config ~/.config/wofi/alttab.rasi -theme-str "#listview { lines: '${lines}'; }"
