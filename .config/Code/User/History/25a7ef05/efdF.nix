{ config, pkgs, inputs, ... }:

{ 
  programs.waybar = {
    enable = true;
    style = (builtins.readFile ./waybar.css);
    settings = [
      {
          "layer" = "top";
          "position" = "top";
          "spacing" = 5;
          "margin-top" = 3;
          "reload_style_on_change" = true;
          "height" = 30;
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
            "format-icons" = ["" "" ""];
            "on-click" = "gnome-system-monitor";
          };

          "custom/windows" = {
            "format" = "󰖳";
            "on-click" = "~/Documents/start_windows.sh";
            "on-click-right" = "~/Documents/stop_windows.sh";
            "tooltip" = false;
          };
          "custom/android" = {
            "format" = "";
            "on-click" = "~/Documents/start_waydroid.sh";
            "on-click-right" = "~/Documents/stop_waydroid.sh";
            "tooltip" = false;
          };
          "custom/macos" = {
            "format" = "";
            "on-click" = "~/Documents/start_macos.sh ";
            "on-click-right" = "pkill qemu";
            "tooltip" = false;
          };

          "clock#1" = {
            "format" = "{:%a}";
            "tooltip" = false;
            "on-click" = "obsidian";

          };
          "clock#2" = {
            "format" = "{:%d.%m}";
            "tooltip-format" = "<big>{:%Y %B}</big>\n<tt><small>{calendar}</small></tt>";
            "on-click" = "~/.config/waybar/open_calendar.sh";
          };
          "clock#3" = {
            "format" = "{:%H:%M}";
            "tooltip" = false;
            "on-click" = "gnome-clocks";
          };
          "hyprland/workspaces" = {
            "format" = "{name}";
          };

          "tray" = {
            "icon-size" = 21;
            "spacing" = 8;
            "tooltip" = false;
          };

          "pulseaudio" = {
            "format" = "<span font_family='Sans' size='x-large'>{icon}</span> <span font_family='Sans' size='small'>{volume}%</span>";
            "format-bluetooth" = "{volume}% {icon} {format_source}";
            "format-bluetooth-muted" = " {icon} {format_source}";
            "format-muted" = "<span font_family='Sans' size='x-large'>󰖁</span> <span font_family='Sans' size='small'>{volume}%</span>";
            "format-source" = "{volume}% ";
            "format-source-muted" = " ";
            "format-icons" = {
                "headphone" = "󰋋 ";
                "hands-free" = " ";
                "headset" = " ";
                "phone" = " ";
                "portable" = " ";
                "car" = " ";
                "default" = ["󰕿" "󰖀" "󰕾"];
            };
            "on-click" = "pavucontrol";
            "on-click-right" = "~/Documents/volume.sh mute";
          };

          "backlight" = {
            // "device" = "acpi_video1";
            "format" = "<span font_family='Sans' size='large'>{icon}</span><span font_family='Sans' size='small'>{percent}%</span>";
            "on-click" = "~/.config/waybar/redshift.sh";
            "tooltip-format" = "Brigthness {percent}%";
            "format-icons" = ["󰃞 " "󰃞 " "󰃟 " "󰃝 " "󰃠 "];
          };
          "battery" = {
            //"full-at" = 80;
            //"design-capacity" = true;
            "states" = {
            "good" = 95;
                "warning" = 30;
                "critical" = 15;
            };
            "interval" = 1;
            "format" = "<span font_family='Sans' size='large'>{icon}</span><span font_family='Sans' size='small'>{capacity}%</span>";
            "format-full" = "<span font_family='Sans' size='large'>{icon}</span><span font_family='Sans' size='small'>{capacity}%</span>";
            "format-charging" = "<span font_family='Sans' size='medium'></span> <span font_family='Sans' size='small'>{capacity}%</span>";
            "format-plugged" = "<span font_family='Sans' size='medium'></span> <span font_family='Sans' size='small'>{capacity}%</span>";
            "format-good" = "<span font_family='Sans' size='large'>{icon}</span><span font_family='Sans' size='small'>{capacity}%</span>";
            "format-icons" = [" " " " " " " " " "];
            "on-click" = "gnome-power-statistics";
          };
          "power-profiles-daemon" = {
            "format" = "{icon}";
            "tooltip-format" = "Power profile: {profile}\nDriver: {driver}";
            "tooltip" = true;
            "interval" = 10;
            "format-icons" = {
                "default" = "";
                "performance" = "";
                "balanced" = "";
                "power-saver" = "󰌪";
            };
          };
        
      }
    ];
  };
}