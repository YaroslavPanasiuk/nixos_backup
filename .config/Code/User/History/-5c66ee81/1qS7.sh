adb kill server
adb start server
hotspot=$(adb shell ip -f inet addr show wlan1 | grep "inet " | awk '{print $2}' | cut -d/ -f1)
ip=$(adb shell ip -f inet addr show wlan0 | grep "inet " | awk '{print $2}' | cut -d/ -f1)
if [$ip -eq ""]; then
    ip=$hotspot
fi
adb devices
echo "$ip"
if [ $ip != "" ]; then
    adb disconnect "$ip:5555"
    adb tcpip 5555
    sleep 2
    adb connect "$ip:5555"
    scrcpy -e --video-encoder OMX.google.h264.encoder --video-source=camera --camera-facing=back --camera-ar=16:9 --v4l2-sink=/dev/video0
    dunstify -a "camera" "Connected over wifi"    
else
    dunstify -a "camera" "Unable to connect over wifi"
    scrcpy -d --video-encoder OMX.google.h264.encoder --video-source=camera --camera-facing=back --camera-ar=16:9 --v4l2-sink=/dev/video0
fi
