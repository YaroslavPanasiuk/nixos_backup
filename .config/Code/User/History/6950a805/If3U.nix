{ config, pkgs, inputs, ... }:

{
  nixpkgs = {
    config = {
      allowUnfree = true;
      allowUnfreePredicate = (_: true);
    };
  };

  home.username = "yaros";
  home.stateVersion = "25.05";
  home.homeDirectory = "/home/yaros";
  home.packages = with pkgs;[
    davinci-resolve
  ];

  gtk = {
	  enable = true;
    theme = {
      name = "Gruvbox-Dark";
      package = pkgs.gruvbox-gtk-theme;
    };
	  cursorTheme = {
		  name = "volantes_cursors";
		  package = pkgs.volantes-cursors;
	  };
	  iconTheme = {
		  name = "kora";
		  package = pkgs.kora-icon-theme;
	  };
    gtk3.extraConfig.gtk-application-prefer-dark-theme = 1;
    gtk4.extraConfig.gtk-application-prefer-dark-theme = 1;
  };

  dconf.enable = true;
  dconf.settings = {
    "org/virt-manager/virt-manager/connections" = {
      autoconnect = ["qemu:///system"];
      uris = ["qemu:///system"];
    };
  };

  wayland.windowManager.hyprland = {
    enable = true;

    plugins = [
      inputs.Hyprspace.packages.${pkgs.system}.Hyprspace
    ];

    settings = {
      
      source = "~/.cache/wal/colors-hyprland.conf";
      monitor = ",preferred,auto,1";
      "source" = "~/.cache/wal/colors-hyprland.conf";

      "$terminal" = "kitty";
      "$fileManager" = "thunar";
      "$menu" = "~/Documents/layout_msg.sh us && rofi -show drun -config ~/.config/wofi/config.rasi";
      "$browser" = "firefox";

      exec-once = [
        "swww init"
        "sleep 2 && waybar"
        "dunst"
        "hyprctl setcursor volantes_cursors 24"
        "lxqt-policykit-agent"
        "sleep 3 && nm-applet"
        "sleep 2 && blueman applet"
        "systemctl --user start battery_reset"
        "systemctl --user start battery"
      ];

      env = [
        "XCURSOR_SIZE,24"
        "HYPRCURSOR_SIZE,24"
      ];

      general = { 
        gaps_in = 2;
        gaps_out = 3;
        border_size = 3;
        col.active_border = "$color1 $color2 45deg";
        col.inactive_border = "$color15";
        resize_on_border = "false" ;
        allow_tearing = "false";
        layout = "dwindle";
      };

      gestures = {
          workspace_swipe = "true";
          workspace_swipe_distance = 100;
          workspace_swipe_min_speed_to_force = 5;
          workspace_swipe_min_fingers = "true";
          workspace_swipe_cancel_ratio = "0.1";
          workspace_swipe_touch = "true";
          workspace_swipe_invert = "true";
      };

      device = {
        name = "epic-mouse-v1";
        sensitivity = "-0.5";
      };  

      cursor = {
        no_warps = "true";
      };

      input = {
        kb_layout = "us, ua";
        follow_mouse = 1;
        sensitivity = 0;
        touchpad = {
          natural_scroll = "true";
        };
      };
      
      decoration = {
        rounding = 7;
        active_opacity = "1.0";
        inactive_opacity = "0.85";
        blur = {
          enabled = "true";
          size = 8;
          passes = 1;
          brightness = 1;
        };
      };

    };
  };

  programs.home-manager.enable = true;
}