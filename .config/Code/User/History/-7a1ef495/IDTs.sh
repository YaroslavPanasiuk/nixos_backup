#!/bin/sh

dunstify -a "waydroid" "Starting adnroid device..."


mapfile -t windows < <( hyprctl clients | grep "class: " | awk '{print $2}' )
mapfile -t workspaces < <( hyprctl clients | grep "workspace: " | awk '{print $2}' )

for i in "${!windows[@]}"; do
    if [[ "${windows[$i]}" == "Waydroid" ]]; then
        hyprctl dispatch workspace "${workspaces[$i]}"
        exit
    fi
done

echo 1 | sudo -S waydroid container start
waydroid session start &
waydroid show-full-ui

dunstify -a "waydroid" "Should start now"

while pgrep -x "Waydroid" > /dev/null
do
  echo "check"
  dunstify -a "check"

  sleep 5
done

~/Documents/stop_waydroid.sh