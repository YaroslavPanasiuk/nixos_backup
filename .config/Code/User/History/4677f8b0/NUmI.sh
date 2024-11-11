#!/bin/sh
WAYBAR_CONFIG="$HOME/.config/waybar/config.jsonc"
count=$(hyprctl clients | grep 'ID:' | wc -l)
lines=$(expr $count / 5 + 1) 
if [ $count -gt 14 ]; then
  echo ""
  sed -i 's/"wlr/taskbar",/\/\/"wlr/taskbar",/' "$WAYBAR_CONFIG"
fi

WAYBAR_CONFIG="$HOME/.config/waybar/config.jsonc"

# Hide or show a module (e.g., the clock module)
if grep -q '"id": "clock",' "$WAYBAR_CONFIG"; then
    # Hide the module by commenting it out
    sed -i 's/"id": "clock",/\/\/"id": "clock",/' "$WAYBAR_CONFIG"
else
    # Show the module by uncommenting it
    sed -i 's/\/\/"id": "clock",/"id": "clock",/' "$WAYBAR_CONFIG"
fi

# Reload Waybar to apply the changes
pkill -USR2 waybar
