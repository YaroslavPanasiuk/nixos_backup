#!/bin/sh
if [[ $(pidof swaybg) ]]; then
  pkill swaybg
fi

swww query || swww-daemon

#change-wallpaper using swww
swww img ~/shared/Wallpapers/frieren.jpg --transition-fps 60 --transition-type outer --transition-pos 20,1060  --transition-duration 2
~/.config/waybar/post_setting.sh

