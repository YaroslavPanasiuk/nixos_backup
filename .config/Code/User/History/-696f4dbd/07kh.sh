#!/bin/bash
status=$(bluetoothctl show | grep "Powered: yes")

if [ -z "$status" ]; then
    echo ""  # Bluetooth off icon
else
    echo ""  # Bluetooth on icon
fi
