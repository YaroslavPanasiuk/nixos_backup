#!/bin/sh

# List of opened windows
mapfile -t windows < <( hyprctl clients | grep "class: " | awk '{print $2}' )
mapfile -t workspaces < <( hyprctl clients | grep "workspace: " | awk '{print $2}' )
thunar_workspaces=()

for i in "${!windows[@]}"; do
    if [[ "${windows[$i]}" == "thunar" ]]; then
        thunar_workspaces+=("${workspaces[$i]}")
    fi
done

if [ "${#thunar_workspaces[@]}" -eq 0 ]; then
    exit
fi


thunar -q

for i in "${!thunar_workspaces[@]}"; do
	thunar &
	sleep 1
    hyprctl dispatch movetoworkspacesilent "${thunar_workspaces[$i]}",thunar
done
