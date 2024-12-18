{ config, pkgs, inputs, ... }:

{ 
  programs.waybar = {
    enable = true;
    style = (builtins.readFile ./waybar.css);
    settings = [
      {
        mainBar = {
          layer = "top";
          position = "top";
          spacing = 5;
          margin-top = 3;
          reload_style_on_change = "true";
          height = 30;
          modules-left = [
            "custom/wallpaper_change"
            "wlr/taskbar"
            "cpu"
            "memory"
            "temperature"
            "custom/windows"
            #"custom/macos"
            #"custom/android"
           ];
          modules-center = [ 
            "clock#1"
            "clock#2"
            "hyprland/workspaces"
            "clock#3"
          ];
          modules-right = [ 
            "tray"
            "custom/left-arrow-dark"
            "pulseaudio"
            "backlight"
            "battery"
            "power-profiles-daemon"
          ];
        };
      }
    ];
  };
}