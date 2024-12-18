#!/bin/sh
#status=$(bluetoothctl show | grep "Powered: yes")

if [ "true" ]; then
    echo ""  # Bluetooth off icon
else
    echo ""  # Bluetooth on icon
fi
