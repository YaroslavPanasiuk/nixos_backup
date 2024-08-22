#!/bin/sh
if pidof -qx "gammastep"; then
 	pkill gammastep
 	exit
fi
gammastep -O 4000