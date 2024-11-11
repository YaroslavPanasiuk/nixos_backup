#!/bin/sh
rm -rf /home/yaros/backup
mkdir /home/yaros/backup
cp /etc/nixos/configuration.nix /home/yaros/backup
cp -R /home/yaros/.config /home/yaros/backup
cp -R /home/yaros/Documents /home/yaros/backup