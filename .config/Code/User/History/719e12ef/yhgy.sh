#!/bin/bash

# Define the low battery threshold (in percentage)
THRESHOLD=80

# Get the current battery level
BATTERY_LEVEL=$(cat /sys/class/power_supply/BAT0/capacity)
BATTERY_STATUS=$(cat /sys/class/power_supply/BAT0/status)

# Check if the battery is discharging and below the threshold
if [ "$BATTERY_STATUS" == "Discharging" ] && [ "$BATTERY_LEVEL" -le "$THRESHOLD" ]; then
    notify-send "Low Battery" "Battery level is at ${BATTERY_LEVEL}%. Please plug in your charger."
fi