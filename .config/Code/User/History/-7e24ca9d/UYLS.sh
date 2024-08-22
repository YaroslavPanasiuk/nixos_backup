#!/bin/sh
sleep 5 
sed -i  's/^.*pattern.*$/   "wlr\/taskbar",/' "$WAYBAR_CONFIG"
