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

    #plugins = [
    #  inputs.Hyprspace.packages.${pkgs.system}.Hyprspace
    #];

    settings = {
      
      source = "~/.cache/wal/colors-hyprland.conf";
      monitor = ",preferred,auto,1";

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

      
    };
  };

  programs.home-manager.enable = true;
}