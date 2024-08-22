#!/bin/sh
local workspace_id=1
    # Get the current workspaces
hyprctl workspaces -j | jq -r '.[] | .id' | sort -n | while read -r id; do
    hyprctl renameworkspace "$id" "Workspace $workspace_id"
    workspace_id=$((workspace_id + 1))
done

