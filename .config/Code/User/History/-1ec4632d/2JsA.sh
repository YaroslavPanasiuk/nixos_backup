#!/bin/sh

rm -rf ~/backup
mkdir -m 777 ~/backup
cp ~/.bashrc ~/backup
cp -rf /etc/nixos ~/backup
cp -rf ~/.config ~/backup
cp -rf ~/Documents ~/backup
cd ~/backup
git init
git add .
git commit -m "message"
git remote add origin git@github.com:YaroslavPanasiuk/nixos_backup.git
git push -f origin master