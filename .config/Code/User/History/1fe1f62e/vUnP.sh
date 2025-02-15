cd ~/shared/Wallpapers
~/Documents/layout_msg.sh us
image=$(for a in *.jpg; do echo -en "$a\0icon\x1f$a\n" ; done | sort -n | rofi -dmenu -config ~/.config/wofi/wallp-config.rasi)
echo $image
swww img ~/shared/Wallpapers/$image --transition-fps 60 --transition-type grow --transition-pos 20,1060  --transition-duration 3   
~/.config/waybar/post_setting.sh 
if [[ "$image" == *"[GIF]"* ]]; then
    swww img ~/shared/Wallpapers/${image%%.*}.gif
fi
