#!/bin/sh

# List of opened windows
mapfile -t windows < <( hyprctl clients | grep "class: " | awk '{print $2}' )
mapfile -t workspaces < <( hyprctl clients | grep "workspace: " | awk '{print $2}' )
#thunar_workspaces=()

#for i in "${!windows[@]}"; do
#    if [[ "${windows[$i]}" == "thunar" ]]; then
#        thunar_workspaces+=("${workspaces[$i]}")
#    fi
#done

hyprctl dispatch workspace new
virsh --connect qemu:///system net-start default
virsh --connect qemu:///system start 'win10'
virt-viewer --connect qemu:///system --full-screen 'TestWin-10'

while pgrep -x "virt-viewer" > /dev/null
do
  sleep 5
done

echo "virt-viewer closed, shutting down VM..."
virsh --connect qemu:///system destroy win10
virsh --connect qemu:///system net-destroy default