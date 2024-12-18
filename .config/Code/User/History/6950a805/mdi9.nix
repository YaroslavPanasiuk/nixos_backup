{ config, pkgs, inputs, ... }:

{
  imports = [
    ./home-manager/hyprland/hyprland.nix
    ./home-manager/gtk.nix
    #./home-manager/firefox.nix
  ];

  nixpkgs = {
    config = {
      allowUnfree = true;
      allowUnfreePredicate = (_: true);
    };
  };

  home = {
    username = "yaros";
    stateVersion = "24.11";
    homeDirectory = "/home/yaros";
    packages = with pkgs;[
      davinci-resolve
    ];
  };

  dconf = {
    enable = true;
    settings = {
      "org/virt-manager/virt-manager/connections" = {
        autoconnect = ["qemu:///system"];
        uris = ["qemu:///system"];
      };
    };
  };

  programs.home-manager.enable = true;
  programs.waybar = {
    enable = true;
    style = (builtins.readFile ../sources/waybar.css);
    settings = [
      {
        mainBar = {
          layer = "top";
          position = "top";
          height = 30;
          modules-left = [ ];
          modules-center = [ ];
          modules-right = [ ];
        };
      }
    ];
  };
}