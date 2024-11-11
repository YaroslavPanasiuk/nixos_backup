#!/bin/sh
hyprctl dispatch workspace new
virsh --connect qemu:///system net-start default
virsh --connect qemu:///system start 'win10'
virt-manager --connect qemu:///system --full-screen 'win10'