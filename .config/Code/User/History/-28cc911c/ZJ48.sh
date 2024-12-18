#!/bin/sh

function get_brightness {
    brightnessctl get
}

function send_notification {
    brightness=`get_brightness`
    dunstify -a "volume_notification" "volume" -i "~/.config/dunst/brightness.png" -h int:value:$(($(echo $brightness | awk '{printf "%3d\n",$1 / 15}'))) -r 2593 -u normal "Brightness: "
}

    

case $1 in
    up)
	# Set the volume on (if it was muted)
	brightnessctl set 10%+ 
	# Up the volume (+ 5%)
	send_notification
	;;
    down)
	# Set the volume on (if it was muted)
	~/.config/hypr/brightnessdown.sh
	send_notification
	;;
    
esac
