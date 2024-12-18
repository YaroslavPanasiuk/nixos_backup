#!/bin/sh
hyprctl dispatch workspace new
virsh --connect qemu:///system net-start default
virsh --connect qemu:///system start 'win10'
virt-manager --connect qemu:///system --full-screen 'win10'

while pgrep -x "virt-viewer" > /dev/null
do
  sleep 5
done

echo "virt-viewer closed, shutting down VM..."
virsh --connect qemu:///system shutdown win10