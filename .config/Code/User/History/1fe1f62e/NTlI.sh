cd ~/shared/Wallpapers
image=$(for a in *.jpg; do echo -en "$a\0icon\x1f$a\n" ; done | sort -n | rofi -dmenu -config ~/.config/wofi/wallp-config.rasi)
echo $image
if [ "$image" == *"[GIF]"* ]; then
    echo "yes"
    swww img ~/shared/Wallpapers/${image%%.*}.gif --transition-fps 60 --transition-type grow --transition-pos 20,1060  --transition-duration 3
else
    echo "no"
    swww img ~/shared/Wallpapers/$image --transition-fps 60 --transition-type grow --transition-pos 20,1060  --transition-duration 3
fi
~/.config/waybar/post_setting.sh 


for a in *.jpg *.gif; do if [ "${a##*.}" = "gif" ]; then echo -en "${a%.*}.jpg\0icon\x1f${a%.*}.jpg\n" ; fi; echo -en "$a\0icon\x1f$a\n" ; done