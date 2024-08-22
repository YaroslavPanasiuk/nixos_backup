#!/bin/sh
WAYBAR_CONFIG="$HOME/.config/waybar/config.jsonc"
count=$(hyprctl clients | grep 'ID:' | wc -l)
lines=$(expr $count / 5 + 1) 
if [ $count -gt 14 ]; then
  sed -i 's/"wlr\/taskbar",/\/"wlr\/taskbar",/' "$WAYBAR_CONFIG"
  sleep 1
  pkill -USR2 waybar

fi

