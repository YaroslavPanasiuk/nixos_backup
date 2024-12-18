{ config, pkgs, inputs, ... }:

{
  imports = [
    ./hyprland/hyprland.nix
  ];

  nixpkgs = {
    config = {
      allowUnfree = true;
      allowUnfreePredicate = (_: true);
    };
  };

  home.username = "yaros";
  home.stateVersion = "24.11";
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

  programs.home-manager.enable = true;
}