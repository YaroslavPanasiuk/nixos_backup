#!/bin/sh
#status=$(bluetoothctl show | grep "Powered: yes")

if [ $(pidof post_setting.sh) ]; then
    echo ""  # Bluetooth off icon
else
    echo ""  # Bluetooth on icon
fi
