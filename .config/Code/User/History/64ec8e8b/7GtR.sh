#!/bin/sh

virsh --connect qemu:///system net-start default
virsh --connect qemu:///system start 'win10'
virt-viewer --connect qemu:///system --full-screen 'win10'