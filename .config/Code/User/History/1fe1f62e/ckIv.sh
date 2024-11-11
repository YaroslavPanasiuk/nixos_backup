cd ~/Documents/Wallpapers
image=$(for a in *.jpg; do echo -en "$a\0icon\x1f$a\n" ; done | rofi -dmenu -config /home/yaros/.config/wofi/wallp-config.rasi)
swww img ~/Documents/Wallpapers/$image --transition-fps 60 --transition-type grow --transition-pos 20,1060  --transition-duration 3
/home/yaros/.config/waybar/post_setting.sh 
