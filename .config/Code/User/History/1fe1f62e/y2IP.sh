cd ~/Documents/Wallpapers
for a in *.jpg; do echo -en "$a\0icon\x1f$a\n" ; done | rofi -dmenu -config /home/yaros/.config/wofi/wallp-config.rasi