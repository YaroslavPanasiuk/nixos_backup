#!/bin/sh
rm -rf /home/yaros/backup
mkdir /home/yaros/backup
cp /etc/nixos/configuration.nix /home/yaros/backup
cp -rf /home/yaros/.config /home/yaros/backup
cp -rf /home/yaros/Documents /home/yaros/backup