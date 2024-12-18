#!/bin/sh
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