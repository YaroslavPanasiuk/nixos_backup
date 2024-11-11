#!/bin/sh

# List of opened windows
mapfile -t windows < <( hyprctl clients | grep "class: " | awk '{print $2}' )
mapfile -t ids < <( hyprctl clients | grep "Window " | awk '{print $2}' )
xdg-open https://calendar.google.com/calendar/u/0/r?pli=1
for i in "${!windows[@]}"; do
    if [[ "${windows[$i]}" == "firefox" ]]; then
        hyprctl dispatch focuswindow "${ids[$i]}"
    fi
done