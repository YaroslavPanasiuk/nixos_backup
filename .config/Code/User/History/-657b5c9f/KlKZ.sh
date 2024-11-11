#!/bin/sh
echo "-"
DIR=~/Documents/Wallpapers/
PICS=($(ls ${DIR}))

RANDOMPICS=${PICS[ $RANDOM % ${#PICS[@]} ]}

if [[ $(pidof swaybg) ]]; then
  pkill swaybg
fi

swww query || swww-daemon
swww img ${DIR}/${RANDOMPICS} --transition-fps 60 --transition-type grow --transition-pos 20,1060  --transition-duration 3

/home/yaros/.config/waybar/post_setting.sh 

echo "󰸉"