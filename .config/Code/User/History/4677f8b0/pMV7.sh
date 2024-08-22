#!/bin/sh
count=$(hyprctl workspaces | grep 'ID:' | wc -l)
lines=$(expr $count / 6 + 1) 
echo $lines