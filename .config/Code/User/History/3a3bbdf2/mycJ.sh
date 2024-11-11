#!/bin/sh

#cd ~/shared/Projects/sddm-sugar-dark
#git add .
#git commit -m "wallp change"
#git push -f origin master


out=$(nix-prefetch-git https://github.com/YaroslavPanasiuk/sddm-panas.git)
echo $out | awk '{print substr($5, 1, length($0)-1)}'
echo $out | awk '{print substr($11, 1, length($0)-1)}'