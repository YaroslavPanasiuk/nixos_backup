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

          "custom/wallpaper_change" = {
            "format" = "󰸉";
            "on-click" = "~/.config/waybar/wallpaper_change.sh";
            "on-click-right" = "~/Documents/wallp-rofi.sh";
            "tooltip" = false;
          };
          
          "wlr/taskbar" = {
            "format" = "{icon}";
            "max-length" = 15;
            "icon-size" = 20;
            "tooltip-format" = "{title}";
            "on-click" = "activate";
            "on-click-middle" = "close";
            "on-click-right" = "close";
            "on-update" = "~/.config/waybar/kill_taskbar.sh";
          };


          "cpu" = {
            "format" = "<span font_family='Sans' size='x-large'> </span><span font_family='Sans' size='small'>{usage}%</span>";
            "tooltip" = false;
            "on-click" = "gnome-system-monitor";
          };
          "memory" = {
            "format" = "<span font_family='Sans' size='large'></span>   <span font_family='Sans' size='small'>{}%</span>";
            "tooltip-format" = "Memory Usage {}%";
            "on-click" = "gnome-system-monitor";
          };
          "temperature" = {
            "format" = "<span font_family='Sans' size='large'>{icon}</span> <span font_family='Sans' size='small'>{temperatureC}°C</span>";
            "format-icons" = ''["", "", ""]'';
            "on-click" = "gnome-system-monitor";
          };

          "custom/windows" = {
            "format" = "󰖳";
            "on-click" = "~/Documents/start_windows.sh";
            "on-click-right" = "~/Documents/stop_windows.sh";
            "tooltip" = "false";
          };
          "custom/android" = {
            "format" = "";
            "on-click" = "~/Documents/start_waydroid.sh";
            "on-click-right" = "~/Documents/stop_waydroid.sh";
            "tooltip" = "false";
          };
          "custom/macos" = {
            "format" = "";
            "on-click" = "~/Documents/start_macos.sh ";
            "on-click-right" = "pkill qemu";
            "tooltip" = "false";
          };

        };
      }
    ];
  };
}