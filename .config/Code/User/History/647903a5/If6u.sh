#!/bin/sh


count=$(ls -1 /home/yaros/shared/Wallpapers/*.gif 2>/dev/null | wc -l)
echo $count
ffmpeg -i /home/yaros/Downloads/nature-in-minecraft.1920x1080.mp4 -vf "fps=15,scale=1920:-1:flags=lanczos" -c:v gif "/home/yaros/shared/Wallpapers/${count}.gif"
