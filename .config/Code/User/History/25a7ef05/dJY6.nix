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
          height = 30;
          modules-left = [ ];
          modules-center = [ ];
          modules-right = [ ];
        };
      }
    ];
  };
}