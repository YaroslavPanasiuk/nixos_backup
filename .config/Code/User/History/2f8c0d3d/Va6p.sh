#!/bin/sh
query=$(swww query)
path="${query#*/}"
wpg -s "/$path"
wal -i "/$path"
#/home/yaros/.config/waybar/restart_thunar.sh 
#echo "set waybar"
if pidof -qx "rofi"; then
 	pkill rofi
 	rofi -show drun -config ~/.config/wofi/config.rasi # && echo "set rofi"
fi
cp ~/.cache/wal/dunstrc ~/.config/dunst 
cp ~/.cache/wal/colors-sddm.conf ~/Documents/Projects/sddm-sugar-dark/theme.conf
cp "/$path" ~/Documents/Projects/sddm-sugar-dark/Background.jpg
pkill dunst 
/home/yaros/.config/waybar/update_telegram.sh
/home/yaros/Documents/rebuild.sh
exit
