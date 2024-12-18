{ config, pkgs, inputs, ... }:

{
  gtk = {
	enable = true;
    theme = {
      name = "Material-Black";
      package = pkgs.material-black-colors;
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
}