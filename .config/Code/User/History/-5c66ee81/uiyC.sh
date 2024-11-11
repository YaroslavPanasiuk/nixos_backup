dunstify -a "camera" "Connecting Phone camera..."
adb kill-server
adb start-server
hotspot=$(adb shell ip -f inet addr show wlan1 | grep "inet " | awk '{print $2}' | cut -d/ -f1)
ip=$(adb shell ip -f inet addr show wlan0 | grep "inet " | awk '{print $2}' | cut -d/ -f1)
if [ -z "$ip" ]; then
    ip=$hotspot
fi
if [ -n "$ip" ]; then
    adb disconnect "$ip:5555"
    adb tcpip 5555
    sleep 2
    connected=$(adb connect "$ip:5555" | awk '{print $1}')
    echo "$connected"
    if [ "$connected" = "connected" ]; then 
        dunstify -a "camera" "Connected over wifi" 
        scrcpy -e --video-encoder OMX.google.h264.encoder --video-source=camera --camera-facing=back --camera-ar=16:9 --v4l2-sink=/dev/video0
    else
        dunstify -a "camera" "Unable to connect over wifi"
        scrcpy -d --video-encoder OMX.google.h264.encoder --video-source=camera --camera-facing=back --camera-ar=16:9 --v4l2-sink=/dev/video0
    fi
else 
    dunstify -a "camera" "Unable to connect over wifi"
    scrcpy -d --video-encoder OMX.google.h264.encoder --video-source=camera --camera-facing=back --camera-ar=16:9 --v4l2-sink=/dev/video0
fi
adb kill-server
