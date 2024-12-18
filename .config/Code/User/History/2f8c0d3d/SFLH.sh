#!/bin/sh

current_pid=$$
readarray -t processes < <(ps aux | grep "/bin/sh /home/yaros/.config/waybar/post_setting.sh" | awk '{print $2}')
for pid in "${processes[@]}"; do
	if [ $current_pid != $pid ]; then
		kill -9 $pid
	fi
done
pkill .gnome-system-m
pkill nix-build
#kill "${processes[-1]}"

query=$(swww query)
path="${query#*/}"
extension="${path##*.}"
filename=$(basename "$path")
filename="${filename%.*}"
echo "$extension"
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
if [[ "$extension" == "gif" ]]; then
	cp "/'${path%.*}'.jpg" ~/shared/Projects/sddm-sugar-dark/Background.jpg
	cp "/'${path%.*}'.jpg" ~/shared/CurrentWallpaper/Background1.jpg
	cp "/'${path%.*}'.jpg" ~/shared/CurrentWallpaper/Background2.jpg
else
	cp "/$path" ~/shared/Projects/sddm-sugar-dark/Background.jpg
	cp "/$path" ~/shared/CurrentWallpaper/Background1.jpg
	cp "/$path" ~/shared/CurrentWallpaper/Background2.jpg
fi

pkill dunst 
~/.config/waybar/update_telegram.sh
~/Documents/set_welcome.sh
#~/Documents/push_sddm.sh
~/Documents/rebuild.sh
exit
