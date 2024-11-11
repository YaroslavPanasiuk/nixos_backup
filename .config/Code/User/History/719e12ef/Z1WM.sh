#!/bin/sh

# Define the low battery LOW_threshold (in percentage)
HIGH_THRESHOLD=80
LOW_THRESHOLD=80
CRITICAL_LOW_THRESHOLD=10
# Get the current battery level
last_notofocation=$(tail -n 1 /home/yaros/Documents/battery_notifications)
echo $last_notofocation
BATTERY_LEVEL=$(cat /sys/class/power_supply/BAT0/capacity)
BATTERY_STATUS=$(cat /sys/class/power_supply/BAT0/status)

# Check if the battery is discharging and below the LOW_threshold
if [ "$BATTERY_STATUS" == "Charging" ] && [ "$BATTERY_LEVEL" -ge "$HIGH_THRESHOLD" ] && [ "$last_notofocation" != "HIGH_THRESHOLD" ]; then
    notify-send -a "Low battery" -i "/home/yaros/.config/dunst/power.png" "charge" "Stop charging to extend battery life (${BATTERY_LEVEL}% charged)"
    sleep 5
    echo "HIGH_THRESHOLD" >> /home/yaros/Documents/battery_notifications
    exit
fi

if [ "$BATTERY_STATUS" == "Discharging" ] && [ "$BATTERY_LEVEL" -le "$CRITICAL_LOW_THRESHOLD" ] && [ "$last_notofocation" != "CRITICAL_LOW_THRESHOLD" ]; then
    notify-send -a "Low battery" -i "/home/yaros/.config/dunst/low.png" -u critical "charge" "CHARGE NOW (${BATTERY_LEVEL}% left)"
    sleep 5
    echo "CRITICAL_LOW_THRESHOLD" >> /home/yaros/Documents/battery_notifications
    exit
fi

if [ "$BATTERY_STATUS" == "Discharging" ] && [ "$BATTERY_LEVEL" -le "$LOW_THRESHOLD" ] && [ "$last_notofocation" != "LOW_THRESHOLD" ]; then
    notify-send -a "Low battery" -i "/home/yaros/.config/dunst/battery-status.png" "charge" "Low battery (${BATTERY_LEVEL}% left)"
    sleep 5
    echo "LOW_THRESHOLD" >> /home/yaros/Documents/battery_notifications
fi
