#!/bin/sh

# List of opened windows
mapfile -t windows < <( hyprctl clients | grep "class: " | awk '{print $2}' )
mapfile -t workspaces < <( hyprctl clients | grep "workspace: " | awk '{print $2}' )

for i in "${!windows[@]}"; do
    if [[ "${windows[$i]}" == "virt-viewer" ]]; then
        hyprctl dispatch workspace "${workspaces[$i]}"
        exit
    fi
done

hyprctl dispatch workspace new
virsh --connect qemu:///system net-start default
virsh --connect qemu:///system start 'TestWin-10'
virt-viewer --connect qemu:///system --full-screen 'TestWin-10'

while pgrep -x "virt-viewer" > /dev/null
do
  sleep 10
done

echo "virt-viewer closed, shutting down VM..."
virsh --connect qemu:///system destroy TestWin-10
virsh --connect qemu:///system net-destroy default