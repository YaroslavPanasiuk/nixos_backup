#!/bin/sh


function send_notification {
    dunstify -a "volume_notification" "volume" -i "/home/yaros/.config/dunst/brightness.png" -h int:value:$(($(echo $(brightnessctl get) | awk '{printf "%3d\n",$1}') * 100 / $(brightnessctl max))) -r 2593 -u normal "Brightness: "
}

echo $2

case $1 in
    up)
	brightnessctl set $2%+ 
	send_notification
	;;
    down)
	brightnessctl set $2%-
	if [ $(brightnessctl get) -le 1 ]; then 
		brightnessctl set 1
	fi
	send_notification
	;;
    
esac
