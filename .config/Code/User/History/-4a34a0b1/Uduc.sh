#!/bin/sh

virsh --connect qemu:///system destroy WindowsFull
virsh --connect qemu:///system net-destroy default