#!/bin/sh

#cd ~/shared/Projects/sddm-sugar-dark
#git add .
#git commit -m "wallp change"
#git push -f origin master


out=$(nix-prefetch-git https://github.com/YaroslavPanasiuk/sddm-panas.git)
echo $out | grep rev
echo $out | grep sha256