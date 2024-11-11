hotspot=$(adb shell ip -f inet addr show wlan0 | grep "inet " | awk '{print $2}' | cut -d/ -f1)
ip=$(adb shell ip -f inet addr show wlan0 | grep "inet " | awk '{print $2}' | cut -d/ -f1)
if [$ip -eq ""]; then
    ip=$hotspot
fi
if [$ip != ""]; then
    adb disconnect "$ip:5555"
    adb tcpip 5555
    sleep 2
    adb connect "$ip:5555"
    adb disconnect 6d301a14
fi
scrcpy --video-encoder OMX.google.h264.encoder --video-source=camera --camera-facing=back --camera-ar=16:9 --v4l2-sink=/dev/video0