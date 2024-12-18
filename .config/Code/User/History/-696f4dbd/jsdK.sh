#!/bin/sh
#status=$(bluetoothctl show | grep "Powered: yes")

if [ $(pidof post_setting.sh) ]; then
    echo "no"  # Bluetooth off icon
else
    echo "yes"  # Bluetooth on icon
fi
