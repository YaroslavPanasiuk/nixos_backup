#!/bin/sh

#cd ~/shared/Projects/sddm-sugar-dark
#git add .
#git commit -m "wallp change"
#git push -f origin master


read var1 var2 var3 <<< $(nix-prefetch-git https://github.com/YaroslavPanasiuk/sddm-panas.git | grep '"rev": \|"sha256": ')

echo "tatata"
echo $var1
echo $var2
echo $var3