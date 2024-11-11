#!/bin/sh
workspace_id=1
    # Get the current workspaces
hyprctl workspaces -j | jq -r '.[] | .id' | sort -n | while read -r id; do
    hyprctl dispatch renameworkspace "$id" "$workspace_id"
    workspace_id=$((workspace_id + 1))
done

