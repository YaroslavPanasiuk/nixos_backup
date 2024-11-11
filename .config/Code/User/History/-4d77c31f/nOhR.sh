#!/bin/sh
WAYBAR_CONFIG="$HOME/.config/waybar/config.jsonc"
count=$(hyprctl clients | grep 'ID:' | wc -l)
if [ $count -gt 14 ]; then
  sed -i 's/"wlr\/taskbar",/\/"wlr\/taskbar",/' "$WAYBAR_CONFIG"
  /home/yaros/.config/waybar/uncomment_taskbar.sh &
  disown
  pkill -USR2 waybar 
fi