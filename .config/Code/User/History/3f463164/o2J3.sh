#!/bin/sh

if pidof -qx "wf-recorder"; then
 	pkill -SIGINT wf-recorder 
    dunstify -a "Screen" "recording stopped"
    exit
fi

dunstify -a "camera" "recording screen as camera"
wf-recorder --muxer=v4l2 --codec=rawvideo --file=/dev/video0 -x yuv1080p


