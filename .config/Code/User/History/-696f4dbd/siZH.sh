#!/bin/sh
#status=$(bluetoothctl show | grep "Powered: yes")

if [ $(pidof bash) ]; then
    echo "no"  # Bluetooth off icon
else
    echo "yes"  # Bluetooth on icon
fi
