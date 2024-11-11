#!/bin/sh
#status=$(bluetoothctl show | grep "Powered: yes")

if [ $(pidof post_setting.sh) ]; then
    echo "yes"  # Bluetooth off icon
else
    echo "no"  # Bluetooth on icon
fi
