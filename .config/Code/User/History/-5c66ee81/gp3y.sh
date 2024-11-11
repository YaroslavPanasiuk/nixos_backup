hotspot="192.168.81.182"
ip=$(adb shell ip -f inet addr show wlan1 | grep "inet " | awk '{print $2}' | cut -d/ -f1)
if [$ip -eq 'Device "wlan1" does not exist.']; then
    echo "true"
fi
echo "$ip:5555"
#adb disconnect "$ip:5555"
#adb tcpip 5555
#sleep 2
#adb connect "$ip:5555"
#adb disconnect 6d301a14
#scrcpy --video-encoder OMX.google.h264.encoder --video-source=camera --camera-facing=back --camera-ar=16:9 --v4l2-sink=/dev/video0