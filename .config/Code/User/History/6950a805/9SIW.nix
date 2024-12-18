{ config, pkgs, inputs, ... }:

{
  imports = [
    ./hyprland/hyprland.nix
    ./gtk/gtk.nix
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

  dconf.enable = true;
  dconf.settings = {
    "org/virt-manager/virt-manager/connections" = {
      autoconnect = ["qemu:///system"];
      uris = ["qemu:///system"];
    };
  };

  programs.home-manager.enable = true;
}