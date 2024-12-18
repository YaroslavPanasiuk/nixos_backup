#!/bin/sh

virsh --connect qemu:///system destroy RDPWindows
virsh --connect qemu:///system net-destroy default