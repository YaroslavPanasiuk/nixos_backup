#!/bin/sh

# Define the low battery LOW_threshold (in percentage)
HIGH_THRESHOLD=80
LOW_THRESHOLD=20
CRITICAL_LOW_THRESHOLD=10
notify-send -a "Low battery" -i "/home/yaros/.config/dunst/power.png" -u low "charge" "Stop"
# Get the current battery level
last_notofocation=tail -n 1 /path/to/your/file.txt
BATTERY_LEVEL=$(cat /sys/class/power_supply/BAT0/capacity)
BATTERY_STATUS=$(cat /sys/class/power_supply/BAT0/status)

# Check if the battery is discharging and below the LOW_threshold
if [ "$BATTERY_STATUS" == "Charging" ] && [ "$BATTERY_LEVEL" -ge "$HIGH_THRESHOLD" ] && [ "$last_notofocation" != "HIGH_THRESHOLD" ]; then
    notify-send -a "Low battery" -i "/home/yaros/.config/dunst/power.png" -u low "charge" "Stop charging to extend battery life (${BATTERY_LEVEL}% charged)"
    echo "HIGH_THRESHOLD" >> /home/yaros/Documents/battery_notifications.txt
    exit
fi

if [ "$BATTERY_STATUS" == "Discharging" ] && [ "$BATTERY_LEVEL" -le "$CRITICAL_LOW_THRESHOLD" ] && [ "$last_notofocation" != "CRITICAL_LOW_THRESHOLD" ]; then
    notify-send -a "Low battery" -i "/home/yaros/.config/dunst/low.png" -u critical "charge" "CHARGE NOW (${BATTERY_LEVEL}% left)"
    echo "CRITICAL_LOW_THRESHOLD" >> /home/yaros/Documents/battery_notifications.txt
    exit
fi

if [ "$BATTERY_STATUS" == "Discharging" ] && [ "$BATTERY_LEVEL" -le "$LOW_THRESHOLD" ] && [ "$last_notofocation" != "LOW_THRESHOLD" ]; then
    echo "LOW_THRESHOLD" >> /home/yaros/Documents/battery_notifications.txt
    notify-send -a "Low battery" -i "/home/yaros/.config/dunst/battery-status.png" "charge" "Low battery (${BATTERY_LEVEL}% left)"
fi
