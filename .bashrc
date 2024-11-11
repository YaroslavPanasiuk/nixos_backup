alias restart='echo 1 | sudo -S reboot -h now'
alias poweroff='echo 1 | sudo -S shutdown -h now'
wallp(){

	if [ -n "$1" ]; then
		swww img "/home/yaros/shared/Wallpapers/$1.jpg" --transition-fps 60 --transition-type outer --transition-pos 20,1060  --transition-duration 2
		wal -i "/home/yaros/shared/Wallpapers/$1.jpg"
		/home/yaros/.config/waybar/post_setting.sh
	else
		/home/yaros/.config/waybar/wallpaper_change.sh
	fi
	
}
(cat ~/.cache/wal/sequences &)
