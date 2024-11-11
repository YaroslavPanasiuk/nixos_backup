#!/bin/sh
brightnessctl set $1%-
BRIGHTNESS=$(brightnessctl get)
if [ $BRIGHTNESS -le 1 ]
then brightnessctl set 1
fi