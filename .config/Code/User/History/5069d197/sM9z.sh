#!/bin/sh

if pidof -qx "wf-recorder"; then
 	pkill -SIGINT wf-recorder 
    dunstify -a "Screen" "Writing file to ~/Videos/recordings ..."
    exit
fi

dunstify -a "Screen" "Started recording" 
wf-recorder --audio="alsa_output.pci-0000_00_1f.3.analog-stereo" -f "Videos/recordings/$(date +'%d.%m.%Y_%H:%M:%S').mp4"