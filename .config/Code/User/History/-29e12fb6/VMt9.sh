#!/bin/sh
BRIGHTNESS=$(brightnessctl get)
if [ $BRIGHTNESS -le 1 ]
then brightnessctl set 1
else brightnessctl set $1%-
fi