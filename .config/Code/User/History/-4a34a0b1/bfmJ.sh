#!/bin/sh

virsh --connect qemu:///system destroy TestWin-10
virsh --connect qemu:///system net-destroy default