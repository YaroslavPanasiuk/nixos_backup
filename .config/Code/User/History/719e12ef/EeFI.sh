#!/bin/sh

# Define the low battery LOW_threshold (in percentage)
HIGH_THRESHOLD=80
LOW_THRESHOLD=20
CRITICAL_LOW_THRESHOLD=10

# Get the current battery level
BATTERY_LEVEL=$(cat /sys/class/power_supply/BAT0/capacity)
BATTERY_STATUS=$(cat /sys/class/power_supply/BAT0/status)

# Check if the battery is discharging and below the LOW_threshold
if [ "$BATTERY_STATUS" == "Charging" ] && [ "$BATTERY_LEVEL" -ge "$HIGH_THRESHOLD" ]; then
    notify-send -a "Low battery" -i "~/.config/dunst/power.png" -u low "charge" "Stop charging to extend battery life (${BATTERY_LEVEL}% charged)"
    exit
fi

if [ "$BATTERY_STATUS" == "Discharging" ] && [ "$BATTERY_LEVEL" -le "$CRITICAL_LOW_THRESHOLD" ]; then
    notify-send -a "Low battery" -i "~/.config/dunst/low.png" -u critical "charge" "CHARGE NOW (${BATTERY_LEVEL}% left)"
    exit
fi

if [ "$BATTERY_STATUS" == "Discharging" ] && [ "$BATTERY_LEVEL" -le "$LOW_THRESHOLD" ]; then
    notify-send -a "Low battery" -i "~/.config/dunst/battery-status.png" "charge" "Low battery (${BATTERY_LEVEL}% left)"
fi