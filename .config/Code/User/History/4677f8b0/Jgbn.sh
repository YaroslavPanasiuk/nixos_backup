#!/bin/sh
count=$(hyprctl clients | grep 'ID:' | wc -l)
lines=$(expr $count / 6 + 1) 
echo "${lines}"
echo "${count}"
rofi -show window -config ~/.config/wofi/alttab.rasi -theme-str "#listview { lines: ${lines}; }"
