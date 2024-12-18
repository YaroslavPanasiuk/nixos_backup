#!/bin/sh
brightnessctl set $1%-
if [ $(brightnessctl get) -le 1 ]
then brightnessctl set 1
fi