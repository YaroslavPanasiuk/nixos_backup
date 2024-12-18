#!/bin/sh

if pidof -qx "wf-recorder"; then
 	pkill -SIGINT wf-recorder 
    dunstify -a "Screen" "Writing file to ~/Videos/recordings ..."
    exit
fi

dunstify -a "Screen" "Started recording" 
wf-recorder --audio="Built-in Audio" -f "Videos/recordings/$(date +'%d.%m.%Y_%H:%M:%S').mp4"