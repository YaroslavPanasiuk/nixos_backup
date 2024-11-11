#!/bin/bash
profile=$(powerprofilesctl get)

case $profile in
    "performance")
        icon="~/.config/waybar/icons/performance.png"
        ;;
    "balanced")
        icon="~/.config/waybar/icons/performance.png"
        ;;
    "power-saver")
        icon="~/.config/waybar/icons/performance.png"
        ;;
esac

echo "1"

