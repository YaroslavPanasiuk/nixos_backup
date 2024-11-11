#!/bin/sh

readarray -t processes < <(ps aux | grep "/bin/sh /home/yaros/.config/waybar/post_setting.sh")
for pid in "${processes[@]}"; do
  echo $pid
  #kill $pid
done

query=$(swww query)
path="${query#*/}"
wpg -s "/$path"
wal -i "/$path"
#~/.config/waybar/restart_thunar.sh 
#echo "set waybar"
if pidof -qx "rofi"; then
 	pkill rofi
 	rofi -show drun -config ~/.config/wofi/config.rasi # && echo "set rofi"
fi
cp ~/.cache/wal/dunstrc ~/.config/dunst 
cp ~/.cache/wal/colors-sddm.conf ~/shared/Projects/sddm-sugar-dark/theme.conf
cp "/$path" ~/shared/Projects/sddm-sugar-dark/Background.jpg
pkill dunst 
~/.config/waybar/update_telegram.sh
~/Documents/set_welcome.sh
~/Documents/push_sddm.sh
~/Documents/rebuild.sh
exit
