#!/bin/sh
max_brightness=$(brightnessctl max)
percent=$(($max_brightness / 100))
dunstify -a "volume_notification" "volume" -u normal "$percent"


function get_brightness {
    brightnessctl get
}

function send_notification {
    brightness=`get_brightness`
    dunstify -a "volume_notification" "volume" -i "/home/yaros/.config/dunst/brightness.png" -h int:value:$(($(echo $brightness | awk "{printf '%3d\n',$1}"))) -r 2593 -u normal "Brightness: "
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
