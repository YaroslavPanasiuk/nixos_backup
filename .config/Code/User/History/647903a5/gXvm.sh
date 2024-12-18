#!/bin/sh


count=$(ls -1 /home/yaros/shared/Wallpapers/*.gif 2>/dev/null | wc -l)
echo $count
ffmpeg -i $1 -vf "fps=15,scale=1920:-1:flags=lanczos" -c:v gif "/home/yaros/shared/Wallpapers/${count}.gif"
