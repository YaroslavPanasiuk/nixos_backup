adb disconnect 192.168.1.2:5555
adb tcpip 5555
sleep 2
adb connect 192.168.1.2:5555
adb disconnect 6d301a14
scrcpy --video-encoder OMX.google.h264.encoder --video-source=camera --camera-facing=back --camera-ar=16:9 --v4l2-sink=/dev/video0