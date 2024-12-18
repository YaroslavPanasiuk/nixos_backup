#!/bin/sh

waydroid session stop
echo 1 | sudo -S systemctl stop waydroid-container
pkill Waydroid