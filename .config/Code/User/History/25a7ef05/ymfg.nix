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
          modules-left = [ ];
          modules-center = [ ];
          modules-right = [ ];
        };
      }
    ];
  };
}