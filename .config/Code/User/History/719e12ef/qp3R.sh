#!/bin/sh

# Define the low battery threshold (in percentage)
THRESHOLD=20
CRITICAL_THRESHOLD=10

# Get the current battery level
BATTERY_LEVEL=$(cat /sys/class/power_supply/BAT0/capacity)
BATTERY_STATUS=$(cat /sys/class/power_supply/BAT0/status)

# Check if the battery is discharging and below the threshold
if [ "$BATTERY_STATUS" == "Discharging" ] && [ "$BATTERY_LEVEL" -le "$CRITICAL_THRESHOLD" ]; then
    notify-send -a "Low battery" -i "/home/yaros/.config/dunst/low.png" -u critical "charge" "CHARGE NOW (${BATTERY_LEVEL}% left)"
    exit
fi

if [ "$BATTERY_STATUS" == "Discharging" ] && [ "$BATTERY_LEVEL" -le "$THRESHOLD" ]; then
    notify-send -a "Low battery" -i "/home/yaros/.config/dunst/battery-status.png" "charge" "Low battery (${BATTERY_LEVEL}% left)"
fi