#!/bin/sh
count=$(hyprctl clients | grep 'ID:' | wc -l)
lines=$(expr $count / 5 + 1) 
waybar
if [ $count -gt 14 ]; then
  echo ""
  waybar
fi
