#!/bin/sh

swww query || swww-daemon
swww img /home/yaros/Documents/Wallpapers/$1 --transition-fps 60 --transition-type grow --transition-pos 20,1060  --transition-duration 3

/home/yaros/.config/waybar/post_setting.sh 

