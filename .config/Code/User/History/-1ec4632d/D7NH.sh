#!/bin/sh

rm -rf /home/yaros/backup
mkdir -m 777 /home/yaros/backup
cp /etc/nixos/configuration.nix /home/yaros/backup
cp -rf /home/yaros/.config /home/yaros/backup
cp -rf /home/yaros/Documents /home/yaros/backup
cd /home/yaros/backup
git init
git add .
git commit -m "message"
git add origin git@github.com:YaroslavPanasiuk/nixos_backup.git
git push origin master