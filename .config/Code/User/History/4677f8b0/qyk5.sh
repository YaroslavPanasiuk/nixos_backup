#!/bin/sh

for video in *.mp4; do
    filename="${video%.*}"
    ffmpeg -i "$video" -vf "select=eq(n\,0)" -q:v 2 -frames:v 1 "${filename}.jpg"
done
